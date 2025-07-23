-- Add missing columns to lesson_reflections table
-- This migration adds the comprehensive reflection fields that the form expects

-- Add reflection_date column if it doesn't exist
ALTER TABLE lesson_reflections ADD COLUMN IF NOT EXISTS reflection_date TEXT;

-- Add objectives_met column if it doesn't exist
ALTER TABLE lesson_reflections ADD COLUMN IF NOT EXISTS objectives_met TEXT;

-- Add student_understanding column if it doesn't exist
ALTER TABLE lesson_reflections ADD COLUMN IF NOT EXISTS student_understanding TEXT;

-- Add evidence_support column if it doesn't exist
ALTER TABLE lesson_reflections ADD COLUMN IF NOT EXISTS evidence_support TEXT;

-- Add students_not_meeting_objectives column if it doesn't exist
ALTER TABLE lesson_reflections ADD COLUMN IF NOT EXISTS students_not_meeting_objectives TEXT;

-- Add misconceptions_difficulties column if it doesn't exist
ALTER TABLE lesson_reflections ADD COLUMN IF NOT EXISTS misconceptions_difficulties TEXT;

-- Add assessment_effective column if it doesn't exist
ALTER TABLE lesson_reflections ADD COLUMN IF NOT EXISTS assessment_effective TEXT;

-- Add content_suitable column if it doesn't exist
ALTER TABLE lesson_reflections ADD COLUMN IF NOT EXISTS content_suitable TEXT;

-- Add strategies_engaging column if it doesn't exist
ALTER TABLE lesson_reflections ADD COLUMN IF NOT EXISTS strategies_engaging TEXT;

-- Add students_on_task column if it doesn't exist
ALTER TABLE lesson_reflections ADD COLUMN IF NOT EXISTS students_on_task TEXT;

-- Add differentiation_effective column if it doesn't exist
ALTER TABLE lesson_reflections ADD COLUMN IF NOT EXISTS differentiation_effective TEXT;

-- Add future_improvements column if it doesn't exist
ALTER TABLE lesson_reflections ADD COLUMN IF NOT EXISTS future_improvements TEXT;

-- Add long_term_goals column if it doesn't exist
ALTER TABLE lesson_reflections ADD COLUMN IF NOT EXISTS long_term_goals TEXT;

-- Add behavioral_issues column if it doesn't exist
ALTER TABLE lesson_reflections ADD COLUMN IF NOT EXISTS behavioral_issues TEXT;

-- Add student_opportunities column if it doesn't exist
ALTER TABLE lesson_reflections ADD COLUMN IF NOT EXISTS student_opportunities TEXT;

-- Add teaching_insights column if it doesn't exist
ALTER TABLE lesson_reflections ADD COLUMN IF NOT EXISTS teaching_insights TEXT;

-- Add overall_rating column if it doesn't exist
ALTER TABLE lesson_reflections ADD COLUMN IF NOT EXISTS overall_rating INTEGER;

-- Add time_management column if it doesn't exist
ALTER TABLE lesson_reflections ADD COLUMN IF NOT EXISTS time_management TEXT;

-- Add student_engagement_level column if it doesn't exist
ALTER TABLE lesson_reflections ADD COLUMN IF NOT EXISTS student_engagement_level TEXT;

-- Update existing records to have default values for new columns
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

-- Verify the table structure
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'lesson_reflections' 
ORDER BY ordinal_position; 