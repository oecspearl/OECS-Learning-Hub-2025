import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Clock, Users, Palette, CheckCircle, AlertCircle, Lightbulb, Music } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function CreativeExpressionPage() {
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
            <Palette className="mr-2 h-7 w-7 text-red-600" />
            Creative Expression - Celebrating Emancipation
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary" className="flex items-center">
              <Clock className="mr-1 h-3 w-3" />
              90 minutes
            </Badge>
            <Badge variant="secondary" className="flex items-center">
              <Users className="mr-1 h-3 w-3" />
              Individual & Groups
            </Badge>
            <Badge variant="outline">Creative Arts</Badge>
          </div>
          <p className="text-gray-700">
            Students create songs, dances, dramas, or art pieces celebrating Emancipation Day and honoring the
            contributions of enslaved Africans to their own freedom.
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
                    Express understanding of Emancipation Day through creative arts
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Honor the contributions of enslaved Africans to their freedom
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Develop creative expression and artistic skills
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Connect historical events to personal and cultural identity
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Present creative work to an audience with confidence
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-red-700">
                  <Lightbulb className="mr-2 h-5 w-5" />
                  Creative Expression Options
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-red-600">Musical Expression</h4>
                    <p className="text-sm text-gray-600">Songs, chants, or musical compositions celebrating freedom</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600">Movement & Dance</h4>
                    <p className="text-sm text-gray-600">Traditional or original dances expressing liberation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600">Dramatic Performance</h4>
                    <p className="text-sm text-gray-600">Skits, monologues, or dramatic readings</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600">Visual Arts</h4>
                    <p className="text-sm text-gray-600">Paintings, sculptures, or mixed media artwork</p>
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
                    <h3 className="font-semibold text-red-700 mb-2">1. Inspiration and Planning (20 minutes)</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Review previous learning about enslaved Africans' contributions to emancipation</li>
                      <li>• Discuss how art can express historical understanding and emotion</li>
                      <li>• Present creative expression options: song, dance, drama, visual art</li>
                      <li>• Students choose their preferred medium and form groups accordingly</li>
                      <li>• Groups brainstorm themes and key messages to convey</li>
                      <li>• Create planning sheets outlining their creative vision</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-blue-700 mb-2">2. Research and Development (25 minutes)</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Groups research specific aspects of emancipation for their piece</li>
                      <li>• Explore traditional Caribbean art forms and cultural expressions</li>
                      <li>• Develop content that honors enslaved Africans' resistance and contributions</li>
                      <li>• Create rough drafts, sketches, or outlines of their work</li>
                      <li>• Gather necessary materials and resources</li>
                      <li>• Begin initial creation or composition process</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-green-700 mb-2">3. Creation and Practice (35 minutes)</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Groups work on creating their artistic expressions</li>
                      <li>• Music groups compose lyrics and melodies</li>
                      <li>• Dance groups choreograph movements</li>
                      <li>• Drama groups write scripts and practice performances</li>
                      <li>• Visual arts groups create paintings, sculptures, or collages</li>
                      <li>• Teacher circulates to provide guidance and support</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-purple-700 mb-2">4. Sharing and Celebration (10 minutes)</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Groups present their creative expressions to the class</li>
                      <li>• Audience provides respectful feedback and appreciation</li>
                      <li>• Discuss how each piece honors emancipation and freedom</li>
                      <li>• Reflect on the power of art to express historical understanding</li>
                      <li>• Plan for potential community sharing or display</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-orange-700">
                  <Music className="mr-2 h-5 w-5" />
                  Creative Expression Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-orange-600">Musical Compositions</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Include themes of freedom, resistance, and hope</li>
                      <li>• Consider traditional Caribbean musical styles</li>
                      <li>• Write original lyrics or adapt existing songs</li>
                      <li>• Include call-and-response elements</li>
                      <li>• Use simple instruments if available</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-orange-600">Dance Performances</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Express journey from bondage to freedom</li>
                      <li>• Incorporate traditional Caribbean movements</li>
                      <li>• Use symbolic gestures and formations</li>
                      <li>• Include moments of struggle and celebration</li>
                      <li>• Consider costume elements if possible</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-orange-600">Dramatic Presentations</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Create monologues from historical perspectives</li>
                      <li>• Write dialogues between key figures</li>
                      <li>• Include moments of decision and courage</li>
                      <li>• Show transformation and empowerment</li>
                      <li>• Use minimal props for maximum impact</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-orange-600">Visual Art Pieces</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Use symbolism to represent freedom concepts</li>
                      <li>• Include portraits of freedom fighters</li>
                      <li>• Show before/after emancipation scenes</li>
                      <li>• Incorporate Caribbean cultural elements</li>
                      <li>• Use vibrant colors to express joy and hope</li>
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
                    Art supplies (paper, paints, markers, colored pencils)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Craft materials (fabric scraps, cardboard, glue)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Simple musical instruments (if available)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Audio system for music playback
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Performance space for presentations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Research materials and historical references
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Planning sheets and rubrics
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">Setup Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Workspace Organization</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Create stations for different art forms</li>
                      <li>• Ensure adequate space for movement and dance</li>
                      <li>• Set up quiet areas for writing and planning</li>
                      <li>• Organize materials for easy access</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Technology Setup</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Test audio system for music and presentations</li>
                      <li>• Prepare recording device for documentation</li>
                      <li>• Have backup plans for technical issues</li>
                      <li>• Ensure good lighting for visual arts</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Safety Considerations</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Clear pathways for movement activities</li>
                      <li>• Safe use of art materials and tools</li>
                      <li>• Appropriate volume levels for music</li>
                      <li>• Respectful audience behavior guidelines</li>
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
                        <td className="border border-gray-300 p-2 font-medium">Historical Understanding</td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Demonstrates deep understanding of emancipation and enslaved Africans' contributions
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Shows good understanding of historical concepts
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Shows basic understanding of emancipation
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Limited understanding of historical concepts
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Creative Expression</td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Highly creative and original expression with excellent artistic quality
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Creative expression with good artistic elements
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Adequate creative expression with some artistic merit
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Limited creativity with minimal artistic development
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Cultural Respect</td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Shows deep respect and honor for enslaved Africans and their legacy
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Shows good respect for historical figures and culture
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Shows adequate respect for cultural heritage
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Limited demonstration of cultural respect
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Presentation</td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Confident, engaging presentation with excellent communication
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Good presentation with clear communication
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Adequate presentation with basic communication
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">Unclear or hesitant presentation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-red-700">
                  <AlertCircle className="mr-2 h-5 w-5" />
                  Extension Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-red-600">Community Connections</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <strong>School Performance:</strong> Present creative works at school assembly or cultural event
                      </li>
                      <li>
                        <strong>Community Showcase:</strong> Share with local community groups or cultural organizations
                      </li>
                      <li>
                        <strong>Digital Documentation:</strong> Create video recordings for school website or social
                        media
                      </li>
                      <li>
                        <strong>Art Exhibition:</strong> Display visual arts in school gallery or community center
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-red-600">Further Development</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <strong>Collaborative Pieces:</strong> Combine different art forms into multimedia presentations
                      </li>
                      <li>
                        <strong>Historical Research:</strong> Deepen research into specific freedom fighters or events
                      </li>
                      <li>
                        <strong>Cultural Exchange:</strong> Share with students from other Caribbean countries
                      </li>
                      <li>
                        <strong>Mentorship:</strong> Work with local artists or cultural practitioners
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
