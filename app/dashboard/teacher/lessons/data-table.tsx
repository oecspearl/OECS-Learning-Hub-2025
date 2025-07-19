"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"

interface Lesson {
  id: string
  title: string
  description: string | null
  objectives: string[]
  status: string
  scheduledFor: string | null
  subjectName: string
  unitName: string | null
  className: string | null
}

export function LessonsGrid({ subjectId, classId }: { subjectId?: string; classId?: string }) {
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchLessons() {
      try {
        let url = "/api/lessons?"
        if (subjectId) url += `subjectId=${subjectId}&`
        if (classId) url += `classId=${classId}&`

        const response = await fetch(url)
        const data = await response.json()
        setLessons(data.lessons)
      } catch (error) {
        console.error("Error fetching lessons:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchLessons()
  }, [subjectId, classId])

  if (loading) {
    return <p>Loading lessons...</p>
  }

  if (lessons.length === 0) {
    return <p className="text-muted-foreground">No lessons found.</p>
  }

  // Format date for display
  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Not scheduled"
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  // Format time for display
  const formatTime = (dateString: string | null) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    })
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {lessons.map((lesson) => (
        <Card key={lesson.id}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-lg">{lesson.title}</CardTitle>
                <CardDescription>
                  {lesson.subjectName} {lesson.unitName ? `• ${lesson.unitName}` : ""}
                </CardDescription>
              </div>
              <div
                className={`px-2 py-1 rounded-full text-xs ${
                  lesson.status === "published" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                }`}
              >
                {lesson.status === "published" ? "Published" : "Draft"}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              {lesson.scheduledFor && (
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    {formatDate(lesson.scheduledFor)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {formatTime(lesson.scheduledFor)}
                  </div>
                </div>
              )}
              <div className="space-y-1">
                <p className="text-sm font-medium">Objectives:</p>
                <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                  {lesson.objectives.slice(0, 3).map((objective, index) => (
                    <li key={index}>{objective}</li>
                  ))}
                  {lesson.objectives.length > 3 && (
                    <li className="text-muted-foreground">+{lesson.objectives.length - 3} more</li>
                  )}
                </ul>
              </div>
              <div className="flex justify-end items-center mt-2">
                <Link href={`/dashboard/teacher/lessons/${lesson.id}`}>
                  <Button size="sm" variant="outline">
                    View Lesson
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
