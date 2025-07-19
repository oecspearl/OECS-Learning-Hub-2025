"use server"

import { sql } from "@/lib/db"

export async function setupUsersTable() {
  try {
    console.log("Starting database setup...")

    // Drop existing table
    await sql`DROP TABLE IF EXISTS users CASCADE`
    console.log("Dropped existing users table")

    // Create users table
    await sql`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        role VARCHAR(50) NOT NULL DEFAULT 'teacher',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
    `
    console.log("Created users table")

    // Create indexes
    await sql`CREATE INDEX idx_users_email ON users(email)`
    await sql`CREATE INDEX idx_users_role ON users(role)`
    console.log("Created indexes")

    // Add role constraint
    await sql`
      ALTER TABLE users ADD CONSTRAINT users_role_check 
      CHECK (role IN ('teacher', 'administrator', 'curriculum_specialist', 'principal'))
    `
    console.log("Added role constraint")

    // Insert test users
    await sql`
      INSERT INTO users (name, email, password_hash, role, created_at, updated_at)
      VALUES 
      (
        'System Administrator',
        'admin@oecs.edu',
        '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9',
        'administrator',
        NOW(),
        NOW()
      ),
      (
        'Demo Teacher',
        'teacher@oecs.edu',
        '4d01ce8b6f18d6e91e4fa1b865ea3d686fbbd9908c4a35aec03c0c082b1ce77a',
        'teacher',
        NOW(),
        NOW()
      ),
      (
        'Curriculum Specialist',
        'specialist@oecs.edu',
        'ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f',
        'curriculum_specialist',
        NOW(),
        NOW()
      ),
      (
        'School Principal',
        'principal@oecs.edu',
        'c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd4',
        'principal',
        NOW(),
        NOW()
      )
    `
    console.log("Inserted test users")

    // Verify setup
    const userCount = await sql`SELECT COUNT(*) as count FROM users`
    const users = await sql`SELECT id, name, email, role FROM users ORDER BY id`

    console.log("Database setup completed successfully")

    return {
      success: true,
      message: "Database setup completed successfully",
      userCount: userCount[0].count,
      users: users,
    }
  } catch (error) {
    console.error("Database setup error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    }
  }
}
