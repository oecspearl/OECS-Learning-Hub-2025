"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Printer, FileSpreadsheet, FileCode, Loader2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { exportRubric } from "@/lib/export-utils"

interface ExportDropdownProps {
  rubric: any
}

export default function ExportDropdown({ rubric }: ExportDropdownProps) {
  const [exporting, setExporting] = useState<string | null>(null)

  const handleExport = async (format: string) => {
    setExporting(format)
    try {
      await new Promise((resolve) => setTimeout(resolve, 100))
      exportRubric(rubric, format)
    } catch (error) {
      console.error(`Error exporting to ${format}:`, error)
    } finally {
      setExporting(null)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="rounded-full">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => handleExport("print")}
          disabled={exporting !== null}
          className="cursor-pointer"
        >
          {exporting === "print" ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Preparing Print View...
            </>
          ) : (
            <>
              <Printer className="mr-2 h-4 w-4" />
              Print / PDF
            </>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleExport("csv")} disabled={exporting !== null} className="cursor-pointer">
          {exporting === "csv" ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Exporting CSV...
            </>
          ) : (
            <>
              <FileSpreadsheet className="mr-2 h-4 w-4" />
              CSV Spreadsheet
            </>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleExport("html")} disabled={exporting !== null} className="cursor-pointer">
          {exporting === "html" ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Exporting HTML...
            </>
          ) : (
            <>
              <FileCode className="mr-2 h-4 w-4" />
              HTML Document
            </>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
