const { db } = require('./lib/db');
const { quizzes } = require('./lib/schema');
const { eq, desc } = require('drizzle-orm');

async function testQuizForUser5() {
  try {
    console.log('Creating a quiz for user ID 5...');
    
    const testQuiz = {
      id: `quiz_${Date.now()}_user5_manual`,
      title: 'Manual Test Quiz for User 5',
      description: 'A test quiz created manually for user ID 5',
      subject: 'Science',
      grade: 'Grade 3',
      topic: 'Forces and Motion',
      content: `# Science Quiz for User 5

**Subject:** Science
**Grade Level:** Grade 3
**Topic:** Forces and Motion

## Questions

1. What is a force?
   A) A push or pull
   B) A type of energy
   C) A measurement
   D) A tool

2. Which of the following is an example of a push force?
   A) Opening a door
   B) Sitting on a chair
   C) Gravity pulling an object
   D) Wind blowing leaves

## Answer Key

1. A) A push or pull
2. A) Opening a door

## Scoring Key

- Question 1: 1 point
- Question 2: 1 point
- Total: 2 points`,
      question_count: 2,
      question_types: '["Multiple Choice"]',
      difficulty: 'Easy',
      time_limit: 10,
      tags: '["science", "forces", "test"]',
      instructions: 'Answer all questions to the best of your ability.',
      user_id: '5',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    
    console.log('Inserting quiz...');
    await db.insert(quizzes).values(testQuiz);
    
    console.log('✅ Quiz created successfully!');
    console.log('Quiz ID:', testQuiz.id);
    console.log('User ID:', testQuiz.user_id);
    
    // Now try to retrieve it
    console.log('\nTesting retrieval...');
    const retrievedQuizzes = await db
      .select()
      .from(quizzes)
      .where(eq(quizzes.user_id, '5'))
      .orderBy(desc(quizzes.created_at));
    
    console.log('Quizzes found for user 5:', retrievedQuizzes.length);
    retrievedQuizzes.forEach((quiz, index) => {
      console.log(`${index + 1}. ID: ${quiz.id}, Title: ${quiz.title}, User ID: ${quiz.user_id}`);
    });
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    process.exit(0);
  }
}

testQuizForUser5(); 