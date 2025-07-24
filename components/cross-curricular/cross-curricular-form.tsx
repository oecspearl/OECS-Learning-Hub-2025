"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MultiSelect } from "@/components/ui/multi-select"
import { generateCrossCurricularPlan, saveCrossCurricularPlan } from "@/app/actions/cross-curricular-plans"
import { toast } from "sonner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { HelpCircle, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  theme: z.string().min(1, "Theme is required"),
  central_problem: z.string().min(1, "Central problem/project is required"),
  grade_range: z.string().min(1, "Grade range is required"),
  subjects: z.array(z.string()).min(2, "At least 2 subjects are required"),
  duration: z.string().min(1, "Duration is required"),
  sessions: z.string().min(1, "Number of sessions is required"),
  overlapping_concepts: z.string().optional(),
  curriculum_objectives_mapping: z.string().optional(),
  assessment_rubric_requirements: z.string().optional(),
  resource_requirements: z.string().optional(),
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
          { value: "language-arts", label: "Language Arts" },
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

// Help data for each field
const fieldHelp = {
  title: {
    title: "Lesson Title",
    description: "Create an engaging, descriptive title that captures the essence of your cross-curricular lesson.",
    examples: [
      "Ecosystem Engineers: Building Sustainable Communities",
      "Time Travelers: Exploring History Through Mathematics",
      "Artistic Mathematicians: Geometry in Nature and Design"
    ]
  },
  theme: {
    title: "Overarching Theme",
    description: "The central connecting concept that naturally links multiple subject areas together.",
    examples: [
      "Sustainability and Environmental Stewardship",
      "Cultural Heritage and Identity",
      "Innovation and Problem-Solving",
      "Community and Global Citizenship"
    ]
  },
  central_problem: {
    title: "Central Problem/Project",
    description: "A real-world problem, project, or driving question that authentically requires knowledge and skills from multiple disciplines to solve.",
    examples: [
      "How can we design a sustainable community garden that addresses food security while teaching mathematical concepts and environmental science?",
      "How can we create a multimedia presentation about local history that incorporates language arts, social studies, and technology?",
      "How can we solve a community problem using data analysis, persuasive writing, and scientific investigation?"
    ]
  },
  overlapping_concepts: {
    title: "Overlapping Concepts",
    description: "Identify themes, concepts, or skills that naturally connect across the selected subject areas.",
    examples: [
      "Patterns: Mathematical patterns in nature, musical rhythms, and artistic designs",
      "Change: Scientific processes, historical events, and mathematical transformations",
      "Systems: Ecological systems, social systems, and mathematical systems",
      "Communication: Language arts, visual arts, and mathematical representations"
    ]
  },
  curriculum_objectives_mapping: {
    title: "Curriculum Objectives Mapping",
    description: "Map specific curriculum objectives from each subject to lesson activities. Show how each objective will be addressed.",
    examples: [
      "Mathematics: Students will measure and calculate area/perimeter of garden plots (M.3.1, M.3.2)",
      "Science: Students will observe and record plant growth patterns (S.3.1, S.3.3)",
      "Language Arts: Students will write procedural texts for garden maintenance (LA.3.2, LA.3.4)"
    ]
  },
  assessment_rubric_requirements: {
    title: "Assessment Rubric Requirements",
    description: "Describe assessment requirements that measure both individual subject learning and cross-curricular synthesis.",
    examples: [
      "Individual Subject Assessment: Math calculations accuracy, scientific observation skills, writing clarity",
      "Cross-Curricular Synthesis: Integration quality, connection demonstration, collaborative problem-solving",
      "Performance Criteria: Rubric with 4 levels (Emerging, Developing, Proficient, Exemplary)"
    ]
  },
  resource_requirements: {
    title: "Resource Requirements",
    description: "List resources and materials that support multiple subject areas. Include digital, physical, and human resources.",
    examples: [
      "Physical: Measuring tools, art supplies, science equipment, reference books",
      "Digital: Online databases, presentation software, research tools, educational apps",
      "Human: Guest speakers, community partners, parent volunteers, subject experts"
    ]
  },
  grade_range: {
    title: "Grade Range",
    description: "Select the appropriate grade range for your lesson plan.",
    examples: [
      "K-2: Focus on concrete experiences and hands-on activities",
      "3-5: Balance concrete and abstract thinking with guided inquiry",
      "6-8: Emphasize critical thinking and independent research",
      "9-12: Deep analysis and complex problem-solving"
    ]
  },
  subjects: {
    title: "Integrated Subjects",
    description: "Select at least 2 subjects that will be authentically integrated in your lesson.",
    examples: [
      "Mathematics + Science: Data analysis in scientific investigations",
      "Language Arts + Social Studies: Historical fiction and research",
      "Art + Mathematics: Geometric patterns and spatial reasoning",
      "Music + Science: Sound waves and acoustic properties"
    ]
  },
  duration: {
    title: "Duration",
    description: "Total time needed for the complete cross-curricular lesson.",
    examples: [
      "45-60 minutes for single session",
      "2-3 hours for multi-session project",
      "1-2 weeks for extended unit"
    ]
  },
  sessions: {
    title: "Number of Sessions",
    description: "How many class periods or sessions will this lesson span?",
    examples: [
      "1 session: Introduction and basic exploration",
      "3-5 sessions: Extended project with multiple phases",
      "1-2 weeks: Comprehensive unit with multiple activities"
    ]
  }
}

// Help component for individual fields
function FieldHelp({ fieldName }: { fieldName: keyof typeof fieldHelp }) {
  const help = fieldHelp[fieldName]
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
          <HelpCircle className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            {help.title}
          </DialogTitle>
          <DialogDescription className="text-left">
            {help.description}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Examples:</h4>
            <ul className="space-y-2">
              {help.examples.map((example, index) => (
                <li key={index} className="text-sm text-muted-foreground bg-muted p-2 rounded">
                  {example}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// Tooltip help for quick reference
function QuickHelp({ fieldName }: { fieldName: keyof typeof fieldHelp }) {
  const help = fieldHelp[fieldName]
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
            <HelpCircle className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <p className="font-semibold">{help.title}</p>
          <p className="text-sm">{help.description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export function CrossCurricularForm() {
  const router = useRouter()
  const [isGenerating, setIsGenerating] = useState(false)
  const [activeTab, setActiveTab] = useState("basic")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      theme: "",
      central_problem: "",
      grade_range: "",
      subjects: [],
      duration: "",
      sessions: "1",
      overlapping_concepts: "",
      curriculum_objectives_mapping: "",
      assessment_rubric_requirements: "",
      resource_requirements: "",
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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsGenerating(true)
      toast.info("Generating your cross-curricular plan...")

      const generatedPlan = await generateCrossCurricularPlan(values)
      if (!generatedPlan) {
        throw new Error("Failed to generate plan")
      }

      const savedPlan = await saveCrossCurricularPlan({
        ...values,
        content: generatedPlan,
      })

      if (savedPlan.success) {
        toast.success("Cross-curricular plan created successfully!")
        router.push(`/cross-curricular/${savedPlan.data.id}/view`)
      } else {
        throw new Error(savedPlan.error || "Failed to save plan")
      }
    } catch (error) {
      console.error("Error:", error)
      toast.error("Failed to create cross-curricular plan")
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      {/* Comprehensive Help Section */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-800">
            <Info className="h-5 w-5" />
            Cross-Curricular Planning Guide
          </CardTitle>
          <CardDescription className="text-blue-700">
            This enhanced planner helps you create authentic cross-curricular lessons that naturally integrate multiple subjects.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-blue-800">Key Principles:</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Start with a real-world problem that requires multiple disciplines</li>
                <li>• Identify natural connections between subjects</li>
                <li>• Map specific curriculum objectives to activities</li>
                <li>• Assess both individual subject learning and synthesis</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-blue-800">Planning Process:</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• <strong>Basic Info:</strong> Define your central problem and theme</li>
                <li>• <strong>Curriculum:</strong> Map objectives and assessment requirements</li>
                <li>• <strong>Learning Profile:</strong> Address diverse learner needs</li>
                <li>• <strong>Advanced:</strong> Add pedagogical strategies and technology</li>
              </ul>
            </div>
          </div>
          <div className="text-sm text-blue-600 bg-blue-100 p-3 rounded">
            <strong>Tip:</strong> Click the help icons (?) next to each field for detailed explanations and examples.
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="basic">Basic Information</TabsTrigger>
          <TabsTrigger value="curriculum">Curriculum Mapping</TabsTrigger>
          <TabsTrigger value="learning">Learning Profile</TabsTrigger>
          <TabsTrigger value="advanced">Advanced Options</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Enter the core details for your cross-curricular plan</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="title">Title</Label>
                  <FieldHelp fieldName="title" />
                </div>
                <Input
                  id="title"
                  placeholder="Enter a creative, engaging title"
                  {...form.register("title")}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="theme">Overarching Theme</Label>
                  <FieldHelp fieldName="theme" />
                </div>
                <Input
                  id="theme"
                  placeholder="Enter the central connecting theme"
                  {...form.register("theme")}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="central_problem">Central Problem/Project</Label>
                  <FieldHelp fieldName="central_problem" />
                </div>
                <Textarea
                  id="central_problem"
                  placeholder="Describe the central problem, project, or driving question that authentically requires multiple disciplines"
                  {...form.register("central_problem")}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="overlapping_concepts">Overlapping Concepts</Label>
                  <FieldHelp fieldName="overlapping_concepts" />
                </div>
                <Textarea
                  id="overlapping_concepts"
                  placeholder="Identify overlapping themes, concepts, or skills across the selected subject areas"
                  {...form.register("overlapping_concepts")}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="grade_range">Grade Range</Label>
                  <FieldHelp fieldName="grade_range" />
                </div>
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
                <div className="flex items-center gap-2">
                  <Label htmlFor="subjects">Integrated Subjects</Label>
                  <FieldHelp fieldName="subjects" />
                </div>
                <MultiSelect
                  options={subjects}
                  value={form.watch("subjects")}
                  onChange={(value) => form.setValue("subjects", value)}
                  placeholder="Select at least 2 subjects"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="duration">Duration (minutes)</Label>
                    <FieldHelp fieldName="duration" />
                  </div>
                  <Input
                    id="duration"
                    type="number"
                    placeholder="Total duration"
                    {...form.register("duration")}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="sessions">Number of Sessions</Label>
                    <FieldHelp fieldName="sessions" />
                  </div>
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

        <TabsContent value="curriculum" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Curriculum Mapping</CardTitle>
              <CardDescription>Map curriculum objectives and assessment requirements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="curriculum_objectives_mapping">Curriculum Objectives Mapping</Label>
                  <FieldHelp fieldName="curriculum_objectives_mapping" />
                </div>
                <Textarea
                  id="curriculum_objectives_mapping"
                  placeholder="Map specific curriculum objectives from each subject to lesson activities. Include how each objective will be addressed."
                  {...form.register("curriculum_objectives_mapping")}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="assessment_rubric_requirements">Assessment Rubric Requirements</Label>
                  <FieldHelp fieldName="assessment_rubric_requirements" />
                </div>
                <Textarea
                  id="assessment_rubric_requirements"
                  placeholder="Describe assessment requirements that measure both individual subject learning and cross-curricular synthesis"
                  {...form.register("assessment_rubric_requirements")}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="resource_requirements">Resource Requirements</Label>
                  <FieldHelp fieldName="resource_requirements" />
                </div>
                <Textarea
                  id="resource_requirements"
                  placeholder="List resources and materials that support multiple subject areas. Include digital, physical, and human resources."
                  {...form.register("resource_requirements")}
                />
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
                <div className="flex items-center gap-2">
                  <Label>Learning Styles</Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                          <HelpCircle className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p className="font-semibold">Learning Styles</p>
                        <p className="text-sm">Select how students prefer to learn: Visual (seeing), Auditory (hearing), Kinesthetic (doing), or Reading/Writing.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <MultiSelect
                  options={learningStyles}
                  value={form.watch("learning_styles") || []}
                  onChange={(value) => form.setValue("learning_styles", value)}
                  placeholder="Select learning styles to address"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label>Multiple Intelligences</Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                          <HelpCircle className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p className="font-semibold">Multiple Intelligences</p>
                        <p className="text-sm">Select ways students are smart: Linguistic, Logical-Mathematical, Spatial, Bodily-Kinesthetic, Musical, Interpersonal, Intrapersonal, or Naturalistic.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
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
                  <div className="flex items-center gap-2">
                    <Label htmlFor="special_needs">Include Special Needs Accommodations</Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                            <HelpCircle className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p className="font-semibold">Special Needs Accommodations</p>
                          <p className="text-sm">Include modifications for students with learning differences, physical disabilities, or other special needs.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>

                {form.watch("special_needs") && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Label htmlFor="special_needs_details">Special Needs Details</Label>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                              <HelpCircle className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p className="font-semibold">Special Needs Details</p>
                            <p className="text-sm">Describe specific accommodations, modifications, or support strategies needed for students with special needs.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
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
                  <div className="flex items-center gap-2">
                    <Label htmlFor="ell_support">Include ELL Support Strategies</Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                            <HelpCircle className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p className="font-semibold">ELL Support Strategies</p>
                          <p className="text-sm">Include strategies for English Language Learners: visual supports, simplified language, peer support, and multiple ways to demonstrate understanding.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="gifted_extension"
                    checked={form.watch("gifted_extension")}
                    onCheckedChange={(checked) => {
                      form.setValue("gifted_extension", checked as boolean)
                    }}
                  />
                  <div className="flex items-center gap-2">
                    <Label htmlFor="gifted_extension">Include Gifted & Talented Extensions</Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                            <HelpCircle className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p className="font-semibold">Gifted & Talented Extensions</p>
                          <p className="text-sm">Include advanced challenges for gifted students: independent research, leadership roles, creative extensions, and mentorship opportunities.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
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
                <div className="flex items-center gap-2">
                  <Label htmlFor="pedagogical_strategy">Pedagogical Strategy</Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                          <HelpCircle className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p className="font-semibold">Pedagogical Strategy</p>
                        <p className="text-sm">Select the primary teaching approach: Project-Based, Inquiry-Based, Cooperative Learning, Problem-Based, or Design Thinking.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
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
                <div className="flex items-center gap-2">
                  <Label htmlFor="assessment_strategy">Assessment Strategy</Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                          <HelpCircle className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p className="font-semibold">Assessment Strategy</p>
                        <p className="text-sm">Select how to evaluate student learning: Performance-Based, Portfolio, Rubric-Based, Peer Assessment, or Self-Assessment.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
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
                <div className="flex items-center gap-2">
                  <Label htmlFor="technology_integration">Include Technology Integration</Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                          <HelpCircle className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p className="font-semibold">Technology Integration</p>
                        <p className="text-sm">Include digital tools and technology to enhance learning: research tools, presentation software, educational apps, and digital creation tools.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="additional_instructions">Additional Instructions</Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                          <HelpCircle className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p className="font-semibold">Additional Instructions</p>
                        <p className="text-sm">Add any specific requirements, preferences, or special considerations for your cross-curricular lesson plan.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
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
        <Button type="submit" disabled={isGenerating}>
          {isGenerating ? "Generating..." : "Generate Cross-Curricular Plan"}
        </Button>
      </div>
    </form>
  )
} 