"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { saveLessonPlan, deleteLessonPlan } from "@/app/actions/lesson-plans"
import { useToast } from "@/components/ui/use-toast"
import { Loader2, Save, Trash2, ArrowLeft } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface LessonPlan {
  id: string
  title: string
  subject: string
  grade_level: string
  topic: string
  lesson_content: string
  created_at?: string
  user_id?: string
  pedagogical_strategy?: string
  special_needs?: boolean
  special_needs_details?: string
}

export function PlannerEditForm({ lessonPlan }: { lessonPlan: LessonPlan }) {
  const router = useRouter()
  const { toast } = useToast()
  const [isSaving, setIsSaving] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [activeTab, setActiveTab] = useState("basic")
  const [formData, setFormData] = useState({
    id: lessonPlan.id,
    title: lessonPlan.title,
    subject: lessonPlan.subject,
    gradeLevel: lessonPlan.grade_level,
    topic: lessonPlan.topic,
    content: lessonPlan.lesson_content,
    pedagogicalStrategy: lessonPlan.pedagogical_strategy || "",
    specialNeeds: lessonPlan.special_needs || false,
    specialNeedsDetails: lessonPlan.special_needs_details || "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, specialNeeds: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    try {
      // Create FormData for saving
      const submitData = new FormData()
      submitData.append("id", formData.id)
      submitData.append("title", formData.title)
      submitData.append("subject", formData.subject)
      submitData.append("grade_level", formData.gradeLevel) // Changed from gradeLevel to grade_level
      submitData.append("topic", formData.topic)
      submitData.append("lesson_content", formData.content) // Changed from content to lesson_content
      submitData.append("duration_minutes", "50") // Add duration_minutes field
      submitData.append("user_id", lessonPlan.user_id || "1") // Use lessonPlan.user_id instead of formData.user_id

      if (formData.pedagogicalStrategy) {
        submitData.append("pedagogicalStrategy", formData.pedagogicalStrategy)
      }

      submitData.append("specialNeeds", formData.specialNeeds.toString())
      if (formData.specialNeeds && formData.specialNeedsDetails) {
        submitData.append("specialNeedsDetails", formData.specialNeedsDetails)
      }

      const result = await saveLessonPlan(submitData)

      if (!result.success) {
        throw new Error(result.error || "Failed to save lesson plan")
      }

      toast({
        title: "Lesson plan updated",
        description: "Your changes have been saved successfully.",
      })

      // Navigate back to dashboard
      router.push("/dashboard")
      router.refresh()
    } catch (error) {
      console.error("Error saving lesson plan:", error)
      toast({
        title: "Error",
        description: "Failed to save changes. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  const handleDelete = async () => {
    setIsDeleting(true)
    try {
      await deleteLessonPlan(lessonPlan.id)
      toast({
        title: "Plan deleted",
        description: "Your lesson plan has been deleted.",
      })
      router.push("/dashboard")
    } catch (error) {
      console.error("Error deleting lesson plan:", error)
      toast({
        title: "Error",
        description: "Failed to delete lesson plan. Please try again.",
        variant: "destructive",
      })
      setIsDeleting(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Button variant="outline" onClick={() => router.push("/dashboard")} className="flex items-center gap-1">
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Button>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" disabled={isDeleting} className="flex items-center gap-1">
              {isDeleting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
              {isDeleting ? "Deleting..." : "Delete Plan"}
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your lesson plan.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <Card className="shadow-lg border-t-4 border-t-primary">
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
              </TabsList>

              <TabsContent value="basic" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">
                    Title <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="border-primary/20 focus:border-primary/40"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="subject">
                      Subject <span className="text-red-500">*</span>
                    </Label>
                    <Select value={formData.subject} onValueChange={(value) => handleSelectChange("subject", value)}>
                      <SelectTrigger id="subject" className="border-primary/20 focus:border-primary/40">
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mathematics">Mathematics</SelectItem>
                        <SelectItem value="science">Science</SelectItem>
                        <SelectItem value="english">English Language Arts</SelectItem>
                        <SelectItem value="social_studies">Social Studies</SelectItem>
                        <SelectItem value="art">Art</SelectItem>
                        <SelectItem value="music">Music</SelectItem>
                        <SelectItem value="physical_education">Physical Education</SelectItem>
                        <SelectItem value="technology">Technology</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gradeLevel">
                      Grade Level <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.gradeLevel}
                      onValueChange={(value) => handleSelectChange("gradeLevel", value)}
                    >
                      <SelectTrigger id="gradeLevel" className="border-primary/20 focus:border-primary/40">
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="K">Kindergarten</SelectItem>
                        <SelectItem value="1">Grade 1</SelectItem>
                        <SelectItem value="2">Grade 2</SelectItem>
                        <SelectItem value="3">Grade 3</SelectItem>
                        <SelectItem value="4">Grade 4</SelectItem>
                        <SelectItem value="5">Grade 5</SelectItem>
                        <SelectItem value="6">Grade 6</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="topic">
                    Topic <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    required
                    className="border-primary/20 focus:border-primary/40"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pedagogicalStrategy">Pedagogical Strategy</Label>
                  <Input
                    id="pedagogicalStrategy"
                    name="pedagogicalStrategy"
                    value={formData.pedagogicalStrategy}
                    onChange={handleChange}
                    className="border-primary/20 focus:border-primary/40"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="specialNeeds"
                      checked={formData.specialNeeds}
                      onCheckedChange={handleCheckboxChange}
                    />
                    <Label htmlFor="specialNeeds">Special Needs Accommodations</Label>
                  </div>
                  {formData.specialNeeds && (
                    <Textarea
                      id="specialNeedsDetails"
                      name="specialNeedsDetails"
                      value={formData.specialNeedsDetails}
                      onChange={handleChange}
                      placeholder="Describe the special needs accommodations"
                      className="border-primary/20 focus:border-primary/40"
                    />
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Created</Label>
                  <div className="text-sm text-muted-foreground">
                    {lessonPlan.created_at ? new Date(lessonPlan.created_at).toLocaleString() : "Unknown"}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="content" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="content">Lesson Plan Content</Label>
                  <Textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    rows={20}
                    className="font-mono text-sm border-primary/20 focus:border-primary/40"
                  />
                </div>
              </TabsContent>

              <TabsContent value="preview" className="space-y-4">
                <div className="prose prose-sm max-w-none p-4 bg-white rounded-md border border-primary/20 min-h-[500px] overflow-y-auto">
                  {formData.content.split("\n").map((line, i) => {
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

            <div className="pt-4 flex justify-end">
              <Button
                type="submit"
                disabled={isSaving}
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-medium px-6"
              >
                {isSaving ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Save className="h-4 w-4 mr-2" />}
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
