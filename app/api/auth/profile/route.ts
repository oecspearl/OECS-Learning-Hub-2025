import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import bcrypt from "bcryptjs"

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const { name, email, currentPassword, newPassword } = await req.json()

    // Get current user
    const user = await db.users.findFirst({ id: parseInt(session.user.id) })
    if (!user) {
      return new NextResponse("User not found", { status: 404 })
    }

    // If changing password, verify current password
    if (newPassword) {
      if (!currentPassword) {
        return new NextResponse("Current password is required", { status: 400 })
      }

      const isValidPassword = await bcrypt.compare(currentPassword, user.password_hash)
      if (!isValidPassword) {
        return new NextResponse("Current password is incorrect", { status: 400 })
      }

      // Hash new password
      const hashedPassword = await bcrypt.hash(newPassword, 10)
      await db.users.update(user.id, { password_hash: hashedPassword })
    }

    // Update user profile
    await db.users.update(user.id, {
      name,
      email,
      updated_at: new Date().toISOString(),
    })

    return new NextResponse("Profile updated successfully", { status: 200 })
  } catch (error) {
    console.error("[PROFILE_UPDATE]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
} 