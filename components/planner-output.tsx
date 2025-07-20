"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useAuth } from "@/contexts/AuthContext"
import { Calendar, Clock, Users, FileText, CheckCircle } from "lucide-react"

interface PlannerOutputProps {
  plan: {
    id: string
    title: string
    description: string
    type: string
    subject: string
    grade: string
    duration: string
    objectives: string[]
    activities: string[]
    materials: string[]
    assessment: string
    created_at: string
  }
}

export function PlannerOutput({ plan }: PlannerOutputProps) {
  const { user } = useAuth()
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl">{plan.title}</CardTitle>
            <CardDescription>{plan.description}</CardDescription>
          </div>
          <Badge variant="outline">
            {plan.type} - {plan.subject} - Grade {plan.grade}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{plan.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>Grade {plan.grade}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <FileText className="h-4 w-4" />
            <span>{plan.type}</span>
          </div>
        </div>

        <Separator />

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Learning Objectives</h3>
            <div className="space-y-2">
              {plan.objectives.map((objective, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{objective}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Activities</h3>
            <div className="space-y-2">
              {plan.activities.map((activity, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Activity {index + 1}:</span> {activity}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Materials Needed</h3>
            <div className="flex flex-wrap gap-2">
              {plan.materials.map((material, index) => (
                <Badge key={index} variant="secondary">
                  {material}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Assessment</h3>
            <div className="p-3 bg-blue-50 rounded-lg">
              {plan.assessment}
            </div>
          </div>
        </div>

        <Separator />

        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            Created by {user?.user_metadata?.name || "Teacher"} on {new Date(plan.created_at).toLocaleDateString()}
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? "Show Less" : "Show More"}
            </Button>
            <Button>Save Plan</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
