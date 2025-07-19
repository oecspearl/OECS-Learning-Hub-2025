"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Loader2 } from "lucide-react"
import { testDatabaseConnection } from "@/lib/db"

export default async function CreateLessonPlanPage() {
  // Test database connection
  const connectionTest = await testDatabaseConnection()
  console.log("Database connection test result:", connectionTest)

  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [date, setDate] = useState<Date>()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real application, this would be an API call to save the lesson plan
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Redirect to the planner page
      router.push("/planner")
    } catch (error) {
      console.error("Error creating lesson plan:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Create Lesson Plan</h1>
        <Button asChild variant="outline">
          <Link href="/planner">Cancel</Link>
        </Button>
      </div>

      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Lesson Plan Details</CardTitle>
            <CardDescription>Enter the details for your new lesson plan</CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="Enter lesson plan title" required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select required>
                  <SelectTrigger id="subject">
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="language-arts">Language Arts</SelectItem>
                    <SelectItem value="mathematics">Mathematics</SelectItem>
                    <SelectItem value="science">Science</SelectItem>
                    <SelectItem value="social-studies">Social Studies</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="strand">Strand</Label>
                <Select>
                  <SelectTrigger id="strand">
                    <SelectValue placeholder="Select strand (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="reading-viewing">Reading and Viewing</SelectItem>
                    <SelectItem value="writing-representing">Writing and Representing</SelectItem>
                    <SelectItem value="listening-speaking">Listening and Speaking</SelectItem>
                    <SelectItem value="number-sense">Number Sense</SelectItem>
                    <SelectItem value="patterns-relationships">Patterns and Relationships</SelectItem>
                    <SelectItem value="space-systems">Space Systems</SelectItem>
                    <SelectItem value="historical-cultural-thinking">Historical and Cultural Thinking</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal" id="date">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Select date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Duration (minutes)</Label>
                <Input id="duration" type="number" min="5" step="5" placeholder="45" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="objectives">Learning Objectives</Label>
              <Textarea
                id="objectives"
                placeholder="Enter the learning objectives for this lesson"
                className="min-h-[100px]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="materials">Materials</Label>
              <Textarea
                id="materials"
                placeholder="List the materials needed for this lesson"
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="procedure">Procedure</Label>
              <Textarea
                id="procedure"
                placeholder="Describe the step-by-step procedure for this lesson"
                className="min-h-[200px]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="assessment">Assessment</Label>
              <Textarea
                id="assessment"
                placeholder="Describe how you will assess student learning"
                className="min-h-[100px]"
              />
            </div>
          </CardContent>

          <CardFooter className="flex justify-between">
            <Button type="button" variant="outline" asChild>
              <Link href="/planner">Cancel</Link>
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Save Lesson Plan"
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
