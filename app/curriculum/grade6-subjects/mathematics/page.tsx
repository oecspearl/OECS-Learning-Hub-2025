import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, Hash, Ruler, ChevronLeft, ChevronRight, BarChart, Shapes, Repeat } from 'lucide-react'
import { Breadcrumb } from "@/components/breadcrumb"

export default function Grade6MathematicsPage() {
  return (
    <div className="container mx-auto py-8">
      <Breadcrumb
        items={[
          { label: "Curriculum", href: "/curriculum" },
          { label: "Grade 6 Subjects", href: "/curriculum/grade6-subjects" },
          { label: "Mathematics", href: "/curriculum/grade6-subjects/mathematics" },
        ]}
      />
      <Link href="/curriculum/grade6-subjects">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Grade 6 Subjects
        </Button>
      </Link>

      <div className="w-full min-w-full max-w-[100vw] mb-8">
        <div className="bg-gradient-to-r from-teal-100 to-blue-100 p-6 rounded-xl shadow-md">
          <h1 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600">
            Grade 6 Mathematics Curriculum
          </h1>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            The Grade 6 mathematics curriculum is designed to solidify learners' fundamental mathematical understanding, skills, and values, building upon their prior knowledge. This curriculum introduces more complex mathematical concepts, encouraging learners to apply logical reasoning and critical thinking to a variety of mathematical problems.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="flex flex-col hover:shadow-xl transition-all duration-300 border-t-4 border-teal-500 hover:-translate-y-1">
          <CardHeader className="pb-3 bg-teal-50 rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-teal-700">
              <Hash className="h-5 w-5" />
              Number Sense
            </CardTitle>
            <CardDescription>Understanding numbers and their relationships</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="mb-4">
              In Number Sense, learners will explore whole numbers, prime numbers, composite numbers, and square numbers.
            </p>
          </CardContent>
          <div className="p-4 pt-0 mt-auto">
            <Link href="/curriculum/grade6-subjects/mathematics/number-sense">
              <Button className="w-full bg-teal-600 hover:bg-teal-700">View Strand</Button>
            </Link>
          </div>
        </Card>

        <Card className="flex flex-col hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500 hover:-translate-y-1">
          <CardHeader className="pb-3 bg-blue-50 rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <Calculator className="h-5 w-5" />
              Operations with Numbers
            </CardTitle>
            <CardDescription>Addition, subtraction, multiplication, and division</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="mb-4">
              In Operations with Numbers, learners will delve deeper into their understanding of division and decimals.
            </p>
          </CardContent>
          <div className="p-4 pt-0 mt-auto">
            <Link href="/curriculum/grade6-subjects/mathematics/operations-with-numbers">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">View Strand</Button>
            </Link>
          </div>
        </Card>

        <Card className="flex flex-col hover:shadow-xl transition-all duration-300 border-t-4 border-amber-500 hover:-translate-y-1">
          <CardHeader className="pb-3 bg-amber-50 rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-amber-700">
              <Repeat className="h-5 w-5" />
              Patterns & Relationships
            </CardTitle>
            <CardDescription>Recognizing, creating, and extending patterns</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="mb-4">
              In Patterns and Relationships, learners will develop a greater understanding that repeating patterns consist of a repeated core sequence.
            </p>
          </CardContent>
          <div className="p-4 pt-0 mt-auto">
            <Link href="/curriculum/grade6-subjects/mathematics/patterns-relationships">
              <Button className="w-full bg-amber-600 hover:bg-amber-700">View Strand</Button>
            </Link>
          </div>
        </Card>

        <Card className="flex flex-col hover:shadow-xl transition-all duration-300 border-t-4 border-purple-500 hover:-translate-y-1">
          <CardHeader className="pb-3 bg-purple-50 rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-purple-700">
              <Shapes className="h-5 w-5" />
              Geometrical Thinking
            </CardTitle>
            <CardDescription>Exploring shapes and their attributes</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="mb-4">
              In Geometrical Thinking, learners are introduced to the concept of volume and recognise it as a characteristic of three-dimensional space.
            </p>
          </CardContent>
          <div className="p-4 pt-0 mt-auto">
            <Link href="/curriculum/grade6-subjects/mathematics/geometrical-thinking">
              <Button className="w-full bg-purple-600 hover:bg-purple-700">View Strand</Button>
            </Link>
          </div>
        </Card>

        <Card className="flex flex-col hover:shadow-xl transition-all duration-300 border-t-4 border-pink-500 hover:-translate-y-1">
          <CardHeader className="pb-3 bg-pink-50 rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-pink-700">
              <Ruler className="h-5 w-5" />
              Measurement
            </CardTitle>
            <CardDescription>Understanding and applying measurement concepts</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="mb-4">
              In Measurement, learners are introduced to the concept of volume and recognise it as a characteristic of three-dimensional space.
            </p>
          </CardContent>
          <div className="p-4 pt-0 mt-auto">
            <Link href="/curriculum/grade6-subjects/mathematics/measurement">
              <Button className="w-full bg-pink-600 hover:bg-pink-700">View Strand</Button>
            </Link>
          </div>
        </Card>

        <Card className="flex flex-col hover:shadow-xl transition-all duration-300 border-t-4 border-indigo-500 hover:-translate-y-1">
          <CardHeader className="pb-3 bg-indigo-50 rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-indigo-700">
              <BarChart className="h-5 w-5" />
              Data Handling & Probability
            </CardTitle>
            <CardDescription>Collecting, organizing, and analyzing data</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="mb-4">
              In Data Handling & Probability, learners are introduced to the concept of volume and recognise it as a characteristic of three-dimensional space.
            </p>
          </CardContent>
          <div className="p-4 pt-0 mt-auto">
            <Link href="/curriculum/grade6-subjects/mathematics/data-probability">
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">View Strand</Button>
            </Link>
          </div>
        </Card>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl shadow-md border border-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Grade 6 Mathematics Overview</h2>
        <p className="mb-4 text-gray-700">
          The Grade 6 mathematics curriculum is designed to solidify learners' fundamental mathematical understanding, skills, and values, building upon their prior knowledge. This curriculum introduces more complex mathematical concepts, encouraging learners to apply logical reasoning and critical thinking to a variety of mathematical problems.
        </p>
        <p className="text-gray-700">
          These skills are integral to helping learners engage actively with mathematical concepts, justify their reasoning, articulate their ideas, and connect various mathematical ideas across different contexts.
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Link href="/curriculum/grade6-subjects/activities/mathematics" className="flex items-center">
            <span className="mr-2">View Mathematics Activities</span>
            <ChevronRight className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  )
}