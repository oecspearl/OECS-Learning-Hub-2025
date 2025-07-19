import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from "../lib/schema"

const connectionString = "postgres://neondb_owner:npg_9D3bEqvSZgwA@ep-wandering-breeze-a4cxdyt0-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require"

async function resetDatabase() {
  const client = postgres(connectionString)
  const db = drizzle(client)

  try {
    // Drop all tables
    await client`
      DROP TABLE IF EXISTS 
        assessment_strategies,
        essential_learning_outcomes,
        learning_strategies,
        resources,
        specific_curriculum_outcomes,
        strands,
        teacher_content,
        users
      CASCADE;
    `
    console.log("Successfully dropped all tables")

    // Create tables one by one
    await client`CREATE TABLE "users" (
      "id" serial PRIMARY KEY NOT NULL,
      "name" text NOT NULL,
      "email" text NOT NULL,
      "password" text NOT NULL,
      "role" text DEFAULT 'user' NOT NULL,
      "created_at" timestamp DEFAULT now() NOT NULL,
      "updated_at" timestamp DEFAULT now() NOT NULL,
      CONSTRAINT "users_email_unique" UNIQUE("email")
    );`
    console.log("Created users table")

    await client`CREATE TABLE "strands" (
      "id" serial PRIMARY KEY NOT NULL,
      "name" text NOT NULL,
      "description" text,
      "order" integer NOT NULL
    );`
    console.log("Created strands table")

    await client`CREATE TABLE "essential_learning_outcomes" (
      "id" serial PRIMARY KEY NOT NULL,
      "strand_id" integer NOT NULL,
      "code" text NOT NULL,
      "description" text NOT NULL,
      "grade_expectations" text,
      CONSTRAINT "essential_learning_outcomes_strand_id_fkey" FOREIGN KEY ("strand_id") REFERENCES "strands"("id")
    );`
    console.log("Created essential_learning_outcomes table")

    await client`CREATE TABLE "specific_curriculum_outcomes" (
      "id" serial PRIMARY KEY NOT NULL,
      "elo_id" integer NOT NULL,
      "code" text NOT NULL,
      "description" text NOT NULL,
      CONSTRAINT "specific_curriculum_outcomes_elo_id_fkey" FOREIGN KEY ("elo_id") REFERENCES "essential_learning_outcomes"("id")
    );`
    console.log("Created specific_curriculum_outcomes table")

    await client`CREATE TABLE "assessment_strategies" (
      "id" serial PRIMARY KEY NOT NULL,
      "elo_id" integer NOT NULL,
      "type" text NOT NULL,
      "description" text NOT NULL,
      "examples" text,
      CONSTRAINT "assessment_strategies_elo_id_fkey" FOREIGN KEY ("elo_id") REFERENCES "essential_learning_outcomes"("id")
    );`
    console.log("Created assessment_strategies table")

    await client`CREATE TABLE "learning_strategies" (
      "id" serial PRIMARY KEY NOT NULL,
      "sco_id" integer NOT NULL,
      "title" text NOT NULL,
      "description" text NOT NULL,
      "resources" text,
      "integrations" text,
      CONSTRAINT "learning_strategies_sco_id_fkey" FOREIGN KEY ("sco_id") REFERENCES "specific_curriculum_outcomes"("id")
    );`
    console.log("Created learning_strategies table")

    await client`CREATE TABLE "resources" (
      "id" serial PRIMARY KEY NOT NULL,
      "strand_id" integer NOT NULL,
      "title" text NOT NULL,
      "type" text NOT NULL,
      "url" text,
      "description" text,
      CONSTRAINT "resources_strand_id_fkey" FOREIGN KEY ("strand_id") REFERENCES "strands"("id")
    );`
    console.log("Created resources table")

    await client`CREATE TABLE "teacher_content" (
      "id" serial PRIMARY KEY NOT NULL,
      "elo_id" integer NOT NULL,
      "title" text NOT NULL,
      "content" text NOT NULL,
      "resources" text,
      CONSTRAINT "teacher_content_elo_id_fkey" FOREIGN KEY ("elo_id") REFERENCES "essential_learning_outcomes"("id")
    );`
    console.log("Created teacher_content table")

    console.log("Successfully created all tables")
  } catch (error) {
    console.error("Error resetting database:", error)
    throw error
  } finally {
    await client.end()
  }
}

resetDatabase()
  .then(() => {
    console.log("Database reset completed successfully")
    process.exit(0)
  })
  .catch((error) => {
    console.error("Database reset failed:", error)
    process.exit(1)
  }) 