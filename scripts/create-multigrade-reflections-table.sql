-- Create multigrade_reflections table
-- This table stores reflections for multigrade lesson plans

CREATE TABLE IF NOT EXISTS multigrade_reflections (
  id TEXT PRIMARY KEY,
  multigrade_plan_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  reflection_date TEXT NOT NULL,
  taught_date TEXT NOT NULL,
  
  -- Lesson Outcome Checklist
  objectives_met TEXT, -- Yes/No/Partially
  student_understanding TEXT, -- Yes/No/Partially
  evidence_support TEXT, -- Text description
  students_not_meeting_objectives TEXT, -- Text description
  misconceptions_difficulties TEXT, -- Text description
  assessment_effective TEXT, -- Yes/No/Partially
  content_suitable TEXT, -- Yes/No/Partially
  strategies_engaging TEXT, -- Yes/No/Partially
  students_on_task TEXT, -- Yes/No/Partially
  differentiation_effective TEXT, -- Yes/No/Partially
  future_improvements TEXT, -- Text description
  long_term_goals TEXT, -- Yes/No/Partially
  behavioral_issues TEXT, -- Text description
  student_opportunities TEXT, -- Yes/No/Partially
  teaching_insights TEXT, -- Text description
  
  -- Additional reflection fields
  overall_rating INTEGER, -- 1-5 scale
  time_management TEXT, -- Text description
  student_engagement_level TEXT, -- High/Medium/Low
  next_steps TEXT, -- Text description
  
  -- Multigrade-specific fields
  grade_level_effectiveness TEXT, -- How well did the multigrade approach work?
  peer_learning_success TEXT, -- Yes/No/Partially - Did peer learning work well?
  differentiation_success TEXT, -- Yes/No/Partially - Were differentiation strategies effective?
  cross_grade_collaboration TEXT, -- Text description of cross-grade collaboration
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_multigrade_reflections_plan_id ON multigrade_reflections(multigrade_plan_id);
CREATE INDEX IF NOT EXISTS idx_multigrade_reflections_user_id ON multigrade_reflections(user_id);

-- Enable Row Level Security (RLS)
ALTER TABLE multigrade_reflections ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for authenticated users
CREATE POLICY "Users can manage their own multigrade reflections" ON multigrade_reflections FOR ALL USING (auth.uid()::text = user_id); 