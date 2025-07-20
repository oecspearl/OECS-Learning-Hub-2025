import { QuizProvider } from "@/lib/stores/quiz-store"
import { QuizForm } from "@/components/quiz/quiz-form"
import { QuizOutput } from "@/components/quiz/quiz-output"
import { QuizPreview } from "@/components/quiz/quiz-preview"

export default function QuizPage() {
  // Create a mock quiz object for the QuizOutput component
  const mockQuiz = {
    id: "mock-quiz-id",
    title: "Sample Quiz",
    description: "This is a sample quiz. Create your own using the quiz generator.",
    subject: "General",
    grade: "All Grades",
    questions: [
      {
        id: "1",
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: "Paris"
      },
      {
        id: "2",
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4"
      }
    ],
    timeLimit: 30,
    passingScore: 70,
    created_at: new Date().toISOString()
  }

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
              <QuizOutput quiz={mockQuiz} />
              <QuizPreview />
            </div>
          </div>
        </main>
      </div>
    </QuizProvider>
  )
}
