import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, BookOpen, Users, Target } from "lucide-react"

export default function CrossCurricularPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-50 to-white">
      <main className="flex-1 w-full px-4 py-6 max-w-[1400px] mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Cross-Curricular Lesson Planning
          </h1>
          <p className="text-muted-foreground">
            Create authentic, integrated lessons that connect multiple subjects through real-world problems and projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="border-0 shadow-xl rounded-xl overflow-hidden transition-all duration-200 hover:translate-y-[-5px] hover:shadow-2xl">
            <CardHeader className="bg-blue-50">
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-blue-600" />
                Create New Cross-Curricular Plan
              </CardTitle>
              <CardDescription>
                Start building an integrated lesson that connects multiple subjects through authentic real-world problems.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-4">
                Our enhanced cross-curricular planner helps you create lessons that authentically integrate multiple subjects through:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-blue-600" />
                  Central problems that require multiple disciplines
                </li>
                <li className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-blue-600" />
                  Curriculum objectives mapping across subjects
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-600" />
                  Assessment strategies for both individual subjects and synthesis
                </li>
              </ul>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                <Link href="/cross-curricular/new">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Start Creating
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl rounded-xl overflow-hidden transition-all duration-200 hover:translate-y-[-5px] hover:shadow-2xl">
            <CardHeader className="bg-green-50">
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-green-600" />
                View Existing Plans
              </CardTitle>
              <CardDescription>
                Access and manage your previously created cross-curricular lesson plans.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-4">
                Review, edit, and share your cross-curricular lesson plans from the dashboard.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/dashboard/teacher">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Go to Dashboard
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-800">Cross-Curricular Planning Guide</CardTitle>
            <CardDescription className="text-blue-700">
              Learn how to create effective cross-curricular lessons that authentically integrate multiple subjects.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-800">Key Principles:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Start with a real-world problem that requires multiple disciplines</li>
                  <li>• Identify natural connections between subjects</li>
                  <li>• Map specific curriculum objectives to activities</li>
                  <li>• Assess both individual subject learning and synthesis</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-800">Planning Process:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• <strong>Basic Info:</strong> Define your central problem and theme</li>
                  <li>• <strong>Curriculum:</strong> Map objectives and assessment requirements</li>
                  <li>• <strong>Learning Profile:</strong> Address diverse learner needs</li>
                  <li>• <strong>Advanced:</strong> Add pedagogical strategies and technology</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
} 