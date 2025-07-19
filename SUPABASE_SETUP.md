# Supabase Database Setup

This document provides instructions for setting up the OECS Learning Hub with Supabase as the database.

## Prerequisites

1. A Supabase account and project
2. Node.js and npm installed
3. The project dependencies installed

## Environment Variables

Add the following environment variables to your `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=https://howglhskpjzixwfuqbql.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhvd2dsaHNrcGp6aXh3ZnVxYnFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNzM0ODUsImV4cCI6MjA1ODc0OTQ4NX0.GYlIznzJGrqSbdg_ZiFaaCM6WRmE_N_2FGNq67-9Onk
```

## Database Setup

### 1. Create Tables

Run the SQL script to create all necessary tables in your Supabase database:

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Copy and paste the contents of `scripts/setup-supabase-tables.sql`
4. Execute the script

### 2. Initialize Database

Run the initialization script to create default data:

```bash
npm run init-supabase
```

This will create:
- A default admin user (email: admin@example.com, password: admin123)
- Default application settings
- Sample curriculum strands

## Database Structure

The application uses the following main tables:

### Core Tables
- `users` - User accounts and authentication
- `settings` - Application configuration
- `strands` - Curriculum strands
- `essential_learning_outcomes` - Essential learning outcomes
- `specific_curriculum_outcomes` - Specific curriculum outcomes
- `assessment_strategies` - Assessment strategies
- `learning_strategies` - Learning strategies
- `resources` - Educational resources
- `teacher_content` - Teacher content knowledge

### User Content Tables
- `lesson_plans` - User-created lesson plans
- `quizzes` - User-created quizzes
- `schedules` - User schedules
- `lesson_reflections` - Lesson reflection notes
- `multigrade_plans` - Multigrade lesson plans

## Security

The database uses Row Level Security (RLS) with the following policies:

- **Public Read Access**: Curriculum data (strands, outcomes, strategies) is publicly readable
- **Authenticated User Access**: Users can manage their own content (lesson plans, quizzes, etc.)
- **Admin Access**: Admin users have full access to all data

## API Usage

The application uses the Supabase client for all database operations. Key files:

- `lib/supabase.ts` - Supabase client configuration and types
- `lib/db-supabase.ts` - Database helper functions
- `lib/db.ts` - Main database interface (re-exports Supabase functions)

## Migration from SQLite

If you're migrating from the previous SQLite setup:

1. Export your existing data from SQLite
2. Import the data into Supabase using the Supabase dashboard or API
3. Update your environment variables
4. Test the application functionality

## Troubleshooting

### Common Issues

1. **Connection Errors**: Verify your Supabase URL and API key are correct
2. **Permission Errors**: Check that RLS policies are properly configured
3. **Missing Tables**: Ensure the SQL setup script was executed successfully

### Testing Connection

You can test the database connection by running:

```bash
npm run dev
```

Then visit `/api/check-env` to verify the database connection.

## Default Login

After initialization, you can log in with:
- Email: admin@example.com
- Password: admin123

## Next Steps

1. Customize the default data in `scripts/init-supabase.js`
2. Add your curriculum data to the database
3. Configure additional RLS policies if needed
4. Set up Supabase Auth if you want to use Supabase's authentication system 