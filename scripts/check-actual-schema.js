const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '../data/sqlite.db');

console.log('🔍 Checking actual multigrade_plans table schema...');

const db = new sqlite3.Database(dbPath);

db.all("PRAGMA table_info(multigrade_plans)", (err, columns) => {
  if (err) {
    console.error('❌ Error:', err.message);
  } else {
    console.log('📋 Actual columns in multigrade_plans:');
    columns.forEach(col => {
      console.log(`  ${col.name} (${col.type})${col.notnull ? ' NOT NULL' : ''}`);
    });
    
    // Check if lesson_content exists
    const hasLessonContent = columns.some(col => col.name === 'lesson_content');
    const hasContent = columns.some(col => col.name === 'content');
    
    console.log('\n🔍 Content field analysis:');
    console.log(`  Has 'content' field: ${hasContent}`);
    console.log(`  Has 'lesson_content' field: ${hasLessonContent}`);
    
    if (hasContent && !hasLessonContent) {
      console.log('✅ Database uses "content" field (correct)');
    } else if (hasLessonContent && !hasContent) {
      console.log('✅ Database uses "lesson_content" field');
    } else if (hasContent && hasLessonContent) {
      console.log('⚠️  Database has BOTH "content" and "lesson_content" fields');
    } else {
      console.log('❌ Database has NEITHER "content" nor "lesson_content" field');
    }
  }
  db.close();
}); 