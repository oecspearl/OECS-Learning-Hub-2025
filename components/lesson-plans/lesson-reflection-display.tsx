"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Star, Users, Clock, Lightbulb, CheckCircle, AlertCircle } from "lucide-react"
import { format } from "date-fns"

interface LessonReflectionDisplayProps {
  reflection: any
  onEdit?: () => void
  onDelete?: () => void
}

export function LessonReflectionDisplay({ reflection, onEdit, onDelete }: LessonReflectionDisplayProps) {
  const getRatingColor = (rating: number) => {
    if (rating >= 4) return "bg-green-100 text-green-800"
    if (rating >= 3) return "bg-yellow-100 text-yellow-800"
    return "bg-red-100 text-red-800"
  }

  const getEngagementColor = (level: string) => {
    switch (level?.toLowerCase()) {
      case "high": return "bg-green-100 text-green-800"
      case "medium": return "bg-yellow-100 text-yellow-800"
      case "low": return "bg-red-100 text-red-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const renderChecklistItem = (label: string, value: string, description?: string) => (
    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
      <div className="flex-shrink-0 mt-1">
        {value === "Yes" ? (
          <CheckCircle className="h-5 w-5 text-green-600" />
        ) : value === "No" ? (
          <AlertCircle className="h-5 w-5 text-red-600" />
        ) : (
          <AlertCircle className="h-5 w-5 text-yellow-600" />
        )}
      </div>
      <div className="flex-1">
        <p className="font-medium text-sm">{label}</p>
        <Badge variant="secondary" className="mt-1">
          {value || "Not answered"}
        </Badge>
        {description && (
          <p className="text-sm text-muted-foreground mt-2">{description}</p>
        )}
      </div>
    </div>
  )

  const renderTextResponse = (label: string, value: string) => (
    <div className="space-y-2">
      <h4 className="font-medium text-sm">{label}</h4>
      <p className="text-sm text-muted-foreground bg-gray-50 p-3 rounded-lg">
        {value || "No response provided"}
      </p>
    </div>
  )

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-muted-foreground" />
            <div>
              <CardTitle className="text-lg">Lesson Reflection</CardTitle>
              <CardDescription>
                {reflection.reflection_date && format(new Date(reflection.reflection_date), 'MMMM d, yyyy')}
              </CardDescription>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge className={getRatingColor(reflection.overall_rating || 0)}>
              <Star className="h-3 w-3 mr-1" />
              {reflection.overall_rating || 0}/5
            </Badge>
            {reflection.student_engagement_level && (
              <Badge className={getEngagementColor(reflection.student_engagement_level)}>
                <Users className="h-3 w-3 mr-1" />
                {reflection.student_engagement_level} Engagement
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Lesson Outcome Checklist */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <h3 className="text-lg font-semibold">Lesson Outcome Checklist</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {renderChecklistItem(
              "Were the lesson objectives met by most students?",
              reflection.objectives_met
            )}
            {renderChecklistItem(
              "Did students demonstrate understanding through their work or participation?",
              reflection.student_understanding
            )}
            {renderChecklistItem(
              "Was the assessment strategy effective in measuring understanding?",
              reflection.assessment_effective
            )}
            {renderChecklistItem(
              "Did the lesson content suit the students' age, level, and interests?",
              reflection.content_suitable
            )}
            {renderChecklistItem(
              "Were the teaching strategies and materials engaging and inclusive?",
              reflection.strategies_engaging
            )}
            {renderChecklistItem(
              "Did students remain on-task and engaged throughout the lesson?",
              reflection.students_on_task
            )}
            {renderChecklistItem(
              "Were differentiation strategies effective for varied learner needs?",
              reflection.differentiation_effective
            )}
            {renderChecklistItem(
              "Did the lesson contribute to long-term learning goals or skills?",
              reflection.long_term_goals
            )}
            {renderChecklistItem(
              "Did students have opportunities to reflect, question, or collaborate?",
              reflection.student_opportunities
            )}
          </div>
        </div>

        {/* Detailed Responses */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-600" />
            <h3 className="text-lg font-semibold">Detailed Responses</h3>
          </div>
          
          <div className="space-y-4">
            {renderTextResponse(
              "What evidence (student responses, work samples, behavior) supports this?",
              reflection.evidence_support
            )}
            {renderTextResponse(
              "Were there students who did not meet the objectives? Why?",
              reflection.students_not_meeting_objectives
            )}
            {renderTextResponse(
              "What misconceptions or difficulties emerged?",
              reflection.misconceptions_difficulties
            )}
            {renderTextResponse(
              "What changes would you make to improve this lesson in the future?",
              reflection.future_improvements
            )}
            {renderTextResponse(
              "Were there any behavioral or classroom management issues? How were they handled?",
              reflection.behavioral_issues
            )}
          </div>
        </div>

        {/* Additional Reflection */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-semibold">Additional Reflection</h3>
          </div>
          
          <div className="space-y-4">
            {renderTextResponse(
              "Time Management",
              reflection.time_management
            )}
            {renderTextResponse(
              "What did I learn about my teaching from this lesson?",
              reflection.teaching_insights
            )}
            {renderTextResponse(
              "Next Steps",
              reflection.next_steps
            )}
          </div>
        </div>

        {/* Action Buttons */}
        {(onEdit || onDelete) && (
          <div className="flex justify-end gap-2 pt-4 border-t">
            {onEdit && (
              <Button variant="outline" size="sm" onClick={onEdit}>
                Edit Reflection
              </Button>
            )}
            {onDelete && (
              <Button variant="destructive" size="sm" onClick={onDelete}>
                Delete Reflection
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
} 