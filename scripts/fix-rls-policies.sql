-- Run these SQL commands in your Supabase SQL Editor

-- 1. First, let's see what policies exist
SELECT * FROM pg_policies WHERE tablename = 'users';

-- 2. Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can read own data" ON users;
DROP POLICY IF EXISTS "Users can update own data" ON users;
DROP POLICY IF EXISTS "Service role can insert users" ON users;
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON users;
DROP POLICY IF EXISTS "Enable read access for all users" ON users;

-- 3. Create a simple policy that allows all operations for now (for testing)
CREATE POLICY "Enable all operations for testing" ON users
FOR ALL USING (true) WITH CHECK (true);

-- 4. Or if you want to disable RLS completely for testing:
-- ALTER TABLE users DISABLE ROW LEVEL SECURITY;

-- 5. Check the current RLS status
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE tablename = 'users'; 