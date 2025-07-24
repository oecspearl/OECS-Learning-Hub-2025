-- Create cross_curricular_reflections table
CREATE TABLE IF NOT EXISTS cross_curricular_reflections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  plan_id UUID NOT NULL,
  reflection_notes TEXT,
  student_engagement TEXT,
  effectiveness_rating INTEGER,
  improvements_needed TEXT,
  reflection_date TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (plan_id) REFERENCES cross_curricular_plans(id) ON DELETE CASCADE
);

-- Create index for faster lookups by plan_id
CREATE INDEX IF NOT EXISTS idx_cross_curricular_reflections_plan_id ON cross_curricular_reflections(plan_id); 