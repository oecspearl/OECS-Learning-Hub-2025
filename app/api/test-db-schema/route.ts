import { NextRequest, NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    console.log("Testing database schema...")
    
    // Test 1: Check if table exists and get its structure
    const { data: tableInfo, error: tableError } = await supabaseAdmin
      .from('lesson_plans')
      .select('*')
      .limit(1)
    console.log("Table info:", tableInfo)
    console.log("Table error:", tableError)
    
    // Test 2: Try to get the actual schema information
    const { data: schemaInfo, error: schemaError } = await supabaseAdmin
      .rpc('get_table_schema', { table_name: 'lesson_plans' })
    console.log("Schema info:", schemaInfo)
    console.log("Schema error:", schemaError)
    
    // Test 3: Try a simple insert with minimal data
    const testData = {
      id: `test_${Date.now()}`,
      title: 'Test Lesson',
      subject: 'Test',
      grade: 'Test',
      topic: 'Test Topic',
      content: 'Test content',
      duration: '50',
      user_id: 'test_user',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }
    console.log("Attempting test insert with data:", testData)
    const { data: insertResult, error: insertError } = await supabaseAdmin
      .from('lesson_plans')
      .insert([testData])
      .select()
    console.log("Insert result:", insertResult)
    console.log("Insert error:", insertError)
    
    return NextResponse.json({ 
      success: true, 
      tableInfo, 
      tableError, 
      schemaInfo, 
      schemaError,
      insertResult, 
      insertError 
    })
  } catch (error) {
    console.error("Database test error:", error)
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : "Unknown error" })
  }
} 