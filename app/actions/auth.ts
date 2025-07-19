"use server"

import { db } from "@/lib/db"
import { users } from "@/lib/schema"
import { z } from "zod"
import { hash, compare } from "bcryptjs"
import { eq, and, sql } from "drizzle-orm"
import crypto from "crypto"

// Validation schemas
const registerSchema = z.object({
  name: z.string().min(1, "Name is required").max(255, "Name is too long"),
  email: z.string().email("Invalid email address").max(255, "Email is too long"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["teacher", "administrator", "curriculum_specialist", "principal"]),
})

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
})

export interface RegisterData {
  name: string
  email: string
  password: string
  role: string
}

export interface LoginData {
  email: string
  password: string
}

interface User {
  id: string
  name: string
  email: string
  password_hash: string
  role: string
  avatar_url?: string | null
  created_at: string
  updated_at: string
}

// Simple password hashing function
function hashPassword(password: string): string {
  return crypto.createHash("sha256").update(password).digest("hex")
}

export async function registerUser(data: RegisterData) {
  try {
    console.log("Starting registration for:", data.email)

    // Validate input data
    const validatedData = registerSchema.parse(data)

    // Check if user already exists
    const existingUser = await db.users.findFirst({ email: validatedData.email })

    if (existingUser) {
      console.log("User already exists:", validatedData.email)
      return {
        success: false,
        error: "An account with this email address already exists",
      }
    }

    // Hash the password
    const hashedPassword = await hash(validatedData.password, 10)
    console.log("Password hashed successfully")

    // Insert new user into database
    try {
      const newUser = await db.users.create({
        name: validatedData.name,
        email: validatedData.email,
        password_hash: hashedPassword,
        role: validatedData.role,
      })

      if (newUser) {
        console.log("User created successfully:", newUser.id)
        return {
          success: true,
          user: {
            id: newUser.id.toString(),
            name: newUser.name,
            email: newUser.email,
            role: newUser.role,
            created_at: newUser.created_at,
            updated_at: newUser.updated_at,
          },
        }
      } else {
        console.error("No result returned from insert")
        return {
          success: false,
          error: "Failed to create user account - no result returned",
        }
      }
    } catch (dbError) {
      console.error("Database error during user insertion:", dbError)
      return {
        success: false,
        error: `Database error: ${dbError instanceof Error ? dbError.message : "Unknown error"}`,
      }
    }
  } catch (error) {
    console.error("Registration error:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.errors[0].message,
      }
    }

    return {
      success: false,
      error: `Registration failed: ${error instanceof Error ? error.message : "Unknown error"}`,
    }
  }
}

export async function loginUser(data: LoginData) {
  try {
    console.log("Starting login for:", data.email)

    // Validate input data
    const validatedData = loginSchema.parse(data)

    // Find user by email
    const user = await db.users.findFirst({ email: validatedData.email })

    console.log("User query result:", user ? "User found" : "User not found")

    if (!user) {
      return {
        success: false,
        error: "Invalid email or password",
      }
    }

    console.log("Found user:", user.name, "Role:", user.role)

    // Compare passwords
    const isPasswordValid = await compare(validatedData.password, user.password_hash)

    if (!isPasswordValid) {
      console.log("Password verification failed")
      return {
        success: false,
        error: "Invalid email or password",
      }
    }

    // Update last login timestamp
    await db.users.update(user.id, {
      updated_at: new Date().toISOString()
    })

    console.log("Login successful for user:", user.name)

    return {
      success: true,
      user: {
        id: user.id.toString(),
        name: user.name,
        email: user.email,
        role: user.role,
        avatar_url: user.avatar_url,
        created_at: user.created_at,
        updated_at: user.updated_at,
      },
    }
  } catch (error) {
    console.error("Login error:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.errors[0].message,
      }
    }

    return {
      success: false,
      error: `Login failed: ${error instanceof Error ? error.message : "Unknown error"}`,
    }
  }
}

export async function getUserById(userId: string) {
  try {
    console.log("Getting user by ID:", userId)
    
    // Parse the user ID to ensure it's a valid number
    const numericId = parseInt(userId, 10)
    if (isNaN(numericId)) {
      console.error("Invalid user ID format:", userId)
      return {
        success: false,
        error: "Invalid user ID format",
      }
    }

    // Query the database for the user
    const user = await db.users.findFirst({ id: numericId })

    if (!user) {
      console.error("User not found:", userId)
      return {
        success: false,
        error: "User not found",
      }
    }

    console.log("User found:", user.name)

    // Return the user data with the correct field names
    return {
      success: true,
      user: {
        id: user.id.toString(),
        name: user.name,
        email: user.email,
        role: user.role,
        avatar_url: user.avatar_url,
        created_at: user.created_at,
        updated_at: user.updated_at,
      },
    }
  } catch (error) {
    console.error("Error getting user:", error)
    return {
      success: false,
      error: `Failed to get user: ${error instanceof Error ? error.message : "Unknown error"}`,
    }
  }
}

// Helper function to test password hashing
export async function testPasswordHash(password: string) {
  const hash = hashPassword(password)
  console.log(`Password: ${password}`)
  console.log(`Hash: ${hash}`)
  return { password, hash }
}

// Helper function to verify existing users
export async function verifyExistingUser(email: string, password: string) {
  try {
    const user = await db.users.findFirst({ email })

    if (!user) {
      return { success: false, error: "User not found" }
    }

    const isPasswordValid = await compare(password, user.password_hash)

    return {
      success: true,
      user: {
        id: user.id.toString(),
        name: user.name,
        email: user.email,
        role: user.role,
        passwordMatch: isPasswordValid,
      },
    }
  } catch (error) {
    console.error("Verify user error:", error)
    return { success: false, error: "Verification failed" }
  }
}

export async function updateUserProfile(userId: string, data: Partial<RegisterData>) {
  try {
    const updates: Record<string, any> = {}

    if (data.name) {
      updates.name = data.name
    }

    if (data.email) {
      // Check if email is already taken by another user
      const existingUser = await db.users.findFirst({ email: data.email })

      if (existingUser) {
        return {
          success: false,
          error: "Email address is already in use",
        }
      }

      updates.email = data.email
    }

    if (data.role) {
      updates.role = data.role
    }

    if (data.password) {
      updates.password_hash = await hash(data.password, 10)
    }

    if (Object.keys(updates).length === 0) {
      return {
        success: false,
        error: "No fields to update",
      }
    }

    updates.updated_at = sql`CURRENT_TIMESTAMP`

    const updatedUser = await db.users.update(parseInt(userId), updates)

    if (!updatedUser) {
      return {
        success: false,
        error: "User not found or update failed",
      }
    }

    return {
      success: true,
      user: {
        id: updatedUser.id.toString(),
        name: updatedUser.name,
        email: updatedUser.email,
        role: updatedUser.role,
        createdAt: updatedUser.created_at,
        updatedAt: updatedUser.updated_at,
      },
    }
  } catch (error) {
    console.error("Update user error:", error)
    return {
      success: false,
      error: "Failed to update user profile",
    }
  }
}
