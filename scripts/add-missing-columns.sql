-- Add missing columns to existing multigrade_plans table
-- This script adds columns that are missing from the existing table

-- Add assessment_approach column if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'multigrade_plans' 
        AND column_name = 'assessment_approach'
    ) THEN
        ALTER TABLE multigrade_plans ADD COLUMN assessment_approach TEXT;
    END IF;
END $$;

-- Add any other missing columns here if needed
-- For example, if content column is missing:
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'multigrade_plans' 
        AND column_name = 'content'
    ) THEN
        ALTER TABLE multigrade_plans ADD COLUMN content TEXT NOT NULL DEFAULT '';
    END IF;
END $$;

-- Add pedagogical_strategy column if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'multigrade_plans' 
        AND column_name = 'pedagogical_strategy'
    ) THEN
        ALTER TABLE multigrade_plans ADD COLUMN pedagogical_strategy TEXT;
    END IF;
END $$;

-- Add differentiation_strategies column if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'multigrade_plans' 
        AND column_name = 'differentiation_strategies'
    ) THEN
        ALTER TABLE multigrade_plans ADD COLUMN differentiation_strategies TEXT;
    END IF;
END $$;

-- Add grouping_strategy column if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'multigrade_plans' 
        AND column_name = 'grouping_strategy'
    ) THEN
        ALTER TABLE multigrade_plans ADD COLUMN grouping_strategy TEXT;
    END IF;
END $$;

-- Add curriculum_standards column if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'multigrade_plans' 
        AND column_name = 'curriculum_standards'
    ) THEN
        ALTER TABLE multigrade_plans ADD COLUMN curriculum_standards TEXT;
    END IF;
END $$;

-- Add materials column if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'multigrade_plans' 
        AND column_name = 'materials'
    ) THEN
        ALTER TABLE multigrade_plans ADD COLUMN materials TEXT;
    END IF;
END $$;

-- Add duration column if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'multigrade_plans' 
        AND column_name = 'duration'
    ) THEN
        ALTER TABLE multigrade_plans ADD COLUMN duration TEXT;
    END IF;
END $$;

-- Add topic column if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'multigrade_plans' 
        AND column_name = 'topic'
    ) THEN
        ALTER TABLE multigrade_plans ADD COLUMN topic TEXT;
    END IF;
END $$;

-- Verify the table structure
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'multigrade_plans' 
ORDER BY ordinal_position; 