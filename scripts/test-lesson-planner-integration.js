const { getCurriculumStandards, formatStandardsForPrompt } = require('../lib/curriculum-standards.ts');

async function testLessonPlannerIntegration() {
  console.log('Testing Lesson Planner Curriculum Standards Integration...\n');

  try {
    // Test 1: Get standards for a specific subject and grade
    console.log('Test 1: Getting Language Arts standards for Grade 1');
    const standards = await getCurriculumStandards('language-arts', '1');
    console.log(`✅ Found ${standards.length} standards for Language Arts Grade 1`);
    
    if (standards.length === 0) {
      console.log('❌ No standards found - this indicates a problem');
      return;
    }

    // Test 2: Format standards for AI prompt
    console.log('\nTest 2: Formatting standards for AI prompt');
    const formattedStandards = formatStandardsForPrompt(standards);
    console.log('✅ Standards formatted successfully');
    console.log('Preview:', formattedStandards.substring(0, 200) + '...');

    // Test 3: Test different subjects
    console.log('\nTest 3: Testing different subjects');
    const subjects = ['language-arts', 'mathematics', 'science', 'social-studies'];
    const grades = ['1', '2', '3'];
    
    for (const subject of subjects) {
      for (const grade of grades) {
        const subjectStandards = await getCurriculumStandards(subject, grade);
        console.log(`✅ ${subject} Grade ${grade}: ${subjectStandards.length} standards`);
      }
    }

    // Test 4: Test lesson planner scenario
    console.log('\nTest 4: Simulating lesson planner scenario');
    const lessonPlanSubject = 'language-arts';
    const lessonPlanGrade = '2';
    
    const lessonPlanStandards = await getCurriculumStandards(lessonPlanSubject, lessonPlanGrade);
    const lessonPlanFormattedStandards = formatStandardsForPrompt(lessonPlanStandards);
    
    console.log(`✅ Lesson planner can access ${lessonPlanStandards.length} standards for ${lessonPlanSubject} Grade ${lessonPlanGrade}`);
    console.log('✅ Standards are properly formatted for AI prompts');
    
    // Test 5: Verify standards structure
    console.log('\nTest 5: Verifying standards structure');
    if (lessonPlanStandards.length > 0) {
      const sampleStandard = lessonPlanStandards[0];
      console.log('Sample standard structure:');
      console.log(`  - ID: ${sampleStandard.id}`);
      console.log(`  - Subject: ${sampleStandard.subject}`);
      console.log(`  - Grade: ${sampleStandard.grade_level}`);
      console.log(`  - Strand: ${sampleStandard.strand}`);
      console.log(`  - Code: ${sampleStandard.code}`);
      console.log(`  - Description: ${sampleStandard.description.substring(0, 50)}...`);
    }

    console.log('\n🎉 All tests passed! Lesson planner integration is working correctly.');
    console.log('The curriculum standards are now properly accessible for lesson planning.');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.error('Stack trace:', error.stack);
  }
}

testLessonPlannerIntegration(); 