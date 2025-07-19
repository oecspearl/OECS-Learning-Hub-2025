import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Clock, Users, Target, CheckCircle, Globe, Palette, Eye } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function EarthFromSpaceActivityPage() {
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
            <Globe className="mr-2 h-7 w-7 text-blue-600" />
            Earth from Space Drawing and Analysis
          </h1>
          <p className="text-gray-700 mb-4">
            Students draw Earth from a space perspective and compare their illustrations with real imagery to understand
            Earth's composition and why it's called the "Blue Planet."
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="flex items-center">
              <Clock className="mr-1 h-3 w-3" />
              50 minutes
            </Badge>
            <Badge variant="secondary" className="flex items-center">
              <Users className="mr-1 h-3 w-3" />
              Groups of 4
            </Badge>
            <Badge variant="secondary" className="flex items-center">
              <Target className="mr-1 h-3 w-3" />
              Visual Analysis
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
                    <span>Understand Earth's composition from a space perspective</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Recognize the 70% water, 30% land ratio</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Explain why Earth is called the "Blue Planet"</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Compare initial perceptions with scientific evidence</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Develop observation and revision skills</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="mr-2 h-5 w-5 text-purple-600" />
                  Key Concepts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-700 mb-2">Earth's Composition</h4>
                    <p className="text-sm text-blue-600">
                      Earth's surface is approximately 70% water and 30% land, making it appear blue from space.
                    </p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-700 mb-2">The Blue Planet</h4>
                    <p className="text-sm text-purple-600">
                      Earth's nickname comes from the predominance of water visible from space.
                    </p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-700 mb-2">Scientific Observation</h4>
                    <p className="text-sm text-green-600">
                      Comparing initial ideas with evidence helps develop scientific thinking skills.
                    </p>
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
              <CardDescription>Everything needed for the Earth from Space activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-blue-700">Drawing Materials</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Palette className="mr-2 h-4 w-4 text-blue-500" />
                      Blank paper (one per group)
                    </li>
                    <li className="flex items-center">
                      <Palette className="mr-2 h-4 w-4 text-blue-500" />
                      Colored pencils or crayons
                    </li>
                    <li className="flex items-center">
                      <Palette className="mr-2 h-4 w-4 text-blue-500" />
                      Markers for revisions
                    </li>
                    <li className="flex items-center">
                      <Palette className="mr-2 h-4 w-4 text-blue-500" />
                      Erasers
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-green-700">Technology & Resources</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Globe className="mr-2 h-4 w-4 text-green-500" />
                      Inflatable globe
                    </li>
                    <li className="flex items-center">
                      <Globe className="mr-2 h-4 w-4 text-green-500" />
                      YouTube video access
                    </li>
                    <li className="flex items-center">
                      <Globe className="mr-2 h-4 w-4 text-green-500" />
                      Projector or smartboard
                    </li>
                    <li className="flex items-center">
                      <Globe className="mr-2 h-4 w-4 text-green-500" />
                      Timer (8 minutes)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-yellow-700 mb-2">Video Resource</h4>
                <p className="text-sm text-yellow-600 mb-2">
                  Primary video: https://www.youtube.com/watch?v=d-VqMGfmUMQ
                </p>
                <p className="text-xs text-yellow-500">
                  Ensure video is accessible and preview for appropriate content before class.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="procedure">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Step-by-Step Procedure</CardTitle>
                <CardDescription>Detailed instructions for conducting the activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-blue-700 mb-2">Step 1: Initial Drawing Challenge (10 minutes)</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Form groups of 4 students and distribute blank paper</li>
                      <li>
                        • Give instructions: "If you are floating in space, looking down on Earth, draw what you think
                        you will see"
                      </li>
                      <li>• Set timer for 8 minutes - no discussion allowed during drawing</li>
                      <li>• Groups work silently to create their Earth illustrations</li>
                      <li>• Encourage students to include details they think would be visible from space</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-green-700 mb-2">Step 2: Sharing Initial Ideas (8 minutes)</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Groups post their drawings on the board or display area</li>
                      <li>• Each group gives a brief 1-minute presentation of their illustration</li>
                      <li>• No feedback or corrections given at this stage</li>
                      <li>• Encourage students to observe similarities and differences</li>
                      <li>• Record common elements mentioned by multiple groups</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-purple-700 mb-2">Step 3: Video Analysis (7 minutes)</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Play the YouTube video showing Earth from space</li>
                      <li>• First viewing: Students observe silently</li>
                      <li>• Second viewing: Students take notes on what they observe</li>
                      <li>• Focus on colors, patterns, and prominent features</li>
                      <li>• Pause video if needed to highlight key observations</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-orange-700 mb-2">Step 4: Comparison and Revision (15 minutes)</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Compare student illustrations to the video footage</li>
                      <li>• Guided questions:</li>
                      <li className="ml-4">- How does your illustration compare to the video?</li>
                      <li className="ml-4">- What features are similar/different?</li>
                      <li className="ml-4">- What did you learn about Earth's composition?</li>
                      <li>• Students revise their drawings based on new knowledge</li>
                      <li>• Use different colored markers to show revisions</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold text-red-700 mb-2">Step 5: Concept Introduction (10 minutes)</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Introduce key concepts: 70% water, 30% land</li>
                      <li>• Students write descriptions of their revised illustrations</li>
                      <li>• Discuss why Earth is called the "Blue Planet"</li>
                      <li>• Use inflatable globe for hands-on exploration</li>
                      <li>• Connect observations to scientific facts</li>
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
              <CardDescription>Adaptations for diverse learning needs and styles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-700 mb-3 flex items-center">
                    <Eye className="mr-2 h-4 w-4" />
                    Visual Learners
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Use color coding for water vs. land areas</li>
                    <li>• Provide visual comparison charts</li>
                    <li>• Display multiple Earth images from different angles</li>
                    <li>• Create visual vocabulary cards</li>
                    <li>• Use graphic organizers for observations</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-700 mb-3 flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    Kinesthetic Learners
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Use inflatable globe for hands-on exploration</li>
                    <li>• Allow movement during observation phases</li>
                    <li>• Provide tactile materials for drawing</li>
                    <li>• Include gesture-based learning</li>
                    <li>• Use physical models and manipulatives</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h3 className="font-semibold text-purple-700 mb-3 flex items-center">
                    <Target className="mr-2 h-4 w-4" />
                    Advanced Students
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Calculate approximate percentages of their drawings</li>
                    <li>• Research different satellite imagery</li>
                    <li>• Compare Earth to other planets</li>
                    <li>• Investigate seasonal changes from space</li>
                    <li>• Create detailed scientific explanations</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h3 className="font-semibold text-yellow-700 mb-2">Support for Struggling Learners</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Provide partially completed drawing templates</li>
                  <li>• Offer sentence starters for descriptions</li>
                  <li>• Use peer partnerships for support</li>
                  <li>• Break down complex observations into smaller steps</li>
                  <li>• Provide additional time for drawing and revision</li>
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
                <CardDescription>Methods for evaluating student learning and progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-blue-700">Formative Assessment</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                        <span>Compare initial and revised drawings to assess learning progression</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                        <span>Observe student participation during discussions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                        <span>Monitor quality of observations and questions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                        <span>Evaluate written descriptions for understanding</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 text-green-700">Assessment Criteria</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Target className="mr-2 h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Accuracy of Earth's composition understanding</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="mr-2 h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Quality of revisions based on evidence</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="mr-2 h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Ability to explain the "Blue Planet" concept</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="mr-2 h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Collaboration and communication skills</span>
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
                        <td className="border border-gray-300 p-2 font-medium">Initial Drawing</td>
                        <td className="border border-gray-300 p-2 text-xs">
                          Shows creative thinking and detailed observations
                        </td>
                        <td className="border border-gray-300 p-2 text-xs">Shows good effort and some detail</td>
                        <td className="border border-gray-300 p-2 text-xs">Shows basic effort with minimal detail</td>
                        <td className="border border-gray-300 p-2 text-xs">Shows little effort or detail</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Revision Quality</td>
                        <td className="border border-gray-300 p-2 text-xs">
                          Significant improvements based on evidence
                        </td>
                        <td className="border border-gray-300 p-2 text-xs">Good improvements with some evidence</td>
                        <td className="border border-gray-300 p-2 text-xs">Some improvements attempted</td>
                        <td className="border border-gray-300 p-2 text-xs">Little to no revision attempted</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Understanding</td>
                        <td className="border border-gray-300 p-2 text-xs">
                          Clear understanding of Earth's composition
                        </td>
                        <td className="border border-gray-300 p-2 text-xs">Good understanding with minor gaps</td>
                        <td className="border border-gray-300 p-2 text-xs">Basic understanding demonstrated</td>
                        <td className="border border-gray-300 p-2 text-xs">Limited understanding shown</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Participation</td>
                        <td className="border border-gray-300 p-2 text-xs">Active, thoughtful participation</td>
                        <td className="border border-gray-300 p-2 text-xs">Good participation with contributions</td>
                        <td className="border border-gray-300 p-2 text-xs">Some participation when prompted</td>
                        <td className="border border-gray-300 p-2 text-xs">Minimal participation</td>
                      </tr>
                    </tbody>
                  </table>
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
            <h4 className="font-semibold mb-2">For Advanced Learners:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Research and compare Earth images from different space missions</li>
              <li>Calculate actual percentages of water vs. land coverage</li>
              <li>Investigate how Earth appears different during day and night</li>
              <li>Create a presentation on Earth's unique features compared to other planets</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Cross-Curricular Connections:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <strong>Science:</strong> Earth's atmosphere and water cycle
              </li>
              <li>
                <strong>Mathematics:</strong> Percentage calculations and ratios
              </li>
              <li>
                <strong>Art:</strong> Color theory and perspective drawing
              </li>
              <li>
                <strong>Technology:</strong> Satellite imagery and space exploration
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
