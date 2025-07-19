import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET() {
  try {
    // Fetch strands with their related data
    const strands = await db.strands.findMany()
    
    const curriculum = await Promise.all(
      strands.map(async (strand) => {
        const elos = await db.essentialLearningOutcomes.findMany({ strand_id: strand.id })
        
        const strandWithElos = {
          ...strand,
          essential_learning_outcomes: await Promise.all(
            elos.map(async (elo) => {
              const assessmentStrategies = await db.assessmentStrategies.findMany({ elo_id: elo.id })
              const teacherContent = await db.teacherContent.findMany({ elo_id: elo.id })
              
              return {
                ...elo,
                assessment_strategies: assessmentStrategies,
                teacher_content: teacherContent
              }
            })
          )
        }
        
        return strandWithElos
      })
    )

    return NextResponse.json({ curriculum })
  } catch (error) {
    console.error("Error fetching curriculum:", error)
    return NextResponse.json(
      { error: "Failed to fetch curriculum data" },
      { status: 500 }
    )
  }
}
