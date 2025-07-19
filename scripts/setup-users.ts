import { executeQuery } from "@/lib/db"
import bcrypt from "bcrypt"

async function setupUsersTable() {
  try {
    console.log("Starting users table setup...")

    // Drop existing table if it exists
    await executeQuery(`
      DROP TABLE IF EXISTS users
    `)
    console.log("Dropped existing users table if it existed")

    // Create users table
    await executeQuery(`
      CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        role TEXT NOT NULL DEFAULT 'teacher',
        created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `)
    console.log("Users table created successfully")

    // Create indexes
    await executeQuery(`
      CREATE INDEX IF NOT EXISTS idx_users_email ON users(email)
    `)
    console.log("Email index created successfully")

    await executeQuery(`
      CREATE INDEX IF NOT EXISTS idx_users_role ON users(role)
    `)
    console.log("Role index created successfully")

    // Generate bcrypt hash for the password 'password123'
    const password = 'password123'
    const hash = await bcrypt.hash(password, 10)

    // Insert test users with bcrypt hash
    await executeQuery(`
      INSERT INTO users (name, email, password_hash, role, created_at, updated_at)
      VALUES 
      (?, ?, '${hash}', ?, datetime('now'), datetime('now')),
      (?, ?, '${hash}', ?, datetime('now'), datetime('now')),
      (?, ?, '${hash}', ?, datetime('now'), datetime('now')),
      (?, ?, '${hash}', ?, datetime('now'), datetime('now'))
    `, [
      'System Administrator', 'admin@oecs.edu', 'administrator',
      'Demo Teacher', 'teacher@oecs.edu', 'teacher',
      'Curriculum Specialist', 'specialist@oecs.edu', 'curriculum_specialist',
      'School Principal', 'principal@oecs.edu', 'principal',
    ])
    console.log("Test users inserted successfully")

    // Verify table creation
    const tableExists = await executeQuery("SELECT name FROM sqlite_master WHERE type='table' AND name='users'")
    
    if (Array.isArray(tableExists) && tableExists.length > 0) {
      console.log("Verification successful: users table exists")
    } else {
      throw new Error("Table creation verification failed")
    }

    console.log("Setup completed successfully")
  } catch (error) {
    console.error("Error during setup:", error)
    throw error
  }
}

// Run the setup
(async () => {
  try {
    await setupUsersTable()
    process.exit(0)
  } catch (error) {
    console.error("Setup failed:", error)
    process.exit(1)
  }
})() 