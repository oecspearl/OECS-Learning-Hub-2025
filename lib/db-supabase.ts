import { supabase } from './supabase'
import type { Database } from './supabase'

export type Tables = Database['public']['Tables']

// Helper functions for common database operations
export const db = {
  // Users
  users: {
    async findMany() {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .order('created_at', { ascending: false })
      if (error) throw error
      return data
    },
    
    async findFirst(where: { email?: string; id?: number }) {
      let query = supabase.from('users').select('*')
      
      if (where.email) {
        query = query.eq('email', where.email)
      }
      if (where.id) {
        query = query.eq('id', where.id)
      }
      
      const { data, error } = await query.limit(1).single()
      if (error) throw error
      return data
    },
    
    async create(user: Tables['users']['Insert']) {
      const { data, error } = await supabase
        .from('users')
        .insert(user)
        .select()
        .single()
      if (error) throw error
      return data
    },
    
    async update(id: number, updates: Tables['users']['Update']) {
      const { data, error } = await supabase
        .from('users')
        .update(updates)
        .eq('id', id)
        .select()
        .single()
      if (error) throw error
      return data
    }
  },

  // Strands
  strands: {
    async findMany(where?: { subject?: string; grade?: string }) {
      let query = supabase.from('strands').select('*').order('sort_order')
      
      if (where?.subject) {
        query = query.eq('subject', where.subject)
      }
      if (where?.grade) {
        query = query.eq('grade', where.grade)
      }
      
      const { data, error } = await query
      if (error) throw error
      return data
    },
    
    async findFirst(where: { id?: number; name?: string }) {
      let query = supabase.from('strands').select('*')
      
      if (where.id) {
        query = query.eq('id', where.id)
      }
      if (where.name) {
        query = query.eq('name', where.name)
      }
      
      const { data, error } = await query.limit(1).single()
      if (error) throw error
      return data
    }
  },

  // Essential Learning Outcomes
  essentialLearningOutcomes: {
    async findMany(where?: { strand_id?: number; subject?: string; grade?: string }) {
      let query = supabase.from('essential_learning_outcomes').select('*')
      
      if (where?.strand_id) {
        query = query.eq('strand_id', where.strand_id)
      }
      if (where?.subject) {
        query = query.eq('subject', where.subject)
      }
      if (where?.grade) {
        query = query.eq('grade', where.grade)
      }
      
      const { data, error } = await query
      if (error) throw error
      return data
    },
    
    async findFirst(where: { id?: number; code?: string }) {
      let query = supabase.from('essential_learning_outcomes').select('*')
      
      if (where.id) {
        query = query.eq('id', where.id)
      }
      if (where.code) {
        query = query.eq('code', where.code)
      }
      
      const { data, error } = await query.limit(1).single()
      if (error) throw error
      return data
    }
  },

  // Specific Curriculum Outcomes
  specificCurriculumOutcomes: {
    async findMany(where?: { elo_id?: number; subject?: string; grade?: string }) {
      let query = supabase.from('specific_curriculum_outcomes').select('*')
      
      if (where?.elo_id) {
        query = query.eq('elo_id', where.elo_id)
      }
      if (where?.subject) {
        query = query.eq('subject', where.subject)
      }
      if (where?.grade) {
        query = query.eq('grade', where.grade)
      }
      
      const { data, error } = await query
      if (error) throw error
      return data
    }
  },

  // Assessment Strategies
  assessmentStrategies: {
    async findMany(where?: { elo_id?: number }) {
      let query = supabase.from('assessment_strategies').select('*')
      
      if (where?.elo_id) {
        query = query.eq('elo_id', where.elo_id)
      }
      
      const { data, error } = await query
      if (error) throw error
      return data
    }
  },

  // Learning Strategies
  learningStrategies: {
    async findMany(where?: { sco_id?: number }) {
      let query = supabase.from('learning_strategies').select('*')
      
      if (where?.sco_id) {
        query = query.eq('sco_id', where.sco_id)
      }
      
      const { data, error } = await query
      if (error) throw error
      return data
    }
  },

  // Resources
  resources: {
    async findMany(where?: { strand_id?: number }) {
      let query = supabase.from('resources').select('*')
      
      if (where?.strand_id) {
        query = query.eq('strand_id', where.strand_id)
      }
      
      const { data, error } = await query
      if (error) throw error
      return data
    }
  },

  // Teacher Content
  teacherContent: {
    async findMany(where?: { elo_id?: number }) {
      let query = supabase.from('teacher_content').select('*')
      
      if (where?.elo_id) {
        query = query.eq('elo_id', where.elo_id)
      }
      
      const { data, error } = await query
      if (error) throw error
      return data
    }
  },

  // Settings
  settings: {
    async findMany(where?: { category?: string }) {
      let query = supabase.from('settings').select('*')
      
      if (where?.category) {
        query = query.eq('category', where.category)
      }
      
      const { data, error } = await query
      if (error) throw error
      return data
    },
    
    async findFirst(where: { key: string }) {
      const { data, error } = await supabase
        .from('settings')
        .select('*')
        .eq('key', where.key)
        .limit(1)
        .single()
      if (error) throw error
      return data
    },
    
    async upsert(setting: Tables['settings']['Insert']) {
      const { data, error } = await supabase
        .from('settings')
        .upsert(setting, { onConflict: 'key' })
        .select()
        .single()
      if (error) throw error
      return data
    }
  },

  // Multigrade Plans
  multigradePlans: {
    async findMany() {
      const { data, error } = await supabase
        .from('multigrade_plans')
        .select('*')
      if (error) throw error
      return data
    },
    
    async findFirst(where: { id: number }) {
      const { data, error } = await supabase
        .from('multigrade_plans')
        .select('*')
        .eq('id', where.id)
        .limit(1)
        .single()
      if (error) throw error
      return data
    },
    
    async create(plan: Tables['multigrade_plans']['Insert']) {
      const { data, error } = await supabase
        .from('multigrade_plans')
        .insert(plan)
        .select()
        .single()
      if (error) throw error
      return data
    },
    
    async update(id: number, updates: Tables['multigrade_plans']['Update']) {
      const { data, error } = await supabase
        .from('multigrade_plans')
        .update(updates)
        .eq('id', id)
        .select()
        .single()
      if (error) throw error
      return data
    },
    
    async delete(id: number) {
      const { error } = await supabase
        .from('multigrade_plans')
        .delete()
        .eq('id', id)
      if (error) throw error
    }
  },

  // Lesson Plans
  lessonPlans: {
    async findMany(where?: { user_id?: string; subject?: string; grade?: string }) {
      let query = supabase.from('lesson_plans').select('*')
      
      if (where?.user_id) {
        query = query.eq('user_id', where.user_id)
      }
      if (where?.subject) {
        query = query.eq('subject', where.subject)
      }
      if (where?.grade) {
        query = query.eq('grade', where.grade)
      }
      
      const { data, error } = await query
      if (error) throw error
      return data
    },
    
    async findFirst(where: { id: string }) {
      const { data, error } = await supabase
        .from('lesson_plans')
        .select('*')
        .eq('id', where.id)
        .limit(1)
        .single()
      if (error) throw error
      return data
    },
    
    async create(plan: Tables['lesson_plans']['Insert']) {
      const { data, error } = await supabase
        .from('lesson_plans')
        .insert(plan)
        .select()
        .single()
      if (error) throw error
      return data
    },
    
    async update(id: string, updates: Tables['lesson_plans']['Update']) {
      const { data, error } = await supabase
        .from('lesson_plans')
        .update(updates)
        .eq('id', id)
        .select()
        .single()
      if (error) throw error
      return data
    },
    
    async delete(id: string) {
      const { error } = await supabase
        .from('lesson_plans')
        .delete()
        .eq('id', id)
      if (error) throw error
    }
  },

  // Cross-Curricular Plans
  crossCurricularPlans: {
    async findMany(where?: { user_id?: string; theme?: string; grade_range?: string }) {
      let query = supabase.from('cross_curricular_plans').select('*')
      
      if (where?.user_id) {
        query = query.eq('user_id', where.user_id)
      }
      if (where?.theme) {
        query = query.eq('theme', where.theme)
      }
      if (where?.grade_range) {
        query = query.eq('grade_range', where.grade_range)
      }
      
      const { data, error } = await query
      if (error) throw error
      return data
    },
    
    async findFirst(where: { id: string }) {
      const { data, error } = await supabase
        .from('cross_curricular_plans')
        .select('*')
        .eq('id', where.id)
        .limit(1)
        .single()
      if (error) throw error
      return data
    },
    
    async create(plan: Tables['cross_curricular_plans']['Insert']) {
      const { data, error } = await supabase
        .from('cross_curricular_plans')
        .insert(plan)
        .select()
        .single()
      if (error) throw error
      return data
    },
    
    async update(id: string, updates: Tables['cross_curricular_plans']['Update']) {
      const { data, error } = await supabase
        .from('cross_curricular_plans')
        .update(updates)
        .eq('id', id)
        .select()
        .single()
      if (error) throw error
      return data
    },
    
    async delete(id: string) {
      const { error } = await supabase
        .from('cross_curricular_plans')
        .delete()
        .eq('id', id)
      if (error) throw error
    }
  },

  // Quizzes
  quizzes: {
    async findMany(where?: { user_id?: string; subject?: string; grade?: string }) {
      let query = supabase.from('quizzes').select('*')
      
      if (where?.user_id) {
        query = query.eq('user_id', where.user_id)
      }
      if (where?.subject) {
        query = query.eq('subject', where.subject)
      }
      if (where?.grade) {
        query = query.eq('grade', where.grade)
      }
      
      const { data, error } = await query
      if (error) throw error
      return data
    },
    
    async findFirst(where: { id: string }) {
      const { data, error } = await supabase
        .from('quizzes')
        .select('*')
        .eq('id', where.id)
        .limit(1)
        .single()
      if (error) throw error
      return data
    },
    
    async create(quiz: Tables['quizzes']['Insert']) {
      const { data, error } = await supabase
        .from('quizzes')
        .insert(quiz)
        .select()
        .single()
      if (error) throw error
      return data
    },
    
    async update(id: string, updates: Tables['quizzes']['Update']) {
      const { data, error } = await supabase
        .from('quizzes')
        .update(updates)
        .eq('id', id)
        .select()
        .single()
      if (error) throw error
      return data
    },
    
    async delete(id: string) {
      const { error } = await supabase
        .from('quizzes')
        .delete()
        .eq('id', id)
      if (error) throw error
    }
  },
  schedules: {
    async findMany(where?: { user_id?: string; day?: string }) {
      let query = supabase.from('schedules').select('*')
      
      if (where?.user_id) {
        query = query.eq('user_id', where.user_id)
      }
      if (where?.day) {
        query = query.eq('day', where.day)
      }
      
      const { data, error } = await query
      if (error) throw error
      return data
    },
    
    async findFirst(where: { id: string }) {
      const { data, error } = await supabase
        .from('schedules')
        .select('*')
        .eq('id', where.id)
        .limit(1)
        .single()
      if (error) throw error
      return data
    },
    
    async create(schedule: Tables['schedules']['Insert']) {
      const { data, error } = await supabase
        .from('schedules')
        .insert(schedule)
        .select()
        .single()
      if (error) throw error
      return data
    },
    
    async update(id: string, updates: Tables['schedules']['Update']) {
      const { data, error } = await supabase
        .from('schedules')
        .update(updates)
        .eq('id', id)
        .select()
        .single()
      if (error) throw error
      return data
    },
    
    async delete(id: string) {
      const { error } = await supabase
        .from('schedules')
        .delete()
        .eq('id', id)
      if (error) throw error
    }
  },

  // Lesson Reflections
  lessonReflections: {
    async findMany(where?: { lesson_plan_id?: string; user_id?: string }) {
      let query = supabase.from('lesson_reflections').select('*')
      
      if (where?.lesson_plan_id) {
        query = query.eq('lesson_plan_id', where.lesson_plan_id)
      }
      if (where?.user_id) {
        query = query.eq('user_id', where.user_id)
      }
      
      const { data, error } = await query
      if (error) throw error
      return data
    },
    
    async findFirst(where: { id: string }) {
      const { data, error } = await supabase
        .from('lesson_reflections')
        .select('*')
        .eq('id', where.id)
        .limit(1)
        .single()
      if (error) throw error
      return data
    },
    
    async create(reflection: Tables['lesson_reflections']['Insert']) {
      const { data, error } = await supabase
        .from('lesson_reflections')
        .insert(reflection)
        .select()
        .single()
      if (error) throw error
      return data
    },
    
    async update(id: string, updates: Tables['lesson_reflections']['Update']) {
      const { data, error } = await supabase
        .from('lesson_reflections')
        .update(updates)
        .eq('id', id)
        .select()
        .single()
      if (error) throw error
      return data
    }
  }
}

// Test database connection
export async function testDatabaseConnection() {
  try {
    // Check if Supabase is properly configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      return {
        success: false,
        error: "Supabase environment variables are not configured",
      }
    }

    const { data, error } = await supabase.from('users').select('count').limit(1)
    if (error) throw error
    return { success: true, result: data }
  } catch (error) {
    console.error("Database connection test failed:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown database connection error",
    }
  }
} 