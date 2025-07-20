"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Users, BookOpen, TrendingUp, MessageSquare, Calendar, Award } from "lucide-react"
import Link from "next/link"
import { ProfileCard } from "@/components/dashboard/profile-card"
import { ParentDashboardTabs } from "@/components/dashboard/parent-dashboard-tabs"
import { useAuth } from "@/contexts/AuthContext"

interface StudentProgress {
  subject: string
  progress: number
  grade: string
  lastUpdated: string
  recentActivities: number
  upcomingAssignments: number
}

interface StudentActivity {
  id: string
  type: string
  title: string
  subject: string
  date: string
  achievement?: string
}

interface ParentStats {
  totalChildren: number
  activeSubjects: number
  recentActivities: number
  upcomingEvents: number
}

export default function ParentDashboard() {
  const { user } = useAuth()
  const [stats, setStats] = useState<ParentStats>({
    totalChildren: 0,
    activeSubjects: 0,
    recentActivities: 0,
    upcomingEvents: 0
  })
  const [studentProgress, setStudentProgress] = useState<StudentProgress[]>([])
  const [recentActivities, setRecentActivities] = useState<StudentActivity[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/dashboard/progress?parentId=${user?.id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch progress data')
        }
        const data = await response.json()
        setStats(data.stats)
        setStudentProgress(data.studentProgress)
        setRecentActivities(data.recentActivities)
      } catch (error) {
        console.error("Error fetching data:", error)
        // Fallback to sample data if API fails
        setStats({
          totalChildren: 2,
          activeSubjects: 8,
          recentActivities: 12,
          upcomingEvents: 3
        })

        setStudentProgress([
          { subject: "Mathematics", progress: 85, grade: "A", lastUpdated: "2024-01-15", recentActivities: 5, upcomingAssignments: 2 },
          { subject: "Language Arts", progress: 92, grade: "A+", lastUpdated: "2024-01-14", recentActivities: 3, upcomingAssignments: 1 },
          { subject: "Science", progress: 78, grade: "B+", lastUpdated: "2024-01-13", recentActivities: 4, upcomingAssignments: 3 },
          { subject: "Social Studies", progress: 88, grade: "A", lastUpdated: "2024-01-12", recentActivities: 2, upcomingAssignments: 0 }
        ])

        setRecentActivities([
          { id: "1", type: "quiz", title: "Math Quiz - Fractions", subject: "Mathematics", date: "2024-01-15", achievement: "95%" },
          { id: "2", type: "assignment", title: "Science Project", subject: "Science", date: "2024-01-14" },
          { id: "3", type: "lesson", title: "Reading Comprehension", subject: "Language Arts", date: "2024-01-13" },
          { id: "4", type: "quiz", title: "History Test", subject: "Social Studies", date: "2024-01-12", achievement: "88%" }
        ])
      } finally {
        setLoading(false)
      }
    }

    if (user?.id) {
      fetchData()
    }
  }, [user?.id])

  const statCards = [
    {
      title: "Children",
      value: stats.totalChildren,
      icon: Users,
      color: "bg-blue-500",
      description: "Enrolled children"
    },
    {
      title: "Active Subjects",
      value: stats.activeSubjects,
      icon: BookOpen,
      color: "bg-green-500",
      description: "Current subjects"
    },
    {
      title: "Recent Activities",
      value: stats.recentActivities,
      icon: TrendingUp,
      color: "bg-purple-500",
      description: "This week"
    },
    {
      title: "Upcoming Events",
      value: stats.upcomingEvents,
      icon: Calendar,
      color: "bg-orange-500",
      description: "Next 7 days"
    }
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "quiz":
        return "📝"
      case "assignment":
        return "📚"
      case "lesson":
        return "📖"
      case "achievement":
        return "🏆"
      default:
        return "📋"
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Parent Dashboard</h1>
          <p className="text-gray-600 mt-2">Monitor your children's progress and activities</p>
        </div>
        <Badge variant="secondary" className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          Parent
        </Badge>
      </div>

      {/* Profile and Quick Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <ProfileCard />
        </div>
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Family Overview</CardTitle>
              <CardDescription>Quick statistics about your children's education</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {statCards.map((stat, index) => (
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

      {/* Student Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Student Progress
          </CardTitle>
          <CardDescription>Academic performance across subjects</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studentProgress.map((subject, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{subject.subject}</CardTitle>
                    <Badge variant="outline">{subject.grade}</Badge>
                  </div>
                  <CardDescription>Last updated: {subject.lastUpdated}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{subject.progress}%</span>
                    </div>
                    <Progress value={subject.progress} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Recent Activities
          </CardTitle>
          <CardDescription>Latest academic activities and achievements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={activity.id} className="flex items-center gap-4 p-4 border rounded-lg">
                <div className="text-2xl">{getActivityIcon(activity.type)}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{activity.title}</h4>
                    {activity.achievement && (
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {activity.achievement}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{activity.subject}</span>
                    <span>•</span>
                    <span>{activity.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Communication Tools */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Communication
          </CardTitle>
          <CardDescription>Stay connected with teachers and school</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button asChild className="h-auto p-4 flex flex-col items-center gap-2">
              <Link href="/messages">
                <MessageSquare className="h-6 w-6" />
                <span>Messages</span>
              </Link>
            </Button>
            <Button asChild className="h-auto p-4 flex flex-col items-center gap-2">
              <Link href="/calendar">
                <Calendar className="h-6 w-6" />
                <span>School Calendar</span>
              </Link>
            </Button>
            <Button asChild className="h-auto p-4 flex flex-col items-center gap-2">
              <Link href="/reports">
                <TrendingUp className="h-6 w-6" />
                <span>Progress Reports</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Progress by Subject */}
      <Card>
        <CardHeader>
          <CardTitle>Progress by Subject</CardTitle>
          <CardDescription>Detailed view of academic performance</CardDescription>
        </CardHeader>
        <CardContent>
          <ParentDashboardTabs 
            studentProgress={studentProgress}
            progressBySubject={{}}
          />
        </CardContent>
      </Card>
    </div>
  )
}
