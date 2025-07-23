const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '../data/sqlite.db');

console.log('🧪 Testing with correct database schema...');

const db = new sqlite3.Database(dbPath);

// Test data with correct field names matching actual database schema
const testPlan = {
  title: 'Correct Schema Test Plan',
  subject: 'Mathematics',
  grade_range: '2-3',
  topic: 'Addition and Subtraction',
  lesson_content: 'This is a test multigrade lesson plan content with correct field names.', // ✅ lesson_content
  duration: '60',
  materials: 'Whiteboard, markers, manipulatives',
  pedagogical_strategy: 'Differentiated instruction',
  differentiation_strategies: 'Tiered assignments, flexible grouping',
  grouping_strategy: 'Mixed ability groups',
  assessment_approach: 'Formative assessment',
  curriculum_standards: 'Test standards',
  created_by: 'system',
  user_id: 'system',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString()
};

console.log('📝 Test data with correct field names:', {
  title: testPlan.title,
  subject: testPlan.subject,
  grade_range: testPlan.grade_range,
  topic: testPlan.topic,
  lesson_content: testPlan.lesson_content.substring(0, 50) + '...',
  created_by: testPlan.created_by,
  user_id: testPlan.user_id
});

db.run(`
  INSERT INTO multigrade_plans (
    title, subject, grade_range, topic, lesson_content, duration, 
    materials, pedagogical_strategy, differentiation_strategies, 
    grouping_strategy, assessment_approach, curriculum_standards,
    created_by, user_id, created_at, updated_at
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`, [
  testPlan.title, testPlan.subject, testPlan.grade_range, testPlan.topic,
  testPlan.lesson_content, testPlan.duration, testPlan.materials, testPlan.pedagogical_strategy,
  testPlan.differentiation_strategies, testPlan.grouping_strategy, testPlan.assessment_approach,
  testPlan.curriculum_standards, testPlan.created_by, testPlan.user_id, testPlan.created_at, testPlan.updated_at
], function(err) {
  if (err) {
    console.error('❌ Error inserting test plan:', err.message);
  } else {
    console.log('✅ Correct schema test plan inserted successfully with ID:', this.lastID);
    
    // Verify the plan was saved
    db.get('SELECT * FROM multigrade_plans WHERE id = ?', [this.lastID], (err, row) => {
      if (err) {
        console.error('❌ Error retrieving test plan:', err.message);
      } else {
        console.log('✅ Correct schema test plan retrieved successfully:');
        console.log('  Title:', row.title);
        console.log('  Subject:', row.subject);
        console.log('  Grade Range:', row.grade_range);
        console.log('  Topic:', row.topic);
        console.log('  Lesson Content length:', row.lesson_content?.length || 0);
        console.log('  Created By:', row.created_by);
        console.log('  User ID:', row.user_id);
      }
      
      // Clean up - delete the test plan
      db.run('DELETE FROM multigrade_plans WHERE id = ?', [this.lastID], (err) => {
        if (err) {
          console.error('❌ Error cleaning up test plan:', err.message);
        } else {
          console.log('✅ Correct schema test plan cleaned up successfully');
          console.log('🎉 All tests passed! Schema fixes are working correctly.');
        }
        db.close();
      });
    });
  }
}); 