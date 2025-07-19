"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface CrossCurricularPlan {
  id: string
  title: string
  theme: string
  grade_range: string
  subjects: string
  created_at: string
}

interface CrossCurricularPlanCardProps {
  plan: CrossCurricularPlan
}

export function CrossCurricularPlanCard({ plan }: CrossCurricularPlanCardProps) {
  const subjects = plan.subjects.split(",")

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="line-clamp-2">{plan.title}</CardTitle>
        <div className="flex flex-wrap gap-1 mt-1">
          {subjects.map((subject) => (
            <Badge key={subject} variant="secondary">
              {subject}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="text-sm text-muted-foreground">
            <span className="font-medium">Theme:</span> {plan.theme}
          </div>
          <div className="text-sm text-muted-foreground">
            <span className="font-medium">Grade Range:</span> {plan.grade_range}
          </div>
          <Link
            href={`/cross-curricular/${plan.id}/view`}
            className="text-primary hover:underline text-sm inline-block mt-2"
          >
            View Plan
          </Link>
        </div>
      </CardContent>
    </Card>
  )
} 