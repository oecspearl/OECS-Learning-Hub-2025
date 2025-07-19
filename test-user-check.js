const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://howglhskpjzixwfuqbql.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhvd2dsaHNrcGp6aXh3ZnVxYnFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNzM0ODUsImV4cCI6MjA1ODc0OTQ4NX0.GYlIznzJGrqSbdg_ZiFaaCM6WRmE_N_2FGNq67-9Onk'

const supabase = createClient(supabaseUrl, supabaseKey)

async function checkUsers() {
  try {
    console.log('Checking existing users...')
    
    const { data: users, error } = await supabase
      .from('users')
      .select('*')
    
    if (error) {
      console.error('Error fetching users:', error)
      return
    }
    
    console.log('Existing users:', users)
    
    if (!users || users.length === 0) {
      console.log('No users found. Creating a test user...')
      
      const { data: newUser, error: createError } = await supabase
        .from('users')
        .insert({
          name: 'Test Teacher',
          email: 'teacher@test.com',
          password_hash: 'test_hash',
          role: 'teacher',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .select()
      
      if (createError) {
        console.error('Error creating test user:', createError)
      } else {
        console.log('Test user created:', newUser)
      }
    }
  } catch (error) {
    console.error('Error:', error)
  }
}

checkUsers() 