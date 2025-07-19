const { saveQuiz } = require('./app/actions/quizzes');

async function testSaveQuiz() {
  try {
    console.log('Testing saveQuiz function...');
    
    const testQuizData = {
      title: 'Test Quiz via saveQuiz Function',
      description: 'Testing the saveQuiz function directly',
      subject: 'Mathematics',
      grade: 'Grade 4',
      topic: 'Fractions',
      content: `# Test Quiz

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
2. A) 1/2`,
      question_count: 2,
      question_types: '["Multiple Choice"]',
      difficulty: 'Medium',
      time_limit: 15,
      tags: '["mathematics", "fractions", "test"]',
      instructions: 'Answer all questions to the best of your ability.',
      user_id: '5',
    };
    
    console.log('Calling saveQuiz with user ID:', testQuizData.user_id);
    const result = await saveQuiz(testQuizData);
    
    if (result.success) {
      console.log('✅ Quiz saved successfully!');
      console.log('Quiz ID:', result.data.id);
      console.log('User ID:', result.data.user_id);
    } else {
      console.log('❌ Failed to save quiz:', result.error);
    }
    
  } catch (error) {
    console.error('Error testing saveQuiz:', error);
  } finally {
    process.exit(0);
  }
}

testSaveQuiz(); 