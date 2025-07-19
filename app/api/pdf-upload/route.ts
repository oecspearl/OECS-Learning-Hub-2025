import { NextResponse } from "next/server"
import { executeQuery } from "@/lib/db"
import { v4 as uuidv4 } from "uuid"

// For server components, we need a different approach
// Remove these lines:
// const pdfjsWorker = require("pdfjs-dist/build/pdf.worker.entry")
// pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker

// And replace with:
// We don't need to set the worker for server-side operations
// as we're just using basic PDF functionality

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    // Check if file is a PDF
    if (!file.name.endsWith(".pdf")) {
      return NextResponse.json({ error: "Only PDF files are allowed" }, { status: 400 })
    }

    // In a real app, you would upload the file to a storage service
    // For demo purposes, we'll just pretend we did

    const fileId = uuidv4()
    const fileName = `${fileId}-${file.name}`
    const fileUrl = `/uploads/${fileName}`
    const fileSize = file.size

    // Check if the PDF needs OCR
    // In a real implementation, you would analyze the PDF to detect if it's scanned
    const needsOCR = await checkIfPDFNeedsOCR(file)

    // Insert the PDF document into the database
    await executeQuery(
      `INSERT INTO "PDFDocument" (
        "id", "title", "filename", "url", "size", "status", "metadata", "uploadedAt"
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [
        fileId,
        file.name,
        fileName,
        fileUrl,
        fileSize,
        "uploaded",
        JSON.stringify({
          needsOCR,
          grade: formData.get("grade"),
          subject: formData.get("subject"),
          description: formData.get("description"),
        }),
        new Date(),
      ],
    )

    return NextResponse.json({
      success: true,
      document: {
        id: fileId,
        title: file.name,
        filename: fileName,
        url: fileUrl,
        size: fileSize,
        status: "uploaded",
        needsOCR,
      },
    })
  } catch (error) {
    console.error("Error uploading PDF:", error)
    return NextResponse.json({ error: "Failed to upload PDF" }, { status: 500 })
  }
}

/**
 * Check if a PDF file needs OCR processing
 * This function analyzes the PDF to determine if it contains extractable text
 * or if it's primarily scanned images that require OCR
 */
async function checkIfPDFNeedsOCR(file: File): Promise<boolean> {
  // In a real implementation, you would:
  // 1. Load the PDF file
  // 2. Check if it contains extractable text
  // 3. If not, or if the text content is minimal, mark it for OCR

  // For demo purposes, we'll randomly determine if OCR is needed
  // In a real app, this would be based on actual PDF content analysis
  return Math.random() > 0.5
}
