"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

export function HighContrastToggle() {
  const [isHighContrast, setIsHighContrast] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("highContrast")
    if (saved === "true") {
      setIsHighContrast(true)
      document.documentElement.classList.add("high-contrast")
    }
  }, [])

  const toggleHighContrast = () => {
    const newState = !isHighContrast
    setIsHighContrast(newState)
    
    if (newState) {
      document.documentElement.classList.add("high-contrast")
      localStorage.setItem("highContrast", "true")
    } else {
      document.documentElement.classList.remove("high-contrast")
      localStorage.setItem("highContrast", "false")
    }
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleHighContrast}
      className={`fixed bottom-44 right-8 z-40 h-10 w-10 p-0 rounded-full shadow-lg ${
        isHighContrast 
          ? "bg-yellow-500 text-black hover:bg-yellow-600" 
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
      aria-label={isHighContrast ? "Disable high contrast" : "Enable high contrast"}
    >
      <Eye className="h-5 w-5" />
    </Button>
  )
} 