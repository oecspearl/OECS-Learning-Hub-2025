const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'data', 'sqlite.db');

function testQuizCreation() {
  const db = new sqlite3.Database(dbPath);
  
  console.log('Testing quiz creation for user ID 5...');
  
  const testQuiz = {
    id: `quiz_${Date.now()}_simple_test`,
    title: 'Simple Test Quiz',
    description: 'A simple test quiz',
    subject: 'Science',
    grade: 'Grade 3',
    topic: 'Simple Machines',
    content: 'Test quiz content',
    question_count: 2,
    question_types: '["Multiple Choice"]',
    difficulty: 'Easy',
    time_limit: 10,
    tags: '["test"]',
    instructions: 'Answer the questions.',
    user_id: '5',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
  
  const sql = `INSERT INTO quizzes (
    id, title, description, subject, grade, topic, content, 
    question_count, question_types, difficulty, time_limit, 
    tags, instructions, user_id, created_at, updated_at
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  
  const values = [
    testQuiz.id,
    testQuiz.title,
    testQuiz.description,
    testQuiz.subject,
    testQuiz.grade,
    testQuiz.topic,
    testQuiz.content,
    testQuiz.question_count,
    testQuiz.question_types,
    testQuiz.difficulty,
    testQuiz.time_limit,
    testQuiz.tags,
    testQuiz.instructions,
    testQuiz.user_id,
    testQuiz.created_at,
    testQuiz.updated_at,
  ];
  
  db.run(sql, values, function(err) {
    if (err) {
      console.error('Error inserting quiz:', err);
      return;
    }
    
    console.log('✅ Quiz inserted successfully!');
    console.log('Quiz ID:', testQuiz.id);
    console.log('User ID:', testQuiz.user_id);
    
    // Now test retrieval
    db.all("SELECT * FROM quizzes WHERE user_id = ?", ['5'], (err, rows) => {
      if (err) {
        console.error('Error retrieving quizzes:', err);
        return;
      }
      
      console.log(`\nFound ${rows.length} quizzes for user 5:`);
      rows.forEach((quiz, index) => {
        console.log(`${index + 1}. ID: ${quiz.id}, Title: ${quiz.title}, User ID: ${quiz.user_id}`);
      });
      
      db.close();
    });
  });
}

testQuizCreation(); 