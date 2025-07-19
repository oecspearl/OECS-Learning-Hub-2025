const { db } = require('./lib/db');
const { quizzes } = require('./lib/schema');
const { eq } = require('drizzle-orm');

async function createQuizForUser5() {
  try {
    console.log('Creating a quiz for user ID 5...');
    
    const testQuiz = {
      id: `quiz_${Date.now()}_user5_test`,
      title: 'Mathematics Quiz for User 5',
      description: 'A test quiz created for user ID 5',
      subject: 'Mathematics',
      grade: 'Grade 4',
      topic: 'Fractions',
      content: `# Mathematics Quiz for User 5

**Subject:** Mathematics
**Grade Level:** Grade 4
**Topic:** Fractions

## Questions

1. What is 1/2 + 1/4?
   A) 1/6
   B) 3/4
   C) 2/6
   D) 1/8

2. Which fraction is equivalent to 2/4?
   A) 1/2
   B) 1/3
   C) 3/6
   D) 4/8

## Answer Key

1. B) 3/4
2. A) 1/2

## Scoring Key

- Question 1: 1 point
- Question 2: 1 point
- Total: 2 points`,
      question_count: 2,
      question_types: '["Multiple Choice"]',
      difficulty: 'Medium',
      time_limit: 10,
      tags: '["mathematics", "fractions", "grade4"]',
      instructions: 'Answer all questions to the best of your ability.',
      user_id: '5', // This is the current user's ID
    };
    
    console.log('Inserting quiz into database...');
    await db.insert(quizzes).values(testQuiz);
    console.log('✅ Quiz created successfully for user ID 5');
    
    // Verify it was created
    const userQuizzes = await db
      .select()
      .from(quizzes)
      .where(eq(quizzes.user_id, '5'));
    
    console.log(`User 5 now has ${userQuizzes.length} quizzes`);
    
    if (userQuizzes.length > 0) {
      console.log('Latest quiz:', {
        id: userQuizzes[0].id,
        title: userQuizzes[0].title,
        user_id: userQuizzes[0].user_id
      });
    }
    
  } catch (error) {
    console.error('Error creating quiz:', error);
  }
}

createQuizForUser5(); 