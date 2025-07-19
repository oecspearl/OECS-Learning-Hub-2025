"use server"

import { db } from "@/lib/db"

export async function setupUsersTable() {
  try {
    console.log("Starting database setup...")

    // Note: In Supabase, tables are typically created through migrations or the dashboard
    // This function will check if the users table exists and insert test data if needed

    console.log("Checking existing users...")

    // Check if test users already exist
    const allUsers = await db.users.findMany()
    const existingUsers = allUsers.filter((user: any) => 
      ['admin@oecs.edu', 'teacher@oecs.edu', 'specialist@oecs.edu', 'principal@oecs.edu'].includes(user.email)
    )

    if (existingUsers.length > 0) {
      console.log("Test users already exist")
      return {
        success: true,
        message: "Test users already exist in database",
        userCount: existingUsers.length,
        users: existingUsers,
      }
    }

    // Insert test users one by one since createMany is not available
    const testUsers = [
      {
        name: 'System Administrator',
        email: 'admin@oecs.edu',
        password_hash: '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9',
        role: 'administrator',
      },
      {
        name: 'Demo Teacher',
        email: 'teacher@oecs.edu',
        password_hash: '4d01ce8b6f18d6e91e4fa1b865ea3d686fbbd9908c4a35aec03c0c082b1ce77a',
        role: 'teacher',
      },
      {
        name: 'Curriculum Specialist',
        email: 'specialist@oecs.edu',
        password_hash: 'ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f',
        role: 'curriculum_specialist',
      },
      {
        name: 'School Principal',
        email: 'principal@oecs.edu',
        password_hash: 'c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd4',
        role: 'principal',
      }
    ]

    // Create users one by one
    for (const user of testUsers) {
      await db.users.create(user)
    }

    console.log("Inserted test users")

    // Verify setup
    const updatedUsers = await db.users.findMany()

    console.log("Database setup completed successfully")

    return {
      success: true,
      message: "Database setup completed successfully",
      userCount: updatedUsers.length,
      users: updatedUsers,
    }
  } catch (error) {
    console.error("Database setup error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    }
  }
}
