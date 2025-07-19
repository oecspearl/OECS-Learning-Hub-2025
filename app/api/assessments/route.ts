import { NextResponse } from "next/server"
import { executeQuery } from "@/lib/db"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const classId = searchParams.get("classId")
    const lessonId = searchParams.get("lessonId")

    let query = `
      SELECT a.id, a.title, a.description, a.type, a.totalPoints, a.dueDate,
             l.title as lessonTitle, c.name as className
      FROM "Assessment" a
      JOIN "Class" c ON a.classId = c.id
      LEFT JOIN "Lesson" l ON a.lessonId = l.id
      WHERE 1=1
    `

    const params: any[] = []

    if (classId) {
      query += ` AND a.classId = $${params.length + 1}`
      params.push(classId)
    }

    if (lessonId) {
      query += ` AND a.lessonId = $${params.length + 1}`
      params.push(lessonId)
    }

    query += ` ORDER BY a.dueDate DESC`

    const assessments = await executeQuery(query, params)

    return NextResponse.json({ assessments })
  } catch (error) {
    console.error("Error fetching assessments:", error)
    return NextResponse.json({ error: "Failed to fetch assessments" }, { status: 500 })
  }
}
