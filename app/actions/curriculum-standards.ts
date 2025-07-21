"use server"

import { getCurriculumStandards as getStandards } from "@/lib/curriculum-standards"
import type { CurriculumStandard } from "@/lib/curriculum-standards"

export async function getCurriculumStandards(subject: string, gradeLevel: string): Promise<CurriculumStandard[]> {
  if (!subject || !gradeLevel) {
    console.error("Missing required parameters:", { subject, gradeLevel })
    return []
  }

  try {
    const standards = await getStandards(subject, gradeLevel)
    if (!standards || standards.length === 0) {
      console.log(`No standards found for ${subject} grade ${gradeLevel}`)
      return []
    }
    return standards
  } catch (error) {
    console.error("Error in getCurriculumStandards server action:", error)
    // Return a default standard to prevent UI errors
    return [{
      subject,
      grade_level: gradeLevel,
      description: `Students will demonstrate understanding of key concepts in Grade ${gradeLevel} ${subject}.`
    }]
  }
} 