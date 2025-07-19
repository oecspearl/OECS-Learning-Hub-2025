"use client"

import { useEffect, useState } from "react"

export function KeyboardIndicator() {
  const [isKeyboardActive, setIsKeyboardActive] = useState(false)

  useEffect(() => {
    const handleKeyDown = () => {
      setIsKeyboardActive(true)
      document.body.classList.add("keyboard-navigation")
    }

    const handleMouseDown = () => {
      setIsKeyboardActive(false)
      document.body.classList.remove("keyboard-navigation")
    }

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("mousedown", handleMouseDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("mousedown", handleMouseDown)
    }
  }, [])

  if (!isKeyboardActive) return null

  return (
    <div className="fixed top-4 right-4 z-50 bg-blue-600 text-white px-3 py-1 rounded-md text-sm shadow-lg">
      Keyboard Navigation Active
    </div>
  )
} 