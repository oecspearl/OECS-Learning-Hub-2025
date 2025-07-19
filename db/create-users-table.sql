-- Drop the table if it exists to start fresh
DROP TABLE IF EXISTS users CASCADE;

-- Create users table with proper structure
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL DEFAULT 'teacher',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index on email for faster lookups
CREATE INDEX idx_users_email ON users(email);

-- Create index on role for filtering
CREATE INDEX idx_users_role ON users(role);

-- Add constraint to ensure valid roles
ALTER TABLE users ADD CONSTRAINT users_role_check 
CHECK (role IN ('teacher', 'administrator', 'curriculum_specialist', 'principal'));

-- Insert test users with correct SHA-256 hashes
-- Admin user: email=admin@oecs.edu, password=admin123
INSERT INTO users (name, email, password_hash, role, created_at, updated_at)
VALUES (
  'System Administrator',
  'admin@oecs.edu',
  '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9',
  'administrator',
  NOW(),
  NOW()
);

-- Teacher user: email=teacher@oecs.edu, password=teacher123
INSERT INTO users (name, email, password_hash, role, created_at, updated_at)
VALUES (
  'Demo Teacher',
  'teacher@oecs.edu',
  '4d01ce8b6f18d6e91e4fa1b865ea3d686fbbd9908c4a35aec03c0c082b1ce77a',
  'teacher',
  NOW(),
  NOW()
);

-- Curriculum Specialist user: email=specialist@oecs.edu, password=specialist123
INSERT INTO users (name, email, password_hash, role, created_at, updated_at)
VALUES (
  'Curriculum Specialist',
  'specialist@oecs.edu',
  'ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f',
  'curriculum_specialist',
  NOW(),
  NOW()
);

-- Principal user: email=principal@oecs.edu, password=principal123
INSERT INTO users (name, email, password_hash, role, created_at, updated_at)
VALUES (
  'School Principal',
  'principal@oecs.edu',
  'c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd4',
  'principal',
  NOW(),
  NOW()
);

-- Verify the table was created and users were inserted
SELECT 'Users table created successfully' as status;
SELECT COUNT(*) as user_count FROM users;
SELECT id, name, email, role FROM users ORDER BY id;
