import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from "../lib/schema"

const connectionString = "postgres://neondb_owner:npg_9D3bEqvSZgwA@ep-wandering-breeze-a4cxdyt0-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require"

async function createSampleData() {
  const client = postgres(connectionString)
  const db = drizzle(client, { schema })

  try {
    // Create a strand
    const [strand] = await db.insert(schema.strands).values({
      name: "Mathematics",
      description: "Core mathematical concepts and skills",
      order: 1
    }).returning()
    console.log("Created strand:", strand)

    // Create an Essential Learning Outcome
    const [elo] = await db.insert(schema.essentialLearningOutcomes).values({
      strandId: strand.id,
      code: "ELO 1",
      description: "Students will demonstrate number sense and apply number theory concepts",
      gradeExpectations: "Grades 1-3"
    }).returning()
    console.log("Created ELO:", elo)

    // Create a Specific Curriculum Outcome
    const [sco] = await db.insert(schema.specificCurriculumOutcomes).values({
      eloId: elo.id,
      code: "1.1",
      description: "Count, represent, and describe numbers to 100"
    }).returning()
    console.log("Created SCO:", sco)

    // Create an Assessment Strategy
    const [assessment] = await db.insert(schema.assessmentStrategies).values({
      eloId: elo.id,
      type: "Observation",
      description: "Observe students counting objects and recording numbers",
      examples: "Use manipulatives, number charts, and real-world objects"
    }).returning()
    console.log("Created Assessment Strategy:", assessment)

    // Create a Learning Strategy
    const [learningStrategy] = await db.insert(schema.learningStrategies).values({
      scoId: sco.id,
      title: "Number Line Activities",
      description: "Use number lines to develop counting skills",
      resources: "Number line charts, counting manipulatives",
      integrations: "Connect with science for measurement activities"
    }).returning()
    console.log("Created Learning Strategy:", learningStrategy)

    // Create a Resource
    const [resource] = await db.insert(schema.resources).values({
      strandId: strand.id,
      title: "Number Sense Workbook",
      type: "Book",
      url: "https://example.com/number-sense",
      description: "Comprehensive workbook for developing number sense"
    }).returning()
    console.log("Created Resource:", resource)

    // Create Teacher Content
    const [teacherContent] = await db.insert(schema.teacherContent).values({
      eloId: elo.id,
      title: "Understanding Number Sense",
      content: "Key concepts and teaching strategies for developing number sense",
      resources: "Lesson plans, activity ideas, assessment tools"
    }).returning()
    console.log("Created Teacher Content:", teacherContent)

    console.log("Successfully created all sample data")
  } catch (error) {
    console.error("Error creating sample data:", error)
    throw error
  } finally {
    await client.end()
  }
}

createSampleData()
  .then(() => {
    console.log("Sample data creation completed")
    process.exit(0)
  })
  .catch((error) => {
    console.error("Sample data creation failed:", error)
    process.exit(1)
  }) 