"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { 
  Accessibility, 
  Eye, 
  Volume2, 
  VolumeX, 
  Type, 
  MousePointer,
  Keyboard,
  Sun,
  Moon,
  RotateCcw
} from "lucide-react"

export default function AccessibilityPage() {
  const [settings, setSettings] = useState({
    fontSize: 100,
    highContrast: false,
    reducedMotion: false,
    muteAudio: false,
    keyboardNavigation: false,
    darkMode: false,
    lineSpacing: 1.5,
    letterSpacing: 0,
  })

  useEffect(() => {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem("accessibilitySettings")
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings))
      applySettings(JSON.parse(savedSettings))
    }
  }, [])

  const applySettings = (newSettings: typeof settings) => {
    // Apply font size
    document.documentElement.style.fontSize = `${newSettings.fontSize}%`
    
    // Apply high contrast
    if (newSettings.highContrast) {
      document.documentElement.classList.add("high-contrast")
    } else {
      document.documentElement.classList.remove("high-contrast")
    }
    
    // Apply reduced motion
    if (newSettings.reducedMotion) {
      document.documentElement.style.setProperty("--reduced-motion", "reduce")
    } else {
      document.documentElement.style.removeProperty("--reduced-motion")
    }
    
    // Apply line spacing
    document.documentElement.style.setProperty("--line-spacing", newSettings.lineSpacing.toString())
    
    // Apply letter spacing
    document.documentElement.style.setProperty("--letter-spacing", `${newSettings.letterSpacing}px`)
    
    // Apply dark mode
    if (newSettings.darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  const updateSetting = (key: keyof typeof settings, value: any) => {
    const newSettings = { ...settings, [key]: value }
    setSettings(newSettings)
    applySettings(newSettings)
    localStorage.setItem("accessibilitySettings", JSON.stringify(newSettings))
  }

  const resetSettings = () => {
    const defaultSettings = {
      fontSize: 100,
      highContrast: false,
      reducedMotion: false,
      muteAudio: false,
      keyboardNavigation: false,
      darkMode: false,
      lineSpacing: 1.5,
      letterSpacing: 0,
    }
    setSettings(defaultSettings)
    applySettings(defaultSettings)
    localStorage.removeItem("accessibilitySettings")
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 flex items-center">
            <Accessibility className="mr-3 h-8 w-8" />
            Accessibility Settings
          </h1>
          <p className="text-gray-600">
            Customize your experience to make the OECS Learning Hub more accessible for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Visual Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="mr-2 h-5 w-5" />
                Visual Settings
              </CardTitle>
              <CardDescription>
                Adjust visual elements for better visibility
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Font Size: {settings.fontSize}%</label>
                <Slider
                  value={[settings.fontSize]}
                  onValueChange={([value]) => updateSetting("fontSize", value)}
                  max={200}
                  min={80}
                  step={10}
                  className="mt-2"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium">High Contrast</label>
                  <p className="text-xs text-gray-500">Increase contrast for better visibility</p>
                </div>
                <Switch
                  checked={settings.highContrast}
                  onCheckedChange={(checked) => updateSetting("highContrast", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium">Dark Mode</label>
                  <p className="text-xs text-gray-500">Switch to dark theme</p>
                </div>
                <Switch
                  checked={settings.darkMode}
                  onCheckedChange={(checked) => updateSetting("darkMode", checked)}
                />
              </div>

              <div>
                <label className="text-sm font-medium">Line Spacing: {settings.lineSpacing}</label>
                <Slider
                  value={[settings.lineSpacing]}
                  onValueChange={([value]) => updateSetting("lineSpacing", value)}
                  max={3}
                  min={1}
                  step={0.1}
                  className="mt-2"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Letter Spacing: {settings.letterSpacing}px</label>
                <Slider
                  value={[settings.letterSpacing]}
                  onValueChange={([value]) => updateSetting("letterSpacing", value)}
                  max={2}
                  min={0}
                  step={0.1}
                  className="mt-2"
                />
              </div>
            </CardContent>
          </Card>

          {/* Interaction Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MousePointer className="mr-2 h-5 w-5" />
                Interaction Settings
              </CardTitle>
              <CardDescription>
                Customize how you interact with the platform
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium">Reduced Motion</label>
                  <p className="text-xs text-gray-500">Minimize animations and transitions</p>
                </div>
                <Switch
                  checked={settings.reducedMotion}
                  onCheckedChange={(checked) => updateSetting("reducedMotion", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium">Keyboard Navigation</label>
                  <p className="text-xs text-gray-500">Enhanced keyboard navigation</p>
                </div>
                <Switch
                  checked={settings.keyboardNavigation}
                  onCheckedChange={(checked) => updateSetting("keyboardNavigation", checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium">Mute Audio</label>
                  <p className="text-xs text-gray-500">Silence all audio content</p>
                </div>
                <Switch
                  checked={settings.muteAudio}
                  onCheckedChange={(checked) => updateSetting("muteAudio", checked)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common accessibility shortcuts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button
                  variant="outline"
                  onClick={() => updateSetting("fontSize", Math.min(200, settings.fontSize + 20))}
                  className="flex flex-col items-center p-4 h-auto"
                >
                  <Type className="h-6 w-6 mb-2" />
                  <span className="text-sm">Larger Text</span>
                </Button>

                <Button
                  variant="outline"
                  onClick={() => updateSetting("fontSize", Math.max(80, settings.fontSize - 20))}
                  className="flex flex-col items-center p-4 h-auto"
                >
                  <Type className="h-6 w-6 mb-2" />
                  <span className="text-sm">Smaller Text</span>
                </Button>

                <Button
                  variant="outline"
                  onClick={() => updateSetting("highContrast", !settings.highContrast)}
                  className="flex flex-col items-center p-4 h-auto"
                >
                  <Eye className="h-6 w-6 mb-2" />
                  <span className="text-sm">Toggle Contrast</span>
                </Button>

                <Button
                  variant="outline"
                  onClick={resetSettings}
                  className="flex flex-col items-center p-4 h-auto"
                >
                  <RotateCcw className="h-6 w-6 mb-2" />
                  <span className="text-sm">Reset All</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Keyboard Shortcuts */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Keyboard className="mr-2 h-5 w-5" />
              Keyboard Shortcuts
            </CardTitle>
            <CardDescription>
              Use these keyboard shortcuts for quick access
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Skip to main content</span>
                  <kbd className="px-2 py-1 bg-gray-100 rounded text-sm">Tab</kbd>
                </div>
                <div className="flex justify-between">
                  <span>Increase font size</span>
                  <kbd className="px-2 py-1 bg-gray-100 rounded text-sm">Ctrl + +</kbd>
                </div>
                <div className="flex justify-between">
                  <span>Decrease font size</span>
                  <kbd className="px-2 py-1 bg-gray-100 rounded text-sm">Ctrl + -</kbd>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Reset font size</span>
                  <kbd className="px-2 py-1 bg-gray-100 rounded text-sm">Ctrl + 0</kbd>
                </div>
                <div className="flex justify-between">
                  <span>Toggle high contrast</span>
                  <kbd className="px-2 py-1 bg-gray-100 rounded text-sm">Alt + H</kbd>
                </div>
                <div className="flex justify-between">
                  <span>Toggle dark mode</span>
                  <kbd className="px-2 py-1 bg-gray-100 rounded text-sm">Alt + D</kbd>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 