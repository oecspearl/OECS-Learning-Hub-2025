import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const scoId = searchParams.get("scoId")

    if (!scoId) {
      return NextResponse.json({ error: "SCO ID is required" }, { status: 400 })
    }

    // Get the specific curriculum outcome
    const sco = await db.specificCurriculumOutcomes.findFirst({ id: scoId })

    if (!sco) {
      return NextResponse.json({ error: "SCO not found" }, { status: 404 })
    }

    // Get learning strategies for this SCO
    const learningStrategies = await db.learningStrategies.findMany({ sco_id: scoId })

    // Format the response
    const result = {
      id: sco.id,
      code: sco.code,
      description: sco.description,
      learning_strategies: learningStrategies
    }

    return NextResponse.json({ sco: result })
  } catch (error) {
    console.error("Error fetching strategies:", error)
    return NextResponse.json({ error: "Failed to fetch learning strategies" }, { status: 500 })
  }
}
