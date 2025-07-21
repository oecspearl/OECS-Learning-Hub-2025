"use server"

import { z } from "zod"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { getCurriculumStandards, formatStandardsForPrompt } from "@/lib/curriculum-standards"
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

type Message = {
  role: "user" | "assistant"
  content: string
}

const lessonPlanSchema = z.object({
  title: z.string().min(1, "Title is required"),
  subject: z.string().min(1, "Subject is required"),
  grade_level: z.string().min(1, "Grade is required"),
  topic: z.string().optional(),
  lesson_content: z.string().min(1, "Content is required"),
  learning_objectives: z.array(z.string()),
  materials_needed: z.array(z.string()),
  duration_minutes: z.number().min(1, "Duration must be at least 1 minute"),
  description: z.string().optional(),
  curriculum_standards: z.array(z.string()).optional(),
  vocabulary_terms: z.array(z.object({ term: z.string(), definition: z.string(), example: z.string() })).optional(),
  homework_assignment: z.string().optional(),
  extension_activities: z.array(z.string()).optional(),
  created_by: z.string(),
})

export interface LessonPlan {
  id: string
  title: string
  subject: string
  grade_level: string
  topic: string | null
  lesson_content: string
  duration_minutes: number | null
  materials_needed: string[] | null
  pedagogical_approach: string | null
  differentiation_strategies: string[] | null
  grouping_strategy: string | null
  assessment_strategy: string | null
  curriculum_standards: string[] | null
  description: string | null
  learning_objectives: string[] | null
  vocabulary_terms: any | null
  homework_assignment: string | null
  extension_activities: string[] | null
  created_by: string
  created_at: string
  updated_at: string
}

export interface LessonPlansResponse {
  success: boolean
  data: LessonPlan[]
  error?: string
}

export async function generateLessonPlan(formData: any) {
  try {
    console.log("Enhanced generateLessonPlan function called with:", JSON.stringify(formData, null, 2))

    // Parse specialNeeds if it's a JSON string
    if (typeof formData.specialNeeds === "string" && formData.specialNeeds.startsWith("[")) {
      try {
        formData.specialNeeds = JSON.parse(formData.specialNeeds)
      } catch (e) {
        console.error("Error parsing specialNeeds JSON:", e)
        // Keep as is if parsing fails
      }
    }

    // Add more detailed logging to help debug the issue
    console.log("Processing form data with specialNeeds:", {
      specialNeeds: formData.specialNeeds,
      specialNeedsDetails: formData.specialNeedsDetails,
      type: typeof formData.specialNeeds,
      isArray: Array.isArray(formData.specialNeeds),
    })

    // Format special needs if present - handle both array and boolean/string formats
    const specialNeedsText = (() => {
      // Case 1: specialNeeds is an array
      if (Array.isArray(formData.specialNeeds) && formData.specialNeeds.length > 0) {
        return `\nSpecial Needs Accommodations: ${formData.specialNeeds.join(", ")}`
      }

      // Case 2: specialNeeds is a boolean true or string "true"
      if (formData.specialNeeds === true || formData.specialNeeds === "true") {
        // Use specialNeedsDetails if available
        if (formData.specialNeedsDetails) {
          return `\nSpecial Needs Accommodations: ${formData.specialNeedsDetails}`
        }
        return `\nSpecial Needs Accommodations: Specific accommodations required`
      }

      // Case 3: specialNeeds is false or not provided
      return ""
    })()

    // Get curriculum standards for the subject and grade
    let curriculumStandards = ""
    try {
      const standards = await getCurriculumStandards(formData.subject, formData.gradeLevel)
      curriculumStandards = formatStandardsForPrompt(standards)
      console.log("Curriculum standards retrieved successfully")
    } catch (error) {
      console.warn("Failed to retrieve curriculum standards:", error)
      curriculumStandards = "Curriculum standards not available for this subject/grade combination."
    }

    // Build the comprehensive prompt
    const prompt = `Create a comprehensive lesson plan for the following specifications:

Subject: ${formData.subject}
Grade Level: ${formData.gradeLevel}
Topic: ${formData.topic}
Learning Outcomes: ${formData.learningOutcomes}
Number of Students: ${formData.studentCount}
Duration: ${formData.duration} minutes
Learning Styles: ${formData.learningStyles}
Materials: ${formData.materials}
Pedagogical Strategy: ${formData.pedagogicalStrategy}
Prerequisite Skills: ${formData.prerequisiteSkills}${specialNeedsText}
Additional Instructions: ${formData.additionalInstructions || "None"}
Reference URL: ${formData.referenceUrl || "None"}

Curriculum Standards:
${curriculumStandards}

Please create a detailed lesson plan that includes:

1. **Lesson Title and Overview**
2. **Learning Objectives** (specific, measurable, achievable, relevant, time-bound)
3. **Materials and Resources**
4. **Lesson Structure** (with timing for each activity)
5. **Teaching Strategies** (based on the pedagogical strategy specified)
6. **Student Activities** (engaging and appropriate for the grade level)
7. **Assessment Methods** (formative and summative)
8. **Differentiation Strategies** (for diverse learners)
9. **Closure and Reflection**
10. **Homework/Extension Activities** (if applicable)

Make sure the lesson plan is:
- Age-appropriate for the specified grade level
- Aligned with the curriculum standards
- Engaging and interactive
- Inclusive of all learning styles mentioned
- Practical and implementable
- Well-structured with clear timing

Format the response as a complete, ready-to-use lesson plan.`

    console.log("Sending to direct generateLessonPlan:", formData)

    // Generate the lesson plan using AI
    const result = await generateText({
      model: openai("gpt-4"),
      prompt,
      temperature: 0.7,
      maxTokens: 4000,
    })

    if (!result.text) {
      throw new Error("Failed to generate lesson plan content")
    }

    console.log("Received lesson plan of length:", result.text.length)

    // Return the generated lesson plan
    return {
      success: true,
      lessonPlan: result.text,
      specialNeeds: formData.specialNeeds || [],
      subject: formData.subject,
      gradeLevel: formData.gradeLevel,
      topic: formData.topic,
    }

  } catch (error) {
    console.error("Error in generateLessonPlan:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    }
  }
}

export async function generateLessonPlanFromChat(messages: Message[]) {
  try {
    console.log("generateLessonPlanFromChat called with messages:", messages)

    // Get curriculum standards for the subject and grade
    let curriculumStandards = ""
    try {
      const standards = await getCurriculumStandards("general", "all")
      curriculumStandards = formatStandardsForPrompt(standards)
      console.log("Curriculum standards retrieved successfully for chat")
    } catch (error) {
      console.warn("Failed to retrieve curriculum standards for chat:", error)
      curriculumStandards = "Curriculum standards not available."
    }

    // Build the comprehensive prompt
    const prompt = `You are an expert educational consultant for the OECS (Organization of Eastern Caribbean States) curriculum. 

Curriculum Standards Context:
${curriculumStandards}

Based on the conversation history, create a comprehensive lesson plan that follows OECS curriculum standards and best teaching practices. The lesson plan should be:

1. **Well-structured** with clear learning objectives
2. **Age-appropriate** for the specified grade level
3. **Engaging and interactive** with varied activities
4. **Inclusive** of different learning styles and needs
5. **Practical and implementable** with clear instructions
6. **Aligned with curriculum standards** where applicable

Format the response as a complete, ready-to-use lesson plan with all necessary sections.

Conversation History:
${messages.map(msg => `${msg.role}: ${msg.content}`).join('\n\n')}

Please create a comprehensive lesson plan based on this conversation.`

    console.log("Generating lesson plan from chat with prompt length:", prompt.length)

    // Generate the lesson plan using AI
    const result = await generateText({
      model: openai("gpt-4"),
      prompt,
      temperature: 0.7,
      maxTokens: 4000,
    })

    if (!result.text) {
      throw new Error("Failed to generate lesson plan content from chat")
    }

    console.log("Generated lesson plan from chat, length:", result.text.length)

    return result.text

  } catch (error) {
    console.error("Error in generateLessonPlanFromChat:", error)
    throw new Error("Failed to generate lesson plan from chat")
  }
}

export async function saveLessonPlan(formData: any) {
  try {
    console.log("Starting saveLessonPlan function")

    // Check if we're dealing with FormData or a regular object
    const id = formData.get ? formData.get("id") : formData.id
    const title = formData.get ? formData.get("title") : formData.title
    const subject = formData.get ? formData.get("subject") : formData.subject
    const grade_level = formData.get ? formData.get("gradeLevel") : formData.gradeLevel
    const topic = formData.get ? formData.get("topic") : formData.topic
    const lesson_content = formData.get ? formData.get("content") : formData.content
    const duration_minutes = formData.get ? parseInt(formData.get("duration") || "50") : parseInt(formData.duration || "50")
    const created_by = formData.get ? formData.get("userId") : formData.userId || "1" // Default to "1" if not provided

    console.log("Extracted form data:", {
      title,
      subject,
      grade_level,
      topic,
      duration_minutes,
      contentLength: lesson_content ? lesson_content.length : 0,
      created_by,
    })

    // Validate required fields
    const missingFields = []
    if (!title) missingFields.push("title")
    if (!subject) missingFields.push("subject")
    if (!lesson_content) missingFields.push("content")
    if (!grade_level) missingFields.push("grade level")

    if (missingFields.length > 0) {
      console.error("Missing required fields:", missingFields)
      return {
        success: false,
        error: `Missing required fields: ${missingFields.join(", ")} ${missingFields.length > 1 ? "are" : "is"} required`,
      }
    }

    // Create a fallback object to return if database operations fail
    const fallbackId = `lesson_plan_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
    const fallbackData = {
      id: fallbackId,
      title,
      subject,
      grade_level: grade_level || "Not specified",
      duration_minutes,
      topic: topic || null,
      lesson_content,
      created_by,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    // Store the lesson plan in the database
    try {
      const now = new Date().toISOString()
      
      if (id) {
        // Update existing lesson plan
        console.log("Updating existing lesson plan with ID:", id)
        const updatedPlan = await db.lessonPlans.update(id, {
          title,
          subject,
          grade_level,
          duration_minutes,
          topic,
          lesson_content,
          updated_at: now,
        })

        console.log("Update successful")
        return { success: true, data: updatedPlan }
      } else {
        // Create new lesson plan
        console.log("Creating new lesson plan")
        const newPlan = await db.lessonPlans.create({
          title,
          subject,
          grade_level,
          duration_minutes,
          topic,
          lesson_content,
          created_by,
          created_at: now,
          updated_at: now,
        })

        console.log("Insert successful, returned ID:", newPlan.id)
        return { success: true, data: newPlan }
      }
    } catch (dbError) {
      console.error("Database operation failed:", dbError)
      return {
        success: false,
        error: `Database error: ${dbError instanceof Error ? dbError.message : "Unknown error"}`,
        fallbackData,
      }
    }
  } catch (error) {
    console.error("Error saving lesson plan:", error)
    return {
      success: false,
      error: "Failed to save lesson plan",
    }
  }
}

export async function updateLessonPlan(id: string, data: Partial<z.infer<typeof lessonPlanSchema>>) {
  try {
    console.log(`UPDATE LESSON PLAN: Starting update for plan ${id}`)
    console.log("UPDATE LESSON PLAN: Data to update:", data)

    // Try database update
    try {
      console.log(`UPDATE LESSON PLAN: Attempting database update for plan ${id}`)

      const result = await db.lessonPlans.update(id, {
        title: data.title,
        subject: data.subject,
        grade_level: data.grade_level,
        topic: data.topic || null,
        lesson_content: data.lesson_content,
        duration_minutes: data.duration_minutes?.toString() || "50",
        learning_objectives: data.learning_objectives ? JSON.stringify(data.learning_objectives) : null,
        materials_needed: data.materials_needed ? JSON.stringify(data.materials_needed) : null,
        description: data.description || null,
        curriculum_standards: data.curriculum_standards ? JSON.stringify(data.curriculum_standards) : null,
        vocabulary_terms: data.vocabulary_terms ? JSON.stringify(data.vocabulary_terms) : null,
        homework_assignment: data.homework_assignment || null,
        extension_activities: data.extension_activities ? JSON.stringify(data.extension_activities) : null,
        updated_at: new Date().toISOString(),
      })

      console.log(`UPDATE LESSON PLAN: Database update successful for plan ${id}`)

      // Revalidate relevant paths
      revalidatePath(`/lesson-plans/${id}`)
      revalidatePath(`/lesson-plans/${id}/edit`)
      revalidatePath("/dashboard")

      return {
        success: true,
        data: result,
        source: "database",
      }
    } catch (error) {
      console.error("UPDATE LESSON PLAN: Database error:", error)
      throw error
    }
  } catch (error) {
    console.error("UPDATE LESSON PLAN: Error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to update lesson plan",
    }
  }
}

export async function deleteLessonPlan(id: string) {
  try {
    await db.lessonPlans.delete(id)

    return {
      success: true,
    }
  } catch (error) {
    console.error("Error deleting lesson plan:", error)
    return {
      success: false,
      error: "Failed to delete lesson plan",
    }
  }
}

export async function getLessonPlanById(id: string) {
  try {
    const plan = await db.lessonPlans.findFirst({ id })

    if (!plan) {
      return null
    }

    // Ensure all required fields are present, provide null for missing
    return {
      id: plan.id,
      title: plan.title,
      subject: plan.subject,
      grade_level: plan.grade_level,
      topic: plan.topic ?? null,
      lesson_content: plan.lesson_content,
      duration_minutes: plan.duration_minutes,
      materials_needed: plan.materials_needed,
      pedagogical_approach: plan.pedagogical_approach ?? null,
      differentiation_strategies: plan.differentiation_strategies ?? null,
      grouping_strategy: plan.grouping_strategy ?? null,
      assessment_strategy: plan.assessment_strategy ?? null,
      curriculum_standards: plan.curriculum_standards ?? null,
      description: plan.description ?? null,
      learning_objectives: plan.learning_objectives ?? null,
      vocabulary_terms: plan.vocabulary_terms ?? null,
      homework_assignment: plan.homework_assignment ?? null,
      extension_activities: plan.extension_activities ?? null,
      created_by: plan.created_by,
      created_at: plan.created_at,
      updated_at: plan.updated_at,
    }
  } catch (error) {
    console.error("Error getting lesson plan by ID:", error)
    return null
  }
}

export async function getLessonPlans() {
  try {
    const plans = await db.lessonPlans.findMany()
    return {
      success: true,
      data: plans,
    }
  } catch (error) {
    console.error("Error getting lesson plans:", error)
    return {
      success: false,
      data: [],
      error: "Failed to get lesson plans",
    }
  }
}

export async function createLessonPlan(data: z.infer<typeof lessonPlanSchema>) {
  try {
    console.log("Creating lesson plan with data:", data)

    const result = await db.lessonPlans.create({
      ...data,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })

    console.log("Lesson plan created successfully:", result.id)

    // Revalidate relevant paths
    revalidatePath("/dashboard")
    revalidatePath("/lesson-plans")

    return {
      success: true,
      data: result,
    }
  } catch (error) {
    console.error("Error creating lesson plan:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to create lesson plan",
    }
  }
}

export async function createTestLessonPlan() {
  try {
    const testPlan = {
      title: "Test Lesson Plan",
      subject: "Mathematics",
      grade_level: "Grade 1",
      topic: "Basic Addition",
      lesson_content: "This is a test lesson plan content.",
      learning_objectives: ["Students will learn basic addition", "Students will practice counting"],
      materials_needed: ["Counters", "Whiteboard"],
      duration_minutes: 45,
      created_by: "test-user-id",
    }

    const result = await createLessonPlan(testPlan)
    console.log("Test lesson plan created:", result)
    return result
  } catch (error) {
    console.error("Error creating test lesson plan:", error)
    return {
      success: false,
      error: "Failed to create test lesson plan",
    }
  }
}
