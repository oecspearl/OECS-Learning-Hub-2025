import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId")

    console.log("Testing quiz display for user:", userId)

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 })
    }

    // Test 1: Check if any quizzes exist for this user
    const userQuizzes = await db.quizzes.findMany({ user_id: userId })
    console.log("User quizzes found:", userQuizzes.length)
    console.log("Quiz details:", userQuizzes)

    // Test 2: Check all quizzes in the database
    const allQuizzes = await db.quizzes.findMany()
    console.log("Total quizzes in database:", allQuizzes.length)
    console.log("All quiz details:", allQuizzes)

    // Test 3: Check if the user exists
    const user = await db.users.findFirst({ id: parseInt(userId) || 0 })
    console.log("User found:", user)

    return NextResponse.json({
      success: true,
      userQuizzes: userQuizzes.length,
      totalQuizzes: allQuizzes.length,
      userExists: !!user,
      userQuizzesData: userQuizzes,
      allQuizzesData: allQuizzes
    })

  } catch (error) {
    console.error("Error testing quiz display:", error)
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : "Unknown error",
      details: error instanceof Error ? error.stack : undefined
    }, { status: 500 })
  }
} 