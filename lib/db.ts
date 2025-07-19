// Re-export Supabase database functions
export { db, testDatabaseConnection } from './db-supabase'

// Import db for internal use
import { db } from './db-supabase'

// Export sql for raw queries (using Supabase's query builder)
export const sql = {
  // Placeholder for backward compatibility
  // In Supabase, we use the query builder instead of raw SQL
}

// Export eq for equality comparisons (using Supabase's eq function)
export const eq = (column: string, value: any) => ({ column, value })

// Helper function for settings
export async function findSettingByKey(key: string) {
  try {
    const setting = await db.settings.findFirst({ key })
    return setting
  } catch (error) {
    console.error("Error finding setting:", error)
    return null
  }
}

// Helper function to safely execute queries with error handling
export async function executeQuery(query: string, params: any[] = []) {
  try {
    // For Supabase, we'll use the query builder instead of raw SQL
    // This is a placeholder for backward compatibility
    console.warn("Raw SQL queries are not supported in Supabase. Use the query builder instead.")
    return []
  } catch (error) {
    console.error("Database query error:", error)
    throw new Error("Failed to execute database query: " + (error instanceof Error ? error.message : "Unknown error"))
  }
}
