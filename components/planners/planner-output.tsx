"use client"

import { useState, useEffect } from "react"

export function PlannerOutput() {
  const [lessonPlan, setLessonPlan] = useState<string | null>(null)

  useEffect(() => {
    const handleLessonPlanGenerated = (event: Event) => {
      const customEvent = event as CustomEvent
      if (customEvent.detail && customEvent.detail.lessonPlan) {
        setLessonPlan(customEvent.detail.lessonPlan)
      }
    }

    window.addEventListener("lessonPlanGenerated", handleLessonPlanGenerated)

    // Load from local storage on mount
    const storedLessonPlan = localStorage.getItem("currentLessonPlan")
    if (storedLessonPlan) {
      try {
        const parsedData = JSON.parse(storedLessonPlan)
        if (parsedData.content) {
          setLessonPlan(parsedData.content)
        }
      } catch (error) {
        console.error("Error parsing stored lesson plan:", error)
      }
    }

    return () => {
      window.removeEventListener("lessonPlanGenerated", handleLessonPlanGenerated)
    }
  }, [])

  return (
    <div>
      {lessonPlan ? (
        <pre className="whitespace-pre-wrap font-mono text-sm p-4 bg-muted/30 rounded-md h-[500px] overflow-y-auto">
          {lessonPlan}
        </pre>
      ) : (
        <div className="flex flex-col items-center justify-center h-[400px] text-center p-4 bg-muted/30 rounded-md">
          <div className="text-4xl mb-4 text-muted-foreground">📝</div>
          <h3 className="text-lg font-medium mb-2">No Lesson Plan Generated Yet</h3>
          <p className="text-muted-foreground max-w-md">
            Fill out the form and click "Generate Lesson Plan" to create your personalized lesson plan.
          </p>
        </div>
      )}
    </div>
  )
}
