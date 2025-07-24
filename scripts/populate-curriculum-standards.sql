-- Populate curriculum_standards table with data from existing subject-specific tables

-- Clear existing data (if any)
DELETE FROM curriculum_standards;

-- Insert Language Arts Standards
INSERT INTO curriculum_standards (subject, grade_level, strand, code, description)
SELECT 
  'language-arts' as subject,
  grade_level,
  strand,
  code,
  description
FROM language_arts_standards;

-- Insert Mathematics Standards
INSERT INTO curriculum_standards (subject, grade_level, strand, code, description)
SELECT 
  'mathematics' as subject,
  grade_level,
  strand,
  code,
  description
FROM mathematics_standards;

-- Insert Science Standards
INSERT INTO curriculum_standards (subject, grade_level, strand, code, description)
SELECT 
  'science' as subject,
  grade_level,
  strand,
  code,
  description
FROM science_standards;

-- Insert Social Studies Standards
INSERT INTO curriculum_standards (subject, grade_level, strand, code, description)
SELECT 
  'social-studies' as subject,
  grade_level,
  strand,
  code,
  description
FROM social_studies_standards;

-- Verify the data was inserted correctly
SELECT 
  subject,
  grade_level,
  COUNT(*) as standards_count
FROM curriculum_standards
GROUP BY subject, grade_level
ORDER BY subject, grade_level;

-- Show total count
SELECT COUNT(*) as total_standards FROM curriculum_standards; 