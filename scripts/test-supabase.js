const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables')
  console.log('Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function testSupabaseConnection() {
  try {
    console.log('Testing Supabase connection...')
    
    // Test basic connection
    const { data, error } = await supabase.from('users').select('count').limit(1)
    
    if (error) {
      console.error('Connection test failed:', error)
      return false
    }
    
    console.log('✅ Supabase connection successful')
    
    // Test table access
    console.log('\nTesting table access...')
    
    const tables = [
      'users',
      'strands', 
      'essential_learning_outcomes',
      'settings'
    ]
    
    for (const table of tables) {
      try {
        const { data, error } = await supabase.from(table).select('*').limit(1)
        if (error) {
          console.log(`❌ ${table}: ${error.message}`)
        } else {
          console.log(`✅ ${table}: Accessible`)
        }
      } catch (err) {
        console.log(`❌ ${table}: ${err.message}`)
      }
    }
    
    // Test settings
    console.log('\nTesting settings...')
    const { data: settings, error: settingsError } = await supabase
      .from('settings')
      .select('*')
      .limit(5)
    
    if (settingsError) {
      console.log('❌ Settings table error:', settingsError.message)
    } else {
      console.log(`✅ Settings: Found ${settings.length} records`)
    }
    
    // Test users
    console.log('\nTesting users...')
    const { data: users, error: usersError } = await supabase
      .from('users')
      .select('id, name, email, role')
      .limit(5)
    
    if (usersError) {
      console.log('❌ Users table error:', usersError.message)
    } else {
      console.log(`✅ Users: Found ${users.length} records`)
      if (users.length > 0) {
        console.log('Sample user:', users[0])
      }
    }
    
    console.log('\n🎉 Supabase setup appears to be working correctly!')
    return true
    
  } catch (error) {
    console.error('❌ Test failed:', error)
    return false
  }
}

// Run the test
testSupabaseConnection().then(success => {
  process.exit(success ? 0 : 1)
}) 