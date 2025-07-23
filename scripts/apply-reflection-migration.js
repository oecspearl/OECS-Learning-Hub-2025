const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

// Load environment variables
require('dotenv').config()

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase environment variables')
  console.error('Please ensure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function applyReflectionMigration() {
  try {
    console.log('🔄 Starting reflection migration...')
    
    // Read the migration SQL file
    const migrationPath = path.join(__dirname, 'add-reflection-columns.sql')
    const migrationSQL = fs.readFileSync(migrationPath, 'utf8')
    
    console.log('📄 Migration SQL loaded')
    
    // Execute the migration
    console.log('🚀 Applying migration to database...')
    
    const { data, error } = await supabase.rpc('exec_sql', {
      sql: migrationSQL
    })
    
    if (error) {
      console.error('❌ Migration failed:', error)
      return
    }
    
    console.log('✅ Migration completed successfully!')
    console.log('📊 Migration results:', data)
    
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
  }
}

// Run the migration
applyReflectionMigration() 