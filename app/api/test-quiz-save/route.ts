import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, user_id } = body

    console.log("Testing quiz save with:", { title, user_id })

    // Test the database connection
    const testQuiz = {
      id: `test_quiz_${Date.now()}`,
      title: title || "Test Quiz",
      description: "Test quiz for debugging",
      subject: "Mathematics",
      grade: "Grade 3",
      topic: "Addition",
      content: "Test content",
      question_count: 5,
      question_types: "[]",
      difficulty: "Easy",
      time_limit: 10,
      tags: "[]",
      instructions: "Test instructions",
      user_id: user_id || "test_user",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    console.log("Attempting to save test quiz:", testQuiz)

    const result = await db.quizzes.create(testQuiz)

    console.log("Test quiz saved successfully:", result)

    return NextResponse.json({ 
      success: true, 
      message: "Test quiz saved successfully",
      data: result 
    })
  } catch (error) {
    console.error("Test quiz save failed:", error)
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : "Unknown error",
      details: error instanceof Error ? error.stack : undefined
    }, { status: 500 })
  }
} 