import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/db'

export async function GET() {
  console.log('🔍 Production Test: Starting database connection test...')

  try {
    // Check environment variables
    const envVars = {
      hasUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      hasAnonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      hasServiceKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
      url: process.env.NEXT_PUBLIC_SUPABASE_URL ? `${process.env.NEXT_PUBLIC_SUPABASE_URL.substring(0, 20)}...` : 'MISSING',
      anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY.substring(0, 20)}...` : 'MISSING',
      serviceKey: process.env.SUPABASE_SERVICE_ROLE_KEY ? `${process.env.SUPABASE_SERVICE_ROLE_KEY.substring(0, 20)}...` : 'MISSING'
    }

    console.log('🔍 Production Test: Environment variables status:', envVars)

    // Check if Supabase client is available
    if (!supabaseAdmin) {
      console.error('❌ Production Test: Supabase client not initialized')
      return NextResponse.json({
        success: false,
        error: 'Database connection not available',
        details: {
          message: 'Supabase client not initialized',
          envVars
        }
      })
    }

    console.log('✅ Production Test: Supabase client is available')

    // Test the Supabase connection
    const { data, error } = await supabaseAdmin
      .from('lesson_plans')
      .select('count')
      .limit(1)

    if (error) {
      console.error('❌ Production Test: Database connection test failed:', error)
      return NextResponse.json({
        success: false,
        error: 'Database connection failed',
        details: {
          message: error.message,
          code: error.code,
          envVars
        }
      })
    }

    console.log('✅ Production Test: Database connection successful')

    // Test authentication
    const { data: authData, error: authError } = await supabaseAdmin.auth.getUser()

    return NextResponse.json({
      success: true,
      message: 'Production deployment is working correctly',
      details: {
        database: 'Connected',
        authentication: authError ? 'Error' : 'Working',
        lessonPlansCount: data?.length || 0,
        envVars
      }
    })

  } catch (error) {
    console.error('❌ Production Test: Exception during test:', error)
    return NextResponse.json({
      success: false,
      error: 'Production test failed',
      details: {
        message: error instanceof Error ? error.message : 'Unknown error',
        envVars: {
          hasUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
          hasAnonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
          hasServiceKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY
        }
      }
    })
  }
} 