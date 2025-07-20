"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Sparkles, X, AlertCircle, Save } from "lucide-react"
import { useQuizStore } from "@/lib/stores/quiz-store"
import { generateQuiz } from "@/app/actions/quiz-generation"
import { saveQuiz } from "@/app/actions/quizzes"
import { useAuth } from "@/contexts/AuthContext"
import { toast } from "@/components/ui/use-toast"
import Link from "next/link"

const subjects = [
  "Language Arts",
  "Mathematics",
  "Science",
  "Social Studies",
  "Art",
  "Music",
  "Physical Education",
  "Technology",
]

const grades = ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6"]

const questionTypes = ["Multiple Choice", "True/False", "Short Answer", "Fill in the Blank", "Matching", "Essay"]

const difficulties = ["Easy", "Medium", "Hard", "Mixed"]

export function QuizForm() {
  const { setGeneratedQuiz, setIsGenerating, isGenerating, generatedQuiz } = useQuizStore()
  const { user } = useAuth()
  const [saving, setSaving] = useState(false)

  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    grade: "",
    topic: "",
    description: "",
    questionCount: 10,
    selectedQuestionTypes: [] as string[],
    difficulty: "Medium",
    timeLimit: 30,
    instructions: "",
    tags: [] as string[],
  })

  const [newTag, setNewTag] = useState("")
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    // Validate form data
    if (!formData.title?.trim()) {
      setError("Quiz title is required")
      return
    }

    if (!formData.subject?.trim()) {
      setError("Subject is required")
      return
    }

    if (!formData.grade?.trim()) {
      setError("Grade level is required")
      return
    }

    if (!formData.topic?.trim()) {
      setError("Topic is required")
      return
    }

    if (formData.questionCount < 1 || formData.questionCount > 50) {
      setError("Question count must be between 1 and 50")
      return
    }

    // Prepare quiz parameters
    const quizParams = {
      title: formData.title,
      subject: formData.subject,
      grade: formData.grade,
      topic: formData.topic,
      description: formData.description,
      questionCount: formData.questionCount,
      questionTypes: formData.selectedQuestionTypes.length > 0 ? formData.selectedQuestionTypes : ["Multiple Choice"],
      difficulty: formData.difficulty,
      timeLimit: formData.timeLimit,
      instructions: formData.instructions,
      tags: formData.tags,
    }

    setIsGenerating(true)

    try {
      const result = await generateQuiz(quizParams)

      if (result.success && result.data) {
        // Save the generated quiz to the database
        if (user?.id) {
          const saveResult = await saveQuiz({
            title: result.data.title,
            description: result.data.description,
            subject: result.data.subject,
            grade: result.data.grade,
            topic: result.data.topic,
            content: result.data.content,
            question_count: result.data.questionCount,
            question_types: JSON.stringify(result.data.questionTypes),
            difficulty: result.data.difficulty,
            time_limit: result.data.timeLimit,
            tags: JSON.stringify(result.data.tags),
            instructions: result.data.instructions,
            user_id: user.id
          })

          if (saveResult.success) {
            // Update the generated quiz with the saved ID
            setGeneratedQuiz({
              ...result.data,
              id: saveResult.data.id
            })
            setError(null)
          } else {
            setError("Quiz generated but failed to save. Please try again.")
          }
        } else {
          setGeneratedQuiz(result.data)
          setError(null)
        }
      } else {
        setError(result.error || "Failed to generate quiz. Please try again.")
      }
    } catch (error) {
      console.error("Error generating quiz:", error)
      setError("An unexpected error occurred. Please try again.")
    } finally {
      setIsGenerating(false)
    }
  }

  const handleSaveQuiz = async () => {
    if (!generatedQuiz || !user?.id) {
      toast({
        title: "Error",
        description: "Please generate a quiz first and ensure you're logged in.",
        variant: "destructive",
      })
      return
    }

    setSaving(true)
    try {
      const saveResult = await saveQuiz({
        title: generatedQuiz.title,
        description: generatedQuiz.description,
        subject: generatedQuiz.subject,
        grade: generatedQuiz.grade,
        topic: generatedQuiz.topic,
        content: generatedQuiz.content,
        question_count: generatedQuiz.questionCount,
        question_types: JSON.stringify(generatedQuiz.questionTypes),
        difficulty: generatedQuiz.difficulty,
        time_limit: generatedQuiz.timeLimit,
        tags: JSON.stringify(generatedQuiz.tags),
        instructions: generatedQuiz.instructions,
        user_id: user.id
      })

      if (saveResult.success) {
        toast({
          title: "Quiz saved successfully",
          description: "Your quiz has been saved to your dashboard.",
        })
        
        // Update the generated quiz with the saved ID
        setGeneratedQuiz({
          ...generatedQuiz,
          id: saveResult.data.id
        })
      } else {
        toast({
          title: "Save failed",
          description: "Failed to save quiz. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error saving quiz:", error)
      toast({
        title: "Error",
        description: "An unexpected error occurred while saving.",
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  const handleQuestionTypeChange = (type: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        selectedQuestionTypes: [...prev.selectedQuestionTypes, type],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        selectedQuestionTypes: prev.selectedQuestionTypes.filter((t) => t !== type),
      }))
    }
  }

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()],
      }))
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-500" />
          AI Quiz Generator
        </CardTitle>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="basic">Basic Info</TabsTrigger>
              <TabsTrigger value="questions">Questions</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="space-y-4">
              <div>
                <Label htmlFor="title">Quiz Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                  placeholder="e.g., Fractions Assessment, Caribbean History Quiz"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Select
                    value={formData.subject}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, subject: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((subject) => (
                        <SelectItem key={subject} value={subject}>
                          {subject}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="grade">Grade Level *</Label>
                  <Select
                    value={formData.grade}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, grade: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select grade" />
                    </SelectTrigger>
                    <SelectContent>
                      {grades.map((grade) => (
                        <SelectItem key={grade} value={grade}>
                          {grade}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="topic">Topic *</Label>
                <Input
                  id="topic"
                  value={formData.topic}
                  onChange={(e) => setFormData((prev) => ({ ...prev, topic: e.target.value }))}
                  placeholder="e.g., Adding Fractions, Photosynthesis, Caribbean Independence"
                  required
                />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                  placeholder="Brief description of what this quiz will assess"
                  rows={3}
                />
              </div>
            </TabsContent>

            <TabsContent value="questions" className="space-y-4">
              <div>
                <Label>Question Types *</Label>
                <p className="text-sm text-muted-foreground mb-2">
                  Select the types of questions you want in your quiz
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {questionTypes.map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox
                        id={type}
                        checked={formData.selectedQuestionTypes.includes(type)}
                        onCheckedChange={(checked) => handleQuestionTypeChange(type, checked as boolean)}
                      />
                      <Label htmlFor={type} className="text-sm">
                        {type}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="questionCount">Number of Questions</Label>
                  <Input
                    id="questionCount"
                    type="number"
                    min="1"
                    max="50"
                    value={formData.questionCount}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        questionCount: Number.parseInt(e.target.value) || 10,
                      }))
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="difficulty">Difficulty Level</Label>
                  <Select
                    value={formData.difficulty}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, difficulty: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {difficulties.map((difficulty) => (
                        <SelectItem key={difficulty} value={difficulty}>
                          {difficulty}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="settings" className="space-y-4">
              <div>
                <Label htmlFor="timeLimit">Time Limit (minutes)</Label>
                <Input
                  id="timeLimit"
                  type="number"
                  min="5"
                  max="180"
                  value={formData.timeLimit}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      timeLimit: Number.parseInt(e.target.value) || 30,
                    }))
                  }
                />
              </div>

              <div>
                <Label htmlFor="instructions">Special Instructions</Label>
                <Textarea
                  id="instructions"
                  value={formData.instructions}
                  onChange={(e) => setFormData((prev) => ({ ...prev, instructions: e.target.value }))}
                  placeholder="Any special instructions for students taking this quiz"
                  rows={3}
                />
              </div>

              <div>
                <Label>Tags</Label>
                <div className="flex gap-2 mt-2">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Add a tag"
                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                  />
                  <Button type="button" onClick={addTag} variant="outline">
                    Add
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {formData.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                      {tag}
                      <X className="w-3 h-3 cursor-pointer" onClick={() => removeTag(tag)} />
                    </Badge>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <Button type="submit" className="w-full" disabled={isGenerating}>
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generating Quiz with AI...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Generate Quiz with AI
              </>
            )}
          </Button>
        </form>

        {generatedQuiz && (
          <div className="mt-6 pt-6 border-t">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Quiz Generated Successfully!</h3>
              <Badge variant="secondary">Ready to Save</Badge>
            </div>
            <div className="space-y-3">
              <Button 
                onClick={handleSaveQuiz}
                disabled={saving}
                className="w-full"
              >
                {saving ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Saving Quiz...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save to Dashboard
                  </>
                )}
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/dashboard/teacher">
                  View All Quizzes
                </Link>
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
