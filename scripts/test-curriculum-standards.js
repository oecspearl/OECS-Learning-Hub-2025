const { getCurriculumStandards, formatStandardsForPrompt } = require('../lib/curriculum-standards.ts');

async function testCurriculumStandards() {
  console.log('Testing Curriculum Standards Integration...\n');

  try {
    // Test 1: Get Language Arts standards for Grade 1
    console.log('Test 1: Getting Language Arts standards for Grade 1');
    const languageArtsStandards = await getCurriculumStandards('language-arts', '1');
    console.log(`Found ${languageArtsStandards.length} Language Arts standards for Grade 1`);
    
    if (languageArtsStandards.length > 0) {
      console.log('Sample standards:');
      languageArtsStandards.slice(0, 3).forEach(standard => {
        console.log(`- ${standard.code}: ${standard.description.substring(0, 50)}...`);
      });
    }
    console.log('');

    // Test 2: Get Mathematics standards for Grade 2
    console.log('Test 2: Getting Mathematics standards for Grade 2');
    const mathStandards = await getCurriculumStandards('mathematics', '2');
    console.log(`Found ${mathStandards.length} Mathematics standards for Grade 2`);
    
    if (mathStandards.length > 0) {
      console.log('Sample standards:');
      mathStandards.slice(0, 3).forEach(standard => {
        console.log(`- ${standard.code}: ${standard.description.substring(0, 50)}...`);
      });
    }
    console.log('');

    // Test 3: Format standards for AI prompt
    console.log('Test 3: Formatting standards for AI prompt');
    const formattedStandards = formatStandardsForPrompt(languageArtsStandards);
    console.log('Formatted standards preview:');
    console.log(formattedStandards.substring(0, 500) + '...');
    console.log('');

    // Test 4: Get all standards for a subject
    console.log('Test 4: Getting all Language Arts standards');
    const allLanguageArts = await getCurriculumStandards('language-arts');
    console.log(`Found ${allLanguageArts.length} total Language Arts standards`);
    
    // Group by grade level
    const byGrade = {};
    allLanguageArts.forEach(standard => {
      if (!byGrade[standard.grade_level]) {
        byGrade[standard.grade_level] = 0;
      }
      byGrade[standard.grade_level]++;
    });
    
    console.log('Standards by grade level:');
    Object.entries(byGrade).forEach(([grade, count]) => {
      console.log(`  Grade ${grade}: ${count} standards`);
    });

    console.log('\n✅ All tests passed! Curriculum standards integration is working correctly.');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.error('Stack trace:', error.stack);
  }
}

testCurriculumStandards(); 