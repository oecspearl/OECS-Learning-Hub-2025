"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Edit, Calendar, Clock, BookOpen, Users, Target, Lightbulb, ClipboardList } from "lucide-react"
import { format } from "date-fns"
import Link from "next/link"
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
    if (line.startsWith("## ")) {
      if (currentSection) {
        sections[currentSection] = stripMarkdown(currentContent.join("\n").trim())
      }
      currentSection = line.replace("## ", "").trim()
      currentContent = []
    } else if (line.startsWith("### ")) {
      currentContent.push(line)
    } else {
      currentContent.push(line)
    }
  }
  
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
      if (currentTerm) {
        items.push({ term: currentTerm, definition: currentDef, example: currentEx })
      }
      const parts = line.replace(/^[-•]\s+/, "").split(":")
      currentTerm = parts[0]?.trim() || ""
      currentDef = parts[1]?.trim() || ""
      currentEx = ""
    } else if (line.trim().startsWith("  Example:")) {
      currentEx = line.replace("  Example:", "").trim()
    }
  }

  if (currentTerm) {
    items.push({ term: currentTerm, definition: currentDef, example: currentEx })
  }

  return items
}

interface LessonPlan {
  id: string;
  title: string;
  subject: string;
  grade: string;
  topic: string | null;
  lesson_content: string;
  duration: string | null;
  materials: string | null;
  pedagogical_strategy: string | null;
  differentiation_strategies: string | null;
  grouping_strategy: string | null;
  assessment_approach: string | null;
  curriculum_standards: string | null;
  overview: string | null;
  objectives: string | null;
  vocabulary: string | null;
  homework: string | null;
  extensions: string | null;
  standards: string | null;
  created_at: string;
  updated_at: string;
}

interface LessonPlanViewComponentProps {
  plan: LessonPlan;
}

export function LessonPlanViewComponent({ plan }: LessonPlanViewComponentProps) {
  const [activeTab, setActiveTab] = useState("preview")

  // Parse the markdown content into sections
  const sections = parseMarkdownContent(plan.lesson_content)
  
  // Parse objectives and materials from the content if not in database
  const objectives = plan.objectives ? JSON.parse(plan.objectives) : 
    parseListItems(sections["LEARNING OBJECTIVES"] || "")
  
  const materials = plan.materials ? JSON.parse(plan.materials) :
    parseListItems(sections["MATERIALS AND RESOURCES"] || "")
  
  const vocabulary = plan.vocabulary ? JSON.parse(plan.vocabulary) :
    parseVocabulary(sections["VOCABULARY"] || "")

  // Combine standards from both the database field and content sections
  const standardsContent = [
    plan.standards,
    sections["CURRICULUM STANDARDS"],
    sections["STANDARDS"]
  ].filter(Boolean).join("\n\n")

  const handleDownloadPDF = async () => {
    try {
      const response = await fetch(`/api/lesson-plans/${plan.id}/pdf`, {
        method: 'GET',
      })
      
      if (response.ok) {
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.style.display = 'none'
        a.href = url
        a.download = `${plan.title}.pdf`
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
      }
    } catch (error) {
      console.error('Error downloading PDF:', error)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header Card with Action Buttons */}
      <Card className="border-l-4 border-l-blue-500 shadow-sm">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex-1">
              <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                {plan.title}
              </CardTitle>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  {plan.subject}
                </Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Grade {plan.grade}
                </Badge>
                {plan.topic && (
                  <Badge variant="outline" className="border-purple-200 text-purple-700">
                    {plan.topic}
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                {plan.duration && (
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{plan.duration} minutes</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>Created {format(new Date(plan.created_at), "MMM d, yyyy")}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button onClick={handleDownloadPDF} variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
              <Button asChild size="sm">
                <Link href={`/lesson-plans/${plan.id}/edit`}>
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Plan
                </Link>
              </Button>
              <Button asChild size="sm" variant="secondary">
                <Link href={`/lesson-plans/${plan.id}/view#add-reflection`}>
                  <Lightbulb className="h-4 w-4 mr-2" />
                  Add Reflection
                </Link>
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="raw">Raw Content</TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="space-y-6 mt-6">
          {/* Overview */}
          {plan.overview && (
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-wrap leading-relaxed">{stripMarkdown(plan.overview)}</p>
              </CardContent>
            </Card>
          )}

          {/* Learning Objectives */}
          {objectives.length > 0 && (
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-green-600" />
                  Learning Objectives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {objectives.map((objective: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Key Vocabulary */}
          {Array.isArray(vocabulary) && vocabulary.length > 0 && (
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-purple-600" />
                  Key Vocabulary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {vocabulary.map((item, index) => (
                    <div key={index} className="border rounded-md p-4">
                      <h4 className="font-medium text-gray-900">{item.term}</h4>
                      <p className="text-gray-700 mt-1">{item.definition}</p>
                      {item.example && (
                        <p className="text-gray-600 mt-2 italic">Example: {item.example}</p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Main Lesson Content */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                Lesson Content
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                {Object.entries(sections).map(([section, content]) => (
                  <div key={section} className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{section}</h4>
                    <div className="text-gray-700 whitespace-pre-wrap">{content}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Materials & Resources */}
          {materials.length > 0 && (
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ClipboardList className="h-5 w-5 text-orange-600" />
                  Materials & Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {materials.map((material: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>{material}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Teaching Strategies */}
          <div className="grid md:grid-cols-2 gap-6">
            {plan.pedagogical_strategy && (
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Lightbulb className="h-5 w-5 text-yellow-600" />
                    Pedagogical Strategy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-wrap">{plan.pedagogical_strategy}</p>
                </CardContent>
              </Card>
            )}

            {plan.grouping_strategy && (
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users className="h-5 w-5 text-blue-600" />
                    Grouping Strategy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-wrap">{plan.grouping_strategy}</p>
                </CardContent>
              </Card>
            )}

            {plan.differentiation_strategies && (
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Target className="h-5 w-5 text-purple-600" />
                    Differentiation Strategies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-wrap">{plan.differentiation_strategies}</p>
                </CardContent>
              </Card>
            )}

            {plan.assessment_approach && (
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <ClipboardList className="h-5 w-5 text-red-600" />
                    Assessment Approach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-wrap">{plan.assessment_approach}</p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Homework */}
          {plan.homework && (
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-indigo-600" />
                  Homework
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-wrap">{stripMarkdown(plan.homework)}</p>
              </CardContent>
            </Card>
          )}

          {/* Extension Activities */}
          {plan.extensions && (
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-teal-600" />
                  Extension Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-wrap">{stripMarkdown(plan.extensions)}</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="raw" className="mt-6">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Raw Content</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="whitespace-pre-wrap bg-gray-50 p-4 rounded-lg text-sm overflow-auto">
                {plan.lesson_content}
              </pre>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export function LessonPlanCard({ plan }: { plan: LessonPlan }) {
  const formatSubject = (subject: string) => {
    return subject
      .replace(/_/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg">{plan.title}</CardTitle>
        <CardDescription>
          {formatSubject(plan.subject)} • Grade {plan.grade}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="line-clamp-3 text-sm mb-2">{plan.topic}</div>
        <a
          href={`/lesson-plans/${plan.id}/view`}
          className="text-blue-700 hover:underline text-sm"
        >
          View Plan
        </a>
      </CardContent>
    </Card>
  )
}