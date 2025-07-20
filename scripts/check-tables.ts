import { db } from "@/lib/db"
import { sql } from "drizzle-orm"

async function checkTables() {
  try {
    // const result = await db.run(sql`SELECT name FROM sqlite_master WHERE type='table'`)
    // console.log("Tables in database:", result)
  } catch (error) {
    console.error("Error checking tables:", error)
  }
}

checkTables() 