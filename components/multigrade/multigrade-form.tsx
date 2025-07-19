"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, type SubmitHandler } from "react-hook-form"
import * as z from "zod"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/components/ui/use-toast"
import { generateMultigradeLessonPlan, saveMultigradePlan } from "@/app/actions/multigrade-plans"
import { Loader2, BookOpen, Users, Clock, Package, Info, Sparkles } from "lucide-react"

const formSchema = z.object({
  title: z.string().optional(),
  subject: z.string().min(2, "Subject must be at least 2 characters."),
  gradeRange: z.string().min(1, "Please select a grade range."),
  topic: z.string().min(2, "Topic must be at least 2 characters."),
  duration: z.string().optional(),
  materials: z.string().optional(),
  pedagogicalStrategy: z.string().optional(),
  differentiationStrategies: z.array(z.string()).optional(),
  groupingStrategy: z.string().optional(),
  assessmentApproach: z.string().optional(),
  learningOutcomes: z.string().min(10, "Learning outcomes must be at least 10 characters."),
  specialNeeds: z.boolean().default(false),
  specialNeedsDetails: z.string().optional(),
  additionalInstructions: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

const differentiationOptions = [
  { id: "content", label: "Content Differentiation", description: "Vary what students learn" },
  { id: "process", label: "Process Differentiation", description: "Vary how students learn" },
  { id: "product", label: "Product Differentiation", description: "Vary how students show learning" },
  { id: "learning-environment", label: "Learning Environment", description: "Vary the classroom setup" },
  { id: "tiered-assignments", label: "Tiered Assignments", description: "Multiple levels of difficulty" },
  { id: "flexible-grouping", label: "Flexible Grouping", description: "Dynamic group formations" },
]

export function MultigradeForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("basic")
  const [selectedDifferentiation, setSelectedDifferentiation] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      subject: "",
      gradeRange: "",
      topic: "",
      duration: "60",
      materials: "",
      pedagogicalStrategy: "",
      differentiationStrategies: [],
      groupingStrategy: "",
      assessmentApproach: "",
      learningOutcomes: "",
      specialNeeds: false,
      specialNeedsDetails: "",
      additionalInstructions: "",
    },
  })

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    try {
      console.log("Form submitted with values:", values)
      setIsLoading(true)
      setError(null)

      // Validate required fields
      if (!values.subject || !values.gradeRange || !values.topic) {
        throw new Error("Please fill in all required fields: Subject, Grade Range, and Topic")
      }

      const lessonPlan = await generateMultigradeLessonPlan(values)
      console.log("Generated lesson plan:", lessonPlan)

      // Save the generated plan
      const saveResult = await saveMultigradePlan(values, lessonPlan)
      console.log("Saved plan result:", saveResult)

      // Dispatch event with the generated content
      const event = new CustomEvent("multigradePlanGenerated", {
        detail: {
          content: lessonPlan,
          metadata: values,
          planId: saveResult.id
        },
      })
      window.dispatchEvent(event)

      toast({
        title: "Multigrade lesson plan generated",
        description: "Your lesson plan has been generated and saved successfully.",
      })
    } catch (err) {
      console.error("Error generating lesson plan:", err)
      setError(err instanceof Error ? err.message : "Failed to generate lesson plan")
      toast({
        title: "Error",
        description: err instanceof Error ? err.message : "Failed to generate lesson plan",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleDifferentiationChange = (strategyId: string, checked: boolean) => {
    let newSelection = [...selectedDifferentiation]
    if (checked) {
      newSelection.push(strategyId)
    } else {
      newSelection = newSelection.filter((id) => id !== strategyId)
    }
    setSelectedDifferentiation(newSelection)
    form.setValue("differentiationStrategies", newSelection)
  }

  return (
    <Card className="shadow-md animate-fade-in w-full">
      <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 border-b py-4 px-6">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-bold text-green-800">Create Multigrade Lesson Plan</CardTitle>
            <CardDescription className="text-green-600">
              Design a lesson that addresses multiple grade levels simultaneously
            </CardDescription>
          </div>
          <div className="p-2 bg-green-600 rounded-lg">
            <Users className="h-5 w-5 text-white" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="basic" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Basic Info
                </TabsTrigger>
                <TabsTrigger value="multigrade" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Multigrade Strategy
                </TabsTrigger>
                <TabsTrigger value="additional" className="flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  Additional Details
                </TabsTrigger>
              </TabsList>

              <TabsContent value="basic" className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
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
                            <SelectTrigger>
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="mathematics">Mathematics</SelectItem>
                            <SelectItem value="science">Science</SelectItem>
                            <SelectItem value="english">English Language Arts</SelectItem>
                            <SelectItem value="social-studies">Social Studies</SelectItem>
                            <SelectItem value="art">Art</SelectItem>
                            <SelectItem value="music">Music</SelectItem>
                            <SelectItem value="physical-education">Physical Education</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="gradeRange"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Grade Range <span className="text-red-500">*</span>
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select grade range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="K-2">Kindergarten - Grade 2</SelectItem>
                            <SelectItem value="1-3">Grade 1 - Grade 3</SelectItem>
                            <SelectItem value="2-4">Grade 2 - Grade 4</SelectItem>
                            <SelectItem value="3-5">Grade 3 - Grade 5</SelectItem>
                            <SelectItem value="4-6">Grade 4 - Grade 6</SelectItem>
                            <SelectItem value="K-6">Kindergarten - Grade 6 (All Primary)</SelectItem>
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
                        <Input placeholder="Enter the lesson topic" {...field} />
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
                          placeholder="Describe what students should achieve across all grade levels"
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>Include outcomes for each grade level in your range</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          Duration (minutes) <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="60"
                            {...field}
                            onChange={(e) => {
                              const value = e.target.value;
                              console.log('Duration input changed:', value);
                              field.onChange(value);
                            }}
                          />
                        </FormControl>
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
                          Materials <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="List required materials" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </TabsContent>

              <TabsContent value="multigrade" className="space-y-6">
                <FormField
                  control={form.control}
                  name="pedagogicalStrategy"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Pedagogical Strategy <span className="text-red-500">*</span>
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a teaching strategy" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="station-rotation">Station Rotation</SelectItem>
                          <SelectItem value="peer-tutoring">Peer Tutoring</SelectItem>
                          <SelectItem value="independent-learning">Independent Learning Centers</SelectItem>
                          <SelectItem value="collaborative-learning">Collaborative Learning</SelectItem>
                          <SelectItem value="inquiry-based">Inquiry-Based Learning</SelectItem>
                          <SelectItem value="project-based">Project-Based Learning</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="differentiationStrategies"
                  render={() => (
                    <FormItem>
                      <FormLabel>
                        Differentiation Strategies <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormDescription>
                        Select strategies to address different grade levels and learning needs
                      </FormDescription>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {differentiationOptions.map((option) => (
                          <div key={option.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                            <Checkbox
                              id={option.id}
                              checked={selectedDifferentiation.includes(option.id)}
                              onCheckedChange={(checked) => handleDifferentiationChange(option.id, checked as boolean)}
                            />
                            <div className="space-y-1">
                              <label
                                htmlFor={option.id}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {option.label}
                              </label>
                              <p className="text-xs text-muted-foreground">{option.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="groupingStrategy"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Grouping Strategy <span className="text-red-500">*</span>
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select grouping approach" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="mixed-ability">Mixed Ability Groups</SelectItem>
                            <SelectItem value="grade-level">Grade Level Groups</SelectItem>
                            <SelectItem value="skill-based">Skill-Based Groups</SelectItem>
                            <SelectItem value="interest-based">Interest-Based Groups</SelectItem>
                            <SelectItem value="flexible">Flexible Grouping</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="assessmentApproach"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Assessment Approach <span className="text-red-500">*</span>
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select assessment method" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="tiered-rubrics">Tiered Rubrics</SelectItem>
                            <SelectItem value="portfolio-based">Portfolio-Based</SelectItem>
                            <SelectItem value="peer-assessment">Peer Assessment</SelectItem>
                            <SelectItem value="self-assessment">Self-Assessment</SelectItem>
                            <SelectItem value="observation-based">Observation-Based</SelectItem>
                            <SelectItem value="choice-boards">Choice Boards</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </TabsContent>

              <TabsContent value="additional" className="space-y-6">
                <FormField
                  control={form.control}
                  name="specialNeeds"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Special Needs Accommodations</FormLabel>
                        <FormDescription>
                          Check if there are students with special needs in any grade level
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
                            placeholder="Describe specific accommodations needed across grade levels"
                            className="min-h-[80px]"
                            {...field}
                          />
                        </FormControl>
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
                          placeholder="Any other specific requirements for this multigrade lesson"
                          className="min-h-[80px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>
            </Tabs>

            <div className="flex justify-between pt-6 border-t">
              {activeTab !== "basic" && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    const tabs = ["basic", "multigrade", "additional"]
                    const currentIndex = tabs.indexOf(activeTab)
                    if (currentIndex > 0) {
                      setActiveTab(tabs[currentIndex - 1])
                    }
                  }}
                >
                  Previous
                </Button>
              )}

              {activeTab !== "additional" ? (
                <Button
                  type="button"
                  className="ml-auto bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                  onClick={() => {
                    const tabs = ["basic", "multigrade", "additional"]
                    const currentIndex = tabs.indexOf(activeTab)
                    if (currentIndex < tabs.length - 1) {
                      setActiveTab(tabs[currentIndex + 1])
                    }
                  }}
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="ml-auto bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Generate Multigrade Plan
                    </>
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
