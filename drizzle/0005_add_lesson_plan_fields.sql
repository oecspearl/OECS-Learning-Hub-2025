-- Add missing fields to lesson_plans table
ALTER TABLE lesson_plans ADD COLUMN pedagogical_strategy TEXT;
ALTER TABLE lesson_plans ADD COLUMN differentiation_strategies TEXT;
ALTER TABLE lesson_plans ADD COLUMN grouping_strategy TEXT;
ALTER TABLE lesson_plans ADD COLUMN assessment_approach TEXT;
ALTER TABLE lesson_plans ADD COLUMN curriculum_standards TEXT; 