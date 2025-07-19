-- Create quizzes table
CREATE TABLE IF NOT EXISTS quizzes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  subject VARCHAR(100) NOT NULL,
  grade VARCHAR(50) NOT NULL,
  topic VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  question_count INTEGER NOT NULL DEFAULT 10,
  question_types JSONB DEFAULT '[]',
  difficulty VARCHAR(50),
  time_limit INTEGER, -- in minutes
  tags JSONB DEFAULT '[]',
  instructions TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_quizzes_subject ON quizzes(subject);
CREATE INDEX IF NOT EXISTS idx_quizzes_grade ON quizzes(grade);
CREATE INDEX IF NOT EXISTS idx_quizzes_created_at ON quizzes(created_at);
CREATE INDEX IF NOT EXISTS idx_quizzes_tags ON quizzes USING GIN(tags);

-- Insert sample quiz data
INSERT INTO quizzes (title, description, subject, grade, topic, content, question_count, question_types, difficulty, time_limit, tags, instructions) VALUES
(
  'Fractions Fundamentals',
  'Basic understanding of fractions for Grade 3 students',
  'Mathematics',
  'Grade 3',
  'Fractions',
  'Fractions Fundamentals

Subject: Mathematics
Grade Level: Grade 3
Topic: Fractions
Description: Basic understanding of fractions for Grade 3 students
Time Limit: 25 minutes

Question Types: Multiple Choice, True/False
Difficulty: Easy
Total Questions: 8

---

SAMPLE QUESTIONS:

1. Multiple Choice Question:
Which fraction represents one half?
A) 1/3
B) 1/2
C) 2/3
D) 3/4

Answer: B) 1/2

2. True/False Question:
The fraction 2/4 is equal to 1/2.
Answer: True

[Additional questions would continue...]

---

ANSWER KEY:
1. B
2. True

---

GRADING RUBRIC:
- Multiple Choice: 1 point each
- True/False: 1 point each

Total Possible Points: 8',
  8,
  '["Multiple Choice", "True/False"]',
  'Easy',
  25,
  '["fractions", "mathematics", "grade3"]',
  'Show all work for calculation problems.'
),
(
  'Caribbean History Quiz',
  'Test knowledge of Caribbean historical events and figures',
  'Social Studies',
  'Grade 5',
  'Caribbean History',
  'Caribbean History Quiz

Subject: Social Studies
Grade Level: Grade 5
Topic: Caribbean History
Description: Test knowledge of Caribbean historical events and figures
Time Limit: 30 minutes

Question Types: Multiple Choice, Short Answer
Difficulty: Medium
Total Questions: 12

---

SAMPLE QUESTIONS:

1. Multiple Choice Question:
Who were the first inhabitants of the Caribbean?
A) Spanish colonizers
B) Indigenous peoples
C) African slaves
D) British settlers

Answer: B) Indigenous peoples

2. Short Answer Question:
Explain the significance of the sugar plantation system in Caribbean history.
Answer: The sugar plantation system was central to Caribbean colonial economy and led to the importation of enslaved Africans, shaping the demographic and cultural landscape of the region.

[Additional questions would continue...]

---

ANSWER KEY:
1. B
2. Sample answer provided

---

GRADING RUBRIC:
- Multiple Choice: 1 point each
- Short Answer: 3 points based on completeness

Total Possible Points: 18',
  12,
  '["Multiple Choice", "Short Answer"]',
  'Medium',
  30,
  '["caribbean", "history", "social-studies", "grade5"]',
  'Use complete sentences for short answer questions.'
);
