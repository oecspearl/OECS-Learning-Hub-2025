const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://howglhskpjzixwfuqbql.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhvd2dsaHNrcGp6aXh3ZnVxYnFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNzM0ODUsImV4cCI6MjA1ODc0OTQ4NX0.GYlIznzJGrqSbdg_ZiFaaCM6WRmE_N_2FGNq67-9Onk'

const supabase = createClient(supabaseUrl, supabaseKey)

async function setupSchema() {
  try {
    console.log('Setting up Supabase database schema...')
    
    // Create users table
    console.log('Creating users table...')
    const { error: usersError } = await supabase.rpc('exec_sql', {
      sql: `
        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) UNIQUE NOT NULL,
          password_hash VARCHAR(255) NOT NULL,
          role VARCHAR(50) DEFAULT 'teacher',
          avatar_url TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `
    })
    
    if (usersError) {
      console.log('Users table error (might already exist):', usersError.message)
    } else {
      console.log('✅ Users table created')
    }
    
    // Create quizzes table
    console.log('Creating quizzes table...')
    const { error: quizzesError } = await supabase.rpc('exec_sql', {
      sql: `
        CREATE TABLE IF NOT EXISTS quizzes (
          id VARCHAR(255) PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          description TEXT,
          subject VARCHAR(100) NOT NULL,
          grade VARCHAR(50) NOT NULL,
          topic VARCHAR(255) NOT NULL,
          content TEXT NOT NULL,
          question_count INTEGER DEFAULT 10,
          question_types TEXT DEFAULT '[]',
          difficulty VARCHAR(50) DEFAULT 'Medium',
          time_limit INTEGER DEFAULT 30,
          tags TEXT DEFAULT '[]',
          instructions TEXT,
          user_id VARCHAR(255) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `
    })
    
    if (quizzesError) {
      console.log('Quizzes table error (might already exist):', quizzesError.message)
    } else {
      console.log('✅ Quizzes table created')
    }
    
    // Create lesson_plans table
    console.log('Creating lesson_plans table...')
    const { error: lessonPlansError } = await supabase.rpc('exec_sql', {
      sql: `
        CREATE TABLE IF NOT EXISTS lesson_plans (
          id VARCHAR(255) PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          subject VARCHAR(100) NOT NULL,
          grade VARCHAR(50) NOT NULL,
          topic VARCHAR(255),
          content TEXT NOT NULL,
          duration VARCHAR(100),
          materials TEXT,
          pedagogical_strategy TEXT,
          differentiation_strategies TEXT,
          grouping_strategy TEXT,
          assessment_approach TEXT,
          curriculum_standards TEXT,
          overview TEXT,
          objectives TEXT,
          vocabulary TEXT,
          homework TEXT,
          extensions TEXT,
          standards TEXT,
          user_id VARCHAR(255) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `
    })
    
    if (lessonPlansError) {
      console.log('Lesson plans table error (might already exist):', lessonPlansError.message)
    } else {
      console.log('✅ Lesson plans table created')
    }
    
    // Create multigrade_plans table
    console.log('Creating multigrade_plans table...')
    const { error: multigradeError } = await supabase.rpc('exec_sql', {
      sql: `
        CREATE TABLE IF NOT EXISTS multigrade_plans (
          id SERIAL PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          subject VARCHAR(100) NOT NULL,
          grade_range VARCHAR(100) NOT NULL,
          topic VARCHAR(255) NOT NULL,
          content TEXT NOT NULL,
          duration VARCHAR(100),
          materials TEXT,
          pedagogical_strategy TEXT,
          differentiation_strategies TEXT,
          grouping_strategy TEXT,
          assessment_approach TEXT,
          curriculum_standards TEXT,
          overview TEXT,
          objectives TEXT,
          vocabulary TEXT,
          homework TEXT,
          extensions TEXT,
          standards TEXT,
          user_id VARCHAR(255) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `
    })
    
    if (multigradeError) {
      console.log('Multigrade plans table error (might already exist):', multigradeError.message)
    } else {
      console.log('✅ Multigrade plans table created')
    }
    
    // Create cross_curricular_plans table
    console.log('Creating cross_curricular_plans table...')
    const { error: crossCurricularError } = await supabase.rpc('exec_sql', {
      sql: `
        CREATE TABLE IF NOT EXISTS cross_curricular_plans (
          id VARCHAR(255) PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          theme VARCHAR(255) NOT NULL,
          grade_range VARCHAR(100) NOT NULL,
          subjects TEXT NOT NULL,
          content TEXT NOT NULL,
          duration VARCHAR(100),
          materials TEXT,
          pedagogical_strategy TEXT,
          differentiation_strategies TEXT,
          grouping_strategy TEXT,
          assessment_approach TEXT,
          curriculum_standards TEXT,
          overview TEXT,
          objectives TEXT,
          vocabulary TEXT,
          homework TEXT,
          extensions TEXT,
          standards TEXT,
          user_id VARCHAR(255) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `
    })
    
    if (crossCurricularError) {
      console.log('Cross curricular plans table error (might already exist):', crossCurricularError.message)
    } else {
      console.log('✅ Cross curricular plans table created')
    }
    
    // Create schedules table
    console.log('Creating schedules table...')
    const { error: schedulesError } = await supabase.rpc('exec_sql', {
      sql: `
        CREATE TABLE IF NOT EXISTS schedules (
          id VARCHAR(255) PRIMARY KEY,
          day VARCHAR(50) NOT NULL,
          time VARCHAR(50) NOT NULL,
          subject VARCHAR(100) NOT NULL,
          activity VARCHAR(255) NOT NULL,
          user_id VARCHAR(255) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `
    })
    
    if (schedulesError) {
      console.log('Schedules table error (might already exist):', schedulesError.message)
    } else {
      console.log('✅ Schedules table created')
    }
    
    // Create lesson_reflections table
    console.log('Creating lesson_reflections table...')
    const { error: reflectionsError } = await supabase.rpc('exec_sql', {
      sql: `
        CREATE TABLE IF NOT EXISTS lesson_reflections (
          id VARCHAR(255) PRIMARY KEY,
          lesson_plan_id VARCHAR(255) NOT NULL,
          reflection_date DATE NOT NULL,
          what_went_well TEXT,
          what_could_be_improved TEXT,
          student_engagement INTEGER,
          learning_objectives_met BOOLEAN,
          next_steps TEXT,
          user_id VARCHAR(255) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `
    })
    
    if (reflectionsError) {
      console.log('Lesson reflections table error (might already exist):', reflectionsError.message)
    } else {
      console.log('✅ Lesson reflections table created')
    }
    
    console.log('✅ Database schema setup complete!')
    
  } catch (error) {
    console.error('Error setting up schema:', error)
  }
}

setupSchema() 