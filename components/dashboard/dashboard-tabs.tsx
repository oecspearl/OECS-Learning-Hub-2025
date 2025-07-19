"use client"

import { useEffect, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, HelpCircle, Calendar, Users, BookOpen } from "lucide-react"
import { LessonPlanCard } from "@/components/lesson-plans/lesson-plan-card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MultigradeViewComponent } from "@/components/multigrade/multigrade-view"
import { getMultigradePlans } from "@/app/actions/multigrade-plans"
import { MultigradePlanCard } from "@/components/multigrade/multigrade-plan-card"
import { CrossCurricularPlanCard } from "@/components/cross-curricular/cross-curricular-plan-card"
import { QuizCard } from "@/components/quiz/quiz-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Plus } from "lucide-react"

interface LessonPlan {
  id: string
  title: string
  subject: string
  grade: string
  topic: string | null
  content: string
  duration: string | null
  materials: string | null
  pedagogical_strategy: string | null
  differentiation_strategies: string | null
  grouping_strategy: string | null
  assessment_approach: string | null
  curriculum_standards: string | null
  overview: string | null
  objectives: string | null
  vocabulary: string | null
  homework: string | null
  extensions: string | null
  standards: string | null
  user_id: string
  created_at: string
  updated_at: string
}

interface MultigradePlan {
  id: string
  title: string
  subject: string
  grade_range: string
  created_at: string
}

interface CrossCurricularPlan {
  id: string
  title: string
  theme: string
  grade_range: string
  subjects: string
  created_at: string
}

interface Quiz {
  id: string
  title: string
  description?: string | null
  subject: string
  grade: string
  topic: string
  content: string
  question_count?: number
  question_types?: string | null
  difficulty?: string | null
  time_limit?: number | null
  tags?: string | null
  instructions?: string | null
  user_id: string
  created_at?: string
  updated_at?: string
}

interface DashboardTabsProps {
  lessonPlans: LessonPlan[]
  plansBySubject: Record<string, LessonPlan[]>
  multigradePlans: MultigradePlan[]
  crossCurricularPlans: any[]
  quizzes: Quiz[]
}

export function DashboardTabs({
  lessonPlans,
  plansBySubject,
  multigradePlans,
  crossCurricularPlans,
  quizzes,
}: DashboardTabsProps) {

  
  const formatSubject = (subject: string) => {
    return subject
      .replace(/_/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Your Resources</CardTitle>
        <CardDescription>Manage your lesson plans and teaching materials</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="lesson-plans" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="lesson-plans" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Lesson Plans ({lessonPlans.length})
            </TabsTrigger>
            <TabsTrigger value="quizzes" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Quizzes ({quizzes.length})
            </TabsTrigger>
            <TabsTrigger value="multigrade-plans" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Multigrade Plans ({multigradePlans.length})
            </TabsTrigger>
            <TabsTrigger value="cross-curricular" className="flex items-center gap-2">
              <HelpCircle className="h-4 w-4" />
              Cross Curricular ({crossCurricularPlans.length})
            </TabsTrigger>
          </TabsList>

          {/* Lesson Plans Tab */}
          <TabsContent value="lesson-plans" className="space-y-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Lesson Plans</h2>
              <Button asChild>
                <Link href="/planner">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Lesson Plan
                </Link>
              </Button>
            </div>

            {Object.keys(plansBySubject).length > 0 ? (
              <Tabs defaultValue={Object.keys(plansBySubject)[0]} className="w-full">
                <TabsList>
                  {Object.keys(plansBySubject).map((subject) => (
                    <TabsTrigger key={subject} value={subject}>
                      {subject}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {Object.entries(plansBySubject).map(([subject, plans]) => (
                  <TabsContent key={subject} value={subject} className="mt-6">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {plans.map((plan) => (
                        <LessonPlanCard key={plan.id} plan={plan} />
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">No lesson plans yet</h3>
                <p className="text-muted-foreground mb-4">
                  Create your first lesson plan to get started.
                </p>
                <Button asChild>
                  <Link href="/planner">
                    <Plus className="mr-2 h-4 w-4" />
                    Create Lesson Plan
                  </Link>
                </Button>
              </div>
            )}
          </TabsContent>

          {/* Quizzes Tab */}
          <TabsContent value="quizzes" className="space-y-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Quizzes</h2>
              <Button asChild>
                <Link href="/quiz">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Quiz
                </Link>
              </Button>
            </div>

            {quizzes.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {quizzes.map((quiz) => (
                  <QuizCard key={quiz.id} quiz={quiz} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">No quizzes yet</h3>
                <p className="text-muted-foreground mb-4">
                  Create your first quiz to get started.
                </p>
                <Button asChild>
                  <Link href="/quiz">
                    <Plus className="mr-2 h-4 w-4" />
                    Create Quiz
                  </Link>
                </Button>
              </div>
            )}
          </TabsContent>

          {/* Multigrade Plans Tab */}
          <TabsContent value="multigrade-plans" className="space-y-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Multigrade Plans</h2>
              <Button asChild>
                <Link href="/multigrade">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Multigrade Plan
                </Link>
              </Button>
            </div>

            {multigradePlans.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {multigradePlans.map((plan) => (
                  <MultigradePlanCard key={plan.id} plan={plan} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">No multigrade plans yet</h3>
                <p className="text-muted-foreground mb-4">
                  Create your first multigrade plan to get started.
                </p>
                <Button asChild>
                  <Link href="/multigrade">
                    <Plus className="mr-2 h-4 w-4" />
                    Create Multigrade Plan
                  </Link>
                </Button>
              </div>
            )}
          </TabsContent>

          {/* Cross Curricular Tab */}
          <TabsContent value="cross-curricular" className="space-y-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Cross-Curricular Plans</h2>
              <Button asChild>
                <Link href="/cross-curricular/new">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Cross-Curricular Plan
                </Link>
              </Button>
            </div>

            {crossCurricularPlans.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {crossCurricularPlans.map((plan) => (
                  <CrossCurricularPlanCard key={plan.id} plan={plan} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">No cross-curricular plans yet</h3>
                <p className="text-muted-foreground mb-4">
                  Create your first cross-curricular plan to get started.
                </p>
                <Button asChild>
                  <Link href="/cross-/new">
                    <Plus className="mr-2 h-4 w-4" />
                    Create Cross-Curricular Plan
                  </Link>
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
