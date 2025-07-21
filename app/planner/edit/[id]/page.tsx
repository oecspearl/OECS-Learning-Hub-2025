import { PlannerEditForm } from "@/components/planner-edit-form"
import { db } from "@/lib/db"
import { Suspense } from "react"
import { AuthWrapper } from "@/components/auth/auth-wrapper"
import { notFound } from "next/navigation"

interface EditLessonPlanPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: EditLessonPlanPageProps) {
  const { id } = await params
  
  try {
    const lessonPlan = await db.lessonPlans.findFirst({ id })
    
    if (!lessonPlan) {
      return {
        title: 'Edit Lesson Plan',
      }
    }

    return {
      title: `Edit: ${lessonPlan.title || 'Lesson Plan'}`,
    }
  } catch (error) {
    return {
      title: 'Edit Lesson Plan',
    }
  }
}

export default async function PlannerEditPage({ params }: EditLessonPlanPageProps) {
  const { id } = await params

  try {
    // Fetch the lesson plan from the database
    const lessonPlan = await db.lessonPlans.findFirst({ id })

    if (!lessonPlan) {
      notFound()
    }

    return (
      <div className="flex min-h-screen flex-col page-transition bg-gradient-to-b from-blue-50 to-white">
        <main className="flex-1 w-full px-4 py-6 max-w-[1400px] mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Edit Lesson Plan
            </h1>
            <p className="text-muted-foreground">Make changes to your lesson plan and save your updates.</p>
          </div>

          <Suspense fallback={<div className="p-8 text-center">Loading plan...</div>}>
            <AuthWrapper>
              <PlannerEditForm lessonPlan={lessonPlan} />
            </AuthWrapper>
          </Suspense>
        </main>
      </div>
    )
  } catch (error) {
    console.error("Error loading lesson plan:", error)
    notFound()
  }
}