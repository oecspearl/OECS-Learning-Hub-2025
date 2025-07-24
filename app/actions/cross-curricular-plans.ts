"use server"

import { z } from "zod"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { getCurriculumStandards, formatStandardsForPrompt } from "@/lib/curriculum-standards"
import { db } from "@/lib/db"
import { crossCurricularPlans } from "../../db/schema"
import { eq, desc } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { supabaseAdmin } from "@/lib/db"

const crossCurricularPlanSchema = z.object({
  title: z.string().min(1, "Title is required"),
  theme: z.string().min(1, "Theme is required"),
  central_problem: z.string().min(1, "Central problem/project is required"),
  grade_range: z.string().min(1, "Grade range is required"),
  subjects: z.array(z.string()).min(2, "At least 2 subjects are required"),
  content: z.string().min(1, "Content is required"),
  overlapping_concepts: z.string().optional(),
  curriculum_objectives_mapping: z.string().optional(),
  assessment_rubric_requirements: z.string().optional(),
  resource_requirements: z.string().optional(),
  learning_objectives: z.array(z.string()),
  materials: z.array(z.string()),
  duration: z.string(),
  pedagogical_strategy: z.string().optional(),
  differentiation_strategies: z.string().optional(),
  assessment_approach: z.string().optional(),
  curriculum_standards: z.string().optional(),
  overview: z.string().optional(),
  vocabulary: z.array(z.object({ term: z.string(), definition: z.string(), example: z.string() })).optional(),
  homework: z.string().optional(),
  extensions: z.string().optional(),
  userId: z.string(),
})

export interface CrossCurricularPlan {
  id: string
  title: string
  theme: string
  central_problem: string
  grade_range: string
  content: string
  subjects: string
  overlapping_concepts: string | null
  curriculum_objectives_mapping: string | null
  assessment_rubric_requirements: string | null
  resource_requirements: string | null
  learning_objectives: string | null
  materials: string | null
  duration: string | null
  pedagogical_strategy: string | null
  differentiation_strategies: string | null
  assessment_approach: string | null
  curriculum_standards: string | null
  overview: string | null
  vocabulary: string | null
  homework: string | null
  extensions: string | null
  user_id: string
  created_at: string
  updated_at: string
}

export async function generateCrossCurricularPlan(formData: any) {
  try {
    console.log("Generating cross-curricular plan with data:", formData)

    // Format learning styles and multiple intelligences
    const learningStylesText = formData.learning_styles?.length
      ? `\nLearning Styles to Address: ${formData.learning_styles.join(", ")}`
      : ""
    const intelligencesText = formData.multiple_intelligences?.length
      ? `\nMultiple Intelligences to Address: ${formData.multiple_intelligences.join(", ")}`
      : ""

    // Format special needs and support
    const specialNeedsText = formData.special_needs
      ? `\nSpecial Needs Accommodations: ${formData.special_needs_details || "General accommodations required"}`
      : ""
    const ellSupportText = formData.ell_support ? "\nELL Support Strategies Required" : ""
    const giftedExtensionText = formData.gifted_extension ? "\nGifted & Talented Extensions Required" : ""

    // Format pedagogical and assessment strategies
    const pedagogicalText = formData.pedagogical_strategy
      ? `\nPedagogical Strategy: ${formData.pedagogical_strategy}`
      : ""
    const assessmentText = formData.assessment_strategy
      ? `\nAssessment Strategy: ${formData.assessment_strategy}`
      : ""
    const technologyText = formData.technology_integration ? "\nTechnology Integration Required" : ""

    // Get curriculum standards for the subjects and grade range
    let curriculumStandards = ""
    try {
      const gradeLevels = formData.grade_range.split("-").map((g: string) => g.trim())
      const standardsPromises = gradeLevels.map((grade: string) => 
        Promise.all(formData.subjects.map((subject: string) => 
          getCurriculumStandards(subject, grade)
        ))
      )
      const standardsResults = await Promise.all(standardsPromises)
      const allStandards = standardsResults.flat().flat()
      curriculumStandards = formatStandardsForPrompt(allStandards)
      console.log("Curriculum standards retrieved successfully for cross-curricular plan")
    } catch (error) {
      console.warn("Failed to retrieve curriculum standards for cross-curricular plan:", error)
      curriculumStandards = "Curriculum standards not available for this subject/grade combination."
    }

    const prompt = `
Create a comprehensive, detailed cross-curricular lesson plan for OECS (Organization of Eastern Caribbean States) teachers following this structured approach:

**PLANNING CONTEXT:**
Title: ${formData.title}
Theme: ${formData.theme}
Central Problem/Project: ${formData.central_problem}
Grade Range: ${formData.grade_range}
Subjects: ${formData.subjects.join(", ")}
Duration: ${formData.duration} minutes
Number of Sessions: ${formData.sessions}
${formData.overlapping_concepts ? `Overlapping Concepts: ${formData.overlapping_concepts}` : ""}
${formData.curriculum_objectives_mapping ? `Curriculum Objectives Mapping: ${formData.curriculum_objectives_mapping}` : ""}
${formData.assessment_rubric_requirements ? `Assessment Requirements: ${formData.assessment_rubric_requirements}` : ""}
${formData.resource_requirements ? `Resource Requirements: ${formData.resource_requirements}` : ""}
${learningStylesText}${intelligencesText}${specialNeedsText}${ellSupportText}${giftedExtensionText}${pedagogicalText}${assessmentText}${technologyText}
Additional Instructions: ${formData.additional_instructions || "None"}

Available Curriculum Standards:
${curriculumStandards}

**PLANNING METHODOLOGY:**
1. First, consult the relevant curriculum pages for each subject being integrated
2. Identify overlapping themes, concepts, or skills across subject areas
3. Design a central problem, project, or theme that authentically requires multiple disciplines
4. Map specific curriculum objectives from each subject to lesson activities
5. Create assessment rubrics that measure both individual subject learning and cross-curricular synthesis
6. Include differentiation strategies from the curriculum guides
7. Suggest resources and materials that support multiple subject areas

Format the lesson plan with the following detailed sections using Markdown formatting:

# ${formData.title.toUpperCase()}

## OVERVIEW
Provide a thorough description of the lesson and its importance in the curriculum. Explain how this lesson connects to previous and future learning. Include the pedagogical approach being used and why it's appropriate for this content.

## LEARNING OBJECTIVES
List 3-5 specific, measurable learning objectives that clearly state what students will know or be able to do by the end of the lesson. Format as:
- Students will be able to [action verb] [specific knowledge/skill] by [measurement criteria].
- Students will understand [concept] as demonstrated by [observable behavior].
- Students will develop [skill] through [specific activity].

## CURRICULUM STANDARDS ALIGNMENT
IMPORTANT: Include a dedicated section listing the specific curriculum standards that this cross-curricular lesson addresses. For each subject area, select the most relevant standards from the provided list and explain how the lesson activities align with each standard. Show explicit connections between standards across subjects.

## CROSS-CURRICULAR CONNECTIONS
Explain how the subjects naturally connect through the theme, identifying shared concepts, skills, and processes.

## MULTIPLE INTELLIGENCE & LEARNING STYLE INTEGRATION
Detail specific activities and approaches for each selected learning style and intelligence type, ensuring authentic integration.

## DETAILED LESSON STRUCTURE

### Session 1: [Title]
**Opening/Hook (X minutes):**
- Engaging activity that introduces the theme
- Connects to students' prior knowledge
- Activates multiple subject areas

**Main Activities (X minutes each):**
1. [Activity Name] - [Primary Subject Focus]
   - Clear connection to theme
   - Integration points with other subjects
   - Specific instructions
   - Materials needed
   - Differentiation strategies

2. [Activity Name] - [Cross-Curricular Integration]
   - Seamless transition between subjects
   - Authentic application of skills
   - Collaborative/individual options
   - Assessment checkpoints

3. [Activity Name] - [Synthesis & Application]
   - Bringing subjects together
   - Real-world application
   - Student choice opportunities
   - Technology integration (if specified)

**Closure/Reflection (X minutes):**
- Synthesis of learning
- Connection to theme
- Preview of next session
- Metacognitive reflection

## DIFFERENTIATION & ACCOMMODATION STRATEGIES
${specialNeedsText ? `
### Special Needs Accommodations
- Specific modifications for identified needs
- Alternative assessment options
- Modified materials and instructions
- Additional support strategies
- Assistive technology recommendations
` : ""}

${ellSupportText ? `
### English Language Learner Support
- Visual supports and graphic organizers
- Simplified language without reducing complexity
- Peer support structures
- Multiple ways to demonstrate understanding
- Cultural bridge-building activities
` : ""}

${giftedExtensionText ? `
### Gifted & Talented Extensions
- Advanced research opportunities
- Leadership roles in group activities
- Independent study options
- Mentorship opportunities
- Creative expression challenges
- Cross-curricular project extensions
` : ""}

## ASSESSMENT INTEGRATION
${assessmentText ? `
### Formative Assessment Strategies
- Observation checklists
- Exit tickets
- Peer feedback protocols
- Self-assessment rubrics

### Summative Assessment Options
- Performance-based tasks
- Portfolio compilation
- Authentic assessment
- Student choice in demonstration
` : ""}

${formData.assessment_rubric_requirements ? `
### Assessment Rubric Requirements
${formData.assessment_rubric_requirements}

**Individual Subject Assessment:**
- Specific criteria for each subject area
- Measurable learning outcomes
- Clear performance indicators

**Cross-Curricular Synthesis Assessment:**
- Integration quality evaluation
- Connection demonstration
- Application across disciplines
- Collaborative learning assessment
` : ""}

## MATERIALS & RESOURCES
${formData.resource_requirements ? `
### Resource Requirements
${formData.resource_requirements}
` : ""}

**Physical Materials:**
- Materials supporting multiple subject areas
- Manipulatives and hands-on resources
- Art supplies and creative materials

**Digital Resources:**
- Technology tools for cross-curricular exploration
- Online databases and research materials
- Digital creation and presentation tools

**Human Resources:**
- Guest speakers from relevant fields
- Community connections and partnerships
- Family engagement opportunities
- Peer collaboration structures

## EXTENSION & HOMEWORK
- Activities reinforcing cross-curricular connections
- Family engagement opportunities
- Community exploration projects
- Reflection journals

## REFLECTION & NEXT STEPS
### Teacher Reflection Prompts
- What cross-curricular connections were most successful?
- How effectively were different learning styles addressed?
- What accommodations worked best?
- How can integration be strengthened?

### Student Reflection Questions
- How did learning in multiple subjects help understanding?
- Which activities best matched learning style?
- What connections were discovered between subjects?
- How can this learning be applied elsewhere?

Ensure the lesson plan follows OECS curriculum standards and best teaching practices. Make the plan practical, detailed, and immediately usable by teachers with minimal additional preparation.
`

    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt,
      temperature: 0.7,
      maxTokens: 4000,
    })

    return text
  } catch (error) {
    console.error("Error generating cross-curricular plan:", error)
    throw new Error("Failed to generate cross-curricular plan")
  }
}

export async function saveCrossCurricularPlan(formData: any) {
  try {
    console.log("Starting saveCrossCurricularPlan function")

    // Get the current user session
    let userId = "1" // fallback
    if (supabaseAdmin) {
      try {
        const { data: { session }, error } = await supabaseAdmin.auth.getSession()
        if (error) {
          console.error("Error getting session:", error)
        } else if (session?.user?.id) {
          userId = session.user.id
          console.log("Using authenticated user ID:", userId)
        } else {
          console.log("No authenticated session found, using fallback user ID")
        }
      } catch (sessionError) {
        console.error("Error accessing auth session:", sessionError)
      }
    }

    // Check if we're dealing with FormData or a regular object
    const id = formData.get ? formData.get("id") : formData.id
    const title = formData.get ? formData.get("title") : formData.title
    const theme = formData.get ? formData.get("theme") : formData.theme
    const central_problem = formData.get ? formData.get("central_problem") : formData.central_problem
    const grade_range = formData.get ? formData.get("grade_range") : formData.grade_range
    const subjects = formData.get ? formData.get("subjects") : formData.subjects
    const content = formData.get ? formData.get("content") : formData.content
    const overlapping_concepts = formData.get ? formData.get("overlapping_concepts") : formData.overlapping_concepts
    const curriculum_objectives_mapping = formData.get ? formData.get("curriculum_objectives_mapping") : formData.curriculum_objectives_mapping
    const assessment_rubric_requirements = formData.get ? formData.get("assessment_rubric_requirements") : formData.assessment_rubric_requirements
    const resource_requirements = formData.get ? formData.get("resource_requirements") : formData.resource_requirements
    const duration = formData.get ? formData.get("duration") || "Multiple class periods" : formData.duration || "Multiple class periods"
    const sessions = formData.get ? formData.get("sessions") || "1" : formData.sessions || "1"

    console.log("Extracted form data:", {
      title,
      theme,
      grade_range,
      subjects,
      duration,
      sessions,
      contentLength: content ? content.length : 0,
      userId,
    })

    // Validate required fields
    const missingFields = []
    if (!title) missingFields.push("title")
    if (!theme) missingFields.push("theme")
    if (!central_problem) missingFields.push("central problem/project")
    if (!grade_range) missingFields.push("grade range")
    if (!subjects) missingFields.push("subjects")
    if (!content) missingFields.push("content")

    if (missingFields.length > 0) {
      console.error("Missing required fields:", missingFields)
      return {
        success: false,
        error: `Missing required fields: ${missingFields.join(", ")} ${missingFields.length > 1 ? "are" : "is"} required`,
      }
    }

    // Create a fallback object to return if database operations fail
    const fallbackData = {
      title,
      theme,
      grade_range,
      subjects: Array.isArray(subjects) ? subjects.join(",") : subjects,
      content,
      duration,
      sessions,
      user_id: userId,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    // Store the plan in the database
    try {
      const now = new Date().toISOString()
      
      // Prepare the data object with only the fields that exist in the database
      const planData: any = {
        title,
        theme,
        description: central_problem || 'Integrated learning experience across multiple subjects',
        grade_range,
        subjects_included: Array.isArray(subjects) ? subjects : (typeof subjects === 'string' ? subjects.split(',') : []),
        plan_content: content,
        duration_days: parseInt(duration) || 1,
        updated_at: now,
      }

      // Only include created_by if we have a valid authenticated user
      if (userId !== "1") {
        planData.created_by = userId
      }

      // Add optional fields only if they exist in the form data
      if (overlapping_concepts) planData.subject_connections = JSON.stringify({ overlapping_concepts: overlapping_concepts })
      if (curriculum_objectives_mapping) planData.learning_objectives = [curriculum_objectives_mapping]
      if (assessment_rubric_requirements) planData.assessment_strategies = [assessment_rubric_requirements]
      if (resource_requirements) planData.materials_needed = [resource_requirements]
      
      // Handle learning styles and multiple intelligences as tags
      const tags = []
      
      if (formData.get ? formData.get("learning_styles") : formData.learning_styles) {
        const learningStyles = formData.get ? formData.get("learning_styles") : formData.learning_styles
        if (Array.isArray(learningStyles)) {
          tags.push(...learningStyles)
        } else {
          tags.push(learningStyles)
        }
      }
      
      if (formData.get ? formData.get("multiple_intelligences") : formData.multiple_intelligences) {
        const intelligences = formData.get ? formData.get("multiple_intelligences") : formData.multiple_intelligences
        if (Array.isArray(intelligences)) {
          tags.push(...intelligences)
        } else {
          tags.push(intelligences)
        }
      }
      
      // Handle special needs and support as tags
      if (formData.get ? formData.get("special_needs") : formData.special_needs) {
        const specialNeeds = formData.get ? formData.get("special_needs") === "true" : formData.special_needs
        if (specialNeeds) {
          tags.push("special_needs_accommodations")
        }
      }
      
      if (formData.get ? formData.get("ell_support") : formData.ell_support) {
        const ellSupport = formData.get ? formData.get("ell_support") === "true" : formData.ell_support
        if (ellSupport) {
          tags.push("ell_support")
        }
      }
      
      if (formData.get ? formData.get("gifted_extension") : formData.gifted_extension) {
        const giftedExtension = formData.get ? formData.get("gifted_extension") === "true" : formData.gifted_extension
        if (giftedExtension) {
          tags.push("gifted_extension")
        }
      }
      
      if (formData.get ? formData.get("technology_integration") : formData.technology_integration) {
        const techIntegration = formData.get ? formData.get("technology_integration") === "true" : formData.technology_integration
        if (techIntegration) {
          tags.push("technology_integration")
        }
      }
      
      if (tags.length > 0) {
        planData.tags = tags
      }
      
      // Handle pedagogical and assessment strategies
      const assessmentStrategies = []
      
      if (formData.get ? formData.get("pedagogical_strategy") : formData.pedagogical_strategy) {
        const pedagogicalStrategy = formData.get ? formData.get("pedagogical_strategy") : formData.pedagogical_strategy
        assessmentStrategies.push(pedagogicalStrategy)
      }
      
      if (formData.get ? formData.get("assessment_strategy") : formData.assessment_strategy) {
        const assessmentStrategy = formData.get ? formData.get("assessment_strategy") : formData.assessment_strategy
        assessmentStrategies.push(assessmentStrategy)
      }
      
      if (assessmentStrategies.length > 0) {
        // If assessment_strategies already exists, merge them
        if (planData.assessment_strategies) {
          planData.assessment_strategies = [...planData.assessment_strategies, ...assessmentStrategies]
        } else {
          planData.assessment_strategies = assessmentStrategies
        }
      }
      
      // Handle additional instructions as part of the plan content
      if (formData.get ? formData.get("additional_instructions") : formData.additional_instructions) {
        const additionalInstructions = formData.get ? formData.get("additional_instructions") : formData.additional_instructions
        if (additionalInstructions) {
          planData.plan_content = `${content}\n\nAdditional Instructions:\n${additionalInstructions}`
        }
      }
      
      if (id) {
        // Update existing plan
        console.log("Updating existing cross-curricular plan with ID:", id)
        const updatedPlan = await db.crossCurricularPlans.update(id, planData)

        console.log("Update successful")
        return { success: true, data: updatedPlan }
      } else {
        // Create new plan
        console.log("Creating new cross-curricular plan")
        const createData = {
          ...planData,
          created_at: now,
        }
        const newPlan = await db.crossCurricularPlans.create(createData)

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
    console.error("Error saving cross-curricular plan:", error)
    return {
      success: false,
      error: "Failed to save cross-curricular plan",
    }
  }
}

export async function getCrossCurricularPlanById(id: string) {
  try {
    const plan = await db.crossCurricularPlans.findFirst({ id })

    if (!plan) {
      return null
    }

    return {
      id: plan.id,
      title: plan.title,
      theme: plan.theme,
      description: plan.description,
      grade_range: plan.grade_range,
      content: plan.plan_content, // Map plan_content to content
      subjects: plan.subjects_included, // Map subjects_included to subjects
      sessions: plan.sessions || "1",
      learning_styles: plan.learning_styles,
      multiple_intelligences: plan.multiple_intelligences,
      special_needs: plan.special_needs,
      special_needs_details: plan.special_needs_details,
      ell_support: plan.ell_support,
      gifted_extension: plan.gifted_extension,
      pedagogical_strategy: plan.pedagogical_strategy,
      assessment_strategy: plan.assessment_strategy,
      technology_integration: plan.technology_integration,
      additional_instructions: plan.additional_instructions,
      user_id: plan.created_by, // Map created_by to user_id
      created_at: plan.created_at,
      updated_at: plan.updated_at,
    }
  } catch (error) {
    console.error("Error fetching cross-curricular plan:", error)
    return null
  }
}

export async function getCrossCurricularPlans() {
  try {
    const plans = await db.crossCurricularPlans.findMany()

    return {
      success: true,
      data: plans || [],
    }
  } catch (error) {
    console.error("Error fetching cross-curricular plans:", error)
    return {
      success: false,
      error: "Failed to fetch cross-curricular plans",
    }
  }
}

export async function deleteCrossCurricularPlan(id: string) {
  try {
    await db.crossCurricularPlans.delete(id)

    return {
      success: true,
    }
  } catch (error) {
    console.error("Error deleting cross-curricular plan:", error)
    return {
      success: false,
      error: "Failed to delete cross-curricular plan",
    }
  }
} 