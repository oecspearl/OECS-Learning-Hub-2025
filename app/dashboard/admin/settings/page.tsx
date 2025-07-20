"use client"

import { useAuth } from "@/contexts/AuthContext"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Settings, Users, Database, Shield, Bell, Globe } from "lucide-react"
import Link from "next/link"

export default function AdminSettingsPage() {
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
          <p className="text-gray-600 mb-4">Please log in to access the admin settings.</p>
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    )
  }

  // Check if user has admin role
  const userRole = user.user_metadata?.role || 'teacher'
  if (userRole !== 'administrator' && userRole !== 'admin') {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-4">You don't have permission to access admin settings.</p>
          <Button asChild>
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
        </div>
      </div>
    )
  }

  const settingsItems = [
    {
      title: "User Management",
      description: "Manage users, roles, and permissions",
      icon: <Users className="h-6 w-6" />,
      href: "/dashboard/admin/users",
      color: "bg-blue-500"
    },
    {
      title: "System Settings",
      description: "Configure system-wide settings and preferences",
      icon: <Settings className="h-6 w-6" />,
      href: "/dashboard/admin/system",
      color: "bg-green-500"
    },
    {
      title: "Database Management",
      description: "Manage database connections and backups",
      icon: <Database className="h-6 w-6" />,
      href: "/dashboard/admin/database",
      color: "bg-purple-500"
    },
    {
      title: "Security Settings",
      description: "Configure security policies and authentication",
      icon: <Shield className="h-6 w-6" />,
      href: "/dashboard/admin/security",
      color: "bg-orange-500"
    },
    {
      title: "Notifications",
      description: "Manage system notifications and alerts",
      icon: <Bell className="h-6 w-6" />,
      href: "/dashboard/admin/notifications",
      color: "bg-teal-500"
    },
    {
      title: "Site Configuration",
      description: "Configure site appearance and branding",
      icon: <Globe className="h-6 w-6" />,
      href: "/dashboard/admin/site",
      color: "bg-indigo-500"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Admin Settings
        </h1>
        <p className="text-gray-600">
          Manage system configuration and administrative functions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {settingsItems.map((item, index) => (
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
                  Manage {item.title}
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 