"use server"

import { revalidatePath } from "next/cache"

export async function generateMultigradePlan(formData: FormData) {
  try {
    // Extract data from the form
    const subject = formData.get("subject") as string
    const topic = formData.get("topic") as string
    const duration = formData.get("duration") as string
    const grades = formData.get("grades") as string
    const objectives = formData.get("objectives") as string
    const differentiationNotes = formData.get("differentiation_notes") as string
    const materials = formData.get("materials") as string
    const pedagogicalStrategy = formData.get("pedagogical_strategy") as string
    const specialNeeds = formData.get("special_needs") as string

    // Get learning styles (multiple values)
    const learningStyles: string[] = []
    formData.getAll("learning_styles").forEach((style) => {
      learningStyles.push(style as string)
    })

    // Get multigrade strategies (multiple values)
    const multigradeStrategies: string[] = []
    formData.getAll("multigrade_strategies").forEach((strategy) => {
      multigradeStrategies.push(strategy as string)
    })

    // Parse grades into an array
    const gradesList = grades.split(",").sort()

    // Create a mock multigrade lesson plan
    const multigradePlan = `
# MULTIGRADE LESSON PLAN: ${topic}

## Basic Information
- Subject: ${subject}
- Topic: ${topic}
- Duration: ${duration} minutes
- Grade Levels: ${gradesList.join(", ")}
- Pedagogical Strategy: ${pedagogicalStrategy || "Not specified"}

## Learning Objectives
${objectives || "Not specified"}

## Learning Styles Addressed
${learningStyles.length > 0 ? learningStyles.join(", ") : "Mixed learning styles"}

## Materials Needed
${materials || "Standard classroom materials"}

${specialNeeds ? `## Special Needs Accommodations\n${specialNeeds}` : ""}

## Multigrade Teaching Strategies
${multigradeStrategies.length > 0 ? multigradeStrategies.map((s) => `- ${s.replace(/_/g, " ")}`).join("\n") : "- Differentiated instruction\n- Peer teaching\n- Flexible grouping"}

## Lesson Structure

### Introduction (${Math.floor(Number.parseInt(duration) * 0.2)} minutes)
- Begin with a common introduction for all grade levels
- Present the topic in a way that engages all students
- Explain how activities will be organized across grade levels

### Grade-Specific Objectives
${gradesList
  .map(
    (grade) => `
#### Grade ${grade}
- Specific learning objective for Grade ${grade}
- Key concepts appropriate for Grade ${grade} level
- Expected outcomes for Grade ${grade} students
`,
  )
  .join("")}

### Main Activities (${Math.floor(Number.parseInt(duration) * 0.5)} minutes)
${gradesList
  .map(
    (grade) => `
#### Grade ${grade}
- Focused instruction for Grade ${grade}
- Practice activities appropriate for Grade ${grade}
- Assessment strategies for Grade ${grade}
`,
  )
  .join("")}

### Cross-Grade Activities (${Math.floor(Number.parseInt(duration) * 0.2)} minutes)
- Collaborative activities where different grades work together
- Peer teaching opportunities where older students assist younger ones
- Shared discussions to synthesize learning across grade levels

### Closure (${Math.floor(Number.parseInt(duration) * 0.1)} minutes)
- Whole-group reflection on learning
- Grade-specific exit tickets or assessments
- Preview of upcoming related content

## Differentiation Strategies
${
  differentiationNotes ||
  `
- For younger grades: Simplified concepts with more visual supports
- For middle grades: Grade-appropriate applications with guided practice
- For older grades: More complex applications with greater independence
`
}

## Assessment
- Grade-specific assessment criteria
- Opportunities for peer and self-assessment
- Documentation of progress for each grade level

## Management Strategies
- Station rotation schedule
- Independent work expectations
- Transition signals between activities
- Classroom arrangement to facilitate multigrade instruction
`

    // In a real implementation, you would save this to a database
    revalidatePath("/")

    return multigradePlan
  } catch (error) {
    console.error("Error generating multigrade plan:", error)
    throw new Error("Failed to generate multigrade plan")
  }
}
