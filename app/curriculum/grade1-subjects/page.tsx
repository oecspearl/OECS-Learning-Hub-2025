import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Calculator, FlaskRoundIcon as Flask, BookText } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function Grade1SubjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 mb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Grade 1 Curriculum</h1>
            <p className="text-lg md:text-xl text-blue-100">
              Building a strong foundation for young learners through engaging, play-based learning experiences
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        {/* Introduction Card */}
        <Card className="mb-8 border-2 border-blue-100 bg-white/50 backdrop-blur-sm">
          <CardContent className="pt-8 pb-6">
            <div className="w-full text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to Grade 1!</h2>
              <p className="text-gray-600 mb-4 text-lg">
                Our Grade 1 curriculum is thoughtfully designed to nurture young minds through a balanced approach
                to learning. We focus on developing essential skills in literacy, numeracy, scientific inquiry,
                and social awareness.
              </p>
              <p className="text-gray-600 text-lg">
                Each subject area is carefully crafted to engage students through interactive activities,
                hands-on experiences, and real-world connections.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Subject Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Language Arts Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-200">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100/50">
              <CardTitle className="flex items-center text-blue-700">
                <BookText className="mr-3 h-6 w-6" />
                Language Arts
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-600 mb-4">
                Develop foundational literacy skills through engaging activities in listening, speaking,
                reading, and writing. Students explore various texts and express themselves through
                different forms of communication.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Interactive storytelling and reading activities</li>
                <li>• Phonics and word recognition exercises</li>
                <li>• Creative writing and expression</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 transition-colors">
                <Link href="/curriculum/grade1-subjects/language-arts">Explore Language Arts</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Mathematics Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-green-100 hover:border-green-200">
            <CardHeader className="bg-gradient-to-r from-green-50 to-green-100/50">
              <CardTitle className="flex items-center text-green-700">
                <Calculator className="mr-3 h-6 w-6" />
                Mathematics
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-600 mb-4">
                Build number sense and problem-solving skills through hands-on activities and real-world
                applications. Students develop spatial awareness and measurement skills in engaging ways.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Number recognition and counting activities</li>
                <li>• Basic operations and problem-solving</li>
                <li>• Shapes, patterns, and measurements</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-green-600 hover:bg-green-700 transition-colors">
                <Link href="/curriculum/grade1-subjects/mathematics">Explore Mathematics</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Science Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-purple-100 hover:border-purple-200">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100/50">
              <CardTitle className="flex items-center text-purple-700">
                <Flask className="mr-3 h-6 w-6" />
                Science
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-600 mb-4">
                Foster curiosity and exploration of the natural world through hands-on investigations.
                Students develop scientific inquiry skills while exploring living things and Earth systems.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Nature exploration and observation</li>
                <li>• Simple experiments and investigations</li>
                <li>• Understanding living things and materials</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 transition-colors">
                <Link href="/curriculum/grade1-subjects/science">Explore Science</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Social Studies Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-amber-100 hover:border-amber-200">
            <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100/50">
              <CardTitle className="flex items-center text-amber-700">
                <BookOpen className="mr-3 h-6 w-6" />
                Social Studies
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-600 mb-4">
                Help students understand their identity, community, and environment through engaging
                activities. Explore cultural heritage, civic participation, and economic awareness.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Community and family studies</li>
                <li>• Cultural heritage exploration</li>
                <li>• Basic economic concepts</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-amber-600 hover:bg-amber-700 transition-colors">
                <Link href="/curriculum/grade1-subjects/social-studies">Explore Social Studies</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
