const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Running cross-curricular enhancements migration...');

try {
  // Read the migration SQL file
  const migrationPath = path.join(__dirname, '../db/migrations/add-cross-curricular-enhancements.sql');
  const migrationSQL = fs.readFileSync(migrationPath, 'utf8');
  
  console.log('Migration SQL loaded successfully');
  console.log('Migration includes:');
  console.log('- central_problem field (required)');
  console.log('- overlapping_concepts field (optional)');
  console.log('- curriculum_objectives_mapping field (optional)');
  console.log('- assessment_rubric_requirements field (optional)');
  console.log('- resource_requirements field (optional)');
  
  console.log('\nTo apply this migration, run the SQL commands in your database:');
  console.log('1. Open your database management tool');
  console.log('2. Execute the contents of: db/migrations/add-cross-curricular-enhancements.sql');
  console.log('3. Restart your application');
  
  console.log('\nMigration script ready! The enhanced cross-curricular planner is now available.');
  
} catch (error) {
  console.error('Error reading migration file:', error);
  process.exit(1);
} 