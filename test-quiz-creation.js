const { db } = require('./lib/db');
const { quizzes } = require('./lib/schema');
const { eq } = require('drizzle-orm');

async function testQuizCreation() {
  try {
    console.log('Testing quiz creation and retrieval...');
    
    // Create a test quiz
    const testQuiz = {
      id: `quiz_${Date.now()}_test`,
      title: 'Test Quiz',
      description: 'A test quiz for debugging',
      subject: 'Mathematics',
      grade: 'Grade 3',
      topic: 'Addition',
      content: 'This is a test quiz content.',
      question_count: 5,
      question_types: '["Multiple Choice"]',
      difficulty: 'Easy',
      time_limit: 15,
      tags: '["test", "debug"]',
      instructions: 'Complete all questions.',
      user_id: '1', // Test user ID
    };
    
    console.log('Creating test quiz...');
    await db.insert(quizzes).values(testQuiz);
    console.log('✅ Test quiz created successfully');
    
    // Try to retrieve it
    console.log('Retrieving test quiz...');
    const retrievedQuizzes = await db
      .select()
      .from(quizzes)
      .where(eq(quizzes.user_id, '1'));
    
    console.log(`Found ${retrievedQuizzes.length} quizzes for user ID '1'`);
    
    if (retrievedQuizzes.length > 0) {
      console.log('Sample quiz:', {
        id: retrievedQuizzes[0].id,
        title: retrievedQuizzes[0].title,
        user_id: retrievedQuizzes[0].user_id
      });
    }
    
  } catch (error) {
    console.error('Error in test:', error);
  }
}

testQuizCreation(); 