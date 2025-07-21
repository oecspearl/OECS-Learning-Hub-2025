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

export default function EditLessonPlanForm({ lessonPlan }: EditLessonPlanFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    title: lessonPlan.title || "",
    subject: lessonPlan.subject || "",
    grade: lessonPlan.grade_level || "",
    topic: lessonPlan.topic || "",
    duration: typeof lessonPlan.duration_minutes === 'string' ? parseInt(lessonPlan.duration_minutes) || 0 : lessonPlan.duration_minutes || 0,
    content: lessonPlan.lesson_content || "",
    overview: lessonPlan.description || "",
    standards: lessonPlan.curriculum_standards ? lessonPlan.curriculum_standards.join('\n') : "",
    materials: lessonPlan.materials_needed ? lessonPlan.materials_needed.join('\n') : "",
    vocabulary: Array.isArray(lessonPlan.vocabulary_terms) 
      ? JSON.stringify(lessonPlan.vocabulary_terms, null, 2)
      : JSON.stringify([], null, 2),
    homework: lessonPlan.homework_assignment || "",
    extensions: lessonPlan.extension_activities ? lessonPlan.extension_activities.join('\n') : "",
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
      if (!lessonPlan.subject || !lessonPlan.grade_level) {
        console.log("Missing subject or grade for standards fetch")
        return
      }

      try {
        const fetchedStandards = await getCurriculumStandards(lessonPlan.subject, lessonPlan.grade_level)
        if (fetchedStandards && fetchedStandards.length > 0) {
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
    fetchStandards()
  }, [lessonPlan.subject, lessonPlan.grade_level])

  // Filter standards based on search term
  useEffect(() => {
    const filtered = standards.filter(standard => 
      standard.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (standard.code && standard.code.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (standard.strand_name && standard.strand_name.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    setFilteredStandards(filtered)
  }, [searchTerm, standards])

  // Add standard to selected standards
  const addStandard = (standard: CurriculumStandard) => {
    if (!selectedStandards.find(s => s.id === standard.id)) {
      setSelectedStandards([...selectedStandards, standard])
      // Update formData standards
      const standardsText = [...selectedStandards, standard]
        .map(s => `${s.code ? `${s.code}: ` : ""}${s.description}`)
        .join("\n")
      setFormData(prev => ({ ...prev, standards: standardsText }))
    }
  }

  // Remove standard from selected standards
  const removeStandard = (standardId: string) => {
    const updatedStandards = selectedStandards.filter(s => s.id !== standardId)
    setSelectedStandards(updatedStandards)
    // Update formData standards
    const standardsText = updatedStandards
      .map(s => `${s.code ? `${s.code}: ` : ""}${s.description}`)
      .join("\n")
    setFormData(prev => ({ ...prev, standards: standardsText }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Parse vocabulary if it's a string
      let parsedVocabulary: VocabularyItem[]
      try {
        parsedVocabulary = JSON.parse(formData.vocabulary)
        if (!Array.isArray(parsedVocabulary)) {
          throw new Error("Vocabulary must be an array")
        }
      } catch (error) {
        console.error("Error parsing vocabulary:", error)
        toast.error("Invalid vocabulary format. Please check the JSON syntax.")
        setIsSubmitting(false)
        return
      }

      // Parse objectives and materials from standards text
      const objectives = formData.standards
        ? formData.standards.split('\n').filter((line: string) => line.trim().length > 0)
        : []

      const materials = formData.materials
        ? formData.materials.split('\n').filter((line: string) => line.trim().length > 0)
        : []

      await updateLessonPlan(lessonPlan.id, {
        title: formData.title,
        subject: formData.subject,
        grade_level: formData.grade,
        topic: formData.topic,
        lesson_content: formData.content,
        duration_minutes: formData.duration,
        learning_objectives: objectives,
        materials_needed: materials,
        description: formData.overview || undefined,
        curriculum_standards: formData.standards ? formData.standards.split('\n').filter((line: string) => line.trim().length > 0) : undefined,
        vocabulary_terms: parsedVocabulary,
        homework_assignment: formData.homework || undefined,
        extension_activities: formData.extensions ? formData.extensions.split('\n').filter((line: string) => line.trim().length > 0) : undefined,
        created_by: lessonPlan.created_by
      })

      toast.success("Lesson plan updated successfully")
      router.push(`/lesson-plans/${lessonPlan.id}`)
      router.refresh()
    } catch (error) {
      toast.error("Failed to update lesson plan")
      console.error("Error updating lesson plan:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!mounted) {
    return null // Return null on server-side and first render
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl">
      <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Edit Lesson Plan</h1>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                required
                className="w-full"
                placeholder="Enter lesson title"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                required
                className="w-full"
                placeholder="Enter subject"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="grade">Grade Level</Label>
              <Input
                id="grade"
                value={formData.grade}
                onChange={(e) => setFormData(prev => ({ ...prev, grade: e.target.value }))}
                required
                className="w-full"
                placeholder="Enter grade level"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="duration">Duration (minutes)</Label>
              <Input
                id="duration"
                type="number"
                value={formData.duration}
                onChange={(e) => setFormData(prev => ({ ...prev, duration: parseInt(e.target.value) || 0 }))}
                required
                min="1"
                className="w-full"
                placeholder="Enter duration in minutes"
              />
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <Label htmlFor="overview">Overview</Label>
            <Textarea
              id="overview"
              value={formData.overview}
              onChange={(e) => setFormData(prev => ({ ...prev, overview: e.target.value }))}
              className="min-h-[100px]"
              placeholder="Provide a brief overview of the lesson..."
            />
          </div>

          {/* Curriculum Standards */}
          <div className="space-y-4">
            <Label htmlFor="standards">Curriculum Standards</Label>
            
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
                  {filteredStandards.map((standard) => (
                    <div
                      key={standard.id || standard.description}
                      className="p-2 border rounded hover:bg-accent cursor-pointer"
                      onClick={() => addStandard(standard)}
                    >
                      <div className="font-medium">{standard.code || "No Code"}</div>
                      <div className="text-sm text-muted-foreground">{standard.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Selected Standards */}
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Selected Standards</h3>
                <div className="space-y-2 max-h-[300px] overflow-y-auto">
                  {selectedStandards.map((standard) => (
                    <div
                      key={standard.id || standard.description}
                      className="p-2 border rounded bg-accent"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-medium">{standard.code || "No Code"}</div>
                          <div className="text-sm text-muted-foreground">{standard.description}</div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeStandard(standard.id || standard.description)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Standards Text Area (hidden but maintains form data) */}
            <Textarea
              id="standards"
              value={formData.standards}
              onChange={(e) => setFormData(prev => ({ ...prev, standards: e.target.value }))}
              className="hidden"
            />
          </div>

          {/* Key Vocabulary */}
          <div className="space-y-2">
            <Label htmlFor="vocabulary">Key Vocabulary</Label>
            <Textarea
              id="vocabulary"
              value={formData.vocabulary}
              onChange={(e) => setFormData(prev => ({ ...prev, vocabulary: e.target.value }))}
              className="min-h-[100px] font-mono"
              placeholder="Enter vocabulary in JSON format: [{'term': 'word', 'definition': 'meaning', 'example': 'usage'}]"
            />
          </div>

          {/* Main Content */}
          <div className="space-y-2">
            <Label htmlFor="content">Lesson Content</Label>
            {mounted && (
              <EditorToolbar
                content={formData.content}
                onChange={(content: string) => setFormData(prev => ({ ...prev, content }))}
              />
            )}
          </div>

          {/* Homework */}
          <div className="space-y-2">
            <Label htmlFor="homework">Homework</Label>
            <Textarea
              id="homework"
              value={formData.homework}
              onChange={(e) => setFormData(prev => ({ ...prev, homework: e.target.value }))}
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
              onChange={(e) => setFormData(prev => ({ ...prev, extensions: e.target.value }))}
              className="min-h-[100px]"
              placeholder="List any extension activities or enrichment opportunities..."
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