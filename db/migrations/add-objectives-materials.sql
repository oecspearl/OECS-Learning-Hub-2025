-- Add objectives and materials columns to lesson_plans table
ALTER TABLE lesson_plans ADD COLUMN objectives TEXT;
ALTER TABLE lesson_plans ADD COLUMN materials TEXT; 