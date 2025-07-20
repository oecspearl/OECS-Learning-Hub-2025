"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, FileText, ClipboardCheck, GraduationCap, Database, Settings, BarChart3, Shield } from "lucide-react"
import Link from "next/link"

interface SystemStats {
  totalUsers: number
  totalLessonPlans: number
  totalAssessments: number
  totalClasses: number
  totalStudents: number
}

interface DatabaseTable {
  name: string
  columns: string[]
  rowCount: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<SystemStats>({
    totalUsers: 0,
    totalLessonPlans: 0,
    totalAssessments: 0,
    totalClasses: 0,
    totalStudents: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch system statistics
    const fetchStats = async () => {
      try {
        // This would be replaced with actual API calls
        setStats({
          totalUsers: 1250,
          totalLessonPlans: 3420,
          totalAssessments: 1890,
          totalClasses: 156,
          totalStudents: 2840
        })
      } catch (error) {
        console.error("Error fetching stats:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  const databaseTables: DatabaseTable[] = [
    { name: "users", columns: ["id", "email", "role", "created_at"], rowCount: 1250 },
    { name: "lesson_plans", columns: ["id", "title", "subject", "grade", "user_id"], rowCount: 3420 },
    { name: "assessments", columns: ["id", "title", "type", "subject", "user_id"], rowCount: 1890 },
    { name: "classes", columns: ["id", "name", "subject", "teacher_id"], rowCount: 156 },
    { name: "students", columns: ["id", "name", "grade", "class_id"], rowCount: 2840 }
  ]

  const statCards = [
    {
      title: "Total Users",
      value: stats.totalUsers,
      icon: Users,
      color: "bg-blue-500",
      description: "Registered users"
    },
    {
      title: "Lesson Plans",
      value: stats.totalLessonPlans,
      icon: FileText,
      color: "bg-green-500",
      description: "Created lesson plans"
    },
    {
      title: "Assessments",
      value: stats.totalAssessments,
      icon: ClipboardCheck,
      color: "bg-purple-500",
      description: "Created assessments"
    },
    {
      title: "Classes",
      value: stats.totalClasses,
      icon: GraduationCap,
      color: "bg-orange-500",
      description: "Active classes"
    },
    {
      title: "Students",
      value: stats.totalStudents,
      icon: Users,
      color: "bg-teal-500",
      description: "Enrolled students"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">System administration and oversight</p>
        </div>
        <Badge variant="secondary" className="flex items-center gap-2">
          <Shield className="h-4 w-4" />
          Administrator
        </Badge>
      </div>

      {/* System Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {statCards.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <div className={`p-2 rounded-lg ${stat.color} text-white`}>
                <stat.icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Quick Actions
          </CardTitle>
          <CardDescription>Administrative tasks and system management</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button asChild className="h-auto p-4 flex flex-col items-center gap-2">
              <Link href="/dashboard/admin/users">
                <Users className="h-6 w-6" />
                <span>User Management</span>
              </Link>
            </Button>
            <Button asChild className="h-auto p-4 flex flex-col items-center gap-2">
              <Link href="/dashboard/admin/database">
                <Database className="h-6 w-6" />
                <span>Database</span>
              </Link>
            </Button>
            <Button asChild className="h-auto p-4 flex flex-col items-center gap-2">
              <Link href="/dashboard/admin/settings">
                <Settings className="h-6 w-6" />
                <span>System Settings</span>
              </Link>
            </Button>
            <Button asChild className="h-auto p-4 flex flex-col items-center gap-2">
              <Link href="/dashboard/admin/analytics">
                <BarChart3 className="h-6 w-6" />
                <span>Analytics</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Database Schema Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Database Schema Overview
          </CardTitle>
          <CardDescription>Visual representation of database tables and structures</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {databaseTables.map((table, index) => (
              <Card key={index} className="border-2">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{table.name}</CardTitle>
                  <CardDescription>{table.rowCount.toLocaleString()} rows</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {table.columns.map((column, colIndex) => (
                      <div key={colIndex} className="text-sm text-gray-600">
                        • {column}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* System Health */}
      <Card>
        <CardHeader>
          <CardTitle>System Health</CardTitle>
          <CardDescription>Real-time monitoring and performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <span className="text-sm font-medium">Database</span>
              <Badge variant="default" className="bg-green-500">Healthy</Badge>
            </div>
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <span className="text-sm font-medium">API</span>
              <Badge variant="default" className="bg-green-500">Online</Badge>
            </div>
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <span className="text-sm font-medium">Storage</span>
              <Badge variant="default" className="bg-green-500">Normal</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
