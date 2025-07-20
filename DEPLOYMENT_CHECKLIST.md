# 🚀 Deployment Checklist

## Pre-Deployment Setup

### 1. Environment Variables
Make sure your `.env.local` has all required variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# NextAuth Configuration
NEXTAUTH_SECRET=your-nextauth-secret-here
NEXTAUTH_URL=https://oecslearninghub.org

# Google OAuth Configuration
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here

# OpenAI Configuration (if using AI features)
OPENAI_API_KEY=your-openai-api-key-here
```

### 2. Database Setup
Run these SQL commands in your Supabase SQL Editor:

```sql
-- Create auth logs table
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

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_auth_logs_event_type ON auth_debug_logs(event_type);
CREATE INDEX IF NOT EXISTS idx_auth_logs_email ON auth_debug_logs(email);
CREATE INDEX IF NOT EXISTS idx_auth_logs_timestamp ON auth_debug_logs(timestamp);
CREATE INDEX IF NOT EXISTS idx_auth_logs_success ON auth_debug_logs(success);

-- Disable RLS on users table for now (for testing)
ALTER TABLE users DISABLE ROW LEVEL SECURITY;
```

### 3. Google OAuth Setup
Update your Google Cloud Console OAuth 2.0 credentials:

**Authorized redirect URIs:**
```
https://oecslearninghub.org/api/auth/callback/google
http://localhost:3002/api/auth/callback/google
```

## Deployment Steps

### 1. Vercel Deployment
```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# Deploy to Vercel
vercel --prod
```

### 2. Environment Variables in Vercel
Add these environment variables in your Vercel dashboard:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL` (set to `https://oecslearninghub.org`)
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `OPENAI_API_KEY` (if using AI features)

### 3. Domain Configuration
- Point your domain `oecslearninghub.org` to Vercel
- Update DNS settings as instructed by Vercel

## Post-Deployment Testing

### 1. Test Authentication
- Visit: https://oecslearninghub.org/login
- Test Google OAuth sign-in
- Test credentials login (if you have test users)

### 2. Check Logs
```bash
# View authentication logs
node scripts/view-auth-logs.js
```

### 3. Monitor Performance
- Check Vercel analytics
- Monitor Supabase usage
- Watch for any errors in logs

## Troubleshooting

### Common Issues:
1. **RLS Errors**: Make sure RLS is disabled on users table
2. **OAuth Redirect**: Verify redirect URIs in Google Console
3. **Environment Variables**: Double-check all variables in Vercel
4. **Database Connection**: Test Supabase connection

### Debug Commands:
```bash
# Test database connection
node scripts/test-db-connection.js

# View auth logs
node scripts/view-auth-logs.js

# Create test user
node scripts/create-test-user-admin.js
```

## Security Notes

### For Production:
1. **Re-enable RLS** with proper policies after testing
2. **Use strong secrets** for NEXTAUTH_SECRET
3. **Monitor logs** for suspicious activity
4. **Regular backups** of Supabase data

### Environment Variables Security:
- Never commit `.env.local` to version control
- Use Vercel's environment variable encryption
- Rotate secrets regularly 