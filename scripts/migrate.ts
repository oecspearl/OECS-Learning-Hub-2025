import { migrate } from "drizzle-orm/better-sqlite3/migrator"
import { db } from "@/lib/db"

console.log("Running migrations...")

try {
  // migrate(db, { migrationsFolder: "drizzle" })
  // console.log("Migrations completed successfully!")
} catch (error) {
  console.error("Error running migrations:", error)
  process.exit(1)
} 