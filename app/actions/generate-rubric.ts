"use server"

import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

interface FormData {
  assignmentTitle: string
  assignmentType: string
  subject: string
  gradeLevel: string
  learningObjectives: string
  specificRequirements: string
  performanceLevels: string
  includePoints: boolean
  focusAreas: string[]
}

interface RubricLevel {
  level: string
  points: number
  description: string
}

interface RubricCriterion {
  name: string
  description: string
  levels: RubricLevel[]
}

interface Rubric {
  title: string
  levelLabels: string[]
  criteria: RubricCriterion[]
}

function generateLevelLabels(numLevels: number): string[] {
  const labelSets = {
    3: ["Excellent", "Proficient", "Developing"],
    4: ["Excellent", "Proficient", "Developing", "Beginning"],
    5: ["Excellent", "Proficient", "Developing", "Beginning", "Inadequate"],
    6: ["Excellent", "Proficient", "Satisfactory", "Developing", "Beginning", "Inadequate"],
  }
  return labelSets[numLevels as keyof typeof labelSets] || labelSets[4]
}

function generatePointValues(numLevels: number, includePoints: boolean): number[] {
  if (!includePoints) return Array(numLevels).fill(0)

  const pointSets = {
    3: [15, 10, 5],
    4: [20, 15, 10, 5],
    5: [25, 20, 15, 10, 5],
    6: [30, 25, 20, 15, 10, 5],
  }
  return pointSets[numLevels as keyof typeof pointSets] || pointSets[4]
}

function createFallbackRubric(formData: FormData, levelLabels: string[], pointValues: number[]): Rubric {
  const getSubjectCriteria = (subject: string, assignmentType: string) => {
    const baseCriteria = [
      {
        name: "Content Knowledge",
        description: "Demonstrates understanding of key concepts and information",
      },
      {
        name: "Organization",
        description: "Clear structure and logical flow of ideas",
      },
      {
        name: "Communication",
        description: "Clear and effective expression of ideas",
      },
      {
        name: "Quality of Work",
        description: "Overall effort, completeness, and attention to detail",
      },
    ]

    // Add subject-specific criteria
    if (subject === "science") {
      baseCriteria.push({
        name: "Scientific Method",
        description: "Proper use of scientific processes and reasoning",
      })
    } else if (subject === "mathematics") {
      baseCriteria.push({
        name: "Problem Solving",
        description: "Mathematical reasoning and problem-solving strategies",
      })
    } else if (subject === "language-arts") {
      baseCriteria.push({
        name: "Language Conventions",
        description: "Grammar, spelling, and writing mechanics",
      })
    }

    return baseCriteria.slice(0, 5) // Limit to 5 criteria
  }

  const criteriaTemplates = getSubjectCriteria(formData.subject, formData.assignmentType)

  const criteria = criteriaTemplates.map((template) => ({
    name: template.name,
    description: template.description,
    levels: levelLabels.map((label, index) => ({
      level: label,
      points: pointValues[index],
      description: generateLevelDescription(template.name, label, formData.gradeLevel),
    })),
  }))

  return {
    title: `${formData.assignmentTitle} - Assessment Rubric`,
    levelLabels,
    criteria,
  }
}

function generateLevelDescription(criterionName: string, level: string, gradeLevel: string): string {
  const descriptions = {
    "Content Knowledge": {
      Excellent: "Demonstrates comprehensive and accurate understanding of all key concepts",
      Proficient: "Shows solid understanding of most key concepts with minor gaps",
      Developing: "Shows basic understanding but with some misconceptions or gaps",
      Beginning: "Shows limited understanding with significant gaps or misconceptions",
    },
    Organization: {
      Excellent: "Ideas are clearly organized with smooth transitions and logical flow",
      Proficient: "Generally well-organized with mostly clear structure",
      Developing: "Some organization present but may lack clarity in places",
      Beginning: "Little evidence of organization; ideas may be confusing or scattered",
    },
    Communication: {
      Excellent: "Ideas are expressed clearly and effectively with appropriate vocabulary",
      Proficient: "Ideas are generally clear with mostly appropriate language use",
      Developing: "Ideas are somewhat clear but may lack precision or clarity",
      Beginning: "Ideas are unclear or difficult to understand",
    },
    "Quality of Work": {
      Excellent: "Work is complete, thorough, and shows exceptional attention to detail",
      Proficient: "Work is complete and shows good attention to most details",
      Developing: "Work is mostly complete but may lack some important details",
      Beginning: "Work is incomplete or shows little attention to detail",
    },
  }

  const criterionDescriptions = descriptions[criterionName as keyof typeof descriptions]
  if (criterionDescriptions && criterionDescriptions[level as keyof typeof criterionDescriptions]) {
    return criterionDescriptions[level as keyof typeof criterionDescriptions]
  }

  // Fallback generic descriptions
  const genericDescriptions = {
    Excellent: `Demonstrates excellent performance in ${criterionName.toLowerCase()}`,
    Proficient: `Shows proficient performance in ${criterionName.toLowerCase()}`,
    Developing: `Shows developing skills in ${criterionName.toLowerCase()}`,
    Beginning: `Shows beginning level skills in ${criterionName.toLowerCase()}`,
  }

  return genericDescriptions[level as keyof typeof genericDescriptions] || `${level} level performance`
}

export async function generateRubric(formData: FormData) {
  // Validate input data
  if (!formData.assignmentTitle || !formData.subject || !formData.gradeLevel) {
    return {
      success: false,
      error: "Please fill in all required fields (Assignment Title, Subject, and Grade Level).",
    }
  }

  const numLevels = Number.parseInt(formData.performanceLevels) || 4
  const levelLabels = generateLevelLabels(numLevels)
  const pointValues = generatePointValues(numLevels, formData.includePoints)

  try {
    const prompt = `Create a detailed assessment rubric for the following assignment:

Assignment Title: ${formData.assignmentTitle}
Assignment Type: ${formData.assignmentType}
Subject: ${formData.subject}
Grade Level: Grade ${formData.gradeLevel}
Learning Objectives: ${formData.learningObjectives || "General learning objectives"}
Specific Requirements: ${formData.specificRequirements || "Standard assignment requirements"}
Performance Levels: ${numLevels} levels
Level Labels: ${levelLabels.join(", ")}
Include Points: ${formData.includePoints ? "Yes" : "No"}
Focus Areas: ${formData.focusAreas.length > 0 ? formData.focusAreas.join(", ") : "General assessment"}

Create a comprehensive rubric with 4-5 assessment criteria that are:
- Appropriate for Grade ${formData.gradeLevel} students
- Relevant to ${formData.subject} and ${formData.assignmentType} assignments
- Clear and specific in performance descriptions
- Properly differentiated between performance levels

RESPOND WITH ONLY VALID JSON IN THIS EXACT FORMAT:
{
  "title": "${formData.assignmentTitle} - Assessment Rubric",
  "levelLabels": ${JSON.stringify(levelLabels)},
  "criteria": [
    {
      "name": "Content Knowledge",
      "description": "Demonstrates understanding of key concepts",
      "levels": [
        {
          "level": "${levelLabels[0]}",
          "points": ${pointValues[0]},
          "description": "Comprehensive understanding of all key concepts with accurate details"
        },
        {
          "level": "${levelLabels[1]}",
          "points": ${pointValues[1]},
          "description": "Good understanding of most key concepts with minor gaps"
        }
      ]
    }
  ]
}`

    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt,
      temperature: 0.5,
      maxTokens: 2000,
    })

    // Clean and parse the response
    let cleanedText = text.trim()

    // Remove markdown code blocks
    cleanedText = cleanedText.replace(/^```(?:json)?\s*/, "").replace(/\s*```$/, "")

    // Extract JSON object
    const jsonMatch = cleanedText.match(/\{[\s\S]*\}/)
    if (jsonMatch) {
      cleanedText = jsonMatch[0]
    }

    let rubric: Rubric
    try {
      rubric = JSON.parse(cleanedText)

      // Validate the parsed rubric
      if (!rubric.title || !Array.isArray(rubric.criteria) || rubric.criteria.length === 0) {
        throw new Error("Invalid rubric structure")
      }

      // Ensure proper structure
      rubric.levelLabels = levelLabels
      rubric.criteria = rubric.criteria.map((criterion) => ({
        name: criterion.name || "Criterion",
        description: criterion.description || "Assessment criterion",
        levels: levelLabels.map((label, index) => {
          const existingLevel = criterion.levels?.find((l) => l.level === label)
          return {
            level: label,
            points: pointValues[index],
            description:
              existingLevel?.description || generateLevelDescription(criterion.name, label, formData.gradeLevel),
          }
        }),
      }))
    } catch (parseError) {
      console.log("Failed to parse AI response, using fallback rubric")
      rubric = createFallbackRubric(formData, levelLabels, pointValues)
    }

    return {
      success: true,
      rubric,
    }
  } catch (error) {
    console.error("Error generating rubric:", error)

    // Always return a fallback rubric instead of failing
    const fallbackRubric = createFallbackRubric(formData, levelLabels, pointValues)

    return {
      success: true,
      rubric: fallbackRubric,
    }
  }
}
