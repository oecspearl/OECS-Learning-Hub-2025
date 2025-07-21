-- Add content column to quizzes table if it doesn't exist
ALTER TABLE quizzes ADD COLUMN IF NOT EXISTS content TEXT;

-- Update existing quizzes to have a default content if they don't have any
UPDATE quizzes 
SET content = 'Quiz content not available' 
WHERE content IS NULL OR content = '';

-- Make content column NOT NULL after setting default values
ALTER TABLE quizzes ALTER COLUMN content SET NOT NULL; 