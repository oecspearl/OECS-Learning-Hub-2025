"use client"

import { useAuth } from "@/contexts/AuthContext"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, FileEdit, FileCheck, MessageSquare, Users, BarChart, Settings } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
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
          <p className="text-gray-600 mb-4">Please log in to access the dashboard.</p>
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    )
  }

  const userRole = user.user_metadata?.role || 'teacher'

  const getDashboardItems = () => {
    const baseItems = [
      {
        title: "Profile",
        description: "View and edit your profile information",
        icon: <Users className="h-6 w-6" />,
        href: "/profile",
        color: "bg-blue-500"
      }
    ]

    const teacherItems = [
      {
        title: "My Classes",
        description: "Manage your classes and students",
        icon: <BookOpen className="h-6 w-6" />,
        href: "/dashboard/teacher/classes",
        color: "bg-green-500"
      },
      {
        title: "Lesson Plans",
        description: "Create and manage lesson plans",
        icon: <FileEdit className="h-6 w-6" />,
        href: "/dashboard/teacher/lesson-plans",
        color: "bg-purple-500"
      },
      {
        title: "Assessments",
        description: "Create and grade assessments",
        icon: <FileCheck className="h-6 w-6" />,
        href: "/dashboard/teacher/assessments",
        color: "bg-orange-500"
      },
      {
        title: "Feedback",
        description: "View student feedback and comments",
        icon: <MessageSquare className="h-6 w-6" />,
        href: "/dashboard/teacher/feedback",
        color: "bg-teal-500"
      }
    ]

    const adminItems = [
      {
        title: "User Management",
        description: "Manage users, roles, and permissions",
        icon: <Users className="h-6 w-6" />,
        href: "/dashboard/admin/users",
        color: "bg-blue-500"
      },
      {
        title: "System Settings",
        description: "Configure system-wide settings",
        icon: <Settings className="h-6 w-6" />,
        href: "/dashboard/admin/settings",
        color: "bg-green-500"
      },
      {
        title: "Analytics",
        description: "View system analytics and reports",
        icon: <BarChart className="h-6 w-6" />,
        href: "/dashboard/admin/analytics",
        color: "bg-purple-500"
      }
    ]

    switch (userRole) {
      case "teacher":
        return [...baseItems, ...teacherItems]
      case "administrator":
      case "admin":
        return [...baseItems, ...adminItems]
      default:
        return baseItems
    }
  }

  const dashboardItems = getDashboardItems()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {user.user_metadata?.name || "User"}!
        </h1>
        <p className="text-gray-600">
          Access your personalized dashboard and manage your educational resources.
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
