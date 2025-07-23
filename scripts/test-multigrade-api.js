const fetch = require('node-fetch');

async function testMultigradeSave() {
  console.log('Testing multigrade plan save API...');
  
  const testData = {
    title: 'API Test Multigrade Plan',
    subject: 'Science',
    gradeRange: '2-3',
    topic: 'Plant Life Cycle',
    content: 'This is a test multigrade lesson plan content for plant life cycle.',
    duration: '45',
    materials: 'Seeds, soil, containers, magnifying glasses',
    pedagogicalStrategy: 'Inquiry-based learning',
    differentiationStrategies: 'Visual aids, hands-on activities',
    groupingStrategy: 'Mixed ability groups',
    assessmentApproach: 'Observation and discussion',
    learningOutcomes: 'Students will understand the basic stages of plant growth',
    specialNeeds: false,
    specialNeedsDetails: '',
    additionalInstructions: 'Ensure all students have access to materials'
  };

  try {
    // Test the saveMultigradePlan function directly
    console.log('Test data:', testData);
    
    // Since we can't directly call the server action from Node.js,
    // let's test the database operations directly
    const sqlite3 = require('sqlite3').verbose();
    const path = require('path');
    
    const dbPath = path.join(__dirname, '../data/sqlite.db');
    const db = new sqlite3.Database(dbPath);
    
    const now = new Date().toISOString();
    
    db.run(`
      INSERT INTO multigrade_plans (
        title, subject, grade_range, topic, content, duration,
        materials, pedagogical_strategy, differentiation_strategies,
        grouping_strategy, assessment_approach, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      testData.title, testData.subject, testData.gradeRange, testData.topic,
      testData.content, testData.duration, testData.materials, testData.pedagogicalStrategy,
      testData.differentiationStrategies, testData.groupingStrategy, testData.assessmentApproach,
      now, now
    ], function(err) {
      if (err) {
        console.error('❌ Error inserting test plan:', err.message);
      } else {
        console.log('✅ API test plan inserted successfully with ID:', this.lastID);
        
        // Verify the plan was saved
        db.get('SELECT * FROM multigrade_plans WHERE id = ?', [this.lastID], (err, row) => {
          if (err) {
            console.error('❌ Error retrieving test plan:', err.message);
          } else {
            console.log('✅ API test plan retrieved successfully:');
            console.log('  Title:', row.title);
            console.log('  Subject:', row.subject);
            console.log('  Grade Range:', row.grade_range);
            console.log('  Topic:', row.topic);
            console.log('  Content length:', row.content.length);
          }
          
          // Clean up - delete the test plan
          db.run('DELETE FROM multigrade_plans WHERE id = ?', [this.lastID], (err) => {
            if (err) {
              console.error('❌ Error cleaning up test plan:', err.message);
            } else {
              console.log('✅ API test plan cleaned up successfully');
            }
            db.close();
          });
        });
      }
    });
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

testMultigradeSave(); 