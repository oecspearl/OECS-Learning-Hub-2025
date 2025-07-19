import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Flag, Users, Mic, Camera, ChevronLeft, Clock, BookOpen, Target, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"
import { Badge } from "@/components/ui/badge"

export default function NationalIdentityActivitiesPage() {
  return (
    <div>
      <div className="container mx-auto py-8">
                <Link href="/curriculum/grade6-subjects/social-studies/civic-participation/activities">
          <Button variant="outline" className="mb-6">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Civic Participation Activities
          </Button>
        </Link>

        <div className="w-full min-w-full max-w-[100vw] mb-8">
          <div className="bg-gradient-to-r from-red-100 via-pink-100 to-orange-100 p-8 rounded-xl shadow-lg">
            <h1 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">
              National Identity Activities
            </h1>
            <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-4">
              Explore what makes us proud citizens through anthem reflection, symbol research, and creative expression
              projects.
            </p>
            <div className="flex justify-center">
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-gray-600">Building National Pride & Identity</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-red-700">
                <Flag className="h-6 w-6" />
                Activity 1: National Anthem Reflection
              </CardTitle>
              <CardDescription>
                <Badge variant="outline" className="mr-2">
                  <Clock className="h-3 w-3 mr-1" />
                  50 minutes
                </Badge>
                Explore feelings and meanings behind our national anthem
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Target className="h-4 w-4 text-red-600" />
                    Learning Objectives
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-6">
                    <li>• Reflect on personal feelings when singing the national anthem</li>
                    <li>• Understand the concept of national identity</li>
                    <li>• Connect personal pride to national symbols</li>
                    <li>• Develop vocabulary related to citizenship</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Materials Needed</h4>
                  <p className="text-sm text-gray-700">
                    National anthem recording, chart paper, markers, national symbols display
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Key Activities</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-red-50 p-2 rounded border-l-2 border-red-300">
                      <span className="font-medium">Opening Ritual (10 min):</span> Class sings national anthem with
                      respectful attention
                    </div>
                    <div className="bg-pink-50 p-2 rounded border-l-2 border-pink-300">
                      <span className="font-medium">Guided Discussion (15 min):</span> Explore feelings and reasons for
                      anthem traditions
                    </div>
                    <div className="bg-rose-50 p-2 rounded border-l-2 border-rose-300">
                      <span className="font-medium">Concept Building (15 min):</span> Brainstorm elements of national
                      identity
                    </div>
                    <div className="bg-orange-50 p-2 rounded border-l-2 border-orange-300">
                      <span className="font-medium">Personal Reflection (10 min):</span> Write about sources of national
                      pride
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Assessment Focus
                  </h4>
                  <p className="text-sm text-gray-700">
                    Observe participation in anthem singing, quality of discussion contributions, and depth of personal
                    reflection
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-pink-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-pink-700">
                <Users className="h-6 w-6" />
                Activity 2: National Identity Research Carousel
              </CardTitle>
              <CardDescription>
                <Badge variant="outline" className="mr-2">
                  <Clock className="h-3 w-3 mr-1" />
                  90 minutes
                </Badge>
                Rotate through stations exploring different aspects of national identity
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Target className="h-4 w-4 text-pink-600" />
                    Learning Objectives
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-6">
                    <li>• Research multiple components of national identity</li>
                    <li>• Collaborate effectively in small groups</li>
                    <li>• Present findings using various formats</li>
                    <li>• Appreciate cultural diversity within national unity</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Research Stations</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-pink-50 p-2 rounded">National Symbols</div>
                    <div className="bg-rose-50 p-2 rounded">Cultural Festivals</div>
                    <div className="bg-red-50 p-2 rounded">Languages & Origins</div>
                    <div className="bg-orange-50 p-2 rounded">Historical Heroes</div>
                    <div className="bg-amber-50 p-2 rounded">Geography & Landscapes</div>
                    <div className="bg-yellow-50 p-2 rounded">Sports Heroes</div>
                    <div className="bg-lime-50 p-2 rounded">Political Systems</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Presentation Options</h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-6">
                    <li>• PowerPoint/digital presentations</li>
                    <li>• Creative poster displays</li>
                    <li>• Role-play demonstrations</li>
                    <li>• Educational brochures</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Assessment Focus
                  </h4>
                  <p className="text-sm text-gray-700">
                    Research accuracy, creativity in presentation, collaboration skills, understanding of national
                    identity components
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-orange-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-orange-700">
                <BookOpen className="h-6 w-6" />
                Activity 3: National Symbol Poster Creation
              </CardTitle>
              <CardDescription>
                <Badge variant="outline" className="mr-2">
                  <Clock className="h-3 w-3 mr-1" />
                  75 minutes
                </Badge>
                Research and create detailed posters about national symbols
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Target className="h-4 w-4 text-orange-600" />
                    Learning Objectives
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-6">
                    <li>• Research individual national symbols in depth</li>
                    <li>• Understand historical significance of symbols</li>
                    <li>• Create visually appealing educational materials</li>
                    <li>• Connect symbols to national identity concepts</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Symbol Assignments</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-orange-50 p-2 rounded">National Flag</div>
                    <div className="bg-amber-50 p-2 rounded">Coat of Arms</div>
                    <div className="bg-yellow-50 p-2 rounded">National Bird</div>
                    <div className="bg-lime-50 p-2 rounded">National Tree</div>
                    <div className="bg-green-50 p-2 rounded">National Flower</div>
                    <div className="bg-emerald-50 p-2 rounded">National Anthem</div>
                    <div className="bg-teal-50 p-2 rounded">National Motto</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Poster Requirements</h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-6">
                    <li>• Large, clear visual of the symbol</li>
                    <li>• Historical timeline of symbol's development</li>
                    <li>• Explanation of symbolic meaning</li>
                    <li>• Connection to national identity</li>
                    <li>• Creative design elements</li>
                    <li>• Proper spelling and grammar</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Extension Activities</h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-6">
                    <li>• Create digital versions using design tools</li>
                    <li>• Share on school social media</li>
                    <li>• Compile class book of national symbols</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-amber-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-amber-700">
                <Mic className="h-6 w-6" />
                Activity 4: Community Resource Person Interview
              </CardTitle>
              <CardDescription>
                <Badge variant="outline" className="mr-2">
                  <Clock className="h-3 w-3 mr-1" />
                  60 minutes
                </Badge>
                Interview prominent community members about citizenship and service
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Target className="h-4 w-4 text-amber-600" />
                    Learning Objectives
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-6">
                    <li>• Practice interview skills and active listening</li>
                    <li>• Learn about community contributions and service</li>
                    <li>• Understand different ways to show national pride</li>
                    <li>• Connect with positive role models</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Interview Structure</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-amber-50 p-2 rounded border-l-2 border-amber-300">
                      <span className="font-medium">Introduction (5 min):</span> Welcome guest and explain purpose
                    </div>
                    <div className="bg-yellow-50 p-2 rounded border-l-2 border-yellow-300">
                      <span className="font-medium">Structured Interview (35 min):</span> Guest shares contributions and
                      advice
                    </div>
                    <div className="bg-orange-50 p-2 rounded border-l-2 border-orange-300">
                      <span className="font-medium">Student Questions (15 min):</span> Students ask prepared questions
                    </div>
                    <div className="bg-red-50 p-2 rounded border-l-2 border-red-300">
                      <span className="font-medium">Appreciation (5 min):</span> Thank guest and reflect on learning
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Sample Questions</h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-6">
                    <li>• How have you contributed to our country?</li>
                    <li>• What makes you most proud to be a citizen?</li>
                    <li>• What advice would you give young people about national service?</li>
                    <li>• How can students our age show national pride?</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Post-Interview Extensions</h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-6">
                    <li>• Write reflection essays about the interview</li>
                    <li>• Create class newsletter featuring guest's contributions</li>
                    <li>• Plan community service project inspired by guest</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-purple-500 lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-purple-700">
                <Camera className="h-6 w-6" />
                Activity 5: National Pride Creative Expression Project
              </CardTitle>
              <CardDescription>
                <Badge variant="outline" className="mr-2">
                  <Clock className="h-3 w-3 mr-1" />
                  100 minutes (multiple sessions)
                </Badge>
                Express national pride through various creative formats
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Target className="h-4 w-4 text-purple-600" />
                      Learning Objectives
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1 ml-6">
                      <li>• Express personal connection to national identity</li>
                      <li>• Choose appropriate creative format for expression</li>
                      <li>• Demonstrate understanding of national pride concepts</li>
                      <li>• Share authentic personal voice and perspective</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Creative Expression Options</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="bg-purple-50 p-2 rounded">Short Paragraph</div>
                      <div className="bg-indigo-50 p-2 rounded">Jingle or Poem</div>
                      <div className="bg-blue-50 p-2 rounded">Song Composition</div>
                      <div className="bg-cyan-50 p-2 rounded">Art/Drawing Project</div>
                      <div className="bg-teal-50 p-2 rounded">Video Creation</div>
                      <div className="bg-green-50 p-2 rounded">Dance/Movement</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Project Guidelines</h4>
                    <ul className="text-sm text-gray-700 space-y-1 ml-6">
                      <li>• Must reflect genuine personal connection</li>
                      <li>• Should demonstrate understanding of concepts</li>
                      <li>• Encourage originality and personal voice</li>
                      <li>• Maintain respectful and appropriate content</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Session Structure</h4>
                    <div className="space-y-2 text-sm">
                      <div className="bg-purple-50 p-2 rounded border-l-2 border-purple-300">
                        <span className="font-medium">Session 1 (25 min):</span> Planning and inspiration discussion
                      </div>
                      <div className="bg-indigo-50 p-2 rounded border-l-2 border-indigo-300">
                        <span className="font-medium">Session 2 (50 min):</span> Individual creation and peer feedback
                      </div>
                      <div className="bg-blue-50 p-2 rounded border-l-2 border-blue-300">
                        <span className="font-medium">Session 3 (25 min):</span> Presentation and celebration
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Assessment Focus
                    </h4>
                    <p className="text-sm text-gray-700">
                      Evaluate creativity, personal connection to content, understanding of national pride, and quality
                      of expression
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Sharing Formats</h4>
                    <ul className="text-sm text-gray-700 space-y-1 ml-6">
                      <li>• Gallery walk for visual arts</li>
                      <li>• Performance time for songs/dances</li>
                      <li>• Reading circle for written works</li>
                      <li>• Video screening for digital creations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-red-50 p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">National Identity Learning Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Flag className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Symbol Understanding</h3>
              <p className="text-sm text-gray-600">
                Students understand the meaning and significance of national symbols
              </p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="font-semibold mb-2">Cultural Appreciation</h3>
              <p className="text-sm text-gray-600">Students appreciate cultural diversity within national unity</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Camera className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Personal Connection</h3>
              <p className="text-sm text-gray-600">
                Students develop personal connection to national identity and pride
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/curriculum/grade6-subjects/social-studies/civic-participation/activities">
            <Button variant="outline" size="lg" className="px-8 py-3">
              <ChevronLeft className="mr-2 h-5 w-5" />
              Back to Civic Participation Activities
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
