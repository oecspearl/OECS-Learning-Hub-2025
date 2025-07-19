-- First, let's check what users exist
SELECT id, name, email, role FROM users;

-- Delete existing test users to recreate them with correct hashes
DELETE FROM users WHERE email IN ('admin@oecs.edu', 'teacher@oecs.edu');

-- Insert test admin user with correct hash for 'admin123'
INSERT INTO users (name, email, password_hash, role, created_at, updated_at)
VALUES (
  'System Administrator',
  'admin@oecs.edu',
  '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9',
  'administrator',
  NOW(),
  NOW()
);

-- Insert test teacher user with correct hash for 'teacher123'  
INSERT INTO users (name, email, password_hash, role, created_at, updated_at)
VALUES (
  'Demo Teacher',
  'teacher@oecs.edu',
  '4d01ce8b6f18d6e91e4fa1b865ea3d686fbbd9908c4a35aec03c0c082b1ce77a',
  'teacher',
  NOW(),
  NOW()
);

-- Verify the users were created
SELECT id, name, email, password_hash, role FROM users WHERE email IN ('admin@oecs.edu', 'teacher@oecs.edu');
