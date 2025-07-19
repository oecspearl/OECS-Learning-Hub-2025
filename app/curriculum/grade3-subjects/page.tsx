import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Calculator, FlaskRoundIcon as Flask, Globe, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"

export default function Grade3SubjectsPage() {
  return (
    <div className="container mx-auto py-8">
      
      <Link href="/curriculum">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Curriculum
        </Button>
      </Link>

      <div className="w-full min-w-full max-w-[100vw] mb-8">
        <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-xl shadow-md">
          <h1 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
            Grade 3 Curriculum
          </h1>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            The Grade 3 curriculum builds upon the foundations established in earlier grades, encouraging students to
            develop deeper understanding, critical thinking skills, and greater independence in their learning journey.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-purple-500 hover:-translate-y-1">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-purple-700">
              <BookOpen className="h-5 w-5" />
              Language Arts
            </CardTitle>
            <CardDescription>Communication and literacy development</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The Grade 3 Language Arts curriculum focuses on developing students' abilities in listening, speaking,
              reading, viewing, writing, and representing. Students build upon their literacy skills to become more
              confident, independent communicators and critical thinkers.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Listening & Speaking
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Reading & Viewing
              </span>
              <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Writing & Representing
              </span>
            </div>
            <Link href="/curriculum/grade3-subjects/language-arts">
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Explore Language Arts</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-green-500 hover:-translate-y-1">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-green-700">
              <Calculator className="h-5 w-5" />
              Mathematics
            </CardTitle>
            <CardDescription>Numerical reasoning and problem solving</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The Grade 3 Mathematics curriculum deepens students' understanding of mathematical concepts, skills, and
              problem-solving strategies. Students explore more complex number sense, operations, patterns, geometry,
              measurement, and data analysis.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Number Sense
              </span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Operations</span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Geometry</span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Measurement</span>
            </div>
            <Link href="/curriculum/grade3-subjects/mathematics">
              <Button className="w-full bg-green-600 hover:bg-green-700">Explore Mathematics</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-amber-500 hover:-translate-y-1">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-amber-700">
              <Flask className="h-5 w-5" />
              Science
            </CardTitle>
            <CardDescription>Inquiry-based exploration of the natural world</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The Grade 3 Science curriculum encourages students to explore the natural world through more advanced
              inquiry-based learning. Students investigate ecosystems, matter, energy, and earth systems while
              developing scientific thinking and experimental skills.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Life Science
              </span>
              <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Physical Science
              </span>
              <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Earth Science
              </span>
            </div>
            <Link href="/curriculum/grade3-subjects/science">
              <Button className="w-full bg-amber-600 hover:bg-amber-700">Explore Science</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500 hover:-translate-y-1">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <Globe className="h-5 w-5" />
              Social Studies
            </CardTitle>
            <CardDescription>Understanding communities and relationships</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The Grade 3 Social Studies curriculum expands students' understanding of their place in the world and
              their relationships with others. Students explore diverse communities, cultural heritage, geography, and
              historical events with greater depth.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Communities</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Geography</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">History</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Citizenship</span>
            </div>
            <Link href="/curriculum/grade3-subjects/social-studies">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Explore Social Studies</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl shadow-md border border-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Grade 3 Curriculum Overview</h2>
        <p className="mb-4 text-gray-700">
          The Grade 3 curriculum is designed to build upon the foundations established in earlier grades. It encourages
          students to develop deeper understanding, critical thinking skills, and greater independence in their learning
          journey. The curriculum is organized around key subject areas, each with specific learning outcomes and
          expectations.
        </p>
        <p className="text-gray-700">
          Teachers are encouraged to integrate learning across subject areas where appropriate, creating meaningful
          connections for students. Assessment is ongoing and designed to support student growth and development as they
          prepare for the transition to upper elementary grades.
        </p>
      </div>
    </div>
  )
}
