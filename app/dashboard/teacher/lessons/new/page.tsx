"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { CalendarIcon, Plus, Trash2, Wand2, Loader2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function NewLesson() {
  const { toast } = useToast()
  const [date, setDate] = useState<Date>()
  const [isGenerating, setIsGenerating] = useState(false)
  const [objectives, setObjectives] = useState<string[]>([
    "Students will be able to identify fractions in real-world contexts",
    "Students will be able to represent fractions using visual models",
    "Students will be able to compare fractions with like denominators",
  ])
  const [newObjective, setNewObjective] = useState("")

  const handleAddObjective = () => {
    if (newObjective.trim()) {
      setObjectives([...objectives, newObjective.trim()])
      setNewObjective("")
    }
  }

  const handleRemoveObjective = (index: number) => {
    setObjectives(objectives.filter((_, i) => i !== index))
  }

  const handleGenerateWithAI = () => {
    setIsGenerating(true)

    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false)
      toast({
        title: "AI-Generated Content Added",
        description: "Lesson objectives and content have been generated based on curriculum standards.",
      })

      // Update with AI-generated content
      setObjectives([
        "Students will be able to identify fractions in real-world contexts",
        "Students will be able to represent fractions using visual models",
        "Students will be able to compare fractions with like denominators",
        "Students will be able to order fractions with like denominators",
        "Students will be able to solve simple word problems involving fractions",
      ])
    }, 2000)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Create New Lesson</h1>
        <p className="text-muted-foreground">Plan and create a new lesson for your class.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-6">
        <Card className="md:col-span-4">
          <CardHeader>
            <CardTitle>Lesson Details</CardTitle>
            <CardDescription>Enter the basic information for your lesson.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Lesson Title</Label>
              <Input
                id="title"
                placeholder="e.g., Introduction to Fractions"
                defaultValue="Introduction to Fractions"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="grade">Grade Level</Label>
                <Select defaultValue="3">
                  <SelectTrigger id="grade">
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Grade 1</SelectItem>
                    <SelectItem value="2">Grade 2</SelectItem>
                    <SelectItem value="3">Grade 3</SelectItem>
                    <SelectItem value="4">Grade 4</SelectItem>
                    <SelectItem value="5">Grade 5</SelectItem>
                    <SelectItem value="6">Grade 6</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select defaultValue="mathematics">
                  <SelectTrigger id="subject">
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mathematics">Mathematics</SelectItem>
                    <SelectItem value="science">Science</SelectItem>
                    <SelectItem value="language-arts">Language Arts</SelectItem>
                    <SelectItem value="social-studies">Social Studies</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Duration (minutes)</Label>
                <Input id="duration" type="number" defaultValue="45" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Brief description of the lesson"
                className="min-h-[100px]"
                defaultValue="An introduction to fractions for Grade 3 students. This lesson will cover basic fraction concepts, visual representations, and simple comparisons."
              />
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>AI Assistance</CardTitle>
            <CardDescription>Use AI to help generate lesson content.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="ai-prompt">AI Prompt</Label>
              <Textarea
                id="ai-prompt"
                placeholder="Describe what you want the AI to generate"
                className="min-h-[100px]"
                defaultValue="Generate lesson objectives and content for a Grade 3 introduction to fractions lesson. Include activities for visual representations and comparing fractions with like denominators."
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={handleGenerateWithAI} disabled={isGenerating}>
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-4 w-4" />
                  Generate with AI
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="objectives" className="space-y-4">
        <TabsList>
          <TabsTrigger value="objectives">Learning Objectives</TabsTrigger>
          <TabsTrigger value="content">Lesson Content</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="assessment">Assessment</TabsTrigger>
        </TabsList>

        <TabsContent value="objectives" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Learning Objectives</CardTitle>
              <CardDescription>Define what students will learn from this lesson.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                {objectives.map((objective, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Checkbox id={`objective-${index}`} defaultChecked />
                    <div className="grid gap-1.5 w-full">
                      <Label
                        htmlFor={`objective-${index}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {objective}
                      </Label>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => handleRemoveObjective(index)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <Input
                  placeholder="Add a new learning objective"
                  value={newObjective}
                  onChange={(e) => setNewObjective(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleAddObjective()
                    }
                  }}
                />
                <Button onClick={handleAddObjective}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Lesson Content</CardTitle>
              <CardDescription>Structure your lesson with introduction, activities, and conclusion.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="introduction">Introduction (10 minutes)</Label>
                <Textarea
                  id="introduction"
                  placeholder="How will you introduce the lesson?"
                  className="min-h-[100px]"
                  defaultValue="Begin by showing students real-world examples of fractions (pizza slices, pie charts, etc.). Ask students where they have seen fractions in their daily lives. Introduce the concept of fractions as parts of a whole."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="main-activity">Main Activity (25 minutes)</Label>
                <Textarea
                  id="main-activity"
                  placeholder="Describe the main learning activities"
                  className="min-h-[100px]"
                  defaultValue="1. Demonstrate fraction representation using visual models (fraction circles, number lines).\n2. Guide students in creating their own visual representations of fractions.\n3. Introduce comparing fractions with like denominators using visual models.\n4. Have students work in pairs to compare and order fractions with like denominators."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="conclusion">Conclusion (10 minutes)</Label>
                <Textarea
                  id="conclusion"
                  placeholder="How will you conclude the lesson?"
                  className="min-h-[100px]"
                  defaultValue="Review the key concepts learned. Have students share one thing they learned about fractions. Assign a simple homework activity where students identify fractions in their home environment."
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Resources</CardTitle>
              <CardDescription>Add materials and resources needed for the lesson.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Teacher Resources</Label>
                <div className="space-y-2">
                  {["Fraction circle manipulatives", "Fraction wall poster", "Digital presentation slides"].map(
                    (resource, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Checkbox id={`teacher-resource-${index}`} defaultChecked />
                        <Label htmlFor={`teacher-resource-${index}`}>{resource}</Label>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Student Materials</Label>
                <div className="space-y-2">
                  {["Fraction worksheets", "Colored pencils", "Scissors", "Fraction strips"].map((material, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Checkbox id={`student-material-${index}`} defaultChecked />
                      <Label htmlFor={`student-material-${index}`}>{material}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additional-resources">Additional Resources</Label>
                <Textarea
                  id="additional-resources"
                  placeholder="List any additional resources or links"
                  className="min-h-[100px]"
                  defaultValue="- Interactive fraction game: https://www.fractiongames.com\n- Video: 'Introduction to Fractions for Kids'\n- Printable fraction cards"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assessment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Assessment</CardTitle>
              <CardDescription>Define how you will assess student understanding.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="formative-assessment">Formative Assessment</Label>
                <Textarea
                  id="formative-assessment"
                  placeholder="How will you assess during the lesson?"
                  className="min-h-[100px]"
                  defaultValue="- Observe students as they create visual representations of fractions\n- Ask questions during the lesson to check understanding\n- Monitor pair work during comparison activities"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="summative-assessment">Summative Assessment</Label>
                <Textarea
                  id="summative-assessment"
                  placeholder="How will you assess after the lesson?"
                  className="min-h-[100px]"
                  defaultValue="- Exit ticket: Students will identify, represent, and compare 3 different fractions\n- Homework assignment: Identify fractions in home environment\n- End-of-unit quiz (to be given after several lessons)"
                />
              </div>

              <div className="space-y-2">
                <Label>Differentiation</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Textarea
                    placeholder="Support for struggling students"
                    className="min-h-[100px]"
                    defaultValue="- Provide pre-cut fraction circles\n- Use simpler fractions (halves, quarters)\n- Pair with supportive peers\n- Provide visual reference sheet"
                  />
                  <Textarea
                    placeholder="Extension for advanced students"
                    className="min-h-[100px]"
                    defaultValue="- Compare fractions with unlike denominators\n- Create word problems involving fractions\n- Introduce equivalent fractions\n- Begin exploring addition of fractions"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end gap-2">
        <Button variant="outline">Save as Draft</Button>
        <Button>Publish Lesson</Button>
      </div>
    </div>
  )
}
