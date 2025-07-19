import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Clock, Users, Heart, CheckCircle, AlertCircle, Lightbulb, Megaphone } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function CommunityShowcasePage() {
  return (
    <div className="container mx-auto py-8">
      
      <Link href="/curriculum/grade6-subjects/social-studies/historical-cultural-thinking/activities">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Activities
        </Button>
      </Link>

      <div className="mb-8">
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-purple-700 flex items-center">
            <Heart className="mr-2 h-7 w-7 text-purple-600" />
            Community Engagement Showcase - Caribbean Unity in Action
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary" className="flex items-center">
              <Clock className="mr-1 h-3 w-3" />
              120 minutes
            </Badge>
            <Badge variant="secondary" className="flex items-center">
              <Users className="mr-1 h-3 w-3" />
              Groups of 6-8
            </Badge>
            <Badge variant="outline">Community Service & Cultural Awareness</Badge>
          </div>
          <p className="text-gray-700">
            Students design and present community engagement projects that promote Caribbean unity, cultural
            understanding, and social responsibility while addressing real community needs and celebrating regional
            diversity.
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
                <CardTitle className="flex items-center text-purple-700">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Learning Objectives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Develop civic responsibility and community awareness
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Design meaningful community service projects
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Promote Caribbean cultural unity and understanding
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Practice public speaking and presentation skills
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Understand the impact of collective action on social change
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Connect historical lessons to contemporary community needs
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-purple-700">
                  <Lightbulb className="mr-2 h-5 w-5" />
                  Project Categories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-purple-600">Cultural Preservation</h4>
                    <p className="text-sm text-gray-600">Documenting traditions, oral histories, cultural practices</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Educational Outreach</h4>
                    <p className="text-sm text-gray-600">Teaching programs, literacy support, cultural education</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Environmental Action</h4>
                    <p className="text-sm text-gray-600">Beach cleanups, conservation, sustainable practices</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Social Support</h4>
                    <p className="text-sm text-gray-600">Elder care, youth mentoring, community assistance</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Unity Building</h4>
                    <p className="text-sm text-gray-600">
                      Inter-cultural events, peace initiatives, collaboration projects
                    </p>
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
                <CardTitle className="text-purple-700">Step-by-Step Procedure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-purple-700 mb-2">
                      1. Project Introduction and Community Assessment (20 minutes)
                    </h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Discuss the concept of community engagement and civic responsibility</li>
                      <li>• Explore how Caribbean communities have historically supported each other</li>
                      <li>• Identify current community needs and challenges in the Caribbean region</li>
                      <li>• Form diverse groups representing different Caribbean countries/territories</li>
                      <li>• Introduce project categories and expectations</li>
                      <li>• Assign roles: Project Leader, Research Coordinator, Community Liaison, Presenter</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-blue-700 mb-2">
                      2. Community Needs Research and Project Design (40 minutes)
                    </h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Groups research specific community needs in their assigned region</li>
                      <li>• Identify target beneficiaries and community partners</li>
                      <li>• Design a comprehensive community engagement project</li>
                      <li>• Develop project goals, activities, and expected outcomes</li>
                      <li>• Consider cultural sensitivity and regional unity aspects</li>
                      <li>• Plan implementation timeline and resource requirements</li>
                      <li>• Create strategies for measuring project impact and success</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-green-700 mb-2">
                      3. Project Development and Presentation Preparation (40 minutes)
                    </h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Groups finalize their community engagement project plans</li>
                      <li>• Create visual presentations including posters, digital slides, or displays</li>
                      <li>• Develop promotional materials and community outreach strategies</li>
                      <li>• Practice presentation delivery and assign speaking roles</li>
                      <li>• Prepare to demonstrate project activities or showcase examples</li>
                      <li>• Create evaluation tools to assess project effectiveness</li>
                      <li>• Develop sustainability plans for long-term community impact</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-orange-700 mb-2">
                      4. Community Showcase Presentations (20 minutes)
                    </h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Groups present their community engagement projects to the class</li>
                      <li>• Demonstrate key project activities and community benefits</li>
                      <li>• Explain how their project promotes Caribbean unity and cultural understanding</li>
                      <li>• Share implementation strategies and community partnership plans</li>
                      <li>• Discuss potential challenges and solutions</li>
                      <li>• Receive feedback from classmates and teacher on project feasibility</li>
                      <li>• Vote on most impactful and innovative community projects</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-purple-700">
                  <Megaphone className="mr-2 h-5 w-5" />
                  Project Planning Framework
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-purple-600">Project Components</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Clear problem identification and community need</li>
                      <li>• Specific, measurable project goals and objectives</li>
                      <li>• Detailed activity plan with timeline</li>
                      <li>• Community partnership and collaboration strategy</li>
                      <li>• Resource requirements and budget planning</li>
                      <li>• Impact measurement and evaluation methods</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-purple-600">Cultural Unity Elements</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Cross-cultural collaboration opportunities</li>
                      <li>• Celebration of Caribbean diversity</li>
                      <li>• Shared values and common goals emphasis</li>
                      <li>• Inter-island cooperation and support</li>
                      <li>• Cultural exchange and learning components</li>
                      <li>• Regional solidarity and mutual aid aspects</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-purple-600">Implementation Strategy</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Community stakeholder engagement plan</li>
                      <li>• Volunteer recruitment and training</li>
                      <li>• Communication and outreach methods</li>
                      <li>• Risk management and contingency planning</li>
                      <li>• Progress monitoring and adjustment protocols</li>
                      <li>• Sustainability and long-term impact planning</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-purple-600">Presentation Elements</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Compelling project overview and rationale</li>
                      <li>• Visual aids and demonstration materials</li>
                      <li>• Community impact stories and testimonials</li>
                      <li>• Implementation timeline and milestones</li>
                      <li>• Call to action for community support</li>
                      <li>• Q&A preparation and audience engagement</li>
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
                <CardTitle className="text-purple-700">Required Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-purple-500" />
                    Project planning templates and worksheets
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-purple-500" />
                    Community needs assessment resources
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-purple-500" />
                    Large poster boards and presentation materials
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-purple-500" />
                    Art supplies for visual aids and displays
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-purple-500" />
                    Computers/tablets for research and presentation creation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-purple-500" />
                    Sample community project examples and case studies
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-purple-500" />
                    Evaluation rubrics and feedback forms
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-purple-500" />
                    Timer for presentation management
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-purple-700">Sample Project Ideas by Region</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-700 mb-2">Greater Antilles Projects</h4>
                    <p className="text-sm">
                      Hurricane preparedness education, elderly storytelling preservation, youth mentorship programs,
                      cultural heritage documentation, inter-island student exchange coordination.
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-700 mb-2">Lesser Antilles Projects</h4>
                    <p className="text-sm">
                      Marine conservation awareness, traditional craft workshops, tourism sustainability education,
                      small island solidarity networks, cultural festival coordination.
                    </p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-700 mb-2">Mainland Caribbean Projects</h4>
                    <p className="text-sm">
                      Indigenous culture preservation, rainforest conservation education, multicultural unity
                      celebrations, rural community support networks, sustainable agriculture promotion.
                    </p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h4 className="font-semibold text-yellow-700 mb-2">Regional Unity Projects</h4>
                    <p className="text-sm">
                      Caribbean diaspora connection programs, regional disaster relief coordination, cultural exchange
                      platforms, youth leadership development, peace and reconciliation initiatives.
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
                <CardTitle className="text-purple-700">Assessment Rubric</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-purple-50">
                        <th className="border border-gray-300 p-2 text-left">Criteria</th>
                        <th className="border border-gray-300 p-2 text-center">Excellent (4)</th>
                        <th className="border border-gray-300 p-2 text-center">Good (3)</th>
                        <th className="border border-gray-300 p-2 text-center">Satisfactory (2)</th>
                        <th className="border border-gray-300 p-2 text-center">Needs Improvement (1)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Community Impact</td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Project addresses significant community need with clear, measurable impact
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Project addresses relevant community need with good potential impact
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Project addresses basic community need with some impact
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Project has unclear community benefit or minimal impact
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Cultural Unity Promotion</td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Strongly promotes Caribbean unity with innovative cross-cultural elements
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Effectively promotes unity with good cultural integration
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Includes some unity elements with basic cultural awareness
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Limited unity promotion with minimal cultural consideration
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Project Planning & Feasibility</td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Comprehensive, realistic plan with detailed implementation strategy
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Well-planned project with good implementation details
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Basic planning with some implementation considerations
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Poor planning with unrealistic or unclear implementation
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Presentation Quality</td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Engaging, professional presentation with excellent visual aids
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Clear, well-organized presentation with good visual support
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Adequate presentation with basic visual aids
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Poor presentation with minimal or ineffective visual aids
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Collaboration & Teamwork</td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Exceptional teamwork with all members contributing meaningfully
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Good teamwork with most members participating effectively
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Adequate teamwork with some uneven participation
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">Poor teamwork with minimal collaboration</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-purple-700">
                  <AlertCircle className="mr-2 h-5 w-5" />
                  Extension Activities & Real Implementation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-purple-600">Individual Extensions</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <strong>Community Leader Interview:</strong> Interview local community leaders about their work
                      </li>
                      <li>
                        <strong>Volunteer Experience:</strong> Participate in actual community service activities
                      </li>
                      <li>
                        <strong>Project Implementation:</strong> Implement a small-scale version of their project
                      </li>
                      <li>
                        <strong>Impact Documentation:</strong> Create a documentary about community engagement
                      </li>
                      <li>
                        <strong>Regional Research:</strong> Study successful community projects across the Caribbean
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-purple-600">Class Extensions</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <strong>School Implementation:</strong> Implement selected projects within the school community
                      </li>
                      <li>
                        <strong>Community Partnership:</strong> Partner with local organizations for real projects
                      </li>
                      <li>
                        <strong>Regional Collaboration:</strong> Connect with schools in other Caribbean countries
                      </li>
                      <li>
                        <strong>Annual Showcase:</strong> Create an annual community engagement fair
                      </li>
                      <li>
                        <strong>Mentorship Program:</strong> Establish ongoing community mentorship relationships
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-purple-700">Reflection Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-700 mb-2">Personal Reflection</h4>
                    <ul className="text-sm space-y-1">
                      <li>• How did this project change your understanding of community responsibility?</li>
                      <li>• What skills did you develop through planning and presenting your project?</li>
                      <li>• How can you personally contribute to Caribbean unity and community development?</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-700 mb-2">Community Connection</h4>
                    <ul className="text-sm space-y-1">
                      <li>• What community needs surprised you during your research?</li>
                      <li>• How do community challenges connect across different Caribbean countries?</li>
                      <li>• What role can young people play in addressing community issues?</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-700 mb-2">Regional Unity</h4>
                    <ul className="text-sm space-y-1">
                      <li>• How can community projects promote understanding between Caribbean nations?</li>
                      <li>• What shared values unite Caribbean communities despite their differences?</li>
                      <li>• How might regional cooperation strengthen individual communities?</li>
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
