"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Save, Plus, Trash2, Move } from "lucide-react"

interface Question {
  id: string
  type: "multiple-choice" | "true-false" | "short-answer" | "fill-blank" | "matching" | "essay"
  question: string
  options?: string[]
  correctAnswer?: string | number
  explanation?: string
  points: number
}

interface QuizEditorProps {
  quiz: {
    title: string
    description?: string | null
    subject: string
    grade: string
    topic: string
    content: string
    question_count?: number
    question_types?: string | null
    difficulty?: string | null
    time_limit?: number | null
    tags?: string | null
    instructions?: string | null
    user_id: string
    created_at?: string
    updated_at?: string
  }
  onSave: (updatedQuiz: any) => void
}

export function QuizEditor({ quiz, onSave }: QuizEditorProps) {
  const [questions, setQuestions] = useState<Question[]>([])
  const [quizMetadata, setQuizMetadata] = useState({
    title: quiz.title,
    description: quiz.description || "",
    instructions: quiz.instructions || "",
    time_limit: quiz.time_limit || 30,
  })
  const [activeTab, setActiveTab] = useState("metadata")

  const addQuestion = (type: Question["type"]) => {
    const newQuestion: Question = {
      id: `q-${typeof window !== 'undefined' ? Date.now() : 'server'}`,
      type,
      question: "",
      points: type === "essay" ? 10 : type === "short-answer" ? 3 : 1,
      ...(type === "multiple-choice" && { options: ["", "", "", ""], correctAnswer: 0 }),
      ...(type === "true-false" && { correctAnswer: "true" }),
    }
    setQuestions([...questions, newQuestion])
  }

  const updateQuestion = (id: string, updates: Partial<Question>) => {
    setQuestions(questions.map((q) => (q.id === id ? { ...q, ...updates } : q)))
  }

  const deleteQuestion = (id: string) => {
    setQuestions(questions.filter((q) => q.id !== id))
  }

  const moveQuestion = (id: string, direction: "up" | "down") => {
    const index = questions.findIndex((q) => q.id === id)
    if ((direction === "up" && index > 0) || (direction === "down" && index < questions.length - 1)) {
      const newQuestions = [...questions]
      const targetIndex = direction === "up" ? index - 1 : index + 1
      ;[newQuestions[index], newQuestions[targetIndex]] = [newQuestions[targetIndex], newQuestions[index]]
      setQuestions(newQuestions)
    }
  }

  const renderQuestionEditor = (question: Question, index: number) => {
    return (
      <Card key={question.id} className="mb-4">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Badge variant="outline">Question {index + 1}</Badge>
              <Badge variant="secondary">{question.type.replace("-", " ")}</Badge>
              <span className="text-sm text-muted-foreground">{question.points} points</span>
            </div>
            <div className="flex gap-1">
              <Button onClick={() => moveQuestion(question.id, "up")} disabled={index === 0} variant="ghost" size="sm">
                <Move className="w-4 h-4" />
              </Button>
              <Button
                onClick={() => moveQuestion(question.id, "down")}
                disabled={index === questions.length - 1}
                variant="ghost"
                size="sm"
              >
                <Move className="w-4 h-4 rotate-180" />
              </Button>
              <Button onClick={() => deleteQuestion(question.id)} variant="ghost" size="sm">
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor={`question-${question.id}`}>Question</Label>
            <Textarea
              id={`question-${question.id}`}
              value={question.question}
              onChange={(e) => updateQuestion(question.id, { question: e.target.value })}
              placeholder="Enter your question here..."
              rows={2}
            />
          </div>

          {question.type === "multiple-choice" && (
            <div>
              <Label>Answer Options</Label>
              <div className="space-y-2">
                {question.options?.map((option, optionIndex) => (
                  <div key={optionIndex} className="flex gap-2">
                    <Input
                      value={option}
                      onChange={(e) => {
                        const newOptions = [...(question.options || [])]
                        newOptions[optionIndex] = e.target.value
                        updateQuestion(question.id, { options: newOptions })
                      }}
                      placeholder={`Option ${String.fromCharCode(65 + optionIndex)}`}
                    />
                    <Button
                      onClick={() => updateQuestion(question.id, { correctAnswer: optionIndex })}
                      variant={question.correctAnswer === optionIndex ? "default" : "outline"}
                      size="sm"
                    >
                      Correct
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {question.type === "true-false" && (
            <div>
              <Label>Correct Answer</Label>
              <div className="flex gap-2">
                <Button
                  onClick={() => updateQuestion(question.id, { correctAnswer: "true" })}
                  variant={question.correctAnswer === "true" ? "default" : "outline"}
                  size="sm"
                >
                  True
                </Button>
                <Button
                  onClick={() => updateQuestion(question.id, { correctAnswer: "false" })}
                  variant={question.correctAnswer === "false" ? "default" : "outline"}
                  size="sm"
                >
                  False
                </Button>
              </div>
            </div>
          )}

          {(question.type === "short-answer" || question.type === "fill-blank") && (
            <div>
              <Label htmlFor={`answer-${question.id}`}>Sample Answer</Label>
              <Input
                id={`answer-${question.id}`}
                value={question.correctAnswer as string}
                onChange={(e) => updateQuestion(question.id, { correctAnswer: e.target.value })}
                placeholder="Enter the expected answer..."
              />
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor={`points-${question.id}`}>Points</Label>
              <Input
                id={`points-${question.id}`}
                type="number"
                min="1"
                max="20"
                value={question.points}
                onChange={(e) => updateQuestion(question.id, { points: Number.parseInt(e.target.value) || 1 })}
              />
            </div>
            <div>
              <Label htmlFor={`explanation-${question.id}`}>Explanation (Optional)</Label>
              <Input
                id={`explanation-${question.id}`}
                value={question.explanation || ""}
                onChange={(e) => updateQuestion(question.id, { explanation: e.target.value })}
                placeholder="Explain the correct answer..."
              />
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  const handleSave = () => {
    const updatedQuiz = {
      ...quiz,
      ...quizMetadata,
      question_count: questions.length,
      content: generateQuizContent(),
    }
    onSave(updatedQuiz)
  }

  const generateQuizContent = () => {
    let content = `# ${quizMetadata.title}\n\n`
    content += `**Subject:** ${quiz.subject}\n`
    content += `**Grade Level:** ${quiz.grade}\n`
    content += `**Topic:** ${quiz.topic}\n`
    if (quizMetadata.description) content += `**Description:** ${quizMetadata.description}\n`
    if (quizMetadata.time_limit) content += `**Time Limit:** ${quizMetadata.time_limit} minutes\n`
    if (quizMetadata.instructions) content += `**Instructions:** ${quizMetadata.instructions}\n`
    content += `\n---\n\n## QUESTIONS:\n\n`

    questions.forEach((question, index) => {
      content += `${index + 1}. ${question.question}\n`

      if (question.type === "multiple-choice" && question.options) {
        question.options.forEach((option, optionIndex) => {
          content += `   ${String.fromCharCode(65 + optionIndex)}) ${option}\n`
        })
      }

      content += `\n`
    })

    content += `\n---\n\n## ANSWER KEY:\n\n`
    questions.forEach((question, index) => {
      content += `${index + 1}. `
      if (question.type === "multiple-choice") {
        content += `${String.fromCharCode(65 + (question.correctAnswer as number))}`
      } else {
        content += question.correctAnswer
      }
      if (question.explanation) {
        content += ` - ${question.explanation}`
      }
      content += `\n`
    })

    const totalPoints = questions.reduce((sum, q) => sum + q.points, 0)
    content += `\nTotal Points: ${totalPoints}\n`

    return content
  }

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="metadata">Quiz Details</TabsTrigger>
          <TabsTrigger value="questions">Questions ({questions.length})</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="metadata" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Quiz Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Quiz Title</Label>
                <Input
                  id="title"
                  value={quizMetadata.title}
                  onChange={(e) => setQuizMetadata({ ...quizMetadata, title: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={quizMetadata.description}
                  onChange={(e) => setQuizMetadata({ ...quizMetadata, description: e.target.value })}
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="instructions">Instructions</Label>
                <Textarea
                  id="instructions"
                  value={quizMetadata.instructions}
                  onChange={(e) => setQuizMetadata({ ...quizMetadata, instructions: e.target.value })}
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="timeLimit">Time Limit (minutes)</Label>
                <Input
                  id="timeLimit"
                  type="number"
                  value={quizMetadata.time_limit}
                  onChange={(e) =>
                    setQuizMetadata({ ...quizMetadata, time_limit: Number.parseInt(e.target.value) || 30 })
                  }
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="questions" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Questions</CardTitle>
                <div className="flex gap-2">
                  <Button onClick={() => addQuestion("multiple-choice")} size="sm">
                    <Plus className="w-4 h-4 mr-1" />
                    Multiple Choice
                  </Button>
                  <Button onClick={() => addQuestion("true-false")} variant="outline" size="sm">
                    <Plus className="w-4 h-4 mr-1" />
                    True/False
                  </Button>
                  <Button onClick={() => addQuestion("short-answer")} variant="outline" size="sm">
                    <Plus className="w-4 h-4 mr-1" />
                    Short Answer
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {questions.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Plus className="w-12 h-12 mx-auto mb-4" />
                  <p>No questions yet. Click the buttons above to add questions.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {questions.map((question, index) => renderQuestionEditor(question, index))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Quiz Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none">
                <pre className="whitespace-pre-wrap">{generateQuizContent()}</pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end gap-2">
        <Button onClick={handleSave}>
          <Save className="w-4 h-4 mr-2" />
          Save Quiz
        </Button>
      </div>
    </div>
  )
}
