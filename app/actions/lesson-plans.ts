"use server"

import { z } from "zod"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { getCurriculumStandards, formatStandardsForPrompt } from "@/lib/curriculum-standards"
import { db } from "@/lib/db"
import { lessonPlans as lessonPlansTable } from "../../db/schema"
import { eq, desc } from "drizzle-orm"
import { revalidatePath } from "next/cache"

type Message = {
  role: "user" | "assistant"
  content: string
}

const lessonPlanSchema = z.object({
  title: z.string().min(1, "Title is required"),
  subject: z.string().min(1, "Subject is required"),
  grade: z.string().min(1, "Grade is required"),
  topic: z.string().optional(),
  content: z.string().min(1, "Content is required"),
  objectives: z.array(z.string()),
  materials: z.array(z.string()),
  duration: z.number().min(1, "Duration must be at least 1 minute"),
  overview: z.string().optional(),
  standards: z.string().optional(),
  vocabulary: z.array(z.object({ term: z.string(), definition: z.string(), example: z.string() })).optional(),
  homework: z.string().optional(),
  extensions: z.string().optional(),
  userId: z.string(),
})

export interface LessonPlan {
  id: string
  title: string
  subject: string
  grade: string
  topic: string | null
  content: string
  duration: string | null
  materials: string | null
  pedagogical_strategy: string | null
  differentiation_strategies: string | null
  grouping_strategy: string | null
  assessment_approach: string | null
  curriculum_standards: string | null
  overview: string | null
  objectives: string | null
  vocabulary: string | null
  homework: string | null
  extensions: string | null
  standards: string | null
  userId: string
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

      // No special needs
      return ""
    })()

    // Fetch curriculum standards based on subject and grade level
    const standards = await getCurriculumStandards(formData.subject || "", formData.gradeLevel || "")
    const formattedStandards = formatStandardsForPrompt(standards)

    // Validate that we have standards
    if (!standards || standards.length === 0) {
      console.warn(`No standards found for ${formData.subject} grade ${formData.gradeLevel}`)
      throw new Error("Unable to generate lesson plan: No curriculum standards found for the specified subject and grade level.")
    }

    console.log(
      `Retrieved ${standards.length} curriculum standards for ${formData.subject} grade ${formData.gradeLevel}`,
    )

    // Extract learning objectives for standards alignment
    const learningObjectives = formData.learningOutcomes || ""
    const objectivesList = learningObjectives.split(/[.,]/).filter((obj: string) => obj.trim().length > 0)

    // Create a more specific prompt for standards selection
    const standardsSelectionPrompt = `
When selecting standards for this lesson plan:
1. Choose standards that directly align with the learning objectives
2. Prioritize standards that cover the main concepts and skills
3. Include at least 2-3 standards that support the lesson's core content
4. Ensure the selected standards are appropriate for the grade level
5. Consider both content and skill-based standards

Learning Objectives to align with:
${objectivesList.map((obj: string) => `- ${obj.trim()}`).join('\n')}

Available Standards:
${formattedStandards}
`

    const prompt = `
Create a comprehensive, detailed lesson plan for OECS (Organization of Eastern Caribbean States) teachers with the following information:

Subject: ${formData.subject || ""}
Grade Level: ${formData.gradeLevel || ""}
Topic: ${formData.topic || ""}
Duration: ${formData.duration || ""} minutes
Learning Objectives: ${formData.learningOutcomes || ""}
Learning Styles: ${formData.learningStyles || ""}
Materials Needed: ${formData.materials || ""}
Prerequisite Skills: ${formData.prerequisiteSkills || ""}
Pedagogical Strategy: ${formData.pedagogicalStrategy || ""}
Additional Notes: ${formData.additionalInstructions || "None"}${specialNeedsText}

Format the lesson plan with the following detailed sections using Markdown formatting:

# ${(formData.topic || "LESSON TITLE").toUpperCase()}

## OVERVIEW
Provide a thorough description of the lesson and its importance in the curriculum. Explain how this lesson connects to previous and future learning. Include the pedagogical approach being used and why it's appropriate for this content.

## LEARNING OBJECTIVES
List 3-5 specific, measurable learning objectives that clearly state what students will know or be able to do by the end of the lesson. Format as:
- Students will be able to [action verb] [specific knowledge/skill] by [measurement criteria].
- Students will understand [concept] as demonstrated by [observable behavior].
- Students will develop [skill] through [specific activity].

## CURRICULUM STANDARDS
${standardsSelectionPrompt}

## MATERIALS AND RESOURCES
Provide a detailed list of all materials needed, including:
- Teacher resources (presentations, reference materials, technology)
- Student materials (worksheets, manipulatives, technology)
- Preparation instructions (what needs to be set up before class)
- Links to any digital resources or references (if applicable)

## VOCABULARY
List and define 5-8 key terms that students need to understand for this lesson.

## DETAILED PROCEDURE

### Before the Lesson (Preparation)
Detailed instructions for teacher preparation, including:
1. Room arrangement
2. Materials organization
3. Technology setup
4. Anticipation of potential challenges

### Introduction (${Math.round(formData.duration * 0.15) || 10} minutes)
Step-by-step instructions for how to:
1. Hook students' interest and activate prior knowledge
2. Connect to previous learning
3. Introduce the lesson objectives in student-friendly language
4. Preview the activities
5. Address potential misconceptions

### Development (${Math.round(formData.duration * 0.6) || 30} minutes)
Detailed, sequential instructions for the main teaching and learning activities:
1. Teacher modeling/demonstration with specific examples
2. Guided practice with step-by-step directions
3. Independent or collaborative work with clear instructions
4. Differentiation strategies for various learning needs
5. Formative assessment checkpoints
6. Specific questions to ask students at each stage
7. Anticipated student responses and how to address them

### Closure (${Math.round(formData.duration * 0.15) || 10} minutes)
Specific steps for concluding the lesson:
1. Summarizing key points (include specific summarizing strategies)
2. Checking for understanding with concrete examples
3. Connecting to future learning
4. Exit ticket or final assessment details

## ASSESSMENT
Detailed description of both formative and summative assessment strategies:
- Formative: Specific questions, observation criteria, and check-in points during the lesson
- Summative: Detailed description of final assessment with scoring criteria or rubric
- Sample answers or exemplars to guide evaluation

## DIFFERENTIATION STRATEGIES
Specific modifications for different learning needs:
- For advanced learners: Extension activities with detailed instructions
- For struggling learners: Scaffolding techniques and simplified approaches
- For different learning styles: Alternative approaches based on the learning styles mentioned

## PEDAGOGICAL RATIONALE
Explanation of why specific teaching strategies were chosen and how they support the learning objectives. Include research-based justifications where appropriate.

${
  specialNeedsText
    ? `
## SPECIAL NEEDS ACCOMMODATIONS
Detailed accommodations for students with special needs, including:
- Specific modifications to materials
- Adjusted expectations or assessment criteria
- Alternative presentation methods
- Support strategies for each identified need (${
        Array.isArray(formData.specialNeeds)
          ? formData.specialNeeds.join(", ")
          : formData.specialNeedsDetails || "various needs"
      })
- Implementation tips for inclusive teaching`
    : ""
}

## REFLECTION QUESTIONS
Questions for the teacher to consider after teaching the lesson:
1. What went well in this lesson?
2. What challenges did students face?
3. How effective were the teaching strategies?
4. What adjustments would improve this lesson next time?

## HOMEWORK/EXTENSION
Detailed description of follow-up activities:
- Specific homework assignment with clear instructions
- Extension activities for continued learning
- Family engagement opportunities

## RESOURCES AND REFERENCES
List of additional resources for both teachers and students:
- Books, websites, videos
- Additional practice materials
- Background information sources

Ensure the lesson plan follows OECS curriculum standards and best teaching practices. Make the plan practical, detailed, and immediately usable by teachers with minimal additional preparation.
`

    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt,
      temperature: 0.7,
      maxTokens: 4000, // Increased token limit for more detailed plans
    })

    // At the end of the function, before returning:
    console.log("Generated lesson plan length:", text.length)
    console.log("First 200 characters:", text.substring(0, 200))

    return text
  } catch (error) {
    console.error("Error generating lesson plan:", error)
    throw new Error("Failed to generate lesson plan")
  }
}

export async function generateLessonPlanFromChat(messages: Message[]) {
  try {
    const formattedHistory = messages
      .map((msg) => {
        return `${msg.role === "user" ? "User" : "Pearl"}: ${msg.content}`
      })
      .join("\n\n")

    // Extract potential subject and grade level from the conversation
    let subject = ""
    let gradeLevel = ""

    // Simple extraction logic - can be improved
    for (const msg of messages) {
      const content = msg.content.toLowerCase()

      // Try to extract subject
      if (content.includes("mathematics") || content.includes("math")) {
        subject = "mathematics"
      } else if (content.includes("science")) {
        subject = "science"
      } else if (content.includes("language arts") || content.includes("english")) {
        subject = "english"
      } else if (content.includes("social studies")) {
        subject = "socialstudies"
      }

      // Try to extract grade level
      const gradeMatch = content.match(/grade (\d+)/i) || content.match(/grade(\d+)/i)
      if (gradeMatch && gradeMatch[1]) {
        gradeLevel = gradeMatch[1]
      }
    }

    // Fetch curriculum standards if we have enough information
    let formattedStandards = "Use general educational standards appropriate for the subject and grade level."
    if (subject && gradeLevel) {
      const standards = await getCurriculumStandards(subject, gradeLevel)
      formattedStandards = formatStandardsForPrompt(standards)
    }

    const prompt = `
You are Pearl, an AI teaching assistant for OECS (Organization of Eastern Caribbean States) teachers.
You will generate a detailed, pedagogically sound lesson plan based on the conversation history.

Here is the conversation history:
${formattedHistory}

Based on the conversation, create a comprehensive lesson plan with the following detailed sections using Markdown formatting:

# LESSON TITLE

## OVERVIEW
Provide a thorough description of the lesson and its importance in the curriculum. Explain how this lesson connects to previous and future learning. Include the pedagogical approach being used and why it's appropriate for this content.

## LEARNING OBJECTIVES
List 3-5 specific, measurable learning objectives that clearly state what students will know or be able to do by the end of the lesson. Format as:
- Students will be able to [action verb] [specific knowledge/skill] by [measurement criteria].
- Students will understand [concept] as demonstrated by [observable behavior].
- Students will develop [skill] through [specific activity].

## CURRICULUM STANDARDS
${formattedStandards}

Select the most relevant standards from the list above that align with this lesson's objectives and content. If additional standards are needed, you may include general educational standards appropriate for the subject and grade level.

## MATERIALS AND RESOURCES
Provide a detailed list of all materials needed, including:
- Teacher resources (presentations, reference materials, technology)
- Student materials (worksheets, manipulatives, technology)
- Preparation instructions (what needs to be set up before class)
- Links to any digital resources or references (if applicable)

## VOCABULARY
List and define 5-8 key terms that students need to understand for this lesson.

## DETAILED PROCEDURE

### Before the Lesson (Preparation)
Detailed instructions for teacher preparation, including:
1. Room arrangement
2. Materials organization
3. Technology setup
4. Anticipation of potential challenges

### Introduction (10 minutes)
Step-by-step instructions for how to:
1. Hook students' interest and activate prior knowledge
2. Connect to previous learning
3. Introduce the lesson objectives in student-friendly language
4. Preview the activities
5. Address potential misconceptions

### Development (30 minutes)
Detailed, sequential instructions for the main teaching and learning activities:
1. Teacher modeling/demonstration with specific examples
2. Guided practice with step-by-step directions
3. Independent or collaborative work with clear instructions
4. Differentiation strategies for various learning needs
5. Formative assessment checkpoints
6. Specific questions to ask students at each stage
7. Anticipated student responses and how to address them

### Closure (10 minutes)
Specific steps for concluding the lesson:
1. Summarizing key points (include specific summarizing strategies)
2. Checking for understanding with concrete examples
3. Connecting to future learning
4. Exit ticket or final assessment details

## ASSESSMENT
Detailed description of both formative and summative assessment strategies:
- Formative: Specific questions, observation criteria, and check-in points during the lesson
- Summative: Detailed description of final assessment with scoring criteria or rubric
- Sample answers or exemplars to guide evaluation

## DIFFERENTIATION STRATEGIES
Specific modifications for different learning needs:
- For advanced learners: Extension activities with detailed instructions
- For struggling learners: Scaffolding techniques and simplified approaches
- For different learning styles: Alternative approaches based on the learning styles mentioned

## PEDAGOGICAL RATIONALE
Explanation of why specific teaching strategies were chosen and how they support the learning objectives. Include research-based justifications where appropriate.

## REFLECTION QUESTIONS
Questions for the teacher to consider after teaching the lesson:
1. What went well in this lesson?
2. What challenges did students face?
3. How effective were the teaching strategies?
4. What adjustments would improve this lesson next time?

## HOMEWORK/EXTENSION
Detailed description of follow-up activities:
- Specific homework assignment with clear instructions
- Extension activities for continued learning
- Family engagement opportunities

## RESOURCES AND REFERENCES
List of additional resources for both teachers and students:
- Books, websites, videos
- Additional practice materials
- Background information sources

Ensure the lesson plan follows OECS curriculum standards and best teaching practices. Make the plan practical, detailed, and immediately usable by teachers with minimal additional preparation.
`

    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt,
      temperature: 0.7,
      maxTokens: 4000, // Increased token limit for more detailed plans
    })

    return {
      title: "Generated Lesson Plan",
      subject: "Various",
      grade: "Various",
      duration: "Various",
      objectives: [],
      materials: [],
      procedure: [],
      assessment: "",
      extensions: "",
      content: text,
    }
  } catch (error) {
    console.error("Error generating lesson plan from chat:", error)
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
    const grade = formData.get ? formData.get("gradeLevel") : formData.gradeLevel
    const topic = formData.get ? formData.get("topic") : formData.topic
    const content = formData.get ? formData.get("content") : formData.content
    const duration = formData.get ? formData.get("duration") || "50 minutes" : formData.duration || "50 minutes"
    const userId = formData.get ? formData.get("userId") : formData.userId || "1" // Default to "1" if not provided

    console.log("Extracted form data:", {
      title,
      subject,
      grade,
      topic,
      duration,
      contentLength: content ? content.length : 0,
      userId,
    })

    // Validate required fields
    const missingFields = []
    if (!title) missingFields.push("title")
    if (!subject) missingFields.push("subject")
    if (!content) missingFields.push("content")
    if (!grade) missingFields.push("grade level")

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
      grade: grade || "Not specified",
      duration: duration,
      topic: topic || null,
      content,
      user_id: userId,
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
          grade,
          duration,
          topic,
          content,
          user_id: userId,
          updated_at: now,
        })

        console.log("Update successful")
        return { success: true, data: updatedPlan }
      } else {
        // Create new lesson plan
        console.log("Creating new lesson plan")
        const newPlan = await db.lessonPlans.create({
          id: fallbackId, // Generate a unique ID
          title,
          subject,
          grade,
          duration,
          topic,
          content,
          user_id: userId,
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
        grade: data.grade,
        topic: data.topic || null,
        content: data.content,
        duration: data.duration?.toString() || "50",
        objectives: data.objectives ? JSON.stringify(data.objectives) : null,
        materials: data.materials ? JSON.stringify(data.materials) : null,
        overview: data.overview || null,
        standards: data.standards || null,
        vocabulary: data.vocabulary ? JSON.stringify(data.vocabulary) : null,
        homework: data.homework || null,
        extensions: data.extensions || null,
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
      grade: plan.grade,
      topic: plan.topic ?? null,
      content: plan.content,
      duration: plan.duration ?? null,
      materials: plan.materials ?? null,
      pedagogical_strategy: plan.pedagogical_strategy ?? null,
      differentiation_strategies: plan.differentiation_strategies ?? null,
      grouping_strategy: plan.grouping_strategy ?? null,
      assessment_approach: plan.assessment_approach ?? null,
      curriculum_standards: plan.curriculum_standards ?? null,
      overview: plan.overview ?? null,
      objectives: plan.objectives ?? null,
      vocabulary: plan.vocabulary ?? null,
      homework: plan.homework ?? null,
      extensions: plan.extensions ?? null,
      standards: plan.standards ?? null,
      created_at: plan.created_at,
      updated_at: plan.updated_at,
    }
  } catch (error) {
    console.error("Error fetching lesson plan:", error)
    return null
  }
}

export async function getLessonPlans() {
  try {
    console.log("GET LESSON PLANS: Starting to fetch lesson plans")
    const plans = await db.lessonPlans.findMany()

    console.log("GET LESSON PLANS: Retrieved plans:", plans)

    return {
      success: true,
      data: plans || [],
    }
  } catch (error) {
    console.error("GET LESSON PLANS: Error fetching lesson plans:", error)
    return {
      success: false,
      error: "Failed to fetch lesson plans",
    }
  }
}

export async function createLessonPlan(data: z.infer<typeof lessonPlanSchema>) {
  try {
    // Validate input data
    const validatedData = lessonPlanSchema.parse(data)

    // Create new lesson plan
    const plan = await db.lessonPlans.create({
      id: `lesson_plan_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      title: validatedData.title,
      subject: validatedData.subject,
      grade: validatedData.grade,
      content: validatedData.content,
      objectives: JSON.stringify(validatedData.objectives),
      materials: JSON.stringify(validatedData.materials),
      duration: validatedData.duration.toString(),
      user_id: validatedData.userId,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })

    return {
      success: true,
      data: plan,
    }
  } catch (error) {
    console.error("Error creating lesson plan:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.errors[0].message,
      }
    }

    return {
      success: false,
      error: "Failed to create lesson plan",
    }
  }
}

export async function createTestLessonPlan() {
  try {
    console.log("Creating test lesson plan...")
    const testPlan = {
      id: `lesson_plan_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      title: "Test Lesson Plan",
      subject: "Mathematics",
      grade: "Grade 5",
      topic: "Basic Algebra",
      content: "This is a test lesson plan",
      duration: "45",
      materials: null,
      pedagogical_strategy: null,
      differentiation_strategies: null,
      grouping_strategy: null,
      assessment_approach: null,
      curriculum_standards: null,
      overview: null,
      objectives: null,
      vocabulary: null,
      homework: null,
      extensions: null,
      standards: null,
      user_id: "1",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    const result = await db.lessonPlans.create(testPlan)

    console.log("Test lesson plan created:", result)
    return {
      success: true,
      data: result,
    }
  } catch (error) {
    console.error("Error creating test lesson plan:", error)
    return {
      success: false,
      error: "Failed to create test lesson plan",
    }
  }
}
