const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

async function migrateCurriculumStandards() {
  const dbPath = path.join(__dirname, '..', 'data', 'sqlite.db');
  const db = new Database(dbPath);
  
  try {
    console.log('Starting curriculum standards migration...');
    
    // Read the migration SQL file
    const migrationPath = path.join(__dirname, '..', 'db', 'migrations', 'add-curriculum-standards-table.sql');
    const migrationSQL = fs.readFileSync(migrationPath, 'utf8');
    
    // Execute the migration
    console.log('Creating curriculum_standards table...');
    db.exec(migrationSQL);
    
    console.log('Migration completed successfully!');
    
    // Verify the migration
    const count = db.prepare('SELECT COUNT(*) as count FROM curriculum_standards').get();
    console.log(`Total curriculum standards migrated: ${count.count}`);
    
    // Show sample data
    const sample = db.prepare('SELECT * FROM curriculum_standards LIMIT 5').all();
    console.log('Sample curriculum standards:');
    sample.forEach(standard => {
      console.log(`- ${standard.subject} Grade ${standard.grade_level}: ${standard.code} - ${standard.description.substring(0, 50)}...`);
    });
    
  } catch (error) {
    console.error('Migration failed:', error.message);
  } finally {
    db.close();
  }
}

migrateCurriculumStandards(); 