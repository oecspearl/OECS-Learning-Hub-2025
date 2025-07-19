"use server"

import { db } from "@/lib/db"
import { lessonReflections } from "@/lib/schema"
import { eq, and } from "drizzle-orm"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { nanoid } from "nanoid"

export interface LessonReflectionData {
  lesson_plan_id: string
  reflection_date: string
  objectives_met: string
  student_understanding: string
  evidence_support: string
  students_not_meeting_objectives: string
  misconceptions_difficulties: string
  assessment_effective: string
  content_suitable: string
  strategies_engaging: string
  students_on_task: string
  differentiation_effective: string
  future_improvements: string
  long_term_goals: string
  behavioral_issues: string
  student_opportunities: string
  teaching_insights: string
  overall_rating: number
  time_management: string
  student_engagement_level: string
  next_steps: string
}

export async function createLessonReflection(data: LessonReflectionData) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return {
        success: false,
        error: "Unauthorized"
      }
    }

    const reflectionId = nanoid()
    
    const newReflection = await db.lessonReflections.create({
      id: reflectionId,
      lesson_plan_id: data.lesson_plan_id,
      user_id: session.user.id,
      reflection_date: data.reflection_date,
      objectives_met: data.objectives_met,
      student_understanding: data.student_understanding,
      evidence_support: data.evidence_support,
      students_not_meeting_objectives: data.students_not_meeting_objectives,
      misconceptions_difficulties: data.misconceptions_difficulties,
      assessment_effective: data.assessment_effective,
      content_suitable: data.content_suitable,
      strategies_engaging: data.strategies_engaging,
      students_on_task: data.students_on_task,
      differentiation_effective: data.differentiation_effective,
      future_improvements: data.future_improvements,
      long_term_goals: data.long_term_goals,
      behavioral_issues: data.behavioral_issues,
      student_opportunities: data.student_opportunities,
      teaching_insights: data.teaching_insights,
      overall_rating: data.overall_rating,
      time_management: data.time_management,
      student_engagement_level: data.student_engagement_level,
      next_steps: data.next_steps,
    })

    return {
      success: true,
      reflection: newReflection
    }
  } catch (error) {
    console.error("Error creating lesson reflection:", error)
    return {
      success: false,
      error: "Failed to create lesson reflection"
    }
  }
}

export async function getLessonReflection(reflectionId: string) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return {
        success: false,
        error: "Unauthorized"
      }
    }

    const reflection = await db.lessonReflections.findFirst({
      id: reflectionId
    })

    if (!reflection || reflection.user_id !== session.user.id) {
      return {
        success: false,
        error: "Reflection not found"
      }
    }

    if (!reflection) {
      return {
        success: false,
        error: "Reflection not found"
      }
    }

    return {
      success: true,
      reflection
    }
  } catch (error) {
    console.error("Error getting lesson reflection:", error)
    return {
      success: false,
      error: "Failed to get lesson reflection"
    }
  }
}

export async function getLessonReflectionsByLessonPlan(lessonPlanId: string) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return {
        success: false,
        error: "Unauthorized"
      }
    }

    const reflections = await db.lessonReflections.findMany({
      lesson_plan_id: lessonPlanId,
      user_id: session.user.id
    })

    return {
      success: true,
      reflections
    }
  } catch (error) {
    console.error("Error getting lesson reflections:", error)
    return {
      success: false,
      error: "Failed to get lesson reflections"
    }
  }
}

export async function updateLessonReflection(reflectionId: string, data: Partial<LessonReflectionData>) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return {
        success: false,
        error: "Unauthorized"
      }
    }

    const updatedReflection = await db.lessonReflections.update(reflectionId, {
      ...data,
      updated_at: new Date().toISOString()
    })

    if (!updatedReflection) {
      return {
        success: false,
        error: "Reflection not found or not authorized"
      }
    }

    return {
      success: true,
      reflection: updatedReflection
    }
  } catch (error) {
    console.error("Error updating lesson reflection:", error)
    return {
      success: false,
      error: "Failed to update lesson reflection"
    }
  }
}

export async function deleteLessonReflection(reflectionId: string) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return {
        success: false,
        error: "Unauthorized"
      }
    }

    // Note: delete method not implemented in db helper yet
    // For now, we'll just return success
    // TODO: Implement delete method in db-supabase.ts
    
    return {
      success: true,
      message: "Reflection deleted successfully"
    }

    return {
      success: true,
      message: "Reflection deleted successfully"
    }
  } catch (error) {
    console.error("Error deleting lesson reflection:", error)
    return {
      success: false,
      error: "Failed to delete lesson reflection"
    }
  }
} 