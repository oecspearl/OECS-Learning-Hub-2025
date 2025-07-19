"use server"

import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { revalidatePath } from "next/cache"
import { db, sql } from "@/lib/db"
import { multigradePlans } from "@/lib/schema"
import { eq } from "drizzle-orm"
import { getCurriculumStandards, formatStandardsForPrompt } from "@/lib/curriculum-standards"

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
  id: number
  title: string
  subject: string
  grade_range: string
  topic: string | null
  content: string
  duration: string | null
  materials: string | null
  pedagogical_strategy: string | null
  differentiation_strategies: string | null
  grouping_strategy: string | null
  assessment_approach: string | null
  curriculum_standards: string | null
  created_at: string
  updated_at: string
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
    console.log('Starting saveMultigradePlan with formData:', formData);
    
    // Convert FormData to object if needed
    const data = formData instanceof FormData ? {
      id: formData.get('id') as string,
      title: formData.get('title') as string,
      subject: formData.get('subject') as string,
      gradeRange: formData.get('gradeRange') as string,
      topic: formData.get('topic') as string,
      content: formData.get('content') as string,
      duration: formData.get('duration') as string,
      materials: formData.get('materials') as string,
      pedagogicalStrategy: formData.get('pedagogicalStrategy') as string,
      differentiationStrategies: formData.get('differentiationStrategies') as string,
      groupingStrategy: formData.get('groupingStrategy') as string,
      assessmentApproach: formData.get('assessmentApproach') as string,
    } : formData;

    // Validate required fields
    if (!data.subject || !data.gradeRange || !data.topic) {
      console.error('Missing required fields:', { 
        subject: data.subject, 
        gradeRange: data.gradeRange, 
        topic: data.topic 
      });
      throw new Error('Missing required fields: subject, gradeRange, and topic are required');
    }

    // Validate grade range format
    const gradeRangeRegex = /^[K0-6]-[0-6]$/
    if (!gradeRangeRegex.test(data.gradeRange)) {
      console.error('Invalid grade range format:', data.gradeRange);
      throw new Error("Invalid grade range format. Please use format like 'K-2' or '1-3'")
    }

    // Validate content
    const planContent = content || data.content;
    if (!planContent || typeof planContent !== 'string') {
      console.error('Invalid content:', planContent);
      throw new Error('Invalid lesson plan content');
    }

    // Get curriculum standards for each grade level
    const gradeLevels = data.gradeRange.split("-").map(g => g.trim());
    const standardsPromises = gradeLevels.map(grade => 
      getCurriculumStandards(data.subject, grade)
    );
    const standardsResults = await Promise.all(standardsPromises);
    const allStandards = standardsResults.flat();
    const formattedStandards = formatStandardsForPrompt(allStandards);

    // Generate a title if not provided
    const title = data.title || `${data.subject} - ${data.topic} (Grades ${data.gradeRange})`;
    console.log('Generated title:', title);

    // Handle differentiation strategies
    let differentiationStrategies = '';
    if (data.differentiationStrategies) {
      if (typeof data.differentiationStrategies === 'string') {
        differentiationStrategies = data.differentiationStrategies;
      } else if (Array.isArray(data.differentiationStrategies)) {
        differentiationStrategies = data.differentiationStrategies.join(', ');
      }
    }

    // Prepare the data for insertion
    const now = new Date().toISOString();
    const dbData = {
      title,
      subject: data.subject,
      grade_range: data.gradeRange,
      topic: data.topic,
      content: planContent,
      duration: data.duration || '60',
      materials: data.materials || '',
      pedagogical_strategy: data.pedagogicalStrategy || '',
      differentiation_strategies: differentiationStrategies,
      grouping_strategy: data.groupingStrategy || '',
      assessment_approach: data.assessmentApproach || '',
      curriculum_standards: formattedStandards,
      created_at: now,
      updated_at: now
    };

    console.log('Attempting to insert data:', dbData);

    // Insert the plan into the database
    const result = await db.multigradePlans.create(dbData);
    console.log('Insert result:', result);

    return { success: true, id: result.id };
  } catch (error) {
    console.error('Error saving multigrade plan:', error);
    throw new Error(
      `Failed to save multigrade plan: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}

export async function getMultigradePlans() {
  try {
    console.log('Fetching multigrade plans...');
    const plans = await db.multigradePlans.findMany();
    console.log('Successfully fetched plans:', plans.length);
    return plans || [];
  } catch (error) {
    console.error("Error fetching multigrade plans:", error);
    // Return empty array instead of throwing error to prevent UI crashes
    return [];
  }
}

export async function getMultigradePlanById(id: number) {
  try {
    console.log('Fetching multigrade plan by ID:', id);
    const plan = await db.multigradePlans.findFirst({ id });
    
    if (!plan) {
      console.log('No plan found for ID:', id);
      return null;
    }

    console.log('Successfully fetched plan:', plan.id);
    return plan;
  } catch (error) {
    console.error("Error fetching multigrade plan:", error);
    throw new Error("Failed to fetch multigrade plan");
  }
}

export async function deleteMultigradePlan(id: number) {
  try {
    await db.multigradePlans.delete(id)
    revalidatePath("/planners/multigrade")
  } catch (error) {
    console.error("Error deleting multigrade plan:", error)
    throw new Error("Failed to delete multigrade plan")
  }
}
