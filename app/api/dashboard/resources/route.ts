import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    console.log("Dashboard resources API called")

    // Get user ID from query params or headers
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId") || "1" // Default to "1" for testing

    console.log("Fetching resources for user:", userId)

    // Fetch lesson plans
    let lessonPlans = []
    try {
      lessonPlans = await db.lessonPlans.findMany({ created_by: userId })
      console.log(`Found ${lessonPlans.length} lesson plans`)
    } catch (error) {
      console.error("Error fetching lesson plans:", error)
    }

    // Fetch quizzes
    let quizzes = []
    try {
      quizzes = await db.quizzes.findMany({ created_by: userId })
      console.log(`Found ${quizzes.length} quizzes`)
    } catch (error) {
      console.error("Error fetching quizzes:", error)
    }

    // Fetch cross-curricular plans
    let crossCurricularPlans = []
    try {
      crossCurricularPlans = await db.crossCurricularPlans.findMany({ created_by: userId })
      console.log(`Found ${crossCurricularPlans.length} cross-curricular plans`)
    } catch (error) {
      console.error("Error fetching cross-curricular plans:", error)
    }

    // Fetch multigrade plans
    let multigradePlans = []
    try {
      multigradePlans = await db.multigradePlans.findMany({ created_by: userId })
      console.log(`Found ${multigradePlans.length} multigrade plans`)
    } catch (error) {
      console.error("Error fetching multigrade plans:", error)
    }

    // Format the response
    const resources = {
      lessonPlans: lessonPlans.map(plan => ({
        id: plan.id,
        title: plan.title,
        subject: plan.subject,
        grade_level: plan.grade_level,
        topic: plan.topic,
        duration_minutes: plan.duration_minutes,
        created_at: plan.created_at,
        updated_at: plan.updated_at,
        type: "lesson_plan"
      })),
      quizzes: quizzes.map(quiz => ({
        id: quiz.id,
        title: quiz.title,
        subject: quiz.subject,
        grade_level: quiz.grade_level,
        topic: quiz.topic,
        question_count: quiz.question_count,
        difficulty_level: quiz.difficulty_level,
        created_at: quiz.created_at,
        updated_at: quiz.updated_at,
        type: "quiz"
      })),
      crossCurricularPlans: crossCurricularPlans.map(plan => ({
        id: plan.id,
        title: plan.title,
        theme: plan.theme,
        grade_range: plan.grade_range,
        subjects_included: plan.subjects_included,
        created_at: plan.created_at,
        updated_at: plan.updated_at,
        type: "cross_curricular"
      })),
      multigradePlans: multigradePlans.map(plan => ({
        id: plan.id,
        title: plan.title,
        subject: plan.subject,
        grade_range: plan.grade_range,
        topic: plan.topic,
        duration_minutes: plan.duration_minutes,
        created_at: plan.created_at,
        updated_at: plan.updated_at,
        type: "multigrade"
      }))
    }

    console.log("Returning resources:", {
      lessonPlans: resources.lessonPlans.length,
      quizzes: resources.quizzes.length,
      crossCurricularPlans: resources.crossCurricularPlans.length,
      multigradePlans: resources.multigradePlans.length
    })

    return NextResponse.json({
      success: true,
      data: resources
    })

  } catch (error) {
    console.error("Error in dashboard resources API:", error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred"
    }, { status: 500 })
  }
} 