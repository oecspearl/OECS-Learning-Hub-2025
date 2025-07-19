import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { lessonPlans, quizzes, multigradePlans, strands, essentialLearningOutcomes, specificCurriculumOutcomes, learningStrategies, resources, teacherContent } from "@/lib/schema"
import { crossCurricularPlans } from "@/db/schema"
import { or, like, desc, asc, eq } from "drizzle-orm"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("q")?.trim()
    const type = searchParams.get("type") || "all"
    const limit = parseInt(searchParams.get("limit") || "20")

    if (!query || query.length < 2) {
      return NextResponse.json({
        success: false,
        error: "Search query must be at least 2 characters long"
      })
    }

    const searchTerm = `%${query}%`
    const results: any = {
      lessonPlans: [],
      quizzes: [],
      multigradePlans: [],
      crossCurricularPlans: [],
      curriculum: [],
      total: 0
    }

    // Search lesson plans
    if (type === "all" || type === "lesson-plans") {
      const lessonPlansResults = await db
        .select()
        .from(lessonPlans)
        .where(
          or(
            like(lessonPlans.title, searchTerm),
            like(lessonPlans.subject, searchTerm),
            like(lessonPlans.grade, searchTerm),
            like(lessonPlans.topic || "", searchTerm),
            like(lessonPlans.content, searchTerm),
            like(lessonPlans.overview || "", searchTerm),
            like(lessonPlans.objectives || "", searchTerm)
          )
        )
        .orderBy(desc(lessonPlans.created_at))
        .limit(limit)

      results.lessonPlans = lessonPlansResults.map(plan => ({
        ...plan,
        type: "lesson-plan",
        url: `/lesson-plans/${plan.id}/view`,
        category: "Lesson Plans"
      }))
    }

    // Search quizzes
    if (type === "all" || type === "quizzes") {
      const quizzesResults = await db
        .select()
        .from(quizzes)
        .where(
          or(
            like(quizzes.title, searchTerm),
            like(quizzes.subject, searchTerm),
            like(quizzes.grade, searchTerm),
            like(quizzes.topic, searchTerm),
            like(quizzes.description || "", searchTerm),
            like(quizzes.content, searchTerm)
          )
        )
        .orderBy(desc(quizzes.created_at))
        .limit(limit)

      results.quizzes = quizzesResults.map(quiz => ({
        ...quiz,
        type: "quiz",
        url: `/quiz/view/${quiz.id}`,
        category: "Quizzes"
      }))
    }

    // Search multigrade plans
    if (type === "all" || type === "multigrade-plans") {
      const multigradeResults = await db
        .select()
        .from(multigradePlans)
        .where(
          or(
            like(multigradePlans.title, searchTerm),
            like(multigradePlans.subject, searchTerm),
            like(multigradePlans.grade_range, searchTerm),
            like(multigradePlans.topic || "", searchTerm),
            like(multigradePlans.content, searchTerm)
          )
        )
        .orderBy(desc(multigradePlans.created_at))
        .limit(limit)

      results.multigradePlans = multigradeResults.map(plan => ({
        ...plan,
        type: "multigrade-plan",
        url: `/multigrade/view/${plan.id}`,
        category: "Multigrade Plans"
      }))
    }

    // Search cross-curricular plans
    if (type === "all" || type === "cross-curricular-plans") {
      const crossCurricularResults = await db
        .select()
        .from(crossCurricularPlans)
        .where(
          or(
            like(crossCurricularPlans.title, searchTerm),
            like(crossCurricularPlans.theme, searchTerm),
            like(crossCurricularPlans.grade_range, searchTerm),
            like(crossCurricularPlans.subjects, searchTerm),
            like(crossCurricularPlans.content, searchTerm)
          )
        )
        .orderBy(desc(crossCurricularPlans.created_at))
        .limit(limit)

      results.crossCurricularPlans = crossCurricularResults.map(plan => ({
        ...plan,
        type: "cross-curricular-plan",
        url: `/cross-curricular/${plan.id}/view`,
        category: "Cross-Curricular Plans"
      }))
    }

    // Search curriculum content
    if (type === "all" || type === "curriculum") {
      const curriculumResults: any[] = []

      // Search strands
      const strandsResults = await db
        .select()
        .from(strands)
        .where(
          or(
            like(strands.name, searchTerm),
            like(strands.description || "", searchTerm)
          )
        )
        .limit(limit)

      strandsResults.forEach(strand => {
        curriculumResults.push({
          ...strand,
          type: "strand",
          url: `/curriculum/strands/${strand.id}`,
          category: "Curriculum Strands",
          title: strand.name,
          description: strand.description
        })
      })

      // Search essential learning outcomes
      const eloResults = await db
        .select({
          elo: essentialLearningOutcomes,
          strand: strands
        })
        .from(essentialLearningOutcomes)
        .leftJoin(strands, eq(essentialLearningOutcomes.strandId, strands.id))
        .where(
          or(
            like(essentialLearningOutcomes.code, searchTerm),
            like(essentialLearningOutcomes.description, searchTerm),
            like(essentialLearningOutcomes.gradeExpectations || "", searchTerm)
          )
        )
        .limit(limit)

      eloResults.forEach(result => {
        curriculumResults.push({
          ...result.elo,
          type: "elo",
          url: `/curriculum/outcomes/${result.elo.id}`,
          category: "Essential Learning Outcomes",
          title: `${result.elo.code}: ${result.elo.description}`,
          description: result.elo.gradeExpectations,
          strand: result.strand?.name
        })
      })

      // Search specific curriculum outcomes
      const scoResults = await db
        .select({
          sco: specificCurriculumOutcomes,
          elo: essentialLearningOutcomes,
          strand: strands
        })
        .from(specificCurriculumOutcomes)
        .leftJoin(essentialLearningOutcomes, eq(specificCurriculumOutcomes.eloId, essentialLearningOutcomes.id))
        .leftJoin(strands, eq(essentialLearningOutcomes.strandId, strands.id))
        .where(
          or(
            like(specificCurriculumOutcomes.code, searchTerm),
            like(specificCurriculumOutcomes.description, searchTerm)
          )
        )
        .limit(limit)

      scoResults.forEach(result => {
        curriculumResults.push({
          ...result.sco,
          type: "sco",
          url: `/curriculum/outcomes/${result.sco.id}`,
          category: "Specific Curriculum Outcomes",
          title: `${result.sco.code}: ${result.sco.description}`,
          description: result.elo?.description,
          strand: result.strand?.name
        })
      })

      // Search learning strategies
      const learningStrategiesResults = await db
        .select({
          strategy: learningStrategies,
          sco: specificCurriculumOutcomes,
          elo: essentialLearningOutcomes,
          strand: strands
        })
        .from(learningStrategies)
        .leftJoin(specificCurriculumOutcomes, eq(learningStrategies.scoId, specificCurriculumOutcomes.id))
        .leftJoin(essentialLearningOutcomes, eq(specificCurriculumOutcomes.eloId, essentialLearningOutcomes.id))
        .leftJoin(strands, eq(essentialLearningOutcomes.strandId, strands.id))
        .where(
          or(
            like(learningStrategies.title, searchTerm),
            like(learningStrategies.description, searchTerm),
            like(learningStrategies.resources || "", searchTerm),
            like(learningStrategies.integrations || "", searchTerm)
          )
        )
        .limit(limit)

      learningStrategiesResults.forEach(result => {
        curriculumResults.push({
          ...result.strategy,
          type: "learning-strategy",
          url: `/curriculum/strategies/${result.strategy.id}`,
          category: "Learning Strategies",
          title: result.strategy.title,
          description: result.strategy.description,
          strand: result.strand?.name
        })
      })

      // Search resources
      const resourcesResults = await db
        .select({
          resource: resources,
          strand: strands
        })
        .from(resources)
        .leftJoin(strands, eq(resources.strandId, strands.id))
        .where(
          or(
            like(resources.title, searchTerm),
            like(resources.description || "", searchTerm),
            like(resources.type, searchTerm)
          )
        )
        .limit(limit)

      resourcesResults.forEach(result => {
        curriculumResults.push({
          ...result.resource,
          type: "resource",
          url: `/curriculum/resources/${result.resource.id}`,
          category: "Curriculum Resources",
          title: result.resource.title,
          description: result.resource.description,
          strand: result.strand?.name
        })
      })

      // Search teacher content
      const teacherContentResults = await db
        .select({
          content: teacherContent,
          elo: essentialLearningOutcomes,
          strand: strands
        })
        .from(teacherContent)
        .leftJoin(essentialLearningOutcomes, eq(teacherContent.eloId, essentialLearningOutcomes.id))
        .leftJoin(strands, eq(essentialLearningOutcomes.strandId, strands.id))
        .where(
          or(
            like(teacherContent.title, searchTerm),
            like(teacherContent.content, searchTerm),
            like(teacherContent.resources || "", searchTerm)
          )
        )
        .limit(limit)

      teacherContentResults.forEach(result => {
        curriculumResults.push({
          ...result.content,
          type: "teacher-content",
          url: `/curriculum/teacher-content/${result.content.id}`,
          category: "Teacher Content Knowledge",
          title: result.content.title,
          description: result.content.content,
          strand: result.strand?.name
        })
      })

      results.curriculum = curriculumResults
    }

    // Calculate total results
    results.total = results.lessonPlans.length + 
                   results.quizzes.length + 
                   results.multigradePlans.length + 
                   results.crossCurricularPlans.length +
                   results.curriculum.length

    // Combine all results and sort by relevance
    const allResults = [
      ...results.lessonPlans,
      ...results.quizzes,
      ...results.multigradePlans,
      ...results.crossCurricularPlans,
      ...results.curriculum
    ].sort((a, b) => {
      // Prioritize exact matches in title
      const aTitleMatch = a.title.toLowerCase().includes(query.toLowerCase())
      const bTitleMatch = b.title.toLowerCase().includes(query.toLowerCase())
      
      if (aTitleMatch && !bTitleMatch) return -1
      if (!aTitleMatch && bTitleMatch) return 1
      
      // Then sort by creation date (newest first) - curriculum items don't have created_at
      if (a.created_at && b.created_at) {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      }
      return 0
    })

    return NextResponse.json({
      success: true,
      query,
      results: {
        ...results,
        all: allResults
      },
      total: results.total
    })

  } catch (error) {
    console.error("Search error:", error)
    return NextResponse.json(
      { success: false, error: "Search failed" },
      { status: 500 }
    )
  }
} 