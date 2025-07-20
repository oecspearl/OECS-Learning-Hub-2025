import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { quizzes as quizzesTable, lesson_plans as lessonPlansTable, multigrade_plans as multigradePlansTable, cross_curricular_plans as crossCurricularPlansTable } from "@/lib/schema"
import { eq } from "drizzle-orm"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get("type")
    const userId = searchParams.get("userId")

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 })
    }

    let resources = []

    switch (type) {
      case "quizzes":
        const quizzes = await db.quizzes.findMany({ user_id: userId })
        resources = quizzes.map(quiz => ({
          id: quiz.id,
          title: quiz.title,
          subject: quiz.subject,
          grade: quiz.grade,
          createdAt: quiz.created_at,
          status: "active", // Default status for quizzes
          type: "quiz"
        }))
        break

      case "lesson-plans":
        const lessonPlans = await db.lesson_plans.findMany({ user_id: userId })
        resources = lessonPlans.map(plan => ({
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
        const multigradePlans = await db.multigrade_plans.findMany({ user_id: userId })
        resources = multigradePlans.map(plan => ({
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
        const crossCurricularPlans = await db.cross_curricular_plans.findMany({ user_id: userId })
        resources = crossCurricularPlans.map(plan => ({
          id: plan.id,
          title: plan.title,
          subject: plan.subjects,
          grade: plan.grade_level,
          createdAt: plan.created_at,
          status: "active",
          type: "cross-curricular"
        }))
        break

      default:
        return NextResponse.json({ error: "Invalid resource type" }, { status: 400 })
    }

    return NextResponse.json({ resources })
  } catch (error) {
    console.error("Error fetching resources:", error)
    return NextResponse.json({ error: "Failed to fetch resources" }, { status: 500 })
  }
} 