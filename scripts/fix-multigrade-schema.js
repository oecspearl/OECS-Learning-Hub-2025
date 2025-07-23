const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

// Path to the SQLite database
const dbPath = path.join(__dirname, '../data/sqlite.db');

console.log('🔧 Fixing multigrade_plans table schema...');
console.log('📁 Database path:', dbPath);

// Check if database file exists
if (!fs.existsSync(dbPath)) {
  console.error('❌ Database file does not exist:', dbPath);
  process.exit(1);
}

console.log('✅ Database file exists');

// Create a new database connection
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('❌ Error opening database:', err.message);
    process.exit(1);
  }
  console.log('✅ Connected to SQLite database');
});

// First, check if the table exists
db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='multigrade_plans'", (err, row) => {
  if (err) {
    console.error('❌ Error checking if table exists:', err.message);
    db.close();
    process.exit(1);
  }

  if (!row) {
    console.log('❌ multigrade_plans table does not exist');
    console.log('📋 Available tables:');
    
    db.all("SELECT name FROM sqlite_master WHERE type='table'", (err, tables) => {
      if (err) {
        console.error('❌ Error getting tables:', err.message);
      } else {
        tables.forEach(table => {
          console.log(`  - ${table.name}`);
        });
      }
      db.close();
      process.exit(1);
    });
    return;
  }

  console.log('✅ multigrade_plans table exists');

  // Get all columns
  db.all("PRAGMA table_info(multigrade_plans)", (err, columns) => {
    if (err) {
      console.error('❌ Error getting table columns:', err.message);
      db.close();
      process.exit(1);
    }

    console.log('📋 Current columns in multigrade_plans:');
    columns.forEach(col => {
      console.log(`  - ${col.name} (${col.type})`);
    });

    // Check if curriculum_standards column exists
    const hasCurriculumStandards = columns.some(col => col.name === 'curriculum_standards');
    
    if (!hasCurriculumStandards) {
      console.log('➕ Adding curriculum_standards column...');
      
      db.run("ALTER TABLE multigrade_plans ADD COLUMN curriculum_standards TEXT", (err) => {
        if (err) {
          console.error('❌ Error adding curriculum_standards column:', err.message);
          db.close();
          process.exit(1);
        }
        
        console.log('✅ Successfully added curriculum_standards column');
        
        // Verify the column was added
        db.all("PRAGMA table_info(multigrade_plans)", (err, updatedColumns) => {
          if (err) {
            console.error('❌ Error verifying table structure:', err.message);
            db.close();
            process.exit(1);
          }
          
          console.log('📋 Updated columns in multigrade_plans:');
          updatedColumns.forEach(col => {
            console.log(`  - ${col.name} (${col.type})`);
          });
          
          console.log('✅ Schema fix completed successfully!');
          db.close();
        });
      });
    } else {
      console.log('✅ curriculum_standards column already exists');
      console.log('✅ Schema is already correct!');
      db.close();
    }
  });
}); 