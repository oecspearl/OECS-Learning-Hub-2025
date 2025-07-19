import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Clock, Users, Target, CheckCircle, Gamepad2, Trophy } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function InteractiveGeographyGamePage() {
  return (
    <div className="container mx-auto py-8">
            <Link href="/curriculum/grade6-subjects/social-studies/spatial-thinking/activities">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Spatial Thinking Activities
        </Button>
      </Link>

      <div className="mb-8">
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-purple-700 flex items-center">
            <Gamepad2 className="mr-2 h-7 w-7 text-purple-600" />
            Continents and Oceans Interactive Game
          </h1>
          <p className="text-gray-700 mb-4">
            Students participate in an engaging interactive mapping game to reinforce their knowledge of continents,
            oceans, and the Caribbean region through competitive and collaborative activities.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="flex items-center">
              <Clock className="mr-1 h-3 w-3" />
              40 minutes
            </Badge>
            <Badge variant="secondary" className="flex items-center">
              <Users className="mr-1 h-3 w-3" />
              Whole Class
            </Badge>
            <Badge variant="secondary" className="flex items-center">
              <Target className="mr-1 h-3 w-3" />
              Interactive Gaming
            </Badge>
          </div>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="materials">Materials</TabsTrigger>
          <TabsTrigger value="procedure">Procedure</TabsTrigger>
          <TabsTrigger value="differentiation">Differentiation</TabsTrigger>
          <TabsTrigger value="assessment">Assessment</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="mr-2 h-5 w-5 text-purple-600" />
                  Learning Objectives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Accurately locate continents and oceans on world maps</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Distinguish between continents, oceans, and regions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Demonstrate quick recall of geographical features</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Explain relationships between geographical features</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Work collaboratively in competitive settings</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="mr-2 h-5 w-5 text-pink-600" />
                  Game Components
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-700 mb-2">Scoring System</h4>
                    <ul className="text-sm text-purple-600 space-y-1">
                      <li>• 1 point: Correct identification (continent/ocean)</li>
                      <li>• 2 points: Accurate map location</li>
                      <li>• 3 points: Bonus facts about the feature</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-pink-50 rounded-lg border border-pink-200">
                    <h4 className="font-semibold text-pink-700 mb-2">Challenge Rounds</h4>
                    <ul className="text-sm text-pink-600 space-y-1">
                      <li>• Speed round: Quick identification</li>
                      <li>• Description round: Describe without naming</li>
                      <li>• Relationship round: Explain connections</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="materials">
          <Card>
            <CardHeader>
              <CardTitle>Required Materials</CardTitle>
              <CardDescription>Everything needed for the interactive geography game</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-purple-700">Game Materials</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Gamepad2 className="mr-2 h-4 w-4 text-purple-500" />
                      Game cards with continent names
                    </li>
                    <li className="flex items-center">
                      <Gamepad2 className="mr-2 h-4 w-4 text-purple-500" />
                      Game cards with ocean names
                    </li>
                    <li className="flex items-center">
                      <Gamepad2 className="mr-2 h-4 w-4 text-purple-500" />
                      "Caribbean Region" cards
                    </li>
                    <li className="flex items-center">
                      <Gamepad2 className="mr-2 h-4 w-4 text-purple-500" />
                      Card container or bag for drawing
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-pink-700">Technology & Display</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Trophy className="mr-2 h-4 w-4 text-pink-500" />
                      Blank world map projection
                    </li>
                    <li className="flex items-center">
                      <Trophy className="mr-2 h-4 w-4 text-pink-500" />
                      Projector or smartboard
                    </li>
                    <li className="flex items-center">
                      <Trophy className="mr-2 h-4 w-4 text-pink-500" />
                      Scoreboard (physical or digital)
                    </li>
                    <li className="flex items-center">
                      <Trophy className="mr-2 h-4 w-4 text-pink-500" />
                      Timer for speed rounds
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-700 mb-2">Alternative Activity Materials</h4>
                <p className="text-sm text-blue-600 mb-2">
                  <strong>3D Earth Model Creation:</strong>
                </p>
                <ul className="text-sm text-blue-600 space-y-1">
                  <li>• Papier-mâché or clay for modeling</li>
                  <li>• Paints (blue for oceans, green/brown for continents)</li>
                  <li>• Push pins for marking Caribbean location</li>
                  <li>• Labels for major features</li>
                  <li>• Protective covering for work surfaces</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="procedure">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Step-by-Step Procedure</CardTitle>
                <CardDescription>Detailed instructions for conducting the interactive geography game</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-purple-700 mb-2">Step 1: Game Setup (5 minutes)</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Create cards with continent names, ocean names, and "Caribbean Region"</li>
                      <li>• Project blank world map on board or smartboard</li>
                      <li>• Explain game rules and scoring system clearly:</li>
                      <li className="ml-4">- Students take turns drawing cards</li>
                      <li className="ml-4">- Must locate feature on projected map</li>
                      <li className="ml-4">- Identify whether it's continent, ocean, or region</li>
                      <li className="ml-4">- Class verifies accuracy</li>
                      <li>• Set up scoreboard with team names or individual tracking</li>
                      <li>• Establish hand-raising protocol for participation</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-pink-500 pl-4">
                    <h3 className="font-semibold text-pink-700 mb-2">Step 2: Interactive Mapping Game (30 minutes)</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Students take turns drawing cards from container</li>
                      <li>• Each student must:</li>
                      <li className="ml-4">- Read the card aloud</li>
                      <li className="ml-4">- Locate the feature on the projected map</li>
                      <li className="ml-4">- Identify type (continent/ocean/region)</li>
                      <li className="ml-4">- Point to or circle the location</li>
                      <li>• Class verifies accuracy through discussion</li>
                      <li>• Award points according to scoring system</li>
                      <li>• Encourage peer support and positive feedback</li>
                      <li>• Keep energy high with enthusiastic responses</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-blue-700 mb-2">Step 3: Challenge Rounds (5 minutes)</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        • <strong>Speed Round:</strong>
                      </li>
                      <li className="ml-4">- Quick identification with 10-second time limit</li>
                      <li className="ml-4">- Rapid-fire questions about locations</li>
                      <li>
                        • <strong>Description Round:</strong>
                      </li>
                      <li className="ml-4">- Describe location without naming the feature</li>
                      <li className="ml-4">- Other students guess the continent/ocean</li>
                      <li>
                        • <strong>Relationship Round:</strong>
                      </li>
                      <li className="ml-4">- Explain connections between features</li>
                      <li className="ml-4">- Example: "Which ocean borders this continent?"</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Scoring System Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                      <Trophy className="mr-2 h-4 w-4" />1 Point
                    </h4>
                    <p className="text-sm text-green-600">
                      Correct identification of whether the feature is a continent, ocean, or region
                    </p>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-700 mb-2 flex items-center">
                      <Trophy className="mr-2 h-4 w-4" />2 Points
                    </h4>
                    <p className="text-sm text-blue-600">Accurate location of the feature on the world map</p>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-700 mb-2 flex items-center">
                      <Trophy className="mr-2 h-4 w-4" />3 Points (Bonus)
                    </h4>
                    <p className="text-sm text-purple-600">
                      Additional interesting facts about the geographical feature
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="differentiation">
          <Card>
            <CardHeader>
              <CardTitle>Differentiation Strategies</CardTitle>
              <CardDescription>Adaptations for diverse learning needs and competitive comfort levels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h3 className="font-semibold text-purple-700 mb-3 flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    Collaborative Learners
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Allow team consultations before answers</li>
                    <li>• Encourage peer coaching and support</li>
                    <li>• Create mixed-ability partnerships</li>
                    <li>• Use group scoring instead of individual</li>
                    <li>• Celebrate collective achievements</li>
                  </ul>
                </div>

                <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
                  <h3 className="font-semibold text-pink-700 mb-3 flex items-center">
                    <Target className="mr-2 h-4 w-4" />
                    Competitive Learners
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Implement individual scoring systems</li>
                    <li>• Add time pressure for extra challenge</li>
                    <li>• Create leaderboards and rankings</li>
                    <li>• Offer bonus point opportunities</li>
                    <li>• Include elimination-style rounds</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-700 mb-3 flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Struggling Learners
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Provide continent/ocean reference sheets</li>
                    <li>• Use color-coded maps for easier identification</li>
                    <li>• Allow multiple attempts without penalty</li>
                    <li>• Offer hints and guided questions</li>
                    <li>• Focus on participation over accuracy</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h3 className="font-semibold text-yellow-700 mb-2">Alternative Activity Option</h3>
                <div className="text-sm text-yellow-600">
                  <p className="mb-2">
                    <strong>3D Earth Model Creation:</strong>
                  </p>
                  <ul className="space-y-1">
                    <li>• Students create papier-mâché or clay Earth models</li>
                    <li>• Paint continents and oceans with accurate colors</li>
                    <li>• Use push pins to mark Caribbean location</li>
                    <li>• Label all major features</li>
                    <li>• Present models explaining geographical relationships</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assessment">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Assessment Strategies</CardTitle>
                <CardDescription>Methods for evaluating student performance and understanding</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-purple-700">Performance Assessment</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                        <span>Observe game performance and accuracy</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                        <span>Note areas needing reinforcement</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                        <span>Evaluate understanding through participation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                        <span>Monitor collaborative skills during team activities</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 text-pink-700">Assessment Criteria</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Target className="mr-2 h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Speed and accuracy of geographical identification</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="mr-2 h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Ability to distinguish feature types</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="mr-2 h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Knowledge of geographical relationships</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="mr-2 h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Participation and sportsmanship</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Assessment Tracking Sheet</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 p-2 text-left">Student Name</th>
                        <th className="border border-gray-300 p-2 text-center">Continent ID</th>
                        <th className="border border-gray-300 p-2 text-center">Ocean ID</th>
                        <th className="border border-gray-300 p-2 text-center">Map Location</th>
                        <th className="border border-gray-300 p-2 text-center">Bonus Facts</th>
                        <th className="border border-gray-300 p-2 text-center">Total Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2">Student 1</td>
                        <td className="border border-gray-300 p-2 text-center">✓/✗</td>
                        <td className="border border-gray-300 p-2 text-center">✓/✗</td>
                        <td className="border border-gray-300 p-2 text-center">✓/✗</td>
                        <td className="border border-gray-300 p-2 text-center">✓/✗</td>
                        <td className="border border-gray-300 p-2 text-center">__/10</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">Student 2</td>
                        <td className="border border-gray-300 p-2 text-center">✓/✗</td>
                        <td className="border border-gray-300 p-2 text-center">✓/✗</td>
                        <td className="border border-gray-300 p-2 text-center">✓/✗</td>
                        <td className="border border-gray-300 p-2 text-center">✓/✗</td>
                        <td className="border border-gray-300 p-2 text-center">__/10</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Notes Section:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Record specific areas where students need additional support</li>
                    <li>• Note exceptional performances or creative responses</li>
                    <li>• Track improvement from previous geography activities</li>
                    <li>• Identify students ready for advanced challenges</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8 p-6 bg-purple-50 rounded-lg border border-purple-200">
        <h3 className="text-lg font-semibold mb-4 text-purple-700">Extension Activities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2">Game Variations:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Create digital versions using interactive whiteboards</li>
              <li>Develop student-led geography quiz shows</li>
              <li>Design board games with geographical themes</li>
              <li>Organize inter-class geography competitions</li>
              <li>Create geography-themed escape rooms</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Cross-Curricular Connections:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <strong>Mathematics:</strong> Calculate distances between continents
              </li>
              <li>
                <strong>Technology:</strong> Create digital geography games
              </li>
              <li>
                <strong>Art:</strong> Design creative game boards and cards
              </li>
              <li>
                <strong>Language Arts:</strong> Write geography-themed stories
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
