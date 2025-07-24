"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { CrossCurricularReflection } from "@/app/actions/cross-curricular-reflections"

interface CrossCurricularReflectionDisplayProps {
  reflection: CrossCurricularReflection
}

export default function CrossCurricularReflectionDisplay({ reflection }: CrossCurricularReflectionDisplayProps) {
  const formatDate = (dateString: string | null) => {
    if (!dateString) return "No date specified"
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const renderStars = (rating: number | null) => {
    if (!rating) return <span className="text-muted-foreground">No rating</span>
    
    return (
      <div className="flex items-center space-x-1">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
        <span className="ml-2 text-sm text-muted-foreground">({rating}/5)</span>
      </div>
    )
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Lesson Reflection</CardTitle>
            <CardDescription>
              Reflection from {formatDate(reflection.reflection_date)}
            </CardDescription>
          </div>
          <Badge variant="secondary">
            {reflection.effectiveness_rating ? `${reflection.effectiveness_rating}/5` : "Not rated"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {reflection.effectiveness_rating && (
          <div>
            <h4 className="font-medium mb-2">Effectiveness Rating</h4>
            {renderStars(reflection.effectiveness_rating)}
          </div>
        )}

        {reflection.reflection_notes && (
          <div>
            <h4 className="font-medium mb-2">Reflection Notes</h4>
            <p className="text-sm text-muted-foreground whitespace-pre-wrap">
              {reflection.reflection_notes}
            </p>
          </div>
        )}

        {reflection.student_engagement && (
          <div>
            <h4 className="font-medium mb-2">Student Engagement</h4>
            <p className="text-sm text-muted-foreground whitespace-pre-wrap">
              {reflection.student_engagement}
            </p>
          </div>
        )}

        {reflection.improvements_needed && (
          <div>
            <h4 className="font-medium mb-2">Areas for Improvement</h4>
            <p className="text-sm text-muted-foreground whitespace-pre-wrap">
              {reflection.improvements_needed}
            </p>
          </div>
        )}

        <div className="text-xs text-muted-foreground pt-2 border-t">
          Last updated: {formatDate(reflection.updated_at)}
        </div>
      </CardContent>
    </Card>
  )
} 