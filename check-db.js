const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'data', 'sqlite.db');

function checkDatabase() {
  const db = new sqlite3.Database(dbPath);
  
  console.log('Checking database at:', dbPath);
  
  // Check if quizzes table exists
  db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='quizzes'", (err, row) => {
    if (err) {
      console.error('Error checking quizzes table:', err);
      return;
    }
    
    if (row) {
      console.log('✅ Quizzes table exists');
      
      // Count total quizzes
      db.get("SELECT COUNT(*) as count FROM quizzes", (err, row) => {
        if (err) {
          console.error('Error counting quizzes:', err);
          return;
        }
        
        console.log(`Total quizzes in database: ${row.count}`);
        
        // Get sample quizzes
        db.all("SELECT id, title, user_id, created_at FROM quizzes LIMIT 5", (err, rows) => {
          if (err) {
            console.error('Error fetching quizzes:', err);
            return;
          }
          
          console.log('Sample quizzes:');
          rows.forEach((quiz, index) => {
            console.log(`${index + 1}. ID: ${quiz.id}, Title: ${quiz.title}, User ID: ${quiz.user_id}, Created: ${quiz.created_at}`);
          });
          
          // Check for specific user IDs
          const testUserIds = ['1', 'teacher@oecs.edu', 'teacher'];
          
          testUserIds.forEach(userId => {
            db.get("SELECT COUNT(*) as count FROM quizzes WHERE user_id = ?", [userId], (err, row) => {
              if (err) {
                console.error(`Error checking quizzes for user ${userId}:`, err);
                return;
              }
              console.log(`Quizzes for user ID "${userId}": ${row.count}`);
            });
          });
          
          db.close();
        });
      });
    } else {
      console.log('❌ Quizzes table does not exist');
      db.close();
    }
  });
}

checkDatabase(); 