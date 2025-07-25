"use server"

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Check if environment variables are available
if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase environment variables are not set for lesson-reflections actions.')
}

const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseKey || 'placeholder-key'
)

export interface LessonReflection {
  id?: string
  lesson_plan_id: string
  user_id: string
  reflection_date: string
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
  created_at?: string
  updated_at?: string
}

export async function createLessonReflection(data: LessonReflection): Promise<{ success: boolean; data?: LessonReflection; error?: string }> {
  try {
    const { data: reflection, error } = await supabase
      .from('lesson_reflections')
      .insert([data])
      .select()
      .single()

    if (error) {
      console.error('Error creating lesson reflection:', error)
      return { success: false, error: error.message }
    }

    return { success: true, data: reflection }
  } catch (error) {
    console.error('Error creating lesson reflection:', error)
    return { success: false, error: 'Failed to create lesson reflection' }
  }
}

export async function getLessonReflections(lesson_plan_id: string): Promise<{ success: boolean; data?: LessonReflection[]; error?: string }> {
  try {
    console.log('Fetching reflections for lesson plan:', lesson_plan_id)
    
    const { data: reflections, error } = await supabase
      .from('lesson_reflections')
      .select('*')
      .eq('lesson_plan_id', lesson_plan_id)
      .order('created_at', { ascending: false })

    console.log('Supabase response:', { reflections, error })

    if (error) {
      console.error('Error fetching lesson reflections:', error)
      return { success: false, error: error.message }
    }

    console.log('Returning reflections:', reflections)
    return { success: true, data: reflections }
  } catch (error) {
    console.error('Error fetching lesson reflections:', error)
    return { success: false, error: 'Failed to fetch lesson reflections' }
  }
}

// Alias for the function that was being imported
export const getLessonReflectionsByLessonPlan = getLessonReflections

export async function updateLessonReflection(id: string, data: Partial<LessonReflection>): Promise<{ success: boolean; data?: LessonReflection; error?: string }> {
  try {
    const { data: reflection, error } = await supabase
      .from('lesson_reflections')
      .update(data)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Error updating lesson reflection:', error)
      return { success: false, error: error.message }
    }

    return { success: true, data: reflection }
  } catch (error) {
    console.error('Error updating lesson reflection:', error)
    return { success: false, error: 'Failed to update lesson reflection' }
  }
}

export async function deleteLessonReflection(id: string): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from('lesson_reflections')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting lesson reflection:', error)
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (error) {
    console.error('Error deleting lesson reflection:', error)
    return { success: false, error: 'Failed to delete lesson reflection' }
  }
} 