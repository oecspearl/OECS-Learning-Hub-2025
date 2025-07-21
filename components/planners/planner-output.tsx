"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { saveLessonPlan } from "@/app/actions/lesson-plans"
import { Loader2, Save, Download, Copy, Check, Edit, X, Printer } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/contexts/AuthContext"

export function PlannerOutput() {
  const { toast } = useToast()
  const { user } = useAuth()
  const [lessonPlan, setLessonPlan] = useState<string | null>(null)
  const [editableLessonPlan, setEditableLessonPlan] = useState<string | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [activeTab, setActiveTab] = useState("preview")
  const [copied, setCopied] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [metadata, setMetadata] = useState<any>(null)

  // Form fields for metadata
  const [title, setTitle] = useState("Lesson Plan")
  const [subject, setSubject] = useState("")
  const [gradeLevel, setGradeLevel] = useState("")
  const [topic, setTopic] = useState("")

  useEffect(() => {
    const handleLessonPlanGenerated = (event: Event) => {
      const customEvent = event as CustomEvent
      if (customEvent.detail && customEvent.detail.lessonPlan) {
        setLessonPlan(customEvent.detail.lessonPlan)
        setEditableLessonPlan(customEvent.detail.lessonPlan)
        setMetadata(customEvent.detail)
        
        // Set metadata fields
        if (customEvent.detail.subject) setSubject(customEvent.detail.subject)
        if (customEvent.detail.gradeLevel) setGradeLevel(customEvent.detail.gradeLevel)
        if (customEvent.detail.topic) setTopic(customEvent.detail.topic)
        setTitle(`${customEvent.detail.subject || "Lesson"} - ${customEvent.detail.topic || "Plan"}`)
      }
    }

    window.addEventListener("lessonPlanGenerated", handleLessonPlanGenerated)

    // Load from local storage on mount
    const storedLessonPlan = localStorage.getItem("currentLessonPlan")
    if (storedLessonPlan) {
      try {
        const parsedData = JSON.parse(storedLessonPlan)
        if (parsedData.content) {
          setLessonPlan(parsedData.content)
          setEditableLessonPlan(parsedData.content)
        }
      } catch (error) {
        console.error("Error parsing stored lesson plan:", error)
      }
    }

    return () => {
      window.removeEventListener("lessonPlanGenerated", handleLessonPlanGenerated)
    }
  }, [])

  const handleSave = async () => {
    if (!lessonPlan || !user?.id) return

    setIsSaving(true)
    try {
      const contentToSave = isEditing ? editableLessonPlan : lessonPlan

      // Validate required fields
      if (!subject || !gradeLevel || !topic) {
        throw new Error('Missing required fields: subject, gradeLevel, and topic are required')
      }

      const formData = new FormData()
      formData.append("title", title || 'Lesson Plan')
      formData.append("subject", subject)
      formData.append("grade_level", gradeLevel) // Changed from gradeLevel to grade_level
      formData.append("topic", topic)
      formData.append("content", contentToSave || '')
      formData.append("lesson_content", contentToSave || '')
      formData.append("duration_minutes", "50") // Changed from duration to duration_minutes
      formData.append("user_id", user.id) // Changed from userId to user_id

      const result = await saveLessonPlan(formData)

      if (result.success) {
        toast({
          title: "Lesson plan saved",
          description: "Your lesson plan has been saved successfully.",
        })

        if (isEditing) {
          setLessonPlan(editableLessonPlan)
          setIsEditing(false)
        }

        // Dispatch event to notify dashboard to refresh
        window.dispatchEvent(new CustomEvent("lessonPlanCreated", {
          detail: {
            lessonPlanId: result.data?.id,
            title: title,
            subject: subject,
            gradeLevel: gradeLevel,
            topic: topic
          }
        }))
      } else {
        throw new Error("Failed to save lesson plan")
      }
    } catch (error) {
      console.error("Error saving lesson plan:", error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to save lesson plan. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  const handleCopyToClipboard = async () => {
    try {
      const contentToCopy = isEditing ? editableLessonPlan : lessonPlan
      await navigator.clipboard.writeText(contentToCopy || "")
      setCopied(true)
      toast({
        title: "Copied to clipboard",
        description: "Lesson plan has been copied to clipboard",
      })
      setTimeout(() => setCopied(false), 2000)
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
    const contentToPrint = isEditing ? editableLessonPlan : lessonPlan
    const printWindow = window.open("", "_blank")
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>${title}</title>
            <style>
              body { 
                font-family: Arial, sans-serif; 
                line-height: 1.6; 
                padding: 20px; 
                max-width: 800px; 
                margin: 0 auto;
              }
              h1 { color: #333; border-bottom: 2px solid #333; padding-bottom: 10px; }
              h2 { color: #555; margin-top: 30px; border-bottom: 1px solid #ccc; padding-bottom: 5px; }
              h3 { color: #666; margin-top: 20px; }
              .meta { 
                background: #f5f5f5; 
                padding: 15px; 
                border-radius: 5px; 
                margin-bottom: 20px;
                border-left: 4px solid #007acc;
              }
              .meta p { margin: 5px 0; }
              pre { 
                white-space: pre-wrap; 
                font-family: 'Courier New', monospace;
                background: #f9f9f9;
                padding: 15px;
                border-radius: 5px;
                border: 1px solid #ddd;
              }
              @media print {
                body { font-size: 12pt; }
                .no-print { display: none; }
              }
            </style>
          </head>
          <body>
            <div class="meta">
              <h1>${title}</h1>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Grade Level:</strong> ${gradeLevel}</p>
              <p><strong>Topic:</strong> ${topic}</p>
              <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
            </div>
            <div class="content">
              <pre>${contentToPrint}</pre>
            </div>
          </body>
        </html>
      `)
      printWindow.document.close()
      printWindow.print()
    }
  }

  const formatLessonPlan = (content: string) => {
    if (!content) return <p className="text-muted-foreground">No content to preview.</p>

    return (
      <div className="prose prose-sm max-w-none">
        {content.split("\n").map((line, index) => {
          if (line.startsWith("# ")) {
            return (
              <h1 key={index} className="text-2xl font-bold mt-6 mb-4 text-blue-800">
                {line.substring(2)}
              </h1>
            )
          } else if (line.startsWith("## ")) {
            return (
              <h2 key={index} className="text-xl font-bold mt-5 mb-3 text-blue-700">
                {line.substring(3)}
              </h2>
            )
          } else if (line.startsWith("### ")) {
            return (
              <h3 key={index} className="text-lg font-bold mt-4 mb-2 text-blue-600">
                {line.substring(4)}
              </h3>
            )
          } else if (line.startsWith("- ")) {
            return (
              <li key={index} className="ml-6 my-1">
                {line.substring(2)}
              </li>
            )
          } else if (line.trim() === "") {
            return <br key={index} />
          } else if (line.startsWith("**") && line.endsWith("**")) {
            return (
              <p key={index} className="font-bold">
                {line.substring(2, line.length - 2)}
              </p>
            )
          } else {
            return <p key={index} className="my-1">{line}</p>
          }
        })}
      </div>
    )
  }

  if (!lessonPlan) {
    return (
      <div className="flex flex-col items-center justify-center h-[400px] text-center p-4 bg-muted/30 rounded-md">
        <div className="text-4xl mb-4 text-muted-foreground">📝</div>
        <h3 className="text-lg font-medium mb-2">No Lesson Plan Generated Yet</h3>
        <p className="text-muted-foreground max-w-md">
          Fill out the form and click "Generate Lesson Plan" to create your personalized lesson plan.
        </p>
      </div>
    )
  }

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <div className="text-sm text-muted-foreground mt-1">
              {subject} • Grade {gradeLevel} • {topic}
            </div>
          </div>
          <div className="flex items-center gap-2">
            {isEditing ? (
              <>
                <Button
                  size="sm"
                  onClick={() => {
                    setLessonPlan(editableLessonPlan)
                    setIsEditing(false)
                  }}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Check className="h-4 w-4 mr-1" />
                  Save
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setEditableLessonPlan(lessonPlan)
                    setIsEditing(false)
                  }}
                >
                  <X className="h-4 w-4 mr-1" />
                  Cancel
                </Button>
              </>
            ) : (
              <>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setIsEditing(true)}
                >
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleCopyToClipboard}
                  disabled={copied}
                >
                  {copied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
                  {copied ? "Copied" : "Copy"}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handlePrint}
                >
                  <Printer className="h-4 w-4 mr-1" />
                  Print
                </Button>
                <Button
                  size="sm"
                  onClick={handleSave}
                  disabled={isSaving || !user?.id}
                >
                  {isSaving ? <Loader2 className="h-4 w-4 mr-1 animate-spin" /> : <Save className="h-4 w-4 mr-1" />}
                  {isSaving ? "Saving..." : "Save"}
                </Button>
              </>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="raw" disabled={isEditing}>Raw Content</TabsTrigger>
          </TabsList>

          <TabsContent value="preview" className="min-h-[400px]">
            {isEditing ? (
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="gradeLevel">Grade Level</Label>
                    <Input
                      id="gradeLevel"
                      value={gradeLevel}
                      onChange={(e) => setGradeLevel(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="topic">Topic</Label>
                  <Input
                    id="topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    value={editableLessonPlan || ""}
                    onChange={(e) => setEditableLessonPlan(e.target.value)}
                    className="mt-1 min-h-[400px] font-mono text-sm"
                  />
                </div>
              </div>
            ) : (
              <div className="prose prose-sm max-w-none p-4 bg-white rounded-md min-h-[500px] overflow-y-auto border">
                {formatLessonPlan(lessonPlan)}
              </div>
            )}
          </TabsContent>

          <TabsContent value="raw" className="min-h-[400px]">
            <pre className="whitespace-pre-wrap font-mono text-sm p-4 bg-muted/30 rounded-md min-h-[500px] overflow-y-auto border">
              {lessonPlan}
            </pre>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
