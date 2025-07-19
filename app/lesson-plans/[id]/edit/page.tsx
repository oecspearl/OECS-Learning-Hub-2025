import { notFound } from "next/navigation"
import { getLessonPlanById } from "@/app/actions/lesson-plans"
import EditLessonPlanForm from "@/app/lesson-plans/[id]/edit/edit-form"
import { Metadata } from "next"

interface EditLessonPlanPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: EditLessonPlanPageProps): Promise<Metadata> {
  const { id } = await params
  const lessonPlan = await getLessonPlanById(id)

  if (!lessonPlan) {
    return {
      title: "Lesson Plan Not Found",
    }
  }

  return {
    title: `Edit ${lessonPlan.title}`,
  }
}

export default async function EditLessonPlanPage({ params }: EditLessonPlanPageProps) {
  const { id } = await params
  const lessonPlan = await getLessonPlanById(id)

  if (!lessonPlan) {
    notFound()
  }

  // Map database fields to LessonPlan interface
  const formattedLessonPlan = {
    ...lessonPlan,
    userId: lessonPlan.user_id, // Map user_id to userId
  }

  return <EditLessonPlanForm lessonPlan={formattedLessonPlan} />
} 