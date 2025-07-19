import { db } from "@/lib/db"
import { users } from "@/lib/schema"
import { hash } from "bcrypt"
import { migrate } from "drizzle-orm/better-sqlite3/migrator"
import { initializeSettings } from "./init-settings"

export async function initializeDatabase() {
  try {
    console.log("Running database migrations...")
    migrate(db, { migrationsFolder: "drizzle" })
    console.log("Migrations completed successfully")

    // Initialize settings
    await initializeSettings()

    // Check if admin user exists
    const existingAdmin = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.email, "admin@example.com")
    })

    if (!existingAdmin) {
      console.log("Creating default admin user...")
      const hashedPassword = await hash("admin123", 10)
      await db.insert(users).values({
        name: "Admin User",
        email: "admin@example.com",
        password: hashedPassword,
        role: "ADMIN",
      })
      console.log("Default admin user created successfully")
    }

    console.log("Database initialization completed successfully")
  } catch (error) {
    console.error("Error initializing database:", error)
    throw error
  }
} 