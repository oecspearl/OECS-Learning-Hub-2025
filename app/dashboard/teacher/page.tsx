"use client"

import { useAuth } from "@/contexts/AuthContext"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, FileEdit, FileCheck, MessageSquare, Users, BarChart } from "lucide-react"
import Link from "next/link"

export default function TeacherDashboard() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Loading...</div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-4">Please log in to access the teacher dashboard.</p>
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    )
  }

  const dashboardItems = [
    {
      title: "My Classes",
      description: "Manage your classes and students",
      icon: <BookOpen className="h-6 w-6" />,
      href: "/dashboard/teacher/classes",
      color: "bg-blue-500"
    },
    {
      title: "Lesson Plans",
      description: "Create and manage lesson plans",
      icon: <FileEdit className="h-6 w-6" />,
      href: "/dashboard/teacher/lesson-plans",
      color: "bg-green-500"
    },
    {
      title: "Assessments",
      description: "Create and grade assessments",
      icon: <FileCheck className="h-6 w-6" />,
      href: "/dashboard/teacher/assessments",
      color: "bg-purple-500"
    },
    {
      title: "Feedback",
      description: "View student feedback and comments",
      icon: <MessageSquare className="h-6 w-6" />,
      href: "/dashboard/teacher/feedback",
      color: "bg-orange-500"
    },
    {
      title: "Student Progress",
      description: "Track student performance and progress",
      icon: <Users className="h-6 w-6" />,
      href: "/dashboard/teacher/progress",
      color: "bg-teal-500"
    },
    {
      title: "Analytics",
      description: "View teaching analytics and insights",
      icon: <BarChart className="h-6 w-6" />,
      href: "/dashboard/teacher/analytics",
      color: "bg-indigo-500"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {user.user_metadata?.name || "Teacher"}!
        </h1>
        <p className="text-gray-600">
          Manage your classes, create lesson plans, and track student progress.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardItems.map((item, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${item.color} text-white`}>
                  {item.icon}
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </div>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href={item.href}>
                  Access {item.title}
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
