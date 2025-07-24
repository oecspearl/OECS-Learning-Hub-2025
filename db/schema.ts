import { sql } from "drizzle-orm"
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core"

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

export const crossCurricularPlans = sqliteTable("cross_curricular_plans", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  theme: text("theme").notNull(),
  description: text("description"),
  grade_range: text("grade_range").notNull(),
  duration_days: integer("duration_days"),
  subjects_included: text("subjects_included").notNull(),
  subject_connections: text("subject_connections"),
  central_question: text("central_question"),
  learning_objectives: text("learning_objectives"),
  plan_content: text("plan_content").notNull(),
  culminating_activities: text("culminating_activities"),
  assessment_strategies: text("assessment_strategies"),
  materials_needed: text("materials_needed"),
  tags: text("tags"),
  is_public: integer("is_public", { mode: "boolean" }).default(false),
  created_by: text("created_by"),
  created_at: text("created_at").default(sql`CURRENT_TIMESTAMP`),
  updated_at: text("updated_at").default(sql`CURRENT_TIMESTAMP`),
})

export const crossCurricularReflections = sqliteTable("cross_curricular_reflections", {
  id: text("id").primaryKey(),
  plan_id: text("plan_id").notNull().references(() => crossCurricularPlans.id),
  reflection_notes: text("reflection_notes"),
  student_engagement: text("student_engagement"),
  effectiveness_rating: integer("effectiveness_rating"),
  improvements_needed: text("improvements_needed"),
  reflection_date: text("reflection_date"),
  created_at: text("created_at").default(sql`CURRENT_TIMESTAMP`),
  updated_at: text("updated_at").default(sql`CURRENT_TIMESTAMP`),
})

export const strands = sqliteTable("strands", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  description: text("description"),
  sort_order: integer("sort_order").notNull(),
}) 