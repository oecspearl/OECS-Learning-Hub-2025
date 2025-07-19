"use client"

// Client-side storage utilities

// Store the current lesson plan in localStorage
export function storeCurrentLessonPlan(content: string): void {
  try {
    localStorage.setItem(
      "currentLessonPlan",
      JSON.stringify({
        content,
        timestamp: new Date().toISOString(),
      }),
    )
  } catch (error) {
    console.error("Error storing lesson plan in localStorage:", error)
  }
}

// Get the current lesson plan from localStorage
export function getCurrentLessonPlan(): string | null {
  try {
    const storedLessonPlan = localStorage.getItem("currentLessonPlan")
    if (storedLessonPlan) {
      const parsedData = JSON.parse(storedLessonPlan)
      if (parsedData.content) {
        return parsedData.content
      }
    }
    return null
  } catch (error) {
    console.error("Error getting lesson plan from localStorage:", error)
    return null
  }
}

// Save a lesson plan to localStorage as a fallback
export function saveToLocalStorage(data: any): boolean {
  try {
    // Generate a unique key for this lesson plan
    const key = `lesson_plan_${data.id || Date.now()}`

    // Store the data
    localStorage.setItem(
      key,
      JSON.stringify({
        ...data,
        savedAt: new Date().toISOString(),
        pendingSync: true,
      }),
    )

    // Also update the current lesson plan if it matches
    const currentPlan = localStorage.getItem("currentLessonPlan")
    if (currentPlan) {
      const parsedCurrent = JSON.parse(currentPlan)
      if (parsedCurrent.content === data.content) {
        storeCurrentLessonPlan(data.content)
      }
    }

    return true
  } catch (error) {
    console.error("Error saving to localStorage:", error)
    return false
  }
}

// Get all saved lesson plans from localStorage
export function getSavedLessonPlans(): any[] {
  try {
    const plans: any[] = []

    // Iterate through localStorage keys
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key && key.startsWith("lesson_plan_")) {
        const item = localStorage.getItem(key)
        if (item) {
          try {
            const plan = JSON.parse(item)
            plans.push(plan)
          } catch (e) {
            console.error("Error parsing lesson plan:", e)
          }
        }
      }
    }

    // Sort by savedAt date, newest first
    return plans.sort((a, b) => {
      return new Date(b.savedAt).getTime() - new Date(a.savedAt).getTime()
    })
  } catch (error) {
    console.error("Error getting saved lesson plans:", error)
    return []
  }
}
