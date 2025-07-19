import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Clock, Users, Trophy, CheckCircle, AlertCircle, Lightbulb, Calendar } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function RegionalOrganizerPage() {
  return (
    <div className="container mx-auto py-8">
      
      <Link href="/curriculum/grade6-subjects/social-studies/historical-cultural-thinking/activities">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Activities
        </Button>
      </Link>

      <div className="mb-8">
        <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-green-700 flex items-center">
            <Trophy className="mr-2 h-7 w-7 text-green-600" />
            Regional Activities Organizer - Caribbean Sports & Culture
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary" className="flex items-center">
              <Clock className="mr-1 h-3 w-3" />
              90 minutes
            </Badge>
            <Badge variant="secondary" className="flex items-center">
              <Users className="mr-1 h-3 w-3" />
              Teams of 4-5
            </Badge>
            <Badge variant="outline">Event Planning & Cultural Studies</Badge>
          </div>
          <p className="text-gray-700">
            Students plan and organize a regional Caribbean sports and cultural festival, researching traditional
            activities, coordinating logistics, and promoting cultural unity through shared experiences.
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
                <CardTitle className="flex items-center text-green-700">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Learning Objectives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Research traditional Caribbean sports and cultural activities
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Develop event planning and organizational skills
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Understand the role of sports and culture in building community
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Practice collaboration and project management
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Promote cultural appreciation and regional unity
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <Lightbulb className="mr-2 h-5 w-5" />
                  Festival Components
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-green-600">Traditional Sports</h4>
                    <p className="text-sm text-gray-600">Cricket, football, netball, athletics, swimming</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600">Cultural Games</h4>
                    <p className="text-sm text-gray-600">Dominoes, warri, ring games, traditional children's games</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600">Performance Arts</h4>
                    <p className="text-sm text-gray-600">Dance, music, storytelling, poetry, drama</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600">Food & Crafts</h4>
                    <p className="text-sm text-gray-600">Traditional foods, handicrafts, cultural displays</p>
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
                <CardTitle className="text-green-700">Step-by-Step Procedure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-green-700 mb-2">
                      1. Project Introduction and Team Formation (15 minutes)
                    </h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Introduce the concept of regional cultural festivals</li>
                      <li>• Discuss the importance of sports and culture in Caribbean society</li>
                      <li>• Form diverse teams of 4-5 students with mixed skills</li>
                      <li>• Assign each team a specific Caribbean country/territory to represent</li>
                      <li>• Distribute project guidelines and planning templates</li>
                      <li>
                        • Explain roles: Event Coordinator, Cultural Researcher, Sports Organizer, Logistics Manager
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-blue-700 mb-2">2. Research and Planning Phase (30 minutes)</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Teams research their assigned country's traditional sports and cultural activities</li>
                      <li>• Identify unique games, sports, and cultural practices</li>
                      <li>• Research historical significance and cultural importance</li>
                      <li>• Plan festival activities that showcase their country's heritage</li>
                      <li>• Consider logistics: space, equipment, time, participants</li>
                      <li>• Develop budget estimates and resource requirements</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-purple-700 mb-2">
                      3. Festival Design and Organization (30 minutes)
                    </h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Teams create detailed festival plans and schedules</li>
                      <li>• Design promotional materials and cultural displays</li>
                      <li>• Plan specific activities and competitions</li>
                      <li>• Organize logistics: venues, equipment, volunteers</li>
                      <li>• Create rules and guidelines for activities</li>
                      <li>• Develop strategies for promoting cultural unity and participation</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-orange-700 mb-2">
                      4. Presentation and Festival Showcase (15 minutes)
                    </h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Teams present their festival plans to the class</li>
                      <li>• Demonstrate or explain key cultural activities</li>
                      <li>• Share promotional materials and organizational strategies</li>
                      <li>• Discuss how their festival promotes regional unity</li>
                      <li>• Class votes on most creative and culturally authentic festivals</li>
                      <li>• Reflect on the planning process and cultural learning</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <Calendar className="mr-2 h-5 w-5" />
                  Festival Planning Framework
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">Event Structure</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Opening ceremony with cultural presentations</li>
                      <li>• Morning sports competitions and games</li>
                      <li>• Afternoon cultural activities and workshops</li>
                      <li>• Food festival and craft exhibitions</li>
                      <li>• Evening entertainment and closing ceremony</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">Logistics Planning</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Venue requirements and space allocation</li>
                      <li>• Equipment and materials needed</li>
                      <li>• Volunteer coordination and assignments</li>
                      <li>• Safety considerations and emergency plans</li>
                      <li>• Budget planning and resource management</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">Cultural Elements</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Traditional music and dance performances</li>
                      <li>• Storytelling and oral history sessions</li>
                      <li>• Craft demonstrations and workshops</li>
                      <li>• Traditional food preparation and tasting</li>
                      <li>• Historical and cultural information displays</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">Unity Promotion</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Mixed-country team competitions</li>
                      <li>• Cultural exchange activities</li>
                      <li>• Collaborative art and music projects</li>
                      <li>• Shared meals and social interactions</li>
                      <li>• Unity pledge or ceremony</li>
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
                <CardTitle className="text-green-700">Required Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Festival planning templates and worksheets
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Research materials on Caribbean countries
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Large poster boards for presentations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Art supplies for promotional materials
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Computers/tablets for research and design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Sample festival programs and materials
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Budget planning worksheets
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-700">Country/Territory Assignments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-700 mb-2">Team 1: Jamaica</h4>
                    <p className="text-sm">
                      Focus on athletics, cricket, reggae music, dancehall culture, traditional games like ring games,
                      and Jamaican cuisine and crafts.
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-700 mb-2">Team 2: Trinidad and Tobago</h4>
                    <p className="text-sm">
                      Emphasize carnival culture, calypso and soca music, steelpan, cricket, football, and diverse
                      cultural traditions from multiple ethnic groups.
                    </p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-700 mb-2">Team 3: Barbados</h4>
                    <p className="text-sm">
                      Highlight cricket heritage, Crop Over festival, traditional folk music and dance, flying fish
                      cuisine, and historical cultural practices.
                    </p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h4 className="font-semibold text-yellow-700 mb-2">Team 4: Guyana</h4>
                    <p className="text-sm">
                      Showcase diverse cultural heritage, traditional East Indian and African games, chutney music,
                      cricket, and unique Guyanese cultural fusion.
                    </p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-700 mb-2">Team 5: Eastern Caribbean States</h4>
                    <p className="text-sm">
                      Represent smaller islands with focus on sailing, fishing traditions, local festivals, traditional
                      music, and island-specific cultural practices.
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
                <CardTitle className="text-green-700">Assessment Rubric</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-green-50">
                        <th className="border border-gray-300 p-2 text-left">Criteria</th>
                        <th className="border border-gray-300 p-2 text-center">Excellent (4)</th>
                        <th className="border border-gray-300 p-2 text-center">Good (3)</th>
                        <th className="border border-gray-300 p-2 text-center">Satisfactory (2)</th>
                        <th className="border border-gray-300 p-2 text-center">Needs Improvement (1)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Cultural Research</td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Thorough, accurate research with authentic cultural elements
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Good research with relevant cultural information
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Basic research with some cultural elements
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Limited research with minimal cultural accuracy
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Event Planning</td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Comprehensive, well-organized festival plan with detailed logistics
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Good planning with clear organization and logistics
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Basic planning with some organizational elements
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">Poor planning with unclear organization</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Creativity & Innovation</td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Highly creative festival design with innovative activities
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Creative design with some innovative elements
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">Some creativity with standard activities</td>
                        <td className="border border-gray-300 p-2 text-sm">Limited creativity with basic activities</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Teamwork & Collaboration</td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Excellent teamwork with all members contributing effectively
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Good teamwork with most members participating
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">Some teamwork with uneven participation</td>
                        <td className="border border-gray-300 p-2 text-sm">Poor teamwork with minimal collaboration</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <AlertCircle className="mr-2 h-5 w-5" />
                  Extension Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">Individual Extensions</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <strong>Sports History Research:</strong> Investigate the history of a specific Caribbean sport
                      </li>
                      <li>
                        <strong>Cultural Game Documentation:</strong> Learn and document traditional Caribbean games
                      </li>
                      <li>
                        <strong>Festival Comparison:</strong> Compare Caribbean festivals with those from other regions
                      </li>
                      <li>
                        <strong>Community Event Planning:</strong> Plan a real cultural event for the school or
                        community
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">Class Extensions</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <strong>Mini Festival Implementation:</strong> Actually organize and run a small-scale festival
                      </li>
                      <li>
                        <strong>Community Partnership:</strong> Partner with local cultural organizations
                      </li>
                      <li>
                        <strong>Digital Festival:</strong> Create virtual festival experience with videos and activities
                      </li>
                      <li>
                        <strong>Regional Competition:</strong> Compete with other schools in festival planning
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
