import { executeQuery } from "@/lib/db"

// Define types for curriculum standards
export interface CurriculumStandard {
  id?: string
  subject: string
  gradeLevel: string
  strand?: string
  code?: string
  description: string
}

/**
 * Fetches curriculum standards from the database based on subject and grade level
 */
export async function getCurriculumStandards(subject: string, gradeLevel: string): Promise<CurriculumStandard[]> {
  try {
    // First, try to fetch from the database if we have a standards table
    try {
      const result = await executeQuery(
        `SELECT * FROM curriculum_standards 
        WHERE subject = $1 AND grade_level = $2`,
        [subject, gradeLevel]
      ) as any[]

      if (result && result.length > 0) {
        return result.map((row: any) => ({
          id: row.id,
          subject: row.subject,
          gradeLevel: row.grade_level,
          strand: row.strand,
          code: row.code,
          description: row.description,
        }))
      }
    } catch (error) {
      console.log("No curriculum_standards table found, falling back to extracted standards")
    }

    // If no database table, extract from curriculum content
    return await extractStandardsFromCurriculum(subject, gradeLevel)
  } catch (error) {
    console.error("Error fetching curriculum standards:", error)
    return []
  }
}

/**
 * Extracts curriculum standards from curriculum content based on subject and grade level
 */
async function extractStandardsFromCurriculum(subject: string, gradeLevel: string): Promise<CurriculumStandard[]> {
  const standards: CurriculumStandard[] = []

  // Map the subject input to the format used in the curriculum pages
  const subjectMap: Record<string, string> = {
    mathematics: "mathematics",
    math: "mathematics",
    science: "science",
    english: "language-arts",
    "language arts": "language-arts",
    socialstudies: "social-studies",
    "social studies": "social-studies",
  }

  const mappedSubject = subjectMap[subject.toLowerCase()] || subject.toLowerCase()

  try {
    // For Social Studies
    if (mappedSubject === "social-studies") {
      // Extract Historical and Cultural Thinking standards
      const historicalStandards = await extractSocialStudiesStandards(gradeLevel, "historical-cultural-thinking")
      standards.push(...historicalStandards)

      // Extract Spatial Thinking standards
      const spatialStandards = await extractSocialStudiesStandards(gradeLevel, "spatial-thinking")
      standards.push(...spatialStandards)

      // Extract Civic Participation standards
      const civicStandards = await extractSocialStudiesStandards(gradeLevel, "civic-participation")
      standards.push(...civicStandards)

      // Extract Economic Decision Making standards
      const economicStandards = await extractSocialStudiesStandards(gradeLevel, "economic-decision-making")
      standards.push(...economicStandards)
    }

    // For Mathematics
    else if (mappedSubject === "mathematics") {
      // Extract Number Sense standards
      const numberStandards = await extractMathStandards(gradeLevel, "number-sense")
      standards.push(...numberStandards)

      // Extract Operations standards
      const operationsStandards = await extractMathStandards(gradeLevel, "operations-with-numbers")
      standards.push(...operationsStandards)

      // Extract Patterns and Relationships standards
      const patternStandards = await extractMathStandards(gradeLevel, "patterns-relationships")
      standards.push(...patternStandards)

      // Extract Geometrical Thinking standards
      const geometryStandards = await extractMathStandards(gradeLevel, "geometrical-thinking")
      standards.push(...geometryStandards)

      // Extract Measurement standards
      const measurementStandards = await extractMathStandards(gradeLevel, "measurement")
      standards.push(...measurementStandards)

      // Extract Data and Probability standards
      const dataStandards = await extractMathStandards(gradeLevel, "data-probability")
      standards.push(...dataStandards)
    }

    // For Language Arts
    else if (mappedSubject === "language-arts") {
      // Extract Listening and Speaking standards
      const listeningStandards = await extractLanguageArtsStandards(gradeLevel, "listening-speaking")
      standards.push(...listeningStandards)

      // Extract Reading and Viewing standards
      const readingStandards = await extractLanguageArtsStandards(gradeLevel, "reading-viewing")
      standards.push(...readingStandards)

      // Extract Writing and Representing standards
      const writingStandards = await extractLanguageArtsStandards(gradeLevel, "writing-representing")
      standards.push(...writingStandards)
    }

    // For Science
    else if (mappedSubject === "science") {
      // Extract Structure and Properties of Matter standards
      const matterStandards = await extractScienceStandards(gradeLevel, "structure-properties-matter")
      standards.push(...matterStandards)

      // Extract Interdependent Relationships standards
      const relationshipsStandards = await extractScienceStandards(gradeLevel, "interdependent-relationships")
      standards.push(...relationshipsStandards)

      // Extract Earth Systems and Processes standards
      const earthStandards = await extractScienceStandards(gradeLevel, "earth-systems-processes")
      standards.push(...earthStandards)

      // Extract Engineering Design standards
      const engineeringStandards = await extractScienceStandards(gradeLevel, "engineering-design")
      standards.push(...engineeringStandards)
    }

    // If no standards were found, create some generic ones based on the curriculum guide
    if (standards.length === 0) {
      standards.push({
        subject: mappedSubject,
        gradeLevel,
        description: `Students will demonstrate understanding of key concepts in Grade ${gradeLevel} ${subject}.`,
      })
    }

    return standards
  } catch (error) {
    console.error(`Error extracting standards for ${subject} grade ${gradeLevel}:`, error)
    return []
  }
}

/**
 * Extracts Social Studies standards from the database
 */
async function extractSocialStudiesStandards(gradeLevel: string, strand: string): Promise<CurriculumStandard[]> {
  const standards: CurriculumStandard[] = []

  try {
    // Try to fetch from the social_studies_standards table if it exists
    try {
      const result = await executeQuery(
        `SELECT * FROM social_studies_standards 
        WHERE grade_level = $1 AND strand = $2`,
        [gradeLevel, strand]
      ) as any[]

      if (result && result.length > 0) {
        return result.map((row: any) => ({
          id: row.id,
          subject: "social-studies",
          gradeLevel: row.grade_level,
          strand: row.strand,
          code: row.code,
          description: row.description,
        }))
      }
    } catch (error) {
      console.log(`No social_studies_standards table found for ${strand}, using hardcoded standards`)
    }

    // If no table exists, use hardcoded standards based on the curriculum guide
    if (gradeLevel === "2") {
      if (strand === "historical-cultural-thinking") {
        standards.push(
          {
            subject: "social-studies",
            gradeLevel: "2",
            strand,
            code: "HCT-K1",
            description:
              "Identify the early groups of people who settled in our community and explain why and how they came",
          },
          {
            subject: "social-studies",
            gradeLevel: "2",
            strand,
            code: "HCT-S1",
            description:
              "Identify on a map the locations from which the early people that settled in our community came",
          },
          {
            subject: "social-studies",
            gradeLevel: "2",
            strand,
            code: "HCT-V1",
            description: "Recognize that the community is made up of families of different ethnic origins",
          },
          {
            subject: "social-studies",
            gradeLevel: "2",
            strand,
            code: "HCT-K2",
            description: "Know that family relationships can be represented on a family tree",
          },
          {
            subject: "social-studies",
            gradeLevel: "2",
            strand,
            code: "HCT-S2",
            description: "Represent relationships of families on a simple family tree",
          },
          {
            subject: "social-studies",
            gradeLevel: "2",
            strand,
            code: "HCT-V2",
            description:
              "Appreciate that our family tree is made up of a diverse range of people who share a common heritage",
          },
          {
            subject: "social-studies",
            gradeLevel: "2",
            strand,
            code: "HCT-K3",
            description: "State the ways individuals and families share positive human interactions with others",
          },
        )
      } else if (strand === "spatial-thinking") {
        standards.push(
          {
            subject: "social-studies",
            gradeLevel: "2",
            strand,
            code: "ST-K1",
            description: "State and label the four cardinal directions",
          },
          {
            subject: "social-studies",
            gradeLevel: "2",
            strand,
            code: "ST-S1",
            description:
              "Give directions to your community in relation to other districts or parishes using cardinal direction",
          },
          {
            subject: "social-studies",
            gradeLevel: "2",
            strand,
            code: "ST-V1",
            description: "Recognize the value of directions for finding your way",
          },
          {
            subject: "social-studies",
            gradeLevel: "2",
            strand,
            code: "ST-K2",
            description: "Describe the important natural and built features of your community",
          },
        )
      } else if (strand === "civic-participation") {
        standards.push(
          {
            subject: "social-studies",
            gradeLevel: "2",
            strand,
            code: "CP-K1",
            description: "Identify features that make a community unsafe and healthy",
          },
          {
            subject: "social-studies",
            gradeLevel: "2",
            strand,
            code: "CP-S1",
            description: "Engage in actions to improve one's community",
          },
          {
            subject: "social-studies",
            gradeLevel: "2",
            strand,
            code: "CP-V1",
            description: "Appreciate the positive benefits of helping to keep their communities safe and healthy",
          },
          {
            subject: "social-studies",
            gradeLevel: "2",
            strand,
            code: "CP-K2",
            description: "Identify examples of conflict in our communities and neighbourhoods",
          },
        )
      } else if (strand === "economic-decision-making") {
        standards.push(
          {
            subject: "social-studies",
            gradeLevel: "2",
            strand,
            code: "EDM-K1",
            description: "Identify people in the community that are resource persons",
          },
          {
            subject: "social-studies",
            gradeLevel: "2",
            strand,
            code: "EDM-S1",
            description: "Categorize human and natural resources in your local environment",
          },
          {
            subject: "social-studies",
            gradeLevel: "2",
            strand,
            code: "EDM-V1",
            description:
              "Appreciate the importance of respecting the value of our human and natural resources for meeting our basic needs",
          },
          {
            subject: "social-studies",
            gradeLevel: "2",
            strand,
            code: "EDM-K2",
            description: "Describe different uses of land in your community",
          },
        )
      }
    }
  } catch (error) {
    console.error(`Error extracting Social Studies standards for grade ${gradeLevel}, strand ${strand}:`, error)
  }

  return standards
}

/**
 * Extracts Mathematics standards from the database
 */
async function extractMathStandards(gradeLevel: string, strand: string): Promise<CurriculumStandard[]> {
  const standards: CurriculumStandard[] = []

  try {
    // Try to fetch from the mathematics_standards table if it exists
    try {
      const result = await executeQuery(
        `SELECT * FROM mathematics_standards 
        WHERE grade_level = $1 AND strand = $2`,
        [gradeLevel, strand]
      ) as any[]

      if (result && result.length > 0) {
        return result.map((row: any) => ({
          id: row.id,
          subject: "mathematics",
          gradeLevel: row.grade_level,
          strand: row.strand,
          code: row.code,
          description: row.description,
        }))
      }
    } catch (error) {
      console.log(`No mathematics_standards table found for ${strand}, using hardcoded standards`)
    }

    // If no table exists, use hardcoded standards based on the curriculum guide
    if (gradeLevel === "2") {
      if (strand === "number-sense") {
        standards.push(
          {
            subject: "mathematics",
            gradeLevel: "2",
            strand,
            code: "NS2.1",
            description: "Count, read, and write whole numbers up to 1000",
          },
          {
            subject: "mathematics",
            gradeLevel: "2",
            strand,
            code: "NS2.2",
            description: "Compare and order whole numbers up to 1000 using the symbols <, >, and =",
          },
          {
            subject: "mathematics",
            gradeLevel: "2",
            strand,
            code: "NS2.3",
            description: "Understand place value for hundreds, tens, and ones",
          },
        )
      } else if (strand === "operations-with-numbers") {
        standards.push(
          {
            subject: "mathematics",
            gradeLevel: "2",
            strand,
            code: "ON2.1",
            description: "Add and subtract two-digit numbers with and without regrouping",
          },
          {
            subject: "mathematics",
            gradeLevel: "2",
            strand,
            code: "ON2.2",
            description: "Solve one-step word problems involving addition and subtraction",
          },
          {
            subject: "mathematics",
            gradeLevel: "2",
            strand,
            code: "ON2.3",
            description: "Understand the relationship between addition and subtraction",
          },
        )
      }
    }
  } catch (error) {
    console.error(`Error extracting Mathematics standards for grade ${gradeLevel}, strand ${strand}:`, error)
  }

  return standards
}

/**
 * Extracts Language Arts standards from the database
 */
async function extractLanguageArtsStandards(gradeLevel: string, strand: string): Promise<CurriculumStandard[]> {
  const standards: CurriculumStandard[] = []

  try {
    // Try to fetch from the language_arts_standards table if it exists
    try {
      const result = await executeQuery(
        `SELECT * FROM language_arts_standards 
        WHERE grade_level = $1 AND strand = $2`,
        [gradeLevel, strand]
      ) as any[]

      if (result && result.length > 0) {
        return result.map((row: any) => ({
          id: row.id,
          subject: "language-arts",
          gradeLevel: row.grade_level,
          strand: row.strand,
          code: row.code,
          description: row.description,
        }))
      }
    } catch (error) {
      console.log(`No language_arts_standards table found for ${strand}, using hardcoded standards`)
    }

    // If no table exists, use hardcoded standards based on the curriculum guide
    if (gradeLevel === "2") {
      if (strand === "listening-speaking") {
        standards.push(
          {
            subject: "language-arts",
            gradeLevel: "2",
            strand,
            code: "LS2.1",
            description: "Listen attentively and respond appropriately to oral instructions and questions",
          },
          {
            subject: "language-arts",
            gradeLevel: "2",
            strand,
            code: "LS2.2",
            description: "Speak clearly and audibly to express ideas, feelings, and opinions",
          },
          {
            subject: "language-arts",
            gradeLevel: "2",
            strand,
            code: "LS2.3",
            description: "Participate in group discussions and collaborative conversations",
          },
        )
      } else if (strand === "reading-viewing") {
        standards.push(
          {
            subject: "language-arts",
            gradeLevel: "2",
            strand,
            code: "RV2.1",
            description: "Read grade-level texts with accuracy, appropriate rate, and expression",
          },
          {
            subject: "language-arts",
            gradeLevel: "2",
            strand,
            code: "RV2.2",
            description: "Use phonics and word analysis skills to decode words",
          },
          {
            subject: "language-arts",
            gradeLevel: "2",
            strand,
            code: "RV2.3",
            description: "Comprehend texts by asking and answering questions about key details",
          },
        )
      }
    }

    if (gradeLevel === "3") {
      if (strand === "listening-speaking") {
        standards.push(
          {
            subject: "language-arts",
            gradeLevel: "3",
            strand,
            code: "LS3.1",
            description:
              "Listen critically to interpret and evaluate ideas and information in a range of texts and media",
          },
          {
            subject: "language-arts",
            gradeLevel: "3",
            strand,
            code: "LS3.2",
            description:
              "Speak with clarity, using appropriate tone, volume, and pacing for different purposes and audiences",
          },
          {
            subject: "language-arts",
            gradeLevel: "3",
            strand,
            code: "LS3.3",
            description:
              "Participate effectively in collaborative discussions, building on others' ideas and expressing their own clearly",
          },
          {
            subject: "language-arts",
            gradeLevel: "3",
            strand,
            code: "LS3.4",
            description: "Present information, findings, and supporting evidence in an organized manner",
          },
        )
      } else if (strand === "reading-viewing") {
        standards.push(
          {
            subject: "language-arts",
            gradeLevel: "3",
            strand,
            code: "RV3.1",
            description:
              "Read grade-level text with sufficient accuracy, fluency, and expression to support comprehension",
          },
          {
            subject: "language-arts",
            gradeLevel: "3",
            strand,
            code: "RV3.2",
            description:
              "Apply phonics and word analysis skills to decode multisyllabic words and words with complex spelling patterns",
          },
          {
            subject: "language-arts",
            gradeLevel: "3",
            strand,
            code: "RV3.3",
            description: "Determine the main idea and supporting details in informational texts",
          },
          {
            subject: "language-arts",
            gradeLevel: "3",
            strand,
            code: "RV3.4",
            description:
              "Describe characters, settings, and major events in stories using specific details from the text",
          },
          {
            subject: "language-arts",
            gradeLevel: "3",
            strand,
            code: "RV3.5",
            description:
              "Compare and contrast themes, settings, and plots of stories by the same author or on similar topics",
          },
        )
      } else if (strand === "writing-representing") {
        standards.push(
          {
            subject: "language-arts",
            gradeLevel: "3",
            strand,
            code: "WR3.1",
            description:
              "Write opinion pieces that introduce the topic, state an opinion, provide reasons supported by facts, and include a conclusion",
          },
          {
            subject: "language-arts",
            gradeLevel: "3",
            strand,
            code: "WR3.2",
            description:
              "Write informative/explanatory texts that introduce a topic, develop points with facts and details, and provide a concluding statement",
          },
          {
            subject: "language-arts",
            gradeLevel: "3",
            strand,
            code: "WR3.3",
            description:
              "Write narratives that establish a situation, introduce characters, organize events sequentially, use dialogue and descriptions, and provide closure",
          },
          {
            subject: "language-arts",
            gradeLevel: "3",
            strand,
            code: "WR3.4",
            description:
              "Use the writing process (planning, drafting, revising, editing) to develop and strengthen writing",
          },
          {
            subject: "language-arts",
            gradeLevel: "3",
            strand,
            code: "WR3.5",
            description: "Use digital tools to produce and publish writing and collaborate with others",
          },
        )
      }
    }
  } catch (error) {
    console.error(`Error extracting Language Arts standards for grade ${gradeLevel}, strand ${strand}:`, error)
  }

  return standards
}

/**
 * Extracts Science standards from the database
 */
async function extractScienceStandards(gradeLevel: string, strand: string): Promise<CurriculumStandard[]> {
  const standards: CurriculumStandard[] = []

  try {
    // Try to fetch from the science_standards table if it exists
    try {
      const result = await executeQuery(
        `SELECT * FROM science_standards 
        WHERE grade_level = $1 AND strand = $2`,
        [gradeLevel, strand]
      ) as any[]

      if (result && result.length > 0) {
        return result.map((row: any) => ({
          id: row.id,
          subject: "science",
          gradeLevel: row.grade_level,
          strand: row.strand,
          code: row.code,
          description: row.description,
        }))
      }
    } catch (error) {
      console.log(`No science_standards table found for ${strand}, using hardcoded standards`)
    }

    // If no table exists, use hardcoded standards based on the curriculum guide
    if (gradeLevel === "2") {
      if (strand === "structure-properties-matter") {
        standards.push(
          {
            subject: "science",
            gradeLevel: "2",
            strand,
            code: "SPM2.1",
            description: "Classify materials based on their observable properties",
          },
          {
            subject: "science",
            gradeLevel: "2",
            strand,
            code: "SPM2.2",
            description:
              "Analyze data from testing different materials to determine which have properties best suited for a purpose",
          },
          {
            subject: "science",
            gradeLevel: "2",
            strand,
            code: "SPM2.3",
            description: "Observe and describe how objects can be disassembled and reassembled into new objects",
          },
        )
      } else if (strand === "interdependent-relationships") {
        standards.push(
          {
            subject: "science",
            gradeLevel: "2",
            strand,
            code: "IR2.1",
            description: "Plan and conduct investigations to determine what plants need to grow",
          },
          {
            subject: "science",
            gradeLevel: "2",
            strand,
            code: "IR2.2",
            description: "Develop models to demonstrate how plants depend on animals for pollination or seed dispersal",
          },
          {
            subject: "science",
            gradeLevel: "2",
            strand,
            code: "IR2.3",
            description: "Compare the diversity of life in different habitats",
          },
        )
      }
    }
  } catch (error) {
    console.error(`Error extracting Science standards for grade ${gradeLevel}, strand ${strand}:`, error)
  }

  return standards
}

/**
 * Formats curriculum standards into a string for inclusion in a prompt
 */
export function formatStandardsForPrompt(standards: CurriculumStandard[]): string {
  if (!standards || standards.length === 0) {
    return "No specific curriculum standards available. Please use general educational standards appropriate for the subject and grade level."
  }

  // Group standards by strand
  const standardsByStrand: Record<string, CurriculumStandard[]> = {}

  standards.forEach((standard) => {
    const strand = standard.strand || "General"
    if (!standardsByStrand[strand]) {
      standardsByStrand[strand] = []
    }
    standardsByStrand[strand].push(standard)
  })

  // Format the standards by strand
  let formattedStandards = "OECS Curriculum Standards:\n\n"

  Object.entries(standardsByStrand).forEach(([strand, strandStandards]) => {
    // Format the strand name for display
    const formattedStrand = strand
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    formattedStandards += `${formattedStrand}:\n`

    strandStandards.forEach((standard) => {
      const code = standard.code ? `${standard.code}: ` : ""
      formattedStandards += `- ${code}${standard.description}\n`
    })

    formattedStandards += "\n"
  })

  return formattedStandards
}
