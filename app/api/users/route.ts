import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import bcrypt from "bcryptjs"

export async function GET() {
  try {
    // Note: In a real application, you'd want to implement proper pagination
    // and filtering for user management
    const users = await db.users.findMany()
    
    // Remove password hashes from the response
    const safeUsers = users.map((user: any) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      created_at: user.created_at
    }))

    return NextResponse.json({ users: safeUsers })
  } catch (error) {
    console.error("Error fetching users:", error)
    return NextResponse.json({ error: "Failed to fetch users", users: [] }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, role, password } = body

    // Validate required fields
    if (!name || !email || !role || !password) {
      return NextResponse.json(
        { error: "Missing required fields", fields: { name, email, role, password } },
        { status: 400 },
      )
    }

    // Check if email already exists
    const existingUser = await db.users.findFirst({ email })
    if (existingUser) {
      return NextResponse.json({ error: "Email already in use" }, { status: 400 })
    }

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create the new user
    const user = await db.users.create({
      name,
      email,
      password_hash: hashedPassword,
      role
    })

    // Remove password hash from response
    const { password_hash, ...safeUser } = user

    console.log("User created successfully:", safeUser)
    return NextResponse.json({ user: safeUser, success: true })
  } catch (error) {
    console.error("Error creating user:", error)
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 })
  }
}
