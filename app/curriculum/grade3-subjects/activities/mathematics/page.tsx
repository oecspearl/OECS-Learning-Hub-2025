import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Grade 3 Mathematics Activities",
  description: "Engaging mathematics activities for Grade 3 students across all strands",
}

export default function Grade3MathematicsActivitiesPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Curriculum", href: "/curriculum" },
          { label: "Grade 3", href: "/curriculum/grade3-subjects" },
          { label: "Mathematics", href: "/curriculum/grade3-subjects/mathematics" },
          { label: "Activities", href: "/curriculum/grade3-subjects/activities/mathematics" },
        ]}
      />

      <div className="mb-8 mt-6">
        <h1 className="text-3xl font-bold mb-2">Grade 3 Mathematics Activities</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Explore engaging and interactive mathematics activities designed for Grade 3 students. These activities
          support the development of mathematical concepts across all strands of the curriculum.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle>Number Sense</CardTitle>
            <CardDescription>
              Activities focused on place value, comparing numbers, fractions, and decimals
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-48 relative mb-4">
              <Image
                src="/placeholder-ocxih.png"
                alt="Children learning number sense concepts"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <p className="text-sm">
              Develop understanding of numbers, place value, and fractions through hands-on activities and games.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/curriculum/grade3-subjects/activities/mathematics/number-sense"
              className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              View activities <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </CardFooter>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle>Operations with Numbers</CardTitle>
            <CardDescription>Activities focused on addition, subtraction, multiplication, and division</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-48 relative mb-4">
              <Image
                src="/placeholder-ng8t8.png"
                alt="Children learning multiplication"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <p className="text-sm">
              Build fluency with the four operations through engaging games, problem-solving activities, and real-world
              applications.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/curriculum/grade3-subjects/activities/mathematics/operations-with-numbers"
              className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              View activities <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </CardFooter>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle>Geometrical Thinking</CardTitle>
            <CardDescription>Activities focused on shapes, spatial sense, and transformations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-48 relative mb-4">
              <Image
                src="/placeholder-8lsz3.png"
                alt="Children learning about geometric shapes"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <p className="text-sm">
              Explore 2D and 3D shapes, develop spatial sense, and understand transformations through hands-on
              activities.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/curriculum/grade3-subjects/activities/mathematics/geometrical-thinking"
              className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              View activities <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </CardFooter>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle>Measurement</CardTitle>
            <CardDescription>Activities focused on length, area, perimeter, mass, capacity, and time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-48 relative mb-4">
              <Image
                src="/placeholder.svg?height=400&width=600&query=children measuring objects"
                alt="Children measuring objects"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <p className="text-sm">
              Develop measurement skills through practical activities involving length, area, perimeter, mass, capacity,
              and time.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/curriculum/grade3-subjects/activities/mathematics/measurement"
              className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              View activities <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </CardFooter>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle>Data & Probability</CardTitle>
            <CardDescription>
              Activities focused on data collection, representation, analysis, and probability
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-48 relative mb-4">
              <Image
                src="/placeholder.svg?height=400&width=600&query=children creating graphs and charts"
                alt="Children creating graphs and charts"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <p className="text-sm">
              Learn to collect, organize, and analyze data, as well as understand basic probability concepts through
              engaging activities.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/curriculum/grade3-subjects/activities/mathematics/data-probability"
              className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              View activities <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </CardFooter>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle>Cross-Strand Projects</CardTitle>
            <CardDescription>Integrated projects that combine multiple mathematics strands</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-48 relative mb-4">
              <Image
                src="/placeholder.svg?height=400&width=600&query=children working on math projects"
                alt="Children working on mathematics projects"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <p className="text-sm">
              Engage in project-based learning activities that integrate concepts from multiple mathematics strands.
            </p>
          </CardContent>
          <CardFooter>
            <span className="text-gray-500 dark:text-gray-400 flex items-center">
              Coming soon <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-12 bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Teacher Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Activity Planning</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-green-600" />
                <span>
                  Use the{" "}
                  <Link href="/planner" className="text-blue-600 hover:underline">
                    Lesson Planner
                  </Link>{" "}
                  to incorporate these activities into your lessons
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-green-600" />
                <span>Download printable activity guides for offline use in your classroom</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-green-600" />
                <span>
                  Adapt activities for different learning needs using our{" "}
                  <Link href="/innovative-tools" className="text-blue-600 hover:underline">
                    Differentiation Tools
                  </Link>
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Assessment</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-green-600" />
                <span>Access formative assessment tools aligned with each activity</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-green-600" />
                <span>Track student progress across mathematics strands</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-green-600" />
                <span>Generate reports to share with parents and administrators</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
