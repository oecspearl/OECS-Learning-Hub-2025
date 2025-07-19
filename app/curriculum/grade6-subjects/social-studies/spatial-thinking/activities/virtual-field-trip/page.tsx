import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Clock, Users, Target, CheckCircle, Plane, Camera, Globe } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function VirtualFieldTripPage() {
  return (
    <div className="container mx-auto py-8">
            <Link href="/curriculum/grade6-subjects/social-studies/spatial-thinking/activities">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Spatial Thinking Activities
        </Button>
      </Link>

      <div className="mb-8">
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-blue-700 flex items-center">
            <Plane className="mr-2 h-7 w-7 text-blue-600" />
            Virtual Field Trip and Cultural Exploration
          </h1>
          <p className="text-gray-700 mb-4">
            Students explore how people adapt to different climates through virtual tours of various regions, examining
            housing, clothing, food, and cultural practices shaped by environmental conditions.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="flex items-center">
              <Clock className="mr-1 h-3 w-3" />
              90 minutes
            </Badge>
            <Badge variant="secondary" className="flex items-center">
              <Users className="mr-1 h-3 w-3" />
              Small Groups
            </Badge>
            <Badge variant="secondary" className="flex items-center">
              <Target className="mr-1 h-3 w-3" />
              Virtual Exploration
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
                  <Target className="mr-2 h-5 w-5 text-blue-600" />
                  Learning Objectives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Explore diverse climatic regions through virtual tours</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Analyze human adaptations to different climates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Compare cultural practices across climate zones</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Document observations through digital portfolios</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Develop cultural awareness and appreciation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="mr-2 h-5 w-5 text-purple-600" />
                  Virtual Destinations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-700 mb-2">Tropical Rainforest</h4>
                    <p className="text-sm text-green-600">Amazon villages, stilt houses, traditional crafts</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-700 mb-2">Desert Regions</h4>
                    <p className="text-sm text-orange-600">Bedouin camps, adobe architecture, water conservation</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-700 mb-2">Arctic Communities</h4>
                    <p className="text-sm text-blue-600">Inuit settlements, ice fishing, traditional clothing</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-700 mb-2">Mountain Regions</h4>
                    <p className="text-sm text-purple-600">Alpine villages, terraced farming, seasonal migration</p>
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
              <CardDescription>Technology and resources needed for virtual field trip exploration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-blue-700">Technology</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Plane className="mr-2 h-4 w-4 text-blue-500" />
                      Computers/tablets with internet access
                    </li>
                    <li className="flex items-center">
                      <Plane className="mr-2 h-4 w-4 text-blue-500" />
                      Google Earth or virtual tour platforms
                    </li>
                    <li className="flex items-center">
                      <Plane className="mr-2 h-4 w-4 text-blue-500" />
                      Headphones for audio content
                    </li>
                    <li className="flex items-center">
                      <Plane className="mr-2 h-4 w-4 text-blue-500" />
                      Screen recording software (optional)
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-purple-700">Documentation Tools</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Camera className="mr-2 h-4 w-4 text-purple-500" />
                      Digital observation journals
                    </li>
                    <li className="flex items-center">
                      <Camera className="mr-2 h-4 w-4 text-purple-500" />
                      Screenshot tools for capturing images
                    </li>
                    <li className="flex items-center">
                      <Camera className="mr-2 h-4 w-4 text-purple-500" />
                      Comparison chart templates
                    </li>
                    <li className="flex items-center">
                      <Camera className="mr-2 h-4 w-4 text-purple-500" />
                      Presentation software access
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-700 mb-2">Recommended Virtual Tour Resources</h4>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• Google Earth VR tours of different climate regions</li>
                  <li>• National Geographic virtual expeditions</li>
                  <li>• UNESCO World Heritage virtual tours</li>
                  <li>• Cultural museum virtual exhibitions</li>
                  <li>• 360-degree videos of climate-specific communities</li>
                  <li>• Virtual reality experiences (if available)</li>
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
                <CardDescription>Detailed instructions for virtual field trip and cultural exploration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-blue-700 mb-2">Step 1: Pre-Trip Preparation (15 minutes)</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Introduce virtual field trip concept and objectives</li>
                      <li>• Form groups of 3-4 students, assign climate regions</li>
                      <li>• Distribute digital observation journals and templates</li>
                      <li>• Review technology tools and navigation basics</li>
                      <li>• Establish observation focus areas:</li>
                      <li className="ml-4">- Housing and architecture</li>
                      <li className="ml-4">- Clothing and textiles</li>
                      <li className="ml-4">- Food and agriculture</li>
                      <li className="ml-4">- Transportation methods</li>
                      <li className="ml-4">- Cultural practices and traditions</li>
                      <li>• Set behavioral expectations for virtual exploration</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-purple-700 mb-2">Step 2: Virtual Exploration (45 minutes)</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Groups begin virtual tours of their assigned climate regions</li>
                      <li>• Systematic exploration of multiple locations within region:</li>
                      <li className="ml-4">- Urban centers and rural communities</li>
                      <li className="ml-4">- Traditional and modern settlements</li>
                      <li className="ml-4">- Different seasons (if available)</li>
                      <li>• Document observations with screenshots and notes</li>
                      <li>• Record specific examples of climate adaptations</li>
                      <li>• Note cultural practices unique to the region</li>
                      <li>• Compare different communities within same climate zone</li>
                      <li>• Teacher circulates to provide guidance and answer questions</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-green-700 mb-2">Step 3: Comparative Analysis (20 minutes)</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Groups analyze their findings and complete comparison charts</li>
                      <li>• Compare their assigned region to Caribbean climate and culture:</li>
                      <li className="ml-4">- Similarities in adaptations</li>
                      <li className="ml-4">- Differences in lifestyle</li>
                      <li className="ml-4">- Unique challenges and solutions</li>
                      <li>• Identify most interesting or surprising discoveries</li>
                      <li>• Prepare key findings for sharing with class</li>
                      <li>• Create digital portfolio of best examples and observations</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-orange-700 mb-2">
                      Step 4: Cultural Sharing Session (10 minutes)
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Each group shares 2-3 most interesting findings</li>
                      <li>• Show screenshots or virtual tour highlights</li>
                      <li>• Explain how climate influences observed adaptations</li>
                      <li>• Discuss cultural practices that surprised them</li>
                      <li>• Class creates collective list of climate adaptation strategies</li>
                      <li>• Reflect on cultural diversity and human ingenuity</li>
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
              <CardDescription>Adaptations for diverse learning styles and technology comfort levels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-700 mb-3 flex items-center">
                    <Plane className="mr-2 h-4 w-4" />
                    Tech-Savvy Learners
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Explore advanced virtual reality features</li>
                    <li>• Create multimedia presentations with embedded tours</li>
                    <li>• Research additional virtual resources</li>
                    <li>• Help peers navigate technology challenges</li>
                    <li>• Document tours with screen recordings</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h3 className="font-semibold text-purple-700 mb-3 flex items-center">
                    <Camera className="mr-2 h-4 w-4" />
                    Visual Learners
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Focus on visual documentation and screenshots</li>
                    <li>• Create visual comparison charts and infographics</li>
                    <li>• Use color-coding for different adaptation types</li>
                    <li>• Develop visual storytelling presentations</li>
                    <li>• Emphasize artistic and architectural elements</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-700 mb-3 flex items-center">
                    <Globe className="mr-2 h-4 w-4" />
                    Struggling Learners
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Provide guided observation checklists</li>
                    <li>• Use simplified virtual tour platforms</li>
                    <li>• Pair with tech-confident partners</li>
                    <li>• Focus on 2-3 main adaptation categories</li>
                    <li>• Offer alternative documentation methods</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h3 className="font-semibold text-yellow-700 mb-2">Accessibility Considerations</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Provide audio descriptions for visual content</li>
                  <li>• Use high-contrast displays for better visibility</li>
                  <li>• Offer alternative input methods for navigation</li>
                  <li>• Include closed captions for video content</li>
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
                <CardDescription>Methods for evaluating virtual exploration and cultural understanding</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-blue-700">Observation Skills</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                        <span>Quality and detail of documented observations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                        <span>Accuracy of climate adaptation identification</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                        <span>Effective use of virtual tour technology</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                        <span>Organization of digital portfolio</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 text-purple-700">Cultural Understanding</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Target className="mr-2 h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Understanding of climate-culture relationships</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="mr-2 h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Respectful appreciation of cultural diversity</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="mr-2 h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Quality of comparative analysis</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="mr-2 h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Connections to Caribbean context</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Digital Portfolio Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-700 mb-2">Required Portfolio Elements</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• Screenshots from virtual tours with captions</li>
                      <li>• Observation notes organized by adaptation category</li>
                      <li>• Comparison chart with Caribbean climate/culture</li>
                      <li>• Reflection on most interesting discoveries</li>
                      <li>• Questions generated for further exploration</li>
                    </ul>
                  </div>

                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-700 mb-2">Assessment Criteria</h4>
                    <ul className="text-sm text-purple-600 space-y-1">
                      <li>• Completeness: All required elements included</li>
                      <li>• Quality: Detailed, accurate observations</li>
                      <li>• Organization: Clear, logical presentation</li>
                      <li>• Analysis: Thoughtful connections and comparisons</li>
                      <li>• Reflection: Personal insights and learning</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="text-lg font-semibold mb-4 text-blue-700">Extension Activities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2">Advanced Explorations:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Create virtual reality presentations for other classes</li>
              <li>Research historical changes in climate adaptations</li>
              <li>Design ideal communities for different climate zones</li>
              <li>Interview people from different climate regions</li>
              <li>Plan actual field trips based on virtual discoveries</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Cross-Curricular Connections:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <strong>Technology:</strong> Digital literacy and virtual navigation
              </li>
              <li>
                <strong>Art:</strong> Cultural art forms and architectural styles
              </li>
              <li>
                <strong>Science:</strong> Climate systems and environmental adaptation
              </li>
              <li>
                <strong>Language Arts:</strong> Cultural storytelling and communication
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
