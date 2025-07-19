"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Minus, Plus, RotateCcw } from "lucide-react"

export function FontSizeAdjuster() {
  const [fontSize, setFontSize] = useState(100)

  useEffect(() => {
    const savedSize = localStorage.getItem("fontSize")
    if (savedSize) {
      setFontSize(parseInt(savedSize))
      document.documentElement.style.fontSize = `${savedSize}%`
    }
  }, [])

  const adjustFontSize = (change: number) => {
    const newSize = Math.max(80, Math.min(200, fontSize + change))
    setFontSize(newSize)
    document.documentElement.style.fontSize = `${newSize}%`
    localStorage.setItem("fontSize", newSize.toString())
  }

  const resetFontSize = () => {
    setFontSize(100)
    document.documentElement.style.fontSize = "100%"
    localStorage.removeItem("fontSize")
  }

  return (
    <div className="fixed bottom-32 right-8 z-40 bg-white border border-gray-200 rounded-lg shadow-lg p-2 flex flex-col gap-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => adjustFontSize(10)}
        className="h-8 w-8 p-0"
        aria-label="Increase font size"
      >
        <Plus className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => adjustFontSize(-10)}
        className="h-8 w-8 p-0"
        aria-label="Decrease font size"
      >
        <Minus className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={resetFontSize}
        className="h-8 w-8 p-0"
        aria-label="Reset font size"
      >
        <RotateCcw className="h-4 w-4" />
      </Button>
      <div className="text-xs text-center text-gray-500 px-1">
        {fontSize}%
      </div>
    </div>
  )
} 