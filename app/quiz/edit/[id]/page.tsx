"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Save, ArrowLeft, Edit, Trash2, Plus } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"
import { toast } from "@/components/ui/use-toast"
import Link from "next/link"
import { QuizDownload } from "@/components/quiz/quiz-download"

interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: string
  type: string
}

interface QuizData {
  id: string
  title: string
  description?: string
  subject: string
  grade: string
  topic: string
  content: string
  question_count?: number
  question_types?: string
  difficulty?: string
  time_limit?: number
  tags?: string
  instructions?: string
  user_id: string
  created_at?: string
  updated_at?: string
}

export default function EditQuizPage() {
  const params = useParams()
  const router = useRouter()
  const { user } = useAuth()
  const quizId = params?.id as string

  if (!quizId) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-red-600">Invalid quiz ID</p>
          <Button asChild className="mt-4">
            <Link href="/dashboard/teacher">Back to Dashboard</Link>
          </Button>
        </div>
      </div>
    )
  }

  const [quiz, setQuiz] = useState<QuizData | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("basic")

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    subject: "",
    grade: "",
    topic: "",
    difficulty: "Medium",
    timeLimit: 30,
    instructions: "",
    tags: [] as string[],
    content: ""
  })

  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [newTag, setNewTag] = useState("")

  useEffect(() => {
    fetchQuiz()
  }, [quizId])

  const fetchQuiz = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/quizzes/${quizId}`)
      
      if (!response.ok) {
        throw new Error("Failed to fetch quiz")
      }

      const quizData = await response.json()
      setQuiz(quizData)
      
      // Parse quiz data for form
      setFormData({
        title: quizData.title || "",
        description: quizData.description || "",
        subject: quizData.subject || "",
        grade: quizData.grade || quizData.grade_level || "",
        topic: quizData.topic || "",
        difficulty: quizData.difficulty || "Medium",
        timeLimit: quizData.time_limit || 30,
        instructions: quizData.instructions || "",
        tags: (() => {
          try {
            if (quizData.tags) {
              // Handle both JSON strings and PostgreSQL arrays
              if (typeof quizData.tags === 'string') {
                if (quizData.tags.startsWith('{') && quizData.tags.endsWith('}')) {
                  // PostgreSQL array format
                  return quizData.tags.slice(1, -1).split(',').map((tag: string) => tag.trim().replace(/"/g, '')).filter((tag: string) => tag)
                } else {
                  // JSON string format
                  return JSON.parse(quizData.tags)
                }
              }
              return quizData.tags
            }
            return []
          } catch {
            return []
          }
        })(),
        content: quizData.content || ""
      })

      // Parse questions from content
      const parsedQuestions = parseQuestionsFromContent(quizData.content)
      setQuestions(parsedQuestions)
    } catch (err) {
      console.error("Error fetching quiz:", err)
      setError("Failed to load quiz")
    } finally {
      setLoading(false)
    }
  }

  const parseQuestionsFromContent = (content: string): QuizQuestion[] => {
    const questions: QuizQuestion[] = []
    const lines = content.split('\n')
    let currentQuestion: any = null
    
    lines.forEach((line) => {
      const trimmedLine = line.trim()
      
      if (/^\d+\./.test(trimmedLine) || /^Q\d+:/.test(trimmedLine)) {
        if (currentQuestion) {
          questions.push(currentQuestion)
        }
        currentQuestion = {
          id: `q${questions.length + 1}`,
          question: trimmedLine.replace(/^\d+\.\s*/, '').replace(/^Q\d+:\s*/, ''),
          options: [],
          correctAnswer: '',
          type: 'multiple-choice'
        }
      } else if (currentQuestion && (trimmedLine.startsWith('a)') || trimmedLine.startsWith('A)'))) {
        currentQuestion.options.push(trimmedLine.replace(/^[aA]\)\s*/, ''))
      } else if (currentQuestion && (trimmedLine.startsWith('b)') || trimmedLine.startsWith('B)'))) {
        currentQuestion.options.push(trimmedLine.replace(/^[bB]\)\s*/, ''))
      } else if (currentQuestion && (trimmedLine.startsWith('c)') || trimmedLine.startsWith('C)'))) {
        currentQuestion.options.push(trimmedLine.replace(/^[cC]\)\s*/, ''))
      } else if (currentQuestion && (trimmedLine.startsWith('d)') || trimmedLine.startsWith('D)'))) {
        currentQuestion.options.push(trimmedLine.replace(/^[dD]\)\s*/, ''))
      }
    })
    
    if (currentQuestion) {
      questions.push(currentQuestion)
    }
    
    return questions
  }

  const handleSave = async () => {
    try {
      setSaving(true)
      setError(null)

      const updatedQuiz = {
        ...quiz,
        title: formData.title,
        description: formData.description,
        subject: formData.subject,
        grade_level: formData.grade, // Map to grade_level for database
        topic: formData.topic,
        difficulty: formData.difficulty,
        time_limit: formData.timeLimit,
        instructions: formData.instructions,
        tags: formData.tags.length > 0 ? `{${formData.tags.map((tag: string) => `"${tag}"`).join(',')}}` : '{}', // PostgreSQL array format
        content: formData.content,
        updated_at: new Date().toISOString()
      }

      const response = await fetch(`/api/quizzes/${quizId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedQuiz),
      })

      if (!response.ok) {
        throw new Error("Failed to update quiz")
      }

      toast({
        title: "Quiz updated successfully",
        description: "Your quiz has been saved with the new changes.",
      })

      router.push('/dashboard/teacher')
    } catch (err) {
      console.error("Error saving quiz:", err)
      setError("Failed to save quiz")
      toast({
        title: "Error",
        description: "Failed to save quiz. Please try again.",
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }))
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }))
  }

  const updateQuestion = (index: number, field: keyof QuizQuestion, value: any) => {
    const updatedQuestions = [...questions]
    updatedQuestions[index] = { ...updatedQuestions[index], [field]: value }
    setQuestions(updatedQuestions)
  }

  const addQuestion = () => {
    const newQuestion: QuizQuestion = {
      id: `q${questions.length + 1}`,
      question: "",
      options: ["", "", "", ""],
      correctAnswer: "",
      type: "multiple-choice"
    }
    setQuestions([...questions, newQuestion])
  }

  const removeQuestion = (index: number) => {
    setQuestions(questions.filter((_, i) => i !== index))
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p>Loading quiz...</p>
        </div>
      </div>
    )
  }

  if (!quiz) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-red-600">Quiz not found</p>
          <Button asChild className="mt-4">
            <Link href="/dashboard/teacher">Back to Dashboard</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" asChild>
            <Link href="/dashboard/teacher">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold">Edit Quiz</h1>
            <p className="text-muted-foreground">Modify your quiz content and settings</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <QuizDownload quizId={quizId} quizTitle={quiz?.title || "Untitled Quiz"} />
          <Button onClick={handleSave} disabled={saving}>
            {saving ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </>
            )}
          </Button>
        </div>
      </div>

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="basic">Basic Info</TabsTrigger>
              <TabsTrigger value="questions">Questions</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="title">Quiz Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="Enter quiz title"
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Enter quiz description"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Select value={formData.subject} onValueChange={(value) => setFormData(prev => ({ ...prev, subject: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Mathematics">Mathematics</SelectItem>
                          <SelectItem value="Science">Science</SelectItem>
                          <SelectItem value="Language Arts">Language Arts</SelectItem>
                          <SelectItem value="Social Studies">Social Studies</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="grade">Grade Level *</Label>
                      <Select value={formData.grade} onValueChange={(value) => setFormData(prev => ({ ...prev, grade: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select grade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Grade 1">Grade 1</SelectItem>
                          <SelectItem value="Grade 2">Grade 2</SelectItem>
                          <SelectItem value="Grade 3">Grade 3</SelectItem>
                          <SelectItem value="Grade 4">Grade 4</SelectItem>
                          <SelectItem value="Grade 5">Grade 5</SelectItem>
                          <SelectItem value="Grade 6">Grade 6</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="topic">Topic *</Label>
                    <Input
                      id="topic"
                      value={formData.topic}
                      onChange={(e) => setFormData(prev => ({ ...prev, topic: e.target.value }))}
                      placeholder="Enter quiz topic"
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
                    <Button onClick={addQuestion} size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Question
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {questions.map((question, index) => (
                    <div key={question.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold">Question {index + 1}</h4>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeQuestion(index)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <Label>Question Text</Label>
                          <Textarea
                            value={question.question}
                            onChange={(e) => updateQuestion(index, 'question', e.target.value)}
                            placeholder="Enter your question"
                          />
                        </div>

                        <div>
                          <Label>Options</Label>
                          <div className="space-y-2">
                            {question.options.map((option, optionIndex) => (
                              <div key={optionIndex} className="flex items-center gap-2">
                                <Input
                                  value={option}
                                  onChange={(e) => {
                                    const newOptions = [...question.options]
                                    newOptions[optionIndex] = e.target.value
                                    updateQuestion(index, 'options', newOptions)
                                  }}
                                  placeholder={`Option ${optionIndex + 1}`}
                                />
                                <input
                                  type="radio"
                                  name={`correct-${index}`}
                                  checked={question.correctAnswer === option}
                                  onChange={() => updateQuestion(index, 'correctAnswer', option)}
                                />
                                <Label className="text-sm">Correct</Label>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Quiz Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="difficulty">Difficulty</Label>
                      <Select value={formData.difficulty} onValueChange={(value) => setFormData(prev => ({ ...prev, difficulty: value }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Easy">Easy</SelectItem>
                          <SelectItem value="Medium">Medium</SelectItem>
                          <SelectItem value="Hard">Hard</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="timeLimit">Time Limit (minutes)</Label>
                      <Input
                        id="timeLimit"
                        type="number"
                        value={formData.timeLimit}
                        onChange={(e) => setFormData(prev => ({ ...prev, timeLimit: parseInt(e.target.value) || 30 }))}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="instructions">Instructions</Label>
                    <Textarea
                      id="instructions"
                      value={formData.instructions}
                      onChange={(e) => setFormData(prev => ({ ...prev, instructions: e.target.value }))}
                      placeholder="Enter quiz instructions"
                    />
                  </div>

                  <div>
                    <Label>Tags</Label>
                    <div className="flex gap-2 mb-2">
                      <Input
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        placeholder="Add a tag"
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                      />
                      <Button onClick={addTag} size="sm">Add</Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {formData.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="cursor-pointer" onClick={() => removeTag(tag)}>
                          {tag} ×
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>See how your quiz will appear</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">{formData.title || "Untitled Quiz"}</h3>
                  <p className="text-sm text-muted-foreground">{formData.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Subject:</span> {formData.subject}
                  </div>
                  <div>
                    <span className="font-medium">Grade:</span> {formData.grade}
                  </div>
                  <div>
                    <span className="font-medium">Questions:</span> {questions.length}
                  </div>
                  <div>
                    <span className="font-medium">Time Limit:</span> {formData.timeLimit} min
                  </div>
                </div>

                {questions.length > 0 && (
                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-2">Sample Question:</h4>
                    <div className="bg-muted p-3 rounded">
                      <p className="mb-2">{questions[0]?.question || "No question text"}</p>
                      <div className="space-y-1">
                        {questions[0]?.options.map((option, index) => (
                          <div key={index} className="text-sm">
                            {String.fromCharCode(97 + index)}) {option}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
