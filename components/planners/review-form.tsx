"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2, Upload } from "lucide-react"
import { reviewLessonPlan } from "@/app/actions/review-lesson-plan"
import { useToast } from "@/hooks/use-toast"

const FOCUS_AREAS = [
  { id: "alignment", label: "Standards Alignment" },
  { id: "engagement", label: "Student Engagement" },
  { id: "differentiation", label: "Differentiation" },
  { id: "assessment", label: "Assessment Strategies" },
  { id: "timing", label: "Timing and Pacing" },
  { id: "objectives", label: "Learning Objectives" },
  { id: "activities", label: "Learning Activities" },
  { id: "resources", label: "Resources and Materials" },
  { id: "technology", label: "Technology Integration" },
  { id: "inclusivity", label: "Inclusivity and Accessibility" },
]

export function ReviewForm({ onReviewGenerated }) {
  const [isLoading, setIsLoading] = useState(false)
  const [planContent, setPlanContent] = useState("")
  const [selectedAreas, setSelectedAreas] = useState<string[]>([])
  const [additionalInstructions, setAdditionalInstructions] = useState("")
  const [fileUploaded, setFileUploaded] = useState(false)
  const { toast } = useToast()

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      const content = event.target?.result as string
      setPlanContent(content)
      setFileUploaded(true)
      toast({
        title: "File uploaded",
        description: `${file.name} has been uploaded successfully.`,
      })
    }
    reader.readAsText(file)
  }

  const handleAreaToggle = (areaId: string) => {
    setSelectedAreas((prev) => (prev.includes(areaId) ? prev.filter((id) => id !== areaId) : [...prev, areaId]))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!planContent.trim()) {
      toast({
        title: "Missing content",
        description: "Please enter or upload a lesson plan to review.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      const formData = new FormData()
      formData.append("planContent", planContent)
      formData.append("focusAreas", selectedAreas.join(","))
      formData.append("additionalInstructions", additionalInstructions)

      const review = await reviewLessonPlan(formData)

      if (!review) {
        throw new Error("Failed to generate review")
      }

      onReviewGenerated(review)

      toast({
        title: "Review generated",
        description: "Your lesson plan review has been generated successfully.",
      })
    } catch (error) {
      console.error("Error generating review:", error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to generate review. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="shadow-md">
      <CardHeader className="bg-muted/30 border-b">
        <CardTitle className="text-xl font-bold text-primary">Lesson Plan Review</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="plan-content">Lesson Plan Content</Label>
            <Textarea
              id="plan-content"
              placeholder="Paste your lesson plan content here..."
              className="min-h-[200px] font-mono text-sm"
              value={planContent}
              onChange={(e) => setPlanContent(e.target.value)}
            />
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                {fileUploaded ? "File uploaded successfully" : "Or upload a file"}
              </div>
              <div className="relative">
                <Button
                  type="button"
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() => document.getElementById("file-upload")?.click()}
                >
                  <Upload className="h-4 w-4" />
                  Upload File
                </Button>
                <input
                  id="file-upload"
                  type="file"
                  accept=".txt,.md,.doc,.docx"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Focus Areas</Label>
            <div className="grid grid-cols-2 gap-2 border rounded-md p-3">
              {FOCUS_AREAS.map((area) => (
                <div key={area.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={area.id}
                    checked={selectedAreas.includes(area.id)}
                    onCheckedChange={() => handleAreaToggle(area.id)}
                  />
                  <Label htmlFor={area.id} className="text-sm cursor-pointer">
                    {area.label}
                  </Label>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Select areas you want the review to focus on. If none selected, a general review will be provided.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="additional-instructions">Additional Instructions</Label>
            <Textarea
              id="additional-instructions"
              placeholder="Any specific aspects you want the review to address..."
              className="min-h-[100px]"
              value={additionalInstructions}
              onChange={(e) => setAdditionalInstructions(e.target.value)}
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Review...
              </>
            ) : (
              "Generate Review"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
