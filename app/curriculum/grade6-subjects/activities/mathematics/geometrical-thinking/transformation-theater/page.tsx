"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/breadcrumb"
import { Clock, Users, Target, BookOpen, Lightbulb, CheckCircle } from "lucide-react"

export default function TransformationTheaterPage() {
  const breadcrumbItems = [
    { label: "Curriculum", href: "/curriculum" },
    { label: "Grade 6", href: "/curriculum/grade6-subjects" },
    { label: "Mathematics", href: "/curriculum/grade6-subjects/mathematics" },
    { label: "Geometrical Thinking", href: "/curriculum/grade6-subjects/mathematics/geometrical-thinking" },
    { label: "Activities", href: "/curriculum/grade6-subjects/activities/mathematics/geometrical-thinking" },
    {
      label: "Transformation Theater",
      href: "/curriculum/grade6-subjects/activities/mathematics/geometrical-thinking/transformation-theater",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Transformation Theater</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Students bring geometric transformations to life through dramatic performance, embodying translations,
            rotations, reflections, and dilations to deepen understanding of spatial relationships.
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
                <p className="font-semibold">4-6 students</p>
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
                <p className="font-semibold">Mathematics/Drama</p>
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
                    <span>
                      Perform and identify geometric transformations (translation, rotation, reflection, dilation)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Understand properties preserved and changed during transformations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Apply transformation concepts to solve geometric problems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Communicate mathematical concepts through creative expression</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Curriculum Standards:</h4>
                <div className="space-y-2">
                  <Badge variant="outline">G3.3 - Performing Transformations</Badge>
                  <Badge variant="outline">G3.2 - Transformation Properties</Badge>
                  <Badge variant="outline">G1.1 - Spatial Visualization</Badge>
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
                  <li>• Large coordinate plane floor grid</li>
                  <li>• Colored shape costumes/props</li>
                  <li>• Transformation script templates</li>
                  <li>• Mirrors for reflection activities</li>
                  <li>• Rotation wheels and protractors</li>
                  <li>• Measuring tapes and rulers</li>
                  <li>• Performance recording sheets</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Digital Tools:</h4>
                <ul className="space-y-1">
                  <li>• Transformation animation software</li>
                  <li>• Video recording equipment</li>
                  <li>• Interactive geometry programs</li>
                  <li>• Digital transformation games</li>
                  <li>• Presentation software</li>
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
                <h4 className="font-semibold text-lg mb-3">Phase 1: Transformation Warm-Up (20 minutes)</h4>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <ol className="space-y-2">
                    <li>
                      <strong>1.</strong> Review four types of transformations with physical demonstrations
                    </li>
                    <li>
                      <strong>2.</strong> Practice simple movements: slide (translation), turn (rotation), flip
                      (reflection), resize (dilation)
                    </li>
                    <li>
                      <strong>3.</strong> Students embody basic shapes and perform guided transformations
                    </li>
                    <li>
                      <strong>4.</strong> Introduce transformation vocabulary and notation
                    </li>
                  </ol>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">Phase 2: Script Development (25 minutes)</h4>
                <div className="bg-green-50 p-4 rounded-lg">
                  <ol className="space-y-2">
                    <li>
                      <strong>1.</strong> Teams choose geometric shapes to portray (triangle, square, pentagon, etc.)
                    </li>
                    <li>
                      <strong>2.</strong> Create transformation storylines incorporating all four transformation types
                    </li>
                    <li>
                      <strong>3.</strong> Write mathematical dialogue explaining each transformation
                    </li>
                    <li>
                      <strong>4.</strong> Plan choreography showing accurate mathematical movements
                    </li>
                    <li>
                      <strong>5.</strong> Assign roles and practice initial movements
                    </li>
                  </ol>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">Phase 3: Rehearsal and Refinement (25 minutes)</h4>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <ol className="space-y-2">
                    <li>
                      <strong>1.</strong> Practice performances on coordinate plane stage
                    </li>
                    <li>
                      <strong>2.</strong> Ensure mathematical accuracy of all transformations
                    </li>
                    <li>
                      <strong>3.</strong> Add props, costumes, and visual elements
                    </li>
                    <li>
                      <strong>4.</strong> Time performances and refine for clarity
                    </li>
                    <li>
                      <strong>5.</strong> Peer feedback and mathematical verification
                    </li>
                  </ol>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">Phase 4: Performance Showcase (20 minutes)</h4>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <ol className="space-y-2">
                    <li>
                      <strong>1.</strong> Teams perform transformation theater pieces
                    </li>
                    <li>
                      <strong>2.</strong> Audience identifies and evaluates transformations shown
                    </li>
                    <li>
                      <strong>3.</strong> Discuss mathematical accuracy and creative interpretation
                    </li>
                    <li>
                      <strong>4.</strong> Reflect on learning through performance
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
                  <li>• Accuracy of transformation movements</li>
                  <li>• Understanding of transformation properties</li>
                  <li>• Mathematical vocabulary usage</li>
                  <li>• Creative problem-solving approaches</li>
                  <li>• Collaboration and communication skills</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Summative Assessment:</h4>
                <ul className="space-y-2">
                  <li>• Performance mathematical accuracy</li>
                  <li>• Script quality and content</li>
                  <li>• Transformation identification skills</li>
                  <li>• Creative integration of concepts</li>
                  <li>• Reflection on learning experience</li>
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
                  <li>• Simplified transformation sequences</li>
                  <li>• Visual transformation guides</li>
                  <li>• Partner support systems</li>
                  <li>• Pre-written script templates</li>
                  <li>• Movement demonstration videos</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Challenge Extensions:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Complex transformation combinations</li>
                  <li>• 3D transformation performances</li>
                  <li>• Mathematical proof integration</li>
                  <li>• Technology-enhanced performances</li>
                  <li>• Cross-curricular connections</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Real-World Connections:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Caribbean dance transformations</li>
                  <li>• Architecture and design</li>
                  <li>• Computer graphics and animation</li>
                  <li>• Art and cultural patterns</li>
                  <li>• Sports movement analysis</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
