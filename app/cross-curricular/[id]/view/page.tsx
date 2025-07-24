import { getCrossCurricularPlanById } from "@/app/actions/cross-curricular-plans"
import { getCrossCurricularReflection } from "@/app/actions/cross-curricular-reflections"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Edit, Trash } from "lucide-react"
import Link from "next/link"
import { deleteCrossCurricularPlan } from "@/app/actions/cross-curricular-plans"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { safeArrayProcessor } from "@/lib/safeArrayProcessor"
import CrossCurricularReflectionForm from "@/components/cross-curricular/cross-curricular-reflection-form"
import CrossCurricularReflectionDisplay from "@/components/cross-curricular/cross-curricular-reflection-display"

interface CrossCurricularPlan {
  id: string
  title: string
  theme: string
  description: string
  grade_range: string
  content: string
  subjects: string
  sessions: string
  learning_styles: string | null
  multiple_intelligences: string | null
  special_needs: boolean
  special_needs_details: string | null
  ell_support: boolean
  gifted_extension: boolean
  pedagogical_strategy: string | null
  assessment_strategy: string | null
  technology_integration: boolean
  additional_instructions: string | null
  user_id: string
  created_at: string
  updated_at: string
}

export default async function ViewCrossCurricularPlanPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  try {
    const plan = await getCrossCurricularPlanById(id)
    const reflection = await getCrossCurricularReflection(id)

    if (!plan) {
      return notFound()
    }

    async function deletePlan() {
      "use server"
      await deleteCrossCurricularPlan(id)
      revalidatePath("/dashboard")
      redirect("/dashboard")
    }

    const subjects = safeArrayProcessor(plan.subjects)

    return (
      <div className="flex min-h-screen flex-col page-transition bg-gradient-to-b from-blue-50 to-white">
        <main className="flex-1 w-full px-4 py-6 max-w-[1400px] mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2 text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                {plan.title}
              </h1>
              <p className="text-muted-foreground">
                A cross-curricular lesson plan integrating {subjects.join(", ")}.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/dashboard">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Dashboard
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href={`/cross-curricular/edit/${id}`}>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Link>
              </Button>
              <form action={deletePlan}>
                <Button variant="destructive" size="sm" type="submit">
                  <Trash className="mr-2 h-4 w-4" />
                  Delete
                </Button>
              </form>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="prose max-w-none">
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Theme</h2>
                <p>{plan.theme}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Grade Range</h2>
                <p>{plan.grade_range}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Subjects</h2>
                <p>{subjects.join(", ")}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Sessions</h2>
                <p>{plan.sessions}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Content</h2>
                <div className="whitespace-pre-wrap">{plan.content}</div>
              </div>

              {plan.learning_styles && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-2">Learning Styles</h2>
                  <div className="whitespace-pre-wrap">{plan.learning_styles}</div>
                </div>
              )}

              {plan.multiple_intelligences && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-2">Multiple Intelligences</h2>
                  <div className="whitespace-pre-wrap">{plan.multiple_intelligences}</div>
                </div>
              )}

              {plan.special_needs && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-2">Special Needs</h2>
                  <p>{plan.special_needs_details}</p>
                </div>
              )}

              {plan.ell_support && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-2">ELL Support</h2>
                  <p>Yes</p>
                </div>
              )}

              {plan.gifted_extension && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-2">Gifted Extension</h2>
                  <p>Yes</p>
                </div>
              )}

              {plan.pedagogical_strategy && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-2">Pedagogical Strategy</h2>
                  <div className="whitespace-pre-wrap">{plan.pedagogical_strategy}</div>
                </div>
              )}

              {plan.assessment_strategy && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-2">Assessment Strategy</h2>
                  <div className="whitespace-pre-wrap">{plan.assessment_strategy}</div>
                </div>
              )}

              {plan.technology_integration && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-2">Technology Integration</h2>
                  <p>Yes</p>
                </div>
              )}

              {plan.additional_instructions && (
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-2">Additional Instructions</h2>
                  <div className="whitespace-pre-wrap">{plan.additional_instructions}</div>
                </div>
              )}
            </div>
          </div>

          {/* Reflection Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Lesson Reflection</h2>
            {reflection ? (
              <CrossCurricularReflectionDisplay reflection={reflection} />
            ) : (
              <CrossCurricularReflectionForm planId={id} />
            )}
          </div>
        </main>
      </div>
    )
  } catch (error) {
    console.error("Error loading cross-curricular plan:", error)
    return notFound()
  }
} 