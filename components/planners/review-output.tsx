"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Printer } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ReviewData {
  strengths: string[]
  improvements: Array<{
    area: string
    feedback: string
    suggestion: string
  }>
  resources: string[]
  conclusion: string
}

export function ReviewOutput() {
  const [review, setReview] = useState<ReviewData | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    const handleReviewGenerated = (event: CustomEvent) => {
      const { review } = event.detail
      setReview(review)
    }

    window.addEventListener("reviewGenerated", handleReviewGenerated as EventListener)

    return () => {
      window.removeEventListener("reviewGenerated", handleReviewGenerated as EventListener)
    }
  }, [])

  const handleCopyToClipboard = () => {
    if (!review) return

    const formattedReview = `
LESSON PLAN REVIEW

STRENGTHS:
${review.strengths.map((s) => `- ${s}`).join("\n")}

AREAS FOR IMPROVEMENT:
${review.improvements.map((i) => `- ${i.area}: ${i.feedback}\n  Suggestion: ${i.suggestion}`).join("\n\n")}

RECOMMENDED RESOURCES:
${review.resources.map((r) => `- ${r}`).join("\n")}

CONCLUSION:
${review.conclusion}
    `.trim()

    navigator.clipboard.writeText(formattedReview)
    toast({
      title: "Copied to clipboard",
      description: "Lesson plan review has been copied to clipboard.",
      type: "success",
    })
  }

  const handlePrint = () => {
    window.print()
  }

  if (!review) {
    return null
  }

  return (
    <Card className="mt-6 print:shadow-none">
      <CardHeader className="print:pb-0">
        <div className="flex justify-between items-center">
          <CardTitle>Lesson Plan Review</CardTitle>
          <div className="print:hidden">
            <Button variant="outline" size="sm" onClick={handlePrint} className="mr-2">
              <Printer className="h-4 w-4 mr-2" />
              Print
            </Button>
            <Button variant="outline" size="sm" onClick={handleCopyToClipboard}>
              <Copy className="h-4 w-4 mr-2" />
              Copy
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="strengths" className="print:hidden">
          <TabsList>
            <TabsTrigger value="strengths">Strengths</TabsTrigger>
            <TabsTrigger value="improvements">Improvements</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="all">All Feedback</TabsTrigger>
          </TabsList>

          <TabsContent value="strengths" className="mt-4 space-y-4">
            <h3 className="text-lg font-medium">Strengths</h3>
            <ul className="space-y-2">
              {review.strengths.map((strength, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                    ✓
                  </span>
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="improvements" className="mt-4 space-y-4">
            <h3 className="text-lg font-medium">Areas for Improvement</h3>
            <div className="space-y-4">
              {review.improvements.map((improvement, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h4 className="font-medium text-base">{improvement.area}</h4>
                  <p className="mt-2 text-muted-foreground">{improvement.feedback}</p>
                  <div className="mt-3 bg-muted p-3 rounded-md">
                    <p className="text-sm font-medium">Suggestion:</p>
                    <p className="text-sm">{improvement.suggestion}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="resources" className="mt-4 space-y-4">
            <h3 className="text-lg font-medium">Recommended Resources</h3>
            <ul className="space-y-2">
              {review.resources.map((resource, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                    i
                  </span>
                  <span>{resource}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h3 className="text-lg font-medium">Conclusion</h3>
              <p className="mt-2">{review.conclusion}</p>
            </div>
          </TabsContent>

          <TabsContent value="all" className="mt-4 space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Strengths</h3>
              <ul className="space-y-2">
                {review.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-green-100 text-green-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                      ✓
                    </span>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Areas for Improvement</h3>
              <div className="space-y-4">
                {review.improvements.map((improvement, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h4 className="font-medium text-base">{improvement.area}</h4>
                    <p className="mt-2 text-muted-foreground">{improvement.feedback}</p>
                    <div className="mt-3 bg-muted p-3 rounded-md">
                      <p className="text-sm font-medium">Suggestion:</p>
                      <p className="text-sm">{improvement.suggestion}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Recommended Resources</h3>
              <ul className="space-y-2">
                {review.resources.map((resource, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                      i
                    </span>
                    <span>{resource}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium">Conclusion</h3>
              <p>{review.conclusion}</p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Print view - only shown when printing */}
        <div className="hidden print:block space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Strengths</h3>
            <ul className="space-y-2 list-disc pl-5">
              {review.strengths.map((strength, index) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Areas for Improvement</h3>
            <div className="space-y-4">
              {review.improvements.map((improvement, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h4 className="font-bold text-base">{improvement.area}</h4>
                  <p className="mt-2">{improvement.feedback}</p>
                  <div className="mt-3 p-3 border-l-4 border-gray-300 pl-4">
                    <p className="font-bold">Suggestion:</p>
                    <p>{improvement.suggestion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Recommended Resources</h3>
            <ul className="space-y-2 list-disc pl-5">
              {review.resources.map((resource, index) => (
                <li key={index}>{resource}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold">Conclusion</h3>
            <p>{review.conclusion}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
