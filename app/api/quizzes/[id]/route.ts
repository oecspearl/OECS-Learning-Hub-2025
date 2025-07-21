import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const quiz = await db.quizzes.findFirst({ id })
    
    if (!quiz) {
      return NextResponse.json({ error: "Quiz not found" }, { status: 404 })
    }

    return NextResponse.json(quiz)
  } catch (error) {
    console.error("Error fetching quiz:", error)
    return NextResponse.json({ error: "Failed to fetch quiz" }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    
    const updatedQuiz = await db.quizzes.update(id, {
      title: body.title,
      description: body.description,
      subject: body.subject,
      grade_level: body.grade_level || body.grade, // Handle both grade and grade_level
      topic: body.topic,
      content: body.content,
      question_count: body.question_count,
      question_types: body.question_types,
      difficulty: body.difficulty,
      time_limit: body.time_limit,
      tags: body.tags,
      instructions: body.instructions,
      updated_at: new Date().toISOString()
    })

    return NextResponse.json(updatedQuiz)
  } catch (error) {
    console.error("Error updating quiz:", error)
    return NextResponse.json({ error: "Failed to update quiz" }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    await db.quizzes.delete(id)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting quiz:", error)
    return NextResponse.json({ error: "Failed to delete quiz" }, { status: 500 })
  }
} 