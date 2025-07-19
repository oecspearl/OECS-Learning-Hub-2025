-- Create lesson_plans table if it doesn't exist
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
  user_id TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_lesson_plans_subject ON lesson_plans(subject);
CREATE INDEX IF NOT EXISTS idx_lesson_plans_grade ON lesson_plans(grade);
CREATE INDEX IF NOT EXISTS idx_lesson_plans_created_at ON lesson_plans(created_at);
CREATE INDEX IF NOT EXISTS idx_lesson_plans_user_id ON lesson_plans(user_id);
