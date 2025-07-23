-- Fix the student_engagement_level column type
-- Run this if you get the INTEGER error

-- First, drop the column if it exists with wrong type
ALTER TABLE lesson_reflections DROP COLUMN IF EXISTS student_engagement_level;

-- Add it back with correct TEXT type
ALTER TABLE lesson_reflections ADD COLUMN student_engagement_level TEXT;

-- Set default value
UPDATE lesson_reflections 
SET student_engagement_level = 'Medium' 
WHERE student_engagement_level IS NULL;

SELECT 'student_engagement_level column fixed!' as status; 