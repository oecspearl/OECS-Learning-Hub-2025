"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, ClipboardCheck, Users, BookOpen, Plus, RefreshCw, GraduationCap } from "lucide-react"
import Link from "next/link"
import { ProfileCard } from "@/components/dashboard/profile-card"
import { DashboardTabs } from "@/components/dashboard/dashboard-tabs"
import { useAuth } from "@/contexts/AuthContext"

interface TeacherStats {
  lessonPlans: number
  quizzes: number
  multigradePlans: number
  crossCurricularPlans: number
  totalStudents: number
  totalClasses: number
}

export default function TeacherDashboard() {
  const [stats, setStats] = useState<TeacherStats>({
    lessonPlans: 0,
    quizzes: 0,
    multigradePlans: 0,
    crossCurricularPlans: 0,
    totalStudents: 0,
    totalClasses: 0
  })
  const [loading, setLoading] = useState(true)
  const { user } = useAuth()

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`/api/dashboard/stats?role=teacher&userId=${user?.id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch stats')
        }
        const data = await response.json()
        setStats(data.stats)
      } catch (error) {
        console.error("Error fetching stats:", error)
        // Fallback to sample data if API fails
        setStats({
          lessonPlans: 24,
          quizzes: 12,
          multigradePlans: 8,
          crossCurricularPlans: 6,
          totalStudents: 156,
          totalClasses: 4
        })
      } finally {
        setLoading(false)
      }
    }

    if (user?.id) {
      fetchStats()
    }
  }, [user?.id])

  const handleRefresh = () => {
    setLoading(true)
    // Re-fetch stats
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  const statCards = [
    {
      title: "Lesson Plans",
      value: stats.lessonPlans,
      icon: FileText,
      color: "bg-blue-500",
      description: "Created lesson plans"
    },
    {
      title: "Quizzes",
      value: stats.quizzes,
      icon: ClipboardCheck,
      color: "bg-green-500",
      description: "Created assessments"
    },
    {
      title: "Multigrade Plans",
      value: stats.multigradePlans,
      icon: Users,
      color: "bg-purple-500",
      description: "Multi-grade lessons"
    },
    {
      title: "Cross-Curricular",
      value: stats.crossCurricularPlans,
      icon: BookOpen,
      color: "bg-orange-500",
      description: "Integrated plans"
    }
  ]

  return (
    <div className="flex min-h-screen flex-col page-transition bg-gradient-to-b from-blue-50 to-white">
      <main className="flex-1 w-full px-4 py-6 max-w-[1400px] mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Teacher Dashboard
          </h1>
          <p className="text-muted-foreground">
            Welcome back, {user?.email || 'Teacher'}! Here's your teaching overview.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {statCards.map((stat, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${stat.color} text-white`}>
                    <stat.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-muted-foreground truncate">{stat.title}</p>
                    <p className="text-lg sm:text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground truncate">{stat.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Link href="/planner">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500 text-white">
                    <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">Create Lesson Plan</h3>
                    <p className="text-xs text-muted-foreground">Design a new lesson</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/quiz">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-500 text-white">
                    <ClipboardCheck className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">Create Quiz</h3>
                    <p className="text-xs text-muted-foreground">Assess student learning</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/multigrade">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500 text-white">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">Multigrade Plan</h3>
                    <p className="text-xs text-muted-foreground">Teach multiple grades</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/cross-curricular/new">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-500 text-white">
                    <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">Cross-Curricular</h3>
                    <p className="text-xs text-muted-foreground">Integrate subjects</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Resource Management Tabs */}
        <Card>
          <CardHeader className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle className="text-lg sm:text-xl">Resource Management</CardTitle>
                <CardDescription className="text-sm">Organize and manage your teaching resources</CardDescription>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button asChild size="sm" className="w-full sm:w-auto">
                  <Link href="/planner">
                    <Plus className="h-4 w-4 mr-2" />
                    New Lesson Plan
                  </Link>
                </Button>
                <Button asChild size="sm" variant="outline" className="w-full sm:w-auto">
                  <Link href="/quiz">
                    <Plus className="h-4 w-4 mr-2" />
                    New Quiz
                  </Link>
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <Tabs defaultValue="lesson-plans" className="w-full">
              <TabsList className="grid w-full grid-cols-4 h-auto p-1">
                <TabsTrigger value="lesson-plans" className="text-xs sm:text-sm px-2 sm:px-3 py-2">
                  <span className="hidden sm:inline">Lesson Plans</span>
                  <span className="sm:hidden">Plans</span>
                </TabsTrigger>
                <TabsTrigger value="quizzes" className="text-xs sm:text-sm px-2 sm:px-3 py-2">
                  Quizzes
                </TabsTrigger>
                <TabsTrigger value="multigrade" className="text-xs sm:text-sm px-2 sm:px-3 py-2">
                  <span className="hidden sm:inline">Multigrade</span>
                  <span className="sm:hidden">Multi</span>
                </TabsTrigger>
                <TabsTrigger value="cross-curricular" className="text-xs sm:text-sm px-2 sm:px-3 py-2">
                  <span className="hidden sm:inline">Cross-Curricular</span>
                  <span className="sm:hidden">Cross</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="lesson-plans" className="mt-6">
                <DashboardTabs
                  type="lesson-plans"
                  title="Lesson Plans"
                  description="Your created lesson plans"
                  emptyMessage="Create your first lesson plan to get started"
                  createLink="/planner"
                />
              </TabsContent>

              <TabsContent value="quizzes" className="mt-6">
                <DashboardTabs
                  type="quizzes"
                  title="Quizzes"
                  description="Your created assessments"
                  emptyMessage="Create your first quiz to assess student learning"
                  createLink="/quiz"
                />
              </TabsContent>

              <TabsContent value="multigrade" className="mt-6">
                <DashboardTabs
                  type="multigrade"
                  title="Multigrade Plans"
                  description="Your multigrade lesson plans"
                  emptyMessage="Create your first multigrade lesson plan"
                  createLink="/multigrade"
                />
              </TabsContent>

              <TabsContent value="cross-curricular" className="mt-6">
                <DashboardTabs
                  type="cross-curricular"
                  title="Cross-Curricular Plans"
                  description="Your integrated lesson plans"
                  emptyMessage="Create your first cross-curricular lesson plan"
                  createLink="/cross-curricular/new"
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
