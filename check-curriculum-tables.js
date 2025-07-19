const Database = require('better-sqlite3');
const path = require('path');

async function checkCurriculumTables() {
  try {
    console.log('=== Checking Curriculum Tables ===');
    
    const dbPath = path.join(__dirname, 'data', 'sqlite.db');
    const db = new Database(dbPath);
    
    // Check if curriculum standards tables exist
    const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name LIKE '%standards%'").all();
    console.log('Standards tables found:', tables.map(t => t.name));
    
    // Check if other curriculum tables exist
    const curriculumTables = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND (name LIKE '%curriculum%' OR name LIKE '%strand%' OR name LIKE '%outcome%')").all();
    console.log('Curriculum tables found:', curriculumTables.map(t => t.name));
    
    // Check all tables
    const allTables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
    console.log('All tables:', allTables.map(t => t.name));
    
    db.close();
    
  } catch (error) {
    console.error('Error checking tables:', error);
  }
}

checkCurriculumTables(); 