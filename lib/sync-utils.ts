"use client"

import { saveLessonPlan } from "@/app/actions/lesson-plans"
import { toast } from "@/components/ui/use-toast"

export interface FallbackLessonPlan {
  id: string
  title: string
  subject: string
  grade_level: string | null
  topic: string | null
  content: string
  pedagogical_strategy: string | null
  special_needs: boolean
  special_needs_details: string | null
  created_at: string
  updated_at: string
}

export async function syncFallbackLessonPlans() {
  try {
    // Get fallback lesson plans from localStorage
    const fallbackPlansJson = localStorage.getItem("fallbackLessonPlans")
    if (!fallbackPlansJson) return { success: true, synced: 0 }

    const fallbackPlans: FallbackLessonPlan[] = JSON.parse(fallbackPlansJson)
    if (!fallbackPlans.length) return { success: true, synced: 0 }

    console.log(`Found ${fallbackPlans.length} offline lesson plans to sync`)

    let syncedCount = 0
    const failedPlans: FallbackLessonPlan[] = []

    // Try to sync each plan
    for (const plan of fallbackPlans) {
      try {
        // Create FormData for saving
        const formData = new FormData()
        formData.append("title", plan.title)
        formData.append("subject", plan.subject)
        formData.append("grade_level", plan.grade_level || "") // Changed from gradeLevel to grade_level
        formData.append("topic", plan.topic || "")
        formData.append("lesson_content", plan.content) // Changed from content to lesson_content
        formData.append("duration_minutes", "50") // Add duration_minutes field
        formData.append("user_id", "1") // Add user_id field
        formData.append("pedagogicalStrategy", plan.pedagogical_strategy || "")
        formData.append("specialNeeds", String(plan.special_needs))
        formData.append("specialNeedsDetails", plan.special_needs_details || "")

        // Try to save to database
        const result = await saveLessonPlan(formData)

        if (result.success && !result.fallbackData) {
          syncedCount++
        } else {
          failedPlans.push(plan)
        }
      } catch (error) {
        console.error(`Failed to sync lesson plan ${plan.id}:`, error)
        failedPlans.push(plan)
      }
    }

    // Update localStorage with only the failed plans
    if (failedPlans.length > 0) {
      localStorage.setItem("fallbackLessonPlans", JSON.stringify(failedPlans))
    } else {
      localStorage.removeItem("fallbackLessonPlans")
    }

    // Show toast notification
    if (syncedCount > 0) {
      toast({
        title: "Lesson plans synced",
        description: `Successfully synced ${syncedCount} offline lesson plan${syncedCount > 1 ? "s" : ""} to the database.`,
      })
    }

    return {
      success: true,
      synced: syncedCount,
      remaining: failedPlans.length,
    }
  } catch (error) {
    console.error("Error syncing fallback lesson plans:", error)
    return {
      success: false,
      error: "Failed to sync offline lesson plans",
    }
  }
}

// Function to check if there are any fallback lesson plans
export function hasFallbackLessonPlans(): boolean {
  try {
    const fallbackPlansJson = localStorage.getItem("fallbackLessonPlans")
    if (!fallbackPlansJson) return false

    const fallbackPlans = JSON.parse(fallbackPlansJson)
    return Array.isArray(fallbackPlans) && fallbackPlans.length > 0
  } catch (error) {
    console.error("Error checking for fallback lesson plans:", error)
    return false
  }
}

// Function to get the count of fallback lesson plans
export function getFallbackLessonPlansCount(): number {
  try {
    const fallbackPlansJson = localStorage.getItem("fallbackLessonPlans")
    if (!fallbackPlansJson) return 0

    const fallbackPlans = JSON.parse(fallbackPlansJson)
    return Array.isArray(fallbackPlans) ? fallbackPlans.length : 0
  } catch (error) {
    console.error("Error counting fallback lesson plans:", error)
    return 0
  }
}
