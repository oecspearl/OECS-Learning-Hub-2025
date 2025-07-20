import { db } from "@/lib/db"
import { lessonPlans, multigradePlans } from "@/lib/schema"

async function createTables() {
  try {
    // Create lesson_plans table
    // await db.run(`
    //   CREATE TABLE IF NOT EXISTS lesson_plans (
    //     id TEXT PRIMARY KEY,
    //     title TEXT NOT NULL,
    //     content TEXT NOT NULL,
    //     created_at TEXT NOT NULL,
    //     updated_at TEXT NOT NULL
    //   )
    // `)

    // Create multigrade_plans table
    // await db.run(`
    //   CREATE TABLE IF NOT EXISTS multigrade_plans (
    //     id INTEGER PRIMARY KEY AUTOINCREMENT,
    //     title TEXT NOT NULL,
    //     content TEXT NOT NULL,
    //     created_at TEXT NOT NULL,
    //     updated_at TEXT NOT NULL
    //   )
    // `)

    // Create cross_curricular_plans table
    // await db.run(`
    //   CREATE TABLE IF NOT EXISTS cross_curricular_plans (
    //     id INTEGER PRIMARY KEY AUTOINCREMENT,
    //     title TEXT NOT NULL,
    //     content TEXT NOT NULL,
    //     created_at TEXT NOT NULL,
    //     updated_at TEXT NOT NULL
    //   )
    // `)

    console.log("Tables created successfully!")
  } catch (error) {
    console.error("Error creating tables:", error)
  }
}

createTables() 