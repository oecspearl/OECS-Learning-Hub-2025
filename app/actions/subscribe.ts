"use server"

import { neon } from "@neondatabase/serverless"
import { z } from "zod"

// Create a schema for email validation
const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

export async function subscribeToNewsletter(formData: FormData) {
  try {
    // Get email from form data
    const email = formData.get("email") as string

    // Validate email
    const result = emailSchema.safeParse({ email })
    if (!result.success) {
      return {
        success: false,
        message: "Please enter a valid email address",
      }
    }

    // Initialize Neon SQL client
    const sql = neon(process.env.DATABASE_URL || "")

    // Check if table exists and create it if it doesn't
    await sql`
      CREATE TABLE IF NOT EXISTS newsletter_subscribers (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `

    // Check if email already exists
    const existingSubscriber = await sql`
      SELECT * FROM newsletter_subscribers WHERE email = ${email}
    `

    if (existingSubscriber.length > 0) {
      return {
        success: false,
        message: "This email is already subscribed to our newsletter",
      }
    }

    // Add new subscriber
    await sql`
      INSERT INTO newsletter_subscribers (email) VALUES (${email})
    `

    return {
      success: true,
      message: "Thank you for subscribing to our newsletter!",
    }
  } catch (error) {
    console.error("Error subscribing to newsletter:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}
