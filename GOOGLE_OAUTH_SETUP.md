# Google OAuth Setup Guide

## ✅ What's Already Configured

The application has been updated with Google OAuth support:

1. **NextAuth Configuration** - Google provider added to `lib/auth.ts`
2. **Login Page** - Google sign-in button added to `/login`
3. **Register Page** - Google sign-up button added to `/register`
4. **Environment Variables** - Placeholders added to `.env.local`

## 🔧 Steps to Complete Google OAuth Setup

### 1. Create Google OAuth Credentials

1. **Go to Google Cloud Console**: https://console.cloud.google.com/
2. **Create a new project** or select an existing one
3. **Enable Google+ API**:
   - Go to "APIs & Services" > "Library"
   - Search for "Google+ API" and enable it
4. **Create OAuth 2.0 credentials**:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth 2.0 Client IDs"
   - Choose "Web application"
   - Add authorized redirect URIs:
     - `http://localhost:3002/api/auth/callback/google`
     - `http://localhost:3000/api/auth/callback/google` (if using port 3000)
   - Add authorized JavaScript origins:
     - `http://localhost:3002`
     - `http://localhost:3000` (if using port 3000)

### 2. Update Environment Variables

Replace the placeholder values in your `.env.local` file:

```env
# Current placeholders (replace these):
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here

# Replace with your actual Google OAuth credentials:
GOOGLE_CLIENT_ID=123456789-abcdefghijklmnop.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-your-actual-client-secret
```

### 3. Create Database Tables (Required)

Before Google OAuth will work, you need to create the database tables in Supabase:

1. **Go to your Supabase dashboard**: https://supabase.com/dashboard/project/howglhskpjzixwfuqbql
2. **Navigate to SQL Editor**
3. **Run the following SQL**:

```sql
-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'teacher',
  avatar_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create quizzes table
CREATE TABLE IF NOT EXISTS quizzes (
  id VARCHAR(255) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  subject VARCHAR(100) NOT NULL,
  grade VARCHAR(50) NOT NULL,
  topic VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  question_count INTEGER DEFAULT 10,
  question_types TEXT DEFAULT '[]',
  difficulty VARCHAR(50) DEFAULT 'Medium',
  time_limit INTEGER DEFAULT 30,
  tags TEXT DEFAULT '[]',
  instructions TEXT,
  user_id VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create lesson_plans table
CREATE TABLE IF NOT EXISTS lesson_plans (
  id VARCHAR(255) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  subject VARCHAR(100) NOT NULL,
  grade VARCHAR(50) NOT NULL,
  topic VARCHAR(255),
  content TEXT NOT NULL,
  duration VARCHAR(100),
  materials TEXT,
  pedagogical_strategy TEXT,
  differentiation_strategies TEXT,
  grouping_strategy TEXT,
  assessment_approach TEXT,
  curriculum_standards TEXT,
  overview TEXT,
  objectives TEXT,
  vocabulary TEXT,
  homework TEXT,
  extensions TEXT,
  standards TEXT,
  user_id VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create multigrade_plans table
CREATE TABLE IF NOT EXISTS multigrade_plans (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  subject VARCHAR(100) NOT NULL,
  grade_range VARCHAR(100) NOT NULL,
  topic VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  duration VARCHAR(100),
  materials TEXT,
  pedagogical_strategy TEXT,
  differentiation_strategies TEXT,
  grouping_strategy TEXT,
  assessment_approach TEXT,
  curriculum_standards TEXT,
  overview TEXT,
  objectives TEXT,
  vocabulary TEXT,
  homework TEXT,
  extensions TEXT,
  standards TEXT,
  user_id VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create cross_curricular_plans table
CREATE TABLE IF NOT EXISTS cross_curricular_plans (
  id VARCHAR(255) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  theme VARCHAR(255) NOT NULL,
  grade_range VARCHAR(100) NOT NULL,
  subjects TEXT NOT NULL,
  content TEXT NOT NULL,
  duration VARCHAR(100),
  materials TEXT,
  pedagogical_strategy TEXT,
  differentiation_strategies TEXT,
  grouping_strategy TEXT,
  assessment_approach TEXT,
  curriculum_standards TEXT,
  overview TEXT,
  objectives TEXT,
  vocabulary TEXT,
  homework TEXT,
  extensions TEXT,
  standards TEXT,
  user_id VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create schedules table
CREATE TABLE IF NOT EXISTS schedules (
  id VARCHAR(255) PRIMARY KEY,
  day VARCHAR(50) NOT NULL,
  time VARCHAR(50) NOT NULL,
  subject VARCHAR(100) NOT NULL,
  activity VARCHAR(255) NOT NULL,
  user_id VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create lesson_reflections table
CREATE TABLE IF NOT EXISTS lesson_reflections (
  id VARCHAR(255) PRIMARY KEY,
  lesson_plan_id VARCHAR(255) NOT NULL,
  reflection_date DATE NOT NULL,
  what_went_well TEXT,
  what_could_be_improved TEXT,
  student_engagement INTEGER,
  learning_objectives_met BOOLEAN,
  next_steps TEXT,
  user_id VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 4. Restart Development Server

After updating the environment variables:

```bash
npm run dev
```

## 🎯 Expected Results

Once completed, users will be able to:

- ✅ **Sign in with Google** on the login page
- ✅ **Sign up with Google** on the register page
- ✅ **Automatically create accounts** in your database
- ✅ **Access the dashboard** after Google authentication
- ✅ **Create and save quizzes** that appear in the dashboard

## 🔍 Testing

1. **Visit**: http://localhost:3002/login
2. **Click**: "Sign in with Google" button
3. **Complete**: Google OAuth flow
4. **Verify**: You're redirected to the dashboard
5. **Test**: Create a quiz and verify it appears in the dashboard

## 🚨 Troubleshooting

### Common Issues:

1. **"Invalid redirect URI" error**:
   - Check that your redirect URI in Google Console matches exactly: `http://localhost:3002/api/auth/callback/google`

2. **"Client ID not found" error**:
   - Verify your `GOOGLE_CLIENT_ID` is correct in `.env.local`

3. **Database errors**:
   - Ensure you've created all the database tables in Supabase

4. **NextAuth errors**:
   - Make sure `NEXTAUTH_SECRET` and `NEXTAUTH_URL` are set correctly

## 📝 Notes

- Google OAuth users will be automatically assigned the "teacher" role
- Users created via Google OAuth will have a placeholder password hash
- The system supports both email/password and Google OAuth authentication 