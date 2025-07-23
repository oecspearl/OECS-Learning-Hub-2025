const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '../data/sqlite.db');

console.log('Testing multigrade plan save...');

const db = new sqlite3.Database(dbPath);

// Test data
const testPlan = {
  title: 'Test Multigrade Plan',
  subject: 'Mathematics',
  grade_range: '3-4',
  topic: 'Addition and Subtraction',
  content: 'This is a test multigrade lesson plan content.',
  duration: '60',
  materials: 'Whiteboard, markers, manipulatives',
  pedagogical_strategy: 'Differentiated instruction',
  differentiation_strategies: 'Tiered assignments, flexible grouping',
  grouping_strategy: 'Mixed ability groups',
  assessment_approach: 'Formative assessment',
  curriculum_standards: 'Test standards',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString()
};

console.log('Inserting test plan...');

db.run(`
  INSERT INTO multigrade_plans (
    title, subject, grade_range, topic, content, duration, 
    materials, pedagogical_strategy, differentiation_strategies, 
    grouping_strategy, assessment_approach, curriculum_standards,
    created_at, updated_at
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`, [
  testPlan.title, testPlan.subject, testPlan.grade_range, testPlan.topic,
  testPlan.content, testPlan.duration, testPlan.materials, testPlan.pedagogical_strategy,
  testPlan.differentiation_strategies, testPlan.grouping_strategy, testPlan.assessment_approach,
  testPlan.curriculum_standards, testPlan.created_at, testPlan.updated_at
], function(err) {
  if (err) {
    console.error('❌ Error inserting test plan:', err.message);
  } else {
    console.log('✅ Test plan inserted successfully with ID:', this.lastID);
    
    // Verify the plan was saved
    db.get('SELECT * FROM multigrade_plans WHERE id = ?', [this.lastID], (err, row) => {
      if (err) {
        console.error('❌ Error retrieving test plan:', err.message);
      } else {
        console.log('✅ Test plan retrieved successfully:');
        console.log('  Title:', row.title);
        console.log('  Subject:', row.subject);
        console.log('  Grade Range:', row.grade_range);
        console.log('  Content length:', row.content.length);
        console.log('  Curriculum Standards:', row.curriculum_standards);
      }
      
      // Clean up - delete the test plan
      db.run('DELETE FROM multigrade_plans WHERE id = ?', [this.lastID], (err) => {
        if (err) {
          console.error('❌ Error cleaning up test plan:', err.message);
        } else {
          console.log('✅ Test plan cleaned up successfully');
        }
        db.close();
      });
    });
  }
}); 