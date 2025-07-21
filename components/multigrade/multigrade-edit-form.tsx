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
import { saveMultigradePlan, deleteMultigradePlan } from "@/app/actions/multigrade-plans"
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

interface MultigradePlan {
  id: string
  title: string
  subject: string
  grade_range: string
  topic: string
  content: string
  created_at?: string
  duration?: string
  materials?: string
  pedagogical_strategy?: string
  differentiation_strategies?: string
  grouping_strategy?: string
  assessment_approach?: string
}

export function MultigradeEditForm({ plan }: { plan: MultigradePlan }) {
  const router = useRouter()
  const { toast } = useToast()
  const [isSaving, setIsSaving] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [activeTab, setActiveTab] = useState("basic")
  const [formData, setFormData] = useState({
    id: plan.id,
    title: plan.title,
    subject: plan.subject,
    gradeRange: plan.grade_range,
    topic: plan.topic,
    content: plan.content,
    duration: plan.duration || "60",
    materials: plan.materials || "",
    pedagogicalStrategy: plan.pedagogical_strategy || "",
    differentiationStrategies: plan.differentiation_strategies || "",
    groupingStrategy: plan.grouping_strategy || "",
    assessmentApproach: plan.assessment_approach || "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    try {
      const submitData = new FormData()
      submitData.append("id", formData.id)
      submitData.append("title", formData.title)
      submitData.append("subject", formData.subject)
      submitData.append("gradeRange", formData.gradeRange)
      submitData.append("topic", formData.topic)
      submitData.append("content", formData.content)
      submitData.append("duration", formData.duration)
      submitData.append("materials", formData.materials)
      submitData.append("pedagogicalStrategy", formData.pedagogicalStrategy)
      submitData.append("differentiationStrategies", formData.differentiationStrategies)
      submitData.append("groupingStrategy", formData.groupingStrategy)
      submitData.append("assessmentApproach", formData.assessmentApproach)

      const result = await saveMultigradePlan(submitData)

      if (!result.success) {
        throw new Error("Failed to save multigrade plan")
      }

      toast({
        title: "Multigrade plan updated",
        description: "Your changes have been saved successfully.",
      })

      router.push("/dashboard")
      router.refresh()
    } catch (error) {
      console.error("Error saving multigrade plan:", error)
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
      await deleteMultigradePlan(plan.id)
      toast({
        title: "Plan deleted",
        description: "Your multigrade lesson plan has been deleted.",
      })
      router.push("/dashboard")
    } catch (error) {
      console.error("Error deleting multigrade plan:", error)
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
                This action cannot be undone. This will permanently delete your multigrade lesson plan.
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

      <Card className="shadow-lg border-t-4 border-t-green-600">
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="strategy">Strategy</TabsTrigger>
                <TabsTrigger value="content">Content</TabsTrigger>
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
                    className="border-green-200 focus:border-green-400"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="subject">
                      Subject <span className="text-red-500">*</span>
                    </Label>
                    <Select value={formData.subject} onValueChange={(value) => handleSelectChange("subject", value)}>
                      <SelectTrigger id="subject" className="border-green-200 focus:border-green-400">
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mathematics">Mathematics</SelectItem>
                        <SelectItem value="science">Science</SelectItem>
                        <SelectItem value="english">English Language Arts</SelectItem>
                        <SelectItem value="social-studies">Social Studies</SelectItem>
                        <SelectItem value="art">Art</SelectItem>
                        <SelectItem value="music">Music</SelectItem>
                        <SelectItem value="physical-education">Physical Education</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gradeRange">
                      Grade Range <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.gradeRange}
                      onValueChange={(value) => handleSelectChange("gradeRange", value)}
                    >
                      <SelectTrigger id="gradeRange" className="border-green-200 focus:border-green-400">
                        <SelectValue placeholder="Select grade range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="K-2">Kindergarten - Grade 2</SelectItem>
                        <SelectItem value="1-3">Grade 1 - Grade 3</SelectItem>
                        <SelectItem value="2-4">Grade 2 - Grade 4</SelectItem>
                        <SelectItem value="3-5">Grade 3 - Grade 5</SelectItem>
                        <SelectItem value="4-6">Grade 4 - Grade 6</SelectItem>
                        <SelectItem value="K-6">Kindergarten - Grade 6 (All Primary)</SelectItem>
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
                    className="border-green-200 focus:border-green-400"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration (minutes)</Label>
                    <Input
                      id="duration"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      className="border-green-200 focus:border-green-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="materials">Materials</Label>
                    <Input
                      id="materials"
                      name="materials"
                      value={formData.materials}
                      onChange={handleChange}
                      className="border-green-200 focus:border-green-400"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="strategy" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="pedagogicalStrategy">Pedagogical Strategy</Label>
                  <Input
                    id="pedagogicalStrategy"
                    name="pedagogicalStrategy"
                    value={formData.pedagogicalStrategy}
                    onChange={handleChange}
                    className="border-green-200 focus:border-green-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="differentiationStrategies">Differentiation Strategies</Label>
                  <Textarea
                    id="differentiationStrategies"
                    name="differentiationStrategies"
                    value={formData.differentiationStrategies}
                    onChange={handleChange}
                    rows={3}
                    className="border-green-200 focus:border-green-400"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="groupingStrategy">Grouping Strategy</Label>
                    <Input
                      id="groupingStrategy"
                      name="groupingStrategy"
                      value={formData.groupingStrategy}
                      onChange={handleChange}
                      className="border-green-200 focus:border-green-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="assessmentApproach">Assessment Approach</Label>
                    <Input
                      id="assessmentApproach"
                      name="assessmentApproach"
                      value={formData.assessmentApproach}
                      onChange={handleChange}
                      className="border-green-200 focus:border-green-400"
                    />
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
                    className="font-mono text-sm border-green-200 focus:border-green-400"
                  />
                </div>
              </TabsContent>
            </Tabs>

            <div className="pt-4 flex justify-end">
              <Button
                type="submit"
                disabled={isSaving}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium px-6"
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
