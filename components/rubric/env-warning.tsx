"use client"

import { useState, useEffect } from "react"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export default function EnvWarning() {
  const [showWarning, setShowWarning] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    // This is a client-side check that will be triggered when the
    // server action fails due to missing API key
    const checkApiConfig = async () => {
      try {
        const response = await fetch("/api/check-env", { method: "GET" })
        const data = await response.json()

        if (!data.configured) {
          setErrorMessage(data.message || "Environment variables not properly configured")
          setShowWarning(true)
        }
      } catch (error) {
        // If the API route doesn't exist yet, we won't show a warning
        console.log("Environment check API not implemented yet")
      }
    }

    checkApiConfig()
  }, [])

  if (!showWarning) return null

  return (
    <Alert variant="destructive" className="mb-6">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Configuration Error</AlertTitle>
      <AlertDescription className="flex flex-col gap-2">
        <p>{errorMessage}</p>
        <div>
          <Button variant="outline" size="sm" onClick={() => setShowWarning(false)} className="mt-2">
            Dismiss
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  )
}
