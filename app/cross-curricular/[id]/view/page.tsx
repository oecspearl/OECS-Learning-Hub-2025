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
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 sm:p-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/dashboard">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    <span className="hidden sm:inline">Back to Dashboard</span>
                    <span className="sm:hidden">Back</span>
                  </Link>
                </Button>
                <div className="flex items-center gap-2 sm:gap-3">
                  <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                  <div>
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">{plan.title}</h1>
                    <p className="text-sm sm:text-base text-gray-600">Cross-Curricular Lesson Plan</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="px-2 sm:px-3">
                      <Share2 className="h-4 w-4 sm:mr-2" />
                      <span className="hidden sm:inline">Share</span>
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
                <Button variant="outline" size="sm" asChild className="px-2 sm:px-3">
                  <Link href={`/cross-curricular/edit/${id}`}>
                    <Edit className="h-4 w-4 sm:mr-2" />
                    <span className="hidden sm:inline">Edit</span>
                  </Link>
                </Button>
                <form action={deletePlan}>
                  <Button variant="destructive" size="sm" type="submit" className="px-2 sm:px-3">
                    <Trash className="h-4 w-4 sm:mr-2" />
                    <span className="hidden sm:inline">Delete</span>
                  </Button>
                </form>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-white rounded-lg p-3 sm:p-4 border border-gray-200">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-gray-600">Grade Range</p>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base truncate">{plan.grade_range}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 sm:p-4 border border-gray-200">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-gray-600">Subjects</p>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">{subjects.length} subjects</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 sm:p-4 border border-gray-200">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-gray-600">Sessions</p>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">{plan.sessions}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 sm:p-4 border border-gray-200">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-gray-600">Status</p>
                    <Badge variant="default" className="bg-green-100 text-green-800 text-xs">Active</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-auto p-1">
              <TabsTrigger value="overview" className="text-xs sm:text-sm px-2 sm:px-3 py-2">
                <span className="hidden sm:inline">Lesson Overview</span>
                <span className="sm:hidden">Overview</span>
              </TabsTrigger>
              <TabsTrigger value="details" className="text-xs sm:text-sm px-2 sm:px-3 py-2">
                <span className="hidden sm:inline">Lesson Details</span>
                <span className="sm:hidden">Details</span>
              </TabsTrigger>
              <TabsTrigger value="reflection" className="text-xs sm:text-sm px-2 sm:px-3 py-2">
                Reflection
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
                {/* Main Content */}
                <div className="xl:col-span-2 space-y-4">
                  {/* Theme Card */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-yellow-600" />
                        Lesson Theme
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-lg border-l-4 border-yellow-500">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{plan.theme}</h3>
                        {plan.description && (
                          <p className="text-gray-700 text-lg leading-relaxed">{plan.description}</p>
                        )}
                      </div>
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
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
                          <div className="whitespace-pre-wrap text-gray-800 leading-relaxed text-lg">
                            {plan.content}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-4 order-first xl:order-last">
                  {/* Subjects Integration */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-green-600" />
                        Subject Integration
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border-l-4 border-green-500">
                        <div className="grid grid-cols-1 gap-3">
                          {subjects.map((subject, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-green-100 hover:shadow-md transition-shadow">
                              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-white"></div>
                              </div>
                              <span className="font-semibold text-gray-800 text-lg">{subject}</span>
                              <Badge variant="outline" className="ml-auto bg-green-100 text-green-800">
                                Integrated
                              </Badge>
                            </div>
                          ))}
                        </div>
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
                    <CardContent>
                      <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg border-l-4 border-orange-500">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                            <div className="flex items-center gap-3">
                              <Users className="h-5 w-5 text-blue-600" />
                              <span className="font-medium text-gray-700">Grade Range</span>
                            </div>
                            <Badge variant="outline" className="bg-blue-100 text-blue-800 font-semibold">
                              {plan.grade_range}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                            <div className="flex items-center gap-3">
                              <Clock className="h-5 w-5 text-orange-600" />
                              <span className="font-medium text-gray-700">Sessions</span>
                            </div>
                            <Badge variant="outline" className="bg-orange-100 text-orange-800 font-semibold">
                              {plan.sessions}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                            <div className="flex items-center gap-3">
                              <BookOpen className="h-5 w-5 text-green-600" />
                              <span className="font-medium text-gray-700">Subjects</span>
                            </div>
                            <Badge variant="outline" className="bg-green-100 text-green-800 font-semibold">
                              {subjects.length}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="details" className="space-y-4">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
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
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border-l-4 border-blue-500">
                          <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">{plan.learning_styles}</div>
                        </div>
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
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border-l-4 border-green-500">
                          <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">{plan.multiple_intelligences}</div>
                        </div>
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
                        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-lg border-l-4 border-yellow-500">
                          <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">{plan.pedagogical_strategy}</div>
                        </div>
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
                        <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-4 rounded-lg border-l-4 border-purple-500">
                          <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">{plan.assessment_strategy}</div>
                        </div>
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
                        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg border-l-4 border-amber-500">
                          <div className="whitespace-pre-wrap text-gray-800 leading-relaxed text-lg">
                            {plan.additional_instructions}
                          </div>
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