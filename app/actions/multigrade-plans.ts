"use server"

import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { revalidatePath } from "next/cache"
import { db } from "@/lib/db"
import { getCurriculumStandards, formatStandardsForPrompt } from "@/lib/curriculum-standards"
import { supabase } from '@/lib/supabase'

// Function to get the current authenticated user from Supabase
async function getCurrentUser() {
  try {
    const { data: { user }, error } = await supabase.auth.getUser()
    
    console.log("GET CURRENT USER: Supabase auth result:", {
      hasUser: !!user,
      userId: user?.id,
      userEmail: user?.email,
      userRole: user?.user_metadata?.role,
      error: error?.message
    })
    
    if (error) {
      console.error("GET CURRENT USER: Supabase auth error:", error)
      throw new Error(`Authentication error: ${error.message}`)
    }
    
    if (!user) {
      throw new Error("No authenticated user found - please log in")
    }
    
    console.log("GET CURRENT USER: Found authenticated user:", {
      id: user.id,
      email: user.email,
      role: user.user_metadata?.role
    })
    
    return user.id
  } catch (error) {
    console.error("GET CURRENT USER: Error getting authenticated user:", error)
    
    // Provide more specific error messages
    if (error instanceof Error) {
      if (error.message.includes("JWT")) {
        throw new Error("Session expired - please log in again")
      }
      if (error.message.includes("refresh_token_not_found")) {
        throw new Error("Authentication session invalid - please log in again")
      }
    }
    
    throw new Error("Authentication required to save lesson plans")
  }
}

export interface MultigradePlanFormData {
  id?: string;
  title?: string;
  subject: string;
  gradeRange: string;
  topic: string;
  content?: string;
  duration?: string;
  materials?: string;
  pedagogicalStrategy?: string;
  differentiationStrategies?: string | string[];
  groupingStrategy?: string;
  assessmentApproach?: string;
  learningOutcomes?: string;
  specialNeeds?: boolean;
  specialNeedsDetails?: string;
  additionalInstructions?: string;
}

interface MultigradePlan {
  id: string
  title: string
  description?: string | null
  subject: string
  grade_range: string
  topic: string | null
  duration_minutes?: number | null
  learning_objectives_by_grade?: string | null
  materials_needed?: string | null
  vocabulary_terms?: string | null
  lesson_content: string
  differentiation_by_grade?: string | null
  assessment_by_grade?: string | null
  grouping_strategies?: string | null
  management_strategies?: string | null
  tags?: string | null
  is_public?: boolean
  created_by?: string
  created_at: string
  updated_at: string
  user_id?: string
  assessment_approach?: string | null
  pedagogical_strategy?: string | null
  differentiation_strategies?: string | null
  grouping_strategy?: string | null
  curriculum_standards?: string | null
  materials?: string | null
  duration?: string | null
}

export async function generateMultigradeLessonPlan(formData: MultigradePlanFormData) {
  console.log("MULTIGRADE GENERATION: Starting with formData:", JSON.stringify(formData, null, 2))

  try {
    // Validate required fields
    if (!formData.subject || !formData.gradeRange || !formData.topic) {
      throw new Error("Missing required fields: subject, gradeRange, and topic are required")
    }

    // Validate grade range format
    const gradeRangeRegex = /^[K0-6]-[0-6]$/
    if (!gradeRangeRegex.test(formData.gradeRange)) {
      throw new Error("Invalid grade range format. Please use format like 'K-2' or '1-3'")
    }

    // Validate duration is a valid number
    const duration = Number(formData.duration)
    if (isNaN(duration) || duration <= 0) {
      throw new Error("Duration must be a positive number")
    }

    // Get curriculum standards for each grade level in the range
    const gradeLevels = formData.gradeRange.split("-").map(g => g.trim())
    const standardsPromises = gradeLevels.map(grade => 
      getCurriculumStandards(formData.subject, grade)
    )
    const standardsResults = await Promise.all(standardsPromises)
    const allStandards = standardsResults.flat()
    const formattedStandards = formatStandardsForPrompt(allStandards)

    const prompt = `
Create a comprehensive multigrade lesson plan for OECS (Organization of Eastern Caribbean States) teachers with the following information:

Subject: ${formData.subject}
Grade Range: ${formData.gradeRange}
Topic: ${formData.topic}
Duration: ${duration} minutes
Materials: ${formData.materials || ""}
Pedagogical Strategy: ${formData.pedagogicalStrategy || ""}
Differentiation Strategies: ${Array.isArray(formData.differentiationStrategies) ? formData.differentiationStrategies.join(", ") : formData.differentiationStrategies || ""}
Grouping Strategy: ${formData.groupingStrategy || ""}
Assessment Approach: ${formData.assessmentApproach || ""}
Learning Outcomes: ${formData.learningOutcomes || ""}
Special Needs: ${formData.specialNeeds ? formData.specialNeedsDetails || "Yes" : "No"}
Additional Instructions: ${formData.additionalInstructions || "None"}

## CURRICULUM STANDARDS ALIGNMENT
${formattedStandards}

Format the multigrade lesson plan with the following detailed sections using Markdown formatting:

# ${(formData.topic || "MULTIGRADE LESSON PLAN").toUpperCase()}

## OVERVIEW
Provide a comprehensive description of this multigrade lesson and its importance in the OECS curriculum. Explain how this lesson addresses multiple grade levels simultaneously and the benefits of multigrade teaching for this topic.

## CURRICULUM STANDARDS ALIGNMENT

### Grade-Level Standards
For each grade in the range ${formData.gradeRange}, list and explain the specific standards being addressed:

1. **Lower Grade (${formData.gradeRange.split('-')[0]})**
   - List specific standards from the curriculum
   - Explain how each standard is addressed in the lesson
   - Describe the foundational skills being developed
   - Connect to grade-level expectations

2. **Upper Grade (${formData.gradeRange.split('-')[1]})**
   - List specific standards from the curriculum
   - Explain how each standard is addressed in the lesson
   - Describe the advanced skills being developed
   - Connect to grade-level expectations

### Standards Progression
Explain how the standards build upon each other across grade levels:
- How lower grade standards provide foundation for upper grade learning
- How skills and concepts progress through the grade range
- Where standards overlap and where they differ
- How the lesson activities support this progression

### Assessment Alignment
For each standard:
- How student understanding will be assessed
- What evidence will demonstrate mastery
- How assessment methods differ by grade level
- How to track progress toward standards

### Differentiation for Standards
Explain how the lesson activities are differentiated to meet standards at each grade level:
- How activities are modified for different grade levels
- How materials and resources support different standards
- How grouping strategies help address various standards
- How assessment approaches align with grade-level expectations

## GRADE-SPECIFIC LEARNING OBJECTIVES
Break down learning objectives by grade level within the range:
${formData.gradeRange ? `For each grade in ${formData.gradeRange}, provide specific, measurable objectives that align with the OECS curriculum standards.` : "Provide tiered objectives for different grade levels."}

## MULTIGRADE TEACHING STRATEGY
Detailed explanation of how to implement ${formData.pedagogicalStrategy || "the chosen pedagogical strategy"} in a multigrade setting:
- How to organize the classroom
- How to manage different grade levels simultaneously
- Specific techniques for this strategy in multigrade contexts

## DIFFERENTIATION FRAMEWORK
Comprehensive differentiation strategies addressing:
- **Content Differentiation**: How material varies by grade level
- **Process Differentiation**: Different ways students engage with learning
- **Product Differentiation**: Various ways students demonstrate learning
- **Learning Environment**: Classroom setup and management

## MATERIALS AND RESOURCES
Detailed list organized by:
- **Shared Materials**: Resources used by all grade levels
- **Grade-Specific Materials**: Items needed for particular grades
- **Adaptive Materials**: Resources that can be modified for different levels
- **Technology Integration**: Digital tools that support multigrade learning

## DETAILED LESSON PROCEDURE

### Opening/Introduction (${Math.round(Number(formData.duration) * 0.15) || 10} minutes)
- Engaging hook that connects to all grade levels
- Review of previous learning with grade-appropriate entry points
- Clear explanation of learning objectives for each grade level
- Setting expectations for multigrade collaboration
- Preview of the lesson structure and activities

### Whole Group Instruction (${Math.round(Number(formData.duration) * 0.15) || 10} minutes)
- Introduction of core concepts applicable across all grades
- Demonstration of fundamental procedures or principles
- Visual aids and examples that work for all grade levels
- Interactive elements to maintain engagement
- Clear explanation of differentiated activities to follow

### Differentiated Activities/Independent Work Time (${Math.round(Number(formData.duration) * 0.3) || 20} minutes)
Detailed rotation schedule with specific activities for each grade level:

1. **Lower Grade Group**
   - Direct instruction activities
   - Guided practice opportunities
   - Specific learning objectives
   - Required materials and resources
   - Assessment checkpoints

2. **Middle Grade Group**
   - Semi-independent activities
   - Extension of core concepts
   - Grade-specific challenges
   - Required materials and resources
   - Assessment checkpoints

3. **Upper Grade Group**
   - Independent work activities
   - Advanced applications
   - Critical thinking challenges
   - Required materials and resources
   - Assessment checkpoints

### Guided Practice Sessions (${Math.round(Number(formData.duration) * 0.2) || 15} minutes)
For each grade level:
- Small group instruction schedule
- Specific learning goals
- Targeted feedback opportunities
- Individual support strategies
- Progress monitoring methods

### Peer Learning/Cross-Grade Collaboration (${Math.round(Number(formData.duration) * 0.1) || 10} minutes)
- Structured peer tutoring activities
- Mixed-grade group projects
- Collaborative learning tasks
- Role assignments for older students
- Support strategies for younger students

### Assessment Checkpoints
Throughout the lesson:
- Informal observation points
- Quick check-ins with each grade level
- Exit ticket questions by grade
- Progress monitoring tools
- Adjustment strategies based on assessment

### Closure/Reflection (${Math.round(Number(formData.duration) * 0.1) || 10} minutes)
- Whole group sharing of learning
- Grade-specific reflection prompts
- Connection to future learning
- Preview of next steps
- Celebration of achievements

### Transition Management
Clear procedures for:
- Moving between activities
- Managing materials and resources
- Handling emergencies
- Maintaining engagement during transitions
- Independent work expectations

## GROUPING STRATEGIES
Detailed implementation of ${formData.groupingStrategy || "flexible grouping"}:
- How to form groups effectively
- When to use same-grade vs. mixed-grade groups
- Strategies for peer tutoring and collaboration
- Managing group dynamics

## ASSESSMENT APPROACHES
Comprehensive assessment strategy using ${formData.assessmentApproach || "tiered assessment"}:
- **Formative Assessment**: Ongoing checks during the lesson
- **Summative Assessment**: End-of-lesson evaluations
- **Grade-Specific Rubrics**: Different criteria for different levels
- **Peer and Self-Assessment**: Student involvement in evaluation

## CLASSROOM MANAGEMENT
Specific strategies for managing a multigrade classroom:
- Signal systems for different groups
- Independent work expectations
- Noise level management
- Transition procedures
- Behavior management across grade levels

## EXTENSION AND ENRICHMENT
- Advanced activities for early finishers
- Cross-curricular connections
- Home-school connections
- Community involvement opportunities

${
  formData.specialNeeds && formData.specialNeedsDetails
    ? `
## SPECIAL NEEDS ACCOMMODATIONS
Detailed accommodations for students with special needs across all grade levels:
- Specific modifications for different disabilities
- Adaptive materials and technologies
- Support strategies for inclusive multigrade teaching
- Collaboration with support staff
`
    : ""
}

## REFLECTION AND ADAPTATION
- Questions for teacher reflection after the lesson
- Strategies for adapting the lesson based on student needs
- Ideas for future multigrade lessons on this topic
- Professional development considerations

## RESOURCES AND REFERENCES
- Multigrade teaching research and best practices
- Subject-specific resources for each grade level
- Professional learning communities and support networks
- Additional materials for extended learning

Ensure the lesson plan is practical, immediately usable, and specifically designed for the unique challenges and opportunities of multigrade teaching in OECS schools.
`

    console.log("MULTIGRADE GENERATION: Sending prompt to OpenAI")

    if (!process.env.OPENAI_API_KEY) {
      console.error("MULTIGRADE GENERATION: OpenAI API key is missing!")
      throw new Error("OpenAI API key is not configured. Please add your API key to the environment variables.")
    }

    const response = await generateText({
      model: openai("gpt-4"),
      prompt,
      temperature: 0.7,
      maxTokens: 4000,
    })

    console.log("MULTIGRADE GENERATION: Received response of length:", response.text.length)
    return response.text
  } catch (error) {
    console.error("MULTIGRADE GENERATION ERROR:", error)
    throw new Error(
      `Failed to generate multigrade lesson plan: ${error instanceof Error ? error.message : "Unknown error"}`,
    )
  }
}

export async function saveMultigradePlan(formData: FormData | MultigradePlanFormData, content?: string) {
  try {
    console.log("SAVE MULTIGRADE PLAN: Starting save operation")
    console.log("SAVE MULTIGRADE PLAN: FormData type:", typeof formData)
    console.log("SAVE MULTIGRADE PLAN: Content provided:", !!content)
    console.log("SAVE MULTIGRADE PLAN: Content length:", content?.length || 0)

    // Handle both FormData and object formats
    const data = formData instanceof FormData ? {
      id: formData.get("id") as string,
      title: formData.get("title") as string,
      subject: formData.get("subject") as string,
      gradeRange: formData.get("gradeRange") as string, // Will be mapped to grade_range
      topic: formData.get("topic") as string,
      duration: formData.get("duration") as string,
      materials: formData.get("materials") as string,
      pedagogicalStrategy: formData.get("pedagogicalStrategy") as string,
      differentiationStrategies: formData.get("differentiationStrategies") as string,
      groupingStrategy: formData.get("groupingStrategy") as string,
      assessmentApproach: formData.get("assessmentApproach") as string,
      learningOutcomes: formData.get("learningOutcomes") as string,
      specialNeeds: formData.get("specialNeeds") === "true",
      specialNeedsDetails: formData.get("specialNeedsDetails") as string,
      additionalInstructions: formData.get("additionalInstructions") as string,
    } : formData

    console.log("SAVE MULTIGRADE PLAN: Extracted data:", {
      title: data.title,
      subject: data.subject,
      gradeRange: data.gradeRange,
      topic: data.topic,
      duration: data.duration,
      materials: data.materials,
      pedagogicalStrategy: data.pedagogicalStrategy,
      groupingStrategy: data.groupingStrategy,
      assessmentApproach: data.assessmentApproach
    })

    // Validate required fields based on actual database schema
    if (!data.subject || !data.gradeRange || !data.topic) {
      throw new Error("Missing required fields: subject, gradeRange, and topic are required")
    }

    const planContent = content || data.content || ""
    if (!planContent) {
      throw new Error("No content provided for the multigrade plan")
    }

    // Check if we have content to save
    if (!planContent || planContent.trim().length === 0) {
      throw new Error("Missing required field: lesson content cannot be empty")
    }

    console.log("SAVE MULTIGRADE PLAN: Plan content length:", planContent.length)

    // Process differentiation strategies
    let differentiationStrategies = ""
    if (data.differentiationStrategies) {
      if (Array.isArray(data.differentiationStrategies)) {
        differentiationStrategies = data.differentiationStrategies.join(", ")
      } else {
        differentiationStrategies = data.differentiationStrategies
      }
    }

    console.log("SAVE MULTIGRADE PLAN: Differentiation strategies:", differentiationStrategies)

    // Get curriculum standards
    let formattedStandards = ""
    try {
      const gradeLevels = data.gradeRange.split("-").map(g => g.trim())
      const standardsPromises = gradeLevels.map(grade => 
        getCurriculumStandards(data.subject, grade)
      )
      const standardsResults = await Promise.all(standardsPromises)
      const allStandards = standardsResults.flat()
      formattedStandards = formatStandardsForPrompt(allStandards)
    } catch (standardsError) {
      console.warn("SAVE MULTIGRADE PLAN: Could not fetch curriculum standards:", standardsError)
      // Continue without curriculum standards
    }

    // Store the plan in the database with correct field mappings
    try {
      // Check if database is available
      if (!db.multigradePlans) {
        throw new Error("Database connection not available")
      }
      
      // Get the current authenticated user
      const currentUserId = await getCurrentUser()
      console.log("SAVE MULTIGRADE PLAN: Using authenticated user ID:", currentUserId)
      
      const now = new Date().toISOString()
      
      if (data.id) {
        // Update existing plan
        console.log("SAVE MULTIGRADE PLAN: Updating existing plan with ID:", data.id)
        
        const updateData: any = {
          title: data.title || `${data.subject} - ${data.topic}`, // ✅ Generate title if empty
          subject: data.subject,
          grade_range: data.gradeRange, // ✅ Correct field name
          topic: data.topic,
          lesson_content: planContent, // ✅ Correct field name (lesson_content)
          duration: data.duration || "60",
          materials: data.materials || '',
          pedagogical_strategy: data.pedagogicalStrategy || '',
          differentiation_strategies: differentiationStrategies || '',
          grouping_strategy: data.groupingStrategy || '',
          assessment_approach: data.assessmentApproach || '',
          created_by: currentUserId, // ✅ Use authenticated user ID
          user_id: currentUserId, // ✅ Use authenticated user ID
          updated_at: now
        }

        // Only add curriculum_standards if it exists in the schema
        if (formattedStandards) {
          updateData.curriculum_standards = formattedStandards
        }

        const updatedPlan = await db.multigradePlans.update(data.id, updateData)

        console.log("SAVE MULTIGRADE PLAN: Update successful")
        return { success: true, data: updatedPlan }
      } else {
        // Create new plan with correct field mappings
        console.log("SAVE MULTIGRADE PLAN: Creating new plan")
        
        const createData: any = {
          title: data.title || `${data.subject} - ${data.topic}`, // ✅ Generate title if empty
          subject: data.subject,
          grade_range: data.gradeRange, // ✅ Correct field name
          topic: data.topic,
          lesson_content: planContent, // ✅ Correct field name (lesson_content)
          duration: data.duration || "60",
          materials: data.materials || '',
          pedagogical_strategy: data.pedagogicalStrategy || '',
          differentiation_strategies: differentiationStrategies || '',
          grouping_strategy: data.groupingStrategy || '',
          assessment_approach: data.assessmentApproach || '',
          created_by: currentUserId, // ✅ Use authenticated user ID
          user_id: currentUserId, // ✅ Use authenticated user ID
          created_at: now,
          updated_at: now
        }

        // Only add curriculum_standards if it exists in the schema
        if (formattedStandards) {
          createData.curriculum_standards = formattedStandards
        }

        const newPlan = await db.multigradePlans.create(createData)

        console.log("SAVE MULTIGRADE PLAN: Create successful, returned ID:", newPlan.id)
        return { success: true, data: newPlan }
      }
    } catch (error) {
      console.error("SAVE MULTIGRADE PLAN: Database error:", {
        code: (error as any).code,
        details: (error as any).details,
        hint: (error as any).hint,
        message: (error as any).message
      })
      
      // Log more detailed error information
      if (error instanceof Error) {
        console.error("Error message:", error.message)
        console.error("Error stack:", error.stack)
      }
      
      // Return the actual error message instead of generic message
      const errorMessage = error instanceof Error ? error.message : "Unknown database error"
      return {
        success: false,
        error: `Database error: ${errorMessage}`
      }
    }
  } catch (error) {
    console.error("SAVE MULTIGRADE PLAN: Error:", error)
    
    // Provide specific error messages for different types of errors
    if (error instanceof Error) {
      if (error.message.includes("Authentication required") || 
          error.message.includes("please log in") ||
          error.message.includes("Session expired")) {
        return {
          success: false,
          error: "Please log in to save lesson plans"
        }
      }
      
      if (error.message.includes("Database error")) {
        return {
          success: false,
          error: "Database error occurred. Please try again."
        }
      }
      
      if (error.message.includes("Network")) {
        return {
          success: false,
          error: "Network error. Please check your connection and try again."
        }
      }
    }
    
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to save multigrade plan"
    }
  }
}

export async function getMultigradePlans() {
  try {
    console.log("GET MULTIGRADE PLANS: Fetching all plans")
    const plans = await db.multigradePlans.findMany()
    console.log(`GET MULTIGRADE PLANS: Found ${plans.length} plans`)
    return {
      success: true,
      data: plans
    }
  } catch (error) {
    console.error("GET MULTIGRADE PLANS: Error:", error)
    return {
      success: false,
      data: [],
      error: "Failed to get multigrade plans"
    }
  }
}

export async function getMultigradePlanById(id: string) {
  try {
    console.log('GET MULTIGRADE PLAN BY ID: Fetching plan with ID:', id)
    const plan = await db.multigradePlans.findFirst({ id })
    
    if (!plan) {
      console.log('GET MULTIGRADE PLAN BY ID: Plan not found')
      return null
    }
    
    console.log('GET MULTIGRADE PLAN BY ID: Plan found')
    return plan
  } catch (error) {
    console.error("GET MULTIGRADE PLAN BY ID: Error:", error)
    return null
  }
}

export async function deleteMultigradePlan(id: string) {
  try {
    console.log('DELETE MULTIGRADE PLAN: Deleting plan with ID:', id)
    await db.multigradePlans.delete(id)
    console.log('DELETE MULTIGRADE PLAN: Plan deleted successfully')
    
    return {
      success: true
    }
  } catch (error) {
    console.error("DELETE MULTIGRADE PLAN: Error:", error)
    return {
      success: false,
      error: "Failed to delete multigrade plan"
    }
  }
}