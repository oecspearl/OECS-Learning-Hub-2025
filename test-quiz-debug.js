const { db } = require('./lib/db');
const { quizzes } = require('./lib/schema');
const { eq } = require('drizzle-orm');

async function checkQuizzes() {
  try {
    console.log('Checking quizzes table...');
    
    // Get all quizzes
    const allQuizzes = await db.select().from(quizzes);
    console.log('Total quizzes in database:', allQuizzes.length);
    
    if (allQuizzes.length > 0) {
      console.log('Sample quiz:', allQuizzes[0]);
    }
    
    // Check for quizzes by specific user IDs
    const testUserIds = ['1', 'teacher@oecs.edu', '1', 'teacher'];
    
    for (const userId of testUserIds) {
      const userQuizzes = await db
        .select()
        .from(quizzes)
        .where(eq(quizzes.user_id, userId));
      
      console.log(`Quizzes for user ID "${userId}":`, userQuizzes.length);
    }
    
  } catch (error) {
    console.error('Error checking quizzes:', error);
  }
}

checkQuizzes(); 