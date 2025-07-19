import { neon } from "@neondatabase/serverless"
import dotenv from "dotenv"

dotenv.config()

const sql = neon(process.env.DATABASE_URL)

async function seedDatabase() {
  console.log("Starting database seeding...")

  // Create tables if they don't exist
  await sql`
    CREATE TABLE IF NOT EXISTS strands (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      description TEXT,
      "order" INTEGER NOT NULL
    );
    
    CREATE TABLE IF NOT EXISTS essential_learning_outcomes (
      id SERIAL PRIMARY KEY,
      strand_id INTEGER NOT NULL REFERENCES strands(id),
      code TEXT NOT NULL,
      description TEXT NOT NULL,
      grade_expectations TEXT
    );
    
    CREATE TABLE IF NOT EXISTS specific_curriculum_outcomes (
      id SERIAL PRIMARY KEY,
      elo_id INTEGER NOT NULL REFERENCES essential_learning_outcomes(id),
      code TEXT NOT NULL,
      description TEXT NOT NULL
    );
    
    CREATE TABLE IF NOT EXISTS assessment_strategies (
      id SERIAL PRIMARY KEY,
      elo_id INTEGER NOT NULL REFERENCES essential_learning_outcomes(id),
      type TEXT NOT NULL,
      description TEXT NOT NULL,
      examples TEXT
    );
    
    CREATE TABLE IF NOT EXISTS learning_strategies (
      id SERIAL PRIMARY KEY,
      sco_id INTEGER NOT NULL REFERENCES specific_curriculum_outcomes(id),
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      resources TEXT,
      integrations TEXT
    );
    
    CREATE TABLE IF NOT EXISTS resources (
      id SERIAL PRIMARY KEY,
      strand_id INTEGER NOT NULL REFERENCES strands(id),
      title TEXT NOT NULL,
      type TEXT NOT NULL,
      url TEXT,
      description TEXT
    );
    
    CREATE TABLE IF NOT EXISTS teacher_content (
      id SERIAL PRIMARY KEY,
      elo_id INTEGER NOT NULL REFERENCES essential_learning_outcomes(id),
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      resources TEXT
    );
  `

  // Clear existing data
  await sql`TRUNCATE TABLE learning_strategies CASCADE`
  await sql`TRUNCATE TABLE assessment_strategies CASCADE`
  await sql`TRUNCATE TABLE specific_curriculum_outcomes CASCADE`
  await sql`TRUNCATE TABLE teacher_content CASCADE`
  await sql`TRUNCATE TABLE resources CASCADE`
  await sql`TRUNCATE TABLE essential_learning_outcomes CASCADE`
  await sql`TRUNCATE TABLE strands CASCADE`

  // Insert strands
  const strands = [
    {
      name: "Listening and Speaking",
      description:
        "Listening and Speaking are foundational for all learning. The strategies and skills of listening and speaking allow learners to contribute meaningfully to social environments.",
      order: 1,
    },
    {
      name: "Reading and Viewing",
      description:
        "Reading and viewing are meaning-making, problem solving activities that provide opportunities to interact with a wide range of written and visual text for a variety of purposes.",
      order: 2,
    },
    {
      name: "Writing and Representing",
      description:
        "Writing and Representing strategies and skills provide opportunities for learners to communicate with their peers and other meaningful audiences within and beyond their community.",
      order: 3,
    },
  ]

  for (const strand of strands) {
    await sql`
      INSERT INTO strands (name, description, "order")
      VALUES (${strand.name}, ${strand.description}, ${strand.order})
    `
  }

  console.log("Strands inserted successfully")

  // Get strand IDs
  const strandResults = await sql`SELECT id, name FROM strands`
  const strandMap = new Map()
  strandResults.forEach((strand) => {
    strandMap.set(strand.name, strand.id)
  })

  // Insert ELOs
  const elos = [
    {
      strand: "Listening and Speaking",
      code: "ELO 1",
      description:
        "The learner will explore, use, and critically apply oral language for pleasure, personal growth, to form and foster relationships and, to develop an appreciation of and celebration of culture and of oral languages.",
      grade_expectations:
        "For pleasure and personal growth, listen to a range of music, rhymes, poetry, stories, information, conversation and environmental sounds for personal enjoyment, demonstrate interest, curiosity and engagement in sharing the experiences of others with oral stories and information sharing, respond with thought to artistic representations.",
    },
    {
      strand: "Reading and Viewing",
      code: "ELO 2",
      description:
        "The learner will demonstrate a variety of ways to use background knowledge and interests to select and engage critically with a range of culturally diverse paper-based, visual, and digital texts for pleasure and personal growth.",
      grade_expectations:
        "Use Background knowledge and interests, connect background knowledge of common events, well known stories, poems, and songs to establish a foundation of understanding, titles, pictures and some words and phrases, make imaginative and real-life connections to their own experiences.",
    },
    {
      strand: "Reading and Viewing",
      code: "ELO 3",
      description:
        "The learner will interact with understanding and critical thought to a variety of genres and text forms using comprehension strategies, vocabulary, language structures, and graphophonic cues.",
      grade_expectations:
        "Interact with understanding and critical thought to a wide range of genres and text forms, further develop and apply Concepts of Print to engage with Emergent/Early to Early Stage text, use comprehension strategies before reading, during reading and after reading to establish the meaning of the passage.",
    },
    {
      strand: "Reading and Viewing",
      code: "ELO 4",
      description:
        "Students will develop their understanding of how an author's purpose and style, genre, text form, text features and choice of vocabulary, language, influence the meaning of text and define the author's craft.",
      grade_expectations:
        "Read for pleasure and personal growth, reflect on and identify their strengths as readers, areas for improvement and the strategies they found most helpful before, during and after reading.",
    },
    {
      strand: "Writing and Representing",
      code: "ELO 5",
      description:
        "Learners will generate, gather and organize thoughts to explore, clarify and reflect on ideas, feelings and experiences as they create a written or representative draft, independently and collaboratively, for a range of audiences and purposes.",
      grade_expectations:
        "Write for pleasure and personal growth, use the writing process to share ideas with peers, identify personal strengths as writers and search for new ways to explore ideas.",
    },
    {
      strand: "Writing and Representing",
      code: "ELO 6",
      description:
        "Learners will revise the organization, and language use (vocabulary and grammar) of drafted writing or representation, collaboratively and independently, for a variety of purposes and audiences.",
      grade_expectations:
        "Write for pleasure and personal growth, use the writing process to share ideas with peers, identify personal strengths as writers and search for new ways to explore ideas.",
    },
    {
      strand: "Writing and Representing",
      code: "ELO 7",
      description:
        "Learners will use their knowledge of spoken language, written language and writing conventions to refine the precision and enhance the meaning and clarity of their written work.",
      grade_expectations:
        "Write for pleasure and personal growth, use the writing process to share ideas with peers, identify personal strengths as writers and search for new ways to explore ideas.",
    },
  ]

  const eloMap = new Map()

  for (const elo of elos) {
    const strandId = strandMap.get(elo.strand)
    const result = await sql`
      INSERT INTO essential_learning_outcomes (strand_id, code, description, grade_expectations)
      VALUES (${strandId}, ${elo.code}, ${elo.description}, ${elo.grade_expectations})
      RETURNING id
    `
    eloMap.set(elo.code, result[0].id)
  }

  console.log("ELOs inserted successfully")

  // Insert a sample of SCOs for ELO 1 (Listening and Speaking)
  const listeningScOs = [
    { code: "1.1", description: "Choose to listen to music, poetry and stories for pleasure." },
    { code: "1.2", description: "Connect environmental sounds to meaning." },
    { code: "1.3", description: "Use different voices in role playing to indicate tone and mood." },
    { code: "1.4", description: "Describe how musical and environmental sounds affect mood." },
    {
      code: "1.5",
      description:
        "Use Listening Comprehension Strategies to make and simplify meaning: ask questions, recall ideas, predict, visualise, and make connections.",
    },
  ]

  const scoMap = new Map()

  for (const sco of listeningScOs) {
    const eloId = eloMap.get("ELO 1")
    const result = await sql`
      INSERT INTO specific_curriculum_outcomes (elo_id, code, description)
      VALUES (${eloId}, ${sco.code}, ${sco.description})
      RETURNING id
    `
    scoMap.set(sco.code, result[0].id)
  }

  console.log("SCOs inserted successfully")

  // Insert sample assessment strategies
  const assessmentStrategies = [
    {
      eloCode: "ELO 1",
      type: "Conversations",
      description:
        "Anecdotal Notes: Learning and assessment go hand in hand. As learners are engaged prior to learning, during learning and after learning, listen, observe and record anecdotal notes in the Observation of Student Learning Journal.",
      examples:
        "Sample format for anecdotal notes during Language Arts:<br><pre>Name:<br>Listening and Speaking | Reading and Viewing | Writing and Representing<br>Date:<br>Focus: (insert SCOs observed)<br>Progress observed:<br>Next Steps:</pre>",
    },
    {
      eloCode: "ELO 1",
      type: "Observations",
      description:
        "During lessons playtime, observe and gather information about the learner's comfort level with communication, friendships, language choices, and vocabulary use.",
      examples: null,
    },
    {
      eloCode: "ELO 1",
      type: "Products",
      description:
        'Questioning: After a listening activity, such as a Teacher "Read Aloud", ask questions of individual learners or groups of learners questions that focus on understanding and applying the information in the fiction or nonfiction passage.',
      examples:
        "Use a Four level Rubric to gather information about learner progress in Listening and Speaking as they participate in activities throughout the year.",
    },
  ]

  for (const strategy of assessmentStrategies) {
    const eloId = eloMap.get(strategy.eloCode)
    await sql`
      INSERT INTO assessment_strategies (elo_id, type, description, examples)
      VALUES (${eloId}, ${strategy.type}, ${strategy.description}, ${strategy.examples})
    `
  }

  console.log("Assessment strategies inserted successfully")

  // Insert sample learning strategies
  const learningStrategies = [
    {
      scoCode: "1.1",
      title: "Listen to enjoy and reflect",
      description:
        "Schedule opportunities to pause, relax and listen for pleasure and personal growth by providing brief selections of a variety of genres of music throughout the day:<br>• to welcome students at the beginning of the day<br>• to transition between subjects<br>• to provide a short opportunity to stretch and/or relax<br>• to connect a well know song to the lesson's focus<br><br>After the listening experience, engage the class or small groups of learners about:<br>- was the selection enjoyable and why?<br>- how did the selection make them feel?<br>- what was a special part of the selection they would like to share?<br>- what other songs, stories, etc. would they enjoy listening to?",
      resources: null,
      integrations: null,
    },
    {
      scoCode: "1.2",
      title: "The Sounds of Silence",
      description:
        'Gather learners together and demonstrate how to pause and listen by asking the learners to create total silence in the classroom. Once learners are silent, direct their attention to the remaining ambient or "non voice" sounds. As a sound is identified, engage the class in a "whisper" conversation to discuss the messages and meaning each sound conveys. For example:<br>• truck passing by – where do you think it is going? Why do you think this?<br>• bird song – what do you think the bird is saying? Why is the bird saying that?<br>• hallway sounds – what do you think is going on? Could it be something else? etc.<br><br>To maintain the silence and focus on listening, learners also respond in a whisper.<br>Practice The Sounds of Silence while inside, outside, and on a community walk.',
      resources: null,
      integrations: null,
    },
  ]

  for (const strategy of learningStrategies) {
    const scoId = scoMap.get(strategy.scoCode)
    await sql`
      INSERT INTO learning_strategies (sco_id, title, description, resources, integrations)
      VALUES (${scoId}, ${strategy.title}, ${strategy.description}, ${strategy.resources}, ${strategy.integrations})
    `
  }

  console.log("Learning strategies inserted successfully")

  console.log("Database seeding completed successfully!")
}

seedDatabase().catch((error) => {
  console.error("Error seeding database:", error)
  process.exit(1)
})
