-- Create multigrade_plans table for Supabase
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

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_multigrade_plans_subject ON multigrade_plans(subject);
CREATE INDEX IF NOT EXISTS idx_multigrade_plans_grade_range ON multigrade_plans(grade_range);
CREATE INDEX IF NOT EXISTS idx_multigrade_plans_created_at ON multigrade_plans(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE multigrade_plans ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows all operations (for testing)
CREATE POLICY "Allow all operations on multigrade_plans" ON multigrade_plans
  FOR ALL USING (true); 