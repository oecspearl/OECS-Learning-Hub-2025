const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'data', 'sqlite.db');

console.log('Checking database...');

const db = new sqlite3.Database(dbPath);

// Check if quizzes table exists
db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='quizzes'", (err, row) => {
  if (err) {
    console.error('Error:', err);
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
      
      console.log('Table structure:');
      rows.forEach(col => {
        console.log(`  ${col.name} (${col.type})`);
      });
      
      // Count rows
      db.get("SELECT COUNT(*) as count FROM quizzes", (err, row) => {
        if (err) {
          console.error('Error counting:', err);
        } else {
          console.log(`Total quizzes: ${row.count}`);
        }
        db.close();
      });
    });
  } else {
    console.log('❌ Quizzes table does not exist');
    db.close();
  }
}); 