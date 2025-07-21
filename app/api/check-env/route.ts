import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  
  console.log("Environment variables check:")
  console.log("NEXT_PUBLIC_SUPABASE_URL:", supabaseUrl ? "Set" : "Missing")
  console.log("NEXT_PUBLIC_SUPABASE_ANON_KEY:", supabaseAnonKey ? "Set" : "Missing")
  console.log("SUPABASE_SERVICE_ROLE_KEY:", supabaseServiceKey ? "Set" : "Missing")
  
  return NextResponse.json({
    supabaseUrl: supabaseUrl ? "Set" : "Missing",
    supabaseAnonKey: supabaseAnonKey ? "Set" : "Missing", 
    supabaseServiceKey: supabaseServiceKey ? "Set" : "Missing",
    allSet: !!(supabaseUrl && supabaseAnonKey && supabaseServiceKey)
  })
}
