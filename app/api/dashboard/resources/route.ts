import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get("type")
    const userId = searchParams.get("userId")

    console.log("Fetching resources:", { type, userId })

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 })
    }

    let resources = []

    switch (type) {
      case "quizzes":
        console.log("Fetching quizzes for user:", userId)
        const quizResults = await db.quizzes.findMany({ user_id: userId })
        console.log("Quiz results:", quizResults)
        resources = quizResults.map((quiz: any) => ({
          id: quiz.id,
          title: quiz.title,
          subject: quiz.subject,
          grade: quiz.grade,
          createdAt: quiz.created_at,
          status: "active", // Default status for quizzes
          type: "quiz"
        }))
        console.log("Processed quiz resources:", resources)
        break

      case "lesson-plans":
        const lessonPlanResults = await db.lessonPlans.findMany({ user_id: userId })
        resources = lessonPlanResults.map((plan: any) => ({
          id: plan.id,
          title: plan.title,
          subject: plan.subject,
          grade: plan.grade,
          createdAt: plan.created_at,
          status: plan.status || "active",
          type: "lesson-plan"
        }))
        break

      case "multigrade":
        const allMultigradeResults = await db.multigradePlans.findMany()
        const multigradeResults = allMultigradeResults.filter((plan: any) => plan.user_id === userId)
        resources = multigradeResults.map((plan: any) => ({
          id: plan.id,
          title: plan.title,
          subject: plan.subject,
          grade: plan.grade_range,
          createdAt: plan.created_at,
          status: "active",
          type: "multigrade"
        }))
        break

      case "cross-curricular":
        const crossCurricularResults = await db.crossCurricularPlans.findMany({ user_id: userId })
        resources = crossCurricularResults.map((plan: any) => ({
          id: plan.id,
          title: plan.title,
          subject: plan.subjects,
          grade: plan.grade_range,
          createdAt: plan.created_at,
          status: "active",
          type: "cross-curricular"
        }))
        break

      default:
        return NextResponse.json({ error: "Invalid resource type" }, { status: 400 })
    }

    console.log("Returning resources:", { type, count: resources.length, resources })
    return NextResponse.json({ resources })
  } catch (error) {
    console.error("Error fetching resources:", error)
    return NextResponse.json({ error: "Failed to fetch resources" }, { status: 500 })
  }
} 