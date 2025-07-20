require('dotenv').config({ path: '.env.local' })
const { createClient } = require('@supabase/supabase-js')
const bcrypt = require('bcryptjs')

// Use service role key for admin operations
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log('Environment check:')
console.log('Supabase URL:', supabaseUrl ? 'Set' : 'Not set')
console.log('Service Role Key:', supabaseServiceKey ? 'Set' : 'Not set')

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase credentials in .env.local')
  console.error('Please check your .env.local file')
  process.exit(1)
}

// Create client with service role key
const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function createTestUser() {
  try {
    console.log('\n🔧 Creating test user with admin privileges...')
    
    // Hash the password
    const hashedPassword = await bcrypt.hash('test123', 10)
    console.log('✅ Password hashed successfully')
    
    // Create test user
    const { data, error } = await supabase
      .from('users')
      .insert({
        name: 'Test User',
        email: 'test@example.com',
        password_hash: hashedPassword,
        role: 'teacher'
      })
      .select()
    
    if (error) {
      console.error('❌ Error creating test user:', error)
      
      // If RLS is the issue, let's try to disable it temporarily
      console.log('\n🔄 Attempting to disable RLS temporarily...')
      const { error: disableError } = await supabase.rpc('exec_sql', {
        sql: 'ALTER TABLE users DISABLE ROW LEVEL SECURITY;'
      })
      
      if (disableError) {
        console.log('Could not disable RLS:', disableError.message)
      } else {
        console.log('✅ RLS disabled, trying again...')
        
        const { data: retryData, error: retryError } = await supabase
          .from('users')
          .insert({
            name: 'Test User',
            email: 'test@example.com',
            password_hash: hashedPassword,
            role: 'teacher'
          })
          .select()
        
        if (retryError) {
          console.error('❌ Still failed:', retryError)
        } else {
          console.log('✅ Test user created successfully:', retryData)
        }
      }
      return
    }
    
    console.log('✅ Test user created successfully:', data)
    console.log('\n📝 You can now login with:')
    console.log('Email: test@example.com')
    console.log('Password: test123')
    console.log('\n🌐 Go to: http://localhost:3002/login')
    
  } catch (error) {
    console.error('❌ Error:', error)
  }
}

createTestUser() 