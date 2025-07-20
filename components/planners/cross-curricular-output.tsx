"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Copy, Printer, Save, Edit, Check } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { saveCrossCurricularPlan } from "@/app/actions/save-cross-curricular-plan"

interface CrossCurricularOutputProps {
  plan: any
  isGenerating: boolean
}

export function CrossCurricularOutput({ plan, isGenerating }: CrossCurricularOutputProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedContent, setEditedContent] = useState(plan?.content || "")
  const [isSaving, setIsSaving] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const { toast } = useToast()

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(plan.content)
      setIsCopied(true)
      toast({
        title: "Copied to clipboard",
        description: "Cross-curricular plan has been copied to clipboard",
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
            <title>Cross-Curricular Lesson Plan</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; }
              h1 { color: #333; }
              .meta { color: #666; margin-bottom: 20px; }
              pre { white-space: pre-wrap; }
            </style>
          </head>
          <body>
            <h1>Cross-Curricular Lesson Plan</h1>
            <div>${plan.content.replace(/\n/g, "<br>")}</div>
          </body>
        </html>
      `)
      printWindow.document.close()
      printWindow.print()
    }
  }

  const handleDownload = () => {
    const element = document.createElement("a")
    const file = new Blob([plan.content], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = `cross-curricular-plan.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const handleSave = async () => {
    if (isEditing) {
      // Just update the local state when saving edits
      plan.content = editedContent
      setIsEditing(false)
      return
    }

    try {
      setIsSaving(true)

      const formData = new FormData()
      formData.append("title", "Cross-Curricular Lesson Plan")
      formData.append("content", plan.content)

      const result = await saveCrossCurricularPlan(formData)

      if (!result.success) {
        throw new Error(result.error || "Failed to save cross-curricular plan")
      }

      toast({
        title: "Plan saved",
        description: "Your cross-curricular plan has been saved successfully",
      })
    } catch (error) {
      console.error("Error saving cross-curricular plan:", error)
      toast({
        title: "Save failed",
        description: error instanceof Error ? error.message : "Failed to save plan. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  if (!plan || !plan.content) {
    return (
      <Card className="mt-6">
        <CardContent className="p-6 text-center text-muted-foreground">
          <p>Generated cross-curricular plan will appear here.</p>
          <p className="text-sm mt-2">Fill out the form and click "Generate Plan" to create a new plan.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="mt-6">
      <CardHeader className="bg-muted/30 border-b">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <CardTitle className="text-xl font-bold text-primary">Cross-Curricular Lesson Plan</CardTitle>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              {isEditing ? <Check size={16} /> : <Edit size={16} />}
              {isEditing ? "Save" : "Edit"}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
              onClick={handleSave}
              disabled={isSaving}
            >
              <Save size={16} />
              Save to Account
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
              onClick={handleCopyToClipboard}
              disabled={isCopied}
            >
              <Copy size={16} />
              {isCopied ? "Copied!" : "Copy"}
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1" onClick={handlePrint}>
              <Printer size={16} />
              Print
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1" onClick={handleDownload}>
              <Download size={16} />
              Download
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <Tabs defaultValue="preview" className="w-full">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="edit">Edit</TabsTrigger>
          </TabsList>
          <TabsContent value="preview">
            <div className="prose">
              <pre>{plan.content}</pre>
            </div>
          </TabsContent>
          <TabsContent value="edit">
            <div className="grid gap-4">
              <div className="relative">
                <textarea
                  className="w-full h-96 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
