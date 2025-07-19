import { getMultigradePlanById } from "@/app/actions/multigrade-plans"
import { MultigradeViewComponent } from "@/components/multigrade/multigrade-view"
import { notFound } from "next/navigation"

interface MultigradePlan {
  id: number;
  title: string;
  subject: string;
  grade_range: string;
  topic: string | null;
  content: string;
  duration: string | null;
  materials: string | null;
  pedagogical_strategy: string | null;
  differentiation_strategies: string | null;
  grouping_strategy: string | null;
  assessment_approach: string | null;
  curriculum_standards: string | null;
  created_at: string;
  updated_at: string;
}

export default async function ViewMultigradePlanPage({ params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const planId = parseInt(id, 10);
    const plan = await getMultigradePlanById(planId)

    if (!plan) {
      return notFound()
    }

    // Convert the plan to match the component's expected interface
    const planForComponent = {
      ...plan,
      id: plan.id.toString(),
      topic: plan.topic || "",
      duration: plan.duration || undefined,
      materials: plan.materials || undefined,
      pedagogical_strategy: plan.pedagogical_strategy || undefined,
      differentiation_strategies: plan.differentiation_strategies || undefined,
      grouping_strategy: plan.grouping_strategy || undefined,
      assessment_approach: plan.assessment_approach || undefined
    }

    return (
      <div className="flex min-h-screen flex-col page-transition bg-gradient-to-b from-blue-50 to-white">
        <main className="flex-1 w-full px-4 py-6 max-w-[1400px] mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Multigrade Lesson Plan
            </h1>
            <p className="text-muted-foreground">View your multigrade lesson plan details and content.</p>
          </div>
          <MultigradeViewComponent plan={planForComponent} />
          {/* Add Curriculum Standards section */}
          {plan.curriculum_standards && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Curriculum Standards</h3>
              <p className="whitespace-pre-wrap">{plan.curriculum_standards}</p>
            </div>
          )}
        </main>
      </div>
    )
  } catch (error) {
    console.error("Error loading multigrade plan:", error)
    return notFound()
  }
}
