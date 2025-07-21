import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"

interface Resource {
  id: string
  title: string
  subject: string
  grade: string
  topic: string
  createdAt: string
  status: string
  type: string
}

export async function GET(request: NextRequest) {
  try {
    console.log("Dashboard resources API called")

    // Get user ID and type from query params
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId") || "1" // Default to "1" for testing
    const type = searchParams.get("type") // Get the type parameter

    console.log("Fetching resources for user:", userId, "type:", type)

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

    // Format the response based on type
    let resources: Array<Resource> = []
    
    if (!type || type === "all") {
      // Return all resources
      resources = [
        ...lessonPlans.map(plan => ({
          id: plan.id,
          title: plan.title,
          subject: plan.subject,
          grade: plan.grade_level || plan.grade,
          topic: plan.topic,
          createdAt: plan.created_at,
          status: "active",
          type: "lesson-plans"
        })),
        ...quizzes.map(quiz => ({
          id: quiz.id,
          title: quiz.title,
          subject: quiz.subject,
          grade: quiz.grade_level || quiz.grade,
          topic: quiz.topic,
          createdAt: quiz.created_at,
          status: "active",
          type: "quizzes"
        })),
        ...crossCurricularPlans.map(plan => ({
          id: plan.id,
          title: plan.title,
          subject: plan.subjects || "Cross-curricular",
          grade: plan.grade_range,
          topic: plan.theme,
          createdAt: plan.created_at,
          status: "active",
          type: "cross-curricular"
        })),
        ...multigradePlans.map(plan => ({
          id: plan.id,
          title: plan.title,
          subject: plan.subject,
          grade: plan.grade_range,
          topic: plan.topic,
          createdAt: plan.created_at,
          status: "active",
          type: "multigrade"
        }))
      ]
    } else {
      // Return specific type
      switch (type) {
        case "lesson-plans":
          resources = lessonPlans.map(plan => ({
            id: plan.id,
            title: plan.title,
            subject: plan.subject,
            grade: plan.grade_level || plan.grade,
            topic: plan.topic,
            createdAt: plan.created_at,
            status: "active",
            type: "lesson-plans"
          }))
          break
        case "quizzes":
          resources = quizzes.map(quiz => ({
            id: quiz.id,
            title: quiz.title,
            subject: quiz.subject,
            grade: quiz.grade_level || quiz.grade,
            topic: quiz.topic,
            createdAt: quiz.created_at,
            status: "active",
            type: "quizzes"
          }))
          break
        case "cross-curricular":
          resources = crossCurricularPlans.map(plan => ({
            id: plan.id,
            title: plan.title,
            subject: plan.subjects || "Cross-curricular",
            grade: plan.grade_range,
            topic: plan.theme,
            createdAt: plan.created_at,
            status: "active",
            type: "cross-curricular"
          }))
          break
        case "multigrade":
          resources = multigradePlans.map(plan => ({
            id: plan.id,
            title: plan.title,
            subject: plan.subject,
            grade: plan.grade_range,
            topic: plan.topic,
            createdAt: plan.created_at,
            status: "active",
            type: "multigrade"
          }))
          break
      }
    }

    console.log("Returning resources:", {
      type: type || "all",
      totalResources: resources.length,
      resources: resources.slice(0, 3) // Log first 3 for debugging
    })

    return NextResponse.json({
      success: true,
      resources: resources
    })

  } catch (error) {
    console.error("Error in dashboard resources API:", error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred"
    }, { status: 500 })
  }
} 