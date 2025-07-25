"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { FileText, ClipboardCheck, Users, BookOpen, Plus, Eye, Edit, Download, MoreHorizontal, RefreshCw } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/contexts/AuthContext"
import React from "react"

interface Resource {
  id: string
  title: string
  subject: string
  grade: string
  createdAt: string
  status: string
}

interface DashboardTabsProps {
  type: string
  title: string
  description: string
  emptyMessage: string
  createLink: string
}

export function DashboardTabs({ type, title, description, emptyMessage, createLink }: DashboardTabsProps) {
  const [resources, setResources] = useState<Resource[]>([])
  const [loading, setLoading] = useState(true)
  const [downloading, setDownloading] = useState<string | null>(null)
  const [refreshing, setRefreshing] = useState(false)
  const { user } = useAuth()

  const fetchResources = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/dashboard/resources?type=${type}&userId=${user?.id}`)
      if (!response.ok) {
        throw new Error('Failed to fetch resources')
      }
      const data = await response.json()
      console.log(`Fetched ${data.resources?.length || 0} ${type} resources for user ${user?.id}`)
      setResources(data.resources || [])
    } catch (error) {
      console.error("Error fetching resources:", error)
      // Only show empty state, no fallback sample data
      setResources([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (user?.id) {
      fetchResources()
    }
  }, [type, user?.id])

  // Listen for lesson plan creation events
  useEffect(() => {
    const handleLessonPlanCreated = () => {
      console.log("Lesson plan created, refreshing resources...")
      fetchResources()
    }

    const handleQuizCreated = () => {
      console.log("Quiz created, refreshing resources...")
      fetchResources()
    }

    window.addEventListener("lessonPlanCreated", handleLessonPlanCreated)
    window.addEventListener("quizCreated", handleQuizCreated)

    return () => {
      window.removeEventListener("lessonPlanCreated", handleLessonPlanCreated)
      window.removeEventListener("quizCreated", handleQuizCreated)
    }
  }, [user?.id])

  const handleRefresh = async () => {
    setRefreshing(true)
    await fetchResources()
    setRefreshing(false)
  }

  const subjects = ["All", "mathematics", "language-arts", "science", "social-studies"]
  const [selectedSubject, setSelectedSubject] = useState("All")

  const filteredResources = selectedSubject === "All" 
    ? resources 
    : resources.filter(resource => resource.subject === selectedSubject)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "lesson-plans":
        return FileText
      case "quizzes":
        return ClipboardCheck
      case "multigrade":
        return Users
      case "cross-curricular":
        return BookOpen
      default:
        return FileText
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "draft":
        return "bg-yellow-100 text-yellow-800"
      case "archived":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-blue-100 text-blue-800"
    }
  }

  const getEditLink = (resourceId: string, resourceType: string) => {
    switch (resourceType) {
      case "quizzes":
        return `/quiz/edit/${resourceId}`
      case "lesson-plans":
        return `/planner/edit/${resourceId}`
      case "multigrade":
        return `/multigrade/edit/${resourceId}`
              case "cross-curricular":
          return `/cross-curricular/edit/${resourceId}`
      default:
        return `/${resourceType}/${resourceId}`
    }
  }

  const getViewLink = (resourceId: string, resourceType: string) => {
    switch (resourceType) {
      case "quizzes":
        return `/quiz/view/${resourceId}`
      case "lesson-plans":
        return `/planner/view/${resourceId}`
      case "multigrade":
        return `/multigrade/view/${resourceId}`
      case "cross-curricular":
        return `/cross-curricular/${resourceId}/view`
      default:
        return `/${resourceType}/${resourceId}`
    }
  }

  const handleDownload = async (resourceId: string, format: string) => {
    try {
      setDownloading(resourceId)
      
      const response = await fetch(`/api/download/${type}/${resourceId}?format=${format}`)
      
      if (response.ok) {
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.style.display = 'none'
        a.href = url
        a.download = `${type}-${resourceId}.${format}`
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
      }
    } catch (error) {
      console.error('Download failed:', error)
    } finally {
      setDownloading(null)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString()
  }

  return (
    <Card>
      <CardHeader className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle className="text-lg sm:text-xl">{title}</CardTitle>
            <CardDescription className="text-sm">{description}</CardDescription>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button asChild size="sm" className="w-full sm:w-auto">
              <Link href={createLink}>
                <Plus className="h-4 w-4 mr-2" />
                Create New
              </Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleRefresh}
              disabled={refreshing}
              className="w-full sm:w-auto"
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Refresh</span>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <RefreshCw className="h-6 w-6 animate-spin mr-2" />
            <span>Loading resources...</span>
          </div>
        ) : filteredResources.length === 0 ? (
          <div className="text-center py-8">
            <div className="inline-flex p-3 rounded-lg bg-gray-100 text-gray-600 mb-4">
              {React.createElement(getTypeIcon(type), { className: "h-6 w-6" })}
            </div>
            <h3 className="text-lg font-semibold mb-2">No {type.replace('-', ' ')} found</h3>
            <p className="text-gray-600 mb-4">{emptyMessage}</p>
            <Button asChild>
              <Link href={createLink}>
                <Plus className="h-4 w-4 mr-2" />
                Create Your First {type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </Link>
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Filter */}
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex flex-wrap gap-2">
                {subjects.map((subject) => (
                  <Button
                    key={subject}
                    variant={selectedSubject === subject ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSubject(subject)}
                    className="text-xs sm:text-sm"
                  >
                    {subject}
                  </Button>
                ))}
              </div>
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredResources.map((resource) => (
                <Card key={resource.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-sm sm:text-base truncate">{resource.title}</CardTitle>
                        <CardDescription className="text-xs sm:text-sm">
                          {resource.subject} • {resource.grade}
                        </CardDescription>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link href={getViewLink(resource.id, type)}>
                              <Eye className="h-4 w-4 mr-2" />
                              View
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href={getEditLink(resource.id, type)}>
                              <Edit className="h-4 w-4 mr-2" />
                              Edit
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleDownload(resource.id, 'pdf')}>
                            <Download className="h-4 w-4 mr-2" />
                            Download PDF
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleDownload(resource.id, 'word')}>
                            <Download className="h-4 w-4 mr-2" />
                            Download Word
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {resource.status}
                      </Badge>
                      <span className="text-xs text-gray-500">
                        {formatDate(resource.createdAt)}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
