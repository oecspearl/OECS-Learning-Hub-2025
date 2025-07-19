"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Target, CheckCircle, Star, RotateCcw } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function ResearchCarouselPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Curriculum", href: "/curriculum" },
          { label: "Grade 6", href: "/curriculum/grade6-subjects" },
          { label: "Social Studies", href: "/curriculum/grade6-subjects/social-studies" },
          { label: "Civic Participation", href: "/curriculum/grade6-subjects/social-studies/civic-participation" },
          { label: "Activities", href: "/curriculum/grade6-subjects/social-studies/civic-participation/activities" },
          {
            label: "National Identity",
            href: "/curriculum/grade6-subjects/social-studies/civic-participation/activities/national-identity",
          },
          { label: "Research Carousel", href: "#" },
        ]}
      />

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-green-100 p-3 rounded-full">
            <RotateCcw className="h-8 w-8 text-green-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">National Identity Research Carousel</h1>
            <p className="text-lg text-gray-600">Activity 2: National Identity Strand</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            90 minutes (extended)
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            Groups of 4
          </Badge>
          <Badge variant="outline">Research</Badge>
          <Badge variant="outline">Collaboration</Badge>
          <Badge variant="outline">Presentation</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Learning Objectives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Students will research and analyze multiple components of national identity</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Students will collaborate effectively in research teams</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Students will create and deliver engaging presentations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Students will understand the diversity and richness of national identity</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Materials Needed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li>• Laptops/tablets for research</li>
                  <li>• Poster paper and art supplies</li>
                  <li>• Research station materials</li>
                  <li>• Presentation equipment</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Timer for rotations</li>
                  <li>• Station instruction cards</li>
                  <li>• Gallery walk materials</li>
                  <li>• Feedback forms</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Research Stations Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Station 1: National Symbols</h4>
                    <p className="text-sm text-blue-600">
                      Research national bird, tree, flower, flag, coat of arms and their significance
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800">Station 2: Cultural Festivals</h4>
                    <p className="text-sm text-green-600">
                      Identify festivals reflecting cultural diversity and their origins
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800">Station 3: Languages</h4>
                    <p className="text-sm text-purple-600">
                      Investigate origin of country's languages and their role in identity
                    </p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-800">Station 4: Historical Heroes</h4>
                    <p className="text-sm text-orange-600">
                      Research freedom fighters and their contributions to the nation
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-red-800">Station 5: Geography</h4>
                    <p className="text-sm text-red-600">Explore how diverse landscapes influence national identity</p>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-800">Station 6: Sports Heroes</h4>
                    <p className="text-sm text-yellow-600">
                      Research current athletes showcasing national unity and pride
                    </p>
                  </div>
                  <div className="p-4 bg-indigo-50 rounded-lg">
                    <h4 className="font-semibold text-indigo-800">Station 7: Political Systems</h4>
                    <p className="text-sm text-indigo-600">Explore government structure and leadership roles</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Detailed Procedure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-3 text-blue-600">Station Setup (10 minutes)</h4>
                <ul className="space-y-2 ml-4">
                  <li>• Create 7 research stations around classroom</li>
                  <li>• Provide specific research materials and guidelines at each station</li>
                  <li>• Set up technology access points</li>
                  <li>• Prepare rotation schedule and timer</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3 text-blue-600">Group Rotation Research (60 minutes)</h4>
                <ul className="space-y-2 ml-4">
                  <li>• Groups of 4 students rotate through stations (8 minutes each)</li>
                  <li>• Each station has specific research focus and activities</li>
                  <li>• Students take notes and gather materials for presentations</li>
                  <li>• Teacher circulates to provide guidance and support</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3 text-blue-600">Presentation Preparation (15 minutes)</h4>
                <ul className="space-y-2 ml-4">
                  <li>• Groups choose their strongest research area</li>
                  <li>• Prepare 3-minute presentations using various formats:</li>
                  <li className="ml-4">- PowerPoint/digital presentation</li>
                  <li className="ml-4">- Poster presentation</li>
                  <li className="ml-4">- Role-play demonstration</li>
                  <li className="ml-4">- Brochure creation</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3 text-blue-600">Gallery Walk and Sharing (5 minutes)</h4>
                <ul className="space-y-2 ml-4">
                  <li>• Quick rotation to view all group work</li>
                  <li>• Leave positive feedback notes</li>
                  <li>• Identify connections between different aspects of national identity</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Assessment Strategies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Research Quality Assessment:</h4>
                  <ul className="space-y-1 ml-4">
                    <li>• Accuracy of information gathered</li>
                    <li>• Use of multiple reliable sources</li>
                    <li>• Depth of understanding demonstrated</li>
                    <li>• Connection to national identity themes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Collaboration Assessment:</h4>
                  <ul className="space-y-1 ml-4">
                    <li>• Effective teamwork during rotations</li>
                    <li>• Equal participation in research tasks</li>
                    <li>• Respectful interaction with peers</li>
                    <li>• Shared responsibility for final product</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Presentation Assessment:</h4>
                  <ul className="space-y-1 ml-4">
                    <li>• Creativity and engagement in presentation format</li>
                    <li>• Clear communication of key findings</li>
                    <li>• Visual appeal and organization</li>
                    <li>• Understanding of national identity components</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Differentiation Strategies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm">Advanced Learners:</h4>
                  <p className="text-sm text-gray-600">Research historical context and evolution of national symbols</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Struggling Readers:</h4>
                  <p className="text-sm text-gray-600">Provide visual resources and simplified text materials</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">ELL Students:</h4>
                  <p className="text-sm text-gray-600">Pair with strong English speakers, provide vocabulary support</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Kinesthetic Learners:</h4>
                  <p className="text-sm text-gray-600">Include hands-on activities and movement between stations</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Extension Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Create a national identity museum exhibit</li>
                <li>• Interview community elders about cultural traditions</li>
                <li>• Design a new national symbol with justification</li>
                <li>• Compare national identity elements with other Caribbean nations</li>
                <li>• Create a digital timeline of national identity development</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technology Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Digital research using government websites</li>
                <li>• Create presentations using Canva or PowerPoint</li>
                <li>• Record video presentations using Flipgrid</li>
                <li>• Use QR codes for station resources</li>
                <li>• Digital gallery walk using Padlet</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cross-Curricular Connections</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>
                  <strong>Language Arts:</strong> Research and presentation skills
                </li>
                <li>
                  <strong>Art:</strong> Visual design and creative expression
                </li>
                <li>
                  <strong>Geography:</strong> Mapping and spatial understanding
                </li>
                <li>
                  <strong>History:</strong> Historical context and timeline creation
                </li>
                <li>
                  <strong>Technology:</strong> Digital literacy and presentation tools
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
