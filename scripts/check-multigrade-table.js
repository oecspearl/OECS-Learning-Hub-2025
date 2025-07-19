const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, '../data/sqlite.db');
const db = new Database(dbPath);

try {
  const stmt = db.prepare("PRAGMA table_info(multigrade_plans);");
  const columns = stmt.all();
  console.log('Columns in multigrade_plans:');
  columns.forEach(col => {
    console.log(`- ${col.name} (${col.type})`);
  });
} catch (err) {
  console.error('Error reading table info:', err);
} finally {
  db.close();
} 