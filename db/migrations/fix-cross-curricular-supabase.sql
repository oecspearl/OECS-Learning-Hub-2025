-- Fix cross_curricular_plans table schema for Supabase
-- Add all missing fields that are referenced in the application

-- Add central_problem field (required)
ALTER TABLE cross_curricular_plans ADD COLUMN IF NOT EXISTS central_problem TEXT NOT NULL DEFAULT 'Central problem/project to be defined';

-- Add overlapping_concepts field (optional)
ALTER TABLE cross_curricular_plans ADD COLUMN IF NOT EXISTS overlapping_concepts TEXT;

-- Add curriculum_objectives_mapping field (optional)
ALTER TABLE cross_curricular_plans ADD COLUMN IF NOT EXISTS curriculum_objectives_mapping TEXT;

-- Add assessment_rubric_requirements field (optional)
ALTER TABLE cross_curricular_plans ADD COLUMN IF NOT EXISTS assessment_rubric_requirements TEXT;

-- Add resource_requirements field (optional)
ALTER TABLE cross_curricular_plans ADD COLUMN IF NOT EXISTS resource_requirements TEXT;

-- Add learning_styles field (optional)
ALTER TABLE cross_curricular_plans ADD COLUMN IF NOT EXISTS learning_styles TEXT;

-- Add multiple_intelligences field (optional)
ALTER TABLE cross_curricular_plans ADD COLUMN IF NOT EXISTS multiple_intelligences TEXT;

-- Add special_needs field (optional)
ALTER TABLE cross_curricular_plans ADD COLUMN IF NOT EXISTS special_needs BOOLEAN DEFAULT FALSE;

-- Add special_needs_details field (optional)
ALTER TABLE cross_curricular_plans ADD COLUMN IF NOT EXISTS special_needs_details TEXT;

-- Add ell_support field (optional)
ALTER TABLE cross_curricular_plans ADD COLUMN IF NOT EXISTS ell_support BOOLEAN DEFAULT FALSE;

-- Add gifted_extension field (optional)
ALTER TABLE cross_curricular_plans ADD COLUMN IF NOT EXISTS gifted_extension BOOLEAN DEFAULT FALSE;

-- Add pedagogical_strategy field (optional)
ALTER TABLE cross_curricular_plans ADD COLUMN IF NOT EXISTS pedagogical_strategy TEXT;

-- Add assessment_strategy field (optional)
ALTER TABLE cross_curricular_plans ADD COLUMN IF NOT EXISTS assessment_strategy TEXT;

-- Add technology_integration field (optional)
ALTER TABLE cross_curricular_plans ADD COLUMN IF NOT EXISTS technology_integration BOOLEAN DEFAULT FALSE;

-- Add additional_instructions field (optional)
ALTER TABLE cross_curricular_plans ADD COLUMN IF NOT EXISTS additional_instructions TEXT;

-- Update existing records to have a default central_problem if empty
UPDATE cross_curricular_plans 
SET central_problem = 'Integrated learning experience across multiple subjects' 
WHERE central_problem = 'Central problem/project to be defined' OR central_problem IS NULL;

-- Enable RLS if not already enabled
ALTER TABLE cross_curricular_plans ENABLE ROW LEVEL SECURITY;

-- Create policy for authenticated users
CREATE POLICY IF NOT EXISTS "Users can manage their own cross curricular plans" ON cross_curricular_plans
    FOR ALL USING (auth.uid()::text = user_id);

-- Grant necessary permissions
GRANT ALL ON cross_curricular_plans TO authenticated;
GRANT ALL ON cross_curricular_plans TO service_role; 