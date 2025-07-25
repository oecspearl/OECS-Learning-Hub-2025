"use client"

import { QuizDownload } from "@/components/quiz/quiz-download"
import { Button } from "@/components/ui/button"
import { Edit, Save } from "lucide-react"
import Link from "next/link"
import { useQuizStore } from "@/lib/stores/quiz-store"

export function QuizActions() {
  const { generatedQuiz } = useQuizStore()

  if (!generatedQuiz) {
    return null
  }

  return (
    <div className="flex items-center gap-2">
      <QuizDownload quizId={generatedQuiz.id || 'temp'} quizTitle={generatedQuiz.title} />
      <Button asChild variant="outline">
        <Link href={`/quiz/edit/${generatedQuiz.id || 'temp'}`}>
          <Edit className="h-4 w-4 mr-2" />
          Edit Quiz
        </Link>
      </Button>
      <Button asChild>
        <Link href="/dashboard/teacher">
          <Save className="h-4 w-4 mr-2" />
          View in Dashboard
        </Link>
      </Button>
    </div>
  )
} 