"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/components/ui/use-toast"
import { generatePDF } from "@/lib/pdf-utils"
import { ArrowLeft, Download, Pencil, Calendar, BookOpen, Users } from "lucide-react"
import { format } from "date-fns"

interface MultigradePlan {
  id: string
  title: string
  subject: string
  grade_range: string
  topic: string
  content: string
  created_at?: string
  updated_at?: string
  duration?: string
  materials?: string
  pedagogical_strategy?: string
  differentiation_strategies?: string
  grouping_strategy?: string
  assessment_approach?: string
}

export function MultigradeViewComponent({ plan }: { plan: MultigradePlan }) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("preview")
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)
    try {
      await generatePDF({
        content: plan.content,
        filename: `${plan.title.replace(/\s+/g, "_")}.pdf`,
        title: plan.title,
        metadata: {
          Subject: plan.subject,
          "Grade Range": plan.grade_range,
          Topic: plan.topic,
          Created: plan.created_at ? format(new Date(plan.created_at), "PPP") : "Unknown",
        },
      })

      toast({
        title: "Success!",
        description: "Your multigrade lesson plan has been downloaded.",
      })
    } catch (error) {
      console.error("Error downloading plan:", error)
      toast({
        title: "Error",
        description: "Failed to download lesson plan",
        variant: "destructive",
      })
    } finally {
      setIsDownloading(false)
    }
  }

  const formatSubject = (subject: string) => {
    return subject
      .replace(/_/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Button variant="outline" onClick={() => router.push("/dashboard")} className="flex items-center gap-1">
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Button>

        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={handleDownload}
            disabled={isDownloading}
            className="flex items-center gap-1"
          >
            <Download className="h-4 w-4" />
            {isDownloading ? "Downloading..." : "Download PDF"}
          </Button>

          <Button
            onClick={() => router.push(`/multigrade/edit/${plan.id}`)}
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white"
          >
            <Pencil className="h-4 w-4 mr-2" />
            Edit Plan
          </Button>
        </div>
      </div>

      <Card className="shadow-lg border-t-4 border-t-green-600">
        <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>
              <CardTitle className="text-2xl font-bold text-green-600 bg-clip-text">
                {plan.title.toUpperCase()}
              </CardTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 flex items-center gap-1">
                  <BookOpen className="h-3 w-3" />
                  {formatSubject(plan.subject)}
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1"
                >
                  <Users className="h-3 w-3" />
                  {plan.grade_range}
                </Badge>
                {plan.created_at && (
                  <Badge
                    variant="outline"
                    className="bg-amber-50 text-amber-700 border-amber-200 flex items-center gap-1"
                  >
                    <Calendar className="h-3 w-3" />
                    {format(new Date(plan.created_at), "MMM d, yyyy")}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="raw">Raw Content</TabsTrigger>
            </TabsList>

            <TabsContent value="preview" className="min-h-[400px]">
              <div className="prose prose-green max-w-none p-4 bg-white rounded-md min-h-[500px] overflow-y-auto border">
                {plan.content.split("\n").map((line, i) => {
                  if (line.startsWith("# ")) {
                    return (
                      <h1 key={i} className="text-xl font-bold mt-4 mb-2 text-green-800">
                        {line.substring(2)}
                      </h1>
                    )
                  }
                  if (line.startsWith("## ")) {
                    return (
                      <h2 key={i} className="text-lg font-bold mt-3 mb-2 text-green-700">
                        {line.substring(3)}
                      </h2>
                    )
                  }
                  if (line.startsWith("### ")) {
                    return (
                      <h3 key={i} className="text-md font-bold mt-2 mb-1 text-green-600">
                        {line.substring(4)}
                      </h3>
                    )
                  }
                  if (line.match(/^\d+\.\s/)) {
                    return (
                      <div key={i} className="ml-4 my-1">
                        {line}
                      </div>
                    )
                  }
                  if (line.match(/^-\s/)) {
                    return (
                      <div key={i} className="ml-4 my-1">
                        • {line.substring(2)}
                      </div>
                    )
                  }
                  if (line.trim() === "") {
                    return <div key={i} className="h-4"></div>
                  }
                  return (
                    <p key={i} className="my-1">
                      {line}
                    </p>
                  )
                })}
              </div>
            </TabsContent>

            <TabsContent value="raw" className="min-h-[400px]">
              <pre className="whitespace-pre-wrap font-mono text-sm p-4 bg-muted/30 rounded-md min-h-[500px] overflow-y-auto border">
                {plan.content}
              </pre>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
