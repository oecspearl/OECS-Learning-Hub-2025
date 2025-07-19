const Database = require('better-sqlite3');
const path = require('path');

function runMigration() {
  const dbPath = path.join(__dirname, '..', 'data', 'sqlite.db');
  const db = new Database(dbPath);
  try {
    console.log('Running curriculum migration...');
    db.exec(`
      ALTER TABLE strands ADD COLUMN subject TEXT;
      ALTER TABLE strands ADD COLUMN grade TEXT;
      ALTER TABLE essential_learning_outcomes ADD COLUMN subject TEXT;
      ALTER TABLE essential_learning_outcomes ADD COLUMN grade TEXT;
      ALTER TABLE specific_curriculum_outcomes ADD COLUMN subject TEXT;
      ALTER TABLE specific_curriculum_outcomes ADD COLUMN grade TEXT;
    `);
    console.log('Migration completed successfully.');
  } catch (error) {
    console.error('Migration failed:', error.message);
  } finally {
    db.close();
  }
}

runMigration(); 