const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'data', 'sqlite.db');

console.log('Checking database at:', dbPath);

const db = new sqlite3.Database(dbPath);

// Check if quizzes table exists
db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='quizzes'", (err, row) => {
  if (err) {
    console.error('Error checking quizzes table:', err);
    return;
  }
  
  if (row) {
    console.log('✅ Quizzes table exists');
    
    // Show table structure
    db.all("PRAGMA table_info(quizzes)", (err, rows) => {
      if (err) {
        console.error('Error getting table info:', err);
        return;
      }
      
      console.log('\nTable structure:');
      rows.forEach(col => {
        console.log(`  ${col.name} (${col.type})`);
      });
      
      // Count total quizzes
      db.get("SELECT COUNT(*) as count FROM quizzes", (err, row) => {
        if (err) {
          console.error('Error counting quizzes:', err);
          return;
        }
        
        console.log(`\nTotal quizzes in database: ${row.count}`);
        
        // Show all quizzes
        db.all("SELECT id, title, user_id, created_at FROM quizzes ORDER BY created_at DESC LIMIT 10", (err, rows) => {
          if (err) {
            console.error('Error getting quizzes:', err);
            return;
          }
          
          console.log('\nRecent quizzes:');
          rows.forEach((quiz, index) => {
            console.log(`${index + 1}. ID: ${quiz.id}, Title: ${quiz.title}, User ID: ${quiz.user_id}, Created: ${quiz.created_at}`);
          });
          
          db.close();
        });
      });
    });
  } else {
    console.log('❌ Quizzes table does not exist');
    db.close();
  }
}); 