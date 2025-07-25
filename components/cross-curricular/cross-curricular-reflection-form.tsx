"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { saveCrossCurricularReflection, type CrossCurricularReflection } from "@/app/actions/cross-curricular-reflections"
import { useAuth } from "@/contexts/AuthContext"
import { Calendar, BookOpen } from "lucide-react"

interface CrossCurricularReflectionFormProps {
  planId: string
  planTitle?: string
  existingReflection?: any
  onClose?: () => void
}

export default function CrossCurricularReflectionForm({ 
  planId, 
  planTitle = "Cross-Curricular Lesson",
  existingReflection,
  onClose 
}: CrossCurricularReflectionFormProps) {
  const { user } = useAuth()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<Record<string, any>>({
    plan_id: planId,
    user_id: user?.id || "",
    reflection_date: new Date().toISOString().split('T')[0],
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

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!user?.id) {
      toast({
        title: "Authentication Error",
        description: "Please log in to save your reflection",
        variant: "destructive"
      })
      setIsSubmitting(false)
      return
    }

    try {
      // Update user_id from current user
      const dataWithUserId = {
        ...formData,
        user_id: user.id
      }

      const result = await saveCrossCurricularReflection(dataWithUserId)

      if (result.success) {
        toast({
          title: existingReflection ? "Reflection Updated" : "Reflection Created",
          description: existingReflection 
            ? "Your cross-curricular reflection has been updated successfully."
            : "Your cross-curricular reflection has been saved successfully.",
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
      console.error("Error saving reflection:", error)
      toast({
        title: "Error",
        description: "An unexpected error occurred while saving your reflection",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderTextarea = (field: string, label: string, placeholder?: string) => (
    <div className="space-y-2">
      <Label htmlFor={field} className="text-sm sm:text-base">{label}</Label>
      <Textarea
        id={field}
        placeholder={placeholder}
        value={formData[field] || ""}
        onChange={(e) => handleInputChange(field, e.target.value)}
        className="min-h-[80px] sm:min-h-[100px] text-sm sm:text-base"
      />
    </div>
  )

  const renderSelect = (field: string, label: string, options: { value: string; label: string }[]) => (
    <div className="space-y-2">
      <Label htmlFor={field} className="text-sm sm:text-base">{label}</Label>
      <Select value={formData[field] || ""} onValueChange={(value) => handleInputChange(field, value)}>
        <SelectTrigger className="text-sm sm:text-base">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value} className="text-sm sm:text-base">
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="p-4 sm:p-6">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
          <div>
            <CardTitle className="text-lg sm:text-xl">Cross-Curricular Lesson Reflection</CardTitle>
            <CardDescription className="text-sm">
              Complete this reflection after teaching "{planTitle}"
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Lesson Outcome Checklist */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Lesson Outcome Checklist</h3>
            
            {renderSelect('objectives_met', 'Were the lesson objectives met by most students?', [
              { value: 'Yes', label: 'Yes' },
              { value: 'No', label: 'No' },
              { value: 'Partially', label: 'Partially' }
            ])}
            
            {renderSelect('student_understanding', 'Did students demonstrate understanding through their work or participation?', [
              { value: 'Yes', label: 'Yes' },
              { value: 'No', label: 'No' },
              { value: 'Partially', label: 'Partially' }
            ])}
            
            {renderSelect('assessment_effective', 'Was the assessment strategy effective in measuring understanding?', [
              { value: 'Yes', label: 'Yes' },
              { value: 'No', label: 'No' },
              { value: 'Partially', label: 'Partially' }
            ])}
            
            {renderSelect('content_suitable', 'Did the lesson content suit the students\' age, level, and interests?', [
              { value: 'Yes', label: 'Yes' },
              { value: 'No', label: 'No' },
              { value: 'Partially', label: 'Partially' }
            ])}
            
            {renderSelect('strategies_engaging', 'Were the teaching strategies and materials engaging and inclusive?', [
              { value: 'Yes', label: 'Yes' },
              { value: 'No', label: 'No' },
              { value: 'Partially', label: 'Partially' }
            ])}
            
            {renderSelect('students_on_task', 'Did students remain on-task and engaged throughout the lesson?', [
              { value: 'Yes', label: 'Yes' },
              { value: 'No', label: 'No' },
              { value: 'Partially', label: 'Partially' }
            ])}
            
            {renderSelect('differentiation_effective', 'Were differentiation strategies effective for varied learner needs?', [
              { value: 'Yes', label: 'Yes' },
              { value: 'No', label: 'No' },
              { value: 'Partially', label: 'Partially' }
            ])}
            
            {renderSelect('long_term_goals', 'Did the lesson contribute to long-term learning goals or skills?', [
              { value: 'Yes', label: 'Yes' },
              { value: 'No', label: 'No' },
              { value: 'Partially', label: 'Partially' }
            ])}
            
            {renderSelect('student_opportunities', 'Did students have opportunities to reflect, question, or collaborate?', [
              { value: 'Yes', label: 'Yes' },
              { value: 'No', label: 'No' },
              { value: 'Partially', label: 'Partially' }
            ])}
          </div>

          {/* Detailed Responses */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Detailed Responses</h3>
            
            {renderTextarea('evidence_support', 'What evidence (student responses, work samples, behavior) supports this?', 'Describe specific evidence that supports your assessment...')}
            
            {renderTextarea('students_not_meeting_objectives', 'Were there students who did not meet the objectives? Why?', 'Identify students who struggled and possible reasons...')}
            
            {renderTextarea('misconceptions_difficulties', 'What misconceptions or difficulties emerged?', 'Describe any misconceptions or challenges students faced...')}
            
            {renderTextarea('future_improvements', 'What changes would you make to improve this lesson in the future?', 'Describe specific improvements for future lessons...')}
            
            {renderTextarea('behavioral_issues', 'Were there any behavioral or classroom management issues? How were they handled?', 'Describe any behavioral challenges and how they were addressed...')}
          </div>

          {/* Additional Reflection */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Additional Reflection</h3>
            
            {renderTextarea('time_management', 'Time Management', 'How well did you manage time during this lesson?')}
            
            {renderTextarea('teaching_insights', 'What did I learn about my teaching from this lesson?', 'Reflect on your teaching practice and insights gained...')}
            
            {renderTextarea('next_steps', 'Next Steps', 'What will you do differently next time? What follow-up activities are needed?')}
          </div>

          {/* Ratings */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Ratings</h3>
            
            {renderSelect('overall_rating', 'Overall Lesson Rating (1-5)', [
              { value: '1', label: '1 - Poor' },
              { value: '2', label: '2 - Below Average' },
              { value: '3', label: '3 - Average' },
              { value: '4', label: '4 - Good' },
              { value: '5', label: '5 - Excellent' }
            ])}
            
            {renderSelect('student_engagement_level', 'Student Engagement Level', [
              { value: 'High', label: 'High' },
              { value: 'Medium', label: 'Medium' },
              { value: 'Low', label: 'Low' }
            ])}
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="w-full sm:w-auto">
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
              {isSubmitting ? "Saving..." : "Save Reflection"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
} 