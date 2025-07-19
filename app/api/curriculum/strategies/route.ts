import { NextResponse } from "next/server"
import { executeQuery } from "@/lib/db"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const scoId = searchParams.get("scoId")

    if (!scoId) {
      return NextResponse.json({ error: "SCO ID is required" }, { status: 400 })
    }

    const query = `
      SELECT 
        sco.id,
        sco.code,
        sco.description,
        (
          SELECT json_agg(ls)
          FROM learning_strategies ls
          WHERE ls.sco_id = sco.id
        ) as learning_strategies
      FROM specific_curriculum_outcomes sco
      WHERE sco.id = $1
    `

    const results = await executeQuery(query, [scoId])

    if (results.length === 0) {
      return NextResponse.json({ error: "SCO not found" }, { status: 404 })
    }

    return NextResponse.json({ sco: results[0] })
  } catch (error) {
    console.error("Error fetching strategies:", error)
    return NextResponse.json({ error: "Failed to fetch learning strategies" }, { status: 500 })
  }
}
