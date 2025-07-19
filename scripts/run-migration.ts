import { db } from "@/lib/db"

async function runMigration() {
  try {
    console.log("Running migration to add new lesson plan fields...")
    
    // Add new columns
    await db.run("ALTER TABLE lesson_plans ADD COLUMN overview TEXT")
    console.log("Added overview column")
    
    await db.run("ALTER TABLE lesson_plans ADD COLUMN standards TEXT")
    console.log("Added standards column")
    
    await db.run("ALTER TABLE lesson_plans ADD COLUMN vocabulary TEXT")
    console.log("Added vocabulary column")
    
    await db.run("ALTER TABLE lesson_plans ADD COLUMN homework TEXT")
    console.log("Added homework column")
    
    await db.run("ALTER TABLE lesson_plans ADD COLUMN extensions TEXT")
    console.log("Added extensions column")
    
    console.log("Migration completed successfully!")
  } catch (error) {
    console.error("Error running migration:", error)
    process.exit(1)
  }
}

runMigration() 