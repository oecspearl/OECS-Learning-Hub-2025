import { MultigradeHeader } from "@/components/multigrade/multigrade-header"
import { MultigradeForm } from "@/components/multigrade/multigrade-form"
import { MultigradeOutput } from "@/components/multigrade/multigrade-output"
import { MultigradeChat } from "@/components/multigrade/multigrade-chat"
import { Suspense } from "react"

export default function MultigradePage() {
  return (
    <div className="flex min-h-screen flex-col page-transition bg-gradient-to-b from-green-50 to-white">
      <MultigradeHeader />

      <main className="flex-1 w-full px-4 py-6 max-w-[1400px] mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-primary bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">
            Multigrade Lesson Planner
          </h1>
          <p className="text-muted-foreground">
            Create a single lesson plan that addresses multiple grade levels simultaneously with the help of Pearl AI.
          </p>
        </div>

        <Suspense fallback={<div className="p-8 text-center">Loading multigrade planner...</div>}>
          <div className="grid gap-6 grid-cols-1">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <MultigradeForm />
              </div>
              <div>
                <MultigradeOutput />
              </div>
            </div>
            <div className="w-full">
              <MultigradeChat />
            </div>
          </div>
        </Suspense>
      </main>
    </div>
  )
}
