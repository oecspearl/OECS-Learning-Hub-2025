import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET() {
  try {
    // Fetch curriculum standards grouped by subject and grade
    const standards = await db.curriculumStandards.findMany()
    
    // Group standards by subject and grade level
    const curriculum = standards.reduce((acc, standard) => {
      const key = `${standard.subject}-${standard.grade_level}`
      
      if (!acc[key]) {
        acc[key] = {
          subject: standard.subject,
          grade_level: standard.grade_level,
          strands: {}
        }
      }
      
      if (!acc[key].strands[standard.strand]) {
        acc[key].strands[standard.strand] = []
      }
      
      acc[key].strands[standard.strand].push({
        id: standard.id,
        code: standard.code,
        description: standard.description
      })
      
      return acc
    }, {})

    return NextResponse.json({ 
      curriculum: Object.values(curriculum),
      total_standards: standards.length
    })
  } catch (error) {
    console.error("Error fetching curriculum:", error)
    return NextResponse.json(
      { error: "Failed to fetch curriculum data" },
      { status: 500 }
    )
  }
}
