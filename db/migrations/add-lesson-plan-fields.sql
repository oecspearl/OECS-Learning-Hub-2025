-- Add new fields to lesson_plans table
ALTER TABLE lesson_plans ADD COLUMN overview TEXT;
ALTER TABLE lesson_plans ADD COLUMN standards TEXT;
ALTER TABLE lesson_plans ADD COLUMN vocabulary TEXT;
ALTER TABLE lesson_plans ADD COLUMN homework TEXT;
ALTER TABLE lesson_plans ADD COLUMN extensions TEXT; 