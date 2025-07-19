"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Loader2, RefreshCw, Play, AlertCircle, CheckCircle, Clock, Scan } from "lucide-react"
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

export default function PDFProcessorPage() {
  const { toast } = useToast()
  const [documents, setDocuments] = useState<PDFDocument[]>([])
  const [loading, setLoading] = useState(true)
  const [processing, setProcessing] = useState(false)
  const [batchProcessing, setBatchProcessing] = useState(false)

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

  // Process a single document
  const processDocument = async (documentId: string) => {
    try {
      setProcessing(true)
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
      setProcessing(false)
    }
  }

  // Process all pending documents
  const processBatch = async () => {
    try {
      setBatchProcessing(true)
      const response = await fetch("/api/pdf-process/batch", {
        method: "POST",
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to process documents")
      }

      toast({
        title: "Batch processing started",
        description: data.message,
      })

      // Refresh the document list
      fetchDocuments()
    } catch (error) {
      console.error("Error in batch processing:", error)
      toast({
        title: "Batch processing failed",
        description: error instanceof Error ? error.message : "An error occurred during batch processing",
        variant: "destructive",
      })
    } finally {
      setBatchProcessing(false)
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
    return new Date(dateString).toLocaleString()
  }

  // Check if document needs OCR
  const needsOCR = (doc: PDFDocument) => {
    if (!doc.metadata) return false

    const metadata = typeof doc.metadata === "string" ? JSON.parse(doc.metadata) : doc.metadata

    return metadata.needsOCR === true
  }

  // Get OCR status and progress
  const getOCRStatus = (doc: PDFDocument) => {
    if (!doc.metadata) return null

    const metadata = typeof doc.metadata === "string" ? JSON.parse(doc.metadata) : doc.metadata

    return metadata.ocr || null
  }

  // Load documents on component mount
  useEffect(() => {
    fetchDocuments()
  }, [])

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">PDF Processor</h1>
          <div className="flex gap-2">
            <Button variant="outline" onClick={fetchDocuments} disabled={loading} className="flex items-center gap-1">
              <RefreshCw className="h-4 w-4" />
              Refresh
            </Button>
            <Button onClick={processBatch} disabled={batchProcessing || loading} className="flex items-center gap-1">
              {batchProcessing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />}
              Process All Pending
            </Button>
          </div>
        </div>
        <p className="text-muted-foreground">Process and extract content from uploaded PDF curriculum documents.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>PDF Documents</CardTitle>
          <CardDescription>View and manage the processing status of uploaded curriculum documents.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Document</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Uploaded</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>OCR</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-4">
                    <div className="flex justify-center items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Loading documents...
                    </div>
                  </TableCell>
                </TableRow>
              ) : documents.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-4 text-muted-foreground">
                    No PDF documents found.
                  </TableCell>
                </TableRow>
              ) : (
                documents.map((doc) => {
                  const ocrStatus = getOCRStatus(doc)
                  const requiresOCR = needsOCR(doc)

                  return (
                    <TableRow key={doc.id}>
                      <TableCell className="font-medium">{doc.title}</TableCell>
                      <TableCell>{formatFileSize(doc.size)}</TableCell>
                      <TableCell>{formatDate(doc.uploadedAt)}</TableCell>
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
                      <TableCell>
                        {requiresOCR ? (
                          <div className="space-y-1">
                            <div className="flex items-center gap-1">
                              <Scan className="h-3 w-3 text-muted-foreground" />
                              <span className="text-xs">
                                {ocrStatus
                                  ? ocrStatus.status === "completed"
                                    ? "OCR Completed"
                                    : ocrStatus.status === "processing"
                                      ? "OCR Processing"
                                      : ocrStatus.status === "failed"
                                        ? "OCR Failed"
                                        : "OCR Pending"
                                  : "OCR Required"}
                              </span>
                            </div>
                            {ocrStatus && ocrStatus.status === "processing" && (
                              <Progress value={ocrStatus.progress || 0} className="h-1" />
                            )}
                          </div>
                        ) : (
                          <span className="text-xs text-muted-foreground">Not required</span>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => processDocument(doc.id)}
                          disabled={processing || doc.status === "processing" || doc.status === "processed"}
                        >
                          {processing ? (
                            <Loader2 className="mr-2 h-3 w-3 animate-spin" />
                          ) : (
                            <Play className="mr-2 h-3 w-3" />
                          )}
                          Process
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
                })
              )}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p className="text-sm text-muted-foreground">
            {documents.filter((doc) => doc.status === "processed").length} of {documents.length} documents processed
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
