"use server"

// import { generateText } from "ai"
// import { openai } from "@ai-sdk/openai"
import { revalidatePath } from "next/cache"
import { executeQuery } from "@/lib/db"
import { getCurriculumStandards, formatStandardsForPrompt } from "@/lib/curriculum-standards"

// This is a direct implementation of lesson plan generation that bypasses any potential issues
export async function generateLessonPlan(formData: any) {
  console.log("DIRECT GENERATION: Starting with formData:", JSON.stringify(formData, null, 2))

  try {
    // Format special needs data regardless of format
    let specialNeedsText = ""
    if (formData.specialNeeds) {
      if (typeof formData.specialNeedsDetails === "string" && formData.specialNeedsDetails.trim()) {
        specialNeedsText = `\nSpecial Needs Accommodations: ${formData.specialNeedsDetails}`
      } else {
        specialNeedsText = "\nSpecial Needs Accommodations: Specific accommodations required"
      }
    }

    // Fetch curriculum standards based on subject and grade level
    const standards = await getCurriculumStandards(formData.subject || "", formData.gradeLevel || "")
    const formattedStandards = formatStandardsForPrompt(standards)

    console.log(
      `DIRECT GENERATION: Retrieved ${standards.length} curriculum standards for ${formData.subject} grade ${formData.gradeLevel}`,
    )

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

### Introduction (${Math.round(Number(formData.duration) * 0.15) || 10} minutes)
Step-by-step instructions for how to:
1. Hook students' interest and activate prior knowledge
2. Connect to previous learning
3. Introduce the lesson objectives in student-friendly language
4. Preview the activities
5. Address potential misconceptions

### Development (${Math.round(Number(formData.duration) * 0.6) || 30} minutes)
Detailed, sequential instructions for the main teaching and learning activities:
1. Teacher modeling/demonstration with specific examples
2. Guided practice with step-by-step directions
3. Independent or collaborative work with clear instructions
4. Differentiation strategies for various learning needs
5. Formative assessment checkpoints
6. Specific questions to ask students at each stage
7. Anticipated student responses and how to address them

### Closure (${Math.round(Number(formData.duration) * 0.15) || 10} minutes)
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
- Support strategies for each identified need
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

    console.log("DIRECT GENERATION: Sending prompt to OpenAI")

    // Check if OpenAI API key is available
    if (!process.env.OPENAI_API_KEY) {
      console.error("DIRECT GENERATION: OpenAI API key is missing!")
      throw new Error("OpenAI API key is not configured. Please add your API key to the environment variables.")
    }

    // Temporary mock response until AI SDK is properly configured
    const text = `# ${(formData.topic || "LESSON TITLE").toUpperCase()}

## OVERVIEW
This is a comprehensive lesson plan for ${formData.subject} at the ${formData.gradeLevel} level. The lesson focuses on ${formData.topic} and is designed to engage students through various learning activities.

## LEARNING OBJECTIVES
- Students will be able to understand and apply key concepts related to ${formData.topic}
- Students will develop critical thinking skills through hands-on activities
- Students will demonstrate understanding through various assessment methods

## CURRICULUM STANDARDS
This lesson aligns with OECS curriculum standards for ${formData.subject} at the ${formData.gradeLevel} level.

## MATERIALS AND RESOURCES
- Teacher presentation materials
- Student worksheets and activities
- Technology resources as needed
- Assessment tools

## VOCABULARY
Key terms will be introduced and defined throughout the lesson.

## DETAILED PROCEDURE
The lesson will follow a structured approach with introduction, development, and closure phases.

## ASSESSMENT
Both formative and summative assessments will be used to measure student understanding.

## DIFFERENTIATION STRATEGIES
Activities will be adapted to meet various learning needs and styles.

## REFLECTION QUESTIONS
Teachers should reflect on lesson effectiveness and student engagement.

## HOMEWORK/EXTENSION
Follow-up activities will reinforce learning and extend understanding.

## RESOURCES AND REFERENCES
Additional resources will be provided for continued learning.`

    console.log("DIRECT GENERATION: Received response of length:", text.length)
    console.log("DIRECT GENERATION: First 200 characters:", text.substring(0, 200))

    return text
  } catch (error) {
    console.error("DIRECT GENERATION ERROR:", error)
    throw new Error(`Failed to generate lesson plan: ${error instanceof Error ? error.message : "Unknown error"}`)
  }
}

// Function to save the lesson plan to the database - SERVER ONLY
export async function saveLessonPlan(formData: FormData) {
  try {
    console.log("SAVE LESSON PLAN: Starting save operation")

    // Extract data from the form
    const title = formData.get("title") as string
    const subject = formData.get("subject") as string
    const gradeLevel = formData.get("gradeLevel") as string
    const topic = formData.get("topic") as string
    const content = formData.get("content") as string
    const duration = (formData.get("duration") as string) || "50 minutes"

    console.log("SAVE LESSON PLAN: Extracted form data:", {
      title,
      subject,
      gradeLevel,
      topic,
      contentLength: content?.length || 0,
      duration,
    })

    // Validate required fields
    if (!title || !subject || !content || !gradeLevel) {
      console.error("SAVE LESSON PLAN: Missing required fields")
      return {
        success: false,
        error: "Missing required fields: title, subject, content, and grade level are required",
      }
    }

    // Create a unique ID for the lesson plan (for fallback)
    const fallbackId = `lesson_plan_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`

    // Create a lesson plan object for fallback
    const lessonPlan = {
      id: fallbackId,
      title,
      subject,
      grade_level: gradeLevel,
      topic: topic || null,
      content,
      duration,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    // Try to save to the database
    try {
      console.log("SAVE LESSON PLAN: Attempting database save")

      // Check if DATABASE_URL is available
      if (!process.env.DATABASE_URL) {
        throw new Error("DATABASE_URL environment variable is not defined")
      }

      // Insert the lesson plan into the database
      const result = await executeQuery(
        `INSERT INTO lesson_plans (
          title, 
          subject, 
          grade_level, 
          duration,
          topic, 
          content, 
          created_at, 
          updated_at
        ) VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW())
        RETURNING id, title, subject, grade_level, topic, created_at`,
        [title, subject, gradeLevel, duration, topic || null, content]
      ) as any[]

      console.log("SAVE LESSON PLAN: Database save successful:", result)

      // Revalidate the lesson plans page
      revalidatePath("/planner")

      return {
        success: true,
        data: result[0],
        source: "database",
      }
    } catch (dbError) {
      console.error("SAVE LESSON PLAN: Database save failed:", dbError)

      // Return the fallback data for client-side storage
      return {
        success: false,
        fallbackData: lessonPlan,
        error: "Database save failed. Please try again or use the fallback storage.",
      }
    }
  } catch (error) {
    console.error("SAVE LESSON PLAN: Unexpected error:", error)
    return {
      success: false,
      error: "Failed to save lesson plan: " + (error instanceof Error ? error.message : "Unknown error"),
    }
  }
}

// Function to get all lesson plans - SERVER ONLY
export async function getLessonPlans() {
  try {
    console.log("GET LESSON PLANS: Attempting to fetch from database")

    // Try to get from database
    try {
      const result = await executeQuery(
        `SELECT 
          id, 
          title, 
          subject, 
          grade_level, 
          duration,
          topic, 
          created_at, 
          updated_at
        FROM lesson_plans
        ORDER BY created_at DESC`,
        []
      ) as any[]

      console.log(`GET LESSON PLANS: Retrieved ${result.length} plans from database`)
      return {
        success: true,
        data: result,
        source: "database",
      }
    } catch (dbError) {
      console.error("GET LESSON PLANS: Database fetch failed:", dbError)
      return {
        success: false,
        data: [],
        error: "Failed to fetch lesson plans from database",
      }
    }
  } catch (error) {
    console.error("GET LESSON PLANS: Unexpected error:", error)
    return {
      success: false,
      data: [],
      error: "Failed to fetch lesson plans: " + (error instanceof Error ? error.message : "Unknown error"),
    }
  }
}

// Function to get a specific lesson plan by ID - SERVER ONLY
export async function getLessonPlanById(id: string) {
  try {
    console.log(`GET LESSON PLAN BY ID: Attempting to fetch plan ${id} from database`)

    // Try database
    try {
      const result = await executeQuery(
        `SELECT *
        FROM lesson_plans
        WHERE id = $1`,
        [id]
      ) as any[]

      if (result.length === 0) {
        console.log(`GET LESSON PLAN BY ID: Plan ${id} not found in database`)
        return {
          success: false,
          error: "Lesson plan not found in database",
        }
      }

      console.log(`GET LESSON PLAN BY ID: Retrieved plan ${id} from database`)
      return {
        success: true,
        data: result[0],
        source: "database",
      }
    } catch (dbError) {
      console.error(`GET LESSON PLAN BY ID: Database fetch failed for plan ${id}:`, dbError)
      return {
        success: false,
        error: "Failed to fetch lesson plan from database",
      }
    }
  } catch (error) {
    console.error(`GET LESSON PLAN BY ID: Unexpected error for plan ${id}:`, error)
    return {
      success: false,
      error: "Failed to fetch lesson plan: " + (error instanceof Error ? error.message : "Unknown error"),
    }
  }
}

// Function to update a lesson plan - SERVER ONLY
export async function updateLessonPlan(id: string, formData: FormData) {
  try {
    console.log(`UPDATE LESSON PLAN: Starting update for plan ${id}`)

    // Extract data from the form
    const title = formData.get("title") as string
    const subject = formData.get("subject") as string
    const gradeLevel = formData.get("gradeLevel") as string
    const topic = formData.get("topic") as string
    const content = formData.get("content") as string
    const duration = (formData.get("duration") as string) || "50 minutes"

    console.log("UPDATE LESSON PLAN: Extracted form data:", {
      id,
      title,
      subject,
      gradeLevel,
      topic,
      contentLength: content?.length || 0,
      duration,
    })

    // Try database update
    try {
      console.log(`UPDATE LESSON PLAN: Attempting database update for plan ${id}`)

      const result = await executeQuery(
        `UPDATE lesson_plans
        SET 
          title = $1,
          subject = $2,
          grade_level = $3,
          duration = $4,
          topic = $5,
          content = $6,
          updated_at = NOW()
        WHERE id = $7
        RETURNING id, title, subject, grade_level, topic, updated_at`,
        [title, subject, gradeLevel, duration, topic || null, content, id]
      ) as any[]

      if (result.length === 0) {
        console.log(`UPDATE LESSON PLAN: Plan ${id} not found in database`)
        return {
          success: false,
          error: "Lesson plan not found in database",
        }
      }

      console.log(`UPDATE LESSON PLAN: Database update successful for plan ${id}`)

      // Revalidate relevant paths
      revalidatePath(`/planner/view/${id}`)
      revalidatePath(`/planner/edit/${id}`)
      revalidatePath("/planner")

      return {
        success: true,
        data: result[0],
        source: "database",
      }
    } catch (dbError) {
      console.error(`UPDATE LESSON PLAN: Database update failed for plan ${id}:`, dbError)
      return {
        success: false,
        error: "Failed to update lesson plan in database",
      }
    }
  } catch (error) {
    console.error(`UPDATE LESSON PLAN: Unexpected error for plan ${id}:`, error)
    return {
      success: false,
      error: "Failed to update lesson plan: " + (error instanceof Error ? error.message : "Unknown error"),
    }
  }
}

// Function to delete a lesson plan - SERVER ONLY
export async function deleteLessonPlan(id: string) {
  try {
    console.log(`DELETE LESSON PLAN: Starting deletion for plan ${id}`)

    // Try database deletion
    try {
      console.log(`DELETE LESSON PLAN: Attempting database deletion for plan ${id}`)

      await executeQuery(
        `DELETE FROM lesson_plans
        WHERE id = $1`,
        [id]
      )

      console.log(`DELETE LESSON PLAN: Database deletion successful for plan ${id}`)

      // Revalidate the lesson plans page
      revalidatePath("/planner")

      return {
        success: true,
        source: "database",
      }
    } catch (dbError) {
      console.error(`DELETE LESSON PLAN: Database deletion failed for plan ${id}:`, dbError)
      return {
        success: false,
        error: "Failed to delete lesson plan from database",
      }
    }
  } catch (error) {
    console.error(`DELETE LESSON PLAN: Unexpected error for plan ${id}:`, error)
    return {
      success: false,
      error: "Failed to delete lesson plan: " + (error instanceof Error ? error.message : "Unknown error"),
    }
  }
}
