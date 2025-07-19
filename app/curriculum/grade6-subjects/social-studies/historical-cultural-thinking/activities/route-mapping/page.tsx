import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Clock, Users, Map, CheckCircle, AlertCircle, Lightbulb, Navigation } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function RouteMappingPage() {
  return (
    <div className="container mx-auto py-8">
            <Link href="/curriculum/grade6-subjects/social-studies/historical-cultural-thinking/activities">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Activities
        </Button>
      </Link>

      <div className="mb-8">
        <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-orange-700 flex items-center">
            <Map className="mr-2 h-7 w-7 text-orange-600" />
            Route Mapping - India to Caribbean Journey
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary" className="flex items-center">
              <Clock className="mr-1 h-3 w-3" />
              50 minutes
            </Badge>
            <Badge variant="secondary" className="flex items-center">
              <Users className="mr-1 h-3 w-3" />
              Small Groups
            </Badge>
            <Badge variant="outline">Geography & History</Badge>
          </div>
          <p className="text-gray-700">
            Students chart sea routes from India to the Caribbean using physical and digital maps, understanding
            geographical challenges and journey hardships faced by indentured servants.
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
                <CardTitle className="flex items-center text-orange-700">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Learning Objectives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Trace historical sea routes from India to the Caribbean
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Understand geographical challenges of the journey
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Develop map reading and navigation skills
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Calculate distances and journey duration
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Empathize with the hardships of indentured servants
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-orange-700">
                  <Lightbulb className="mr-2 h-5 w-5" />
                  Key Route Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-orange-600">Departure Ports</h4>
                    <p className="text-sm text-gray-600">Calcutta (Kolkata), Madras (Chennai), Bombay (Mumbai)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600">Journey Duration</h4>
                    <p className="text-sm text-gray-600">6-12 weeks depending on weather and stops</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600">Route Challenges</h4>
                    <p className="text-sm text-gray-600">Monsoons, rough seas, overcrowding, disease</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600">Caribbean Destinations</h4>
                    <p className="text-sm text-gray-600">Trinidad, Guyana, Jamaica, Suriname, other colonies</p>
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
                <CardTitle className="text-orange-700">Step-by-Step Procedure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-orange-700 mb-2">1. Map Introduction (10 minutes)</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Display world map showing India and Caribbean region</li>
                      <li>• Students locate India and identify major port cities</li>
                      <li>• Identify Caribbean islands and territories</li>
                      <li>• Discuss the vast distance between the two regions</li>
                      <li>• Introduce concept of sea routes and navigation</li>
                      <li>• Explain why people made this difficult journey</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-blue-700 mb-2">2. Route Research (15 minutes)</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Form groups of 3-4 students</li>
                      <li>• Each group receives different departure port assignment</li>
                      <li>• Research historical information about their assigned route:</li>
                      <li className="ml-4">- Departure port details and conditions</li>
                      <li className="ml-4">- Typical journey duration and distance</li>
                      <li className="ml-4">- Common stops along the way</li>
                      <li className="ml-4">- Challenges faced during the voyage</li>
                      <li>• Use provided resources and digital tools for research</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-green-700 mb-2">3. Physical Route Mapping (15 minutes)</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Groups receive large world maps and colored markers</li>
                      <li>• Trace their assigned route from India to Caribbean</li>
                      <li>• Mark departure port, stops, and final destination</li>
                      <li>• Use different colors to show different parts of journey</li>
                      <li>• Add symbols for challenges (storms, rough seas, etc.)</li>
                      <li>• Calculate approximate distance using map scale</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-purple-700 mb-2">4. Digital Mapping (10 minutes)</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Use Google Earth or online mapping tools</li>
                      <li>• Create digital version of their route</li>
                      <li>• Measure actual distances using digital tools</li>
                      <li>• Compare physical and digital mapping results</li>
                      <li>• Take screenshots or save digital maps</li>
                      <li>• Explore 3D view to understand geographical features</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-orange-700">
                  <Navigation className="mr-2 h-5 w-5" />
                  Route Analysis Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <h4 className="font-semibold mb-2 text-orange-700">Journey Calculations</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Calculate total distance traveled (approximately 8,000-12,000 miles)</li>
                      <li>• Estimate journey time based on ship speed (6-8 knots average)</li>
                      <li>• Compare journey duration to modern travel times</li>
                      <li>• Calculate cost of journey relative to wages of the time</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold mb-2 text-blue-700">Challenge Identification</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Mark monsoon seasons and their impact on travel</li>
                      <li>• Identify dangerous waters and piracy areas</li>
                      <li>• Note coaling stations and supply stops</li>
                      <li>• Research ship conditions and overcrowding issues</li>
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
                <CardTitle className="text-orange-700">Required Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Large world maps (physical and political)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Colored markers and pencils
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Rulers and measuring tools
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Computers/tablets with internet access
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Research resource packets
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Calculators for distance calculations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Sticky notes for marking routes
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-orange-700">Route Assignment Cards</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-700 mb-2">Route 1: Calcutta to Trinidad</h4>
                    <p className="text-sm">
                      Departure: Calcutta (Kolkata), India
                      <br />
                      Destination: Port of Spain, Trinidad
                      <br />
                      Duration: 6-8 weeks
                      <br />
                      Key stops: Madras, Colombo, Aden
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-700 mb-2">Route 2: Madras to Guyana</h4>
                    <p className="text-sm">
                      Departure: Madras (Chennai), India
                      <br />
                      Destination: Georgetown, Guyana
                      <br />
                      Duration: 7-10 weeks
                      <br />
                      Key stops: Colombo, Aden, Suez Canal
                    </p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-700 mb-2">Route 3: Bombay to Jamaica</h4>
                    <p className="text-sm">
                      Departure: Bombay (Mumbai), India
                      <br />
                      Destination: Kingston, Jamaica
                      <br />
                      Duration: 8-12 weeks
                      <br />
                      Key stops: Aden, Suez, Gibraltar
                    </p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-700 mb-2">Route 4: Calcutta to Suriname</h4>
                    <p className="text-sm">
                      Departure: Calcutta (Kolkata), India
                      <br />
                      Destination: Paramaribo, Suriname
                      <br />
                      Duration: 6-9 weeks
                      <br />
                      Key stops: Madras, Aden, Amsterdam
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
                <CardTitle className="text-orange-700">Assessment Rubric</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-orange-50">
                        <th className="border border-gray-300 p-2 text-left">Criteria</th>
                        <th className="border border-gray-300 p-2 text-center">Excellent (4)</th>
                        <th className="border border-gray-300 p-2 text-center">Good (3)</th>
                        <th className="border border-gray-300 p-2 text-center">Satisfactory (2)</th>
                        <th className="border border-gray-300 p-2 text-center">Needs Improvement (1)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Map Accuracy</td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Route is accurately traced with correct ports and stops marked
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Route is mostly accurate with minor errors
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Route is generally correct with some inaccuracies
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Route contains significant errors or omissions
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Research Quality</td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Thorough research with detailed information about journey challenges
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Good research with relevant information gathered
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Basic research with some relevant details
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Limited research with minimal information
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Calculations</td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Accurate distance and time calculations with clear methodology
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Mostly accurate calculations with minor errors
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Basic calculations attempted with some accuracy
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Calculations are inaccurate or incomplete
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Historical Understanding</td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Demonstrates deep understanding of journey hardships and context
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Shows good understanding of historical context
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">Shows basic understanding of the journey</td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Limited understanding of historical significance
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-orange-700">
                  <AlertCircle className="mr-2 h-5 w-5" />
                  Extension Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-orange-600">Individual Extensions</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <strong>Journey Diary:</strong> Write diary entries from the perspective of an indentured
                        servant during the voyage
                      </li>
                      <li>
                        <strong>Ship Conditions Research:</strong> Investigate living conditions aboard indenture ships
                      </li>
                      <li>
                        <strong>Weather Impact Study:</strong> Research how monsoons and weather affected journey times
                      </li>
                      <li>
                        <strong>Modern Comparison:</strong> Compare historical journey times with modern travel
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-orange-600">Class Extensions</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <strong>Route Gallery:</strong> Create classroom display of all mapped routes
                      </li>
                      <li>
                        <strong>Journey Simulation:</strong> Role-play the voyage experience with challenges
                      </li>
                      <li>
                        <strong>Port City Study:</strong> Research departure and arrival ports in detail
                      </li>
                      <li>
                        <strong>Family Stories:</strong> Interview community members about family migration stories
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-orange-700">Reflection Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-700 mb-2">Journey Understanding</h4>
                    <ul className="text-sm space-y-1">
                      <li>• What challenges did indentured servants face during the sea voyage?</li>
                      <li>• How did the length of the journey affect the travelers?</li>
                      <li>• What preparations would have been needed for such a long voyage?</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-700 mb-2">Geographic Awareness</h4>
                    <ul className="text-sm space-y-1">
                      <li>• How did geography influence the route choices?</li>
                      <li>• What role did the Suez Canal play in these journeys?</li>
                      <li>• How do these historical routes compare to modern shipping lanes?</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-700 mb-2">Historical Empathy</h4>
                    <ul className="text-sm space-y-1">
                      <li>• How would you have felt leaving your homeland for an unknown place?</li>
                      <li>• What would have motivated people to make this difficult journey?</li>
                      <li>• How does understanding this journey help us appreciate immigrant experiences today?</li>
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
