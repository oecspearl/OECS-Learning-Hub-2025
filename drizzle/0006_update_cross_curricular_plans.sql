-- Update cross_curricular_plans table
ALTER TABLE cross_curricular_plans ADD COLUMN sessions TEXT NOT NULL DEFAULT '1';
ALTER TABLE cross_curricular_plans ADD COLUMN learning_styles TEXT;
ALTER TABLE cross_curricular_plans ADD COLUMN multiple_intelligences TEXT;
ALTER TABLE cross_curricular_plans ADD COLUMN special_needs INTEGER DEFAULT 0;
ALTER TABLE cross_curricular_plans ADD COLUMN special_needs_details TEXT;
ALTER TABLE cross_curricular_plans ADD COLUMN ell_support INTEGER DEFAULT 0;
ALTER TABLE cross_curricular_plans ADD COLUMN gifted_extension INTEGER DEFAULT 0;
ALTER TABLE cross_curricular_plans ADD COLUMN assessment_strategy TEXT;
ALTER TABLE cross_curricular_plans ADD COLUMN technology_integration INTEGER DEFAULT 0;
ALTER TABLE cross_curricular_plans ADD COLUMN additional_instructions TEXT;

-- Drop old columns
ALTER TABLE cross_curricular_plans DROP COLUMN learning_objectives;
ALTER TABLE cross_curricular_plans DROP COLUMN materials;
ALTER TABLE cross_curricular_plans DROP COLUMN differentiation_strategies;
ALTER TABLE cross_curricular_plans DROP COLUMN assessment_approach;
ALTER TABLE cross_curricular_plans DROP COLUMN curriculum_standards;
ALTER TABLE cross_curricular_plans DROP COLUMN overview;
ALTER TABLE cross_curricular_plans DROP COLUMN vocabulary;
ALTER TABLE cross_curricular_plans DROP COLUMN homework;
ALTER TABLE cross_curricular_plans DROP COLUMN extensions; 