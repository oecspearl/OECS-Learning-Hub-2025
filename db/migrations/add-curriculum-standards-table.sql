-- Create the missing curriculum_standards table
CREATE TABLE IF NOT EXISTS curriculum_standards (
  id SERIAL PRIMARY KEY,
  subject VARCHAR(50) NOT NULL,
  grade_level VARCHAR(10) NOT NULL,
  strand VARCHAR(100) NOT NULL,
  code VARCHAR(20),
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_curriculum_standards_subject ON curriculum_standards(subject);
CREATE INDEX IF NOT EXISTS idx_curriculum_standards_grade ON curriculum_standards(grade_level);
CREATE INDEX IF NOT EXISTS idx_curriculum_standards_strand ON curriculum_standards(strand);
CREATE INDEX IF NOT EXISTS idx_curriculum_standards_subject_grade ON curriculum_standards(subject, grade_level);

-- Migrate data from existing subject-specific tables
INSERT INTO curriculum_standards (subject, grade_level, strand, code, description)
SELECT 
  'language-arts' as subject,
  grade_level,
  strand,
  code,
  description
FROM language_arts_standards;

INSERT INTO curriculum_standards (subject, grade_level, strand, code, description)
SELECT 
  'mathematics' as subject,
  grade_level,
  strand,
  code,
  description
FROM mathematics_standards;

INSERT INTO curriculum_standards (subject, grade_level, strand, code, description)
SELECT 
  'science' as subject,
  grade_level,
  strand,
  code,
  description
FROM science_standards;

INSERT INTO curriculum_standards (subject, grade_level, strand, code, description)
SELECT 
  'social-studies' as subject,
  grade_level,
  strand,
  code,
  description
FROM social_studies_standards;

-- Enable Row Level Security
ALTER TABLE curriculum_standards ENABLE ROW LEVEL SECURITY;

-- Create RLS policy for public read access
CREATE POLICY "Public read access to curriculum_standards" ON curriculum_standards FOR SELECT USING (true); 