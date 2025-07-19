import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { users } from "@/lib/schema"
import { eq } from "drizzle-orm"
import bcrypt from "bcryptjs"

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const { name, email, currentPassword, newPassword } = await req.json()

    // Get current user
    const [user] = await db.select().from(users).where(eq(users.id, parseInt(session.user.id)))
    if (!user) {
      return new NextResponse("User not found", { status: 404 })
    }

    // If changing password, verify current password
    if (newPassword) {
      if (!currentPassword) {
        return new NextResponse("Current password is required", { status: 400 })
      }

      const isValidPassword = await bcrypt.compare(currentPassword, user.password)
      if (!isValidPassword) {
        return new NextResponse("Current password is incorrect", { status: 400 })
      }

      // Hash new password
      const hashedPassword = await bcrypt.hash(newPassword, 10)
      await db.update(users).set({ password: hashedPassword }).where(eq(users.id, user.id))
    }

    // Update user profile
    await db
      .update(users)
      .set({
        name,
        email,
        updatedAt: new Date().toISOString(),
      })
      .where(eq(users.id, user.id))

    return new NextResponse("Profile updated successfully", { status: 200 })
  } catch (error) {
    console.error("[PROFILE_UPDATE]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
} 