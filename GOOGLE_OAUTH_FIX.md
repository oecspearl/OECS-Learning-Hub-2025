# 🔧 Fix Google OAuth Redirect URI Mismatch

## The Problem
You're getting `Error 400: redirect_uri_mismatch` because Google OAuth is trying to redirect to `https://oecslearninghub.org/api/auth/callback/google` but this URI isn't registered in Google Cloud Console.

## Solution

### Step 1: Update Google Cloud Console

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com
   - Select your project

2. **Navigate to OAuth 2.0 Credentials**
   - Go to "APIs & Services" → "Credentials"
   - Find your OAuth 2.0 Client ID
   - Click on it to edit

3. **Add the Missing Redirect URI**
   In the "Authorized redirect URIs" section, add:
   ```
   https://oecslearninghub.org/api/auth/callback/google
   ```

4. **Save the changes**

### Step 2: Verify Your Redirect URIs

Your Google Cloud Console should have these redirect URIs:
```
http://localhost:3002/api/auth/callback/google
https://oecslearninghub.org/api/auth/callback/google
```

### Step 3: Update Environment Variables

Make sure your `.env.local` has:
```env
NEXTAUTH_URL=https://oecslearninghub.org
```

### Step 4: Test the Fix

1. **Wait 5-10 minutes** for Google's changes to propagate
2. **Try Google OAuth again** at: https://oecslearninghub.org/login

## Why This Happens

- Google OAuth requires **exact** URI matching
- The redirect URI must be **pre-registered** in Google Cloud Console
- No wildcards or partial matches are allowed
- Changes can take a few minutes to propagate

## Troubleshooting

### If you still get the error:
1. **Double-check the URI** - it must be exactly: `https://oecslearninghub.org/api/auth/callback/google`
2. **Wait longer** - Google's changes can take up to 10 minutes
3. **Clear browser cache** - sometimes cached OAuth flows cause issues
4. **Check for typos** - ensure the URI is exactly correct

### Common Mistakes:
- Missing `https://` protocol
- Wrong domain name
- Extra or missing slashes
- Wrong path structure 