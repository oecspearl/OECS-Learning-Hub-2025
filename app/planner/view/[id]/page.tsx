import { PlannerViewComponent } from "@/components/planner-view"
import { sql } from "@/lib/db"
import { executeQuery } from "@/lib/db"

export default async function PlannerViewPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  // Fetch the lesson plan from the database
  try {
    const result = await executeQuery("SELECT * FROM lesson_plans WHERE id = $1 LIMIT 1", [id]) as any[]

    // The sql result is an array of rows, not an object with a rows property
    const lessonPlan = result[0]

    if (!lessonPlan) {
      return (
        <div className="flex min-h-screen flex-col page-transition bg-gradient-to-b from-blue-50 to-white">
          <main className="flex-1 w-full px-4 py-6 max-w-[1400px] mx-auto">
            <div className="text-center py-12">
              <h1 className="text-3xl font-bold mb-4 text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Lesson Plan Not Found
              </h1>
              <p className="text-muted-foreground">
                The lesson plan you're looking for doesn't exist or has been deleted.
              </p>
            </div>
          </main>
        </div>
      )
    }

    return (
      <div className="flex min-h-screen flex-col page-transition bg-gradient-to-b from-blue-50 to-white">
        <main className="flex-1 w-full px-4 py-6 max-w-[1400px] mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Lesson Plan
            </h1>
            <p className="text-muted-foreground">View your lesson plan details and content.</p>
          </div>
          <PlannerViewComponent lessonPlan={lessonPlan} />
        </main>
      </div>
    )
  } catch (error) {
    console.error("Error fetching lesson plan:", error)
    return (
      <div className="flex min-h-screen flex-col page-transition bg-gradient-to-b from-blue-50 to-white">
        <main className="flex-1 w-full px-4 py-6 max-w-[1400px] mx-auto">
          <div className="text-center py-12">
            <h1 className="text-3xl font-bold mb-4 text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Error Loading Lesson Plan
            </h1>
            <p className="text-muted-foreground">There was an error loading the lesson plan. Please try again later.</p>
            <pre className="mt-4 p-4 bg-gray-100 rounded text-left overflow-auto max-w-lg mx-auto text-sm">
              {error instanceof Error ? error.message : "Unknown error"}
            </pre>
          </div>
        </main>
      </div>
    )
  }
}