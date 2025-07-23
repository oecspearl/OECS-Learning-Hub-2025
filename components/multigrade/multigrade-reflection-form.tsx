"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { createMultigradeReflection, updateMultigradeReflection, type MultigradeReflection } from "@/app/actions/multigrade-reflections"
import { useAuth } from "@/contexts/AuthContext"
import { Calendar, BookOpen, Users, Target } from "lucide-react"

interface MultigradeReflectionFormProps {
  multigradePlanId: string
  planTitle: string
  existingReflection?: any
  onClose?: () => void
}

export function MultigradeReflectionForm({ 
  multigradePlanId, 
  planTitle, 
  existingReflection,
  onClose 
}: MultigradeReflectionFormProps) {
  const { user } = useAuth()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<Record<string, any>>({
    multigrade_plan_id: multigradePlanId,
    user_id: user?.id || "",
    reflection_date: new Date().toISOString().split('T')[0],
    taught_date: new Date().toISOString().split('T')[0],
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
    grade_level_effectiveness: existingReflection?.grade_level_effectiveness || "",
    peer_learning_success: existingReflection?.peer_learning_success || "",
    differentiation_success: existingReflection?.differentiation_success || "",
    cross_grade_collaboration: existingReflection?.cross_grade_collaboration || "",
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

    try {
      // Update user_id from current user
      if (!user) {
        toast({
          title: "Error",
          description: "You must be logged in to save a reflection",
          variant: "destructive"
        })
        return
      }
      
      const dataWithUserId = {
        ...formData,
        user_id: user.id
      }

      const result = existingReflection 
        ? await updateMultigradeReflection(existingReflection.id, dataWithUserId as MultigradeReflection)
        : await createMultigradeReflection(dataWithUserId as MultigradeReflection)

      if (result.success) {
        toast({
          title: existingReflection ? "Reflection Updated" : "Reflection Created",
          description: existingReflection 
            ? "Your multigrade reflection has been updated successfully."
            : "Your multigrade reflection has been saved successfully.",
        })
        
        if (onClose) {
          onClose()
        } else {
          // Force a hard refresh to ensure the new reflection appears
          window.location.reload()
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

  const renderTextarea = (field: string, label: string, placeholder?: string) => (
    <div className="space-y-2">
      <Label htmlFor={field} className="text-base font-medium">{label}</Label>
      <Textarea
        id={field}
        placeholder={placeholder}
        value={formData[field] as string || ""}
        onChange={(e) => handleInputChange(field, e.target.value)}
        className="min-h-[100px]"
      />
    </div>
  )

  const renderSelect = (field: string, label: string, options: { value: string; label: string }[]) => (
    <div className="space-y-2">
      <Label htmlFor={field} className="text-base font-medium">{label}</Label>
      <Select value={formData[field] as string || ""} onValueChange={(value) => handleInputChange(field, value)}>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-green-600" />
          <div>
            <CardTitle>Multigrade Lesson Reflection</CardTitle>
            <CardDescription>
              Complete this reflection after teaching "{planTitle}"
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Lesson Outcome Checklist */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Lesson Outcome Checklist</h3>
            
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
          </div>

          {/* Multigrade-Specific Assessment */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              Multigrade-Specific Assessment
            </h3>
            
            {renderSelect('grade_level_effectiveness', 'How well did the multigrade approach work?', [
              { value: 'Very Effective', label: 'Very Effective' },
              { value: 'Effective', label: 'Effective' },
              { value: 'Somewhat Effective', label: 'Somewhat Effective' },
              { value: 'Not Effective', label: 'Not Effective' }
            ])}
            
            {renderSelect('peer_learning_success', 'Did peer learning work well between grade levels?', [
              { value: 'Yes', label: 'Yes' },
              { value: 'No', label: 'No' },
              { value: 'Partially', label: 'Partially' }
            ])}
            
            {renderSelect('differentiation_success', 'Were differentiation strategies effective across grade levels?', [
              { value: 'Yes', label: 'Yes' },
              { value: 'No', label: 'No' },
              { value: 'Partially', label: 'Partially' }
            ])}
            
            {renderTextarea('cross_grade_collaboration', 'Describe the cross-grade collaboration and peer learning dynamics')}
          </div>

          {/* Additional Reflection */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Additional Reflection</h3>
            
            {renderTextarea('evidence_support', 'What evidence supports student learning?')}
            {renderTextarea('students_not_meeting_objectives', 'Which students are not meeting objectives and why?')}
            {renderTextarea('misconceptions_difficulties', 'What misconceptions or difficulties did students encounter?')}
            {renderTextarea('behavioral_issues', 'Were there any behavioral issues or classroom management challenges?')}
            {renderTextarea('student_opportunities', 'What opportunities for student growth were observed?')}
            {renderTextarea('teaching_insights', 'What did I learn about my teaching from this lesson?')}
            {renderTextarea('future_improvements', 'What improvements would I make for future lessons?')}
            {renderTextarea('next_steps', 'What are the next steps for this topic?')}
            {renderTextarea('time_management', 'How was time management during the lesson?')}
          </div>

          {/* Rating and Engagement */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Overall Assessment</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="overall_rating" className="text-base font-medium">Overall Lesson Rating (1-5)</Label>
                <Select value={formData.overall_rating?.toString() || "3"} onValueChange={(value) => handleInputChange('overall_rating', parseInt(value))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select rating" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <SelectItem key={rating} value={rating.toString()}>
                        {rating} - {rating === 1 ? 'Poor' : rating === 2 ? 'Fair' : rating === 3 ? 'Good' : rating === 4 ? 'Very Good' : 'Excellent'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="student_engagement_level" className="text-base font-medium">Student Engagement Level</Label>
                <Select value={formData.student_engagement_level || "Medium"} onValueChange={(value) => handleInputChange('student_engagement_level', value)}>
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
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-2 pt-4 border-t">
            <Button type="submit" disabled={isSubmitting} className="bg-green-600 hover:bg-green-700">
              {isSubmitting ? "Saving..." : (existingReflection ? "Update Reflection" : "Save Reflection")}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
} 