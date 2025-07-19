"use server"

import { db, executeQuery } from "@/lib/db"
import { z } from "zod"

const shareSchema = z.object({
  email: z.string().email("Invalid email address"),
  resourceType: z.enum(["lesson-plan", "resource", "curriculum"]),
  resourceId: z.string(),
  resourceTitle: z.string(),
})

type User = {
  id: string
  name: string
  email: string
}

export async function shareResource(data: z.infer<typeof shareSchema>) {
  try {
    // Validate input data
    const validatedData = shareSchema.parse(data)

    // Check if the recipient is a registered user
    const existingUser = await executeQuery("SELECT id, name, email FROM users WHERE email = ?", [validatedData.email]) as User[]

    if (existingUser.length === 0) {
      return {
        success: false,
        error: "Recipient is not a registered user",
      }
    }

    // Here you would typically:
    // 1. Generate a share token
    // 2. Store the share in the database
    // 3. Send an email to the recipient
    // For now, we'll just return a success message

    return {
      success: true,
      message: `Share link sent to ${validatedData.email}`,
    }
  } catch (error) {
    console.error("Share error:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.errors[0].message,
      }
    }

    return {
      success: false,
      error: "Failed to share resource",
    }
  }
} 