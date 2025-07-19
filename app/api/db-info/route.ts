import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Temporary mock response until database info is properly implemented with Supabase
    console.log("Database info endpoint called")

    const mockTables = [
      { table_name: "users" },
      { table_name: "strands" },
      { table_name: "essential_learning_outcomes" },
      { table_name: "specific_curriculum_outcomes" },
      { table_name: "assessment_strategies" },
      { table_name: "learning_strategies" },
      { table_name: "resources" },
      { table_name: "teacher_content" },
      { table_name: "settings" },
      { table_name: "lesson_plans" },
      { table_name: "multigrade_plans" },
      { table_name: "cross_curricular_plans" },
      { table_name: "quizzes" },
      { table_name: "schedules" },
      { table_name: "lesson_reflections" }
    ]

    const mockUserColumns = [
      { column_name: "id", data_type: "integer" },
      { column_name: "name", data_type: "character varying" },
      { column_name: "email", data_type: "character varying" },
      { column_name: "password_hash", data_type: "character varying" },
      { column_name: "role", data_type: "character varying" },
      { column_name: "created_at", data_type: "timestamp with time zone" },
      { column_name: "updated_at", data_type: "timestamp with time zone" }
    ]

    return NextResponse.json({
      tables: mockTables,
      userColumns: mockUserColumns,
      message: "Database info temporarily using mock data - will be implemented with Supabase",
    })
  } catch (error) {
    console.error("Error fetching database information:", error)
    return NextResponse.json({ error: "Failed to fetch database information" }, { status: 500 })
  }
}
