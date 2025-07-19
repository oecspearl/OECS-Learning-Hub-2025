"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Upload, Eye, Play, CheckCircle, Clock, AlertCircle, Loader2 } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/components/ui/use-toast"

interface PDFDocument {
  id: string
  title: string
  filename: string
  url: string
  size: number
  status: string
  uploadedAt: string
  processedAt: string | null
  metadata: any
}

export function DocumentsTab() {
  const { toast } = useToast()
  const [documents, setDocuments] = useState<PDFDocument[]>([])
  const [loading, setLoading] = useState(true)
  const [processing, setProcessing] = useState<string | null>(null)

  // Fetch documents
  const fetchDocuments = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/pdf-documents")
      const data = await response.json()
      setDocuments(data.documents || [])
    } catch (error) {
      console.error("Error fetching documents:", error)
      toast({
        title: "Error",
        description: "Failed to fetch PDF documents",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  // Process a document
  const processDocument = async (documentId: string) => {
    try {
      setProcessing(documentId)
      const response = await fetch("/api/pdf-process", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ documentId }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to process document")
      }

      toast({
        title: "Processing started",
        description: "The PDF document is being processed",
      })

      // Update the document status in the UI
      setDocuments((prevDocs) =>
        prevDocs.map((doc) => (doc.id === documentId ? { ...doc, status: "processing" } : doc)),
      )
    } catch (error) {
      console.error("Error processing document:", error)
      toast({
        title: "Processing failed",
        description: error instanceof Error ? error.message : "An error occurred during processing",
        variant: "destructive",
      })
    } finally {
      setProcessing(null)
    }
  }

  // Format file size
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B"
    else if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + " KB"
    else return (bytes / (1024 * 1024)).toFixed(2) + " MB"
  }

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString()
  }

  // Load documents on component mount
  useEffect(() => {
    fetchDocuments()
  }, [])

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">PDF Documents</h2>
        <div className="flex gap-2">
          <Link href="/dashboard/admin/pdf-processor">
            <Button variant="outline" className="flex items-center gap-1">
              <Play className="h-4 w-4" />
              PDF Processor
            </Button>
          </Link>
          <Link href="/dashboard/admin/curriculum/upload">
            <Button className="flex items-center gap-1">
              <Upload className="h-4 w-4" />
              Upload PDF
            </Button>
          </Link>
        </div>
      </div>
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Document Title</TableHead>
                <TableHead>Upload Date</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-4">
                    <div className="flex justify-center items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Loading documents...
                    </div>
                  </TableCell>
                </TableRow>
              ) : documents.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-4 text-muted-foreground">
                    No PDF documents found.
                  </TableCell>
                </TableRow>
              ) : (
                documents.map((doc) => (
                  <TableRow key={doc.id}>
                    <TableCell className="font-medium flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      {doc.title}
                    </TableCell>
                    <TableCell>{formatDate(doc.uploadedAt)}</TableCell>
                    <TableCell>{formatFileSize(doc.size)}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          doc.status === "processed"
                            ? "default"
                            : doc.status === "processing"
                              ? "outline"
                              : doc.status === "error"
                                ? "destructive"
                                : "secondary"
                        }
                        className="flex w-fit items-center gap-1"
                      >
                        {doc.status === "processed" ? (
                          <CheckCircle className="h-3 w-3" />
                        ) : doc.status === "processing" ? (
                          <Clock className="h-3 w-3" />
                        ) : doc.status === "error" ? (
                          <AlertCircle className="h-3 w-3" />
                        ) : (
                          <Clock className="h-3 w-3" />
                        )}
                        {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Link href={`/dashboard/admin/curriculum/pdf-content/${doc.id}`}>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                        </Link>
                        {doc.status === "uploaded" && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => processDocument(doc.id)}
                            disabled={processing === doc.id}
                          >
                            {processing === doc.id ? (
                              <Loader2 className="h-4 w-4 mr-1 animate-spin" />
                            ) : (
                              <Play className="h-4 w-4 mr-1" />
                            )}
                            Process
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
