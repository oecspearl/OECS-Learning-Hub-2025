const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://howglhskpjzixwfuqbql.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhvd2dsaHNrcGp6aXh3ZnVxYnFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNzM0ODUsImV4cCI6MjA1ODc0OTQ4NX0.GYlIznzJGrqSbdg_ZiFaaCM6WRmE_N_2FGNq67-9Onk'

const supabase = createClient(supabaseUrl, supabaseKey)

async function createTables() {
  try {
    console.log('Creating database tables...')
    
    // First, let's try to create a simple test table to see if we have permissions
    console.log('Testing table creation...')
    
    // Try to insert a test record to see if tables exist
    const { data: testData, error: testError } = await supabase
      .from('quizzes')
      .insert({
        id: 'test_quiz_123',
        title: 'Test Quiz',
        subject: 'Science',
        grade: 'Grade 3',
        topic: 'Test Topic',
        content: 'Test content',
        user_id: 'test_user'
      })
      .select()
    
    if (testError) {
      console.log('❌ Cannot create test quiz:', testError.message)
      console.log('This means the tables need to be created in the Supabase dashboard.')
      console.log('')
      console.log('Please go to your Supabase dashboard and run the following SQL:')
      console.log('')
      console.log(`
-- Create users table
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

-- Create quizzes table
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

-- Create lesson_plans table
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

-- Create multigrade_plans table
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

-- Create cross_curricular_plans table
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

-- Create schedules table
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

-- Create lesson_reflections table
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
      `)
    } else {
      console.log('✅ Test quiz created successfully!')
      console.log('Tables exist and are working properly.')
      
      // Clean up the test record
      await supabase.from('quizzes').delete().eq('id', 'test_quiz_123')
      console.log('✅ Test record cleaned up')
    }
    
  } catch (error) {
    console.error('Error:', error)
  }
}

createTables() 