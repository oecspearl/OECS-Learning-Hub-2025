import { getQuizById } from "@/app/actions/quizzes"
import { notFound } from "next/navigation"
import { QuizEditWrapper } from "@/components/quiz/quiz-edit-wrapper"

export default async function EditQuizPage({ params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const quiz = await getQuizById(id)

    if (!quiz || !quiz.id) {
      return notFound()
    }

    return (
      <div className="flex min-h-screen flex-col page-transition bg-gradient-to-b from-amber-50 to-white">
        <main className="flex-1 w-full px-4 py-6 max-w-[1400px] mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 text-primary bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">
              Edit Quiz
            </h1>
            <p className="text-muted-foreground">Make changes to your quiz and save your updates.</p>
          </div>
          <QuizEditWrapper quiz={{ ...quiz, id: quiz.id }} />
        </main>
      </div>
    )
  } catch (error) {
    console.error("Error loading quiz:", error)
    return notFound()
  }
}
