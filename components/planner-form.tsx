"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { useState } from "react"
import { generateLessonPlan } from "@/app/actions/lesson-plans"
import { SpecialNeedsModalController } from "./special-needs-modal-controller"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Loader2,
  BookOpen,
  Users,
  Clock,
  Lightbulb,
  Palette,
  Package,
  BookMarked,
  Info,
  AlertTriangle,
  HelpCircle,
} from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { PedagogicalStrategyModal } from "./pedagogical-strategy-modal"
import { storeCurrentLessonPlan } from "@/lib/client-storage"

// Define the form schema using Zod
const formSchema = z.object({
  subject: z.string().min(2, {
    message: "Subject must be at least 2 characters.",
  }),
  gradeLevel: z.string().min(1, {
    message: "Please select a grade level.",
  }),
  topic: z.string().min(2, {
    message: "Topic must be at least 2 characters.",
  }),
  learningOutcomes: z.string().min(10, {
    message: "Learning outcomes must be at least 10 characters.",
  }),
  studentCount: z.number().min(1, {
    message: "Student count must be at least 1.",
  }),
  duration: z.number().min(1, {
    message: "Duration must be at least 1 minute.",
  }),
  learningStyles: z.string().min(2, {
    message: "Learning styles must be at least 2 characters.",
  }),
  materials: z.string().min(2, {
    message: "Materials must be at least 2 characters.",
  }),
  pedagogicalStrategy: z.string().min(1, {
    message: "Please select a pedagogical strategy.",
  }),
  prerequisiteSkills: z.string().min(2, {
    message: "Prerequisite skills must be at least 2 characters.",
  }),
  specialNeeds: z.boolean().default(false),
  specialNeedsDetails: z.string().optional(),
  additionalInstructions: z.string().optional(),
  referenceUrl: z.string().optional(),
})

export function PlannerForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [selectedStrategy, setSelectedStrategy] = useState("")
  const [activeTab, setActiveTab] = useState("basic")
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([])
  const [usedFallback, setUsedFallback] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false) // Add a new state to track intentional submission
  const [generationError, setGenerationError] = useState<string | null>(null)

  // Initialize the form using react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
      gradeLevel: "",
      topic: "",
      learningOutcomes: "",
      studentCount: 20,
      duration: 50,
      learningStyles: "",
      materials: "",
      pedagogicalStrategy: "",
      prerequisiteSkills: "",
      specialNeeds: false,
      specialNeedsDetails: "",
      additionalInstructions: "",
      referenceUrl: "",
    },
    mode: "onSubmit", // Only validate on submit
  })

  // Function to handle form submission - ONLY called when the Generate button is clicked
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setGenerationError(null)
    setIsLoading(true)

    try {
      console.log("Form submitted with values:", values)

      // Prepare the data for the lesson plan generation
      const lessonPlanData = {
        ...values,
        specialNeeds: selectedNeeds,
        specialNeedsDetails: values.specialNeedsDetails || "",
      }

      console.log("Calling generateLessonPlan with data:", lessonPlanData)

      // Generate the lesson plan
      const result = await generateLessonPlan(lessonPlanData)

      console.log("generateLessonPlan result:", result)

      if (result.success && result.lessonPlan) {
        console.log("Lesson plan generated successfully, length:", result.lessonPlan.length)

        // Store the lesson plan in client storage
        const lessonPlanContent = (result as any).lessonPlan
        await storeCurrentLessonPlan(typeof lessonPlanContent === 'string' ? lessonPlanContent : JSON.stringify(lessonPlanContent))

        // Dispatch the event with the lesson plan data
        const eventData = {
          lessonPlan: result.lessonPlan,
          subject: values.subject,
          gradeLevel: values.gradeLevel,
          topic: values.topic,
          specialNeeds: selectedNeeds,
        }

        console.log("Dispatching lessonPlanGenerated event with data:", eventData)

        // Dispatch the event
        window.dispatchEvent(
          new CustomEvent("lessonPlanGenerated", {
            detail: eventData,
          })
        )

        // Show success message
        toast({
          title: "Lesson Plan Generated!",
          description: "Your lesson plan has been created successfully.",
        })

        setUsedFallback(false)
      } else {
        console.error("Lesson plan generation failed:", result.error)
        setGenerationError(result.error || "Failed to generate lesson plan")
        
        toast({
          title: "Generation Failed",
          description: result.error || "Failed to generate lesson plan. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error in onSubmit:", error)
      setGenerationError(error instanceof Error ? error.message : "An unexpected error occurred")
      
      toast({
        title: "Error",
        description: "An unexpected error occurred while generating the lesson plan.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
      setIsSubmitting(false)
    }
  }

  // Function to handle special needs changes
  const handleNeedsChange = (needs: string[]) => {
    setSelectedNeeds(needs)
    // Update the form field
    form.setValue("specialNeedsDetails", needs.join(", "))
    form.setValue("specialNeeds", needs.length > 0)
  }

  // Function to handle tab change without triggering form submission
  const handleTabChange = (value: string) => {
    // Simply update the active tab state without any side effects
    setActiveTab(value)
  }

  // Function to handle the actual submission of the form
  const handleGenerateClick = () => {
    setIsSubmitting(true) // Set the flag that indicates intentional submission
    form.handleSubmit(onSubmit)() // Trigger form submission
  }

  return (
    <Card className="shadow-md animate-fade-in w-full">
      <CardHeader className="bg-muted/30 border-b py-3 px-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-bold text-primary">Create Lesson Plan</CardTitle>
            <CardDescription>Fill in the details to generate a personalized lesson plan</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-3">
        {usedFallback && (
          <Alert className="mb-4 bg-yellow-50 border-yellow-200">
            <AlertTriangle className="h-4 w-4 text-yellow-600" />
            <AlertTitle className="text-yellow-800">Database Connection Issue</AlertTitle>
            <AlertDescription className="text-yellow-700">
              Your lesson plan was saved in offline mode due to a database connection issue. It will be synced when the
              connection is restored.
            </AlertDescription>
          </Alert>
        )}

        {generationError && (
          <Alert className="mb-4 bg-red-50 border-red-200">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertTitle className="text-red-800">Generation Error</AlertTitle>
            <AlertDescription className="text-red-700">{generationError}</AlertDescription>
          </Alert>
        )}

        <Form {...form}>
          <form
            onSubmit={(e) => {
              // Prevent default form submission behavior
              e.preventDefault()
              // Only submit the form if the Generate button was clicked
              if (isSubmitting) {
                form.handleSubmit(onSubmit)(e)
              }
            }}
            className="space-y-4"
          >
            <Tabs defaultValue="basic" value={activeTab} onValueChange={handleTabChange} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-4">
                <TabsTrigger value="basic" className="flex items-center gap-1 text-sm">
                  <BookOpen className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Basic Info</span>
                  <span className="sm:hidden">Basic</span>
                </TabsTrigger>
                <TabsTrigger value="teaching" className="flex items-center gap-1 text-sm">
                  <Lightbulb className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Teaching Strategy</span>
                  <span className="sm:hidden">Strategy</span>
                </TabsTrigger>
                <TabsTrigger value="additional" className="flex items-center gap-1 text-sm">
                  <Info className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Additional Details</span>
                  <span className="sm:hidden">Details</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="basic" className="animate-fade-in">
                <div className="form-section space-y-3">
                  <h3 className="form-section-title flex items-center gap-2 mb-2 text-base font-medium">
                    <BookOpen className="h-4 w-4" />
                    Basic Information
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Subject <span className="text-red-500">*</span>
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background" id="subject">
                                <SelectValue placeholder="Select a subject" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="mathematics">Mathematics</SelectItem>
                              <SelectItem value="science">Science</SelectItem>
                              <SelectItem value="english">English Language Arts</SelectItem>
                              <SelectItem value="socialstudies">Social Studies</SelectItem>
                              <SelectItem value="art">Art</SelectItem>
                              <SelectItem value="music">Music</SelectItem>
                              <SelectItem value="physicaleducation">Physical Education</SelectItem>
                              <SelectItem value="technology">Technology</SelectItem>
                              <SelectItem value="foreignlanguage">Foreign Language</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="gradeLevel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Grade Level <span className="text-red-500">*</span>
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background">
                                <SelectValue placeholder="Select a grade" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="K">K</SelectItem>
                              <SelectItem value="1">1</SelectItem>
                              <SelectItem value="2">2</SelectItem>
                              <SelectItem value="3">3</SelectItem>
                              <SelectItem value="4">4</SelectItem>
                              <SelectItem value="5">5</SelectItem>
                              <SelectItem value="6">6</SelectItem>
                              <SelectItem value="7">7</SelectItem>
                              <SelectItem value="8">8</SelectItem>
                              <SelectItem value="9">9</SelectItem>
                              <SelectItem value="10">10</SelectItem>
                              <SelectItem value="11">11</SelectItem>
                              <SelectItem value="12">12</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="topic"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Topic <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Enter topic" className="bg-background" {...field} id="topic" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="learningOutcomes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Learning Outcomes <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter learning outcomes"
                            className="resize-none bg-background min-h-[80px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-xs">
                          What students should know or be able to do by the end of the lesson
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid gap-3 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="studentCount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-1">
                            <Users className="h-3.5 w-3.5" />
                            Student Count <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Enter student count"
                              className="bg-background"
                              {...field}
                              onChange={(e) => field.onChange(Number.parseInt(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="duration"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            Duration (minutes) <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Enter duration in minutes"
                              className="bg-background"
                              {...field}
                              onChange={(e) => field.onChange(Number.parseInt(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="teaching" className="animate-fade-in">
                <div className="form-section space-y-3">
                  <h3 className="form-section-title flex items-center gap-2 mb-2 text-base font-medium">
                    <Lightbulb className="h-4 w-4" />
                    Teaching Strategy
                  </h3>
                  <FormField
                    control={form.control}
                    name="pedagogicalStrategy"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center gap-2">
                          <FormLabel className="flex-grow">
                            Pedagogical Strategy <span className="text-red-500">*</span>
                          </FormLabel>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => setIsModalOpen(true)}
                            aria-label="View pedagogical strategy information"
                          >
                            <HelpCircle className="h-4 w-4" />
                          </Button>
                          <PedagogicalStrategyModal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            strategyId={selectedStrategy}
                          />
                        </div>
                        <Select
                          onValueChange={(value) => {
                            field.onChange(value)
                            setSelectedStrategy(value)
                          }}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-background">
                              <SelectValue placeholder="Select a teaching strategy" />
                            </SelectTrigger>
                          </FormControl>
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
                            <SelectItem value="culturally-responsive-teaching">
                              Culturally Responsive Teaching
                            </SelectItem>
                            <SelectItem value="universal-design-for-learning">Universal Design for Learning</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription className="text-xs">
                          Select a teaching strategy that will guide the structure and activities of your lesson plan.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="learningStyles"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1">
                          <Palette className="h-3.5 w-3.5" />
                          Learning Styles <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., Visual, Auditory, Kinesthetic"
                            className="bg-background"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-xs">
                          Different ways students prefer to learn (e.g., visual, auditory, kinesthetic)
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="materials"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1">
                          <Package className="h-3.5 w-3.5" />
                          Materials <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., Textbooks, Worksheets, Digital Tools"
                            className="bg-background"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-xs">Resources needed for the lesson</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="prerequisiteSkills"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1">
                          <BookMarked className="h-3.5 w-3.5" />
                          Prerequisite Skills <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., Basic Arithmetic, Reading Comprehension"
                            className="bg-background"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-xs">
                          Skills students should already have before this lesson
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </TabsContent>

              <TabsContent value="additional" className="animate-fade-in">
                <div className="form-section space-y-3">
                  <h3 className="form-section-title flex items-center gap-2 mb-2 text-base font-medium">
                    <Info className="h-4 w-4" />
                    Additional Details
                  </h3>

                  {/* Special Needs Modal Controller with proper props */}
                  <div className="mb-2">
                    <SpecialNeedsModalController selectedNeeds={selectedNeeds} onNeedsChange={handleNeedsChange} />
                  </div>

                  <FormField
                    control={form.control}
                    name="specialNeeds"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-3 bg-background">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} id="specialNeeds" />
                        </FormControl>
                        <div className="space-y-0.5">
                          <FormLabel htmlFor="specialNeeds">Special Needs</FormLabel>
                          <FormDescription className="text-xs">
                            Check if there are students with special needs.
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                  {form.watch("specialNeeds") && (
                    <FormField
                      control={form.control}
                      name="specialNeedsDetails"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Special Needs Details</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Enter details about special needs"
                              className="resize-none bg-background min-h-[80px]"
                              {...field}
                              id="special_needs"
                            />
                          </FormControl>
                          <FormDescription className="text-xs">
                            Describe the specific needs and accommodations required
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                  <FormField
                    control={form.control}
                    name="additionalInstructions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Instructions</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Any other specific requirements or notes for this lesson plan"
                            className="resize-none bg-background min-h-[80px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="referenceUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Reference URL</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Optional: Link to curriculum standards or resources"
                            className="bg-background"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t">
              {activeTab !== "basic" && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleTabChange(activeTab === "teaching" ? "basic" : "teaching")}
                  size="sm"
                >
                  Previous
                </Button>
              )}

              {activeTab !== "additional" ? (
                <Button
                  type="button"
                  className="btn-primary"
                  onClick={() => handleTabChange(activeTab === "basic" ? "teaching" : "additional")}
                  size="sm"
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="button"
                  className="btn-primary"
                  disabled={isLoading}
                  size="sm"
                  onClick={handleGenerateClick} // Use the new handler instead of form submission
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-3.5 w-3.5 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    "Generate Lesson Plan"
                  )}
                </Button>
              )}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
