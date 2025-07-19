# Quick Vercel Deployment Guide

## 🚀 Deploy Your OECS Learning Hub to Vercel

This is a simplified deployment guide focusing on the essential steps to get your application deployed.

## 📋 Prerequisites

1. **GitHub Repository** - Your code should be in a GitHub repository
2. **Vercel Account** - Sign up at https://vercel.com
3. **Supabase Database** - Ensure your database tables are created
4. **Google OAuth Credentials** - Set up for production

## 🔧 Step 1: Prepare for Deployment

### 1.1 Fix Build Issues (Optional)

The application has some TypeScript errors that need to be resolved for a clean build. For now, you can deploy with these warnings:

```bash
# The build will show warnings but should still work
npm run build
```

### 1.2 Commit Your Changes

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

## 🔧 Step 2: Deploy to Vercel

### 2.1 Connect to Vercel

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Click "New Project"**
3. **Import your GitHub repository**
4. **Select the repository containing your OECS Learning Hub**

### 2.2 Configure Environment Variables

In the Vercel project settings, add these environment variables:

```env
# NextAuth Configuration
NEXTAUTH_URL=https://your-app-name.vercel.app
NEXTAUTH_SECRET=your-production-secret-key-here

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://howglhskpjzixwfuqbql.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key-here

# Google OAuth Configuration
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here
```

### 2.3 Deploy Settings

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### 2.4 Deploy

Click "Deploy" and wait for the build to complete.

## 🔧 Step 3: Post-Deployment Configuration

### 3.1 Update Google OAuth Redirect URIs

After deployment, update your Google OAuth credentials with the actual Vercel URL:

1. **Get your Vercel URL** from the deployment
2. **Update Google Cloud Console** with the new redirect URI:
   - `https://your-app-name.vercel.app/api/auth/callback/google`
3. **Update environment variables** in Vercel if needed

### 3.2 Create Database Tables

Before the application will work properly, create the database tables in Supabase:

1. **Go to your Supabase dashboard**: https://supabase.com/dashboard/project/howglhskpjzixwfuqbql
2. **Navigate to SQL Editor**
3. **Run the SQL commands** from `GOOGLE_OAUTH_SETUP.md`

## 🎯 Expected Results

After successful deployment:

- ✅ **Application accessible** at your Vercel URL
- ✅ **Basic functionality** working
- ✅ **Database connectivity** functional (after table creation)
- ✅ **Google OAuth working** (after configuration)

## 🚨 Troubleshooting

### Common Issues:

1. **Build Warnings**: The application may build with TypeScript warnings but should still function
2. **Database Errors**: Ensure all tables are created in Supabase
3. **OAuth Errors**: Verify redirect URIs match exactly
4. **Environment Variables**: Double-check all variables are set correctly

### Quick Fixes:

1. **If build fails**: Check that all environment variables are set
2. **If database errors**: Run the SQL schema creation commands
3. **If OAuth fails**: Update Google Cloud Console with correct redirect URI

## 📝 Notes

- **Environment Variables**: Never commit sensitive data to Git
- **Database**: Ensure Supabase is configured for production
- **OAuth**: Update redirect URIs for production domain
- **Build Warnings**: Can be addressed later for a cleaner deployment

## 🆘 Support

If you encounter issues:

1. **Check Vercel logs** for error details
2. **Verify environment variables** are set correctly
3. **Ensure database tables** are created
4. **Test OAuth configuration** with production URLs

## 🎯 Next Steps

After successful deployment:

1. **Test all functionality** on the live site
2. **Fix any remaining TypeScript errors** for cleaner builds
3. **Set up custom domain** if needed
4. **Configure monitoring** and analytics 