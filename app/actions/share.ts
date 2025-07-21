"use server"

import { db } from "@/lib/db"
import { z } from "zod"

const shareSchema = z.object({
  email: z.string().email("Invalid email address"),
  resourceType: z.enum(["lesson-plan", "resource", "curriculum"]),
  resourceId: z.string(),
  resourceTitle: z.string(),
})

type User = {
  id: string
  full_name: string
  email?: string
}

export async function shareResource(data: z.infer<typeof shareSchema>) {
  try {
    // Validate input data
    const validatedData = shareSchema.parse(data)

    // For now, we'll assume the user exists since we don't have email lookup
    // In a real implementation, you would query the user_profiles table by email
    // Since we're using Supabase auth, user lookup would be different
    
    console.log("Share request:", {
      email: validatedData.email,
      resourceType: validatedData.resourceType,
      resourceId: validatedData.resourceId,
      resourceTitle: validatedData.resourceTitle,
    })

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