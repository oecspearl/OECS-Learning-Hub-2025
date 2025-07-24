"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"
import { generateLessonPlan } from "@/app/actions/lesson-plans"
import { SpecialNeedsModalController } from "./special-needs-modal-controller"
import { PedagogicalStrategyInfo } from "./pedagogical-strategy-info"
import { saveLessonPlan } from "@/app/actions/lesson-plans"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2, BookOpen, Users, Clock, Lightbulb, Palette, Package, BookMarked, Info } from "lucide-react"

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

// Export the type definition for use in other components
export type LessonPlanFormValues = z.infer<typeof formSchema>

export function PlannerForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [selectedStrategy, setSelectedStrategy] = useState("")
  const [activeTab, setActiveTab] = useState("basic")

  const { toast } = useToast()

  // Initialize the form using react-hook-form with explicit type
  const form = useForm<LessonPlanFormValues>({
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
  })

  // Function to handle form submission
  async function onSubmit(values: LessonPlanFormValues) {
    try {
      setIsLoading(true)

      // Generate the lesson plan
      const result = await generateLessonPlan(values)

      if (!result.success || !result.lessonPlan) {
        throw new Error(result.error || "Failed to generate lesson plan")
      }

      const lessonPlan = result.lessonPlan

      // Create FormData for saving
      const formData = new FormData()
      formData.append("title", `${values.subject} Lesson: ${values.topic}`)
      formData.append("subject", values.subject)
      formData.append("grade_level", values.gradeLevel) // Changed from gradeLevel to grade_level
      formData.append("topic", values.topic)
      formData.append("content", lessonPlan)
      formData.append("lesson_content", lessonPlan) // Add lesson_content field
      formData.append("duration_minutes", "50") // Add duration_minutes field
      formData.append("pedagogicalStrategy", values.pedagogicalStrategy)
      formData.append("specialNeeds", values.specialNeeds.toString())
      formData.append("specialNeedsDetails", values.specialNeedsDetails || "")

      // Save to database
      const saveResult = await saveLessonPlan(formData)

      if (!saveResult.success) {
        throw new Error(saveResult.error || "Failed to save lesson plan")
      }

      // Manually dispatch the event to update the UI
      const event = new CustomEvent("lessonPlanGenerated", {
        detail: {
          lessonPlan,
          specialNeeds: values.specialNeeds
            ? values.specialNeedsDetails?.split(",").map((need) => need.trim()) || []
            : [],
          subject: values.subject,
          gradeLevel: values.gradeLevel,
          topic: values.topic,
        },
      })
      window.dispatchEvent(event)

      toast({
        title: "Lesson plan generated and saved",
        description: "Your lesson plan has been generated and saved to your account.",
      })
    } catch (error) {
      console.error(error)
      toast({
        title: "Error generating lesson plan",
        description:
          error instanceof Error ? error.message : "There was an error generating your lesson plan. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="shadow-md animate-fade-in">
      <CardHeader className="bg-muted/30 border-b">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold text-primary">Create Lesson Plan</CardTitle>
            <CardDescription>Fill in the details to generate a personalized lesson plan</CardDescription>
          </div>
          <SpecialNeedsModalController form={form} />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Tabs defaultValue="basic" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="basic" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span className="hidden sm:inline">Basic Info</span>
                  <span className="sm:hidden">Basic</span>
                </TabsTrigger>
                <TabsTrigger value="teaching" className="flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  <span className="hidden sm:inline">Teaching Strategy</span>
                  <span className="sm:hidden">Strategy</span>
                </TabsTrigger>
                <TabsTrigger value="additional" className="flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  <span className="hidden sm:inline">Additional Details</span>
                  <span className="sm:hidden">Details</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="basic" className="animate-fade-in">
                <div className="form-section">
                  <h3 className="form-section-title flex items-center gap-2 mb-4">
                    <BookOpen className="h-5 w-5" />
                    Basic Information
                  </h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background">
                                <SelectValue placeholder="Select a subject" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                          <SelectItem value="mathematics">Mathematics</SelectItem>
            <SelectItem value="science">Science</SelectItem>
            <SelectItem value="language-arts">Language Arts</SelectItem>
            <SelectItem value="social-studies">Social Studies</SelectItem>
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
                          <FormLabel>Grade Level</FormLabel>
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
                        <FormLabel>Topic</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter topic" className="bg-background" {...field} />
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
                        <FormLabel>Learning Outcomes</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter learning outcomes"
                            className="resize-none bg-background min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          What students should know or be able to do by the end of the lesson
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="studentCount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            Student Count
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
                          <FormLabel className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            Duration (minutes)
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
                <div className="form-section">
                  <h3 className="form-section-title flex items-center gap-2 mb-4">
                    <Lightbulb className="h-5 w-5" />
                    Teaching Strategy
                  </h3>
                  <FormField
                    control={form.control}
                    name="pedagogicalStrategy"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center">
                          Pedagogical Strategy
                          {selectedStrategy && <PedagogicalStrategyInfo strategyId={selectedStrategy} />}
                        </FormLabel>
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
                        <FormDescription>
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
                        <FormLabel className="flex items-center gap-2">
                          <Palette className="h-4 w-4" />
                          Learning Styles
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., Visual, Auditory, Kinesthetic"
                            className="bg-background"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
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
                        <FormLabel className="flex items-center gap-2">
                          <Package className="h-4 w-4" />
                          Materials
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., Textbooks, Worksheets, Digital Tools"
                            className="bg-background"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>Resources needed for the lesson</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="prerequisiteSkills"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <BookMarked className="h-4 w-4" />
                          Prerequisite Skills
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., Basic Arithmetic, Reading Comprehension"
                            className="bg-background"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>Skills students should already have before this lesson</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </TabsContent>

              <TabsContent value="additional" className="animate-fade-in">
                <div className="form-section">
                  <h3 className="form-section-title flex items-center gap-2 mb-4">
                    <Info className="h-5 w-5" />
                    Additional Details
                  </h3>
                  <FormField
                    control={form.control}
                    name="specialNeeds"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4 bg-background">
                        <FormControl>
                          <input
                            type="checkbox"
                            checked={field.value}
                            onChange={(e) => field.onChange(e.target.checked)}
                            className="h-4 w-4"
                          />
                        </FormControl>
                        <div className="space-y-0.5">
                          <FormLabel>Special Needs</FormLabel>
                          <FormDescription>Check if there are students with special needs.</FormDescription>
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
                              className="resize-none bg-background min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>Describe the specific needs and accommodations required</FormDescription>
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
                            className="resize-none bg-background min-h-[100px]"
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

            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
              {activeTab !== "basic" && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setActiveTab(activeTab === "teaching" ? "basic" : "teaching")}
                >
                  Previous
                </Button>
              )}

              {activeTab !== "additional" ? (
                <Button
                  type="button"
                  className="btn-primary"
                  onClick={() => setActiveTab(activeTab === "basic" ? "teaching" : "additional")}
                >
                  Next
                </Button>
              ) : (
                <Button type="submit" className="btn-primary" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
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