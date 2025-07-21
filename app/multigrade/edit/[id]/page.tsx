import { MultigradeHeader } from "@/components/multigrade/multigrade-header"
import { getMultigradePlanById } from "@/app/actions/multigrade-plans"
import { Suspense } from "react"
import { AuthWrapper } from "@/components/auth/auth-wrapper"
import { MultigradeEditForm } from "@/components/multigrade/multigrade-edit-form"
import { notFound } from "next/navigation"

interface EditMultigradePlanPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: EditMultigradePlanPageProps) {
  const { id } = await params
  const plan = await getMultigradePlanById(id)
  
  if (!plan) {
    return {
      title: 'Edit Multigrade Lesson Plan',
    }
  }

  return {
    title: `Edit: ${plan.title}`,
  }
}

export default async function EditMultigradePlanPage({ params }: EditMultigradePlanPageProps) {
  const { id } = await params
  let plan

  try {
    plan = await getMultigradePlanById(id)
  } catch (error) {
    notFound()
  }

  if (!plan) {
    notFound()
  }

  // Convert the plan to match the expected interface
  const formattedPlan = {
    ...plan,
    id: String(plan.id),
    topic: plan.topic || '',
    created_at: plan.created_at,
    duration: plan.duration || '',
    materials: plan.materials || '',
    pedagogical_strategy: plan.pedagogical_strategy || '',
    differentiation_strategies: plan.differentiation_strategies || '',
    grouping_strategy: plan.grouping_strategy || '',
    assessment_approach: plan.assessment_approach || '',
  }

  return (
    <div className="flex min-h-screen flex-col page-transition bg-gradient-to-b from-blue-50 to-white">
      <MultigradeHeader />
      <main className="flex-1 w-full px-4 py-6 max-w-[1400px] mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Edit Multigrade Lesson Plan
          </h1>
          <p className="text-muted-foreground">Make changes to your multigrade lesson plan and save your updates.</p>
        </div>

        <Suspense fallback={<div className="p-8 text-center">Loading plan...</div>}>
          <AuthWrapper>
            <MultigradeEditForm plan={formattedPlan} />
          </AuthWrapper>
        </Suspense>
      </main>
    </div>
  )
}
