import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Clock, Users, Palette, CheckCircle, AlertCircle, Lightbulb, ImageIcon } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function CulturalCollagePage() {
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
            <Palette className="mr-2 h-7 w-7 text-orange-600" />
            Cultural Influence Collage - East Indian Heritage
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary" className="flex items-center">
              <Clock className="mr-1 h-3 w-3" />
              75 minutes
            </Badge>
            <Badge variant="secondary" className="flex items-center">
              <Users className="mr-1 h-3 w-3" />
              Small Groups
            </Badge>
            <Badge variant="outline">Visual Arts & Research</Badge>
          </div>
          <p className="text-gray-700">
            Students research and create visual collages showcasing East Indian cultural influences in Caribbean
            clothing, food, music, and religious practices, fostering cultural appreciation.
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
                    Research East Indian cultural contributions to Caribbean society
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Create visual representations of cultural influences
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Develop appreciation for cultural diversity and fusion
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Practice collaborative research and artistic skills
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Present findings through creative visual display
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-orange-700">
                  <Lightbulb className="mr-2 h-5 w-5" />
                  Cultural Areas to Explore
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-orange-600">Food & Cuisine</h4>
                    <p className="text-sm text-gray-600">Curry, roti, doubles, channa, rice dishes, spices</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600">Clothing & Fashion</h4>
                    <p className="text-sm text-gray-600">Sari, dhoti, jewelry, traditional patterns, modern fusion</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600">Music & Dance</h4>
                    <p className="text-sm text-gray-600">Chutney, tassa drums, classical dance, Bollywood influence</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600">Religious Practices</h4>
                    <p className="text-sm text-gray-600">Hinduism, temples, festivals like Divali, Phagwah</p>
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
                    <h3 className="font-semibold text-orange-700 mb-2">
                      1. Introduction and Group Formation (10 minutes)
                    </h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Discuss the concept of cultural influence and fusion</li>
                      <li>• Show examples of how cultures blend and adapt in new environments</li>
                      <li>• Form groups of 4-5 students with mixed abilities</li>
                      <li>• Assign each group one cultural area to focus on</li>
                      <li>• Explain collage creation process and expectations</li>
                      <li>• Distribute research guidelines and materials</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-blue-700 mb-2">2. Research Phase (25 minutes)</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Groups research their assigned cultural area using multiple sources</li>
                      <li>• Focus on specific examples of East Indian influence in Caribbean</li>
                      <li>• Gather information about:</li>
                      <li className="ml-4">- Traditional practices brought from India</li>
                      <li className="ml-4">- How practices adapted to Caribbean environment</li>
                      <li className="ml-4">- Modern examples of cultural fusion</li>
                      <li className="ml-4">- Impact on broader Caribbean culture</li>
                      <li>• Collect images, quotes, and interesting facts</li>
                      <li>• Take notes for collage captions and presentations</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-green-700 mb-2">3. Collage Creation (30 minutes)</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Groups design and create their cultural influence collages</li>
                      <li>• Use variety of materials: photos, drawings, fabric, text</li>
                      <li>• Organize collage to show progression and influence</li>
                      <li>• Include before/after or traditional/modern comparisons</li>
                      <li>• Add informative captions and explanations</li>
                      <li>• Ensure visual appeal and clear organization</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-purple-700 mb-2">
                      4. Gallery Walk and Presentations (10 minutes)
                    </h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Groups display collages around classroom</li>
                      <li>• Conduct gallery walk with structured viewing</li>
                      <li>• Each group gives 2-minute presentation about their collage</li>
                      <li>• Audience asks questions and provides feedback</li>
                      <li>• Discuss connections between different cultural areas</li>
                      <li>• Reflect on the richness of cultural diversity</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-orange-700">
                  <ImageIcon className="mr-2 h-5 w-5" />
                  Collage Design Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-orange-600">Visual Elements</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Use vibrant colors reflecting Indian and Caribbean cultures</li>
                      <li>• Include authentic photographs and illustrations</li>
                      <li>• Show progression from traditional to modern</li>
                      <li>• Use symbols and patterns from both cultures</li>
                      <li>• Create visual hierarchy with size and placement</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-orange-600">Content Requirements</h4>
                    <ul className="text-sm space-y-1">
                      <li>• At least 5 specific examples of cultural influence</li>
                      <li>• Clear captions explaining each element</li>
                      <li>• Title that captures the cultural area focus</li>
                      <li>• Mix of historical and contemporary examples</li>
                      <li>• Evidence of research through accurate information</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-orange-600">Organization</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Logical flow from one element to another</li>
                      <li>• Balance between images and text</li>
                      <li>• Clear sections for different aspects</li>
                      <li>• Effective use of space and layout</li>
                      <li>• Professional appearance and presentation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-orange-600">Cultural Sensitivity</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Respectful representation of cultural practices</li>
                      <li>• Accurate information without stereotypes</li>
                      <li>• Celebration of diversity and fusion</li>
                      <li>• Acknowledgment of cultural contributions</li>
                      <li>• Appropriate language and terminology</li>
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
                    Large poster boards or bristol board
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Magazines, newspapers, printed images
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Colored markers, pencils, and pens
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Glue sticks and scissors
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Fabric scraps and decorative materials
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Computers/tablets for research
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Research resource packets
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-orange-700">Cultural Area Assignments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-700 mb-2">Group 1: Food & Cuisine</h4>
                    <p className="text-sm">
                      Research curry dishes, roti varieties, doubles, channa, rice preparations, spice usage, street
                      food culture, and fusion cooking in Caribbean cuisine.
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-700 mb-2">Group 2: Clothing & Fashion</h4>
                    <p className="text-sm">
                      Explore traditional garments like sari and dhoti, jewelry styles, fabric patterns, modern fashion
                      fusion, and influence on Caribbean formal wear.
                    </p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-700 mb-2">Group 3: Music & Dance</h4>
                    <p className="text-sm">
                      Investigate chutney music, tassa drumming, classical Indian dance forms, Bollywood influence, and
                      fusion with Caribbean musical styles.
                    </p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-700 mb-2">Group 4: Religious Practices</h4>
                    <p className="text-sm">
                      Study Hindu temples, festivals like Divali and Phagwah, religious ceremonies, adaptation of
                      practices, and integration with Caribbean spiritual life.
                    </p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h4 className="font-semibold text-yellow-700 mb-2">Group 5: Language & Literature</h4>
                    <p className="text-sm">
                      Examine Hindi/Tamil language preservation, storytelling traditions, literature contributions, and
                      linguistic influence on Caribbean dialects.
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
                        <td className="border border-gray-300 p-2 font-medium">Research Quality</td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Thorough research with accurate, detailed information from multiple sources
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Good research with relevant information from several sources
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Basic research with some relevant information
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Limited research with minimal or inaccurate information
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Visual Design</td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Creative, well-organized collage with excellent visual appeal
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Good visual design with clear organization
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Adequate visual design with basic organization
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Poor visual design with unclear organization
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Cultural Understanding</td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Demonstrates deep understanding of cultural influences and fusion
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Shows good understanding of cultural contributions
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Shows basic understanding of cultural elements
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Limited understanding of cultural significance
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
                        <strong>Family Heritage Project:</strong> Research own family's cultural contributions and
                        influences
                      </li>
                      <li>
                        <strong>Recipe Collection:</strong> Gather and test traditional East Indian Caribbean recipes
                      </li>
                      <li>
                        <strong>Interview Project:</strong> Interview community elders about cultural preservation
                      </li>
                      <li>
                        <strong>Festival Research:</strong> Deep dive into specific festivals and their Caribbean
                        adaptations
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-orange-600">Class Extensions</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <strong>Cultural Fair:</strong> Organize school event showcasing East Indian Caribbean culture
                      </li>
                      <li>
                        <strong>Community Exhibition:</strong> Display collages at local cultural center or library
                      </li>
                      <li>
                        <strong>Digital Museum:</strong> Create online exhibition of cultural influences
                      </li>
                      <li>
                        <strong>Cross-Cultural Study:</strong> Compare with other cultural influences in Caribbean
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-orange-700">Reflection and Discussion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-700 mb-2">Cultural Appreciation</h4>
                    <ul className="text-sm space-y-1">
                      <li>• How has East Indian culture enriched Caribbean society?</li>
                      <li>• What examples of cultural fusion did you find most interesting?</li>
                      <li>• How do cultures adapt while preserving their core identity?</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-700 mb-2">Modern Connections</h4>
                    <ul className="text-sm space-y-1">
                      <li>• How do you see East Indian influences in your daily life?</li>
                      <li>• What role does cultural diversity play in Caribbean identity?</li>
                      <li>• How can we continue to celebrate and preserve cultural heritage?</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-700 mb-2">Learning Process</h4>
                    <ul className="text-sm space-y-1">
                      <li>• What was most challenging about creating your collage?</li>
                      <li>• How did working in a group enhance your understanding?</li>
                      <li>• What would you like to learn more about regarding this topic?</li>
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
