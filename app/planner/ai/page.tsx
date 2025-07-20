"use client"

import { useState, useEffect } from "react"
import { PlannerOutput } from "@/components/planner-output"
import { PlannerChat } from "@/components/planner-chat"
import { PlannerForm } from "@/components/planner-form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sparkles, MessageSquare, FileText, LayoutDashboard } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AILessonPlannerPage() {
  const [lessonPlan, setLessonPlan] = useState<string | null>(null)
  const [specialNeeds, setSpecialNeeds] = useState<string[]>([])
  const [subject, setSubject] = useState<string>("")
  const [gradeLevel, setGradeLevel] = useState<string>("")
  const [topic, setTopic] = useState<string>("")
  const [activeTab, setActiveTab] = useState<string>("form")

  // Check for stored lesson plan on component mount
  useEffect(() => {
    // Check if there's a lesson plan in localStorage
    const storedLessonPlan = localStorage.getItem("currentLessonPlan")
    if (storedLessonPlan) {
      try {
        const parsedData = JSON.parse(storedLessonPlan)
        if (parsedData.content) {
          console.log("Loading lesson plan from localStorage")
          setLessonPlan(parsedData.content)
        }
      } catch (error) {
        console.error("Error parsing stored lesson plan:", error)
      }
    }
  }, [])

  useEffect(() => {
    const handleLessonPlanGenerated = (event: Event) => {
      const customEvent = event as CustomEvent
      console.log("Main page received lesson plan event:", customEvent.detail)

      if (customEvent.detail) {
        // Try to find the lesson plan content in the event detail
        let lessonPlanContent = null

        if (customEvent.detail.lessonPlan) {
          lessonPlanContent = customEvent.detail.lessonPlan
        } else if (customEvent.detail.content) {
          lessonPlanContent = customEvent.detail.content
        } else if (typeof customEvent.detail === "string") {
          lessonPlanContent = customEvent.detail
        } else if (customEvent.detail && typeof customEvent.detail === "object") {
          // Try to find any string property that might contain the lesson plan
          for (const key in customEvent.detail) {
            if (typeof customEvent.detail[key] === "string" && customEvent.detail[key].length > 100) {
              lessonPlanContent = customEvent.detail[key]
              break
            }
          }
        }

        if (lessonPlanContent) {
          console.log("Setting lesson plan state and switching to output tab")
          setLessonPlan(lessonPlanContent)
          setSpecialNeeds(customEvent.detail.specialNeeds || [])
          setSubject(customEvent.detail.subject || "")
          setGradeLevel(customEvent.detail.gradeLevel || "")
          setTopic(customEvent.detail.topic || "")
          setActiveTab("output")

          // Store the lesson plan in localStorage for persistence
          localStorage.setItem("currentLessonPlan", JSON.stringify({ content: lessonPlanContent }))

          // Re-dispatch the event to ensure all components receive it
          const newEvent = new CustomEvent("lessonPlanGenerated", {
            detail: {
              lessonPlan: lessonPlanContent,
              specialNeeds: customEvent.detail.specialNeeds || [],
              subject: customEvent.detail.subject || "",
              gradeLevel: customEvent.detail.gradeLevel || "",
              topic: customEvent.detail.topic || "",
            },
          })
          window.dispatchEvent(newEvent)
        } else {
          console.warn("Could not find lesson plan content in event:", customEvent.detail)
        }
      }
    }

    window.addEventListener("lessonPlanGenerated", handleLessonPlanGenerated)
    window.addEventListener("lesson-plan-generated", handleLessonPlanGenerated)

    return () => {
      window.removeEventListener("lessonPlanGenerated", handleLessonPlanGenerated)
      window.removeEventListener("lesson-plan-generated", handleLessonPlanGenerated)
    }
  }, [])

  // Function to handle tab changes
  const handleTabChange = (value: string) => {
    setActiveTab(value)

    // If switching to chat tab and we have a lesson plan, re-dispatch the event
    // to ensure the chat component is aware of the lesson plan
    if (value === "chat" && lessonPlan) {
      console.log("Switching to chat tab, re-dispatching lesson plan event")
      const event = new CustomEvent("lessonPlanGenerated", {
        detail: {
          lessonPlan: lessonPlan,
          specialNeeds: specialNeeds,
          subject: subject,
          gradeLevel: gradeLevel,
          topic: topic,
        },
      })
      window.dispatchEvent(event)
    }
  }

  // Create a mock plan object for the PlannerOutput component
  const mockPlan = {
    id: "mock-id",
    title: topic || "Generated Lesson Plan",
    description: lessonPlan || "No lesson plan generated yet",
    type: "lesson-plan",
    subject: subject || "General",
    grade: gradeLevel || "All Grades",
    duration: "60 minutes",
    objectives: ["Learning objective 1", "Learning objective 2"],
    activities: ["Activity 1", "Activity 2"],
    materials: ["Material 1", "Material 2"],
    assessment: "Assessment method",
    created_at: new Date().toISOString()
  }

  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-4rem)] py-8 px-4">
      {/* Main heading section */}
      <div className="w-full max-w-7xl mx-auto text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">AI Lesson Planner</h1>
        <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto">
          Create engaging, standards-aligned lesson plans tailored to your students' needs with AI assistance.
        </p>
      </div>

      {/* Separate header for dashboard button */}
      <div className="w-full max-w-7xl mx-auto mb-6 flex justify-end">
        <Link href="/dashboard">
          <Button variant="outline" className="flex items-center gap-2">
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </Button>
        </Link>
      </div>

      {/* Tabs section */}
      <div className="w-full max-w-7xl">
        <Tabs defaultValue="form" value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="form" className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              AI Generator
            </TabsTrigger>
            <TabsTrigger value="chat" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Chat with Pearl
            </TabsTrigger>
            <TabsTrigger value="output" className="flex items-center gap-2" disabled={!lessonPlan}>
              <FileText className="h-4 w-4" />
              Lesson Plan
            </TabsTrigger>
          </TabsList>

          <TabsContent value="form" className="mt-0 w-full">
            <PlannerForm />
          </TabsContent>

          <TabsContent value="chat" className="mt-0 w-full">
            <PlannerChat />
          </TabsContent>

          <TabsContent value="output" className="mt-0 w-full">
            <PlannerOutput plan={mockPlan} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
