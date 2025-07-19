import { db } from "@/lib/db"
import { lessonPlans, multigradePlans } from "@/lib/schema"

async function createTables() {
  try {
    // Create lesson_plans table
    await db.run(`
      CREATE TABLE IF NOT EXISTS lesson_plans (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        subject TEXT NOT NULL,
        grade TEXT NOT NULL,
        topic TEXT,
        content TEXT NOT NULL,
        duration TEXT NOT NULL,
        objectives TEXT,
        materials TEXT,
        overview TEXT,
        standards TEXT,
        vocabulary TEXT,
        homework TEXT,
        extensions TEXT,
        pedagogical_strategy TEXT,
        differentiation_strategies TEXT,
        grouping_strategy TEXT,
        assessment_approach TEXT,
        curriculum_standards TEXT,
        user_id TEXT NOT NULL,
        created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // Create multigrade_plans table
    await db.run(`
      CREATE TABLE IF NOT EXISTS multigrade_plans (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        subject TEXT NOT NULL,
        grade_range TEXT NOT NULL,
        topic TEXT,
        content TEXT NOT NULL,
        duration TEXT,
        materials TEXT,
        pedagogical_strategy TEXT,
        differentiation_strategies TEXT,
        grouping_strategy TEXT,
        assessment_approach TEXT,
        curriculum_standards TEXT,
        created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // Create cross_curricular_plans table
    await db.run(`
      CREATE TABLE IF NOT EXISTS cross_curricular_plans (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        theme TEXT NOT NULL,
        grade_range TEXT NOT NULL,
        subjects TEXT NOT NULL,
        duration TEXT NOT NULL,
        sessions TEXT NOT NULL,
        content TEXT NOT NULL,
        learning_styles TEXT,
        multiple_intelligences TEXT,
        special_needs INTEGER,
        special_needs_details TEXT,
        ell_support INTEGER,
        gifted_extension INTEGER,
        pedagogical_strategy TEXT,
        assessment_strategy TEXT,
        technology_integration INTEGER,
        additional_instructions TEXT,
        user_id TEXT NOT NULL,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
      )
    `)

    console.log("Tables created successfully!")
  } catch (error) {
    console.error("Error creating tables:", error)
  }
}

createTables() 