"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Download, Copy, Printer, Save, Edit, Check } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { saveMultigradePlan } from "@/app/actions/save-multigrade-plan"

export function MultigradeOutput() {
  const [content, setContent] = useState<string>("")
  const [specialNeeds, setSpecialNeeds] = useState<string[]>([])
  const [isEditing, setIsEditing] = useState(false)
  const [editedContent, setEditedContent] = useState<string>("")
  const [isSaving, setIsSaving] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const handlePlanGenerated = (event: CustomEvent) => {
      const { content, specialNeeds } = event.detail
      setContent(content)
      setEditedContent(content)
      setSpecialNeeds(specialNeeds || [])
    }

    window.addEventListener("multigradePlanGenerated", handlePlanGenerated as EventListener)

    return () => {
      window.removeEventListener("multigradePlanGenerated", handlePlanGenerated as EventListener)
    }
  }, [])

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(content)
      setIsCopied(true)
      toast({
        title: "Copied to clipboard",
        description: "Multigrade plan has been copied to clipboard",
      })
      setTimeout(() => setIsCopied(false), 2000)
    } catch (error) {
      console.error("Failed to copy:", error)
      toast({
        title: "Copy failed",
        description: "Failed to copy to clipboard. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handlePrint = () => {
    const printWindow = window.open("", "_blank")
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Multigrade Lesson Plan</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; }
              h1 { color: #333; }
              .meta { color: #666; margin-bottom: 20px; }
              pre { white-space: pre-wrap; }
            </style>
          </head>
          <body>
            <h1>Multigrade Lesson Plan</h1>
            <div class="meta">
              ${specialNeeds.length > 0 ? `<p><strong>Special Needs:</strong> ${specialNeeds.join(", ")}</p>` : ""}
            </div>
            <div>${content.replace(/\n/g, "<br>")}</div>
          </body>
        </html>
      `)
      printWindow.document.close()
      printWindow.print()
    }
  }

  const handleDownload = () => {
    const element = document.createElement("a")
    const file = new Blob([content], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = `multigrade-lesson-plan.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const handleSave = async () => {
    if (isEditing) {
      setContent(editedContent)
      setIsEditing(false)
      return
    }

    try {
      setIsSaving(true)

      const formData = new FormData()
      formData.append("title", "Multigrade Lesson Plan")
      formData.append("content", content)

      const result = await saveMultigradePlan(formData)

      if (!result.success) {
        throw new Error(result.error || "Failed to save multigrade plan")
      }

      toast({
        title: "Multigrade plan saved",
        description: "Your multigrade plan has been saved successfully",
      })
    } catch (error) {
      console.error("Error saving multigrade plan:", error)
      toast({
        title: "Save failed",
        description: error instanceof Error ? error.message : "Failed to save multigrade plan. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  if (!content) {
    return (
      <Card className="mt-6">
        <CardContent className="p-6 text-center text-muted-foreground">
          <p>Generated multigrade plan will appear here.</p>
          <p className="text-sm mt-2">Fill out the form and click "Generate Multigrade Plan" to create a new plan.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="mt-6">
      <CardHeader className="bg-muted/30 border-b">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <CardTitle className="text-xl font-bold text-primary">Multigrade Lesson Plan</CardTitle>
            <div className="flex flex-wrap gap-2 mt-2">
              {specialNeeds.map((need, index) => (
                <Badge key={index} variant="outline" className="bg-purple-50">
                  {need}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
              onClick={() => {
                if (isEditing) {
                  setIsEditing(false)
                  setEditedContent(content)
                } else {
                  setIsEditing(true)
                }
              }}
            >
              {isEditing ? <Check className="h-4 w-4" /> : <Edit className="h-4 w-4" />}
              {isEditing ? "Cancel" : "Edit"}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
              onClick={handleSave}
              disabled={isSaving}
            >
              <Save className="h-4 w-4" />
              {isEditing ? "Save Changes" : "Save"}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="preview">
          <div className="border-b px-4">
            <TabsList className="bg-transparent h-12">
              <TabsTrigger value="preview" className="data-[state=active]:bg-background">
                Preview
              </TabsTrigger>
              <TabsTrigger value="raw" className="data-[state=active]:bg-background">
                Raw
              </TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-2 absolute right-4 top-[5.5rem]">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={handleCopyToClipboard}
                title="Copy to clipboard"
              >
                {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={handlePrint}
                title="Print multigrade plan"
              >
                <Printer className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={handleDownload}
                title="Download as text file"
              >
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <TabsContent value="preview" className="p-6">
            {isEditing ? (
              <textarea
                className="w-full min-h-[500px] p-4 border rounded-md font-mono text-sm"
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
              />
            ) : (
              <div className="prose prose-sm max-w-none">
                {content.split("\n").map((line, index) => (
                  <p key={index}>{line || <br />}</p>
                ))}
              </div>
            )}
          </TabsContent>
          <TabsContent value="raw" className="p-6">
            <pre className="bg-muted p-4 rounded-md overflow-auto whitespace-pre-wrap text-sm">
              {isEditing ? editedContent : content}
            </pre>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
