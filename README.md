# OECS Learning Hub 2025

A comprehensive educational curriculum management system for the Organization of Eastern Caribbean States (OECS).

## Features

- **Curriculum Management**: Complete curriculum standards for K-6 grades
- **Google OAuth Integration**: Secure authentication with Google
- **Lesson Planning**: AI-powered lesson plan generation
- **Cross-Curricular Planning**: Integrated subject planning
- **Assessment Tools**: Quiz creation and management
- **Resource Management**: Educational resources and materials
- **Teacher Dashboard**: Comprehensive teacher tools and analytics

## Technology Stack

- **Frontend**: Next.js 15, React, TypeScript
- **Backend**: Supabase (PostgreSQL)
- **Authentication**: NextAuth.js with Google OAuth
- **Deployment**: Vercel
- **Styling**: Tailwind CSS, shadcn/ui

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables
4. Run development server: `npm run dev`

## Environment Variables

```
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=https://your-domain.vercel.app
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-supabase-anon-key
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

## Deployment

This application is configured for deployment on Vercel with automatic builds from GitHub.

## License

Educational use for OECS member states. 