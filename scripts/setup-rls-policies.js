require('dotenv').config({ path: '.env.local' })
const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

async function setupRLSPolicies() {
  try {
    console.log('🔧 Setting up RLS policies...')
    
    // Enable RLS on users table
    const { error: enableError } = await supabase.rpc('exec_sql', {
      sql: 'ALTER TABLE users ENABLE ROW LEVEL SECURITY;'
    })
    
    if (enableError) {
      console.log('RLS already enabled or error:', enableError.message)
    } else {
      console.log('✅ RLS enabled on users table')
    }
    
    // Create policy to allow authenticated users to read their own data
    const { error: readPolicyError } = await supabase.rpc('exec_sql', {
      sql: `
        CREATE POLICY "Users can read own data" ON users
        FOR SELECT USING (auth.uid()::text = user_id);
      `
    })
    
    if (readPolicyError) {
      console.log('Read policy already exists or error:', readPolicyError.message)
    } else {
      console.log('✅ Read policy created')
    }
    
    // Create policy to allow authenticated users to update their own data
    const { error: updatePolicyError } = await supabase.rpc('exec_sql', {
      sql: `
        CREATE POLICY "Users can update own data" ON users
        FOR UPDATE USING (auth.uid()::text = user_id);
      `
    })
    
    if (updatePolicyError) {
      console.log('Update policy already exists or error:', updatePolicyError.message)
    } else {
      console.log('✅ Update policy created')
    }
    
    // Create policy to allow service role to insert users (for registration)
    const { error: insertPolicyError } = await supabase.rpc('exec_sql', {
      sql: `
        CREATE POLICY "Service role can insert users" ON users
        FOR INSERT WITH CHECK (true);
      `
    })
    
    if (insertPolicyError) {
      console.log('Insert policy already exists or error:', insertPolicyError.message)
    } else {
      console.log('✅ Insert policy created')
    }
    
    console.log('✅ RLS policies setup complete!')
    
  } catch (error) {
    console.error('❌ Error setting up RLS policies:', error)
  }
}

setupRLSPolicies() 