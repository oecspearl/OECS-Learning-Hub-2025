-- Add new fields to cross_curricular_plans table for enhanced cross-curricular planning

-- Add central_problem field (required)
ALTER TABLE cross_curricular_plans ADD COLUMN central_problem TEXT NOT NULL DEFAULT 'Central problem/project to be defined';

-- Add overlapping_concepts field (optional)
ALTER TABLE cross_curricular_plans ADD COLUMN overlapping_concepts TEXT;

-- Add curriculum_objectives_mapping field (optional)
ALTER TABLE cross_curricular_plans ADD COLUMN curriculum_objectives_mapping TEXT;

-- Add assessment_rubric_requirements field (optional)
ALTER TABLE cross_curricular_plans ADD COLUMN assessment_rubric_requirements TEXT;

-- Add resource_requirements field (optional)
ALTER TABLE cross_curricular_plans ADD COLUMN resource_requirements TEXT;

-- Update existing records to have a default central_problem if empty
UPDATE cross_curricular_plans 
SET central_problem = 'Integrated learning experience across multiple subjects' 
WHERE central_problem = 'Central problem/project to be defined' OR central_problem IS NULL; 