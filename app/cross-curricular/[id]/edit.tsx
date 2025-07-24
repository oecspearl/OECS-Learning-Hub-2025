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
import { Label } from "@/components/ui/label"
import { safeArrayProcessor } from "@/lib/safeArrayProcessor"

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  theme: z.string().min(1, "Theme is required"),
  grade_range: z.string().min(1, "Grade range is required"),
  subjects: z.array(z.string()).min(2, "At least 2 subjects are required"),
  duration: z.string().min(1, "Duration is required"),
  sessions: z.string().min(1, "Number of sessions is required"),
  central_problem: z.string().optional(),
  content: z.string().optional(),
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



export default function EditCrossCurricularPlan({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      theme: "",
      grade_range: "",
      subjects: [],
      duration: "",
      sessions: "1",
      central_problem: "",
      content: "",
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
          duration: plan.duration || "",
          sessions: plan.sessions || "1",
          central_problem: plan.description || "",
          content: plan.content || "",
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
      <Card>
        <CardHeader>
          <CardTitle>Edit Cross-Curricular Plan</CardTitle>
          <CardDescription>Update the details for your cross-curricular lesson plan</CardDescription>
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

          <div className="space-y-2">
            <Label htmlFor="central_problem">Central Problem/Theme</Label>
            <Textarea
              id="central_problem"
              placeholder="Describe the central problem or theme that connects the subjects"
              {...form.register("central_problem")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Lesson Content</Label>
            <Textarea
              id="content"
              placeholder="Enter the detailed lesson content"
              className="min-h-[200px]"
              {...form.register("content")}
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Updating..." : "Update Cross-Curricular Plan"}
        </Button>
      </div>
    </form>
  )
} 