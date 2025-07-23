const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function promptForCredentials() {
  return new Promise((resolve) => {
    rl.question('Enter your Supabase URL: ', (url) => {
      rl.question('Enter your Supabase Service Role Key: ', (key) => {
        resolve({ url, key })
      })
    })
  })
}

async function applyReflectionMigration() {
  try {
    console.log('🔄 Starting reflection migration...')
    
    // Get credentials from user
    const { url, key } = await promptForCredentials()
    
    if (!url || !key) {
      console.error('❌ Missing Supabase credentials')
      return
    }
    
    const supabase = createClient(url, key)
    
    // Read the migration SQL file
    const migrationPath = path.join(__dirname, 'reflection-migration-simple.sql')
    const migrationSQL = fs.readFileSync(migrationPath, 'utf8')
    
    console.log('📄 Migration SQL loaded')
    
    // Execute the migration using raw SQL
    console.log('🚀 Applying migration to database...')
    
    // Split the SQL into individual statements
    const statements = migrationSQL
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0)
    
    for (const statement of statements) {
      if (statement.trim()) {
        console.log(`Executing: ${statement.substring(0, 50)}...`)
        
        const { data, error } = await supabase.rpc('exec_sql', {
          sql: statement + ';'
        })
        
        if (error) {
          console.error('❌ Statement failed:', error)
          console.error('Failed statement:', statement)
          return
        }
        
        console.log('✅ Statement executed successfully')
      }
    }
    
    console.log('🎉 Migration completed successfully!')
    
    // Verify the table structure
    console.log('🔍 Verifying table structure...')
    
    const { data: columns, error: verifyError } = await supabase
      .from('information_schema.columns')
      .select('column_name, data_type, is_nullable')
      .eq('table_name', 'lesson_reflections')
      .order('ordinal_position')
    
    if (verifyError) {
      console.error('❌ Verification failed:', verifyError)
      return
    }
    
    console.log('📋 lesson_reflections table structure:')
    columns.forEach(col => {
      console.log(`  - ${col.column_name}: ${col.data_type} (nullable: ${col.is_nullable})`)
    })
    
    console.log('🎉 Migration and verification completed successfully!')
    
  } catch (error) {
    console.error('❌ Migration failed with error:', error)
  } finally {
    rl.close()
  }
}

// Run the migration
applyReflectionMigration() 