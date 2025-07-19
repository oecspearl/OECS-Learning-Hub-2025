"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { 
  Settings, 
  Minus, 
  Plus, 
  RotateCcw, 
  Eye, 
  Volume2, 
  VolumeX,
  Sun,
  Moon
} from "lucide-react"

export function AccessibilityToolbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [fontSize, setFontSize] = useState(100)
  const [isHighContrast, setIsHighContrast] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

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

  const toggleMute = () => {
    setIsMuted(!isMuted)
    // This would typically control audio/video elements
    const mediaElements = document.querySelectorAll("audio, video")
    mediaElements.forEach((element) => {
      if (element instanceof HTMLMediaElement) {
        element.muted = !isMuted
      }
    })
  }

  return (
    <div className="fixed bottom-28 right-8 z-50">
      {/* Main toggle button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 p-0"
        aria-label="Accessibility settings"
        style={{
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        }}
      >
        <Settings className="h-6 w-6" />
      </Button>

      {/* Toolbar panel */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 bg-white border border-gray-200 rounded-lg shadow-xl p-4 w-64">
          <h3 className="font-semibold text-gray-900 mb-3">Accessibility Tools</h3>
          
          {/* Font size controls */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Font Size: {fontSize}%
            </label>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => adjustFontSize(-10)}
                className="h-8 w-8 p-0"
                aria-label="Decrease font size"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={resetFontSize}
                className="h-8 w-8 p-0"
                aria-label="Reset font size"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => adjustFontSize(10)}
                className="h-8 w-8 p-0"
                aria-label="Increase font size"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* High contrast toggle */}
          <div className="mb-4">
            <Button
              variant={isHighContrast ? "default" : "outline"}
              size="sm"
              onClick={toggleHighContrast}
              className="w-full justify-start"
              aria-label={isHighContrast ? "Disable high contrast" : "Enable high contrast"}
            >
              <Eye className="h-4 w-4 mr-2" />
              High Contrast
            </Button>
          </div>

          {/* Mute toggle */}
          <div className="mb-4">
            <Button
              variant={isMuted ? "default" : "outline"}
              size="sm"
              onClick={toggleMute}
              className="w-full justify-start"
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            >
              {isMuted ? (
                <VolumeX className="h-4 w-4 mr-2" />
              ) : (
                <Volume2 className="h-4 w-4 mr-2" />
              )}
              {isMuted ? "Unmute" : "Mute Audio"}
            </Button>
          </div>

          {/* Close button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="w-full"
          >
            Close
          </Button>
        </div>
      )}
    </div>
  )
} 