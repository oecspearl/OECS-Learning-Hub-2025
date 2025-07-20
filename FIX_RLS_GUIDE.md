# 🔧 Fix RLS Policies Issue

## The Problem
You're getting a "row-level security policy" error when trying to create users. This is because Supabase has RLS (Row Level Security) enabled by default.

## Solution Options

### Option 1: Disable RLS (Quick Fix for Testing)

1. **Go to your Supabase Dashboard**
   - Visit: https://supabase.com/dashboard
   - Select your project

2. **Open SQL Editor**
   - Go to SQL Editor in the left sidebar

3. **Run this SQL command:**
   ```sql
   ALTER TABLE users DISABLE ROW LEVEL SECURITY;
   ```

4. **Test again:**
   ```bash
   node scripts/create-test-user-admin.js
   ```

### Option 2: Create Proper RLS Policies

If you want to keep RLS enabled (recommended for production), run these SQL commands in your Supabase SQL Editor:

```sql
-- Drop existing policies
DROP POLICY IF EXISTS "Users can read own data" ON users;
DROP POLICY IF EXISTS "Users can update own data" ON users;
DROP POLICY IF EXISTS "Service role can insert users" ON users;

-- Create a simple policy for testing
CREATE POLICY "Enable all operations for testing" ON users
FOR ALL USING (true) WITH CHECK (true);
```

### Option 3: Use Service Role Key

Add your service role key to `.env.local`:

```env
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

Get this from: Supabase Dashboard → Settings → API → service_role key

## After Fixing RLS

1. **Create test user:**
   ```bash
   node scripts/create-test-user-admin.js
   ```

2. **Test login:**
   - Go to: http://localhost:3002/login
   - Email: test@example.com
   - Password: test123

## For Production

For production, you should create proper RLS policies that:
- Allow users to read/update their own data
- Allow registration (insert) for new users
- Restrict access based on user roles

But for now, disabling RLS will let you test the authentication system. 