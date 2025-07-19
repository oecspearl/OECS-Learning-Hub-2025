"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Copy, Download, Edit, Save, FileText, Eye, EyeOff } from "lucide-react"
import { useQuizStore } from "@/lib/stores/quiz-store"
import { saveQuiz } from "@/app/actions/quizzes"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"
import { useSession } from "next-auth/react"

export function QuizOutput() {
  const { generatedQuiz, setGeneratedQuiz, isGenerating } = useQuizStore()
  const { toast } = useToast()
  const { data: session } = useSession()
  const [isSaving, setIsSaving] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editedContent, setEditedContent] = useState("")

  const handleCopy = () => {
    if (generatedQuiz?.content) {
      navigator.clipboard.writeText(generatedQuiz.content)
      alert("Quiz copied to clipboard!")
    }
  }

  const handleDownload = () => {
    if (generatedQuiz?.content) {
      const blob = new Blob([generatedQuiz.content], { type: "text/plain" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `${generatedQuiz.title || "quiz"}.txt`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }
  }

  const handleEdit = () => {
    if (generatedQuiz) {
      setEditedContent(generatedQuiz.content)
      setIsEditing(true)
    }
  }

  const handleSaveEdit = () => {
    if (generatedQuiz && editedContent) {
      setGeneratedQuiz({
        ...generatedQuiz,
        content: editedContent,
      })
      setIsEditing(false)
    }
  }

  const handleCancelEdit = () => {
    setIsEditing(false)
    setEditedContent("")
  }

  const handleSave = async () => {
    if (!generatedQuiz) return

    setIsSaving(true)
    try {
      // Get current user ID from session - ensure it's a string
      const userId = session?.user?.id?.toString() || session?.user?.email || "1"
      
      const result = await saveQuiz({
        title: generatedQuiz.title,
        description: generatedQuiz.description,
        subject: generatedQuiz.subject,
        grade: generatedQuiz.grade,
        topic: generatedQuiz.topic,
        content: generatedQuiz.content,
        question_count: generatedQuiz.questionCount,
        question_types: JSON.stringify(generatedQuiz.questionTypes || []),
        difficulty: generatedQuiz.difficulty,
        time_limit: generatedQuiz.timeLimit,
        tags: JSON.stringify(generatedQuiz.tags || []),
        instructions: generatedQuiz.instructions,
        user_id: userId,
      })

      if (result.success) {
        toast({
          title: "Quiz saved successfully!",
          description: "Your quiz has been saved to the database.",
        })
      } else {
        toast({
          title: "Error saving quiz",
          description: result.error || "Failed to save quiz. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error saving quiz:", error)
      toast({
        title: "Error",
        description: "An unexpected error occurred while saving the quiz.",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  // Format content for better display
  const formatContent = (content: any) => {
    // If content is a string, use it directly
    if (typeof content === 'string') {
      return content
        .replace(/^# (.+)$/gm, '<h1 class="text-2xl font-bold mb-4 text-primary">$1</h1>')
        .replace(/^## (.+)$/gm, '<h2 class="text-xl font-semibold mb-3 mt-6 text-secondary-foreground">$1</h2>')
        .replace(/^\*\*(.+)\*\*$/gm, '<p class="font-semibold mb-2">$1</p>')
        .replace(/^---$/gm, '<hr class="my-4 border-border">')
        .replace(/^(\d+)\.\s(.+)$/gm, '<div class="mb-3"><span class="font-medium text-primary">$1.</span> $2</div>')
        .replace(/^ {3}([A-D])\)\s(.+)$/gm, '<div class="ml-6 mb-1 text-muted-foreground">$1) $2</div>')
        .replace(/^ {3}(.+)$/gm, '<div class="ml-6 mb-1 text-muted-foreground">$1</div>')
        .replace(/\n/g, "<br>")
    }
    
    // If content is an object, stringify it for display
    return JSON.stringify(content, null, 2)
  }

  if (isGenerating) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Generating Quiz...</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500"></div>
            <span className="ml-3 text-muted-foreground">Creating your personalized quiz...</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!generatedQuiz) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Generated Quiz
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <FileText className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground mb-2">
              Configure your quiz settings and click "Generate Quiz" to create your assessment.
            </p>
            <p className="text-sm text-muted-foreground">Your quiz will appear here with full editing capabilities.</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Generated Quiz
            </CardTitle>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="secondary">{generatedQuiz.subject}</Badge>
              <Badge variant="secondary">{generatedQuiz.grade}</Badge>
              <Badge variant="outline">{generatedQuiz.questionCount} questions</Badge>
              {generatedQuiz.difficulty && <Badge variant="outline">{generatedQuiz.difficulty}</Badge>}
            </div>
          </div>
          <div className="flex gap-2">
            {isEditing ? (
              <>
                <Button onClick={handleSaveEdit} size="sm">
                  <Save className="w-4 h-4 mr-1" />
                  Save
                </Button>
                <Button onClick={handleCancelEdit} variant="outline" size="sm">
                  Cancel
                </Button>
              </>
            ) : (
              <Button onClick={handleEdit} variant="outline" size="sm">
                <Edit className="w-4 h-4 mr-1" />
                Edit
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="formatted" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="formatted">
              <Eye className="w-4 h-4 mr-1" />
              Formatted
            </TabsTrigger>
            <TabsTrigger value="edit">
              <Edit className="w-4 h-4 mr-1" />
              Edit
            </TabsTrigger>
            <TabsTrigger value="raw">
              <EyeOff className="w-4 h-4 mr-1" />
              Raw
            </TabsTrigger>
          </TabsList>

          <TabsContent value="formatted" className="space-y-4">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg max-h-96 overflow-y-auto border">
              <div
                className="prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{
                  __html: formatContent(generatedQuiz.content),
                }}
              />
            </div>
          </TabsContent>

          <TabsContent value="edit" className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Edit Quiz Content</h3>
                <div className="text-sm text-muted-foreground">Use Markdown formatting for best results</div>
              </div>
              <Textarea
                value={isEditing ? editedContent : generatedQuiz.content}
                onChange={(e) => {
                  if (isEditing) {
                    setEditedContent(e.target.value)
                  } else {
                    setGeneratedQuiz({
                      ...generatedQuiz,
                      content: e.target.value,
                    })
                  }
                }}
                className="min-h-96 font-mono text-sm"
                placeholder="Edit your quiz content here..."
              />
              <div className="flex gap-2">
                <Button onClick={handleSaveEdit} size="sm">
                  <Save className="w-4 h-4 mr-1" />
                  Apply Changes
                </Button>
                <Button
                  onClick={() => {
                    if (generatedQuiz) {
                      setEditedContent(generatedQuiz.content)
                    }
                  }}
                  variant="outline"
                  size="sm"
                >
                  Reset
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="raw" className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg max-h-96 overflow-y-auto border">
              <pre className="text-sm whitespace-pre-wrap font-mono">{generatedQuiz.content}</pre>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t">
          <Button onClick={handleCopy} variant="outline" size="sm">
            <Copy className="w-4 h-4 mr-2" />
            Copy to Clipboard
          </Button>
          <Button onClick={handleDownload} variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Download as Text
          </Button>
          <Button onClick={handleSave} variant="outline" size="sm" disabled={isSaving}>
            <Save className="w-4 h-4 mr-2" />
            {isSaving ? "Saving..." : "Save to Library"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
