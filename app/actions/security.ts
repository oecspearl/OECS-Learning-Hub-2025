"use server"

import { db } from "@/lib/db-supabase"
import { z } from "zod"
import crypto from "crypto"

// Validation schemas
const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z.string().min(6, "New password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Please confirm your new password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

const enable2FASchema = z.object({
  userId: z.string().min(1, "User ID is required"),
  secret: z.string().min(1, "2FA secret is required"),
  token: z.string().length(6, "Token must be 6 digits"),
})

// Helper function to hash passwords
function hashPassword(password: string): string {
  return crypto.createHash("sha256").update(password).digest("hex")
}

// Generate 2FA secret
function generate2FASecret(): string {
  return crypto.randomBytes(20).toString("base64")
}

// Verify 2FA token (simplified implementation)
function verify2FAToken(secret: string, token: string): boolean {
  // In a real implementation, you'd use a proper TOTP library like 'otplib'
  // This is a simplified version for demonstration
  const timeStep = Math.floor(Date.now() / 30000)
  const expectedToken = crypto.createHmac("sha1", secret).update(timeStep.toString()).digest("hex").slice(-6)

  return token === expectedToken
}

export async function changePassword(
  userId: string,
  data: {
    currentPassword: string
    newPassword: string
    confirmPassword: string
  },
) {
  try {
    console.log("Starting password change for user:", userId)

    // Validate input data
    const validatedData = changePasswordSchema.parse(data)

    // Get current user data
    const user = await db.users.findFirst({ id: parseInt(userId) })

    if (!user) {
      return {
        success: false,
        error: "User not found",
      }
    }
    const currentPasswordHash = hashPassword(validatedData.currentPassword)

    // Verify current password
    if (currentPasswordHash !== user.password_hash) {
      return {
        success: false,
        error: "Current password is incorrect",
      }
    }

    // Hash new password
    const newPasswordHash = hashPassword(validatedData.newPassword)

    // Update password in database
    await db.users.update(parseInt(userId), {
      password_hash: newPasswordHash,
      updated_at: new Date().toISOString()
    })

    console.log("Password changed successfully for user:", userId)

    return {
      success: true,
      message: "Password changed successfully",
    }
  } catch (error) {
    console.error("Change password error:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.errors[0].message,
      }
    }

    return {
      success: false,
      error: "Failed to change password",
    }
  }
}

export async function enable2FA(userId: string, token: string) {
  try {
    console.log("Enabling 2FA for user:", userId)

    // Generate 2FA secret
    const secret = generate2FASecret()

    // Verify the token
    if (!verify2FAToken(secret, token)) {
      return {
        success: false,
        error: "Invalid verification code",
      }
    }

    // Store 2FA secret in database
    await sql`
      UPDATE users 
      SET two_factor_secret = ${secret}, two_factor_enabled = true, updated_at = NOW()
      WHERE id = ${userId}
    `

    console.log("2FA enabled successfully for user:", userId)

    return {
      success: true,
      message: "Two-factor authentication enabled successfully",
      secret: secret,
    }
  } catch (error) {
    console.error("Enable 2FA error:", error)
    return {
      success: false,
      error: "Failed to enable two-factor authentication",
    }
  }
}

export async function disable2FA(userId: string, password: string) {
  try {
    console.log("Disabling 2FA for user:", userId)

    // Verify password
    const userResult = await sql`
      SELECT password_hash FROM users WHERE id = ${userId}
    `

    if (userResult.length === 0) {
      return {
        success: false,
        error: "User not found",
      }
    }

    const user = userResult[0]
    const passwordHash = hashPassword(password)

    if (passwordHash !== user.password_hash) {
      return {
        success: false,
        error: "Incorrect password",
      }
    }

    // Disable 2FA
    await sql`
      UPDATE users 
      SET two_factor_secret = NULL, two_factor_enabled = false, updated_at = NOW()
      WHERE id = ${userId}
    `

    console.log("2FA disabled successfully for user:", userId)

    return {
      success: true,
      message: "Two-factor authentication disabled successfully",
    }
  } catch (error) {
    console.error("Disable 2FA error:", error)
    return {
      success: false,
      error: "Failed to disable two-factor authentication",
    }
  }
}

export async function getActiveSessions(userId: string) {
  try {
    // In a real implementation, you'd track user sessions
    // This is mock data for demonstration
    const sessions = [
      {
        id: "1",
        device: "Chrome on Windows",
        location: "Eastern Caribbean",
        lastActive: new Date().toISOString(),
        current: true,
      },
      {
        id: "2",
        device: "Safari on iPhone",
        location: "Eastern Caribbean",
        lastActive: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        current: false,
      },
    ]

    return {
      success: true,
      sessions: sessions,
    }
  } catch (error) {
    console.error("Get sessions error:", error)
    return {
      success: false,
      error: "Failed to retrieve sessions",
    }
  }
}

export async function revokeSession(userId: string, sessionId: string) {
  try {
    console.log("Revoking session:", sessionId, "for user:", userId)

    // In a real implementation, you'd invalidate the session
    // This is a mock implementation

    return {
      success: true,
      message: "Session revoked successfully",
    }
  } catch (error) {
    console.error("Revoke session error:", error)
    return {
      success: false,
      error: "Failed to revoke session",
    }
  }
}

export async function exportUserData(userId: string) {
  try {
    console.log("Exporting data for user:", userId)

    // Get user data
    const userResult = await sql`
      SELECT id, name, email, role, created_at, updated_at
      FROM users WHERE id = ${userId}
    `

    if (userResult.length === 0) {
      return {
        success: false,
        error: "User not found",
      }
    }

    // Get lesson plans
    const lessonPlans = await sql`
      SELECT id, title, subject, grade, created_at
      FROM lesson_plans WHERE created_by = ${userId}
    `

    // Get quizzes
    const quizzes = await sql`
      SELECT id, title, subject, grade, created_at
      FROM quizzes WHERE created_by = ${userId}
    `

    const userData = {
      user: userResult[0],
      lessonPlans: lessonPlans,
      quizzes: quizzes,
      exportDate: new Date().toISOString(),
    }

    return {
      success: true,
      data: userData,
    }
  } catch (error) {
    console.error("Export data error:", error)
    return {
      success: false,
      error: "Failed to export user data",
    }
  }
}

export async function deleteUserAccount(userId: string, password: string, confirmText: string) {
  try {
    console.log("Deleting account for user:", userId)

    if (confirmText !== "DELETE") {
      return {
        success: false,
        error: "Please type 'DELETE' to confirm account deletion",
      }
    }

    // Verify password
    const userResult = await sql`
      SELECT password_hash FROM users WHERE id = ${userId}
    `

    if (userResult.length === 0) {
      return {
        success: false,
        error: "User not found",
      }
    }

    const user = userResult[0]
    const passwordHash = hashPassword(password)

    if (passwordHash !== user.password_hash) {
      return {
        success: false,
        error: "Incorrect password",
      }
    }

    // Delete user data (in a real app, you might want to anonymize instead)
    await sql`DELETE FROM lesson_plans WHERE created_by = ${userId}`
    await sql`DELETE FROM quizzes WHERE created_by = ${userId}`
    await sql`DELETE FROM users WHERE id = ${userId}`

    console.log("Account deleted successfully for user:", userId)

    return {
      success: true,
      message: "Account deleted successfully",
    }
  } catch (error) {
    console.error("Delete account error:", error)
    return {
      success: false,
      error: "Failed to delete account",
    }
  }
}
