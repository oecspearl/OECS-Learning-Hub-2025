const { getCurriculumStandards } = require('../lib/curriculum-standards.ts');

async function testStandardsDisplay() {
  console.log('Testing Standards Display from Database...\n');
  
  try {
    // Test mathematics standards
    console.log('=== MATHEMATICS STANDARDS ===');
    const mathStandards = await getCurriculumStandards('mathematics', '1');
    console.log(`Found ${mathStandards.length} mathematics standards for grade 1`);
    
    if (mathStandards.length > 0) {
      console.log('\nFirst 5 mathematics standards:');
      mathStandards.slice(0, 5).forEach((standard, index) => {
        console.log(`${index + 1}. Code: ${standard.code}`);
        console.log(`   Subject: ${standard.subject}`);
        console.log(`   Grade: ${standard.grade_level}`);
        console.log(`   Strand: ${standard.strand}`);
        console.log(`   Description: ${standard.description.substring(0, 100)}...`);
        console.log('');
      });
    } else {
      console.log('No mathematics standards found!');
    }
    
    // Test language arts standards
    console.log('=== LANGUAGE ARTS STANDARDS ===');
    const laStandards = await getCurriculumStandards('language-arts', '1');
    console.log(`Found ${laStandards.length} language arts standards for grade 1`);
    
    if (laStandards.length > 0) {
      console.log('\nFirst 5 language arts standards:');
      laStandards.slice(0, 5).forEach((standard, index) => {
        console.log(`${index + 1}. Code: ${standard.code}`);
        console.log(`   Subject: ${standard.subject}`);
        console.log(`   Grade: ${standard.grade_level}`);
        console.log(`   Strand: ${standard.strand}`);
        console.log(`   Description: ${standard.description.substring(0, 100)}...`);
        console.log('');
      });
    } else {
      console.log('No language arts standards found!');
    }
    
  } catch (error) {
    console.error('Error testing standards display:', error);
  }
}

testStandardsDisplay(); 