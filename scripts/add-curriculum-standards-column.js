const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, '../data/sqlite.db');
const db = new Database(dbPath);

try {
  // Check if the column already exists
  const columns = db.prepare("PRAGMA table_info(multigrade_plans);").all();
  const hasColumn = columns.some(col => col.name === 'curriculum_standards');
  if (hasColumn) {
    console.log('Column curriculum_standards already exists.');
  } else {
    db.prepare('ALTER TABLE multigrade_plans ADD COLUMN curriculum_standards TEXT;').run();
    console.log('Added curriculum_standards column to multigrade_plans table.');
  }
} catch (err) {
  console.error('Error updating table:', err);
} finally {
  db.close();
} 