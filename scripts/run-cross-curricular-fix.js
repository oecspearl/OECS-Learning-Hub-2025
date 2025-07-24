const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Running cross-curricular schema fix...');

try {
  // Read the migration SQL file
  const migrationPath = path.join(__dirname, '../db/migrations/fix-cross-curricular-schema.sql');
  const migrationSQL = fs.readFileSync(migrationPath, 'utf8');
  
  console.log('Migration SQL loaded successfully');
  console.log('This migration will add the following missing fields to cross_curricular_plans table:');
  console.log('- central_problem (required)');
  console.log('- overlapping_concepts (optional)');
  console.log('- curriculum_objectives_mapping (optional)');
  console.log('- assessment_rubric_requirements (optional)');
  console.log('- resource_requirements (optional)');
  console.log('- learning_styles (optional)');
  console.log('- multiple_intelligences (optional)');
  console.log('- special_needs (optional)');
  console.log('- special_needs_details (optional)');
  console.log('- ell_support (optional)');
  console.log('- gifted_extension (optional)');
  console.log('- pedagogical_strategy (optional)');
  console.log('- assessment_strategy (optional)');
  console.log('- technology_integration (optional)');
  console.log('- additional_instructions (optional)');
  
  console.log('\nTo apply this migration:');
  console.log('1. Open your database management tool (e.g., SQLite browser, Supabase dashboard)');
  console.log('2. Execute the contents of: db/migrations/fix-cross-curricular-schema.sql');
  console.log('3. Restart your application');
  
  console.log('\nMigration script ready! This will fix the "additional_instructions column not found" error.');
  
} catch (error) {
  console.error('Error reading migration file:', error);
  process.exit(1);
} 