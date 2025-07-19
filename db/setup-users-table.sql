-- Ensure users table exists with proper structure
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL DEFAULT 'teacher',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- Create index on role for filtering
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);

-- Add constraint to ensure valid roles
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.table_constraints 
    WHERE constraint_name = 'users_role_check' 
    AND table_name = 'users'
  ) THEN
    ALTER TABLE users ADD CONSTRAINT users_role_check 
    CHECK (role IN ('teacher', 'administrator', 'curriculum_specialist', 'principal'));
  END IF;
END $$;

-- Insert a test admin user (password: 'admin123')
-- Using SHA-256 hash for 'admin123'
INSERT INTO users (name, email, password_hash, role, created_at, updated_at)
VALUES (
  'System Administrator',
  'admin@oecs.edu',
  '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9',
  'administrator',
  NOW(),
  NOW()
) ON CONFLICT (email) DO NOTHING;

-- Insert a test teacher user (password: 'teacher123')
-- Using SHA-256 hash for 'teacher123'
INSERT INTO users (name, email, password_hash, role, created_at, updated_at)
VALUES (
  'Demo Teacher',
  'teacher@oecs.edu',
  '4d01ce8b6f18d6e91e4fa1b865ea3d686fbbd9908c4a35aec03c0c082b1ce77a',
  'teacher',
  NOW(),
  NOW()
) ON CONFLICT (email) DO NOTHING;
