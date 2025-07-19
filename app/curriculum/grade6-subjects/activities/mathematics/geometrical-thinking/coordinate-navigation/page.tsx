"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/breadcrumb"
import { Clock, Users, Target, BookOpen, Lightbulb, CheckCircle } from "lucide-react"

export default function CoordinatePlaneNavigationPage() {
  const breadcrumbItems = [
    { label: "Curriculum", href: "/curriculum" },
    { label: "Grade 6", href: "/curriculum/grade6-subjects" },
    { label: "Mathematics", href: "/curriculum/grade6-subjects/mathematics" },
    { label: "Geometrical Thinking", href: "/curriculum/grade6-subjects/mathematics/geometrical-thinking" },
    { label: "Activities", href: "/curriculum/grade6-subjects/activities/mathematics/geometrical-thinking" },
    {
      label: "Coordinate Plane Navigation",
      href: "/curriculum/grade6-subjects/activities/mathematics/geometrical-thinking/coordinate-plane-navigation",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Coordinate Plane Navigation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Students master coordinate plane concepts through interactive navigation activities, learning to plot
            points, find distances, and explore geometric relationships in the coordinate system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="flex items-center p-4">
              <Clock className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Duration</p>
                <p className="font-semibold">85 minutes</p>
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
                    <span>Plot and identify points on a coordinate plane</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Navigate using coordinate directions and distances</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Calculate distances between points on coordinate planes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Create and interpret coordinate-based maps and designs</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Curriculum Standards:</h4>
                <div className="space-y-2">
                  <Badge variant="outline">G3.1 - Plotting Coordinates</Badge>
                  <Badge variant="outline">G3.2 - Coordinate Navigation</Badge>
                  <Badge variant="outline">G1.2 - Spatial Relationships</Badge>
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
                  <li>• Large coordinate plane grids</li>
                  <li>• Colored markers and pencils</li>
                  <li>• Navigation instruction cards</li>
                  <li>• Treasure map templates</li>
                  <li>• Rulers and measuring tools</li>
                  <li>• Coordinate plotting worksheets</li>
                  <li>• Floor coordinate grid (tape)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Digital Tools:</h4>
                <ul className="space-y-1">
                  <li>• Interactive coordinate plane software</li>
                  <li>• Graphing calculator apps</li>
                  <li>• Online coordinate games</li>
                  <li>• Digital mapping tools</li>
                  <li>• Coordinate plane simulators</li>
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
                <h4 className="font-semibold text-lg mb-3">Phase 1: Coordinate System Introduction (20 minutes)</h4>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <ol className="space-y-2">
                    <li>
                      <strong>1.</strong> Review coordinate plane components (x-axis, y-axis, origin, quadrants)
                    </li>
                    <li>
                      <strong>2.</strong> Practice plotting simple points using (x, y) notation
                    </li>
                    <li>
                      <strong>3.</strong> Create human coordinate plane using classroom floor
                    </li>
                    <li>
                      <strong>4.</strong> Students become "living points" following coordinate directions
                    </li>
                  </ol>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">Phase 2: Treasure Hunt Navigation (30 minutes)</h4>
                <div className="bg-green-50 p-4 rounded-lg">
                  <ol className="space-y-2">
                    <li>
                      <strong>1.</strong> Teams receive coordinate-based treasure maps of Caribbean islands
                    </li>
                    <li>
                      <strong>2.</strong> Follow coordinate clues to locate hidden treasures
                    </li>
                    <li>
                      <strong>3.</strong> Plot waypoints and calculate distances between locations
                    </li>
                    <li>
                      <strong>4.</strong> Record journey paths and create navigation logs
                    </li>
                    <li>
                      <strong>5.</strong> Verify treasure locations by checking coordinates
                    </li>
                  </ol>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">Phase 3: Distance and Midpoint Exploration (20 minutes)</h4>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <ol className="space-y-2">
                    <li>
                      <strong>1.</strong> Calculate distances between coordinate points
                    </li>
                    <li>
                      <strong>2.</strong> Find midpoints of line segments on coordinate plane
                    </li>
                    <li>
                      <strong>3.</strong> Create geometric shapes using coordinate vertices
                    </li>
                    <li>
                      <strong>4.</strong> Explore perimeter calculations using coordinates
                    </li>
                  </ol>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">Phase 4: Design Challenge (15 minutes)</h4>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <ol className="space-y-2">
                    <li>
                      <strong>1.</strong> Design original coordinate-based maps or artwork
                    </li>
                    <li>
                      <strong>2.</strong> Create navigation challenges for other teams
                    </li>
                    <li>
                      <strong>3.</strong> Present coordinate designs explaining mathematical concepts
                    </li>
                    <li>
                      <strong>4.</strong> Test and refine navigation instructions
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
                  <li>• Accuracy of coordinate plotting</li>
                  <li>• Navigation instruction following</li>
                  <li>• Distance calculation methods</li>
                  <li>• Problem-solving strategies</li>
                  <li>• Collaboration and communication</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Summative Assessment:</h4>
                <ul className="space-y-2">
                  <li>• Completed navigation logs</li>
                  <li>• Coordinate plotting accuracy</li>
                  <li>• Distance and midpoint calculations</li>
                  <li>• Design challenge creativity</li>
                  <li>• Mathematical reasoning quality</li>
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
                  <li>• Simplified coordinate grids</li>
                  <li>• Visual plotting guides</li>
                  <li>• Step-by-step instruction cards</li>
                  <li>• Peer navigation partners</li>
                  <li>• Digital coordinate tools</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Challenge Extensions:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Three-dimensional coordinates</li>
                  <li>• Complex geometric constructions</li>
                  <li>• GPS and real-world navigation</li>
                  <li>• Programming coordinate systems</li>
                  <li>• Advanced distance formulas</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Real-World Connections:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Caribbean island navigation</li>
                  <li>• Maritime chart reading</li>
                  <li>• Urban planning and mapping</li>
                  <li>• Archaeological site mapping</li>
                  <li>• Sports field coordinates</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
