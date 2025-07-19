"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SubjectMatrix } from "./subject-matrix"
import { generateCrossCurricularPlan } from "@/app/actions/generate-cross-curricular-plan"
import { Loader2, Info } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useRouter } from "next/navigation"
import { useParams } from "next/navigation"

const formSchema = z.object({
  title: z.string().optional(),
  gradeLevel: z.string().optional(),
  duration: z.string().optional(),
  integrationModel: z.string().optional(),
  primarySubject: z.string().optional(),
  supportingSubjects: z.string().optional(),
  bigIdea: z.string().optional(),
  primaryObjective: z.string().optional(),
  secondaryObjectives: z.string().optional(),
  keyVocabulary: z.string().optional(),
  standards: z.string().optional(),
  introduction: z.string().optional(),
  coreActivities: z.string().optional(),
  closureActivities: z.string().optional(),
  differentiationStrategies: z.string().optional(),
  assessmentMethods: z.string().optional(),
  materials: z.string().optional(),
  reflectionPrompts: z.string().optional(),
  studentFactsToKnow: z.string().optional(),
  studentSkillsToGain: z.string().optional(),
})

interface CrossCurricularFormProps {
  setGeneratedPlan: (plan: any) => void;
  setActiveTab: (tab: string) => void;
  isGenerating: boolean;
  setIsGenerating: (isGenerating: boolean) => void;
}

export function CrossCurricularForm({ setGeneratedPlan, setActiveTab, isGenerating, setIsGenerating }: CrossCurricularFormProps) {
  const router = useRouter()
  const params = useParams()
  const [formTab, setFormTab] = useState("basic")
  const [error, setError] = useState("")
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      gradeLevel: "",
      duration: "",
      integrationModel: "",
      primarySubject: "",
      supportingSubjects: "",
      bigIdea: "",
      primaryObjective: "",
      secondaryObjectives: "",
      keyVocabulary: "",
      standards: "",
      introduction: "",
      coreActivities: "",
      closureActivities: "",
      differentiationStrategies: "",
      assessmentMethods: "",
      materials: "",
      reflectionPrompts: "",
      studentFactsToKnow: "",
      studentSkillsToGain: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setError("")
      setIsGenerating(true)

      console.log("Form submitted with values:", values)

      // Ensure we have at least some basic information
      if (!values.primarySubject && !values.title) {
        toast({
          title: "Missing information",
          description: "Please provide at least a title or primary subject",
          variant: "destructive",
        })
        setIsGenerating(false)
        return
      }

      // Call the server action to generate the plan
      const plan = await generateCrossCurricularPlan(values)
      console.log("Plan generated:", plan)

      if (!plan || !plan.content) {
        throw new Error("Failed to generate plan content")
      }

      setGeneratedPlan(plan)
      setActiveTab("output")

      toast({
        title: "Success!",
        description: "Your cross-curricular lesson plan has been generated.",
      })
    } catch (error) {
      console.error("Error generating plan:", error)
      setError(error.message || "Failed to generate lesson plan")
      toast({
        title: "Error",
        description: error.message || "Failed to generate lesson plan. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <Card className="border-border">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold text-primary">Cross-Curricular Lesson Planner</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {error && (
          <div className="mb-4 p-3 bg-destructive/10 border border-destructive rounded-md text-destructive text-sm">
            {error}
          </div>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Tabs value={formTab} onValueChange={setFormTab} className="space-y-4">
              <TabsList className="grid grid-cols-6 bg-muted">
                <TabsTrigger
                  value="basic"
                  className="data-[state=active]:bg-background data-[state=active]:text-primary"
                >
                  Basic Info
                </TabsTrigger>
                <TabsTrigger
                  value="subjects"
                  className="data-[state=active]:bg-background data-[state=active]:text-primary"
                >
                  Subjects
                </TabsTrigger>
                <TabsTrigger
                  value="objectives"
                  className="data-[state=active]:bg-background data-[state=active]:text-primary"
                >
                  Objectives
                </TabsTrigger>
                <TabsTrigger
                  value="activities"
                  className="data-[state=active]:bg-background data-[state=active]:text-primary"
                >
                  Activities
                </TabsTrigger>
                <TabsTrigger
                  value="assessment"
                  className="data-[state=active]:bg-background data-[state=active]:text-primary"
                >
                  Assessment
                </TabsTrigger>
                <TabsTrigger
                  value="resources"
                  className="data-[state=active]:bg-background data-[state=active]:text-primary"
                >
                  Resources
                </TabsTrigger>
              </TabsList>

              {/* BASIC INFO TAB */}
              <TabsContent value="basic" className="space-y-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Lesson Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter lesson title" {...field} className="border-input" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="gradeLevel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Grade Level</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-input">
                              <SelectValue placeholder="Select grade level" />
                            </SelectTrigger>
                          </FormControl>
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
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Duration</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., 60 minutes, 2 class periods" {...field} className="border-input" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="bigIdea"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center">
                        <FormLabel className="mr-2">Big Idea / Driving Concept</FormLabel>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="h-4 w-4 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs">
                              <p>
                                The one high-level concept that drives this lesson within the unit. This should be a
                                compelling question or statement.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., Different materials produce different amounts of friction on objects. Which material would be best to stop a runaway truck speeding down a hill?"
                          {...field}
                          className="min-h-[80px] border-input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="integrationModel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Integration Model</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-input">
                            <SelectValue placeholder="Select integration model" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="multidisciplinary">Multidisciplinary</SelectItem>
                          <SelectItem value="interdisciplinary">Interdisciplinary</SelectItem>
                          <SelectItem value="transdisciplinary">Transdisciplinary</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        <ul className="list-disc pl-5 text-xs mt-2">
                          <li>Multidisciplinary: Subjects remain separate but share a common theme</li>
                          <li>Interdisciplinary: Subjects are blended with overlapping concepts and skills</li>
                          <li>Transdisciplinary: Learning transcends subject boundaries around real-world contexts</li>
                        </ul>
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>

              {/* SUBJECTS TAB */}
              <TabsContent value="subjects" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="primarySubject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Primary Subject</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-input">
                              <SelectValue placeholder="Select primary subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="mathematics">Mathematics</SelectItem>
                            <SelectItem value="language_arts">Language Arts</SelectItem>
                            <SelectItem value="science">Science</SelectItem>
                            <SelectItem value="social_studies">Social Studies</SelectItem>
                            <SelectItem value="arts">Arts</SelectItem>
                            <SelectItem value="physical_education">Physical Education</SelectItem>
                            <SelectItem value="technology">Technology</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="supportingSubjects"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Supporting Subjects</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Science, Art, Social Studies" {...field} className="border-input" />
                        </FormControl>
                        <FormDescription>Enter subjects separated by commas</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="standards"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Learning Standards</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter relevant standards from each subject area (e.g., CCSS.ELA-LITERACY.RI.4.7, CCSS.MATH.CONTENT.4.MD.A.1)"
                          {...field}
                          className="min-h-[120px] border-input"
                        />
                      </FormControl>
                      <FormDescription>Include standards from all integrated subject areas</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="mt-4">
                  <FormLabel>Subject Integration Matrix</FormLabel>
                  <SubjectMatrix />
                </div>
              </TabsContent>

              {/* OBJECTIVES TAB */}
              <TabsContent value="objectives" className="space-y-4">
                <FormField
                  control={form.control}
                  name="primaryObjective"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Primary Learning Objective</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter the main learning objective for this lesson"
                          {...field}
                          className="min-h-[80px] border-input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="secondaryObjectives"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Secondary Learning Objectives</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter secondary learning objectives, one per line"
                          {...field}
                          className="min-h-[120px] border-input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="studentFactsToKnow"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center">
                        <FormLabel className="mr-2">Students Will Know (Facts)</FormLabel>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="h-4 w-4 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs">
                              <p>List the key facts and concepts students should know by the end of the lesson.</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., 
1. Friction is a force that opposes motion
2. Moving objects have kinetic energy
3. Objects at rest have potential energy"
                          {...field}
                          className="min-h-[100px] border-input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="studentSkillsToGain"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center">
                        <FormLabel className="mr-2">Students Will Be Skilled At (Actions)</FormLabel>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="h-4 w-4 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs">
                              <p>
                                List the skills and actions students should be able to perform by the end of the lesson.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <FormControl>
                        <Textarea
                          placeholder="e.g.,
1. Developing a bar graph
2. Measuring distances
3. Writing explanatory texts"
                          {...field}
                          className="min-h-[100px] border-input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="keyVocabulary"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Key Vocabulary</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter key vocabulary terms across all subjects, separated by commas"
                          {...field}
                          className="min-h-[80px] border-input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>

              {/* ACTIVITIES TAB */}
              <TabsContent value="activities" className="space-y-4">
                <FormField
                  control={form.control}
                  name="introduction"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Introduction/Hook</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe how you will introduce the lesson and engage students across multiple domains"
                          {...field}
                          className="min-h-[100px] border-input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="coreActivities"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Core Learning Activities</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe the main learning activities that blend subject matter naturally"
                          {...field}
                          className="min-h-[150px] border-input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="closureActivities"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Closure Activities</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe activities that synthesize learning across disciplines"
                          {...field}
                          className="min-h-[100px] border-input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="differentiationStrategies"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Differentiation Strategies</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe strategies for supporting diverse learning needs across subject areas"
                          {...field}
                          className="min-h-[100px] border-input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>

              {/* ASSESSMENT TAB */}
              <TabsContent value="assessment" className="space-y-4">
                <FormField
                  control={form.control}
                  name="assessmentMethods"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Assessment Methods</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe formative and summative assessment methods that evaluate cross-curricular understanding"
                          {...field}
                          className="min-h-[120px] border-input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="p-4 bg-muted/30 rounded-md border border-border">
                  <h3 className="text-sm font-medium mb-2">Expectations for Student Progress</h3>
                  <div className="space-y-2 text-sm">
                    <p className="font-medium">Most children will:</p>
                    <p className="text-muted-foreground ml-4">
                      Describe what most students will achieve by the end of the lesson
                    </p>

                    <p className="font-medium">Some children will not have made so much progress and will:</p>
                    <p className="text-muted-foreground ml-4">Describe minimum expectations for struggling students</p>

                    <p className="font-medium">Some children will have progressed further and will also:</p>
                    <p className="text-muted-foreground ml-4">Describe extended learning for advanced students</p>
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="reflectionPrompts"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Reflection Prompts</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Include prompts for teacher reflection on the effectiveness of cross-curricular integration"
                          {...field}
                          className="min-h-[100px] border-input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>

              {/* RESOURCES TAB */}
              <TabsContent value="resources" className="space-y-4">
                <FormField
                  control={form.control}
                  name="materials"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Materials and Resources</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="List materials needed for each subject component (e.g., hand lenses, collecting nets, posters, reference books)"
                          {...field}
                          className="min-h-[120px] border-input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="p-4 bg-muted/30 rounded-md border border-border">
                  <h3 className="text-sm font-medium mb-2">Suggested Cross-Curricular Connections</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium mb-1">Art Projects</p>
                      <ul className="list-disc pl-5 text-muted-foreground">
                        <li>Visual representations of concepts</li>
                        <li>Creative interpretations of learning</li>
                        <li>Subject-specific art techniques</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Technology Integration</p>
                      <ul className="list-disc pl-5 text-muted-foreground">
                        <li>Digital tools for research</li>
                        <li>Presentation software</li>
                        <li>Data collection and analysis tools</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  if (formTab === "basic") return
                  if (formTab === "subjects") setFormTab("basic")
                  if (formTab === "objectives") setFormTab("subjects")
                  if (formTab === "activities") setFormTab("objectives")
                  if (formTab === "assessment") setFormTab("activities")
                  if (formTab === "resources") setFormTab("assessment")
                }}
                disabled={formTab === "basic"}
                className="border-input"
              >
                Previous
              </Button>

              {formTab !== "resources" ? (
                <Button
                  type="button"
                  onClick={() => {
                    if (formTab === "basic") setFormTab("subjects")
                    if (formTab === "subjects") setFormTab("objectives")
                    if (formTab === "objectives") setFormTab("activities")
                    if (formTab === "activities") setFormTab("assessment")
                    if (formTab === "assessment") setFormTab("resources")
                  }}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isGenerating}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating Plan...
                    </>
                  ) : (
                    "Generate Plan"
                  )}
                </Button>
              )}
            </div>

            <Button type="button" onClick={() => router.push(`/cross-curricular/${params.id}/edit`)}>
              Edit Plan
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
