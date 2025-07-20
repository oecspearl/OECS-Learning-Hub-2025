require('dotenv').config({ path: '.env.local' })
const { createClient } = require('@supabase/supabase-js')

// Get environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log('Environment check:')
console.log('Supabase URL:', supabaseUrl ? 'Set' : 'Not set')
console.log('Supabase Key:', supabaseKey ? 'Set' : 'Not set')

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials in .env.local')
  console.error('Please check your .env.local file')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function testDatabaseConnection() {
  try {
    console.log('\n🔍 Testing database connection...')
    
    // Test basic connection
    const { data, error } = await supabase
      .from('users')
      .select('count')
      .limit(1)
    
    if (error) {
      console.error('❌ Database connection error:', error)
      return
    }
    
    console.log('✅ Database connection successful!')
    
    // Test user creation
    const testUser = {
      name: 'Test User',
      email: 'test@example.com',
      password_hash: 'test_hash',
      role: 'teacher'
    }
    
    const { data: insertData, error: insertError } = await supabase
      .from('users')
      .insert(testUser)
      .select()
    
    if (insertError) {
      console.error('❌ User creation error:', insertError)
    } else {
      console.log('✅ User creation successful:', insertData)
    }
    
  } catch (error) {
    console.error('❌ Test error:', error)
  }
}

testDatabaseConnection() 