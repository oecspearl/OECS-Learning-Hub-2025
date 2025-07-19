# Vercel Deployment Guide

## 🚀 Deploy Your OECS Learning Hub to Vercel

This guide will walk you through deploying your application to Vercel with all the necessary configurations.

## 📋 Prerequisites

1. **GitHub Account** - Your code should be in a GitHub repository
2. **Vercel Account** - Sign up at https://vercel.com
3. **Supabase Database** - Ensure your database tables are created
4. **Google OAuth Credentials** - Set up for production

## 🔧 Step 1: Prepare Your Repository

### 1.1 Commit Your Changes

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 1.2 Verify Your Files

Ensure these files are in your repository:
- ✅ `vercel.json` - Vercel configuration
- ✅ `next.config.js` - Next.js configuration
- ✅ `package.json` - Dependencies
- ✅ `.env.local` - Local environment variables (will be replaced)

## 🔧 Step 2: Set Up Google OAuth for Production

### 2.1 Update Google OAuth Credentials

1. **Go to Google Cloud Console**: https://console.cloud.google.com/
2. **Navigate to your OAuth 2.0 credentials**
3. **Add production redirect URIs**:
   - `https://your-app-name.vercel.app/api/auth/callback/google`
   - Replace `your-app-name` with your actual Vercel app name

### 2.2 Update Authorized JavaScript Origins

Add your Vercel domain:
- `https://your-app-name.vercel.app`

## 🔧 Step 3: Deploy to Vercel

### 3.1 Connect to Vercel

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Click "New Project"**
3. **Import your GitHub repository**
4. **Select the repository containing your OECS Learning Hub**

### 3.2 Configure Environment Variables

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

### 3.3 Deploy Settings

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### 3.4 Deploy

Click "Deploy" and wait for the build to complete.

## 🔧 Step 4: Post-Deployment Configuration

### 4.1 Update Google OAuth Redirect URIs

After deployment, update your Google OAuth credentials with the actual Vercel URL:

1. **Get your Vercel URL** from the deployment
2. **Update Google Cloud Console** with the new redirect URI
3. **Update environment variables** in Vercel if needed

### 4.2 Test Your Application

1. **Visit your Vercel URL**
2. **Test Google OAuth sign-in**
3. **Test quiz creation and dashboard functionality**
4. **Verify database connectivity**

## 🔧 Step 5: Custom Domain (Optional)

### 5.1 Add Custom Domain

1. **Go to your Vercel project settings**
2. **Navigate to "Domains"**
3. **Add your custom domain**
4. **Update Google OAuth credentials** with the new domain
5. **Update environment variables** with the new domain

## 🚨 Troubleshooting

### Common Issues:

1. **Build Failures**:
   - Check that all dependencies are in `package.json`
   - Ensure TypeScript errors are resolved
   - Verify environment variables are set

2. **Google OAuth Errors**:
   - Verify redirect URIs match exactly
   - Check that environment variables are correct
   - Ensure Google+ API is enabled

3. **Database Connection Issues**:
   - Verify Supabase environment variables
   - Check that database tables exist
   - Ensure RLS policies are configured correctly

4. **NextAuth Errors**:
   - Verify `NEXTAUTH_URL` matches your deployment URL
   - Check that `NEXTAUTH_SECRET` is set
   - Ensure all providers are configured

### Debug Commands:

```bash
# Check build locally
npm run build

# Test production build
npm run start

# Check environment variables
echo $NEXTAUTH_URL
echo $NEXTAUTH_SECRET
```

## 📊 Monitoring

### 5.1 Vercel Analytics

1. **Enable Vercel Analytics** in your project settings
2. **Monitor performance** and user behavior
3. **Set up alerts** for errors

### 5.2 Logs

- **Function Logs**: Check Vercel function logs for API errors
- **Build Logs**: Monitor deployment builds
- **Runtime Logs**: Debug production issues

## 🔄 Continuous Deployment

### 6.1 Automatic Deployments

Vercel will automatically deploy when you push to your main branch:
- ✅ **Automatic builds** on every push
- ✅ **Preview deployments** for pull requests
- ✅ **Rollback capability** for failed deployments

### 6.2 Environment Management

- **Production**: Main branch deployments
- **Preview**: Pull request deployments
- **Development**: Local development with `.env.local`

## 🎯 Expected Results

After successful deployment:

- ✅ **Application accessible** at your Vercel URL
- ✅ **Google OAuth working** for sign-in/sign-up
- ✅ **Database connectivity** functional
- ✅ **Quiz creation and display** working
- ✅ **Dashboard functionality** operational
- ✅ **All features** working in production

## 📝 Notes

- **Environment Variables**: Never commit sensitive data to Git
- **Database**: Ensure Supabase is configured for production
- **OAuth**: Update redirect URIs for production domain
- **Performance**: Monitor and optimize as needed
- **Security**: Regularly update dependencies and secrets

## 🆘 Support

If you encounter issues:

1. **Check Vercel logs** for error details
2. **Verify environment variables** are set correctly
3. **Test locally** with production environment variables
4. **Contact support** if issues persist 