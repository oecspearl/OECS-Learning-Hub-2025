-- Fix lesson_reflections table by adding all missing columns
-- This script adds all the columns that the frontend expects but are missing from the database

-- Add missing columns to lesson_reflections table
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
ADD COLUMN IF NOT EXISTS student_engagement_level TEXT,
ADD COLUMN IF NOT EXISTS next_steps TEXT;

-- Update existing records to have default values for required fields
UPDATE lesson_reflections 
SET reflection_date = COALESCE(reflection_date, CURRENT_DATE::TEXT)
WHERE reflection_date IS NULL;

-- Verify the table structure
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns 
WHERE table_name = 'lesson_reflections' 
ORDER BY ordinal_position; 