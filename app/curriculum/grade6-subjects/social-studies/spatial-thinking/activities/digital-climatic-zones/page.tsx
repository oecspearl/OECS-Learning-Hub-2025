import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Clock, Users, Target, CheckCircle, Monitor, Thermometer, Globe } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function DigitalClimaticZonesPage() {
  return (
    <div className="container mx-auto py-8">
            <Link href="/curriculum/grade6-subjects/social-studies/spatial-thinking/activities">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Spatial Thinking Activities
        </Button>
      </Link>

      <div className="mb-8">
        <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-green-700 flex items-center">
            <Monitor className="mr-2 h-7 w-7 text-green-600" />
            Digital Climatic Zone Exploration
          </h1>
          <p className="text-gray-700 mb-4">
            Students use digital tools and interactive maps to explore and classify world climatic zones, understanding
            how climate affects human settlement patterns and lifestyle adaptations globally.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="flex items-center">
              <Clock className="mr-1 h-3 w-3" />
              75 minutes
            </Badge>
            <Badge variant="secondary" className="flex items-center">
              <Users className="mr-1 h-3 w-3" />
              Pairs
            </Badge>
            <Badge variant="secondary" className="flex items-center">
              <Target className="mr-1 h-3 w-3" />
              Digital Research
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
                  <Target className="mr-2 h-5 w-5 text-green-600" />
                  Learning Objectives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Identify and classify major world climatic zones</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Use digital mapping tools effectively for research</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Analyze climate data and patterns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Connect climate zones to human activities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Create digital presentations of findings</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Thermometer className="mr-2 h-5 w-5 text-blue-600" />
                  Key Climatic Zones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-700 mb-2">Tropical</h4>
                    <p className="text-sm text-red-600">Hot and humid year-round, heavy rainfall</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-700 mb-2">Arid/Desert</h4>
                    <p className="text-sm text-orange-600">Very dry, extreme temperature variations</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-700 mb-2">Temperate</h4>
                    <p className="text-sm text-green-600">Moderate temperatures, distinct seasons</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-700 mb-2">Polar</h4>
                    <p className="text-sm text-blue-600">Very cold, limited precipitation</p>
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
              <CardDescription>Technology and resources needed for digital climatic zone exploration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-green-700">Digital Tools</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Monitor className="mr-2 h-4 w-4 text-green-500" />
                      Computers/tablets (1 per pair)
                    </li>
                    <li className="flex items-center">
                      <Monitor className="mr-2 h-4 w-4 text-green-500" />
                      Internet access for research
                    </li>
                    <li className="flex items-center">
                      <Monitor className="mr-2 h-4 w-4 text-green-500" />
                      Google Earth or similar mapping software
                    </li>
                    <li className="flex items-center">
                      <Monitor className="mr-2 h-4 w-4 text-green-500" />
                      Climate data websites access
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-blue-700">Research Resources</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Globe className="mr-2 h-4 w-4 text-blue-500" />
                      World climate zone maps
                    </li>
                    <li className="flex items-center">
                      <Globe className="mr-2 h-4 w-4 text-blue-500" />
                      Digital research worksheets
                    </li>
                    <li className="flex items-center">
                      <Globe className="mr-2 h-4 w-4 text-blue-500" />
                      Presentation software access
                    </li>
                    <li className="flex items-center">
                      <Globe className="mr-2 h-4 w-4 text-blue-500" />
                      Climate data collection templates
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-700 mb-2">Recommended Websites</h4>
                <ul className="text-sm text-blue-600 space-y-1">
                  <li>• Climate.gov - NOAA Climate Information</li>
                  <li>• World Climate Guide - Climate zone information</li>
                  <li>• NASA Climate Kids - Age-appropriate climate data</li>
                  <li>• National Geographic Education - Climate resources</li>
                  <li>• Weather Underground - Current climate data</li>
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
                <CardDescription>Detailed instructions for digital climatic zone exploration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-green-700 mb-2">
                      Step 1: Digital Tool Introduction (15 minutes)
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Introduce students to digital mapping tools (Google Earth, climate websites)</li>
                      <li>• Demonstrate navigation and data collection features</li>
                      <li>• Show how to access climate information for different regions</li>
                      <li>• Explain data interpretation basics (temperature, precipitation, seasons)</li>
                      <li>• Provide guided practice with sample locations</li>
                      <li>• Establish digital citizenship and research protocols</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-blue-700 mb-2">Step 2: Climatic Zone Research (35 minutes)</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Assign pairs to research specific climatic zones:</li>
                      <li className="ml-4">- Tropical (Amazon, Central Africa, Southeast Asia)</li>
                      <li className="ml-4">- Arid/Desert (Sahara, Australian Outback, Southwestern USA)</li>
                      <li className="ml-4">- Temperate (Europe, Eastern USA, Parts of Asia)</li>
                      <li className="ml-4">- Polar (Arctic, Antarctica)</li>
                      <li>• Students collect data on:</li>
                      <li className="ml-4">- Average temperatures (seasonal variations)</li>
                      <li className="ml-4">- Precipitation patterns</li>
                      <li className="ml-4">- Typical weather conditions</li>
                      <li className="ml-4">- Human settlement patterns</li>
                      <li className="ml-4">- Economic activities in the region</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-purple-700 mb-2">
                      Step 3: Data Analysis and Mapping (15 minutes)
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Students create digital maps showing their assigned climatic zones</li>
                      <li>• Use color coding to represent different climate characteristics</li>
                      <li>• Add data labels and information boxes to maps</li>
                      <li>• Compare their zone to the Caribbean climate</li>
                      <li>• Identify similarities and differences with home region</li>
                      <li>• Note how climate affects daily life and culture</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-orange-700 mb-2">
                      Step 4: Digital Presentation Creation (10 minutes)
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Pairs create brief digital presentations (3-4 slides)</li>
                      <li>• Include climate zone map with data</li>
                      <li>• Add photos showing typical landscapes and human activities</li>
                      <li>• Prepare key facts and interesting discoveries</li>
                      <li>• Practice presentation timing and delivery</li>
                      <li>• Save presentations for sharing with class</li>
                    </ul>
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
              <CardDescription>Adaptations for diverse learning needs and technology comfort levels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-700 mb-3 flex items-center">
                    <Monitor className="mr-2 h-4 w-4" />
                    Tech-Savvy Learners
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Explore advanced mapping features</li>
                    <li>• Create interactive digital maps</li>
                    <li>• Research multiple locations within zones</li>
                    <li>• Add multimedia elements to presentations</li>
                    <li>• Help peers with technical challenges</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-700 mb-3 flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    Collaborative Learners
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Assign specific roles within pairs</li>
                    <li>• Encourage peer teaching and support</li>
                    <li>• Create opportunities for group sharing</li>
                    <li>• Use collaborative digital tools</li>
                    <li>• Facilitate cross-pair consultations</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h3 className="font-semibold text-purple-700 mb-3 flex items-center">
                    <Target className="mr-2 h-4 w-4" />
                    Struggling Learners
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Provide pre-selected reliable websites</li>
                    <li>• Use simplified data collection templates</li>
                    <li>• Offer step-by-step digital guides</li>
                    <li>• Pair with tech-confident students</li>
                    <li>• Allow alternative presentation formats</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h3 className="font-semibold text-yellow-700 mb-2">Technology Support</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Provide basic computer navigation review if needed</li>
                  <li>• Have tech support students available</li>
                  <li>• Create backup plans for technology failures</li>
                  <li>• Offer printed resources as supplements</li>
                  <li>• Allow flexible pacing for different comfort levels</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assessment">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Assessment Strategies</CardTitle>
                <CardDescription>Methods for evaluating digital research and climate understanding</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-green-700">Digital Skills Assessment</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                        <span>Effective use of digital mapping tools</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                        <span>Accurate data collection and recording</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                        <span>Quality of digital presentation creation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                        <span>Appropriate use of multimedia elements</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 text-blue-700">Content Understanding</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Target className="mr-2 h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Accurate climate zone identification</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="mr-2 h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Understanding of climate-human connections</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="mr-2 h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Quality of data analysis and interpretation</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="mr-2 h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Comparison skills with Caribbean climate</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Assessment Rubric</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 p-2 text-left">Criteria</th>
                        <th className="border border-gray-300 p-2 text-center">Excellent (4)</th>
                        <th className="border border-gray-300 p-2 text-center">Good (3)</th>
                        <th className="border border-gray-300 p-2 text-center">Satisfactory (2)</th>
                        <th className="border border-gray-300 p-2 text-center">Needs Improvement (1)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Digital Tool Use</td>
                        <td className="border border-gray-300 p-2 text-xs">Expertly navigates and uses all features</td>
                        <td className="border border-gray-300 p-2 text-xs">Uses tools effectively with minor help</td>
                        <td className="border border-gray-300 p-2 text-xs">Uses basic features with guidance</td>
                        <td className="border border-gray-300 p-2 text-xs">Struggles with digital tools</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Data Collection</td>
                        <td className="border border-gray-300 p-2 text-xs">Comprehensive, accurate data</td>
                        <td className="border border-gray-300 p-2 text-xs">Good data with minor gaps</td>
                        <td className="border border-gray-300 p-2 text-xs">Basic data collection completed</td>
                        <td className="border border-gray-300 p-2 text-xs">Incomplete or inaccurate data</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Climate Understanding</td>
                        <td className="border border-gray-300 p-2 text-xs">Deep understanding of climate zones</td>
                        <td className="border border-gray-300 p-2 text-xs">Good understanding with examples</td>
                        <td className="border border-gray-300 p-2 text-xs">Basic understanding demonstrated</td>
                        <td className="border border-gray-300 p-2 text-xs">Limited climate knowledge shown</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Presentation Quality</td>
                        <td className="border border-gray-300 p-2 text-xs">Professional, engaging presentation</td>
                        <td className="border border-gray-300 p-2 text-xs">Well-organized, clear presentation</td>
                        <td className="border border-gray-300 p-2 text-xs">Basic presentation with key points</td>
                        <td className="border border-gray-300 p-2 text-xs">Unclear or incomplete presentation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
        <h3 className="text-lg font-semibold mb-4 text-green-700">Extension Activities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2">Advanced Digital Projects:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Create interactive climate zone websites</li>
              <li>Develop climate change impact presentations</li>
              <li>Design virtual field trips to different zones</li>
              <li>Build climate data comparison tools</li>
              <li>Research climate adaptation strategies</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Cross-Curricular Connections:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <strong>Science:</strong> Weather patterns and climate systems
              </li>
              <li>
                <strong>Mathematics:</strong> Data analysis and graphing
              </li>
              <li>
                <strong>Technology:</strong> Digital literacy and presentation skills
              </li>
              <li>
                <strong>Language Arts:</strong> Research and communication skills
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
