"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import { saveLessonPlan } from "@/app/actions/lesson-plans"
import { generatePDF } from "@/lib/pdf-utils"
import { Loader2, Save, Download, Copy, Check, Edit, X, AlertCircle, Share2 } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { storeCurrentLessonPlan, getCurrentLessonPlan, saveToLocalStorage } from "@/lib/client-storage"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useSession } from "next-auth/react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { toast } from "sonner"

export function PlannerOutput() {
  const { toast: sonnerToast } = useToast()
  const { data: session } = useSession()
  const [lessonPlan, setLessonPlan] = useState<string | null>(null)
  const [editableLessonPlan, setEditableLessonPlan] = useState<string | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [activeTab, setActiveTab] = useState("plan")
  const [copied, setCopied] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [saveError, setSaveError] = useState<string | null>(null)

  // Add state for metadata fields
  const [title, setTitle] = useState("Untitled Lesson")
  const [subject, setSubject] = useState("General")
  const [gradeLevel, setGradeLevel] = useState("1")
  const [topic, setTopic] = useState("")
  const [duration, setDuration] = useState("50 minutes")

  // Add a ref to track if we've tried to extract metadata
  const metadataExtracted = useRef(false)

  // Listen for the custom event from the server action
  useEffect(() => {
    const handleLessonPlanGenerated = (event: CustomEvent) => {
      console.log("Lesson plan event received:", event.detail)

      // Extract metadata from the event
      if (event.detail) {
        // Extract subject if available
        if (event.detail.subject) {
          setSubject(event.detail.subject)
        }

        // Extract grade level if available
        if (event.detail.gradeLevel) {
          setGradeLevel(event.detail.gradeLevel)
        }

        // Extract topic if available
        if (event.detail.topic) {
          setTopic(event.detail.topic)
          // Also update title based on topic
          setTitle(`${event.detail.subject || "General"} Lesson: ${event.detail.topic}`)
        }

        // Extract duration if available
        if (event.detail.duration) {
          const durationValue = event.detail.duration
          setDuration(typeof durationValue === "number" ? `${durationValue} minutes` : durationValue)
        }
      }

      // Check if we have content directly
      if (event.detail.content) {
        console.log("Setting lesson plan from content property")
        setLessonPlan(event.detail.content)
        setEditableLessonPlan(event.detail.content)

        // Store in localStorage for persistence
        storeCurrentLessonPlan(event.detail.content)

        // Extract metadata from content if not already available
        if (!metadataExtracted.current) {
          extractMetadataFromContent(event.detail.content)
        }
        return
      }

      // Check if we have lessonPlan property
      if (event.detail.lessonPlan) {
        console.log("Setting lesson plan from lessonPlan property")
        setLessonPlan(event.detail.lessonPlan)
        setEditableLessonPlan(event.detail.lessonPlan)

        // Store in localStorage for persistence
        storeCurrentLessonPlan(event.detail.lessonPlan)

        // Extract metadata from content if not already available
        if (!metadataExtracted.current) {
          extractMetadataFromContent(event.detail.lessonPlan)
        }
        return
      }

      // If we just have a string
      if (typeof event.detail === "string") {
        console.log("Setting lesson plan from string")
        setLessonPlan(event.detail)
        setEditableLessonPlan(event.detail)

        // Store in localStorage for persistence
        storeCurrentLessonPlan(event.detail)

        // Extract metadata from content if not already available
        if (!metadataExtracted.current) {
          extractMetadataFromContent(event.detail)
        }
        return
      }

      // Last resort - try to find any string property that might contain the lesson plan
      const detailObj = event.detail
      if (detailObj && typeof detailObj === "object") {
        for (const key in detailObj) {
          if (typeof detailObj[key] === "string" && detailObj[key].length > 100) {
            console.log(`Found potential lesson plan in property: ${key}`)
            setLessonPlan(detailObj[key])
            setEditableLessonPlan(detailObj[key])

            // Store in localStorage for persistence
            storeCurrentLessonPlan(detailObj[key])

            // Extract metadata from content if not already available
            if (!metadataExtracted.current) {
              extractMetadataFromContent(detailObj[key])
            }
            return
          }
        }
      }

      console.warn("Could not find lesson plan content in event:", event.detail)
    }

    // Add event listener for both possible event names
    window.addEventListener("lessonPlanGenerated" as any, handleLessonPlanGenerated as EventListener)
    window.addEventListener("lesson-plan-generated" as any, handleLessonPlanGenerated as EventListener)

    // Load from local storage on mount
    const storedLessonPlan = getCurrentLessonPlan()
    if (storedLessonPlan) {
      console.log("Loading lesson plan from localStorage")
      setLessonPlan(storedLessonPlan)
      setEditableLessonPlan(storedLessonPlan)

      // Extract metadata from content if not already available
      if (!metadataExtracted.current) {
        extractMetadataFromContent(storedLessonPlan)
      }
    }

    return () => {
      window.removeEventListener("lessonPlanGenerated" as any, handleLessonPlanGenerated as EventListener)
      window.removeEventListener("lesson-plan-generated" as any, handleLessonPlanGenerated as EventListener)
    }
  }, [])

  // Function to extract metadata from lesson plan content
  const extractMetadataFromContent = (content: string) => {
    if (!content) return

    try {
      console.log("Extracting metadata from lesson plan content")
      const contentLines = content.split("\n")

      // Try to extract title from first line if it starts with #
      if (contentLines[0] && contentLines[0].startsWith("# ")) {
        const extractedTitle = contentLines[0].substring(2).trim()
        if (extractedTitle) {
          setTitle(extractedTitle)
          console.log("Extracted title:", extractedTitle)
        }
      }

      // Try to find subject in content
      const subjectLine = contentLines.find(
        (line) => line.toLowerCase().includes("subject:") || line.toLowerCase().includes("subject -"),
      )
      if (subjectLine) {
        const extractedSubject = subjectLine.split(":")[1]?.trim() || subjectLine.split("-")[1]?.trim()
        if (extractedSubject) {
          setSubject(extractedSubject)
          console.log("Extracted subject:", extractedSubject)
        }
      }

      // Try to find grade level in content
      const gradeLine = contentLines.find(
        (line) =>
          line.toLowerCase().includes("grade level:") ||
          line.toLowerCase().includes("grade:") ||
          line.toLowerCase().includes("grade level -") ||
          line.toLowerCase().includes("grade -"),
      )
      if (gradeLine) {
        const extractedGradeLevel = gradeLine.split(":")[1]?.trim() || gradeLine.split("-")[1]?.trim()
        if (extractedGradeLevel) {
          setGradeLevel(extractedGradeLevel)
          console.log("Extracted grade level:", extractedGradeLevel)
        }
      }

      // Try to find topic in content
      const topicLine = contentLines.find(
        (line) => line.toLowerCase().includes("topic:") || line.toLowerCase().includes("topic -"),
      )
      if (topicLine) {
        const extractedTopic = topicLine.split(":")[1]?.trim() || topicLine.split("-")[1]?.trim()
        if (extractedTopic) {
          setTopic(extractedTopic)
          console.log("Extracted topic:", extractedTopic)
        }
      }

      // Try to find duration in content
      const durationLine = contentLines.find(
        (line) => line.toLowerCase().includes("duration:") || line.toLowerCase().includes("duration -"),
      )
      if (durationLine) {
        const extractedDuration = durationLine.split(":")[1]?.trim() || durationLine.split("-")[1]?.trim()
        if (extractedDuration) {
          setDuration(extractedDuration)
          console.log("Extracted duration:", extractedDuration)
        }
      }

      // Mark that we've extracted metadata
      metadataExtracted.current = true
    } catch (error) {
      console.error("Error extracting metadata from content:", error)
    }
  }

  const handleSave = async () => {
    if (!lessonPlan) return

    setIsSaving(true)
    setSaveError(null)

    try {
      // If we're in edit mode, use the editable version
      const contentToSave = isEditing ? editableLessonPlan : lessonPlan

      // Create FormData object
      const formData = new FormData()

      // Get the lesson plan content - this is required
      if (!contentToSave) {
        throw new Error("Lesson plan content is missing")
      }
      formData.append("content", contentToSave)

      // Add all metadata fields to formData
      formData.append("title", title)
      formData.append("subject", subject)
      formData.append("gradeLevel", gradeLevel)
      formData.append("topic", topic || title)
      formData.append("duration", duration)

      // Add user ID if available
      if (session?.user?.id) {
        formData.append("userId", session.user.id)
      } else {
        throw new Error("User ID is required to save lesson plan")
      }

      console.log("Saving lesson plan with data:", {
        title: formData.get("title"),
        subject: formData.get("subject"),
        gradeLevel: formData.get("gradeLevel"),
        topic: formData.get("topic"),
        duration: formData.get("duration"),
        contentLength: contentToSave.length,
        userId: formData.get("userId"),
      })

      // Validate required fields
      if (
        !formData.get("title") ||
        !formData.get("subject") ||
        !formData.get("gradeLevel") ||
        !formData.get("content") ||
        !formData.get("userId")
      ) {
        throw new Error("Missing required fields: title, subject, content, grade level, and user ID are required")
      }

      const result = await saveLessonPlan(formData)

      if (!result.success) {
        console.error("Error saving lesson plan:", result.error)
        setSaveError(result.error || "Failed to save lesson plan")
        sonnerToast({
          title: "Error",
          description: result.error || "Failed to save lesson plan. Please try again.",
          variant: "destructive",
        })

        // If we have fallback data, try to save it to localStorage
        if (result.fallbackData) {
          console.log("Using fallback data for localStorage:", result.fallbackData)

          // Save to localStorage
          const localSaveSuccess = saveToLocalStorage(result.fallbackData)

          if (localSaveSuccess) {
            console.log("Successfully saved to localStorage as fallback")
            sonnerToast({
              title: "Saved locally",
              description: "Database connection failed, but your lesson plan has been saved locally.",
            })
          }
        }
      } else {
        console.log("Lesson plan saved successfully:", result)

        // If we were editing, update the main lesson plan with the edited version
        if (isEditing) {
          setLessonPlan(editableLessonPlan)
          setIsEditing(false)

          // Update localStorage
          storeCurrentLessonPlan(editableLessonPlan || "")
        }

        sonnerToast({
          title: "Lesson plan saved",
          description: "Your lesson plan has been saved successfully.",
        })
      }
    } catch (error) {
      console.error("Error saving lesson plan:", error)
      const errorMessage = error instanceof Error ? error.message : "Unknown error"
      setSaveError(`Failed to save lesson plan: ${errorMessage}`)
      sonnerToast({
        title: "Error",
        description: `Failed to save lesson plan: ${errorMessage}`,
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  const handleCopy = async () => {
    if (!lessonPlan) return

    try {
      // If we're in edit mode, copy the editable version
      const contentToCopy = isEditing ? editableLessonPlan : lessonPlan
      await navigator.clipboard.writeText(contentToCopy || "")
      setCopied(true)
      sonnerToast({
        title: "Copied",
        description: "Lesson plan copied to clipboard",
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      sonnerToast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive",
      })
    }
  }

  const handleDownload = async () => {
    if (!lessonPlan) return

    setIsDownloading(true)
    try {
      const filename = `${subject} - ${topic || "Lesson Plan"}.pdf`

      // If we're in edit mode, download the editable version
      const contentToDownload = isEditing ? editableLessonPlan : lessonPlan

      await generatePDF({
        content: contentToDownload || "",
        filename,
        title: `${subject}: ${topic || "Lesson Plan"}`,
      })

      sonnerToast({
        title: "Downloaded",
        description: `Lesson plan saved as ${filename}`,
      })
    } catch (error) {
      console.error("Error downloading lesson plan:", error)
      sonnerToast({
        title: "Error",
        description: "Failed to download lesson plan. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsDownloading(false)
    }
  }

  const handleEdit = () => {
    setIsEditing(true)
    setActiveTab("plan") // Switch to plan tab for editing
  }

  const handleCancelEdit = () => {
    setEditableLessonPlan(lessonPlan) // Reset to original
    setIsEditing(false)
  }

  const handleApplyEdit = () => {
    setLessonPlan(editableLessonPlan)
    setIsEditing(false)

    // Update localStorage
    storeCurrentLessonPlan(editableLessonPlan || "")

    sonnerToast({
      title: "Changes applied",
      description: "Your edits have been applied to the lesson plan.",
    })
  }

  const handleShare = async () => {
    if (!session?.user) {
      sonnerToast({
        title: "Error",
        description: "Please log in to share lesson plans",
        variant: "destructive",
      })
      return
    }

    try {
      await navigator.share({
        title: "Lesson Plan",
        text: lessonPlan || "",
      })
      sonnerToast({
        title: "Shared",
        description: "Lesson plan shared successfully!",
      })
    } catch (error) {
      if (error instanceof Error && error.name !== "AbortError") {
        sonnerToast({
          title: "Error",
          description: "Failed to share",
          variant: "destructive",
        })
      }
    }
  }

  return (
    <Card className="h-full shadow-lg border-t-4 border-t-primary/70">
      <CardHeader className="pb-3">
        <CardTitle className="flex justify-between items-center">
          <span>Lesson Plan</span>
          <div className="flex gap-2">
            {!isEditing ? (
              <>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleCopy}
                  disabled={!lessonPlan || copied}
                  className="flex items-center gap-1"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? "Copied" : "Copy"}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleDownload}
                  disabled={!lessonPlan || isDownloading}
                  className="flex items-center gap-1"
                >
                  {isDownloading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
                  {isDownloading ? "Downloading..." : "Download"}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleEdit}
                  disabled={!lessonPlan}
                  className="flex items-center gap-1"
                >
                  <Edit className="h-4 w-4" />
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="default"
                  onClick={handleSave}
                  disabled={!lessonPlan || isSaving}
                  className="flex items-center gap-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                >
                  {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                  {isSaving ? "Saving..." : "Save"}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleShare}
                  disabled={!lessonPlan}
                  className="flex items-center gap-1"
                >
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </>
            ) : (
              <>
                <Button size="sm" variant="outline" onClick={handleCancelEdit} className="flex items-center gap-1">
                  <X className="h-4 w-4" />
                  Cancel
                </Button>
                <Button size="sm" variant="default" onClick={handleApplyEdit} className="flex items-center gap-1">
                  <Check className="h-4 w-4" />
                  Apply Changes
                </Button>
                <Button
                  size="sm"
                  variant="default"
                  onClick={handleSave}
                  disabled={isSaving}
                  className="flex items-center gap-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                >
                  {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                  {isSaving ? "Saving..." : "Save & Exit"}
                </Button>
              </>
            )}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {saveError && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error saving lesson plan</AlertTitle>
            <AlertDescription>{saveError}</AlertDescription>
          </Alert>
        )}

        {/* Add metadata fields */}
        {lessonPlan && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 p-4 bg-muted/30 rounded-md">
            <div className="space-y-2">
              <Label htmlFor="lesson-title">Title</Label>
              <Input
                id="lesson-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-white"
                disabled={isEditing}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lesson-subject">Subject</Label>
              <Input
                id="lesson-subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="bg-white"
                disabled={isEditing}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lesson-grade">Grade Level</Label>
              <Input
                id="lesson-grade"
                value={gradeLevel}
                onChange={(e) => setGradeLevel(e.target.value)}
                className="bg-white"
                disabled={isEditing}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lesson-topic">Topic</Label>
              <Input
                id="lesson-topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="bg-white"
                disabled={isEditing}
              />
            </div>
          </div>
        )}

        {lessonPlan ? (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="plan">Lesson Plan</TabsTrigger>
              <TabsTrigger value="preview" disabled={isEditing}>
                Preview
              </TabsTrigger>
            </TabsList>

            <TabsContent value="plan" className="min-h-[400px]">
              {isEditing ? (
                <Textarea
                  value={editableLessonPlan || ""}
                  onChange={(e) => setEditableLessonPlan(e.target.value)}
                  className="font-mono text-sm p-4 h-[500px] w-full resize-none"
                />
              ) : (
                <pre className="whitespace-pre-wrap font-sans text-sm p-4 bg-muted/30 rounded-md h-[500px] overflow-y-auto">
                  {lessonPlan}
                </pre>
              )}
            </TabsContent>

            <TabsContent value="preview" className="min-h-[400px]">
              <div className="prose prose-sm max-w-none p-4 bg-white rounded-md h-[500px] overflow-y-auto">
                {lessonPlan.split("\n").map((line, i) => {
                  // Handle headers
                  if (line.startsWith("# ")) {
                    return (
                      <h1 key={i} className="text-xl font-bold mt-4 mb-2">
                        {line.substring(2)}
                      </h1>
                    )
                  }
                  if (line.startsWith("## ")) {
                    return (
                      <h2 key={i} className="text-lg font-bold mt-3 mb-2">
                        {line.substring(3)}
                      </h2>
                    )
                  }
                  if (line.startsWith("### ")) {
                    return (
                      <h3 key={i} className="text-md font-bold mt-2 mb-1">
                        {line.substring(4)}
                      </h3>
                    )
                  }

                  // Handle lists
                  if (line.match(/^\d+\.\s/)) {
                    return (
                      <div key={i} className="ml-4 my-1">
                        {line}
                      </div>
                    )
                  }
                  if (line.match(/^-\s/)) {
                    return (
                      <div key={i} className="ml-4 my-1">
                        • {line.substring(2)}
                      </div>
                    )
                  }

                  // Handle empty lines
                  if (line.trim() === "") {
                    return <div key={i} className="h-4"></div>
                  }

                  // Regular paragraph
                  return (
                    <p key={i} className="my-1">
                      {line}
                    </p>
                  )
                })}
              </div>
            </TabsContent>
          </Tabs>
        ) : (
          <div className="flex flex-col items-center justify-center h-[500px] text-center p-4 bg-muted/30 rounded-md">
            <div className="text-4xl mb-4 text-muted-foreground">📝</div>
            <h3 className="text-lg font-medium mb-2">No Lesson Plan Generated Yet</h3>
            <p className="text-muted-foreground max-w-md">
              Fill out the form and click "Generate Lesson Plan" to create your personalized lesson plan.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
