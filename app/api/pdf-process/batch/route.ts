import { NextResponse } from "next/server"
import { db } from "@/lib/db"
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

// Process all pending PDF documents
export async function POST() {
  try {
    // Get all documents with 'uploaded' status using new database structure
    const pendingDocuments = await db.pdfDocuments.findMany({ status: 'uploaded' })

    if (!pendingDocuments || pendingDocuments.length === 0) {
      return NextResponse.json({
        success: true,
        message: "No pending documents to process",
      })
    }

    // Start processing each document
    // In a production app, this would be handled by a queue system
    const processingPromises = pendingDocuments.map((doc: any) => {
      return processPDFDocument(doc.id).catch((error) => {
        console.error(`Error processing document ${doc.id}:`, error)
        return false
      })
    })

    // Wait for all processing to complete
    const results = await Promise.all(processingPromises)
    const successCount = results.filter((result) => result).length

    return NextResponse.json({
      success: true,
      message: `Processed ${successCount} of ${pendingDocuments.length} documents`,
      processed: successCount,
      total: pendingDocuments.length,
    })
  } catch (error) {
    console.error("Error in batch PDF processing:", error)
    return NextResponse.json({ error: "Failed to process PDFs" }, { status: 500 })
  }
}
