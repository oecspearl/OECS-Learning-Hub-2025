const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Connect to the database
const dbPath = path.join(__dirname, 'data', 'sqlite.db');
const db = new sqlite3.Database(dbPath);

console.log('Checking curriculum data and search logic...\n');

// Check all curriculum tables
const curriculumTables = [
  'strands',
  'essential_learning_outcomes', 
  'specific_curriculum_outcomes',
  'learning_strategies',
  'resources',
  'teacher_content'
];

async function checkCurriculumData() {
  for (const table of curriculumTables) {
    db.all(`SELECT COUNT(*) as count FROM ${table}`, (err, result) => {
      if (err) {
        console.error(`Error checking ${table}:`, err);
        return;
      }
      console.log(`${table}: ${result[0].count} records`);
      
      // If table has data, show a sample
      if (result[0].count > 0) {
        db.all(`SELECT * FROM ${table} LIMIT 2`, (err, rows) => {
          if (err) {
            console.error(`Error getting sample from ${table}:`, err);
            return;
          }
          console.log(`Sample from ${table}:`, rows);
        });
      }
    });
  }
}

// Test search logic with sample data
async function testSearchLogic() {
  console.log('\nTesting search logic...');
  
  // Test if the search query would work with sample data
  const searchTerm = '%mathematics%';
  
  // Test strands search
  db.all(`SELECT * FROM strands WHERE name LIKE ? OR description LIKE ? LIMIT 3`, 
    [searchTerm, searchTerm], (err, results) => {
    if (err) {
      console.error('Error testing strands search:', err);
      return;
    }
    console.log(`Strands search for "mathematics": ${results.length} results`);
    results.forEach(r => console.log(`- ${r.name}: ${r.description}`));
  });
  
  // Test ELO search
  db.all(`SELECT * FROM essential_learning_outcomes WHERE code LIKE ? OR description LIKE ? LIMIT 3`, 
    [searchTerm, searchTerm], (err, results) => {
    if (err) {
      console.error('Error testing ELO search:', err);
      return;
    }
    console.log(`ELO search for "mathematics": ${results.length} results`);
    results.forEach(r => console.log(`- ${r.code}: ${r.description}`));
  });
}

// Check if there's any data at all in curriculum tables
db.all("SELECT name FROM sqlite_master WHERE type='table'", (err, tables) => {
  if (err) {
    console.error('Error checking tables:', err);
    return;
  }
  
  console.log('All tables in database:');
  tables.forEach(table => {
    console.log(`- ${table.name}`);
  });
  
  checkCurriculumData();
  
  // Wait a bit then test search logic
  setTimeout(() => {
    testSearchLogic();
    
    // Close database after tests
    setTimeout(() => {
      console.log('\nTest completed.');
      db.close();
    }, 1000);
  }, 1000);
}); 