import { NextResponse } from "next/server"
import { executeQuery } from "@/lib/db"

export async function GET() {
  try {
    const subjects = await executeQuery(`
      SELECT id, name, description, gradeLevel, createdAt
      FROM "Subject"
      ORDER BY gradeLevel, name
    `)

    return NextResponse.json({ subjects })
  } catch (error) {
    console.error("Error fetching subjects:", error)
    return NextResponse.json({ error: "Failed to fetch subjects" }, { status: 500 })
  }
}
