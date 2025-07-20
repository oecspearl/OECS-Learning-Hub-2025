import { db } from "@/lib/db"
import { users } from "@/lib/schema"
import { hash } from "bcrypt"
// import { migrate } from "drizzle-orm/better-sqlite3/migrator"
import { initializeSettings } from "./init-settings"

export async function initializeDatabase() {
  try {
    console.log("Skipping database migrations for now...")
    // migrate(db, { migrationsFolder: "drizzle" })
    // console.log("Migrations completed successfully")

    // Initialize settings
    await initializeSettings()

    // Check if admin user already exists
    // const existingAdmin = await db.query.users.findFirst({
    //   where: eq(users.email, "admin@oecslearninghub.com"),
    // })

    // if (!existingAdmin) {
    //   // Create admin user
    //   await db.insert(users).values({
    //     name: "Admin User",
    //     email: "admin@oecslearninghub.com",
    //     password: await hash("admin123", 10),
    //     role: "ADMIN",
    //     created_at: new Date().toISOString(),
    //     updated_at: new Date().toISOString(),
    //   })
    //   console.log("Admin user created successfully")
    // } else {
    //   console.log("Admin user already exists")
    // }

    console.log("Database initialization completed successfully")
  } catch (error) {
    console.error("Error initializing database:", error)
    throw error
  }
} 