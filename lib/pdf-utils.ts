"use client"

interface GeneratePDFOptions {
  content: string
  filename: string
  title?: string
  metadata?: Record<string, string>
}

export async function generatePDF({ content, filename, title, metadata }: GeneratePDFOptions) {
  try {
    // Dynamically import jsPDF only when the function is called
    const { jsPDF } = await import("jspdf")

    // Create a new PDF document
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    })

    // Set document metadata
    doc.setProperties({
      title: title || filename,
      subject: "Lesson Plan",
      author: "Curriculum Management System",
      keywords: "lesson plan, education, curriculum",
      creator: "OECS Curriculum Management System",
      ...metadata,
    })

    // Set font
    doc.setFont("helvetica")

    // Add title if provided
    if (title) {
      doc.setFontSize(18)
      doc.text(title, 20, 20)
      doc.setFontSize(12)
    }

    // Add metadata if provided
    if (metadata) {
      let yPos = title ? 30 : 20
      doc.setFontSize(10)
      Object.entries(metadata).forEach(([key, value]) => {
        doc.text(`${key}: ${value}`, 20, yPos)
        yPos += 5
      })
      yPos += 5
      doc.setFontSize(12)
    }

    // Calculate starting y position
    const startY = metadata ? (title ? 50 : 40) : title ? 30 : 20

    // Process and add content
    const lines = content.split("\n")
    let y = startY

    for (const line of lines) {
      // Handle headers
      if (line.startsWith("# ")) {
        doc.setFontSize(16)
        doc.setFont("helvetica", "bold")
        if (y > 270) {
          doc.addPage()
          y = 20
        }
        doc.text(line.substring(2), 20, y)
        y += 10
        doc.setFontSize(12)
        doc.setFont("helvetica", "normal")
        continue
      }

      if (line.startsWith("## ")) {
        doc.setFontSize(14)
        doc.setFont("helvetica", "bold")
        if (y > 270) {
          doc.addPage()
          y = 20
        }
        doc.text(line.substring(3), 20, y)
        y += 8
        doc.setFontSize(12)
        doc.setFont("helvetica", "normal")
        continue
      }

      if (line.startsWith("### ")) {
        doc.setFont("helvetica", "bold")
        if (y > 270) {
          doc.addPage()
          y = 20
        }
        doc.text(line.substring(4), 20, y)
        y += 8
        doc.setFont("helvetica", "normal")
        continue
      }

      // Handle empty lines
      if (line.trim() === "") {
        y += 5
        continue
      }

      // Handle list items
      if (line.startsWith("- ")) {
        if (y > 270) {
          doc.addPage()
          y = 20
        }
        doc.text(`• ${line.substring(2)}`, 25, y)
        y += 7
        continue
      }

      if (/^\d+\.\s/.test(line)) {
        if (y > 270) {
          doc.addPage()
          y = 20
        }
        doc.text(line, 25, y)
        y += 7
        continue
      }

      // Handle normal paragraphs
      if (y > 270) {
        doc.addPage()
        y = 20
      }

      const textWidth = 170 // A4 width minus margins
      const text = doc.splitTextToSize(line, textWidth)
      doc.text(text, 20, y)
      y += 7 * text.length
    }

    // Save or open the PDF
    doc.save(filename)
  } catch (error) {
    console.error("Error generating PDF:", error)
    alert("Failed to generate PDF. Please make sure jsPDF is installed.")
  }
}
