"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/breadcrumb"
import { Clock, Users, Target, BookOpen, Lightbulb, CheckCircle } from "lucide-react"

export default function TessellationDesignStudioPage() {
  const breadcrumbItems = [
    { label: "Curriculum", href: "/curriculum" },
    { label: "Grade 6", href: "/curriculum/grade6-subjects" },
    { label: "Mathematics", href: "/curriculum/grade6-subjects/mathematics" },
    { label: "Geometrical Thinking", href: "/curriculum/grade6-subjects/mathematics/geometrical-thinking" },
    { label: "Activities", href: "/curriculum/grade6-subjects/activities/mathematics/geometrical-thinking" },
    {
      label: "Tessellation Design Studio",
      href: "/curriculum/grade6-subjects/activities/mathematics/geometrical-thinking/tessellation-design-studio",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tessellation Design Studio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Students explore the mathematical art of tessellations by creating repeating patterns that completely cover
            a plane without gaps or overlaps, combining geometry with creativity.
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
                <p className="font-semibold">Individual/Pairs</p>
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
                <p className="font-semibold">Mathematics/Art</p>
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
                    <span>Understand the mathematical principles of tessellations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Create regular and semi-regular tessellations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Apply transformations (rotation, reflection, translation)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Analyze angle relationships in tessellating patterns</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Curriculum Standards:</h4>
                <div className="space-y-2">
                  <Badge variant="outline">G3.3 - Creating Tessellations</Badge>
                  <Badge variant="outline">G3.2 - Geometric Transformations</Badge>
                  <Badge variant="outline">G2.1 - Angle Relationships</Badge>
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
                  <li>• Pattern blocks (triangles, squares, hexagons)</li>
                  <li>• Cardboard or foam sheets</li>
                  <li>• Scissors and craft knives</li>
                  <li>• Colored paper and markers</li>
                  <li>• Rulers and protractors</li>
                  <li>• Tracing paper</li>
                  <li>• Glue sticks and tape</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Digital Tools:</h4>
                <ul className="space-y-1">
                  <li>• Tessellation software (TesselManiac)</li>
                  <li>• GeoGebra tessellation activities</li>
                  <li>• Digital art programs</li>
                  <li>• Online pattern generators</li>
                  <li>• Tablets for digital design</li>
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
                <h4 className="font-semibold text-lg mb-3">Phase 1: Tessellation Exploration (20 minutes)</h4>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <ol className="space-y-2">
                    <li>
                      <strong>1.</strong> Examine tessellations in nature and art (honeycomb, M.C. Escher)
                    </li>
                    <li>
                      <strong>2.</strong> Explore Caribbean cultural patterns in textiles and architecture
                    </li>
                    <li>
                      <strong>3.</strong> Use pattern blocks to create simple tessellations
                    </li>
                    <li>
                      <strong>4.</strong> Identify which regular polygons tessellate and why
                    </li>
                  </ol>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">Phase 2: Regular Tessellation Creation (25 minutes)</h4>
                <div className="bg-green-50 p-4 rounded-lg">
                  <ol className="space-y-2">
                    <li>
                      <strong>1.</strong> Create tessellations using equilateral triangles
                    </li>
                    <li>
                      <strong>2.</strong> Design square-based tessellations
                    </li>
                    <li>
                      <strong>3.</strong> Explore hexagonal tessellations
                    </li>
                    <li>
                      <strong>4.</strong> Calculate angle measures to verify tessellation properties
                    </li>
                    <li>
                      <strong>5.</strong> Document findings about angle sums at vertices
                    </li>
                  </ol>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">Phase 3: Semi-Regular Tessellations (25 minutes)</h4>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <ol className="space-y-2">
                    <li>
                      <strong>1.</strong> Combine different regular polygons
                    </li>
                    <li>
                      <strong>2.</strong> Create patterns using triangles and hexagons
                    </li>
                    <li>
                      <strong>3.</strong> Design squares and octagon combinations
                    </li>
                    <li>
                      <strong>4.</strong> Verify that angles sum to 360° at each vertex
                    </li>
                  </ol>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">Phase 4: Creative Design Studio (20 minutes)</h4>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <ol className="space-y-2">
                    <li>
                      <strong>1.</strong> Design original tessellation patterns
                    </li>
                    <li>
                      <strong>2.</strong> Create modified shapes that still tessellate
                    </li>
                    <li>
                      <strong>3.</strong> Add artistic elements while maintaining mathematical properties
                    </li>
                    <li>
                      <strong>4.</strong> Present designs explaining mathematical principles
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
                  <li>• Understanding of tessellation principles</li>
                  <li>• Accuracy of angle calculations</li>
                  <li>• Creative problem-solving approaches</li>
                  <li>• Mathematical vocabulary usage</li>
                  <li>• Pattern recognition skills</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Summative Assessment:</h4>
                <ul className="space-y-2">
                  <li>• Completed tessellation portfolio</li>
                  <li>• Mathematical explanations quality</li>
                  <li>• Design creativity and accuracy</li>
                  <li>• Understanding of transformation concepts</li>
                  <li>• Presentation of final designs</li>
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
                  <li>• Pre-cut tessellation pieces</li>
                  <li>• Guided angle measurement sheets</li>
                  <li>• Visual pattern templates</li>
                  <li>• Step-by-step instruction cards</li>
                  <li>• Digital tessellation tools</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Challenge Extensions:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• 3D tessellation exploration</li>
                  <li>• Hyperbolic tessellations</li>
                  <li>• Computer programming patterns</li>
                  <li>• Historical tessellation research</li>
                  <li>• Large-scale collaborative murals</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Real-World Connections:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Caribbean architectural patterns</li>
                  <li>• Traditional craft designs</li>
                  <li>• Islamic geometric art</li>
                  <li>• Modern graphic design</li>
                  <li>• Nature pattern analysis</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
