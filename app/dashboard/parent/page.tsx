"use client"

import { useAuth } from "@/contexts/AuthContext"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, BookOpen, FileText, MessageSquare, TrendingUp, Calendar } from "lucide-react"
import Link from "next/link"

export default function ParentDashboard() {
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
          <p className="text-gray-600 mb-4">Please log in to access the parent dashboard.</p>
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    )
  }

  const dashboardItems = [
    {
      title: "My Children",
      description: "View and manage your children's profiles",
      icon: <Users className="h-6 w-6" />,
      href: "/dashboard/parent/children",
      color: "bg-blue-500"
    },
    {
      title: "Academic Progress",
      description: "Track your children's academic performance",
      icon: <TrendingUp className="h-6 w-6" />,
      href: "/dashboard/parent/progress",
      color: "bg-green-500"
    },
    {
      title: "Curriculum",
      description: "Access curriculum information and resources",
      icon: <BookOpen className="h-6 w-6" />,
      href: "/curriculum",
      color: "bg-purple-500"
    },
    {
      title: "Reports",
      description: "View academic reports and assessments",
      icon: <FileText className="h-6 w-6" />,
      href: "/dashboard/parent/reports",
      color: "bg-orange-500"
    },
    {
      title: "Communication",
      description: "Communicate with teachers and school",
      icon: <MessageSquare className="h-6 w-6" />,
      href: "/dashboard/parent/communication",
      color: "bg-teal-500"
    },
    {
      title: "School Calendar",
      description: "View important dates and events",
      icon: <Calendar className="h-6 w-6" />,
      href: "/dashboard/parent/calendar",
      color: "bg-indigo-500"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {user.user_metadata?.name || "Parent"}!
        </h1>
        <p className="text-gray-600">
          Stay connected with your children's education and track their progress.
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
