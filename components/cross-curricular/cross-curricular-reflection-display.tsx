"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, Star, Calendar, User } from "lucide-react"
import { useState } from "react"
import CrossCurricularReflectionForm from "./cross-curricular-reflection-form"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface CrossCurricularReflectionDisplayProps {
  reflection: any
  planTitle?: string
}

export default function CrossCurricularReflectionDisplay({ 
  reflection, 
  planTitle = "Cross-Curricular Lesson" 
}: CrossCurricularReflectionDisplayProps) {
  const [isEditing, setIsEditing] = useState(false)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ))
  }

  const renderChecklistItem = (label: string, value: string | null) => {
    if (!value) return null
    
    const getBadgeVariant = (value: string) => {
      switch (value.toLowerCase()) {
        case 'yes': return 'default'
        case 'no': return 'destructive'
        case 'partially': return 'secondary'
        default: return 'outline'
      }
    }

    return (
      <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
        <span className="text-sm text-gray-600">{label}</span>
        <Badge variant={getBadgeVariant(value)}>{value}</Badge>
      </div>
    )
  }

  const renderTextSection = (label: string, content: string | null) => {
    if (!content) return null
    
    return (
      <div className="space-y-2">
        <h4 className="font-medium text-gray-900">{label}</h4>
        <p className="text-sm text-gray-700 whitespace-pre-wrap">{content}</p>
      </div>
    )
  }

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              <div>
                <CardTitle className="text-lg">Cross-Curricular Lesson Reflection</CardTitle>
                <CardDescription>
                  Reflection for "{planTitle}" - {formatDate(reflection.reflection_date)}
                </CardDescription>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2"
            >
              <Edit className="h-4 w-4" />
              Edit
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Ratings Summary */}
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Overall Rating:</span>
              <div className="flex items-center gap-1">
                {getRatingStars(reflection.overall_rating || 0)}
                <span className="text-sm text-gray-600 ml-1">
                  ({reflection.overall_rating || 0}/5)
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Engagement:</span>
              <Badge variant="outline">{reflection.student_engagement_level || 'Not rated'}</Badge>
            </div>
          </div>

          {/* Lesson Outcome Checklist */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">Lesson Outcome Checklist</h3>
            <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-0">
              {renderChecklistItem('Objectives Met', reflection.objectives_met)}
              {renderChecklistItem('Student Understanding', reflection.student_understanding)}
              {renderChecklistItem('Assessment Effective', reflection.assessment_effective)}
              {renderChecklistItem('Content Suitable', reflection.content_suitable)}
              {renderChecklistItem('Strategies Engaging', reflection.strategies_engaging)}
              {renderChecklistItem('Students On Task', reflection.students_on_task)}
              {renderChecklistItem('Differentiation Effective', reflection.differentiation_effective)}
              {renderChecklistItem('Long-term Goals', reflection.long_term_goals)}
              {renderChecklistItem('Student Opportunities', reflection.student_opportunities)}
            </div>
          </div>

          {/* Detailed Responses */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Detailed Responses</h3>
            <div className="space-y-4">
              {renderTextSection('Evidence Supporting Assessment', reflection.evidence_support)}
              {renderTextSection('Students Not Meeting Objectives', reflection.students_not_meeting_objectives)}
              {renderTextSection('Misconceptions or Difficulties', reflection.misconceptions_difficulties)}
              {renderTextSection('Future Improvements', reflection.future_improvements)}
              {renderTextSection('Behavioral Issues', reflection.behavioral_issues)}
            </div>
          </div>

          {/* Additional Reflection */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Additional Reflection</h3>
            <div className="space-y-4">
              {renderTextSection('Time Management', reflection.time_management)}
              {renderTextSection('Teaching Insights', reflection.teaching_insights)}
              {renderTextSection('Next Steps', reflection.next_steps)}
            </div>
          </div>

          {/* Metadata */}
          <div className="pt-4 border-t border-gray-200">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>Reflection by Teacher</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Last updated: {formatDate(reflection.updated_at)}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Edit Dialog */}
      <Dialog open={isEditing} onOpenChange={setIsEditing}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Cross-Curricular Reflection</DialogTitle>
          </DialogHeader>
          <CrossCurricularReflectionForm
            planId={reflection.plan_id}
            planTitle={planTitle}
            existingReflection={reflection}
            onClose={() => setIsEditing(false)}
          />
        </DialogContent>
      </Dialog>
    </>
  )
} 