"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Calendar, FileText, Users } from "lucide-react"

interface StatsCardsProps {
  lessonPlansCount: number
  quizzesCount: number
  multigradePlansCount: number
  crossCurricularPlansCount: number
  totalResources: number
}

export function StatsCards({
  lessonPlansCount,
  quizzesCount,
  multigradePlansCount,
  crossCurricularPlansCount,
  totalResources
}: StatsCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="hover:shadow-md transition-all duration-300 border-2 hover:border-green-200">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Total Lesson Plans</CardTitle>
          <BookOpen className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{lessonPlansCount}</div>
          <p className="text-xs text-muted-foreground">Your created lesson plans</p>
        </CardContent>
      </Card>
      <Card className="hover:shadow-md transition-all duration-300 border-2 hover:border-green-200">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Quizzes Created</CardTitle>
          <Calendar className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{quizzesCount}</div>
          <p className="text-xs text-muted-foreground">Assessment tools</p>
        </CardContent>
      </Card>
      <Card className="hover:shadow-md transition-all duration-300 border-2 hover:border-green-200">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Total Resources</CardTitle>
          <FileText className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalResources}</div>
          <p className="text-xs text-muted-foreground">All teaching materials</p>
        </CardContent>
      </Card>
      <Card className="hover:shadow-md transition-all duration-300 border-2 hover:border-green-200">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Specialized Plans</CardTitle>
          <Users className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{multigradePlansCount + crossCurricularPlansCount}</div>
          <p className="text-xs text-muted-foreground">Multigrade & Cross-curricular</p>
        </CardContent>
      </Card>
    </div>
  )
}
