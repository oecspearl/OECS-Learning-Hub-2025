"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, BookOpen, Sparkles, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export function MultigradeHeader() {
  const router = useRouter()

  return (
    <div className="border-b bg-gradient-to-r from-green-100 to-emerald-100">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.push("/dashboard")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-600 rounded-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-green-800">Multigrade Planning</h2>
                <p className="text-sm text-green-600">Teaching multiple grades together</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
              <BookOpen className="h-3 w-3 mr-1" />
              Multi-Level Learning
            </Badge>
            <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 border-emerald-200">
              <Sparkles className="h-3 w-3 mr-1" />
              AI-Powered
            </Badge>
          </div>
        </div>

        <div className="mt-4 p-4 bg-white/60 rounded-lg border border-green-200">
          <p className="text-sm text-green-700">
            <strong>Multigrade Teaching:</strong> Create lesson plans that effectively address different grade levels
            within the same classroom, ensuring all students are appropriately challenged and supported.
          </p>
        </div>
      </div>
    </div>
  )
}
