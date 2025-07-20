import { QuizProvider } from "@/lib/stores/quiz-store"
import { QuizForm } from "@/components/quiz/quiz-form"
import { QuizOutput } from "@/components/quiz/quiz-output"
import { QuizPreview } from "@/components/quiz/quiz-preview"
import { QuizDownload } from "@/components/quiz/quiz-download"
import { Button } from "@/components/ui/button"
import { Edit, Save } from "lucide-react"
import Link from "next/link"
import { QuizActions } from "@/components/quiz/quiz-actions"

export default function QuizPage() {
  return (
    <QuizProvider>
      <div className="flex min-h-screen flex-col">
        <main className="flex-1 w-full px-4 py-6 max-w-[1400px] mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Create a Quiz</h1>
              <p className="text-muted-foreground">
                Generate customized quizzes with various question types to assess student understanding.
              </p>
            </div>
            <QuizActions />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <QuizForm />
            </div>
            <div className="space-y-6">
              <QuizOutput />
              <QuizPreview />
            </div>
          </div>
        </main>
      </div>
    </QuizProvider>
  )
}
