-- Drop the table if it exists
DROP TABLE IF EXISTS cross_curricular_plans;

-- Create the cross_curricular_plans table
CREATE TABLE cross_curricular_plans (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  theme TEXT NOT NULL,
  grade_range TEXT NOT NULL,
  subjects TEXT NOT NULL,
  duration TEXT NOT NULL,
  sessions TEXT NOT NULL DEFAULT '1',
  content TEXT NOT NULL,
  learning_styles TEXT,
  multiple_intelligences TEXT,
  special_needs INTEGER DEFAULT 0,
  special_needs_details TEXT,
  ell_support INTEGER DEFAULT 0,
  gifted_extension INTEGER DEFAULT 0,
  pedagogical_strategy TEXT,
  assessment_strategy TEXT,
  technology_integration INTEGER DEFAULT 0,
  additional_instructions TEXT,
  user_id TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
); 