"use client"
import { MultigradeForm } from "@/components/multigrade/multigrade-form"
import { MultigradeOutput } from "@/components/multigrade/multigrade-output"

export default function TestCombined() {
  return (
    <div>
      <h1>Test Combined Components</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <MultigradeForm />
        </div>
        <div>
          <MultigradeOutput />
        </div>
      </div>
    </div>
  )
}
