import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Calculator, FlaskRoundIcon as Flask, Globe, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"

export default function Grade5SubjectsPage() {
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
            Grade 5 Curriculum
          </h1>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            The Grade 5 curriculum represents the culmination of elementary education, preparing students for middle
            school with sophisticated analytical skills, independent research abilities, and comprehensive subject
            mastery across all academic disciplines.
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
            <CardDescription>Sophisticated literacy and advanced communication</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The Grade 5 Language Arts curriculum emphasizes advanced literary analysis, sophisticated writing
              techniques, and complex oral presentations. Students engage with challenging texts, develop research
              skills, and create multi-genre compositions while mastering grammar and vocabulary at an advanced level.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Literary Analysis
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Research Writing
              </span>
              <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Public Speaking
              </span>
            </div>
            <Link href="/curriculum/grade5-subjects/language-arts">
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
            <CardDescription>Advanced mathematical concepts and reasoning</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The Grade 5 Mathematics curriculum introduces pre-algebraic concepts, advanced fraction and decimal
              operations, coordinate geometry, and statistical analysis. Students develop sophisticated problem-solving
              strategies and mathematical reasoning skills essential for middle school mathematics.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Pre-Algebra</span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Coordinate Geometry
              </span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Statistics</span>
            </div>
            <Link href="/curriculum/grade5-subjects/mathematics">
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
            <CardDescription>Complex scientific investigation and analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The Grade 5 Science curriculum emphasizes advanced scientific inquiry through complex investigations.
              Students explore matter and energy interactions, ecosystem dynamics, space systems, and engineering design
              while developing sophisticated data analysis and scientific communication skills.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Matter & Energy
              </span>
              <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Space Systems
              </span>
              <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Engineering Design
              </span>
            </div>
            <Link href="/curriculum/grade5-subjects/science">
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
            <CardDescription>Advanced historical analysis and global perspectives</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The Grade 5 Social Studies curriculum explores Caribbean independence movements, regional integration,
              global connections, and contemporary challenges. Students develop advanced research skills, critical
              thinking about historical sources, and understanding of their role in the global community.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Independence Movements
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Regional Integration
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Global Citizenship
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Research Skills
              </span>
            </div>
            <Link href="/curriculum/grade5-subjects/social-studies">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Explore Social Studies</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl shadow-md border border-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Grade 5 Curriculum Overview</h2>
        <p className="mb-4 text-gray-700">
          The Grade 5 curriculum serves as the capstone of elementary education, integrating advanced concepts across
          all subject areas while preparing students for the transition to middle school. Students develop independence,
          critical thinking skills, and the ability to synthesize information from multiple sources.
        </p>
        <p className="text-gray-700">
          This curriculum emphasizes project-based learning, collaborative research, and authentic assessment practices.
          Students engage in complex investigations, present findings to authentic audiences, and demonstrate mastery
          through portfolios and performance-based assessments that showcase their growth and readiness for advanced
          study.
        </p>
      </div>
    </div>
  )
}
