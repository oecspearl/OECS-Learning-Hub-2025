"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import { saveMultigradePlan } from "@/app/actions/multigrade-plans"
import { generatePDF } from "@/lib/pdf-utils"
import { Loader2, Save, Download, Copy, Check, Edit, X, Users } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function MultigradeOutput() {
  const { toast } = useToast()
  const [lessonPlan, setLessonPlan] = useState<string | null>(null)
  const [editableLessonPlan, setEditableLessonPlan] = useState<string | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [activeTab, setActiveTab] = useState("plan")
  const [copied, setCopied] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [metadata, setMetadata] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Form fields for metadata
  const [title, setTitle] = useState("Multigrade Lesson Plan")
  const [subject, setSubject] = useState("")
  const [gradeRange, setGradeRange] = useState("")
  const [topic, setTopic] = useState("")

  useEffect(() => {
    const handlePlanGenerated = (event: CustomEvent) => {
      console.log("Received multigradePlanGenerated event:", event.detail)
      const { content, metadata } = event.detail
      if (content) {
        setLessonPlan(content)
        setMetadata(metadata)
        setIsLoading(false)
        if (metadata) {
          setSubject(metadata.subject || "")
          setGradeRange(metadata.gradeRange || "")
          setTopic(metadata.topic || "")
          setTitle(`${metadata.subject || "Multigrade"} - ${metadata.topic || "Lesson Plan"}`)
        }
      }
    }

    window.addEventListener("multigradePlanGenerated", handlePlanGenerated as EventListener)
    return () => {
      window.removeEventListener("multigradePlanGenerated", handlePlanGenerated as EventListener)
    }
  }, [])

  const handleSave = async () => {
    if (!lessonPlan) return

    setIsSaving(true)
    try {
      const contentToSave = isEditing ? editableLessonPlan : lessonPlan

      // Validate required fields
      if (!subject || !gradeRange || !topic) {
        throw new Error('Missing required fields: subject, gradeRange, and topic are required')
      }

      const formData = {
        title: title || 'Multigrade Lesson Plan',
        subject,
        gradeRange,
        topic,
        content: contentToSave || '',
        duration: metadata?.duration?.toString() || '60',
        materials: metadata?.materials || '',
        pedagogicalStrategy: metadata?.pedagogicalStrategy || '',
        differentiationStrategies: metadata?.differentiationStrategies || [],
        groupingStrategy: metadata?.groupingStrategy || '',
        assessmentApproach: metadata?.assessmentApproach || '',
        learningOutcomes: metadata?.learningOutcomes || '',
        specialNeeds: metadata?.specialNeeds || false,
        specialNeedsDetails: metadata?.specialNeedsDetails || '',
        additionalInstructions: metadata?.additionalInstructions || ''
      }

      const result = await saveMultigradePlan(formData, contentToSave || '')

      if (result.success) {
        toast({
          title: "Multigrade lesson plan saved",
          description: "Your lesson plan has been saved successfully.",
        })

        if (isEditing) {
          setLessonPlan(editableLessonPlan)
          setIsEditing(false)
        }
      } else {
        throw new Error("Failed to save lesson plan")
      }
    } catch (error) {
      console.error("Error saving multigrade lesson plan:", error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to save lesson plan. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  const handleCopy = async () => {
    if (!lessonPlan) return

    try {
      const contentToCopy = isEditing ? editableLessonPlan : lessonPlan
      await navigator.clipboard.writeText(contentToCopy || "")
      setCopied(true)
      toast({
        title: "Copied",
        description: "Lesson plan copied to clipboard",
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      toast({
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
      const filename = `Multigrade_${subject}_${topic || "Lesson"}.pdf`
      const contentToDownload = isEditing ? editableLessonPlan : lessonPlan

      await generatePDF({
        content: contentToDownload || "",
        filename,
        title: `Multigrade ${subject}: ${topic || "Lesson Plan"}`,
      })

      toast({
        title: "Downloaded",
        description: `Lesson plan saved as ${filename}`,
      })
    } catch (error) {
      console.error("Error downloading lesson plan:", error)
      toast({
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
    setActiveTab("plan")
  }

  const handleCancelEdit = () => {
    setEditableLessonPlan(lessonPlan)
    setIsEditing(false)
  }

  const handleApplyEdit = () => {
    setLessonPlan(editableLessonPlan)
    setIsEditing(false)
    toast({
      title: "Changes applied",
      description: "Your edits have been applied to the lesson plan.",
    })
  }

  return (
    <Card className="h-full shadow-lg border-t-4 border-t-green-600">
      <CardHeader className="pb-3 bg-gradient-to-r from-green-50 to-emerald-50">
        <CardTitle className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-green-600" />
            <span className="text-green-800">Multigrade Lesson Plan</span>
          </div>
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
                  className="flex items-center gap-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                >
                  {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                  {isSaving ? "Saving..." : "Save"}
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
                  className="flex items-center gap-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
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
        {lessonPlan && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 p-4 bg-green-50 rounded-md">
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
              <Label htmlFor="lesson-grade-range">Grade Range</Label>
              <Input
                id="lesson-grade-range"
                value={gradeRange}
                onChange={(e) => setGradeRange(e.target.value)}
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
                <pre className="whitespace-pre-wrap font-sans text-sm p-4 bg-green-50 rounded-md h-[500px] overflow-y-auto">
                  {lessonPlan}
                </pre>
              )}
            </TabsContent>

            <TabsContent value="preview" className="min-h-[400px]">
              <div className="prose prose-sm max-w-none p-4 bg-white rounded-md h-[500px] overflow-y-auto border">
                {lessonPlan.split("\n").map((line, i) => {
                  if (line.startsWith("# ")) {
                    return (
                      <h1 key={i} className="text-xl font-bold mt-4 mb-2 text-green-800">
                        {line.substring(2)}
                      </h1>
                    )
                  }
                  if (line.startsWith("## ")) {
                    return (
                      <h2 key={i} className="text-lg font-bold mt-3 mb-2 text-green-700">
                        {line.substring(3)}
                      </h2>
                    )
                  }
                  if (line.startsWith("### ")) {
                    return (
                      <h3 key={i} className="text-md font-bold mt-2 mb-1 text-green-600">
                        {line.substring(4)}
                      </h3>
                    )
                  }
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
                  if (line.trim() === "") {
                    return <div key={i} className="h-4"></div>
                  }
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
          <div className="flex flex-col items-center justify-center h-[500px] text-center p-4 bg-green-50 rounded-md">
            <div className="text-4xl mb-4 text-green-600">
              <Users className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium mb-2 text-green-800">No Multigrade Lesson Plan Generated Yet</h3>
            <p className="text-green-600 max-w-md">
              Fill out the multigrade form and click "Generate Multigrade Plan" to create your personalized lesson plan
              for multiple grade levels.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
