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
        return `/cross-curricular/view/${resourceId}`
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

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>
            <Button variant="outline" size="sm" disabled>
              <RefreshCw className="h-4 w-4 animate-spin mr-2" />
              Loading...
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center space-x-4 p-4 border rounded-lg animate-pulse">
                <div className="w-12 h-12 bg-gray-200 rounded"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleRefresh} disabled={refreshing}>
              <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
              {refreshing ? 'Refreshing...' : 'Refresh'}
            </Button>
            <Button asChild>
              <Link href={createLink}>
                <Plus className="h-4 w-4 mr-2" />
                Create New
              </Link>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {resources.length === 0 ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-4 text-muted-foreground">📝</div>
            <h3 className="text-lg font-medium mb-2">No {title} Yet</h3>
            <p className="text-muted-foreground mb-4">{emptyMessage}</p>
            <Button asChild>
              <Link href={createLink}>
                <Plus className="h-4 w-4 mr-2" />
                Create Your First {title.slice(0, -1)}
              </Link>
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Filter by subject:</span>
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="text-sm border rounded px-2 py-1"
                >
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>
              <span className="text-sm text-muted-foreground">
                {filteredResources.length} of {resources.length} items
              </span>
            </div>

            <div className="space-y-4">
              {filteredResources.map((resource) => {
                const IconComponent = getTypeIcon(type)
                return (
                  <div key={resource.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{resource.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <span>{resource.subject}</span>
                          <span>•</span>
                          <span>Grade {resource.grade}</span>
                          <span>•</span>
                          <span>{formatDate(resource.createdAt)}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(resource.status)}>
                        {resource.status}
                      </Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
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
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
