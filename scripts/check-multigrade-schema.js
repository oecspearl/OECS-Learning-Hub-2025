const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '../data/sqlite.db');

console.log('📋 Multigrade Plans Table Schema');
console.log('================================');

const db = new sqlite3.Database(dbPath);

db.all('PRAGMA table_info(multigrade_plans)', (err, columns) => {
  if (err) {
    console.error('❌ Error getting table schema:', err.message);
  } else {
    console.log('\nRequired Fields (NOT NULL):');
    console.log('----------------------------');
    columns.forEach(col => {
      if (col.notnull) {
        console.log(`✅ ${col.name} (${col.type}) - REQUIRED`);
      }
    });
    
    console.log('\nOptional Fields:');
    console.log('----------------');
    columns.forEach(col => {
      if (!col.notnull && col.name !== 'id') {
        console.log(`📝 ${col.name} (${col.type}) - OPTIONAL`);
      }
    });
    
    console.log('\nPrimary Key:');
    console.log('-------------');
    columns.forEach(col => {
      if (col.pk) {
        console.log(`🔑 ${col.name} (${col.type}) - PRIMARY KEY`);
      }
    });
    
    console.log('\n📊 Summary:');
    console.log('===========');
    console.log(`Total columns: ${columns.length}`);
    console.log(`Required fields: ${columns.filter(col => col.notnull).length}`);
    console.log(`Optional fields: ${columns.filter(col => !col.notnull && col.name !== 'id').length}`);
  }
  
  db.close();
}); 