import { getCrossCurricularPlanById } from "@/app/actions/cross-curricular-plans"
import { getCrossCurricularReflection } from "@/app/actions/cross-curricular-reflections"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Edit, Trash, BookOpen, Users, Clock, Target, Lightbulb, Share2, Download, Eye, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import { deleteCrossCurricularPlan } from "@/app/actions/cross-curricular-plans"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { safeArrayProcessor } from "@/lib/safeArrayProcessor"
import CrossCurricularReflectionForm from "@/components/cross-curricular/cross-curricular-reflection-form"
import CrossCurricularReflectionDisplay from "@/components/cross-curricular/cross-curricular-reflection-display"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useState } from "react"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"

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
          {/* Enhanced Header Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/dashboard">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Dashboard
                  </Link>
                </Button>
                <div className="flex items-center gap-3">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">{plan.title}</h1>
                    <p className="text-gray-600">Cross-Curricular Lesson Plan</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Download className="h-4 w-4 mr-2" />
                      Export PDF
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Download className="h-4 w-4 mr-2" />
                      Export Word
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Share2 className="h-4 w-4 mr-2" />
                      Copy Link
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
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

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Grade Range</p>
                    <p className="font-semibold text-gray-900">{plan.grade_range}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-600">Subjects</p>
                    <p className="font-semibold text-gray-900">{subjects.length} subjects</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-orange-600" />
                  <div>
                    <p className="text-sm text-gray-600">Sessions</p>
                    <p className="font-semibold text-gray-900">{plan.sessions}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-600">Status</p>
                    <Badge variant="default" className="bg-green-100 text-green-800">Active</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Lesson Overview</TabsTrigger>
              <TabsTrigger value="details">Lesson Details</TabsTrigger>
              <TabsTrigger value="reflection">Reflection</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-4">
                  {/* Theme Card */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-yellow-600" />
                        Lesson Theme
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-medium text-gray-900">{plan.theme}</p>
                      {plan.description && (
                        <p className="text-gray-600 mt-2">{plan.description}</p>
                      )}
                    </CardContent>
                  </Card>

                  {/* Content Card */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                        Lesson Content
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose max-w-none">
                        <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">{plan.content}</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-4">
                  {/* Subjects Integration */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-green-600" />
                        Subject Integration
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {subjects.map((subject, index) => (
                          <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="font-medium">{subject}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Info */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-orange-600" />
                        Lesson Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Grade Range:</span>
                        <Badge variant="outline">{plan.grade_range}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Sessions:</span>
                        <Badge variant="outline">{plan.sessions}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Subjects:</span>
                        <Badge variant="outline">{subjects.length}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="details" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Teaching Strategies */}
                <div className="space-y-4">
                  {plan.learning_styles && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Users className="h-5 w-5 text-blue-600" />
                          Learning Styles
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="whitespace-pre-wrap text-gray-700">{plan.learning_styles}</div>
                      </CardContent>
                    </Card>
                  )}

                  {plan.multiple_intelligences && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Target className="h-5 w-5 text-green-600" />
                          Multiple Intelligences
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="whitespace-pre-wrap text-gray-700">{plan.multiple_intelligences}</div>
                      </CardContent>
                    </Card>
                  )}

                  {plan.pedagogical_strategy && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Lightbulb className="h-5 w-5 text-yellow-600" />
                          Pedagogical Strategy
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="whitespace-pre-wrap text-gray-700">{plan.pedagogical_strategy}</div>
                      </CardContent>
                    </Card>
                  )}

                  {plan.assessment_strategy && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Target className="h-5 w-5 text-purple-600" />
                          Assessment Strategy
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="whitespace-pre-wrap text-gray-700">{plan.assessment_strategy}</div>
                      </CardContent>
                    </Card>
                  )}
                </div>

                {/* Support & Integration */}
                <div className="space-y-4">
                  {/* Support Features */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-indigo-600" />
                        Student Support
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {plan.special_needs && (
                        <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                            <span className="font-medium">Special Needs Support</span>
                          </div>
                          <Badge variant="outline" className="bg-orange-100 text-orange-800">Enabled</Badge>
                        </div>
                      )}
                      {plan.special_needs_details && (
                        <div className="ml-4 p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-700">{plan.special_needs_details}</p>
                        </div>
                      )}
                      
                      {plan.ell_support && (
                        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <span className="font-medium">ELL Support</span>
                          </div>
                          <Badge variant="outline" className="bg-blue-100 text-blue-800">Enabled</Badge>
                        </div>
                      )}

                      {plan.gifted_extension && (
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="font-medium">Gifted Extension</span>
                          </div>
                          <Badge variant="outline" className="bg-green-100 text-green-800">Enabled</Badge>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Technology Integration */}
                  {plan.technology_integration && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <BookOpen className="h-5 w-5 text-teal-600" />
                          Technology Integration
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-2 p-3 bg-teal-50 rounded-lg">
                          <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                          <span className="font-medium">Technology tools integrated into lesson</span>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Additional Instructions */}
                  {plan.additional_instructions && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Lightbulb className="h-5 w-5 text-amber-600" />
                          Additional Instructions
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="whitespace-pre-wrap text-gray-700 p-3 bg-amber-50 rounded-lg">
                          {plan.additional_instructions}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reflection" className="space-y-4">
              {reflection ? (
                <CrossCurricularReflectionDisplay reflection={reflection} />
              ) : (
                <CrossCurricularReflectionForm planId={id} />
              )}
            </TabsContent>
          </Tabs>
        </main>
      </div>
    )
  } catch (error) {
    console.error("Error loading cross-curricular plan:", error)
    return notFound()
  }
} 