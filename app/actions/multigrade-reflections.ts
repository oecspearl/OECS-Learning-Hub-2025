"use server"

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Check if environment variables are available
if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase environment variables are not set for multigrade-reflections actions.')
}

const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseKey || 'placeholder-key'
)

export interface MultigradeReflection {
  id?: string
  multigrade_plan_id: string
  user_id: string
  reflection_date: string
  taught_date: string
  objectives_met?: string
  student_understanding?: string
  evidence_support?: string
  students_not_meeting_objectives?: string
  misconceptions_difficulties?: string
  assessment_effective?: string
  content_suitable?: string
  strategies_engaging?: string
  students_on_task?: string
  differentiation_effective?: string
  future_improvements?: string
  long_term_goals?: string
  behavioral_issues?: string
  student_opportunities?: string
  teaching_insights?: string
  overall_rating?: number
  time_management?: string
  student_engagement_level?: string
  next_steps?: string
  grade_level_effectiveness?: string
  peer_learning_success?: string
  differentiation_success?: string
  cross_grade_collaboration?: string
  created_at?: string
  updated_at?: string
}

export async function createMultigradeReflection(data: MultigradeReflection): Promise<{ success: boolean; data?: MultigradeReflection; error?: string }> {
  try {
    const { data: reflection, error } = await supabase
      .from('multigrade_reflections')
      .insert([data])
      .select()
      .single()

    if (error) {
      console.error('Error creating multigrade reflection:', error)
      return { success: false, error: error.message }
    }

    return { success: true, data: reflection }
  } catch (error) {
    console.error('Error creating multigrade reflection:', error)
    return { success: false, error: 'Failed to create multigrade reflection' }
  }
}

export async function getMultigradeReflections(multigrade_plan_id: string): Promise<{ success: boolean; data?: MultigradeReflection[]; error?: string }> {
  try {
    console.log('Fetching multigrade reflections for plan:', multigrade_plan_id)
    
    const { data: reflections, error } = await supabase
      .from('multigrade_reflections')
      .select('*')
      .eq('multigrade_plan_id', multigrade_plan_id)
      .order('created_at', { ascending: false })

    console.log('Supabase response:', { reflections, error })

    if (error) {
      console.error('Error fetching multigrade reflections:', error)
      return { success: false, error: error.message }
    }

    console.log('Returning multigrade reflections:', reflections)
    return { success: true, data: reflections }
  } catch (error) {
    console.error('Error fetching multigrade reflections:', error)
    return { success: false, error: 'Failed to fetch multigrade reflections' }
  }
}

// Alias for the function that will be imported
export const getMultigradeReflectionsByPlan = getMultigradeReflections

export async function updateMultigradeReflection(id: string, data: Partial<MultigradeReflection>): Promise<{ success: boolean; data?: MultigradeReflection; error?: string }> {
  try {
    const { data: reflection, error } = await supabase
      .from('multigrade_reflections')
      .update(data)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Error updating multigrade reflection:', error)
      return { success: false, error: error.message }
    }

    return { success: true, data: reflection }
  } catch (error) {
    console.error('Error updating multigrade reflection:', error)
    return { success: false, error: 'Failed to update multigrade reflection' }
  }
}

export async function deleteMultigradeReflection(id: string): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from('multigrade_reflections')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting multigrade reflection:', error)
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (error) {
    console.error('Error deleting multigrade reflection:', error)
    return { success: false, error: 'Failed to delete multigrade reflection' }
  }
} 