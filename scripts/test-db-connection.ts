import { neon } from "@neondatabase/serverless"

// Get the database URL from command line arguments
const databaseUrl = process.argv[2]

if (!databaseUrl) {
  console.error("Please provide a database URL as an argument")
  console.error("Example: npx tsx scripts/test-db-connection.ts postgres://your-connection-string")
  process.exit(1)
}

async function testConnection() {
  try {
    console.log("Testing database connection...")
    const sql = neon(databaseUrl)

    // Try a simple query
    const result = await sql.query("SELECT 1 as test")
    console.log("Connection successful!")
    console.log("Query result:", result)

    console.log("\nDatabase connection is working correctly.")
  } catch (error) {
    console.error("Error connecting to database:", error)
  }
}

testConnection()
