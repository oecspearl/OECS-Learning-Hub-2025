import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("q")?.trim()
    const type = searchParams.get("type") || "all"
    const limit = parseInt(searchParams.get("limit") || "20")

    if (!query || query.length < 2) {
      return NextResponse.json({
        success: false,
        error: "Search query must be at least 2 characters long"
      })
    }

    // Temporary mock response until search is properly implemented with Supabase
    console.log(`Search query: ${query}, type: ${type}, limit: ${limit}`)

    const results = {
      lessonPlans: [],
      quizzes: [],
      multigradePlans: [],
      crossCurricularPlans: [],
      curriculum: [],
      total: 0
    }

    return NextResponse.json({
      success: true,
      data: results,
      message: "Search functionality temporarily disabled - will be implemented with Supabase"
    })
  } catch (error) {
    console.error("[SEARCH_ERROR]", error)
    return NextResponse.json({
      success: false,
      error: "Search functionality temporarily unavailable"
    })
  }
} 