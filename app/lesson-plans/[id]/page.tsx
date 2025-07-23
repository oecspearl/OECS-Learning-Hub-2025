import { Metadata } from "next"
import { notFound } from "next/navigation"
import { format } from "date-fns"
import { getLessonPlanById } from "@/app/actions/lesson-plans"
import { getLessonReflectionsByLessonPlan } from "@/app/actions/lesson-reflections"
import { LessonReflectionForm } from "@/components/lesson-plans/lesson-reflection-form"
import { LessonReflectionDisplay } from "@/components/lesson-plans/lesson-reflection-display"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, BookOpen, Lightbulb, History } from "lucide-react"
import { safeArrayProcessor, safeContentSplitter, safeMarkdownContent } from "@/lib/safeArrayProcessor"

function stripMarkdown(text: string): string {
  return text
    .replace(/^#+\s+/gm, '') // Remove heading markers
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.*?)\*/g, '$1') // Remove italic
    .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links
    .replace(/`(.*?)`/g, '$1') // Remove inline code
    .replace(/```.*?\n/g, '') // Remove code block start
    .replace(/```/g, '') // Remove code block end
    .replace(/^\s*[-*+]\s+/gm, '• ') // Convert markdown lists to bullet points
    .replace(/^\s*\d+\.\s+/gm, '• ') // Convert numbered lists to bullet points
    .replace(/\n{3,}/g, '\n\n') // Replace multiple newlines with double newlines
    .trim()
}

function parseMarkdownContent(content: string) {
  const sections: Record<string, string> = {}
  let currentSection = ""
  let currentContent: string[] = []

  // Use safe content splitter to handle null content
  const lines = safeContentSplitter(content)
  
  for (const line of lines) {
    // Check for section headers (## or ###)
    if (line.startsWith("## ")) {
      // Save previous section if exists
      if (currentSection) {
        sections[currentSection] = stripMarkdown(currentContent.join("\n").trim())
      }
      // Start new section
      currentSection = line.replace("## ", "").trim()
      currentContent = []
    } else if (line.startsWith("### ")) {
      // Handle subsections by appending to current section
      currentContent.push(line)
    } else {
      // Add content to current section
      currentContent.push(line)
    }
  }
  
  // Save last section
  if (currentSection) {
    sections[currentSection] = stripMarkdown(currentContent.join("\n").trim())
  }

  return sections
}

function parseListItems(content: string): string[] {
  const lines = safeContentSplitter(content)
  return lines
    .filter(line => line.trim().startsWith("- ") || line.trim().startsWith("• "))
    .map(line => line.replace(/^[-•]\s+/, "").trim())
}

function parseVocabulary(content: string): { term: string; definition: string; example: string }[] {
  const items: { term: string; definition: string; example: string }[] = []
  const lines = safeContentSplitter(content)
  let currentTerm = ""
  let currentDef = ""
  let currentEx = ""

  for (const line of lines) {
    if (line.trim().startsWith("- ") || line.trim().startsWith("• ")) {
      // Save previous term if exists
      if (currentTerm) {
        items.push({ term: currentTerm, definition: currentDef, example: currentEx })
      }
      // Start new term
      const parts = line.replace(/^[-•]\s+/, "").split(":")
      currentTerm = parts[0]?.trim() || ""
      currentDef = parts[1]?.trim() || ""
      currentEx = ""
    } else if (line.trim().startsWith("  Example:")) {
      currentEx = line.replace("  Example:", "").trim()
    }
  }

  // Add last term
  if (currentTerm) {
    items.push({ term: currentTerm, definition: currentDef, example: currentEx })
  }

  return items
}

interface LessonPlanViewPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: LessonPlanViewPageProps): Promise<Metadata> {
  const { id } = await params
  const lessonPlan = await getLessonPlanById(id)
  
  if (!lessonPlan) {
    return {
      title: 'Lesson Plan Not Found'
    }
  }

  return {
    title: lessonPlan.title,
    description: lessonPlan.description
  }
}

export default async function LessonPlanViewPage({ params }: LessonPlanViewPageProps) {
  const { id } = await params
  const lessonPlan = await getLessonPlanById(id)
  
  if (!lessonPlan) {
    notFound()
  }

  // Get reflections for this lesson plan
  const reflectionsResult = await getLessonReflectionsByLessonPlan(id)
  const reflections = reflectionsResult.success ? reflectionsResult.data || [] : []
  
  // Debug logging
  console.log('Lesson Plan ID:', id)
  console.log('Reflections Result:', reflectionsResult)
  console.log('Reflections Count:', reflections.length)
  console.log('Reflections Data:', reflections)

  // Parse the markdown content into sections
  const sections = parseMarkdownContent(lessonPlan.lesson_content)
  
  // Parse objectives and materials from the content if not in database
  const objectives = lessonPlan.learning_objectives ? lessonPlan.learning_objectives : 
    parseListItems(sections["LEARNING OBJECTIVES"] || "")
  
  const materials = lessonPlan.materials_needed ? lessonPlan.materials_needed :
    parseListItems(sections["MATERIALS AND RESOURCES"] || "")
  
  const vocabulary = lessonPlan.vocabulary_terms ? lessonPlan.vocabulary_terms :
    parseVocabulary(sections["VOCABULARY"] || "")

  // Combine standards from both the database field and content sections
  const standardsContent = [
    lessonPlan.curriculum_standards ? lessonPlan.curriculum_standards.join('\n') : '',
    sections["CURRICULUM STANDARDS"],
    sections["STANDARDS"]
  ].filter(Boolean).join("\n\n")

  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl">
      <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{lessonPlan.title}</h1>
            <p className="text-gray-600 mt-2">
              {lessonPlan.subject} • Grade {lessonPlan.grade_level} • {lessonPlan.duration_minutes} minutes
            </p>
          </div>
          <div className="flex gap-2">
            <a
              href={`/lesson-plans/${lessonPlan.id}/edit`}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Edit Lesson Plan
            </a>
          </div>
        </div>

        <Tabs defaultValue="lesson" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="lesson" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Lesson Plan
            </TabsTrigger>
            <TabsTrigger value="reflections" className="flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              Reflections ({reflections.length})
            </TabsTrigger>
            <TabsTrigger value="add-reflection" className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Reflection
            </TabsTrigger>
          </TabsList>

          <TabsContent value="lesson" className="space-y-6">
            {lessonPlan.description && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Overview</h2>
                <p className="text-gray-700 whitespace-pre-wrap">{stripMarkdown(lessonPlan.description)}</p>
              </div>
            )}

            {standardsContent && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Curriculum Standards</h2>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700 whitespace-pre-wrap">{stripMarkdown(standardsContent)}</p>
                </div>
              </div>
            )}

            {Array.isArray(lessonPlan.vocabulary_terms) && lessonPlan.vocabulary_terms.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Key Vocabulary</h2>
                <div className="grid gap-4">
                  {lessonPlan.vocabulary_terms.map((item, index) => (
                    <div key={index} className="border rounded-md p-4">
                      <h3 className="font-medium text-gray-900">{item.term}</h3>
                      <p className="text-gray-700 mt-1">{item.definition}</p>
                      {item.example && (
                        <p className="text-gray-600 mt-2 italic">Example: {item.example}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Lesson Content</h2>
              <div className="prose max-w-none">
                {Object.entries(sections).map(([section, content]) => (
                  <div key={section} className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{section}</h3>
                    <div className="text-gray-700 whitespace-pre-wrap">{content}</div>
                  </div>
                ))}
              </div>
            </div>

            {lessonPlan.homework_assignment && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Homework Assignment</h2>
                <p className="text-gray-700 whitespace-pre-wrap">{stripMarkdown(lessonPlan.homework_assignment)}</p>
              </div>
            )}

            {lessonPlan.extension_activities && lessonPlan.extension_activities.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Extension Activities</h2>
                <ul className="list-disc pl-5 space-y-1">
                  {lessonPlan.extension_activities.map((activity: string, index: number) => (
                    <li key={index} className="text-gray-700">{activity}</li>
                  ))}
                </ul>
              </div>
            )}
          </TabsContent>

          <TabsContent value="reflections" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Lesson Reflections</h2>
                <p className="text-muted-foreground">
                  Review your reflections and insights from teaching this lesson
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm text-muted-foreground">
                  Found {reflections.length} reflection{reflections.length !== 1 ? 's' : ''}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.location.reload()}
                >
                  Refresh
                </Button>
              </div>
            </div>

            {reflections.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <History className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No Reflections Yet</h3>
                  <p className="text-muted-foreground text-center mb-4">
                    You haven't added any reflections for this lesson plan yet.
                  </p>
                  <Button asChild>
                    <a href="#add-reflection">Add Your First Reflection</a>
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                {reflections.map((reflection: any) => (
                  <LessonReflectionDisplay
                    key={reflection.id}
                    reflection={reflection}
                  />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="add-reflection" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Add Lesson Reflection</h2>
                <p className="text-muted-foreground">
                  Complete this reflection after teaching the lesson to track outcomes and improvements
                </p>
              </div>
            </div>

            <LessonReflectionForm
              lessonPlanId={lessonPlan.id}
              lessonTitle={lessonPlan.title}
            />
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-8 text-sm text-gray-500 flex justify-between items-center">
          <div>
            <p>Created: {format(new Date(lessonPlan.created_at), 'MMMM d, yyyy')}</p>
            <p>Last updated: {format(new Date(lessonPlan.updated_at), 'MMMM d, yyyy')}</p>
          </div>
        </div>
      </div>
    </div>
  )
} 