import { NextResponse } from "next/server"
import { executeQuery } from "@/lib/db"

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

    const query = `
      SELECT id, code, description
      FROM specific_curriculum_outcomes
      WHERE elo_id = $1
      ORDER BY code
    `

    let outcomes = await executeQuery(query, [eloId])

    // If no results from database, use mock data
    if (!outcomes || (Array.isArray(outcomes) && outcomes.length === 0)) {
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
