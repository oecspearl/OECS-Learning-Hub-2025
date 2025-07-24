import { db } from './db'

export interface CurriculumStandard {
  id: string
  code: string
  description: string
  subject: string
  grade_level: string
  strand: string
}

export async function getCurriculumStandards(subject?: string, gradeLevel?: string): Promise<CurriculumStandard[]> {
  try {
    console.log(`Getting curriculum standards for subject: ${subject}, grade: ${gradeLevel}`)

    // Query the curriculum_standards table directly
    const standards = await db.curriculumStandards.findMany({
      subject: subject || undefined,
      grade_level: gradeLevel || undefined
    })

    console.log(`Found ${standards.length} curriculum standards`)
    return standards

  } catch (error) {
    console.error("Error getting curriculum standards:", error)
    // Return empty array if there's an error
    return []
  }
}

export function formatStandardsForPrompt(standards: CurriculumStandard[]): string {
  if (!standards || standards.length === 0) {
    return "No curriculum standards available for this subject and grade level."
  }

  const standardsByStrand: { [key: string]: CurriculumStandard[] } = {}

  // Group standards by strand
  standards.forEach(standard => {
    if (!standardsByStrand[standard.strand]) {
      standardsByStrand[standard.strand] = []
    }
    standardsByStrand[standard.strand].push(standard)
  })

  let formattedStandards = "Curriculum Standards:\n\n"

  // Format standards by strand
  Object.keys(standardsByStrand).forEach(strand => {
    formattedStandards += `${strand}:\n`
    standardsByStrand[strand].forEach(standard => {
      formattedStandards += `- ${standard.code}: ${standard.description}\n`
    })
    formattedStandards += "\n"
  })

  return formattedStandards
}

export async function getStrands(subject?: string, gradeLevel?: string) {
  try {
    const standards = await getCurriculumStandards(subject, gradeLevel)
    const strands = [...new Set(standards.map(s => s.strand))]
    return strands
  } catch (error) {
    console.error("Error getting strands:", error)
    return []
  }
}

export async function getEssentialLearningOutcomes(strandId: string) {
  try {
    // Since we're using the flat curriculum_standards table,
    // we'll return standards filtered by strand
    const standards = await db.curriculumStandards.findMany({
      strand: strandId
    })
    return standards
  } catch (error) {
    console.error("Error getting essential learning outcomes:", error)
    return []
  }
}

export async function getSpecificCurriculumOutcomes(eloId: string) {
  try {
    // Since we're using the flat curriculum_standards table,
    // we'll return standards filtered by code (which represents the ELO)
    const standards = await db.curriculumStandards.findMany({
      code: eloId
    })
    return standards
  } catch (error) {
    console.error("Error getting specific curriculum outcomes:", error)
    return []
  }
}
