"use client"

import { useEffect, useState } from "react"

export function SkipToContent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        setIsVisible(true)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  const handleClick = () => {
    const mainContent = document.querySelector("main")
    if (mainContent) {
      mainContent.focus()
      mainContent.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!isVisible) return null

  return (
    <button
      onClick={handleClick}
      className="fixed top-4 left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 hover:bg-blue-700"
      aria-label="Skip to main content"
    >
      Skip to main content
    </button>
  )
} 