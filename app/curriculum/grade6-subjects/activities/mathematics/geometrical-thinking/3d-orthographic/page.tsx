"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/breadcrumb"
import { Clock, Users, Target, BookOpen, Lightbulb, CheckCircle } from "lucide-react"

export default function OrthographicDrawingPage() {
  const breadcrumbItems = [
    { label: "Curriculum", href: "/curriculum" },
    { label: "Grade 6", href: "/curriculum/grade6-subjects" },
    { label: "Mathematics", href: "/curriculum/grade6-subjects/mathematics" },
    { label: "Geometrical Thinking", href: "/curriculum/grade6-subjects/mathematics/geometrical-thinking" },
    { label: "Activities", href: "/curriculum/grade6-subjects/activities/mathematics/geometrical-thinking" },
    {
      label: "3D Orthographic Drawing Challenge",
      href: "/curriculum/grade6-subjects/activities/mathematics/geometrical-thinking/3d-orthographic-drawing",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">3D Orthographic Drawing Challenge</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Students develop spatial visualization skills by creating and interpreting orthographic projections of 3D
            objects, bridging the gap between 2D representations and 3D reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="flex items-center p-4">
              <Clock className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Duration</p>
                <p className="font-semibold">75 minutes</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-4">
              <Users className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Group Size</p>
                <p className="font-semibold">2-3 students</p>
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
                    <span>Create orthographic projections (front, side, top views) of 3D objects</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Interpret 2D drawings to visualize 3D structures</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Develop spatial reasoning and visualization skills</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Apply technical drawing conventions and standards</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Curriculum Standards:</h4>
                <div className="space-y-2">
                  <Badge variant="outline">G1.1 - Spatial Visualization</Badge>
                  <Badge variant="outline">G1.2 - 3D Object Recognition</Badge>
                  <Badge variant="outline">G2.1 - Technical Drawing Skills</Badge>
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
                  <li>• 3D building blocks (cubes, rectangular prisms)</li>
                  <li>• Isometric dot paper</li>
                  <li>• Grid paper for orthographic views</li>
                  <li>• Rulers and set squares</li>
                  <li>• Pencils and erasers</li>
                  <li>• 3D printed objects (various shapes)</li>
                  <li>• Viewing boxes or frames</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Digital Tools:</h4>
                <ul className="space-y-1">
                  <li>• 3D modeling software (Tinkercad, SketchUp)</li>
                  <li>• Orthographic projection apps</li>
                  <li>• Digital drawing tablets</li>
                  <li>• Interactive 3D viewers</li>
                  <li>• CAD software (simplified versions)</li>
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
                <h4 className="font-semibold text-lg mb-3">Phase 1: Introduction to Orthographic Views (20 minutes)</h4>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <ol className="space-y-2">
                    <li>
                      <strong>1.</strong> Demonstrate the concept using a simple cube - show front, side, and top views
                    </li>
                    <li>
                      <strong>2.</strong> Explain how architects and engineers use these drawings
                    </li>
                    <li>
                      <strong>3.</strong> Practice with guided examples using building blocks
                    </li>
                    <li>
                      <strong>4.</strong> Introduce drawing conventions (hidden lines, dimensions)
                    </li>
                  </ol>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">Phase 2: Building to Drawing Challenge (25 minutes)</h4>
                <div className="bg-green-50 p-4 rounded-lg">
                  <ol className="space-y-2">
                    <li>
                      <strong>1.</strong> Teams receive 3D block constructions
                    </li>
                    <li>
                      <strong>2.</strong> Create accurate orthographic projections on grid paper
                    </li>
                    <li>
                      <strong>3.</strong> Include front view, right side view, and top view
                    </li>
                    <li>
                      <strong>4.</strong> Check accuracy by comparing with actual object from different angles
                    </li>
                    <li>
                      <strong>5.</strong> Add dimensions and labels to drawings
                    </li>
                  </ol>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">Phase 3: Drawing to Building Challenge (20 minutes)</h4>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <ol className="space-y-2">
                    <li>
                      <strong>1.</strong> Teams receive orthographic drawing sets
                    </li>
                    <li>
                      <strong>2.</strong> Interpret the 2D views to build the 3D object
                    </li>
                    <li>
                      <strong>3.</strong> Use building blocks to construct the object
                    </li>
                    <li>
                      <strong>4.</strong> Verify construction by creating new orthographic views
                    </li>
                  </ol>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">Phase 4: Design Challenge (10 minutes)</h4>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <ol className="space-y-2">
                    <li>
                      <strong>1.</strong> Teams design their own 3D structure
                    </li>
                    <li>
                      <strong>2.</strong> Create complete orthographic drawing set
                    </li>
                    <li>
                      <strong>3.</strong> Exchange drawings with another team for building
                    </li>
                    <li>
                      <strong>4.</strong> Evaluate accuracy of interpretation
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
                  <li>• Accuracy of orthographic projections</li>
                  <li>• Proper use of drawing conventions</li>
                  <li>• Spatial reasoning demonstration</li>
                  <li>• Problem-solving strategies</li>
                  <li>• Collaboration and communication</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Summative Assessment:</h4>
                <ul className="space-y-2">
                  <li>• Completed drawing portfolios</li>
                  <li>• 3D construction accuracy</li>
                  <li>• Technical drawing quality</li>
                  <li>• Interpretation skills demonstration</li>
                  <li>• Design challenge completion</li>
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
                  <li>• Start with simpler 2D shapes</li>
                  <li>• Provide viewing frames</li>
                  <li>• Use color-coded blocks</li>
                  <li>• Offer step-by-step guides</li>
                  <li>• Digital visualization tools</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Challenge Extensions:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Complex curved surfaces</li>
                  <li>• Isometric drawing creation</li>
                  <li>• CAD software exploration</li>
                  <li>• Architectural plan analysis</li>
                  <li>• 3D printing projects</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Real-World Connections:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Caribbean architecture plans</li>
                  <li>• Engineering blueprints</li>
                  <li>• Product design drawings</li>
                  <li>• Construction industry</li>
                  <li>• Art and sculpture</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
