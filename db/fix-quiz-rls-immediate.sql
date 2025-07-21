-- IMMEDIATE FIX: Apply RLS policies for quizzes table
-- Run these commands in your Supabase SQL Editor

-- 1. Enable RLS on quizzes table (if not already enabled)
ALTER TABLE quizzes ENABLE ROW LEVEL SECURITY;

-- 2. Drop any existing policies to avoid conflicts
DROP POLICY IF EXISTS "Users can insert their own quizzes" ON quizzes;
DROP POLICY IF EXISTS "Users can view their own quizzes" ON quizzes;
DROP POLICY IF EXISTS "Users can update their own quizzes" ON quizzes;
DROP POLICY IF EXISTS "Users can delete their own quizzes" ON quizzes;

-- 3. Create the INSERT policy (this is the critical one for saving quizzes)
CREATE POLICY "Users can insert their own quizzes" ON quizzes
FOR INSERT WITH CHECK (auth.uid()::text = user_id);

-- 4. Create the SELECT policy (for viewing quizzes)
CREATE POLICY "Users can view their own quizzes" ON quizzes
FOR SELECT USING (auth.uid()::text = user_id);

-- 5. Create the UPDATE policy (for editing quizzes)
CREATE POLICY "Users can update their own quizzes" ON quizzes
FOR UPDATE USING (auth.uid()::text = user_id);

-- 6. Create the DELETE policy (for deleting quizzes)
CREATE POLICY "Users can delete their own quizzes" ON quizzes
FOR DELETE USING (auth.uid()::text = user_id);

-- 7. Verify the policies were created
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check 
FROM pg_policies 
WHERE tablename = 'quizzes'; 