import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("q")?.trim()

    if (!query || query.length < 2) {
      return NextResponse.json({
        success: false,
        error: "Search query must be at least 2 characters long"
      })
    }

    // Temporary mock response until curriculum search is properly implemented with Supabase
    console.log(`Curriculum search query: ${query}`)

    const mockResults = [
      {
        id: "strand-1",
        title: "Listening and Speaking",
        content: "Students develop listening and speaking skills through various activities",
        type: "strand",
        subject: "Language Arts",
        grade: "Grade 1",
        url: "/curriculum/standards",
        matchedText: "Listening and Speaking",
        relevance: 8
      },
      {
        id: "elo-1",
        title: "1.1 Choose to listen",
        content: "Students choose to listen to music, poetry and stories for pleasure",
        type: "outcome",
        subject: "Language Arts",
        grade: "Grade 1",
        url: "/curriculum/standards",
        matchedText: "Students choose to listen to music, poetry and stories for pleasure",
        relevance: 6
      }
    ]

    return NextResponse.json({
      success: true,
      results: mockResults,
      message: "Curriculum search functionality temporarily disabled - will be implemented with Supabase"
    })
  } catch (error) {
    console.error("[CURRICULUM_SEARCH_ERROR]", error)
    return NextResponse.json({
      success: false,
      error: "Curriculum search functionality temporarily unavailable"
    })
  }
} 