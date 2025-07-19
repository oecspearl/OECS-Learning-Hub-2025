import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Clock, Users, Target, CheckCircle, Presentation, Palette, Mic } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function ClimaticZonePresentationsPage() {
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
            <Presentation className="mr-2 h-7 w-7 text-purple-600" />
            Climatic Zone Presentation Project
          </h1>
          <p className="text-gray-700 mb-4">
            Students research and present on different climatic zones with creative elements, demonstrating
            understanding of climate characteristics, human adaptations, and regional variations through engaging
            presentations.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="flex items-center">
              <Clock className="mr-1 h-3 w-3" />
              90 minutes
            </Badge>
            <Badge variant="secondary" className="flex items-center">
              <Users className="mr-1 h-3 w-3" />
              Groups of 3-4
            </Badge>
            <Badge variant="secondary" className="flex items-center">
              <Target className="mr-1 h-3 w-3" />
              Creative Presentation
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
                    <span>Research and analyze specific climatic zones in depth</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Create engaging, informative presentations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Demonstrate understanding of climate-human relationships</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Develop public speaking and collaboration skills</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Compare climatic zones to Caribbean conditions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Palette className="mr-2 h-5 w-5 text-pink-600" />
                  Presentation Elements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-700 mb-2">Required Components</h4>
                    <ul className="text-sm text-purple-600 space-y-1">
                      <li>• Climate zone map and location</li>
                      <li>• Temperature and precipitation data</li>
                      <li>• Human adaptations and lifestyle</li>
                      <li>• Economic activities and challenges</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-pink-50 rounded-lg border border-pink-200">
                    <h4 className="font-semibold text-pink-700 mb-2">Creative Options</h4>
                    <ul className="text-sm text-pink-600 space-y-1">
                      <li>• Role-play as climate zone residents</li>
                      <li>• Create climate zone "weather reports"</li>
                      <li>• Design travel brochures</li>
                      <li>• Build 3D climate zone models</li>
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
              <CardDescription>Resources needed for climatic zone presentation projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-purple-700">Research Materials</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Presentation className="mr-2 h-4 w-4 text-purple-500" />
                      Computers/tablets for research
                    </li>
                    <li className="flex items-center">
                      <Presentation className="mr-2 h-4 w-4 text-purple-500" />
                      Climate zone information packets
                    </li>
                    <li className="flex items-center">
                      <Presentation className="mr-2 h-4 w-4 text-purple-500" />
                      World atlas and climate maps
                    </li>
                    <li className="flex items-center">
                      <Presentation className="mr-2 h-4 w-4 text-purple-500" />
                      Research worksheet templates
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-pink-700">Creative Supplies</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Palette className="mr-2 h-4 w-4 text-pink-500" />
                      Poster boards and markers
                    </li>
                    <li className="flex items-center">
                      <Palette className="mr-2 h-4 w-4 text-pink-500" />
                      Art supplies for models/props
                    </li>
                    <li className="flex items-center">
                      <Palette className="mr-2 h-4 w-4 text-pink-500" />
                      Costume materials (optional)
                    </li>
                    <li className="flex items-center">
                      <Palette className="mr-2 h-4 w-4 text-pink-500" />
                      Presentation software access
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-700 mb-2">Assigned Climatic Zones</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <ul className="text-blue-600 space-y-1">
                      <li>
                        • <strong>Group 1:</strong> Tropical Rainforest (Amazon Basin)
                      </li>
                      <li>
                        • <strong>Group 2:</strong> Hot Desert (Sahara Desert)
                      </li>
                      <li>
                        • <strong>Group 3:</strong> Temperate Grassland (Great Plains)
                      </li>
                      <li>
                        • <strong>Group 4:</strong> Mediterranean (Southern Europe)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-blue-600 space-y-1">
                      <li>
                        • <strong>Group 5:</strong> Tundra (Northern Canada)
                      </li>
                      <li>
                        • <strong>Group 6:</strong> Monsoon (Southeast Asia)
                      </li>
                      <li>
                        • <strong>Group 7:</strong> Continental (Central Asia)
                      </li>
                      <li>
                        • <strong>Group 8:</strong> Polar (Antarctica)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="procedure">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Step-by-Step Procedure</CardTitle>
                <CardDescription>Detailed instructions for climatic zone presentation project</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-purple-700 mb-2">
                      Step 1: Project Introduction & Group Formation (15 minutes)
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Explain presentation project goals and expectations</li>
                      <li>• Form groups of 3-4 students with mixed abilities</li>
                      <li>• Assign climatic zones to each group randomly</li>
                      <li>• Distribute research packets and presentation requirements</li>
                      <li>• Review assessment rubric and timeline</li>
                      <li>• Allow groups to assign internal roles (researcher, presenter, artist, etc.)</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-pink-500 pl-4">
                    <h3 className="font-semibold text-pink-700 mb-2">Step 2: Research Phase (30 minutes)</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Groups research their assigned climatic zone using provided resources</li>
                      <li>• Collect information on:</li>
                      <li className="ml-4">- Geographic location and boundaries</li>
                      <li className="ml-4">- Average temperatures and seasonal variations</li>
                      <li className="ml-4">- Precipitation patterns and amounts</li>
                      <li className="ml-4">- Typical vegetation and wildlife</li>
                      <li className="ml-4">- Human settlements and population density</li>
                      <li className="ml-4">- Economic activities and industries</li>
                      <li className="ml-4">- Challenges faced by residents</li>
                      <li className="ml-4">- Adaptations to climate conditions</li>
                      <li>• Compare findings to Caribbean climate conditions</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-blue-700 mb-2">
                      Step 3: Creative Presentation Planning (20 minutes)
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Groups choose their presentation format:</li>
                      <li className="ml-4">- Traditional presentation with visual aids</li>
                      <li className="ml-4">- Role-play as climate zone residents</li>
                      <li className="ml-4">- Mock weather report/news broadcast</li>
                      <li className="ml-4">- Travel agency presentation</li>
                      <li className="ml-4">- Documentary-style presentation</li>
                      <li>• Plan creative elements (props, costumes, demonstrations)</li>
                      <li>• Assign speaking roles and practice timing</li>
                      <li>• Create visual aids (posters, slides, models)</li>
                      <li>• Prepare interactive elements for audience engagement</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-green-700 mb-2">Step 4: Presentation Delivery (25 minutes)</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Each group presents for 3-4 minutes</li>
                      <li>• Audience takes notes on presentation worksheet</li>
                      <li>• Include time for 1-2 questions after each presentation</li>
                      <li>• Encourage positive feedback and constructive comments</li>
                      <li>• Teacher provides immediate feedback on strengths</li>
                      <li>• Groups complete peer evaluation forms</li>
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
              <CardDescription>Adaptations for diverse learning styles and presentation comfort levels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h3 className="font-semibold text-purple-700 mb-3 flex items-center">
                    <Mic className="mr-2 h-4 w-4" />
                    Confident Speakers
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Lead group presentations</li>
                    <li>• Take on challenging role-play characters</li>
                    <li>• Facilitate audience Q&A sessions</li>
                    <li>• Add improvisation elements</li>
                    <li>• Help coach quieter group members</li>
                  </ul>
                </div>

                <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
                  <h3 className="font-semibold text-pink-700 mb-3 flex items-center">
                    <Palette className="mr-2 h-4 w-4" />
                    Creative Learners
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Design visual aids and props</li>
                    <li>• Create costumes and demonstrations</li>
                    <li>• Develop interactive presentation elements</li>
                    <li>• Build 3D models or displays</li>
                    <li>• Add artistic flair to research materials</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-700 mb-3 flex items-center">
                    <Target className="mr-2 h-4 w-4" />
                    Shy/Anxious Learners
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Focus on research and preparation roles</li>
                    <li>• Present from behind props or visual aids</li>
                    <li>• Share presentation duties with partners</li>
                    <li>• Use written cue cards for support</li>
                    <li>• Present to smaller groups first</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h3 className="font-semibold text-yellow-700 mb-2">Support Strategies</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Provide presentation templates and sentence starters</li>
                  <li>• Allow groups to practice with teacher before presenting</li>
                  <li>• Offer alternative presentation formats (video, poster session)</li>
                  <li>• Create supportive, encouraging classroom environment</li>
                  <li>• Focus assessment on content knowledge over presentation skills</li>
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
                <CardDescription>
                  Comprehensive evaluation of research, creativity, and presentation skills
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-purple-700">Content Assessment</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                        <span>Accuracy of climate zone information</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                        <span>Understanding of human-climate relationships</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                        <span>Quality of research and data collection</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                        <span>Comparison to Caribbean climate</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 text-pink-700">Presentation Skills</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Target className="mr-2 h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Clarity and organization of presentation</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="mr-2 h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Creativity and engagement level</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="mr-2 h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Effective use of visual aids</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="mr-2 h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Collaboration and teamwork</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Presentation Assessment Rubric</CardTitle>
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
                        <td className="border border-gray-300 p-2 font-medium">Content Accuracy</td>
                        <td className="border border-gray-300 p-2 text-xs">All information accurate and detailed</td>
                        <td className="border border-gray-300 p-2 text-xs">Mostly accurate with good detail</td>
                        <td className="border border-gray-300 p-2 text-xs">Generally accurate, basic detail</td>
                        <td className="border border-gray-300 p-2 text-xs">Some inaccuracies, limited detail</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Creativity</td>
                        <td className="border border-gray-300 p-2 text-xs">Highly creative and engaging</td>
                        <td className="border border-gray-300 p-2 text-xs">Creative elements enhance content</td>
                        <td className="border border-gray-300 p-2 text-xs">Some creative elements included</td>
                        <td className="border border-gray-300 p-2 text-xs">Limited creativity shown</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Organization</td>
                        <td className="border border-gray-300 p-2 text-xs">Clear, logical flow throughout</td>
                        <td className="border border-gray-300 p-2 text-xs">Well-organized with minor issues</td>
                        <td className="border border-gray-300 p-2 text-xs">Generally organized</td>
                        <td className="border border-gray-300 p-2 text-xs">Unclear organization</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Teamwork</td>
                        <td className="border border-gray-300 p-2 text-xs">Excellent collaboration evident</td>
                        <td className="border border-gray-300 p-2 text-xs">Good teamwork shown</td>
                        <td className="border border-gray-300 p-2 text-xs">Adequate collaboration</td>
                        <td className="border border-gray-300 p-2 text-xs">Limited teamwork evident</td>
                      </tr>
                    </tbody>
                  </table>
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
            <h4 className="font-semibold mb-2">Advanced Projects:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Create climate zone documentaries with video</li>
              <li>Design climate adaptation solutions</li>
              <li>Research climate change impacts on zones</li>
              <li>Develop climate zone board games</li>
              <li>Present to younger classes as teaching tool</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Cross-Curricular Connections:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <strong>Science:</strong> Weather systems and climate science
              </li>
              <li>
                <strong>Art:</strong> Visual design and creative expression
              </li>
              <li>
                <strong>Language Arts:</strong> Research and presentation skills
              </li>
              <li>
                <strong>Drama:</strong> Role-play and performance techniques
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
