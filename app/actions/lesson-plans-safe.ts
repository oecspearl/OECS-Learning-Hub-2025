"use server"

import { safeQuery, ensureTablesExist } from "@/lib/db-safe"

// Simplified version of the lesson plans action
export async function getLessonPlans() {
  try {
    // Ensure tables exist before querying
    await ensureTablesExist()

    // Get all lesson plans
    const result = await safeQuery(`
      SELECT 
        id, 
        title, 
        subject, 
        grade_level, 
        topic, 
        created_at, 
        updated_at,
        special_needs
      FROM lesson_plans
      ORDER BY created_at DESC
    `)

    return result
  } catch (error) {
    console.error("Error fetching lesson plans:", error)
    return []
  }
}

// Simplified version of the get lesson plan by ID action
export async function getLessonPlanById(id: string) {
  try {
    // Ensure tables exist before querying
    await ensureTablesExist()

    // Get the lesson plan
    const result = await safeQuery(
      `
      SELECT * FROM lesson_plans
      WHERE id = $1
    `,
      [id],
    )

    if (result.length === 0) {
      return null
    }

    return result[0]
  } catch (error) {
    console.error("Error fetching lesson plan:", error)
    return null
  }
}
