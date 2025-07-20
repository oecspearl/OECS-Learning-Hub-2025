# 🔐 Environment Variables Setup Guide

## Step 1: Create .env.local file

Create a file called `.env.local` in your project root with the following template:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# NextAuth Configuration
NEXTAUTH_SECRET=your-nextauth-secret-here
NEXTAUTH_URL=http://localhost:3002

# Google OAuth Configuration
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here

# OpenAI Configuration (if using AI features)
OPENAI_API_KEY=your-openai-api-key-here
```

## Step 2: Replace with your actual credentials

Replace the placeholder values with your actual credentials:

### Supabase Credentials
- Get these from your Supabase project dashboard
- Go to Settings > API
- Copy the URL and anon key

### NextAuth Secret
- Generate a random string for NEXTAUTH_SECRET
- You can use: `openssl rand -base64 32`

### Google OAuth Credentials
- Get these from Google Cloud Console
- Go to APIs & Services > Credentials
- Create OAuth 2.0 Client ID

## Step 3: Test the setup

After setting up your credentials:

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Test database connection:
   ```bash
   node scripts/test-db-connection.js
   ```

3. Create a test user:
   ```bash
   node scripts/create-test-user.js
   ```

4. Try logging in at: http://localhost:3002/login

## Security Notes

- Never commit `.env.local` to version control
- Keep your credentials secure
- Use different credentials for development and production 