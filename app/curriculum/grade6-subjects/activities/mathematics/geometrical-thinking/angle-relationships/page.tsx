"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/breadcrumb"
import { Clock, Users, Target, BookOpen, Lightbulb, CheckCircle } from "lucide-react"

export default function AngleRelationshipInvestigationPage() {
  const breadcrumbItems = [
    { label: "Curriculum", href: "/curriculum" },
    { label: "Grade 6", href: "/curriculum/grade6-subjects" },
    { label: "Mathematics", href: "/curriculum/grade6-subjects/mathematics" },
    { label: "Geometrical Thinking", href: "/curriculum/grade6-subjects/mathematics/geometrical-thinking" },
    { label: "Activities", href: "/curriculum/grade6-subjects/activities/mathematics/geometrical-thinking" },
    {
      label: "Angle Relationship Investigation",
      href: "/curriculum/grade6-subjects/activities/mathematics/geometrical-thinking/angle-relationship-investigation",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Angle Relationship Investigation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Students discover and explore various angle relationships through hands-on investigation, developing
            understanding of complementary, supplementary, vertical, and adjacent angles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="flex items-center p-4">
              <Clock className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Duration</p>
                <p className="font-semibold">80 minutes</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-4">
              <Users className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Group Size</p>
                <p className="font-semibold">2-4 students</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-4">
              <Target className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Grade Level</p>
                <p className="font-semibold">Grade 6</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-4">
              <BookOpen className="h-8 w-8 text-orange-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Subject</p>
                <p className="font-semibold">Mathematics</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="mr-2" />
              Learning Outcomes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Students will be able to:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Identify and classify different types of angle relationships</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Calculate unknown angles using angle relationships</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Apply angle relationship properties to solve problems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Use mathematical reasoning to justify angle calculations</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Curriculum Standards:</h4>
                <div className="space-y-2">
                  <Badge variant="outline">G2.1 - Angle Relationships</Badge>
                  <Badge variant="outline">G2.2 - Angle Measurement</Badge>
                  <Badge variant="outline">G1.3 - Geometric Reasoning</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Materials Needed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Physical Materials:</h4>
                <ul className="space-y-1">
                  <li>• Protractors and angle rulers</li>
                  <li>• Angle investigation worksheets</li>
                  <li>• Scissors and paper strips</li>
                  <li>• Colored pencils/markers</li>
                  <li>• Angle manipulatives</li>
                  <li>• Straight edges and rulers</li>
                  <li>• Angle finder tools</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Digital Tools:</h4>
                <ul className="space-y-1">
                  <li>• GeoGebra angle activities</li>
                  <li>• Digital protractor apps</li>
                  <li>• Interactive angle games</li>
                  <li>• Geometry software</li>
                  <li>• Online angle calculators</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Activity Instructions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-3">Phase 1: Angle Relationship Discovery (25 minutes)</h4>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <ol className="space-y-2">
                    <li>
                      <strong>1.</strong> Create intersecting lines and measure all angles formed
                    </li>
                    <li>
                      <strong>2.</strong> Discover vertical angle relationships through measurement
                    </li>
                    <li>
                      <strong>3.</strong> Investigate adjacent angles on a straight line
                    </li>
                    <li>
                      <strong>4.</strong> Record observations about angle sums and relationships
                    </li>
                  </ol>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">
                  Phase 2: Complementary and Supplementary Angles (20 minutes)
                </h4>
                <div className="bg-green-50 p-4 rounded-lg">
                  <ol className="space-y-2">
                    <li>
                      <strong>1.</strong> Use paper folding to create right angles
                    </li>
                    <li>
                      <strong>2.</strong> Find angle pairs that sum to 90° (complementary)
                    </li>
                    <li>
                      <strong>3.</strong> Identify angle pairs that sum to 180° (supplementary)
                    </li>
                    <li>
                      <strong>4.</strong> Create angle relationship charts and examples
                    </li>
                  </ol>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">Phase 3: Problem-Solving Applications (25 minutes)</h4>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <ol className="space-y-2">
                    <li>
                      <strong>1.</strong> Solve for unknown angles using relationship properties
                    </li>
                    <li>
                      <strong>2.</strong> Work through real-world angle problems
                    </li>
                    <li>
                      <strong>3.</strong> Create and solve angle puzzles for other teams
                    </li>
                    <li>
                      <strong>4.</strong> Verify solutions using multiple methods
                    </li>
                  </ol>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">Phase 4: Angle Relationship Gallery Walk (10 minutes)</h4>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <ol className="space-y-2">
                    <li>
                      <strong>1.</strong> Display team findings and problem solutions
                    </li>
                    <li>
                      <strong>2.</strong> Peer review and feedback on angle calculations
                    </li>
                    <li>
                      <strong>3.</strong> Discuss different problem-solving strategies
                    </li>
                    <li>
                      <strong>4.</strong> Consolidate learning about angle relationships
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Assessment Strategies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Formative Assessment:</h4>
                <ul className="space-y-2">
                  <li>• Accuracy of angle measurements</li>
                  <li>• Understanding of angle relationships</li>
                  <li>• Problem-solving strategies used</li>
                  <li>• Mathematical reasoning quality</li>
                  <li>• Collaboration and communication</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Summative Assessment:</h4>
                <ul className="space-y-2">
                  <li>• Completed investigation worksheets</li>
                  <li>• Angle calculation accuracy</li>
                  <li>• Problem-solving portfolio</li>
                  <li>• Explanation of reasoning</li>
                  <li>• Application to new situations</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lightbulb className="mr-2" />
              Differentiation & Extensions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Support Strategies:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Angle relationship reference cards</li>
                  <li>• Guided measurement templates</li>
                  <li>• Visual angle models</li>
                  <li>• Step-by-step calculation guides</li>
                  <li>• Digital angle tools</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Challenge Extensions:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Complex multi-step angle problems</li>
                  <li>• Angle relationships in polygons</li>
                  <li>• Parallel line angle theorems</li>
                  <li>• Geometric proof writing</li>
                  <li>• Real-world engineering applications</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Real-World Connections:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Architecture and construction</li>
                  <li>• Navigation and surveying</li>
                  <li>• Art and design angles</li>
                  <li>• Sports and recreation</li>
                  <li>• Caribbean building techniques</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
