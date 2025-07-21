import { NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function POST(request: NextRequest) {
  try {
    const quizData = await request.json()
    
    console.log("Creating quiz via API:", quizData)
    
    // Use service role key to bypass RLS
    const { data, error } = await supabase
      .from('quizzes')
      .insert(quizData)
      .select()
      .single()
    
    if (error) {
      console.error("API quiz creation error:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    
    console.log("Quiz created successfully via API:", data)
    return NextResponse.json({ data })
    
  } catch (error) {
    console.error("Error in quiz creation API:", error)
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : "Unknown error" 
    }, { status: 500 })
  }
} 