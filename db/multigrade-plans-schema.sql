-- Create multigrade_plans table if it doesn't exist
CREATE TABLE IF NOT EXISTS multigrade_plans (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
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
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_multigrade_plans_subject ON multigrade_plans(subject);
CREATE INDEX IF NOT EXISTS idx_multigrade_plans_grade_range ON multigrade_plans(grade_range);
CREATE INDEX IF NOT EXISTS idx_multigrade_plans_created_at ON multigrade_plans(created_at);
