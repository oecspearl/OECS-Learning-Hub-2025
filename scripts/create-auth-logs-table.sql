-- Create auth_debug_logs table for logging authentication attempts
-- Run this in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS auth_debug_logs (
  id SERIAL PRIMARY KEY,
  event_type VARCHAR(50) NOT NULL,
  email VARCHAR(255),
  provider VARCHAR(50),
  success BOOLEAN NOT NULL,
  error_message TEXT,
  metadata JSONB,
  user_id VARCHAR(255),
  ip_address VARCHAR(45),
  user_agent TEXT,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS idx_auth_logs_event_type ON auth_debug_logs(event_type);
CREATE INDEX IF NOT EXISTS idx_auth_logs_email ON auth_debug_logs(email);
CREATE INDEX IF NOT EXISTS idx_auth_logs_timestamp ON auth_debug_logs(timestamp);
CREATE INDEX IF NOT EXISTS idx_auth_logs_success ON auth_debug_logs(success);

-- Grant permissions (if using RLS)
ALTER TABLE auth_debug_logs ENABLE ROW LEVEL SECURITY;

-- Create policy to allow service role to insert logs
CREATE POLICY "Service role can insert auth logs" ON auth_debug_logs
FOR INSERT WITH CHECK (true);

-- Create policy to allow service role to read logs
CREATE POLICY "Service role can read auth logs" ON auth_debug_logs
FOR SELECT USING (true);

-- Optional: Create a view for easier querying
CREATE OR REPLACE VIEW auth_logs_summary AS
SELECT 
  event_type,
  provider,
  success,
  COUNT(*) as count,
  MIN(timestamp) as first_occurrence,
  MAX(timestamp) as last_occurrence
FROM auth_debug_logs
GROUP BY event_type, provider, success
ORDER BY last_occurrence DESC; 