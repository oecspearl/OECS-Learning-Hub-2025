"use server"

import { revalidatePath } from "next/cache"

export async function reviewLessonPlan(formData: FormData) {
  try {
    // Extract data from the form
    const planContent = formData.get("planContent") as string
    const focusAreas = formData.get("focusAreas") as string
    const additionalInstructions = formData.get("additionalInstructions") as string

    // Validate required fields
    if (!planContent) {
      throw new Error("Missing lesson plan content")
    }

    // Parse focus areas into an array
    const focusAreasList = focusAreas ? focusAreas.split(",") : []

    // Create a mock review based on the provided data
    const review = `
# LESSON PLAN REVIEW

## Overview
This review provides feedback on the submitted lesson plan${focusAreasList.length > 0 ? `, with a focus on: ${focusAreasList.join(", ")}` : ""}.

## Strengths
- Well-structured lesson with clear beginning, middle, and end
- Learning objectives are clearly stated
- Activities align with the stated objectives
- Appropriate for the specified grade level

## Areas for Improvement
${
  focusAreasList.includes("alignment")
    ? `
### Standards Alignment
- Consider more explicit connections to specific standards
- Ensure all activities directly support the standards
`
    : ""
}

${
  focusAreasList.includes("engagement")
    ? `
### Student Engagement
- Consider adding more interactive elements
- Provide opportunities for student choice
- Include strategies to maintain engagement throughout the lesson
`
    : ""
}

${
  focusAreasList.includes("differentiation")
    ? `
### Differentiation
- Expand options for students with different learning needs
- Include specific modifications for advanced learners
- Consider additional supports for struggling students
`
    : ""
}

${
  focusAreasList.includes("assessment")
    ? `
### Assessment Strategies
- Include more formative assessment checkpoints
- Ensure assessments align with learning objectives
- Consider varied assessment methods to accommodate different learning styles
`
    : ""
}

${
  focusAreasList.includes("timing")
    ? `
### Timing and Pacing
- Review time allocations for each section
- Include buffer time for transitions
- Consider contingency plans if activities take longer than expected
`
    : ""
}

${
  focusAreasList.length === 0
    ? `
### General Suggestions
- Consider adding more opportunities for student collaboration
- Include more explicit connections between activities
- Review assessment strategies to ensure they measure all objectives
`
    : ""
}

## Specific Recommendations
1. Add a clear hook at the beginning to engage students immediately
2. Include more opportunities for student reflection
3. Consider adding a formative assessment midway through the lesson
4. Provide more detailed closure to reinforce key concepts

${
  additionalInstructions
    ? `
## Additional Feedback
Based on your specific instructions, here are additional thoughts:
${additionalInstructions}
`
    : ""
}

## Overall Assessment
This is a solid lesson plan that with minor adjustments could be even more effective in achieving the stated learning outcomes.
`

    // In a real implementation, you would save this to a database
    revalidatePath("/")

    return review
  } catch (error) {
    console.error("Error generating lesson plan review:", error)
    throw new Error("Failed to generate lesson plan review")
  }
}
