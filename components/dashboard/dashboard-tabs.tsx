"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { FileText, ClipboardCheck, Users, BookOpen, Plus, Eye, Edit, Download, MoreHorizontal } from "lucide-react"
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
  const { user } = useAuth()

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch(`/api/dashboard/resources?type=${type}&userId=${user?.id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch resources')
        }
        const data = await response.json()
        setResources(data.resources || [])
      } catch (error) {
        console.error("Error fetching resources:", error)
        // Only show empty state, no fallback sample data
        setResources([])
      } finally {
        setLoading(false)
      }
    }

    if (user?.id) {
      fetchResources()
    }
  }, [type, user?.id])

  const subjects = ["All", "Mathematics", "Language Arts", "Science", "Social Studies"]
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
      
      if (!response.ok) {
        throw new Error('Download failed')
      }
      
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${type}-${resourceId}.${format}`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error('Download error:', error)
      alert('Failed to download file')
    } finally {
      setDownloading(null)
    }
  }

  const IconComponent = getTypeIcon(type)

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading resources...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <Button asChild size="sm">
          <Link href={createLink}>
            <Plus className="h-4 w-4 mr-2" />
            Create New
          </Link>
        </Button>
      </div>

      {resources.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <IconComponent className="h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No resources yet</h3>
            <p className="text-gray-600 text-center mb-4">{emptyMessage}</p>
            <Button asChild>
              <Link href={createLink}>
                <Plus className="h-4 w-4 mr-2" />
                Create Your First {title}
              </Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            {subjects.map((subject) => (
              <TabsTrigger 
                key={subject} 
                value={subject.toLowerCase().replace(" ", "-")}
                onClick={() => setSelectedSubject(subject)}
              >
                {subject}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredResources.map((resource) => (
                <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium line-clamp-2">{resource.title}</CardTitle>
                      <Badge variant="secondary" className={getStatusColor(resource.status)}>
                        {resource.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-xs">
                      {resource.subject} • {resource.grade}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span>Created: {resource.createdAt}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" asChild className="flex-1">
                        <Link href={getViewLink(resource.id, type)}>
                          <Eye className="h-3 w-3 mr-1" />
                          View
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild className="flex-1">
                        <Link href={getEditLink(resource.id, type)}>
                          <Edit className="h-3 w-3 mr-1" />
                          Edit
                        </Link>
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm" disabled={downloading === resource.id}>
                            {downloading === resource.id ? (
                              <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-gray-900" />
                            ) : (
                              <Download className="h-3 w-3" />
                            )}
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleDownload(resource.id, 'pdf')}>
                            Download as PDF
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleDownload(resource.id, 'docx')}>
                            Download as Word
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleDownload(resource.id, 'json')}>
                            Download as JSON
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {subjects.slice(1).map((subject) => (
            <TabsContent key={subject} value={subject.toLowerCase().replace(" ", "-")} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredResources.map((resource) => (
                  <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium line-clamp-2">{resource.title}</CardTitle>
                        <Badge variant="secondary" className={getStatusColor(resource.status)}>
                          {resource.status}
                        </Badge>
                      </div>
                      <CardDescription className="text-xs">
                        {resource.subject} • {resource.grade}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                        <span>Created: {resource.createdAt}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" asChild className="flex-1">
                          <Link href={getViewLink(resource.id, type)}>
                            <Eye className="h-3 w-3 mr-1" />
                            View
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" asChild className="flex-1">
                          <Link href={getEditLink(resource.id, type)}>
                            <Edit className="h-3 w-3 mr-1" />
                            Edit
                          </Link>
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" disabled={downloading === resource.id}>
                              {downloading === resource.id ? (
                                <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-gray-900" />
                              ) : (
                                <Download className="h-3 w-3" />
                              )}
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => handleDownload(resource.id, 'pdf')}>
                              Download as PDF
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleDownload(resource.id, 'docx')}>
                              Download as Word
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleDownload(resource.id, 'json')}>
                              Download as JSON
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      )}
    </div>
  )
}
