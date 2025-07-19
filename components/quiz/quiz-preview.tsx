"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, BookOpen, Play, FileText, Target } from "lucide-react"
import { useQuizStore } from "@/lib/stores/quiz-store"
import { QuizFormatter } from "./quiz-formatter"

export function QuizPreview() {
  const { generatedQuiz } = useQuizStore()

  if (!generatedQuiz) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Quiz Preview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground mb-2">Generate a quiz to see the preview here.</p>
            <p className="text-sm text-muted-foreground">You'll be able to preview and edit your quiz before saving.</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  const calculateReadingTime = (content: string) => {
    const wordsPerMinute = 200
    const wordCount = content.split(/\s+/).length
    return Math.ceil(wordCount / wordsPerMinute)
  }

  const extractQuestionCount = (content: string) => {
    const questionMatches = content.match(/^\d+\.\s/gm)
    return questionMatches ? questionMatches.length : generatedQuiz.questionCount
  }

  const actualQuestionCount = extractQuestionCount(generatedQuiz.content)
  const readingTime = calculateReadingTime(generatedQuiz.content)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="w-5 h-5" />
          Quiz Preview
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Quiz Metadata */}
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg">{generatedQuiz.title}</h3>
            {generatedQuiz.description && (
              <p className="text-muted-foreground text-sm mt-1">{generatedQuiz.description}</p>
            )}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
              <Target className="w-4 h-4 text-primary" />
              <div>
                <div className="font-medium">{generatedQuiz.subject}</div>
                <div className="text-xs text-muted-foreground">Subject</div>
              </div>
            </div>

            <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
              <Users className="w-4 h-4 text-primary" />
              <div>
                <div className="font-medium">{generatedQuiz.grade}</div>
                <div className="text-xs text-muted-foreground">Grade Level</div>
              </div>
            </div>

            <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
              <FileText className="w-4 h-4 text-primary" />
              <div>
                <div className="font-medium">{actualQuestionCount} questions</div>
                <div className="text-xs text-muted-foreground">Total Questions</div>
              </div>
            </div>

            {generatedQuiz.timeLimit && (
              <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                <Clock className="w-4 h-4 text-primary" />
                <div>
                  <div className="font-medium">{generatedQuiz.timeLimit} min</div>
                  <div className="text-xs text-muted-foreground">Time Limit</div>
                </div>
              </div>
            )}
          </div>

          {/* Additional Info */}
          {(generatedQuiz.questionTypes || generatedQuiz.difficulty || generatedQuiz.tags) && (
            <div className="space-y-3 pt-4 border-t">
              {generatedQuiz.questionTypes && generatedQuiz.questionTypes.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium mb-2">Question Types:</h4>
                  <div className="flex flex-wrap gap-2">
                    {generatedQuiz.questionTypes.map((type) => (
                      <Badge key={type} variant="outline" className="text-xs">
                        {type.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {generatedQuiz.difficulty && (
                <div>
                  <h4 className="text-sm font-medium mb-2">Difficulty:</h4>
                  <Badge variant="secondary">{generatedQuiz.difficulty}</Badge>
                </div>
              )}

              {generatedQuiz.tags && generatedQuiz.tags.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium mb-2">Tags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {generatedQuiz.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {generatedQuiz.instructions && (
            <div className="pt-4 border-t">
              <h4 className="text-sm font-medium mb-2">Instructions:</h4>
              <p className="text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg">{generatedQuiz.instructions}</p>
            </div>
          )}
        </div>

        {/* Content Preview */}
        <div className="pt-4 border-t">
          <h4 className="text-sm font-medium mb-3">Content Preview:</h4>
          <div className="max-h-64 overflow-y-auto border rounded-lg p-4 bg-gradient-to-br from-gray-50 to-gray-100">
            <QuizFormatter content={generatedQuiz.content.substring(0, 1000) + "..."} />
          </div>
        </div>

        {/* Action Button */}
        <Button className="w-full" variant="outline">
          <Play className="w-4 h-4 mr-2" />
          Take Quiz Preview
        </Button>
      </CardContent>
    </Card>
  )
}
