-- Fix quizzes table schema by adding all missing columns
-- This script adds all the columns that are expected by the application

-- Add content column if it doesn't exist
ALTER TABLE quizzes ADD COLUMN IF NOT EXISTS content TEXT;

-- Add difficulty column if it doesn't exist
ALTER TABLE quizzes ADD COLUMN IF NOT EXISTS difficulty VARCHAR(50);

-- Add question_types column if it doesn't exist
ALTER TABLE quizzes ADD COLUMN IF NOT EXISTS question_types TEXT;

-- Add time_limit column if it doesn't exist
ALTER TABLE quizzes ADD COLUMN IF NOT EXISTS time_limit INTEGER;

-- Add tags column if it doesn't exist
ALTER TABLE quizzes ADD COLUMN IF NOT EXISTS tags TEXT;

-- Add instructions column if it doesn't exist
ALTER TABLE quizzes ADD COLUMN IF NOT EXISTS instructions TEXT;

-- Add user_id column if it doesn't exist
ALTER TABLE quizzes ADD COLUMN IF NOT EXISTS user_id VARCHAR(255);

-- Add created_at column if it doesn't exist
ALTER TABLE quizzes ADD COLUMN IF NOT EXISTS created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- Add updated_at column if it doesn't exist
ALTER TABLE quizzes ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- Update existing quizzes to have default values for required fields
UPDATE quizzes 
SET 
  content = COALESCE(content, 'Quiz content not available'),
  difficulty = COALESCE(difficulty, 'medium'),
  question_types = COALESCE(question_types, '["Multiple Choice"]'),
  time_limit = COALESCE(time_limit, 30),
  tags = COALESCE(tags, '[]'),
  instructions = COALESCE(instructions, 'Answer all questions to the best of your ability.'),
  user_id = COALESCE(user_id, '1'),
  created_at = COALESCE(created_at, NOW()),
  updated_at = COALESCE(updated_at, NOW())
WHERE 
  content IS NULL 
  OR difficulty IS NULL 
  OR question_types IS NULL 
  OR time_limit IS NULL 
  OR tags IS NULL 
  OR instructions IS NULL 
  OR user_id IS NULL 
  OR created_at IS NULL 
  OR updated_at IS NULL;

-- Make required columns NOT NULL after setting default values
ALTER TABLE quizzes ALTER COLUMN content SET NOT NULL;
ALTER TABLE quizzes ALTER COLUMN difficulty SET NOT NULL;
ALTER TABLE quizzes ALTER COLUMN question_types SET NOT NULL;
ALTER TABLE quizzes ALTER COLUMN time_limit SET NOT NULL;
ALTER TABLE quizzes ALTER COLUMN tags SET NOT NULL;
ALTER TABLE quizzes ALTER COLUMN instructions SET NOT NULL;
ALTER TABLE quizzes ALTER COLUMN user_id SET NOT NULL;
ALTER TABLE quizzes ALTER COLUMN created_at SET NOT NULL;
ALTER TABLE quizzes ALTER COLUMN updated_at SET NOT NULL;

-- Create an index on user_id for better performance
CREATE INDEX IF NOT EXISTS idx_quizzes_user_id ON quizzes(user_id);

-- Create an index on created_at for better performance
CREATE INDEX IF NOT EXISTS idx_quizzes_created_at ON quizzes(created_at);

-- Verify the table structure
SELECT 
  column_name, 
  data_type, 
  is_nullable,
  column_default
FROM information_schema.columns 
WHERE table_name = 'quizzes' 
AND table_schema = 'public'
ORDER BY ordinal_position; 