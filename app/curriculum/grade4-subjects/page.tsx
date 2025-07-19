import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Calculator, FlaskRoundIcon as Flask, Globe, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"

export default function Grade4SubjectsPage() {
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
            Grade 4 Curriculum
          </h1>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            The Grade 4 curriculum builds upon previous learning, challenging students to develop advanced critical
            thinking skills, deeper subject knowledge, and greater independence as they prepare for upper elementary
            education.
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
            <CardDescription>Advanced literacy and communication skills</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The Grade 4 Language Arts curriculum focuses on developing more sophisticated reading comprehension,
              writing composition, and oral communication skills. Students analyze diverse texts, craft more complex
              narratives, and engage in critical discussions about literature.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Critical Reading
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Expository Writing
              </span>
              <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Media Literacy
              </span>
            </div>
            <Link href="/curriculum/grade4-subjects/language-arts">
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
            <CardDescription>Complex problem solving and mathematical reasoning</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The Grade 4 Mathematics curriculum expands students' understanding of mathematical concepts with
              multi-digit operations, fractions, decimals, and more complex geometric principles. Students develop
              advanced problem-solving strategies and mathematical reasoning skills.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Fractions & Decimals
              </span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Multi-digit Operations
              </span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Data Analysis
              </span>
            </div>
            <Link href="/curriculum/grade4-subjects/mathematics">
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
            <CardDescription>Advanced scientific inquiry and investigation</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The Grade 4 Science curriculum deepens students' understanding of scientific concepts through more
              sophisticated investigations. Students explore energy transfer, complex ecosystems, earth processes, and
              develop more rigorous scientific inquiry skills.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Energy & Motion
              </span>
              <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">Ecosystems</span>
              <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Earth Processes
              </span>
            </div>
            <Link href="/curriculum/grade4-subjects/science">
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
            <CardDescription>Historical perspectives and civic understanding</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The Grade 4 Social Studies curriculum explores Indigenous peoples of the Caribbean, European colonization,
              geographic features, civic participation, and economic decision-making. Students develop a deeper
              understanding of their history, environment, and role as citizens.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Indigenous History
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Geography</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Civic Participation
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Economics</span>
            </div>
            <Link href="/curriculum/grade4-subjects/social-studies">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Explore Social Studies</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl shadow-md border border-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Grade 4 Curriculum Overview</h2>
        <p className="mb-4 text-gray-700">
          The Grade 4 curriculum is designed to challenge students with more complex concepts and skills across all
          subject areas. It encourages critical thinking, problem-solving, and independent learning while preparing
          students for the increased academic demands of upper elementary education.
        </p>
        <p className="text-gray-700">
          Teachers implement cross-curricular connections to help students see relationships between subjects and apply
          their knowledge in meaningful contexts. Assessment practices focus on both formative and summative approaches
          to support student growth and measure achievement of key learning outcomes.
        </p>
      </div>
    </div>
  )
}
