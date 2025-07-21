const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function checkAndFixSchema() {
  try {
    console.log('Checking lesson_plans table schema...')
    
    // First, let's try to select from the table to see what columns exist
    const { data: existingData, error: selectError } = await supabase
      .from('lesson_plans')
      .select('*')
      .limit(1)
    
    console.log('Existing data:', existingData)
    console.log('Select error:', selectError)
    
    // Try to insert a test record to see what columns are missing
    const testData = {
      id: `test_${Date.now()}`,
      title: 'Test Lesson',
      subject: 'Test',
      grade: 'Test',
      topic: 'Test Topic',
      content: 'Test content',
      duration: '50',
      user_id: 'test_user',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }
    
    console.log('Attempting test insert...')
    const { data: insertData, error: insertError } = await supabase
      .from('lesson_plans')
      .insert([testData])
      .select()
    
    console.log('Insert data:', insertData)
    console.log('Insert error:', insertError)
    
    if (insertError) {
      console.log('Insert failed, trying to add missing columns...')
      
      // Try to add the content column if it doesn't exist
      const { error: alterError } = await supabase.rpc('exec_sql', {
        sql: `
          ALTER TABLE lesson_plans 
          ADD COLUMN IF NOT EXISTS content TEXT;
        `
      })
      
      console.log('Alter table error:', alterError)
      
      if (!alterError) {
        console.log('Successfully added content column')
        
        // Try the insert again
        const { data: retryData, error: retryError } = await supabase
          .from('lesson_plans')
          .insert([testData])
          .select()
        
        console.log('Retry insert data:', retryData)
        console.log('Retry insert error:', retryError)
      }
    }
    
  } catch (error) {
    console.error('Error:', error)
  }
}

checkAndFixSchema() 