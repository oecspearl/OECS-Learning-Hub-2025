import { getLessonPlanById } from "@/app/actions/lesson-plans"
import { getLessonReflectionsByLessonPlan } from "@/app/actions/lesson-reflections"
import { LessonPlanViewComponent } from "@/components/lesson-plans/lesson-plan-card"
import { LessonReflectionForm } from "@/components/lesson-plans/lesson-reflection-form"
import { LessonReflectionDisplay } from "@/components/lesson-plans/lesson-reflection-display"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, BookOpen, Lightbulb, History } from "lucide-react"
import { notFound } from "next/navigation"

interface LessonPlan {
  id: string;
  title: string;
  subject: string;
  grade: string;
  topic: string | null;
  content: string;
  duration: string | null;
  materials: string | null;
  pedagogical_strategy: string | null;
  differentiation_strategies: string | null;
  grouping_strategy: string | null;
  assessment_approach: string | null;
  curriculum_standards: string | null;
  overview: string | null;
  objectives: string | null;
  vocabulary: string | null;
  homework: string | null;
  extensions: string | null;
  standards: string | null;
  created_at: string;
  updated_at: string;
}

export default async function ViewLessonPlanPage({ params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const plan = await getLessonPlanById(id)

    if (!plan) {
      return notFound()
    }

    // Get reflections for this lesson plan
    const reflectionsResult = await getLessonReflectionsByLessonPlan(id)
    const reflections = reflectionsResult.success ? reflectionsResult.data || [] : []

    return (
      <div className="flex min-h-screen flex-col page-transition bg-gradient-to-b from-blue-50 to-white">
        <main className="flex-1 w-full px-4 py-6 max-w-[1400px] mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              {plan.title}
            </h1>
            <p className="text-muted-foreground">
              {plan.subject} • Grade {plan.grade} • {plan.topic}
            </p>
          </div>

          <Tabs defaultValue="lesson" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="lesson" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Lesson Plan
              </TabsTrigger>
              <TabsTrigger value="reflections" className="flex items-center gap-2">
                <Lightbulb className="h-4 w-4" />
                Reflections ({reflections.length})
              </TabsTrigger>
              <TabsTrigger value="add-reflection" className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Add Reflection
              </TabsTrigger>
            </TabsList>

            <TabsContent value="lesson" className="space-y-6">
              <LessonPlanViewComponent plan={plan} />
              
              {/* Curriculum Standards */}
              {plan.curriculum_standards && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Curriculum Standards
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="whitespace-pre-wrap">{plan.curriculum_standards}</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="reflections" className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Lesson Reflections</h2>
                  <p className="text-muted-foreground">
                    Review your reflections and insights from teaching this lesson
                  </p>
                </div>
              </div>

              {reflections.length === 0 ? (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <History className="h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No Reflections Yet</h3>
                    <p className="text-muted-foreground text-center mb-4">
                      You haven't added any reflections for this lesson plan yet.
                    </p>
                    <Button asChild>
                      <a href="#add-reflection">Add Your First Reflection</a>
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-6">
                  {reflections.map((reflection: any) => (
                    <LessonReflectionDisplay
                      key={reflection.id}
                      reflection={reflection}
                    />
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="add-reflection" className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Add Lesson Reflection</h2>
                  <p className="text-muted-foreground">
                    Complete this reflection after teaching the lesson to track outcomes and improvements
                  </p>
                </div>
              </div>

              <LessonReflectionForm
                lessonPlanId={plan.id}
                lessonTitle={plan.title}
              />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    )
  } catch (error) {
    console.error("Error loading lesson plan:", error)
    return notFound()
  }
}