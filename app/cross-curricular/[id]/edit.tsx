"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MultiSelect } from "@/components/ui/multi-select"
import { saveCrossCurricularPlan, getCrossCurricularPlanById } from "@/app/actions/cross-curricular-plans"
import { toast } from "sonner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { safeArrayProcessor } from "@/lib/safeArrayProcessor"

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  theme: z.string().min(1, "Theme is required"),
  grade_range: z.string().min(1, "Grade range is required"),
  subjects: z.array(z.string()).min(2, "At least 2 subjects are required"),
  duration: z.string().min(1, "Duration is required"),
  sessions: z.string().min(1, "Number of sessions is required"),
  learning_styles: z.array(z.string()).optional(),
  multiple_intelligences: z.array(z.string()).optional(),
  special_needs: z.boolean().optional(),
  special_needs_details: z.string().optional(),
  ell_support: z.boolean().optional(),
  gifted_extension: z.boolean().optional(),
  pedagogical_strategy: z.string().optional(),
  assessment_strategy: z.string().optional(),
  technology_integration: z.boolean().optional(),
  additional_instructions: z.string().optional(),
})

const subjects = [
  { value: "mathematics", label: "Mathematics" },
  { value: "science", label: "Science" },
  { value: "english", label: "English Language Arts" },
  { value: "socialstudies", label: "Social Studies" },
  { value: "art", label: "Art" },
  { value: "music", label: "Music" },
  { value: "physicaleducation", label: "Physical Education" },
  { value: "technology", label: "Technology" },
]

const gradeRanges = [
  { value: "k-2", label: "K-2" },
  { value: "3-5", label: "3-5" },
  { value: "6-8", label: "6-8" },
  { value: "9-12", label: "9-12" },
]

const learningStyles = [
  { value: "visual", label: "Visual" },
  { value: "auditory", label: "Auditory" },
  { value: "kinesthetic", label: "Kinesthetic" },
  { value: "reading_writing", label: "Reading/Writing" },
]

const multipleIntelligences = [
  { value: "linguistic", label: "Linguistic" },
  { value: "logical_mathematical", label: "Logical-Mathematical" },
  { value: "spatial", label: "Spatial" },
  { value: "bodily_kinesthetic", label: "Bodily-Kinesthetic" },
  { value: "musical", label: "Musical" },
  { value: "interpersonal", label: "Interpersonal" },
  { value: "intrapersonal", label: "Intrapersonal" },
  { value: "naturalistic", label: "Naturalistic" },
]

const pedagogicalStrategies = [
  { value: "project_based", label: "Project-Based Learning" },
  { value: "inquiry_based", label: "Inquiry-Based Learning" },
  { value: "cooperative_learning", label: "Cooperative Learning" },
  { value: "problem_based", label: "Problem-Based Learning" },
  { value: "design_thinking", label: "Design Thinking" },
]

const assessmentStrategies = [
  { value: "performance_based", label: "Performance-Based Assessment" },
  { value: "portfolio", label: "Portfolio Assessment" },
  { value: "rubric_based", label: "Rubric-Based Assessment" },
  { value: "peer_assessment", label: "Peer Assessment" },
  { value: "self_assessment", label: "Self-Assessment" },
]

export default function EditCrossCurricularPlan({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("basic")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      theme: "",
      grade_range: "",
      subjects: [],
      duration: "",
      sessions: "1",
      learning_styles: [],
      multiple_intelligences: [],
      special_needs: false,
      special_needs_details: "",
      ell_support: false,
      gifted_extension: false,
      pedagogical_strategy: "",
      assessment_strategy: "",
      technology_integration: false,
      additional_instructions: "",
    },
  })

  useEffect(() => {
    const fetchPlan = async () => {
      const resolvedParams = await params
      const plan = await getCrossCurricularPlanById(resolvedParams.id)
      if (plan) {
        form.reset({
          title: plan.title,
          theme: plan.theme,
          grade_range: plan.grade_range,
          subjects: safeArrayProcessor(plan.subjects),
          duration: (plan as any).duration || "",
          sessions: plan.sessions || "1",
          learning_styles: safeArrayProcessor(plan.learning_styles),
          multiple_intelligences: safeArrayProcessor(plan.multiple_intelligences),
          special_needs: plan.special_needs || false,
          special_needs_details: plan.special_needs_details || "",
          ell_support: plan.ell_support || false,
          gifted_extension: plan.gifted_extension || false,
          pedagogical_strategy: plan.pedagogical_strategy || "",
          assessment_strategy: plan.assessment_strategy || "",
          technology_integration: plan.technology_integration || false,
          additional_instructions: plan.additional_instructions || "",
        })
      }
      setIsLoading(false)
    }
    fetchPlan()
  }, [params, form])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const resolvedParams = await params
      const savedPlan = await saveCrossCurricularPlan({
        ...values,
        id: resolvedParams.id,
      })

      if (savedPlan.success) {
        toast.success("Cross-curricular plan updated successfully!")
        router.push(`/cross-curricular/${savedPlan.data.id}/view`)
      } else {
        throw new Error(savedPlan.error || "Failed to update plan")
      }
    } catch (error) {
      console.error("Error:", error)
      toast.error("Failed to update cross-curricular plan")
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="basic">Basic Information</TabsTrigger>
          <TabsTrigger value="learning">Learning Profile</TabsTrigger>
          <TabsTrigger value="advanced">Advanced Options</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Edit the core details for your cross-curricular plan</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Enter a creative, engaging title"
                  {...form.register("title")}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="theme">Overarching Theme</Label>
                <Input
                  id="theme"
                  placeholder="Enter the central connecting theme"
                  {...form.register("theme")}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="grade_range">Grade Range</Label>
                <Select onValueChange={(value) => form.setValue("grade_range", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select grade range" />
                  </SelectTrigger>
                  <SelectContent>
                    {gradeRanges.map((range) => (
                      <SelectItem key={range.value} value={range.value}>
                        {range.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subjects">Integrated Subjects</Label>
                <MultiSelect
                  options={subjects}
                  value={form.watch("subjects")}
                  onChange={(value) => form.setValue("subjects", value)}
                  placeholder="Select at least 2 subjects"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration (minutes)</Label>
                  <Input
                    id="duration"
                    type="number"
                    placeholder="Total duration"
                    {...form.register("duration")}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sessions">Number of Sessions</Label>
                  <Input
                    id="sessions"
                    type="number"
                    placeholder="Number of sessions"
                    {...form.register("sessions")}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="learning" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Learning Profile</CardTitle>
              <CardDescription>Specify learning styles and student needs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Learning Styles</Label>
                <MultiSelect
                  options={learningStyles}
                  value={form.watch("learning_styles") || []}
                  onChange={(value) => form.setValue("learning_styles", value)}
                  placeholder="Select learning styles to address"
                />
              </div>

              <div className="space-y-2">
                <Label>Multiple Intelligences</Label>
                <MultiSelect
                  options={multipleIntelligences}
                  value={form.watch("multiple_intelligences") || []}
                  onChange={(value) => form.setValue("multiple_intelligences", value)}
                  placeholder="Select intelligences to address"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="special_needs"
                    checked={form.watch("special_needs")}
                    onCheckedChange={(checked) => {
                      form.setValue("special_needs", checked as boolean)
                    }}
                  />
                  <Label htmlFor="special_needs">Include Special Needs Accommodations</Label>
                </div>

                {form.watch("special_needs") && (
                  <div className="space-y-2">
                    <Label htmlFor="special_needs_details">Special Needs Details</Label>
                    <Textarea
                      id="special_needs_details"
                      placeholder="Describe specific accommodations needed"
                      {...form.register("special_needs_details")}
                    />
                  </div>
                )}

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="ell_support"
                    checked={form.watch("ell_support")}
                    onCheckedChange={(checked) => {
                      form.setValue("ell_support", checked as boolean)
                    }}
                  />
                  <Label htmlFor="ell_support">Include ELL Support Strategies</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="gifted_extension"
                    checked={form.watch("gifted_extension")}
                    onCheckedChange={(checked) => {
                      form.setValue("gifted_extension", checked as boolean)
                    }}
                  />
                  <Label htmlFor="gifted_extension">Include Gifted & Talented Extensions</Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Advanced Options</CardTitle>
              <CardDescription>Specify additional teaching strategies and requirements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="pedagogical_strategy">Pedagogical Strategy</Label>
                <Select onValueChange={(value) => form.setValue("pedagogical_strategy", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select teaching approach" />
                  </SelectTrigger>
                  <SelectContent>
                    {pedagogicalStrategies.map((strategy) => (
                      <SelectItem key={strategy.value} value={strategy.value}>
                        {strategy.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="assessment_strategy">Assessment Strategy</Label>
                <Select onValueChange={(value) => form.setValue("assessment_strategy", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select assessment approach" />
                  </SelectTrigger>
                  <SelectContent>
                    {assessmentStrategies.map((strategy) => (
                      <SelectItem key={strategy.value} value={strategy.value}>
                        {strategy.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="technology_integration"
                  checked={form.watch("technology_integration")}
                  onCheckedChange={(checked) => {
                    form.setValue("technology_integration", checked as boolean)
                  }}
                />
                <Label htmlFor="technology_integration">Include Technology Integration</Label>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additional_instructions">Additional Instructions</Label>
                <Textarea
                  id="additional_instructions"
                  placeholder="Enter any additional requirements or preferences"
                  {...form.register("additional_instructions")}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Updating..." : "Update Cross-Curricular Plan"}
        </Button>
      </div>
    </form>
  )
} 