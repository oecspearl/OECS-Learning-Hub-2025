"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Clock, Users, Edit, Eye, Trash2, Copy, Download } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { deleteQuiz } from "@/app/actions/quizzes"
import { useToast } from "@/hooks/use-toast"

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

interface QuizCardProps {
  quiz: Quiz
  onDelete?: (id: string) => void
}

export function QuizCard({ quiz, onDelete }: QuizCardProps) {
  const { toast } = useToast()
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this quiz?")) {
      return
    }

    setIsDeleting(true)
    try {
      const result = await deleteQuiz(quiz.id)
      if (result.success) {
        toast({
          title: "Quiz deleted",
          description: "The quiz has been successfully deleted.",
        })
        onDelete?.(quiz.id)
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to delete quiz.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      })
    } finally {
      setIsDeleting(false)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(quiz.content)
    toast({
      title: "Quiz copied",
      description: "Quiz content has been copied to clipboard.",
    })
  }

  const handleDownload = () => {
    const blob = new Blob([quiz.content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${quiz.title || "quiz"}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    
    toast({
      title: "Quiz downloaded",
      description: "Quiz has been downloaded as a text file.",
    })
  }

  const formatDate = (date: Date | string | undefined) => {
    if (!date) return "Unknown"
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty?.toLowerCase()) {
      case "easy":
        return "bg-green-100 text-green-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "hard":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex-shrink-0">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold line-clamp-2 mb-2">
              {quiz.title}
            </CardTitle>
            <CardDescription className="line-clamp-2">
              {quiz.description || "No description available"}
            </CardDescription>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-3">
          <Badge variant="secondary" className="text-xs">
            {quiz.subject}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {quiz.grade}
          </Badge>
          {quiz.difficulty && (
            <Badge className={`text-xs ${getDifficultyColor(quiz.difficulty)}`}>
              {quiz.difficulty}
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        <div className="space-y-3 flex-1">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <FileText className="h-4 w-4" />
            <span>{quiz.question_count} questions</span>
          </div>
          
          {quiz.time_limit && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{quiz.time_limit} minutes</span>
            </div>
          )}

          {quiz.question_types && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>
                {(() => {
                  try {
                    const types = JSON.parse(quiz.question_types)
                    return Array.isArray(types) ? types.join(", ") : quiz.question_types
                  } catch {
                    return quiz.question_types
                  }
                })()}
              </span>
            </div>
          )}

          {quiz.tags && (
            <div className="flex flex-wrap gap-1">
              {(() => {
                try {
                  const tags = JSON.parse(quiz.tags)
                  if (Array.isArray(tags) && tags.length > 0) {
                    return (
                      <>
                        {tags.slice(0, 3).map((tag: string, index: number) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{tags.length - 3} more
                          </Badge>
                        )}
                      </>
                    )
                  }
                } catch {
                  // If parsing fails, don't show tags
                }
                return null
              })()}
            </div>
          )}

          <div className="text-xs text-muted-foreground">
            Created: {formatDate(quiz.created_at)}
          </div>
        </div>

        <div className="flex gap-2 mt-4 pt-4 border-t">
          <Button asChild size="sm" className="flex-1">
            <Link href={`/quiz/view/${quiz.id}`}>
              <Eye className="h-4 w-4 mr-1" />
              View
            </Link>
          </Button>
          
          <Button asChild size="sm" variant="outline">
            <Link href={`/quiz/edit/${quiz.id}`}>
              <Edit className="h-4 w-4 mr-1" />
              Edit
            </Link>
          </Button>
        </div>

        <div className="flex gap-2 mt-2">
          <Button size="sm" variant="outline" onClick={handleCopy} className="flex-1">
            <Copy className="h-4 w-4 mr-1" />
            Copy
          </Button>
          
          <Button size="sm" variant="outline" onClick={handleDownload} className="flex-1">
            <Download className="h-4 w-4 mr-1" />
            Download
          </Button>
          
          <Button 
            size="sm" 
            variant="outline" 
            onClick={handleDelete}
            disabled={isDeleting}
            className="text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
} 