import { QuizProvider } from "@/lib/stores/quiz-store"
import { QuizForm } from "@/components/quiz/quiz-form"
import { QuizOutput } from "@/components/quiz/quiz-output"
import { QuizPreview } from "@/components/quiz/quiz-preview"

export default function QuizPage() {
  return (
    <QuizProvider>
      <div className="flex min-h-screen flex-col">
        <main className="flex-1 w-full px-4 py-6 max-w-[1400px] mx-auto">
          <h1 className="text-3xl font-bold mb-6">Create a Quiz</h1>
          <p className="text-muted-foreground mb-8">
            Generate customized quizzes with various question types to assess student understanding.
          </p>

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
