"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, Printer } from "lucide-react"
import { exportToPDF } from "@/lib/pdf-export"

interface PDFExportButtonProps {
  title?: string
  subtitle?: string
  content: any
  filename?: string
}

export function PDFExportButton({ title, subtitle, content, filename }: PDFExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false)

  const handleExport = async () => {
    setIsExporting(true)

    try {
      // Format the content for export
      const formattedContent = []

      // If content is a lesson plan object
      if (content.objectives && content.materials) {
        // Use the title from the lesson plan if not provided
        const exportTitle = title || content.title || "Lesson Plan"

        // Add objectives
        formattedContent.push({
          heading: "Learning Objectives",
          list: Array.isArray(content.objectives) ? content.objectives : [content.objectives],
        })

        // Add materials
        formattedContent.push({
          heading: "Materials",
          list: Array.isArray(content.materials) ? content.materials : [content.materials],
        })

        // Add procedure
        if (content.procedure) {
          if (Array.isArray(content.procedure)) {
            formattedContent.push({
              heading: "Procedure",
              list: content.procedure,
            })
          } else {
            // Handle structured procedure
            formattedContent.push({
              heading: "Procedure - Introduction",
              list: content.procedure.introduction || [],
            })

            formattedContent.push({
              heading: "Procedure - Development",
              list: content.procedure.development || [],
            })

            formattedContent.push({
              heading: "Procedure - Closure",
              list: content.procedure.closure || [],
            })
          }
        }

        // Add assessment
        if (content.assessment) {
          formattedContent.push({
            heading: "Assessment",
            text: content.assessment,
          })
        }

        // Add extensions
        if (content.extensions) {
          formattedContent.push({
            heading: "Extensions & Enrichment",
            text: content.extensions,
          })
        }

        // Add special needs if available
        if (content.specialNeeds && content.specialNeeds.length > 0) {
          formattedContent.push({
            heading: "Special Needs Accommodations",
            list: content.specialNeeds,
          })
        }

        // Generate the document
        const doc = exportToPDF({
          title: exportTitle,
          subtitle: subtitle || `${content.subject} - Grade ${content.grade}`,
          content: formattedContent,
        })

        // No need to call save as the user will print/save from the browser
      } else {
        // Handle regular content format
        exportToPDF({
          title: title || "Document",
          subtitle,
          content: Array.isArray(content) ? content : [content],
        })
      }
    } catch (error) {
      console.error("Error exporting document:", error)
      alert("There was an error generating the document. Please try again.")
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <Button onClick={handleExport} disabled={isExporting} variant="outline">
      {isExporting ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Preparing...
        </>
      ) : (
        <>
          <Printer className="mr-2 h-4 w-4" />
          Print/Export
        </>
      )}
    </Button>
  )
}
