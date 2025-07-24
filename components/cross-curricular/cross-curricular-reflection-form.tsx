"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { saveCrossCurricularReflection, getCrossCurricularReflection } from "@/app/actions/cross-curricular-reflections"
import { toast } from "sonner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Star } from "lucide-react"

const reflectionSchema = z.object({
  plan_id: z.string().min(1, "Plan ID is required"),
  reflection_notes: z.string().optional(),
  student_engagement: z.string().optional(),
  effectiveness_rating: z.number().min(1).max(5).optional(),
  improvements_needed: z.string().optional(),
  reflection_date: z.string().optional(),
})

interface CrossCurricularReflectionFormProps {
  planId: string
  onReflectionSaved?: () => void
}

export default function CrossCurricularReflectionForm({ planId, onReflectionSaved }: CrossCurricularReflectionFormProps) {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof reflectionSchema>>({
    resolver: zodResolver(reflectionSchema),
    defaultValues: {
      plan_id: planId,
      reflection_notes: "",
      student_engagement: "",
      effectiveness_rating: undefined,
      improvements_needed: "",
      reflection_date: new Date().toISOString().split('T')[0], // Today's date
    },
  })

  async function onSubmit(values: z.infer<typeof reflectionSchema>) {
    try {
      setIsLoading(true)
      const savedReflection = await saveCrossCurricularReflection({
        ...values,
        plan_id: planId,
      })

      if (savedReflection.success) {
        toast.success("Reflection saved successfully!")
        onReflectionSaved?.()
      } else {
        throw new Error(savedReflection.error || "Failed to save reflection")
      }
    } catch (error) {
      console.error("Error:", error)
      toast.error("Failed to save reflection")
    } finally {
      setIsLoading(false)
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 cursor-pointer ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
        onClick={() => form.setValue("effectiveness_rating", i + 1)}
      />
    ))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lesson Reflection</CardTitle>
        <CardDescription>Reflect on how the lesson went and what could be improved</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="reflection_notes">Reflection Notes</Label>
            <Textarea
              id="reflection_notes"
              placeholder="What went well? What challenges did you face?"
              className="min-h-[100px]"
              {...form.register("reflection_notes")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="student_engagement">Student Engagement</Label>
            <Textarea
              id="student_engagement"
              placeholder="How did students engage with the lesson? Were they interested and participating?"
              className="min-h-[100px]"
              {...form.register("student_engagement")}
            />
          </div>

          <div className="space-y-2">
            <Label>Effectiveness Rating</Label>
            <div className="flex items-center space-x-2">
              {renderStars(form.watch("effectiveness_rating") || 0)}
              <span className="ml-2 text-sm text-muted-foreground">
                {form.watch("effectiveness_rating") ? `${form.watch("effectiveness_rating")}/5` : "Click to rate"}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="improvements_needed">Areas for Improvement</Label>
            <Textarea
              id="improvements_needed"
              placeholder="What would you do differently next time?"
              className="min-h-[100px]"
              {...form.register("improvements_needed")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="reflection_date">Reflection Date</Label>
            <Input
              id="reflection_date"
              type="date"
              {...form.register("reflection_date")}
            />
          </div>

          <div className="flex justify-end">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : "Save Reflection"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
} 