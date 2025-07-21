import { db } from './db'

export interface CurriculumStandard {
  id: string
  code: string
  description: string
  subject: string
  grade_level: string
  strand_name?: string
  elo_description?: string
  sco_description?: string
}

export async function getCurriculumStandards(subject?: string, gradeLevel?: string): Promise<CurriculumStandard[]> {
  try {
    console.log(`Getting curriculum standards for subject: ${subject}, grade: ${gradeLevel}`)

    // Get strands first
    const strands = await db.strands.findMany({
      subject: subject || undefined,
      grade_level: gradeLevel || undefined,
      is_active: true
    })

    console.log(`Found ${strands.length} strands`)

    const standards: CurriculumStandard[] = []

    // For each strand, get the essential learning outcomes
    for (const strand of strands) {
      const elos = await db.essentialLearningOutcomes.findMany({
        strand_id: strand.id,
        is_active: true
      })

      console.log(`Found ${elos.length} ELOs for strand ${strand.code}`)

      // For each ELO, get the specific curriculum outcomes
      for (const elo of elos) {
        const scos = await db.specificCurriculumOutcomes.findMany({
          elo_id: elo.id,
          is_active: true
        })

        console.log(`Found ${scos.length} SCOs for ELO ${elo.code}`)

        // Add the strand level standard
        standards.push({
          id: strand.id,
          code: strand.code,
          description: strand.name,
          subject: strand.subject,
          grade_level: strand.grade_level,
          strand_name: strand.name
        })

        // Add the ELO level standard
        standards.push({
          id: elo.id,
          code: elo.code,
          description: elo.description,
          subject: strand.subject,
          grade_level: strand.grade_level,
          strand_name: strand.name,
          elo_description: elo.description
        })

        // Add the SCO level standards
        for (const sco of scos) {
          standards.push({
            id: sco.id,
            code: sco.code,
            description: sco.description,
            subject: strand.subject,
            grade_level: strand.grade_level,
            strand_name: strand.name,
            elo_description: elo.description,
            sco_description: sco.description
          })
        }
      }
    }

    console.log(`Returning ${standards.length} total curriculum standards`)
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
    if (standard.strand_name) {
      if (!standardsByStrand[standard.strand_name]) {
        standardsByStrand[standard.strand_name] = []
      }
      standardsByStrand[standard.strand_name].push(standard)
    }
  })

  let formattedStandards = "Curriculum Standards:\n\n"

  Object.entries(standardsByStrand).forEach(([strandName, strandStandards]) => {
    formattedStandards += `${strandName}:\n`
    
    strandStandards.forEach(standard => {
      if (standard.elo_description && standard.sco_description) {
        // This is a specific curriculum outcome
        formattedStandards += `  - ${standard.code}: ${standard.description}\n`
      } else if (standard.elo_description) {
        // This is an essential learning outcome
        formattedStandards += `  - ${standard.code}: ${standard.description}\n`
      } else {
        // This is a strand
        formattedStandards += `  - ${standard.code}: ${standard.description}\n`
      }
    })
    
    formattedStandards += "\n"
  })

  return formattedStandards
}

export async function getStrands(subject?: string, gradeLevel?: string) {
  try {
    return await db.strands.findMany({
      subject: subject || undefined,
      grade_level: gradeLevel || undefined,
      is_active: true
    })
  } catch (error) {
    console.error("Error getting strands:", error)
    return []
  }
}

export async function getEssentialLearningOutcomes(strandId: string) {
  try {
    return await db.essentialLearningOutcomes.findMany({
      strand_id: strandId,
      is_active: true
    })
  } catch (error) {
    console.error("Error getting essential learning outcomes:", error)
    return []
  }
}

export async function getSpecificCurriculumOutcomes(eloId: string) {
  try {
    return await db.specificCurriculumOutcomes.findMany({
      elo_id: eloId,
      is_active: true
    })
  } catch (error) {
    console.error("Error getting specific curriculum outcomes:", error)
    return []
  }
}
