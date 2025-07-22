import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/db'

export async function GET() {
  console.log("Testing database schema...")

  try {
    // Check if Supabase client is available
    if (!supabaseAdmin) {
      return NextResponse.json({
        error: 'Supabase client not initialized',
        message: 'Database connection not available'
      })
    }

    // Test 1: Check if table exists and get its structure
    const { data: tableInfo, error: tableError } = await supabaseAdmin
      .from('lesson_plans')
      .select('*')
      .limit(1)

    console.log("Table info:", tableInfo)
    console.log("Table error:", tableError)

    // Test 2: Try to insert a test record
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
      updated_at: new Date().toISOString()
    }

    console.log("Attempting test insert with data:", testData)

    const { data: insertResult, error: insertError } = await supabaseAdmin
      .from('lesson_plans')
      .insert(testData)
      .select()

    console.log("Insert result:", insertResult)
    console.log("Insert error:", insertError)

    // Clean up: Delete the test record
    if (insertResult && insertResult.length > 0) {
      await supabaseAdmin
        .from('lesson_plans')
        .delete()
        .eq('id', testData.id)
    }

    return NextResponse.json({
      success: true,
      tableInfo,
      tableError,
      insertResult,
      insertError
    })

  } catch (error) {
    console.error("Schema test error:", error)
    return NextResponse.json({
      error: 'Schema test failed',
      message: error instanceof Error ? error.message : 'Unknown error'
    })
  }
} 