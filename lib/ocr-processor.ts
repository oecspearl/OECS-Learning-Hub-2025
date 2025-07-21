import { createWorker } from "tesseract.js"
import { executeQuery } from "@/lib/db"
import { db } from "@/lib/db"

// Configuration for OCR
const OCR_CONFIG = {
  languages: ["eng"], // Default language
  oem: 1, // OCR Engine Mode: 1 = Neural nets LSTM engine only
  psm: 6, // Page Segmentation Mode: 6 = Assume a single uniform block of text
}

/**
 * Process a PDF page with OCR
 * @param imageBuffer Buffer containing the image data
 * @param options OCR options
 * @returns Extracted text
 */
export async function processImageWithOCR(
  imageBuffer: Buffer,
  options: {
    languages?: string[]
    oem?: number
    psm?: number
  } = {},
): Promise<string> {
  // Create a worker
  const worker = await createWorker()

  try {
    // Only set parameters and recognize, skip loadLanguage/initialize for compatibility
    const languages = options.languages || OCR_CONFIG.languages
    if (worker.setParameters) {
      await worker.setParameters({
        tessedit_ocr_engine_mode: options.oem || OCR_CONFIG.oem,
        tessedit_pageseg_mode: (options.psm || OCR_CONFIG.psm) as any,
      })
    }

    // Recognize text
    const { data } = await worker.recognize(imageBuffer)
    return data.text
  } finally {
    // Always terminate the worker when done
    await worker.terminate()
  }
}

/**
 * Update OCR status for a document
 */
export async function updateOCRStatus(
  documentId: string,
  status: "pending" | "processing" | "completed" | "failed",
  progress?: number,
  error?: string,
): Promise<void> {
  const ocrMetadata = {
    status,
    progress: progress || 0,
    updatedAt: new Date().toISOString(),
    error: error || null,
  }

  // Update the document's OCR metadata
  await db.pdfDocuments.update(documentId, {
    metadata: {
      ocr: ocrMetadata
    }
  })
}

/**
 * Check if a PDF document needs OCR processing
 * @param documentId Document ID
 * @returns Boolean indicating if OCR is needed
 */
export async function checkIfOCRNeeded(documentId: string): Promise<boolean> {
  const document = await db.pdfDocuments.findFirst({ id: documentId })

  if (!document) {
    return false
  }

  const metadata = document.metadata
    ? typeof document.metadata === "string"
      ? JSON.parse(document.metadata)
      : (document.metadata as any)
    : {}

  // Check if document has been marked as needing OCR
  if (metadata.needsOCR === true) {
    return true
  }

  // Check if document has OCR metadata already
  if (metadata.ocr && metadata.ocr.status === "completed") {
    return false
  }

  // If no explicit flag, we'll need to analyze the document content
  // This would typically involve checking if the PDF has extractable text
  // For now, we'll return false as the default
  return false
}
