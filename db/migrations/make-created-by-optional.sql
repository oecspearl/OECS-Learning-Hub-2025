-- Make created_by field optional in cross_curricular_plans table
ALTER TABLE cross_curricular_plans ALTER COLUMN created_by DROP NOT NULL;
ALTER TABLE cross_curricular_plans ALTER COLUMN is_public SET DEFAULT true; 