-- Create curriculum standards tables for each subject

-- Social Studies Standards
CREATE TABLE IF NOT EXISTS social_studies_standards (
  id SERIAL PRIMARY KEY,
  grade_level VARCHAR(10) NOT NULL,
  strand VARCHAR(100) NOT NULL,
  code VARCHAR(20),
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Mathematics Standards
CREATE TABLE IF NOT EXISTS mathematics_standards (
  id SERIAL PRIMARY KEY,
  grade_level VARCHAR(10) NOT NULL,
  strand VARCHAR(100) NOT NULL,
  code VARCHAR(20),
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Language Arts Standards
CREATE TABLE IF NOT EXISTS language_arts_standards (
  id SERIAL PRIMARY KEY,
  grade_level VARCHAR(10) NOT NULL,
  strand VARCHAR(100) NOT NULL,
  code VARCHAR(20),
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Science Standards
CREATE TABLE IF NOT EXISTS science_standards (
  id SERIAL PRIMARY KEY,
  grade_level VARCHAR(10) NOT NULL,
  strand VARCHAR(100) NOT NULL,
  code VARCHAR(20),
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Unified view of all standards
CREATE OR REPLACE VIEW curriculum_standards AS
  SELECT 
    id, 
    'social-studies' AS subject, 
    grade_level, 
    strand, 
    code, 
    description, 
    created_at, 
    updated_at 
  FROM social_studies_standards
  UNION ALL
  SELECT 
    id, 
    'mathematics' AS subject, 
    grade_level, 
    strand, 
    code, 
    description, 
    created_at, 
    updated_at 
  FROM mathematics_standards
  UNION ALL
  SELECT 
    id, 
    'language-arts' AS subject, 
    grade_level, 
    strand, 
    code, 
    description, 
    created_at, 
    updated_at 
  FROM language_arts_standards
  UNION ALL
  SELECT 
    id, 
    'science' AS subject, 
    grade_level, 
    strand, 
    code, 
    description, 
    created_at, 
    updated_at 
  FROM science_standards;

-- Insert sample Grade 2 Social Studies standards
INSERT INTO social_studies_standards (grade_level, strand, code, description)
VALUES
  ('2', 'historical-cultural-thinking', 'HCT-K1', 'Identify the early groups of people who settled in our community and explain why and how they came'),
  ('2', 'historical-cultural-thinking', 'HCT-S1', 'Identify on a map the locations from which the early people that settled in our community came'),
  ('2', 'historical-cultural-thinking', 'HCT-V1', 'Recognize that the community is made up of families of different ethnic origins'),
  ('2', 'historical-cultural-thinking', 'HCT-K2', 'Know that family relationships can be represented on a family tree'),
  ('2', 'historical-cultural-thinking', 'HCT-S2', 'Represent relationships of families on a simple family tree'),
  ('2', 'historical-cultural-thinking', 'HCT-V2', 'Appreciate that our family tree is made up of a diverse range of people who share a common heritage'),
  ('2', 'historical-cultural-thinking', 'HCT-K3', 'State the ways individuals and families share positive human interactions with others'),
  ('2', 'historical-cultural-thinking', 'HCT-S3', 'Investigate how families in various communities fulfill their need for interaction'),
  ('2', 'historical-cultural-thinking', 'HCT-V3', 'Appreciate that there are diverse ways that people fulfil their need for human interaction'),
  ('2', 'spatial-thinking', 'ST-K1', 'State and label the four cardinal directions'),
  ('2', 'spatial-thinking', 'ST-S1', 'Give directions to your community in relation to other districts or parishes using cardinal direction'),
  ('2', 'spatial-thinking', 'ST-V1', 'Recognize the value of directions for finding your way'),
  ('2', 'civic-participation', 'CP-K1', 'Identify features that make a community unsafe and healthy'),
  ('2', 'civic-participation', 'CP-S1', 'Engage in actions to improve one''s community'),
  ('2', 'civic-participation', 'CP-V1', 'Appreciate the positive benefits of helping to keep their communities safe and healthy'),
  ('2', 'economic-decision-making', 'EDM-K1', 'Identify people in the community that are resource persons'),
  ('2', 'economic-decision-making', 'EDM-S1', 'Categorize human and natural resources in your local environment'),
  ('2', 'economic-decision-making', 'EDM-V1', 'Appreciate the importance of respecting the value of our human and natural resources for meeting our basic needs');

-- Insert sample Grade 2 Mathematics standards
INSERT INTO mathematics_standards (grade_level, strand, code, description)
VALUES
  ('2', 'number-sense', 'NS2.1', 'Count, read, and write whole numbers up to 1000'),
  ('2', 'number-sense', 'NS2.2', 'Compare and order whole numbers up to 1000 using the symbols <, >, and ='),
  ('2', 'number-sense', 'NS2.3', 'Understand place value for hundreds, tens, and ones'),
  ('2', 'operations-with-numbers', 'ON2.1', 'Add and subtract two-digit numbers with and without regrouping'),
  ('2', 'operations-with-numbers', 'ON2.2', 'Solve one-step word problems involving addition and subtraction'),
  ('2', 'operations-with-numbers', 'ON2.3', 'Understand the relationship between addition and subtraction'),
  ('2', 'patterns-relationships', 'PR2.1', 'Recognize, describe, and extend patterns'),
  ('2', 'patterns-relationships', 'PR2.2', 'Use patterns to solve problems'),
  ('2', 'geometrical-thinking', 'GT2.1', 'Identify and describe two-dimensional shapes'),
  ('2', 'geometrical-thinking', 'GT2.2', 'Identify and describe three-dimensional shapes'),
  ('2', 'measurement', 'M2.1', 'Measure and estimate lengths in standard units'),
  ('2', 'measurement', 'M2.2', 'Tell and write time from analog and digital clocks'),
  ('2', 'data-probability', 'DP2.1', 'Collect, organize, and represent data'),
  ('2', 'data-probability', 'DP2.2', 'Interpret data presented in picture graphs and bar graphs');

-- Insert sample Grade 2 Language Arts standards
INSERT INTO language_arts_standards (grade_level, strand, code, description)
VALUES
  ('2', 'listening-speaking', 'LS2.1', 'Listen attentively and respond appropriately to oral instructions and questions'),
  ('2', 'listening-speaking', 'LS2.2', 'Speak clearly and audibly to express ideas, feelings, and opinions'),
  ('2', 'listening-speaking', 'LS2.3', 'Participate in group discussions and collaborative conversations'),
  ('2', 'reading-viewing', 'RV2.1', 'Read grade-level texts with accuracy, appropriate rate, and expression'),
  ('2', 'reading-viewing', 'RV2.2', 'Use phonics and word analysis skills to decode words'),
  ('2', 'reading-viewing', 'RV2.3', 'Comprehend texts by asking and answering questions about key details'),
  ('2', 'writing-representing', 'WR2.1', 'Write opinion pieces with reasons and a conclusion'),
  ('2', 'writing-representing', 'WR2.2', 'Write informative/explanatory texts with facts and a conclusion'),
  ('2', 'writing-representing', 'WR2.3', 'Write narratives with sequenced events, details, and a conclusion');

-- Insert Grade 3 Language Arts standards
INSERT INTO language_arts_standards (grade_level, strand, code, description)
VALUES
  ('3', 'listening-speaking', 'LS3.1', 'Listen critically to interpret and evaluate ideas and information in a range of texts and media'),
  ('3', 'listening-speaking', 'LS3.2', 'Speak with clarity, using appropriate tone, volume, and pacing for different purposes and audiences'),
  ('3', 'listening-speaking', 'LS3.3', 'Participate effectively in collaborative discussions, building on others'' ideas and expressing their own clearly'),
  ('3', 'listening-speaking', 'LS3.4', 'Present information, findings, and supporting evidence in an organized manner'),
  ('3', 'reading-viewing', 'RV3.1', 'Read grade-level text with sufficient accuracy, fluency, and expression to support comprehension'),
  ('3', 'reading-viewing', 'RV3.2', 'Apply phonics and word analysis skills to decode multisyllabic words and words with complex spelling patterns'),
  ('3', 'reading-viewing', 'RV3.3', 'Determine the main idea and supporting details in informational texts'),
  ('3', 'reading-viewing', 'RV3.4', 'Describe characters, settings, and major events in stories using specific details from the text'),
  ('3', 'reading-viewing', 'RV3.5', 'Compare and contrast themes, settings, and plots of stories by the same author or on similar topics'),
  ('3', 'writing-representing', 'WR3.1', 'Write opinion pieces that introduce the topic, state an opinion, provide reasons supported by facts, and include a conclusion'),
  ('3', 'writing-representing', 'WR3.2', 'Write informative/explanatory texts that introduce a topic, develop points with facts and details, and provide a concluding statement'),
  ('3', 'writing-representing', 'WR3.3', 'Write narratives that establish a situation, introduce characters, organize events sequentially, use dialogue and descriptions, and provide closure'),
  ('3', 'writing-representing', 'WR3.4', 'Use the writing process (planning, drafting, revising, editing) to develop and strengthen writing'),
  ('3', 'writing-representing', 'WR3.5', 'Use digital tools to produce and publish writing and collaborate with others');

-- Insert Grade 3 Mathematics standards
INSERT INTO mathematics_standards (grade_level, strand, code, description)
VALUES
  ('3', 'number-sense', 'NS3.1', 'Read, write, and compare whole numbers up to 10,000'),
  ('3', 'number-sense', 'NS3.2', 'Understand place value for thousands, hundreds, tens, and ones'),
  ('3', 'number-sense', 'NS3.3', 'Round numbers to the nearest 10 or 100'),
  ('3', 'number-sense', 'NS3.4', 'Represent fractions as parts of a whole and on a number line'),
  ('3', 'number-sense', 'NS3.5', 'Compare fractions with like denominators'),
  ('3', 'operations-with-numbers', 'ON3.1', 'Fluently add and subtract within 1000 using strategies and algorithms'),
  ('3', 'operations-with-numbers', 'ON3.2', 'Multiply and divide within 100 using various strategies'),
  ('3', 'operations-with-numbers', 'ON3.3', 'Understand the relationship between multiplication and division'),
  ('3', 'operations-with-numbers', 'ON3.4', 'Solve two-step word problems using the four operations'),
  ('3', 'operations-with-numbers', 'ON3.5', 'Identify arithmetic patterns and explain them using properties of operations'),
  ('3', 'patterns-relationships', 'PR3.1', 'Identify, create, and extend patterns in numbers and shapes'),
  ('3', 'patterns-relationships', 'PR3.2', 'Analyze patterns to identify rules and make predictions'),
  ('3', 'patterns-relationships', 'PR3.3', 'Represent and solve problems involving patterns'),
  ('3', 'geometrical-thinking', 'GT3.1', 'Understand that shapes in different categories may share attributes'),
  ('3', 'geometrical-thinking', 'GT3.2', 'Partition shapes into parts with equal areas and express as fractions'),
  ('3', 'geometrical-thinking', 'GT3.3', 'Recognize and draw lines of symmetry in two-dimensional shapes'),
  ('3', 'measurement', 'M3.1', 'Tell and write time to the nearest minute'),
  ('3', 'measurement', 'M3.2', 'Measure and estimate liquid volumes and masses using standard units'),
  ('3', 'measurement', 'M3.3', 'Solve problems involving measurement and estimation of intervals of time, liquid volumes, and masses'),
  ('3', 'measurement', 'M3.4', 'Understand concepts of area and relate area to multiplication and addition'),
  ('3', 'measurement', 'M3.5', 'Recognize perimeter as an attribute of plane figures and distinguish between linear and area measures'),
  ('3', 'data-probability', 'DP3.1', 'Draw scaled picture graphs and bar graphs to represent data'),
  ('3', 'data-probability', 'DP3.2', 'Solve one- and two-step problems using information presented in scaled graphs'),
  ('3', 'data-probability', 'DP3.3', 'Generate measurement data by measuring lengths to the nearest half and quarter inch');

-- Grade 4 Science Standards
INSERT INTO science_standards (grade_level, strand, code, description)
VALUES
  ('4', 'Energy', 'G4-PS-E-1', 'Use evidence to construct an explanation relating the speed of an object to the energy of that object'),
  ('4', 'Energy', 'G4-PS-E-2', 'Make observations to provide evidence that energy can be transferred from place to place by sound, light, heat, and electric currents'),
  ('4', 'Energy', 'G4-PS-E-3', 'Ask questions and predict outcomes about the changes in energy that occur when objects collide'),
  ('4', 'Energy', 'G4-PS-E-4', 'Apply scientific ideas to design, test, and refine a device that converts energy from one form to another'),
  ('4', 'Energy', 'G4-PS-E-5', 'Obtain and combine information to describe that energy and fuels are derived from natural resources and that their uses affect the environment'),
  ('4', 'Waves', 'G4-PS-W-1', 'Develop a model of waves to describe patterns in terms of amplitude and wavelength and that waves can cause objects to move'),
  ('4', 'Waves', 'G4-PS-W-2', 'Generate and compare multiple solutions that use patterns to transfer information'),
  ('4', 'Structure and Function', 'G4-LS-SF-1', 'Develop a model to describe that light reflecting from objects and entering the eye allows objects to be seen'),
  ('4', 'Structure and Function', 'G4-LS-SF-2', 'Construct an argument that plants and animals have internal and external structures that function to support survival, growth, behavior, and reproduction'),
  ('4', 'Structure and Function', 'G4-LS-SF-3', 'Use a model to describe that animals receive different information through their senses, process it in their brain and respond to it differently'),
  ('4', 'Earth Systems: Processes that Shape the Earth', 'G4-ESS-PSTE-1', 'Identify evidence from patterns in rock formations and fossils in rock layers to support an explanation for changes in a landscape over time'),
  ('4', 'Earth Systems: Processes that Shape the Earth', 'G4-ESS-PSTE-2', 'Make observations and/or measurements to provide evidence of the effects of weathering or the rate of erosion by water, ice, wind, or vegetation'),
  ('4', 'Earth Systems: Processes that Shape the Earth', 'G4-ESS-PSTE-3', 'Analyze and interpret data from maps to describe patterns of Earth''s features'),
  ('4', 'Earth Systems: Processes that Shape the Earth', 'G4-ESS-PSTE-4', 'Generate and compare multiple solutions to reduce the impacts of natural Earth processes on humans');

-- Grade 5 Science Standards
INSERT INTO science_standards (grade_level, strand, code, description)
VALUES
  ('5', 'Structure and Properties of Matter', 'G5-PS-SPM-1', 'Develop a model to describe that matter is made of particles too small to be seen'),
  ('5', 'Structure and Properties of Matter', 'G5-PS-SPM-2', 'Measure and graph quantities to provide evidence that regardless of the type of change that occurs when heating, cooling, or mixing substances, the total weight of matter is conserved'),
  ('5', 'Structure and Properties of Matter', 'G5-PS-SPM-3', 'Make observations and measurements to identify materials based on their properties'),
  ('5', 'Structure and Properties of Matter', 'G5-PS-SPM-4', 'Conduct an investigation to determine whether the mixing of two or more substances results in new substances'),
  ('5', 'Matter and Energy in Organisms and Ecosystems', 'G5-LS-MEOE-1', 'Use models to describe that energy in animals'' food (used for body repair, growth, motion, and to maintain body warmth) was once energy from the sun'),
  ('5', 'Matter and Energy in Organisms and Ecosystems', 'G5-LS-MEOE-2', 'Support an argument that plants get the materials they need for growth chiefly from air and water'),
  ('5', 'Matter and Energy in Organisms and Ecosystems', 'G5-LS-MEOE-3', 'Develop a model to describe the movement of matter among plants, animals, decomposers, and the environment'),
  ('5', 'Earth Systems', 'G5-ESS-ES-1', 'Develop a model using an example to describe ways the geosphere, biosphere, hydrosphere, and/or atmosphere interact'),
  ('5', 'Earth Systems', 'G5-ESS-ES-2', 'Describe and graph the amounts of salt water and fresh water in various reservoirs to provide evidence about the distribution of water on Earth'),
  ('5', 'Earth Systems', 'G5-ESS-ES-3', 'Obtain and combine information about ways individual communities use science ideas to protect the Earth''s resources and environment'),
  ('5', 'Space Systems: Stars and the Solar System', 'G5-ESS-SSSS-1', 'Support an argument that the gravitational force exerted by Earth on objects is directed down'),
  ('5', 'Space Systems: Stars and the Solar System', 'G5-ESS-SSSS-2', 'Support an argument that differences in the apparent brightness of the sun compared to other stars is due to their relative distances from Earth'),
  ('5', 'Space Systems: Stars and the Solar System', 'G5-ESS-SSSS-3', 'Represent data in graphical displays to reveal patterns of daily changes in length and direction of shadows, day and night, and the seasonal appearance of some stars in the night sky'),
  ('5', 'Engineering', 'G5-ETS-E-1', 'Plan and carry out fair tests in which variables are controlled and failure points are considered to identify aspects of a model or prototype that can be improved');

-- Grade 6 Science Standards
INSERT INTO science_standards (grade_level, strand, code, description)
VALUES
  ('6', 'Structure and Properties of Matter', 'G6-PS-SPM-1', 'Develop models to describe the atomic composition of simple molecules and extended structures'),
  ('6', 'Structure and Properties of Matter', 'G6-PS-SPM-2', 'Gather and make sense of information to describe that synthetic materials come from natural resources and impact society'),
  ('6', 'Chemical Reactions', 'G6-PS-CR-1', 'Analyse and interpret data on the properties of substances before and after the substances interact to determine if a chemical reaction has occurred'),
  ('6', 'Chemical Reactions', 'G6-PS-CR-2', 'Develop and use a model to describe how the total number of atoms does not change in a chemical reaction and thus mass is conserved'),
  ('6', 'Inheritance, Variation of Traits and Life Cycles', 'G6-LS-IVTLC-1', 'Develop models to describe that organisms have unique and diverse life cycles but all have in common birth, growth, reproduction, and death'),
  ('6', 'Waves and Electromagnetic Radiation', 'G6-PS-WER-1', 'Use mathematical representations to describe a simple model for waves that includes how the amplitude of a wave is related to the energy in a wave'),
  ('6', 'Waves and Electromagnetic Radiation', 'G6-PS-WER-2', 'Develop and use a model to describe that waves are reflected, absorbed, or transmitted through various materials'),
  ('6', 'Forces and Interactions', 'G6-PS-FI-1', 'Apply Newton''s Third Law to design a solution to a problem involving the motion of two colliding objects'),
  ('6', 'Forces and Interactions', 'G6-PS-FI-2', 'Plan an investigation to provide evidence that the change in an object''s motion depends on the sum of the forces on the object and the mass of the object'),
  ('6', 'Forces and Interactions', 'G6-PS-FI-3', 'Ask questions about data to determine the factors that affect the strength of electric and magnetic forces'),
  ('6', 'Matter and Energy in Organisms and Ecosystems', 'G6-LS-MEOE-1', 'Analyse and interpret data to provide evidence for the effects of resource availability on organisms and populations of organisms in an ecosystem'),
  ('6', 'Interdependent Relationships in Ecosystems', 'G6-LS-IRE-1', 'Construct an explanation that predicts patterns of interactions among organisms across multiple ecosystems'),
  ('6', 'Energy', 'G6-PS-E-1', 'Construct and interpret graphical displays of data to describe the relationships of kinetic energy to the mass of an object and to the speed of an object'),
  ('6', 'Energy', 'G6-PS-E-2', 'Develop a model to describe that when the arrangement of objects interacting at a distance changes, different amounts of potential energy are stored in the system'),
  ('6', 'Energy', 'G6-PS-E-3', 'Apply scientific principles to design, construct, and test a device that either minimizes or maximizes thermal energy transfer'),
  ('6', 'Space Systems', 'G6-ESS-SS-1', 'Analyse and interpret data to determine scale properties of objects in the solar system'),
  ('6', 'Space Systems', 'G6-ESS-SS-2', 'Construct and present arguments using evidence to support the claim that gravitational interactions are attractive and depend on the masses of interacting objects'),
  ('6', 'History of the Earth', 'G6-ESS-HE-1', 'Analyse and interpret data on the distribution of fossils and rocks, continental shapes, and seafloor structures to provide evidence of the past plate motions'),
  ('6', 'Earth Systems', 'G6-ESS-ES-1', 'Develop a model to describe the cycling of water through Earth''s systems driven by energy from the sun and the force of gravity'),
  ('6', 'Earth Systems', 'G6-ESS-ES-2', 'Construct a scientific explanation based on evidence for how the uneven distributions of Earth''s mineral, energy, and groundwater resources are the result of past and current geoscience processes');

-- Kindergarten Language Arts Standards
INSERT INTO language_arts_standards (grade_level, strand, code, description)
VALUES
  ('K', 'Listening and Speaking', 'K-LA-LS-1.1', 'Listen to music, conversation, and environmental sounds for personal enjoyment'),
  ('K', 'Listening and Speaking', 'K-LA-LS-1.2', 'Demonstrate interest, curiosity, engagement in sharing the experiences of others and with oral stories and information sharing'),
  ('K', 'Listening and Speaking', 'K-LA-LS-1.3', 'Use social listening and speaking skills to interact with a variety of audiences with sensitivity and respect'),
  ('K', 'Listening and Speaking', 'K-LA-LS-1.4', 'Interact and collaborate with the teacher and children who have diverse interests, backgrounds, and languages'),
  ('K', 'Listening and Speaking', 'K-LA-LS-1.5', 'Become aware of how effective listening enhances understanding'),
  ('K', 'Listening and Speaking', 'K-LA-LS-1.6', 'Observe how tone, fluency and intonation impact meaning and mood'),
  ('K', 'Listening and Speaking', 'K-LA-LS-1.7', 'Use Home Language(s) and, as Standard English develops, share their thoughts, feelings, and questions about engaging events, stories, and conversations with increasing confidence'),
  ('K', 'Listening and Speaking', 'K-LA-LS-1.8', 'Develop increasing clarity and focus when sharing stories or experiences'),
  ('K', 'Listening and Speaking', 'K-LA-LS-1.9', 'Engage in active phonological awareness activities and word play to discriminate between various sounds in their environment, letters of the alphabet, rhyme, and meaningful sound patterns'),
  ('K', 'Listening and Speaking', 'K-LA-LS-1.10', 'Develop and apply vocabulary and language structures to enhance their understanding of how to communicate ideas with purpose and focus'),
  ('K', 'Reading and Viewing', 'K-LA-RV-2.1', 'Interact meaningfully with a wide range of genres and text forms'),
  ('K', 'Reading and Viewing', 'K-LA-RV-2.2', 'Develop questions when browsing through passages of interest'),
  ('K', 'Reading and Viewing', 'K-LA-RV-2.3', 'Connect background knowledge to the titles and pictures of fiction and nonfiction passages to build a foundation of understanding'),
  ('K', 'Reading and Viewing', 'K-LA-RV-2.4', 'Develop understanding and application of the Concepts of Print'),
  ('K', 'Reading and Viewing', 'K-LA-RV-2.5', 'Develop knowledge about the purpose and variety of texts that are read or read to them'),
  ('K', 'Reading and Viewing', 'K-LA-RV-2.6', 'Browse through a variety of images, and nonfiction material in pre-emergent and emergent level passages, or passages of interest, to discover information'),
  ('K', 'Reading and Viewing', 'K-LA-RV-2.7', 'Demonstrate understanding of some environmental print and pictorial information'),
  ('K', 'Reading and Viewing', 'K-LA-RV-2.8', 'Begin to apply comprehension strategies to visualize, predict and connect'),
  ('K', 'Reading and Viewing', 'K-LA-RV-2.9', 'Demonstrate understanding by responding to read-alouds with images, model making, discussions, or temporary writing'),
  ('K', 'Reading and Viewing', 'K-LA-RV-2.10', 'Connect words and images in pre-emergent and emergent level texts to background knowledge'),
  ('K', 'Reading and Viewing', 'K-LA-RV-2.11', 'Recognise and use a variety of high frequency words of personal importance, such as names and pre-emergent level high-frequency words'),
  ('K', 'Reading and Viewing', 'K-LA-RV-2.12', 'Participate in shared reading and use the meaning and flow of the language to anticipate upcoming words'),
  ('K', 'Reading and Viewing', 'K-LA-RV-2.13', 'Begin to demonstrate fluency and phrasing during shared reading, independent and guided reading of emergent level passages'),
  ('K', 'Reading and Viewing', 'K-LA-RV-2.14', 'Identify an increasing number of letter names and letter sounds, beginning with those of personal importance'),
  ('K', 'Reading and Viewing', 'K-LA-RV-2.15', 'Use known letter sounds to decode upcoming words in emergent level passages'),
  ('K', 'Writing and Representing', 'K-LA-WR-3.1', 'Use shared ideas to co-construct stories'),
  ('K', 'Writing and Representing', 'K-LA-WR-3.2', 'Assign meaning to experimental drawing and writing'),
  ('K', 'Writing and Representing', 'K-LA-WR-3.3', 'Begin expressive writing to share ideas and real and imagined topics'),
  ('K', 'Writing and Representing', 'K-LA-WR-3.4', 'Use peer collaboration and classroom tools to assist in writing process'),
  ('K', 'Writing and Representing', 'K-LA-WR-3.5', 'Learn to print the upper and lower case letters of the alphabet'),
  ('K', 'Writing and Representing', 'K-LA-WR-3.6', 'Connect spoken language(s) to written language and other representations (e.g., drawings)'),
  ('K', 'Writing and Representing', 'K-LA-WR-3.7', 'Connect phonological awareness to letter shapes'),
  ('K', 'Writing and Representing', 'K-LA-WR-3.8', 'Spell name and some words of personal importance correctly');

-- Grade 1 Language Arts Standards
INSERT INTO language_arts_standards (grade_level, strand, code, description)
VALUES
  ('1', 'Listening and Speaking', 'G1-LA-LS-1.1', 'Choose to listen to music, poetry and stories for pleasure'),
  ('1', 'Listening and Speaking', 'G1-LA-LS-1.2', 'Connect environmental sounds to meaning'),
  ('1', 'Listening and Speaking', 'G1-LA-LS-1.3', 'Use different voices in role playing to indicate tone and mood'),
  ('1', 'Listening and Speaking', 'G1-LA-LS-1.4', 'Describe how musical and environmental sounds affect mood'),
  ('1', 'Listening and Speaking', 'G1-LA-LS-1.5', 'Use Listening Comprehension Strategies to make and simplify meaning: ask questions, recall ideas, predict, visualise, and make connections'),
  ('1', 'Listening and Speaking', 'G1-LA-LS-1.6', 'Listen to, retell, and express an opinion about the story'),
  ('1', 'Listening and Speaking', 'G1-LA-LS-1.7', 'Listen to differentiate between make-believe and truth'),
  ('1', 'Listening and Speaking', 'G1-LA-LS-1.8', 'Listen to follow and give direction e.g. 2-3 steps'),
  ('1', 'Listening and Speaking', 'G1-LA-LS-1.9', 'Listen and respond with increasing understanding and confidence to conversations expressed in Standard English'),
  ('1', 'Listening and Speaking', 'G1-LA-LS-1.10', 'Use turn taking strategies as a listener and a speaker'),
  ('1', 'Listening and Speaking', 'G1-LA-LS-1.11', 'Identify and use some non-verbal cues (e.g., facial expressions, gestures etc.) and in oral communication with thoughtfulness'),
  ('1', 'Listening and Speaking', 'G1-LA-LS-1.12', 'Listen, share information ask and answer questions on a topic opinion in response to views shared by others'),
  ('1', 'Listening and Speaking', 'G1-LA-LS-1.13', 'Use and respond to Home Language(s) with awareness and purpose to greet, thank, make a request, explain, apologise, and issue an invitation'),
  ('1', 'Listening and Speaking', 'G1-LA-LS-1.14', 'Continue to develop Home Language and Standard English vocabulary, phrasing and sentence use to share ideas'),
  ('1', 'Listening and Speaking', 'G1-LA-LS-1.15', 'Describe sounds, images, events, people, and places with clarity that includes: -relevant details and a range of descriptive words reflecting size, colour, intensity, etc.'),
  ('1', 'Listening and Speaking', 'G1-LA-LS-1.16', 'Produce complete sentences when suitable to task and setting'),
  ('1', 'Listening and Speaking', 'G1-LA-LS-1.17', 'Continue to develop the foundation of phonological awareness by orally identifying, producing, and manipulating various units of speech sounds within words, including: - initial and final sounds - segmenting sounds in one syllable words - beats in a word (syllables) - onset and rhyme - blending sounds to make one-syllable words. -identifying phonemes in one syllable words'),
  ('1', 'Listening and Speaking', 'G1-LA-LS-1.18', 'Develop use of common singular and plural nouns in the meaningful context of spoken sentences (e.g., I run, you run, she runs, we run, they run)'),
  ('1', 'Listening and Speaking', 'G1-LA-LS-1.19', 'Begin to use common irregular plural forms, such as man/men, child/children, and foot/feet'),
  ('1', 'Listening and Speaking', 'G1-LA-LS-1.20', 'Use common pronouns in spoken sentences with increasing understanding ( I, me, mine, they, them, theirs, him, his, hers)'),
  ('1', 'Reading and Viewing', 'G1-LA-RV-2.1', 'Reflect on and connect personal interests and background knowledge before, during and after reading'),
  ('1', 'Reading and Viewing', 'G1-LA-RV-2.2', 'Apply Concepts About Print to navigate Emergent/Early level text'),
  ('1', 'Reading and Viewing', 'G1-LA-RV-2.3', 'Connect background knowledge to new learning'),
  ('1', 'Reading and Viewing', 'G1-LA-RV-2.4', 'Regard reading/viewing as sources of interest, enjoyment, and information'),
  ('1', 'Reading and Viewing', 'G1-LA-RV-2.5', 'Engage in reading or reading-like behaviour to experience a variety of text and text forms'),
  ('1', 'Reading and Viewing', 'G1-LA-RV-2.6', 'Participate in opportunities to share favourite texts with peers'),
  ('1', 'Reading and Viewing', 'G1-LA-RV-2.7', 'Re-read, retell and act out selections of familiar stories, poems, and nonfiction texts'),
  ('1', 'Reading and Viewing', 'G1-LA-RV-2.8', 'Select, with teacher assistance, texts appropriate to personal interests and reading progress'),
  ('1', 'Reading and Viewing', 'G1-LA-RV-2.9', 'Select just right texts with assistance and beginning independence'),
  ('1', 'Reading and Viewing', 'G1-LA-RV-2.10', 'Use illustrations in a text to describe and interpret characters, setting, and events'),
  ('1', 'Reading and Viewing', 'G1-LA-RV-2.11', 'Use nonfiction instructions and text features to create models or artistic representations'),
  ('1', 'Reading and Viewing', 'G1-LA-RV-2.12', 'Formulate questions as well as understandings of digital fiction and nonfiction text'),
  ('1', 'Reading and Viewing', 'G1-LA-RV-2.13', 'Develop an understanding and respect for diversity in text'),
  ('1', 'Writing and Representing', 'G1-LA-WR-3.1', 'Share and discuss texts with peers'),
  ('1', 'Writing and Representing', 'G1-LA-WR-3.2', 'Use illustrations, graphics etc. to ask and answer questions, draw conclusions, and make inferences, identify details, synthesise main idea from the details'),
  ('1', 'Writing and Representing', 'G1-LA-WR-3.3', 'Retell the beginning, middle, and end of stories and events using images, drama, models, and written summaries'),
  ('1', 'Writing and Representing', 'G1-LA-WR-3.4', 'Use a variety of comprehension strategies to create meaning in poetry, fiction, and nonfiction texts during Independent Reading: combine text information with background knowledge and experiences, create visualisations, predict what will happen, make inferences by drawing on their own experiences and clues in the text, ask and answer questions about representations of character, setting and content, identify basic character traits from text and visual contextual clues and critical reflection, make connections between texts, noticing similarities in characters, events, illustrations, and language, identify details from text and images, identify main idea'),
  ('1', 'Writing and Representing', 'G1-LA-WR-3.5', 'Demonstrate understanding through various responses to text: artistic representations (visual arts, dance, music, etc.), discussions, graphic organisers, oral and written responses to questions'),
  ('1', 'Writing and Representing', 'G1-LA-WR-3.6', 'Continue to make connections between Home Language vocabulary and Standard English vocabulary to the language of the story, poem, song, or visual representations'),
  ('1', 'Writing and Representing', 'G1-LA-WR-3.7', 'Apply known oral vocabulary within familiar language patterns to make meaning from text'),
  ('1', 'Writing and Representing', 'G1-LA-WR-3.8', 'Continue to develop use of context clues to solve unknown vocabulary'),
  ('1', 'Writing and Representing', 'G1-LA-WR-3.9', 'Begin to automatically read and understand sight and some high-frequency words and words of personal interests or significance in a variety of reading contexts'),
  ('1', 'Writing and Representing', 'G1-LA-WR-3.10', 'Demonstrate understanding (not definitions) and application of synonyms, antonyms, and homophones'),
  ('1', 'Writing and Representing', 'G1-LA-WR-3.11', 'Begin to understand how Emergent/Early level prefixes and suffixes change the meaning of words'),
  ('1', 'Writing and Representing', 'G1-LA-WR-3.12', 'Expand vocabulary by noticing and using frequently occurring root words to read inflectional forms (e.g., look, looks, looked, looking)'),
  ('1', 'Writing and Representing', 'G1-LA-WR-3.13', 'Develop visualisation strategies to connect words, and phrases of Home Language and Standard English text to meaningful mental images'),
  ('1', 'Writing and Representing', 'G1-LA-WR-3.14', 'Demonstrate understanding of how word order in fiction and nonfiction text impacts meaning'),
  ('1', 'Writing and Representing', 'G1-LA-WR-3.15', 'Begin to apply punctuation(full stop, question mark, exclamation mark) and bold print to guide intonation and expression, change the tone, and for emphasis, etc.'),
  ('1', 'Writing and Representing', 'G1-LA-WR-3.16', 'Apply automatic knowledge of known sight words within sentences to develop phrasing, fluency, and expression'),
  ('1', 'Writing and Representing', 'G1-LA-WR-3.17', 'Continue to recognise and meaningfully apply Emergent/Early stage knowledge of letter patterns to decode unfamiliar words: initial and some final and medial consonants, Emergent/Early-stage blends, Emergent/Early-stage digraphs, Emergent/Early-stage consonant vowel letters'),
  ('1', 'Writing and Representing', 'G1-LA-WR-3.18', 'Apply knowledge of word order, illustrations, text content and initial, final and some medial letter sounds to identify unknown words'),
  ('1', 'Writing and Representing', 'G1-LA-WR-3.19', 'Begin to monitor for errors by cross checking phonics, meaning, and structure clues');

-- Grade 2 Language Arts Standards
INSERT INTO language_arts_standards (grade_level, strand, code, description)
VALUES
  ('2', 'Listening and Speaking', 'G2-LA-LS-1.1', 'Engage with various genres of music, oral poetry, and oral stories for pleasure'),
  ('2', 'Listening and Speaking', 'G2-LA-LS-1.2', 'Offer thoughts and opinions on the meaning and mood of music, stories, and poetry'),
  ('2', 'Listening and Speaking', 'G2-LA-LS-1.3', 'Sustain one-to-one conversations on topics of interest and contribute to small and large group interactions with peers'),
  ('2', 'Listening and Speaking', 'G2-LA-LS-1.4', 'Continue to develop comfort while engaging in interactions with adults'),
  ('2', 'Listening and Speaking', 'G2-LA-LS-1.5', 'Describe a personal experience in sequential order'),
  ('2', 'Listening and Speaking', 'G2-LA-LS-1.6', 'Continue to develop vocabulary that reflects application of synonyms, antonyms, and descriptive words to build more complex sentences'),
  ('2', 'Listening and Speaking', 'G2-LA-LS-1.7', 'Use some transition words to connect phrases'),
  ('2', 'Listening and Speaking', 'G2-LA-LS-1.8', 'Respond to and give instructions that involve 3-4 steps'),
  ('2', 'Listening and Speaking', 'G2-LA-LS-1.9', 'Demonstrate application of oral comprehension strategies such as: visualising, predicting, connecting, analysis, synthesising, determining importance'),
  ('2', 'Listening and Speaking', 'G2-LA-LS-1.10', 'Describe, share, and discuss thoughts, feelings, and experiences'),
  ('2', 'Listening and Speaking', 'G2-LA-LS-1.11', 'Ask and respond to questions to clarify information and to explore possibilities or solutions to problems'),
  ('2', 'Listening and Speaking', 'G2-LA-LS-1.12', 'Consider others' ideas and ask/ respond to questions to clarify information and to explore possibilities or solutions to problems'),
  ('2', 'Listening and Speaking', 'G2-LA-LS-1.13', 'Recognize some examples of unfair and hurtful vocabulary and begin to make vocabulary choices that affirm rather than hurt people'),
  ('2', 'Listening and Speaking', 'G2-LA-LS-1.14', 'Experiment with the impact of intonation, expression, and tone while communicating ideas and feelings in small- and whole group situations'),
  ('2', 'Listening and Speaking', 'G2-LA-LS-1.15', 'Begin to make vocabulary choices that affirm sensitivity to the personal ideas, cultural contexts, and experiences of others (that's interesting, please tell me more, let's talk about that, etc.'),
  ('2', 'Listening and Speaking', 'G2-LA-LS-1.16', 'Use social conventions, in range of conversations and cooperative play situations, (turn taking, politeness, when to speak, and when to listen) in multiple cultural contexts'),
  ('2', 'Listening and Speaking', 'G2-LA-LS-1.17', 'Use different forms (Home Language, Standard English) of language dependent upon audience and purpose'),
  ('2', 'Listening and Speaking', 'G2-LA-LS-1.18', 'Recognize that volume of voice needs to be adjusted according to situation'),
  ('2', 'Listening and Speaking', 'G2-LA-LS-1.19', 'Continue to develop monitoring and self correction of oral language use'),
  ('2', 'Listening and Speaking', 'G2-LA-LS-1.20', 'Develop automaticity with the meaningful application of phonological awareness in oral expression of rhyming, onset and rime, segmenting, blending, beats in a word (syllables)'),
  ('2', 'Reading and Viewing', 'G2-LA-RV-2.1', 'Continue to make engaging and 'just right' book choices for Independent Reading based on: interests, various cultures (theirs and others), difficulty level, genre'),
  ('2', 'Reading and Viewing', 'G2-LA-RV-2.2', 'Reflect on various sources of background knowledge to predict and make connections before, during and after reading a piece of: fiction, nonfiction, poetry'),
  ('2', 'Reading and Viewing', 'G2-LA-RV-2.3', 'Increase time (build stamina) while engaged in Independent Reading'),
  ('2', 'Reading and Viewing', 'G2-LA-RV-2.4', 'Regard reading/viewing as sources of interest, enjoyment, and information'),
  ('2', 'Reading and Viewing', 'G2-LA-RV-2.5', 'Share ideas and opinions about favourite authors or favourite genres with peers'),
  ('2', 'Reading and Viewing', 'G2-LA-RV-2.6', 'Make meaningful personal, text and community/world connections that enhance comprehension'),
  ('2', 'Reading and Viewing', 'G2-LA-RV-2.7', 'Demonstrate understanding and application of reading strategies while reading Early level texts'),
  ('2', 'Reading and Viewing', 'G2-LA-RV-2.8', 'Ask critical questions of fiction, nonfiction, and poetry (Why, what if, is it possible, etc.)'),
  ('2', 'Reading and Viewing', 'G2-LA-RV-2.9', 'Make connections between personal and social wellbeing and information texts on topics such as: physical activity, health, emotions'),
  ('2', 'Reading and Viewing', 'G2-LA-RV-2.10', 'Recognize different points of view of the author of print and/or digital text'),
  ('2', 'Reading and Viewing', 'G2-LA-RV-2.11', 'Continue to develop an understanding and respect for diversity in text and illustrations'),
  ('2', 'Reading and Viewing', 'G2-LA-RV-2.12', 'Use illustrations and details in a text to describe and interpret characters, setting, and events'),
  ('2', 'Reading and Viewing', 'G2-LA-RV-2.13', 'Reflect on the purpose of different types of texts e.g., local newspaper articles, local stories, poems, ads, e-texts, etc.'),
  ('2', 'Writing and Representing', 'G2-LA-WR-3.1', 'Recognise the purpose and basic similarities and differences in paper based and digital genres of: fiction, nonfiction, poetry'),
  ('2', 'Writing and Representing', 'G2-LA-WR-3.2', 'Apply a variety of comprehension strategies to create meaning: activating background knowledge, determining importance, visualisation, prediction, inferring, synthesising, analysing, questions, make connections'),
  ('2', 'Writing and Representing', 'G2-LA-WR-3.3', 'Use illustrations, graphics etc. in nonfiction text to ask questions, make inferences, and search for answers'),
  ('2', 'Writing and Representing', 'G2-LA-WR-3.4', 'Use various tools to retell a narrative, referring to characters, problem (what happened), and solution (ending)'),
  ('2', 'Writing and Representing', 'G2-LA-WR-3.5', 'Read simple mathematics or science problems to: search for information, ask questions, find solutions'),
  ('2', 'Writing and Representing', 'G2-LA-WR-3.6', 'Demonstrate understanding through various responses to text, such as: artistic representations (visual arts, dance, music), discussions, graphic organisers, oral and written responses to questions, etc.'),
  ('2', 'Writing and Representing', 'G2-LA-WR-3.7', 'Follow written instructions to create an object, find a location, etc.'),
  ('2', 'Writing and Representing', 'G2-LA-WR-3.8', 'Begin to connect background knowledge re community and culture to support comprehension of culturally relevant text'),
  ('2', 'Writing and Representing', 'G2-LA-WR-3.9', 'Respond critically to texts by asking and formulating responses to questions such as: what if, is it possible that . . ., what else, what was the author trying to tell us, do I agree/why'),
  ('2', 'Writing and Representing', 'G2-LA-WR-3.10', 'Respond to text focussed on diverse cultures/ways of life with interest, respectful questions and thought');

-- Grade 3 Language Arts Standards
INSERT INTO language_arts_standards (grade_level, strand, code, description)
VALUES
  ('3', 'Listening and Speaking', 'G3-LA-LS-1.1', 'Engage with and share various genres of music, oral poetry, artwork, and oral stories that have been chosen for pleasure'),
  ('3', 'Listening and Speaking', 'G3-LA-LS-1.2', 'Experience and enjoy playful use of language, to communicate e.g., telling jokes, asking riddles, singing songs, composing rhymes and verses'),
  ('3', 'Listening and Speaking', 'G3-LA-LS-1.3', 'Respond to oral/aural language through improvisational drama and/or artwork'),
  ('3', 'Listening and Speaking', 'G3-LA-LS-1.4', 'Listen attentively and critically to fiction and nonfiction text and music to demonstrate understanding of: the mood, main idea, some supporting details'),
  ('3', 'Listening and Speaking', 'G3-LA-LS-1.5', 'Continue to develop strategies to describe, share, and discuss thoughts, feelings, and experiences with peers'),
  ('3', 'Listening and Speaking', 'G3-LA-LS-1.6', 'Ask and respond to questions to clarify information and to explore possibilities or solutions to problems'),
  ('3', 'Listening and Speaking', 'G3-LA-LS-1.7', 'Listen critically for subtle messages in conversation, music, and environmental sounds'),
  ('3', 'Listening and Speaking', 'G3-LA-LS-1.8', 'Create and use oral instructions describing how to make or do something'),
  ('3', 'Listening and Speaking', 'G3-LA-LS-1.9', 'Discuss solutions to local, regional and world events by extending use of questioning to consider: why? how? when? what if? what else?, etc.'),
  ('3', 'Listening and Speaking', 'G3-LA-LS-1.10', 'Demonstrate understanding and use of conversation courtesies during peer group work, class discussions and play'),
  ('3', 'Listening and Speaking', 'G3-LA-LS-1.11', 'Use vocabulary that shows respect for all people'),
  ('3', 'Listening and Speaking', 'G3-LA-LS-1.12', 'Listen attentively and build on others' ideas with increasing confidence in group and class discussions and individual presentations'),
  ('3', 'Listening and Speaking', 'G3-LA-LS-1.13', 'Continue to develop understanding of point of view without expressing judgment'),
  ('3', 'Listening and Speaking', 'G3-LA-LS-1.14', 'Explore ideas and feelings by asking respectful questions and listening with minimal interruption'),
  ('3', 'Listening and Speaking', 'G3-LA-LS-1.15', 'Use and respond to verbal and nonverbal cues respectfully'),
  ('3', 'Listening and Speaking', 'G3-LA-LS-1.16', 'Develop confidence in asking for assistance from peers and adults'),
  ('3', 'Listening and Speaking', 'G3-LA-LS-1.17', 'Retell stories and events with peers and engage in follow up conversations'),
  ('3', 'Listening and Speaking', 'G3-LA-LS-1.18', 'Share relevant ideas, opinions, and feelings on topics of personal and social interest using both Standard English and Home Languages'),
  ('3', 'Listening and Speaking', 'G3-LA-LS-1.19', 'Develop an appreciation for various forms of language and their appropriateness to different situations'),
  ('3', 'Listening and Speaking', 'G3-LA-LS-1.20', 'Use thoughtful, respectful, and non-hurtful vocabulary'),
  ('3', 'Listening and Speaking', 'G3-LA-LS-1.21', 'Continue to develop oral comprehension strategies (connecting, inferring, predicting, analysing, synthesising, visualising) to determine word meanings'),
  ('3', 'Listening and Speaking', 'G3-LA-LS-1.22', 'Participate in the sharing of culturally relevant songs, raps, drama, and poetry with fluency, rhythm, and pace'),
  ('3', 'Listening and Speaking', 'G3-LA-LS-1.23', 'Continue to develop understanding of how and when to adjust speech volume, projection, facial expressions, gestures, and tone of voice to the speaking occasion'),
  ('3', 'Listening and Speaking', 'G3-LA-LS-1.24', 'Continue to develop meaningful language use and conventions of oral language(s) as appropriate to the context and purpose: word order, increasingly varied vocabulary choices for nouns, verbs, adjectives, adverbs, use of descriptive language (similes, beginning use of metaphors), use of affixes, subject and verb agreement for casual spoken messages and in planned oral presentations'),
  ('3', 'Reading and Viewing', 'G3-LA-RV-2.1', 'Continue to choose and engage with a range of literary, visual, graphic, and informational texts for independent reading'),
  ('3', 'Reading and Viewing', 'G3-LA-RV-2.2', 'Apply knowledge of the of fiction, poetry, and nonfiction genres to guide understanding of visual and text-based information'),
  ('3', 'Reading and Viewing', 'G3-LA-RV-2.3', 'Further develop independent use of comprehension strategies during Independent Reading: building on background knowledge, determining the main idea, making connections, predicting, visualising, inferring, analysing, synthesising'),
  ('3', 'Reading and Viewing', 'G3-LA-RV-2.4', 'Demonstrate understanding of texts read independently through a variety of oral, written, visual responses such as: artistic representations (visual arts, song, dance), discussions, graphic organizers, oral and written responses to questions'),
  ('3', 'Reading and Viewing', 'G3-LA-RV-2.5', 'Continue to respond critically to texts by asking and formulating responses to questions such as: what if?, is it possible that . . .?, what else?, what was the author trying to tell us?, do I agree / why?'),
  ('3', 'Reading and Viewing', 'G3-LA-RV-2.6', 'Describe how the sequence of events and setting of fiction and nonfiction genres impacts the plot or the event described'),
  ('3', 'Reading and Viewing', 'G3-LA-RV-2.7', 'Apply knowledge of characterization by: describing the character's attributes (traits, motivations, or feelings); using evidence from the text to support generalizations about the character; comparing and contrasting characters within a selection or between/among two or more selections; explaining how the actions of characters contribute to the sequence of events describing the impact of a character's response to a problem, the character's goal, and what the character says or thinks'),
  ('3', 'Writing and Representing', 'G3-LA-WR-3.1', 'Observe that the processes of weathering and erosion take a long time but we can readily see their long-term effects'),
  ('3', 'Writing and Representing', 'G3-LA-WR-3.2', 'Classify a process as either weathering or erosion'),
  ('3', 'Writing and Representing', 'G3-LA-WR-3.3', 'Devise a solution to a problem of weathering/erosion based on careful observation of historical pictures'),
  ('3', 'Writing and Representing', 'G3-LA-WR-3.4', 'Hypothesize how diversion of water can be an effective erosion deterrent'),
  ('3', 'Writing and Representing', 'G3-LA-WR-3.5', 'Hypothesize how retention walls can be an effective erosion deterrent'),
  ('3', 'Writing and Representing', 'G3-LA-WR-3.6', 'Hypothesize how placing plants on hillsides can be an effective erosion deterrent'),
  ('3', 'Writing and Representing', 'G3-LA-WR-3.7', 'Hypothesize how adding windbreaks to a field can protect crops'),
  ('3', 'Writing and Representing', 'G3-LA-WR-3.8', 'Communicate to peers the rationale behind models that explain weathering/erosion problem solutions'),
  ('3', 'Writing and Representing', 'G3-LA-WR-3.9', 'Construct a model to explain weathering/erosion control'),
  ('3', 'Writing and Representing', 'G3-LA-WR-3.10', 'Analyse information (field trip, interviews, pictures) from the community in order to formulate problem solutions'),
  ('3', 'Writing and Representing', 'G3-LA-WR-3.11', 'Interpret video to better understand the slow process of weathering/erosion');

-- Grade 4 Language Arts Standards
INSERT INTO language_arts_standards (grade_level, strand, code, description)
VALUES
  ('4', 'Listening and Speaking', 'G4-LA-LS-1.1', 'Demonstrate enthusiasm for participating in class discussions, storytelling, oral poetry, and singing'),
  ('4', 'Listening and Speaking', 'G4-LA-LS-1.2', 'Continue to explore a variety of genres and styles in spoken language on topics of interest and personal growth (conversations, debates, poetry, storytelling, interviews, etc.)'),
  ('4', 'Listening and Speaking', 'G4-LA-LS-1.3', 'Express preferences in written, visual, and oral communication genres and styles and explain the reasons behind their choices'),
  ('4', 'Listening and Speaking', 'G4-LA-LS-1.4', 'Use technology to enhance their listening and speaking skills, such as recording and listening to their own speech'),
  ('4', 'Listening and Speaking', 'G4-LA-LS-1.5', 'Use multimedia resources for research and oral presentations'),
  ('4', 'Listening and Speaking', 'G4-LA-LS-1.6', 'Continue to engage with and share various genres of music, oral poetry, artwork, and oral stories for pleasure'),
  ('4', 'Listening and Speaking', 'G4-LA-LS-1.7', 'Respond to oral/aural language through improvisational drama and/or artwork'),
  ('4', 'Listening and Speaking', 'G4-LA-LS-1.8', 'Listen attentively and critically to fiction and nonfiction texts and music to demonstrate understanding of the mood, main idea, supporting details, theme, moral etc.'),
  ('4', 'Listening and Speaking', 'G4-LA-LS-1.9', 'Develop competence in analyzing subtle messages in a conversation, music, advertisements, speeches, and media that are intended to persuade the listeners'),
  ('4', 'Listening and Speaking', 'G4-LA-LS-1.10', 'Give clear "how to" instructions'),
  ('4', 'Listening and Speaking', 'G4-LA-LS-1.11', 'Discuss issues and/or solutions to local, regional and world problems by extending use of questioning to consider: why? how? when? what if? what else?, etc.'),
  ('4', 'Listening and Speaking', 'G4-LA-LS-1.12', 'Engage in conversations with peers during collaborative activities by adding relevant comments and questions that advance the dialogue'),
  ('4', 'Listening and Speaking', 'G4-LA-LS-1.13', 'Express ideas and opinions with increasing respect and confidence'),
  ('4', 'Listening and Speaking', 'G4-LA-LS-1.14', 'Practice active listening strategies including eye contact with affirming words/gestures to show whole-hearted engagement during peer discussions'),
  ('4', 'Listening and Speaking', 'G4-LA-LS-1.15', 'Experiment with nonverbal communication (signing, mime, facial expressions, etc.)'),
  ('4', 'Listening and Speaking', 'G4-LA-LS-1.16', 'Continue to develop understanding of point of view without expressing judgment'),
  ('4', 'Listening and Speaking', 'G4-LA-LS-1.17', 'Give constructive oral feedback using prompts such as "I notice...I wonder, This made me think about..." when responding to classmates'' presentations or ideas'),
  ('4', 'Listening and Speaking', 'G4-LA-LS-1.18', 'Continue to explore ideas and feelings by asking respectful questions and listening with minimal interruption'),
  ('4', 'Listening and Speaking', 'G4-LA-LS-1.19', 'Participate in the simple of debate, considering the multiple viewpoints and finding common grounds'),
  ('4', 'Listening and Speaking', 'G4-LA-LS-1.20', 'Integrate listening and speaking skills across various subject areas, such as Mathematics, Social Studies, and Science'),
  ('4', 'Listening and Speaking', 'G4-LA-LS-1.21', 'Explore and discuss ideas, opinions, and feelings on topics of personal and social interest using both Standard English and Home Language(s)'),
  ('4', 'Listening and Speaking', 'G4-LA-LS-1.22', 'Demonstrate awareness of the kind of language appropriate for different situations and audiences'),
  ('4', 'Listening and Speaking', 'G4-LA-LS-1.23', 'Deepen understanding of the importance of word choice, tone of voice, volume, projection, facial expression, and gesture appropriate to the speaking occasion'),
  ('4', 'Listening and Speaking', 'G4-LA-LS-1.24', 'Listen to identify the tone, mood and the emotion conveyed by a speaker in an oral communication'),
  ('4', 'Listening and Speaking', 'G4-LA-LS-1.25', 'Further develop oral comprehension strategies (e.g., making predictions, making inferences, visualization, drawing conclusions) to determine word meanings'),
  ('4', 'Listening and Speaking', 'G4-LA-LS-1.26', 'Identify, share, and analyze culturally relevant songs, music, , drama, and poetry with fluency, rhythm, and pace for literal and inferred purpose and meaning'),
  ('4', 'Listening and Speaking', 'G4-LA-LS-1.27', 'Further develop meaningful oral language use and conventions of oral language(s) as appropriate to the context and purpose: word order, increasingly varied vocabulary choices for nouns, verbs, adjectives, adverbs, use of descriptive language (similes, metaphors, beginning use of personification), use of affixes, subject and verb agreement correctly in delivering spoken messages and in planned oral presentations');

-- Grade 5 Language Arts Standards
INSERT INTO language_arts_standards (grade_level, strand, code, description)
VALUES
  ('5', 'Listening and Speaking', 'G5-LA-LS-1.1', 'Clarify opinions by responding to the questions and ideas/opinions of others and provide evidence to support thinking'),
  ('5', 'Listening and Speaking', 'G5-LA-LS-1.2', 'Continue to use intonation, tone, and expression to communicate ideas and feelings in a variety of situations, considering audience and purpose'),
  ('5', 'Listening and Speaking', 'G5-LA-LS-1.3', 'Discuss news, current events, opinions, feelings, strengths, challenges, future plans and hopes in class discussions'),
  ('5', 'Listening and Speaking', 'G5-LA-LS-1.4', 'Reflect on and identify strengths as listeners and speakers, areas for improvement and the strategies most helpful in oral communication'),
  ('5', 'Listening and Speaking', 'G5-LA-LS-1.5', 'Participate as active listeners in group learning activities by: identifying the main points, determining the sequence events, giving an accurate account, taking notes'),
  ('5', 'Listening and Speaking', 'G5-LA-LS-1.6', 'Report on a topic or text, tell a story, or recount an experience in an organized manner and appropriate pace, using appropriate facts and relevant descriptive details to support main ideas or themes'),
  ('5', 'Listening and Speaking', 'G5-LA-LS-1.7', 'Follow agreed-upon rules for discussions and carry out assigned roles'),
  ('5', 'Listening and Speaking', 'G5-LA-LS-1.8', 'Create and/or use visual aids in presentations when appropriate to enhance development of themes and/or main ideas (e.g., graphics, sound)'),
  ('5', 'Listening and Speaking', 'G5-LA-LS-1.9', 'Use appropriate facial expressions and gestures to support, accentuate, or dramatize the message'),
  ('5', 'Listening and Speaking', 'G5-LA-LS-1.10', 'Adapt speech to a variety of contexts and tasks, using formal English when appropriate to task and situation'),
  ('5', 'Listening and Speaking', 'G5-LA-LS-1.11', 'Orally present an argument or perspective'),
  ('5', 'Listening and Speaking', 'G5-LA-LS-1.12', 'Create, present, and participate in mini debates/speeches using persuasive techniques e.g., promises, dares, flattery, glittering generalities, intonations that persuades people to buy or do something'),
  ('5', 'Listening and Speaking', 'G5-LA-LS-1.13', 'Identify the reasons and evidence a speaker provides to support points'),
  ('5', 'Listening and Speaking', 'G5-LA-LS-1.14', 'Respond to and to give sequential multi-step directions and instructions with increasing detail'),
  ('5', 'Listening and Speaking', 'G5-LA-LS-1.15', 'Listen to identify and discuss critically persuasive techniques used in advertisements'),
  ('5', 'Listening and Speaking', 'G5-LA-LS-1.16', 'Critically listen to the ideas and perspectives of others in a variety of collaborative learning experiences showing increased monitoring of when to listen and when to speak'),
  ('5', 'Listening and Speaking', 'G5-LA-LS-1.17', 'Develop ability to adjust level of language used to suit the specific communication situation'),
  ('5', 'Listening and Speaking', 'G5-LA-LS-1.18', 'Begin to reflect critically upon a variety of peer and published oral presentations by evaluating the speaker's perspective'),
  ('5', 'Listening and Speaking', 'G5-LA-LS-1.19', 'Make language choices that affirm sensitivity and respect the ideas and experiences of others'),
  ('5', 'Listening and Speaking', 'G5-LA-LS-1.20', 'Listen to understand and respond appropriately to a variety of situations and for a variety of purposes'),
  ('5', 'Listening and Speaking', 'G5-LA-LS-1.21', 'Review the key ideas and draw conclusions considering the information and knowledge gained from the discussions'),
  ('5', 'Listening and Speaking', 'G5-LA-LS-1.22', 'Engage in self and peer reflection about concepts of fake news, misinformation, and disinformation when considering accuracy and intent of information'),
  ('5', 'Listening and Speaking', 'G5-LA-LS-1.23', 'Consider others' responses and begin to offer opinions supported with some evidence'),
  ('5', 'Listening and Speaking', 'G5-LA-LS-1.24', 'Ask questions to check understanding of information presented, stay on topic, and link comments to the remarks of others'),
  ('5', 'Listening and Speaking', 'G5-LA-LS-1.25', 'Ask a speaker for clarification about the subject matter of his / her contribution'),
  ('5', 'Listening and Speaking', 'G5-LA-LS-1.26', 'Speak confidently in complete sentences using appropriate intonation and courteous expression with peers and in various levels of formality'),
  ('5', 'Listening and Speaking', 'G5-LA-LS-1.27', 'Create age-appropriate oral media messages (e.g., videos, podcasts, focusing on effectiveness of the message'),
  ('5', 'Listening and Speaking', 'G5-LA-LS-1.28', 'Converse and collaborate in a variety of situations with increasing sensitivity and respect, considering cultural contexts, audience, and purpose'),
  ('5', 'Listening and Speaking', 'G5-LA-LS-1.29', 'Explain ideas and opinions with supporting details, and respond to others' questions and ideas'),
  ('5', 'Listening and Speaking', 'G5-LA-LS-1.30', 'Speak clearly in an audible voice using volume, pitch, phrasing, pace, modulation, and gestures to enhance meaning at various levels of formality'),
  ('5', 'Listening and Speaking', 'G5-LA-LS-1.31', 'Listen to distinguish between purpose and effective application oral Standard English and Home Languages spoken in the Caribbean'),
  ('5', 'Listening and Speaking', 'G5-LA-LS-1.32', 'Use increasingly well constructed complex sentences that incorporate vocabulary and style to enhance oral presentations'),
  ('5', 'Listening and Speaking', 'G5-LA-LS-1.33', 'Use figurative and metaphorical vocabulary in their oral presentations'),
  ('5', 'Listening and Speaking', 'G5-LA-LS-1.34', 'Notice and interpret multi meaning vocabulary words in the contexts in which they are used (row as a noun, row as a verb; seal as a noun with various meanings, seal as a verb, etc.)'),
  ('5', 'Listening and Speaking', 'G5-LA-LS-1.35', 'Paraphrase portions of a text read aloud, or information presented in oral and visual media and formats');

-- Kindergarten Mathematics Standards
INSERT INTO mathematics_standards (grade_level, strand, code, description)
VALUES
  ('K', 'Number Sense', 'K-MA-NS-1.1', 'Whole Number - Saying Number Sequence, Meaningful Counting and Skip Counting:\n- Say the number that comes before a given number\n- Use a number line to support counting\n- Recite number names from a given number to a given number\n- Count with meaning to 10, by building quantities\n- Count with meaning to 10, by matching quantity and numeral'),
  ('K', 'Number Sense', 'K-MA-NS-1.2', 'Whole Number – Representing and Partitioning Quantities:\n- Represent a given number up to 10 using a variety of concrete models, including 5 and 10 frames\n- Answer the question, How many are in the set? using the last number counted in a set\n- In a fixed arrangement, starting in different locations, can show that the count of the number of objects in a set does not change\n- Count the number of objects in a given set, rearrange the objects, predict the new count, and recount to verify the prediction'),
  ('K', 'Number Sense', 'K-MA-NS-1.4', 'Whole Number – Comparing and Ordering Quantities:\n- Look briefly at a given familiar arrangement of one to five objects or dots and identify the number represented without counting\n- Compare the number of objects in two sets of up to 10 objects, using phrases such as \'same number as\', \'equal to\', more than\', and \'less than\'\n- Make a set that has the same number of objects as a given set\n- Make a set that has one more object than a given set'),
  ('K', 'Operations with Numbers', 'K-MA-ON-1.1', 'Additive Thinking - Understanding the meaning of addition and subtraction and how they relate:\n- Compose and decompose numbers up to 9 in a variety of ways using manipulatives, fingers and pictures'),
  ('K', 'Patterns and Relationship', 'K-MA-PR-1.1', 'Recognizing, Describing and Extending Patterns - Describe, create, extend and generalise patterns:\n- Create simple repeating patterns (2 elements)\n- Extend simple repeating patterns (2 elements)\n- Copy a given repeating pattern\n- Extend a variety of given repeating patterns to two more repetitions\n- Create a repeating pattern using manipulatives, musical instruments, or action\n- Identify and describe a repeating pattern in the classroom, the school, and outdoors'),
  ('K', 'Geometrical Thinking', 'K-MA-GT-1.1', 'Analysing and describing 3D shapes:\n- Build and describe 3-D objects\n- Create a representation of a given 3-D object using building blocks, and compare the representation to the original 3-D object\n- Describe a given 3-D object using words such as big, little, round, like a box or a can'),
  ('K', 'Geometrical Thinking', 'K-MA-GT-1.2', 'Recognize, Name and Describe Shapes – 2D and 3D:\n- Identify and describe shapes (2-D = squares, circles, triangles, 3-D = cubes, cones, and spheres)\n- Describe objects in the environment using names of shapes and describe the relative positions of these objects\n- Correctly name shapes regardless of their orientations or overall size');

-- Grade 1 Mathematics Standards
INSERT INTO mathematics_standards (grade_level, strand, code, description)
VALUES
  ('1', 'Number Sense', 'G1-MA-NS-1.1', 'Using Whole Numbers: Learners will meaningfully sequence and use a range of counting and grouping strategies'),
  ('1', 'Number Sense', 'G1-MA-NS-1.2', 'Whole Number – Representing and Partitioning Quantities'),
  ('1', 'Number Sense', 'G1-MA-NS-1.3', 'Whole Number – Comparing and Ordering Quantities'),
  ('1', 'Number Sense', 'G1-MA-NS-1.4', 'Whole Number – Understanding Place Value'),
  ('1', 'Operations with Numbers', 'G1-MA-ON-1.1', 'Additive Thinking – Understanding the Meaning of Addition and Subtraction and how they Related'),
  ('1', 'Operations with Numbers', 'G1-MA-ON-1.2', 'Additive Thinking – Compute Fluently Using Operations (+,-)'),
  ('1', 'Operations with Numbers', 'G1-MA-ON-2.1', 'Multiplicative thinking - Learners will understand the meaning of multiplication and division and how they relate'),
  ('1', 'Patterns and Relationships', 'G1-MA-PR-1.1', 'Recognizing, Describing and Extending Patterns - Describe, create, extend and generalise patterns'),
  ('1', 'Patterns and Relationships', 'G1-MA-PR-1.2', 'Learners will recognize, describe, and extend for increasing and decreasing patterns'),
  ('1', 'Patterns and Relationships', 'G1-MA-PR-2.1', 'Variables and Relationships - Representing Unknowns'),
  ('1', 'Patterns and Relationships', 'G1-MA-PR-2.2', 'Variables and Relationships - Understanding and representing equivalence'),
  ('1', 'Patterns and Relationships', 'G1-MA-PR-2.3', 'Variables and Relationships - Writing Expressions and Equations'),
  ('1', 'Geometrical Thinking', 'G1-MA-GT-1.1', 'Explore and Analyze Geometric Shapes and Relationships - Developing spatial sense'),
  ('1', 'Geometrical Thinking', 'G1-MA-GT-1.2', 'Explore and Analyze Geometric Shapes and Relationships - - Sorting, patterning, and building with 2D & 3D Shapes'),
  ('1', 'Geometrical Thinking', 'G1-MA-GT-2.1', 'Recognizing, Naming and Describing Shapes - Analysing and describing shapes'),
  ('1', 'Geometrical Thinking', 'G1-MA-GT-2.2', 'Recognizing, Naming and Describing Shapes - Naming 2D & 3D shapes'),
  ('1', 'Geometrical Thinking', 'G1-MA-GT-2.3', 'Recognizing, Naming and Describing Shapes – Describing relationships between and among shapes'),
  ('1', 'Measurement', 'G1-MA-M-1.1', 'Understanding What and How We Measure - Developing an understanding of measurable attributes'),
  ('1', 'Measurement', 'G1-MA-M-1.2', 'Understanding What and How We Measure - Comparing and ordering based on measurable attributes'),
  ('1', 'Measurement', 'G1-MA-M-1.3', 'Understanding What and How We Measure - Developing knowledge and applying non-standard units of measure'),
  ('1', 'Data Handling and Probability', 'G1-MA-DMP-1.1', 'Collecting, Organising and Displaying Data - Formulating questions that can be answered with data');

-- Grade 2 Mathematics Standards
INSERT INTO mathematics_standards (grade_level, strand, code, description)
VALUES
  ('2', 'Number Sense', 'G2-MA-NS-1.1', 'Whole Number - Saying Number Sequence, Meaningful Counting, and Skip Counting'),
  ('2', 'Number Sense', 'G2-MA-NS-1.2', 'Whole Number - Representing and Partitioning Quantities'),
  ('2', 'Number Sense', 'G2-MA-NS-1.3', 'Whole Number - Place Value'),
  ('2', 'Number Sense', 'G2-MA-NS-2.1', 'Fractions, Decimals and Rational Numbers - Representing Fraction'),
  ('2', 'Number Sense', 'G2-MA-NS-2.2', 'Fractions, Decimals and Rational Numbers - Comparing and Ordering Fractions'),
  ('2', 'Operations with Numbers', 'G2-MA-ON-1.1', 'Additive Thinking - Understanding the meaning of addition and subtraction and how they relate'),
  ('2', 'Operations with Numbers', 'G2-MA-ON-1.2', 'Additive Thinking - Compute Fluently'),
  ('2', 'Operations with Numbers', 'G2-MA-ON-2.1', 'Multiplicative Thinking - Understanding the meaning of multiplication and division and how they relate'),
  ('2', 'Patterns and Relationships', 'G2-MA-PR-1.1', 'Recognizing, describing and extending patterns – Repeating Patterns'),
  ('2', 'Patterns and Relationships', 'G2-MA-PR-1.2', 'Recognizing, Describing and Extending Patterns - Increasing and Decreasing Patterns'),
  ('2', 'Patterns and Relationships', 'G2-MA-PR-2.1', 'Variables and Relationships – Representing Unknowns'),
  ('2', 'Patterns and Relationships', 'G2-MA-PR-2.2', 'Variables and Relationships - Understanding and representing equivalence'),
  ('2', 'Patterns and Relationships', 'G2-MA-PR-2.3', 'Variables and Relationships - Writing Expressions and Equations'),
  ('2', 'Geometrical Thinking', 'G2-MA-GT-1.1', 'Explore and Analyze Geometric Shapes and Relationships- Developing Spatial Sense'),
  ('2', 'Geometrical Thinking', 'G2-MA-GT-1.2', 'Explore and Analyze Geometric Shapes and Relationships - Sorting, patterning, and building with 2D and 3D Shapes'),
  ('2', 'Geometrical Thinking', 'G2-MA-GT-2.1', 'Recognizing, Naming and Describing Shapes- Analyzing and Describing Shapes'),
  ('2', 'Geometrical Thinking', 'G2-MA-GT-2.2', 'Recognizing, Naming and Describing Shapes - Naming 2D & 3D shapes'),
  ('2', 'Geometrical Thinking', 'G2-MA-GT-2.3', 'Recognizing, Naming and Describing Shapes- Describing relationships between and among shapes'),
  ('2', 'Measurement', 'G2-MA-M-1.1', 'Understanding What and How We Measure - Developing an understanding of measurable attributes'),
  ('2', 'Measurement', 'G2-MA-M-1.2', 'Understanding What and How We Measure - Comparing and ordering based on measurable attributes'),
  ('2', 'Measurement', 'G2-MA-M-1.3', 'Understanding What and How We Measure - Developing and applying non-standard units of measure'),
  ('2', 'Data Handling and Probability', 'G2-MA-DMP-1.1', 'Collecting, Organizing, and Displaying Data - Formulating Questions That Can be Answered with Data');

-- Grade 3 Mathematics Standards
INSERT INTO mathematics_standards (grade_level, strand, code, description)
VALUES
  ('3', 'Number Sense', 'G3-MA-NS-1.1', 'Whole Number – Saying Number Sequence, Meaningful Counting and Skip Counting'),
  ('3', 'Number Sense', 'G3-MA-NS-1.2', 'Whole Number – Representing and Partitioning Quantities'),
  ('3', 'Number Sense', 'G3-MA-NS-1.3', 'Whole Number – Comparing and Ordering Quantities'),
  ('3', 'Number Sense', 'G3-MA-NS-1.4', 'Whole Number – Understanding Place Value'),
  ('3', 'Number Sense', 'G3-MA-NS-2.1', 'Fractions, Decimals and Rational Numbers– Representing Fractions'),
  ('3', 'Number Sense', 'G3-MA-NS-2.2', 'Fractions, Decimals and Rational Numbers – Comparing and Ordering Fractions'),
  ('3', 'Number Sense', 'G3-MA-NS-2.3', 'Fractions, Decimals and Rational Numbers – Representing Decimals'),
  ('3', 'Operations with Numbers', 'G3-MA-ON-1.1', 'Additive Thinking – Understanding the Meaning of Addition and Subtraction and how they Related'),
  ('3', 'Operations with Numbers', 'G3-MA-ON-1.2', 'Additive Thinking – Compute Fluently using Operations (+,-)'),
  ('3', 'Operations with Numbers', 'G3-MA-ON-2.1', 'Multiplicative Thinking – Understanding the Meaning of Multiplication and Division and How They Relate'),
  ('3', 'Patterns and Relationships', 'G3-MA-PR-1.1', 'Recognizing, describing and extending patterns – Repeating Patterns'),
  ('3', 'Patterns and Relationships', 'G3-MA-PR-1.2', 'Recognizing, describing and extending patterns – Increasing and Decreasing Patterns'),
  ('3', 'Patterns and Relationships', 'G3-MA-PR-2.1', 'Variables and Relationships – Representing Unknowns'),
  ('3', 'Geometrical Thinking', 'G3-MA-GT-1.1', 'Explore and Analyze Geometric shapes and Relationships - Developing a spatial sense'),
  ('3', 'Geometrical Thinking', 'G3-MA-GT-1.2', 'Explore and Analyze Geometric Shapes and Relationships: Sorting, patterning, and building 2D and 3D Shapes'),
  ('3', 'Geometrical Thinking', 'G3-MA-GT-2.1', 'Recognizing, Naming and Describing Shapes- Analyzing and Describing Shapes'),
  ('3', 'Measurement', 'G3-MA-M-1.1', 'Understanding what and how we are measure -Developing an understanding of measurable attributes'),
  ('3', 'Measurement', 'G3-MA-M-1.2', 'Comparing and ordering based on measurable attributes'),
  ('3', 'Measurement', 'G3-MA-M-1.3', 'Developing and applying non-standard units of measure'),
  ('3', 'Data Handling and Probability', 'G3-MA-DMP-1.1', 'Collecting, Organising and Displaying Data - Formulating questions that can be answered with data');

-- Grade 4 Mathematics Standards
INSERT INTO mathematics_standards (grade_level, strand, code, description)
VALUES
  ('4', 'Number Sense', 'G4-MA-NS-1.1', 'Whole Number – Saying Number Sequence, Meaningful Counting and Skip Counting'),
  ('4', 'Number Sense', 'G4-MA-NS-1.2', 'Whole Number – Representing and Partitioning Quantities'),
  ('4', 'Number Sense', 'G4-MA-NS-1.3', 'Whole Number – Comparing and Ordering Quantities'),
  ('4', 'Number Sense', 'G4-MA-NS-1.4', 'Whole Number – Understanding Place Value'),
  ('4', 'Number Sense', 'G4-MA-NS-2.1', 'Fractions, Decimals and Rational Numbers– Representing Fractions'),
  ('4', 'Number Sense', 'G4-MA-NS-2.2', 'Fractions, Decimals and Rational Numbers – Comparing and Ordering Fractions'),
  ('4', 'Number Sense', 'G4-MA-NS-2.3', 'Fractions, Decimals and Rational Numbers – Representing Decimals'),
  ('4', 'Operations with Numbers', 'G4-MA-ON-1.1', 'Additive Thinking – Understanding the Meaning of Addition and Subtraction and how They Related'),
  ('4', 'Operations with Numbers', 'G4-MA-ON-1.2', 'Additive Thinking – Compute Fluently Using Operations (+,-)'),
  ('4', 'Operations with Numbers', 'G4-MA-ON-1.3', 'Additive Thinking – Make a Reasonable Estimation When Using Operations'),
  ('4', 'Patterns and Relationships', 'G4-MA-PR-1.1', 'Recognizing, describing and extending patterns – Repeating Patterns'),
  ('4', 'Geometrical Thinking', 'G4-MA-GT-1.1', 'Explore and Analyse Geometric Shapes and Relationships - Developing a spatial sense'),
  ('4', 'Geometrical Thinking', 'G4-MA-GT-1.2', 'Explore and Analyze Geometric Shapes and Relationships-, Sorting, Patterning and building with 2d and 3d shapes'),
  ('4', 'Geometrical Thinking', 'G4-MA-GT-2.1', 'Recognizing, Naming, and Describing Shapes- Analyzing and describing shapes'),
  ('4', 'Measurement', 'G4-MA-M-1.1', 'Understanding What and How We Measure - Developing an understanding of measurable attributes'),
  ('4', 'Measurement', 'G4-MA-M-1.2', 'Understanding What and How We Measure - Comparing and ordering based on measurable attributes'),
  ('4', 'Measurement', 'G4-MA-M-1.3', 'Understanding What and How We Measure - Developing and applying non-standard units of measure'),
  ('4', 'Data Handling and Probability', 'G4-MA-DMP-1.1', 'Collecting, Organizing, and Displaying Data - Formulating questions that can be answered with data');

-- Grade 5 Mathematics Standards
INSERT INTO mathematics_standards (grade_level, strand, code, description)
VALUES
  ('5', 'Number Sense', 'G5-MA-NS-1.1', 'Whole Number – Saying Number Sequence, Meaningful Counting, and Skip Counting'),
  ('5', 'Number Sense', 'G5-MA-NS-1.2', 'Whole Number – Representing and Partitioning Quantities'),
  ('5', 'Number Sense', 'G5-MA-NS-1.3', 'Whole Number – Comparing and Ordering Quantities'),
  ('5', 'Number Sense', 'G5-MA-NS-1.4', 'Whole Number – Understanding Place Value'),
  ('5', 'Operations with Numbers', 'G5-MA-ON-1.1', 'Additive Thinking – Understanding the Meaning of Addition and Subtraction and How They Relate'),
  ('5', 'Operations with Numbers', 'G5-MA-ON-1.2', 'Additive Thinking – Compute Fluently Using Operations (+,-)'),
  ('5', 'Operations with Numbers', 'G5-MA-ON-2.1', 'Multiplicative Thinking – Understanding the Meaning of Multiplication and Division and How They Relate'),
  ('5', 'Engineering', 'G5-ETS-E-1', 'Plan and carry out fair tests in which variables are controlled and failure points are considered to identify aspects of a model or prototype that can be improved');

-- Grade 6 Mathematics Standards
INSERT INTO mathematics_standards (grade_level, strand, code, description)
VALUES
  ('6', 'Number Sense', 'G6-MA-NS-1.1', 'Whole Number – Saying Number Sequence, Meaningful Counting and Skip Counting'),
  ('6', 'Number Sense', 'G6-MA-NS-1.2', 'Whole Number – Representing and Partitioning Quantities'),
  ('6', 'Number Sense', 'G6-MA-NS-1.3', 'Whole Number – Comparing and Ordering Quantities'),
  ('6', 'Number Sense', 'G6-MA-NS-1.4', 'Whole Number – Understanding Place Value'),
  ('6', 'Operations with Numbers', 'G6-MA-ON-1.1', 'Additive Thinking – Understanding the Meaning of Addition and Subtraction and How They Relate'),
  ('6', 'Geometrical Thinking', 'G6-MA-GT-1.1', 'Explore and Analyse Geometric Shapes and Relationships - Developing a spatial sense');

-- Insert Kindergarten Social Studies Standards
INSERT INTO social_studies_standards (grade_level, strand, code, description)
VALUES
  ('K', 'historical-cultural-thinking', 'K-HCT-K1', 'Demonstrate an understanding of "me" as a unique child'),
  ('K', 'historical-cultural-thinking', 'K-HCT-S1', 'Distinguish personal characteristics that make each child unique (physical traits, mannerisms)'),
  ('K', 'historical-cultural-thinking', 'K-HCT-V1', 'Appreciate that everyone has unique and special characteristics'),
  ('K', 'historical-cultural-thinking', 'K-HCT-V2', 'Express appreciation of the child''s own personal attributes, one''s name'),
  ('K', 'historical-cultural-thinking', 'K-HCT-K2', 'Name family members'),
  ('K', 'historical-cultural-thinking', 'K-HCT-S2', 'Represent family members using pictures/images'),
  ('K', 'historical-cultural-thinking', 'K-HCT-S3', 'Compare their physical features with those of their family members; categorize similarities and differences of self and other family members'),
  ('K', 'historical-cultural-thinking', 'K-HCT-K3', 'Understand that we inherit characteristics from our families'),
  ('K', 'historical-cultural-thinking', 'K-HCT-V3', 'Appreciate the uniqueness of families; respect that the composition of families takes many forms'),
  ('K', 'historical-cultural-thinking', 'K-HCT-KV1', 'Understand that respect for self includes proper cleanliness, language and behaviour'),
  ('K', 'historical-cultural-thinking', 'K-HCT-S4', 'Categorize similarities and differences of self and others in families'),
  ('K', 'historical-cultural-thinking', 'K-HCT-K4', 'Recognize that their own physical characteristics, preferences, and mannerisms may be inherited from their families'),
  ('K', 'historical-cultural-thinking', 'K-HCT-K5', 'Name one religious and one national festival celebrated in their country'),
  ('K', 'historical-cultural-thinking', 'K-HCT-S5', 'Understand the significance and importance of religious and national festivals'),
  ('K', 'historical-cultural-thinking', 'K-HCT-V4', 'Appreciate that their country has different celebrations and traditions'),
  ('K', 'historical-cultural-thinking', 'K-HCT-K6', 'Identify customs (food, music, dance language) associated with these celebrations'),
  ('K', 'historical-cultural-thinking', 'K-HCT-S6', 'Make presentations on customs associated with these celebrations'),
  ('K', 'historical-cultural-thinking', 'K-HCT-V5', 'Appreciate the diversity of customs and take pride in this'),
  ('K', 'civic-participation', 'K-CP-K1', 'Describe how family members care for one another'),
  ('K', 'civic-participation', 'K-CP-V1', 'Appreciate that family members love and care for one another'),
  ('K', 'civic-participation', 'K-CP-K2', 'Describe roles of various family members'),
  ('K', 'civic-participation', 'K-CP-S1', 'Chart the daily routines or activities in which family members care for one another'),
  ('K', 'civic-participation', 'K-CP-V2', 'Appreciate that the way family members love and care for one another helps them meet their basic needs'),
  ('K', 'civic-participation', 'K-CP-K3', 'Identify groups to which I belong'),
  ('K', 'civic-participation', 'K-CP-S2', 'Express how my behaviour in groups and the behaviour of others affects me and others'),
  ('K', 'civic-participation', 'K-CP-V3', 'Appreciate that members of groups to which I belong have responsibilities'),
  ('K', 'civic-participation', 'K-CP-K4', 'Recognize that all children have the right to be safe from harm'),
  ('K', 'civic-participation', 'K-CP-S3', 'List examples of what helps children feel safe'),
  ('K', 'civic-participation', 'K-CP-V4', 'Appreciate that being safe from harm also means that they must learn to play safely'),
  ('K', 'civic-participation', 'K-CP-S4', 'Demonstrate responsible caring behaviour towards others in play'),
  ('K', 'civic-participation', 'K-CP-K5', 'Identify national symbols and emblems such as the national flag, anthem, pledge, bird and flower'),
  ('K', 'civic-participation', 'K-CP-S5', 'Demonstrate appropriate behaviour when national anthem is being played, pledge is being said'),
  ('K', 'civic-participation', 'K-CP-V5', 'Appreciate and respect the importance of national symbols'),
  ('K', 'civic-participation', 'K-CP-K6', 'Know why we have rules in groups to which I belong (e.g. family, class at school)'),
  ('K', 'civic-participation', 'K-CP-S6', 'Apply groups'' rules in daily life'),
  ('K', 'civic-participation', 'K-CP-V6', 'Demonstrate examples of responsible and polite behaviour in groups to which I belong'),
  ('K', 'civic-participation', 'K-CP-K7', 'Describe safe practices while travelling to school'),
  ('K', 'civic-participation', 'K-CP-S7', 'Role play the use of safe practices when travelling to school'),
  ('K', 'civic-participation', 'K-CP-V7', 'Appreciate the value and benefits of practicing safety when travelling to school'),
  ('K', 'spatial-thinking', 'K-ST-K1', 'State the name and address of their home and school'),
  ('K', 'spatial-thinking', 'K-ST-S1', 'Express themselves clearly when stating their address'),
  ('K', 'spatial-thinking', 'K-ST-V1', 'Feel a sense of belonging in their surroundings'),
  ('K', 'spatial-thinking', 'K-ST-K2', 'Identify natural and built features of the local environment'),
  ('K', 'spatial-thinking', 'K-ST-S2', 'Illustrate natural and built features of the local environment'),
  ('K', 'spatial-thinking', 'K-ST-V2', 'Appreciate that they are part of a wider environment'),
  ('K', 'spatial-thinking', 'K-ST-K3', 'Describe various weather conditions'),
  ('K', 'spatial-thinking', 'K-ST-S3', 'Observe and record different weather conditions'),
  ('K', 'spatial-thinking', 'K-ST-V3', 'Appreciate the importance of taking safety precautions in some weather conditions'),
  ('K', 'economic-decision-making', 'K-EDM-K1', 'Identify basic needs of people'),
  ('K', 'economic-decision-making', 'K-EDM-S1', 'Distinguish between needs and wants'),
  ('K', 'economic-decision-making', 'K-EDM-V1', 'Appreciate that all people have basic needs that must be met');

-- Insert Grade 1 Social Studies Standards
INSERT INTO social_studies_standards (grade_level, strand, code, description)
VALUES
  ('1', 'historical-cultural-thinking', '1-HCT-K1', 'State different forms of celebrations that are practiced in families to build pride and identity'),
  ('1', 'historical-cultural-thinking', '1-HCT-K2', 'Identify aspects of culture such as food, music, dance that are relevant to celebrations in families'),
  ('1', 'historical-cultural-thinking', '1-HCT-S1', 'Demonstrate different forms of celebration in the family and explain the importance of preserving local culture'),
  ('1', 'historical-cultural-thinking', '1-HCT-V1', 'Appreciate their cultural heritage'),
  ('1', 'historical-cultural-thinking', '1-HCT-K3', 'List religious and national festivals celebrated by the family'),
  ('1', 'historical-cultural-thinking', '1-HCT-S2', 'Investigate and report how the family, school and nation celebrate various religious and national festivals'),
  ('1', 'historical-cultural-thinking', '1-HCT-V2', 'Respect that families celebrate religious and national festivals in different ways, and that the families may choose not to celebrate some or all of these occasions'),
  ('1', 'historical-cultural-thinking', '1-HCT-K4', 'Identify the national symbols of their country'),
  ('1', 'historical-cultural-thinking', '1-HCT-S3', 'Describe the national symbols through drawing, painting and /or other expressions'),
  ('1', 'historical-cultural-thinking', '1-HCT-V3', 'Appreciate that their national symbols are unique and special to their country and should be respected');

-- Insert Grade 3 Social Studies Standards
INSERT INTO social_studies_standards (grade_level, strand, code, description)
VALUES
  ('3', 'historical-cultural-thinking', '3-HCT-K1', 'Identify the earliest inhabitants of our island'),
  ('3', 'historical-cultural-thinking', '3-HCT-S1', 'Use digital tools to investigate the evidence of early settlements of Indigenous peoples'),
  ('3', 'historical-cultural-thinking', '3-HCT-V1', 'Appreciate Indigenous cultures and respect their views of the environment and society'),
  ('3', 'historical-cultural-thinking', '3-HCT-K2', 'State the origins of the various peoples of our island/territory and discuss the reasons why they came'),
  ('3', 'historical-cultural-thinking', '3-HCT-S2', 'Locate the geographic origins of our various peoples'),
  ('3', 'historical-cultural-thinking', '3-HCT-V2', 'Recognise that migrations to our region had both positive and negative consequences'),
  ('3', 'historical-cultural-thinking', '3-HCT-K3', 'Discuss key features and aspects of our island''s culture and heritage that shaped our identity'),
  ('3', 'historical-cultural-thinking', '3-HCT-S3', 'Present information on special cultural events, activities or practices you participate in'),
  ('3', 'historical-cultural-thinking', '3-HCT-V3', 'Develop interest in practicing aspects of our culture'),
  ('3', 'historical-cultural-thinking', '3-HCT-K4', 'State the origins of our local island dialect(s)'),
  ('3', 'historical-cultural-thinking', '3-HCT-S4', 'Communicate with confidence and competence for different purposes with different dialects'),
  ('3', 'historical-cultural-thinking', '3-HCT-V4', 'Respect the value of local island dialects in shaping and defining our cultural identity as a people'),
  ('3', 'historical-cultural-thinking', '3-HCT-K5', 'Describe the cultural contributions of various peoples to our food, religion, dress, arts, language, and economy'),
  ('3', 'historical-cultural-thinking', '3-HCT-S5', 'Gather information from various sources and represent it to show evidence of the origins of ethnic contributions to our cultural heritage and national identity'),
  ('3', 'historical-cultural-thinking', '3-HCT-V5', 'Show recognition of the contributions made by various peoples to our cultural heritage and national identity'),
  ('3', 'historical-cultural-thinking', '3-HCT-K6', 'Identify ways our island traditional cultural music and dance have evolved over time'),
  ('3', 'historical-cultural-thinking', '3-HCT-S6', 'Explore how traditional cultural music and dance have changed over time'),
  ('3', 'historical-cultural-thinking', '3-HCT-V6', 'Appreciate the contribution of specific individuals to shaping our cultural development over time');

-- Insert Grade 5 Economic Decision Making Standards
INSERT INTO social_studies_standards (grade_level, strand, code, description)
VALUES
  ('5', 'economic-decision-making', '5-EDM-K1', 'Identify the major Caribbean companies that trade and offer services to and with your country and describe what they do'),
  ('5', 'economic-decision-making', '5-EDM-S1', 'Investigate the level of foreign, regional, and national ownership of various goods and services imported and exported from your country'),
  ('5', 'economic-decision-making', '5-EDM-V1', 'Appreciate the importance of locally owned companies in the social and economic well-being of the region'),
  ('5', 'economic-decision-making', '5-EDM-K2', 'Identify the major connections that exist with other Caribbean countries within your family'),
  ('5', 'economic-decision-making', '5-EDM-S2', 'Map the geographic origins and current locations of people within families'),
  ('5', 'economic-decision-making', '5-EDM-V2', 'Appreciate that individuals have the right to freedom of movement for life and work in the Caribbean'),
  ('5', 'economic-decision-making', '5-EDM-K3', 'Analyse the cause and effects of the changing nature of Caribbean agriculture since 1900'),
  ('5', 'economic-decision-making', '5-EDM-S3', 'Chart the positive and negative impact of agricultural change on the environment, employment, and food security'),
  ('5', 'economic-decision-making', '5-EDM-V3', 'Appreciate the importance of sustainable agricultural practices for the future of the Caribbean');

-- Kindergarten Science Standards
INSERT INTO science_standards (grade_level, strand, code, description)
VALUES
  ('K', 'Forces and Interactions: Pushes and Pulls', 'K-SCI-1', 'Plan and conduct an investigation to compare the effects of different strengths or different directions of pushes and pulls on the motion of an object'),
  ('K', 'Forces and Interactions: Pushes and Pulls', 'K-SCI-2', 'Analyse data to determine if a design solution works as intended to change the speed or direction of an object with a push or a pull'),
  ('K', 'Interdependent Relationships in Ecosystems: Animals, Plants, and Their Environment', 'K-SCI-3', 'Use observations to describe patterns of what plants and animals (including humans) need to survive'),
  ('K', 'Interdependent Relationships in Ecosystems: Animals, Plants, and Their Environment', 'K-SCI-4', 'Construct an argument supported by evidence for how plants and animals (including humans) can change the environment to meet their needs'),
  ('K', 'Interdependent Relationships in Ecosystems: Animals, Plants, and Their Environment', 'K-SCI-5', 'Use a model to represent the relationship between the needs of different plants or animals (including humans) and the places they live'),
  ('K', 'Interdependent Relationships in Ecosystems: Animals, Plants, and Their Environment', 'K-SCI-6', 'Communicate solutions that will reduce the impact of humans on the land, water, air, and/or other living things in the local environment'),
  ('K', 'Weather and Climate', 'K-SCI-7', 'Make observations to determine the effect of sunlight on Earth\'s surface'),
  ('K', 'Weather and Climate', 'K-SCI-8', 'Use tools and materials to design and build a structure that will reduce the warming effect of sunlight on an area'),
  ('K', 'Weather and Climate', 'K-SCI-9', 'Use and share observations of local weather conditions to describe patterns over time'),
  ('K', 'Weather and Climate', 'K-SCI-10', 'Ask questions to obtain information about the purpose of weather forecasting to prepare for, and respond to, severe weather');

-- Grade 1 Science Standards
INSERT INTO science_standards (grade_level, strand, code, description)
VALUES
  ('1', 'Waves, Light and Sound', 'G1-SCI-1', 'Plan and conduct investigations to provide evidence that vibrating materials can make sound and that sound can make materials vibrate'),
  ('1', 'Waves, Light and Sound', 'G1-SCI-2', 'Make observations to construct an evidence-based account, that objects can be seen only when illuminated'),
  ('1', 'Waves, Light and Sound', 'G1-SCI-3', 'Plan and conduct an investigation to determine the effect of placing objects made with different materials in the path of a beam of light'),
  ('1', 'Waves, Light and Sound', 'G1-SCI-4', 'Use tools and materials to design and build a device that uses light or sound to solve the problem of communicating over a distance'),
  ('1', 'Structure, Function and Information Processing', 'G1-SCI-5', 'Use materials to design a solution to a human problem by mimicking how plants and/or animals use their external parts to help them survive, grow and meet their needs'),
  ('1', 'Structure, Function and Information Processing', 'G1-SCI-6', 'Read texts and use media to determine patterns in behaviour of parent and offspring that help offspring survive'),
  ('1', 'Structure, Function and Information Processing', 'G1-SCI-7', 'Make observations to construct an evidence-based account that young plants and animals are like, but not exactly like their parents'),
  ('1', 'Space Systems: Patterns and Cycles', 'G1-SCI-8', 'Use observations of the sun, moon, and stars to describe patterns that can be predicted'),
  ('1', 'Space Systems: Patterns and Cycles', 'G1-SCI-9', 'Make observations at different times of the year to relate the amount of daylight to the time of year');

-- Grade 2 Science Standards
INSERT INTO science_standards (grade_level, strand, code, description)
VALUES
  ('2', 'Structure and Properties of Matter', 'G2-SCI-1', 'Plan and conduct an investigation to describe and classify different kinds of materials by their observable properties'),
  ('2', 'Structure and Properties of Matter', 'G2-SCI-2', 'Analyze data obtained from testing different materials to determine which materials have the properties that are best suited for an intended purpose'),
  ('2', 'Structure and Properties of Matter', 'G2-SCI-3', 'Make observations to construct an evidence-based account of how an object made of a small set of pieces can be disassembled and made into a new object'),
  ('2', 'Structure and Properties of Matter', 'G2-SCI-4', 'Construct an argument with evidence that some changes caused by heating or cooling can be reversed and some cannot'),
  ('2', 'Interdependent Relationships in Ecosystems', 'G2-SCI-5', 'Plan and conduct an investigation to determine if plants need sunlight and water to grow'),
  ('2', 'Interdependent Relationships in Ecosystems', 'G2-SCI-6', 'Develop a simple model that mimics the function of an animal in dispersing seeds or pollinating plants'),
  ('2', 'Interdependent Relationships in Ecosystems', 'G2-SCI-7', 'Make observations of plants and animals to compare the diversity of life in different habitats'),
  ('2', 'Earth Systems: Processes That Shape The Earth', 'G2-SCI-8', 'Use information from several sources to provide evidence that Earth events can occur quickly or slowly'),
  ('2', 'Earth Systems: Processes That Shape The Earth', 'G2-SCI-9', 'Compare multiple solutions designed to slow or prevent wind or water from changing the shape of the land'),
  ('2', 'Earth Systems: Processes That Shape The Earth', 'G2-SCI-10', 'Develop a model to represent the shapes and kinds of land and bodies of water in an area'),
  ('2', 'Earth Systems: Processes That Shape The Earth', 'G2-SCI-11', 'Obtain information to identify where water is found on Earth and that it can be solid or liquid'),
  ('2', 'Engineering Design', 'G2-SCI-12', 'Ask questions, make observations, and gather information about a situation people want to change to define a simple problem that can be solved through the development of a new or improved object or tool'),
  ('2', 'Engineering Design', 'G2-SCI-13', 'Develop a simple sketch, drawing, or physical model to illustrate how the shape of an object helps it function as needed to solve a given problem'),
  ('2', 'Engineering Design', 'G2-SCI-14', 'Analyze data from tests of at least two objects designed to solve the same problem to compare the strengths and weaknesses of how each performs');

-- Grade 3 Science Standards
INSERT INTO science_standards (grade_level, strand, code, description)
VALUES
  ('3', 'Forces and Interactions', 'G3-SCI-1', 'Plan and conduct an investigation to provide evidence of the effects of balanced and unbalanced forces on the motion of an object'),
  ('3', 'Forces and Interactions', 'G3-SCI-2', 'Make observations and/or measurements of an object\'s motion to provide evidence that a pattern can be used to predict future motion'),
  ('3', 'Forces and Interactions', 'G3-SCI-3', 'Ask questions to determine cause and effect relationships of electric or magnetic interactions between two objects not in contact with each other'),
  ('3', 'Forces and Interactions', 'G3-SCI-4', 'Define a simple design problem that can be solved by applying scientific ideas about magnets'),
  ('3', 'Interdependent Relationships in Ecosystems', 'G3-SCI-5', 'Construct an argument that some animals form groups that help members survive'),
  ('3', 'Interdependent Relationships in Ecosystems', 'G3-SCI-6', 'Construct an argument with evidence that in a particular habitat some organisms can survive well, some survive less well, and some cannot survive at all'),
  ('3', 'Interdependent Relationships in Ecosystems', 'G3-SCI-7', 'Make a claim about the merit of a solution to a problem caused when the environment changes and the types of plants and animals that live there may change'),
  ('3', 'Inheritance and Variation of Traits: Life Cycles and Traits', 'G3-SCI-8', 'Develop models to describe that organisms have unique and diverse life cycles but all have in common birth, growth, reproduction, and death'),
  ('3', 'Inheritance and Variation of Traits: Life Cycles and Traits', 'G3-SCI-9', 'Analyze and interpret data to provide evidence that plants and animals have traits inherited from parents and that variation of these traits exists in a group of similar organisms'),
  ('3', 'Inheritance and Variation of Traits: Life Cycles and Traits', 'G3-SCI-10', 'Use evidence to support the explanation that traits can be influenced by the environment'),
  ('3', 'Inheritance and Variation of Traits: Life Cycles and Traits', 'G3-SCI-11', 'Use evidence to construct an explanation for how the variations in characteristics among individuals of the same species may provide advantages in surviving, finding mates, and reproducing'),
  ('3', 'Weather and Climate', 'G3-SCI-12', 'Represent data in tables and graphical displays to describe typical weather conditions expected during a particular season'),
  ('3', 'Weather and Climate', 'G3-SCI-13', 'Obtain and combine information to describe climates in different regions of the world'),
  ('3', 'Weather and Climate', 'G3-SCI-14', 'Make a claim about the merit of a design solution that reduces the impacts of a weather-related hazard'),
  ('3', 'Weather and Climate', 'G3-SCI-15', 'Define a simple design problem reflecting a need or a want that includes specified criteria for success and constraints on materials, time, or cost');
