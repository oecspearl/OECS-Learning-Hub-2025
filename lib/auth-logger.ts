import { createClient } from '@supabase/supabase-js'

// Create Supabase client with service role key for logging
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const supabase = createClient(supabaseUrl, supabaseServiceKey)

export interface AuthLogData {
  event_type: 'login_success' | 'login_failure' | 'oauth_success' | 'oauth_failure' | 'user_creation' | 'user_lookup'
  email?: string
  provider?: string
  success: boolean
  error_message?: string
  metadata?: any
  user_id?: string
  ip_address?: string
  user_agent?: string
}

export async function logAuthAttempt(data: AuthLogData) {
  try {
    console.log('🔍 Logging auth attempt:', data)
    
    const { error } = await supabase
      .from('auth_debug_logs')
      .insert({
        event_type: data.event_type,
        email: data.email,
        provider: data.provider,
        success: data.success,
        error_message: data.error_message,
        metadata: data.metadata,
        user_id: data.user_id,
        ip_address: data.ip_address,
        user_agent: data.user_agent,
        timestamp: new Date().toISOString()
      })
      
    if (error) {
      console.error('❌ Failed to log auth attempt:', error)
      return false
    }
    
    console.log('✅ Auth attempt logged successfully')
    return true
  } catch (err) {
    console.error('❌ Error logging auth attempt:', err)
    return false
  }
}

// Helper functions for specific auth events
export async function logLoginSuccess(email: string, provider: string, userId?: string) {
  return logAuthAttempt({
    event_type: 'login_success',
    email,
    provider,
    success: true,
    user_id: userId
  })
}

export async function logLoginFailure(email: string, provider: string, error: string) {
  return logAuthAttempt({
    event_type: 'login_failure',
    email,
    provider,
    success: false,
    error_message: error
  })
}

export async function logOAuthSuccess(email: string, provider: string, userId?: string) {
  return logAuthAttempt({
    event_type: 'oauth_success',
    email,
    provider,
    success: true,
    user_id: userId
  })
}

export async function logOAuthFailure(email: string, provider: string, error: string) {
  return logAuthAttempt({
    event_type: 'oauth_failure',
    email,
    provider,
    success: false,
    error_message: error
  })
}

export async function logUserCreation(email: string, provider: string, userId?: string) {
  return logAuthAttempt({
    event_type: 'user_creation',
    email,
    provider,
    success: true,
    user_id: userId
  })
}

export async function logUserLookup(email: string, found: boolean) {
  return logAuthAttempt({
    event_type: 'user_lookup',
    email,
    success: found,
    metadata: { found }
  })
} 