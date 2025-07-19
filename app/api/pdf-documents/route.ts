import { NextResponse } from "next/server"
import { executeQuery } from "@/lib/db"

export async function GET() {
  try {
    const documents = await executeQuery(`
      SELECT id, title, filename, url, size, status, metadata, uploadedAt, processedAt
      FROM "PDFDocument"
      ORDER BY uploadedAt DESC
    `)

    return NextResponse.json({ documents })
  } catch (error) {
    console.error("Error fetching PDF documents:", error)
    return NextResponse.json({ error: "Failed to fetch PDF documents" }, { status: 500 })
  }
}
