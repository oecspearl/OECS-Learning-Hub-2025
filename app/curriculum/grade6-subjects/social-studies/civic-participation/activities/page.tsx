import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Globe, AlertTriangle, Handshake, ChevronLeft, BookOpen, Flag, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"

export default function Grade6CivicParticipationActivitiesPage() {
  return (
    <div>
      <div className="container mx-auto py-8">
                <Link href="/curriculum/grade6-subjects/social-studies/civic-participation">
          <Button variant="outline" className="mb-6">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Civic Participation
          </Button>
        </Link>

        <div className="w-full min-w-full max-w-[100vw] mb-8">
          <div className="bg-gradient-to-r from-purple-100 via-indigo-100 to-blue-100 p-8 rounded-xl shadow-lg">
            <h1 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              Grade 6 Civic Participation Activities
            </h1>
            <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-4">
              Develop global citizenship skills through engaging activities that explore national identity,
              international cooperation, and active participation in addressing social issues.
            </p>
            <div className="flex justify-center">
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-gray-600">Focus: Active Global Citizenship</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-red-500 hover:-translate-y-2 group">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-red-700 text-xl">
                <div className="p-2 bg-red-100 rounded-lg group-hover:bg-red-200 transition-colors">
                  <Flag className="h-6 w-6" />
                </div>
                National Identity
              </CardTitle>
              <CardDescription className="text-base">
                Explore what makes us proud citizens and understand national symbols
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Students explore national identity through anthem reflection, symbol research, and community interviews.
                Activities include creating national symbol posters, interviewing community leaders, and expressing
                national pride through creative projects that connect personal identity to citizenship.
              </p>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-gray-800">Featured Activities:</h4>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="bg-red-50 p-2 rounded border-l-2 border-red-300">
                    <span className="font-medium">National Anthem Reflection & Identity Exploration</span>
                  </div>
                  <div className="bg-pink-50 p-2 rounded border-l-2 border-pink-300">
                    <span className="font-medium">National Identity Research Carousel</span>
                  </div>
                  <div className="bg-rose-50 p-2 rounded border-l-2 border-rose-300">
                    <span className="font-medium">National Symbol Poster Creation</span>
                  </div>
                  <div className="bg-orange-50 p-2 rounded border-l-2 border-orange-300">
                    <span className="font-medium">Community Resource Person Interview</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full">
                  National Symbols
                </span>
                <span className="bg-pink-100 text-pink-800 text-xs font-medium px-3 py-1 rounded-full">
                  Cultural Heritage
                </span>
                <span className="bg-rose-100 text-rose-800 text-xs font-medium px-3 py-1 rounded-full">
                  Civic Pride
                </span>
                <span className="bg-orange-100 text-orange-800 text-xs font-medium px-3 py-1 rounded-full">
                  Community Leaders
                </span>
              </div>

              <Link href="/curriculum/grade6-subjects/social-studies/civic-participation/activities/national-identity">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Explore National Identity Activities
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500 hover:-translate-y-2 group">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-blue-700 text-xl">
                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <Building2 className="h-6 w-6" />
                </div>
                International Organizations
              </CardTitle>
              <CardDescription className="text-base">
                Understand how countries work together through global organizations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Students investigate international organizations like the UN, WHO, and UNICEF through mapping
                activities, research projects, and cooperation simulations. They learn how global challenges require
                international cooperation and understand their country's role in the global community.
              </p>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-gray-800">Featured Activities:</h4>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="bg-blue-50 p-2 rounded border-l-2 border-blue-300">
                    <span className="font-medium">World Map International Connections</span>
                  </div>
                  <div className="bg-sky-50 p-2 rounded border-l-2 border-sky-300">
                    <span className="font-medium">Tiered International Organization Learning</span>
                  </div>
                  <div className="bg-cyan-50 p-2 rounded border-l-2 border-cyan-300">
                    <span className="font-medium">Choice Board Project</span>
                  </div>
                  <div className="bg-teal-50 p-2 rounded border-l-2 border-teal-300">
                    <span className="font-medium">Cooperation Simulation Games</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                  United Nations
                </span>
                <span className="bg-sky-100 text-sky-800 text-xs font-medium px-3 py-1 rounded-full">WHO & UNICEF</span>
                <span className="bg-cyan-100 text-cyan-800 text-xs font-medium px-3 py-1 rounded-full">CARICOM</span>
                <span className="bg-teal-100 text-teal-800 text-xs font-medium px-3 py-1 rounded-full">
                  Global Cooperation
                </span>
              </div>

              <Link href="/curriculum/grade6-subjects/social-studies/civic-participation/activities/international-organizations">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Explore International Organizations
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-amber-500 hover:-translate-y-2 group">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-amber-700 text-xl">
                <div className="p-2 bg-amber-100 rounded-lg group-hover:bg-amber-200 transition-colors">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                Social Issues
              </CardTitle>
              <CardDescription className="text-base">
                Analyze current social challenges and develop informed perspectives
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Students examine social issues affecting the Eastern Caribbean through media analysis, news report
                creation, and structured debates. They develop critical thinking skills while learning to analyze
                complex problems and communicate informed perspectives on important social challenges.
              </p>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-gray-800">Featured Activities:</h4>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="bg-amber-50 p-2 rounded border-l-2 border-amber-300">
                    <span className="font-medium">Social Issues Media Gallery Walk</span>
                  </div>
                  <div className="bg-yellow-50 p-2 rounded border-l-2 border-yellow-300">
                    <span className="font-medium">News Report Simulation Project</span>
                  </div>
                  <div className="bg-orange-50 p-2 rounded border-l-2 border-orange-300">
                    <span className="font-medium">Social Issues Debate Tournament</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full">
                  Climate Change
                </span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full">
                  Economic Inequality
                </span>
                <span className="bg-orange-100 text-orange-800 text-xs font-medium px-3 py-1 rounded-full">
                  Migration
                </span>
                <span className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full">
                  Media Literacy
                </span>
              </div>

              <Link href="/curriculum/grade6-subjects/social-studies/civic-participation/activities/social-issues">
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Explore Social Issues Activities
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-green-500 hover:-translate-y-2 group">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-green-700 text-xl">
                <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                  <Handshake className="h-6 w-6" />
                </div>
                International Cooperation
              </CardTitle>
              <CardDescription className="text-base">
                Experience how countries collaborate to solve global challenges
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Students participate in Model UN simulations, analyze cooperation case studies, and explore Eastern
                Caribbean regional partnerships. They learn how international cooperation addresses global challenges
                and understand the importance of diplomatic collaboration in solving complex problems.
              </p>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-gray-800">Featured Activities:</h4>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="bg-green-50 p-2 rounded border-l-2 border-green-300">
                    <span className="font-medium">Case Study Analysis of Global Cooperation</span>
                  </div>
                  <div className="bg-emerald-50 p-2 rounded border-l-2 border-emerald-300">
                    <span className="font-medium">Model United Nations Simulation</span>
                  </div>
                  <div className="bg-teal-50 p-2 rounded border-l-2 border-teal-300">
                    <span className="font-medium">Eastern Caribbean Cooperation Project</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">Model UN</span>
                <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-3 py-1 rounded-full">
                  Diplomacy
                </span>
                <span className="bg-teal-100 text-teal-800 text-xs font-medium px-3 py-1 rounded-full">
                  Regional Partnerships
                </span>
                <span className="bg-cyan-100 text-cyan-800 text-xs font-medium px-3 py-1 rounded-full">
                  Global Solutions
                </span>
              </div>

              <Link href="/curriculum/grade6-subjects/social-studies/civic-participation/activities/international-cooperation">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Explore Cooperation Activities
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-purple-50 p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Civic Participation Learning Approach</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Active Citizenship</h3>
              <p className="text-gray-600 text-sm">
                Students develop skills for meaningful participation in democratic processes and community life.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Global Perspective</h3>
              <p className="text-gray-600 text-sm">
                Activities connect local citizenship to global citizenship and international cooperation.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <Handshake className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Collaborative Problem-Solving</h3>
              <p className="text-gray-600 text-sm">
                Students learn to work together to address complex social issues and global challenges.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-3 text-gray-800">21st Century Skills Development</h3>
            <p className="text-gray-700 mb-4">
              Civic Participation activities develop essential skills for active citizenship in a globalized world:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-purple-50 p-3 rounded border-l-4 border-purple-400">
                <span className="font-medium text-purple-800">Critical Thinking:</span>
                <p className="text-purple-700">Analyzing complex social issues and multiple perspectives</p>
              </div>
              <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                <span className="font-medium text-blue-800">Communication:</span>
                <p className="text-blue-700">Expressing ideas clearly in debates and presentations</p>
              </div>
              <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                <span className="font-medium text-green-800">Collaboration:</span>
                <p className="text-green-700">Working together in simulations and group projects</p>
              </div>
              <div className="bg-amber-50 p-3 rounded border-l-4 border-amber-400">
                <span className="font-medium text-amber-800">Digital Literacy:</span>
                <p className="text-amber-700">Using technology for research and media creation</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/curriculum/grade6-subjects/activities/social-studies">
            <Button variant="outline" size="lg" className="px-8 py-3">
              <ChevronLeft className="mr-2 h-5 w-5" />
              Back to Grade 6 Social Studies Activities
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
