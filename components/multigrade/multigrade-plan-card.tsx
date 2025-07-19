"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface MultigradePlan {
  id: string
  title: string
  subject: string
  grade_range: string
  created_at: string
}

interface MultigradePlanCardProps {
  plan: MultigradePlan
}

export function MultigradePlanCard({ plan }: MultigradePlanCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="line-clamp-2">{plan.title}</CardTitle>
        <div className="flex flex-wrap gap-1 mt-1">
          <Badge variant="secondary">{plan.subject}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Grade Range:</span> {plan.grade_range}
          </p>
          <Link
            href={`/multigrade/view/${plan.id}`}
            className="text-primary hover:underline text-sm inline-block mt-2"
          >
            View Plan
          </Link>
        </div>
      </CardContent>
    </Card>
  )
} 