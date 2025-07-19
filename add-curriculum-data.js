const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Connect to the database
const dbPath = path.join(__dirname, 'data', 'sqlite.db');
const db = new sqlite3.Database(dbPath);

console.log('Adding sample curriculum data...\n');

// Sample curriculum data
const sampleData = {
  strands: [
    {
      name: "Number Sense and Operations",
      description: "Understanding numbers, their relationships, and operations including addition, subtraction, multiplication, and division.",
      sort_order: 1
    },
    {
      name: "Patterns and Relationships",
      description: "Recognizing, describing, and extending patterns and understanding relationships between quantities.",
      sort_order: 2
    },
    {
      name: "Geometry and Spatial Sense",
      description: "Understanding geometric shapes, spatial relationships, and measurement concepts.",
      sort_order: 3
    },
    {
      name: "Data Management and Probability",
      description: "Collecting, organizing, and interpreting data, and understanding basic probability concepts.",
      sort_order: 4
    }
  ],
  essentialLearningOutcomes: [
    {
      strandId: 1,
      code: "ELO 1",
      description: "Students will demonstrate number sense and apply number theory concepts.",
      gradeExpectations: "Grade 1-3: Count, represent, and compare numbers. Grade 4-6: Understand place value and operations."
    },
    {
      strandId: 1,
      code: "ELO 2", 
      description: "Students will demonstrate computational fluency and accuracy.",
      gradeExpectations: "Grade 1-3: Basic addition and subtraction. Grade 4-6: All operations with larger numbers."
    },
    {
      strandId: 2,
      code: "ELO 3",
      description: "Students will recognize, describe, and extend patterns and relationships.",
      gradeExpectations: "Grade 1-3: Simple patterns. Grade 4-6: Complex patterns and algebraic thinking."
    },
    {
      strandId: 3,
      code: "ELO 4",
      description: "Students will demonstrate spatial sense and apply geometric properties.",
      gradeExpectations: "Grade 1-3: Basic shapes and spatial awareness. Grade 4-6: Geometric properties and transformations."
    }
  ],
  specificCurriculumOutcomes: [
    {
      eloId: 1,
      code: "1.1",
      description: "Count forward and backward by 1s, 2s, 5s, and 10s to 100."
    },
    {
      eloId: 1,
      code: "1.2", 
      description: "Represent numbers to 100 using concrete materials, pictures, and numerals."
    },
    {
      eloId: 2,
      code: "2.1",
      description: "Demonstrate an understanding of addition and subtraction of numbers to 20."
    },
    {
      eloId: 3,
      code: "3.1",
      description: "Identify, describe, and extend patterns in various contexts."
    },
    {
      eloId: 4,
      code: "4.1",
      description: "Sort, classify, and construct 2-D shapes and 3-D objects."
    }
  ],
  learningStrategies: [
    {
      scoId: 1,
      title: "Number Line Activities",
      description: "Use number lines to help students visualize counting and number relationships.",
      resources: "Number line charts, manipulatives, digital number line apps",
      integrations: "Connect with measurement and time concepts"
    },
    {
      scoId: 2,
      title: "Place Value Games",
      description: "Interactive games to reinforce place value understanding using base-ten blocks.",
      resources: "Base-ten blocks, place value charts, online games",
      integrations: "Integrate with money concepts and decimal understanding"
    },
    {
      scoId: 3,
      title: "Story Problems",
      description: "Use real-world contexts to teach addition and subtraction concepts.",
      resources: "Picture books, word problem cards, manipulatives",
      integrations: "Connect with language arts and social studies themes"
    },
    {
      scoId: 4,
      title: "Pattern Recognition Activities",
      description: "Hands-on activities to identify and create patterns using various materials.",
      resources: "Pattern blocks, beads, colored tiles, pattern cards",
      integrations: "Integrate with art and music patterns"
    },
    {
      scoId: 5,
      title: "Geometry Exploration",
      description: "Exploratory activities to discover geometric properties and relationships.",
      resources: "Geometric shapes, mirrors, pattern blocks, digital geometry tools",
      integrations: "Connect with art, architecture, and design"
    }
  ],
  resources: [
    {
      strandId: 1,
      title: "Number Sense Activities Book",
      type: "Book",
      url: "https://example.com/number-sense-book",
      description: "Comprehensive collection of number sense activities for grades 1-6."
    },
    {
      strandId: 2,
      title: "Pattern Recognition Video Series",
      type: "Video",
      url: "https://example.com/pattern-videos",
      description: "Video series demonstrating pattern recognition strategies and activities."
    },
    {
      strandId: 3,
      title: "Geometry Manipulatives Kit",
      type: "Physical Resource",
      url: "",
      description: "Complete set of geometric shapes and tools for hands-on learning."
    },
    {
      strandId: 4,
      title: "Data Collection Website",
      type: "Website",
      url: "https://example.com/data-collection",
      description: "Interactive website for collecting and analyzing classroom data."
    }
  ],
  teacherContent: [
    {
      eloId: 1,
      title: "Understanding Number Sense Development",
      content: "Number sense develops through concrete experiences with counting, comparing, and representing numbers. Students progress from counting objects to understanding abstract number concepts.",
      resources: "Research articles on number sense development, assessment tools, progression charts"
    },
    {
      eloId: 2,
      title: "Teaching Computational Fluency",
      content: "Computational fluency involves understanding, accuracy, efficiency, and flexibility. Students need both conceptual understanding and procedural fluency.",
      resources: "Fluency practice materials, assessment rubrics, intervention strategies"
    },
    {
      eloId: 3,
      title: "Pattern Recognition in Mathematics",
      content: "Pattern recognition is fundamental to mathematical thinking. Students should identify patterns in numbers, shapes, and real-world contexts.",
      resources: "Pattern recognition activities, assessment tools, extension materials"
    },
    {
      eloId: 4,
      title: "Spatial Sense and Geometry",
      content: "Spatial sense involves understanding relationships between objects in space. Geometry provides tools for describing and analyzing these relationships.",
      resources: "Spatial reasoning activities, geometry manipulatives, assessment materials"
    }
  ]
};

// Insert sample data
async function insertSampleData() {
  console.log('Inserting strands...');
  for (const strand of sampleData.strands) {
    db.run(`INSERT INTO strands (name, description, sort_order) VALUES (?, ?, ?)`, 
      [strand.name, strand.description, strand.sort_order], function(err) {
      if (err) {
        console.error('Error inserting strand:', err);
      } else {
        console.log(`Inserted strand: ${strand.name}`);
      }
    });
  }

  // Wait for strands to be inserted, then insert ELOs
  setTimeout(() => {
    console.log('\nInserting Essential Learning Outcomes...');
    for (const elo of sampleData.essentialLearningOutcomes) {
      db.run(`INSERT INTO essential_learning_outcomes (strand_id, code, description, grade_expectations) VALUES (?, ?, ?, ?)`,
        [elo.strandId, elo.code, elo.description, elo.gradeExpectations], function(err) {
        if (err) {
          console.error('Error inserting ELO:', err);
        } else {
          console.log(`Inserted ELO: ${elo.code}`);
        }
      });
    }

    // Wait for ELOs to be inserted, then insert SCOs
    setTimeout(() => {
      console.log('\nInserting Specific Curriculum Outcomes...');
      for (const sco of sampleData.specificCurriculumOutcomes) {
        db.run(`INSERT INTO specific_curriculum_outcomes (elo_id, code, description) VALUES (?, ?, ?)`,
          [sco.eloId, sco.code, sco.description], function(err) {
          if (err) {
            console.error('Error inserting SCO:', err);
          } else {
            console.log(`Inserted SCO: ${sco.code}`);
          }
        });
      }

      // Wait for SCOs to be inserted, then insert learning strategies
      setTimeout(() => {
        console.log('\nInserting Learning Strategies...');
        for (const strategy of sampleData.learningStrategies) {
          db.run(`INSERT INTO learning_strategies (sco_id, title, description, resources, integrations) VALUES (?, ?, ?, ?, ?)`,
            [strategy.scoId, strategy.title, strategy.description, strategy.resources, strategy.integrations], function(err) {
            if (err) {
              console.error('Error inserting learning strategy:', err);
            } else {
              console.log(`Inserted strategy: ${strategy.title}`);
            }
          });
        }

        // Insert resources and teacher content
        setTimeout(() => {
          console.log('\nInserting Resources...');
          for (const resource of sampleData.resources) {
            db.run(`INSERT INTO resources (strand_id, title, type, url, description) VALUES (?, ?, ?, ?, ?)`,
              [resource.strandId, resource.title, resource.type, resource.url, resource.description], function(err) {
              if (err) {
                console.error('Error inserting resource:', err);
              } else {
                console.log(`Inserted resource: ${resource.title}`);
              }
            });
          }

          setTimeout(() => {
            console.log('\nInserting Teacher Content...');
            for (const content of sampleData.teacherContent) {
              db.run(`INSERT INTO teacher_content (elo_id, title, content, resources) VALUES (?, ?, ?, ?)`,
                [content.eloId, content.title, content.content, content.resources], function(err) {
                if (err) {
                  console.error('Error inserting teacher content:', err);
                } else {
                  console.log(`Inserted teacher content: ${content.title}`);
                }
              });
            }

            // Final check
            setTimeout(() => {
              console.log('\nSample curriculum data added successfully!');
              console.log('You can now test the curriculum search functionality.');
              db.close();
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

insertSampleData(); 