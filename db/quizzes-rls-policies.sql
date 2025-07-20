-- Enable RLS on quizzes table
ALTER TABLE quizzes ENABLE ROW LEVEL SECURITY;

-- Policy to allow users to insert their own quizzes
CREATE POLICY "Users can insert their own quizzes" ON quizzes
FOR INSERT WITH CHECK (auth.uid()::text = user_id);

-- Policy to allow users to view their own quizzes
CREATE POLICY "Users can view their own quizzes" ON quizzes
FOR SELECT USING (auth.uid()::text = user_id);

-- Policy to allow users to update their own quizzes
CREATE POLICY "Users can update their own quizzes" ON quizzes
FOR UPDATE USING (auth.uid()::text = user_id);

-- Policy to allow users to delete their own quizzes
CREATE POLICY "Users can delete their own quizzes" ON quizzes
FOR DELETE USING (auth.uid()::text = user_id);

-- Optional: Policy to allow admins to view all quizzes (if you have admin role)
-- CREATE POLICY "Admins can view all quizzes" ON quizzes
-- FOR SELECT USING (
--   EXISTS (
--     SELECT 1 FROM users 
--     WHERE users.id = auth.uid()::text 
--     AND users.role = 'admin'
--   )
-- ); 