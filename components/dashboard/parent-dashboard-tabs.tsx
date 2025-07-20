"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, Award, Calendar, BookOpen } from "lucide-react"

interface StudentProgress {
  subject: string
  progress: number
  grade: string
  lastUpdated: string
  recentActivities: number
  upcomingAssignments: number
}

interface ParentDashboardTabsProps {
  studentProgress?: StudentProgress[]
  progressBySubject?: Record<string, StudentProgress>
}

export function ParentDashboardTabs({ 
  studentProgress = [], 
  progressBySubject = {} 
}: ParentDashboardTabsProps) {
  const [progress, setProgress] = useState<StudentProgress[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        // Mock data - replace with actual API call
        const mockProgress: StudentProgress[] = [
          { 
            subject: "Mathematics", 
            progress: 85, 
            grade: "A", 
            lastUpdated: "2024-01-15",
            recentActivities: 8,
            upcomingAssignments: 2
          },
          { 
            subject: "Language Arts", 
            progress: 92, 
            grade: "A+", 
            lastUpdated: "2024-01-14",
            recentActivities: 12,
            upcomingAssignments: 1
          },
          { 
            subject: "Science", 
            progress: 78, 
            grade: "B+", 
            lastUpdated: "2024-01-13",
            recentActivities: 6,
            upcomingAssignments: 3
          },
          { 
            subject: "Social Studies", 
            progress: 88, 
            grade: "A", 
            lastUpdated: "2024-01-12",
            recentActivities: 10,
            upcomingAssignments: 1
          }
        ]
        setProgress(mockProgress)
      } catch (error) {
        console.error("Error fetching progress:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProgress()
  }, [])

  const subjects = ["All", "Mathematics", "Language Arts", "Science", "Social Studies"]
  const [selectedSubject, setSelectedSubject] = useState("All")

  const filteredProgress = selectedSubject === "All" 
    ? progress 
    : progress.filter(item => item.subject === selectedSubject)

  const getGradeColor = (grade: string) => {
    if (grade.includes("A")) return "bg-green-100 text-green-800"
    if (grade.includes("B")) return "bg-blue-100 text-blue-800"
    if (grade.includes("C")) return "bg-yellow-100 text-yellow-800"
    return "bg-gray-100 text-gray-800"
  }

  const getProgressColor = (progress: number) => {
    if (progress >= 90) return "bg-green-500"
    if (progress >= 80) return "bg-blue-500"
    if (progress >= 70) return "bg-yellow-500"
    return "bg-red-500"
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading progress...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Academic Progress</h3>
          <p className="text-sm text-gray-600">Detailed view of student performance by subject</p>
        </div>
      </div>

      {progress.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <BookOpen className="h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No progress data available</h3>
            <p className="text-gray-600 text-center">Progress information will appear here once available.</p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProgress.map((item, index) => (
                <Card key={index} className="border-l-4 border-l-blue-500">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{item.subject}</CardTitle>
                      <Badge variant="secondary" className={getGradeColor(item.grade)}>
                        {item.grade}
                      </Badge>
                    </div>
                    <CardDescription>Last updated: {item.lastUpdated}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Overall Progress</span>
                          <span>{item.progress}%</span>
                        </div>
                        <Progress value={item.progress} className={`h-2 ${getProgressColor(item.progress)}`} />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-green-600" />
                          <span>{item.recentActivities} activities</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-blue-600" />
                          <span>{item.upcomingAssignments} upcoming</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {subjects.slice(1).map((subject) => (
            <TabsContent key={subject} value={subject.toLowerCase().replace(" ", "-")} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProgress.map((item, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-500">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{item.subject}</CardTitle>
                        <Badge variant="secondary" className={getGradeColor(item.grade)}>
                          {item.grade}
                        </Badge>
                      </div>
                      <CardDescription>Last updated: {item.lastUpdated}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Overall Progress</span>
                            <span>{item.progress}%</span>
                          </div>
                          <Progress value={item.progress} className={`h-2 ${getProgressColor(item.progress)}`} />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Award className="h-4 w-4 text-green-600" />
                            <span>{item.recentActivities} activities</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-blue-600" />
                            <span>{item.upcomingAssignments} upcoming</span>
                          </div>
                        </div>
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