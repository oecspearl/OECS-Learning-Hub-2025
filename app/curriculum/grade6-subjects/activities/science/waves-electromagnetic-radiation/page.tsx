"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumb } from "@/components/breadcrumb"
import { Clock, Users, Target, Volume2, Calculator } from "lucide-react"

export default function WavesElectromagneticRadiationActivitiesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Curriculum", href: "/curriculum" },
          { label: "Grade 6 Subjects", href: "/curriculum/grade6-subjects" },
          { label: "Science Activities", href: "/curriculum/grade6-subjects/activities/science" },
          {
            label: "Waves and Electromagnetic Radiation",
            href: "/curriculum/grade6-subjects/activities/science/waves-electromagnetic-radiation",
          },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Waves and Electromagnetic Radiation Activities</h1>
        <p className="text-xl text-gray-600 mb-6">
          Comprehensive investigations of wave properties, sound transmission, and electromagnetic phenomena through
          quantitative measurement and analysis.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Activity 1: Wave Properties Investigation */}
        <Card className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
            <CardTitle className="text-2xl text-gray-900">
              Activity 1: Comprehensive Wave Properties Investigation
            </CardTitle>
            <CardDescription className="text-gray-600">
              Measure and calculate wave properties while investigating wave behavior and mathematical relationships
            </CardDescription>
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4" />
                <span>90 minutes (single extended or two 45-minute sessions)</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4" />
                <span>Teams of 3</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Target className="h-4 w-4" />
                <span>Wave measurement & mathematical analysis</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Learning Objectives</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Measure and calculate wave properties (wavelength, frequency, amplitude)</li>
                  <li>• Demonstrate relationship between wave energy and amplitude</li>
                  <li>• Investigate wave behavior (reflection, refraction, interference)</li>
                  <li>• Apply mathematical relationships to wave phenomena</li>
                  <li>• Connect wave concepts to real-world technologies</li>
                </ul>

                <h4 className="font-semibold text-gray-900 mb-3 mt-6">Wave Demonstration Equipment</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Large slinky (metal coil spring)</li>
                  <li>• Rope or thick string (3 meters)</li>
                  <li>• Water wave tank (60cm x 40cm x 10cm)</li>
                  <li>• Function generator and speaker</li>
                  <li>• Stopwatches and measuring tools</li>
                  <li>• Digital cameras for video recording</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Investigation Phases</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-semibold text-blue-600">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Transverse Wave Investigation (30 minutes)</p>
                      <p className="text-sm text-gray-600">
                        Rope waves: wavelength, amplitude, frequency relationships
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-semibold text-blue-600">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Longitudinal Wave Study (25 minutes)</p>
                      <p className="text-sm text-gray-600">
                        Slinky compression waves: speed calculations, energy transfer
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-semibold text-blue-600">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Water Wave Investigation (35 minutes)</p>
                      <p className="text-sm text-gray-600">
                        Reflection, refraction, interference, diffraction patterns
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400">
                  <div className="flex items-start gap-2">
                    <Calculator className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-800">Mathematical Analysis</h4>
                      <ul className="text-blue-700 text-sm mt-1">
                        <li>• Wave equation applications: v = fλ</li>
                        <li>• Energy relationship calculations: E ∝ A²</li>
                        <li>• Graphical analysis of wave properties</li>
                        <li>• Statistical analysis of measurements</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-3">Wave Behavior Studies</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-cyan-50 rounded-lg">
                  <h5 className="font-medium text-cyan-800">Reflection and Refraction</h5>
                  <ul className="text-sm text-cyan-700 mt-2 space-y-1">
                    <li>• Place barriers at different angles</li>
                    <li>• Measure incident and reflected wave angles</li>
                    <li>• Change water depth for refraction studies</li>
                    <li>• Observe wave bending patterns</li>
                  </ul>
                </div>
                <div className="p-4 bg-teal-50 rounded-lg">
                  <h5 className="font-medium text-teal-800">Interference and Diffraction</h5>
                  <ul className="text-sm text-teal-700 mt-2 space-y-1">
                    <li>• Create waves from two sources</li>
                    <li>• Observe constructive/destructive interference</li>
                    <li>• Pass waves through narrow openings</li>
                    <li>• Document spreading patterns</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-3">Assessment Components (100 points total)</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h5 className="font-medium text-blue-800">Laboratory Data Portfolio (40 pts)</h5>
                  <ul className="text-sm text-blue-700 mt-2 space-y-1">
                    <li>• Measurement accuracy (15 pts)</li>
                    <li>• Data analysis (15 pts)</li>
                    <li>• Wave behavior documentation (10 pts)</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h5 className="font-medium text-green-800">Mathematical Problem Solving (30 pts)</h5>
                  <ul className="text-sm text-green-700 mt-2 space-y-1">
                    <li>• Wave equation applications (15 pts)</li>
                    <li>• Energy relationship calculations (10 pts)</li>
                    <li>• Graphical analysis (5 pts)</li>
                  </ul>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h5 className="font-medium text-purple-800">Scientific Communication (20 pts)</h5>
                  <ul className="text-sm text-purple-700 mt-2 space-y-1">
                    <li>• Technical report (10 pts)</li>
                    <li>• Wave demonstration (10 pts)</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Activity 2: Sound Wave Transmission */}
        <Card className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50">
            <CardTitle className="text-2xl text-gray-900">
              Activity 2: Sound Wave Transmission and Properties Investigation
            </CardTitle>
            <CardDescription className="text-gray-600">
              Investigate sound transmission through different materials and design communication systems
            </CardDescription>
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4" />
                <span>75 minutes</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4" />
                <span>Teams of 4</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Target className="h-4 w-4" />
                <span>Sound transmission & engineering design</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Learning Objectives</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Investigate sound transmission through different materials</li>
                  <li>• Measure sound intensity and frequency changes</li>
                  <li>• Demonstrate wave reflection, absorption, and transmission</li>
                  <li>• Connect sound properties to hearing and communication</li>
                  <li>• Analyze factors affecting sound quality and transmission</li>
                </ul>

                <h4 className="font-semibold text-gray-900 mb-3 mt-6">Sound Generation Equipment</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Tuning forks (256 Hz, 512 Hz, 1024 Hz)</li>
                  <li>• Small speakers with frequency generator app</li>
                  <li>• Musical instruments (bells, chimes)</li>
                  <li>• Sound meter app or decibel meter</li>
                  <li>• String telephone materials</li>
                  <li>• Various transmission materials</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Investigation Phases</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-xs font-semibold text-purple-600">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Sound Transmission Through Media (25 minutes)</p>
                      <p className="text-sm text-gray-600">Test solid, liquid, and gas transmission properties</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-xs font-semibold text-purple-600">
                      2
                    </div>
                    <div>
                      <p className="font-medium">String Telephone Engineering (30 minutes)</p>
                      <p className="text-sm text-gray-600">
                        Design and test communication systems with variable optimization
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-xs font-semibold text-purple-600">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Sound Barrier Investigation (20 minutes)</p>
                      <p className="text-sm text-gray-600">Study reflection, absorption, and sound focusing effects</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
                  <div className="flex items-start gap-2">
                    <Volume2 className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-purple-800">Safety Considerations</h4>
                      <ul className="text-purple-700 text-sm mt-1">
                        <li>• Ear protection during loud sound generation</li>
                        <li>• Volume limits to prevent hearing damage</li>
                        <li>• Careful handling of glass and sharp materials</li>
                        <li>• Proper use of tuning forks</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-3">String Telephone Engineering Challenge</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-indigo-50 rounded-lg">
                  <h5 className="font-medium text-indigo-800">Variable Testing</h5>
                  <ul className="text-sm text-indigo-700 mt-2 space-y-1">
                    <li>• String material comparison (cotton, nylon, wire)</li>
                    <li>• String tension investigation</li>
                    <li>• Cup material analysis (paper, plastic, metal)</li>
                    <li>• Frequency response testing</li>
                  </ul>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h5 className="font-medium text-blue-800">Performance Optimization</h5>
                  <ul className="text-sm text-blue-700 mt-2 space-y-1">
                    <li>• Maximum effective communication distance</li>
                    <li>• Transmission quality measurement</li>
                    <li>• Optimal tension for best transmission</li>
                    <li>• Obstacle interference effects</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-3">Quantitative Analysis</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h5 className="font-medium text-green-800">Sound Speed Calculations</h5>
                  <ul className="text-sm text-green-700 mt-2 space-y-1">
                    <li>• Use echo timing to calculate sound speed</li>
                    <li>• Compare with theoretical value (343 m/s at 20°C)</li>
                    <li>• Account for temperature effects</li>
                    <li>• Calculate percentage error</li>
                  </ul>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h5 className="font-medium text-orange-800">Transmission Efficiency</h5>
                  <ul className="text-sm text-orange-700 mt-2 space-y-1">
                    <li>• Calculate transmission coefficients</li>
                    <li>• Graph material density vs. transmission</li>
                    <li>• Analyze optimal materials for applications</li>
                    <li>• Connect to architectural acoustics</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-3">Assessment Components (100 points total)</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h5 className="font-medium text-purple-800">Laboratory Report (45 pts)</h5>
                  <ul className="text-sm text-purple-700 mt-2 space-y-1">
                    <li>• Experimental design (10 pts)</li>
                    <li>• Data collection and analysis (20 pts)</li>
                    <li>• Scientific conclusions (10 pts)</li>
                    <li>• Real-world applications (5 pts)</li>
                  </ul>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h5 className="font-medium text-blue-800">Engineering Design (25 pts)</h5>
                  <ul className="text-sm text-blue-700 mt-2 space-y-1">
                    <li>• String telephone optimization (15 pts)</li>
                    <li>• Performance testing (10 pts)</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h5 className="font-medium text-green-800">Communication & Applications (30 pts)</h5>
                  <ul className="text-sm text-green-700 mt-2 space-y-1">
                    <li>• Technical presentation (10 pts)</li>
                    <li>• Peer teaching (10 pts)</li>
                    <li>• Problem-solving scenarios (10 pts)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-3">Real-World Applications</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h5 className="font-medium text-blue-800">Technology Applications</h5>
                  <p className="text-sm text-blue-700">
                    Stethoscope design, noise-canceling headphones, architectural acoustics, sonar systems
                  </p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <h5 className="font-medium text-green-800">Environmental Connections</h5>
                  <p className="text-sm text-green-700">
                    Noise pollution control, wildlife communication, marine animal navigation, Caribbean steel drum
                    acoustics
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
