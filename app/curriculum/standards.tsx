"use client"
import { useState, useMemo } from "react"
import { BookOpen, Calculator, Atom, Globe, XCircle, ChevronDown, ChevronRight } from "lucide-react"

export const dynamic = "force-dynamic"

interface CurriculumStandard {
  subject: string
  grade_level: string
  strand: string
  code: string
  description: string
}

// Complete curriculum standards for all subjects and grades
const standards: CurriculumStandard[] = [
  // --- MATHEMATICS K–6 ---
  // Kindergarten
  { subject: "mathematics", grade_level: "K", strand: "Number Sense", code: "K-MA-NS-1.1", description: `Whole Number - Saying Number Sequence, Meaningful Counting and Skip Counting:\n- Say the number that comes before a given number\n- Use a number line to support counting\n- Recite number names from a given number to a given number\n- Count with meaning to 10, by building quantities\n- Count with meaning to 10, by matching quantity and numeral` },
  { subject: "mathematics", grade_level: "K", strand: "Number Sense", code: "K-MA-NS-1.2", description: `Whole Number – Representing and Partitioning Quantities:\n- Represent a given number up to 10 using a variety of concrete models, including 5 and 10 frames\n- Answer the question, How many are in the set? using the last number counted in a set\n- In a fixed arrangement, starting in different locations, can show that the count of the number of objects in a set does not change\n- Count the number of objects in a given set, rearrange the objects, predict the new count, and recount to verify the prediction` },
  { subject: "mathematics", grade_level: "K", strand: "Number Sense", code: "K-MA-NS-1.4", description: `Whole Number – Comparing and Ordering Quantities:\n- Look briefly at a given familiar arrangement of one to five objects or dots and identify the number represented without counting\n- Compare the number of objects in two sets of up to 10 objects, using phrases such as 'same number as', 'equal to', more than', and 'less than'\n- Make a set that has the same number of objects as a given set\n- Make a set that has one more object than a given set` },
  { subject: "mathematics", grade_level: "K", strand: "Operations with Numbers", code: "K-MA-ON-1.1", description: `Additive Thinking - Understanding the meaning of addition and subtraction and how they relate:\n- Compose and decompose numbers up to 9 in a variety of ways using manipulatives, fingers and pictures` },
  { subject: "mathematics", grade_level: "K", strand: "Patterns and Relationship", code: "K-MA-PR-1.1", description: `Recognizing, Describing and Extending Patterns - Describe, create, extend and generalise patterns:\n- Create simple repeating patterns (2 elements)\n- Extend simple repeating patterns (2 elements)\n- Copy a given repeating pattern\n- Extend a variety of given repeating patterns to two more repetitions\n- Create a repeating pattern using manipulatives, musical instruments, or action\n- Identify and describe a repeating pattern in the classroom, the school, and outdoors` },
  { subject: "mathematics", grade_level: "K", strand: "Geometrical Thinking", code: "K-MA-GT-1.1", description: `Analysing and describing 3D shapes:\n- Build and describe 3-D objects\n- Create a representation of a given 3-D object using building blocks, and compare the representation to the original 3-D object\n- Describe a given 3-D object using words such as big, little, round, like a box or a can` },
  { subject: "mathematics", grade_level: "K", strand: "Geometrical Thinking", code: "K-MA-GT-1.2", description: `Recognize, Name and Describe Shapes – 2D and 3D:\n- Identify and describe shapes (2-D = squares, circles, triangles, 3-D = cubes, cones, and spheres)\n- Describe objects in the environment using names of shapes and describe the relative positions of these objects\n- Correctly name shapes regardless of their orientations or overall size` },
  
  // Grade 1 Mathematics
  { subject: "mathematics", grade_level: "1", strand: "Number Sense", code: "G1-MA-NS-1.1", description: "Using Whole Numbers: Learners will meaningfully sequence and use a range of counting and grouping strategies" },
  { subject: "mathematics", grade_level: "1", strand: "Number Sense", code: "G1-MA-NS-1.2", description: "Whole Number – Representing and Partitioning Quantities" },
  { subject: "mathematics", grade_level: "1", strand: "Number Sense", code: "G1-MA-NS-1.3", description: "Whole Number – Comparing and Ordering Quantities" },
  { subject: "mathematics", grade_level: "1", strand: "Number Sense", code: "G1-MA-NS-1.4", description: "Whole Number – Understanding Place Value" },
  { subject: "mathematics", grade_level: "1", strand: "Operations with Numbers", code: "G1-MA-ON-1.1", description: "Additive Thinking – Understanding the Meaning of Addition and Subtraction and how they Related" },
  { subject: "mathematics", grade_level: "1", strand: "Operations with Numbers", code: "G1-MA-ON-1.2", description: "Additive Thinking – Compute Fluently Using Operations (+,-)" },
  { subject: "mathematics", grade_level: "1", strand: "Operations with Numbers", code: "G1-MA-ON-2.1", description: "Multiplicative thinking - Learners will understand the meaning of multiplication and division and how they relate" },
  { subject: "mathematics", grade_level: "1", strand: "Patterns and Relationships", code: "G1-MA-PR-1.1", description: "Recognizing, Describing and Extending Patterns - Describe, create, extend and generalise patterns" },
  { subject: "mathematics", grade_level: "1", strand: "Patterns and Relationships", code: "G1-MA-PR-1.2", description: "Learners will recognize, describe, and extend for increasing and decreasing patterns" },
  { subject: "mathematics", grade_level: "1", strand: "Patterns and Relationships", code: "G1-MA-PR-2.1", description: "Variables and Relationships - Representing Unknowns" },
  { subject: "mathematics", grade_level: "1", strand: "Patterns and Relationships", code: "G1-MA-PR-2.2", description: "Variables and Relationships - Understanding and representing equivalence" },
  { subject: "mathematics", grade_level: "1", strand: "Patterns and Relationships", code: "G1-MA-PR-2.3", description: "Variables and Relationships - Writing Expressions and Equations" },
  { subject: "mathematics", grade_level: "1", strand: "Geometrical Thinking", code: "G1-MA-GT-1.1", description: "Explore and Analyze Geometric Shapes and Relationships - Developing spatial sense" },
  { subject: "mathematics", grade_level: "1", strand: "Geometrical Thinking", code: "G1-MA-GT-1.2", description: "Explore and Analyze Geometric Shapes and Relationships - - Sorting, patterning, and building with 2D & 3D Shapes" },
  { subject: "mathematics", grade_level: "1", strand: "Geometrical Thinking", code: "G1-MA-GT-2.1", description: "Recognizing, Naming and Describing Shapes - Analysing and describing shapes" },
  { subject: "mathematics", grade_level: "1", strand: "Geometrical Thinking", code: "G1-MA-GT-2.2", description: "Recognizing, Naming and Describing Shapes - Naming 2D & 3D shapes" },
  { subject: "mathematics", grade_level: "1", strand: "Geometrical Thinking", code: "G1-MA-GT-2.3", description: "Recognizing, Naming and Describing Shapes – Describing relationships between and among shapes" },
  { subject: "mathematics", grade_level: "1", strand: "Measurement", code: "G1-MA-M-1.1", description: "Understanding What and How We Measure - Developing an understanding of measurable attributes" },
  { subject: "mathematics", grade_level: "1", strand: "Measurement", code: "G1-MA-M-1.2", description: "Understanding What and How We Measure - Comparing and ordering based on measurable attributes" },
  { subject: "mathematics", grade_level: "1", strand: "Measurement", code: "G1-MA-M-1.3", description: "Understanding What and How We Measure - Developing knowledge and applying non-standard units of measure" },
  { subject: "mathematics", grade_level: "1", strand: "Data Handling and Probability", code: "G1-MA-DMP-1.1", description: "Collecting, Organising and Displaying Data - Formulating questions that can be answered with data" },
  
  // Grade 2 Mathematics
  { subject: "mathematics", grade_level: "2", strand: "Number Sense", code: "NS2.1", description: "Count, read, and write whole numbers up to 1000" },
  { subject: "mathematics", grade_level: "2", strand: "Number Sense", code: "NS2.2", description: "Compare and order whole numbers up to 1000 using the symbols <, >, and =" },
  { subject: "mathematics", grade_level: "2", strand: "Number Sense", code: "NS2.3", description: "Understand place value for hundreds, tens, and ones" },
  { subject: "mathematics", grade_level: "2", strand: "Operations with Numbers", code: "ON2.1", description: "Add and subtract two-digit numbers with and without regrouping" },
  { subject: "mathematics", grade_level: "2", strand: "Operations with Numbers", code: "ON2.2", description: "Solve one-step word problems involving addition and subtraction" },
  { subject: "mathematics", grade_level: "2", strand: "Operations with Numbers", code: "ON2.3", description: "Understand the relationship between addition and subtraction" },
  { subject: "mathematics", grade_level: "2", strand: "Patterns and Relationships", code: "PR2.1", description: "Recognize, describe, and extend patterns" },
  { subject: "mathematics", grade_level: "2", strand: "Patterns and Relationships", code: "PR2.2", description: "Use patterns to solve problems" },
  { subject: "mathematics", grade_level: "2", strand: "Geometrical Thinking", code: "GT2.1", description: "Identify and describe two-dimensional shapes" },
  { subject: "mathematics", grade_level: "2", strand: "Geometrical Thinking", code: "GT2.2", description: "Identify and describe three-dimensional shapes" },
  { subject: "mathematics", grade_level: "2", strand: "Measurement", code: "M2.1", description: "Measure and estimate lengths in standard units" },
  { subject: "mathematics", grade_level: "2", strand: "Measurement", code: "M2.2", description: "Tell and write time from analog and digital clocks" },
  { subject: "mathematics", grade_level: "2", strand: "Data Handling and Probability", code: "DP2.1", description: "Collect, organize, and represent data" },
  { subject: "mathematics", grade_level: "2", strand: "Data Handling and Probability", code: "DP2.2", description: "Interpret data presented in picture graphs and bar graphs" },
  
  // Grade 3 Mathematics
  { subject: "mathematics", grade_level: "3", strand: "Number Sense", code: "NS3.1", description: "Read, write, and compare whole numbers up to 10,000" },
  { subject: "mathematics", grade_level: "3", strand: "Number Sense", code: "NS3.2", description: "Understand place value for thousands, hundreds, tens, and ones" },
  { subject: "mathematics", grade_level: "3", strand: "Number Sense", code: "NS3.3", description: "Round numbers to the nearest 10 or 100" },
  { subject: "mathematics", grade_level: "3", strand: "Number Sense", code: "NS3.4", description: "Represent fractions as parts of a whole and on a number line" },
  { subject: "mathematics", grade_level: "3", strand: "Number Sense", code: "NS3.5", description: "Compare fractions with like denominators" },
  { subject: "mathematics", grade_level: "3", strand: "Operations with Numbers", code: "ON3.1", description: "Fluently add and subtract within 1000 using strategies and algorithms" },
  { subject: "mathematics", grade_level: "3", strand: "Operations with Numbers", code: "ON3.2", description: "Multiply and divide within 100 using various strategies" },
  { subject: "mathematics", grade_level: "3", strand: "Operations with Numbers", code: "ON3.3", description: "Understand the relationship between multiplication and division" },
  { subject: "mathematics", grade_level: "3", strand: "Operations with Numbers", code: "ON3.4", description: "Solve two-step word problems using the four operations" },
  { subject: "mathematics", grade_level: "3", strand: "Operations with Numbers", code: "ON3.5", description: "Identify arithmetic patterns and explain them using properties of operations" },
  { subject: "mathematics", grade_level: "3", strand: "Patterns and Relationships", code: "PR3.1", description: "Identify, create, and extend patterns in numbers and shapes" },
  { subject: "mathematics", grade_level: "3", strand: "Patterns and Relationships", code: "PR3.2", description: "Analyze patterns to identify rules and make predictions" },
  { subject: "mathematics", grade_level: "3", strand: "Patterns and Relationships", code: "PR3.3", description: "Represent and solve problems involving patterns" },
  { subject: "mathematics", grade_level: "3", strand: "Geometrical Thinking", code: "GT3.1", description: "Understand that shapes in different categories may share attributes" },
  { subject: "mathematics", grade_level: "3", strand: "Geometrical Thinking", code: "GT3.2", description: "Partition shapes into parts with equal areas and express as fractions" },
  { subject: "mathematics", grade_level: "3", strand: "Geometrical Thinking", code: "GT3.3", description: "Recognize and draw lines of symmetry in two-dimensional shapes" },
  { subject: "mathematics", grade_level: "3", strand: "Measurement", code: "M3.1", description: "Tell and write time to the nearest minute" },
  { subject: "mathematics", grade_level: "3", strand: "Measurement", code: "M3.2", description: "Measure and estimate liquid volumes and masses using standard units" },
  { subject: "mathematics", grade_level: "3", strand: "Measurement", code: "M3.3", description: "Solve problems involving measurement and estimation of intervals of time, liquid volumes, and masses" },
  { subject: "mathematics", grade_level: "3", strand: "Measurement", code: "M3.4", description: "Understand concepts of area and relate area to multiplication and addition" },
  { subject: "mathematics", grade_level: "3", strand: "Measurement", code: "M3.5", description: "Recognize perimeter as an attribute of plane figures and distinguish between linear and area measures" },
  { subject: "mathematics", grade_level: "3", strand: "Data Handling and Probability", code: "DP3.1", description: "Draw scaled picture graphs and bar graphs to represent data" },
  { subject: "mathematics", grade_level: "3", strand: "Data Handling and Probability", code: "DP3.2", description: "Solve one- and two-step problems using information presented in scaled graphs" },
  { subject: "mathematics", grade_level: "3", strand: "Data Handling and Probability", code: "DP3.3", description: "Generate measurement data by measuring lengths to the nearest half and quarter inch" },

  // --- LANGUAGE ARTS K–6 ---
  // Kindergarten Language Arts
  { subject: "language-arts", grade_level: "K", strand: "Listening and Speaking", code: "K-LA-LS-1.1", description: "Listen to music, conversation, and environmental sounds for personal enjoyment" },
  { subject: "language-arts", grade_level: "K", strand: "Listening and Speaking", code: "K-LA-LS-1.2", description: "Demonstrate interest, curiosity, engagement in sharing the experiences of others and with oral stories and information sharing" },
  { subject: "language-arts", grade_level: "K", strand: "Listening and Speaking", code: "K-LA-LS-1.3", description: "Use social listening and speaking skills to interact with a variety of audiences with sensitivity and respect" },
  { subject: "language-arts", grade_level: "K", strand: "Listening and Speaking", code: "K-LA-LS-1.4", description: "Interact and collaborate with the teacher and children who have diverse interests, backgrounds, and languages" },
  { subject: "language-arts", grade_level: "K", strand: "Listening and Speaking", code: "K-LA-LS-1.5", description: "Become aware of how effective listening enhances understanding" },
  { subject: "language-arts", grade_level: "K", strand: "Reading and Viewing", code: "K-LA-RV-2.1", description: "Interact meaningfully with a wide range of genres and text forms" },
  { subject: "language-arts", grade_level: "K", strand: "Reading and Viewing", code: "K-LA-RV-2.2", description: "Develop questions when browsing through passages of interest" },
  { subject: "language-arts", grade_level: "K", strand: "Reading and Viewing", code: "K-LA-RV-2.3", description: "Connect background knowledge to the titles and pictures of fiction and nonfiction passages to build a foundation of understanding" },
  { subject: "language-arts", grade_level: "K", strand: "Writing and Representing", code: "K-LA-WR-3.1", description: "Use shared ideas to co-construct stories" },
  { subject: "language-arts", grade_level: "K", strand: "Writing and Representing", code: "K-LA-WR-3.2", description: "Assign meaning to experimental drawing and writing" },
  { subject: "language-arts", grade_level: "K", strand: "Writing and Representing", code: "K-LA-WR-3.3", description: "Begin expressive writing to share ideas and real and imagined topics" },
  
  // Grade 1 Language Arts
  { subject: "language-arts", grade_level: "1", strand: "Listening and Speaking", code: "G1-LA-LS-1.1", description: "Choose to listen to music, poetry and stories for pleasure" },
  { subject: "language-arts", grade_level: "1", strand: "Listening and Speaking", code: "G1-LA-LS-1.2", description: "Connect environmental sounds to meaning" },
  { subject: "language-arts", grade_level: "1", strand: "Listening and Speaking", code: "G1-LA-LS-1.3", description: "Use different voices in role playing to indicate tone and mood" },
  
  // Grade 2 Language Arts
  { subject: "language-arts", grade_level: "2", strand: "Listening and Speaking", code: "LS2.1", description: "Listen attentively and respond appropriately to oral instructions and questions" },
  { subject: "language-arts", grade_level: "2", strand: "Listening and Speaking", code: "LS2.2", description: "Speak clearly and audibly to express ideas, feelings, and opinions" },
  { subject: "language-arts", grade_level: "2", strand: "Listening and Speaking", code: "LS2.3", description: "Participate in group discussions and collaborative conversations" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.1", description: "Read grade-level texts with accuracy, appropriate rate, and expression" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.2", description: "Use phonics and word analysis skills to decode words" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.3", description: "Comprehend texts by asking and answering questions about key details" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.1", description: "Write opinion pieces with reasons and a conclusion" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.2", description: "Write informative/explanatory texts with facts and a conclusion" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.3", description: "Write narratives with sequenced events, details, and a conclusion" },
  
  // Grade 3 Language Arts
  { subject: "language-arts", grade_level: "3", strand: "Listening and Speaking", code: "LS3.1", description: "Listen critically to interpret and evaluate ideas and information in a range of texts and media" },
  { subject: "language-arts", grade_level: "3", strand: "Listening and Speaking", code: "LS3.2", description: "Speak with clarity, using appropriate tone, volume, and pacing for different purposes and audiences" },
  { subject: "language-arts", grade_level: "3", strand: "Listening and Speaking", code: "LS3.3", description: "Participate effectively in collaborative discussions, building on others' ideas and expressing their own clearly" },
  { subject: "language-arts", grade_level: "3", strand: "Listening and Speaking", code: "LS3.4", description: "Present information, findings, and supporting evidence in an organized manner" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.1", description: "Read grade-level text with sufficient accuracy, fluency, and expression to support comprehension" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.2", description: "Apply phonics and word analysis skills to decode multisyllabic words and words with complex spelling patterns" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.3", description: "Determine the main idea and supporting details in informational texts" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.4", description: "Describe characters, settings, and major events in stories using specific details from the text" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.5", description: "Compare and contrast themes, settings, and plots of stories by the same author or on similar topics" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.1", description: "Write opinion pieces that introduce the topic, state an opinion, provide reasons supported by facts, and include a conclusion" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.2", description: "Write informative/explanatory texts that introduce a topic, develop points with facts and details, and provide a concluding statement" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.3", description: "Write narratives that establish a situation, introduce characters, organize events sequentially, use dialogue and descriptions, and provide closure" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.4", description: "Use the writing process (planning, drafting, revising, editing) to develop and strengthen writing" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.5", description: "Use digital tools to produce and publish writing and collaborate with others" },

  // --- SCIENCE K–6 ---
  // Kindergarten Science
  { subject: "science", grade_level: "K", strand: "Forces and Interactions: Pushes and Pulls", code: "K-SCI-1", description: "Plan and conduct an investigation to compare the effects of different strengths or different directions of pushes and pulls on the motion of an object" },
  { subject: "science", grade_level: "K", strand: "Forces and Interactions: Pushes and Pulls", code: "K-SCI-2", description: "Analyse data to determine if a design solution works as intended to change the speed or direction of an object with a push or a pull" },
  { subject: "science", grade_level: "K", strand: "Interdependent Relationships in Ecosystems", code: "K-SCI-3", description: "Use observations to describe patterns of what plants and animals (including humans) need to survive" },
  { subject: "science", grade_level: "K", strand: "Interdependent Relationships in Ecosystems", code: "K-SCI-4", description: "Construct an argument supported by evidence for how plants and animals (including humans) can change the environment to meet their needs" },
  { subject: "science", grade_level: "K", strand: "Weather and Climate", code: "K-SCI-7", description: "Make observations to determine the effect of sunlight on Earth's surface" },
  { subject: "science", grade_level: "K", strand: "Weather and Climate", code: "K-SCI-8", description: "Use tools and materials to design and build a structure that will reduce the warming effect of sunlight on an area" },
  
  // Grade 1 Science
  { subject: "science", grade_level: "1", strand: "Waves, Light and Sound", code: "G1-SCI-1", description: "Plan and conduct investigations to provide evidence that vibrating materials can make sound and that sound can make materials vibrate" },
  { subject: "science", grade_level: "1", strand: "Waves, Light and Sound", code: "G1-SCI-2", description: "Make observations to construct an evidence-based account, that objects can be seen only when illuminated" },
  { subject: "science", grade_level: "1", strand: "Structure, Function and Information Processing", code: "G1-SCI-5", description: "Use materials to design a solution to a human problem by mimicking how plants and/or animals use their external parts to help them survive, grow and meet their needs" },
  { subject: "science", grade_level: "1", strand: "Space Systems: Patterns and Cycles", code: "G1-SCI-8", description: "Use observations of the sun, moon, and stars to describe patterns that can be predicted" },
  
  // Grade 2 Science
  { subject: "science", grade_level: "2", strand: "Structure and Properties of Matter", code: "G2-SCI-1", description: "Plan and conduct an investigation to describe and classify different kinds of materials by their observable properties" },
  { subject: "science", grade_level: "2", strand: "Structure and Properties of Matter", code: "G2-SCI-2", description: "Analyze data obtained from testing different materials to determine which materials have the properties that are best suited for an intended purpose" },
  { subject: "science", grade_level: "2", strand: "Interdependent Relationships in Ecosystems", code: "G2-SCI-5", description: "Plan and conduct an investigation to determine if plants need sunlight and water to grow" },
  { subject: "science", grade_level: "2", strand: "Earth Systems: Processes That Shape The Earth", code: "G2-SCI-8", description: "Use information from several sources to provide evidence that Earth events can occur quickly or slowly" },
  
  // Grade 3 Science
  { subject: "science", grade_level: "3", strand: "Forces and Interactions", code: "G3-SCI-1", description: "Plan and conduct an investigation to provide evidence of the effects of balanced and unbalanced forces on the motion of an object" },
  { subject: "science", grade_level: "3", strand: "Interdependent Relationships in Ecosystems", code: "G3-SCI-5", description: "Construct an argument that some animals form groups that help members survive" },
  { subject: "science", grade_level: "3", strand: "Weather and Climate", code: "G3-SCI-12", description: "Represent data in tables and graphical displays to describe typical weather conditions expected during a particular season" },
  
  // Grade 4 Science
  { subject: "science", grade_level: "4", strand: "Energy", code: "G4-PS-E-1", description: "Use evidence to construct an explanation relating the speed of an object to the energy of that object" },
  { subject: "science", grade_level: "4", strand: "Energy", code: "G4-PS-E-2", description: "Make observations to provide evidence that energy can be transferred from place to place by sound, light, heat, and electric currents" },
  { subject: "science", grade_level: "4", strand: "Waves", code: "G4-PS-W-1", description: "Develop a model of waves to describe patterns in terms of amplitude and wavelength and that waves can cause objects to move" },
  { subject: "science", grade_level: "4", strand: "Structure and Function", code: "G4-LS-SF-1", description: "Develop a model to describe that light reflecting from objects and entering the eye allows objects to be seen" },
  { subject: "science", grade_level: "4", strand: "Earth Systems: Processes that Shape the Earth", code: "G4-ESS-PSTE-1", description: "Identify evidence from patterns in rock formations and fossils in rock layers to support an explanation for changes in a landscape over time" },
  
  // Grade 5 Science
  { subject: "science", grade_level: "5", strand: "Structure and Properties of Matter", code: "G5-PS-SPM-1", description: "Develop a model to describe that matter is made of particles too small to be seen" },
  { subject: "science", grade_level: "5", strand: "Matter and Energy in Organisms and Ecosystems", code: "G5-LS-MEOE-1", description: "Use models to describe that energy in animals' food (used for body repair, growth, motion, and to maintain body warmth) was once energy from the sun" },
  { subject: "science", grade_level: "5", strand: "Earth Systems", code: "G5-ESS-ES-1", description: "Develop a model using an example to describe ways the geosphere, biosphere, hydrosphere, and/or atmosphere interact" },
  { subject: "science", grade_level: "5", strand: "Space Systems: Stars and the Solar System", code: "G5-ESS-SSSS-1", description: "Support an argument that the gravitational force exerted by Earth on objects is directed down" },
  { subject: "science", grade_level: "5", strand: "Engineering", code: "G5-ETS-E-1", description: "Plan and carry out fair tests in which variables are controlled and failure points are considered to identify aspects of a model or prototype that can be improved" },
  
  // Grade 6 Science
  { subject: "science", grade_level: "6", strand: "Structure and Properties of Matter", code: "G6-PS-SPM-1", description: "Develop models to describe the atomic composition of simple molecules and extended structures" },
  { subject: "science", grade_level: "6", strand: "Chemical Reactions", code: "G6-PS-CR-1", description: "Analyse and interpret data on the properties of substances before and after the substances interact to determine if a chemical reaction has occurred" },
  { subject: "science", grade_level: "6", strand: "Forces and Interactions", code: "G6-PS-FI-1", description: "Apply Newton's Third Law to design a solution to a problem involving the motion of two colliding objects" },
  { subject: "science", grade_level: "6", strand: "Energy", code: "G6-PS-E-1", description: "Construct and interpret graphical displays of data to describe the relationships of kinetic energy to the mass of an object and to the speed of an object" },
  { subject: "science", grade_level: "6", strand: "Space Systems", code: "G6-ESS-SS-1", description: "Analyse and interpret data to determine scale properties of objects in the solar system" },
  { subject: "science", grade_level: "6", strand: "Earth Systems", code: "G6-ESS-ES-1", description: "Develop a model to describe the cycling of water through Earth's systems driven by energy from the sun and the force of gravity" },

  // --- SOCIAL STUDIES K–6 ---
  // Kindergarten Social Studies
  { subject: "social-studies", grade_level: "K", strand: "Historical-Cultural Thinking", code: "K-HCT-K1", description: "Demonstrate an understanding of 'me' as a unique child" },
  { subject: "social-studies", grade_level: "K", strand: "Historical-Cultural Thinking", code: "K-HCT-S1", description: "Distinguish personal characteristics that make each child unique (physical traits, mannerisms)" },
  { subject: "social-studies", grade_level: "K", strand: "Historical-Cultural Thinking", code: "K-HCT-V1", description: "Appreciate that everyone has unique and special characteristics" },
  { subject: "social-studies", grade_level: "K", strand: "Historical-Cultural Thinking", code: "K-HCT-K2", description: "Name family members" },
  { subject: "social-studies", grade_level: "K", strand: "Historical-Cultural Thinking", code: "K-HCT-S2", description: "Represent family members using pictures/images" },
  { subject: "social-studies", grade_level: "K", strand: "Civic Participation", code: "K-CP-K1", description: "Describe how family members care for one another" },
  { subject: "social-studies", grade_level: "K", strand: "Civic Participation", code: "K-CP-V1", description: "Appreciate that family members love and care for one another" },
  { subject: "social-studies", grade_level: "K", strand: "Civic Participation", code: "K-CP-K5", description: "Identify national symbols and emblems such as the national flag, anthem, pledge, bird and flower" },
  { subject: "social-studies", grade_level: "K", strand: "Spatial Thinking", code: "K-ST-K1", description: "State the name and address of their home and school" },
  { subject: "social-studies", grade_level: "K", strand: "Spatial Thinking", code: "K-ST-K3", description: "Describe various weather conditions" },
  { subject: "social-studies", grade_level: "K", strand: "Economic Decision Making", code: "K-EDM-K1", description: "Identify basic needs of people" },
  { subject: "social-studies", grade_level: "K", strand: "Economic Decision Making", code: "K-EDM-S1", description: "Distinguish between needs and wants" },
  
  // Grade 1 Social Studies
  { subject: "social-studies", grade_level: "1", strand: "Historical-Cultural Thinking", code: "1-HCT-K1", description: "State different forms of celebrations that are practiced in families to build pride and identity" },
  { subject: "social-studies", grade_level: "1", strand: "Historical-Cultural Thinking", code: "1-HCT-K2", description: "Identify aspects of culture such as food, music, dance that are relevant to celebrations in families" },
  { subject: "social-studies", grade_level: "1", strand: "Historical-Cultural Thinking", code: "1-HCT-S1", description: "Demonstrate different forms of celebration in the family and explain the importance of preserving local culture" },
  { subject: "social-studies", grade_level: "1", strand: "Historical-Cultural Thinking", code: "1-HCT-V1", description: "Appreciate their cultural heritage" },
  { subject: "social-studies", grade_level: "1", strand: "Historical-Cultural Thinking", code: "1-HCT-K4", description: "Identify the national symbols of their country" },
  
  // Grade 2 Social Studies
  { subject: "social-studies", grade_level: "2", strand: "Historical-Cultural Thinking", code: "HCT-K1", description: "Identify the early groups of people who settled in our community and explain why and how they came" },
  { subject: "social-studies", grade_level: "2", strand: "Historical-Cultural Thinking", code: "HCT-S1", description: "Identify on a map the locations from which the early people that settled in our community came" },
  { subject: "social-studies", grade_level: "2", strand: "Historical-Cultural Thinking", code: "HCT-V1", description: "Recognize that the community is made up of families of different ethnic origins" },
  { subject: "social-studies", grade_level: "2", strand: "Historical-Cultural Thinking", code: "HCT-K2", description: "Know that family relationships can be represented on a family tree" },
  { subject: "social-studies", grade_level: "2", strand: "Historical-Cultural Thinking", code: "HCT-S2", description: "Represent relationships of families on a simple family tree" },
  { subject: "social-studies", grade_level: "2", strand: "Spatial Thinking", code: "ST-K1", description: "State and label the four cardinal directions" },
  { subject: "social-studies", grade_level: "2", strand: "Spatial Thinking", code: "ST-S1", description: "Give directions to your community in relation to other districts or parishes using cardinal direction" },
  { subject: "social-studies", grade_level: "2", strand: "Civic Participation", code: "CP-K1", description: "Identify features that make a community unsafe and healthy" },
  { subject: "social-studies", grade_level: "2", strand: "Civic Participation", code: "CP-S1", description: "Engage in actions to improve one's community" },
  { subject: "social-studies", grade_level: "2", strand: "Economic Decision Making", code: "EDM-K1", description: "Identify people in the community that are resource persons" },
  { subject: "social-studies", grade_level: "2", strand: "Economic Decision Making", code: "EDM-S1", description: "Categorize human and natural resources in your local environment" },
  
  // Grade 3 Social Studies
  { subject: "social-studies", grade_level: "3", strand: "Historical-Cultural Thinking", code: "3-HCT-K1", description: "Identify the earliest inhabitants of our island" },
  { subject: "social-studies", grade_level: "3", strand: "Historical-Cultural Thinking", code: "3-HCT-S1", description: "Use digital tools to investigate the evidence of early settlements of Indigenous peoples" },
  { subject: "social-studies", grade_level: "3", strand: "Historical-Cultural Thinking", code: "3-HCT-V1", description: "Appreciate Indigenous cultures and respect their views of the environment and society" },
  { subject: "social-studies", grade_level: "3", strand: "Historical-Cultural Thinking", code: "3-HCT-K2", description: "State the origins of the various peoples of our island/territory and discuss the reasons why they came" },
  { subject: "social-studies", grade_level: "3", strand: "Historical-Cultural Thinking", code: "3-HCT-K5", description: "Describe the cultural contributions of various peoples to our food, religion, dress, arts, language, and economy" },
  
  // Grade 5 Social Studies
  { subject: "social-studies", grade_level: "5", strand: "Economic Decision Making", code: "5-EDM-K1", description: "Identify the major Caribbean companies that trade and offer services to and with your country and describe what they do" },
  { subject: "social-studies", grade_level: "5", strand: "Economic Decision Making", code: "5-EDM-S1", description: "Investigate the level of foreign, regional, and national ownership of various goods and services imported and exported from your country" },
  { subject: "social-studies", grade_level: "5", strand: "Economic Decision Making", code: "5-EDM-V1", description: "Appreciate the importance of locally owned companies in the social and economic well-being of the region" },
  { subject: "social-studies", grade_level: "5", strand: "Economic Decision Making", code: "5-EDM-K2", description: "Identify the major connections that exist with other Caribbean countries within your family" },
  { subject: "social-studies", grade_level: "5", strand: "Economic Decision Making", code: "5-EDM-K3", description: "Analyse the cause and effects of the changing nature of Caribbean agriculture since 1900" }
]

function groupStandards(standards: CurriculumStandard[]) {
  const grouped: Record<string, Record<string, Record<string, CurriculumStandard[]>>> = {}
  for (const s of standards) {
    if (!grouped[s.subject]) grouped[s.subject] = {}
    if (!grouped[s.subject][s.grade_level]) grouped[s.subject][s.grade_level] = {}
    if (!grouped[s.subject][s.grade_level][s.strand]) grouped[s.subject][s.grade_level][s.strand] = []
    grouped[s.subject][s.grade_level][s.strand].push(s)
  }
  return grouped
}

const subjectIcons: Record<string, React.ReactNode> = {
  "language-arts": <BookOpen className="inline-block mr-2 text-pink-600" size={20} />,
  "mathematics": <Calculator className="inline-block mr-2 text-blue-600" size={20} />,
  "science": <Atom className="inline-block mr-2 text-green-600" size={20} />,
  "social-studies": <Globe className="inline-block mr-2 text-yellow-600" size={20} />,
}

function getUnique(arr: string[]) {
  return Array.from(new Set(arr)).sort()
}

// Custom Accordion Components
function AccordionItem({ children, isOpen, onToggle, title, level = 1 }: {
  children: React.ReactNode
  isOpen: boolean
  onToggle: () => void
  title: React.ReactNode
  level?: number
}) {
  const bgColors = ["bg-white", "bg-gray-50", "bg-gray-100"]
  const textSizes = ["text-2xl", "text-xl", "text-lg"]
  const fontWeights = ["font-bold", "font-semibold", "font-medium"]
  
  return (
    <div className={`border border-gray-200 rounded-lg ${bgColors[level - 1] || "bg-white"}`}>
      <button
        onClick={onToggle}
        className={`w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors ${textSizes[level - 1] || "text-lg"} ${fontWeights[level - 1] || "font-medium"} text-green-700`}
      >
        <span>{title}</span>
        {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
      </button>
      {isOpen && (
        <div className="px-4 pb-4">
          {children}
        </div>
      )}
    </div>
  )
}

export default function AllCurriculumStandardsPage() {
  const [search, setSearch] = useState("")
  const [subject, setSubject] = useState("")
  const [grade, setGrade] = useState("")
  const [strand, setStrand] = useState("")
  
  // State for accordion management
  const [openSubjects, setOpenSubjects] = useState<Set<string>>(new Set())
  const [openGrades, setOpenGrades] = useState<Set<string>>(new Set())
  const [openStrands, setOpenStrands] = useState<Set<string>>(new Set())

  const subjects = useMemo(() => getUnique(standards.map(s => s.subject)), [])
  const grades = useMemo(() => getUnique(standards.map(s => s.grade_level)), [])
  const strands = useMemo(() => getUnique(standards.map(s => s.strand)), [])

  const filtered = useMemo(() => {
    return standards.filter(s => {
      const matchesSearch =
        !search ||
        s.code.toLowerCase().includes(search.toLowerCase()) ||
        s.description.toLowerCase().includes(search.toLowerCase()) ||
        s.strand.toLowerCase().includes(search.toLowerCase())
      const matchesSubject = !subject || s.subject === subject
      const matchesGrade = !grade || s.grade_level === grade
      const matchesStrand = !strand || s.strand === strand
      return matchesSearch && matchesSubject && matchesGrade && matchesStrand
    })
  }, [search, subject, grade, strand])

  const grouped = useMemo(() => groupStandards(filtered), [filtered])

  const toggleSubject = (subjectKey: string) => {
    const newOpen = new Set(openSubjects)
    if (newOpen.has(subjectKey)) {
      newOpen.delete(subjectKey)
    } else {
      newOpen.add(subjectKey)
    }
    setOpenSubjects(newOpen)
  }

  const toggleGrade = (gradeKey: string) => {
    const newOpen = new Set(openGrades)
    if (newOpen.has(gradeKey)) {
      newOpen.delete(gradeKey)
    } else {
      newOpen.add(gradeKey)
    }
    setOpenGrades(newOpen)
  }

  const toggleStrand = (strandKey: string) => {
    const newOpen = new Set(openStrands)
    if (newOpen.has(strandKey)) {
      newOpen.delete(strandKey)
    } else {
      newOpen.add(strandKey)
    }
    setOpenStrands(newOpen)
  }

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-700">Specific Curriculum Outcomes Database</h1>
      
      {/* Search & Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-8 bg-green-50 rounded-lg p-6 shadow-sm border border-green-200">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-2 text-green-700">Search Outcomes</label>
          <input
            type="text"
            placeholder="Search by code, description, or strand..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <div className="w-full md:w-48">
          <label className="block text-sm font-medium mb-2 text-green-700">Subject</label>
          <select 
            value={subject || "all"} 
            onChange={e => setSubject(e.target.value === "all" ? "" : e.target.value)}
            className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="all">All Subjects</option>
            {subjects.map(subj => (
              <option key={subj} value={subj}>
                {subj.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full md:w-32">
          <label className="block text-sm font-medium mb-2 text-green-700">Grade</label>
          <select 
            value={grade || "all"} 
            onChange={e => setGrade(e.target.value === "all" ? "" : e.target.value)}
            className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="all">All Grades</option>
            {grades.map(g => (
              <option key={g} value={g}>Grade {g}</option>
            ))}
          </select>
        </div>
        <div className="w-full md:w-56">
          <label className="block text-sm font-medium mb-2 text-green-700">Strand</label>
          <select 
            value={strand || "all"} 
            onChange={e => setStrand(e.target.value === "all" ? "" : e.target.value)}
            className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="all">All Strands</option>
            {strands.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="flex items-end">
          <button
            className="h-10 px-4 py-2 mt-6 text-green-700 border border-green-300 rounded-md hover:bg-green-100 transition-colors flex items-center"
            onClick={() => { setSearch(""); setSubject(""); setGrade(""); setStrand(""); }}
          >
            <XCircle className="mr-2" size={16} /> Clear
          </button>
        </div>
      </div>

      {/* Results Summary */}
      <div className="mb-6 text-center">
        <p className="text-lg text-gray-600">
          Showing <span className="font-bold text-green-700">{filtered.length}</span> outcomes across{" "}
          <span className="font-bold text-green-700">{Object.keys(grouped).length}</span> subjects
        </p>
      </div>

      {/* Standards Display */}
      {Object.keys(grouped).length === 0 ? (
        <div className="text-center text-gray-500 mt-16 py-12 bg-gray-50 rounded-lg">
          <p className="text-xl">No standards found matching your criteria.</p>
          <p className="text-sm mt-2">Try adjusting your search or filters.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {Object.entries(grouped).map(([subjectKey, grades]) => (
            <AccordionItem
              key={subjectKey}
              isOpen={openSubjects.has(subjectKey)}
              onToggle={() => toggleSubject(subjectKey)}
              title={
                <span className="flex items-center">
                  {subjectIcons[subjectKey] || null}
                  {subjectKey.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  <span className="ml-2 text-sm font-normal text-gray-600">
                    ({Object.values(grades).flatMap(strands => Object.values(strands).flat()).length} standards)
                  </span>
                </span>
              }
              level={1}
            >
              <div className="space-y-3">
                {Object.entries(grades).map(([gradeKey, strands]) => (
                  <AccordionItem
                    key={`${subjectKey}-${gradeKey}`}
                    isOpen={openGrades.has(`${subjectKey}-${gradeKey}`)}
                    onToggle={() => toggleGrade(`${subjectKey}-${gradeKey}`)}
                    title={
                      <span>
                        Grade {gradeKey}
                        <span className="ml-2 text-sm font-normal text-gray-600">
                          ({Object.values(strands).flat().length} standards)
                        </span>
                      </span>
                    }
                    level={2}
                  >
                    <div className="space-y-2">
                      {Object.entries(strands).map(([strandKey, standardsList]) => (
                        <AccordionItem
                          key={`${subjectKey}-${gradeKey}-${strandKey}`}
                          isOpen={openStrands.has(`${subjectKey}-${gradeKey}-${strandKey}`)}
                          onToggle={() => toggleStrand(`${subjectKey}-${gradeKey}-${strandKey}`)}
                          title={
                            <span>
                              {strandKey}
                              <span className="ml-2 text-sm font-normal text-gray-600">
                                ({standardsList.length} standards)
                              </span>
                            </span>
                          }
                          level={3}
                        >
                          <div className="space-y-3">
                            {standardsList.map((standard) => (
                              <div key={standard.code} className="p-3 bg-white rounded border border-gray-200 hover:bg-green-50 transition-colors">
                                <div className="flex items-start gap-3">
                                  <span className="inline-block px-2 py-1 text-xs font-mono bg-gray-100 text-gray-700 rounded">
                                    {standard.code}
                                  </span>
                                  <div className="flex-1">
                                    <p className="text-gray-800 leading-relaxed whitespace-pre-line">
                                      {standard.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </AccordionItem>
                      ))}
                    </div>
                  </AccordionItem>
                ))}
              </div>
            </AccordionItem>
          ))}
        </div>
      )}
    </div>
  )
}