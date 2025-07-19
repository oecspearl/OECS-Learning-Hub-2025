import { NextResponse } from "next/server"
import { executeQuery } from "@/lib/db"
import { processPDFDocument } from "@/lib/pdf-processor"

// Ensure Node.js compatibility for PDF.js
if (typeof window === "undefined") {
  // Only load jsdom in Node.js environment
  const { JSDOM } = require("jsdom")
  const dom = new JSDOM()
  global.DOMMatrix = dom.window.DOMMatrix
  global.Path2D = dom.window.Path2D
  global.document = dom.window.document
}

// Process a specific PDF document
export async function POST(request: Request) {
  try {
    const { documentId } = await request.json()

    if (!documentId) {
      return NextResponse.json({ error: "Document ID is required" }, { status: 400 })
    }

    // Check if document exists
    const documents = await executeQuery(`SELECT * FROM "PDFDocument" WHERE id = $1 LIMIT 1`, [documentId])

    if (!documents || documents.length === 0) {
      return NextResponse.json({ error: "Document not found" }, { status: 404 })
    }

    // Start processing in the background
    // In a production app, this would be handled by a queue system
    processPDFDocument(documentId).catch((error) => {
      console.error(`Error processing document ${documentId}:`, error)
    })

    return NextResponse.json({
      success: true,
      message: "PDF processing started",
    })
  } catch (error) {
    console.error("Error in PDF processing API:", error)
    return NextResponse.json({ error: "Failed to process PDF" }, { status: 500 })
  }
}

// Get all documents that need processing
export async function GET() {
  try {
    const pendingDocuments = await executeQuery(
      `SELECT * FROM "PDFDocument" WHERE status = 'uploaded' ORDER BY "uploadedAt" ASC`,
    )

    return NextResponse.json({ documents: pendingDocuments })
  } catch (error) {
    console.error("Error fetching pending documents:", error)
    return NextResponse.json({ error: "Failed to fetch pending documents" }, { status: 500 })
  }
}
