import { NextResponse } from "next/server"
import { executeQuery } from "@/lib/db"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const eloId = searchParams.get("eloId")

    if (!eloId) {
      return NextResponse.json({ error: "ELO ID is required" }, { status: 400 })
    }

    const query = `
      SELECT 
        id,
        type,
        description,
        examples
      FROM assessment_strategies
      WHERE elo_id = $1
      ORDER BY type, id
    `

    const strategies = await executeQuery(query, [eloId])

    return NextResponse.json({ strategies })
  } catch (error) {
    console.error("Error fetching assessment strategies:", error)
    return NextResponse.json({ error: "Failed to fetch assessment strategies" }, { status: 500 })
  }
}
