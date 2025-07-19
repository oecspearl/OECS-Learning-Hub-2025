import { sqlite } from "@/lib/db"

function setupLessonPlansTable() {
  try {
    console.log("Starting lesson plans table setup...")

    // Drop existing table if it exists
    const dropTable = sqlite.prepare(`
      DROP TABLE IF EXISTS lesson_plans
    `)
    dropTable.run()
    console.log("Dropped existing lesson_plans table if it existed")

    // Create lesson_plans table
    const createTable = sqlite.prepare(`
      CREATE TABLE lesson_plans (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        subject TEXT NOT NULL,
        grade TEXT NOT NULL,
        topic TEXT,
        content TEXT NOT NULL,
        objectives TEXT,
        materials TEXT,
        duration INTEGER NOT NULL,
        user_id TEXT NOT NULL,
        created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `)
    createTable.run()
    console.log("Lesson plans table created successfully")

    // Create indexes
    const createUserIndex = sqlite.prepare(`
      CREATE INDEX IF NOT EXISTS idx_lesson_plans_user_id ON lesson_plans(user_id)
    `)
    createUserIndex.run()
    console.log("User ID index created successfully")

    const createSubjectIndex = sqlite.prepare(`
      CREATE INDEX IF NOT EXISTS idx_lesson_plans_subject ON lesson_plans(subject)
    `)
    createSubjectIndex.run()
    console.log("Subject index created successfully")

    // Verify table creation
    const verifyTable = sqlite.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='lesson_plans'")
    const tableExists = verifyTable.get()
    
    if (tableExists) {
      console.log("Verification successful: lesson_plans table exists")
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
try {
  setupLessonPlansTable()
  process.exit(0)
} catch (error) {
  console.error("Setup failed:", error)
  process.exit(1)
} 