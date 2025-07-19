import type { Metadata } from "next"
import Link from "next/link"
import { FileEdit, BookOpen, CheckSquare, Layers, PenTool, BookMarked, FileSearch } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Innovative Teaching Tools | OECSLearningHub",
  description: "Explore our innovative teaching tools designed to enhance curriculum delivery and student engagement",
}

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 py-24 mt-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">Innovative Teaching Tools</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our suite of AI-powered tools designed to help teachers create engaging, standards-aligned lesson
          plans and educational resources.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Lesson Planner */}
        <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
          <CardHeader className="pb-4">
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
              <FileEdit className="h-6 w-6 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Lesson Planner</CardTitle>
            <CardDescription>Create comprehensive, standards-aligned lesson plans in minutes</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-gray-600">
              Our AI-powered lesson planner helps you create detailed lesson plans with objectives, activities,
              assessments, and resources tailored to your curriculum standards.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <CheckSquare className="h-4 w-4 mr-2 text-green-500" />
                Subject and grade-specific content
              </li>
              <li className="flex items-center">
                <CheckSquare className="h-4 w-4 mr-2 text-green-500" />
                Customizable objectives and activities
              </li>
              <li className="flex items-center">
                <CheckSquare className="h-4 w-4 mr-2 text-green-500" />
                Assessment strategies and resources
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/teacher/planners" className="w-full">
              <Button className="w-full bg-green-600 hover:bg-green-700">Get Started</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Multigrade Planner */}
        <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
          <CardHeader className="pb-4">
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
              <Layers className="h-6 w-6 text-blue-600" />
            </div>
            <CardTitle className="text-2xl">Multigrade Planner</CardTitle>
            <CardDescription>Design differentiated lessons for multiple grade levels simultaneously</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-gray-600">
              Perfect for teachers working with combined classes, this tool helps you create lessons that address
              standards across multiple grade levels while maintaining cohesive learning experiences.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <CheckSquare className="h-4 w-4 mr-2 text-blue-500" />
                Support for 2+ grade levels
              </li>
              <li className="flex items-center">
                <CheckSquare className="h-4 w-4 mr-2 text-blue-500" />
                Grade-specific differentiation
              </li>
              <li className="flex items-center">
                <CheckSquare className="h-4 w-4 mr-2 text-blue-500" />
                Shared and grade-specific activities
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/teacher/planners" className="w-full">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Cross-Curricular Planner */}
        <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
          <CardHeader className="pb-4">
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
              <PenTool className="h-6 w-6 text-purple-600" />
            </div>
            <CardTitle className="text-2xl">Cross-Curricular Planner</CardTitle>
            <CardDescription>Create integrated lessons that span multiple subject areas</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-gray-600">
              Develop rich, interdisciplinary learning experiences that connect concepts across subjects, helping
              students see the relationships between different areas of knowledge.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <CheckSquare className="h-4 w-4 mr-2 text-purple-500" />
                Visual subject connection matrix
              </li>
              <li className="flex items-center">
                <CheckSquare className="h-4 w-4 mr-2 text-purple-500" />
                Integrated assessment strategies
              </li>
              <li className="flex items-center">
                <CheckSquare className="h-4 w-4 mr-2 text-purple-500" />
                Thematic approach to learning
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/teacher/planners" className="w-full">
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Lesson Plan Review */}
        <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
          <CardHeader className="pb-4">
            <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
              <FileSearch className="h-6 w-6 text-amber-600" />
            </div>
            <CardTitle className="text-2xl">Lesson Plan Review</CardTitle>
            <CardDescription>Get AI-powered feedback on your existing lesson plans</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-gray-600">
              Upload your existing lesson plans and receive detailed feedback on strengths, areas for improvement, and
              suggestions for enhancing student engagement and learning outcomes.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <CheckSquare className="h-4 w-4 mr-2 text-amber-500" />
                Targeted feedback on specific areas
              </li>
              <li className="flex items-center">
                <CheckSquare className="h-4 w-4 mr-2 text-amber-500" />
                Resource recommendations
              </li>
              <li className="flex items-center">
                <CheckSquare className="h-4 w-4 mr-2 text-amber-500" />
                Standards alignment check
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/teacher/planners" className="w-full">
              <Button className="w-full bg-amber-600 hover:bg-amber-700">Get Started</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Curriculum Explorer */}
        <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
          <CardHeader className="pb-4">
            <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-red-600" />
            </div>
            <CardTitle className="text-2xl">Curriculum Explorer</CardTitle>
            <CardDescription>Navigate and explore the OECS curriculum standards</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-gray-600">
              Easily browse through curriculum standards by grade level and subject area. Find learning outcomes,
              suggested activities, and assessment strategies.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <CheckSquare className="h-4 w-4 mr-2 text-red-500" />
                Comprehensive curriculum coverage
              </li>
              <li className="flex items-center">
                <CheckSquare className="h-4 w-4 mr-2 text-red-500" />
                Search by keyword or standard
              </li>
              <li className="flex items-center">
                <CheckSquare className="h-4 w-4 mr-2 text-red-500" />
                Save favorite standards
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/curriculum" className="w-full">
              <Button className="w-full bg-red-600 hover:bg-red-700">Explore</Button>
            </Link>
          </CardFooter>
        </Card>

        {/* Resource Library */}
        <Card className="flex flex-col h-full hover:shadow-lg transition-shadow">
          <CardHeader className="pb-4">
            <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center mb-4">
              <BookMarked className="h-6 w-6 text-teal-600" />
            </div>
            <CardTitle className="text-2xl">Resource Library</CardTitle>
            <CardDescription>Access a growing collection of teaching resources</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-gray-600">
              Browse our curated collection of teaching resources, including worksheets, activities, assessments, and
              multimedia content aligned with OECS curriculum standards.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <CheckSquare className="h-4 w-4 mr-2 text-teal-500" />
                Downloadable materials
              </li>
              <li className="flex items-center">
                <CheckSquare className="h-4 w-4 mr-2 text-teal-500" />
                Subject and grade filters
              </li>
              <li className="flex items-center">
                <CheckSquare className="h-4 w-4 mr-2 text-teal-500" />
                Teacher-contributed content
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/teacher/resources" className="w-full">
              <Button className="w-full bg-teal-600 hover:bg-teal-700">Browse Resources</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We're constantly developing new tools to support teachers and enhance the learning experience. Stay tuned for
          assessment generators, interactive activity creators, and more!
        </p>
      </div>
    </div>
  )
}
