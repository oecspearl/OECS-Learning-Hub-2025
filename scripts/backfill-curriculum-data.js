const Database = require('better-sqlite3');
const path = require('path');

function backfillCurriculumData() {
  const dbPath = path.join(__dirname, '..', 'data', 'sqlite.db');
  const db = new Database(dbPath);
  
  try {
    console.log('Backfilling curriculum data...');
    
    // Update strands with default values
    db.prepare(`
      UPDATE strands 
      SET subject = 'Language Arts', grade = 'Grade 1' 
      WHERE subject IS NULL OR grade IS NULL
    `).run();
    
    // Update essential learning outcomes with default values
    db.prepare(`
      UPDATE essential_learning_outcomes 
      SET subject = 'Language Arts', grade = 'Grade 1' 
      WHERE subject IS NULL OR grade IS NULL
    `).run();
    
    // Update specific curriculum outcomes with default values
    db.prepare(`
      UPDATE specific_curriculum_outcomes 
      SET subject = 'Language Arts', grade = 'Grade 1' 
      WHERE subject IS NULL OR grade IS NULL
    `).run();
    
    console.log('Curriculum data backfilled successfully.');
    
    // Verify the updates
    const strandCount = db.prepare('SELECT COUNT(*) as count FROM strands WHERE subject IS NOT NULL AND grade IS NOT NULL').get();
    const eloCount = db.prepare('SELECT COUNT(*) as count FROM essential_learning_outcomes WHERE subject IS NOT NULL AND grade IS NOT NULL').get();
    const scoCount = db.prepare('SELECT COUNT(*) as count FROM specific_curriculum_outcomes WHERE subject IS NOT NULL AND grade IS NOT NULL').get();
    
    console.log(`Updated ${strandCount.count} strands`);
    console.log(`Updated ${eloCount.count} essential learning outcomes`);
    console.log(`Updated ${scoCount.count} specific curriculum outcomes`);
    
  } catch (error) {
    console.error('Backfill failed:', error.message);
  } finally {
    db.close();
  }
}

backfillCurriculumData(); 