-- Fix cross_curricular_plans table schema
-- Add all missing fields that are referenced in the application

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

-- Add learning_styles field (optional)
ALTER TABLE cross_curricular_plans ADD COLUMN learning_styles TEXT;

-- Add multiple_intelligences field (optional)
ALTER TABLE cross_curricular_plans ADD COLUMN multiple_intelligences TEXT;

-- Add special_needs field (optional)
ALTER TABLE cross_curricular_plans ADD COLUMN special_needs INTEGER DEFAULT 0;

-- Add special_needs_details field (optional)
ALTER TABLE cross_curricular_plans ADD COLUMN special_needs_details TEXT;

-- Add ell_support field (optional)
ALTER TABLE cross_curricular_plans ADD COLUMN ell_support INTEGER DEFAULT 0;

-- Add gifted_extension field (optional)
ALTER TABLE cross_curricular_plans ADD COLUMN gifted_extension INTEGER DEFAULT 0;

-- Add pedagogical_strategy field (optional)
ALTER TABLE cross_curricular_plans ADD COLUMN pedagogical_strategy TEXT;

-- Add assessment_strategy field (optional)
ALTER TABLE cross_curricular_plans ADD COLUMN assessment_strategy TEXT;

-- Add technology_integration field (optional)
ALTER TABLE cross_curricular_plans ADD COLUMN technology_integration INTEGER DEFAULT 0;

-- Add additional_instructions field (optional)
ALTER TABLE cross_curricular_plans ADD COLUMN additional_instructions TEXT;

-- Update existing records to have a default central_problem if empty
UPDATE cross_curricular_plans 
SET central_problem = 'Integrated learning experience across multiple subjects' 
WHERE central_problem = 'Central problem/project to be defined' OR central_problem IS NULL;

-- Verify the table structure
PRAGMA table_info(cross_curricular_plans); 