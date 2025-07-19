import { getLessonPlanById } from "@/app/actions/lesson-plans"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { format } from "date-fns"

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

  // Split content into lines and process
  const lines = content.split("\n")
  
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
  return content
    .split("\n")
    .filter(line => line.trim().startsWith("- ") || line.trim().startsWith("• "))
    .map(line => line.replace(/^[-•]\s+/, "").trim())
}

function parseVocabulary(content: string): { term: string; definition: string; example: string }[] {
  const items: { term: string; definition: string; example: string }[] = []
  const lines = content.split("\n")
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
      currentTerm = parts[0].trim()
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
    description: lessonPlan.overview
  }
}

export default async function LessonPlanViewPage({ params }: LessonPlanViewPageProps) {
  const { id } = await params
  const lessonPlan = await getLessonPlanById(id)
  
  if (!lessonPlan) {
    notFound()
  }

  // Parse the markdown content into sections
  const sections = parseMarkdownContent(lessonPlan.content)
  
  // Parse objectives and materials from the content if not in database
  const objectives = lessonPlan.objectives ? JSON.parse(lessonPlan.objectives) : 
    parseListItems(sections["LEARNING OBJECTIVES"] || "")
  
  const materials = lessonPlan.materials ? JSON.parse(lessonPlan.materials) :
    parseListItems(sections["MATERIALS AND RESOURCES"] || "")
  
  const vocabulary = lessonPlan.vocabulary ? JSON.parse(lessonPlan.vocabulary) :
    parseVocabulary(sections["VOCABULARY"] || "")

  // Combine standards from both the database field and content sections
  const standardsContent = [
    lessonPlan.standards,
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
              {lessonPlan.subject} • Grade {lessonPlan.grade} • {lessonPlan.duration} minutes
            </p>
          </div>
          <a
            href={`/lesson-plans/${lessonPlan.id}/edit`}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Edit Lesson Plan
          </a>
        </div>

        {lessonPlan.overview && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Overview</h2>
            <p className="text-gray-700 whitespace-pre-wrap">{stripMarkdown(lessonPlan.overview)}</p>
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

        {Array.isArray(lessonPlan.vocabulary) && lessonPlan.vocabulary.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Key Vocabulary</h2>
            <div className="grid gap-4">
              {lessonPlan.vocabulary.map((item, index) => (
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

        {lessonPlan.homework && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Homework</h2>
            <p className="text-gray-700 whitespace-pre-wrap">{stripMarkdown(lessonPlan.homework)}</p>
          </div>
        )}

        {lessonPlan.extensions && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Extension Activities</h2>
            <p className="text-gray-700 whitespace-pre-wrap">{stripMarkdown(lessonPlan.extensions)}</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-8 text-sm text-gray-500 flex justify-between items-center">
        <div>
          <p>Created: {format(new Date(lessonPlan.created_at), 'MMMM d, yyyy')}</p>
          <p>Last updated: {format(new Date(lessonPlan.updated_at), 'MMMM d, yyyy')}</p>
        </div>
      </div>
    </div>
  )
} 