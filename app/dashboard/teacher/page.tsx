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

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // This would be replaced with actual API calls
        setStats({
          lessonPlans: 24,
          quizzes: 12,
          multigradePlans: 8,
          crossCurricularPlans: 6,
          totalStudents: 156,
          totalClasses: 4
        })
      } catch (error) {
        console.error("Error fetching stats:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

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
    },
    {
      title: "Students",
      value: stats.totalStudents,
      icon: GraduationCap,
      color: "bg-teal-500",
      description: "Total students"
    },
    {
      title: "Classes",
      value: stats.totalClasses,
      icon: Users,
      color: "bg-indigo-500",
      description: "Active classes"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Teacher Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your resources and lesson planning</p>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={handleRefresh}
            disabled={loading}
            className="flex items-center gap-2"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
          <Badge variant="secondary" className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4" />
            Teacher
          </Badge>
        </div>
      </div>

      {/* Profile and Quick Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <ProfileCard />
        </div>
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Quick Statistics</CardTitle>
              <CardDescription>Overview of your teaching resources</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {statCards.slice(0, 6).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`inline-flex p-3 rounded-lg ${stat.color} text-white mb-2`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.title}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Resource Management */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Resource Management</CardTitle>
              <CardDescription>Organize and manage your teaching resources</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button asChild size="sm">
                <Link href="/planner/create">
                  <Plus className="h-4 w-4 mr-2" />
                  New Lesson Plan
                </Link>
              </Button>
              <Button asChild size="sm" variant="outline">
                <Link href="/quiz/create">
                  <Plus className="h-4 w-4 mr-2" />
                  New Quiz
                </Link>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="lesson-plans" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="lesson-plans">Lesson Plans</TabsTrigger>
              <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
              <TabsTrigger value="multigrade">Multigrade</TabsTrigger>
              <TabsTrigger value="cross-curricular">Cross-Curricular</TabsTrigger>
            </TabsList>
            
            <TabsContent value="lesson-plans" className="mt-6">
              <DashboardTabs 
                type="lesson-plans"
                title="Lesson Plans"
                description="Your created lesson plans organized by subject"
                emptyMessage="No lesson plans created yet. Start by creating your first lesson plan."
                createLink="/planner/create"
              />
            </TabsContent>
            
            <TabsContent value="quizzes" className="mt-6">
              <DashboardTabs 
                type="quizzes"
                title="Quizzes & Assessments"
                description="Your created quizzes and assessments"
                emptyMessage="No quizzes created yet. Start by creating your first quiz."
                createLink="/quiz/create"
              />
            </TabsContent>
            
            <TabsContent value="multigrade" className="mt-6">
              <DashboardTabs 
                type="multigrade"
                title="Multigrade Plans"
                description="Lesson plans for multiple grade levels"
                emptyMessage="No multigrade plans created yet. Start by creating your first multigrade plan."
                createLink="/multigrade/new"
              />
            </TabsContent>
            
            <TabsContent value="cross-curricular" className="mt-6">
              <DashboardTabs 
                type="cross-curricular"
                title="Cross-Curricular Plans"
                description="Integrated lesson plans across subjects"
                emptyMessage="No cross-curricular plans created yet. Start by creating your first cross-curricular plan."
                createLink="/cross-curricular/new"
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common teaching tasks and shortcuts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button asChild className="h-auto p-4 flex flex-col items-center gap-2">
              <Link href="/planner/ai">
                <FileText className="h-6 w-6" />
                <span>AI Lesson Planner</span>
              </Link>
            </Button>
            <Button asChild className="h-auto p-4 flex flex-col items-center gap-2">
              <Link href="/rubric-generator">
                <ClipboardCheck className="h-6 w-6" />
                <span>Create Rubric</span>
              </Link>
            </Button>
            <Button asChild className="h-auto p-4 flex flex-col items-center gap-2">
              <Link href="/multigrade">
                <Users className="h-6 w-6" />
                <span>Multigrade Tools</span>
              </Link>
            </Button>
            <Button asChild className="h-auto p-4 flex flex-col items-center gap-2">
              <Link href="/curriculum">
                <BookOpen className="h-6 w-6" />
                <span>Curriculum</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
