"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { createLessonReflection, updateLessonReflection, type LessonReflection } from "@/app/actions/lesson-reflections"
import { Calendar, BookOpen } from "lucide-react"

interface LessonReflectionFormProps {
  lessonPlanId: string
  lessonTitle: string
  existingReflection?: any
  onClose?: () => void
}

export function LessonReflectionForm({ 
  lessonPlanId, 
  lessonTitle, 
  existingReflection,
  onClose 
}: LessonReflectionFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<Partial<LessonReflection>>({
    lesson_plan_id: lessonPlanId,
    user_id: "", // This will be set from the current user
    reflection_text: existingReflection?.reflection_text || "",
    what_went_well: existingReflection?.what_went_well || "",
    what_could_be_improved: existingReflection?.what_could_be_improved || "",
    next_steps: existingReflection?.next_steps || "",
  })

  const { toast } = useToast()
  const router = useRouter()

  const handleInputChange = (field: keyof LessonReflection, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Add user_id from current user (this would need to be implemented)
      const dataWithUserId = {
        ...formData,
        user_id: "current-user-id" // This should come from auth context
      }

      const result = existingReflection 
        ? await updateLessonReflection(existingReflection.id, dataWithUserId as LessonReflection)
        : await createLessonReflection(dataWithUserId as LessonReflection)

      if (result.success) {
        toast({
          title: existingReflection ? "Reflection Updated" : "Reflection Created",
          description: existingReflection 
            ? "Your lesson reflection has been updated successfully."
            : "Your lesson reflection has been saved successfully.",
        })
        
        if (onClose) {
          onClose()
        } else {
          router.refresh()
        }
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to save reflection",
          variant: "destructive"
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderTextarea = (field: keyof LessonReflection, label: string, placeholder?: string) => (
    <div className="space-y-2">
      <Label htmlFor={field} className="text-base font-medium">{label}</Label>
      <Textarea
        id={field}
        placeholder={placeholder}
        value={formData[field] as string}
        onChange={(e) => handleInputChange(field, e.target.value)}
        className="min-h-[100px]"
      />
    </div>
  )

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-green-600" />
          <div>
            <CardTitle>Lesson Reflection</CardTitle>
            <CardDescription>
              Complete this reflection after teaching "{lessonTitle}"
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {renderTextarea('reflection_text', 'General Reflection', 'What are your overall thoughts about this lesson?')}
          
          {renderTextarea('what_went_well', 'What Went Well', 'Describe what aspects of the lesson were successful...')}
          
          {renderTextarea('what_could_be_improved', 'What Could Be Improved', 'Describe areas that could be enhanced or changed...')}
          
          {renderTextarea('next_steps', 'Next Steps', 'What will you do differently next time? What follow-up activities are needed?')}

          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save Reflection"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
} 