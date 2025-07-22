"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, Eye, Download } from "lucide-react"
import Link from "next/link"
import { safeArrayProcessor } from "@/lib/safeArrayProcessor"

interface CrossCurricularPlan {
  id: string
  title: string
  subjects: string
  grade_levels: string
  content: string
  created_at: string
  updated_at: string
}

export function CrossCurricularPlanCard({ plan }: { plan: CrossCurricularPlan }) {
  const subjects = safeArrayProcessor(plan.subjects)
  
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-semibold">{plan.title}</CardTitle>
            <div className="flex flex-wrap gap-2 mt-2">
              {subjects.map((subject, index) => (
                <Badge key={index} variant="secondary">
                  {subject}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <Link href={`/cross-curricular/${plan.id}/view`}>
              <Button size="sm" variant="outline">
                <Eye className="h-4 w-4 mr-1" />
                View
              </Button>
            </Link>
            <Link href={`/cross-curricular/${plan.id}/edit`}>
              <Button size="sm" variant="outline">
                <Edit className="h-4 w-4 mr-1" />
                Edit
              </Button>
            </Link>
            <Button size="sm" variant="outline">
              <Download className="h-4 w-4 mr-1" />
              Download
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Created: {new Date(plan.created_at).toLocaleDateString()}
        </p>
      </CardContent>
    </Card>
  )
} 