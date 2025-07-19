import { sql } from "@/lib/db"

export async function inspectTable(tableName: string) {
  try {
    // Query to get column information for the specified table
    const columns = await sql`
      SELECT column_name, data_type, is_nullable
      FROM information_schema.columns
      WHERE table_name = ${tableName}
      ORDER BY ordinal_position
    `

    // Query to get constraint information
    const constraints = await sql`
      SELECT con.conname as constraint_name,
             con.contype as constraint_type,
             pg_get_constraintdef(con.oid) as constraint_definition
      FROM pg_constraint con
      JOIN pg_class rel ON rel.oid = con.conrelid
      JOIN pg_namespace nsp ON nsp.oid = rel.relnamespace
      WHERE rel.relname = ${tableName}
    `

    return {
      columns,
      constraints,
      exists: columns.length > 0,
    }
  } catch (error) {
    console.error(`Error inspecting table ${tableName}:`, error)
    return {
      columns: [],
      constraints: [],
      exists: false,
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}

export async function createOrUpdateTable(tableName: string, columnDefinitions: string[]) {
  try {
    // Check if table exists
    const { exists } = await inspectTable(tableName)

    if (!exists) {
      // Create table if it doesn't exist
      const createTableSQL = `
        CREATE TABLE ${tableName} (
          ${columnDefinitions.join(",\n          ")}
        )
      `
      await sql.query(createTableSQL)
      return { success: true, action: "created" }
    } else {
      // Table exists, check for missing columns
      const { columns } = await inspectTable(tableName)
      const existingColumns = columns.map((col: any) => col.column_name)

      // Parse column definitions to extract column names
      const definedColumns = columnDefinitions
        .map((def) => {
          const match = def.match(/^(\w+)\s+/)
          return match ? match[1] : null
        })
        .filter(Boolean)

      // Find columns that need to be added
      const missingColumns = definedColumns.filter((col) => !existingColumns.includes(col))

      if (missingColumns.length > 0) {
        // Add missing columns
        for (const colName of missingColumns) {
          const colDef = columnDefinitions.find((def) => def.startsWith(`${colName} `))
          if (colDef) {
            await sql.query(`ALTER TABLE ${tableName} ADD COLUMN ${colDef}`)
          }
        }
        return { success: true, action: "updated", addedColumns: missingColumns }
      }

      return { success: true, action: "unchanged" }
    }
  } catch (error) {
    console.error(`Error creating/updating table ${tableName}:`, error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}
