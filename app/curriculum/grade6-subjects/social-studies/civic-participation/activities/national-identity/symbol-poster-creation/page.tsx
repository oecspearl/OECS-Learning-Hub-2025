"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Target, CheckCircle, Star } from "lucide-react"
import { ImageIcon } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function SymbolPosterCreationPage() {
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
          { label: "Symbol Poster Creation", href: "#" },
        ]}
      />

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-purple-100 p-3 rounded-full">
            <ImageIcon className="h-8 w-8 text-purple-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">National Symbol Poster Creation and Analysis</h1>
            <p className="text-lg text-gray-600">Activity 3: National Identity Strand</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            75 minutes
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            Individual Work
          </Badge>
          <Badge variant="outline">Research</Badge>
          <Badge variant="outline">Art & Design</Badge>
          <Badge variant="outline">Analysis</Badge>
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
                  <span>Students will research the history and significance of national symbols</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Students will analyze the symbolic meaning behind national emblems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Students will create visually appealing and informative presentations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Students will understand how symbols contribute to national identity</span>
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
                  <li>• Research materials and books</li>
                  <li>• Poster board (various sizes)</li>
                  <li>• Art supplies (markers, colored pencils, paints)</li>
                  <li>• Computers/tablets for research</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Printed images of national symbols</li>
                  <li>• Glue sticks and scissors</li>
                  <li>• Rulers and measuring tools</li>
                  <li>• Gallery walk materials</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>National Symbols to Research</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-center">
                  <h4 className="font-semibold text-blue-800">National Flag</h4>
                  <p className="text-xs text-blue-600">Colors, design, history</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg text-center">
                  <h4 className="font-semibold text-green-800">Coat of Arms</h4>
                  <p className="text-xs text-green-600">Elements, symbolism</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg text-center">
                  <h4 className="font-semibold text-yellow-800">National Bird</h4>
                  <p className="text-xs text-yellow-600">Species, significance</p>
                </div>
                <div className="p-3 bg-red-50 rounded-lg text-center">
                  <h4 className="font-semibold text-red-800">National Tree</h4>
                  <p className="text-xs text-red-600">Type, cultural importance</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg text-center">
                  <h4 className="font-semibold text-purple-800">National Flower</h4>
                  <p className="text-xs text-purple-600">Species, meaning</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg text-center">
                  <h4 className="font-semibold text-orange-800">National Anthem</h4>
                  <p className="text-xs text-orange-600">History, composer</p>
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
                <h4 className="font-semibold text-lg mb-3 text-blue-600">Symbol Assignment (10 minutes)</h4>
                <ul className="space-y-2 ml-4">
                  <li>• Individual students receive assigned national symbol</li>
                  <li>• Provide research guidelines and expectations</li>
                  <li>• Explain poster requirements and assessment criteria</li>
                  <li>• Distribute research templates and planning sheets</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3 text-blue-600">Research Phase (35 minutes)</h4>
                <p className="mb-3">Students research their assigned symbol using multiple sources:</p>
                <ul className="space-y-2 ml-4">
                  <li>
                    • <strong>Visual representation:</strong> High-quality images and accurate depictions
                  </li>
                  <li>
                    • <strong>Brief history:</strong> When and why the symbol was adopted
                  </li>
                  <li>
                    • <strong>Symbolic meaning:</strong> What each element represents
                  </li>
                  <li>
                    • <strong>National identity connection:</strong> How it influences national pride
                  </li>
                  <li>
                    • <strong>Interesting facts:</strong> Unique stories or lesser-known information
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3 text-blue-600">Poster Creation (25 minutes)</h4>
                <ul className="space-y-2 ml-4">
                  <li>• Create visually appealing poster including all research elements</li>
                  <li>• Encourage creative design and clear organization</li>
                  <li>• Include both text and visual elements</li>
                  <li>• Ensure factual accuracy and proper source citation</li>
                  <li>• Use color and design to enhance understanding</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3 text-blue-600">Symbol Gallery Walk (5 minutes)</h4>
                <ul className="space-y-2 ml-4">
                  <li>• Display posters around classroom</li>
                  <li>• Students view and appreciate others' work</li>
                  <li>• Identify connections between different symbols</li>
                  <li>• Complete gallery walk reflection sheet</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Poster Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Content Requirements:</h4>
                    <ul className="space-y-1 ml-4 text-sm">
                      <li>• Large, clear visual of the symbol</li>
                      <li>• Historical timeline of symbol's development</li>
                      <li>• Explanation of symbolic meaning</li>
                      <li>• Connection to national identity</li>
                      <li>• Interesting facts or stories</li>
                      <li>• Proper source citations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Design Requirements:</h4>
                    <ul className="space-y-1 ml-4 text-sm">
                      <li>• Creative and visually appealing layout</li>
                      <li>• Clear, readable text</li>
                      <li>• Appropriate use of color</li>
                      <li>• Proper spelling and grammar</li>
                      <li>• Organized information flow</li>
                      <li>• Professional appearance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Assessment Rubric</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Research Quality (25 points):</h4>
                    <ul className="space-y-1 ml-4 text-sm">
                      <li>• Accuracy of information (5 pts)</li>
                      <li>• Depth of research (5 pts)</li>
                      <li>• Use of multiple sources (5 pts)</li>
                      <li>• Historical context (5 pts)</li>
                      <li>• Symbolic analysis (5 pts)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Visual Design (25 points):</h4>
                    <ul className="space-y-1 ml-4 text-sm">
                      <li>• Creative layout (5 pts)</li>
                      <li>• Visual appeal (5 pts)</li>
                      <li>• Organization (5 pts)</li>
                      <li>• Use of color (5 pts)</li>
                      <li>• Professional appearance (5 pts)</li>
                    </ul>
                  </div>
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
                  <p className="text-sm text-gray-600">
                    Research evolution of symbols over time, compare with other nations
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Struggling Learners:</h4>
                  <p className="text-sm text-gray-600">Provide research templates, simplified sources, peer support</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">ELL Students:</h4>
                  <p className="text-sm text-gray-600">Visual vocabulary support, bilingual resources when available</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Artistic Learners:</h4>
                  <p className="text-sm text-gray-600">Emphasize creative design elements, artistic interpretation</p>
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
                <li>• Create digital versions using Canva or similar tools</li>
                <li>• Share on school social media or website</li>
                <li>• Create class book of national symbols</li>
                <li>• Design new symbols for school or community</li>
                <li>• Compare symbols with other Caribbean nations</li>
                <li>• Create 3D models of symbols</li>
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
                <li>• Create digital posters using design software</li>
                <li>• QR codes linking to additional resources</li>
                <li>• Virtual gallery walk using digital platforms</li>
                <li>• Video presentations of poster content</li>
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
                  <strong>Art:</strong> Design principles, color theory, visual composition
                </li>
                <li>
                  <strong>Language Arts:</strong> Research skills, writing, presentation
                </li>
                <li>
                  <strong>History:</strong> Historical context and timeline creation
                </li>
                <li>
                  <strong>Geography:</strong> Spatial understanding of national boundaries
                </li>
                <li>
                  <strong>Science:</strong> Biology of national flora and fauna
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community Connections</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Display posters in school lobby or community center</li>
                <li>• Share with local government officials</li>
                <li>• Present to younger classes</li>
                <li>• Include in school newsletter or website</li>
                <li>• Create traveling exhibit for community events</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
