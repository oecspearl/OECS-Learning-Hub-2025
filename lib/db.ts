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

    async findMany(where?: any) {
      let query = supabaseAdmin.from('multigrade_plans').select('*')
      
      if (where?.created_by) query = query.eq('created_by', where.created_by)
      
      const { data, error } = await query.order('created_at', { ascending: false })
      
      if (error) throw error
      return data || []
    }
  }
}
