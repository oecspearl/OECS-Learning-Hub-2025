-- Create cross_curricular_reflections table
CREATE TABLE IF NOT EXISTS cross_curricular_reflections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  plan_id UUID NOT NULL,
  user_id UUID NOT NULL,
  reflection_date TEXT NOT NULL,
  objectives_met TEXT,
  student_understanding TEXT,
  evidence_support TEXT,
  students_not_meeting_objectives TEXT,
  misconceptions_difficulties TEXT,
  assessment_effective TEXT,
  content_suitable TEXT,
  strategies_engaging TEXT,
  students_on_task TEXT,
  differentiation_effective TEXT,
  future_improvements TEXT,
  long_term_goals TEXT,
  behavioral_issues TEXT,
  student_opportunities TEXT,
  teaching_insights TEXT,
  overall_rating INTEGER,
  time_management TEXT,
  student_engagement_level TEXT,
  next_steps TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (plan_id) REFERENCES cross_curricular_plans(id) ON DELETE CASCADE
);

-- Create index for faster lookups by plan_id
CREATE INDEX IF NOT EXISTS idx_cross_curricular_reflections_plan_id ON cross_curricular_reflections(plan_id); 