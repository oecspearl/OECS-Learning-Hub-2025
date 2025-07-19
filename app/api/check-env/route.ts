import { NextResponse } from "next/server"
import { testDatabaseConnection } from "@/lib/db"

export async function GET() {
  const openaiKey = process.env.OPENAI_API_KEY
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // Check database connection
  const dbTest = await testDatabaseConnection()

  const checks = {
    openai: !!openaiKey,
    supabase: !!supabaseUrl && !!supabaseKey,
    database: dbTest.success
  }

  const allConfigured = checks.openai && checks.supabase && checks.database

  return NextResponse.json({
    configured: allConfigured,
    checks,
    message: allConfigured 
      ? "Environment is properly configured." 
      : "Some environment variables or database connection are not configured properly.",
    databaseError: dbTest.success ? null : dbTest.error
  })
}
