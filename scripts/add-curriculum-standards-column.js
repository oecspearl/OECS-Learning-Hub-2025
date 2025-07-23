const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '../data/sqlite.db');

console.log('Adding curriculum_standards column to multigrade_plans table...');

const db = new sqlite3.Database(dbPath);

// Add the curriculum_standards column
db.run("ALTER TABLE multigrade_plans ADD COLUMN curriculum_standards TEXT", function(err) {
  if (err) {
    console.error('Error adding column:', err.message);
  } else {
    console.log('Successfully added curriculum_standards column');
  }
  
  // Close the database connection
  db.close();
}); 