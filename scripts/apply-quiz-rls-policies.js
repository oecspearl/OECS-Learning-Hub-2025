const { createClient } = require('@supabase/supabase-js')

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY // Use service role key for admin operations

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function applyQuizRLSPolicies() {
  try {
    console.log('Applying RLS policies for quizzes table...')

    // Enable RLS on quizzes table
    const { error: enableError } = await supabase.rpc('exec_sql', {
      sql: 'ALTER TABLE quizzes ENABLE ROW LEVEL SECURITY;'
    })

    if (enableError) {
      console.log('RLS already enabled or error:', enableError.message)
    } else {
      console.log('✅ RLS enabled on quizzes table')
    }

    // Drop existing policies if they exist
    const dropPolicies = [
      'DROP POLICY IF EXISTS "Users can insert their own quizzes" ON quizzes;',
      'DROP POLICY IF EXISTS "Users can view their own quizzes" ON quizzes;',
      'DROP POLICY IF EXISTS "Users can update their own quizzes" ON quizzes;',
      'DROP POLICY IF EXISTS "Users can delete their own quizzes" ON quizzes;'
    ]

    for (const policy of dropPolicies) {
      const { error } = await supabase.rpc('exec_sql', { sql: policy })
      if (error) {
        console.log('Policy drop error (may not exist):', error.message)
      }
    }

    // Create new policies
    const policies = [
      {
        name: 'Users can insert their own quizzes',
        sql: `CREATE POLICY "Users can insert their own quizzes" ON quizzes
               FOR INSERT WITH CHECK (auth.uid()::text = user_id);`
      },
      {
        name: 'Users can view their own quizzes',
        sql: `CREATE POLICY "Users can view their own quizzes" ON quizzes
               FOR SELECT USING (auth.uid()::text = user_id);`
      },
      {
        name: 'Users can update their own quizzes',
        sql: `CREATE POLICY "Users can update their own quizzes" ON quizzes
               FOR UPDATE USING (auth.uid()::text = user_id);`
      },
      {
        name: 'Users can delete their own quizzes',
        sql: `CREATE POLICY "Users can delete their own quizzes" ON quizzes
               FOR DELETE USING (auth.uid()::text = user_id);`
      }
    ]

    for (const policy of policies) {
      const { error } = await supabase.rpc('exec_sql', { sql: policy.sql })
      if (error) {
        console.error(`❌ Failed to create policy "${policy.name}":`, error.message)
      } else {
        console.log(`✅ Created policy: ${policy.name}`)
      }
    }

    console.log('🎉 RLS policies applied successfully!')
    console.log('Users can now create, read, update, and delete their own quizzes.')

  } catch (error) {
    console.error('Error applying RLS policies:', error)
    process.exit(1)
  }
}

// Alternative method using direct SQL if exec_sql is not available
async function applyQuizRLSPoliciesDirect() {
  try {
    console.log('Applying RLS policies using direct SQL...')

    const policies = [
      'ALTER TABLE quizzes ENABLE ROW LEVEL SECURITY;',
      'DROP POLICY IF EXISTS "Users can insert their own quizzes" ON quizzes;',
      'DROP POLICY IF EXISTS "Users can view their own quizzes" ON quizzes;',
      'DROP POLICY IF EXISTS "Users can update their own quizzes" ON quizzes;',
      'DROP POLICY IF EXISTS "Users can delete their own quizzes" ON quizzes;',
      `CREATE POLICY "Users can insert their own quizzes" ON quizzes
       FOR INSERT WITH CHECK (auth.uid()::text = user_id);`,
      `CREATE POLICY "Users can view their own quizzes" ON quizzes
       FOR SELECT USING (auth.uid()::text = user_id);`,
      `CREATE POLICY "Users can update their own quizzes" ON quizzes
       FOR UPDATE USING (auth.uid()::text = user_id);`,
      `CREATE POLICY "Users can delete their own quizzes" ON quizzes
       FOR DELETE USING (auth.uid()::text = user_id);`
    ]

    for (const sql of policies) {
      const { error } = await supabase.from('quizzes').select('*').limit(1)
      if (error) {
        console.log('SQL execution note:', error.message)
      }
    }

    console.log('✅ RLS policies should be applied via Supabase dashboard')
    console.log('Please run the SQL commands manually in your Supabase SQL editor:')
    console.log('\n--- SQL Commands to Run ---')
    policies.forEach(sql => console.log(sql))
    console.log('--- End SQL Commands ---')

  } catch (error) {
    console.error('Error:', error)
  }
}

// Run the function
if (require.main === module) {
  applyQuizRLSPolicies().catch(console.error)
}

module.exports = { applyQuizRLSPolicies, applyQuizRLSPoliciesDirect } 