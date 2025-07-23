"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { updateLessonPlan } from "@/app/actions/lesson-plans"
import { getCurriculumStandards } from "@/app/actions/curriculum-standards"
import { LessonPlan } from "@/app/actions/lesson-plans"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import dynamic from 'next/dynamic'
import { Search } from "lucide-react"
import type { CurriculumStandard } from "@/lib/curriculum-standards"

// Dynamically import the EditorToolbar with no SSR
const EditorToolbar = dynamic(
  () => import('@/components/editor-toolbar'),
  { 
    ssr: false,
    loading: () => <div className="min-h-[200px] border rounded-md p-4">Loading editor...</div>
  }
)

interface EditLessonPlanFormProps {
  lessonPlan: LessonPlan
}

interface VocabularyItem {
  term: string
  definition: string
  example: string
}

interface FormData {
  title: string
  subject: string
  grade: string
  topic: string
  duration: number
  content: string
  overview: string
  standards: string
  materials: string
  vocabulary: string
  homework: string
  extensions: string
}

// Helper function to safely split strings that might be null
const safeSplit = (value: string | null | undefined): string[] => {
  if (!value || typeof value !== 'string') return []
  return value.split('\n').filter((line: string) => line.trim().length > 0)
}

// Helper function to safely convert array or string to string
const arrayOrStringToString = (value: string | string[] | null | undefined): string => {
  if (!value) return ""
  if (Array.isArray(value)) return value.join('\n')
  if (typeof value === 'string') return value
  return ""
}

// Helper function to safely parse JSON
const safeJsonParse = (value: any, fallback: any = []): any => {
  if (!value) return fallback
  if (typeof value === 'string') {
    try {
      return JSON.parse(value)
    } catch {
      return fallback
    }
  }
  if (Array.isArray(value)) return value
  return fallback
}

// Helper function to safely convert duration to number
const safeDurationToNumber = (duration: any): number => {
  if (typeof duration === 'number') return duration
  if (typeof duration === 'string') {
    const parsed = parseInt(duration)
    return isNaN(parsed) ? 50 : parsed
  }
  return 50
}

export default function EditLessonPlanForm({ lessonPlan }: EditLessonPlanFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [mounted, setMounted] = useState(false)
  
  // Safe initialization of form data
  const [formData, setFormData] = useState<FormData>({
    title: lessonPlan?.title || "",
    subject: lessonPlan?.subject || "",
    grade: lessonPlan?.grade_level || "",
    topic: lessonPlan?.topic || "",
    duration: safeDurationToNumber(lessonPlan?.duration_minutes),
    content: lessonPlan?.lesson_content || "",
    overview: lessonPlan?.description || "",
    standards: arrayOrStringToString(lessonPlan?.curriculum_standards),
    materials: arrayOrStringToString(lessonPlan?.materials_needed),
    vocabulary: JSON.stringify(safeJsonParse(lessonPlan?.vocabulary_terms, []), null, 2),
    homework: lessonPlan?.homework_assignment || "",
    extensions: arrayOrStringToString(lessonPlan?.extension_activities),
  })
  
  const [standards, setStandards] = useState<CurriculumStandard[]>([])
  const [filteredStandards, setFilteredStandards] = useState<CurriculumStandard[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStandards, setSelectedStandards] = useState<CurriculumStandard[]>([])

  // Only render the form after client-side hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  // Fetch standards when component mounts
  useEffect(() => {
    const fetchStandards = async () => {
      if (!lessonPlan?.subject || !lessonPlan?.grade_level) {
        console.log("Missing subject or grade for standards fetch")
        return
      }

      try {
        const fetchedStandards = await getCurriculumStandards(lessonPlan.subject, lessonPlan.grade_level)
        if (fetchedStandards && Array.isArray(fetchedStandards) && fetchedStandards.length > 0) {
          setStandards(fetchedStandards)
          setFilteredStandards(fetchedStandards)
        } else {
          console.log("No standards found for the selected subject and grade")
          toast.info("No specific standards found for this subject and grade level")
        }
      } catch (error) {
        console.error("Error fetching standards:", error)
        toast.error("Failed to fetch curriculum standards")
      }
    }
    
    if (mounted) {
      fetchStandards()
    }
  }, [lessonPlan?.subject, lessonPlan?.grade_level, mounted])

  // Filter standards based on search term
  useEffect(() => {
    if (!Array.isArray(standards)) return
    
    const filtered = standards.filter(standard => {
      const description = standard?.description || ""
      const code = standard?.code || ""
      const strandName = standard?.strand_name || ""
      
      return description.toLowerCase().includes(searchTerm.toLowerCase()) ||
             code.toLowerCase().includes(searchTerm.toLowerCase()) ||
             strandName.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setFilteredStandards(filtered)
  }, [searchTerm, standards])

  // Add standard to selected standards
  const addStandard = (standard: CurriculumStandard) => {
    if (!standard) return
    
    const standardId = standard.id || standard.description || ""
    if (!selectedStandards.find(s => (s.id || s.description) === standardId)) {
      const newSelectedStandards = [...selectedStandards, standard]
      setSelectedStandards(newSelectedStandards)
      
      // Update formData standards
      const standardsText = newSelectedStandards
        .map(s => `${s.code ? `${s.code}: ` : ""}${s.description || ""}`)
        .filter(text => text.trim())
        .join("\n")
      setFormData(prev => ({ ...prev, standards: standardsText }))
    }
  }

  // Remove standard from selected standards
  const removeStandard = (standardId: string) => {
    const updatedStandards = selectedStandards.filter(s => (s.id || s.description) !== standardId)
    setSelectedStandards(updatedStandards)
    
    // Update formData standards
    const standardsText = updatedStandards
      .map(s => `${s.code ? `${s.code}: ` : ""}${s.description || ""}`)
      .filter(text => text.trim())
      .join("\n")
    setFormData(prev => ({ ...prev, standards: standardsText }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Parse vocabulary with safe JSON parsing
      let parsedVocabulary: VocabularyItem[] = []
      try {
        const vocabData = formData.vocabulary?.trim()
        if (vocabData) {
          parsedVocabulary = JSON.parse(vocabData)
          if (!Array.isArray(parsedVocabulary)) {
            throw new Error("Vocabulary must be an array")
          }
        }
      } catch (error) {
        console.error("Error parsing vocabulary:", error)
        toast.error("Invalid vocabulary format. Please check the JSON syntax.")
        setIsSubmitting(false)
        return
      }

      // Use safeSplit for all string splitting operations
      const objectives = safeSplit(formData.standards)
      const materials = safeSplit(formData.materials)
      const curriculumStandards = safeSplit(formData.standards)
      const extensionActivities = safeSplit(formData.extensions)

      // Ensure we have the lesson plan ID
      if (!lessonPlan?.id) {
        toast.error("Invalid lesson plan ID")
        setIsSubmitting(false)
        return
      }

      const updateData = {
        title: formData.title || "",
        subject: formData.subject || "",
        grade_level: formData.grade || "",
        topic: formData.topic || "",
        lesson_content: formData.content || "",
        duration_minutes: formData.duration || 50,
        learning_objectives: objectives.length > 0 ? objectives : [],
        materials_needed: materials.length > 0 ? materials : [],
        description: formData.overview || undefined,
        curriculum_standards: curriculumStandards.length > 0 ? curriculumStandards : undefined,
        vocabulary_terms: parsedVocabulary.length > 0 ? parsedVocabulary : undefined,
        homework_assignment: formData.homework || undefined,
        extension_activities: extensionActivities.length > 0 ? extensionActivities : undefined,
        created_by: lessonPlan.created_by || ""
      }

      const result = await updateLessonPlan(lessonPlan.id, updateData)
      
      if (result.success) {
        toast.success("Lesson plan updated successfully")
        router.push(`/lesson-plans/${lessonPlan.id}`)
        router.refresh()
      } else {
        throw new Error(result.error || "Failed to update lesson plan")
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to update lesson plan"
      toast.error(errorMessage)
      console.error("Error updating lesson plan:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle form field changes
  const handleFieldChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = field === 'duration' ? parseInt(e.target.value) || 0 : e.target.value
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  // Handle content change from editor
  const handleContentChange = (content: string) => {
    setFormData(prev => ({ ...prev, content }))
  }

  if (!mounted) {
    return null // Return null on server-side and first render
  }

  if (!lessonPlan) {
    return (
      <div className="container mx-auto py-8 px-4 max-w-5xl">
        <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Lesson Plan Not Found</h1>
          <p>The lesson plan could not be loaded. Please try again.</p>
          <Button onClick={() => router.back()} className="mt-4">
            Go Back
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl">
      <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Edit Lesson Plan</h1>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={handleFieldChange('title')}
                required
                className="w-full"
                placeholder="Enter lesson title"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject">Subject *</Label>
              <Input
                id="subject"
                value={formData.subject}
                onChange={handleFieldChange('subject')}
                required
                className="w-full"
                placeholder="Enter subject"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="grade">Grade Level *</Label>
              <Input
                id="grade"
                value={formData.grade}
                onChange={handleFieldChange('grade')}
                required
                className="w-full"
                placeholder="Enter grade level"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="duration">Duration (minutes) *</Label>
              <Input
                id="duration"
                type="number"
                value={formData.duration}
                onChange={handleFieldChange('duration')}
                required
                min="1"
                className="w-full"
                placeholder="Enter duration in minutes"
              />
            </div>
          </div>

          {/* Topic */}
          <div className="space-y-2">
            <Label htmlFor="topic">Topic</Label>
            <Input
              id="topic"
              value={formData.topic}
              onChange={handleFieldChange('topic')}
              className="w-full"
              placeholder="Enter lesson topic"
            />
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <Label htmlFor="overview">Overview</Label>
            <Textarea
              id="overview"
              value={formData.overview}
              onChange={handleFieldChange('overview')}
              className="min-h-[100px]"
              placeholder="Provide a brief overview of the lesson..."
            />
          </div>

          {/* Materials */}
          <div className="space-y-2">
            <Label htmlFor="materials">Materials Needed</Label>
            <Textarea
              id="materials"
              value={formData.materials}
              onChange={handleFieldChange('materials')}
              className="min-h-[100px]"
              placeholder="List materials needed (one per line)..."
            />
          </div>

          {/* Curriculum Standards */}
          <div className="space-y-4">
            <Label>Curriculum Standards</Label>
            
            {/* Standards Search */}
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search standards..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>

            {/* Standards List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Available Standards */}
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Available Standards</h3>
                <div className="space-y-2 max-h-[300px] overflow-y-auto">
                  {filteredStandards.length > 0 ? (
                    filteredStandards.map((standard, index) => (
                      <div
                        key={standard.id || standard.description || index}
                        className="p-2 border rounded hover:bg-accent cursor-pointer"
                        onClick={() => addStandard(standard)}
                      >
                        <div className="font-medium">{standard.code || "No Code"}</div>
                        <div className="text-sm text-muted-foreground">{standard.description || "No Description"}</div>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground">No standards available</p>
                  )}
                </div>
              </div>

              {/* Selected Standards */}
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Selected Standards</h3>
                <div className="space-y-2 max-h-[300px] overflow-y-auto">
                  {selectedStandards.length > 0 ? (
                    selectedStandards.map((standard, index) => (
                      <div
                        key={standard.id || standard.description || index}
                        className="p-2 border rounded bg-accent"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-medium">{standard.code || "No Code"}</div>
                            <div className="text-sm text-muted-foreground">{standard.description || "No Description"}</div>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeStandard(standard.id || standard.description || "")}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground">No standards selected</p>
                  )}
                </div>
              </div>
            </div>

            {/* Standards Text Area (hidden but maintains form data) */}
            <Textarea
              id="standards"
              value={formData.standards}
              onChange={handleFieldChange('standards')}
              className="hidden"
            />
          </div>

          {/* Key Vocabulary */}
          <div className="space-y-2">
            <Label htmlFor="vocabulary">Key Vocabulary (JSON Format)</Label>
            <Textarea
              id="vocabulary"
              value={formData.vocabulary}
              onChange={handleFieldChange('vocabulary')}
              className="min-h-[100px] font-mono text-sm"
              placeholder='[{"term": "example", "definition": "meaning", "example": "usage"}]'
            />
          </div>

          {/* Main Content */}
          <div className="space-y-2">
            <Label htmlFor="content">Lesson Content *</Label>
            <EditorToolbar
              content={formData.content}
              onChange={handleContentChange}
            />
          </div>

          {/* Homework */}
          <div className="space-y-2">
            <Label htmlFor="homework">Homework Assignment</Label>
            <Textarea
              id="homework"
              value={formData.homework}
              onChange={handleFieldChange('homework')}
              className="min-h-[100px]"
              placeholder="Describe the homework assignment..."
            />
          </div>

          {/* Extension Activities */}
          <div className="space-y-2">
            <Label htmlFor="extensions">Extension Activities</Label>
            <Textarea
              id="extensions"
              value={formData.extensions}
              onChange={handleFieldChange('extensions')}
              className="min-h-[100px]"
              placeholder="List extension activities (one per line)..."
            />
          </div>

          {/* Form Actions */}
          <div className="flex justify-end space-x-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}