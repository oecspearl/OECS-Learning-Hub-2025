-- Create tables for OECS Learning Hub in Supabase

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'teacher',
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Strands table
CREATE TABLE IF NOT EXISTS strands (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  sort_order INTEGER NOT NULL,
  subject TEXT,
  grade TEXT
);

-- Essential Learning Outcomes table
CREATE TABLE IF NOT EXISTS essential_learning_outcomes (
  id SERIAL PRIMARY KEY,
  strand_id INTEGER NOT NULL REFERENCES strands(id),
  code TEXT NOT NULL,
  description TEXT NOT NULL,
  grade_expectations TEXT,
  subject TEXT,
  grade TEXT
);

-- Specific Curriculum Outcomes table
CREATE TABLE IF NOT EXISTS specific_curriculum_outcomes (
  id SERIAL PRIMARY KEY,
  elo_id INTEGER NOT NULL REFERENCES essential_learning_outcomes(id),
  code TEXT NOT NULL,
  description TEXT NOT NULL,
  subject TEXT,
  grade TEXT
);

-- Assessment Strategies table
CREATE TABLE IF NOT EXISTS assessment_strategies (
  id SERIAL PRIMARY KEY,
  elo_id INTEGER NOT NULL REFERENCES essential_learning_outcomes(id),
  type TEXT NOT NULL,
  description TEXT NOT NULL,
  examples TEXT
);

-- Learning Strategies table
CREATE TABLE IF NOT EXISTS learning_strategies (
  id SERIAL PRIMARY KEY,
  sco_id INTEGER NOT NULL REFERENCES specific_curriculum_outcomes(id),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  resources TEXT,
  integrations TEXT
);

-- Resources table
CREATE TABLE IF NOT EXISTS resources (
  id SERIAL PRIMARY KEY,
  strand_id INTEGER NOT NULL REFERENCES strands(id),
  title TEXT NOT NULL,
  type TEXT NOT NULL,
  url TEXT,
  description TEXT
);

-- Teacher Content table
CREATE TABLE IF NOT EXISTS teacher_content (
  id SERIAL PRIMARY KEY,
  elo_id INTEGER NOT NULL REFERENCES essential_learning_outcomes(id),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  resources TEXT
);

-- Settings table
CREATE TABLE IF NOT EXISTS settings (
  id SERIAL PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  value TEXT,
  type TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Multigrade Plans table
CREATE TABLE IF NOT EXISTS multigrade_plans (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  subject TEXT NOT NULL,
  grade_range TEXT NOT NULL,
  topic TEXT,
  content TEXT NOT NULL,
  duration TEXT,
  materials TEXT,
  pedagogical_strategy TEXT,
  differentiation_strategies TEXT,
  grouping_strategy TEXT,
  assessment_approach TEXT,
  curriculum_standards TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Lesson Plans table
CREATE TABLE IF NOT EXISTS lesson_plans (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  subject TEXT NOT NULL,
  grade TEXT NOT NULL,
  topic TEXT,
  content TEXT NOT NULL,
  duration TEXT NOT NULL,
  objectives TEXT,
  materials TEXT,
  overview TEXT,
  standards TEXT,
  vocabulary TEXT,
  homework TEXT,
  extensions TEXT,
  pedagogical_strategy TEXT,
  differentiation_strategies TEXT,
  grouping_strategy TEXT,
  assessment_approach TEXT,
  curriculum_standards TEXT,
  user_id TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Quizzes table
CREATE TABLE IF NOT EXISTS quizzes (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  subject TEXT NOT NULL,
  grade TEXT NOT NULL,
  topic TEXT NOT NULL,
  content TEXT NOT NULL,
  question_count INTEGER NOT NULL DEFAULT 10,
  question_types TEXT,
  difficulty TEXT,
  time_limit INTEGER,
  tags TEXT,
  instructions TEXT,
  user_id TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Schedules table
CREATE TABLE IF NOT EXISTS schedules (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  day TEXT NOT NULL,
  time TEXT NOT NULL,
  subject TEXT NOT NULL,
  grade TEXT NOT NULL,
  room TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Lesson Reflections table
CREATE TABLE IF NOT EXISTS lesson_reflections (
  id TEXT PRIMARY KEY,
  lesson_plan_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
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
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_strands_subject_grade ON strands(subject, grade);
CREATE INDEX IF NOT EXISTS idx_elo_strand_id ON essential_learning_outcomes(strand_id);
CREATE INDEX IF NOT EXISTS idx_sco_elo_id ON specific_curriculum_outcomes(elo_id);
CREATE INDEX IF NOT EXISTS idx_assessment_elo_id ON assessment_strategies(elo_id);
CREATE INDEX IF NOT EXISTS idx_learning_sco_id ON learning_strategies(sco_id);
CREATE INDEX IF NOT EXISTS idx_resources_strand_id ON resources(strand_id);
CREATE INDEX IF NOT EXISTS idx_teacher_content_elo_id ON teacher_content(elo_id);
CREATE INDEX IF NOT EXISTS idx_settings_key ON settings(key);
CREATE INDEX IF NOT EXISTS idx_lesson_plans_user_id ON lesson_plans(user_id);
CREATE INDEX IF NOT EXISTS idx_quizzes_user_id ON quizzes(user_id);
CREATE INDEX IF NOT EXISTS idx_schedules_user_id ON schedules(user_id);
CREATE INDEX IF NOT EXISTS idx_lesson_reflections_lesson_plan_id ON lesson_reflections(lesson_plan_id);
CREATE INDEX IF NOT EXISTS idx_lesson_reflections_user_id ON lesson_reflections(user_id);

-- Enable Row Level Security (RLS)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE strands ENABLE ROW LEVEL SECURITY;
ALTER TABLE essential_learning_outcomes ENABLE ROW LEVEL SECURITY;
ALTER TABLE specific_curriculum_outcomes ENABLE ROW LEVEL SECURITY;
ALTER TABLE assessment_strategies ENABLE ROW LEVEL SECURITY;
ALTER TABLE learning_strategies ENABLE ROW LEVEL SECURITY;
ALTER TABLE resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE teacher_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE multigrade_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE lesson_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE quizzes ENABLE ROW LEVEL SECURITY;
ALTER TABLE schedules ENABLE ROW LEVEL SECURITY;
ALTER TABLE lesson_reflections ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for public read access to curriculum data
CREATE POLICY "Public read access to strands" ON strands FOR SELECT USING (true);
CREATE POLICY "Public read access to essential_learning_outcomes" ON essential_learning_outcomes FOR SELECT USING (true);
CREATE POLICY "Public read access to specific_curriculum_outcomes" ON specific_curriculum_outcomes FOR SELECT USING (true);
CREATE POLICY "Public read access to assessment_strategies" ON assessment_strategies FOR SELECT USING (true);
CREATE POLICY "Public read access to learning_strategies" ON learning_strategies FOR SELECT USING (true);
CREATE POLICY "Public read access to resources" ON resources FOR SELECT USING (true);
CREATE POLICY "Public read access to teacher_content" ON teacher_content FOR SELECT USING (true);
CREATE POLICY "Public read access to settings" ON settings FOR SELECT USING (true);

-- Create RLS policies for authenticated users
CREATE POLICY "Users can manage their own data" ON users FOR ALL USING (auth.uid()::text = id::text);
CREATE POLICY "Users can manage their own lesson plans" ON lesson_plans FOR ALL USING (auth.uid()::text = user_id);
CREATE POLICY "Users can manage their own quizzes" ON quizzes FOR ALL USING (auth.uid()::text = user_id);
CREATE POLICY "Users can manage their own schedules" ON schedules FOR ALL USING (auth.uid()::text = user_id);
CREATE POLICY "Users can manage their own lesson reflections" ON lesson_reflections FOR ALL USING (auth.uid()::text = user_id);

-- Create RLS policies for multigrade plans (public read, authenticated write)
CREATE POLICY "Public read access to multigrade_plans" ON multigrade_plans FOR SELECT USING (true);
CREATE POLICY "Authenticated users can manage multigrade_plans" ON multigrade_plans FOR ALL USING (auth.role() = 'authenticated'); 