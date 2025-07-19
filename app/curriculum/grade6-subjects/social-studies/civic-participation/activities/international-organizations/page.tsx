import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Map, Layers, Gamepad2, ChevronLeft, Clock, Target, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"
import { Badge } from "@/components/ui/badge"

export default function InternationalOrganizationsActivitiesPage() {
  return (
    <div>
      <div className="container mx-auto py-8">
                <Link href="/curriculum/grade6-subjects/social-studies/civic-participation/activities">
          <Button variant="outline" className="mb-6">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Civic Participation Activities
          </Button>
        </Link>

        <div className="w-full min-w-full max-w-[100vw] mb-8">
          <div className="bg-gradient-to-r from-blue-100 via-sky-100 to-cyan-100 p-8 rounded-xl shadow-lg">
            <h1 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
              International Organizations Activities
            </h1>
            <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-4">
              Discover how countries work together through international organizations to address global challenges and
              promote cooperation.
            </p>
            <div className="flex justify-center">
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-gray-600">Understanding Global Cooperation</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-blue-700">
                <Map className="h-6 w-6" />
                Activity 6: World Map International Connections
              </CardTitle>
              <CardDescription>
                <Badge variant="outline" className="mr-2">
                  <Clock className="h-3 w-3 mr-1" />
                  45 minutes
                </Badge>
                Visualize international connections using world maps and string
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Target className="h-4 w-4 text-blue-600" />
                    Learning Objectives
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-6">
                    <li>• Distinguish between regional and international relationships</li>
                    <li>• Identify international organizations their country belongs to</li>
                    <li>• Visualize global connections through mapping</li>
                    <li>• Develop definition of "international organization"</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Materials Needed</h4>
                  <p className="text-sm text-gray-700">
                    World map, colored markers, international organization logos, connection string
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Key Activities</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-blue-50 p-2 rounded border-l-2 border-blue-300">
                      <span className="font-medium">Map Exploration (15 min):</span> Identify regional vs. international
                      countries
                    </div>
                    <div className="bg-sky-50 p-2 rounded border-l-2 border-sky-300">
                      <span className="font-medium">Connection Visualization (20 min):</span> Use string to show
                      organizational connections
                    </div>
                    <div className="bg-cyan-50 p-2 rounded border-l-2 border-cyan-300">
                      <span className="font-medium">Definition Development (10 min):</span> Create definition of
                      international organizations
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Organizations to Explore</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-blue-50 p-2 rounded">United Nations (UN)</div>
                    <div className="bg-sky-50 p-2 rounded">World Health Organization</div>
                    <div className="bg-cyan-50 p-2 rounded">UNICEF</div>
                    <div className="bg-teal-50 p-2 rounded">CARICOM</div>
                    <div className="bg-green-50 p-2 rounded">OECS</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Assessment Focus
                  </h4>
                  <p className="text-sm text-gray-700">
                    Understanding of international vs. regional concepts, accuracy in identifying connections, quality
                    of definition development
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-sky-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-sky-700">
                <Layers className="h-6 w-6" />
                Activity 7: Tiered International Organization Learning
              </CardTitle>
              <CardDescription>
                <Badge variant="outline" className="mr-2">
                  <Clock className="h-3 w-3 mr-1" />
                  90 minutes
                </Badge>
                Differentiated learning activities based on student readiness levels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Target className="h-4 w-4 text-sky-600" />
                    Learning Objectives
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-6">
                    <li>• Understand international organization structures</li>
                    <li>• Classify organizations by type and function</li>
                    <li>• Create memory aids for organization names</li>
                    <li>• Support classmates' learning through collaboration</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Tiered Activities</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-sky-50 p-2 rounded border-l-2 border-sky-300">
                      <span className="font-medium">Tier 1 (Advanced):</span> Research organizational structures and
                      conduct interviews
                    </div>
                    <div className="bg-cyan-50 p-2 rounded border-l-2 border-cyan-300">
                      <span className="font-medium">Tier 2 (On-level):</span> Sort and classify organizations using
                      cards
                    </div>
                    <div className="bg-teal-50 p-2 rounded border-l-2 border-teal-300">
                      <span className="font-medium">Tier 3 (Support):</span> Create songs/poems for memory assistance
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Integration Activity</h4>
                  <p className="text-sm text-gray-700">
                    Tic-tac-toe game using organization logos where students identify organizations to earn marks on the
                    game board
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Differentiation Strategies</h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-6">
                    <li>• Vocabulary support for ELL students</li>
                    <li>• Choice in final product format</li>
                    <li>• Adjusted research complexity by reading level</li>
                    <li>• Collaborative work options for social learners</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Assessment Focus
                  </h4>
                  <p className="text-sm text-gray-700">
                    Understanding appropriate to tier level, participation in integration activity, support provided to
                    classmates
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-cyan-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-cyan-700">
                <Building2 className="h-6 w-6" />
                Activity 8: International Organization Choice Board Project
              </CardTitle>
              <CardDescription>
                <Badge variant="outline" className="mr-2">
                  <Clock className="h-3 w-3 mr-1" />
                  120 minutes (multiple sessions)
                </Badge>
                Student choice in demonstrating learning about international organizations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Target className="h-4 w-4 text-cyan-600" />
                    Learning Objectives
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-6">
                    <li>• Demonstrate understanding through preferred learning style</li>
                    <li>• Research how organizations support their country</li>
                    <li>• Create high-quality products in chosen format</li>
                    <li>• Present learning to classmates effectively</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Choice Board Options</h4>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="bg-cyan-50 p-2 rounded text-center">Create Art Piece</div>
                    <div className="bg-teal-50 p-2 rounded text-center">Write Short Essay</div>
                    <div className="bg-blue-50 p-2 rounded text-center">Matching Game</div>
                    <div className="bg-sky-50 p-2 rounded text-center">Article Summary</div>
                    <div className="bg-indigo-50 p-2 rounded text-center">Video Presentation</div>
                    <div className="bg-purple-50 p-2 rounded text-center">Crossword Puzzle</div>
                    <div className="bg-pink-50 p-2 rounded text-center">Group Discussion</div>
                    <div className="bg-rose-50 p-2 rounded text-center">Infographic</div>
                    <div className="bg-orange-50 p-2 rounded text-center">Role-Play Activity</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Session Structure</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-cyan-50 p-2 rounded border-l-2 border-cyan-300">
                      <span className="font-medium">Session 1 (30 min):</span> Choice and planning
                    </div>
                    <div className="bg-teal-50 p-2 rounded border-l-2 border-teal-300">
                      <span className="font-medium">Session 2 (60 min):</span> Research and creation
                    </div>
                    <div className="bg-blue-50 p-2 rounded border-l-2 border-blue-300">
                      <span className="font-medium">Session 3 (30 min):</span> Presentation and assessment
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Organizations to Research</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-cyan-50 p-2 rounded">WHO (World Health Organization)</div>
                    <div className="bg-teal-50 p-2 rounded">FAO (Food & Agriculture Organization)</div>
                    <div className="bg-blue-50 p-2 rounded">IOM (International Organization for Migration)</div>
                    <div className="bg-sky-50 p-2 rounded">UNICEF (Children's Fund)</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Project Guidelines</h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-6">
                    <li>• Must demonstrate understanding of organization's role</li>
                    <li>• Include specific examples of support to student's country</li>
                    <li>• Show creativity and effort appropriate to chosen format</li>
                    <li>• Present information accurately and clearly</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-teal-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-teal-700">
                <Gamepad2 className="h-6 w-6" />
                Activity 9: Cooperation Simulation Games
              </CardTitle>
              <CardDescription>
                <Badge variant="outline" className="mr-2">
                  <Clock className="h-3 w-3 mr-1" />
                  75 minutes
                </Badge>
                Experience cooperation challenges through interactive simulations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Target className="h-4 w-4 text-teal-600" />
                    Learning Objectives
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-6">
                    <li>• Experience challenges of cooperation firsthand</li>
                    <li>• Understand consequences of failed cooperation</li>
                    <li>• Connect simulations to international organization work</li>
                    <li>• Appreciate benefits of successful collaboration</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Game 1: Passing Water to Fight Fire</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-teal-50 p-2 rounded border-l-2 border-teal-300">
                      <span className="font-medium">Setup (5 min):</span> Students form circle with bucket of water
                    </div>
                    <div className="bg-cyan-50 p-2 rounded border-l-2 border-cyan-300">
                      <span className="font-medium">Simulation (15 min):</span> Pass bucket to "put out fire" with
                      challenges
                    </div>
                    <div className="bg-blue-50 p-2 rounded border-l-2 border-blue-300">
                      <span className="font-medium">Debrief (15 min):</span> Discuss cooperation successes and failures
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Game 2: Country Puzzle Assembly</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-teal-50 p-2 rounded border-l-2 border-teal-300">
                      <span className="font-medium">Group Formation (10 min):</span> Groups receive puzzle pieces and
                      organization assignments
                    </div>
                    <div className="bg-cyan-50 p-2 rounded border-l-2 border-cyan-300">
                      <span className="font-medium">Research & Writing (20 min):</span> Research how organization helps
                      the country
                    </div>
                    <div className="bg-blue-50 p-2 rounded border-l-2 border-blue-300">
                      <span className="font-medium">Assembly (10 min):</span> Fit pieces together showing cooperation
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Materials Needed</h4>
                  <p className="text-sm text-gray-700">
                    Buckets, water, puzzle pieces with country outline, scenario cards, research materials
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Discussion Questions</h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-6">
                    <li>• What happens if bucket drops and water spills?</li>
                    <li>• What happens with successful cooperation?</li>
                    <li>• How is this like countries working together?</li>
                    <li>• How do organizations like WHO fight global diseases?</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Assessment Focus
                  </h4>
                  <p className="text-sm text-gray-700">
                    Cooperation during simulations, understanding through debrief discussions, research quality in
                    puzzle activity
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
            International Organizations Learning Outcomes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Map className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Global Connections</h3>
              <p className="text-sm text-gray-600">
                Students visualize and understand international relationships and connections
              </p>
            </div>
            <div className="text-center">
              <div className="bg-sky-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Layers className="h-6 w-6 text-sky-600" />
              </div>
              <h3 className="font-semibold mb-2">Organization Types</h3>
              <p className="text-sm text-gray-600">
                Students classify and understand different types of international organizations
              </p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Building2 className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="font-semibold mb-2">Organizational Impact</h3>
              <p className="text-sm text-gray-600">
                Students research how organizations support their country and region
              </p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Gamepad2 className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="font-semibold mb-2">Cooperation Skills</h3>
              <p className="text-sm text-gray-600">
                Students experience cooperation challenges through interactive simulations
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
