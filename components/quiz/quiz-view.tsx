"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Clock, FileText, Users, Target, Download, Edit, Copy } from "lucide-react"
import Link from "next/link"

interface Quiz {
  id: string
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

interface QuizViewComponentProps {
  quiz: Quiz
}

export function QuizViewComponent({ quiz }: QuizViewComponentProps) {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(quiz.content)
    // You could add a toast notification here
  }

  const handleDownload = () => {
    const blob = new Blob([quiz.content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${quiz.title}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <CardTitle className="text-2xl">{quiz.title}</CardTitle>
              {quiz.description && <p className="text-muted-foreground">{quiz.description}</p>}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleCopy}>
                <Copy className="h-4 w-4 mr-1" />
                Copy
              </Button>
              <Button variant="outline" size="sm" onClick={handleDownload}>
                <Download className="h-4 w-4 mr-1" />
                Download
              </Button>
              <Link href={`/quiz/edit/${quiz.id}`}>
                <Button size="sm">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
              </Link>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">{quiz.subject}</p>
                <p className="text-xs text-muted-foreground">Subject</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">{quiz.grade}</p>
                <p className="text-xs text-muted-foreground">Grade Level</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">{quiz.question_count} questions</p>
                <p className="text-xs text-muted-foreground">Total Questions</p>
              </div>
            </div>
            {quiz.time_limit && (
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">{quiz.time_limit} min</p>
                  <p className="text-xs text-muted-foreground">Time Limit</p>
                </div>
              </div>
            )}
          </div>

          {(quiz.question_types || quiz.difficulty || quiz.tags) && (
            <>
              <Separator className="my-4" />
              <div className="space-y-3">
                {quiz.question_types && (() => {
                  try {
                    const types = JSON.parse(quiz.question_types)
                    return Array.isArray(types) && types.length > 0 ? (
                      <div>
                        <h4 className="text-sm font-medium mb-2">Question Types:</h4>
                        <div className="flex flex-wrap gap-2">
                          {types.map((type) => (
                            <Badge key={type} variant="outline">
                              {type.replace("-", " ").replace(/\b\w/g, (l: string) => l.toUpperCase())}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ) : null
                  } catch {
                    return null
                  }
                })()}

                {quiz.difficulty && (
                  <div>
                    <h4 className="text-sm font-medium mb-2">Difficulty:</h4>
                    <Badge variant="secondary">{quiz.difficulty}</Badge>
                  </div>
                )}

                {quiz.tags && (() => {
                  try {
                    const tags = JSON.parse(quiz.tags)
                    return Array.isArray(tags) && tags.length > 0 ? (
                      <div>
                        <h4 className="text-sm font-medium mb-2">Tags:</h4>
                        <div className="flex flex-wrap gap-2">
                          {tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ) : null
                  } catch {
                    return null
                  }
                })()}
              </div>
            </>
          )}

          {quiz.instructions && (
            <>
              <Separator className="my-4" />
              <div>
                <h4 className="text-sm font-medium mb-2">Instructions:</h4>
                <p className="text-sm text-muted-foreground">{quiz.instructions}</p>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Content Card */}
      <Card>
        <CardHeader>
          <CardTitle>Quiz Content</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-sm max-w-none">
            <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">{quiz.content}</pre>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
