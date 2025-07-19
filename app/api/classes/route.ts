import { NextResponse } from "next/server"
import { executeQuery } from "@/lib/db"

export async function GET() {
  try {
    const classes = await executeQuery(`
      SELECT c.id, c.name, c.gradeLevel, c.schoolYear, c.description, 
             u.name as teacherName
      FROM "Class" c
      JOIN "User" u ON c.teacherId = u.id
      ORDER BY c.gradeLevel, c.name
    `)

    return NextResponse.json({ classes })
  } catch (error) {
    console.error("Error fetching classes:", error)
    return NextResponse.json({ error: "Failed to fetch classes" }, { status: 500 })
  }
}
