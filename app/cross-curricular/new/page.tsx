import { CrossCurricularForm } from "@/components/cross-curricular/cross-curricular-form"

export default function NewCrossCurricularPlanPage() {
  return (
    <div className="flex min-h-screen flex-col page-transition bg-gradient-to-b from-blue-50 to-white">
      <main className="flex-1 w-full px-4 py-6 max-w-[1400px] mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Create Cross-Curricular Lesson Plan
          </h1>
          <p className="text-muted-foreground">
            Generate a comprehensive cross-curricular lesson plan that integrates multiple subjects around a central theme.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <CrossCurricularForm />
        </div>
      </main>
    </div>
  )
} 