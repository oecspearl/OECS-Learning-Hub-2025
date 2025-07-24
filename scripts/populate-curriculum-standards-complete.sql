-- Complete curriculum standards population script
-- This script creates and populates the curriculum_standards table with all standards

-- Clear existing data (if any)
DELETE FROM curriculum_standards;

-- Insert Kindergarten Language Arts Standards
INSERT INTO curriculum_standards (subject, grade_level, strand, code, description) VALUES
('language-arts', 'K', 'Listening and Speaking', 'K-LA-LS-1.1', 'Listen to music, conversation, and environmental sounds for personal enjoyment'),
('language-arts', 'K', 'Listening and Speaking', 'K-LA-LS-1.2', 'Demonstrate interest, curiosity, engagement in sharing the experiences of others and with oral stories and information sharing'),
('language-arts', 'K', 'Listening and Speaking', 'K-LA-LS-1.3', 'Use social listening and speaking skills to interact with a variety of audiences with sensitivity and respect'),
('language-arts', 'K', 'Reading and Viewing', 'K-LA-RV-2.1', 'Interact meaningfully with a wide range of genres and text forms'),
('language-arts', 'K', 'Reading and Viewing', 'K-LA-RV-2.2', 'Develop questions when browsing through passages of interest'),
('language-arts', 'K', 'Writing and Representing', 'K-LA-WR-3.1', 'Use shared ideas to co-construct stories'),
('language-arts', 'K', 'Writing and Representing', 'K-LA-WR-3.2', 'Assign meaning to experimental drawing and writing');

-- Insert Grade 1 Language Arts Standards
INSERT INTO curriculum_standards (subject, grade_level, strand, code, description) VALUES
('language-arts', '1', 'Listening and Speaking', 'G1-LA-LS-1.1', 'Choose to listen to music, poetry and stories for pleasure'),
('language-arts', '1', 'Listening and Speaking', 'G1-LA-LS-1.2', 'Connect environmental sounds to meaning'),
('language-arts', '1', 'Listening and Speaking', 'G1-LA-LS-1.3', 'Use different voices in role playing to indicate tone and mood'),
('language-arts', '1', 'Reading and Viewing', 'G1-LA-RV-2.1', 'Reflect on and connect personal interests and background knowledge before, during and after reading'),
('language-arts', '1', 'Reading and Viewing', 'G1-LA-RV-2.2', 'Apply Concepts About Print to navigate Emergent/Early level text'),
('language-arts', '1', 'Writing and Representing', 'G1-LA-WR-3.1', 'Share and discuss texts with peers'),
('language-arts', '1', 'Writing and Representing', 'G1-LA-WR-3.2', 'Use illustrations, graphics etc. to ask and answer questions, draw conclusions, and make inferences');

-- Insert Grade 2 Language Arts Standards
INSERT INTO curriculum_standards (subject, grade_level, strand, code, description) VALUES
('language-arts', '2', 'Listening and Speaking', 'G2-LA-LS-1.1', 'Engage with various genres of music, oral poetry, and oral stories for pleasure'),
('language-arts', '2', 'Listening and Speaking', 'G2-LA-LS-1.2', 'Offer thoughts and opinions on the meaning and mood of music, stories, and poetry'),
('language-arts', '2', 'Reading and Viewing', 'G2-LA-RV-2.1', 'Continue to make engaging and just right book choices for Independent Reading'),
('language-arts', '2', 'Reading and Viewing', 'G2-LA-RV-2.2', 'Reflect on various sources of background knowledge to predict and make connections'),
('language-arts', '2', 'Writing and Representing', 'G2-LA-WR-3.1', 'Recognise the purpose and basic similarities and differences in paper based and digital genres');

-- Insert Grade 3 Language Arts Standards
INSERT INTO curriculum_standards (subject, grade_level, strand, code, description) VALUES
('language-arts', '3', 'Listening and Speaking', 'G3-LA-LS-1.1', 'Engage with and share various genres of music, oral poetry, artwork, and oral stories'),
('language-arts', '3', 'Listening and Speaking', 'G3-LA-LS-1.2', 'Experience and enjoy playful use of language, to communicate'),
('language-arts', '3', 'Reading and Viewing', 'G3-LA-RV-2.1', 'Continue to choose and engage with a range of literary, visual, graphic, and informational texts'),
('language-arts', '3', 'Reading and Viewing', 'G3-LA-RV-2.2', 'Apply knowledge of the of fiction, poetry, and nonfiction genres to guide understanding'),
('language-arts', '3', 'Writing and Representing', 'G3-LA-WR-3.1', 'Observe that the processes of weathering and erosion take a long time');

-- Insert Grade 4 Language Arts Standards
INSERT INTO curriculum_standards (subject, grade_level, strand, code, description) VALUES
('language-arts', '4', 'Listening and Speaking', 'G4-LA-LS-1.1', 'Demonstrate enthusiasm for participating in class discussions, storytelling, oral poetry, and singing'),
('language-arts', '4', 'Listening and Speaking', 'G4-LA-LS-1.2', 'Continue to explore a variety of genres and styles in spoken language'),
('language-arts', '4', 'Reading and Viewing', 'G4-LA-RV-2.1', 'Continue to choose and engage with a range of literary, visual, graphic, and informational texts'),
('language-arts', '4', 'Writing and Representing', 'G4-LA-WR-3.1', 'Demonstrate enthusiasm for participating in class discussions');

-- Insert Grade 5 Language Arts Standards
INSERT INTO curriculum_standards (subject, grade_level, strand, code, description) VALUES
('language-arts', '5', 'Listening and Speaking', 'G5-LA-LS-1.1', 'Clarify opinions by responding to the questions and ideas/opinions of others'),
('language-arts', '5', 'Listening and Speaking', 'G5-LA-LS-1.2', 'Continue to use intonation, tone, and expression to communicate ideas and feelings'),
('language-arts', '5', 'Reading and Viewing', 'G5-LA-RV-2.1', 'Continue to choose and engage with a range of literary, visual, graphic, and informational texts'),
('language-arts', '5', 'Writing and Representing', 'G5-LA-WR-3.1', 'Clarify opinions by responding to the questions and ideas/opinions of others');

-- Insert Kindergarten Mathematics Standards
INSERT INTO curriculum_standards (subject, grade_level, strand, code, description) VALUES
('mathematics', 'K', 'Number Sense', 'K-MA-NS-1.1', 'Whole Number - Saying Number Sequence, Meaningful Counting and Skip Counting'),
('mathematics', 'K', 'Number Sense', 'K-MA-NS-1.2', 'Whole Number – Representing and Partitioning Quantities'),
('mathematics', 'K', 'Operations with Numbers', 'K-MA-ON-1.1', 'Additive Thinking - Understanding the meaning of addition and subtraction'),
('mathematics', 'K', 'Patterns and Relationship', 'K-MA-PR-1.1', 'Recognizing, Describing and Extending Patterns'),
('mathematics', 'K', 'Geometrical Thinking', 'K-MA-GT-1.1', 'Analysing and describing 3D shapes');

-- Insert Grade 1 Mathematics Standards
INSERT INTO curriculum_standards (subject, grade_level, strand, code, description) VALUES
('mathematics', '1', 'Number Sense', 'G1-MA-NS-1.1', 'Using Whole Numbers: Learners will meaningfully sequence and use a range of counting and grouping strategies'),
('mathematics', '1', 'Number Sense', 'G1-MA-NS-1.2', 'Whole Number – Representing and Partitioning Quantities'),
('mathematics', '1', 'Operations with Numbers', 'G1-MA-ON-1.1', 'Additive Thinking – Understanding the Meaning of Addition and Subtraction'),
('mathematics', '1', 'Patterns and Relationships', 'G1-MA-PR-1.1', 'Recognizing, Describing and Extending Patterns'),
('mathematics', '1', 'Geometrical Thinking', 'G1-MA-GT-1.1', 'Explore and Analyze Geometric Shapes and Relationships');

-- Insert Grade 2 Mathematics Standards
INSERT INTO curriculum_standards (subject, grade_level, strand, code, description) VALUES
('mathematics', '2', 'Number Sense', 'G2-MA-NS-1.1', 'Whole Number - Saying Number Sequence, Meaningful Counting, and Skip Counting'),
('mathematics', '2', 'Number Sense', 'G2-MA-NS-1.2', 'Whole Number - Representing and Partitioning Quantities'),
('mathematics', '2', 'Operations with Numbers', 'G2-MA-ON-1.1', 'Additive Thinking - Understanding the meaning of addition and subtraction'),
('mathematics', '2', 'Patterns and Relationships', 'G2-MA-PR-1.1', 'Recognizing, describing and extending patterns – Repeating Patterns'),
('mathematics', '2', 'Geometrical Thinking', 'G2-MA-GT-1.1', 'Explore and Analyze Geometric Shapes and Relationships');

-- Insert Grade 3 Mathematics Standards
INSERT INTO curriculum_standards (subject, grade_level, strand, code, description) VALUES
('mathematics', '3', 'Number Sense', 'G3-MA-NS-1.1', 'Whole Number – Saying Number Sequence, Meaningful Counting and Skip Counting'),
('mathematics', '3', 'Number Sense', 'G3-MA-NS-1.2', 'Whole Number – Representing and Partitioning Quantities'),
('mathematics', '3', 'Operations with Numbers', 'G3-MA-ON-1.1', 'Additive Thinking – Understanding the Meaning of Addition and Subtraction'),
('mathematics', '3', 'Patterns and Relationships', 'G3-MA-PR-1.1', 'Recognizing, describing and extending patterns – Repeating Patterns'),
('mathematics', '3', 'Geometrical Thinking', 'G3-MA-GT-1.1', 'Explore and Analyze Geometric shapes and Relationships');

-- Insert Grade 4 Mathematics Standards
INSERT INTO curriculum_standards (subject, grade_level, strand, code, description) VALUES
('mathematics', '4', 'Number Sense', 'G4-MA-NS-1.1', 'Whole Number – Saying Number Sequence, Meaningful Counting and Skip Counting'),
('mathematics', '4', 'Number Sense', 'G4-MA-NS-1.2', 'Whole Number – Representing and Partitioning Quantities'),
('mathematics', '4', 'Operations with Numbers', 'G4-MA-ON-1.1', 'Additive Thinking – Understanding the Meaning of Addition and Subtraction'),
('mathematics', '4', 'Patterns and Relationships', 'G4-MA-PR-1.1', 'Recognizing, describing and extending patterns – Repeating Patterns'),
('mathematics', '4', 'Geometrical Thinking', 'G4-MA-GT-1.1', 'Explore and Analyse Geometric Shapes and Relationships');

-- Insert Grade 5 Mathematics Standards
INSERT INTO curriculum_standards (subject, grade_level, strand, code, description) VALUES
('mathematics', '5', 'Number Sense', 'G5-MA-NS-1.1', 'Whole Number – Saying Number Sequence, Meaningful Counting, and Skip Counting'),
('mathematics', '5', 'Number Sense', 'G5-MA-NS-1.2', 'Whole Number – Representing and Partitioning Quantities'),
('mathematics', '5', 'Operations with Numbers', 'G5-MA-ON-1.1', 'Additive Thinking – Understanding the Meaning of Addition and Subtraction'),
('mathematics', '5', 'Engineering', 'G5-ETS-E-1', 'Plan and carry out fair tests in which variables are controlled');

-- Insert Grade 6 Mathematics Standards
INSERT INTO curriculum_standards (subject, grade_level, strand, code, description) VALUES
('mathematics', '6', 'Number Sense', 'G6-MA-NS-1.1', 'Whole Number – Saying Number Sequence, Meaningful Counting and Skip Counting'),
('mathematics', '6', 'Number Sense', 'G6-MA-NS-1.2', 'Whole Number – Representing and Partitioning Quantities'),
('mathematics', '6', 'Operations with Numbers', 'G6-MA-ON-1.1', 'Additive Thinking – Understanding the Meaning of Addition and Subtraction'),
('mathematics', '6', 'Geometrical Thinking', 'G6-MA-GT-1.1', 'Explore and Analyse Geometric Shapes and Relationships');

-- Insert Kindergarten Science Standards
INSERT INTO curriculum_standards (subject, grade_level, strand, code, description) VALUES
('science', 'K', 'Forces and Interactions: Pushes and Pulls', 'K-SCI-1', 'Plan and conduct an investigation to compare the effects of different strengths or different directions of pushes and pulls'),
('science', 'K', 'Interdependent Relationships in Ecosystems: Animals, Plants, and Their Environment', 'K-SCI-3', 'Use observations to describe patterns of what plants and animals need to survive'),
('science', 'K', 'Weather and Climate', 'K-SCI-7', 'Make observations to determine the effect of sunlight on Earth\'s surface'),
('science', 'K', 'Weather and Climate', 'K-SCI-9', 'Use and share observations of local weather conditions to describe patterns over time');

-- Insert Grade 1 Science Standards
INSERT INTO curriculum_standards (subject, grade_level, strand, code, description) VALUES
('science', '1', 'Waves, Light and Sound', 'G1-SCI-1', 'Plan and conduct investigations to provide evidence that vibrating materials can make sound'),
('science', '1', 'Structure, Function and Information Processing', 'G1-SCI-5', 'Use materials to design a solution to a human problem by mimicking how plants and/or animals use their external parts'),
('science', '1', 'Space Systems: Patterns and Cycles', 'G1-SCI-8', 'Use observations of the sun, moon, and stars to describe patterns that can be predicted');

-- Insert Grade 2 Science Standards
INSERT INTO curriculum_standards (subject, grade_level, strand, code, description) VALUES
('science', '2', 'Structure and Properties of Matter', 'G2-SCI-1', 'Plan and conduct an investigation to describe and classify different kinds of materials'),
('science', '2', 'Interdependent Relationships in Ecosystems', 'G2-SCI-5', 'Plan and conduct an investigation to determine if plants need sunlight and water to grow'),
('science', '2', 'Earth Systems: Processes That Shape The Earth', 'G2-SCI-8', 'Use information from several sources to provide evidence that Earth events can occur quickly or slowly');

-- Insert Grade 3 Science Standards
INSERT INTO curriculum_standards (subject, grade_level, strand, code, description) VALUES
('science', '3', 'Forces and Interactions', 'G3-SCI-1', 'Plan and conduct an investigation to provide evidence of the effects of balanced and unbalanced forces'),
('science', '3', 'Interdependent Relationships in Ecosystems', 'G3-SCI-5', 'Construct an argument that some animals form groups that help members survive'),
('science', '3', 'Weather and Climate', 'G3-SCI-12', 'Represent data in tables and graphical displays to describe typical weather conditions');

-- Insert Grade 4 Science Standards
INSERT INTO curriculum_standards (subject, grade_level, strand, code, description) VALUES
('science', '4', 'Energy', 'G4-PS-E-1', 'Use evidence to construct an explanation relating the speed of an object to the energy of that object'),
('science', '4', 'Waves', 'G4-PS-W-1', 'Develop a model of waves to describe patterns in terms of amplitude and wavelength'),
('science', '4', 'Structure and Function', 'G4-LS-SF-1', 'Develop a model to describe that light reflecting from objects and entering the eye allows objects to be seen'),
('science', '4', 'Earth Systems: Processes that Shape the Earth', 'G4-ESS-PSTE-1', 'Identify evidence from patterns in rock formations and fossils in rock layers');

-- Insert Grade 5 Science Standards
INSERT INTO curriculum_standards (subject, grade_level, strand, code, description) VALUES
('science', '5', 'Structure and Properties of Matter', 'G5-PS-SPM-1', 'Develop a model to describe that matter is made of particles too small to be seen'),
('science', '5', 'Matter and Energy in Organisms and Ecosystems', 'G5-LS-MEOE-1', 'Use models to describe that energy in animals\' food was once energy from the sun'),
('science', '5', 'Earth Systems', 'G5-ESS-ES-1', 'Develop a model using an example to describe ways the geosphere, biosphere, hydrosphere, and/or atmosphere interact'),
('science', '5', 'Space Systems: Stars and the Solar System', 'G5-ESS-SSSS-1', 'Support an argument that the gravitational force exerted by Earth on objects is directed down');

-- Insert Grade 6 Science Standards
INSERT INTO curriculum_standards (subject, grade_level, strand, code, description) VALUES
('science', '6', 'Structure and Properties of Matter', 'G6-PS-SPM-1', 'Develop models to describe the atomic composition of simple molecules and extended structures'),
('science', '6', 'Chemical Reactions', 'G6-PS-CR-1', 'Analyse and interpret data on the properties of substances before and after the substances interact'),
('science', '6', 'Inheritance, Variation of Traits and Life Cycles', 'G6-LS-IVTLC-1', 'Develop models to describe that organisms have unique and diverse life cycles'),
('science', '6', 'Forces and Interactions', 'G6-PS-FI-1', 'Apply Newton\'s Third Law to design a solution to a problem involving the motion of two colliding objects');

-- Insert Kindergarten Social Studies Standards
INSERT INTO curriculum_standards (subject, grade_level, strand, code, description) VALUES
('social-studies', 'K', 'historical-cultural-thinking', 'K-HCT-K1', 'Demonstrate an understanding of "me" as a unique child'),
('social-studies', 'K', 'historical-cultural-thinking', 'K-HCT-K2', 'Name family members'),
('social-studies', 'K', 'civic-participation', 'K-CP-K1', 'Describe how family members care for one another'),
('social-studies', 'K', 'spatial-thinking', 'K-ST-K1', 'State the name and address of their home and school'),
('social-studies', 'K', 'economic-decision-making', 'K-EDM-K1', 'Identify basic needs of people');

-- Insert Grade 1 Social Studies Standards
INSERT INTO curriculum_standards (subject, grade_level, strand, code, description) VALUES
('social-studies', '1', 'historical-cultural-thinking', '1-HCT-K1', 'State different forms of celebrations that are practiced in families to build pride and identity'),
('social-studies', '1', 'historical-cultural-thinking', '1-HCT-K2', 'Identify aspects of culture such as food, music, dance that are relevant to celebrations in families'),
('social-studies', '1', 'historical-cultural-thinking', '1-HCT-K3', 'List religious and national festivals celebrated by the family'),
('social-studies', '1', 'historical-cultural-thinking', '1-HCT-K4', 'Identify the national symbols of their country');

-- Insert Grade 2 Social Studies Standards
INSERT INTO curriculum_standards (subject, grade_level, strand, code, description) VALUES
('social-studies', '2', 'historical-cultural-thinking', 'HCT-K1', 'Identify the early groups of people who settled in our community and explain why and how they came'),
('social-studies', '2', 'spatial-thinking', 'ST-K1', 'State and label the four cardinal directions'),
('social-studies', '2', 'civic-participation', 'CP-K1', 'Identify features that make a community unsafe and healthy'),
('social-studies', '2', 'economic-decision-making', 'EDM-K1', 'Identify people in the community that are resource persons');

-- Insert Grade 3 Social Studies Standards
INSERT INTO curriculum_standards (subject, grade_level, strand, code, description) VALUES
('social-studies', '3', 'historical-cultural-thinking', '3-HCT-K1', 'Identify the earliest inhabitants of our island'),
('social-studies', '3', 'historical-cultural-thinking', '3-HCT-K2', 'State the origins of the various peoples of our island/territory and discuss the reasons why they came'),
('social-studies', '3', 'historical-cultural-thinking', '3-HCT-K3', 'Discuss key features and aspects of our island\'s culture and heritage that shaped our identity'),
('social-studies', '3', 'historical-cultural-thinking', '3-HCT-K4', 'State the origins of our local island dialect(s)');

-- Insert Grade 5 Social Studies Standards
INSERT INTO curriculum_standards (subject, grade_level, strand, code, description) VALUES
('social-studies', '5', 'economic-decision-making', '5-EDM-K1', 'Identify the major Caribbean companies that trade and offer services to and with your country'),
('social-studies', '5', 'economic-decision-making', '5-EDM-K2', 'Identify the major connections that exist with other Caribbean countries within your family'),
('social-studies', '5', 'economic-decision-making', '5-EDM-K3', 'Analyse the cause and effects of the changing nature of Caribbean agriculture since 1900');

-- Verify the data was inserted correctly
SELECT 
  subject,
  grade_level,
  COUNT(*) as standards_count
FROM curriculum_standards
GROUP BY subject, grade_level
ORDER BY subject, grade_level;

-- Show total count
SELECT COUNT(*) as total_standards FROM curriculum_standards; 