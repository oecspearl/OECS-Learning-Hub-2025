const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://howglhskpjzixwfuqbql.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhvd2dsaHNrcGp6aXh3ZnVxYnFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNzM0ODUsImV4cCI6MjA1ODc0OTQ4NX0.GYlIznzJGrqSbdg_ZiFaaCM6WRmE_N_2FGNq67-9Onk'

const supabase = createClient(supabaseUrl, supabaseKey)

async function checkTables() {
  try {
    console.log('Checking available tables...')
    
    // Try to query different tables to see which ones exist
    const tables = [
      'users',
      'quizzes', 
      'lesson_plans',
      'multigrade_plans',
      'cross_curricular_plans',
      'schedules',
      'lesson_reflections'
    ]
    
    for (const table of tables) {
      try {
        const { data, error } = await supabase
          .from(table)
          .select('*')
          .limit(1)
        
        if (error) {
          console.log(`❌ Table '${table}' does not exist:`, error.message)
        } else {
          console.log(`✅ Table '${table}' exists`)
        }
      } catch (err) {
        console.log(`❌ Table '${table}' does not exist:`, err.message)
      }
    }
  } catch (error) {
    console.error('Error:', error)
  }
}

checkTables() 