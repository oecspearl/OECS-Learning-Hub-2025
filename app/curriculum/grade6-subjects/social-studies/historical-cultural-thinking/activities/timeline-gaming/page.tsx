import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Clock, Users, Gamepad2, CheckCircle, AlertCircle, Lightbulb, Trophy } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function TimelineGamingPage() {
  return (
    <div className="container mx-auto py-8">
            <Link href="/curriculum/grade6-subjects/social-studies/historical-cultural-thinking/activities">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Activities
        </Button>
      </Link>

      <div className="mb-8">
        <div className="bg-gradient-to-r from-red-100 to-pink-100 p-6 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-red-700 flex items-center">
            <Gamepad2 className="mr-2 h-7 w-7 text-red-600" />
            Timeline Gaming with Major Milestones
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary" className="flex items-center">
              <Clock className="mr-1 h-3 w-3" />
              50 minutes
            </Badge>
            <Badge variant="secondary" className="flex items-center">
              <Users className="mr-1 h-3 w-3" />
              Teams
            </Badge>
            <Badge variant="outline">Interactive Gaming</Badge>
          </div>
          <p className="text-gray-700">
            Interactive gaming experience using milestone cards and digital tools to sequence major events in the
            struggle for emancipation, culminating in a physical classroom timeline.
          </p>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="procedure">Procedure</TabsTrigger>
          <TabsTrigger value="materials">Materials & Setup</TabsTrigger>
          <TabsTrigger value="assessment">Assessment</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-red-700">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Learning Objectives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Sequence major milestones in the emancipation struggle
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Understand chronological relationships between events
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Collaborate effectively in team gaming environment
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Create physical timeline representation
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Engage with historical content through interactive learning
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-red-700">
                  <Lightbulb className="mr-2 h-5 w-5" />
                  Key Milestones Covered
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-red-600">Early Resistance (1600s-1700s)</h4>
                    <p className="text-sm text-gray-600">Maroon communities, rebellions, escape networks</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600">Abolition Movement (1780s-1820s)</h4>
                    <p className="text-sm text-gray-600">Parliamentary campaigns, economic arguments, moral crusades</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600">Legal Changes (1807-1833)</h4>
                    <p className="text-sm text-gray-600">Slave trade abolition, gradual emancipation laws</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600">Full Emancipation (1834-1838)</h4>
                    <p className="text-sm text-gray-600">Apprenticeship period, complete freedom achieved</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="procedure">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">Step-by-Step Procedure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold text-red-700 mb-2">1. Card Introduction (15 minutes)</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Distribute milestone cue cards to pairs of students</li>
                      <li>• Each pair receives 2-3 cards with different historical events</li>
                      <li>• Students read and discuss information on their cards</li>
                      <li>• Pairs take turns explaining their milestone to the class</li>
                      <li>• Teacher clarifies any confusing information or vocabulary</li>
                      <li>• Class discusses initial thoughts about chronological order</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-blue-700 mb-2">2. Digital Gaming (20 minutes)</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Access interactive game: https://wordwall.net/resource/77106070</li>
                      <li>• Form teams of 3-4 students for collaborative gaming</li>
                      <li>• Teams work together to sequence events correctly</li>
                      <li>• Record team scores and celebrate correct answers</li>
                      <li>• Discuss strategies for remembering chronological order</li>
                      <li>• Allow multiple rounds for improvement and mastery</li>
                    </ul>
                    <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-blue-700 mb-2">Gaming Tips:</h4>
                      <ul className="text-xs space-y-1">
                        <li>• Encourage teams to discuss before selecting answers</li>
                        <li>• Use milestone cards as reference during gaming</li>
                        <li>• Celebrate learning from mistakes, not just correct answers</li>
                        <li>• Keep energy high with positive reinforcement</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-green-700 mb-2">3. Physical Timeline Creation (15 minutes)</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Using information from cards and game, create classroom timeline</li>
                      <li>• Students arrange themselves chronologically around the room</li>
                      <li>• Each student/pair holds their milestone card in correct position</li>
                      <li>• Walk through timeline as a class, narrating each milestone</li>
                      <li>• Discuss cause-and-effect relationships between events</li>
                      <li>• Take photos of human timeline for future reference</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-orange-700">
                  <Trophy className="mr-2 h-5 w-5" />
                  Extension Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <h4 className="font-semibold mb-2 text-orange-700">Newspaper Headlines Project</h4>
                  <p className="text-sm mb-3">
                    Students research one milestone in depth and create a "newspaper headline" for that event,
                    including:
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Attention-grabbing headline that captures the event's significance</li>
                    <li>• Brief article explaining what happened and why it mattered</li>
                    <li>• Quotes from historical figures or imagined eyewitnesses</li>
                    <li>• Visual elements like illustrations or maps</li>
                    <li>• Date and location information</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-purple-700">
                  <AlertCircle className="mr-2 h-5 w-5" />
                  Differentiation Strategies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-purple-600">Visual Learners</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Use color-coded milestone cards</li>
                      <li>• Provide visual timeline templates</li>
                      <li>• Include images on milestone cards</li>
                      <li>• Create visual cues for chronological order</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-purple-600">Kinesthetic Learners</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Physical movement during timeline creation</li>
                      <li>• Hands-on manipulation of cards</li>
                      <li>• Interactive gaming with movement</li>
                      <li>• Role-playing historical figures</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-purple-600">Support Strategies</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Pair struggling students with stronger partners</li>
                      <li>• Provide simplified milestone cards</li>
                      <li>• Offer additional time for processing</li>
                      <li>• Use peer tutoring during gaming</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="materials">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">Required Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Milestone cue cards (laminated for durability)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Online access to Wordwall game
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Timeline template for classroom display
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Computers/tablets for digital gaming
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Scorekeeping materials
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Camera for documenting human timeline
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Space for physical timeline arrangement
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">Milestone Card Examples</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-700 mb-2">1807 - Slave Trade Abolition</h4>
                    <p className="text-sm">
                      British Parliament passes law ending the Atlantic slave trade. Ships can no longer legally
                      transport enslaved people to British colonies.
                    </p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-700 mb-2">1831 - Sam Sharpe Rebellion</h4>
                    <p className="text-sm">
                      Major slave rebellion in Jamaica led by Sam Sharpe. Thousands of enslaved people participate,
                      demanding freedom and better conditions.
                    </p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-700 mb-2">1833 - Abolition Act</h4>
                    <p className="text-sm">
                      British Parliament passes law ending slavery in all British colonies. Includes apprenticeship
                      period before full freedom.
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-700 mb-2">1838 - Full Emancipation</h4>
                    <p className="text-sm">
                      Apprenticeship period ends early. All formerly enslaved people in British Caribbean colonies gain
                      complete freedom.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="assessment">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">Assessment Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-red-600">Formative Assessment</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <strong>Game Performance:</strong> Observe student understanding through digital game scores and
                        team discussions
                      </li>
                      <li>
                        <strong>Timeline Accuracy:</strong> Assess correct sequencing during physical timeline creation
                      </li>
                      <li>
                        <strong>Peer Explanation:</strong> Listen to how students explain milestones to classmates
                      </li>
                      <li>
                        <strong>Collaboration:</strong> Monitor teamwork and communication during activities
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-red-600">Assessment Criteria</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <strong>Chronological Understanding:</strong> Ability to sequence events correctly
                      </li>
                      <li>
                        <strong>Historical Knowledge:</strong> Accuracy of information about milestones
                      </li>
                      <li>
                        <strong>Engagement:</strong> Active participation in all activities
                      </li>
                      <li>
                        <strong>Explanation Skills:</strong> Clear communication of historical events
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">Quick Assessment Checklist</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-red-50">
                        <th className="border border-gray-300 p-2 text-left">Student Name</th>
                        <th className="border border-gray-300 p-2 text-center">Card Explanation</th>
                        <th className="border border-gray-300 p-2 text-center">Game Participation</th>
                        <th className="border border-gray-300 p-2 text-center">Timeline Accuracy</th>
                        <th className="border border-gray-300 p-2 text-center">Collaboration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2">Student 1</td>
                        <td className="border border-gray-300 p-2 text-center">✓ / ○ / ✗</td>
                        <td className="border border-gray-300 p-2 text-center">✓ / ○ / ✗</td>
                        <td className="border border-gray-300 p-2 text-center">✓ / ○ / ✗</td>
                        <td className="border border-gray-300 p-2 text-center">✓ / ○ / ✗</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-3 text-sm text-gray-600">
                  <p>
                    <strong>Key:</strong> ✓ = Excellent, ○ = Satisfactory, ✗ = Needs Improvement
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">Follow-Up Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-red-600">Immediate Follow-Up</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <strong>Timeline Display:</strong> Create permanent classroom timeline for reference
                      </li>
                      <li>
                        <strong>Milestone Journal:</strong> Students write reflections on most significant events
                      </li>
                      <li>
                        <strong>Cause-Effect Analysis:</strong> Explore how events led to one another
                      </li>
                      <li>
                        <strong>Quiz Creation:</strong> Students create timeline questions for classmates
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-red-600">Extended Learning</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <strong>Regional Comparison:</strong> Compare emancipation timelines across Caribbean islands
                      </li>
                      <li>
                        <strong>Modern Connections:</strong> Link historical events to contemporary freedom movements
                      </li>
                      <li>
                        <strong>Family History:</strong> Research family connections to emancipation period
                      </li>
                      <li>
                        <strong>Community Presentation:</strong> Share timeline with other classes or parents
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
