"use server"

import { createClient } from "@supabase/supabase-js"
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

    // Initialize Supabase client
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_ANON_KEY!
    )

    // Check if email already exists
    const { data: existingSubscriber, error: checkError } = await supabase
      .from('newsletter_subscribers')
      .select('*')
      .eq('email', email)
      .single()

    if (checkError && checkError.code !== 'PGRST116') {
      console.error('Error checking existing subscriber:', checkError)
      return {
        success: false,
        message: "Something went wrong. Please try again later.",
      }
    }

    if (existingSubscriber) {
      return {
        success: false,
        message: "This email is already subscribed to our newsletter",
      }
    }

    // Add new subscriber
    const { error: insertError } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email }])

    if (insertError) {
      console.error('Error inserting subscriber:', insertError)
      return {
        success: false,
        message: "Something went wrong. Please try again later.",
      }
    }

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
