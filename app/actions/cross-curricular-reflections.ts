"use server"

import { z } from "zod"
import { db } from "@/lib/db"
import { crossCurricularReflections } from "../../db/schema"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { supabaseAdmin } from "@/lib/db"

const reflectionSchema = z.object({
  plan_id: z.string().min(1, "Plan ID is required"),
  user_id: z.string().min(1, "User ID is required"),
  reflection_date: z.string().min(1, "Reflection date is required"),
  objectives_met: z.string().optional(),
  student_understanding: z.string().optional(),
  evidence_support: z.string().optional(),
  students_not_meeting_objectives: z.string().optional(),
  misconceptions_difficulties: z.string().optional(),
  assessment_effective: z.string().optional(),
  content_suitable: z.string().optional(),
  strategies_engaging: z.string().optional(),
  students_on_task: z.string().optional(),
  differentiation_effective: z.string().optional(),
  future_improvements: z.string().optional(),
  long_term_goals: z.string().optional(),
  behavioral_issues: z.string().optional(),
  student_opportunities: z.string().optional(),
  teaching_insights: z.string().optional(),
  overall_rating: z.number().min(1).max(5).optional(),
  time_management: z.string().optional(),
  student_engagement_level: z.string().optional(),
  next_steps: z.string().optional(),
})

export interface CrossCurricularReflection {
  id: string
  plan_id: string
  user_id: string
  reflection_date: string
  objectives_met: string | null
  student_understanding: string | null
  evidence_support: string | null
  students_not_meeting_objectives: string | null
  misconceptions_difficulties: string | null
  assessment_effective: string | null
  content_suitable: string | null
  strategies_engaging: string | null
  students_on_task: string | null
  differentiation_effective: string | null
  future_improvements: string | null
  long_term_goals: string | null
  behavioral_issues: string | null
  student_opportunities: string | null
  teaching_insights: string | null
  overall_rating: number | null
  time_management: string | null
  student_engagement_level: string | null
  next_steps: string | null
  created_at: string
  updated_at: string
}

export async function saveCrossCurricularReflection(formData: any) {
  try {
    console.log("Starting saveCrossCurricularReflection function")

    // Get the current user session
    let userId = "1" // fallback
    if (supabaseAdmin) {
      try {
        const { data: { session }, error } = await supabaseAdmin.auth.getSession()
        if (error) {
          console.error("Error getting session:", error)
        } else if (session?.user?.id) {
          userId = session.user.id
          console.log("Using authenticated user ID:", userId)
        } else {
          console.log("No authenticated session found, using fallback user ID")
        }
      } catch (sessionError) {
        console.error("Error accessing auth session:", sessionError)
      }
    }

    // Check if we're dealing with FormData or a regular object
    const plan_id = formData.get ? formData.get("plan_id") : formData.plan_id
    const reflection_date = formData.get ? formData.get("reflection_date") : formData.reflection_date
    const objectives_met = formData.get ? formData.get("objectives_met") : formData.objectives_met
    const student_understanding = formData.get ? formData.get("student_understanding") : formData.student_understanding
    const evidence_support = formData.get ? formData.get("evidence_support") : formData.evidence_support
    const students_not_meeting_objectives = formData.get ? formData.get("students_not_meeting_objectives") : formData.students_not_meeting_objectives
    const misconceptions_difficulties = formData.get ? formData.get("misconceptions_difficulties") : formData.misconceptions_difficulties
    const assessment_effective = formData.get ? formData.get("assessment_effective") : formData.assessment_effective
    const content_suitable = formData.get ? formData.get("content_suitable") : formData.content_suitable
    const strategies_engaging = formData.get ? formData.get("strategies_engaging") : formData.strategies_engaging
    const students_on_task = formData.get ? formData.get("students_on_task") : formData.students_on_task
    const differentiation_effective = formData.get ? formData.get("differentiation_effective") : formData.differentiation_effective
    const future_improvements = formData.get ? formData.get("future_improvements") : formData.future_improvements
    const long_term_goals = formData.get ? formData.get("long_term_goals") : formData.long_term_goals
    const behavioral_issues = formData.get ? formData.get("behavioral_issues") : formData.behavioral_issues
    const student_opportunities = formData.get ? formData.get("student_opportunities") : formData.student_opportunities
    const teaching_insights = formData.get ? formData.get("teaching_insights") : formData.teaching_insights
    const overall_rating = formData.get ? parseInt(formData.get("overall_rating")) : formData.overall_rating
    const time_management = formData.get ? formData.get("time_management") : formData.time_management
    const student_engagement_level = formData.get ? formData.get("student_engagement_level") : formData.student_engagement_level
    const next_steps = formData.get ? formData.get("next_steps") : formData.next_steps

    console.log("Extracted reflection data:", {
      plan_id,
      userId,
      reflection_date,
      objectives_met,
      student_understanding,
      evidence_support: evidence_support ? evidence_support.length : 0,
      students_not_meeting_objectives: students_not_meeting_objectives ? students_not_meeting_objectives.length : 0,
      misconceptions_difficulties: misconceptions_difficulties ? misconceptions_difficulties.length : 0,
      assessment_effective,
      content_suitable,
      strategies_engaging,
      students_on_task,
      differentiation_effective,
      future_improvements: future_improvements ? future_improvements.length : 0,
      long_term_goals,
      behavioral_issues: behavioral_issues ? behavioral_issues.length : 0,
      student_opportunities,
      teaching_insights: teaching_insights ? teaching_insights.length : 0,
      overall_rating,
      time_management: time_management ? time_management.length : 0,
      student_engagement_level,
      next_steps: next_steps ? next_steps.length : 0,
    })

    // Validate required fields
    if (!plan_id) {
      console.error("Missing required field: plan_id")
      return {
        success: false,
        error: "Plan ID is required",
      }
    }

    // Check if reflection already exists for this plan
    const existingReflection = await db.crossCurricularReflections.findFirst({
      where: eq(crossCurricularReflections.plan_id, plan_id),
    })

    const now = new Date().toISOString()
    const reflectionData = {
      plan_id,
      user_id: userId,
      reflection_date: reflection_date || now,
      objectives_met: objectives_met || null,
      student_understanding: student_understanding || null,
      evidence_support: evidence_support || null,
      students_not_meeting_objectives: students_not_meeting_objectives || null,
      misconceptions_difficulties: misconceptions_difficulties || null,
      assessment_effective: assessment_effective || null,
      content_suitable: content_suitable || null,
      strategies_engaging: strategies_engaging || null,
      students_on_task: students_on_task || null,
      differentiation_effective: differentiation_effective || null,
      future_improvements: future_improvements || null,
      long_term_goals: long_term_goals || null,
      behavioral_issues: behavioral_issues || null,
      student_opportunities: student_opportunities || null,
      teaching_insights: teaching_insights || null,
      overall_rating: overall_rating || null,
      time_management: time_management || null,
      student_engagement_level: student_engagement_level || null,
      next_steps: next_steps || null,
      updated_at: now,
    }

    try {
      if (existingReflection) {
        // Update existing reflection
        console.log("Updating existing reflection for plan:", plan_id)
        const updatedReflection = await db.crossCurricularReflections.update(
          existingReflection.id,
          reflectionData
        )
        console.log("Reflection update successful")
        revalidatePath(`/cross-curricular/${plan_id}/view`)
        return { success: true, data: updatedReflection }
      } else {
        // Create new reflection - let database auto-generate UUID
        console.log("Creating new reflection for plan:", plan_id)
        const createData = {
          ...reflectionData,
          created_at: now,
        }
        const newReflection = await db.crossCurricularReflections.create(createData)
        console.log("Reflection creation successful, returned ID:", newReflection.id)
        revalidatePath(`/cross-curricular/${plan_id}/view`)
        return { success: true, data: newReflection }
      }
    } catch (dbError) {
      console.error("Database operation failed:", dbError)
      return {
        success: false,
        error: `Database error: ${dbError instanceof Error ? dbError.message : "Unknown error"}`,
      }
    }
  } catch (error) {
    console.error("Error saving cross-curricular reflection:", error)
    return {
      success: false,
      error: "Failed to save cross-curricular reflection",
    }
  }
}

export async function getCrossCurricularReflection(planId: string) {
  try {
    const reflection = await db.crossCurricularReflections.findFirst({
      where: eq(crossCurricularReflections.plan_id, planId),
    })

    if (!reflection) {
      return null
    }

    return {
      id: reflection.id,
      plan_id: reflection.plan_id,
      user_id: reflection.user_id,
      reflection_date: reflection.reflection_date,
      objectives_met: reflection.objectives_met,
      student_understanding: reflection.student_understanding,
      evidence_support: reflection.evidence_support,
      students_not_meeting_objectives: reflection.students_not_meeting_objectives,
      misconceptions_difficulties: reflection.misconceptions_difficulties,
      assessment_effective: reflection.assessment_effective,
      content_suitable: reflection.content_suitable,
      strategies_engaging: reflection.strategies_engaging,
      students_on_task: reflection.students_on_task,
      differentiation_effective: reflection.differentiation_effective,
      future_improvements: reflection.future_improvements,
      long_term_goals: reflection.long_term_goals,
      behavioral_issues: reflection.behavioral_issues,
      student_opportunities: reflection.student_opportunities,
      teaching_insights: reflection.teaching_insights,
      overall_rating: reflection.overall_rating,
      time_management: reflection.time_management,
      student_engagement_level: reflection.student_engagement_level,
      next_steps: reflection.next_steps,
      created_at: reflection.created_at,
      updated_at: reflection.updated_at,
    }
  } catch (error) {
    console.error("Error fetching cross-curricular reflection:", error)
    return null
  }
}

export async function deleteCrossCurricularReflection(reflectionId: string) {
  try {
    await db.crossCurricularReflections.delete(reflectionId)
    revalidatePath("/dashboard")
    return { success: true }
  } catch (error) {
    console.error("Error deleting cross-curricular reflection:", error)
    return {
      success: false,
      error: "Failed to delete cross-curricular reflection",
    }
  }
} 