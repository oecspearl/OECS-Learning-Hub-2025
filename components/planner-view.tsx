"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/components/ui/use-toast"
import { generatePDF } from "@/lib/pdf-utils"
import { ArrowLeft, Download, Pencil, Calendar, BookOpen, GraduationCap, Lightbulb, Plus, History } from "lucide-react"
import { format } from "date-fns"
import { LessonReflectionForm } from "@/components/lesson-plans/lesson-reflection-form"
import { LessonReflectionDisplay } from "@/components/lesson-plans/lesson-reflection-display"

interface LessonPlan {
  id: string
  title: string
  subject: string
  grade_level: string
  topic: string
  lesson_content: string
  created_at?: string
  updated_at?: string
  user_id?: string
  pedagogical_strategy?: string
  special_needs?: boolean
  special_needs_details?: string
}

export function PlannerViewComponent({ lessonPlan }: { lessonPlan: LessonPlan }) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("preview")
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)
    try {
      await generatePDF({
        content: lessonPlan.lesson_content,
        filename: `${lessonPlan.title.replace(/\s+/g, "_")}.pdf`,
        title: lessonPlan.title,
        metadata: {
          Subject: lessonPlan.subject,
          Grade: lessonPlan.grade_level,
          Topic: lessonPlan.topic,
          Created: lessonPlan.created_at ? format(new Date(lessonPlan.created_at), "PPP") : "Unknown",
        },
      })

      toast({
        title: "Success!",
        description: "Your lesson plan has been downloaded.",
      })
    } catch (error) {
      console.error("Error downloading plan:", error)
      toast({
        title: "Error",
        description: "Failed to download lesson plan",
        variant: "destructive",
      })
    } finally {
      setIsDownloading(false)
    }
  }

  const formatSubject = (subject: string) => {
    return subject
      .replace(/_/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Button variant="outline" onClick={() => router.push("/dashboard")} className="flex items-center gap-1">
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Button>

        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={handleDownload}
            disabled={isDownloading}
            className="flex items-center gap-1"
          >
            <Download className="h-4 w-4" />
            {isDownloading ? "Downloading..." : "Download PDF"}
          </Button>

          <Button
            onClick={() => router.push(`/planner/edit/${lessonPlan.id}`)}
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white"
          >
            <Pencil className="h-4 w-4 mr-2" />
            Edit Plan
          </Button>
        </div>
      </div>

      <Card className="shadow-lg border-t-4 border-t-green-600">
        <CardHeader className="bg-muted/30">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>
              <CardTitle className="text-2xl font-bold text-green-600 bg-clip-text">
                {lessonPlan.title.toUpperCase()}
              </CardTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 flex items-center gap-1">
                  <BookOpen className="h-3 w-3" />
                  {formatSubject(lessonPlan.subject)}
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1"
                >
                  <GraduationCap className="h-3 w-3" />
                  Grade {lessonPlan.grade_level}
                </Badge>
                {lessonPlan.created_at && (
                  <Badge
                    variant="outline"
                    className="bg-amber-50 text-amber-700 border-amber-200 flex items-center gap-1"
                  >
                    <Calendar className="h-3 w-3" />
                    {format(new Date(lessonPlan.created_at), "MMM d, yyyy")}
                  </Badge>
                )}
                {lessonPlan.special_needs && (
                  <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                    Special Needs
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 mb-4">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="raw">Raw Content</TabsTrigger>
              <TabsTrigger value="reflections">Reflections</TabsTrigger>
              <TabsTrigger value="add-reflection">Add Reflection</TabsTrigger>
            </TabsList>

            <TabsContent value="preview" className="min-h-[400px]">
              <div className="prose prose-green max-w-none p-4 bg-white rounded-md min-h-[500px] overflow-y-auto border">
                {lessonPlan.lesson_content.split("\n").map((line, i) => {
                  // Handle headers
                  if (line.startsWith("# ")) {
                    return (
                      <h1 key={i} className="text-xl font-bold mt-4 mb-2">
                        {line.substring(2)}
                      </h1>
                    )
                  }
                  if (line.startsWith("## ")) {
                    return (
                      <h2 key={i} className="text-lg font-bold mt-3 mb-2">
                        {line.substring(3)}
                      </h2>
                    )
                  }
                  if (line.startsWith("### ")) {
                    return (
                      <h3 key={i} className="text-md font-bold mt-2 mb-1">
                        {line.substring(4)}
                      </h3>
                    )
                  }

                  // Handle lists
                  if (line.match(/^\d+\.\s/)) {
                    return (
                      <div key={i} className="ml-4 my-1">
                        {line}
                      </div>
                    )
                  }
                  if (line.match(/^-\s/)) {
                    return (
                      <div key={i} className="ml-4 my-1">
                        • {line.substring(2)}
                      </div>
                    )
                  }

                  // Handle empty lines
                  if (line.trim() === "") {
                    return <div key={i} className="h-4"></div>
                  }

                  // Regular paragraph
                  return (
                    <p key={i} className="my-1">
                      {line}
                    </p>
                  )
                })}
              </div>
            </TabsContent>

            <TabsContent value="raw" className="min-h-[400px]">
              <pre className="whitespace-pre-wrap font-mono text-sm p-4 bg-muted/30 rounded-md min-h-[500px] overflow-y-auto border">
                {lessonPlan.lesson_content}
              </pre>
            </TabsContent>

            <TabsContent value="reflections" className="min-h-[400px]">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">Lesson Reflections</h2>
                    <p className="text-muted-foreground">
                      Review your reflections and insights from teaching this lesson
                    </p>
                  </div>
                </div>

                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <History className="h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No Reflections Yet</h3>
                    <p className="text-muted-foreground text-center mb-4">
                      You haven't added any reflections for this lesson plan yet.
                    </p>
                    <Button onClick={() => setActiveTab("add-reflection")}>
                      Add Your First Reflection
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="add-reflection" className="min-h-[400px]">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">Add Lesson Reflection</h2>
                    <p className="text-muted-foreground">
                      Complete this reflection after teaching the lesson to track outcomes and improvements
                    </p>
                  </div>
                </div>

                <LessonReflectionForm
                  lessonPlanId={lessonPlan.id}
                  lessonTitle={lessonPlan.title}
                />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>

        {lessonPlan.special_needs && lessonPlan.special_needs_details && (
          <div className="bg-purple-50 border-t border-purple-100 p-4">
            <div className="w-full">
              <h3 className="font-medium text-purple-800 mb-2">Special Needs Accommodations</h3>
              <p className="text-sm text-purple-700">{lessonPlan.special_needs_details}</p>
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}
