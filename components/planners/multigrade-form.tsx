"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { generateMultigradePlan } from "@/app/actions/generate-multigrade-plan"
import { useToast } from "@/hooks/use-toast"
import { SpecialNeedsModalController } from "./special-needs-modal-controller"
import { PedagogicalStrategyInfo } from "./pedagogical-strategy-info"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertCircle, Loader2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Create a mock form object that mimics the structure expected by SpecialNeedsModalController
const createMockForm = (
  setValue: (value: string) => void,
  getValue: () => string,
  setChecked: (checked: boolean) => void,
) => {
  return {
    setValue: (name: string, value: any, options = {}) => {
      if (name === "specialNeedsDetails") {
        setValue(value)
      } else if (name === "specialNeeds") {
        setChecked(value)
      }
    },
    watch: (name: string) => {
      if (name === "specialNeeds") {
        return getValue().length > 0
      }
      if (name === "specialNeedsDetails") {
        return getValue()
      }
      return null
    },
    getValues: (name: string) => {
      if (name === "specialNeedsDetails") {
        return getValue()
      }
      return null
    },
    handleSubmit: (callback: any) => callback,
  }
}

// Common data for all planners
const SUBJECTS = [
  { value: "mathematics", label: "Mathematics" },
  { value: "science", label: "Science" },
  { value: "language_arts", label: "Language Arts" },
  { value: "social_studies", label: "Social Studies" },
  { value: "history", label: "History" },
  { value: "geography", label: "Geography" },
  { value: "art", label: "Art" },
  { value: "music", label: "Music" },
  { value: "physical_education", label: "Physical Education" },
  { value: "technology", label: "Technology" },
  { value: "foreign_language", label: "Foreign Language" },
  { value: "health", label: "Health" },
]

const LEARNING_STYLES = [
  { value: "visual", label: "Visual" },
  { value: "auditory", label: "Auditory" },
  { value: "reading_writing", label: "Reading/Writing" },
  { value: "kinesthetic", label: "Kinesthetic" },
  { value: "mixed", label: "Mixed" },
]

const GRADE_LEVELS = [
  { value: "K", label: "Kindergarten", color: "bg-pink-100 text-pink-800 border-pink-200" },
  { value: "1", label: "Grade 1", color: "bg-red-100 text-red-800 border-red-200" },
  { value: "2", label: "Grade 2", color: "bg-orange-100 text-orange-800 border-orange-200" },
  { value: "3", label: "Grade 3", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
  { value: "4", label: "Grade 4", color: "bg-green-100 text-green-800 border-green-200" },
  { value: "5", label: "Grade 5", color: "bg-blue-100 text-blue-800 border-blue-200" },
  { value: "6", label: "Grade 6", color: "bg-indigo-100 text-indigo-800 border-indigo-200" },
]

const MULTIGRADE_STRATEGIES = [
  { value: "peer_teaching", label: "Peer Teaching" },
  { value: "differentiated_tasks", label: "Differentiated Tasks" },
  { value: "rotation", label: "Rotation Activities" },
  { value: "self_directed", label: "Self-Directed Learning" },
  { value: "integrated_curriculum", label: "Integrated Curriculum" },
  { value: "staggered_instruction", label: "Staggered Instruction" },
  { value: "collaborative_groups", label: "Mixed-Grade Collaborative Groups" },
  { value: "learning_centers", label: "Learning Centers" },
  { value: "tiered_assignments", label: "Tiered Assignments" },
  { value: "flexible_grouping", label: "Flexible Grouping" },
]

export function MultigradeForm() {
  const { toast } = useToast()
  const [isGenerating, setIsGenerating] = useState(false)
  const [activeTab, setActiveTab] = useState("basic")
  const [selectedGrades, setSelectedGrades] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)
  const [selectedSubject, setSelectedSubject] = useState<string>("")
  const [topicValue, setTopicValue] = useState<string>("")
  const [durationValue, setDurationValue] = useState<string>("")
  const [specialNeedsDetails, setSpecialNeedsDetails] = useState<string>("")
  const [hasSpecialNeeds, setHasSpecialNeeds] = useState(false)
  const [selectedStrategy, setSelectedStrategy] = useState("")
  const formRef = useRef<HTMLFormElement>(null)

  // Create a mock form object with proper setValue method
  const mockForm = useRef({
    setValue: (name: string, value: any, options = {}) => {
      if (name === "specialNeedsDetails") {
        setSpecialNeedsDetails(value)
      } else if (name === "specialNeeds") {
        setHasSpecialNeeds(value)
      }
    },
    watch: (name: string) => {
      if (name === "specialNeeds") {
        return hasSpecialNeeds
      }
      if (name === "specialNeedsDetails") {
        return specialNeedsDetails
      }
      return null
    },
    getValues: (name: string) => {
      if (name === "specialNeedsDetails") {
        return specialNeedsDetails
      }
      return null
    },
    handleSubmit: (callback: any) => callback,
  }).current

  // Update hasSpecialNeeds when specialNeedsDetails changes
  useEffect(() => {
    setHasSpecialNeeds(specialNeedsDetails.length > 0)
  }, [specialNeedsDetails])

  const handleGradeToggle = (grade: string) => {
    setSelectedGrades((prev) => (prev.includes(grade) ? prev.filter((g) => g !== grade) : [...prev, grade]))
  }

  // Function to handle special needs accommodations
  const handleSpecialNeedsUpdate = (accommodations: string) => {
    console.log("Special needs accommodations updated:", accommodations)
    setSpecialNeedsDetails(accommodations)
    setHasSpecialNeeds(accommodations.length > 0)

    // Update the textarea directly
    if (formRef.current) {
      const textarea = formRef.current.querySelector("#special_needs") as HTMLTextAreaElement
      if (textarea) {
        textarea.value = accommodations
      }
    }
  }

  const validateForm = () => {
    // Reset error
    setError(null)

    // Check subject
    if (!selectedSubject) {
      setError("Please select a subject")
      setActiveTab("basic")
      return false
    }

    // Check topic using state variable
    if (!topicValue || topicValue.trim() === "") {
      setError("Please enter a topic")
      setActiveTab("basic")
      return false
    }

    // Check duration using state variable
    if (!durationValue) {
      setError("Please enter a duration")
      setActiveTab("basic")
      return false
    }

    // Check grades
    if (selectedGrades.length < 2) {
      setError("Please select at least two grade levels")
      setActiveTab("grades")
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validate form
    if (!validateForm()) {
      return
    }

    setIsGenerating(true)
    setError(null)

    try {
      const formData = new FormData(e.currentTarget)

      // Explicitly add values from state
      formData.set("subject", selectedSubject)
      formData.set("topic", topicValue)
      formData.set("duration", durationValue)
      formData.set("grades", selectedGrades.join(","))

      // Add special needs details if any
      if (specialNeedsDetails) {
        formData.set("special_needs", specialNeedsDetails)
      }

      // Get learning styles
      const learningStylesCheckboxes = document.querySelectorAll('input[name="learning_styles"]:checked')
      const learningStyles = Array.from(learningStylesCheckboxes).map((cb) => (cb as HTMLInputElement).value)

      // Clear existing learning styles and add the selected ones
      formData.delete("learning_styles")
      learningStyles.forEach((style) => {
        formData.append("learning_styles", style)
      })

      // Get multigrade strategies
      const strategiesCheckboxes = document.querySelectorAll('input[name="multigrade_strategies"]:checked')
      const strategies = Array.from(strategiesCheckboxes).map((cb) => (cb as HTMLInputElement).value)

      // Clear existing strategies and add the selected ones
      formData.delete("multigrade_strategies")
      strategies.forEach((strategy) => {
        formData.append("multigrade_strategies", strategy)
      })

      // Add at least one learning style if none selected
      if (learningStyles.length === 0) {
        formData.append("learning_styles", "mixed")
      }

      console.log("Submitting form with subject:", selectedSubject)
      console.log("Submitting form with topic:", topicValue)
      console.log("Submitting form with duration:", durationValue)
      console.log("Selected grades:", selectedGrades)
      console.log("Special needs details:", specialNeedsDetails)

      const lessonPlan = await generateMultigradePlan(formData)

      // Dispatch a custom event to update the UI
      if (typeof window !== "undefined") {
        const event = new CustomEvent("multigradePlanGenerated", {
          detail: {
            content: lessonPlan,
            specialNeeds: specialNeedsDetails && specialNeedsDetails.trim() ? specialNeedsDetails.split(",").map((need) => need.trim()) : [],
          },
        })
        window.dispatchEvent(event)
      }

      toast({
        title: "Multigrade plan generated",
        description: "Your multigrade lesson plan has been created successfully.",
      })
    } catch (error) {
      console.error("Error generating multigrade plan:", error)

      let errorMessage = "Failed to generate multigrade plan. Please try again."
      if (error instanceof Error) {
        errorMessage = error.message
      }

      setError(errorMessage)

      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <Card className="shadow-lg border-t-4 border-t-green-600">
      <CardContent className="pt-6">
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="basic">Basic Info</TabsTrigger>
              <TabsTrigger value="grades">Grade Levels</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subject">
                  Subject <span className="text-red-500">*</span>
                </Label>
                <Select value={selectedSubject} onValueChange={setSelectedSubject} required>
                  <SelectTrigger id="subject" className="border-green-200 focus:border-green-400">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {SUBJECTS.map((subject) => (
                      <SelectItem key={subject.value} value={subject.value}>
                        {subject.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="topic">
                  Topic <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="topic"
                  name="topic"
                  value={topicValue}
                  onChange={(e) => setTopicValue(e.target.value)}
                  placeholder="e.g. Fractions"
                  required
                  className="border-green-200 focus:border-green-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">
                  Duration (minutes) <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="duration"
                  name="duration"
                  type="number"
                  min="5"
                  max="180"
                  value={durationValue}
                  onChange={(e) => setDurationValue(e.target.value)}
                  placeholder="e.g. 45"
                  required
                  className="border-green-200 focus:border-green-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="objectives">Learning Objectives</Label>
                <Textarea
                  id="objectives"
                  name="objectives"
                  placeholder="What students will learn from this lesson"
                  rows={3}
                  className="border-green-200 focus:border-green-400"
                />
              </div>
            </TabsContent>

            <TabsContent value="grades" className="space-y-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">
                  Select Grade Levels <span className="text-red-500">*</span>
                  <span className="block text-xs text-muted-foreground mt-1">
                    Select at least 2 grade levels for your multigrade plan
                  </span>
                </Label>

                <div className="grid grid-cols-2 gap-3 mt-3">
                  {GRADE_LEVELS.map((grade) => {
                    const isSelected = selectedGrades.includes(grade.value)
                    return (
                      <div
                        key={grade.value}
                        className={`
                          flex items-center space-x-2 p-3 rounded-md border cursor-pointer transition-all
                          ${isSelected ? grade.color + " border-2" : "border-gray-200 hover:border-green-200 bg-white"}
                        `}
                        onClick={() => handleGradeToggle(grade.value)}
                      >
                        {/* Custom checkbox UI */}
                        <div className="flex h-4 w-4 items-center justify-center rounded-sm border border-primary shadow">
                          {isSelected && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-3 w-3 text-green-600"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </div>
                        <label
                          htmlFor={`grade-${grade.value}`}
                          className="text-sm font-medium leading-none cursor-pointer flex-1"
                        >
                          {grade.label}
                        </label>
                        <input
                          type="checkbox"
                          id={`grade-${grade.value}`}
                          checked={isSelected}
                          onChange={() => {}}
                          className="sr-only"
                        />
                      </div>
                    )
                  })}
                </div>
              </div>

              {selectedGrades.length > 0 && (
                <div className="pt-2">
                  <Label className="text-sm font-medium mb-2 block">Selected Grades:</Label>
                  <div className="flex flex-wrap gap-2">
                    {selectedGrades.sort().map((grade) => {
                      const gradeInfo = GRADE_LEVELS.find((g) => g.value === grade)
                      return (
                        <Badge
                          key={grade}
                          className={`${gradeInfo?.color} cursor-pointer`}
                          onClick={() => handleGradeToggle(grade)}
                        >
                          {gradeInfo?.label}
                        </Badge>
                      )
                    })}
                  </div>
                </div>
              )}

              <div className="space-y-2 pt-4">
                <Label htmlFor="differentiation_notes">Differentiation Notes</Label>
                <Textarea
                  id="differentiation_notes"
                  name="differentiation_notes"
                  placeholder="Specific notes on how to differentiate content across grade levels"
                  rows={4}
                  className="border-green-200 focus:border-green-400"
                />
              </div>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="learning_styles">Learning Styles</Label>
                <div className="grid grid-cols-2 gap-2 mt-1 border p-3 rounded-md">
                  {LEARNING_STYLES.map((style) => (
                    <div key={style.value} className="flex items-center space-x-2">
                      <Checkbox id={`style-${style.value}`} name="learning_styles" value={style.value} />
                      <Label htmlFor={`style-${style.value}`} className="text-sm">
                        {style.label}
                      </Label>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">Select all applicable learning styles of your students</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="materials">Available Materials and Technology</Label>
                <Textarea
                  id="materials"
                  name="materials"
                  placeholder="List materials and technology available for the lesson"
                  rows={3}
                  className="border-green-200 focus:border-green-400"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="pedagogical_strategy">Pedagogical Strategy</Label>
                  {selectedStrategy && <PedagogicalStrategyInfo strategyId={selectedStrategy} />}
                </div>
                <Select
                  name="pedagogical_strategy"
                  defaultValue="inquiry-based-learning"
                  onValueChange={(value) => {
                    setSelectedStrategy(value)
                  }}
                >
                  <SelectTrigger id="pedagogical_strategy" className="border-green-200 focus:border-green-400">
                    <SelectValue placeholder="Select strategy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inquiry-based-learning">Inquiry-Based Learning</SelectItem>
                    <SelectItem value="project-based-learning">Project-Based Learning</SelectItem>
                    <SelectItem value="direct-instruction">Direct Instruction</SelectItem>
                    <SelectItem value="cooperative-learning">Cooperative Learning</SelectItem>
                    <SelectItem value="differentiated-instruction">Differentiated Instruction</SelectItem>
                    <SelectItem value="flipped-classroom">Flipped Classroom</SelectItem>
                    <SelectItem value="gamification">Gamification</SelectItem>
                    <SelectItem value="problem-based-learning">Problem-Based Learning</SelectItem>
                    <SelectItem value="socratic-method">Socratic Method</SelectItem>
                    <SelectItem value="experiential-learning">Experiential Learning</SelectItem>
                    <SelectItem value="culturally-responsive-teaching">Culturally Responsive Teaching</SelectItem>
                    <SelectItem value="universal-design-for-learning">Universal Design for Learning</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4 bg-background">
                <input
                  type="checkbox"
                  id="has_special_needs"
                  name="has_special_needs"
                  checked={hasSpecialNeeds}
                  onChange={(e) => {
                    setHasSpecialNeeds(e.target.checked)
                    if (!e.target.checked) {
                      setSpecialNeedsDetails("")
                    }
                  }}
                  className="h-4 w-4"
                />
                <div className="space-y-0.5">
                  <Label htmlFor="has_special_needs">Special Needs</Label>
                  <p className="text-sm text-muted-foreground">Check if there are students with special needs.</p>
                </div>
              </div>

              {hasSpecialNeeds && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="special_needs">Special Educational Needs</Label>
                    <SpecialNeedsModalController form={mockForm as any} />
                  </div>
                  <Textarea
                    id="special_needs"
                    name="special_needs"
                    placeholder="Describe any accommodations needed"
                    rows={3}
                    className="border-green-200 focus:border-green-400"
                    value={specialNeedsDetails}
                    onChange={(e) => setSpecialNeedsDetails(e.target.value)}
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="multigrade_strategies">Multigrade Teaching Strategies</Label>
                <div className="grid grid-cols-2 gap-2 mt-1 border p-3 rounded-md">
                  {MULTIGRADE_STRATEGIES.map((strategy) => (
                    <div key={strategy.value} className="flex items-center space-x-2">
                      <Checkbox id={`strategy-${strategy.value}`} name="multigrade_strategies" value={strategy.value} />
                      <Label htmlFor={`strategy-${strategy.value}`} className="text-sm">
                        {strategy.label}
                      </Label>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Select all strategies you want to incorporate in your multigrade plan
                </p>
              </div>
            </TabsContent>
          </Tabs>

          <div className="pt-4 flex justify-end">
            <Button
              type="submit"
              disabled={isGenerating}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium px-6"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Generating...
                </>
              ) : (
                "Generate Multigrade Plan"
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
