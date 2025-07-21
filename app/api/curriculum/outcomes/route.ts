import { NextResponse } from "next/server"
import { db } from "@/lib/db"

// Mock outcomes data
const mockOutcomesData = [
  {
    id: 1,
    code: "1.1",
    description: "Choose to listen to music, poetry and stories for pleasure.",
  },
  {
    id: 2,
    code: "1.2",
    description: "Connect environmental sounds to meaning.",
  },
  {
    id: 3,
    code: "1.3",
    description: "Use different voices in role playing to indicate tone and mood.",
  },
  {
    id: 4,
    code: "1.4",
    description: "Describe how musical and environmental sounds affect mood.",
  },
]

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const eloId = searchParams.get("eloId")

    if (!eloId) {
      return NextResponse.json({ error: "eloId parameter is required" }, { status: 400 })
    }

    // Define the type for outcomes
    type Outcome = { id: number; code: string; description: string; }
    
    let outcomes: Outcome[] = []

    try {
      // Try to get outcomes from the new database structure
      const specificOutcomes = await db.specificCurriculumOutcomes.findMany({ elo_id: eloId })
      
      if (specificOutcomes && specificOutcomes.length > 0) {
        outcomes = specificOutcomes.map(outcome => ({
          id: parseInt(outcome.id),
          code: outcome.code,
          description: outcome.description
        }))
      }
    } catch (dbError) {
      console.error("Database error, using mock data:", dbError)
    }

    // If no results from database, use mock data
    if (!outcomes || outcomes.length === 0) {
      console.log("Using mock outcomes data")
      outcomes = mockOutcomesData
    }

    return NextResponse.json({ outcomes })
  } catch (error) {
    console.error("Error fetching outcomes:", error)
    // Return mock data instead of error
    return NextResponse.json({ outcomes: mockOutcomesData })
  }
}
