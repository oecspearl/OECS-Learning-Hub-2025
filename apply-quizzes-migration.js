const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const dbPath = path.join(__dirname, 'data', 'sqlite.db');
const migrationPath = path.join(__dirname, 'db', 'migrations', 'add-quizzes-table.sql');

function applyMigration() {
  const db = new sqlite3.Database(dbPath);
  
  console.log('Applying quizzes table migration...');
  
  // Read the migration file
  const migrationSQL = fs.readFileSync(migrationPath, 'utf8');
  
  // Execute the migration
  db.exec(migrationSQL, (err) => {
    if (err) {
      console.error('Error applying migration:', err);
      db.close();
      return;
    }
    
    console.log('✅ Quizzes table migration applied successfully');
    
    // Verify the table was created
    db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='quizzes'", (err, row) => {
      if (err) {
        console.error('Error checking quizzes table:', err);
        db.close();
        return;
      }
      
      if (row) {
        console.log('✅ Quizzes table exists');
        
        // Count quizzes
        db.get("SELECT COUNT(*) as count FROM quizzes", (err, row) => {
          if (err) {
            console.error('Error counting quizzes:', err);
          } else {
            console.log(`Total quizzes in database: ${row.count}`);
          }
          db.close();
        });
      } else {
        console.log('❌ Quizzes table was not created');
        db.close();
      }
    });
  });
}

applyMigration(); 