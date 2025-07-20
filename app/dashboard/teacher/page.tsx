"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"
import { ProfileCard } from "@/components/dashboard/profile-card"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { DashboardTabs } from "@/components/dashboard/dashboard-tabs"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { getLessonPlans } from "@/app/actions/lesson-plans"
import { getMultigradePlans } from "@/app/actions/multigrade-plans"
import { getCrossCurricularPlans } from "@/app/actions/cross-curricular-plans"
import { getAllQuizzes, getQuizzesByUserId } from "@/app/actions/quizzes"
import type { LessonPlan } from "@/app/actions/lesson-plans"
import type { CrossCurricularPlan } from "@/app/actions/cross-curricular-plans"
import { createTestLessonPlan } from "@/app/actions/lesson-plans"
import { Button } from "@/components/ui/button"

// Update the local LessonPlan interface to match the database schema
interface DashboardLessonPlan {
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

export default function TeacherDashboardPage() {
  const { data: session, status } = useSession()
  const [lessonPlans, setLessonPlans] = useState<DashboardLessonPlan[]>([])
  const [multigradePlans, setMultigradePlans] = useState<any[]>([])
  const [crossCurricularPlans, setCrossCurricularPlans] = useState<any[]>([])
  const [quizzes, setQuizzes] = useState<any[]>([])
  const [plansBySubject, setPlansBySubject] = useState<Record<string, DashboardLessonPlan[]>>({})
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)

  const loadPlans = async () => {
    try {
      const lessonResult = await getLessonPlans()
      if (lessonResult.success && lessonResult.data) {
        if (lessonResult.data.length === 0) {
          const testResult = await createTestLessonPlan()
          if (testResult.success && testResult.data) {
            setLessonPlans([testResult.data])
            const grouped = { [testResult.data.subject.toLowerCase()]: [testResult.data] }
            setPlansBySubject(grouped)
          }
        } else {
          setLessonPlans(lessonResult.data)
          const grouped = lessonResult.data.reduce((acc: Record<string, DashboardLessonPlan[]>, plan: DashboardLessonPlan) => {
            const subject = plan.subject.toLowerCase()
            if (!acc[subject]) {
              acc[subject] = []
            }
            acc[subject].push(plan)
            return acc
          }, {} as Record<string, DashboardLessonPlan[]>)
          setPlansBySubject(grouped)
        }
      }
      const multigradeResult = await getMultigradePlans()
      setMultigradePlans(multigradeResult || [])

      const crossCurricularResult = await getCrossCurricularPlans()
      if (crossCurricularResult.success && crossCurricularResult.data) {
        setCrossCurricularPlans(crossCurricularResult.data)
      }

      // Ensure user ID is a string for consistency
      const userId = session?.user?.id?.toString() || session?.user?.email || "1"
      
      try {
        const quizzesResult = await getQuizzesByUserId(userId)
        setQuizzes(quizzesResult)
      } catch (error) {
        console.error("Error fetching quizzes:", error)
        setQuizzes([])
      }
    } catch (error) {
      console.error("Error loading plans:", error)
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  const handleRefresh = () => {
    setRefreshing(true)
    loadPlans()
  }

  useEffect(() => {
    if (session?.user) {
      loadPlans()
    }
  }, [session])

  if (status === "loading" || loading) {
    return <div>Loading...</div>
  }

  if (!session || session.user.role.toLowerCase() !== "teacher") {
    redirect("/login")
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
        <Button onClick={handleRefresh} disabled={refreshing} variant="outline">
          {refreshing ? "Refreshing..." : "Refresh"}
        </Button>
      </div>
      

      
      <ProfileCard />
      <StatsCards 
        lessonPlansCount={lessonPlans.length}
        quizzesCount={quizzes.length}
        multigradePlansCount={multigradePlans.length}
        crossCurricularPlansCount={crossCurricularPlans.length}
        totalResources={lessonPlans.length + quizzes.length + multigradePlans.length + crossCurricularPlans.length}
      />
      <DashboardTabs 
        lessonPlans={lessonPlans} 
        plansBySubject={plansBySubject} 
        multigradePlans={multigradePlans}
        crossCurricularPlans={crossCurricularPlans}
        quizzes={quizzes}
      />
      <QuickActions />
    </div>
  )
}
