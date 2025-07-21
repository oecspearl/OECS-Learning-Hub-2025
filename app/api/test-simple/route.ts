import { NextRequest, NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    console.log("Testing basic Supabase connection...")
    
    // Test basic connection
    const { data, error } = await supabaseAdmin
      .from('users')
      .select('count')
      .limit(1)
    
    console.log("Connection test result:", { data, error })
    
    return NextResponse.json({
      success: true,
      data,
      error: error ? error.message : null
    })
    
  } catch (error) {
    console.error("Connection test error:", error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error"
    })
  }
} 