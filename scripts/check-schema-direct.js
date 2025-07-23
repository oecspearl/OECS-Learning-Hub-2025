const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '../data/sqlite.db');

console.log('Checking multigrade_plans table schema...');

const db = new sqlite3.Database(dbPath);

db.all("PRAGMA table_info(multigrade_plans)", (err, columns) => {
  if (err) {
    console.error('Error:', err.message);
  } else {
    console.log('Columns in multigrade_plans:');
    columns.forEach(col => {
      console.log(`  ${col.name} (${col.type})${col.notnull ? ' NOT NULL' : ''}`);
    });
  }
  db.close();
}); 