"use client"

import { useEffect, useState } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { CloudOff, CloudIcon as CloudSync, Loader2 } from "lucide-react"
import { getFallbackLessonPlansCount, hasFallbackLessonPlans, syncFallbackLessonPlans } from "@/lib/sync-utils"

export function OfflineSyncAlert() {
  const [offlinePlansCount, setOfflinePlansCount] = useState(0)
  const [isSyncing, setIsSyncing] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  // Check for offline plans on mount and when localStorage changes
  useEffect(() => {
    const checkOfflinePlans = () => {
      const count = getFallbackLessonPlansCount()
      setOfflinePlansCount(count)
      setShowAlert(count > 0)
    }

    // Check initially
    checkOfflinePlans()

    // Set up storage event listener
    const handleStorageChange = () => {
      checkOfflinePlans()
    }

    window.addEventListener("storage", handleStorageChange)

    // Custom event for when a new plan is saved in offline mode
    const handleLessonPlanGenerated = (event: Event) => {
      const customEvent = event as CustomEvent
      if (customEvent.detail?.fallback) {
        checkOfflinePlans()
      }
    }

    window.addEventListener("lessonPlanGenerated", handleLessonPlanGenerated)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
      window.removeEventListener("lessonPlanGenerated", handleLessonPlanGenerated)
    }
  }, [])

  const handleSync = async () => {
    if (!hasFallbackLessonPlans()) return

    setIsSyncing(true)
    try {
      const result = await syncFallbackLessonPlans()
      if (result.success) {
        setOfflinePlansCount(result.remaining || 0)
        if (result.remaining === 0) {
          setShowAlert(false)
        }
      }
    } catch (error) {
      console.error("Error syncing offline lesson plans:", error)
    } finally {
      setIsSyncing(false)
    }
  }

  if (!showAlert) return null

  return (
    <Alert className="mb-6 bg-blue-50 border-blue-200">
      <CloudOff className="h-4 w-4 text-blue-600" />
      <AlertTitle className="text-blue-800">Offline Lesson Plans</AlertTitle>
      <div className="flex items-center justify-between">
        <AlertDescription className="text-blue-700">
          You have {offlinePlansCount} lesson plan{offlinePlansCount !== 1 ? "s" : ""} stored offline. Sync now to save
          them to the database.
        </AlertDescription>
        <Button
          size="sm"
          variant="outline"
          className="ml-4 border-blue-300 text-blue-700 hover:bg-blue-100"
          onClick={handleSync}
          disabled={isSyncing}
        >
          {isSyncing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Syncing...
            </>
          ) : (
            <>
              <CloudSync className="mr-2 h-4 w-4" />
              Sync Now
            </>
          )}
        </Button>
      </div>
    </Alert>
  )
}
