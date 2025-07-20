# 🔧 Fix Google OAuth Redirect URI Issue

## The Problem
Google OAuth is trying to redirect to `https://oecslearninghub.org` but this URI isn't authorized in Google Cloud Console.

## Solution

### Step 1: Update Google Cloud Console

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com
   - Select your project

2. **Navigate to OAuth 2.0 Credentials**
   - Go to "APIs & Services" → "Credentials"
   - Find your OAuth 2.0 Client ID
   - Click on it to edit

3. **Add Authorized Redirect URIs**
   Add these URIs to the "Authorized redirect URIs" section:

   ```
   http://localhost:3002/api/auth/callback/google
   https://oecslearninghub.org/api/auth/callback/google
   ```

4. **Save the changes**

### Step 2: Update Environment Variables

Make sure your `.env.local` has the correct URLs:

```env
# For development
NEXTAUTH_URL=http://localhost:3002

# For production (when deployed)
# NEXTAUTH_URL=https://oecslearninghub.org
```

### Step 3: Test the Fix

1. **Restart your development server:**
   ```bash
   npm run dev
   ```

2. **Try Google OAuth again:**
   - Go to: http://localhost:3002/login
   - Click "Sign in with Google"

### Step 4: For Production Deployment

When you deploy to production, make sure to:

1. **Update Google Cloud Console** with your production domain
2. **Set the correct NEXTAUTH_URL** in your production environment variables
3. **Update Vercel environment variables** with the production URL

## Alternative: Use Local Development Only

If you want to test locally first, you can temporarily use only the localhost redirect URI:

```
http://localhost:3002/api/auth/callback/google
```

Then add the production URI later when you deploy. 