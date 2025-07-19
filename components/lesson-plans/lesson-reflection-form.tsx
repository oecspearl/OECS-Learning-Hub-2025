"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { createLessonReflection, updateLessonReflection, type LessonReflectionData } from "@/app/actions/lesson-reflections"
import { Calendar, CheckCircle, AlertCircle, Clock, Users, BookOpen, Target, Lightbulb } from "lucide-react"

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
  const [formData, setFormData] = useState<Partial<LessonReflectionData>>({
    lesson_plan_id: lessonPlanId,
    reflection_date: existingReflection?.reflection_date || new Date().toISOString().split('T')[0],
    objectives_met: existingReflection?.objectives_met || "",
    student_understanding: existingReflection?.student_understanding || "",
    evidence_support: existingReflection?.evidence_support || "",
    students_not_meeting_objectives: existingReflection?.students_not_meeting_objectives || "",
    misconceptions_difficulties: existingReflection?.misconceptions_difficulties || "",
    assessment_effective: existingReflection?.assessment_effective || "",
    content_suitable: existingReflection?.content_suitable || "",
    strategies_engaging: existingReflection?.strategies_engaging || "",
    students_on_task: existingReflection?.students_on_task || "",
    differentiation_effective: existingReflection?.differentiation_effective || "",
    future_improvements: existingReflection?.future_improvements || "",
    long_term_goals: existingReflection?.long_term_goals || "",
    behavioral_issues: existingReflection?.behavioral_issues || "",
    student_opportunities: existingReflection?.student_opportunities || "",
    teaching_insights: existingReflection?.teaching_insights || "",
    overall_rating: existingReflection?.overall_rating || 3,
    time_management: existingReflection?.time_management || "",
    student_engagement_level: existingReflection?.student_engagement_level || "Medium",
    next_steps: existingReflection?.next_steps || "",
  })

  const { toast } = useToast()
  const router = useRouter()

  const handleInputChange = (field: keyof LessonReflectionData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = existingReflection 
        ? await updateLessonReflection(existingReflection.id, formData as LessonReflectionData)
        : await createLessonReflection(formData as LessonReflectionData)

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

  const renderRadioGroup = (field: keyof LessonReflectionData, label: string, description?: string) => (
    <div className="space-y-3">
      <Label className="text-base font-medium">{label}</Label>
      {description && <p className="text-sm text-muted-foreground">{description}</p>}
      <RadioGroup
        value={formData[field] as string}
        onValueChange={(value) => handleInputChange(field, value)}
        className="flex flex-col space-y-2"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Yes" id={`${field}-yes`} />
          <Label htmlFor={`${field}-yes`} className="text-sm">Yes</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="No" id={`${field}-no`} />
          <Label htmlFor={`${field}-no`} className="text-sm">No</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Partially" id={`${field}-partially`} />
          <Label htmlFor={`${field}-partially`} className="text-sm">Partially</Label>
        </div>
      </RadioGroup>
    </div>
  )

  const renderTextarea = (field: keyof LessonReflectionData, label: string, placeholder?: string) => (
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
            <CardTitle>Lesson Outcome Reflection</CardTitle>
            <CardDescription>
              Complete this reflection after teaching "{lessonTitle}"
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="reflection_date" className="text-base font-medium">Reflection Date</Label>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <input
                  type="date"
                  id="reflection_date"
                  value={formData.reflection_date}
                  onChange={(e) => handleInputChange('reflection_date', e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="overall_rating" className="text-base font-medium">Overall Lesson Rating</Label>
              <Select
                value={formData.overall_rating?.toString()}
                onValueChange={(value) => handleInputChange('overall_rating', parseInt(value))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 - Poor</SelectItem>
                  <SelectItem value="2">2 - Fair</SelectItem>
                  <SelectItem value="3">3 - Good</SelectItem>
                  <SelectItem value="4">4 - Very Good</SelectItem>
                  <SelectItem value="5">5 - Excellent</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Lesson Outcome Checklist */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <h3 className="text-lg font-semibold">Lesson Outcome Checklist</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {renderRadioGroup('objectives_met', 'Were the lesson objectives met by most students?')}
              {renderRadioGroup('student_understanding', 'Did students demonstrate understanding through their work or participation?')}
            </div>

            {renderTextarea('evidence_support', 'What evidence (student responses, work samples, behavior) supports this?', 'Describe specific examples of student work, responses, or behaviors that demonstrate understanding...')}

            {renderTextarea('students_not_meeting_objectives', 'Were there students who did not meet the objectives? Why?', 'Identify students who struggled and explain possible reasons...')}

            {renderTextarea('misconceptions_difficulties', 'What misconceptions or difficulties emerged?', 'Describe any common misconceptions or challenges students faced...')}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {renderRadioGroup('assessment_effective', 'Was the assessment strategy effective in measuring understanding?')}
              {renderRadioGroup('content_suitable', 'Did the lesson content suit the students\' age, level, and interests?')}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {renderRadioGroup('strategies_engaging', 'Were the teaching strategies and materials engaging and inclusive?')}
              {renderRadioGroup('students_on_task', 'Did students remain on-task and engaged throughout the lesson?')}
            </div>

            {renderRadioGroup('differentiation_effective', 'Were differentiation strategies effective for varied learner needs?')}

            {renderTextarea('future_improvements', 'What changes would you make to improve this lesson in the future?', 'Describe specific modifications, additions, or changes you would make...')}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {renderRadioGroup('long_term_goals', 'Did the lesson contribute to long-term learning goals or skills?')}
              {renderRadioGroup('student_opportunities', 'Did students have opportunities to reflect, question, or collaborate?')}
            </div>

            {renderTextarea('behavioral_issues', 'Were there any behavioral or classroom management issues? How were they handled?', 'Describe any behavioral challenges and your response strategies...')}
          </div>

          {/* Additional Reflection */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-yellow-600" />
              <h3 className="text-lg font-semibold">Additional Reflection</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="time_management" className="text-base font-medium">Time Management</Label>
                <Textarea
                  id="time_management"
                  placeholder="How well did you manage time during the lesson?"
                  value={formData.time_management}
                  onChange={(e) => handleInputChange('time_management', e.target.value)}
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="student_engagement_level" className="text-base font-medium">Student Engagement Level</Label>
                <Select
                  value={formData.student_engagement_level}
                  onValueChange={(value) => handleInputChange('student_engagement_level', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select engagement level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {renderTextarea('teaching_insights', 'What did I learn about my teaching from this lesson?', 'Reflect on your teaching practice and what you learned...')}

            {renderTextarea('next_steps', 'Next Steps', 'What will you do differently next time? Any follow-up activities or reteaching needed?')}
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-end gap-4 pt-6 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="min-w-[120px]"
            >
              {isSubmitting ? "Saving..." : existingReflection ? "Update Reflection" : "Save Reflection"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
} 