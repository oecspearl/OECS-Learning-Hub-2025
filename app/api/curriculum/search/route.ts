import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { strands, essentialLearningOutcomes, specificCurriculumOutcomes, learningStrategies, assessmentStrategies, resources } from "@/lib/schema"
import { eq, like, or, and, sql } from "drizzle-orm"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("q") || ""
    const subject = searchParams.get("subject") || ""
    const grade = searchParams.get("grade") || ""

    if (!query.trim()) {
      return NextResponse.json({ results: [] })
    }

    const searchTerm = `%${query}%`

    // Search across multiple curriculum tables
    const results = []

    // Search strands
    const strandResults = await db
      .select({
        id: strands.id,
        title: strands.name,
        content: strands.description,
        type: sql`'strand'`,
        subject: strands.subject,
        grade: strands.grade,
        url: sql`'/curriculum/standards'`
      })
      .from(strands)
      .where(like(strands.name, searchTerm))

    results.push(...strandResults.map(result => ({
      ...result,
      id: `strand-${result.id}`,
      matchedText: result.title,
      subject: result.subject || 'Language Arts',
      grade: result.grade || 'Grade 1'
    })))

    // Search essential learning outcomes
    const eloResults = await db
      .select({
        id: essentialLearningOutcomes.id,
        title: essentialLearningOutcomes.code,
        content: essentialLearningOutcomes.description,
        type: sql`'outcome'`,
        subject: essentialLearningOutcomes.subject,
        grade: essentialLearningOutcomes.grade,
        url: sql`'/curriculum/standards'`
      })
      .from(essentialLearningOutcomes)
      .where(
        or(
          like(essentialLearningOutcomes.code, searchTerm),
          like(essentialLearningOutcomes.description, searchTerm)
        )
      )

    results.push(...eloResults.map(result => ({
      ...result,
      id: `elo-${result.id}`,
      matchedText: result.content,
      subject: result.subject || 'Language Arts',
      grade: result.grade || 'Grade 1'
    })))

    // Search specific curriculum outcomes
    const scoResults = await db
      .select({
        id: specificCurriculumOutcomes.id,
        title: specificCurriculumOutcomes.code,
        content: specificCurriculumOutcomes.description,
        type: sql`'outcome'`,
        subject: specificCurriculumOutcomes.subject,
        grade: specificCurriculumOutcomes.grade,
        url: sql`'/curriculum/standards'`
      })
      .from(specificCurriculumOutcomes)
      .where(
        or(
          like(specificCurriculumOutcomes.code, searchTerm),
          like(specificCurriculumOutcomes.description, searchTerm)
        )
      )

    results.push(...scoResults.map(result => ({
      ...result,
      id: `sco-${result.id}`,
      matchedText: result.content,
      subject: result.subject || 'Language Arts',
      grade: result.grade || 'Grade 1'
    })))

    // Search learning strategies
    const strategyResults = await db
      .select({
        id: learningStrategies.id,
        title: learningStrategies.title,
        content: learningStrategies.description,
        type: sql`'strategy'`,
        subject: sql`'Language Arts'`,
        grade: sql`'Grade 1'`,
        url: sql`'/curriculum/standards'`
      })
      .from(learningStrategies)
      .where(
        or(
          like(learningStrategies.title, searchTerm),
          like(learningStrategies.description, searchTerm)
        )
      )

    results.push(...strategyResults.map(result => ({
      ...result,
      id: `strategy-${result.id}`,
      matchedText: result.content || result.title
    })))

    // Search assessment strategies
    const assessmentResults = await db
      .select({
        id: assessmentStrategies.id,
        title: assessmentStrategies.type,
        content: assessmentStrategies.description,
        type: sql`'assessment'`,
        subject: sql`'Language Arts'`,
        grade: sql`'Grade 1'`,
        url: sql`'/curriculum/standards'`
      })
      .from(assessmentStrategies)
      .where(
        or(
          like(assessmentStrategies.type, searchTerm),
          like(assessmentStrategies.description, searchTerm)
        )
      )

    results.push(...assessmentResults.map(result => ({
      ...result,
      id: `assessment-${result.id}`,
      matchedText: result.content || result.title
    })))

    // Search resources
    const resourceResults = await db
      .select({
        id: resources.id,
        title: resources.title,
        content: resources.description,
        type: sql`'resource'`,
        subject: sql`'Language Arts'`,
        grade: sql`'Grade 1'`,
        url: sql`COALESCE(${resources.url}, '/curriculum/standards')`
      })
      .from(resources)
      .where(
        or(
          like(resources.title, searchTerm),
          like(resources.description, searchTerm)
        )
      )

    results.push(...resourceResults.map(result => ({
      ...result,
      id: `resource-${result.id}`,
      matchedText: result.content || result.title
    })))

    // Calculate relevance scores
    const scoredResults = results.map(result => {
      let relevance = 0
      const queryLower = query.toLowerCase()
      const titleLower = result.title.toLowerCase()
      const contentLower = (result.content || "").toLowerCase()

      // Title matches get high relevance
      if (titleLower.includes(queryLower)) {
        relevance += 10
      }

      // Content matches
      if (contentLower.includes(queryLower)) {
        relevance += 5
      }

      // Exact phrase matches
      if (contentLower.includes(query)) {
        relevance += 3
      }

      // Shorter, more specific matches get higher relevance
      if ((result.content || "").length < 200) {
        relevance += 2
      }

      return {
        ...result,
        relevance
      }
    })

    // Sort by relevance
    const sortedResults = scoredResults.sort((a, b) => b.relevance - a.relevance)

    return NextResponse.json({ results: sortedResults })
  } catch (error) {
    console.error("Error searching curriculum:", error)
    return NextResponse.json({ error: "Failed to search curriculum" }, { status: 500 })
  }
} 