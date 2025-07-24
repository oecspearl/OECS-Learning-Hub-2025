"use server"

import { getCurriculumStandards as getStandards } from "@/lib/curriculum-standards"
import type { CurriculumStandard } from "@/lib/curriculum-standards"
import { db } from "@/lib/db"

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
      id: `default-${subject}-${gradeLevel}`,
      code: `${subject.toUpperCase()}.${gradeLevel}.1`,
      subject,
      grade_level: gradeLevel,
      strand: 'General',
      description: `Students will demonstrate understanding of key concepts in Grade ${gradeLevel} ${subject}.`
    }]
  }
}

export async function getAllCurriculumStandards(): Promise<CurriculumStandard[]> {
  try {
    console.log("Getting all curriculum standards for standards page")
    
    // Query all standards from the curriculum_standards table
    const standards = await db.curriculumStandards.findMany()
    
    console.log(`Found ${standards.length} total curriculum standards`)
    return standards

  } catch (error) {
    console.error("Error in getAllCurriculumStandards server action:", error)
    return []
  }
} 