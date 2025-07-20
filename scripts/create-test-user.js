require('dotenv').config({ path: '.env.local' })
const { createClient } = require('@supabase/supabase-js')
const bcrypt = require('bcryptjs')

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

async function createTestUser() {
  try {
    console.log('\n🔧 Creating test user...')
    
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