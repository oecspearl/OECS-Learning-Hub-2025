import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Check if environment variables are available
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables are not set. Database functionality will be limited.')
  console.warn('Please add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your .env.local file')
}

// Create a mock client if environment variables are missing
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : {
      from: () => ({
        select: () => ({ eq: () => ({ limit: () => ({ single: () => Promise.resolve({ data: null, error: null }) }) }) }),
        insert: () => ({ select: () => ({ single: () => Promise.resolve({ data: null, error: null }) }) }),
        update: () => ({ eq: () => ({ select: () => ({ single: () => Promise.resolve({ data: null, error: null }) }) }) }),
        delete: () => ({ eq: () => Promise.resolve({ error: null }) }),
        upsert: () => ({ select: () => ({ single: () => Promise.resolve({ data: null, error: null }) }) }),
        order: () => ({ limit: () => Promise.resolve({ data: [], error: null }) })
      })
    } as any

// Database types for TypeScript support
export type Database = {
  public: {
    Tables: {
      strands: {
        Row: {
          id: number
          name: string
          description: string | null
          sort_order: number
          subject: string | null
          grade: string | null
        }
        Insert: {
          id?: number
          name: string
          description?: string | null
          sort_order: number
          subject?: string | null
          grade?: string | null
        }
        Update: {
          id?: number
          name?: string
          description?: string | null
          sort_order?: number
          subject?: string | null
          grade?: string | null
        }
      }
      essential_learning_outcomes: {
        Row: {
          id: number
          strand_id: number
          code: string
          description: string
          grade_expectations: string | null
          subject: string | null
          grade: string | null
        }
        Insert: {
          id?: number
          strand_id: number
          code: string
          description: string
          grade_expectations?: string | null
          subject?: string | null
          grade?: string | null
        }
        Update: {
          id?: number
          strand_id?: number
          code?: string
          description?: string
          grade_expectations?: string | null
          subject?: string | null
          grade?: string | null
        }
      }
      specific_curriculum_outcomes: {
        Row: {
          id: number
          elo_id: number
          code: string
          description: string
          subject: string | null
          grade: string | null
        }
        Insert: {
          id?: number
          elo_id: number
          code: string
          description: string
          subject?: string | null
          grade?: string | null
        }
        Update: {
          id?: number
          elo_id?: number
          code?: string
          description?: string
          subject?: string | null
          grade?: string | null
        }
      }
      assessment_strategies: {
        Row: {
          id: number
          elo_id: number
          type: string
          description: string
          examples: string | null
        }
        Insert: {
          id?: number
          elo_id: number
          type: string
          description: string
          examples?: string | null
        }
        Update: {
          id?: number
          elo_id?: number
          type?: string
          description?: string
          examples?: string | null
        }
      }
      learning_strategies: {
        Row: {
          id: number
          sco_id: number
          title: string
          description: string
          resources: string | null
          integrations: string | null
        }
        Insert: {
          id?: number
          sco_id: number
          title: string
          description: string
          resources?: string | null
          integrations?: string | null
        }
        Update: {
          id?: number
          sco_id?: number
          title?: string
          description?: string
          resources?: string | null
          integrations?: string | null
        }
      }
      resources: {
        Row: {
          id: number
          strand_id: number
          title: string
          type: string
          url: string | null
          description: string | null
        }
        Insert: {
          id?: number
          strand_id: number
          title: string
          type: string
          url?: string | null
          description?: string | null
        }
        Update: {
          id?: number
          strand_id?: number
          title?: string
          type?: string
          url?: string | null
          description?: string | null
        }
      }
      teacher_content: {
        Row: {
          id: number
          elo_id: number
          title: string
          content: string
          resources: string | null
        }
        Insert: {
          id?: number
          elo_id: number
          title: string
          content: string
          resources?: string | null
        }
        Update: {
          id?: number
          elo_id?: number
          title?: string
          content?: string
          resources?: string | null
        }
      }
      users: {
        Row: {
          id: number
          name: string
          email: string
          password_hash: string
          role: string
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: number
          name: string
          email: string
          password_hash: string
          role?: string
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          name?: string
          email?: string
          password_hash?: string
          role?: string
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      settings: {
        Row: {
          id: number
          key: string
          value: string | null
          type: string
          category: string
          description: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: number
          key: string
          value?: string | null
          type: string
          category: string
          description?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: number
          key?: string
          value?: string | null
          type?: string
          category?: string
          description?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      multigrade_plans: {
        Row: {
          id: number
          title: string
          subject: string
          grade_range: string
          topic: string | null
          lesson_content: string
          duration: string | null
          materials: string | null
          pedagogical_strategy: string | null
          differentiation_strategies: string | null
          grouping_strategy: string | null
          assessment_approach: string | null
          curriculum_standards: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: number
          title: string
          subject: string
          grade_range: string
          topic?: string | null
          lesson_content: string
          duration?: string | null
          materials?: string | null
          pedagogical_strategy?: string | null
          differentiation_strategies?: string | null
          grouping_strategy?: string | null
          assessment_approach?: string | null
          curriculum_standards?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          title?: string
          subject?: string
          grade_range?: string
          topic?: string | null
          lesson_content?: string
          duration?: string | null
          materials?: string | null
          pedagogical_strategy?: string | null
          differentiation_strategies?: string | null
          grouping_strategy?: string | null
          assessment_approach?: string | null
          curriculum_standards?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      cross_curricular_plans: {
        Row: {
          id: string
          title: string
          theme: string
          grade_range: string
          content: string
          subjects: string
          sessions: string | null
          learning_styles: string | null
          multiple_intelligences: string | null
          special_needs: string | null
          special_needs_details: string | null
          ell_support: string | null
          gifted_extension: string | null
          pedagogical_strategy: string | null
          assessment_strategy: string | null
          technology_integration: string | null
          additional_instructions: string | null
          user_id: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          title: string
          theme: string
          grade_range: string
          content: string
          subjects: string
          sessions?: string | null
          learning_styles?: string | null
          multiple_intelligences?: string | null
          special_needs?: string | null
          special_needs_details?: string | null
          ell_support?: string | null
          gifted_extension?: string | null
          pedagogical_strategy?: string | null
          assessment_strategy?: string | null
          technology_integration?: string | null
          additional_instructions?: string | null
          user_id: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          theme?: string
          grade_range?: string
          content?: string
          subjects?: string
          sessions?: string | null
          learning_styles?: string | null
          multiple_intelligences?: string | null
          special_needs?: string | null
          special_needs_details?: string | null
          ell_support?: string | null
          gifted_extension?: string | null
          pedagogical_strategy?: string | null
          assessment_strategy?: string | null
          technology_integration?: string | null
          additional_instructions?: string | null
          user_id?: string
          created_at?: string
          updated_at?: string
        }
      }
      lesson_plans: {
        Row: {
          id: string
          title: string
          subject: string
          grade: string
          topic: string | null
          content: string
          duration: string
          objectives: string | null
          materials: string | null
          overview: string | null
          standards: string | null
          vocabulary: string | null
          homework: string | null
          extensions: string | null
          pedagogical_strategy: string | null
          differentiation_strategies: string | null
          grouping_strategy: string | null
          assessment_approach: string | null
          curriculum_standards: string | null
          user_id: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          title: string
          subject: string
          grade: string
          topic?: string | null
          content: string
          duration: string
          objectives?: string | null
          materials?: string | null
          overview?: string | null
          standards?: string | null
          vocabulary?: string | null
          homework?: string | null
          extensions?: string | null
          pedagogical_strategy?: string | null
          differentiation_strategies?: string | null
          grouping_strategy?: string | null
          assessment_approach?: string | null
          curriculum_standards?: string | null
          user_id: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          subject?: string
          grade?: string
          topic?: string | null
          content?: string
          duration?: string
          objectives?: string | null
          materials?: string | null
          overview?: string | null
          standards?: string | null
          vocabulary?: string | null
          homework?: string | null
          extensions?: string | null
          pedagogical_strategy?: string | null
          differentiation_strategies?: string | null
          grouping_strategy?: string | null
          assessment_approach?: string | null
          curriculum_standards?: string | null
          user_id?: string
          created_at?: string
          updated_at?: string
        }
      }
      quizzes: {
        Row: {
          id: string
          title: string
          description: string | null
          subject: string
          grade: string
          topic: string
          content: string
          question_count: number
          question_types: string | null
          difficulty: string | null
          time_limit: number | null
          tags: string | null
          instructions: string | null
          user_id: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          title: string
          description?: string | null
          subject: string
          grade: string
          topic: string
          content: string
          question_count?: number
          question_types?: string | null
          difficulty?: string | null
          time_limit?: number | null
          tags?: string | null
          instructions?: string | null
          user_id: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          subject?: string
          grade?: string
          topic?: string
          content?: string
          question_count?: number
          question_types?: string | null
          difficulty?: string | null
          time_limit?: number | null
          tags?: string | null
          instructions?: string | null
          user_id?: string
          created_at?: string
          updated_at?: string
        }
      }
      schedules: {
        Row: {
          id: string
          user_id: string
          day: string
          time: string
          subject: string
          grade: string
          room: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          user_id: string
          day: string
          time: string
          subject: string
          grade: string
          room: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          day?: string
          time?: string
          subject?: string
          grade?: string
          room?: string
          created_at?: string
          updated_at?: string
        }
      }
      lesson_reflections: {
        Row: {
          id: string
          lesson_plan_id: string
          user_id: string
          reflection_date: string
          objectives_met: string | null
          student_understanding: string | null
          evidence_support: string | null
          students_not_meeting_objectives: string | null
          misconceptions_difficulties: string | null
          assessment_effective: string | null
          content_suitable: string | null
          strategies_engaging: string | null
          students_on_task: string | null
          differentiation_effective: string | null
          future_improvements: string | null
          long_term_goals: string | null
          behavioral_issues: string | null
          student_opportunities: string | null
          teaching_insights: string | null
          overall_rating: number | null
          time_management: string | null
          student_engagement_level: string | null
          next_steps: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          lesson_plan_id: string
          user_id: string
          reflection_date: string
          objectives_met?: string | null
          student_understanding?: string | null
          evidence_support?: string | null
          students_not_meeting_objectives?: string | null
          misconceptions_difficulties?: string | null
          assessment_effective?: string | null
          content_suitable?: string | null
          strategies_engaging?: string | null
          students_on_task?: string | null
          differentiation_effective?: string | null
          future_improvements?: string | null
          long_term_goals?: string | null
          behavioral_issues?: string | null
          student_opportunities?: string | null
          teaching_insights?: string | null
          overall_rating?: number | null
          time_management?: string | null
          student_engagement_level?: string | null
          next_steps?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          lesson_plan_id?: string
          user_id?: string
          reflection_date?: string
          objectives_met?: string | null
          student_understanding?: string | null
          evidence_support?: string | null
          students_not_meeting_objectives?: string | null
          misconceptions_difficulties?: string | null
          assessment_effective?: string | null
          content_suitable?: string | null
          strategies_engaging?: string | null
          students_on_task?: string | null
          differentiation_effective?: string | null
          future_improvements?: string | null
          long_term_goals?: string | null
          behavioral_issues?: string | null
          student_opportunities?: string | null
          teaching_insights?: string | null
          overall_rating?: number | null
          time_management?: string | null
          student_engagement_level?: string | null
          next_steps?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
} 