import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { supabaseAdmin } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    console.log('Testing multigrade plan save...')
    
    // First, check if the table exists
    console.log('Checking if multigrade_plans table exists...')
    
    if (!supabaseAdmin) {
      throw new Error('Supabase admin client not available')
    }
    
    // Try to query the table to see if it exists
    const { data: tableCheck, error: tableError } = await supabaseAdmin
      .from('multigrade_plans')
      .select('id')
      .limit(1)
    
    if (tableError) {
      console.error('Table check error:', tableError)
      return NextResponse.json({
        success: false,
        error: `Table check failed: ${tableError.message}`,
        details: tableError
      }, { status: 500 })
    }
    
    console.log('Table exists, proceeding with test save...')
    
    const testData = {
      title: 'Test Multigrade Plan',
      subject: 'Mathematics',
      grade_range: '3-4',
      content: 'This is a test multigrade lesson plan content.',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
    
    console.log('Attempting to save test multigrade plan:', testData)
    
    const result = await db.multigradePlans.create(testData)
    
    console.log('Multigrade plan saved successfully:', result)
    
    return NextResponse.json({
      success: true,
      message: 'Multigrade plan saved successfully',
      data: result
    })
  } catch (error) {
    console.error('Error saving multigrade plan:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to save multigrade plan',
      details: error
    }, { status: 500 })
  }
} 