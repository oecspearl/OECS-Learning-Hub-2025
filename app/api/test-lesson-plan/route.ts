import { NextRequest, NextResponse } from "next/server"
import { generateLessonPlan } from "@/app/actions/lesson-plans"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    console.log("Test lesson plan API called with:", body)
    
    // Test lesson plan generation
    const result = await generateLessonPlan(body)
    
    console.log("Lesson plan generation result:", result)
    
    if (result.success) {
      return NextResponse.json({
        success: true,
        lessonPlan: result.lessonPlan,
        length: typeof result.lessonPlan === 'string' ? result.lessonPlan.length : 0,
        message: "Lesson plan generated successfully"
      })
    } else {
      return NextResponse.json({
        success: false,
        error: result.error,
        message: "Lesson plan generation failed"
      }, { status: 500 })
    }
    
  } catch (error) {
    console.error("Error in test lesson plan API:", error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
      message: "API error occurred"
    }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Test lesson plan API is working",
    status: "ok"
  })
} 