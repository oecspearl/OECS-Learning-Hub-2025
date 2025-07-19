import { NextResponse } from "next/server"
import { sql } from "@/lib/db"

export async function GET() {
  try {
    if (!sql) {
      return NextResponse.json({ error: "Database connection not available" }, { status: 500 })
    }

    // Query to list all tables in the database
    const tables = await sql(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      ORDER BY table_name
    `)

    // Query to get the column information for the User table (if it exists)
    let userColumns = []
    try {
      userColumns = await sql(`
        SELECT column_name, data_type 
        FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = 'User'
        ORDER BY ordinal_position
      `)
    } catch (error) {
      console.error("Error fetching User table columns:", error)
    }

    return NextResponse.json({
      tables,
      userColumns,
      message: "This endpoint helps diagnose database issues by showing available tables",
    })
  } catch (error) {
    console.error("Error fetching database information:", error)
    return NextResponse.json({ error: "Failed to fetch database information" }, { status: 500 })
  }
}
