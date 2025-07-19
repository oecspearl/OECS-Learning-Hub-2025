"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2, Sparkles, ClipboardCheck, BookOpen, Target, Users } from "lucide-react"
import RubricPreview from "@/components/rubric/rubric-preview"
import ExportDropdown from "@/components/rubric/export-dropdown"
import { generateRubric } from "@/app/actions/generate-rubric"

interface RubricLevel {
  level: string
  points: number
  description: string
}

interface RubricCriterion {
  name: string
  description: string
  levels: RubricLevel[]
}

interface Rubric {
  title: string
  levelLabels: string[]
  criteria: RubricCriterion[]
}

export default function ClientPage() {
  const [formData, setFormData] = useState({
    assignmentTitle: "",
    assignmentType: "",
    subject: "",
    gradeLevel: "",
    learningObjectives: "",
    specificRequirements: "",
    performanceLevels: "4",
    includePoints: true,
    focusAreas: [] as string[],
  })

  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedRubric, setGeneratedRubric] = useState<Rubric | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFocusAreaChange = (area: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      focusAreas: checked ? [...prev.focusAreas, area] : prev.focusAreas.filter((item) => item !== area),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)
    setError(null)

    try {
      const result = await generateRubric(formData)

      if (result.success && result.rubric) {
        setGeneratedRubric(result.rubric)
      } else {
        setError(result.error || "Failed to generate rubric. Please try again.")
      }
    } catch (err) {
      console.error("Error in handleSubmit:", err)
      setError("An unexpected error occurred. Please check your inputs and try again.")
    } finally {
      setIsGenerating(false)
    }
  }

  const focusAreaOptions = [
    "Content Knowledge",
    "Critical Thinking",
    "Communication",
    "Collaboration",
    "Creativity",
    "Organization",
    "Research Skills",
    "Problem Solving",
    "Technical Skills",
    "Presentation Skills",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <ClipboardCheck className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">AI Rubric Generator</h1>
                <p className="text-gray-600">Create professional assessment rubrics in minutes</p>
              </div>
            </div>
            {generatedRubric && <ExportDropdown rubric={generatedRubric} />}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-green-600" />
                  Rubric Details
                </CardTitle>
                <CardDescription>
                  Provide information about your assignment to generate a customized rubric
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="assignmentTitle">Assignment Title *</Label>
                      <Input
                        id="assignmentTitle"
                        placeholder="e.g., Research Essay on Climate Change"
                        value={formData.assignmentTitle}
                        onChange={(e) => handleInputChange("assignmentTitle", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="assignmentType">Assignment Type *</Label>
                      <Select
                        value={formData.assignmentType}
                        onValueChange={(value) => handleInputChange("assignmentType", value)}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="essay">Essay</SelectItem>
                          <SelectItem value="presentation">Presentation</SelectItem>
                          <SelectItem value="project">Project</SelectItem>
                          <SelectItem value="lab-report">Lab Report</SelectItem>
                          <SelectItem value="creative-writing">Creative Writing</SelectItem>
                          <SelectItem value="research-paper">Research Paper</SelectItem>
                          <SelectItem value="group-work">Group Work</SelectItem>
                          <SelectItem value="portfolio">Portfolio</SelectItem>
                          <SelectItem value="performance">Performance</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Select
                        value={formData.subject}
                        onValueChange={(value) => handleInputChange("subject", value)}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="language-arts">Language Arts</SelectItem>
                          <SelectItem value="mathematics">Mathematics</SelectItem>
                          <SelectItem value="science">Science</SelectItem>
                          <SelectItem value="social-studies">Social Studies</SelectItem>
                          <SelectItem value="art">Art</SelectItem>
                          <SelectItem value="music">Music</SelectItem>
                          <SelectItem value="physical-education">Physical Education</SelectItem>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="gradeLevel">Grade Level *</Label>
                      <Select
                        value={formData.gradeLevel}
                        onValueChange={(value) => handleInputChange("gradeLevel", value)}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select grade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="k">Kindergarten</SelectItem>
                          <SelectItem value="1">Grade 1</SelectItem>
                          <SelectItem value="2">Grade 2</SelectItem>
                          <SelectItem value="3">Grade 3</SelectItem>
                          <SelectItem value="4">Grade 4</SelectItem>
                          <SelectItem value="5">Grade 5</SelectItem>
                          <SelectItem value="6">Grade 6</SelectItem>
                          <SelectItem value="7">Grade 7</SelectItem>
                          <SelectItem value="8">Grade 8</SelectItem>
                          <SelectItem value="9">Grade 9</SelectItem>
                          <SelectItem value="10">Grade 10</SelectItem>
                          <SelectItem value="11">Grade 11</SelectItem>
                          <SelectItem value="12">Grade 12</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="learningObjectives">Learning Objectives *</Label>
                    <Textarea
                      id="learningObjectives"
                      placeholder="What should students learn or demonstrate? List the key learning objectives..."
                      value={formData.learningObjectives}
                      onChange={(e) => handleInputChange("learningObjectives", e.target.value)}
                      rows={3}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specificRequirements">Specific Requirements</Label>
                    <Textarea
                      id="specificRequirements"
                      placeholder="Any specific requirements, constraints, or criteria for this assignment..."
                      value={formData.specificRequirements}
                      onChange={(e) => handleInputChange("specificRequirements", e.target.value)}
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="performanceLevels">Performance Levels</Label>
                      <Select
                        value={formData.performanceLevels}
                        onValueChange={(value) => handleInputChange("performanceLevels", value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="3">3 Levels</SelectItem>
                          <SelectItem value="4">4 Levels</SelectItem>
                          <SelectItem value="5">5 Levels</SelectItem>
                          <SelectItem value="6">6 Levels</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Options</Label>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="includePoints"
                          checked={formData.includePoints}
                          onCheckedChange={(checked) => handleInputChange("includePoints", checked as boolean)}
                        />
                        <Label htmlFor="includePoints" className="text-sm">
                          Include point values
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Focus Areas (Optional)</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {focusAreaOptions.map((area) => (
                        <div key={area} className="flex items-center space-x-2">
                          <Checkbox
                            id={area}
                            checked={formData.focusAreas.includes(area)}
                            onCheckedChange={(checked) => handleFocusAreaChange(area, checked as boolean)}
                          />
                          <Label htmlFor={area} className="text-sm">
                            {area}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-red-800">Generation Error</h3>
                          <p className="text-sm text-red-700 mt-1">{error}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isGenerating}>
                    {isGenerating ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating Rubric...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Generate Rubric
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Features Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-green-600" />
                  Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Standards-Aligned</h4>
                      <p className="text-sm text-gray-600">Generated rubrics align with educational standards</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Grade-Appropriate</h4>
                      <p className="text-sm text-gray-600">Language and expectations match grade level</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ClipboardCheck className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Fully Editable</h4>
                      <p className="text-sm text-gray-600">Customize every aspect of your rubric</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Export Ready</h4>
                      <p className="text-sm text-gray-600">Download as PDF, CSV, or HTML</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview Section */}
          <div className="space-y-6">
            {generatedRubric ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ClipboardCheck className="h-5 w-5 text-green-600" />
                    Generated Rubric
                  </CardTitle>
                  <CardDescription>Your AI-generated rubric is ready! Click any text to edit.</CardDescription>
                </CardHeader>
                <CardContent>
                  <RubricPreview rubric={generatedRubric} />
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <div className="bg-green-100 p-4 rounded-full mb-4">
                    <ClipboardCheck className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Ready to Generate</h3>
                  <p className="text-gray-600 text-center max-w-md">
                    Fill out the form on the left and click "Generate Rubric" to create your AI-powered assessment
                    rubric.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
