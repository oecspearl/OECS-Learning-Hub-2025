"use client"

import { useState } from "react"
import { PlannerForm } from "@/components/planners/planner-form"
import { PlannerOutput } from "@/components/planners/planner-output"
import { MultigradeForm } from "@/components/planners/multigrade-form"
import { MultigradeOutput } from "@/components/planners/multigrade-output"
import { CrossCurricularForm } from "@/components/planners/cross-curricular-form"
import { CrossCurricularOutput } from "@/components/planners/cross-curricular-output"
import { ReviewForm } from "@/components/planners/review-form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

export default function PlannersPage() {
  const [activeTab, setActiveTab] = useState("planner")
  const [generatedPlan, setGeneratedPlan] = useState(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [review, setReview] = useState(null)

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Lesson Planner</h1>

      <Tabs defaultValue="planner" className="w-full">
        <TabsList className="grid grid-cols-4">
          <TabsTrigger value="planner" onClick={() => setActiveTab("planner")}>
            Single Grade
          </TabsTrigger>
          <TabsTrigger value="multigrade" onClick={() => setActiveTab("multigrade")}>
            Multigrade
          </TabsTrigger>
          <TabsTrigger value="crosscurricular" onClick={() => setActiveTab("crosscurricular")}>
            Cross-Curricular
          </TabsTrigger>
          <TabsTrigger value="review" onClick={() => setActiveTab("review")}>
            Review
          </TabsTrigger>
        </TabsList>
        <TabsContent value="planner">
          {activeTab === "planner" && (
            <>
              <PlannerForm />
              <PlannerOutput />
            </>
          )}
        </TabsContent>
        <TabsContent value="multigrade">
          {activeTab === "multigrade" && (
            <>
              <MultigradeForm />
              <MultigradeOutput />
            </>
          )}
        </TabsContent>
        <TabsContent value="crosscurricular">
          {activeTab === "crosscurricular" && (
            <>
              <CrossCurricularForm
                setGeneratedPlan={setGeneratedPlan}
                setActiveTab={setActiveTab}
                isGenerating={isGenerating}
                setIsGenerating={setIsGenerating}
              />
              {generatedPlan && <CrossCurricularOutput plan={generatedPlan} isGenerating={isGenerating} />}
            </>
          )}
        </TabsContent>
        <TabsContent value="review">
          {activeTab === "review" && (
            <>
              <ReviewForm onReviewGenerated={(review: any) => setReview(review)} />
              {review && (
                <Card className="mt-6">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4">Generated Review</h2>
                    <pre className="whitespace-pre-wrap">{review}</pre>
                  </CardContent>
                </Card>
              )}
            </>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
