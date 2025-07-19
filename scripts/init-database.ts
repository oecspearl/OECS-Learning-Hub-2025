import { config } from "dotenv"
import { neon } from "@neondatabase/serverless"

// Load environment variables from .env file
config()

const DATABASE_URL = process.env.DATABASE_URL

if (!DATABASE_URL) {
  console.error("DATABASE_URL environment variable is not set")
  process.exit(1)
}

const sql = neon(DATABASE_URL)

async function initDatabase() {
  try {
    // Create strands table
    await sql.query(`
      CREATE TABLE IF NOT EXISTS strands (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT,
        "order" INTEGER NOT NULL
      )
    `)
    console.log("Created strands table")

    // Create essential_learning_outcomes table
    await sql.query(`
      CREATE TABLE IF NOT EXISTS essential_learning_outcomes (
        id SERIAL PRIMARY KEY,
        strand_id INTEGER NOT NULL REFERENCES strands(id),
        code TEXT NOT NULL,
        description TEXT NOT NULL,
        grade_expectations TEXT
      )
    `)
    console.log("Created essential_learning_outcomes table")

    // Create specific_curriculum_outcomes table
    await sql.query(`
      CREATE TABLE IF NOT EXISTS specific_curriculum_outcomes (
        id SERIAL PRIMARY KEY,
        elo_id INTEGER NOT NULL REFERENCES essential_learning_outcomes(id),
        code TEXT NOT NULL,
        description TEXT NOT NULL
      )
    `)
    console.log("Created specific_curriculum_outcomes table")

    // Create assessment_strategies table
    await sql.query(`
      CREATE TABLE IF NOT EXISTS assessment_strategies (
        id SERIAL PRIMARY KEY,
        elo_id INTEGER NOT NULL REFERENCES essential_learning_outcomes(id),
        type TEXT NOT NULL,
        description TEXT NOT NULL,
        examples TEXT
      )
    `)
    console.log("Created assessment_strategies table")

    // Create learning_strategies table
    await sql.query(`
      CREATE TABLE IF NOT EXISTS learning_strategies (
        id SERIAL PRIMARY KEY,
        sco_id INTEGER NOT NULL REFERENCES specific_curriculum_outcomes(id),
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        resources TEXT,
        integrations TEXT
      )
    `)
    console.log("Created learning_strategies table")

    // Create resources table
    await sql.query(`
      CREATE TABLE IF NOT EXISTS resources (
        id SERIAL PRIMARY KEY,
        strand_id INTEGER NOT NULL REFERENCES strands(id),
        title TEXT NOT NULL,
        type TEXT NOT NULL,
        url TEXT,
        description TEXT
      )
    `)
    console.log("Created resources table")

    // Create teacher_content table
    await sql.query(`
      CREATE TABLE IF NOT EXISTS teacher_content (
        id SERIAL PRIMARY KEY,
        elo_id INTEGER NOT NULL REFERENCES essential_learning_outcomes(id),
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        resources TEXT
      )
    `)
    console.log("Created teacher_content table")

    console.log("Database initialization complete")
  } catch (error) {
    console.error("Error initializing database:", error)
  }
}

initDatabase()
