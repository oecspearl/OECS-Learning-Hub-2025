import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from "../lib/schema"
import bcrypt from "bcryptjs"

const connectionString = "postgres://neondb_owner:npg_9D3bEqvSZgwA@ep-wandering-breeze-a4cxdyt0-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require"

async function createTestUser() {
  const client = postgres(connectionString)
  const db = drizzle(client, { schema })

  try {
    // Create a test user
    const hashedPassword = await bcrypt.hash("test123", 10)
    const testUser = {
      name: "Test User",
      email: "test@example.com",
      password: hashedPassword,
      role: "admin"
    }

    const result = await db.insert(schema.users).values(testUser).returning()
    console.log("Test user created successfully:", result[0])
  } catch (error) {
    console.error("Error creating test user:", error)
    throw error
  } finally {
    await client.end()
  }
}

createTestUser()
  .then(() => {
    console.log("Test user creation completed")
    process.exit(0)
  })
  .catch((error) => {
    console.error("Test user creation failed:", error)
    process.exit(1)
  }) 