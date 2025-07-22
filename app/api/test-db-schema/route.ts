import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    console.log('Testing database schema...')
    
    // Test multigrade_plans table
    console.log('Testing multigrade_plans table...')
    
    const testData = {
      title: 'Test Multigrade Plan',
      subject: 'Mathematics',
      grade_range: '3-4',
      topic: 'Addition',
      content: 'This is a test multigrade lesson plan content.',
      duration: '60',
      materials: 'Tablets, Smartboard',
      pedagogical_strategy: 'Direct Instruction',
      differentiation_strategies: 'Tiered assignments',
      grouping_strategy: 'Mixed-grade groups',
      curriculum_standards: 'Grade 3-4 math standards',
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
    console.error('Error testing multigrade plan save:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to test multigrade plan save'
    }, { status: 500 })
  }
} 