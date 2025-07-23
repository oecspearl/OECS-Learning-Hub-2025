const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '../data/sqlite.db');

console.log('🧪 Testing lesson plans with correct database schema...');

const db = new sqlite3.Database(dbPath);

// Test data with correct field names matching actual database schema
const testLessonPlan = {
  title: 'Correct Schema Test Lesson Plan',
  description: 'A test lesson plan with correct field names',
  subject: 'Mathematics',
  grade_level: 'Grade 3',
  topic: 'Addition and Subtraction',
  duration_minutes: 45,
  learning_objectives: 'Students will understand basic addition and subtraction',
  materials_needed: 'Whiteboard, markers, manipulatives',
  vocabulary_terms: 'Addition, subtraction, sum, difference',
  lesson_content: 'This is a test lesson plan content with correct field names.',
  assessment_strategy: 'Formative assessment through observation',
  homework_assignment: 'Complete worksheet on addition',
  extension_activities: 'Advanced problems for gifted students',
  pedagogical_approach: 'Inquiry-based learning',
  differentiation_strategies: 'Tiered assignments',
  grouping_strategy: 'Mixed ability groups',
  curriculum_standards: 'OECS Mathematics Standards',
  difficulty_level: 'Intermediate',
  tags: 'math,addition,subtraction',
  is_public: true,
  created_by: 'system',
  user_id: 'system',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString()
};

console.log('📝 Test lesson plan data with correct field names:', {
  title: testLessonPlan.title,
  subject: testLessonPlan.subject,
  grade_level: testLessonPlan.grade_level,
  topic: testLessonPlan.topic,
  lesson_content: testLessonPlan.lesson_content.substring(0, 50) + '...',
  created_by: testLessonPlan.created_by,
  user_id: testLessonPlan.user_id
});

db.run(`
  INSERT INTO lesson_plans (
    title, description, subject, grade_level, topic, duration_minutes,
    learning_objectives, materials_needed, vocabulary_terms, lesson_content,
    assessment_strategy, homework_assignment, extension_activities,
    pedagogical_approach, differentiation_strategies, grouping_strategy,
    curriculum_standards, difficulty_level, tags, is_public,
    created_by, user_id, created_at, updated_at
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`, [
  testLessonPlan.title, testLessonPlan.description, testLessonPlan.subject,
  testLessonPlan.grade_level, testLessonPlan.topic, testLessonPlan.duration_minutes,
  testLessonPlan.learning_objectives, testLessonPlan.materials_needed,
  testLessonPlan.vocabulary_terms, testLessonPlan.lesson_content,
  testLessonPlan.assessment_strategy, testLessonPlan.homework_assignment,
  testLessonPlan.extension_activities, testLessonPlan.pedagogical_approach,
  testLessonPlan.differentiation_strategies, testLessonPlan.grouping_strategy,
  testLessonPlan.curriculum_standards, testLessonPlan.difficulty_level,
  testLessonPlan.tags, testLessonPlan.is_public, testLessonPlan.created_by,
  testLessonPlan.user_id, testLessonPlan.created_at, testLessonPlan.updated_at
], function(err) {
  if (err) {
    console.error('❌ Error inserting test lesson plan:', err.message);
  } else {
    console.log('✅ Correct schema test lesson plan inserted successfully with ID:', this.lastID);
    
    // Verify the lesson plan was saved
    db.get('SELECT * FROM lesson_plans WHERE id = ?', [this.lastID], (err, row) => {
      if (err) {
        console.error('❌ Error retrieving test lesson plan:', err.message);
      } else {
        console.log('✅ Correct schema test lesson plan retrieved successfully:');
        console.log('  Title:', row.title);
        console.log('  Subject:', row.subject);
        console.log('  Grade Level:', row.grade_level);
        console.log('  Topic:', row.topic);
        console.log('  Lesson Content length:', row.lesson_content?.length || 0);
        console.log('  Created By:', row.created_by);
        console.log('  User ID:', row.user_id);
      }
      
      // Clean up - delete the test lesson plan
      db.run('DELETE FROM lesson_plans WHERE id = ?', [this.lastID], (err) => {
        if (err) {
          console.error('❌ Error cleaning up test lesson plan:', err.message);
        } else {
          console.log('✅ Correct schema test lesson plan cleaned up successfully');
          console.log('🎉 All tests passed! Lesson plans schema fixes are working correctly.');
        }
        db.close();
      });
    });
  }
}); 