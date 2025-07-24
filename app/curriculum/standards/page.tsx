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
  // Kindergarten Mathematics
  { subject: "mathematics", grade_level: "K", strand: "Number Sense", code: "N1.1", description: "Say the number that comes before a given number. Use a number line to support counting. Recite number names from a given number to a given number. Count with meaning to 10, by building quantities. Count with meaning to 10, by matching quantity and numeral." },
  { subject: "mathematics", grade_level: "K", strand: "Number Sense", code: "N1.2", description: "Represent a given number up to 10 using a variety of concrete models, including 5 and 10 frames. Answer the question, How many are in the set? using the last number counted in a set. Count the number of objects in a given set, rearrange the objects, predict the new count, and recount to verify the prediction." },
  { subject: "mathematics", grade_level: "K", strand: "Number Sense", code: "N1.4", description: "Look briefly at a given familiar arrangement of one to five objects or dots and identify the number represented without counting. Compare the number of objects in two sets of up to 10 objects, using phrases such as 'same number as', 'equal to', more than', and 'less than'. Make a set that has the same number of objects as a given set." },
  { subject: "mathematics", grade_level: "K", strand: "Operations with Numbers", code: "O1.1", description: "Compose and decompose numbers up to 9 in a variety of ways using manipulatives, fingers and pictures." },
  { subject: "mathematics", grade_level: "K", strand: "Patterns and Relationships", code: "P1.1", description: "Create simple repeating patterns (2 elements). Extend simple repeating patterns (2 elements). Copy a given repeating pattern. Extend a variety of given repeating patterns to two more repetitions. Create a repeating pattern using manipulatives, musical instruments, or action." },
  { subject: "mathematics", grade_level: "K", strand: "Geometrical Thinking", code: "G1.1", description: "Build and describe 3-D objects. Create a representation of a given 3-D object using building blocks, and compare the representation to the original 3-D object. Describe a given 3-D object using words such as big, little, round, like a box or a can." },
  { subject: "mathematics", grade_level: "K", strand: "Geometrical Thinking", code: "G1.2", description: "Identify and describe shapes (2-D = squares, circles, triangles, 3-D = cubes, cones, and spheres). Describe objects in the environment using names of shapes and describe the relative positions of these objects. Correctly name shapes regardless of their orientations or overall size." },
  { subject: "mathematics", grade_level: "K", strand: "Measurement", code: "M1.1", description: "Classify objects according to selected attributes. Classify objects and count the number of objects in each category. Describe several measurable attributes of a single object. Directly compare two objects with a measurable attribute in common." },
  { subject: "mathematics", grade_level: "K", strand: "Measurement", code: "M1.2", description: "Use non-standard units to measure attributes. Identify days, weeks, months, holidays, and seasons. Recite days of the week and months of the year in order. Name the different monies (coins and notes) used in the Eastern Caribbean." },
  { subject: "mathematics", grade_level: "K", strand: "Data Handling and Probability", code: "D1.1", description: "Collect simple sets of data in the class and school environment using observation. Describe data classification. Use counting to determine the number of objects in a group. Describe the results of classification and data collection activities." },

  // Grade 1 Mathematics
  { subject: "mathematics", grade_level: "1", strand: "Number Sense", code: "N1.1", description: "Count with meaning to 20 by building quantities and matching quantity with numeral. Orally sequence numbers to 100 by 1s, 2s, 5s and 10s. Count backwards from 20 by 1s, 2s, 5s and 10s. Use Number lines and number charts to support counting and skip counting." },
  { subject: "mathematics", grade_level: "1", strand: "Number Sense", code: "N1.2", description: "Represent a given number up to 20 using a variety of concrete models, including ten-frames and created materials. Model a given number up to 20 using a variety of pictorial representation. Partition any given quantity up to 20 into two parts." },
  { subject: "mathematics", grade_level: "1", strand: "Number Sense", code: "N1.3", description: "Build sets and set models to show how numbers compare. Explain which set has more and which set has fewer. Build a set that has fewer or more than a given set up to 20. Use ordinal language (first, second, third)." },
  { subject: "mathematics", grade_level: "1", strand: "Number Sense", code: "N1.4", description: "Count teen numbers using familiar numbers. Model teen numbers up to 20 in a variety of ways using sets of tens and ones. Recognize that in a teen number, the 1 represents one group of ten. Compose and decompose numbers from 11 to 19 into tens and ones." },
  { subject: "mathematics", grade_level: "1", strand: "Operations with Numbers", code: "O1.1", description: "Combine quantities using concrete materials to get the total or find a missing value up to 20. Partition and recombine quantities to relate to addition and subtraction. Add and subtract within 20, using a variety of strategies." },
  { subject: "mathematics", grade_level: "1", strand: "Operations with Numbers", code: "O1.2", description: "Use symbols for addition (+) and subtraction (-) as a way to record calculations. Make reasonable estimation when combining, separating, comparing & partitioning quantities to 20." },
  { subject: "mathematics", grade_level: "1", strand: "Operations with Numbers", code: "O2.1", description: "Model and describe equal collections of objects as ___ groups of ___. Form equal groups of objects and use repeated addition to represent the group. Skip count to find the total number of objects in groups." },
  { subject: "mathematics", grade_level: "1", strand: "Patterns and Relationships", code: "P1.1", description: "Describe, copy and extend a repeating pattern with 2 to 4 elements. Translate a repeating pattern from one representation to another. Spot and correct errors in a repeating pattern." },
  { subject: "mathematics", grade_level: "1", strand: "Patterns and Relationships", code: "P1.2", description: "Interpret, describe and extend a given increasing and decreasing pattern that grows by 1 or 2 each time. Use a variety of tools and models to create patterns. Identify missing elements and errors in patterns." },
  { subject: "mathematics", grade_level: "1", strand: "Patterns and Relationships", code: "P2.1", description: "Identify and describe missing quantities in numbers up to 20 by using a variety of concrete materials. Represent missing quantities in numbers up to 20 by writing number sentences." },
  { subject: "mathematics", grade_level: "1", strand: "Patterns and Relationships", code: "P2.2", description: "Use different number combinations and linear models to create equivalent number values and lengths up to 20. Identify and use equivalent relationships of equal length, number, and number sentences." },
  { subject: "mathematics", grade_level: "1", strand: "Patterns and Relationships", code: "P2.3", description: "Determine whether given pairs of expressions are equivalent using concrete objects. Interpret the meaning of the equal sign correctly and determine if equations are true or false. Determine the unknown whole number in an equation." },
  { subject: "mathematics", grade_level: "1", strand: "Geometrical Thinking", code: "G1.1", description: "Use language that describes 3D objects and polygons, orally and in writing. Recognize and name 3D shapes and 2D shapes. Identify 2D and 3D shapes in real world context." },
  { subject: "mathematics", grade_level: "1", strand: "Geometrical Thinking", code: "G1.2", description: "Recognize and name the basic 2D shapes and 3D objects. Represent and construct the basic 2D shapes and 3D objects using appropriate materials. Justify the properties of the basic shapes and objects." },
  { subject: "mathematics", grade_level: "1", strand: "Geometrical Thinking", code: "G2.1", description: "Identify and name 2D shapes and 3D objects. Describe the attributes of 2D shapes and 3D objects. Compare and contrast the attributes of different 3D objects. Create and extend patterns using 2D shapes." },
  { subject: "mathematics", grade_level: "1", strand: "Geometrical Thinking", code: "G2.2", description: "Identify and name 2D shapes and 3D objects. Apply knowledge of 2D and 3D shapes in practical contexts. Sort 2D shapes and 3D objects based on their attributes. Create 2D shapes and 3D objects using various materials." },
  { subject: "mathematics", grade_level: "1", strand: "Geometrical Thinking", code: "G2.3", description: "Identify the basic shapes. Create and explore with different materials to form different shapes. Find shapes in the environment. Sort shapes based on their attributes. Identify and create patterns using geometric shapes." },
  { subject: "mathematics", grade_level: "1", strand: "Geometrical Thinking", code: "G3.1", description: "Construct composite objects using different shapes. Identify the different shapes used in the composite objects created. State the characteristics of the shapes. Compare and contrast different composite objects." },
  { subject: "mathematics", grade_level: "1", strand: "Geometrical Thinking", code: "G3.2", description: "Identify and name 2D shapes that can be found in 3D objects. Create and name 2D shapes by using physical objects to create footprints or shadows. Describe the resulting cross-section of slicing 3D objects." },
  { subject: "mathematics", grade_level: "1", strand: "Geometrical Thinking", code: "G3.3", description: "Identify and name common 3D shapes. Use basic spatial concepts correctly. Use concrete materials to create 3D shapes and objects. Transform 3D objects by molding, shaping, stretching, and flattening materials." },
  { subject: "mathematics", grade_level: "1", strand: "Measurement", code: "M1.1", description: "Explore physical materials and describe them using vocabulary associated with linear measure. Classify the measuring attribute of length, capacity, mass, and area based on vocabulary. Categorise measuring attributes." },
  { subject: "mathematics", grade_level: "1", strand: "Measurement", code: "M1.2", description: "Compare the length, mass, capacity, and area of two objects using direct comparison and explain reasoning using appropriate vocabulary." },
  { subject: "mathematics", grade_level: "1", strand: "Measurement", code: "M1.3", description: "Measure length, mass and capacity using non-standard units. Select appropriate non-standard units to measure different attributes. Use parts of their body and objects to conduct non-standard measurement." },
  { subject: "mathematics", grade_level: "1", strand: "Measurement", code: "M1.4", description: "State the days of the week, months of the year, and holidays. Read the date on the calendar. Represent and recognize time on the hour and half past the hour. Identify coins and relate their value." },
  { subject: "mathematics", grade_level: "1", strand: "Data Handling and Probability", code: "D1.1", description: "Construct simple questions based on observation. State the information that can be collected by using a given question. Formulate questions that can be addressed with data collected." },
  { subject: "mathematics", grade_level: "1", strand: "Data Handling and Probability", code: "D1.2", description: "Sort objects according to one attribute. Represent information collected from observations in multiple ways. Use a variety of methods to collect and sort data." },
  { subject: "mathematics", grade_level: "1", strand: "Data Handling and Probability", code: "D1.3", description: "Explain how and why a given data set can be arranged in different orders. State the highest and least value in each data set. Use a variety of strategies to identify the count of each member of given data set." },
  { subject: "mathematics", grade_level: "1", strand: "Data Handling and Probability", code: "D1.4", description: "Identify that data can be represented in tally charts, tables, concrete graphs, and pictographs. Read and interpret data represented in tables, pictographs and bar charts. Generate and answer questions based on data." },
  { subject: "mathematics", grade_level: "1", strand: "Data Handling and Probability", code: "D1.5", description: "Use correctly words associated with probability such as 'impossible', 'will happen', 'will never happen', 'possible', and 'certain' to describe the likelihood of events occurring. Predict possible outcomes of events given." },

  // Grade 2 Mathematics
  { subject: "mathematics", grade_level: "2", strand: "Number Sense", code: "N1.1", description: "Count by 1s, 2s, 5s and 10s, forward and backward, to 100. Say number sequence by 1s, 2s, 5s and 10s, forward and backward, starting from any point, to 100. Read, write and represent whole numbers from 1-100." },
  { subject: "mathematics", grade_level: "2", strand: "Number Sense", code: "N1.2", description: "Distinguish between odd and even numbers for groups with up to 20 objects. Identify equations that express an even number as a sum of two equal addends." },
  { subject: "mathematics", grade_level: "2", strand: "Number Sense", code: "N1.3", description: "Compare and order numbers up to 100 in ascending or descending order. Indicate and describe the position of specific numbers in a sequence using ordinal numbers up to tenth. Identify 2-digit numbers." },
  { subject: "mathematics", grade_level: "2", strand: "Number Sense", code: "N1.4", description: "Identify and contrast among the face value, place value, and total value of the digits in any two-digit number. Represent numbers concretely, pictorially and symbolically up to ninety-nine as groups of tens and ones." },
  { subject: "mathematics", grade_level: "2", strand: "Number Sense", code: "N2.1", description: "Recognize fractions as representation of parts of a whole. Identify unit fractions correctly. Distinguish between the numerator and the denominator. Partition given shapes into parts with equal sections." },
  { subject: "mathematics", grade_level: "2", strand: "Number Sense", code: "N2.2", description: "Read and correctly write the fractions ½ and ¼ as 'one half' and 'one quarter'. Compare two fractions with the same denominator (limited to halves and quarters), referring to the same whole." },
  { subject: "mathematics", grade_level: "2", strand: "Operations with Numbers", code: "O1.1", description: "Add up to three two-digit numbers within 100 using a variety of strategies without and with regrouping. Subtract two-digit numbers from two-digit numbers using strategies without and with regrouping. Mentally demonstrate ability to add 10's or 100's up to 900 from a given number." },
  { subject: "mathematics", grade_level: "2", strand: "Operations with Numbers", code: "O1.2", description: "Use addition to find the total number of objects arranged in rectangular arrays with up to 5 rows and up to 5 columns. Write an equation to express total as a sum of equal addends." },
  { subject: "mathematics", grade_level: "2", strand: "Operations with Numbers", code: "O2.1", description: "Interpret repeated addition procedures, using terms such as 'sets of', 'times', 'groups of'. Use mathematical language such as '4 threes' and '2 groups of 5' to describe equal groups. Write a number sentence for a given situation involving multiplication or division." },
  { subject: "mathematics", grade_level: "2", strand: "Patterns and Relationships", code: "P1.1", description: "Describe a given pattern. Identify whether given terms form a pattern or not. Create and extend simple patterns with 3-5 elements. Copy and extend a repeating pattern using manipulatives, diagrams, body movements." },
  { subject: "mathematics", grade_level: "2", strand: "Patterns and Relationships", code: "P1.2", description: "Determine the rule used to extend a growing and a shrinking pattern. Identify, describe, and create growing and shrinking patterns involving addition and subtraction. Solve simple patterns involving increasing and decreasing patterns." },
  { subject: "mathematics", grade_level: "2", strand: "Patterns and Relationships", code: "P2.1", description: "Identify and interpret simple number sentences using words, diagrams and symbols. Communicate and interpret simple additive and subtractive strategies. Represent algebraic expressions using variables and symbols." },
  { subject: "mathematics", grade_level: "2", strand: "Patterns and Relationships", code: "P2.2", description: "Represent numbers up to 100 in a variety of ways. Apply the commutative property when adding numbers. Create equivalent sum of money using different coins." },
  { subject: "mathematics", grade_level: "2", strand: "Patterns and Relationships", code: "P2.3", description: "Demonstrate and explain equality using manipulatives and diagrams (0-100). Record equalities and inequalities symbolically using the correct symbol. Solve for missing quantities to make the equation equivalent." },
  { subject: "mathematics", grade_level: "2", strand: "Geometrical Thinking", code: "G1.1", description: "Describe orally and written, 2-D and 3-D shapes and/or objects and space. Identify 2-D and 3-D shapes in the environment. Explain the differences and similarities between and among 2-D shapes." },
  { subject: "mathematics", grade_level: "2", strand: "Geometrical Thinking", code: "G1.2", description: "Identify 2D shapes on 3D objects. Represent and construct 2D shapes and 3D objects. Sort 2D shapes and 3D objects based on their attributes and characteristics." },
  { subject: "mathematics", grade_level: "2", strand: "Geometrical Thinking", code: "G2.1", description: "Identify properties of 2D shapes. Justify classification of 2D shapes according to attributes. Identify similarities and differences between 2D shapes and 3D objects based on attributes." },
  { subject: "mathematics", grade_level: "2", strand: "Geometrical Thinking", code: "G2.2", description: "Identify 3D shapes in the environment based on the attributes of faces, vertices, and edges. Classify 3D shapes as prisms and pyramids based on its bases and lateral faces." },
  { subject: "mathematics", grade_level: "2", strand: "Geometrical Thinking", code: "G2.3", description: "Compare shapes and objects (2D & 3D) based on attributes using appropriate vocabulary. Describe the relative location/position of 2D shapes and 3D objects in relation to other shapes and objects." },
  { subject: "mathematics", grade_level: "2", strand: "Geometrical Thinking", code: "G3.1", description: "Duplicate composite 2D and 3D shapes that are presented. Design composite 2D representations combining the faces of more than one 2D shape. Create composite 3D structures using 3D objects." },
  { subject: "mathematics", grade_level: "2", strand: "Geometrical Thinking", code: "G3.2", description: "Identify 2D shapes that are part of the composition of 3D objects using footprints, making shadows, or slicing. Deconstruct 3D objects to identify the 2D shapes that constitute their formation." },
  { subject: "mathematics", grade_level: "2", strand: "Geometrical Thinking", code: "G3.3", description: "Transform 2D and 3D shapes by rotating them and flipping them. Differentiate between a flip and a rotation of a shape accurately." },
  { subject: "mathematics", grade_level: "2", strand: "Measurement", code: "M1.1", description: "Explain the concept of linear measurement. Differentiate among measurable attributes related to linear measurements (length, width, height, depth, and distance). Use non-standard units and compare measurements." },
  { subject: "mathematics", grade_level: "2", strand: "Measurement", code: "M1.2", description: "Estimate and measure length, height, and distance, using standard units (centimetre, metre). Use a measuring tool such as a ruler or a tape measure. Recognize and use the abbreviations 'cm' and 'm'." },
  { subject: "mathematics", grade_level: "2", strand: "Measurement", code: "M1.3", description: "Identify the appropriate unit of time to describe a given activity or event. Create a time log of a daily activity using specified units of time. Compare the time to complete activities using non-standard units." },
  { subject: "mathematics", grade_level: "2", strand: "Measurement", code: "M1.4", description: "Use units of time, including seconds, minutes, hours, and non-standard units. Represent and read time on the hour, half past the hour, and quarter past the hour. Tell time from analog and digital clocks." },
  { subject: "mathematics", grade_level: "2", strand: "Measurement", code: "M2.1", description: "Compare measurement of lengths using a standard unit. Solve addition and subtraction problems involving lengths up to 100. Estimate lengths using centimeters and meters." },
  { subject: "mathematics", grade_level: "2", strand: "Measurement", code: "M2.2", description: "Measure attributes like length, weight, and time accurately using appropriate units. Estimate measurements and make comparisons between different objects. Use measurement tools such as rulers, scales, and timers." },
  { subject: "mathematics", grade_level: "2", strand: "Measurement", code: "M2.3", description: "Identify the standard units of grams (g) for mass and milliliters (mL) for volume. Estimate the volume of liquid in containers and mass of objects. Use measuring tools to measure volume and mass accurately." },
  { subject: "mathematics", grade_level: "2", strand: "Data Handling and Probability", code: "D1.1", description: "Identify simple topics of collective interest for investigation. Match investigative topics to relevant questions. Formulate questions that can be answered by gathering information." },
  { subject: "mathematics", grade_level: "2", strand: "Data Handling and Probability", code: "D1.2", description: "List questions of interest for investigation. Gather and record simple sets of data through observation and simple interviews. Record data as a tally or as drawings (pictographs)." },
  { subject: "mathematics", grade_level: "2", strand: "Data Handling and Probability", code: "D2.1", description: "Identify the most frequent count presented in any data sets. Explain what the most frequent count indicates about the data. Collect, group and analyze data." },
  { subject: "mathematics", grade_level: "2", strand: "Data Handling and Probability", code: "D2.2", description: "Ask questions to collect data. Collect simple sets of data through observation and simple interview. Create different types of data presentations, including pictograph, and bar graphs." },
  { subject: "mathematics", grade_level: "2", strand: "Data Handling and Probability", code: "D2.3", description: "Describe the likelihood that events will happen, and use that information to make predictions. Use mathematical language, including the terms 'impossible', 'possible', and 'certain'." },

  // Grade 3 Mathematics
  { subject: "mathematics", grade_level: "3", strand: "Number Sense", code: "N1.1", description: "Identify the digits within a three-digit number. Identify the place value of the digits in a three-digit number. Say number sequence by 1s, 2s, 5s, 10s, and 100s forward, backward, and by any given number up to 1000." },
  { subject: "mathematics", grade_level: "3", strand: "Number Sense", code: "N1.2", description: "Read and write numbers up to 1000 in figures and words. Express a three-digit number in different ways (word form, standard form, place value, concretely, pictorially). Express three-digit numbers up to 1000 in expanded form." },
  { subject: "mathematics", grade_level: "3", strand: "Number Sense", code: "N1.3", description: "Differentiate the terms 'ascending order' and 'descending order'. Compare three-digit numbers up to 999 using >, <, and =. Order numbers up to 1000 in ascending and descending order." },
  { subject: "mathematics", grade_level: "3", strand: "Number Sense", code: "N1.4", description: "Determine the place value of each digit in numbers 100, 200, ..., 900. Identify the place value of any digit in a 3 or 4-digit number. Use concrete materials to represent a bundle of ten tens." },
  { subject: "mathematics", grade_level: "3", strand: "Number Sense", code: "N2.1", description: "Recognize a whole or unit amount can be partitioned into equal parts. Depict concretely, pictorially and symbolically a proper fraction. Represent fractions on a number line." },
  { subject: "mathematics", grade_level: "3", strand: "Number Sense", code: "N2.2", description: "Compare fractions with the same numerators or same denominators by reasoning about their size. Arrange a set of fractions in ascending or descending order. Represent fractions using concrete and pictorial models." },
  { subject: "mathematics", grade_level: "3", strand: "Number Sense", code: "N2.3", description: "Describe decimals as a way to represent parts of the whole. Represent fractions (½, ⅓, ¼, ⅕) as decimals using concrete materials/visual aids." },
  { subject: "mathematics", grade_level: "3", strand: "Operations with Numbers", code: "O1.1", description: "Recall the basic facts for addition and subtraction. Create and solve problems involving whole number addition and subtraction with and without regrouping with results not exceeding 999." },
  { subject: "mathematics", grade_level: "3", strand: "Operations with Numbers", code: "O1.2", description: "Explain relationship between the places (ones, tens, hundreds). Use the commutative property of addition and the associative property to solve problems. Subtract and add three-digit numbers fluently." },
  { subject: "mathematics", grade_level: "3", strand: "Operations with Numbers", code: "O1.3", description: "Round numbers with up to 3 digits to the nearest 10 and 100. Estimate sums and differences quickly and efficiently, using rounding off. Apply estimation strategies to real-world problems." },
  { subject: "mathematics", grade_level: "3", strand: "Operations with Numbers", code: "O2.1", description: "Demonstrate the concept of multiplication as repeated addition. Represent multiplication using equal groups and arrays. Explain division as sharing into equal groups. Interpret products in real-world contexts." },
  { subject: "mathematics", grade_level: "3", strand: "Operations with Numbers", code: "O2.2", description: "Use multiplication and division facts (products within 100) to solve word problems. Describe division as an unknown-factor problem. Multiply one-digit whole numbers by multiples of 10." },
  { subject: "mathematics", grade_level: "3", strand: "Operations with Numbers", code: "O2.3", description: "Solve a variety of word problems involving addition, subtraction, multiplication, and division. Interpret word problems, identify required operations. Represent word problems using equations with a variable." },
  { subject: "mathematics", grade_level: "3", strand: "Patterns and Relationships", code: "P1.1", description: "Identify the relationship between repeated addition and multiplication. Describe the pattern in the product of numbers multiplied by 2-12. Discover patterns in multiplication fact families." },
  { subject: "mathematics", grade_level: "3", strand: "Patterns and Relationships", code: "P1.2", description: "Identify and copy repeating elements in a repeating pattern. Explain the rule used to create a repeating nonnumerical pattern. Identify the rule in an increasing and decreasing pattern." },
  { subject: "mathematics", grade_level: "3", strand: "Patterns and Relationships", code: "P2.1", description: "Identify the inverse function of operations. Use the part-part-whole model to demonstrate the inverse function of operations. Use the part-part-whole model to solve open sentences." },
  { subject: "mathematics", grade_level: "3", strand: "Patterns and Relationships", code: "P2.2", description: "State the definition of equal, unequal, quantity, and compare. Demonstrate how to compare two quantities using symbols such as = for equal and ≠ not equal, > for greater than and < for lesser than." },
  { subject: "mathematics", grade_level: "3", strand: "Patterns and Relationships", code: "P2.3", description: "Identify variables (represented as letters or symbols) within mathematical expressions or equations. Write simple mathematical expressions using variables. Solve basic addition and subtraction equations to find the variable's value." },
  { subject: "mathematics", grade_level: "3", strand: "Patterns and Relationships", code: "P3.1", description: "Identify the relationship/pattern by using different representations (tables graphs, and simple equations). Recognize and describe patterns in number sequences and tables. Determine the function between the input and output." },
  { subject: "mathematics", grade_level: "3", strand: "Patterns and Relationships", code: "P3.2", description: "Identify relationships to make accurate predictions about future data points. Use patterns and trends to identify relationships. Make predictions based on identified relationships." },
  { subject: "mathematics", grade_level: "3", strand: "Patterns and Relationships", code: "P3.3", description: "Describe simple mathematical functions, such as addition, subtraction, multiplication, and division. Write open sentences to represent mathematical relationships in real-world situations. Solve open sentences to find missing values." },
  { subject: "mathematics", grade_level: "3", strand: "Geometrical Thinking", code: "G1.1", description: "Find 2D shapes or paths hidden in a picture or space. Recognize a shape or object seen from various points of view. Describe a picture or object in real-world contexts using 2D shapes." },
  { subject: "mathematics", grade_level: "3", strand: "Geometrical Thinking", code: "G1.2", description: "Identify given shapes as 2-D. Compare the characteristics of 2-D and 3-D shapes. List shapes and objects that are representative of 2-D and 3-D shapes. Identify shapes in patterns." },
  { subject: "mathematics", grade_level: "3", strand: "Geometrical Thinking", code: "G2.1", description: "Describe attributes and characteristics of 3-D shapes (prisms and pyramids) according to their bases, faces, edges, and vertices. Classify polygons that are regular and irregular. Differentiate between similar and congruent objects." },
  { subject: "mathematics", grade_level: "3", strand: "Geometrical Thinking", code: "G2.2", description: "Identify prisms and pyramids (triangular, rectangular, square, pentagonal, and hexagonal). Describe and compare the attributes of prisms and pyramids. Create prisms and pyramids using simple resources." },
  { subject: "mathematics", grade_level: "3", strand: "Geometrical Thinking", code: "G2.3", description: "Identify the face, edges, and vertices of prisms and pyramids. Recognize patterns involving the attributes and characteristics of prism and pyramids. Use two-dimensional cut-outs to model and create the faces of three-dimensional shapes." },
  { subject: "mathematics", grade_level: "3", strand: "Geometrical Thinking", code: "G3.1", description: "Recognize shapes as being either pyramids or prisms. Identify different types of pyramids and prisms. Utilize building skeletons of specific prisms and pyramids to create objects." },
  { subject: "mathematics", grade_level: "3", strand: "Geometrical Thinking", code: "G3.2", description: "Identify the 2-D shapes (faces) of prisms and pyramids. Name 2-D shapes on 3-D nets of prisms and pyramids. Deconstruct shapes into nets of specific prisms and pyramids." },
  { subject: "mathematics", grade_level: "3", strand: "Geometrical Thinking", code: "G3.3", description: "Recall and describe the characteristics of 2D and 3d shapes (prisms or pyramids). Identify faces which make a specific 3-D shape. Decompose/Dissect prism and pyramids to reveal component parts." },
  { subject: "mathematics", grade_level: "3", strand: "Measurement", code: "M1.1", description: "Use appropriate vocabulary and apply language to the measurement of perimeter, area, and time. Recognize perimeter as a measurement of length and area as an attribute of plane figures. Partition a rectangle into rows and columns of squares." },
  { subject: "mathematics", grade_level: "3", strand: "Measurement", code: "M1.2", description: "Differentiate between the terms perimeter and area of a shape. Calculate the perimeter of a polygon given its side lengths. Find the unknown side length of a polygon. Exhibit rectangles with the same perimeter and different areas." },
  { subject: "mathematics", grade_level: "3", strand: "Measurement", code: "M1.3", description: "Explain the effect that overfilling, underfilling and gaps between units have on accuracy. Compare the mass of various objects using a pan balance and non-standard units. Measure the mass of various objects." },
  { subject: "mathematics", grade_level: "3", strand: "Measurement", code: "M1.4", description: "Determine suitable standard units of length: centimeters (cm), meters (m), decimeters (dm). Estimate the length of any given object using standard units. Find the perimeter of a shape using standard units." },
  { subject: "mathematics", grade_level: "3", strand: "Measurement", code: "M2.1", description: "Estimate the area of geometric shape using standard units. Measure the area of a geometric shape using standard units. Determine measures of area by developing and applying strategies without using formulae." },
  { subject: "mathematics", grade_level: "3", strand: "Measurement", code: "M2.2", description: "State the relationship between days and weeks, weeks and months, minutes and hours. Interpret information on a calendar. State and record time on analog and digital clocks." },
  { subject: "mathematics", grade_level: "3", strand: "Measurement", code: "M2.3", description: "Identify the coins and notes in circulation up to the $100 note. Read and write amounts up to $100. Determine the value of various assortments of coins and notes up to $20.00." },
  { subject: "mathematics", grade_level: "3", strand: "Data Handling and Probability", code: "D1.1", description: "Identify the different methods used to collect data. Create questions that may be answered through data collection. Collect and record simple data in and around the school using different methods." },
  { subject: "mathematics", grade_level: "3", strand: "Data Handling and Probability", code: "D1.2", description: "Select the most appropriate method to display data collected. Draw scaled picture graphs (pictograph) and bar graphs to represent collected data. Sort sets of data according to two and three attributes." },
  { subject: "mathematics", grade_level: "3", strand: "Data Handling and Probability", code: "D2.1", description: "Describe a given data set. Read and interpret data presented in bar graphs. Answer questions about data presented in bar graphs. Label the title, horizontal axis and vertical axis of a bar graph." },
  { subject: "mathematics", grade_level: "3", strand: "Data Handling and Probability", code: "D2.2", description: "Ask and answer simple questions by counting the number of objects in a category. Compare two sets of data to draw conclusion. Choose the best method to organize data." },
  { subject: "mathematics", grade_level: "3", strand: "Data Handling and Probability", code: "D3.1", description: "Demonstrate their ability to read and interpret data by answering data collection questions correctly. Analyse graphs to answer questions correctly. Make simple predictions based on the graphs given." },
  { subject: "mathematics", grade_level: "3", strand: "Data Handling and Probability", code: "D3.2", description: "Create hypothesis and use a data set to test it. Analyse graphs to test hypotheses based on data collected. Examine graphs to gather information. Develop questions for surveys." },
  { subject: "mathematics", grade_level: "3", strand: "Data Handling and Probability", code: "D3.3", description: "State the meaning of making inferences. Make predictions and inferences based on trends in data. Compare and contrast sets of data to draw conclusions. Read and interpret data to make inferences." },
  { subject: "mathematics", grade_level: "3", strand: "Data Handling and Probability", code: "D4.1", description: "Define the terms associated with likelihood such as always, certain, likely, sometimes, impossible and never. Distinguish among the terms related to likelihood. Use appropriate terms to describe the likelihood of events occurring." },
  { subject: "mathematics", grade_level: "3", strand: "Data Handling and Probability", code: "D4.2", description: "Differentiate between the terms 'impossible' and 'certain' in relation to real-life events. Calculate the possibility of an event happening. Classify events as being impossible or certain." },

  // Grade 4 Mathematics
  { subject: "mathematics", grade_level: "4", strand: "Number Sense", code: "N1.1", description: "Skip count by 2s, 5s, 10s, 50s, 100s, and 1000s from any number to 10,000. Say number sequence by 2s, 5s, 10s, 100s and 1000s forward and backward, starting from any point, to 10,000. Model skip-counting using number lines, currency and concrete materials." },
  { subject: "mathematics", grade_level: "4", strand: "Number Sense", code: "N1.2", description: "Match number words/names and numerals up to 10,000 with the quantities they represent. Read and write 4-digit whole numbers up to 10,000 in standard and expanded form. Represent whole numbers up to 10,000 using various models." },
  { subject: "mathematics", grade_level: "4", strand: "Number Sense", code: "N1.3", description: "Compare the values of two 4-digit whole numbers using the <, >, or = symbols. Use different strategies to find numbers that are 100, 1000, or 10,000 more or less than a given number up to 4 digits." },
  { subject: "mathematics", grade_level: "4", strand: "Number Sense", code: "N1.4", description: "State the place value of any digit within a whole number up to 10,000. Round off any whole number up to 10,000 to the nearest 100 and 1000. Explain the pattern of regularity in the place value system." },
  { subject: "mathematics", grade_level: "4", strand: "Number Sense", code: "N2.1", description: "Explain equivalence of fractions in special cases, and compare fractions by reasoning about their size. Express whole numbers as fractions, and recognize fractions that are equivalent to whole numbers." },
  { subject: "mathematics", grade_level: "4", strand: "Number Sense", code: "N2.2", description: "Compare unit fractions and their fraction families. Compare two fractions with the same numerator or the same denominator by reasoning about their size." },
  { subject: "mathematics", grade_level: "4", strand: "Number Sense", code: "N2.3", description: "Represent decimals using concrete materials (tenths). Create pictorial models to illustrate decimals (tenths). Write decimals using symbolic notation (tenths)." },
  { subject: "mathematics", grade_level: "4", strand: "Number Sense", code: "N2.4", description: "Compare two decimal values using appropriate symbols (<, >, =). Round off decimals to the nearest whole number. Arrange a set of decimal numbers between 0 and 10 in ascending/descending order." },
  { subject: "mathematics", grade_level: "4", strand: "Number Sense", code: "N2.5", description: "Read and write the number names for decimals up to tenths using base ten numerals up to 10,000. Express decimal numbers up to tenths in expanded form." },
  { subject: "mathematics", grade_level: "4", strand: "Operations with Numbers", code: "O1.1", description: "Decompose a fraction less than or equal to 1 into a sum of fractions with the same denominator. Use concrete models or drawings and strategies based on place value to add and subtract decimals to tenths." },
  { subject: "mathematics", grade_level: "4", strand: "Operations with Numbers", code: "O1.2", description: "Use the standard algorithm to fluently add and subtract multi-digit whole numbers (up to four digits) with and without regrouping. Solve word problems involving addition and subtraction of fractions referring to the same whole and having like denominators." },
  { subject: "mathematics", grade_level: "4", strand: "Operations with Numbers", code: "O1.3", description: "Add 1, 2, 3-digit numbers with multi-digit numbers mentally. Estimate the addition of 1, 2, 3-digit whole numbers with multi-digits. Round off whole numbers to the nearest tens, hundreds and thousands." },
  { subject: "mathematics", grade_level: "4", strand: "Operations with Numbers", code: "O2.1", description: "Use strategies to recall multiplication and division facts up to 100. Find whole-number quotients and remainders with up to three-digit dividends and one-digit divisors." },
  { subject: "mathematics", grade_level: "4", strand: "Operations with Numbers", code: "O2.2", description: "Multiply single-digit numbers by single-digit numbers accurately and efficiently. Multiply numbers with up to three digits by one and two-digit numbers. Divide numbers with up to three digits by one-digit divisors." },
  { subject: "mathematics", grade_level: "4", strand: "Operations with Numbers", code: "O2.3", description: "Solve real-world problems involving multiplication and division. Estimate products of multiplication problems involving 2- and 3-digit numbers by a 1-digit number." },
  { subject: "mathematics", grade_level: "4", strand: "Operations with Numbers", code: "O3.1", description: "Explain the concept of a unit rate associated with a ratio a:b, where b≠0. Demonstrate Part-Whole Relationships by partitioning and combining concrete materials to represent different ratios." },
  { subject: "mathematics", grade_level: "4", strand: "Patterns and Relationships", code: "P1.1", description: "Determine pattern rules and use them to extend patterns. Identify missing elements in repeating, growing, and shrinking patterns. Identify and explain the patterns in equivalent fractions and decimal numbers." },
  { subject: "mathematics", grade_level: "4", strand: "Patterns and Relationships", code: "P1.2", description: "Identify and explain the patterns in square numbers up to 12. Identify and explain the patterns in triangular numbers up to 12. Find missing numbers in open sentences with addition and subtraction." },
  { subject: "mathematics", grade_level: "4", strand: "Patterns and Relationships", code: "P2.1", description: "Find missing numbers in open sentences with simple multiplication and division. Solve open sentences in addition and subtraction problems with whole numbers." },
  { subject: "mathematics", grade_level: "4", strand: "Patterns and Relationships", code: "P2.2", description: "Recognize when two expressions are equal and when they are not equal in addition, subtraction, multiplication and division. Apply properties of multiplication and division to determine equality or inequality." },
  { subject: "mathematics", grade_level: "4", strand: "Patterns and Relationships", code: "P2.3", description: "Create expressions and equations in all four operations. Translate word problems into mathematical equations and expressions. Write word problems for given expressions and equations." },
  { subject: "mathematics", grade_level: "4", strand: "Patterns and Relationships", code: "P3.1", description: "Identify situations in everyday life where rates of change occur. Distinguish between situations with constant rates of change and situations with varying rates of change." },
  { subject: "mathematics", grade_level: "4", strand: "Patterns and Relationships", code: "P3.2", description: "Recognize and describe patterns and relationships between two variables. Interpret and explain relationships shown in simple graphs." },
  { subject: "mathematics", grade_level: "4", strand: "Patterns and Relationships", code: "P3.3", description: "Identify and describe apparent features of patterns. Create and extend number patterns using addition, subtraction, multiplication, or division rules." },
  { subject: "mathematics", grade_level: "4", strand: "Geometrical Thinking", code: "G1.1", description: "Describe shapes in real-life settings using written language or using gestures. Recognize shapes in pictures or patterns. Visualize and create 3D shapes by folding nets." },
  { subject: "mathematics", grade_level: "4", strand: "Geometrical Thinking", code: "G1.2", description: "Describe 3D objects (prisms, cylinder, cone and pyramid) using geometric terms such as faces, edges. Identify the different types of quadrilaterals. Identify angles that are right angles, more than right angles and less than right angles." },
  { subject: "mathematics", grade_level: "4", strand: "Geometrical Thinking", code: "G2.1", description: "Identify shapes (polygons/2D) by number of sides and angles. Name/define shape based on special shared attributes: number of sides, number of angles." },
  { subject: "mathematics", grade_level: "4", strand: "Geometrical Thinking", code: "G2.2", description: "Identify and name 2D shapes (rhombuses, rectangles, kites, and squares) as examples of quadrilaterals. Identify and name 3D objects (prisms and pyramids). Recognize and identify right angles as well as angles greater than and less than right angles." },
  { subject: "mathematics", grade_level: "4", strand: "Geometrical Thinking", code: "G2.3", description: "Describe various quadrilaterals based on their attributes (sides, angles, parallel sides, diagonals and rotational and reflective symmetry). Compare 3D shapes (prisms, pyramids, cylinders, and cones) based on their attributes." },
  { subject: "mathematics", grade_level: "4", strand: "Geometrical Thinking", code: "G3.1", description: "Construct quadrilaterals using concrete materials. Construct composite shapes (various quadrilaterals) from congruent polygons. Construct nets for a given 3-D shape." },
  { subject: "mathematics", grade_level: "4", strand: "Geometrical Thinking", code: "G3.2", description: "Deconstruct composite shapes and identify the shape used to construct the composite shape. Employ folding techniques to deconstruct quadrilaterals into two congruent triangles." },
  { subject: "mathematics", grade_level: "4", strand: "Geometrical Thinking", code: "G3.3", description: "Transform 2D objects using concrete materials to represent various quadrilaterals. Transform 3D objects using concrete materials. Construct 3D shapes using paper folding." },
  { subject: "mathematics", grade_level: "4", strand: "Measurement", code: "M1.1", description: "Use language relating to measurement terms (mass, kg, g). Name relative sizes of the measurement units within one system of units. Estimate the mass of objects using benchmarks." },
  { subject: "mathematics", grade_level: "4", strand: "Measurement", code: "M1.2", description: "Differentiate between weight and mass. Compare objects by measuring and ordering based on their heaviness/lightness. Solve real world problems involving area of rectangles." },
  { subject: "mathematics", grade_level: "4", strand: "Measurement", code: "M1.3", description: "Find the mass of objects by counting weighted units/objects, improvised units. Find the mass of objects by using concrete materials (cubes, counters, etc.)." },
  { subject: "mathematics", grade_level: "4", strand: "Measurement", code: "M1.4", description: "Identify standard units of measure (mass) (mg, g, kg). Convert minutes to hours and vice versa. Calculate time elapsed using the relationship between units of time." },
  { subject: "mathematics", grade_level: "4", strand: "Measurement", code: "M2.1", description: "Estimate the mass of various objects without weighing them, then verify the estimates by actually measuring their mass. Apply appropriate units of measurement when solving worded problems." },
  { subject: "mathematics", grade_level: "4", strand: "Measurement", code: "M2.2", description: "Identify the different standard measuring tools (ruler, meter rule, scale, measuring cup). Demonstrate the correct use of the measuring instruments." },
  { subject: "mathematics", grade_level: "4", strand: "Measurement", code: "M2.3", description: "Add, subtract, multiply, or divide to solve one-step word problems involving masses or volumes. Create and apply strategies to determine measures of area using standard units." },
  { subject: "mathematics", grade_level: "4", strand: "Data Handling and Probability", code: "D1.1", description: "Discuss biases that students may have or encounter in real life situations. Identify biased/unbiased questions used in conducting surveys. Construct unbiased questions for conducting surveys." },
  { subject: "mathematics", grade_level: "4", strand: "Data Handling and Probability", code: "D1.2", description: "Identify the elements of a double-bar graph. Collect real life data from different primary and secondary sources. Organise data collected in a frequency table and stem-and-leaf plot." },
  { subject: "mathematics", grade_level: "4", strand: "Data Handling and Probability", code: "D2.1", description: "Construct a double bar graph to represent two sets of related data. Interpret data presented in a double bar graph. Examine given numerical data sets to determine the number of observations." },
  { subject: "mathematics", grade_level: "4", strand: "Data Handling and Probability", code: "D2.2", description: "Solve word problems related to a double bar graph. Compare and contrast two double bar graphs. Analyse a double bar graph and answer comprehension questions." },
  { subject: "mathematics", grade_level: "4", strand: "Data Handling and Probability", code: "D3.1", description: "Identify the patterns observed from data represented in a graph. Explain patterns observed from data presented in graphs. Predict an outcome based on the data represented on a graph." },
  { subject: "mathematics", grade_level: "4", strand: "Data Handling and Probability", code: "D3.2", description: "Answer questions based on a given bar graph that depicts a many to one correspondence. Formulate unbiased questions that can be answered using a survey." },
  { subject: "mathematics", grade_level: "4", strand: "Data Handling and Probability", code: "D3.3", description: "Describe the correspondence (one-to-one or many-to-one) used to present information in graphs. Differentiate the components of a graph using legend or key." },
  { subject: "mathematics", grade_level: "4", strand: "Data Handling and Probability", code: "D4.1", description: "Define the terms predicting, likelihood, unlikelihood, certain, impossible and equally likely. Describe events through the use of different probabilities." },
  { subject: "mathematics", grade_level: "4", strand: "Data Handling and Probability", code: "D4.2", description: "Find probability through experiments. Express probabilities of events using fractions." },

  // Grade 5 Mathematics
  { subject: "mathematics", grade_level: "5", strand: "Number Sense", code: "N1.1", description: "Identify and describe special sets of numbers (square, prime, and composite). Skip count by 2s, 5s, 10s, 100s, 1000s and 10,000s from any number up to 100,000." },
  { subject: "mathematics", grade_level: "5", strand: "Number Sense", code: "N1.2", description: "Represent/Model five-digit numbers concretely, pictorially, and symbolically. Read and write multi-digit whole numbers up to six digits using base-ten numerals and names." },
  { subject: "mathematics", grade_level: "5", strand: "Number Sense", code: "N1.3", description: "Compare two whole numbers up to 99,999 using the symbols (>, = and <). Calculate the whole number that is 100, 1000, 10,000 or 100,000 more or less than a given number up to five digits." },
  { subject: "mathematics", grade_level: "5", strand: "Number Sense", code: "N1.4", description: "Recognise that in a multi-digit whole number up to 100,000, each place has a value of ten times greater than the place immediately to its right. Round off any whole number up to 100,000 to the nearest 10,000 and 100,000." },
  { subject: "mathematics", grade_level: "5", strand: "Number Sense", code: "N2.1", description: "Identify and name mixed numbers and improper fractions using various modes of representation. Write a fraction in the form a/b. Convert mixed numbers to improper fractions and vice versa." },
  { subject: "mathematics", grade_level: "5", strand: "Number Sense", code: "N2.2", description: "Compare two proper fractions, improper fractions, and/or mixed numbers with similar and unlike denominators using <, > or =. Express a fraction in simplest terms by dividing the numerator and denominator by the highest common factor." },
  { subject: "mathematics", grade_level: "5", strand: "Number Sense", code: "N2.3", description: "Recognise and define decimals (tenth and hundredths) using concrete materials and pictorial representations. Write a given fraction with a denominator of 10, or 100 using decimal notation." },
  { subject: "mathematics", grade_level: "5", strand: "Number Sense", code: "N2.4", description: "Compare two decimal values (hundredths) using appropriate symbols (<, >, =). Arrange decimal numbers in ascending and descending order. Round off decimal numbers to the nearest tenth and hundredth." },
  { subject: "mathematics", grade_level: "5", strand: "Number Sense", code: "N2.5", description: "Read and write decimals to hundredths using base-ten numerals, number names, and expanded form. Convert the expanded form of decimal numbers up to hundredths to their base-ten numerals." },
  { subject: "mathematics", grade_level: "5", strand: "Operations with Numbers", code: "O1.1", description: "Recognise addition and subtraction of fractions as combining and separating parts of the same whole. Add and subtract fractions with like and unlike denominators. Add and subtract decimals to the hundredths place value." },
  { subject: "mathematics", grade_level: "5", strand: "Operations with Numbers", code: "O1.2", description: "Add and subtract multi-digit whole numbers (up to five digits) using the standard algorithm with and without regrouping. Add and subtract decimals to hundredths using the standard algorithm." },
  { subject: "mathematics", grade_level: "5", strand: "Operations with Numbers", code: "O1.3", description: "Estimate the results of addition and subtraction involving 1-digit numbers. Mentally add and subtract decimal numbers with tenths and hundredths. Estimate the results of addition problems involving decimals to the hundredths place." },
  { subject: "mathematics", grade_level: "5", strand: "Operations with Numbers", code: "O2.1", description: "Multiply decimal numbers by decimals. Multiply decimal numbers by whole number. Divide decimal number by decimals. Apply the commutative, associative, and distributive properties to multiply decimals." },
  { subject: "mathematics", grade_level: "5", strand: "Operations with Numbers", code: "O2.2", description: "Recall and apply multiplication and division facts of 1, 2, and 3 digits by 2- or 3-digit numbers. Multiply 1-digit numbers by 2, and 3-digit numbers and their relationship with division fluently." },
  { subject: "mathematics", grade_level: "5", strand: "Operations with Numbers", code: "O2.3", description: "Show that multiplying by 10, shifts digits to the left of its place and dividing by 10, shifts digits to the right of its place. Interpret and solve word problems that require multiplying or dividing quantities by powers of 10." },
  { subject: "mathematics", grade_level: "5", strand: "Operations with Numbers", code: "O3.1", description: "Explain a ratio as a comparison of two quantities. Represent ratios using different notations. Explain the concept of equivalent ratios. Create and interpret ratio tables to solve problems." },
  { subject: "mathematics", grade_level: "5", strand: "Operations with Numbers", code: "O3.2", description: "Define a percent as a part of 100. Express a number as a percentage of another number. Calculate a percentage of a given quantity. Use different methods to convert percent to decimals and fractions." },
  { subject: "mathematics", grade_level: "5", strand: "Patterns and Relationships", code: "P1.1", description: "Identify and analyze transformation patterns, such as reflections, rotations, and translations. Identify and name the place value of given digits within decimal numbers." },
  { subject: "mathematics", grade_level: "5", strand: "Patterns and Relationships", code: "P1.2", description: "Recognise and describe patterns in addition and subtraction situations involving decimal numbers. Demonstrate the use of patterns to simplify the process of adding and subtracting decimal numbers." },
  { subject: "mathematics", grade_level: "5", strand: "Patterns and Relationships", code: "P2.1", description: "Identify the variables and constants in an open sentence. Explain how to solve an open sentence with each of the four operations with whole numbers. Solve open sentences involving addition, subtraction, multiplication and division." },
  { subject: "mathematics", grade_level: "5", strand: "Patterns and Relationships", code: "P2.2", description: "Compare and contrast different volumes and capacities using direct measurement. Show equivalence in amounts of money using strategies such as counting and exchanging coins and notes." },
  { subject: "mathematics", grade_level: "5", strand: "Patterns and Relationships", code: "P2.3", description: "Construct story problems based on real-life scenarios involving a single variable that requires one operation to solve. Use various strategies to solve real-life problems involving basic operations." },
  { subject: "mathematics", grade_level: "5", strand: "Patterns and Relationships", code: "P3.1", description: "Generate two numerical patterns using two given rules. Identify apparent relationships between corresponding terms. Form ordered pairs consisting of corresponding terms from the two patterns." },
  { subject: "mathematics", grade_level: "5", strand: "Patterns and Relationships", code: "P3.2", description: "Identify and correctly use parentheses, brackets, and braces in numerical expressions. Evaluate numerical expressions with multiple grouping symbols in the correct order." },
  { subject: "mathematics", grade_level: "5", strand: "Patterns and Relationships", code: "P3.3", description: "Translate real-life situations to numerical expressions. Interpret numerical expressions without evaluating them. Use a pattern rule to make predictions about subsequent terms." },
  { subject: "mathematics", grade_level: "5", strand: "Geometrical Thinking", code: "G1.1", description: "Describe shapes, objects orally and in writing, using language and gestures. Identify specific shapes from a picture or object in world contexts. Make predictions based on spatial reasoning." },
  { subject: "mathematics", grade_level: "5", strand: "Geometrical Thinking", code: "G1.2", description: "Identify pyramids, prisms, cylinders and cones based on their attributes. Identify three types of angles (obtuse, acute and right) in various geometric shapes. Sort objects as being pyramids, cylinders, prisms and cones." },
  { subject: "mathematics", grade_level: "5", strand: "Geometrical Thinking", code: "G2.1", description: "State the characteristics of triangles based on sides, angles and symmetries. Define acute, obtuse, Right, Scalene, Isosceles and equilateral triangles. State the characteristics of regular polygons." },
  { subject: "mathematics", grade_level: "5", strand: "Geometrical Thinking", code: "G2.2", description: "Recognise prisms, pyramids, cylinders, and cones based on their bases, edges, vertices, curved surfaces. Name triangles by their angle measures as acute, obtuse, right. Classify polygons based on their properties." },
  { subject: "mathematics", grade_level: "5", strand: "Geometrical Thinking", code: "G2.3", description: "Recognise the attributes of prisms, pyramids, cylinders, and cones. Compare the attributes of various triangles. Compare polygons based on properties: number of sides, angles, rotational and reflective symmetry." },
  { subject: "mathematics", grade_level: "5", strand: "Geometrical Thinking", code: "G3.1", description: "Recognise polygons and non-polygons. Describe composite shapes and objects, including how they are formed by combining simpler geometric shapes. Create composite shapes using 3D objects." },
  { subject: "mathematics", grade_level: "5", strand: "Geometrical Thinking", code: "G3.2", description: "Identify prisms, pyramids, cylinders and cones as everyday objects. Differentiate between the nets of solid shapes. Deconstruct 3D objects to identify the 2D shapes." },
  { subject: "mathematics", grade_level: "5", strand: "Geometrical Thinking", code: "G3.3", description: "Differentiate among the terms reflections, rotation and translation in relation to shapes. Draw shapes to show reflection, translation and rotation. Use a coordinate system to represent transformation." },
  { subject: "mathematics", grade_level: "5", strand: "Measurement", code: "M1.1", description: "Identify volume and capacity. Use measurement terms accurately in relation to volume and capacity. Identify the appropriate metric units for measuring length, area and mass." },
  { subject: "mathematics", grade_level: "5", strand: "Measurement", code: "M1.2", description: "Identify and explain basic geometric principles related to the properties of shapes and their dimensions. Use of spatial reasoning to analyze how objects occupy space." },
  { subject: "mathematics", grade_level: "5", strand: "Measurement", code: "M1.3", description: "Differentiate between volume and capacity. Calculate the volume of a rectangular prism by using unit cubes. Identify and describe examples of angles found in everyday surroundings." },
  { subject: "mathematics", grade_level: "5", strand: "Measurement", code: "M1.4", description: "Identify the capacity within a hollow space using standard units (milliliter and liter). Define complementary angle and supplementary angles. Calculate the missing angles in a right angle." },
  { subject: "mathematics", grade_level: "5", strand: "Measurement", code: "M2.1", description: "Recognise volume as an attribute of solid figures and describe concepts of volume measurement. Identify the cube as the most efficient unit for measuring volume. Estimate the volume of 3D shape using personal referent." },
  { subject: "mathematics", grade_level: "5", strand: "Measurement", code: "M2.2", description: "Determine the volume of 3D objects by visualizing and counting the number of cubic units they contain. Find the volume of a rectangular prism by counting the number of unit cubes." },
  { subject: "mathematics", grade_level: "5", strand: "Measurement", code: "M2.3", description: "Recognise the concepts of volume and capacity and their relationship to multiplication and addition. Calculate the volume of rectangular prisms using multiplication. Solve real-world problems involving volume and capacity." },
  { subject: "mathematics", grade_level: "5", strand: "Data Handling and Probability", code: "D1.1", description: "List and explain different ways of collecting data. Ask suitable questions for collecting relevant data. Accurately record and document information received." },
  { subject: "mathematics", grade_level: "5", strand: "Data Handling and Probability", code: "D1.2", description: "Identify appropriate research questions to guide data collection. Select and apply suitable sampling techniques to gather data from a target population. Organize collected data into relative frequency tables." },
  { subject: "mathematics", grade_level: "5", strand: "Data Handling and Probability", code: "D2.1", description: "Distinguish between first-hand and second-hand data, providing examples of each. Select the appropriate graph type (including stacked-bar graphs) to represent a given data set visually." },
  { subject: "mathematics", grade_level: "5", strand: "Data Handling and Probability", code: "D2.2", description: "Identify examples of second-hand data from print and electronic media. Analyze data in different ways. Ask questions about data and draw conclusions to make informed decisions." },
  { subject: "mathematics", grade_level: "5", strand: "Data Handling and Probability", code: "D3.1", description: "Read and interpret data presented in stem-and-leaf plots and histograms. Identify and explain patterns within data sets. Make predictions about data trends." },
  { subject: "mathematics", grade_level: "5", strand: "Data Handling and Probability", code: "D3.2", description: "Answer specific questions about the data based on the information presented in the plots. Compare and contrast information from stem-and-leaf plots and histograms." },
  { subject: "mathematics", grade_level: "5", strand: "Data Handling and Probability", code: "D3.3", description: "Explain what is meant by second-hand data. Differentiate between the terms 'mean' and 'median'. Use data sets to calculate the mean and median." },
  { subject: "mathematics", grade_level: "5", strand: "Data Handling and Probability", code: "D4.1", description: "Explain what is meant by one-step events. Identify real-life examples of one-step events. Classify events in terms of 'impossible, possible, certain'." },
  { subject: "mathematics", grade_level: "5", strand: "Data Handling and Probability", code: "D4.2", description: "Identify possible outcomes of a probability experiment. Determine the probability of single events. Apply probability concepts to real-world situations." },

  // Grade 6 Mathematics
  { subject: "mathematics", grade_level: "6", strand: "Number Sense", code: "N1.1", description: "Read and write numbers in words and figures up to 1,000,000 (seven digits). State the face value, place value and total value of any digit in a whole number up to 999,999,999. Round off numbers to the nearest tens, hundreds and thousands up to millions." },
  { subject: "mathematics", grade_level: "6", strand: "Number Sense", code: "N1.2", description: "Express multi digit numbers up to 1,000,000 in expanded form (partition). Represent multi digit numbers up to 1,000,000 using manipulatives, diagrams and digital tools." },
  { subject: "mathematics", grade_level: "6", strand: "Number Sense", code: "N1.3", description: "Read and write up to seven-digit numbers using base ten numerals and number names. Use concrete materials and visual aids to compare two whole numbers up to seven digits, using appropriate symbols." },
  { subject: "mathematics", grade_level: "6", strand: "Number Sense", code: "N1.4", description: "State the place value of digits in a decimal number up to the thousandths place. Round off a decimal number to the nearest whole number, tenth, hundredth and thousandth." },
  { subject: "mathematics", grade_level: "6", strand: "Number Sense", code: "N2.1", description: "Explain a fraction as the division of the numerator by the denominator using concrete, pictorial, verbal and symbolic representations. Express a whole number division equation as a fraction." },
  { subject: "mathematics", grade_level: "6", strand: "Number Sense", code: "N2.2", description: "Explain equal fractions and ratios as proportions using visual fraction models. Examine the difference between proportional and inverse proportional relationships. Compare decimal numbers up to thousandths." },
  { subject: "mathematics", grade_level: "6", strand: "Number Sense", code: "N2.3", description: "Represent decimals using concrete materials and pictorials for tenths, hundredths, and thousandths. Convert fractions with denominators 10, 100, or 1,000 into decimal notation." },
  { subject: "mathematics", grade_level: "6", strand: "Number Sense", code: "N2.4", description: "Describe the process of comparing two decimals to thousandths. Demonstrate using the >, =, and < symbols to compare different decimals to thousandths." },
  { subject: "mathematics", grade_level: "6", strand: "Number Sense", code: "N2.5", description: "Read and write decimals to thousandths using base-ten numerals, number names, and expanded form. Convert the given expanded form of decimal numbers from millions to thousandths as their base-ten numeral representations." },
  { subject: "mathematics", grade_level: "6", strand: "Number Sense", code: "N3.1", description: "Read and represent integers using a variety of tools and strategies, including horizontal and vertical number lines. Identify and Interpret Positive and Negative Values." },
  { subject: "mathematics", grade_level: "6", strand: "Number Sense", code: "N3.2", description: "Explain the concept of inequalities and their significance in comparing numbers. Create and analyse number line diagrams to represent inequalities." },
  { subject: "mathematics", grade_level: "6", strand: "Operations with Numbers", code: "O1.1", description: "Add decimals up to the thousandth place. Subtract decimals up to the thousandth place. Use properties of operations and explain the inverse relationship between addition and subtraction." },
  { subject: "mathematics", grade_level: "6", strand: "Operations with Numbers", code: "O1.2", description: "Align multi-digit decimals by place values. Use varied strategies to add and subtract multi-digit decimals. Add and subtract fractions with like and unlike denominators using different strategies." },
  { subject: "mathematics", grade_level: "6", strand: "Operations with Numbers", code: "O1.3", description: "Use place value knowledge to represent and compare decimals. Create mental strategies for adding and subtracting decimals with tenths, hundredths, and thousandths." },
  { subject: "mathematics", grade_level: "6", strand: "Operations with Numbers", code: "O2.1", description: "Multiply whole numbers by proper fractions, using appropriate tools and strategies. Divide whole numbers by proper fractions using appropriate tools and strategies. Use multiple strategies to model multiplication and division of decimals." },
  { subject: "mathematics", grade_level: "6", strand: "Operations with Numbers", code: "O2.2", description: "Multiply multi-digit whole numbers. Multiply multi-digit decimals using the standard algorithm. Apply the concept of ratios and unit rates to solve real-world and mathematical problems." },
  { subject: "mathematics", grade_level: "6", strand: "Operations with Numbers", code: "O2.3", description: "Mentally divide with 2-, 3-, and multi-digit numbers. Use divisibility rules to determine whether numbers are divisible by 2, 3, 4, 5, 6, 8, 9, and 10. Use mental math strategies to calculate percent of whole numbers." },
  { subject: "mathematics", grade_level: "6", strand: "Operations with Numbers", code: "O3.1", description: "Calculate the unit rate by dividing the total quantity by the number of units. Solve real-world problems involving unit pricing. Explain that a ratio can be written as a fraction." },
  { subject: "mathematics", grade_level: "6", strand: "Operations with Numbers", code: "O3.2", description: "Define a percentage as a part of 100. Express a number as a percentage of another number. Calculate a percentage of a given quantity. Use different methods to convert percentages to decimals and fractions." },
  { subject: "mathematics", grade_level: "6", strand: "Patterns and Relationships", code: "P1.1", description: "Interpret the basic geometric concepts (perimeter, area, volume). Identify and describe patterns in tables of values and graphs involving problems in perimeter, area and volume calculations." },
  { subject: "mathematics", grade_level: "6", strand: "Patterns and Relationships", code: "P1.2", description: "Identify patterns in multiplication and division situations. Apply patterns rules when solving problems involving multiplication/division situations; multiplication/division by 0.1, 0.01, and 0.001." },
  { subject: "mathematics", grade_level: "6", strand: "Patterns and Relationships", code: "P2.1", description: "Identify and construct expressions/equations with unknowns from given situations. Write and solve problems with expressions/equations with unknowns for addition, subtraction, multiplication, and division." },
  { subject: "mathematics", grade_level: "6", strand: "Patterns and Relationships", code: "P2.2", description: "Identify whether two expressions using addition, subtraction, multiplication, or division with whole numbers are equal or unequal. Compare fractions by finding common denominators or using visual fraction models." },
  { subject: "mathematics", grade_level: "6", strand: "Patterns and Relationships", code: "P2.3", description: "Explain what a variable is and its usage in a given expression or equation. Create story problems involving open sentences (equations with variables) in all four operations." },
  { subject: "mathematics", grade_level: "6", strand: "Patterns and Relationships", code: "P3.1", description: "Write numeric expressions involving whole-number exponents. Evaluate numeric expressions involving whole-number exponents. Apply properties of operations to generate equivalent expressions." },
  { subject: "mathematics", grade_level: "6", strand: "Patterns and Relationships", code: "P3.2", description: "Collect and organize data into tables to identify number patterns. Create graphs to identify and interpret number patterns. Apply the order of operations in complex expressions involving multiple operations and exponents." },
  { subject: "mathematics", grade_level: "6", strand: "Patterns and Relationships", code: "P3.3", description: "Identify and define independent and dependent variables in real-world problems. Use variables to represent two quantities that change in relation to one another. Plot values on a coordinate grid to show relationships." },
  { subject: "mathematics", grade_level: "6", strand: "Geometrical Thinking", code: "G1.1", description: "Identify and categorize various types of quadrilaterals based on their characteristics. Interpret the top, front, and side views of three-dimensional objects. Construct three-dimensional models using materials." },
  { subject: "mathematics", grade_level: "6", strand: "Geometrical Thinking", code: "G1.2", description: "Identify 3D shapes and objects with further accuracy. Construct 3D shapes with further accuracy. Draw angles using straight edges and protractors. Classify angles according to their size." },
  { subject: "mathematics", grade_level: "6", strand: "Geometrical Thinking", code: "G2.1", description: "Recognize angle relationships (complementary, supplementary, vertically opposite angles and angles created by parallel lines and transversals). Determine the sum of the interior angles of a polygon." },
  { subject: "mathematics", grade_level: "6", strand: "Geometrical Thinking", code: "G2.2", description: "Recognize angles (acute, obtuse, right, reflex, and straight). Name angles (acute, obtuse, right, reflex, and straight). Classify angles according to the type." },
  { subject: "mathematics", grade_level: "6", strand: "Geometrical Thinking", code: "G2.3", description: "Use the properties of supplementary angles, complementary angles, opposite angles, and interior and exterior angles to solve for unknown angle measures. Find the sum of interior angles in various polygons." },
  { subject: "mathematics", grade_level: "6", strand: "Geometrical Thinking", code: "G3.1", description: "Identify and describe the four quadrants of the Cartesian plane. Use a protractor to measure and construct angles up to 360°. Plot given coordinates on a Cartesian plane in all four quadrants." },
  { subject: "mathematics", grade_level: "6", strand: "Geometrical Thinking", code: "G3.2", description: "Identify individual angles from complex shapes. Describe the types and properties of angles they identify within shapes. Interpret the structure of shapes by deconstructing them into their angle components." },
  { subject: "mathematics", grade_level: "6", strand: "Geometrical Thinking", code: "G3.3", description: "Recognize shapes that can tessellate. Describe the characteristics of translations, reflections, and rotations. Apply combinations of transformations on shapes and record the final position and orientation." },
  { subject: "mathematics", grade_level: "6", strand: "Measurement", code: "M1.1", description: "Use and apply language relating to measurement terms (surface area, money, time and angles). Use a protractor to measure and construct angles up to 360°. Use appropriate metric units to measure length, area, mass, and capacity." },
  { subject: "mathematics", grade_level: "6", strand: "Measurement", code: "M1.2", description: "Solve addition and subtraction problems to find unknown angles on a diagram in real world and mathematical problems. Estimate measures with different attributes using non-standard units and personal referents." },
  { subject: "mathematics", grade_level: "6", strand: "Measurement", code: "M1.3", description: "Use non-standard to estimate the measure of objects. Identify a referent for a given common non-standard measurement unit. Use personal referents to model attributes being measured." },
  { subject: "mathematics", grade_level: "6", strand: "Measurement", code: "M1.4", description: "Estimate the size of an angle. Measure angles in whole-number degrees using a protractor. Convert among different-sized standard measurement units within a given measurement system." },
  { subject: "mathematics", grade_level: "6", strand: "Measurement", code: "M2.1", description: "Recognize the relationship between the metric system of measurement and place value. Use a place value chart to convert measurements from one unit to another. Solve real-life problems relating to unit conversion." },
  { subject: "mathematics", grade_level: "6", strand: "Measurement", code: "M2.2", description: "Identify the different types of angles. Use a protractor to measure angles. Draw angles using a protractor. Classify angles according to their measurement." },
  { subject: "mathematics", grade_level: "6", strand: "Measurement", code: "M2.3", description: "Identify appropriate formulae to find the perimeter of rectangles, triangles, parallelograms and composite shapes. Calculate the area, perimeter, and volume of rectangles, triangles, parallelograms, composite shapes and prisms." },
  { subject: "mathematics", grade_level: "6", strand: "Data Handling and Probability", code: "D1.1", description: "Recognize what constitutes a statistical question. Differentiate between statistical and non-statistical questions. Apply the concept of variability in answers to statistical questions." },
  { subject: "mathematics", grade_level: "6", strand: "Data Handling and Probability", code: "D1.2", description: "Explain the difference between qualitative and quantitative data. Identify discrete and continuous quantitative data. Use tally charts and computer software to organize collected data." },
  { subject: "mathematics", grade_level: "6", strand: "Data Handling and Probability", code: "D2.1", description: "Identify a given set of data as continuous or discrete. Select the most suitable graph, such as histograms or broken-line graphs, to represent different data sets." },
  { subject: "mathematics", grade_level: "6", strand: "Data Handling and Probability", code: "D2.2", description: "Describe a given set of numerical data using a measure of centre (mean). Describe a given set of numerical data using a measure of variation (range). Compare different data sets." },
  { subject: "mathematics", grade_level: "6", strand: "Data Handling and Probability", code: "D3.1", description: "Read data in a line plot. Identify patterns presented in a line plot. Interpret data presented in a line plot. Make predictions based on data presented in a line plot." },
  { subject: "mathematics", grade_level: "6", strand: "Data Handling and Probability", code: "D3.2", description: "Describe the key components of a line graph including title, axes, scale, data points, and legend. Analyse trends and patterns in a line graph. Draw logical conclusions and predictions about data presented." },
  { subject: "mathematics", grade_level: "6", strand: "Data Handling and Probability", code: "D3.3", description: "Explain the meaning of each of the measures of central tendency (mean, median, mode, range). Calculate the mean, mode, median and range of a set of numbers. Compare data sets using the measures of central tendency." },
  { subject: "mathematics", grade_level: "6", strand: "Data Handling and Probability", code: "D4.1", description: "Predict possible outcomes of events. Describe the likelihood of an event occurring. Discuss the importance of determining the likelihood of an event occurring." },
  { subject: "mathematics", grade_level: "6", strand: "Data Handling and Probability", code: "D4.2", description: "Explain the difference in experimental and theoretical probability. Compare the results of experimental probability versus theoretical probability. Discover that experimental probability approaches theoretical probability." },
  
  // --- COMPLETE SCIENCE K–6 CURRICULUM STANDARDS ---
  // Kindergarten Science
  { subject: "science", grade_level: "K", strand: "Forces and Interactions: Pushes and Pulls", code: "K-SCI-1", description: "Plan and conduct an investigation to compare the effects of different strengths or different directions of pushes and pulls on the motion of an object" },
  { subject: "science", grade_level: "K", strand: "Forces and Interactions: Pushes and Pulls", code: "K-SCI-2", description: "Analyse data to determine if a design solution works as intended to change the speed or direction of an object with a push or a pull" },
  { subject: "science", grade_level: "K", strand: "Interdependent Relationships in Ecosystems", code: "K-SCI-3", description: "Use observations to describe patterns of what plants and animals (including humans) need to survive" },
  { subject: "science", grade_level: "K", strand: "Interdependent Relationships in Ecosystems", code: "K-SCI-4", description: "Construct an argument supported by evidence for how plants and animals (including humans) can change the environment to meet their needs" },
  { subject: "science", grade_level: "K", strand: "Interdependent Relationships in Ecosystems", code: "K-SCI-5", description: "Use a model to represent the relationship between the needs of different plants or animals (including humans) and the places they live" },
  { subject: "science", grade_level: "K", strand: "Interdependent Relationships in Ecosystems", code: "K-SCI-6", description: "Communicate solutions that will reduce the impact of humans on the land, water, air, and/or other living things in the local environment" },
  { subject: "science", grade_level: "K", strand: "Weather and Climate", code: "K-SCI-7", description: "Make observations to determine the effect of sunlight on Earth's surface" },
  { subject: "science", grade_level: "K", strand: "Weather and Climate", code: "K-SCI-8", description: "Use tools and materials to design and build a structure that will reduce the warming effect of sunlight on an area" },
  { subject: "science", grade_level: "K", strand: "Weather and Climate", code: "K-SCI-9", description: "Use and share observations of local weather conditions to describe patterns over time" },
  { subject: "science", grade_level: "K", strand: "Weather and Climate", code: "K-SCI-10", description: "Ask questions to obtain information about the purpose of weather forecasting to prepare for, and respond to, severe weather" },
  
  // Grade 1 Science
  { subject: "science", grade_level: "1", strand: "Waves, Light and Sound", code: "G1-SCI-1", description: "Plan and conduct investigations to provide evidence that vibrating materials can make sound and that sound can make materials vibrate" },
  { subject: "science", grade_level: "1", strand: "Waves, Light and Sound", code: "G1-SCI-2", description: "Make observations to construct an evidence-based account, that objects can be seen only when illuminated" },
  { subject: "science", grade_level: "1", strand: "Waves, Light and Sound", code: "G1-SCI-3", description: "Plan and conduct an investigation to determine the effect of placing objects made with different materials in the path of a beam of light" },
  { subject: "science", grade_level: "1", strand: "Waves, Light and Sound", code: "G1-SCI-4", description: "Use tools and materials to design and build a device that uses light or sound to solve the problem of communicating over a distance" },
  { subject: "science", grade_level: "1", strand: "Structure, Function and Information Processing", code: "G1-SCI-5", description: "Use materials to design a solution to a human problem by mimicking how plants and/or animals use their external parts to help them survive, grow and meet their needs" },
  { subject: "science", grade_level: "1", strand: "Structure, Function and Information Processing", code: "G1-SCI-6", description: "Read texts and use media to determine patterns in behaviour of parent and offspring that help offspring survive" },
  { subject: "science", grade_level: "1", strand: "Structure, Function and Information Processing", code: "G1-SCI-7", description: "Make observations to construct an evidence-based account that young plants and animals are like, but not exactly like their parents" },
  { subject: "science", grade_level: "1", strand: "Space Systems: Patterns and Cycles", code: "G1-SCI-8", description: "Use observations of the sun, moon, and stars to describe patterns that can be predicted" },
  { subject: "science", grade_level: "1", strand: "Space Systems: Patterns and Cycles", code: "G1-SCI-9", description: "Make observations at different times of the year to relate the amount of daylight to the time of year" },
  
  // Grade 2 Science
  { subject: "science", grade_level: "2", strand: "Structure and Properties of Matter", code: "G2-SCI-1", description: "Plan and conduct an investigation to describe and classify different kinds of materials by their observable properties" },
  { subject: "science", grade_level: "2", strand: "Structure and Properties of Matter", code: "G2-SCI-2", description: "Analyze data obtained from testing different materials to determine which materials have the properties that are best suited for an intended purpose" },
  { subject: "science", grade_level: "2", strand: "Structure and Properties of Matter", code: "G2-SCI-3", description: "Make observations to construct an evidence-based account of how an object made of a small set of pieces can be disassembled and made into a new object" },
  { subject: "science", grade_level: "2", strand: "Structure and Properties of Matter", code: "G2-SCI-4", description: "Construct an argument with evidence that some changes caused by heating or cooling can be reversed and some cannot" },
  { subject: "science", grade_level: "2", strand: "Interdependent Relationships in Ecosystems", code: "G2-SCI-5", description: "Plan and conduct an investigation to determine if plants need sunlight and water to grow" },
  { subject: "science", grade_level: "2", strand: "Interdependent Relationships in Ecosystems", code: "G2-SCI-6", description: "Develop a simple model that mimics the function of an animal in dispersing seeds or pollinating plants" },
  { subject: "science", grade_level: "2", strand: "Interdependent Relationships in Ecosystems", code: "G2-SCI-7", description: "Make observations of plants and animals to compare the diversity of life in different habitats" },
  { subject: "science", grade_level: "2", strand: "Earth Systems: Processes That Shape The Earth", code: "G2-SCI-8", description: "Use information from several sources to provide evidence that Earth events can occur quickly or slowly" },
  { subject: "science", grade_level: "2", strand: "Earth Systems: Processes That Shape The Earth", code: "G2-SCI-9", description: "Compare multiple solutions designed to slow or prevent wind or water from changing the shape of the land" },
  { subject: "science", grade_level: "2", strand: "Earth Systems: Processes That Shape The Earth", code: "G2-SCI-10", description: "Develop a model to represent the shapes and kinds of land and bodies of water in an area" },
  { subject: "science", grade_level: "2", strand: "Earth Systems: Processes That Shape The Earth", code: "G2-SCI-11", description: "Obtain information to identify where water is found on Earth and that it can be solid or liquid" },
  { subject: "science", grade_level: "2", strand: "Engineering Design", code: "G2-SCI-12", description: "Ask questions, make observations, and gather information about a situation people want to change to define a simple problem that can be solved through the development of a new or improved object or tool" },
  { subject: "science", grade_level: "2", strand: "Engineering Design", code: "G2-SCI-13", description: "Develop a simple sketch, drawing, or physical model to illustrate how the shape of an object helps it function as needed to solve a given problem" },
  { subject: "science", grade_level: "2", strand: "Engineering Design", code: "G2-SCI-14", description: "Analyze data from tests of at least two objects designed to solve the same problem to compare the strengths and weaknesses of how each performs" },
  
  // Grade 3 Science
  { subject: "science", grade_level: "3", strand: "Forces and Interactions", code: "G3-SCI-1", description: "Plan and conduct an investigation to provide evidence of the effects of balanced and unbalanced forces on the motion of an object" },
  { subject: "science", grade_level: "3", strand: "Forces and Interactions", code: "G3-SCI-2", description: "Make observations and/or measurements of an object's motion to provide evidence that a pattern can be used to predict future motion" },
  { subject: "science", grade_level: "3", strand: "Forces and Interactions", code: "G3-SCI-3", description: "Ask questions to determine cause and effect relationships of electric or magnetic interactions between two objects not in contact with each other" },
  { subject: "science", grade_level: "3", strand: "Forces and Interactions", code: "G3-SCI-4", description: "Define a simple design problem that can be solved by applying scientific ideas about magnets" },
  { subject: "science", grade_level: "3", strand: "Interdependent Relationships in Ecosystems", code: "G3-SCI-5", description: "Construct an argument that some animals form groups that help members survive" },
  { subject: "science", grade_level: "3", strand: "Interdependent Relationships in Ecosystems", code: "G3-SCI-6", description: "Construct an argument with evidence that in a particular habitat some organisms can survive well, some survive less well, and some cannot survive at all" },
  { subject: "science", grade_level: "3", strand: "Interdependent Relationships in Ecosystems", code: "G3-SCI-7", description: "Make a claim about the merit of a solution to a problem caused when the environment changes and the types of plants and animals that live there may change" },
  { subject: "science", grade_level: "3", strand: "Inheritance and Variation of Traits: Life Cycles and Traits", code: "G3-SCI-8", description: "Develop models to describe that organisms have unique and diverse life cycles but all have in common birth, growth, reproduction, and death" },
  { subject: "science", grade_level: "3", strand: "Inheritance and Variation of Traits: Life Cycles and Traits", code: "G3-SCI-9", description: "Analyze and interpret data to provide evidence that plants and animals have traits inherited from parents and that variation of these traits exists in a group of similar organisms" },
  { subject: "science", grade_level: "3", strand: "Inheritance and Variation of Traits: Life Cycles and Traits", code: "G3-SCI-10", description: "Use evidence to support the explanation that traits can be influenced by the environment" },
  { subject: "science", grade_level: "3", strand: "Inheritance and Variation of Traits: Life Cycles and Traits", code: "G3-SCI-11", description: "Use evidence to construct an explanation for how the variations in characteristics among individuals of the same species may provide advantages in surviving, finding mates, and reproducing" },
  { subject: "science", grade_level: "3", strand: "Weather and Climate", code: "G3-SCI-12", description: "Represent data in tables and graphical displays to describe typical weather conditions expected during a particular season" },
  { subject: "science", grade_level: "3", strand: "Weather and Climate", code: "G3-SCI-13", description: "Obtain and combine information to describe climates in different regions of the world" },
  { subject: "science", grade_level: "3", strand: "Weather and Climate", code: "G3-SCI-14", description: "Make a claim about the merit of a design solution that reduces the impacts of a weather-related hazard" },
  { subject: "science", grade_level: "3", strand: "Engineering Design", code: "G3-SCI-15", description: "Define a simple design problem reflecting a need or a want that includes specified criteria for success and constraints on materials, time, or cost" },
  
  // Grade 4 Science
  { subject: "science", grade_level: "4", strand: "Energy", code: "G4-PS-E-1", description: "Use evidence to construct an explanation relating the speed of an object to the energy of that object" },
  { subject: "science", grade_level: "4", strand: "Energy", code: "G4-PS-E-2", description: "Make observations to provide evidence that energy can be transferred from place to place by sound, light, heat, and electric currents" },
  { subject: "science", grade_level: "4", strand: "Energy", code: "G4-PS-E-3", description: "Ask questions and predict outcomes about the changes in energy that occur when objects collide" },
  { subject: "science", grade_level: "4", strand: "Energy", code: "G4-PS-E-4", description: "Apply scientific ideas to design, test, and refine a device that converts energy from one form to another" },
  { subject: "science", grade_level: "4", strand: "Energy", code: "G4-PS-E-5", description: "Obtain and combine information to describe that energy and fuels are derived from natural resources and that their uses affect the environment" },
  { subject: "science", grade_level: "4", strand: "Waves", code: "G4-PS-W-1", description: "Develop a model of waves to describe patterns in terms of amplitude and wavelength and that waves can cause objects to move" },
  { subject: "science", grade_level: "4", strand: "Waves", code: "G4-PS-W-2", description: "Generate and compare multiple solutions that use patterns to transfer information" },
  { subject: "science", grade_level: "4", strand: "Structure and Function", code: "G4-LS-SF-1", description: "Develop a model to describe that light reflecting from objects and entering the eye allows objects to be seen" },
  { subject: "science", grade_level: "4", strand: "Structure and Function", code: "G4-LS-SF-2", description: "Construct an argument that plants and animals have internal and external structures that function to support survival, growth, behavior, and reproduction" },
  { subject: "science", grade_level: "4", strand: "Structure and Function", code: "G4-LS-SF-3", description: "Use a model to describe that animals receive different information through their senses, process it in their brain and respond to it differently" },
  { subject: "science", grade_level: "4", strand: "Earth Systems: Processes that Shape the Earth", code: "G4-ESS-PSTE-1", description: "Identify evidence from patterns in rock formations and fossils in rock layers to support an explanation for changes in a landscape over time" },
  { subject: "science", grade_level: "4", strand: "Earth Systems: Processes that Shape the Earth", code: "G4-ESS-PSTE-2", description: "Make observations and/or measurements to provide evidence of the effects of weathering or the rate of erosion by water, ice, wind, or vegetation" },
  { subject: "science", grade_level: "4", strand: "Earth Systems: Processes that Shape the Earth", code: "G4-ESS-PSTE-3", description: "Analyze and interpret data from maps to describe patterns of Earth's features" },
  { subject: "science", grade_level: "4", strand: "Earth Systems: Processes that Shape the Earth", code: "G4-ESS-PSTE-4", description: "Generate and compare multiple solutions to reduce the impacts of natural Earth processes on humans" },
  
  // Grade 5 Science
  { subject: "science", grade_level: "5", strand: "Structure and Properties of Matter", code: "G5-PS-SPM-1", description: "Develop a model to describe that matter is made of particles too small to be seen" },
  { subject: "science", grade_level: "5", strand: "Structure and Properties of Matter", code: "G5-PS-SPM-2", description: "Measure and graph quantities to provide evidence that regardless of the type of change that occurs when heating, cooling, or mixing substances, the total weight of matter is conserved" },
  { subject: "science", grade_level: "5", strand: "Structure and Properties of Matter", code: "G5-PS-SPM-3", description: "Make observations and measurements to identify materials based on their properties" },
  { subject: "science", grade_level: "5", strand: "Structure and Properties of Matter", code: "G5-PS-SPM-4", description: "Conduct an investigation to determine whether the mixing of two or more substances results in new substances" },
  { subject: "science", grade_level: "5", strand: "Matter and Energy in Organisms and Ecosystems", code: "G5-LS-MEOE-1", description: "Use models to describe that energy in animals' food (used for body repair, growth, motion, and to maintain body warmth) was once energy from the sun" },
  { subject: "science", grade_level: "5", strand: "Matter and Energy in Organisms and Ecosystems", code: "G5-LS-MEOE-2", description: "Support an argument that plants get the materials they need for growth chiefly from air and water" },
  { subject: "science", grade_level: "5", strand: "Matter and Energy in Organisms and Ecosystems", code: "G5-LS-MEOE-3", description: "Develop a model to describe the movement of matter among plants, animals, decomposers, and the environment" },
  { subject: "science", grade_level: "5", strand: "Earth Systems", code: "G5-ESS-ES-1", description: "Develop a model using an example to describe ways the geosphere, biosphere, hydrosphere, and/or atmosphere interact" },
  { subject: "science", grade_level: "5", strand: "Earth Systems", code: "G5-ESS-ES-2", description: "Describe and graph the amounts of salt water and fresh water in various reservoirs to provide evidence about the distribution of water on Earth" },
  { subject: "science", grade_level: "5", strand: "Earth Systems", code: "G5-ESS-ES-3", description: "Obtain and combine information about ways individual communities use science ideas to protect the Earth's resources and environment" },
  { subject: "science", grade_level: "5", strand: "Space Systems: Stars and the Solar System", code: "G5-ESS-SSSS-1", description: "Support an argument that the gravitational force exerted by Earth on objects is directed down" },
  { subject: "science", grade_level: "5", strand: "Space Systems: Stars and the Solar System", code: "G5-ESS-SSSS-2", description: "Support an argument that differences in the apparent brightness of the sun compared to other stars is due to their relative distances from Earth" },
  { subject: "science", grade_level: "5", strand: "Space Systems: Stars and the Solar System", code: "G5-ESS-SSSS-3", description: "Represent data in graphical displays to reveal patterns of daily changes in length and direction of shadows, day and night, and the seasonal appearance of some stars in the night sky" },
  { subject: "science", grade_level: "5", strand: "Engineering", code: "G5-ETS-E-1", description: "Plan and carry out fair tests in which variables are controlled and failure points are considered to identify aspects of a model or prototype that can be improved" },
  
  // Grade 6 Science
  { subject: "science", grade_level: "6", strand: "Structure and Properties of Matter", code: "G6-PS-SPM-1", description: "Develop models to describe the atomic composition of simple molecules and extended structures" },
  { subject: "science", grade_level: "6", strand: "Structure and Properties of Matter", code: "G6-PS-SPM-2", description: "Gather and make sense of information to describe that synthetic materials come from natural resources and impact society" },
  { subject: "science", grade_level: "6", strand: "Chemical Reactions", code: "G6-PS-CR-1", description: "Analyse and interpret data on the properties of substances before and after the substances interact to determine if a chemical reaction has occurred" },
  { subject: "science", grade_level: "6", strand: "Chemical Reactions", code: "G6-PS-CR-2", description: "Develop and use a model to describe how the total number of atoms does not change in a chemical reaction and thus mass is conserved" },
  { subject: "science", grade_level: "6", strand: "Inheritance, Variation of Traits and Life Cycles", code: "G6-LS-IVTLC-1", description: "Develop models to describe that organisms have unique and diverse life cycles but all have in common birth, growth, reproduction, and death" },
  { subject: "science", grade_level: "6", strand: "Waves and Electromagnetic Radiation", code: "G6-PS-WER-1", description: "Use mathematical representations to describe a simple model for waves that includes how the amplitude of a wave is related to the energy in a wave" },
  { subject: "science", grade_level: "6", strand: "Waves and Electromagnetic Radiation", code: "G6-PS-WER-2", description: "Develop and use a model to describe that waves are reflected, absorbed, or transmitted through various materials" },
  { subject: "science", grade_level: "6", strand: "Forces and Interactions", code: "G6-PS-FI-1", description: "Apply Newton's Third Law to design a solution to a problem involving the motion of two colliding objects" },
  { subject: "science", grade_level: "6", strand: "Forces and Interactions", code: "G6-PS-FI-2", description: "Plan an investigation to provide evidence that the change in an object's motion depends on the sum of the forces on the object and the mass of the object" },
  { subject: "science", grade_level: "6", strand: "Forces and Interactions", code: "G6-PS-FI-3", description: "Ask questions about data to determine the factors that affect the strength of electric and magnetic forces" },
  { subject: "science", grade_level: "6", strand: "Matter and Energy in Organisms and Ecosystems", code: "G6-LS-MEOE-1", description: "Analyse and interpret data to provide evidence for the effects of resource availability on organisms and populations of organisms in an ecosystem" },
  { subject: "science", grade_level: "6", strand: "Interdependent Relationships in Ecosystems", code: "G6-LS-IRE-1", description: "Construct an explanation that predicts patterns of interactions among organisms across multiple ecosystems" },
  { subject: "science", grade_level: "6", strand: "Energy", code: "G6-PS-E-1", description: "Construct and interpret graphical displays of data to describe the relationships of kinetic energy to the mass of an object and to the speed of an object" },
  { subject: "science", grade_level: "6", strand: "Energy", code: "G6-PS-E-2", description: "Develop a model to describe that when the arrangement of objects interacting at a distance changes, different amounts of potential energy are stored in the system" },
  { subject: "science", grade_level: "6", strand: "Energy", code: "G6-PS-E-3", description: "Apply scientific principles to design, construct, and test a device that either minimizes or maximizes thermal energy transfer" },
  { subject: "science", grade_level: "6", strand: "Space Systems", code: "G6-ESS-SS-1", description: "Analyse and interpret data to determine scale properties of objects in the solar system" },
  { subject: "science", grade_level: "6", strand: "Space Systems", code: "G6-ESS-SS-2", description: "Construct and present arguments using evidence to support the claim that gravitational interactions are attractive and depend on the masses of interacting objects" },
  { subject: "science", grade_level: "6", strand: "History of the Earth", code: "G6-ESS-HE-1", description: "Analyse and interpret data on the distribution of fossils and rocks, continental shapes, and seafloor structures to provide evidence of the past plate motions" },
  { subject: "science", grade_level: "6", strand: "Earth Systems", code: "G6-ESS-ES-1", description: "Develop a model to describe the cycling of water through Earth's systems driven by energy from the sun and the force of gravity" },
  { subject: "science", grade_level: "6", strand: "Earth Systems", code: "G6-ESS-ES-2", description: "Construct a scientific explanation based on evidence for how the uneven distributions of Earth's mineral, energy, and groundwater resources are the result of past and current geoscience processes" },

  
   // --- KINDERGARTEN SOCIAL STUDIES ---
  // Historical and Cultural Thinking - Kindergarten
  { subject: "social-studies", grade_level: "K", strand: "Historical-Cultural Thinking", code: "K-HCT-K1", description: "Demonstrate an understanding of 'me' as a unique child" },
  { subject: "social-studies", grade_level: "K", strand: "Historical-Cultural Thinking", code: "K-HCT-S1", description: "Distinguish personal characteristics that make each child unique (physical traits, mannerisms)" },
  { subject: "social-studies", grade_level: "K", strand: "Historical-Cultural Thinking", code: "K-HCT-V1", description: "Appreciate that everyone has unique and special characteristics" },
  { subject: "social-studies", grade_level: "K", strand: "Historical-Cultural Thinking", code: "K-HCT-V2", description: "Express appreciation of the child's own personal attributes, one's name" },
  { subject: "social-studies", grade_level: "K", strand: "Historical-Cultural Thinking", code: "K-HCT-K2", description: "Name family members" },
  { subject: "social-studies", grade_level: "K", strand: "Historical-Cultural Thinking", code: "K-HCT-S2", description: "Represent family members using pictures/images" },
  { subject: "social-studies", grade_level: "K", strand: "Historical-Cultural Thinking", code: "K-HCT-S3", description: "Compare their physical features with those of their family members; categorize similarities and differences of self and other family members" },
  { subject: "social-studies", grade_level: "K", strand: "Historical-Cultural Thinking", code: "K-HCT-K3", description: "Understand that we inherit characteristics from our families" },
  { subject: "social-studies", grade_level: "K", strand: "Historical-Cultural Thinking", code: "K-HCT-V3", description: "Appreciate the uniqueness of families; respect that the composition of families takes many forms" },
  { subject: "social-studies", grade_level: "K", strand: "Historical-Cultural Thinking", code: "K-HCT-KV1", description: "Understand that respect for self includes proper cleanliness, language and behaviour" },
  { subject: "social-studies", grade_level: "K", strand: "Historical-Cultural Thinking", code: "K-HCT-S4", description: "Categorize similarities and differences of self and others in families" },
  { subject: "social-studies", grade_level: "K", strand: "Historical-Cultural Thinking", code: "K-HCT-K4", description: "Recognize that their own physical characteristics, preferences, and mannerisms may be inherited from their families" },
  { subject: "social-studies", grade_level: "K", strand: "Historical-Cultural Thinking", code: "K-HCT-K5", description: "Name one religious and one national festival celebrated in their country" },
  { subject: "social-studies", grade_level: "K", strand: "Historical-Cultural Thinking", code: "K-HCT-S5", description: "Understand the significance and importance of religious and national festivals" },
  { subject: "social-studies", grade_level: "K", strand: "Historical-Cultural Thinking", code: "K-HCT-V4", description: "Appreciate that their country has different celebrations and traditions" },
  { subject: "social-studies", grade_level: "K", strand: "Historical-Cultural Thinking", code: "K-HCT-K6", description: "Identify customs (food, music, dance language) associated with these celebrations" },
  { subject: "social-studies", grade_level: "K", strand: "Historical-Cultural Thinking", code: "K-HCT-S6", description: "Make presentations on customs associated with these celebrations" },
  { subject: "social-studies", grade_level: "K", strand: "Historical-Cultural Thinking", code: "K-HCT-V5", description: "Appreciate the diversity of customs and take pride in this" },

  // Civic Participation - Kindergarten
  { subject: "social-studies", grade_level: "K", strand: "Civic Participation", code: "K-CP-K1", description: "Describe how family members care for one another" },
  { subject: "social-studies", grade_level: "K", strand: "Civic Participation", code: "K-CP-V1", description: "Appreciate that family members love and care for one another" },
  { subject: "social-studies", grade_level: "K", strand: "Civic Participation", code: "K-CP-K2", description: "Describe roles of various family members" },
  { subject: "social-studies", grade_level: "K", strand: "Civic Participation", code: "K-CP-S1", description: "Chart the daily routines or activities in which family members care for one another" },
  { subject: "social-studies", grade_level: "K", strand: "Civic Participation", code: "K-CP-V2", description: "Appreciate that the way family members love and care for one another helps them meet their basic needs" },
  { subject: "social-studies", grade_level: "K", strand: "Civic Participation", code: "K-CP-K3", description: "Identify groups to which I belong" },
  { subject: "social-studies", grade_level: "K", strand: "Civic Participation", code: "K-CP-S2", description: "Express how my behaviour in groups and the behaviour of others affects me and others" },
  { subject: "social-studies", grade_level: "K", strand: "Civic Participation", code: "K-CP-V3", description: "Appreciate that members of groups to which I belong have responsibilities" },
  { subject: "social-studies", grade_level: "K", strand: "Civic Participation", code: "K-CP-K4", description: "Recognize that all children have the right to be safe from harm" },
  { subject: "social-studies", grade_level: "K", strand: "Civic Participation", code: "K-CP-S3", description: "List examples of what helps children feel safe" },
  { subject: "social-studies", grade_level: "K", strand: "Civic Participation", code: "K-CP-V4", description: "Appreciate that being safe from harm also means that they must learn to play safely" },
  { subject: "social-studies", grade_level: "K", strand: "Civic Participation", code: "K-CP-S4", description: "Demonstrate responsible caring behaviour towards others in play" },
  { subject: "social-studies", grade_level: "K", strand: "Civic Participation", code: "K-CP-K5", description: "Identify national symbols and emblems such as the national flag, anthem, pledge, bird and flower" },
  { subject: "social-studies", grade_level: "K", strand: "Civic Participation", code: "K-CP-S5", description: "Demonstrate appropriate behaviour when national anthem is being played, pledge is being said" },
  { subject: "social-studies", grade_level: "K", strand: "Civic Participation", code: "K-CP-V5", description: "Appreciate and respect the importance of national symbols" },
  { subject: "social-studies", grade_level: "K", strand: "Civic Participation", code: "K-CP-K6", description: "Know why we have rules in groups to which I belong (e.g. family, class at school)" },
  { subject: "social-studies", grade_level: "K", strand: "Civic Participation", code: "K-CP-S6", description: "Apply groups' rules in daily life" },
  { subject: "social-studies", grade_level: "K", strand: "Civic Participation", code: "K-CP-V6", description: "Demonstrate examples of responsible and polite behaviour in groups to which I belong" },
  { subject: "social-studies", grade_level: "K", strand: "Civic Participation", code: "K-CP-K7", description: "Describe safe practices while travelling to school" },
  { subject: "social-studies", grade_level: "K", strand: "Civic Participation", code: "K-CP-S7", description: "Role play the use of safe practices when travelling to school" },
  { subject: "social-studies", grade_level: "K", strand: "Civic Participation", code: "K-CP-V7", description: "Appreciate the value and benefits of practicing safety when travelling to school" },

  // Spatial Thinking - Kindergarten
  { subject: "social-studies", grade_level: "K", strand: "Spatial Thinking", code: "K-ST-K1", description: "State the name and address of their home and school" },
  { subject: "social-studies", grade_level: "K", strand: "Spatial Thinking", code: "K-ST-S1", description: "Express themselves clearly when stating their address" },
  { subject: "social-studies", grade_level: "K", strand: "Spatial Thinking", code: "K-ST-V1", description: "Feel a sense of belonging in their surroundings" },
  { subject: "social-studies", grade_level: "K", strand: "Spatial Thinking", code: "K-ST-K2", description: "Identify natural and built features of the local environment" },
  { subject: "social-studies", grade_level: "K", strand: "Spatial Thinking", code: "K-ST-S2", description: "Illustrate natural and built features of the local environment" },
  { subject: "social-studies", grade_level: "K", strand: "Spatial Thinking", code: "K-ST-V2", description: "Appreciate that they are part of a wider environment" },
  { subject: "social-studies", grade_level: "K", strand: "Spatial Thinking", code: "K-ST-K3", description: "Describe various weather conditions" },
  { subject: "social-studies", grade_level: "K", strand: "Spatial Thinking", code: "K-ST-S3", description: "Observe and record different weather conditions" },
  { subject: "social-studies", grade_level: "K", strand: "Spatial Thinking", code: "K-ST-V3", description: "Appreciate the importance of taking safety precautions in some weather conditions" },

  // --- GRADE 1 SOCIAL STUDIES ---
  
  // Historical and Cultural Thinking - Grade 1
  { subject: "social-studies", grade_level: "1", strand: "Historical-Cultural Thinking", code: "1-HCT-K1", description: "State different forms of celebrations that are practiced in families to build pride and identity" },
  { subject: "social-studies", grade_level: "1", strand: "Historical-Cultural Thinking", code: "1-HCT-K2", description: "Identify aspects of culture such as food, music, dance that are relevant to celebrations in families" },
  { subject: "social-studies", grade_level: "1", strand: "Historical-Cultural Thinking", code: "1-HCT-S1", description: "Demonstrate different forms of celebration in the family and explain the importance of preserving local culture" },
  { subject: "social-studies", grade_level: "1", strand: "Historical-Cultural Thinking", code: "1-HCT-V1", description: "Appreciate their cultural heritage" },
  { subject: "social-studies", grade_level: "1", strand: "Historical-Cultural Thinking", code: "1-HCT-K3", description: "List religious and national festivals celebrated by the family" },
  { subject: "social-studies", grade_level: "1", strand: "Historical-Cultural Thinking", code: "1-HCT-S2", description: "Investigate and report how the family, school and nation celebrate various religious and national festivals" },
  { subject: "social-studies", grade_level: "1", strand: "Historical-Cultural Thinking", code: "1-HCT-V2", description: "Respect that families celebrate religious and national festivals in different ways, and that the families may choose not to celebrate some or all of these occasions" },
  { subject: "social-studies", grade_level: "1", strand: "Historical-Cultural Thinking", code: "1-HCT-K4", description: "Identify the national symbols of their country" },
  { subject: "social-studies", grade_level: "1", strand: "Historical-Cultural Thinking", code: "1-HCT-S3", description: "Describe the national symbols through drawing, painting and /or other expressions" },
  { subject: "social-studies", grade_level: "1", strand: "Historical-Cultural Thinking", code: "1-HCT-V3", description: "Appreciate that their national symbols are unique and special to their country and should be respected" },

  // Civic Participation - Grade 1
  { subject: "social-studies", grade_level: "1", strand: "Civic Participation", code: "1-CP-K1", description: "Understand the importance of keeping their home, school, and community tidy and clean" },
  { subject: "social-studies", grade_level: "1", strand: "Civic Participation", code: "1-CP-S1", description: "Practice putting garbage and litter in trash cans at school and home" },
  { subject: "social-studies", grade_level: "1", strand: "Civic Participation", code: "1-CP-V1", description: "Observe and appreciate places in their environment that are kept clean and tidy" },
  { subject: "social-studies", grade_level: "1", strand: "Civic Participation", code: "1-CP-K2", description: "Recognize that when everyone in our family shares and helps one another we all benefit" },
  { subject: "social-studies", grade_level: "1", strand: "Civic Participation", code: "1-CP-S2", description: "List the ways that our siblings, parents, grandparents, and other relatives help us and vice versa" },
  { subject: "social-studies", grade_level: "1", strand: "Civic Participation", code: "1-CP-V2", description: "Appreciate that helping other family members is important for our collective wellbeing" },
  { subject: "social-studies", grade_level: "1", strand: "Civic Participation", code: "1-CP-K3", description: "Identify persons to turn to when they need help" },
  { subject: "social-studies", grade_level: "1", strand: "Civic Participation", code: "1-CP-S3", description: "Communicate ways to express when they feel unsafe" },
  { subject: "social-studies", grade_level: "1", strand: "Civic Participation", code: "1-CP-V3", description: "Appreciate feeling safe in their environment" },
  { subject: "social-studies", grade_level: "1", strand: "Civic Participation", code: "1-CP-K4", description: "Understand what a leader is" },
  { subject: "social-studies", grade_level: "1", strand: "Civic Participation", code: "1-CP-S4", description: "Identify leaders in their home, school, church, community, and nation" },
  { subject: "social-studies", grade_level: "1", strand: "Civic Participation", code: "1-CP-V4", description: "Appreciate that leaders are an important part of our well-being" },
  { subject: "social-studies", grade_level: "1", strand: "Civic Participation", code: "1-CP-K5", description: "Recognize the appropriate manners and behaviours towards adults in positions of authority" },
  { subject: "social-studies", grade_level: "1", strand: "Civic Participation", code: "1-CP-S5", description: "Practice using proper manners when interacting with adults" },
  { subject: "social-studies", grade_level: "1", strand: "Civic Participation", code: "1-CP-V5", description: "Respect persons in authority" },

  // Spatial Thinking - Grade 1
  { subject: "social-studies", grade_level: "1", strand: "Spatial Thinking", code: "1-ST-K1", description: "Identify where your family lives" },
  { subject: "social-studies", grade_level: "1", strand: "Spatial Thinking", code: "1-ST-S1", description: "Locate your home in relation to your closest neighbours" },
  { subject: "social-studies", grade_level: "1", strand: "Spatial Thinking", code: "1-ST-V1", description: "Appreciate that your family is part of a neighbourhood" },
  { subject: "social-studies", grade_level: "1", strand: "Spatial Thinking", code: "1-ST-K2", description: "Identify basic terms to describe relative location in your local environment such as near and far" },
  { subject: "social-studies", grade_level: "1", strand: "Spatial Thinking", code: "1-ST-S2", description: "Distinguish between and show near and far in your immediate environment" },
  { subject: "social-studies", grade_level: "1", strand: "Spatial Thinking", code: "1-ST-S3", description: "Use relative location to describe places in their neighbourhood" },
  { subject: "social-studies", grade_level: "1", strand: "Spatial Thinking", code: "1-ST-V2", description: "Recognize the importance of being able to describe relative location for finding places and knowing your way around your immediate environment" },
  { subject: "social-studies", grade_level: "1", strand: "Spatial Thinking", code: "1-ST-V3", description: "Appreciate that relative location can influence activities that families engage in" },
  { subject: "social-studies", grade_level: "1", strand: "Spatial Thinking", code: "1-ST-K3", description: "Name and illustrate the four cardinal directions" },
  { subject: "social-studies", grade_level: "1", strand: "Spatial Thinking", code: "1-ST-S4", description: "Describe the location of your home using cardinal directions in relation to natural and built features in the community" },
  { subject: "social-studies", grade_level: "1", strand: "Spatial Thinking", code: "1-ST-V4", description: "Appreciate the value of directions for finding your way from one location to another" },
  { subject: "social-studies", grade_level: "1", strand: "Spatial Thinking", code: "1-ST-K4", description: "List the activities that you and your family engage in because of where you live" },
  { subject: "social-studies", grade_level: "1", strand: "Spatial Thinking", code: "1-ST-S5", description: "Classify family activities as having a positive or negative impact on the neighbourhood" },
  { subject: "social-studies", grade_level: "1", strand: "Spatial Thinking", code: "1-ST-V5", description: "Recognize that where we live influences how our families live and that the things we do, have an impact on our neighbourhood" },
  { subject: "social-studies", grade_level: "1", strand: "Spatial Thinking", code: "1-ST-K5", description: "Identify natural hazards such as hurricanes, tsunamis, volcanic eruptions, earthquakes which may pose a threat to your family because of where you live" },
  { subject: "social-studies", grade_level: "1", strand: "Spatial Thinking", code: "1-ST-S6", description: "Demonstrate how to follow evacuation procedures in your school" },
  { subject: "social-studies", grade_level: "1", strand: "Spatial Thinking", code: "1-ST-V6", description: "Respect the dangers posed by natural disasters" },

  // Economic Decision Making - Grade 1
  { subject: "social-studies", grade_level: "1", strand: "Economic Decision Making", code: "1-EDM-K1", description: "Identify basic human needs" },
  { subject: "social-studies", grade_level: "1", strand: "Economic Decision Making", code: "1-EDM-S1", description: "Distinguish between our basic needs and our wants" },
  { subject: "social-studies", grade_level: "1", strand: "Economic Decision Making", code: "1-EDM-V1", description: "Appreciate the difference between needs and wants" },
  { subject: "social-studies", grade_level: "1", strand: "Economic Decision Making", code: "1-EDM-K2", description: "Understand that we meet most of our needs and wants through goods and services" },
  { subject: "social-studies", grade_level: "1", strand: "Economic Decision Making", code: "1-EDM-S2", description: "Categorise our needs and wants as goods or services" },
  { subject: "social-studies", grade_level: "1", strand: "Economic Decision Making", code: "1-EDM-V2", description: "Appreciate that goods and services are necessary to meet our needs and wants" },
  { subject: "social-studies", grade_level: "1", strand: "Economic Decision Making", code: "1-EDM-K3", description: "Identify things in the environment that we use" },
  { subject: "social-studies", grade_level: "1", strand: "Economic Decision Making", code: "1-EDM-S3", description: "Discuss how we use things in the environment" },
  { subject: "social-studies", grade_level: "1", strand: "Economic Decision Making", code: "1-EDM-V3", description: "Appreciate that the environment can be used to provide our needs and wants" },
  { subject: "social-studies", grade_level: "1", strand: "Economic Decision Making", code: "1-EDM-K4", description: "Understand the various forms of transportation in your local environment" },
  { subject: "social-studies", grade_level: "1", strand: "Economic Decision Making", code: "1-EDM-S4", description: "Distinguish different forms of transportation and their benefits and limitations" },
  { subject: "social-studies", grade_level: "1", strand: "Economic Decision Making", code: "1-EDM-V4", description: "Appreciate the importance of exercising safety around transportation" },

  // --- GRADE 2 SOCIAL STUDIES ---
  
  // Historical and Cultural Thinking - Grade 2
  { subject: "social-studies", grade_level: "2", strand: "Historical-Cultural Thinking", code: "2-HCT-K1", description: "Identify the early groups of people who settled in our community and explain why and how they came" },
  { subject: "social-studies", grade_level: "2", strand: "Historical-Cultural Thinking", code: "2-HCT-S1", description: "Identify on a map the locations from which the early people that settled in our community came" },
  { subject: "social-studies", grade_level: "2", strand: "Historical-Cultural Thinking", code: "2-HCT-V1", description: "Recognize that the community is made up of families of different ethnic origins" },
  { subject: "social-studies", grade_level: "2", strand: "Historical-Cultural Thinking", code: "2-HCT-K2", description: "Know that family relationships can be represented on a family tree" },
  { subject: "social-studies", grade_level: "2", strand: "Historical-Cultural Thinking", code: "2-HCT-S2", description: "Represent relationships of families on a simple family tree" },
  { subject: "social-studies", grade_level: "2", strand: "Historical-Cultural Thinking", code: "2-HCT-V2", description: "Appreciate that our family tree is made up of a diverse range of people who share a common heritage" },
  { subject: "social-studies", grade_level: "2", strand: "Historical-Cultural Thinking", code: "2-HCT-K3", description: "State the ways individuals and families share positive human interactions with others" },
  { subject: "social-studies", grade_level: "2", strand: "Historical-Cultural Thinking", code: "2-HCT-S3", description: "Investigate how families in various communities fulfill their need for interaction" },
  { subject: "social-studies", grade_level: "2", strand: "Historical-Cultural Thinking", code: "2-HCT-V3", description: "Appreciate that there are diverse ways that people fulfill their need for human interaction" },
  { subject: "social-studies", grade_level: "2", strand: "Historical-Cultural Thinking", code: "2-HCT-K4", description: "Describe occasions when people in the community come together to share" },
  { subject: "social-studies", grade_level: "2", strand: "Historical-Cultural Thinking", code: "2-HCT-S4", description: "Practice caring for one another in families, classrooms, and communities" },
  { subject: "social-studies", grade_level: "2", strand: "Historical-Cultural Thinking", code: "2-HCT-V4", description: "Appreciate the value of community members supporting one another in times of celebrations, grief, and need" },
  { subject: "social-studies", grade_level: "2", strand: "Historical-Cultural Thinking", code: "2-HCT-K5", description: "State examples of festivals celebrated in their country" },
  { subject: "social-studies", grade_level: "2", strand: "Historical-Cultural Thinking", code: "2-HCT-S5", description: "Discuss the reasons for celebrating various festivals in their country" },
  { subject: "social-studies", grade_level: "2", strand: "Historical-Cultural Thinking", code: "2-HCT-V5", description: "Appreciate that festivals can be an important way to build community, national cohesion and pride" },
  { subject: "social-studies", grade_level: "2", strand: "Historical-Cultural Thinking", code: "2-HCT-K6", description: "List examples of the oldest historical sites in our community" },
  { subject: "social-studies", grade_level: "2", strand: "Historical-Cultural Thinking", code: "2-HCT-S6", description: "Investigate the location, the age, significance of these historical sites" },
  { subject: "social-studies", grade_level: "2", strand: "Historical-Cultural Thinking", code: "2-HCT-V6", description: "Appreciate that historical sites can help us understand our identity" },

  // Spatial Thinking - Grade 2
  { subject: "social-studies", grade_level: "2", strand: "Spatial Thinking", code: "2-ST-K1", description: "State and label the four cardinal directions" },
  { subject: "social-studies", grade_level: "2", strand: "Spatial Thinking", code: "2-ST-S1", description: "Give directions to your community in relation to other districts or parishes using cardinal direction" },
  { subject: "social-studies", grade_level: "2", strand: "Spatial Thinking", code: "2-ST-V1", description: "Appreciate the value of directions for finding your way" },
  { subject: "social-studies", grade_level: "2", strand: "Spatial Thinking", code: "2-ST-K2", description: "Describe the important natural and built features of your community" },
  { subject: "social-studies", grade_level: "2", strand: "Spatial Thinking", code: "2-ST-S2", description: "Observe and illustrate the various natural and built features of your community" },
  { subject: "social-studies", grade_level: "2", strand: "Spatial Thinking", code: "2-ST-V2", description: "Appreciate the unique landmark features of your community that you find interesting" },
  { subject: "social-studies", grade_level: "2", strand: "Spatial Thinking", code: "2-ST-K3", description: "Identify the basic features of a map including title, key, compass rose, border" },
  { subject: "social-studies", grade_level: "2", strand: "Spatial Thinking", code: "2-ST-S3", description: "Draw a map of your community which includes basic features" },
  { subject: "social-studies", grade_level: "2", strand: "Spatial Thinking", code: "2-ST-V3", description: "Appreciate that a map can be used to show our important landmarks in the community" },
  { subject: "social-studies", grade_level: "2", strand: "Spatial Thinking", code: "2-ST-K4", description: "Identify some of the plants and animals in your community" },
  { subject: "social-studies", grade_level: "2", strand: "Spatial Thinking", code: "2-ST-S4", description: "Classify the animals according to wild, domestic, food or pets" },
  { subject: "social-studies", grade_level: "2", strand: "Spatial Thinking", code: "2-ST-K5", description: "Identify some of the plants in your community" },
  { subject: "social-studies", grade_level: "2", strand: "Spatial Thinking", code: "2-ST-S5", description: "Classify the plants according to wild, domestic and uses such as food, medicine" },
  { subject: "social-studies", grade_level: "2", strand: "Spatial Thinking", code: "2-ST-V4", description: "Appreciate the importance of caring for/protecting the plants and animals in our community" },
  { subject: "social-studies", grade_level: "2", strand: "Spatial Thinking", code: "2-ST-K6", description: "Describe weather patterns in your community" },
  { subject: "social-studies", grade_level: "2", strand: "Spatial Thinking", code: "2-ST-S6", description: "Assess the impact of weather conditions on the community at different times of the year" },
  { subject: "social-studies", grade_level: "2", strand: "Spatial Thinking", code: "2-ST-V5", description: "Appreciate how the weather affects the environment" },
  { subject: "social-studies", grade_level: "2", strand: "Spatial Thinking", code: "2-ST-K7", description: "Identify the natural environment as a resource" },
  { subject: "social-studies", grade_level: "2", strand: "Spatial Thinking", code: "2-ST-S7", description: "Investigate how resources found in the local environment are useful to us" },
  { subject: "social-studies", grade_level: "2", strand: "Spatial Thinking", code: "2-ST-V6", description: "Value the importance of the local environment and its link to human survival" },
  { subject: "social-studies", grade_level: "2", strand: "Spatial Thinking", code: "2-ST-K8", description: "Identify ways in which people harm the environment" },
  { subject: "social-studies", grade_level: "2", strand: "Spatial Thinking", code: "2-ST-S8", description: "Gather information on the ways we harm and protect our environment" },
  { subject: "social-studies", grade_level: "2", strand: "Spatial Thinking", code: "2-ST-V7", description: "Appreciate each other's role in caring for the environment" },

  // Civic Participation - Grade 2
  { subject: "social-studies", grade_level: "2", strand: "Civic Participation", code: "2-CP-K1", description: "Identify features that make a community unsafe and healthy" },
  { subject: "social-studies", grade_level: "2", strand: "Civic Participation", code: "2-CP-S1", description: "Engage in actions to improve one's community" },
  { subject: "social-studies", grade_level: "2", strand: "Civic Participation", code: "2-CP-V1", description: "Appreciate the positive benefits of helping to keep their communities safe and healthy" },
  { subject: "social-studies", grade_level: "2", strand: "Civic Participation", code: "2-CP-K2", description: "Identify examples of conflict in our communities and neighbourhoods" },
  { subject: "social-studies", grade_level: "2", strand: "Civic Participation", code: "2-CP-S2", description: "Role play ways to resolve differences and arguments" },
  { subject: "social-studies", grade_level: "2", strand: "Civic Participation", code: "2-CP-V2", description: "Appreciate the role of police and other community helpers in dealing with conflict" },
  { subject: "social-studies", grade_level: "2", strand: "Civic Participation", code: "2-CP-K3", description: "Describe how our local community is governed" },
  { subject: "social-studies", grade_level: "2", strand: "Civic Participation", code: "2-CP-S3", description: "Gather information about different local services that are organized at our community level" },
  { subject: "social-studies", grade_level: "2", strand: "Civic Participation", code: "2-CP-V3", description: "Appreciate the advantages of local community involvement to assist families to meet their needs" },
  { subject: "social-studies", grade_level: "2", strand: "Civic Participation", code: "2-CP-K4", description: "List possible causes of accidents and injuries at home and in our community" },
  { subject: "social-studies", grade_level: "2", strand: "Civic Participation", code: "2-CP-S4", description: "Investigate how community workers help keep families and children safe" },
  { subject: "social-studies", grade_level: "2", strand: "Civic Participation", code: "2-CP-V4", description: "Appreciate the importance of following safety procedures" },
  { subject: "social-studies", grade_level: "2", strand: "Civic Participation", code: "2-CP-K5", description: "Recognize that children have the right to be safe in their community" },
  { subject: "social-studies", grade_level: "2", strand: "Civic Participation", code: "2-CP-S5", description: "Describe ways that their community helps ensure that its members are safe" },
  { subject: "social-studies", grade_level: "2", strand: "Civic Participation", code: "2-CP-V5", description: "Appreciate that family and community members are responsible for helping children feel safe and cared for" },

  // Economic Decision Making - Grade 2
  { subject: "social-studies", grade_level: "2", strand: "Economic Decision Making", code: "2-EDM-K1", description: "Identify people in the community that are resource persons" },
  { subject: "social-studies", grade_level: "2", strand: "Economic Decision Making", code: "2-EDM-S1", description: "Categorize human and natural resources in your local environment" },
  { subject: "social-studies", grade_level: "2", strand: "Economic Decision Making", code: "2-EDM-V1", description: "Appreciate the importance of respecting the value of our human and natural resources for meeting our basic needs" },
  { subject: "social-studies", grade_level: "2", strand: "Economic Decision Making", code: "2-EDM-K2", description: "Describe different uses of land in your community" },
  { subject: "social-studies", grade_level: "2", strand: "Economic Decision Making", code: "2-EDM-S2", description: "Explain how land use affects the environment" },
  { subject: "social-studies", grade_level: "2", strand: "Economic Decision Making", code: "2-EDM-V2", description: "Value the need to treat land with respect" },
  { subject: "social-studies", grade_level: "2", strand: "Economic Decision Making", code: "2-EDM-K3", description: "Identify some of the people who live and work in the community" },
  { subject: "social-studies", grade_level: "2", strand: "Economic Decision Making", code: "2-EDM-S3", description: "Draw pictures to illustrate the roles of workers in the community" },
  { subject: "social-studies", grade_level: "2", strand: "Economic Decision Making", code: "2-EDM-V3", description: "Appreciate the diverse range of people who make up my community" },
  { subject: "social-studies", grade_level: "2", strand: "Economic Decision Making", code: "2-EDM-K4", description: "Identify goods and services available in my community" },
  { subject: "social-studies", grade_level: "2", strand: "Economic Decision Making", code: "2-EDM-S4", description: "Classify workers who provide goods and services" },
  { subject: "social-studies", grade_level: "2", strand: "Economic Decision Making", code: "2-EDM-V4", description: "Appreciate that goods and services provide both needs and wants" },
  { subject: "social-studies", grade_level: "2", strand: "Economic Decision Making", code: "2-EDM-K5", description: "Identify types of jobs in the community" },
  { subject: "social-studies", grade_level: "2", strand: "Economic Decision Making", code: "2-EDM-S5", description: "Compare the types of jobs traditionally done by males and females or both and discuss how this has changed" },
  { subject: "social-studies", grade_level: "2", strand: "Economic Decision Making", code: "2-EDM-V5", description: "Appreciate that jobs can be done by both men and women" },
  { subject: "social-studies", grade_level: "2", strand: "Economic Decision Making", code: "2-EDM-K6", description: "Understand that rules help workers in the workplace" },
  { subject: "social-studies", grade_level: "2", strand: "Economic Decision Making", code: "2-EDM-S6", description: "Recognize how to safely follow appropriate rules when carrying out jobs" },
  { subject: "social-studies", grade_level: "2", strand: "Economic Decision Making", code: "2-EDM-V6", description: "Appreciate the importance of rules and laws in protecting our rights" },

  // --- GRADE 3 SOCIAL STUDIES ---
  
  // Historical and Cultural Thinking - Grade 3
  { subject: "social-studies", grade_level: "3", strand: "Historical-Cultural Thinking", code: "3-HCT-K1", description: "Identify the earliest inhabitants of our island" },
  { subject: "social-studies", grade_level: "3", strand: "Historical-Cultural Thinking", code: "3-HCT-S1", description: "Use digital tools to investigate the evidence of early settlements of Indigenous peoples" },
  { subject: "social-studies", grade_level: "3", strand: "Historical-Cultural Thinking", code: "3-HCT-V1", description: "Appreciate Indigenous cultures and respect their views of the environment and society" },
  { subject: "social-studies", grade_level: "3", strand: "Historical-Cultural Thinking", code: "3-HCT-K2", description: "State the origins of the various peoples of our island/territory and discuss the reasons why they came" },
  { subject: "social-studies", grade_level: "3", strand: "Historical-Cultural Thinking", code: "3-HCT-S2", description: "Locate the geographic origins of our various peoples" },
  { subject: "social-studies", grade_level: "3", strand: "Historical-Cultural Thinking", code: "3-HCT-V2", description: "Recognise that migrations to our region had both positive and negative consequences" },
  { subject: "social-studies", grade_level: "3", strand: "Historical-Cultural Thinking", code: "3-HCT-K3", description: "Discuss key features and aspects of our island's culture and heritage that shaped our identity" },
  { subject: "social-studies", grade_level: "3", strand: "Historical-Cultural Thinking", code: "3-HCT-S3", description: "Present information on special cultural events, activities or practices you participate in" },
  { subject: "social-studies", grade_level: "3", strand: "Historical-Cultural Thinking", code: "3-HCT-V3", description: "Develop interest in practicing aspects of our culture" },
  { subject: "social-studies", grade_level: "3", strand: "Historical-Cultural Thinking", code: "3-HCT-K4", description: "State the origins of our local island dialect(s)" },
  { subject: "social-studies", grade_level: "3", strand: "Historical-Cultural Thinking", code: "3-HCT-S4", description: "Communicate with confidence and competence for different purposes with different dialects" },
  { subject: "social-studies", grade_level: "3", strand: "Historical-Cultural Thinking", code: "3-HCT-V4", description: "Respect the value of local island dialects in shaping and defining our cultural identity as a people" },
  { subject: "social-studies", grade_level: "3", strand: "Historical-Cultural Thinking", code: "3-HCT-K5", description: "Describe the cultural contributions of various peoples to our food, religion, dress, arts, language, and economy" },
  { subject: "social-studies", grade_level: "3", strand: "Historical-Cultural Thinking", code: "3-HCT-S5", description: "Gather information from various sources and represent it to show evidence of the origins of ethnic contributions to our cultural heritage and national identity" },
  { subject: "social-studies", grade_level: "3", strand: "Historical-Cultural Thinking", code: "3-HCT-V5", description: "Show recognition of the contributions made by various peoples to our cultural heritage and national identity" },
  { subject: "social-studies", grade_level: "3", strand: "Historical-Cultural Thinking", code: "3-HCT-K6", description: "Identify ways our island traditional cultural music and dance have evolved over time" },
  { subject: "social-studies", grade_level: "3", strand: "Historical-Cultural Thinking", code: "3-HCT-S6", description: "Explore how traditional cultural music and dance have changed over time" },
  { subject: "social-studies", grade_level: "3", strand: "Historical-Cultural Thinking", code: "3-HCT-V6", description: "Appreciate the contribution of specific individuals to shaping our cultural development over time" },

  // Spatial Thinking - Grade 3
  { subject: "social-studies", grade_level: "3", strand: "Spatial Thinking", code: "3-ST-K1", description: "State the location of our island/country/or territory in relation to their nearest neighbours in the Caribbean region" },
  { subject: "social-studies", grade_level: "3", strand: "Spatial Thinking", code: "3-ST-S1", description: "Locate and label your island on a map of the Caribbean" },
  { subject: "social-studies", grade_level: "3", strand: "Spatial Thinking", code: "3-ST-V1", description: "Recognize that our island/territory is connected geographically to the surrounding Caribbean region" },
  { subject: "social-studies", grade_level: "3", strand: "Spatial Thinking", code: "3-ST-K2", description: "Name the major water bodies that surround their island and the rest of Caribbean region" },
  { subject: "social-studies", grade_level: "3", strand: "Spatial Thinking", code: "3-ST-S2", description: "Locate and label the major water bodies on a map of the Caribbean" },
  { subject: "social-studies", grade_level: "3", strand: "Spatial Thinking", code: "3-ST-V2", description: "Recognize that our surrounding seas and ocean have connected us as diverse Caribbean peoples" },
  { subject: "social-studies", grade_level: "3", strand: "Spatial Thinking", code: "3-ST-K3", description: "Explain the importance of our water bodies (seas, oceans, lagoons, and rivers) to our people" },
  { subject: "social-studies", grade_level: "3", strand: "Spatial Thinking", code: "3-ST-S3", description: "Investigate how our human activities affect these water bodies" },
  { subject: "social-studies", grade_level: "3", strand: "Spatial Thinking", code: "3-ST-V3", description: "Appreciate the need for responsible actions to protect our water bodies" },
  { subject: "social-studies", grade_level: "3", strand: "Spatial Thinking", code: "3-ST-K4", description: "Describe the seasons on your islands and describe how they affect our daily lives" },
  { subject: "social-studies", grade_level: "3", strand: "Spatial Thinking", code: "3-ST-S4", description: "Make appropriate decisions for various weather conditions" },
  { subject: "social-studies", grade_level: "3", strand: "Spatial Thinking", code: "3-ST-V4", description: "Appreciate the benefits and drawbacks of each season for our environment" },
  { subject: "social-studies", grade_level: "3", strand: "Spatial Thinking", code: "3-ST-K5", description: "Recognize that the location of islands makes them prone to natural hazards" },
  { subject: "social-studies", grade_level: "3", strand: "Spatial Thinking", code: "3-ST-S5", description: "Examine some examples of extreme natural hazards that affect our islands" },
  { subject: "social-studies", grade_level: "3", strand: "Spatial Thinking", code: "3-ST-V5", description: "Appreciate that we need to be aware of ways to keep safe during natural hazards" },
  { subject: "social-studies", grade_level: "3", strand: "Spatial Thinking", code: "3-ST-K6", description: "Describe appropriate preparations that need to be made for various natural hazards" },
  { subject: "social-studies", grade_level: "3", strand: "Spatial Thinking", code: "3-ST-S6", description: "Create a simple family preparation plan for a selected natural hazard:(Necessities, safe places, contacts)" },
  { subject: "social-studies", grade_level: "3", strand: "Spatial Thinking", code: "3-ST-V6", description: "Appreciate the need to minimize risk in times natural hazards" },

  // Civic Participation - Grade 3
  { subject: "social-studies", grade_level: "3", strand: "Civic Participation", code: "3-CP-K1", description: "Identify the people who contributed to the creation of some of our national symbols" },
  { subject: "social-studies", grade_level: "3", strand: "Civic Participation", code: "3-CP-K2", description: "Explain why we play, sing, recite our national anthem and pledge" },
  { subject: "social-studies", grade_level: "3", strand: "Civic Participation", code: "3-CP-S1", description: "Sing and recite our national anthem and pledge" },
  { subject: "social-studies", grade_level: "3", strand: "Civic Participation", code: "3-CP-V1", description: "Demonstrate appropriate behaviour when singing/playing the National Anthem" },
  { subject: "social-studies", grade_level: "3", strand: "Civic Participation", code: "3-CP-K3", description: "Recognize that our national bird and tree help us identify important features of our natural environment" },
  { subject: "social-studies", grade_level: "3", strand: "Civic Participation", code: "3-CP-S2", description: "Demonstrate the ways that we show respect for our national bird, tree and flower" },
  { subject: "social-studies", grade_level: "3", strand: "Civic Participation", code: "3-CP-V2", description: "Appreciate that our national bird, tree and flower are a precious part of our environment that needs to be protected" },
  { subject: "social-studies", grade_level: "3", strand: "Civic Participation", code: "3-CP-K4", description: "Name the national heroes in our country" },
  { subject: "social-studies", grade_level: "3", strand: "Civic Participation", code: "3-CP-S3", description: "Create profiles about these national heroes" },
  { subject: "social-studies", grade_level: "3", strand: "Civic Participation", code: "3-CP-V3", description: "Show respect for the contribution made by national heroes that help to improve the lives of our people" },

  // Economic Decision Making - Grade 3
  { subject: "social-studies", grade_level: "3", strand: "Economic Decision Making", code: "3-EDM-K1", description: "Identify the major economic activities on our island and their link to natural resources" },
  { subject: "social-studies", grade_level: "3", strand: "Economic Decision Making", code: "3-EDM-S1", description: "Assess the direct and in-direct impact of these economic activities on your family's well being" },
  { subject: "social-studies", grade_level: "3", strand: "Economic Decision Making", code: "3-EDM-V1", description: "Appreciate that major economic activities of agriculture and tourism are linked to the natural resources of our island" },
  { subject: "social-studies", grade_level: "3", strand: "Economic Decision Making", code: "3-EDM-K2", description: "Explain the relationship between the environment and our culture" },
  { subject: "social-studies", grade_level: "3", strand: "Economic Decision Making", code: "3-EDM-S2", description: "Explore the ways in which our people can earn a living through culture" },
  { subject: "social-studies", grade_level: "3", strand: "Economic Decision Making", code: "3-EDM-V2", description: "Appreciate how culture shapes our identity and economy" },
  { subject: "social-studies", grade_level: "3", strand: "Economic Decision Making", code: "3-EDM-K3", description: "Define the term population and understand its significance in the context of our region" },
  { subject: "social-studies", grade_level: "3", strand: "Economic Decision Making", code: "3-EDM-S3", description: "Explain how changes in population can affect our region's resources and services" },
  { subject: "social-studies", grade_level: "3", strand: "Economic Decision Making", code: "3-EDM-V3", description: "Evaluate the potential consequences of a growing or declining population on our region's economy, infrastructure, and community" },
  { subject: "social-studies", grade_level: "3", strand: "Economic Decision Making", code: "3-EDM-K4", description: "Distinguish between immigration and emigration" },
  { subject: "social-studies", grade_level: "3", strand: "Economic Decision Making", code: "3-EDM-S4", description: "Analyze the effects of migration on the region, (Positive and Negative)" },
  { subject: "social-studies", grade_level: "3", strand: "Economic Decision Making", code: "3-EDM-V4", description: "Recognizing the importance of respecting and accepting individuals from diverse backgrounds, understanding their contributions to the community" },

  // --- GRADE 4 SOCIAL STUDIES ---
  
  // Historical and Cultural Thinking - Grade 4
  { subject: "social-studies", grade_level: "4", strand: "Historical-Cultural Thinking", code: "4-HCT-K1", description: "Describe the basic economic and social life of the Indigenous people of the Caribbean before contact with Europeans" },
  { subject: "social-studies", grade_level: "4", strand: "Historical-Cultural Thinking", code: "4-HCT-S1", description: "Chart the location where Indigenous people of the Caribbean were living before contact with Europeans" },
  { subject: "social-studies", grade_level: "4", strand: "Historical-Cultural Thinking", code: "4-HCT-V1", description: "Appreciate that the Indigenous people of the Caribbean had flourishing societies and economies before contact with Europeans" },
  { subject: "social-studies", grade_level: "4", strand: "Historical-Cultural Thinking", code: "4-HCT-K2", description: "Identify the European groups that came to the Caribbean in the 15th - 16th centuries and state reasons why they came" },
  { subject: "social-studies", grade_level: "4", strand: "Historical-Cultural Thinking", code: "4-HCT-S2", description: "Categorise the impact of Europeans' colonisation on the lifestyle of Indigenous people and Europeans in the Caribbean" },
  { subject: "social-studies", grade_level: "4", strand: "Historical-Cultural Thinking", code: "4-HCT-V2", description: "Develop an awareness that colonisation had many lasting negative consequences for the Indigenous people of the Caribbean" },
  { subject: "social-studies", grade_level: "4", strand: "Historical-Cultural Thinking", code: "4-HCT-K3", description: "Identify ways in which Indigenous people resisted European colonisation" },
  { subject: "social-studies", grade_level: "4", strand: "Historical-Cultural Thinking", code: "4-HCT-S3", description: "Explain the reasons why Indigenous peoples resisted colonisation" },
  { subject: "social-studies", grade_level: "4", strand: "Historical-Cultural Thinking", code: "4-HCT-V3", description: "Appreciate that Indigenous people actively resisted colonisation" },
  { subject: "social-studies", grade_level: "4", strand: "Historical-Cultural Thinking", code: "4-HCT-K4", description: "Describe aspects of Indigenous people's lifestyle practised in the Caribbean today" },
  { subject: "social-studies", grade_level: "4", strand: "Historical-Cultural Thinking", code: "4-HCT-S4", description: "Locate where the Indigenous people of the Lesser Antilles are living today" },
  { subject: "social-studies", grade_level: "4", strand: "Historical-Cultural Thinking", code: "4-HCT-V4", description: "Appreciate that the Indigenous people of the Caribbean continue to have unique and vibrant lifestyles" },

  // Spatial Thinking - Grade 4
  { subject: "social-studies", grade_level: "4", strand: "Spatial Thinking", code: "4-ST-S1", description: "Locate the island where you live on maps / globes using lines of latitude and longitude" },
  { subject: "social-studies", grade_level: "4", strand: "Spatial Thinking", code: "4-ST-K1", description: "Describe our island's location in relation to the wider Caribbean" },
  { subject: "social-studies", grade_level: "4", strand: "Spatial Thinking", code: "4-ST-V1", description: "Appreciate the advantages of maps and technology such as Google Earth in locating and describing our island's geography" },
  { subject: "social-studies", grade_level: "4", strand: "Spatial Thinking", code: "4-ST-K2", description: "Identify the geographic divisions of the country" },
  { subject: "social-studies", grade_level: "4", strand: "Spatial Thinking", code: "4-ST-S2", description: "Label a map of the country to identify the geographic divisions" },
  { subject: "social-studies", grade_level: "4", strand: "Spatial Thinking", code: "4-ST-K3", description: "Define and classify the major physical features of our island" },
  { subject: "social-studies", grade_level: "4", strand: "Spatial Thinking", code: "4-ST-S3", description: "Observe the differences between various land and water features of our island" },
  { subject: "social-studies", grade_level: "4", strand: "Spatial Thinking", code: "4-ST-V2", description: "Appreciate that our island has natural geographic features that are environmentally vulnerable" },
  { subject: "social-studies", grade_level: "4", strand: "Spatial Thinking", code: "4-ST-K4", description: "Describe the climate of our island(s)" },
  { subject: "social-studies", grade_level: "4", strand: "Spatial Thinking", code: "4-ST-S4", description: "Investigate the changes in climate" },
  { subject: "social-studies", grade_level: "4", strand: "Spatial Thinking", code: "4-ST-V3", description: "Appreciate that our climate has risks for our population" },
  { subject: "social-studies", grade_level: "4", strand: "Spatial Thinking", code: "4-ST-K5", description: "Identify significant weather events that have impacted the natural environment" },
  { subject: "social-studies", grade_level: "4", strand: "Spatial Thinking", code: "4-ST-S5", description: "Investigate the consequences of recent weather events on the built environment of your country" },
  { subject: "social-studies", grade_level: "4", strand: "Spatial Thinking", code: "4-ST-V4", description: "Appreciate the need to prepare for climate emergencies and actions that can be taken to lessen the effects of natural forces" },
  { subject: "social-studies", grade_level: "4", strand: "Spatial Thinking", code: "4-ST-K6", description: "Determine the scope and nature of the areas of your country that are parklands or natural reserves" },
  { subject: "social-studies", grade_level: "4", strand: "Spatial Thinking", code: "4-ST-S6", description: "Locate and describe the features and characteristics of these parklands or reserves" },
  { subject: "social-studies", grade_level: "4", strand: "Spatial Thinking", code: "4-ST-V5", description: "Appreciate the purpose of these areas and their significance for preserving flora, fauna, and human existence" },
  { subject: "social-studies", grade_level: "4", strand: "Spatial Thinking", code: "4-ST-K7", description: "Identify the sources and status of our island's fresh water" },
  { subject: "social-studies", grade_level: "4", strand: "Spatial Thinking", code: "4-ST-S7", description: "Determine the ways that you can help conserve and protect our local water sources" },
  { subject: "social-studies", grade_level: "4", strand: "Spatial Thinking", code: "4-ST-V6", description: "Appreciate the importance of protecting our fresh water sources" },
  { subject: "social-studies", grade_level: "4", strand: "Spatial Thinking", code: "4-ST-K8", description: "Explain the impact of human activity on the natural environment" },
  { subject: "social-studies", grade_level: "4", strand: "Spatial Thinking", code: "4-ST-S8", description: "Gather information from multiple sources to explain the impact of human activity on the natural environment" },
  { subject: "social-studies", grade_level: "4", strand: "Spatial Thinking", code: "4-ST-V7", description: "Appreciate that we can reduce the negative effects of human activity on our natural environment" },

  // Civic Participation - Grade 4
  { subject: "social-studies", grade_level: "4", strand: "Civic Participation", code: "4-CP-K1", description: "Identify ways in which communication technology has evolved over time" },
  { subject: "social-studies", grade_level: "4", strand: "Civic Participation", code: "4-CP-S1", description: "Create a timeline of changes in communications technology" },
  { subject: "social-studies", grade_level: "4", strand: "Civic Participation", code: "4-CP-V1", description: "Appreciate that improvements in technology have significantly impacted how people communicate with each other" },
  { subject: "social-studies", grade_level: "4", strand: "Civic Participation", code: "4-CP-K2", description: "Compare current forms of transportation used in our country to those used in the past" },
  { subject: "social-studies", grade_level: "4", strand: "Civic Participation", code: "4-CP-S2", description: "Investigate challenges in local transportation and predict possible future solutions to the transportation issues" },
  { subject: "social-studies", grade_level: "4", strand: "Civic Participation", code: "4-CP-V2", description: "Appreciate that efficient transportation has both positive and negative implications for our economy, environment, and health" },
  { subject: "social-studies", grade_level: "4", strand: "Civic Participation", code: "4-CP-K3", description: "List some of the major events in the political evolution of your country-territory" },
  { subject: "social-studies", grade_level: "4", strand: "Civic Participation", code: "4-CP-S3", description: "Show the sequence of political milestones on a timeline from colony to independence/semi-independence" },
  { subject: "social-studies", grade_level: "4", strand: "Civic Participation", code: "4-CP-V3", description: "Appreciate the importance of patriotism and the role of national leaders in achieving political change" },
  { subject: "social-studies", grade_level: "4", strand: "Civic Participation", code: "4-CP-K4", description: "Describe the type of government system in your country" },
  { subject: "social-studies", grade_level: "4", strand: "Civic Participation", code: "4-CP-V4", description: "Appreciate that the government system and structure in the country is influenced by the history of colonization" },
  { subject: "social-studies", grade_level: "4", strand: "Civic Participation", code: "4-CP-S4", description: "Investigate and outline the various purposes and responsibilities of your government" },
  { subject: "social-studies", grade_level: "4", strand: "Civic Participation", code: "4-CP-K5", description: "Explain what democracy is and share some examples" },
  { subject: "social-studies", grade_level: "4", strand: "Civic Participation", code: "4-CP-S5", description: "Demonstrate ways in which we can actively participate in our democracy" },
  { subject: "social-studies", grade_level: "4", strand: "Civic Participation", code: "4-CP-V5", description: "Appreciate the value of democracy for protecting our individual rights and freedom" },
  { subject: "social-studies", grade_level: "4", strand: "Civic Participation", code: "4-CP-K6", description: "Identify that there are political constituencies in our country" },
  { subject: "social-studies", grade_level: "4", strand: "Civic Participation", code: "4-CP-S6", description: "Locate the boundaries of the political constituency to which you belong" },
  { subject: "social-studies", grade_level: "4", strand: "Civic Participation", code: "4-CP-V6", description: "Appreciate the importance of these constituencies for ensuring local representation" },
  { subject: "social-studies", grade_level: "4", strand: "Civic Participation", code: "4-CP-K7", description: "Identify key figures who have made significant contributions to our national development" },
  { subject: "social-studies", grade_level: "4", strand: "Civic Participation", code: "4-CP-S7", description: "Develop criteria to justify determining who is a national hero/heroine" },
  { subject: "social-studies", grade_level: "4", strand: "Civic Participation", code: "4-CP-V7", description: "Appreciate the contribution of key figures to our national development" },
  { subject: "social-studies", grade_level: "4", strand: "Civic Participation", code: "4-CP-K8", description: "Explain our responsibilities to contribute to the development of the country" },
  { subject: "social-studies", grade_level: "4", strand: "Civic Participation", code: "4-CP-S8", description: "Display proper respectful behaviour towards others in the country" },
  { subject: "social-studies", grade_level: "4", strand: "Civic Participation", code: "4-CP-V8", description: "Appreciate that everyone has a responsibility to help develop the country" },

  // Economic Decision Making - Grade 4
  { subject: "social-studies", grade_level: "4", strand: "Economic Decision Making", code: "4-EDM-K1", description: "Identify how access to resources of our country have shaped the country's settlement location over time" },
  { subject: "social-studies", grade_level: "4", strand: "Economic Decision Making", code: "4-EDM-S1", description: "Compare past and present settlements using charts and maps, focusing on how resource use, technology, and environmental changes influence these patterns" },
  { subject: "social-studies", grade_level: "4", strand: "Economic Decision Making", code: "4-EDM-V1", description: "Appreciate that our resources impact where we settle" },
  { subject: "social-studies", grade_level: "4", strand: "Economic Decision Making", code: "4-EDM-K2", description: "Explain the major economic activities in your country and the importance of each to the economy" },
  { subject: "social-studies", grade_level: "4", strand: "Economic Decision Making", code: "4-EDM-S2", description: "Chart the types of jobs associated with various industries and predict future needs for workers" },
  { subject: "social-studies", grade_level: "4", strand: "Economic Decision Making", code: "4-EDM-V2", description: "Appreciate that our economic well-being is dependent on the sustainable use of our resources" },
  { subject: "social-studies", grade_level: "4", strand: "Economic Decision Making", code: "4-EDM-K3", description: "Identify major uses of land and their location, such as residential, industrial, agriculture, industry, tourism" },
  { subject: "social-studies", grade_level: "4", strand: "Economic Decision Making", code: "4-EDM-S3", description: "Map the location and distribution of various land uses in your country" },
  { subject: "social-studies", grade_level: "4", strand: "Economic Decision Making", code: "4-EDM-V3", description: "Appreciate that geographic factors influence how land is used" },
  { subject: "social-studies", grade_level: "4", strand: "Economic Decision Making", code: "4-EDM-K4", description: "Identify the diverse roles the ocean plays in supporting our country and understand the factors that threaten its health and sustainability" },
  { subject: "social-studies", grade_level: "4", strand: "Economic Decision Making", code: "4-EDM-S4", description: "Explore jobs and sectors in the blue economy, focusing on their impact on marine environments and how sustainable practices can reduce negative effects" },
  { subject: "social-studies", grade_level: "4", strand: "Economic Decision Making", code: "4-EDM-V4", description: "Appreciate how our economic activities impact the ocean which in turn impacts our economy" },
  { subject: "social-studies", grade_level: "4", strand: "Economic Decision Making", code: "4-EDM-K5", description: "Explore how environmental issues (eg. climate change, pollution, weather systems) have a negative impact on our economy" },
  { subject: "social-studies", grade_level: "4", strand: "Economic Decision Making", code: "4-EDM-S5", description: "Categorize the impacts of environmental issues on our economy" },
  { subject: "social-studies", grade_level: "4", strand: "Economic Decision Making", code: "4-EDM-V5", description: "Appreciate the ways that our country is protecting the coastal and marine environment and determine additional approaches that would enhance this" },
  { subject: "social-studies", grade_level: "4", strand: "Economic Decision Making", code: "4-EDM-K6", description: "Describe the ways that our country meets its energy needs for electricity and transportation and explore the use of renewable sources" },
  { subject: "social-studies", grade_level: "4", strand: "Economic Decision Making", code: "4-EDM-S6", description: "Assess the impact of our current energy sources on our local and global economy and environment" },
  { subject: "social-studies", grade_level: "4", strand: "Economic Decision Making", code: "4-EDM-V6", description: "Appreciate the value of renewable sources of energy (such as solar, wind, geothermal and hydroelectric) for our economy" },

  // --- GRADE 5 SOCIAL STUDIES ---
  
  // Historical and Cultural Thinking - Grade 5
  { subject: "social-studies", grade_level: "5", strand: "Historical-Cultural Thinking", code: "5-HCT-K1", description: "Explain the advantages and disadvantages of different forms of communication technology" },
  { subject: "social-studies", grade_level: "5", strand: "Historical-Cultural Thinking", code: "5-HCT-S1", description: "Determine the appropriate form of communication technology for different situations over time" },
  { subject: "social-studies", grade_level: "5", strand: "Historical-Cultural Thinking", code: "5-HCT-V1", description: "Recognise the need for proper etiquette when using social media" },
  { subject: "social-studies", grade_level: "5", strand: "Historical-Cultural Thinking", code: "5-HCT-K2", description: "Discuss the role of the media in our society. And outline how it evolved" },
  { subject: "social-studies", grade_level: "5", strand: "Historical-Cultural Thinking", code: "5-HCT-S2", description: "Demonstrate skills in determining facts and opinions when using various mediums of communication" },
  { subject: "social-studies", grade_level: "5", strand: "Historical-Cultural Thinking", code: "5-HCT-V2", description: "Appreciate the need to critically analyse information in the media" },
  { subject: "social-studies", grade_level: "5", strand: "Historical-Cultural Thinking", code: "5-HCT-K3", description: "Identify the settlement patterns of Europeans in the Lesser and Greater Antilles from the 1400s - 1800s" },
  { subject: "social-studies", grade_level: "5", strand: "Historical-Cultural Thinking", code: "5-HCT-S3", description: "Examine how the Caribbean was negatively and positively affected by European colonisation" },
  { subject: "social-studies", grade_level: "5", strand: "Historical-Cultural Thinking", code: "5-HCT-V3", description: "Recognize that colonisation had lasting effects on the Caribbean" },
  { subject: "social-studies", grade_level: "5", strand: "Historical-Cultural Thinking", code: "5-HCT-K4", description: "Explain why colonial powers brought enslaved Africans to the Caribbean in the 1600s-1800s" },
  { subject: "social-studies", grade_level: "5", strand: "Historical-Cultural Thinking", code: "5-HCT-S4", description: "Map the route of the triangular slave trade" },
  { subject: "social-studies", grade_level: "5", strand: "Historical-Cultural Thinking", code: "5-HCT-V4", description: "Develop an awareness of how the introduction of Africans as slaves has impacted our (economic, cultural, and political) history" },
  { subject: "social-studies", grade_level: "5", strand: "Historical-Cultural Thinking", code: "5-HCT-K5", description: "Identify the ways that enslaved Africans in the Caribbean resisted bondage" },
  { subject: "social-studies", grade_level: "5", strand: "Historical-Cultural Thinking", code: "5-HCT-S5", description: "Categorise the forms of resistance into everyday actions and armed rebellion" },
  { subject: "social-studies", grade_level: "5", strand: "Historical-Cultural Thinking", code: "5-HCT-V5", description: "Recognise that resistance to enslavement took great courage and required cooperation" },

  // Spatial Thinking - Grade 5
  { subject: "social-studies", grade_level: "5", strand: "Spatial Thinking", code: "5-ST-K1", description: "Describe various classifications of the Caribbean region such as Bahamas, Greater and Lesser Antilles, Windward and Leeward Islands, and Caribbean coastal areas (mainland territories)" },
  { subject: "social-studies", grade_level: "5", strand: "Spatial Thinking", code: "5-ST-S1", description: "Plot on a map linguistic, political, and economic information for each classification of the Caribbean" },
  { subject: "social-studies", grade_level: "5", strand: "Spatial Thinking", code: "5-ST-V1", description: "Appreciate that the location of the different islands/ territories brought about differing positive and negative consequences for their people" },
  { subject: "social-studies", grade_level: "5", strand: "Spatial Thinking", code: "5-ST-K2", description: "Describe the geographic differences between coral and volcanic island formations" },
  { subject: "social-studies", grade_level: "5", strand: "Spatial Thinking", code: "5-ST-S2", description: "Explain the impact of different island types on the economy and people's way of life" },
  { subject: "social-studies", grade_level: "5", strand: "Spatial Thinking", code: "5-ST-V2", description: "Appreciate that both volcanic and coral islands hold environmental and economic benefits and pose challenges" },
  { subject: "social-studies", grade_level: "5", strand: "Spatial Thinking", code: "5-ST-K3", description: "Identify popular/ major landmarks (natural and built) in the region" },
  { subject: "social-studies", grade_level: "5", strand: "Spatial Thinking", code: "5-ST-S3", description: "Map the location of important landmarks in the region" },
  { subject: "social-studies", grade_level: "5", strand: "Spatial Thinking", code: "5-ST-V3", description: "Appreciate the value (economic, cultural, historical) of familiar landmarks to the development of the region" },
  { subject: "social-studies", grade_level: "5", strand: "Spatial Thinking", code: "5-ST-K4", description: "Describe climatic differences across the Caribbean" },
  { subject: "social-studies", grade_level: "5", strand: "Spatial Thinking", code: "5-ST-S4", description: "Plot the coordinates of various islands and display differences in temperature and rainfall" },
  { subject: "social-studies", grade_level: "5", strand: "Spatial Thinking", code: "5-ST-V4", description: "Appreciate the importance of climate and climate changes for shaping the economy, and society, and policy decisions of various areas of the Caribbean" },
  { subject: "social-studies", grade_level: "5", strand: "Spatial Thinking", code: "5-ST-K5", description: "Identify how climatic similarities and severe weather events associated with climate change have fostered cooperation (E.g. Leeward islands and freshwater)" },
  { subject: "social-studies", grade_level: "5", strand: "Spatial Thinking", code: "5-ST-S5", description: "Plot major climatic disasters in the region over the past 50 years and note changes related to climate change and assess their negative effects" },
  { subject: "social-studies", grade_level: "5", strand: "Spatial Thinking", code: "5-ST-V5", description: "Assess the ways that Caribbean countries have assisted one another in recent climate disasters especially as it has related to climate change" },

  // Civic Participation - Grade 5
  { subject: "social-studies", grade_level: "5", strand: "Civic Participation", code: "5-CP-K1", description: "Identify the various other types of government systems in the region" },
  { subject: "social-studies", grade_level: "5", strand: "Civic Participation", code: "5-CP-S1", description: "Compare the structures of the main types of government systems in the region" },
  { subject: "social-studies", grade_level: "5", strand: "Civic Participation", code: "5-CP-V1", description: "Appreciate that democratic systems of government can have varying structures" },
  { subject: "social-studies", grade_level: "5", strand: "Civic Participation", code: "5-CP-K2", description: "State the reasons for regional integration with other Caribbean countries" },
  { subject: "social-studies", grade_level: "5", strand: "Civic Participation", code: "5-CP-S2", description: "Research different areas of integration in the Caribbean" },
  { subject: "social-studies", grade_level: "5", strand: "Civic Participation", code: "5-CP-V2", description: "Appreciate that there are both advantages and limitations of regional integration and interaction" },
  { subject: "social-studies", grade_level: "5", strand: "Civic Participation", code: "5-CP-K3", description: "List regional organizations that have shaped the Caribbean region and state the main objectives" },
  { subject: "social-studies", grade_level: "5", strand: "Civic Participation", code: "5-CP-S3", description: "Place the major developments of the OECS, CARICOM from 1958-present on a timeline" },
  { subject: "social-studies", grade_level: "5", strand: "Civic Participation", code: "5-CP-V3", description: "Appreciate the importance of regional cooperation that has resulted in many social and economic benefits" },

  // Economic Decision Making - Grade 5
  { subject: "social-studies", grade_level: "5", strand: "Economic Decision Making", code: "5-EDM-K1", description: "Identify the major Caribbean companies that trade and offer services to and with your country and describe what they do" },
  { subject: "social-studies", grade_level: "5", strand: "Economic Decision Making", code: "5-EDM-S1", description: "Investigate the level of foreign, regional, and national ownership of various goods and services imported and exported from your country" },
  { subject: "social-studies", grade_level: "5", strand: "Economic Decision Making", code: "5-EDM-V1", description: "Appreciate the importance of locally owned companies in the social and economic well-being of the region" },
  { subject: "social-studies", grade_level: "5", strand: "Economic Decision Making", code: "5-EDM-K2", description: "Identify the major connections that exist with other Caribbean countries within your family" },
  { subject: "social-studies", grade_level: "5", strand: "Economic Decision Making", code: "5-EDM-S2", description: "Map the geographic origins and current locations of people within families" },
  { subject: "social-studies", grade_level: "5", strand: "Economic Decision Making", code: "5-EDM-V2", description: "Appreciate that individuals have the right to freedom of movement for life and work in the Caribbean" },
  { subject: "social-studies", grade_level: "5", strand: "Economic Decision Making", code: "5-EDM-K3", description: "Analyse the cause and effects of the changing nature of Caribbean agriculture since 1900" },
  { subject: "social-studies", grade_level: "5", strand: "Economic Decision Making", code: "5-EDM-S3", description: "Chart the positive and negative impact of agricultural change on the environment, employment, and food security" },
  { subject: "social-studies", grade_level: "5", strand: "Economic Decision Making", code: "5-EDM-V3", description: "Appreciate that changes in the production and consumption of food in the Caribbean has resulted in positive and negative outcomes" },
  { subject: "social-studies", grade_level: "5", strand: "Economic Decision Making", code: "5-EDM-K4", description: "Explore the development of regional transportation and communication linkages in the Caribbean" },
  { subject: "social-studies", grade_level: "5", strand: "Economic Decision Making", code: "5-EDM-S4", description: "Trace the evolution of transportation and communication networks in the Caribbean region" },
  { subject: "social-studies", grade_level: "5", strand: "Economic Decision Making", code: "5-EDM-V4", description: "Appreciate that the development of transportation and communication networks has brought many benefits to the region while many challenges persist" },
  { subject: "social-studies", grade_level: "5", strand: "Economic Decision Making", code: "5-EDM-K5", description: "Identify how transportation and communication support trade between Caribbean countries" },
  { subject: "social-studies", grade_level: "5", strand: "Economic Decision Making", code: "5-EDM-S5", description: "Analyse how improvements in transportation and communication impact trade in the Caribbean" },
  { subject: "social-studies", grade_level: "5", strand: "Economic Decision Making", code: "5-EDM-V5", description: "Appreciate the role of transportation and communication in promoting economic stability and growth in the Caribbean" },
  { subject: "social-studies", grade_level: "5", strand: "Economic Decision Making", code: "5-EDM-K6", description: "Explain the economic benefits our country derives from relationships with our Caribbean neighbours" },
  { subject: "social-studies", grade_level: "5", strand: "Economic Decision Making", code: "5-EDM-S6", description: "Chart and compare positive and negative impacts of trade with other countries" },
  { subject: "social-studies", grade_level: "5", strand: "Economic Decision Making", code: "5-EDM-V6", description: "Appreciate that trade relationships can affect both the economy and the everyday lives of people in your country and neighbouring countries" },

  // --- GRADE 6 SOCIAL STUDIES ---
  
  // Historical and Cultural Thinking - Grade 6
  { subject: "social-studies", grade_level: "6", strand: "Historical-Cultural Thinking", code: "6-HCT-K1", description: "Identify the groups that worked to end slavery" },
  { subject: "social-studies", grade_level: "6", strand: "Historical-Cultural Thinking", code: "6-HCT-S1", description: "Build a timeline of major milestones in the struggle for emancipation" },
  { subject: "social-studies", grade_level: "6", strand: "Historical-Cultural Thinking", code: "6-HCT-V1", description: "Value the contribution of the enslaved people in resisting slavery and achieving emancipation" },
  { subject: "social-studies", grade_level: "6", strand: "Historical-Cultural Thinking", code: "6-HCT-K2", description: "Explain why East Indians were brought to the Caribbean" },
  { subject: "social-studies", grade_level: "6", strand: "Historical-Cultural Thinking", code: "6-HCT-S2", description: "Chart the route taken by East Indian Indentured Servants from their homeland to the Caribbean" },
  { subject: "social-studies", grade_level: "6", strand: "Historical-Cultural Thinking", code: "6-HCT-V2", description: "Appreciate the influences that East Indians have on Caribbean culture" },
  { subject: "social-studies", grade_level: "6", strand: "Historical-Cultural Thinking", code: "6-HCT-K3", description: "Describe common sport, culture and music activities that foster regional interactions" },
  { subject: "social-studies", grade_level: "6", strand: "Historical-Cultural Thinking", code: "6-HCT-S3", description: "Investigate local sport, culture or music figures that have influence beyond their home state" },
  { subject: "social-studies", grade_level: "6", strand: "Historical-Cultural Thinking", code: "6-HCT-V3", description: "Appreciate the value of arts and sports for shaping regional identity and pride" },
  { subject: "social-studies", grade_level: "6", strand: "Historical-Cultural Thinking", code: "6-HCT-K4", description: "Identify places where people from the Eastern Caribbean have migrated to" },
  { subject: "social-studies", grade_level: "6", strand: "Historical-Cultural Thinking", code: "6-HCT-S4", description: "Locate where people of the Caribbean migrate" },
  { subject: "social-studies", grade_level: "6", strand: "Historical-Cultural Thinking", code: "6-HCT-V4", description: "Appreciate reasons why people migrate from their country and its impact on them and their home country" },

  // Spatial Thinking - Grade 6
  { subject: "social-studies", grade_level: "6", strand: "Spatial Thinking", code: "6-ST-K1", description: "Name the continents and major water bodies of the world" },
  { subject: "social-studies", grade_level: "6", strand: "Spatial Thinking", code: "6-ST-S1", description: "Locate the continents and major water bodies of the world on a map or globe" },
  { subject: "social-studies", grade_level: "6", strand: "Spatial Thinking", code: "6-ST-V1", description: "Recognize that continents are made up of different countries" },
  { subject: "social-studies", grade_level: "6", strand: "Spatial Thinking", code: "6-ST-K2", description: "Identify the climatic regions of the world (tropical/torrid, temperate and polar/frigid) and describe their physical characteristics (e.g. deserts, tundra, forests, mountains, plains )" },
  { subject: "social-studies", grade_level: "6", strand: "Spatial Thinking", code: "6-ST-S2", description: "Illustrate how other regions are alike or different from our region" },
  { subject: "social-studies", grade_level: "6", strand: "Spatial Thinking", code: "6-ST-V2", description: "Appreciate that all regions of the world have unique natural features" },
  { subject: "social-studies", grade_level: "6", strand: "Spatial Thinking", code: "6-ST-K3", description: "Describe how people in the various regions live (housing, clothing, agriculture, social life, transportation)" },
  { subject: "social-studies", grade_level: "6", strand: "Spatial Thinking", code: "6-ST-S3", description: "Analyze the advantages and disadvantages of living in the various regions of the world" },
  { subject: "social-studies", grade_level: "6", strand: "Spatial Thinking", code: "6-ST-V3", description: "Appreciate that the major regions each have unique features that help determine how people live there" },
  { subject: "social-studies", grade_level: "6", strand: "Spatial Thinking", code: "6-ST-K4", description: "Describe the extreme climatic conditions of these regions and explain how they are managed- (e.g. snow, windstorms, tsunamis)" },
  { subject: "social-studies", grade_level: "6", strand: "Spatial Thinking", code: "6-ST-S4", description: "Analyse the impact of extreme climatic conditions on people and their environment" },
  { subject: "social-studies", grade_level: "6", strand: "Spatial Thinking", code: "6-ST-V4", description: "Appreciate that extreme climatic conditions have led to significant adaptations in the use of technology for securing food, shelter, clothing, and transportation" },

  // Civic Participation - Grade 6
  { subject: "social-studies", grade_level: "6", strand: "Civic Participation", code: "6-CP-K1", description: "Demonstrate understanding of factors which influence our national identity" },
  { subject: "social-studies", grade_level: "6", strand: "Civic Participation", code: "6-CP-S1", description: "Research an aspect of our national identity to show how it is influenced" },
  { subject: "social-studies", grade_level: "6", strand: "Civic Participation", code: "6-CP-V1", description: "Appreciate the diverse ways that citizens demonstrate pride for their national identity" },
  { subject: "social-studies", grade_level: "6", strand: "Civic Participation", code: "6-CP-K2", description: "Recognize that their country belongs to different international organisations" },
  { subject: "social-studies", grade_level: "6", strand: "Civic Participation", code: "6-CP-S2", description: "Examine the different international organizations to which their country belongs" },
  { subject: "social-studies", grade_level: "6", strand: "Civic Participation", code: "6-CP-V2", description: "Appreciate that cooperation is necessary for a country's development" },
  { subject: "social-studies", grade_level: "6", strand: "Civic Participation", code: "6-CP-K3", description: "Identify the major social issues in the Eastern Caribbean and the nearby world" },
  { subject: "social-studies", grade_level: "6", strand: "Civic Participation", code: "6-CP-S3", description: "Examine why these issues occur, how they can be solved, how they affect us in the Eastern Caribbean" },
  { subject: "social-studies", grade_level: "6", strand: "Civic Participation", code: "6-CP-V3", description: "Appreciate that people have differing views on how to address social issues" },
  { subject: "social-studies", grade_level: "6", strand: "Civic Participation", code: "6-CP-K4", description: "Discuss how different international organizations work to address social issues (WHO,FAO,IOM,UNICEF)" },
  { subject: "social-studies", grade_level: "6", strand: "Civic Participation", code: "6-CP-S4", description: "Categorize the advantages and disadvantages of being a member of an international organization" },
  { subject: "social-studies", grade_level: "6", strand: "Civic Participation", code: "6-CP-V4", description: "Appreciate the ways in which citizens of the Eastern Caribbean cooperate to do things for the country" },
  { subject: "social-studies", grade_level: "6", strand: "Civic Participation", code: "6-CP-K5", description: "Examine the role of citizens in the electoral process" },
  { subject: "social-studies", grade_level: "6", strand: "Civic Participation", code: "6-CP-S5", description: "Discuss the importance of participating in the electoral process as part of peoples' democratic rights" },
  { subject: "social-studies", grade_level: "6", strand: "Civic Participation", code: "6-CP-V5", description: "Value the importance of respecting person's democratic rights" },
  { subject: "social-studies", grade_level: "6", strand: "Civic Participation", code: "6-CP-K6", description: "Explain the role of the media in shaping our views of local and international events" },
  { subject: "social-studies", grade_level: "6", strand: "Civic Participation", code: "6-CP-S6", description: "Compare and analyze media sources from various countries to determine differing points of view about important events and issues" },
  { subject: "social-studies", grade_level: "6", strand: "Civic Participation", code: "6-CP-V6", description: "Appreciate that as global citizens we have a responsibility to verify the accuracy of the media we consume and to engage responsibly in its use" },

  // Economic Decision Making - Grade 6
  { subject: "social-studies", grade_level: "6", strand: "Economic Decision Making", code: "6-EDM-K1", description: "Know that as consumers we have rights and responsibilities" },
  { subject: "social-studies", grade_level: "6", strand: "Economic Decision Making", code: "6-EDM-S1", description: "Plan and develop budgets to guide our consumption" },
  { subject: "social-studies", grade_level: "6", strand: "Economic Decision Making", code: "6-EDM-V1", description: "Appreciate the value of making responsible decisions as consumers for shaping our economic and social well-being" },
  { subject: "social-studies", grade_level: "6", strand: "Economic Decision Making", code: "6-EDM-K2", description: "State the benefits derived from tourism for our country" },
  { subject: "social-studies", grade_level: "6", strand: "Economic Decision Making", code: "6-EDM-S2", description: "Critically assess the opportunities and challenges that tourism faces in our country" },
  { subject: "social-studies", grade_level: "6", strand: "Economic Decision Making", code: "6-EDM-V2", description: "Appreciate that there are positive and negative effects of tourism on our country" },
  { subject: "social-studies", grade_level: "6", strand: "Economic Decision Making", code: "6-EDM-K3", description: "Recognize the importance of good relations with the wider world" },
  { subject: "social-studies", grade_level: "6", strand: "Economic Decision Making", code: "6-EDM-S3", description: "Investigate the negative consequences of poor international relations with other countries" },
  { subject: "social-studies", grade_level: "6", strand: "Economic Decision Making", code: "6-EDM-V3", description: "Appreciate the importance of maintaining positive relations with others in the world" },
  { subject: "social-studies", grade_level: "6", strand: "Economic Decision Making", code: "6-EDM-K4", description: "Classify major resources in the world and compare with their country's resources" },
  { subject: "social-studies", grade_level: "6", strand: "Economic Decision Making", code: "6-EDM-S4", description: "Analyse reasons why some countries have limited resources" },
  { subject: "social-studies", grade_level: "6", strand: "Economic Decision Making", code: "6-EDM-V4", description: "Determine ways to utilize the world's resources better/fairly" },
  { subject: "social-studies", grade_level: "6", strand: "Economic Decision Making", code: "6-EDM-K5", description: "Identify the different types of economic activities in the world in which people are employed" },
  { subject: "social-studies", grade_level: "6", strand: "Economic Decision Making", code: "6-EDM-S5", description: "Compare some major industries of the world with those in their country" },
  { subject: "social-studies", grade_level: "6", strand: "Economic Decision Making", code: "6-EDM-V5", description: "Appreciate how the Caribbean contributes to world economic activities and vice versa" },

    // Kindergarten Language Arts
  // Listening and Speaking
  { subject: "language-arts", grade_level: "K", strand: "Listening and Speaking", code: "LSK.1.1", description: "Listen to music, conversation, and environmental sounds for personal enjoyment" },
  { subject: "language-arts", grade_level: "K", strand: "Listening and Speaking", code: "LSK.1.2", description: "Demonstrate interest, curiosity, engagement in sharing the experiences of others and with oral stories and information sharing" },
  { subject: "language-arts", grade_level: "K", strand: "Listening and Speaking", code: "LSK.1.3", description: "Use social listening and speaking skills to interact with a variety of audiences with sensitivity and respect" },
  { subject: "language-arts", grade_level: "K", strand: "Listening and Speaking", code: "LSK.1.4", description: "Interact and collaborate with the teacher and children who have diverse interests, backgrounds, and languages" },
  { subject: "language-arts", grade_level: "K", strand: "Listening and Speaking", code: "LSK.1.5", description: "Become aware of how effective listening enhances understanding" },
  { subject: "language-arts", grade_level: "K", strand: "Listening and Speaking", code: "LSK.1.6", description: "Observe how tone, fluency and intonation impact meaning and mood" },
  { subject: "language-arts", grade_level: "K", strand: "Listening and Speaking", code: "LSK.1.7", description: "Use Home Language(s) and, as Standard English develops, share their thoughts, feelings, and questions about engaging events, stories, and conversations with increasing confidence" },
  { subject: "language-arts", grade_level: "K", strand: "Listening and Speaking", code: "LSK.1.8", description: "Develop increasing clarity and focus when sharing stories or experiences" },
  { subject: "language-arts", grade_level: "K", strand: "Listening and Speaking", code: "LSK.1.9", description: "Engage in active phonological awareness activities and word play to discriminate between various sounds in their environment, letters of the alphabet, rhyme, and meaningful sound patterns" },
  { subject: "language-arts", grade_level: "K", strand: "Listening and Speaking", code: "LSK.1.10", description: "Develop and apply vocabulary and language structures to enhance their understanding of how to communicate ideas with purpose and focus" },
  
  // Reading and Viewing
  { subject: "language-arts", grade_level: "K", strand: "Reading and Viewing", code: "RVK.2.1", description: "Interact meaningfully with a wide range of genres and text forms" },
  { subject: "language-arts", grade_level: "K", strand: "Reading and Viewing", code: "RVK.2.2", description: "Develop questions when browsing through passages of interest" },
  { subject: "language-arts", grade_level: "K", strand: "Reading and Viewing", code: "RVK.2.3", description: "Connect background knowledge to the titles and pictures of fiction and nonfiction passages to build a foundation of understanding" },
  { subject: "language-arts", grade_level: "K", strand: "Reading and Viewing", code: "RVK.2.4", description: "Develop understanding and application of the Concepts of Print" },
  { subject: "language-arts", grade_level: "K", strand: "Reading and Viewing", code: "RVK.2.5", description: "Develop knowledge about the purpose and variety of texts that are read or read to them" },
  { subject: "language-arts", grade_level: "K", strand: "Reading and Viewing", code: "RVK.2.6", description: "Browse through a variety of images, and nonfiction material in pre-emergent and emergent level passages, or passages of interest, to discover information" },
  { subject: "language-arts", grade_level: "K", strand: "Reading and Viewing", code: "RVK.2.7", description: "Demonstrate understanding of some environmental print and pictorial information" },
  { subject: "language-arts", grade_level: "K", strand: "Reading and Viewing", code: "RVK.2.8", description: "Begin to apply comprehension strategies to visualize, predict and connect" },
  { subject: "language-arts", grade_level: "K", strand: "Reading and Viewing", code: "RVK.2.9", description: "Demonstrate understanding by responding to read-alouds with images, model making, discussions, or temporary writing" },
  { subject: "language-arts", grade_level: "K", strand: "Reading and Viewing", code: "RVK.2.10", description: "Connect words and images in pre-emergent and emergent level texts to background knowledge" },
  { subject: "language-arts", grade_level: "K", strand: "Reading and Viewing", code: "RVK.2.11", description: "Recognise and use a variety of high frequency words of personal importance, such as names and pre-emergent level high-frequency words" },
  { subject: "language-arts", grade_level: "K", strand: "Reading and Viewing", code: "RVK.2.12", description: "Participate in shared reading and use the meaning and flow of the language to anticipate upcoming words" },
  { subject: "language-arts", grade_level: "K", strand: "Reading and Viewing", code: "RVK.2.13", description: "Begin to demonstrate fluency and phrasing during shared reading, independent and guided reading of emergent level passages" },
  { subject: "language-arts", grade_level: "K", strand: "Reading and Viewing", code: "RVK.2.14", description: "Identify an increasing number of letter names and letter sounds, beginning with those of personal importance" },
  { subject: "language-arts", grade_level: "K", strand: "Reading and Viewing", code: "RVK.2.15", description: "Use known letter sounds to decode upcoming words in emergent level passages" },
  
  // Writing and Representing
  { subject: "language-arts", grade_level: "K", strand: "Writing and Representing", code: "WRK.3.1", description: "Use shared ideas to co-construct stories" },
  { subject: "language-arts", grade_level: "K", strand: "Writing and Representing", code: "WRK.3.2", description: "Assign meaning to experimental drawing and writing" },
  { subject: "language-arts", grade_level: "K", strand: "Writing and Representing", code: "WRK.3.3", description: "Begin expressive writing to share ideas and real and imagined topics" },
  { subject: "language-arts", grade_level: "K", strand: "Writing and Representing", code: "WRK.3.4", description: "Use peer collaboration and classroom tools to assist in writing process" },
  { subject: "language-arts", grade_level: "K", strand: "Writing and Representing", code: "WRK.3.5", description: "Learn to print the upper and lower case letters of the alphabet" },
  { subject: "language-arts", grade_level: "K", strand: "Writing and Representing", code: "WRK.3.6", description: "Connect spoken language(s) to written language and other representations (e.g., drawings)" },
  { subject: "language-arts", grade_level: "K", strand: "Writing and Representing", code: "WRK.3.7", description: "Connect phonological awareness to letter shapes" },
  { subject: "language-arts", grade_level: "K", strand: "Writing and Representing", code: "WRK.3.8", description: "Spell name and some words of personal importance correctly" },

  // Grade 1 Language Arts
  // Listening and Speaking
  { subject: "language-arts", grade_level: "1", strand: "Listening and Speaking", code: "LS1.1.1", description: "Choose to listen to music, poetry and stories for pleasure" },
  { subject: "language-arts", grade_level: "1", strand: "Listening and Speaking", code: "LS1.1.2", description: "Connect environmental sounds to meaning" },
  { subject: "language-arts", grade_level: "1", strand: "Listening and Speaking", code: "LS1.1.3", description: "Use different voices in role playing to indicate tone and mood" },
  { subject: "language-arts", grade_level: "1", strand: "Listening and Speaking", code: "LS1.1.4", description: "Describe how musical and environmental sounds affect mood" },
  { subject: "language-arts", grade_level: "1", strand: "Listening and Speaking", code: "LS1.1.5", description: "Use Listening Comprehension Strategies to make and simplify meaning: ask questions, recall ideas, predict, visualise, and make connections" },
  { subject: "language-arts", grade_level: "1", strand: "Listening and Speaking", code: "LS1.1.6", description: "Listen to, retell, and express an opinion about the story" },
  { subject: "language-arts", grade_level: "1", strand: "Listening and Speaking", code: "LS1.1.7", description: "Listen to differentiate between make-believe and truth" },
  { subject: "language-arts", grade_level: "1", strand: "Listening and Speaking", code: "LS1.1.8", description: "Listen to follow and give direction e.g. 2-3 steps" },
  { subject: "language-arts", grade_level: "1", strand: "Listening and Speaking", code: "LS1.1.9", description: "Listen and respond with increasing understanding and confidence to conversations expressed in Standard English" },
  { subject: "language-arts", grade_level: "1", strand: "Listening and Speaking", code: "LS1.1.10", description: "Use turn taking strategies as a listener and a speaker" },
  { subject: "language-arts", grade_level: "1", strand: "Listening and Speaking", code: "LS1.1.11", description: "Identify and use some non-verbal cues (e.g., facial expressions, gestures etc.) and in oral communication with thoughtfulness" },
  { subject: "language-arts", grade_level: "1", strand: "Listening and Speaking", code: "LS1.1.12", description: "Listen, share information ask and answer questions on a topic opinion in response to views shared by others" },
  { subject: "language-arts", grade_level: "1", strand: "Listening and Speaking", code: "LS1.1.13", description: "Use and respond to Home Language(s) with awareness and purpose to greet, thank, make a request, explain, apologise, and issue an invitation" },
  { subject: "language-arts", grade_level: "1", strand: "Listening and Speaking", code: "LS1.1.14", description: "Continue to develop Home Language and Standard English vocabulary, phrasing and sentence use to share ideas" },
  { subject: "language-arts", grade_level: "1", strand: "Listening and Speaking", code: "LS1.1.15", description: "Describe sounds, images, events, people, and places with clarity that includes relevant details and a range of descriptive words reflecting size, colour, intensity, etc." },
  { subject: "language-arts", grade_level: "1", strand: "Listening and Speaking", code: "LS1.1.16", description: "Produce complete sentences when suitable to task and setting" },
  { subject: "language-arts", grade_level: "1", strand: "Listening and Speaking", code: "LS1.1.17", description: "Continue to develop the foundation of phonological awareness by orally identifying, producing, and manipulating various units of speech sounds within words" },
  { subject: "language-arts", grade_level: "1", strand: "Listening and Speaking", code: "LS1.1.18", description: "Develop use of common singular and plural nouns in the meaningful context of spoken sentences" },
  { subject: "language-arts", grade_level: "1", strand: "Listening and Speaking", code: "LS1.1.19", description: "Begin to use common irregular plural forms, such as man/men, child/children, and foot/feet" },
  { subject: "language-arts", grade_level: "1", strand: "Listening and Speaking", code: "LS1.1.20", description: "Use common pronouns in spoken sentences with increasing understanding (I, me, mine, they, them, theirs, him, his, hers)" },

  // Reading and Viewing
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.2.1", description: "Reflect on and connect personal interests and background knowledge before, during and after reading" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.2.2", description: "Apply Concepts About Print to navigate Emergent/Early level text" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.2.3", description: "Connect background knowledge to new learning" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.2.4", description: "Regard reading/viewing as sources of interest, enjoyment, and information" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.2.5", description: "Engage in reading or reading-like behaviour to experience a variety of text and text forms" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.2.6", description: "Participate in opportunities to share favourite texts with peers" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.2.7", description: "Re-read, retell and act out selections of familiar stories, poems, and nonfiction texts" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.2.8", description: "Select, with teacher assistance, texts appropriate to personal interests and reading progress" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.2.9", description: "Select just right texts with assistance and beginning independence" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.2.10", description: "Use illustrations in a text to describe and interpret characters, setting, and events" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.2.11", description: "Use nonfiction instructions and text features to create models or artistic representations" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.2.12", description: "Formulate questions as well as understandings of digital fiction and nonfiction text" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.2.13", description: "Develop an understanding and respect for diversity in text" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.3.1", description: "Share and discuss texts with peers" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.3.2", description: "Use illustrations, graphics etc. to ask and answer questions, draw conclusions, and make inferences, identify details, synthesise main idea from the details" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.3.3", description: "Retell the beginning, middle, and end of stories and events using images, drama, models, and written summaries" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.3.4", description: "Use a variety of comprehension strategies to create meaning in poetry, fiction, and nonfiction texts during Independent Reading" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.3.5", description: "Demonstrate understanding through various responses to text: artistic representations, discussions, graphic organisers, oral and written responses to questions" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.3.6", description: "Continue to make connections between Home Language vocabulary and Standard English vocabulary to the language of the story, poem, song, or visual representations" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.3.7", description: "Apply known oral vocabulary within familiar language patterns to make meaning from text" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.3.8", description: "Continue to develop use of context clues to solve unknown vocabulary" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.3.9", description: "Begin to automatically read and understand sight and some high-frequency words and words of personal interests or significance in a variety of reading contexts" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.3.10", description: "Demonstrate understanding (not definitions) and application of synonyms, antonyms, and homophones" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.3.11", description: "Begin to understand how Emergent/Early level prefixes and suffixes change the meaning of words" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.3.12", description: "Expand vocabulary by noticing and using frequently occurring root words to read inflectional forms" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.3.13", description: "Develop visualisation strategies to connect words, and phrases of Home Language and Standard English text to meaningful mental images" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.3.14", description: "Demonstrate understanding of how word order in fiction and nonfiction text impacts meaning" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.3.15", description: "Begin to apply punctuation (full stop, question mark, exclamation mark) and bold print to guide intonation and expression" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.3.16", description: "Apply automatic knowledge of known sight words within sentences to develop phrasing, fluency, and expression" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.3.17", description: "Continue to recognise and meaningfully apply Emergent/Early stage knowledge of letter patterns to decode unfamiliar words" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.3.18", description: "Apply knowledge of word order, illustrations, text content and initial, final and some medial letter sounds to identify unknown words" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.3.19", description: "Begin to monitor for errors by cross checking phonics, meaning, and structure clues" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.4.1", description: "Begin to become familiar with the style of local and favourite international authors" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.4.2", description: "Engage with and participate in Shared Reading and Readers Theatre in fiction, nonfiction, and poetry" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.4.3", description: "Develop an understanding of text features such as bold print and font size adds to an author's style" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.4.4", description: "Ask questions of author's purpose for writing" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.4.5", description: "Continue to develop understanding and purpose of fiction, nonfiction, and poetry genres" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.4.6", description: "Apply some text features to locate and predict information in text" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.4.7", description: "Read and follow simple written and/or illustrated instructions" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.4.8", description: "Use text features to support individual and/or small group research on topic of interest" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.4.9", description: "Search for answers to questions on digital sites" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.4.10", description: "Discuss author's use of interesting words that evoke emotions" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.4.11", description: "Create a personal word bank" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.4.12", description: "Develop an understanding that words may have similar meanings" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.4.13", description: "Continue to develop an understanding of how written word order impacts meaning" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.4.14", description: "Compare texts by same illustrator for similarities in mood (happy, funny, exciting, etc.)" },
  { subject: "language-arts", grade_level: "1", strand: "Reading and Viewing", code: "RV1.4.15", description: "Explore how emoticons, symbols, and shapes are used to convey or enhance meaning" },

  // Writing and Representing
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.5.1", description: "Begin to develop strategies for the prewriting stage of the writing process" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.5.2", description: "Talk about the ideas they plan to write about" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.5.3", description: "Draft some illustrations to accompany ideas and write thoughts that match the ideas in their drawings" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.5.4", description: "Use role play to assist with brainstorming ideas" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.5.5", description: "Begin to use simple graphic organizers to brainstorm and plan" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.5.6", description: "Begin to become familiar with the purpose of various genres and how different genres look and sound" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.5.7", description: "Begin to develop strategies for the connecting prewriting to the drafting stages of the writing process" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.5.8", description: "Write to match text to their brainstorm, planning and drawings" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.5.9", description: "Begin to identify the topic, purpose, audience and form for writing" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.5.10", description: "Begin to experiment with creating a draft in different forms e.g. poems, invitations, excuses, informal letters" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.5.11", description: "Begin to experiment with writing in simple sentences that may include descriptive words or simple transition words" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.5.12", description: "Begin to organise sentences into short paragraphs by writing narratives with two or more appropriately sequenced events" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.5.13", description: "With assistance, begin to become familiar with the keyboard for individual or shared writing" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.5.14", description: "Work with a partner, in small groups and independently, to create a draft writing in both print and/or digital format" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.5.15", description: "Continue to use role plays to assist with drafting process planning, convey and enhance meaning" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.5.16", description: "Apply lessons learned about writing to record feelings, thoughts and ideas during Independent writing or Journal writing time" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.6.1", description: "Engage in teacher assisted and peer collaboration to review the organisation of the written draft through the process of ARMS: Add, Remove, Move, Substitute" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.6.2", description: "Revisit brainstorming and illustration and illustration to add details to and/or delete details" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.6.3", description: "Reread their draft and begin to recognize where they can make changes to better organise the beginning, middle, and end" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.6.4", description: "Experiment with developing writing with a sense of flow" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.6.5", description: "Begin to establish a personal voice in their writing by using pictures and words that convey their attitude or feelings" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.6.6", description: "Begin to extend writing to include vocabulary learned during reading and conversation" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.6.7", description: "Experiment with using multi-sensory words (hearing, smell, taste, etc.) to improve writing" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.6.8", description: "Begin to use comparison words to distinguish one thing from another---size, shape, texture" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.6.9", description: "Become comfortable making decisions about when to include Home Language and/ or Standard English in writing" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.6.10", description: "Monitor and revise writing to ensure simple but complete sentences are meaningful" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.6.11", description: "Develop more understanding of how and when to use descriptive or action words to extend meaning of draft" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.6.12", description: "Apply knowledge of spoken language to know when to use pronouns, plurals, and words indicating position" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.6.13", description: "Experiment with some variety in the first sentence (lead) of writing" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.6.14", description: "Demonstrate understanding of the connection between word order and meaningful writing" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.6.15", description: "Begin to use various types of sentences: declarative, question, and exclamation" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.6.16", description: "Use techniques demonstrated by favorite authors (descriptive words, funny words, short sentences, long sentence, asking questions, etc.)" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.6.17", description: "Use expressive language to elaborate and create interest" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.7.1", description: "Develop increased confidence, and willingness to try out various strategies (risk taking) to increase spelling and punctuation accuracy, tidiness, and presentation" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.7.2", description: "Write from left to right and from top to bottom consistently" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.7.3", description: "Use some conventional spacing" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.7.4", description: "Continue to develop a relaxed hand while writing" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.7.5", description: "Attempt to make letter formation readable by various audiences" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.7.6", description: "Monitor and check the spelling of high frequency words with the aid of environmental print, word walls, personal dictionaries" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.7.7", description: "Generate temporary and accurate spelling based on phonological strategies" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.7.8", description: "Continue to develop spelling of single syllable words by applying knowledge of beginning and ending consonants, blends, digraphs, vowel sounds" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.7.9", description: "Become increasingly familiar with predictable letter patterns to spell more accurately" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.7.10", description: "Apply letter and word knowledge strategies during the writing process to monitor, edit errors and check for correctness" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.7.11", description: "Apply sight word knowledge gathered through reading and writing to 'try out' different spellings of a word to see which one looks right" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.7.12", description: "Begin to be aware of digital features such as spell check" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.7.13", description: "Spell commonly used sight words and phonetically regular words in final copy or writing with increasing correctness" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.7.14", description: "Begin to add a few grade-level punctuation conventions: full stops, question marks, exclamation marks, capitals on names and at the beginning of a sentence" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.7.15", description: "Develop hand created or digital presentation styles using various forms of hand or digitally generated: illustrations, titles, fonts" },
  { subject: "language-arts", grade_level: "1", strand: "Writing and Representing", code: "WR1.7.16", description: "Participate in opportunities to share (through in person or digital format) a chosen piece of writing with peers or an invited audience" },

  // Grade 2 Language Arts
  // Listening and Speaking
  { subject: "language-arts", grade_level: "2", strand: "Listening and Speaking", code: "LS2.1.1", description: "Engage with various genres of music, oral poetry, and oral stories for pleasure" },
  { subject: "language-arts", grade_level: "2", strand: "Listening and Speaking", code: "LS2.1.2", description: "Offer thoughts and opinions on the meaning and mood of music, stories, and poetry" },
  { subject: "language-arts", grade_level: "2", strand: "Listening and Speaking", code: "LS2.1.3", description: "Sustain one-to-one conversations on topics of interest and contribute to small and large group interactions with peers" },
  { subject: "language-arts", grade_level: "2", strand: "Listening and Speaking", code: "LS2.1.4", description: "Continue to develop comfort while engaging in interactions with adults" },
  { subject: "language-arts", grade_level: "2", strand: "Listening and Speaking", code: "LS2.1.5", description: "Describe a personal experience in sequential order" },
  { subject: "language-arts", grade_level: "2", strand: "Listening and Speaking", code: "LS2.1.6", description: "Continue to develop vocabulary that reflects application of synonyms, antonyms, and descriptive words to build more complex sentences" },
  { subject: "language-arts", grade_level: "2", strand: "Listening and Speaking", code: "LS2.1.7", description: "Use some transition words to connect phrases" },
  { subject: "language-arts", grade_level: "2", strand: "Listening and Speaking", code: "LS2.1.8", description: "Respond to and give instructions that involve 3-4 steps" },
  { subject: "language-arts", grade_level: "2", strand: "Listening and Speaking", code: "LS2.1.9", description: "Demonstrate application of oral comprehension strategies such as: visualising, predicting, connecting, analysis, synthesising, determining importance" },
  { subject: "language-arts", grade_level: "2", strand: "Listening and Speaking", code: "LS2.1.10", description: "Describe, share, and discuss thoughts, feelings, and experiences" },
  { subject: "language-arts", grade_level: "2", strand: "Listening and Speaking", code: "LS2.1.11", description: "Ask and respond to questions to clarify information and to explore possibilities or solutions to problems" },
  { subject: "language-arts", grade_level: "2", strand: "Listening and Speaking", code: "LS2.1.12", description: "Consider others' ideas and ask/ respond to questions to clarify information and to explore possibilities or solutions to problems" },
  { subject: "language-arts", grade_level: "2", strand: "Listening and Speaking", code: "LS2.1.13", description: "Recognize some examples of unfair and hurtful vocabulary and begin to make vocabulary choices that affirm rather than hurt people" },
  { subject: "language-arts", grade_level: "2", strand: "Listening and Speaking", code: "LS2.1.14", description: "Experiment with the impact of intonation, expression, and tone while communicating ideas and feelings in small- and whole group situations" },
  { subject: "language-arts", grade_level: "2", strand: "Listening and Speaking", code: "LS2.1.15", description: "Begin to make vocabulary choices that affirm sensitivity to the personal ideas, cultural contexts, and experiences of others" },
  { subject: "language-arts", grade_level: "2", strand: "Listening and Speaking", code: "LS2.1.16", description: "Use social conventions, in range of conversations and cooperative play situations, (turn taking, politeness, when to speak, and when to listen) in multiple cultural contexts" },
  { subject: "language-arts", grade_level: "2", strand: "Listening and Speaking", code: "LS2.1.17", description: "Use different forms (Home Language, Standard English) of language dependent upon audience and purpose" },
  { subject: "language-arts", grade_level: "2", strand: "Listening and Speaking", code: "LS2.1.18", description: "Recognize that volume of voice needs to be adjusted according to situation" },
  { subject: "language-arts", grade_level: "2", strand: "Listening and Speaking", code: "LS2.1.19", description: "Continue to develop monitoring and self correction of oral language use" },
  { subject: "language-arts", grade_level: "2", strand: "Listening and Speaking", code: "LS2.1.20", description: "Develop automaticity with the meaningful application of phonological awareness in oral expression of rhyming, onset and rime, segmenting, blending, beats in a word (syllables)" },

  // Reading and Viewing
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.2.1", description: "Continue to make engaging and 'just right' book choices for Independent Reading based on: interests, various cultures, difficulty level, genre" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.2.2", description: "Reflect on various sources of background knowledge to predict and make connections before, during and after reading" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.2.3", description: "Increase time (build stamina) while engaged in Independent Reading" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.2.4", description: "Regard reading/viewing as sources of interest, enjoyment, and information" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.2.5", description: "Share ideas and opinions about favourite authors or favourite genres with peers" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.2.6", description: "Make meaningful personal, text and community/world connections that enhance comprehension" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.2.7", description: "Demonstrate understanding and application of reading strategies while reading Early level texts" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.2.8", description: "Ask critical questions of fiction, nonfiction, and poetry (Why, what if, is it possible, etc.)" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.2.9", description: "Make connections between personal and social wellbeing and information texts on topics such as: physical activity, health, emotions" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.2.10", description: "Recognize different points of view of the author of print and/or digital text" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.2.11", description: "Continue to develop an understanding and respect for diversity in text and illustrations" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.2.12", description: "Use illustrations and details in a text to describe and interpret characters, setting, and events" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.2.13", description: "Reflect on the purpose of different types of texts e.g., local newspaper articles, local stories, poems, ads, e-texts, etc." },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.3.1", description: "Recognise the purpose and basic similarities and differences in paper based and digital genres of: fiction, nonfiction, poetry" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.3.2", description: "Apply a variety of comprehension strategies to create meaning: activating background, knowledge, determining importance, visualisation, prediction, inferring, synthesising, analysing, questions, make connections" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.3.3", description: "Use illustrations, graphics etc. in nonfiction text to ask questions, make inferences, and search for answers" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.3.4", description: "Use various tools to retell a narrative, referring to characters, problem (what happened), and solution (ending)" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.3.5", description: "Read simple mathematics or science problems to: search for information, ask questions, find solutions" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.3.6", description: "Demonstrate understanding through various responses to text, such as: artistic representations, discussions, graphic organisers, oral and written responses to questions" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.3.7", description: "Follow written instructions to create an object, find a location, etc." },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.3.8", description: "Begin to connect background knowledge re community and culture to support comprehension of culturally relevant text" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.3.9", description: "Respond critically to texts by asking and formulating responses to questions such as: what if, is it possible that . . .?, what else, what was the author trying to tell us, do I agree/why" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.3.10", description: "Respond to text focussed on diverse cultures/ways of life with interest, respectful questions and thought" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.3.11", description: "Continue to develop use of context (meaning, illustrations, text features, etc.)clues to solve unknown vocabulary" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.3.12", description: "Self check on the basis of what makes sense in the text" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.3.13", description: "Refer to personal dictionaries and published dictionaries as a reference for new vocabulary" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.3.14", description: "Continue to make connections between the language of text written with Home Language vocabulary and Standard English vocabulary" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.3.15", description: "Apply known oral vocabulary to text vocabulary by recognising root words or rimes to solve unknown words" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.3.16", description: "Continue to develop automaticity with additional high-frequency words and words of personal interest" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.3.17", description: "Begin to understand the meaning of Early Stage prefixes and suffixes" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.3.18", description: "Create and use a personal word bank" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.3.19", description: "Develop an understanding that words may have similar meanings" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.3.20", description: "Continue to notice and apply knowledge of how word order creates and maintains meaning" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.3.21", description: "Use punctuation in text appropriately to: enhance fluency, guide intonation, demonstrate expression" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.3.22", description: "Further develop fluency by using knowledge of: effective problem solving of unknown words, predictable language structures" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.3.23", description: "Use fluency to assist: comprehension, the mood of the text, the intent of the text" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.3.24", description: "Become more aware how the phrases and sentences of text language may be used to describe in positive or negative ways" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.3.25", description: "Continue to demonstrate understanding of how word order in fiction and nonfiction text impacts meaning" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.3.26", description: "Make connections between common, simple basic digital text vocabulary and meaning" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.3.27", description: "Begin to monitor for errors by cross checking phonics, meaning, and structure clues" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.3.28", description: "Use picture cues to support /enhance graphophonic word solving" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.3.29", description: "Continue to develop meaningful use of graphophonic elements to decode meaningfully such as: initial, final, and medial consonants, Early Stage blends, Early Stage digraphs, Early Stage consonant vowel patterns, simple affixes and visible root words" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.4.1", description: "Become familiar with the style of favourite authors and illustrators" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.4.2", description: "Use the work of a range of authors to compare and contrast purpose and style: humorous stories, exciting stories" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.4.3", description: "Work with a peer to begin digital searches to gather information about an author" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.4.4", description: "Become familiar with the text feature design choices of the author and publishers" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.4.5", description: "Engage in the research process with teacher and peer assistance" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.4.6", description: "Express opinions about the work of authors and illustrators" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.4.7", description: "Discuss and respond to the author's use of interesting words and dialogue that evoke emotions, describe, create humour, etc." },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.4.8", description: "Continue to develop an understanding of how written word order impacts meaning" },
  { subject: "language-arts", grade_level: "2", strand: "Reading and Viewing", code: "RV2.4.9", description: "Compare texts by different authors for differences in language and mood" },

  // Writing and Representing
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.5.1", description: "Engage in writing and representing activities every day and sustain engagement in writing" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.5.2", description: "Continue to engage in conversations about: why we write or draw, how we write or draw, how authors use words and sentences to share their ideas, how illustrators provide additional information to the writing, how authors use choices about when to use Home Language and when to use Standard English" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.5.3", description: "Develop comfort in experimenting within different forms of formal and informal writing" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.5.4", description: "Engage in conversations about an anchor text chosen to model the genre for the writing project" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.5.5", description: "Participate in large group and small group opportunities to brainstorm ideas about a topic or a writing prompt" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.5.6", description: "Use simple graphic organizers, such as pictures, the five-finger plan, web, list, five Ws, etc. to organize ideas into a draft" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.5.7", description: "Organise brainstormed ideas through increasingly independent use of: a print, visual or digital graphic organizer, group conversation, story boards, role play, text based models" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.5.8", description: "Organize writing to match the genre being studied: narrative writing, expository writing, descriptive writing, persuasive writing" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.5.9", description: "Make decisions about when illustrations, charts, and alternate language use will enhance the writing" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.5.10", description: "Understand that writing a draft is connected to the prewriting/brainstorming and organising process" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.5.11", description: "Approach draft writing from a positive perspective of taking risks by: using temporary spelling, exploring various languages, writing freely with a focus on getting ideas on paper or device" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.5.12", description: "Refer to anchor texts as examples of the genre of the writing project" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.5.13", description: "Continue to work with a partner, small group or independently, to begin the process of drafting and organising sentences" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.5.14", description: "Further develop the structure of the genre throughout the draft process of: narrative writing, expository writing, descriptive writing, persuasive writing" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.5.15", description: "Continue to develop understanding of the social aspect of writing by engaging with peers and the teacher for ideas, suggestions, and ongoing feedback" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.6.1", description: "Identify different forms of print and digital writing that are appropriate to specific purposes and audiences" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.6.2", description: "Review the draft and monitor writing for form and organisation using revision tools such as: inserting a word by using a caret, crossing out a word, adding /removing details, using arrows to indicate how ideas can be better organised" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.6.3", description: "Add details or labels to a picture with thought and purpose" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.6.4", description: "Focus revisions on creating print, visual and digital texts with a beginning, middle, and end" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.6.5", description: "Experiment with organisation with various real-world genres (wish list, how to list, grocery list, etc.)" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.6.6", description: "Continue to notice and make choices about the use of Standard English or Home Language vocabulary to enhance word choice" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.6.7", description: "Become aware of how to make decisions about word specific choice to enhance clarity: use concrete nouns, use accurate verbs, use a variety of meaningful descriptive words" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.6.8", description: "Continue to develop and refine the intentional and meaningful use of Home Language and Standard English vocabulary" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.6.9", description: "Use the word wall to check for alternates for overused words" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.6.10", description: "Develop and understanding of how to write complete sentences on a specific topic" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.6.11", description: "Use some variety in sentence beginnings" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.6.12", description: "Experiment with lead sentences that will engage the audience" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.6.13", description: "Begin to embed structures for plurals and simple past tense in sentence" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.6.14", description: "Use expressive Home Language and or Standard English phrases and vocabulary, as appropriate to the topic, to enhance message" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.6.15", description: "Experiment with how an author uses bold print, visual words, and fonts to enhance author's voice" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.6.16", description: "Develop an understanding of how to write complete sentences on a specific topic" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.6.17", description: "Use some variety in sentence beginnings" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.6.18", description: "Begin to experiment with and use revising strategies to develop sentence fluency of: Statements, Questions, Exclamations, Short sentences, Longer sentences" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.6.19", description: "Experiment with various forms of lead sentences that will engage the audience" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.6.20", description: "Begin to embed structures for plurals and simple past tense in sentences" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.6.21", description: "Use expressive Home Language and Standard English words and phrases to enhance the message" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.6.22", description: "Experiment with how an author uses bold print, visual words, and fonts to enhance the author's voice" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.7.1", description: "Continue to develop independent strategies to monitor and edit spelling and make corrections with increasing independence" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.7.2", description: "Use an increasing number of accurately spelled words" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.7.3", description: "Use word walls, personal dictionaries, environmental print to check and/or confirm commonly used words" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.7.4", description: "Generate spelling of unfamiliar words based on: the beginning, middle, and ending sounds in words, continue to develop accuracy with a short vowel in each syllable of a word, blending sounds and syllables to make a word, use an increasing number of letters to represent sound" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.7.5", description: "Demonstrate increasing knowledge of more complex spelling patterns, including long vowel patterns" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.7.6", description: "Continue to develop understanding of how to sequence letters when spelling unfamiliar words" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.7.7", description: "Demonstrate the knowledge of an increasing number of accurately spelt words" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.7.8", description: "Apply a wider range of spelling strategies resulting in more conventional or close to conventional spelling" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.7.9", description: "Continue to develop the use of digital features such as spell check" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.7.10", description: "Continue to refine the use of grade-level punctuation conventions: full stops, question marks, exclamation marks, capitals on names, I, dates, and beginning of a sentence, use lower-case letters within words, begin to use commas in a series" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.7.11", description: "Demonstrate a beginning awareness of when to use quotation marks" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.7.12", description: "Make final corrections of revised draft" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.7.13", description: "Self-select final pieces of writing to publish that demonstrate grade-level traits and conventions" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.7.14", description: "Use conventional spacing between words" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.7.15", description: "Continue to refine letter formation to increase readability by various audiences" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.7.16", description: "Develop hand-created or digital presentation styles that enhance writing: illustrations, titles, charts, emoticons, simple maps, etc." },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.7.17", description: "Share writing and other representations with others and seek response" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.7.18", description: "With assistance, experiment with technology in writing and other forms of representing" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.7.19", description: "Create illustrations/ drawings with a computer graphics/drawing program" },
  { subject: "language-arts", grade_level: "2", strand: "Writing and Representing", code: "WR2.7.20", description: "Compose simple text (and begin to revise and edit) with a word processing program" },


  // Grade 3 Language Arts
   // LISTENING AND SPEAKING
  { subject: "language-arts", grade_level: "3", strand: "Listening and Speaking", code: "LS3.1.1", description: "Engage with and share various genres of music, oral poetry, artwork, and oral stories that have been chosen for pleasure" },
  { subject: "language-arts", grade_level: "3", strand: "Listening and Speaking", code: "LS3.1.2", description: "Experience and enjoy playful use of language, to communicate e.g., telling jokes, asking riddles, singing songs, composing rhymes and verses" },
  { subject: "language-arts", grade_level: "3", strand: "Listening and Speaking", code: "LS3.1.3", description: "Respond to oral/aural language through improvisational drama and/or artwork" },
  { subject: "language-arts", grade_level: "3", strand: "Listening and Speaking", code: "LS3.1.4", description: "Listen attentively and critically to fiction and nonfiction text and music to demonstrate understanding of: the mood, main idea, some supporting details" },
  { subject: "language-arts", grade_level: "3", strand: "Listening and Speaking", code: "LS3.1.5", description: "Continue to develop strategies to describe, share, and discuss thoughts, feelings, and experiences with peers" },
  { subject: "language-arts", grade_level: "3", strand: "Listening and Speaking", code: "LS3.1.6", description: "Ask and respond to questions to clarify information and to explore possibilities or solutions to problems" },
  { subject: "language-arts", grade_level: "3", strand: "Listening and Speaking", code: "LS3.1.7", description: "Listen critically for subtle messages in conversation, music, and environmental sounds" },
  { subject: "language-arts", grade_level: "3", strand: "Listening and Speaking", code: "LS3.1.8", description: "Create and use oral instructions describing how to make or do something" },
  { subject: "language-arts", grade_level: "3", strand: "Listening and Speaking", code: "LS3.1.9", description: "Discuss solutions to local, regional and world events by extending use of questioning to consider: why? how? when? what if? what else?, etc." },
  { subject: "language-arts", grade_level: "3", strand: "Listening and Speaking", code: "LS3.1.10", description: "Demonstrate understanding and use of conversation courtesies during peer group work, class discussions and play" },
  { subject: "language-arts", grade_level: "3", strand: "Listening and Speaking", code: "LS3.1.11", description: "Use vocabulary that shows respect for all people" },
  { subject: "language-arts", grade_level: "3", strand: "Listening and Speaking", code: "LS3.1.12", description: "Listen attentively and build on others' ideas with increasing confidence in group and class discussions and individual presentations" },
  { subject: "language-arts", grade_level: "3", strand: "Listening and Speaking", code: "LS3.1.13", description: "Continue to develop understanding of point of view without expressing judgment" },
  { subject: "language-arts", grade_level: "3", strand: "Listening and Speaking", code: "LS3.1.14", description: "Explore ideas and feelings by asking respectful questions and listening with minimal interruption" },
  { subject: "language-arts", grade_level: "3", strand: "Listening and Speaking", code: "LS3.1.15", description: "Use and respond to verbal and nonverbal cues respectfully" },
  { subject: "language-arts", grade_level: "3", strand: "Listening and Speaking", code: "LS3.1.16", description: "Develop confidence in asking for assistance from peers and adults" },
  { subject: "language-arts", grade_level: "3", strand: "Listening and Speaking", code: "LS3.1.17", description: "Retell stories and events with peers and engage in follow up conversations" },
  { subject: "language-arts", grade_level: "3", strand: "Listening and Speaking", code: "LS3.1.18", description: "Share relevant ideas, opinions, and feelings on topics of personal and social interest using both Standard English and Home Languages" },
  { subject: "language-arts", grade_level: "3", strand: "Listening and Speaking", code: "LS3.1.19", description: "Develop an appreciation for various forms of language and their appropriateness to different situations" },
  { subject: "language-arts", grade_level: "3", strand: "Listening and Speaking", code: "LS3.1.20", description: "Use thoughtful, respectful, and non-hurtful vocabulary" },
  { subject: "language-arts", grade_level: "3", strand: "Listening and Speaking", code: "LS3.1.21", description: "Continue to develop oral comprehension strategies (connecting, inferring, predicting, analysing, synthesising, visualising) to determine word meanings" },
  { subject: "language-arts", grade_level: "3", strand: "Listening and Speaking", code: "LS3.1.22", description: "Participate in the sharing of culturally relevant songs, raps, drama, and poetry with fluency, rhythm, and pace" },
  { subject: "language-arts", grade_level: "3", strand: "Listening and Speaking", code: "LS3.1.23", description: "Continue to develop understanding of how and when to adjust speech volume, projection, facial expressions, gestures, and tone of voice to the speaking occasion" },
  { subject: "language-arts", grade_level: "3", strand: "Listening and Speaking", code: "LS3.1.24", description: "Continue to develop meaningful language use and conventions of oral language(s) as appropriate to the context and purpose: word order, increasingly varied vocabulary choices for nouns, verbs, adjectives, adverbs, use of descriptive language (similes, beginning use of metaphors), use of affixes, subject and verb agreement for casual spoken messages and in planned oral presentations" },

  // READING AND VIEWING
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.2.1", description: "Continue to choose and engage with a range of literary, visual, graphic, and informational texts for independent reading" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.2.2", description: "Apply knowledge of the of fiction, poetry, and nonfiction genres to guide independent understanding of visual and text-based information" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.2.3", description: "Further develop independent use of comprehension strategies during Independent Reading: building on background knowledge, determining the main idea, making connections, predicting, visualising, inferring, analysing, synthesising" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.2.4", description: "Demonstrate understanding of texts read independently through a variety of oral, written, visual responses such as: artistic representations (visual arts, song, dance), discussions, graphic organizers, oral and written responses to questions" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.2.5", description: "Continue to respond critically to texts by asking and formulating responses to questions such as: what if?, is it possible that . . .?, what else?, what was the author trying to tell us?, do I agree / why?" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.2.6", description: "Describe how the sequence of events in of fiction and nonfiction genres impacts the plot or the event described" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.2.7", description: "Apply knowledge of characterisation by: describing the character's attributes (traits, motivations, or feelings); using evidence from the text to support generalizations about the character; comparing and contrasting characters within a selection or between/among two or more selections; explaining how the actions of characters contribute to the sequence of events describing the impact of a character's response to a problem, the character's goal, and what the character says or thinks" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.2.8", description: "Continue to demonstrate understanding of how word order impacts meaning" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.2.9", description: "Apply knowledge of how personal reading fluency impacts understanding" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.2.10", description: "Develop an awareness of how word choice, phrasing and punctuation may be used in positive or negative ways" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.3.1", description: "Continue to apply knowledge of the organizational structure of fiction, nonfiction, and poetry genres to guide understanding of visual and text based information" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.3.2", description: "Continue to apply and combine comprehension strategies listed below to demonstrate understanding of literary, visual, graphic, and informational texts: determining main idea, making connections, predicting, visualising, inferring, analysing, synthesising" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.3.3", description: "Demonstrate understanding through a variety of oral, written visual responses such as: artistic representations (visual arts, song, dance), discussions, graphic organizers, oral and written responses to questions" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.3.4", description: "Continue to respond critically to texts by asking and formulating responses to questions such as: what if?, is it possible that . . .?, what else?, what was the author trying to tell us?, do I agree / why?" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.3.5", description: "Choose and apply a range of human, paper based and digital sources of information e.g., community experts, online searches, web, and text-based reference materials, etc." },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.3.6", description: "Describe how the sequence of events and setting of fiction and nonfiction genres impacts the plot or the event described" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.3.7", description: "Apply knowledge of characterization by: describing the character's attributes (traits, motivations, or feelings); using evidence from the text to support generalizations about the character; comparing and contrasting characters within a selection or between/among two or more selections; explaining how the actions of characters contribute to the sequence of events; describing the impact of a character's response to a problem, the character's goal, and what the character says or thinks" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.3.8", description: "Continue to make connections between the texts using vocabulary of Home Language(s) and Standard English to become increasingly aware of the history and roots of local language(s)" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.3.9", description: "Continue to develop reading vocabulary using accompanying images in a range of genres, authors, and topics" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.3.10", description: "Extend reading vocabulary through the application of: compound words, adjectives, antonyms, synonyms, homophones, homographs" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.3.11", description: "Use a paper based or online vocabulary games to learn the meaning and other features of known and unknown words" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.3.12", description: "Continue to apply common prefixes and suffixes to determine meaning of new vocabulary" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.3.13", description: "Extend vocabulary by applying technical terms encountered during cross-curricular learning" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.3.14", description: "Apply knowledge of the change in tense (-ed), number (-s), and degree (-er and est) signified by inflected endings to decode words" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.3.15", description: "Identify and apply figurative language to enhance understanding text" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.3.16", description: "Continue to demonstrate understanding of how word order impacts meaning" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.3.17", description: "Apply knowledge of how reading fluency impacts understanding" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.3.18", description: "Participate in shared reading opportunities (drama, role -play, reading lyrics while singing, etc. to enhance fluency, guide intonation, convey the mood and intent of the text, demonstrate expression" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.3.19", description: "Develop awareness of how word choice and phrasing may be used to describe in positive or negative ways" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.3.20", description: "Further develop understanding of the purpose and use of: Nouns, Verbs, Adjectives, Adverbs, Pronouns" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.3.21", description: "Continue to apply background knowledge and context clues to read irregularly spelled words" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.3.22", description: "Apply knowledge of roots and affixes to decode unknown words" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.3.23", description: "Continue to monitor (self check) reading for unknown words and use a combination of cues (meaning, grammar, and graphophonic) to solve unknown reading vocabulary with automaticity" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.3.24", description: "Continue to apply grade-level phonics and word analysis skills with increasing automaticity: the letter order, various sounds of vowels, vowel patterns (ou/ow, oi/oy, oo, aw), and some consonants (c,g), the sounds of common digraphs and diphthongs, complex letter pattern, words with silent letters" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.3.25", description: "Decode new and unfamiliar words using: affixes, syllabication, inflectional endings" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.4.1", description: "Continue to notice and compare the purpose and style of a variety of authors and illustrators" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.4.2", description: "Develop understanding of the basic features of the plots of fables, folk tales, fairy tales, adventure stories etc." },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.4.3", description: "Discuss the purpose of particular images or media texts e.g., to inform, entertain, and persuade" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.4.4", description: "Begin to develop an understanding of the component of author's style" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.4.5", description: "Recognize a variety of text forms, text features and stylistic elements and how they help communicate meaning" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.4.6", description: "Begin to apply use of components of stories, dramas and poems when writing or speaking about text using terms such as chapter, scene, and stanza, describe how each successive part builds on earlier sections" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.4.7", description: "Refine use of a variety of text features to locate information (table of contents, glossary, index, charts, titles, and subtitles, etc.)" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.4.8", description: "Generate questions to guide research and: locate appropriate information with assistance (classroom, library, home, community), organise information, share information" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.4.9", description: "Use charts, diagrams, and other graphic information in an expository selection as an aid to understanding the text" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.4.10", description: "Evaluate the contribution of graphic information to an expository selection" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.4.11", description: "Use information gained from illustrations e.g., maps, photographs, and the words in a text to demonstrate understanding of the text" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.4.12", description: "Continue to develop understanding of how: illustrations, fonts, vocabulary and language structures are designed to engage the reader" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.4.13", description: "Continue to provide examples of author's use of interesting words, phrases, and sentences to evoke emotions, describe, create humour, etc." },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.4.14", description: "Explain how specific aspects of a text's illustrations contribute to what is being conveyed by words in the text, e.g., create mood and emphasize setting" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.4.15", description: "Compare and contrast the effectiveness, cultural relevance and possible hidden messages of advertisements, social media posts, etc. used to: influence the reader -provide unwritten information" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.4.16", description: "Continue to search for and compare the purpose and style of a variety of authors and illustrators" },
  { subject: "language-arts", grade_level: "3", strand: "Reading and Viewing", code: "RV3.4.17", description: "Develop understanding of how the author develops the basic features of the plots of fables, folk tales, fairy tales, adventure stories etc." },

  // WRITING AND REPRESENTING
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.5.1", description: "Maintain a personal record of interests, personal or community experiences, music, books, pictures for use as writing prompts" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.5.2", description: "Maintain a writing portfolio that includes drafts, revisions, personal dictionary, personal writing prompts, etc." },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.5.3", description: "Identify the topic, purpose, audience, and form for writing" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.5.4", description: "Participate in group and individual brainstorming to gather ideas for their writing, to write for an intended purpose and audience" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.5.5", description: "Become familiar with a variety of paper based and digital brainstorming techniques: talk about the ideas they plan to write about, draw pictures to develop ideas for writing, create jot notes for research writing" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.5.6", description: "Gather information from a variety of paper based and digital resources to support and enhance brainstorm" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.5.7", description: "Reflect on ideas gathered and add, revise, or delete to suit to topic and genre" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.5.8", description: "Organize ideas and information to write for an intended purpose and audience using: paper based or digital graphic organisers- samples of how published texts are organized" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.5.9", description: "Further develop independence in using, choosing, and creating simple graphic organizers" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.5.10", description: "Participate and contribute to shared writing opportunities that reflect the genre studied (e.g., newsletters to parents, thank-you letters to classroom guests, lists of classroom procedures, recipes, labels)" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.5.11", description: "Draft the organisation of a simple nonfiction report on a topic of personal relevance" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.5.12", description: "Explore and begin to draft online communication formats such as blogs, digital classroom diary, social media to contribute to various genres of writing" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.5.13", description: "Refer to texts and conversations as anchors for organising a sequence of events, changes in setting, and character development" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.5.14", description: "Further develop understanding of the purpose and organisation of: narrative writing, expository writing, opinion writing, persuasive writing, report writing" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.5.15", description: "Continue to develop understanding and independent use of writing traits of Ideas, Organisation and Language Use to create drafts" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.5.16", description: "Enhance understanding of how to use transition words and phrases to develop a logical progression of ideas and thoughts (e.g., because, therefore, since, for example) to connect opinion and reasons" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.5.17", description: "Explore possibilities provided in anchor texts of various ways to convey ideas, through: introductory sentences, concluding sentences, sequencing of ideas, vocabulary choices, simple, compound, and complex sentences" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.5.18", description: "Apply, with increasing independence, the understanding and application of Ideas, Organisation and Language Use in draft writing in a range of genres" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.6.1", description: "Continue to develop self assessment revision strategies by self monitoring writing for form and organisation using paper based or digital revision tools such as: caret, crossing out, adding /removing details, arrows to organise" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.6.2", description: "Use feedback given by peers and teachers as an aid in writing and strengthening the organization of the draft: focus revisions on creating print, visual and digital texts with increasingly engaging beginnings, begin to experiment with how the middle, of the draft evolves, explore new endings" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.6.3", description: "Experiment with digital and paper-based organisation with various real-world genres such as(daily activities, wish list, how to list, grocery list, play lists, etc.)" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.6.5", description: "Continue to appreciate and develop the purpose and place of Home Language and Standard English vocabulary" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.6.6", description: "Continue to develop self monitoring of errors in word use and sentence construction" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.6.7", description: "Explore synonyms to enhance, clarify and expand information" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.6.8", description: "Connect the use of sensory verbs, adjectives, and adverbs to enliven language" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.6.9", description: "Demonstrate understanding of figurative language by using simple similes, metaphors, and personification in their writing" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.6.10", description: "Use a paper based, or digital dictionary, prompts or thesaurus to clarify the meaning of keywords" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.6.11", description: "Recognize and use words with multiple meanings with understanding and intent of the text's context" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.6.12", description: "Acknowledge the importance and purpose of the grammar of Home Language(s), Standard English in formal and informal writing" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.6.13", description: "Revise with a focus on monitoring for complete and well-formed sentences that are clear and understandable" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.6.14", description: "Continue to engage in individual and shared peer revision opportunities to share drafts aloud and provide/ receive feedback on elements of grammar and sentence fluency such as: use of simple verb tenses, comparative and superlative adjectives and adverbs, form and use possessives, subject and verb agreement, meaningful use of simple, compound, and complex sentence patterns meaningfully, determining complete and incomplete sentences" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.6.15", description: "Begin to use a simple digital grammar checker" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.6.16", description: "Begin to notice how favourite authors use language and why it is engaging" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.6.17", description: "Experiment with a variety of writing styles to develop a sense of authorship" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.6.18", description: "Experiment with writing from another perspective (an animal, an alien, etc.)" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.6.19", description: "Experiment with character, dialogue and descriptions of actions, thoughts, and feelings to fully develop character" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.7.1", description: "Continue to develop spelling accuracy and automaticity" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.7.2", description: "Use temporary (or attempted) spelling with an increasing knowledge of how to monitor spelling patterns of language(s) in common use" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.7.3", description: "Continue to refine the use spelling patterns and generalizations such as: phonetic position-based spellings (beginning, middle and ending sounds), rhyming word families, syllable patterns, meaningful use of affixes and root words, knowledge of some irregularly spelled words, use frequently confused words (e.g., to/too/two; there/their) with increased accuracy, regular and some irregular ending rules" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.7.4", description: "Consult reference materials, including paper based, digital dictionaries and spell check, to monitor and correct spellings" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.7.5", description: "Use technology to produce and publish writing (using basic keyboarding skills) as well as to interact and collaborate with others" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.7.6", description: "Apply strategies for editing and presenting during the writing process and engage with peers in a close read of revised and edited draft" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.7.7", description: "Demonstrate increased understanding of the purpose and meaningful use of capitals and punctuation (and variations of punctuation among English and local languages): capitals for sentence beginnings, names, titles, etc., punctuation as full stops, exclamation marks and question marks, punctuation as beginning use of commas and colon to begin a list" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.7.8", description: "Further develop accuracy and neatness in handwritten work" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.7.9", description: "Create presentations of stories and reports in various paper based or digital formats that are engaging to the reader" },
  { subject: "language-arts", grade_level: "3", strand: "Writing and Representing", code: "WR3.7.10", description: "Demonstrate beginning use of fonts, graphics, letter size, spacing etc. to express their thoughts and engage the reader" },
  
  // Grade 4 Language Arts
  // Grade 4 Listening and Speaking
  { subject: "language-arts", grade_level: "4", strand: "Listening and Speaking", code: "LS4.1.1", description: "Demonstrate enthusiasm for participating in class discussions, storytelling, oral poetry, and singing" },
  { subject: "language-arts", grade_level: "4", strand: "Listening and Speaking", code: "LS4.1.2", description: "Continue to explore a variety of genres and styles in spoken language on topics of interest and personal growth (conversations, debates, poetry, storytelling, interviews, etc.)" },
  { subject: "language-arts", grade_level: "4", strand: "Listening and Speaking", code: "LS4.1.3", description: "Express preferences in written, visual, and oral communication genres and styles and explain the reasons behind their choices" },
  { subject: "language-arts", grade_level: "4", strand: "Listening and Speaking", code: "LS4.1.4", description: "Use technology to enhance their listening and speaking skills, such as recording and listening to their own speech" },
  { subject: "language-arts", grade_level: "4", strand: "Listening and Speaking", code: "LS4.1.5", description: "Use multimedia resources for research and oral presentations" },
  { subject: "language-arts", grade_level: "4", strand: "Listening and Speaking", code: "LS4.1.6", description: "Continue to engage with and share various genres of music, oral poetry, artwork, and oral stories for pleasure" },
  { subject: "language-arts", grade_level: "4", strand: "Listening and Speaking", code: "LS4.1.7", description: "Respond to oral/aural language through improvisational drama and/or artwork" },
  { subject: "language-arts", grade_level: "4", strand: "Listening and Speaking", code: "LS4.1.8", description: "Listen attentively and critically to fiction and nonfiction texts and music to demonstrate understanding of the mood, main idea, supporting details, theme, moral etc." },
  { subject: "language-arts", grade_level: "4", strand: "Listening and Speaking", code: "LS4.1.9", description: "Develop competence in analyzing subtle messages in a conversation, music, advertisements, speeches, and media that are intended to persuade the listeners" },
  { subject: "language-arts", grade_level: "4", strand: "Listening and Speaking", code: "LS4.1.10", description: "Give clear 'how to' instructions" },
  { subject: "language-arts", grade_level: "4", strand: "Listening and Speaking", code: "LS4.1.11", description: "Discuss issues and/or solutions to local, regional and world problems by extending use of questioning to consider: why? how? when? what if? what else?" },
  { subject: "language-arts", grade_level: "4", strand: "Listening and Speaking", code: "LS4.1.12", description: "Engage in conversations with peers during collaborative activities by adding relevant comments and questions that advance the dialogue" },
  { subject: "language-arts", grade_level: "4", strand: "Listening and Speaking", code: "LS4.1.13", description: "Express ideas and opinions with increasing respect and confidence" },
  { subject: "language-arts", grade_level: "4", strand: "Listening and Speaking", code: "LS4.1.14", description: "Practice active listening strategies including eye contact with affirming words/gestures to show whole-hearted engagement during peer discussions" },
  { subject: "language-arts", grade_level: "4", strand: "Listening and Speaking", code: "LS4.1.15", description: "Experiment with nonverbal communication (signing, mime, facial expressions, etc.)" },
  { subject: "language-arts", grade_level: "4", strand: "Listening and Speaking", code: "LS4.1.16", description: "Continue to develop understanding of point of view without expressing judgment" },
  { subject: "language-arts", grade_level: "4", strand: "Listening and Speaking", code: "LS4.1.17", description: "Give constructive oral feedback using prompts such as 'I notice...I wonder, This made me think about...' when responding to classmates' presentations or ideas" },
  { subject: "language-arts", grade_level: "4", strand: "Listening and Speaking", code: "LS4.1.18", description: "Continue to explore ideas and feelings by asking respectful questions and listening with minimal interruption" },
  { subject: "language-arts", grade_level: "4", strand: "Listening and Speaking", code: "LS4.1.19", description: "Participate in the simple of debate, considering the multiple viewpoints and finding common grounds" },
  { subject: "language-arts", grade_level: "4", strand: "Listening and Speaking", code: "LS4.1.20", description: "Integrate listening and speaking skills across various subject areas, such as Mathematics, Social Studies, and Science" },
  { subject: "language-arts", grade_level: "4", strand: "Listening and Speaking", code: "LS4.1.21", description: "Explore and discuss ideas, opinions, and feelings on topics of personal and social interest using both Standard English and Home Language(s)" },
  { subject: "language-arts", grade_level: "4", strand: "Listening and Speaking", code: "LS4.1.22", description: "Demonstrate awareness of the kind of language appropriate for different situations and audiences" },
  { subject: "language-arts", grade_level: "4", strand: "Listening and Speaking", code: "LS4.1.23", description: "Deepen understanding of the importance of word choice, tone of voice, volume, projection, facial expression, and gesture appropriate to the speaking occasion" },
  { subject: "language-arts", grade_level: "4", strand: "Listening and Speaking", code: "LS4.1.24", description: "Listen to identify the tone, mood and the emotion conveyed by a speaker in an oral communication" },
  { subject: "language-arts", grade_level: "4", strand: "Listening and Speaking", code: "LS4.1.25", description: "Further develop oral comprehension strategies (e.g., making predictions, making inferences, visualization, drawing conclusions) to determine word meanings" },
  { subject: "language-arts", grade_level: "4", strand: "Listening and Speaking", code: "LS4.1.26", description: "Identify, share, and analyze culturally relevant songs, music, drama, and poetry with fluency, rhythm, and pace for literal and inferred purpose and meaning" },
  { subject: "language-arts", grade_level: "4", strand: "Listening and Speaking", code: "LS4.1.27", description: "Further develop meaningful oral language use and conventions of oral language(s) as appropriate to the context and purpose: word order, increasingly varied vocabulary choices for nouns, verbs, adjectives, adverbs, use of descriptive language (similes, metaphors, beginning use of personification), use of affixes, subject and verb agreement correctly in delivering spoken messages and in planned oral presentations" },

  // Grade 4 Reading and Viewing
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.2.1", description: "Select engaging paper based and digital visual texts for Independent Reading based on: interests, appropriate level of difficulty, various genres, diverse cultures" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.2.2", description: "Use the criteria above to justify reading selections" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.2.3", description: "Utilize background knowledge to better comprehend a topic, picture, or title before, during and after reading" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.2.4", description: "Read, view, and respond to a variety of literature from the Caribbean and other cultures" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.2.5", description: "Continue to develop strategies to monitor reading effectiveness in order to identify reading challenges and apply appropriate fix up strategies" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.2.6", description: "Use pictures and illustrations, word structures, and text features to: locate information, obtain or verify understanding of information, develop questions, search for answers" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.2.7", description: "Continue to develop and demonstrate critical questioning strategies to gather information from favourite visual, musical, and written text re: point of view, purpose, bias, subtle messages" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.2.8", description: "Follow and correct when necessary, multi-step written instructions e.g., how to assemble a product or play a board game" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.2.9", description: "Use Independent Reading Time to develop: reading fluency (accuracy, phrasing, and intonation), recognise quotation marks and marker words (said, shouted, whispered, etc.) to determine the mood of the speaker in the text, connect punctuation in text to meaningful interpretation of sentences and paragraphs, change the rate of reading depending on the mood of the text, practice meaningful word solving strategy (root word, chunking, affixes, context clues)" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.2.10", description: "Use text-based information and personal experiences to anticipate outcomes and solve problems" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.2.11", description: "Use comprehension strategies to connect personal and community funds of knowledge to analyze visual and written text and ask questions of author's message through processes such as: analysis, synthesis, inference, application" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.2.12", description: "Describe the effect of illustrations on the mood, setting and plot of written or visual text" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.2.13", description: "Notice positive or negative stereotypes in digital texts e.g., websites, advertisements, social media, etc." },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.2.14", description: "Analyze the techniques used by various media texts created to inform, entertain, persuade" },

  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.3.1", description: "Continue to apply knowledge of the organizational structure of fiction and nonfiction genres to construct meaning of visual and text" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.3.2", description: "Apply and integrate comprehension strategies with increased independence to demonstrate understanding of literary, visual, graphic, and informational texts: accessing background knowledge, determining main idea, making connections, predicting, visualising, inferring, analysing, synthesising" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.3.3", description: "Demonstrate understanding of text through a variety of oral, written, and visual responses such as: artistic representations (visual arts, song, dance), discussions, graphic organizers, oral and written responses to questions, poetry, letters" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.3.4", description: "Respond critically with greater insight to texts by asking and formulating responses to questions such as: what if?, is it possible that . . .?, what else?, what was the author trying to tell us?, do I agree / why or why not?, how do you know?, why do you think that?" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.3.5", description: "Choose from a range of paper based, digital and human sources to add to existing information e.g., community experts, online searches, web, and text based reference materials, etc." },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.3.6", description: "Describe with greater competence how the setting of fiction and nonfiction genres impacts the plot or the event/s described" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.3.7", description: "Deepen application of knowledge of characterization by: describing the character's attributes (traits, motivations, or feelings); using evidence from the text to support generalizations about the character; comparing and contrasting characters within a selection or between/among two or more selections; explaining how the actions of characters contribute to the sequence of events; describing the impact of a character's response to a problem, the character's goal, and what the character says or thinks" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.3.8", description: "Increase understanding and application of the connections between the vocabulary of Home Language(s) and Standard English" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.3.9", description: "Extend the development of reading vocabulary through reading a range of genres, authors, and topics" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.3.10", description: "Advance reading vocabulary through the application of: antonyms, synonyms, homophones, homographs, homonyms, words from other cultures" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.3.11", description: "Use, with greater competence, a paper based, online dictionary and thesaurus and digital prompts to learn the meaning and other features of known and unknown words" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.3.12", description: "Build on existing knowledge and skills of common prefixes, suffixes, and root words (safe, unsafe, safety; real, reality) to determine meaning of new vocabulary" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.3.13", description: "Extend vocabulary through the use of words encountered in cross-curricular lessons" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.3.14", description: "Demonstrate continued ability to apply knowledge of the change in tense (-t,-ed), number (-s, -es), and degree (-er and --est) signified by inflected endings to decode words" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.3.15", description: "Identify and apply figurative devices to enhance understanding of text: similes, metaphors, onomatopoeia, personification" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.3.16", description: "Demonstrate and discuss with increasing competence an understanding of how word order impacts meaning" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.3.17", description: "Continue to apply understanding of how reading fluency impacts comprehension" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.3.18", description: "Participate in shared reading opportunities to: enhance fluency, guide intonation, convey the mood and intent of the text, expand vocabulary, increase comprehension" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.3.19", description: "Further develop awareness of how word choice and phrasing may be used to describe persons and events in positive or negative ways" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.3.20", description: "With increasing competence, apply background knowledge and context clues to read unknown words" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.3.21", description: "Deepen application of knowledge of roots, affixes, and syllabication to decode unknown words" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.3.22", description: "Utilize phonics and word analysis skills, when necessary, with increasing automaticity: vowel patterns (ou/ow, oi/oy, oo, aw), the sounds of common digraphs and diphthongs, complex letter pattern, words with silent letters" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.3.23", description: "Use background knowledge and information from poetry and expository, narrative, and descriptive texts to make and modify predictions" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.3.24", description: "Distinguish between main idea and supporting information in poetry and expository, narrative, and descriptive texts" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.3.25", description: "Expand use of prior knowledge about written and visual text to form an opinion about a particular point or issue" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.3.26", description: "Continue to refine meaningful and critical use of text features to locate and use information (titles, subtitles, table of contents, glossary, index, etc.)" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.3.27", description: "Evaluate the purpose of graphic information (illustrations, fonts, charts, photographs, pictures, maps) in poetry and expository, narrative, and descriptive texts as an aid to comprehension" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.3.28", description: "Recognize and provide examples of how author's choice of vocabulary, phrases, and sentences evoke emotions, enhance description, and create humour" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.3.29", description: "Provide examples of how illustrators create mood in visual text" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.3.30", description: "Discuss the effectiveness and subtle messages conveyed through emoticons and social media posts" },

  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.4.1", description: "With greater competence, compare and contrast the various formats of fiction, nonfiction, poetry, and drama" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.4.2", description: "Continue to identify purpose of a variety of authors of fiction, nonfiction, and poetry: to inform, to entertain, to persuade" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.4.3", description: "With greater competence, continue to identify the purpose of a variety of illustrators of fiction, nonfiction, and poetry: to inform, to entertain, to persuade" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.4.4", description: "Develop an understanding of an author's style of plot development of fiction: fables, folk tales, fairy tales, and adventure stories: use of time sequence, use of descriptive language, use of dialogue" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.4.5", description: "Begin to notice the purpose of an author's use of structures such as: paragraphing in fiction and nonfiction, stanzas, line breaks, rhyme in poetry, dialogue markers, scenes, stage directions in drama" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.4.6", description: "Demonstrate understanding of text features used to locate information (table of contents, glossary, index, charts, titles, and subtitles, etc.)" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.4.7", description: "Continue to develop independence using charts, diagrams, and other graphic information in an expository selection as an aid to understanding the text" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.4.8", description: "Begin to develop skills to generate questions based on charts, diagrams, etc." },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.4.9", description: "Participate in discussions that compare and contrast how the local and international contexts of topic, setting, plot, and characters influence fiction, nonfiction, and poetry" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.4.10", description: "Identify examples of how an author introduces and develops characters through: descriptive language, informal and formal language, Home Language(s) and Standard English, dialogue" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.4.11", description: "Reflect on the purpose of messages relayed through social media platforms as agents to inform, influence, disinform, bully, etc." },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.4.12", description: "Begin to explore an author's use of implied and explicit messages through a critical lens: in all genres, in advertisements, in product labels" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.4.13", description: "Begin to develop understanding of an illustrator's use of implied and explicit messages" },
  { subject: "language-arts", grade_level: "4", strand: "Reading and Viewing", code: "RV4.4.14", description: "Begin to collect interesting examples of language use and apply to writing: interesting vocabulary, interesting phrases or expressions" },

  // Grade 4 Writing and Representing
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.5.1", description: "Continue to use personal interests or community experiences, music, books, documentaries, videos, pictures as writing prompts" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.5.2", description: "Maintain writing portfolios - drafts, revisions, personal writing prompts, etc." },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.5.3", description: "Use digital blogs, storytelling, nonfiction, news, and instructional sites to explore various genres of writing" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.5.4", description: "Brainstorm individually and collaboratively to gather ideas for their writing" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.5.5", description: "Use a variety of paper-based and digital resources to gather information to support and enhance the brainstorming process" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.5.6", description: "Identify and maintain the topic, purpose, audience, and form of writing throughout the brainstorming process" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.5.7", description: "Reflect with greater depth on ideas gathered and add, revise, or delete to suit the topic and genre" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.5.8", description: "Examine samples of different genres as models for organizing a sequence of events, changes in setting, and character development" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.5.9", description: "Develop competence in organizing and arranging ideas and information to write for an intended purpose and audience" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.5.10", description: "Organize and strengthen writing throughout the drafting process" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.5.11", description: "Create and use simple paper based or digital graphic organizers to aid the organization of ideas (e.g., five-finger plan, story map, web, list, five Ws, and graphic organizers for specific forms of writing.)" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.5.12", description: "Continue to participate in and contribute to independent and shared writing opportunities throughout the writing process (e.g., posters for school events, thank-you letters to classroom guests, lists, recipes, labels, etc.)" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.5.14", description: "Explore and experiment with various ways to express thoughts and ideas in various text forms" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.5.15", description: "Continue to utilize strategies to organize ideas into a draft that supports the topic, enhances clarity, and sequences logically" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.5.16", description: "Demonstrate understanding by using linking words and phrases to develop a logical progression of ideas and thoughts (e.g., because, therefore, since, for example) to connect opinions and reasons" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.5.17", description: "Explore and represent in written pieces: introductory/topic sentences, concluding sentences, paragraphs, a range of vocabulary to match the genre and purpose of the Writing" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.5.18", description: "Develop understanding of purposes and uses of simple, compound, and complex sentences" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.5.19", description: "Build on existing knowledge of the various genres: narrative writing, expository writing, descriptive writing, persuasive writing, poetry - (rhyme, limerick, shape), book reports" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.5.20", description: "Write a draft of three or four paragraphs or stanzas of the assigned genre" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.5.21", description: "Create drafts using alternate formats such as storyboard, comics, posters, etc." },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.5.22", description: "Participate in opportunities to share ideas and initial drafts with peers" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.5.23", description: "Produce fiction, non-fiction, poetry, and visual drafts that incorporate content from other core areas" },

  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.6.1", description: "Continue to develop competence in the use of monitoring (self-assessment) strategies and checklists to improve organisation of the draft" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.6.2", description: "Continue to use feedback given by peers and teachers to strengthen the organization of the draft" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.6.3", description: "Focus revisions on creating print, visual and digital texts with increasingly engaging beginnings and lead sentences" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.6.4", description: "Further explore how the middle of the draft evolves to connect the beginning and end" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.6.5", description: "Revise endings to enhance the written drafts" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.6.6", description: "Expand vocabulary by incorporating new and diverse words into written drafts during the revising process" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.6.7", description: "Develop competence in self-monitoring of errors in word use" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.6.8", description: "Use words in context, understanding how the meaning of words can shift based on the surrounding sentences" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.6.9", description: "Experiment with different language styles, including figurative language such as similes, metaphor, and personification, to convey ideas more vividly" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.6.10", description: "Create and maintain a personal word bank, recording new words, phrases, and interesting sentences as they are encountered" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.6.11", description: "Continue to use sensory verbs, adjectives, and adverbs to enliven vocabulary and word use" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.6.12", description: "Use a paper-based, digital dictionary or thesaurus and digital prompts with increasing independence to clarify the meaning of keywords and enrich written pieces" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.6.13", description: "Apply knowledge of subject-verb agreement within sentence structure to notice areas or writing requiring revision" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.6.14", description: "Confer with peers about the flow and clarity of sentences and paragraphs" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.6.15", description: "Begin to use a simple digital grammar checker" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.6.16", description: "Consider the use of alternate lengths and formats of sentences and paragraphs" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.6.17", description: "Understand and use formal, informal uses of Home Language and Standard English as appropriate to the purpose, topic, setting, plot line and characters in writing" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.6.18", description: "Continue to engage in individual and peer revision opportunities to share drafts and provide/ receive feedback on elements of grammar and sentence fluency such as: use of simple verb tenses (e.g., I walked; I walk; I will walk), comparative and superlative adjectives and adverbs, form and use possessives, subject and verb agreement, use of simple, compound, and complex sentence patterns, determining complete and incomplete sentences" },

  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.7.1", description: "Continue to apply learning and further develop proficiency in spelling, contributing to the overall quality of written work" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.7.2", description: "Apply understanding of spelling conventions across various subjects" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.7.3", description: "Further develop self monitoring strategies to notice and correct spelling errors" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.7.4", description: "Develop proficiency in the use of punctuation conventions, including: full stops, commas, apostrophes, colon to accurately convey meaning and enhance the clarity of written work" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.7.5", description: "Continue to make decisions about the strategic and some malleable use of punctuation, considering the potential impact on sentence structure and overall coherence of the passage. (You saw a shooting star! You saw a shooting star? We saw a shooting star.)" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.7.6", description: "Discuss how punctuation choices reflect decisions about style and format" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.7.7", description: "Choose a variety presentation formats based on the nature of the written content and the intended audience" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.7.8", description: "Integrate visual elements, including images, charts, graphs, and other graphics, into written work to enhance overall clarity and appeal to the reader" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.7.9", description: "Publish written work to varying audiences using different paper based and digital tools" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.7.10", description: "Engage in collaborative projects to create and present written content using various formats" },
  { subject: "language-arts", grade_level: "4", strand: "Writing and Representing", code: "WR4.7.11", description: "Add titles, cover images, tables of content, glossaries, book blurbs, information about the author, etc. as needed" },


  // Grade 5 Langauage Arts
  // Grade 5 Listening and Speaking
  { subject: "language-arts", grade_level: "5", strand: "Listening and Speaking", code: "LS5.1.1", description: "Clarify opinions by responding to the questions and ideas/opinions of others and provide evidence to support thinking" },
  { subject: "language-arts", grade_level: "5", strand: "Listening and Speaking", code: "LS5.1.2", description: "Continue to use intonation, tone, and expression to communicate ideas and feelings in a variety of situations, considering audience and purpose" },
  { subject: "language-arts", grade_level: "5", strand: "Listening and Speaking", code: "LS5.1.3", description: "Discuss news, current events, opinions, feelings, strengths, challenges, future plans and hopes in class discussions" },
  { subject: "language-arts", grade_level: "5", strand: "Listening and Speaking", code: "LS5.1.4", description: "Reflect on and identify strengths as listeners and speakers, areas for improvement and the strategies most helpful in oral communication" },
  { subject: "language-arts", grade_level: "5", strand: "Listening and Speaking", code: "LS5.1.5", description: "Participate as active listeners in group learning activities by: identifying the main points, determining the sequence events, giving an accurate account, taking notes" },
  { subject: "language-arts", grade_level: "5", strand: "Listening and Speaking", code: "LS5.1.6", description: "Report on a topic or text, tell a story, or recount an experience in an organized manner and appropriate pace, using appropriate facts and relevant descriptive details to support main ideas or themes" },
  { subject: "language-arts", grade_level: "5", strand: "Listening and Speaking", code: "LS5.1.7", description: "Follow agreed-upon rules for discussions and carry out assigned roles" },
  { subject: "language-arts", grade_level: "5", strand: "Listening and Speaking", code: "LS5.1.8", description: "Create and/or use visual aids in presentations when appropriate to enhance development of themes and/or main ideas (e.g., graphics, sound)" },
  { subject: "language-arts", grade_level: "5", strand: "Listening and Speaking", code: "LS5.1.9", description: "Use appropriate facial expressions and gestures to support, accentuate, or dramatize the message" },
  { subject: "language-arts", grade_level: "5", strand: "Listening and Speaking", code: "LS5.1.10", description: "Adapt speech to a variety of contexts and tasks, using formal English when appropriate to task and situation" },
  { subject: "language-arts", grade_level: "5", strand: "Listening and Speaking", code: "LS5.1.11", description: "Orally present an argument or perspective" },
  { subject: "language-arts", grade_level: "5", strand: "Listening and Speaking", code: "LS5.1.12", description: "Create, present, and participate in mini debates/speeches using persuasive techniques e.g., promises, dares, flattery, glittering generalities, intonations that persuades people to buy or do something" },
  { subject: "language-arts", grade_level: "5", strand: "Listening and Speaking", code: "LS5.1.13", description: "Identify the reasons and evidence a speaker provides to support points" },
  { subject: "language-arts", grade_level: "5", strand: "Listening and Speaking", code: "LS5.1.14", description: "Respond to and to give sequential multi-step directions and instructions with increasing detail" },
  { subject: "language-arts", grade_level: "5", strand: "Listening and Speaking", code: "LS5.1.15", description: "Listen to identify and discuss critically persuasive techniques used in advertisements" },
  { subject: "language-arts", grade_level: "5", strand: "Listening and Speaking", code: "LS5.1.16", description: "Critically listen to the ideas and perspectives of others in a variety of collaborative learning experiences showing increased monitoring of when to listen and when to speak" },
  { subject: "language-arts", grade_level: "5", strand: "Listening and Speaking", code: "LS5.1.17", description: "Develop ability to adjust level of language used to suit the specific communication situation" },
  { subject: "language-arts", grade_level: "5", strand: "Listening and Speaking", code: "LS5.1.18", description: "Begin to reflect critically upon a variety of peer and published oral presentations by evaluating the speaker's perspective" },
  { subject: "language-arts", grade_level: "5", strand: "Listening and Speaking", code: "LS5.1.19", description: "Make language choices that affirm sensitivity and respect the ideas and experiences of others" },
  { subject: "language-arts", grade_level: "5", strand: "Listening and Speaking", code: "LS5.1.20", description: "Listen to understand and respond appropriately to a variety of situations and for a variety of purposes" },
  { subject: "language-arts", grade_level: "5", strand: "Listening and Speaking", code: "LS5.1.21", description: "Review the key ideas and draw conclusions considering the information and knowledge gained from the discussions" },
  { subject: "language-arts", grade_level: "5", strand: "Listening and Speaking", code: "LS5.1.22", description: "Engage in self and peer reflection about concepts of fake news, misinformation, and disinformation when considering accuracy and intent of information" },
  { subject: "language-arts", grade_level: "5", strand: "Listening and Speaking", code: "LS5.1.23", description: "Consider others' responses and begin to offer opinions supported with some evidence" },
  { subject: "language-arts", grade_level: "5", strand: "Listening and Speaking", code: "LS5.1.24", description: "Ask questions to check understanding of information presented, stay on topic, and link comments to the remarks of others" },
  { subject: "language-arts", grade_level: "5", strand: "Listening and Speaking", code: "LS5.1.25", description: "Ask a speaker for clarification about the subject matter of his / her contribution" },
  { subject: "language-arts", grade_level: "5", strand: "Listening and Speaking", code: "LS5.1.26", description: "Speak confidently in complete sentences using appropriate intonation and courteous expression with peers and in various levels of formality" },
  { subject: "language-arts", grade_level: "5", strand: "Listening and Speaking", code: "LS5.1.27", description: "Create age-appropriate oral media messages (e.g., videos, podcasts, focusing on effectiveness of the message" },
  { subject: "language-arts", grade_level: "5", strand: "Listening and Speaking", code: "LS5.1.28", description: "Converse and collaborate in a variety of situations with increasing sensitivity and respect, considering cultural contexts, audience, and purpose" },
  { subject: "language-arts", grade_level: "5", strand: "Listening and Speaking", code: "LS5.1.29", description: "Explain ideas and opinions with supporting details, and respond to others' questions and ideas" },
  { subject: "language-arts", grade_level: "5", strand: "Listening and Speaking", code: "LS5.1.30", description: "Speak clearly in an audible voice using volume, pitch, phrasing, pace, modulation, and gestures to enhance meaning at various levels of formality" },
  { subject: "language-arts", grade_level: "5", strand: "Listening and Speaking", code: "LS5.1.31", description: "Listen to distinguish between purpose and effective application oral Standard English and Home Languages spoken in the Caribbean" },
  { subject: "language-arts", grade_level: "5", strand: "Listening and Speaking", code: "LS5.1.32", description: "Use increasingly well constructed complex sentences that incorporate vocabulary and style to enhance oral presentations" },
  { subject: "language-arts", grade_level: "5", strand: "Listening and Speaking", code: "LS5.1.33", description: "Use figurative and metaphorical vocabulary in their oral presentations" },
  { subject: "language-arts", grade_level: "5", strand: "Listening and Speaking", code: "LS5.1.34", description: "Notice and interpret multi meaning vocabulary words in the contexts in which they are used (row as a noun, row as a verb; seal as a noun with various meanings, seal as a verb, etc.)" },
  { subject: "language-arts", grade_level: "5", strand: "Listening and Speaking", code: "LS5.1.35", description: "Paraphrase portions of a text read aloud, or information presented in oral and visual media and formats" },

  // Grade 5 Reading and Viewing
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.2.1", description: "Select from a range of genres of engaging paper based, digital, and visual texts for Independent Reading based on: interests, subject areas, appropriate level of difficulty, various genres, diverse cultures" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.2.2", description: "Connect with background knowledge to: better comprehend a topic, picture, or title before, during and after reading, question and analyse information in text read, share connections between their experiences and the themes or settings of the books read" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.2.3", description: "Read widely and experience a variety of genres of literature from the Caribbean and international cultures" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.2.4", description: "Reflect on and identify strengths and areas for improvement as readers while using the strategies they found most useful during reading" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.2.5", description: "Use pictures, diagrams, and text features to locate information and verify their understanding of the information: table of contents, headings and subheadings, glossaries, indices, structures of narrative and different types of expository text and key ideas" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.2.6", description: "Continue to develop and demonstrate critical questioning strategies to gather information from favourite visual, musical, and written text: point of view/perspective, purpose, bias, subtle messages, cultural perspective" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.2.7", description: "Apply problem-solving strategies to follow written multi-step instructions effectively (e.g., how to assemble a product or play a game) while reflecting on their learning processes" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.2.8", description: "Use Independent Reading Time to develop: reading fluency (accuracy, phrasing, and intonation), recognise quotation marks and marker words (said, shouted, whispered, etc.) to determine the mood of the speaker in the text, connect punctuation in text to meaningful interpretation of sentences and paragraphs, change the rate of reading depending on the mood of the text, practice meaningful word solving strategies (root word, chunking, affixes, context clues), develop the art of skimming and scanning" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.2.9", description: "Use all sources of information (meaning, structure, visual) to search, check, self-monitor, and self-correct with grade appropriate, instructional-level text" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.2.10", description: "Develop an understanding of how illustrations enhance mood, establish setting, and advance plot in written or visual text" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.2.11", description: "Foster critical thinking skills and appreciation for the relationship between words and images in storytelling" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.2.12", description: "Apply higher-order thinking skills including analysis, synthesis, inference, and application to critically evaluate visual and/or text-based information" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.2.13", description: "Deepen understanding of the purpose and influences of different types of popular texts (e.g., websites, advertisements, social media, etc." },

  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.3.1", description: "Use prior knowledge and critical thinking skills to support comprehension of grade-appropriate texts" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.3.2", description: "Demonstrate continuing ability to use a repertoire of comprehension strategies, including those listed below, to understand and critique a range of genres and text forms: determining main idea, making connections, predicting, visualising, sequencing, inferring, analysing, synthesising, summarizing, questioning" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.3.3", description: "Continue to utilize contextual clues to derive meaning from language used in a variety of genres" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.3.4", description: "Deepen the ability to analyse and synthesise well thought out connections that promote understanding of text read and viewed across a variety of genres: text-to-self connections, text-to-text connections, text-to-world connections" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.3.5", description: "Continue to use various formats of print and digital dictionaries to aid comprehension of text across a range of genres" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.3.6", description: "Expand vocabulary through reading a range of authors, topics, and genres with a focus on attention on words and their derivatives" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.3.7", description: "Utilize with greater competence, print, digital and personal dictionaries to comprehend unfamiliar words and add them to vocabulary repertoire" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.3.8", description: "Continue to gain vocabulary through engagement of visual and graphical presentations: movies, videos, art, posters, infographics, advertisements" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.3.9", description: "Continue to build vocabulary through the use and application of: homonyms (homophones & homographs), antonyms, synonyms" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.3.10", description: "Utilize existing knowledge of figurative devices to enhance understanding of text: similes, metaphors, onomatopoeia, personification, alliteration" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.3.11", description: "Continue to extend vocabulary through the use of words encountered in cross-curricular content" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.3.12", description: "Extend the ability to apply knowledge of word structure to read unfamiliar vocabulary: word roots, prefixes, suffixes, inflectional endings" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.3.16", description: "Demonstrate a deeper understanding of how the flexibility of word order can be used to impact meaning" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.3.17", description: "Continue to apply knowledge of how reading fluency impacts understanding" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.3.18", description: "Deepen participation in shared reading opportunities to: improve fluency, guide intonation, convey the mood and intent of the text, expand vocabulary, increase comprehension" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.3.19", description: "Strengthen the awareness of how intentional word choice and phrasing may be used to persuade the reader and / or describe persons and events in positive or negative ways" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.3.20", description: "Improve reading comprehension by independently using background information and context clues to understand and apply unfamiliar words" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.3.21", description: "Improve reading comprehension through analytical word recognition with knowledge of roots, prefixes, suffixes, and syllabication" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.3.22", description: "Strengthen independent use of phonological patterns and word analysis to decipher words, improving reading speed, accuracy, and comprehension: vowel patterns, common digraphs, diphthongs, complicated letter patterns, words with silent letters" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.3.23", description: "Apply background knowledge and information from poetry, expository, narrative, persuasive, and descriptive texts to make and modify predictions" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.3.24", description: "Differentiate, with greater competence, main ideas from supporting information in poetry, expository, narrative, persuasive and descriptive texts" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.3.25", description: "Demonstrate appropriate use of prior knowledge of written and visual information to form a judgment about a particular point or issue" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.3.26", description: "Exhibit a strong understanding of meaningful and critical use of text features to locate and use information (titles, subtitles, table of contents, glossary, index, etc.)" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.3.27", description: "Appreciate the contribution of visual text components to facilitate comprehension and promote a deeper understanding of poetry, exposition, narration, and description: fonts, charts, images, pictures, maps" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.3.28", description: "Strengthen ability to recognize and provide examples of how author's choice of vocabulary, phrases, and sentences evoke emotions, enhance description, and create humour" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.3.29", description: "Provide examples to how to analyse how illustrations that create mood in visual text" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.3.30", description: "Use prior knowledge to discuss the effectiveness and possible hidden or persuasive (negative or positive) messages of emoticons and social media posts" },

  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.4.1", description: "Continue to compare and contrast understanding of authors' strategies to influence the purpose and form of various formats of fiction, nonfiction, poetry, and drama" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.4.2", description: "Demonstrate growing awareness that fiction, nonfiction, and poetry reflect a purpose and a point of view" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.4.3", description: "Identify different purposes for reading from selected passages" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.4.4", description: "Describe the author's theme/purpose and cite supporting evidence" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.4.5", description: "Respond critically to text by identifying instances where language is being used to manipulate, persuade, or control" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.4.6", description: "Discuss text with reference to purpose and style of a variety of illustrators of fiction, nonfiction, and poetry: to inform, to entertain, to persuade" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.4.7", description: "Demonstrate understanding of an author's style of plot development of fiction: fables, folk tales, fairy tales, and adventure stories: use of time sequence, use of descriptive language, use of dialogue" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.4.8", description: "Identify different genres of texts such as fiction, nonfiction, poetry, and drama and explain how each genre influences the reader's understanding and interpretation of the text" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.4.9", description: "Recognize and analyse text features such as headings, subheadings, illustrations, and captions to understand their influence on the meaning and comprehension of the text" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.4.10", description: "Compare and contrast the use of paragraphing in fiction and nonfiction texts to understand how it impacts the organization and clarity of ideas" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.4.11", description: "Analyse stanzas and rhyme schemes in poetry to comprehend how they contribute to the overall meaning and mood of the poem" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.4.12", description: "Examine dialogue markers (e.g., said, shouted, nodded, exclaimed, etc.), scenes, and stage directions in drama to understand their role in shaping characters, conflicts, and plot development" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.4.13", description: "Generate questions based on graphical representations e.g., charts, diagrams, posters, billboards, videos, etc." },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.4.14", description: "Recognise how authors use imagery, descriptive language, and vocabulary to create the tone and mood within the text" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.4.15", description: "Analyse the purpose of messages relayed through social media platforms as agents to inform, influence, misinform, bully, entertain, etc." },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.4.16", description: "Identify examples of how an author uses and develops characters through: descriptive language, informal and formal language, Home Language(s) and Standard English, dialogue" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.4.17", description: "Recognize and interpret authors' viewpoints through critical lens to determine the implied and explicit messages: in all genres, in advertisements, in product labels" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.4.18", description: "Further develop understanding of an illustrator's use of implied and explicit messages" },
  { subject: "language-arts", grade_level: "5", strand: "Reading and Viewing", code: "RV5.4.19", description: "Recognize how vocabulary usage creates imagery and aids interpretation and understanding of text" },

  // Grade 5 Writing and Representing
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.5.1", description: "Generate, gather and organize ideas and information to write for an intended purpose and audience" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.5.2", description: "Reflect on and identify strengths as writers, areas of improvement and the strategies found most useful at different stages of the writing process" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.5.3", description: "Brainstorm with paper based and digital text based or visual content for short research projects that build knowledge about a topic" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.5.4", description: "Continue to use personal interests or community experiences, music, books, documentaries, videos, pictures as writing prompts" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.5.5", description: "Maintain writing portfolios - drafts, revisions, personal writing prompts, etc." },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.5.6", description: "Use a variety of paper-based and digital resources to gather information to support and enhance the brainstorming process" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.5.7", description: "Examine samples of different genres as models for organizing a sequence of events, changes in setting, and character development" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.5.8", description: "Develop competence in organizing and arranging ideas and information to write for an intended purpose and audience" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.5.9", description: "Organize and strengthen writing during drafting stage" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.5.10", description: "Create and use simple paper based or digital graphic organizers to aid the organization of ideas (e.g., five-finger plan, story map, web, list, five Ws, and graphic organizers for specific forms of writing.)" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.5.11", description: "Continue to explore and experiment with various ways to express thoughts and ideas in various text forms (e.g., Narrative, Descriptive, Expository, Persuasive)" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.5.12", description: "Continue to utilize strategies to organize ideas into a draft that supports the topic, enhances clarity, and sequences logically" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.5.13", description: "Demonstrate understanding by using linking words and phrases to develop a logical progression of ideas and thoughts (e.g., linking/connecting words for emphasis, contrast, reasoning, illustration, etc.)" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.5.14", description: "Continue to explore and represent in written pieces: introductory/topic sentences, concluding sentences, paragraphs, a range of vocabulary to match the genre and purpose of the writing" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.5.15", description: "Continue to develop purpose and use of the form of simple, compound, and complex sentences" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.5.16", description: "Build on existing knowledge of the various genres: narrative writing, expository writing, descriptive writing, persuasive writing, poetry - (various patterns of rhyme, limerick, shape, haiku), book reports" },

  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.6.1", description: "Analyse and identify different organization styles used in written drafts and representations, including narrative, descriptive, expository, persuasive structures" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.6.2", description: "Evaluate the effectiveness of organization styles within various subgenres" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.6.3", description: "Revise written drafts to improve organization by selecting and applying appropriate organization styles based on the purpose, audience, and content of the writing" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.6.4", description: "Demonstrate proficiency in using graphic organizers, outlines, and other planning tools to structure and organize ideas effectively in written drafts" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.6.5", description: "Communicate ideas clearly and coherently through written drafts, employing transitions, topic sentences, and logical sequencing to enhance organization and flow" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.6.6", description: "Reflect on personal and peer own writing process and share strategic decisions to refine organization styles based on feedback from peers and teachers" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.6.7", description: "Apply principles of organization learned in writing drafts to other forms of representation, such as presentations, posters, and multimedia projects, to effectively communicate information and ideas" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.6.8", description: "Expand vocabulary by identifying and incorporating a variety of precise and descriptive vocabulary words into their written drafts" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.6.9", description: "Demonstrate the ability to select synonyms and antonyms to enhance the clarity, depth, and richness of their vocabulary choices in written compositions" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.6.10", description: "Apply context clues and word analysis strategies to infer the meanings of unfamiliar vocabulary words encountered in texts or oral language and effectively incorporate them into their writing" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.6.11", description: "Revise and refine t written drafts by replacing generic or repetitive vocabulary with more specific and nuanced language to convey precise meanings and evoke vivid imagery" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.6.12", description: "Analyse the impact of word choice on the tone, mood, and overall effectiveness of their written compositions, making deliberate decisions to select vocabulary that aligns with the intended purpose and audience" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.6.13", description: "Reflect on their vocabulary learning process, identifying strengths and areas for growth, and setting goals for further expanding and diversifying their vocabulary skills in future writing endeavours" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.6.14", description: "Engage in peer collaboration and feedback sessions to receive input on their vocabulary usage in written drafts, providing constructive suggestions for improvement and implementing revisions based on peer and teacher feedback" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.6.15", description: "With increased independence, identify and correct grammatical errors in written drafts, including errors related to verb tense, subject-verb agreement, punctuation, and sentence structure" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.6.16", description: "Revise written drafts to enhance sentence fluency, ensuring that sentences are varied in length and structure, and flow smoothly from one to the next" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.6.17", description: "Apply knowledge of sentence-level grammar rules and conventions to improve the clarity, coherence, and readability of written compositions" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.6.18", description: "Demonstrate mastery of transitional devices and cohesive elements to connect ideas within and between sentences, paragraphs, and sections of written drafts" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.6.19", description: "Analyse the impact of different sentence structures and stylistic choices on the overall effectiveness and tone of written compositions" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.6.20", description: "Collaborate with peers to provide and receive constructive feedback on grammar and sentence fluency in written drafts, incorporating feedback to revise and improve the quality of writing" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.6.21", description: "Reflect on personal growth and development in language use, identifying areas of strength and areas for improvement in grammar and sentence fluency skills" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.6.22", description: "Apply revision strategies and techniques learned in the writing process to independently revise and polish written drafts for grammar and sentence fluency prior to final submission" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.6.23", description: "Demonstrate an enhanced ability to effectively express ideas and convey meaning through written and visual representations, employing appropriate language use, clarity, and coherence" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.6.24", description: "Understand and use formal, informal, Home Language and Standard English as appropriate to the purpose, topic, setting, plot line and characters in writing" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.6.25", description: "Continue to engage in individual and peer revision opportunities to share drafts and provide/ receive feedback on elements of grammar and sentence fluency such as: use of simple verb tenses (e.g., I walked; I walk; I will walk), comparative and superlative adjectives and adverbs, form and use possessives, subject and verb and pronoun-antecedent agreement, use of simple, compound and complex sentence patterns, determining complete and incomplete sentences" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.6.26", description: "Make use of reference material (e.g., dictionaries, glossaries, thesauruses), both print and digital, to find the pronunciation and determine or clarify the precise meaning of key words and phrases for use in their writing" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.6.27", description: "Make use of figurative language to revise and enhance their writing (e.g., similes, metaphors, onomatopoeia, hyperbole, idioms, alliteration, etc.)" },

  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.7.1", description: "Continue to apply learning and further develop personal proficiency in spelling, contributing to the overall quality of written work (affixes, synonyms, antonyms, root words)" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.7.2", description: "Transfer understanding of spelling conventions across various subjects" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.7.3", description: "Further develop self-monitoring strategies to notice and correct spelling errors" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.7.4", description: "Develop proficiency in the use of punctuation conventions, including: full stops, commas, apostrophes, other punctuation marks as needed to accurately convey meaning and enhance the clarity of written work" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.7.5", description: "Begin to make decision about the strategic use of punctuation, considering the potential impact on sentence structure and overall coherence of the passage" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.7.6", description: "Connect punctuation choice to decisions about style and format" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.7.7", description: "Employ a range of presentation formats r based on the nature of the content and the intended audience" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.7.8", description: "Integrate visual elements, including images, charts, graphs, and other graphics, into written work to enhance overall clarity and appeal to the reader" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.7.9", description: "Publish written work for varying audiences using various tools" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.7.10", description: "Engage in collaborative projects to create and present written content using various formats" },
  { subject: "language-arts", grade_level: "5", strand: "Writing and Representing", code: "WR5.7.11", description: "Add titles, cover images, tables of content, glossaries, book blurbs, information about the author, etc. as needed" },

  // Grade 6 Language Arts
  // SPEAKING AND LISTENING
  { subject: "language-arts", grade_level: "6", strand: "Speaking and Listening", code: "LS6.1.1", description: "Participate in opportunities to develop oral language through class discussions, debates, storytelling, oral poetry, and singing" },
  { subject: "language-arts", grade_level: "6", strand: "Speaking and Listening", code: "LS6.1.2", description: "Continue to explore a variety of genres and styles in spoken language on topics of interest and personal growth (conversations, debates, poetry, storytelling, interviews, etc.)" },
  { subject: "language-arts", grade_level: "6", strand: "Speaking and Listening", code: "LS6.1.3", description: "Express preferences in written, visual, and oral communication genres and styles and explain the reasons behind their choices" },
  { subject: "language-arts", grade_level: "6", strand: "Speaking and Listening", code: "LS6.1.4", description: "Use technology to enhance listening and speaking skills, such as recording and listening to their own speech, creating podcasts, live streams, videos" },
  { subject: "language-arts", grade_level: "6", strand: "Speaking and Listening", code: "LS6.1.5", description: "Speak and listen critically to explore, extend, clarify, and reflect on their thoughts, ideas, feelings, and experiences" },
  { subject: "language-arts", grade_level: "6", strand: "Speaking and Listening", code: "LS6.1.6", description: "Listen to oral presentations to identify useful details for application" },
  { subject: "language-arts", grade_level: "6", strand: "Speaking and Listening", code: "LS6.1.7", description: "Listen to speeches, songs, poems etc. to determine literal and inferential meaning" },
  { subject: "language-arts", grade_level: "6", strand: "Speaking and Listening", code: "LS6.1.8", description: "Listen to traditional stories and songs to learn about culture, history, and social justice issues, such as the impact of colonialism" },
  { subject: "language-arts", grade_level: "6", strand: "Speaking and Listening", code: "LS6.1.9", description: "Listen to audio material to expand cultural perspectives/identify differences among cultures and subcultures" },
  { subject: "language-arts", grade_level: "6", strand: "Speaking and Listening", code: "LS6.1.10", description: "Formulate and ask questions for clarification (that require background or contextual information)" },
  { subject: "language-arts", grade_level: "6", strand: "Speaking and Listening", code: "LS6.1.11", description: "Apply knowledge of Home Language(s) and Standard English to understand how language functions in different contexts, to make effective choices for meaning or style, and to comprehend more fully when listening" },
  { subject: "language-arts", grade_level: "6", strand: "Speaking and Listening", code: "LS6.1.12", description: "Use vocabulary appropriate to topic and audience (e.g., content specific words such as 'global warming', 'critical thinking', etc.)" },
  { subject: "language-arts", grade_level: "6", strand: "Speaking and Listening", code: "LS6.1.13", description: "Demonstrate command of the purpose of the conventions of using Standard English grammar and usage" },
  { subject: "language-arts", grade_level: "6", strand: "Speaking and Listening", code: "LS6.1.14", description: "Use precise language and domain-specific vocabulary as necessary to inform about or explain the topic" },
  { subject: "language-arts", grade_level: "6", strand: "Speaking and Listening", code: "LS6.1.15", description: "Integrate and evaluate information presented in diverse media and formats, including visually and orally" },
  { subject: "language-arts", grade_level: "6", strand: "Speaking and Listening", code: "LS6.1.16", description: "Contribute thoughts, ideas, and questions to class or peer group discussions and compare their own ideas with those of peers" },
  { subject: "language-arts", grade_level: "6", strand: "Speaking and Listening", code: "LS6.1.17", description: "Listen critically to others' ideas or opinions and points of view" },
  { subject: "language-arts", grade_level: "6", strand: "Speaking and Listening", code: "LS6.1.18", description: "Present/discuss in their own words, information that is accurate, states a topic, follows an organizational structure, and includes specific and relevant examples and details (e.g., results of a scientific experiment, historical or recreational event)" },
  { subject: "language-arts", grade_level: "6", strand: "Speaking and Listening", code: "LS6.1.19", description: "Present information, findings, and supporting evidence clearly, concisely, and logically such that listeners can follow the line of reasoning and the organization, development, substance, and style are appropriate to purpose, audience, and task" },
  { subject: "language-arts", grade_level: "6", strand: "Speaking and Listening", code: "LS6.1.20", description: "Demonstrate attentive listening in non-verbal ways (e.g., take notes, sketch or diagram key ideas, nod to show agreement, use facial expressions)" },
  { subject: "language-arts", grade_level: "6", strand: "Speaking and Listening", code: "LS6.1.21", description: "Synthesize viewpoints of others and discuss options to resolve any outstanding differences" },
  { subject: "language-arts", grade_level: "6", strand: "Speaking and Listening", code: "LS6.1.22", description: "Use appropriate strategies for making connections with audience (e.g., position themselves so others can see and hear, use body language such as smiling or making eye contact)" },
  { subject: "language-arts", grade_level: "6", strand: "Speaking and Listening", code: "LS6.1.23", description: "Identify, in conversation with teacher and peers, the strategies they found most useful before, during and after listening and speaking and what steps they can take to improve their oral communication skills" },
  { subject: "language-arts", grade_level: "6", strand: "Speaking and Listening", code: "LS6.1.24", description: "Identify persuasive and propaganda techniques used in television and identify false and misleading information" },
  { subject: "language-arts", grade_level: "6", strand: "Speaking and Listening", code: "LS6.1.25", description: "Evaluate a speaker's point of view, reasoning, and use of evidence" },
  { subject: "language-arts", grade_level: "6", strand: "Speaking and Listening", code: "LS6.1.26", description: "Explain their own viewpoints and give reasons and if applicable, support judgments through references to a text and prior knowledge and other sources of evidence" },
  { subject: "language-arts", grade_level: "6", strand: "Speaking and Listening", code: "LS6.1.27", description: "Use knowledge of language and its conventions when speaking or listening" },
  { subject: "language-arts", grade_level: "6", strand: "Speaking and Listening", code: "LS6.1.28", description: "Adapt speech to a variety of contexts and tasks, using formal English and native language when appropriate to task and situation" },
  { subject: "language-arts", grade_level: "6", strand: "Speaking and Listening", code: "LS6.1.29", description: "Recognize variations from standard English in their own and others' speaking; identify and use strategies to improve expression in conventional language" },
  { subject: "language-arts", grade_level: "6", strand: "Speaking and Listening", code: "LS6.1.30", description: "Include multimedia components (e.g., graphics, sound) and visual displays in presentations when appropriate to enhance the development of main ideas or themes" },
  { subject: "language-arts", grade_level: "6", strand: "Speaking and Listening", code: "LS6.1.31", description: "Identify parts of oral/audio presentations which contain required details/information" },
  { subject: "language-arts", grade_level: "6", strand: "Speaking and Listening", code: "LS6.1.32", description: "Interact with sensitivity and respect, considering the situation, audience, and purpose" },

  // READING AND VIEWING
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.2.1", description: "Select a range of varied and engaging paper-based, digital, visual texts for Independent Reading based on: Interests, Learning needs, Appropriate level of difficulty, Various genres, Diverse cultures, Subject area research" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.2.2", description: "Utilize background knowledge to: Better comprehend a topic, picture, or title before, during and after reading; Question and analyse information in text read; Share connections between their experiences and the themes or settings of the books read" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.2.3", description: "Read a wide range of genres and formats to experience literature from the Caribbean and other cultures during Independent Reading Time" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.2.4", description: "Reflect on and identify their strengths and areas for improvement as readers while utilizing the strategies they found most useful during reading" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.2.5", description: "Use pictures and illustrations, word structures and text features in chosen texts to locate information and verify their understanding of the information: Table of contents, Headings and subheadings, Glossaries, Indices, Structures of narrative and different types of expository text and key ideas" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.2.6", description: "Continue to develop and demonstrate critical questioning strategies to gather information from favourite visual, musical, and written text re: Point of view/perspective, Purpose, Bias, Subtle and persuasive messages, Cultural perspective" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.2.7", description: "Apply problem-solving strategies to follow increasingly complex written multi-step instructions effectively (e.g., how to conduct and experiment, assemble a product, or play a game) while reflecting on their learning processes" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.2.8", description: "Use Independent Reading Time to develop: reading fluency (accuracy, phrasing, and intonation); Recognise quotation marks and marker words (said, shouted, whispered, etc.) to determine the mood of the speaker in the text; Connect punctuation in text to meaningful interpretation of sentences and paragraphs; Change the rate of reading depending on the mood of the text; Practice meaningful word solving strategies (root word, chunking, affixes, context clues); Searching for evidence within a text; Develop the art of skimming and scanning" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.2.9", description: "Use all sources of information (meaning, structure, visual) to self-monitor, search, self-correct, and check, with instructional-level text" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.2.10", description: "Develop an understanding of how illustrations enhance mood, establish setting, and advance plot in written or visual text" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.2.11", description: "Foster critical thinking skills and appreciation for the relationship between words and images in storytelling" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.2.12", description: "Apply higher-order thinking skills including analysis, synthesis, inference, and application to critically evaluate visual and/or text-based information" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.2.13", description: "Deepen understanding of the purpose and influences of different types of popular texts (e.g., websites, advertisements, social media, etc." },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.3.1", description: "Use prior knowledge and critical thinking skills to support increased comprehension within the Proficient range of text difficulty" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.3.2", description: "Demonstrate continuing ability to use a repertoire of comprehension strategies, including those listed below, to understand and critique a range of genres and text forms: Determining the main idea, Making connections, Predicting, Visualising, Sequencing, Inferring, Analysing, Synthesising, Summarizing, Questioning" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.3.3", description: "Continue to utilize contextual clues to derive meaning from language used in a variety of genres" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.3.4", description: "Expand the process of making connections to promote understanding of information read and viewed across various genres: Text-to-self connections, Text-to-text connections, Text-to-world connections" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.3.5", description: "Continue to utilize print and digital dictionaries to aid comprehension of written text across a range of genres" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.3.6", description: "Deepen and widen vocabulary through reading a range of genres, topics, and works produced by a variety of authors" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.3.7", description: "Utilize with greater competence, print, visual, digital, and personal dictionaries to comprehend unfamiliar words and add them to the vocabulary repertoire" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.3.8", description: "Continue to gain vocabulary through the engagement of visual and graphical presentations: Movies, Videos, Art, Posters, Infographics, Advertisements" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.3.9", description: "Continue to build vocabulary through the use and application of: Homonyms (homophones & homographs), Antonyms, Synonyms" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.3.10", description: "Utilize existing knowledge of figurative devices to enhance understanding of text: Similes, Metaphors, Onomatopoeia, Personification, Alliteration" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.3.11", description: "Continue to extend vocabulary through the use of words encountered in cross-curricular content" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.3.12", description: "Extend the ability to apply knowledge of word structure to read unfamiliar vocabulary: Identifying root words, Expanding root words with the meaningful use of: Prefixes, Suffixes, Inflectional endings" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.3.13", description: "Demonstrate a deeper understanding of how word order impacts meaning" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.3.14", description: "Continue to apply knowledge of how reading fluency impacts understanding" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.3.15", description: "Deepen participation in reading opportunities to: Improve fluency, Guide intonation, Convey the mood and intent of the text, Expand vocabulary, Increase comprehension" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.3.16", description: "Strengthen the awareness of how intentional word choice, phrasing, formal or informal language structures may be used to describe or influence persons and events in positive or negative ways" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.3.17", description: "Improve reading comprehension by confidently using background information and context clues to grasp and understand unusual words" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.3.18", description: "Improve reading comprehension and word recognition by applying knowledge of roots, prefixes, suffixes, and syllabication" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.3.19", description: "Strengthen comprehension, reading speed, and accuracy by applying known vocabulary, and word analysis strategies to decipher words: Common and novel vowel patterns, Common digraphs, Diphthongs, Unexpected letter patterns, Words with silent letters" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.3.20", description: "Apply background knowledge and information from poetry, expository, narrative, persuasive, and descriptive texts to make and modify predictions about text" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.3.21", description: "Differentiate, with greater competence, main ideas from supporting information in poetry, expository and narrative text" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.3.22", description: "Apply prior knowledge of written and visual information to form a conclusion or judgment about a particular topic or issue" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.3.23", description: "exhibit a strong understanding of meaningful and critical use of individual or selected text features to locate and use information (titles, subtitles, table of contents, glossary, index, etc.)" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.3.24", description: "Appreciate the contribution of visual components make to facilitate comprehension and promote a deeper understanding of poetry, exposition, narration, and description: Fonts, Charts, Images, Pictures, Maps, Icons, Numerical symbols" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.3.25", description: "Recognize, provide examples and explain how author's choice of vocabulary, phrases, and sentences evoke emotions, enhance description, create humour, persuade, or inform" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.3.26", description: "Provide examples to demonstrate how illustrators use a variety of techniques create and/or enhance mood in visual text" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.3.27", description: "Utilize prior knowledge to discuss the effectiveness and possible use emoticons and social media posts to convey misinformation or disinformation" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.4.1", description: "Continue to compare and contrast how authors chose a genre of fiction, nonfiction, poetry, song, and drama to convey their message" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.4.2", description: "Demonstrate growing awareness of how authors choice of genre reflects the text's purpose and point of view" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.4.3", description: "Identify and reflect on different personal and social purposes for reading print based or digital text" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.4.4", description: "Describe the author's theme/purpose and cite supporting evidence from the text" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.4.5", description: "Respond critically to text by identifying instances where language is being used positively or negatively to manipulate, persuade, or control" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.4.6", description: "Discuss texts regarding the purpose and style of a variety of illustrators of fiction, nonfiction, and poetry: To inform, To entertain, To persuade" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.4.7", description: "Demonstrate understanding of an author's style of plot development of fiction: fables, folk tales, fairy tales, and adventure stories: Use of traditional and nontraditional time sequence, Use of descriptive language, Use of formal and informal dialogue" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.4.8", description: "Identify different genres of texts such as fiction, nonfiction, poetry, song, and drama, and explain how each genre influences the reader's understanding and interpretation of the text" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.4.9", description: "Recognize and analyse text features such as headings, subheadings, illustrations, captions, etc. to understand their influence on the meaning and comprehension of the text" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.4.10", description: "Identify examples of how an author uses and develops characters through: Descriptive language, Setting, Informal and formal language, Home Language(s) and Standard English, Dialogue" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.4.11", description: "Recognize and interpret authors' viewpoints through critical lens to determine the implied and explicit messages: In all genres, In advertisements, In product labels" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.4.12", description: "Further develop understanding of an illustrator's use of implied and explicit messages" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.4.13", description: "Identify descriptive words and phrases in a text and analyse how these contribute to creating vivid mental images" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.4.14", description: "Determine the connotative meaning of words and phrases and explain how these contribute to the mood and tone of the text" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.4.15", description: "Use context clues to infer the meaning of unfamiliar vocabulary and explain how understanding these words enhances comprehension of the text" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.4.16", description: "Use specific vocabulary to create imagery in their own writing, demonstrating an understanding of how word choice can influence interpretation" },
  { subject: "language-arts", grade_level: "6", strand: "Reading and Viewing", code: "RV6.4.17", description: "Evaluate how an author's choice of vocabulary affects the reader's understanding and interpretation of a text, providing examples from the text to support their evaluation" },

  // WRITING AND REPRESENTING
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.5.1", description: "Use a variety of strategies to generate and organize ideas for writing (e.g., brainstorming, listing, outline, freewriting, webs, clusters, graphic organizers, mind map)" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.5.2", description: "Identify and maintain the topic, purpose, audience, and form of writing throughout the brainstorming process" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.5.3", description: "Develop the topic with relevant facts, definitions, concrete details, quotations, or other information and examples" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.5.4", description: "Use a variety of paper-based and digital resources to gather information to support and enhance the brainstorming process" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.5.5", description: "Recall relevant information from experiences or gather relevant information from print and digital sources; summarize or paraphrase information in notes and finished work; and provide a list of sources" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.5.6", description: "Maintain a writing journal and use it as a resource for ideas for writing" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.5.7", description: "Use a draft to construct and convey meaning in written language, matching style to audience and purpose" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.5.8", description: "Connect draft writing to personal understanding of a variety of literary genres" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.5.9", description: "Write entries in journals on a range of topics e.g., responses to literature, dialogue with peer or teacher, learning logs, etc." },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.5.10", description: "Analyse samples of effective and engaging writing in various forms and genres" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.5.11", description: "Use standard formats, conventions, and language features when writing a variety of text types, e.g., journals, e-mails, formal letters, reports, summaries" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.5.12", description: "Create a variety of simple poems including free verse using sensory details and literary devices, with a focus on using descriptive vocabulary" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.5.13", description: "Write narratives to develop real or imagined experiences (personal, realistic fiction, imaginary) or events using effective technique, well-chosen details, and well-structured event sequences" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.5.14", description: "Use narrative techniques, such as dialogue and description to develop experiences and events" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.5.15", description: "Use literary devices, such as similes, metaphors, hyperbole, and personification effectively in writing" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.5.16", description: "Link ideas, opinion, and rationale using words, phrases, and clauses, (e.g., consequently, specifically)" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.5.17", description: "Produce expository pieces (5 paragraphs) in which there is clear evidence of organization, development, and conclusion according to the target audience and purpose for writing e.g., cause and effect, writing to inform, explain, give directions, give reasons, problem/solutions etc." },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.5.18", description: "Produce a variety of media texts for specific purposes and audiences, using appropriate forms, conventions, and techniques (e.g., a public announcement, school newspaper, a poster, advertisement, social media campaign to raise awareness, a computer-generated cover design, including special fonts to enhance a published piece of writing" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.5.19", description: "Write a persuasive piece with a specific audience in mind that clearly introduces a position and is justified with three clear reasons and relevant evidence to support the writer's purpose and a conclusion to restate the purpose" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.5.20", description: "Use precise words and phrases, relevant descriptive details, and sensory language to produce a vivid descriptive piece" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.5.21", description: "Write formal and informal forms of written communications using a suitable format, tone and language most appropriate to the intended audience e.g. Simple notices, announcements and thank you notes, letters, emails, etc." },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.5.22", description: "Conduct short research projects that use several sources to build knowledge through investigation of different aspects of a topic" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.5.23", description: "Write responses to literature e.g., a book report or book review, an interpretation of the text that demonstrates understanding" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.5.24", description: "Produce text such as drama script, a comic strip, and cartoons in response to a text read or viewed" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.5.25", description: "Write routinely over extended time frames (time for research, reflection, and revision) and shorter time frames (a single sitting or a day or two) for a range of discipline-specific tasks, purposes, and audiences" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.6.1", description: "Revise to improve the content and clarity of their written work, using a variety of strategies e.g., sticky notes, read aloud, acronyms, checklist, peer feedback, etc." },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.6.2", description: "Produce clear and coherent writing in which the development, organization and style are appropriate to task, purpose, and audience" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.6.3", description: "Utilize the six traits of writing to craft diverse, well-defined essays tailored to various purposes and audiences (e.g., ideas, sentence fluency, effective word choice, voice, organization that is meaningful, logical, and effective; identifying an audience, genre, and form" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.6.4", description: "Develop competence in the use of assessment strategies and checklists to improve the organisation of a draft" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.6.5", description: "Use selected words that match the desired mood or feeling of a poem, replacing basic writing more emotionally impactful words or phrases" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.6.6", description: "Use a variety of transitional words, phrases, and clauses to effectively manage the sequence of events" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.6.7", description: "Use concrete words and phrases and sensory words and details to convey experiences and events precisely" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.6.8", description: "Determine or clarify the meaning of unknown and multiple-meaning words and phrases by using context clues, analysing meaningful word parts, and consulting general reference materials, as appropriate" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.6.9", description: "Use words/phrases from other subject areas and from reading in developing texts" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.6.10", description: "Demonstrate understanding of figurative language (similes, metaphor, personification, and hyperbole), word relationships, and nuances in word meanings" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.6.11", description: "Use some innovative expressions to enhance interest (e.g., strong verbs; concrete, specific nouns; unusual adjectives; unexpected word order, synonyms and antonyms)" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.6.12", description: "Revise their work to eliminate any errors of concord (subject / verb agreement), and errors of agreement between pronouns and their antecedents" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.6.13", description: "Use a range of well constructed simple, complex, compound and compound-complex sentences in writing" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.6.14", description: "Produce complete sentences by monitoring for and self correcting inappropriate sentence fragments and run-ons" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.6.15", description: "Revise and reorder sentences for clarity and better organisation; select words for their more precise meanings" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.6.16", description: "Use parts of speech correctly to communicate their meaning clearly with focus on the use of: Personal subject and object pronouns, Indefinite and reflexive pronouns, Conjunctions; subordinate and coordinating conjunctions, Adverb phrases, Present, past, continuous and future verb tenses, Prepositional phrase, Comparative adjective and adverbs" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.6.17", description: "Choose language that expresses ideas precisely and concisely, recognizing and eliminating wordiness and redundancy" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.6.18", description: "Establish a consistent point of view in their writing (e.g., first or third person); write from different perspectives" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.6.19", description: "Maintain consistency in style and tone" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.6.20", description: "Recognize intentional and unintentional variations from Standard English in their own and others' writing and identify and use strategies to improve expression in conventional language" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.7.1", description: "Monitor and check spelling errors to improve fluency, legibility, and overall effectiveness of a piece of writing" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.7.2", description: "Spell unfamiliar words using a variety of strategies that involve: Understanding sound-symbol relationships, word structures, Word meanings, Generalizations about spelling, Knowledge of spelling rules and exceptions" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.7.3", description: "Use punctuation to effectively communicate intended meaning e.g., commas, quotation marks, colon, semicolon, hyphen, exclamation mark and brackets" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.7.4", description: "Demonstrate a command of the conventions of Standard English - capitalization, spelling and punctuation when writing" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.7.5", description: "Make strategic use of digital media (e.g., textual, graphical, audio, visual and interactive elements) in presentations to enhance understanding of findings, reasoning, and evidence and to add interest" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.7.6", description: "With some guidance and support, use technology, including the internet, to produce and publish writing as well as to interact and collaborate with others" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.7.7", description: "Select a range of editing, proofreading, and presenting strategies to develop effective pieces of writing and other forms of representation" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.7.8", description: "Include graphics to explain a concept in simple non-technical terms" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.7.9", description: "Present a portfolio which contains samples of work accumulated since grade four" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.7.10", description: "Consult reference materials (e.g., dictionaries, glossaries, thesauruses), both print and digital, to find the pronunciation of a word or determine or clarify its precise meaning or its part of speech" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.7.11", description: "Use the conventions of written language in final products" },
  { subject: "language-arts", grade_level: "6", strand: "Writing and Representing", code: "WR6.7.12", description: "Review articles from paper based newspapers, magazines, online articles to identify and correct common errors in spelling, punctuation, language use. Examine with critical thought to identify any instances of partiality in writing" }

];


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
      <h1 className="text-4xl font-bold mb-8 text-center text-green-700">Curriculum Outcomes Database</h1>
      
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