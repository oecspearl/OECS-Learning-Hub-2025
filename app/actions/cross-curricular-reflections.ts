"use server"

import { z } from "zod"
import { db } from "@/lib/db"
import { crossCurricularReflections } from "../../db/schema"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"

const reflectionSchema = z.object({
  plan_id: z.string().min(1, "Plan ID is required"),
  reflection_notes: z.string().optional(),
  student_engagement: z.string().optional(),
  effectiveness_rating: z.number().min(1).max(5).optional(),
  improvements_needed: z.string().optional(),
  reflection_date: z.string().optional(),
})

export interface CrossCurricularReflection {
  id: string
  plan_id: string
  reflection_notes: string | null
  student_engagement: string | null
  effectiveness_rating: number | null
  improvements_needed: string | null
  reflection_date: string | null
  created_at: string
  updated_at: string
}

export async function saveCrossCurricularReflection(formData: any) {
  try {
    console.log("Starting saveCrossCurricularReflection function")

    // Check if we're dealing with FormData or a regular object
    const plan_id = formData.get ? formData.get("plan_id") : formData.plan_id
    const reflection_notes = formData.get ? formData.get("reflection_notes") : formData.reflection_notes
    const student_engagement = formData.get ? formData.get("student_engagement") : formData.student_engagement
    const effectiveness_rating = formData.get ? parseInt(formData.get("effectiveness_rating")) : formData.effectiveness_rating
    const improvements_needed = formData.get ? formData.get("improvements_needed") : formData.improvements_needed
    const reflection_date = formData.get ? formData.get("reflection_date") : formData.reflection_date

    console.log("Extracted reflection data:", {
      plan_id,
      reflection_notes: reflection_notes ? reflection_notes.length : 0,
      student_engagement: student_engagement ? student_engagement.length : 0,
      effectiveness_rating,
      improvements_needed: improvements_needed ? improvements_needed.length : 0,
      reflection_date,
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
      reflection_notes: reflection_notes || null,
      student_engagement: student_engagement || null,
      effectiveness_rating: effectiveness_rating || null,
      improvements_needed: improvements_needed || null,
      reflection_date: reflection_date || now,
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
      reflection_notes: reflection.reflection_notes,
      student_engagement: reflection.student_engagement,
      effectiveness_rating: reflection.effectiveness_rating,
      improvements_needed: reflection.improvements_needed,
      reflection_date: reflection.reflection_date,
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