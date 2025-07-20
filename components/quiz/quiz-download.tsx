"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Download, FileText, FileCode, FileImage, Loader2 } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

interface QuizDownloadProps {
  quizId: string
  quizTitle: string
}

export function QuizDownload({ quizId, quizTitle }: QuizDownloadProps) {
  const [downloading, setDownloading] = useState<string | null>(null)

  const handleDownload = async (format: string) => {
    try {
      setDownloading(format)
      
      const response = await fetch(`/api/download/quizzes/${quizId}?format=${format}`)
      
      if (!response.ok) {
        throw new Error('Download failed')
      }
      
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${quizTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.${format}`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
      
      toast({
        title: "Download successful",
        description: `Your quiz has been downloaded as ${format.toUpperCase()}`,
      })
    } catch (error) {
      console.error('Download error:', error)
      toast({
        title: "Download failed",
        description: "Failed to download the quiz. Please try again.",
        variant: "destructive",
      })
    } finally {
      setDownloading(null)
    }
  }

  const downloadOptions = [
    {
      format: 'pdf',
      label: 'Download as PDF',
      description: 'Printable quiz format',
      icon: FileText
    },
    {
      format: 'docx',
      label: 'Download as Word',
      description: 'Editable Word document',
      icon: FileText
    },
    {
      format: 'json',
      label: 'Download as JSON',
      description: 'Data format for import',
      icon: FileCode
    }
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" disabled={downloading !== null}>
          {downloading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Download className="h-4 w-4" />
          )}
          {downloading ? `Downloading ${downloading.toUpperCase()}...` : "Download"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {downloadOptions.map((option) => (
          <DropdownMenuItem
            key={option.format}
            onClick={() => handleDownload(option.format)}
            disabled={downloading !== null}
            className="flex items-center gap-3"
          >
            <option.icon className="h-4 w-4" />
            <div className="flex flex-col">
              <span className="font-medium">{option.label}</span>
              <span className="text-xs text-muted-foreground">{option.description}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 