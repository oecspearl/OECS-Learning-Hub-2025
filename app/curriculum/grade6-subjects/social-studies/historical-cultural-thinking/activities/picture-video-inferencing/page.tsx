import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Clock, Users, ImageIcon, CheckCircle, AlertCircle, Lightbulb } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function PictureVideoInferencingPage() {
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
            <ImageIcon className="mr-2 h-7 w-7 text-red-600" />
            Picture/Video Inferencing with Guided Discussion
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary" className="flex items-center">
              <Clock className="mr-1 h-3 w-3" />
              45 minutes
            </Badge>
            <Badge variant="secondary" className="flex items-center">
              <Users className="mr-1 h-3 w-3" />
              Whole Class
            </Badge>
            <Badge variant="outline">Slavery & Emancipation</Badge>
          </div>
          <p className="text-gray-700">
            Students analyze images of newly freed Africans on Emancipation Day through guided observation and
            discussion, building understanding of freedom and its meaning to different people.
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
                    Develop visual analysis and observation skills
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Understand the significance of Emancipation Day
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Explore different perspectives on freedom
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Practice making inferences from visual evidence
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Generate thoughtful questions about historical events
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-red-700">
                  <Lightbulb className="mr-2 h-5 w-5" />
                  Key Concepts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-red-600">Emancipation</h4>
                    <p className="text-sm text-gray-600">The process of being set free from slavery</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600">Freedom</h4>
                    <p className="text-sm text-gray-600">Different meanings and experiences of liberty</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600">Visual Inference</h4>
                    <p className="text-sm text-gray-600">Drawing conclusions from what we observe in images</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600">Historical Context</h4>
                    <p className="text-sm text-gray-600">Understanding events within their time period</p>
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
                    <h3 className="font-semibold text-red-700 mb-2">1. Hook (5 minutes)</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Display image of Emancipation Day celebration without providing context</li>
                      <li>• Ask students to observe silently for 2 minutes</li>
                      <li>• Encourage careful, detailed observation</li>
                      <li>• No talking or discussion during this phase</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold text-red-700 mb-2">2. Initial Observations (10 minutes)</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Students share observations using "I notice..." statements</li>
                      <li>• Record all observations on board without judgment or correction</li>
                      <li>• Guide with questions:</li>
                      <li className="ml-4">- What are the people in the picture doing?</li>
                      <li className="ml-4">- How many groups of persons do you observe?</li>
                      <li className="ml-4">- Who are these people?</li>
                      <li className="ml-4">- Why do they seem to be in different moods?</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold text-red-700 mb-2">3. Context Building (15 minutes)</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Reveal that this is an Emancipation Day celebration</li>
                      <li>• Ask students to predict what "Emancipation" means</li>
                      <li>• Provide historical context through mini-lecture with visual support</li>
                      <li>• Connect to students' prior knowledge about slavery</li>
                      <li>• Explain the significance of this day in Caribbean history</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold text-red-700 mb-2">4. Deep Discussion (10 minutes)</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Why might people have different emotions on this day?</li>
                      <li>• What does freedom mean to different people?</li>
                      <li>• How might this day change people's lives?</li>
                      <li>• Encourage students to consider multiple perspectives</li>
                      <li>• Connect to modern concepts of freedom and celebration</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold text-red-700 mb-2">5. Reflection (5 minutes)</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Students write one question they still have about Emancipation Day</li>
                      <li>• Encourage thoughtful, open-ended questions</li>
                      <li>• Collect questions for future lessons or research</li>
                      <li>• Share a few questions with the class if time permits</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-orange-700">
                  <AlertCircle className="mr-2 h-5 w-5" />
                  Teaching Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Facilitation Strategies</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Use wait time after asking questions</li>
                      <li>• Accept all observations without judgment</li>
                      <li>• Encourage use of descriptive language</li>
                      <li>• Model "I notice..." statements</li>
                      <li>• Keep discussion focused on the image</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Differentiation</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Provide sentence starters for shy students</li>
                      <li>• Use think-pair-share for initial observations</li>
                      <li>• Offer multiple ways to share (verbal, written, drawing)</li>
                      <li>• Support ELL students with vocabulary</li>
                      <li>• Allow processing time before sharing</li>
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
                    Images of newly freed Africans on Emancipation Day
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Projector or smartboard for image display
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Whiteboard or chart paper for recording observations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Markers for writing student responses
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Paper for student reflection questions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Timer for managing activity segments
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">Classroom Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Physical Arrangement</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Arrange seats so all students can see the projected image clearly</li>
                      <li>• Ensure whiteboard/chart paper is visible to all</li>
                      <li>• Have materials within easy reach</li>
                      <li>• Create a comfortable discussion environment</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Technology Setup</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Test projector/smartboard before class</li>
                      <li>• Have image ready to display immediately</li>
                      <li>• Prepare backup plan if technology fails</li>
                      <li>• Ensure image quality is clear and detailed</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Preparation</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Review historical context beforehand</li>
                      <li>• Prepare guiding questions in advance</li>
                      <li>• Have additional images ready if needed</li>
                      <li>• Plan for different discussion scenarios</li>
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
                <CardTitle className="text-red-700">Assessment Strategies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-red-600">Formative Assessment</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <strong>Observation:</strong> Monitor student participation in discussion and quality of
                        observations
                      </li>
                      <li>
                        <strong>Listening:</strong> Note depth of student responses and understanding of concepts
                      </li>
                      <li>
                        <strong>Questioning:</strong> Assess quality and thoughtfulness of student-generated questions
                      </li>
                      <li>
                        <strong>Engagement:</strong> Observe student interest and involvement throughout activity
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-red-600">Assessment Criteria</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <strong>Visual Analysis:</strong> Ability to make detailed, accurate observations
                      </li>
                      <li>
                        <strong>Historical Understanding:</strong> Grasp of Emancipation Day significance
                      </li>
                      <li>
                        <strong>Critical Thinking:</strong> Making connections and inferences
                      </li>
                      <li>
                        <strong>Communication:</strong> Clear expression of ideas and questions
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

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
                        <td className="border border-gray-300 p-2 font-medium">Observation Skills</td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Makes detailed, accurate observations with specific details
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Makes clear observations with some details
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">Makes basic observations</td>
                        <td className="border border-gray-300 p-2 text-sm">Observations are unclear or inaccurate</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Discussion Participation</td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Actively participates with thoughtful contributions
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">Participates regularly with good ideas</td>
                        <td className="border border-gray-300 p-2 text-sm">Participates occasionally</td>
                        <td className="border border-gray-300 p-2 text-sm">Minimal participation</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Question Quality</td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Generates thoughtful, open-ended questions
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">Generates good questions</td>
                        <td className="border border-gray-300 p-2 text-sm">Generates basic questions</td>
                        <td className="border border-gray-300 p-2 text-sm">Questions are unclear or off-topic</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">Extension Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">For Advanced Learners</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Research specific Emancipation Day celebrations in different Caribbean countries</li>
                      <li>• Compare Emancipation Day images from different time periods</li>
                      <li>• Create their own historical image analysis questions</li>
                      <li>• Interview community members about Emancipation Day traditions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">For Additional Support</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Provide vocabulary support with key terms</li>
                      <li>• Use graphic organizers for observations</li>
                      <li>• Pair with stronger students for discussion</li>
                      <li>• Offer alternative ways to express observations (drawing, pointing)</li>
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
