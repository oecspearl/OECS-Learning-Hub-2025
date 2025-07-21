import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Create Supabase client for client-side operations
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Create Supabase client for server-side operations (with service role)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

// Legacy function for backward compatibility
export async function executeQuery(query: string, params?: any[]) {
  try {
    console.log("executeQuery called with:", query, params)
    
    // For now, return empty result to prevent build errors
    // This will need to be updated to work with Supabase
    return { 
      rows: [], 
      rowCount: 0,
      // Add length property to make it compatible with array-like usage
      length: 0
    }
  } catch (error) {
    console.error("Error in executeQuery:", error)
    throw error
  }
}

// Legacy function for backward compatibility
export async function testDatabaseConnection() {
  try {
    console.log("testDatabaseConnection called")
    
    // Test the Supabase connection
    const { data, error } = await supabaseAdmin
      .from('user_profiles')
      .select('count')
      .limit(1)
    
    if (error) {
      console.error("Database connection test failed:", error)
      return { success: false, error: error.message }
    }
    
    return { success: true, message: "Database connection successful" }
  } catch (error) {
    console.error("Error testing database connection:", error)
    return { success: false, error: "Database connection failed" }
  }
}

// Database helper functions
export const db = {
  // Lesson Plans
  lessonPlans: {
    async create(data: any) {
      const { data: result, error } = await supabaseAdmin
        .from('lesson_plans')
        .insert(data)
        .select()
        .single()
      
      if (error) throw error
      return result
    },

    async update(id: string, data: any) {
      const { data: result, error } = await supabaseAdmin
        .from('lesson_plans')
        .update(data)
        .eq('id', id)
        .select()
        .single()
      
      if (error) throw error
      return result
    },

    async delete(id: string) {
      const { error } = await supabaseAdmin
        .from('lesson_plans')
        .delete()
        .eq('id', id)
      
      if (error) throw error
      return { success: true }
    },

    async findFirst(where: any) {
      let query = supabaseAdmin.from('lesson_plans').select('*')
      
      if (where.id) query = query.eq('id', where.id)
      if (where.created_by) query = query.eq('created_by', where.created_by)
      
      const { data, error } = await query.limit(1).single()
      
      if (error && error.code !== 'PGRST116') throw error
      return data
    },

    async findMany(where?: any) {
      let query = supabaseAdmin.from('lesson_plans').select('*')
      
      if (where?.created_by) query = query.eq('created_by', where.created_by)
      if (where?.subject) query = query.eq('subject', where.subject)
      if (where?.grade_level) query = query.eq('grade_level', where.grade_level)
      
      const { data, error } = await query.order('created_at', { ascending: false })
      
      if (error) throw error
      return data || []
    }
  },

  // Quizzes
  quizzes: {
    async create(data: any) {
      const { data: result, error } = await supabaseAdmin
        .from('quizzes')
        .insert(data)
        .select()
        .single()
      
      if (error) throw error
      return result
    },

    async update(id: string, data: any) {
      const { data: result, error } = await supabaseAdmin
        .from('quizzes')
        .update(data)
        .eq('id', id)
        .select()
        .single()
      
      if (error) throw error
      return result
    },

    async delete(id: string) {
      const { error } = await supabaseAdmin
        .from('quizzes')
        .delete()
        .eq('id', id)
      
      if (error) throw error
      return { success: true }
    },

    async findFirst(where: any) {
      let query = supabaseAdmin.from('quizzes').select('*')
      
      if (where.id) query = query.eq('id', where.id)
      if (where.created_by) query = query.eq('created_by', where.created_by)
      
      const { data, error } = await query.limit(1).single()
      
      if (error && error.code !== 'PGRST116') throw error
      return data
    },

    async findMany(where?: any) {
      let query = supabaseAdmin.from('quizzes').select('*')
      
      if (where?.created_by) query = query.eq('created_by', where.created_by)
      if (where?.subject) query = query.eq('subject', where.subject)
      if (where?.grade_level) query = query.eq('grade_level', where.grade_level)
      
      const { data, error } = await query.order('created_at', { ascending: false })
      
      if (error) throw error
      return data || []
    }
  },

  // User Profiles
  userProfiles: {
    async create(data: any) {
      const { data: result, error } = await supabaseAdmin
        .from('user_profiles')
        .insert(data)
        .select()
        .single()
      
      if (error) throw error
      return result
    },

    async update(id: string, data: any) {
      const { data: result, error } = await supabaseAdmin
        .from('user_profiles')
        .update(data)
        .eq('id', id)
        .select()
        .single()
      
      if (error) throw error
      return result
    },

    async findFirst(where: any) {
      let query = supabaseAdmin.from('user_profiles').select('*')
      
      if (where.id) query = query.eq('id', where.id)
      
      const { data, error } = await query.limit(1).single()
      
      if (error && error.code !== 'PGRST116') throw error
      return data
    }
  },

  // Cross-curricular Plans
  crossCurricularPlans: {
    async create(data: any) {
      const { data: result, error } = await supabaseAdmin
        .from('cross_curricular_plans')
        .insert(data)
        .select()
        .single()
      
      if (error) throw error
      return result
    },

    async update(id: string, data: any) {
      const { data: result, error } = await supabaseAdmin
        .from('cross_curricular_plans')
        .update(data)
        .eq('id', id)
        .select()
        .single()
      
      if (error) throw error
      return result
    },

    async delete(id: string) {
      const { error } = await supabaseAdmin
        .from('cross_curricular_plans')
        .delete()
        .eq('id', id)
      
      if (error) throw error
      return { success: true }
    },

    async findFirst(where: any) {
      let query = supabaseAdmin.from('cross_curricular_plans').select('*')
      
      if (where.id) query = query.eq('id', where.id)
      if (where.created_by) query = query.eq('created_by', where.created_by)
      
      const { data, error } = await query.limit(1).single()
      
      if (error && error.code !== 'PGRST116') throw error
      return data
    },

    async findMany(where?: any) {
      let query = supabaseAdmin.from('cross_curricular_plans').select('*')
      
      if (where?.created_by) query = query.eq('created_by', where.created_by)
      
      const { data, error } = await query.order('created_at', { ascending: false })
      
      if (error) throw error
      return data || []
    }
  },

  // Multigrade Plans
  multigradePlans: {
    async create(data: any) {
      const { data: result, error } = await supabaseAdmin
        .from('multigrade_plans')
        .insert(data)
        .select()
        .single()
      
      if (error) throw error
      return result
    },

    async update(id: string, data: any) {
      const { data: result, error } = await supabaseAdmin
        .from('multigrade_plans')
        .update(data)
        .eq('id', id)
        .select()
        .single()
      
      if (error) throw error
      return result
    },

    async delete(id: string) {
      const { error } = await supabaseAdmin
        .from('multigrade_plans')
        .delete()
        .eq('id', id)
      
      if (error) throw error
      return { success: true }
    },

    async findFirst(where: any) {
      let query = supabaseAdmin.from('multigrade_plans').select('*')
      
      if (where.id) query = query.eq('id', where.id)
      if (where.created_by) query = query.eq('created_by', where.created_by)
      
      const { data, error } = await query.limit(1).single()
      
      if (error && error.code !== 'PGRST116') throw error
      return data
    },

    async findMany(where?: any) {
      let query = supabaseAdmin.from('multigrade_plans').select('*')
      
      if (where?.created_by) query = query.eq('created_by', where.created_by)
      
      const { data, error } = await query.order('created_at', { ascending: false })
      
      if (error) throw error
      return data || []
    }
  },

  // Strands
  strands: {
    async findFirst(where: any) {
      let query = supabaseAdmin.from('strands').select('*')
      
      if (where.id) query = query.eq('id', where.id)
      if (where.subject) query = query.eq('subject', where.subject)
      if (where.grade_level) query = query.eq('grade_level', where.grade_level)
      if (where.is_active !== undefined) query = query.eq('is_active', where.is_active)
      
      const { data, error } = await query.limit(1).single()
      
      if (error && error.code !== 'PGRST116') throw error
      return data
    },

    async findMany(where?: any) {
      let query = supabaseAdmin.from('strands').select('*')
      
      if (where?.subject) query = query.eq('subject', where.subject)
      if (where?.grade_level) query = query.eq('grade_level', where.grade_level)
      if (where?.is_active !== undefined) query = query.eq('is_active', where.is_active)
      
      const { data, error } = await query.order('sort_order', { ascending: true })
      
      if (error) throw error
      return data || []
    }
  },

  // Essential Learning Outcomes
  essentialLearningOutcomes: {
    async findFirst(where: any) {
      let query = supabaseAdmin.from('essential_learning_outcomes').select('*')
      
      if (where.id) query = query.eq('id', where.id)
      if (where.strand_id) query = query.eq('strand_id', where.strand_id)
      if (where.is_active !== undefined) query = query.eq('is_active', where.is_active)
      
      const { data, error } = await query.limit(1).single()
      
      if (error && error.code !== 'PGRST116') throw error
      return data
    },

    async findMany(where?: any) {
      let query = supabaseAdmin.from('essential_learning_outcomes').select('*')
      
      if (where?.strand_id) query = query.eq('strand_id', where.strand_id)
      if (where?.is_active !== undefined) query = query.eq('is_active', where.is_active)
      
      const { data, error } = await query.order('sort_order', { ascending: true })
      
      if (error) throw error
      return data || []
    }
  },

  // Specific Curriculum Outcomes
  specificCurriculumOutcomes: {
    async findFirst(where: any) {
      let query = supabaseAdmin.from('specific_curriculum_outcomes').select('*')
      
      if (where.id) query = query.eq('id', where.id)
      if (where.elo_id) query = query.eq('elo_id', where.elo_id)
      if (where.is_active !== undefined) query = query.eq('is_active', where.is_active)
      
      const { data, error } = await query.limit(1).single()
      
      if (error && error.code !== 'PGRST116') throw error
      return data
    },

    async findMany(where?: any) {
      let query = supabaseAdmin.from('specific_curriculum_outcomes').select('*')
      
      if (where?.elo_id) query = query.eq('elo_id', where.elo_id)
      if (where?.is_active !== undefined) query = query.eq('is_active', where.is_active)
      
      const { data, error } = await query.order('sort_order', { ascending: true })
      
      if (error) throw error
      return data || []
    }
  },

  // Schedules
  schedules: {
    async create(data: any) {
      const { data: result, error } = await supabaseAdmin
        .from('schedules')
        .insert(data)
        .select()
        .single()
      
      if (error) throw error
      return result
    },

    async update(id: string, data: any) {
      const { data: result, error } = await supabaseAdmin
        .from('schedules')
        .update(data)
        .eq('id', id)
        .select()
        .single()
      
      if (error) throw error
      return result
    },

    async delete(id: string) {
      const { error } = await supabaseAdmin
        .from('schedules')
        .delete()
        .eq('id', id)
      
      if (error) throw error
      return { success: true }
    },

    async findFirst(where: any) {
      let query = supabaseAdmin.from('schedules').select('*')
      
      if (where.id) query = query.eq('id', where.id)
      if (where.user_id) query = query.eq('user_id', where.user_id)
      
      const { data, error } = await query.limit(1).single()
      
      if (error && error.code !== 'PGRST116') throw error
      return data
    },

    async findMany(where?: any) {
      let query = supabaseAdmin.from('schedules').select('*')
      
      if (where?.user_id) query = query.eq('user_id', where.user_id)
      if (where?.day_of_week !== undefined) query = query.eq('day_of_week', where.day_of_week)
      
      const { data, error } = await query.order('start_time', { ascending: true })
      
      if (error) throw error
      return data || []
    }
  },

  // Users (for setup-database.ts)
  users: {
    async create(data: any) {
      const { data: result, error } = await supabaseAdmin
        .from('user_profiles')
        .insert(data)
        .select()
        .single()
      
      if (error) throw error
      return result
    },

    async findMany(where?: any) {
      let query = supabaseAdmin.from('user_profiles').select('*')
      
      if (where?.role) query = query.eq('role', where.role)
      if (where?.school_name) query = query.eq('school_name', where.school_name)
      
      const { data, error } = await query.order('created_at', { ascending: false })
      
      if (error) throw error
      return data || []
    },

    async findFirst(where: any) {
      let query = supabaseAdmin.from('user_profiles').select('*')
      
      if (where.id) query = query.eq('id', where.id)
      if (where.email) query = query.eq('email', where.email)
      
      const { data, error } = await query.limit(1).single()
      
      if (error && error.code !== 'PGRST116') throw error
      return data
    }
  },

  // Assessment Strategies
  assessmentStrategies: {
    async findMany(where?: any) {
      let query = supabaseAdmin.from('assessment_strategies').select('*')
      
      if (where?.elo_id) query = query.eq('elo_id', where.elo_id)
      if (where?.assessment_type) query = query.eq('assessment_type', where.assessment_type)
      
      const { data, error } = await query.order('created_at', { ascending: false })
      
      if (error) throw error
      return data || []
    }
  },

  // Teacher Content (placeholder - adjust table name as needed)
  teacherContent: {
    async findMany(where?: any) {
      // This is a placeholder - adjust the table name based on your schema
      let query = supabaseAdmin.from('learning_strategies').select('*')
      
      if (where?.elo_id) query = query.eq('elo_id', where.elo_id)
      
      const { data, error } = await query.order('created_at', { ascending: false })
      
      if (error) throw error
      return data || []
    }
  },

  // Learning Strategies
  learningStrategies: {
    async findMany(where?: any) {
      let query = supabaseAdmin.from('learning_strategies').select('*')
      
      if (where?.sco_id) query = query.eq('sco_id', where.sco_id)
      if (where?.elo_id) query = query.eq('elo_id', where.elo_id)
      if (where?.strategy_type) query = query.eq('strategy_type', where.strategy_type)
      
      const { data, error } = await query.order('created_at', { ascending: false })
      
      if (error) throw error
      return data || []
    },

    async findFirst(where: any) {
      let query = supabaseAdmin.from('learning_strategies').select('*')
      
      if (where.id) query = query.eq('id', where.id)
      if (where.sco_id) query = query.eq('sco_id', where.sco_id)
      
      const { data, error } = await query.limit(1).single()
      
      if (error && error.code !== 'PGRST116') throw error
      return data
    }
  },

  // PDF Documents
  pdfDocuments: {
    async findMany(where?: any) {
      let query = supabaseAdmin.from('pdf_documents').select('*')
      
      if (where?.status) query = query.eq('status', where.status)
      if (where?.user_id) query = query.eq('user_id', where.user_id)
      if (where?.uploaded_at) query = query.eq('uploaded_at', where.uploaded_at)
      
      const { data, error } = await query.order('uploaded_at', { ascending: true })
      
      if (error) throw error
      return data || []
    },

    async findFirst(where: any) {
      let query = supabaseAdmin.from('pdf_documents').select('*')
      
      if (where.id) query = query.eq('id', where.id)
      if (where.status) query = query.eq('status', where.status)
      if (where.user_id) query = query.eq('user_id', where.user_id)
      
      const { data, error } = await query.limit(1).single()
      
      if (error && error.code !== 'PGRST116') throw error
      return data
    },

    async update(id: string, data: any) {
      const { data: result, error } = await supabaseAdmin
        .from('pdf_documents')
        .update(data)
        .eq('id', id)
        .select()
        .single()
      
      if (error) throw error
      return result
    }
  }
}
