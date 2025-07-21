const { createClient } = require('@supabase/supabase-js')

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function checkQuizSchema() {
  try {
    console.log('Checking quiz table schema...')
    
    // First, let's see what columns exist in the quizzes table
    const { data: columns, error: columnsError } = await supabase
      .from('information_schema.columns')
      .select('column_name, data_type, is_nullable')
      .eq('table_name', 'quizzes')
      .eq('table_schema', 'public')
    
    if (columnsError) {
      console.error('Error checking columns:', columnsError)
      return
    }
    
    console.log('Current quiz table columns:')
    columns.forEach(col => {
      console.log(`- ${col.column_name} (${col.data_type}, nullable: ${col.is_nullable})`)
    })
    
    // Check if content column exists
    const hasContentColumn = columns.some(col => col.column_name === 'content')
    
    if (!hasContentColumn) {
      console.log('\nContent column missing. Adding it...')
      
      // Add the content column
      const { error: alterError } = await supabase.rpc('exec_sql', {
        sql: 'ALTER TABLE quizzes ADD COLUMN content TEXT'
      })
      
      if (alterError) {
        console.error('Error adding content column:', alterError)
      } else {
        console.log('Content column added successfully!')
      }
    } else {
      console.log('\nContent column already exists.')
    }
    
    // Test inserting a quiz
    console.log('\nTesting quiz insertion...')
    const testQuiz = {
      title: 'Test Quiz',
      description: 'Test description',
      subject: 'Mathematics',
      grade: 'Grade 6',
      topic: 'Fractions',
      content: 'Test quiz content',
      question_count: 5,
      question_types: JSON.stringify(['Multiple Choice']),
      difficulty: 'medium',
      time_limit: 30,
      tags: JSON.stringify(['test']),
      instructions: 'Test instructions',
      user_id: '1',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
    
    const { data: insertData, error: insertError } = await supabase
      .from('quizzes')
      .insert(testQuiz)
      .select()
      .single()
    
    if (insertError) {
      console.error('Error inserting test quiz:', insertError)
    } else {
      console.log('Test quiz inserted successfully:', insertData.id)
      
      // Clean up test data
      await supabase
        .from('quizzes')
        .delete()
        .eq('id', insertData.id)
      
      console.log('Test data cleaned up.')
    }
    
  } catch (error) {
    console.error('Error:', error)
  }
}

checkQuizSchema() 