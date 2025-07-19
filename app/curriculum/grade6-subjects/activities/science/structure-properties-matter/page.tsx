"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumb } from "@/components/breadcrumb"
import { Clock, Users, Target, AlertTriangle, Lightbulb, CheckCircle } from "lucide-react"

export default function StructurePropertiesMatterActivitiesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Curriculum", href: "/curriculum" },
          { label: "Grade 6 Subjects", href: "/curriculum/grade6-subjects" },
          { label: "Science Activities", href: "/curriculum/grade6-subjects/activities/science" },
          {
            label: "Structure and Properties of Matter",
            href: "/curriculum/grade6-subjects/activities/science/structure-properties-matter",
          },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Structure and Properties of Matter Activities</h1>
        <p className="text-xl text-gray-600 mb-6">
          Hands-on investigations of atomic structure, molecular models, and material properties through engaging,
          inquiry-based activities.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Activity 1: Building Atomic Models */}
        <Card className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50">
            <CardTitle className="text-2xl text-gray-900">
              Activity 1: Building Atomic Models with Marshmallows
            </CardTitle>
            <CardDescription className="text-gray-600">
              Define atoms, molecules, and chemical bonds while building 3D molecular structures
            </CardDescription>
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4" />
                <span>60 minutes</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4" />
                <span>Pairs or groups of 3</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Target className="h-4 w-4" />
                <span>Molecular modeling & 3D visualization</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Learning Objectives</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Define atoms, molecules, nucleus, protons, neutrons, electrons</li>
                  <li>• Distinguish between 2D and 3D molecular structures</li>
                  <li>• Explain how atoms combine to form molecules</li>
                  <li>• Compare molecular geometry with chemical function</li>
                </ul>

                <h4 className="font-semibold text-gray-900 mb-3 mt-6">Materials per Group</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Large marshmallows (white) - protons</li>
                  <li>• Medium marshmallows (gray) - neutrons</li>
                  <li>• Mini marshmallows (colored) - electrons</li>
                  <li>• Toothpicks - chemical bonds</li>
                  <li>• Periodic table reference sheets</li>
                  <li>• Digital camera/tablet for documentation</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Procedure Overview</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-semibold text-blue-600">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Introduction (10 minutes)</p>
                      <p className="text-sm text-gray-600">
                        Review atomic structure vocabulary and demonstrate nucleus vs. electron cloud concept
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-semibold text-blue-600">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Individual Atom Construction (15 minutes)</p>
                      <p className="text-sm text-gray-600">
                        Build hydrogen, helium, and carbon atoms with proper electron shell arrangements
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-semibold text-blue-600">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Molecule Building Phase (25 minutes)</p>
                      <p className="text-sm text-gray-600">
                        Create H₂, H₂O, CH₄, NH₃ with correct 3D geometry and bond angles
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-semibold text-blue-600">
                      4
                    </div>
                    <div>
                      <p className="font-medium">3D vs 2D Comparison (10 minutes)</p>
                      <p className="text-sm text-gray-600">
                        Compare paper drawings with 3D models and discuss functional importance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-800">Safety Considerations</h4>
                  <ul className="text-yellow-700 text-sm mt-1">
                    <li>• No eating marshmallows during activity</li>
                    <li>• Careful handling of toothpicks to prevent injury</li>
                    <li>• Wash hands before and after activity</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-3">Assessment Rubric (15 points total)</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-3 bg-green-50 rounded-lg">
                  <h5 className="font-medium text-green-800">Accuracy of Models (4 pts)</h5>
                  <p className="text-sm text-green-700">Correct number of protons, neutrons, electrons</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h5 className="font-medium text-blue-800">Molecular Geometry (3 pts)</h5>
                  <p className="text-sm text-blue-700">Proper 3D shapes demonstrated</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <h5 className="font-medium text-purple-800">Scientific Vocabulary (3 pts)</h5>
                  <p className="text-sm text-purple-700">Correct use of terms in explanations</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Activity 2: Synthetic vs Natural Materials */}
        <Card className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-green-50 to-teal-50">
            <CardTitle className="text-2xl text-gray-900">
              Activity 2: Synthetic vs. Natural Materials Investigation
            </CardTitle>
            <CardDescription className="text-gray-600">
              Differentiate between natural and synthetic materials while analyzing their properties and environmental
              impacts
            </CardDescription>
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4" />
                <span>75 minutes (can be split over 2 days)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4" />
                <span>Teams of 4</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Target className="h-4 w-4" />
                <span>Material testing & environmental analysis</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Learning Objectives</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Differentiate between natural resources, natural products, and synthetic materials</li>
                  <li>• Analyze environmental impacts of synthetic material production</li>
                  <li>• Evaluate properties of materials for specific applications</li>
                  <li>• Connect material properties to manufacturing processes</li>
                </ul>

                <h4 className="font-semibold text-gray-900 mb-3 mt-6">Testing Stations</h4>
                <div className="space-y-2">
                  <div className="p-2 bg-blue-50 rounded">
                    <p className="font-medium text-blue-800">Station A: Water Resistance</p>
                    <p className="text-sm text-blue-700">Test absorption and repelling properties</p>
                  </div>
                  <div className="p-2 bg-green-50 rounded">
                    <p className="font-medium text-green-800">Station B: Strength Testing</p>
                    <p className="text-sm text-green-700">Measure breaking points and flexibility</p>
                  </div>
                  <div className="p-2 bg-orange-50 rounded">
                    <p className="font-medium text-orange-800">Station C: Heat Response</p>
                    <p className="text-sm text-orange-700">Analyze thermal properties and changes</p>
                  </div>
                  <div className="p-2 bg-purple-50 rounded">
                    <p className="font-medium text-purple-800">Station D: Durability Test</p>
                    <p className="text-sm text-purple-700">Compare wear resistance and longevity</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Investigation Phases</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-xs font-semibold text-green-600">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Classification Challenge (20 minutes)</p>
                      <p className="text-sm text-gray-600">
                        Sort materials into natural vs. synthetic categories using observations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-xs font-semibold text-green-600">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Property Testing Circuit (35 minutes)</p>
                      <p className="text-sm text-gray-600">
                        Systematic testing at four stations with quantitative measurements
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-xs font-semibold text-green-600">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Research and Verification (20 minutes)</p>
                      <p className="text-sm text-gray-600">
                        Use technology to research actual material origins and impacts
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-400">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-800">Real-World Connections</h4>
                      <ul className="text-green-700 text-sm mt-1">
                        <li>• Visit local textile manufacturer</li>
                        <li>• Connect to Caribbean plastic ban initiatives</li>
                        <li>• Traditional vs. modern building materials</li>
                        <li>• Recycling center material processing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-3">Assessment Components (50 points total)</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h5 className="font-medium text-blue-800">Lab Report (25 pts)</h5>
                  <ul className="text-sm text-blue-700 mt-2 space-y-1">
                    <li>• Complete data tables</li>
                    <li>• Property analysis</li>
                    <li>• Environmental conclusions</li>
                    <li>• Material recommendations</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h5 className="font-medium text-green-800">Presentation (15 pts)</h5>
                  <ul className="text-sm text-green-700 mt-2 space-y-1">
                    <li>• 3-minute team presentation</li>
                    <li>• Visual aids required</li>
                    <li>• Origin and properties</li>
                    <li>• Environmental impact</li>
                  </ul>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h5 className="font-medium text-purple-800">Reflection (10 pts)</h5>
                  <ul className="text-sm text-purple-700 mt-2 space-y-1">
                    <li>• Personal response to findings</li>
                    <li>• Action steps for sustainability</li>
                    <li>• Local environmental connections</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Extensions and Differentiation */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-gray-900">Extensions and Differentiation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Extension Activities</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Research natural product medicines and molecular structures</li>
                  <li>• Use online molecular viewers (RasMol) for complex molecules</li>
                  <li>• Compare diamond vs. graphite structures</li>
                  <li>• Investigate traditional Caribbean material uses</li>
                  <li>• Design sustainable material alternatives</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Differentiation Strategies</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                    <div>
                      <p className="font-medium">ELL Support</p>
                      <p className="text-sm text-gray-600">Vocabulary cards with pictures, bilingual glossaries</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium">Advanced Learners</p>
                      <p className="text-sm text-gray-600">
                        Electron shells, valence electrons, chemical bonding theory
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-600 mt-1" />
                    <div>
                      <p className="font-medium">Learning Support</p>
                      <p className="text-sm text-gray-600">Pre-made templates, step-by-step visual guides</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
