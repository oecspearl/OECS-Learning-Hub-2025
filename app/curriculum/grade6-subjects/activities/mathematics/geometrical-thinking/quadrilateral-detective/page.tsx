"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/breadcrumb"
import { Clock, Users, Target, BookOpen, Lightbulb, CheckCircle } from "lucide-react"

export default function QuadrilateralPropertyDetectivePage() {
  const breadcrumbItems = [
    { label: "Curriculum", href: "/curriculum" },
    { label: "Grade 6", href: "/curriculum/grade6-subjects" },
    { label: "Mathematics", href: "/curriculum/grade6-subjects/mathematics" },
    { label: "Geometrical Thinking", href: "/curriculum/grade6-subjects/mathematics/geometrical-thinking" },
    { label: "Activities", href: "/curriculum/grade6-subjects/activities/mathematics/geometrical-thinking" },
    {
      label: "Quadrilateral Property Detective",
      href: "/curriculum/grade6-subjects/activities/mathematics/geometrical-thinking/quadrilateral-property-detective",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Quadrilateral Property Detective</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Students become mathematical detectives, investigating and discovering the unique properties that define
            different types of quadrilaterals through hands-on exploration and logical reasoning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="flex items-center p-4">
              <Clock className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Duration</p>
                <p className="font-semibold">90 minutes</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-4">
              <Users className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Group Size</p>
                <p className="font-semibold">3-4 students</p>
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
                    <span>Identify and classify quadrilaterals based on their properties</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Analyze relationships between different types of quadrilaterals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Use mathematical vocabulary to describe geometric properties</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Apply logical reasoning to solve geometric problems</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Curriculum Standards:</h4>
                <div className="space-y-2">
                  <Badge variant="outline">G1.1 - Spatial Sense and Visualization</Badge>
                  <Badge variant="outline">G2.2 - Properties of 2D Shapes</Badge>
                  <Badge variant="outline">G2.3 - Classification of Polygons</Badge>
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
                  <li>• Quadrilateral shape sets (various types)</li>
                  <li>• Rulers and protractors</li>
                  <li>• Detective notebooks</li>
                  <li>• Property investigation sheets</li>
                  <li>• Colored pencils/markers</li>
                  <li>• Magnifying glasses (optional)</li>
                  <li>• Geoboards and rubber bands</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Digital Tools:</h4>
                <ul className="space-y-1">
                  <li>• GeoGebra or similar geometry software</li>
                  <li>• Digital measuring tools</li>
                  <li>• Interactive whiteboard</li>
                  <li>• Tablets/computers for research</li>
                  <li>• Online quadrilateral games</li>
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
                <h4 className="font-semibold text-lg mb-3">Phase 1: Detective Briefing (15 minutes)</h4>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <ol className="space-y-2">
                    <li>
                      <strong>1.</strong> Introduce the "Quadrilateral Mystery" - shapes have been mixed up and need
                      proper classification
                    </li>
                    <li>
                      <strong>2.</strong> Distribute detective badges and investigation notebooks
                    </li>
                    <li>
                      <strong>3.</strong> Review key vocabulary: parallel, perpendicular, congruent, angle measures
                    </li>
                    <li>
                      <strong>4.</strong> Demonstrate proper use of measuring tools
                    </li>
                  </ol>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">Phase 2: Evidence Collection (30 minutes)</h4>
                <div className="bg-green-50 p-4 rounded-lg">
                  <ol className="space-y-2">
                    <li>
                      <strong>1.</strong> Teams receive mystery quadrilateral sets
                    </li>
                    <li>
                      <strong>2.</strong> Students measure sides, angles, and diagonals
                    </li>
                    <li>
                      <strong>3.</strong> Record findings in detective notebooks using evidence sheets
                    </li>
                    <li>
                      <strong>4.</strong> Test for parallel sides using various methods
                    </li>
                    <li>
                      <strong>5.</strong> Check for right angles and equal sides
                    </li>
                  </ol>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">Phase 3: Pattern Analysis (25 minutes)</h4>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <ol className="space-y-2">
                    <li>
                      <strong>1.</strong> Groups organize their evidence into categories
                    </li>
                    <li>
                      <strong>2.</strong> Create classification charts based on properties
                    </li>
                    <li>
                      <strong>3.</strong> Identify relationships between different quadrilateral families
                    </li>
                    <li>
                      <strong>4.</strong> Develop "property profiles" for each type
                    </li>
                  </ol>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">Phase 4: Case Presentation (20 minutes)</h4>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <ol className="space-y-2">
                    <li>
                      <strong>1.</strong> Teams present their classification findings
                    </li>
                    <li>
                      <strong>2.</strong> Explain reasoning using mathematical evidence
                    </li>
                    <li>
                      <strong>3.</strong> Challenge other teams' classifications respectfully
                    </li>
                    <li>
                      <strong>4.</strong> Create class consensus on quadrilateral family tree
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
                  <li>• Observation of measurement techniques</li>
                  <li>• Quality of evidence recording</li>
                  <li>• Mathematical vocabulary usage</li>
                  <li>• Collaboration and communication skills</li>
                  <li>• Problem-solving approaches</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Summative Assessment:</h4>
                <ul className="space-y-2">
                  <li>• Completed detective notebooks</li>
                  <li>• Classification accuracy</li>
                  <li>• Presentation quality and reasoning</li>
                  <li>• Understanding of property relationships</li>
                  <li>• Application to new problems</li>
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
                  <li>• Pre-cut shape templates</li>
                  <li>• Guided measurement worksheets</li>
                  <li>• Visual property reference cards</li>
                  <li>• Peer support partnerships</li>
                  <li>• Digital measuring tools</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Challenge Extensions:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Investigate irregular quadrilaterals</li>
                  <li>• Create quadrilateral family trees</li>
                  <li>• Design new classification systems</li>
                  <li>• Research historical mathematicians</li>
                  <li>• Explore 3D quadrilateral faces</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Real-World Connections:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Caribbean architecture analysis</li>
                  <li>• Traditional craft patterns</li>
                  <li>• Sports field layouts</li>
                  <li>• Art and design applications</li>
                  <li>• Engineering structures</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
