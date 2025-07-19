import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core"
import { sql } from "drizzle-orm"

// Curriculum Strands
export const strands = sqliteTable("strands", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  description: text("description"),
  sort_order: integer("sort_order").notNull(),
  subject: text("subject"),
  grade: text("grade"),
})

// Essential Learning Outcomes
export const essentialLearningOutcomes = sqliteTable("essential_learning_outcomes", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  strandId: integer("strand_id")
    .notNull()
    .references(() => strands.id),
  code: text("code").notNull(), // e.g., "ELO 1"
  description: text("description").notNull(),
  gradeExpectations: text("grade_expectations"),
  subject: text("subject"),
  grade: text("grade"),
})

// Specific Curriculum Outcomes
export const specificCurriculumOutcomes = sqliteTable("specific_curriculum_outcomes", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  eloId: integer("elo_id")
    .notNull()
    .references(() => essentialLearningOutcomes.id),
  code: text("code").notNull(), // e.g., "1.1"
  description: text("description").notNull(),
  subject: text("subject"),
  grade: text("grade"),
})

// Assessment Strategies
export const assessmentStrategies = sqliteTable("assessment_strategies", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  eloId: integer("elo_id")
    .notNull()
    .references(() => essentialLearningOutcomes.id),
  type: text("type").notNull(), // e.g., "Conversation", "Observation", "Product"
  description: text("description").notNull(),
  examples: text("examples"),
})

// Learning Strategies
export const learningStrategies = sqliteTable("learning_strategies", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  scoId: integer("sco_id")
    .notNull()
    .references(() => specificCurriculumOutcomes.id),
  title: text("title").notNull(),
  description: text("description").notNull(),
  resources: text("resources"),
  integrations: text("integrations"), // For subject integration notes
})

// Resources
export const resources = sqliteTable("resources", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  strandId: integer("strand_id")
    .notNull()
    .references(() => strands.id),
  title: text("title").notNull(),
  type: text("type").notNull(), // e.g., "Book", "Website", "Video"
  url: text("url"),
  description: text("description"),
})

// Teacher Content Knowledge
export const teacherContent = sqliteTable("teacher_content", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  eloId: integer("elo_id")
    .notNull()
    .references(() => essentialLearningOutcomes.id),
  title: text("title").notNull(),
  content: text("content").notNull(),
  resources: text("resources"),
})

// Users table
export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password_hash: text("password_hash").notNull(),
  role: text("role").notNull().default("teacher"),
  avatar_url: text("avatar_url"), // URL to uploaded avatar image
  created_at: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updated_at: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
})

export const settings = sqliteTable("settings", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  key: text("key").notNull().unique(),
  value: text("value"),
  type: text("type").notNull(), // 'string', 'number', 'boolean', 'json'
  category: text("category").notNull(), // 'general', 'appearance', 'notifications', 'security', 'backup'
  description: text("description"),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").default(sql`CURRENT_TIMESTAMP`),
})

export const multigradePlans = sqliteTable('multigrade_plans', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  subject: text('subject').notNull(),
  grade_range: text('grade_range').notNull(),
  topic: text('topic'),
  content: text('content').notNull(),
  duration: text('duration'),
  materials: text('materials'),
  pedagogical_strategy: text('pedagogical_strategy'),
  differentiation_strategies: text('differentiation_strategies'),
  grouping_strategy: text('grouping_strategy'),
  assessment_approach: text('assessment_approach'),
  curriculum_standards: text('curriculum_standards'),
  created_at: text('created_at').notNull().default(sql`CURRENT_TIMESTAMP`),
  updated_at: text('updated_at').notNull().default(sql`CURRENT_TIMESTAMP`)
})

export const lessonPlans = sqliteTable("lesson_plans", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  subject: text("subject").notNull(),
  grade: text("grade").notNull(),
  topic: text("topic"),
  content: text("content").notNull(),
  duration: text("duration").notNull(),
  objectives: text("objectives"),
  materials: text("materials"),
  overview: text("overview"),
  standards: text("standards"),
  vocabulary: text("vocabulary"),
  homework: text("homework"),
  extensions: text("extensions"),
  pedagogical_strategy: text("pedagogical_strategy"),
  differentiation_strategies: text("differentiation_strategies"),
  grouping_strategy: text("grouping_strategy"),
  assessment_approach: text("assessment_approach"),
  curriculum_standards: text("curriculum_standards"),
  user_id: text("user_id").notNull(),
  created_at: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updated_at: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
})

export const quizzes = sqliteTable("quizzes", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  subject: text("subject").notNull(),
  grade: text("grade").notNull(),
  topic: text("topic").notNull(),
  content: text("content").notNull(),
  question_count: integer("question_count").notNull().default(10),
  question_types: text("question_types"), // JSON string
  difficulty: text("difficulty"),
  time_limit: integer("time_limit"), // in minutes
  tags: text("tags"), // JSON string
  instructions: text("instructions"),
  user_id: text("user_id").notNull(),
  created_at: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updated_at: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
})

export const schedules = sqliteTable("schedules", {
  id: text("id").primaryKey(),
  user_id: text("user_id").notNull(),
  day: text("day").notNull(), // Monday, Tuesday, etc.
  time: text("time").notNull(), // 8:00 AM, 9:00 AM, etc.
  subject: text("subject").notNull(),
  grade: text("grade").notNull(),
  room: text("room").notNull(),
  created_at: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updated_at: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
})

export const lessonReflections = sqliteTable("lesson_reflections", {
  id: text("id").primaryKey(),
  lesson_plan_id: text("lesson_plan_id").notNull(),
  user_id: text("user_id").notNull(),
  reflection_date: text("reflection_date").notNull(),
  
  // Lesson Outcome Checklist
  objectives_met: text("objectives_met"), // Yes/No/Partially
  student_understanding: text("student_understanding"), // Yes/No/Partially
  evidence_support: text("evidence_support"), // Text description
  students_not_meeting_objectives: text("students_not_meeting_objectives"), // Text description
  misconceptions_difficulties: text("misconceptions_difficulties"), // Text description
  assessment_effective: text("assessment_effective"), // Yes/No/Partially
  content_suitable: text("content_suitable"), // Yes/No/Partially
  strategies_engaging: text("strategies_engaging"), // Yes/No/Partially
  students_on_task: text("students_on_task"), // Yes/No/Partially
  differentiation_effective: text("differentiation_effective"), // Yes/No/Partially
  future_improvements: text("future_improvements"), // Text description
  long_term_goals: text("long_term_goals"), // Yes/No/Partially
  behavioral_issues: text("behavioral_issues"), // Text description
  student_opportunities: text("student_opportunities"), // Yes/No/Partially
  teaching_insights: text("teaching_insights"), // Text description
  
  // Additional reflection fields
  overall_rating: integer("overall_rating"), // 1-5 scale
  time_management: text("time_management"), // Text description
  student_engagement_level: text("student_engagement_level"), // High/Medium/Low
  next_steps: text("next_steps"), // Text description
  
  created_at: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  updated_at: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
})
