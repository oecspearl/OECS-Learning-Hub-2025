import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Clock, Users, Map, CheckCircle, AlertCircle, Lightbulb, BookOpen } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function StoryMappingPage() {
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
            <Map className="mr-2 h-7 w-7 text-red-600" />
            Story Mapping - "How Emancipation Came About"
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary" className="flex items-center">
              <Clock className="mr-1 h-3 w-3" />
              60 minutes
            </Badge>
            <Badge variant="secondary" className="flex items-center">
              <Users className="mr-1 h-3 w-3" />
              Team Work
            </Badge>
            <Badge variant="outline">Research & Collaboration</Badge>
          </div>
          <p className="text-gray-700">
            Teams research and create story maps showing how European abolitionists and enslaved Africans contributed to
            emancipation, then combine findings into a comprehensive classroom timeline.
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
                    Research contributions of different groups to emancipation
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Create visual story maps using the 5 W's + 1 H framework
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Collaborate effectively in research teams
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Present findings clearly to classmates
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Synthesize information into a comprehensive timeline
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-red-700">
                  <Lightbulb className="mr-2 h-5 w-5" />
                  Key Research Focus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-700 mb-2">Team 1: European Abolitionists</h4>
                    <ul className="text-sm space-y-1">
                      <li>• William Wilberforce and parliamentary campaigns</li>
                      <li>• Quaker anti-slavery movements</li>
                      <li>• Economic arguments against slavery</li>
                      <li>• Legal challenges and court cases</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-700 mb-2">Team 2: Enslaved Africans</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Resistance movements and rebellions</li>
                      <li>• Maroon communities and freedom fighters</li>
                      <li>• Cultural preservation and identity</li>
                      <li>• Daily acts of resistance and survival</li>
                    </ul>
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
                <CardDescription>Can be split into 2 sessions if needed</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold text-red-700 mb-2">1. Setup (10 minutes)</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Display images of European Abolitionists and Enslaved Africans</li>
                      <li>• Explain that emancipation resulted from efforts of different groups</li>
                      <li>• Divide class into two research teams</li>
                      <li>• Assign team roles: researcher, organizer, presenter, artist</li>
                      <li>• Introduce the 5 W's + 1 H framework (Who, What, When, Where, Why, How)</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-blue-700 mb-2">2. Research Phase (25 minutes)</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Teams research their assigned group's contributions using provided resources</li>
                      <li>• Complete story map template with 5 W's + 1 H information</li>
                      <li>• Include specific examples, dates, and key figures</li>
                      <li>• Gather visual elements (images, symbols, maps)</li>
                      <li>• Focus on how their group contributed to ending slavery</li>
                    </ul>
                    <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-blue-700 mb-2">Research Questions Guide:</h4>
                      <ul className="text-xs space-y-1">
                        <li>
                          <strong>Who:</strong> Key individuals and groups involved
                        </li>
                        <li>
                          <strong>What:</strong> Specific actions and strategies used
                        </li>
                        <li>
                          <strong>When:</strong> Important dates and time periods
                        </li>
                        <li>
                          <strong>Where:</strong> Locations of key events
                        </li>
                        <li>
                          <strong>Why:</strong> Motivations and reasons for actions
                        </li>
                        <li>
                          <strong>How:</strong> Methods and approaches used
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-green-700 mb-2">3. Story Creation (15 minutes)</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Teams organize findings into a narrative story map</li>
                      <li>• Create visual timeline of their group's contributions</li>
                      <li>• Include illustrations, symbols, and key quotes</li>
                      <li>• Prepare 3-minute presentation highlighting main points</li>
                      <li>• Practice presentation with team members</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-purple-700 mb-2">4. Sharing (10 minutes)</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Teams present their story maps to the class</li>
                      <li>• Audience takes notes on key contributions</li>
                      <li>• Class creates combined timeline on classroom wall</li>
                      <li>• Discuss connections between the two groups' efforts</li>
                      <li>• Reflect on how both groups were essential to emancipation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-orange-700">
                  <AlertCircle className="mr-2 h-5 w-5" />
                  Differentiation Strategies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-orange-600">For Struggling Writers</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Provide sentence starters for each section</li>
                      <li>• Offer graphic organizer templates</li>
                      <li>• Allow bullet points instead of full sentences</li>
                      <li>• Pair with stronger writers in team</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-orange-600">Presentation Options</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Visual presentation with minimal speaking</li>
                      <li>• Oral presentation with visual aids</li>
                      <li>• Written report with illustrations</li>
                      <li>• Dramatic reenactment of key events</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-orange-600">Advanced Students</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Research specific individuals in depth</li>
                      <li>• Create detailed cause-and-effect chains</li>
                      <li>• Compare strategies across different regions</li>
                      <li>• Analyze effectiveness of different approaches</li>
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
                    Historical images of abolitionists and enslaved people
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Large paper (poster size) for story maps
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Colored markers and art supplies
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Laptops/tablets for research
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Research resource packets
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Story map templates
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Timeline materials for classroom wall
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">Research Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-600">European Abolitionists</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Biographies of William Wilberforce</li>
                      <li>• Information about Quaker anti-slavery societies</li>
                      <li>• Parliamentary debates and legislation</li>
                      <li>• Economic arguments against slavery</li>
                      <li>• Timeline of abolition movement</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-green-600">Enslaved Africans</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Stories of resistance and rebellion</li>
                      <li>• Information about Maroon communities</li>
                      <li>• Cultural preservation examples</li>
                      <li>• Daily life and survival strategies</li>
                      <li>• Freedom fighter biographies</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-purple-600">Digital Resources</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Online historical databases</li>
                      <li>• Educational videos and documentaries</li>
                      <li>• Interactive timeline tools</li>
                      <li>• Primary source documents</li>
                      <li>• Image galleries and archives</li>
                    </ul>
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
                <CardTitle className="text-red-700">Assessment Rubric</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-red-50">
                        <th className="border border-gray-300 p-2 text-left">Criteria</th>
                        <th className="border border-gray-300 p-2 text-center">Excellent (4)</th>
                        <th className="border border-gray-300 p-2 text-center">Good (3)</th>
                        <th className="border border-gray-300 p-2 text-center">Satisfactory (2)</th>
                        <th className="border border-gray-300 p-2 text-center">Needs Improvement (1)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Research Accuracy</td>
                        <td className="border border-gray-300 p-2 text-sm">
                          All information is accurate and well-researched with multiple sources
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Most information is accurate with good sources
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Some information is accurate with basic sources
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Information is often inaccurate or unsupported
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Collaboration</td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Excellent teamwork with all members contributing equally
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Good teamwork with most members participating
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">Some teamwork with uneven participation</td>
                        <td className="border border-gray-300 p-2 text-sm">Poor teamwork with minimal collaboration</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Presentation Clarity</td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Clear, engaging presentation with excellent organization
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Clear presentation with good organization
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Adequate presentation with basic organization
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Unclear presentation with poor organization
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Visual Design</td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Creative, well-organized visual with excellent use of images and text
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Good visual design with effective use of elements
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Basic visual design with some effective elements
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">Poor visual design with minimal effort</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-red-700">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Extension Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-red-600">Individual Extensions</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <strong>Biography Deep Dive:</strong> Research one specific abolitionist or freedom fighter in
                        detail
                      </li>
                      <li>
                        <strong>Comparative Analysis:</strong> Compare emancipation processes in different Caribbean
                        islands
                      </li>
                      <li>
                        <strong>Creative Writing:</strong> Write diary entries from the perspective of historical
                        figures
                      </li>
                      <li>
                        <strong>Timeline Extension:</strong> Create detailed timeline of one specific rebellion or
                        campaign
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-red-600">Class Extensions</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <strong>Museum Exhibit:</strong> Create classroom museum with artifacts and displays
                      </li>
                      <li>
                        <strong>Historical Debate:</strong> Stage debate between different perspectives on emancipation
                      </li>
                      <li>
                        <strong>Community Connections:</strong> Interview community elders about family emancipation
                        stories
                      </li>
                      <li>
                        <strong>Digital Timeline:</strong> Create interactive online timeline with multimedia elements
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
