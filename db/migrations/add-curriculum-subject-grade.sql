-- Add subject and grade columns to strands
ALTER TABLE strands ADD COLUMN subject TEXT;
ALTER TABLE strands ADD COLUMN grade TEXT;

-- Add subject and grade columns to essential_learning_outcomes
ALTER TABLE essential_learning_outcomes ADD COLUMN subject TEXT;
ALTER TABLE essential_learning_outcomes ADD COLUMN grade TEXT;

-- Add subject and grade columns to specific_curriculum_outcomes
ALTER TABLE specific_curriculum_outcomes ADD COLUMN subject TEXT;
ALTER TABLE specific_curriculum_outcomes ADD COLUMN grade TEXT; 