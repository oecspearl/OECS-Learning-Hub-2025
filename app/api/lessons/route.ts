import { NextResponse } from "next/server"
import { executeQuery } from "@/lib/db"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const subjectId = searchParams.get("subjectId")
    const classId = searchParams.get("classId")

    let query = `
      SELECT l.id, l.title, l.description, l.objectives, l.status, l.scheduledFor,
             s.name as subjectName, u.name as unitName, c.name as className
      FROM "Lesson" l
      JOIN "Subject" s ON l.subjectId = s.id
      LEFT JOIN "Unit" u ON l.unitId = u.id
      LEFT JOIN "Class" c ON l.classId = c.id
      WHERE 1=1
    `

    const params: any[] = []

    if (subjectId) {
      query += ` AND l.subjectId = $${params.length + 1}`
      params.push(subjectId)
    }

    if (classId) {
      query += ` AND l.classId = $${params.length + 1}`
      params.push(classId)
    }

    query += ` ORDER BY l.scheduledFor DESC`

    const lessons = await executeQuery(query, params)

    return NextResponse.json({ lessons })
  } catch (error) {
    console.error("Error fetching lessons:", error)
    return NextResponse.json({ error: "Failed to fetch lessons" }, { status: 500 })
  }
}
