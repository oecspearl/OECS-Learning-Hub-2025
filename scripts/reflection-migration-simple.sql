-- Simple migration to add missing columns to lesson_reflections table
-- Run this in your Supabase SQL editor

-- Add all missing columns
ALTER TABLE lesson_reflections 
ADD COLUMN IF NOT EXISTS reflection_date TEXT,
ADD COLUMN IF NOT EXISTS objectives_met TEXT,
ADD COLUMN IF NOT EXISTS student_understanding TEXT,
ADD COLUMN IF NOT EXISTS evidence_support TEXT,
ADD COLUMN IF NOT EXISTS students_not_meeting_objectives TEXT,
ADD COLUMN IF NOT EXISTS misconceptions_difficulties TEXT,
ADD COLUMN IF NOT EXISTS assessment_effective TEXT,
ADD COLUMN IF NOT EXISTS content_suitable TEXT,
ADD COLUMN IF NOT EXISTS strategies_engaging TEXT,
ADD COLUMN IF NOT EXISTS students_on_task TEXT,
ADD COLUMN IF NOT EXISTS differentiation_effective TEXT,
ADD COLUMN IF NOT EXISTS future_improvements TEXT,
ADD COLUMN IF NOT EXISTS long_term_goals TEXT,
ADD COLUMN IF NOT EXISTS behavioral_issues TEXT,
ADD COLUMN IF NOT EXISTS student_opportunities TEXT,
ADD COLUMN IF NOT EXISTS teaching_insights TEXT,
ADD COLUMN IF NOT EXISTS overall_rating INTEGER,
ADD COLUMN IF NOT EXISTS time_management TEXT,
ADD COLUMN IF NOT EXISTS student_engagement_level TEXT;

-- Set default values for existing records
UPDATE lesson_reflections 
SET 
  reflection_date = COALESCE(reflection_date, created_at::text),
  objectives_met = COALESCE(objectives_met, ''),
  student_understanding = COALESCE(student_understanding, ''),
  evidence_support = COALESCE(evidence_support, ''),
  students_not_meeting_objectives = COALESCE(students_not_meeting_objectives, ''),
  misconceptions_difficulties = COALESCE(misconceptions_difficulties, ''),
  assessment_effective = COALESCE(assessment_effective, ''),
  content_suitable = COALESCE(content_suitable, ''),
  strategies_engaging = COALESCE(strategies_engaging, ''),
  students_on_task = COALESCE(students_on_task, ''),
  differentiation_effective = COALESCE(differentiation_effective, ''),
  future_improvements = COALESCE(future_improvements, ''),
  long_term_goals = COALESCE(long_term_goals, ''),
  behavioral_issues = COALESCE(behavioral_issues, ''),
  student_opportunities = COALESCE(student_opportunities, ''),
  teaching_insights = COALESCE(teaching_insights, ''),
  overall_rating = COALESCE(overall_rating, 3),
  time_management = COALESCE(time_management, ''),
  student_engagement_level = COALESCE(student_engagement_level, 'Medium')
WHERE reflection_date IS NULL;

-- Verify the changes
SELECT 'Migration completed successfully!' as status; 