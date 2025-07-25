-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL DEFAULT 'teacher',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create subjects table
CREATE TABLE IF NOT EXISTS subjects (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  grade INTEGER NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create strands table
CREATE TABLE IF NOT EXISTS strands (
  id SERIAL PRIMARY KEY,
  subject_id INTEGER REFERENCES subjects(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  essential_learning_outcome TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create curriculum_outcomes table
CREATE TABLE IF NOT EXISTS curriculum_outcomes (
  id SERIAL PRIMARY KEY,
  strand_id INTEGER REFERENCES strands(id) ON DELETE CASCADE,
  outcome_type VARCHAR(50) NOT NULL, -- 'knowledge', 'skills', 'values'
  description TEXT NOT NULL,
  details TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create resources table
CREATE TABLE IF NOT EXISTS resources (
  id SERIAL PRIMARY KEY,
  strand_id INTEGER REFERENCES strands(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  resource_type VARCHAR(50) NOT NULL, -- 'video', 'document', 'link', etc.
  url TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create activities table
CREATE TABLE IF NOT EXISTS activities (
  id SERIAL PRIMARY KEY,
  strand_id INTEGER REFERENCES strands(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  instructions TEXT,
  materials TEXT,
  duration INTEGER, -- in minutes
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create lesson_plans table
CREATE TABLE IF NOT EXISTS lesson_plans (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  subject_id INTEGER REFERENCES subjects(id),
  strand_id INTEGER REFERENCES strands(id),
  objectives TEXT,
  materials TEXT,
  procedure TEXT,
  assessment TEXT,
  duration INTEGER, -- in minutes
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create cross_curricular_plans table
CREATE TABLE IF NOT EXISTS cross_curricular_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  theme TEXT NOT NULL,
  grade_range TEXT NOT NULL,
  subjects TEXT NOT NULL,
  duration TEXT NOT NULL,
  sessions TEXT NOT NULL DEFAULT '1',
  content TEXT NOT NULL,
  learning_styles TEXT,
  multiple_intelligences TEXT,
  special_needs BOOLEAN DEFAULT FALSE,
  special_needs_details TEXT,
  ell_support BOOLEAN DEFAULT FALSE,
  gifted_extension BOOLEAN DEFAULT FALSE,
  pedagogical_strategy TEXT,
  assessment_strategy TEXT,
  technology_integration BOOLEAN DEFAULT FALSE,
  additional_instructions TEXT,
  user_id UUID,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create students table
CREATE TABLE IF NOT EXISTS students (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  date_of_birth DATE,
  grade INTEGER NOT NULL,
  class VARCHAR(50),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create cross_curricular_reflections table
CREATE TABLE IF NOT EXISTS cross_curricular_reflections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  plan_id UUID NOT NULL,
  user_id UUID NOT NULL,
  reflection_date TEXT NOT NULL,
  objectives_met TEXT,
  student_understanding TEXT,
  evidence_support TEXT,
  students_not_meeting_objectives TEXT,
  misconceptions_difficulties TEXT,
  assessment_effective TEXT,
  content_suitable TEXT,
  strategies_engaging TEXT,
  students_on_task TEXT,
  differentiation_effective TEXT,
  future_improvements TEXT,
  long_term_goals TEXT,
  behavioral_issues TEXT,
  student_opportunities TEXT,
  teaching_insights TEXT,
  overall_rating INTEGER,
  time_management TEXT,
  student_engagement_level TEXT,
  next_steps TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (plan_id) REFERENCES cross_curricular_plans(id) ON DELETE CASCADE
);

-- Create index for faster lookups by plan_id
CREATE INDEX IF NOT EXISTS idx_cross_curricular_reflections_plan_id ON cross_curricular_reflections(plan_id);

-- Create student_assessments table
CREATE TABLE IF NOT EXISTS student_assessments (
  id SERIAL PRIMARY KEY,
  student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
  subject_id INTEGER REFERENCES subjects(id) ON DELETE CASCADE,
  strand_id INTEGER REFERENCES strands(id),
  assessment_date DATE NOT NULL,
  score DECIMAL(5,2),
  comments TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
