import { db } from "@/lib/db"
import { sql } from "drizzle-orm"

async function setupSchedulesTable() {
  try {
    // Create schedules table
    await db.run(sql`
      CREATE TABLE IF NOT EXISTS schedules (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id TEXT NOT NULL,
        class_name TEXT NOT NULL,
        subject TEXT NOT NULL,
        day_of_week INTEGER NOT NULL CHECK (day_of_week BETWEEN 0 AND 6),
        start_time TEXT NOT NULL,
        end_time TEXT NOT NULL,
        room_number TEXT,
        notes TEXT,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        CHECK (start_time < end_time)
      )
    `)

    // Create indexes
    await db.run(sql`
      CREATE INDEX IF NOT EXISTS idx_schedules_user_id ON schedules(user_id)
    `)
    await db.run(sql`
      CREATE INDEX IF NOT EXISTS idx_schedules_day_time ON schedules(day_of_week, start_time)
    `)

    console.log("Schedules table created successfully")
  } catch (error) {
    console.error("Error creating schedules table:", error)
  }
}

setupSchedulesTable() 