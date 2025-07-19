import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Clock, Users, Target, CheckCircle, Globe, Map, Scissors } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function ContinentsDiscoveryActivityPage() {
  return (
    <div className="container mx-auto py-8">
            <Link href="/curriculum/grade6-subjects/social-studies/spatial-thinking/activities">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Spatial Thinking Activities
        </Button>
      </Link>

      <div className="mb-8">
        <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-green-700 flex items-center">
            <Map className="mr-2 h-7 w-7 text-green-600" />
            Continents Discovery with Interactive Globe
          </h1>
          <p className="text-gray-700 mb-4">
            Students explore Earth's landmasses using hands-on activities with inflatable globes, mapping exercises, and
            interactive discovery to understand the seven continents and their relationships.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="flex items-center">
              <Clock className="mr-1 h-3 w-3" />
              60 minutes
            </Badge>
            <Badge variant="secondary" className="flex items-center">
              <Users className="mr-1 h-3 w-3" />
              Whole Class
            </Badge>
            <Badge variant="secondary" className="flex items-center">
              <Target className="mr-1 h-3 w-3" />
              Hands-on Exploration
            </Badge>
          </div>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="materials">Materials</TabsTrigger>
          <TabsTrigger value="procedure">Procedure</TabsTrigger>
          <TabsTrigger value="differentiation">Differentiation</TabsTrigger>
          <TabsTrigger value="assessment">Assessment</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="mr-2 h-5 w-5 text-green-600" />
                  Learning Objectives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Identify and name all seven continents</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Understand Earth's water-to-land ratio through experience</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Locate continents on maps and globes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Describe continental relationships and hemispheres</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Use memory aids to remember continent names</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="mr-2 h-5 w-5 text-blue-600" />
                  Key Concepts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-700 mb-2">Seven Continents</h4>
                    <p className="text-sm text-green-600">
                      Africa, Antarctica, Asia, Europe, North America, Australia, South America
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-700 mb-2">Hemisphere Groupings</h4>
                    <p className="text-sm text-blue-600">
                      Western: North & South America; Eastern: Asia, Africa, Europe; Southern: Australia, Antarctica
                    </p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-700 mb-2">Memory Device</h4>
                    <p className="text-sm text-purple-600">
                      "Always Ask About Eating Nice New Salad" (Africa, Antarctica, Asia, Europe, North America,
                      Australia, South America)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="materials">
          <Card>
            <CardHeader>
              <CardTitle>Required Materials</CardTitle>
              <CardDescription>Everything needed for the continents discovery activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-green-700">Physical Materials</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Globe className="mr-2 h-4 w-4 text-green-500" />
                      Inflatable globe (1-2 for class)
                    </li>
                    <li className="flex items-center">
                      <Map className="mr-2 h-4 w-4 text-green-500" />
                      Continent puzzle pieces
                    </li>
                    <li className="flex items-center">
                      <Map className="mr-2 h-4 w-4 text-green-500" />
                      World map (unlabeled)
                    </li>
                    <li className="flex items-center">
                      <Map className="mr-2 h-4 w-4 text-green-500" />
                      World map templates for students
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-blue-700">Supplies & Technology</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Scissors className="mr-2 h-4 w-4 text-blue-500" />
                      Scissors for cutting
                    </li>
                    <li className="flex items-center">
                      <Scissors className="mr-2 h-4 w-4 text-blue-500" />
                      Glue sticks or paste
                    </li>
                    <li className="flex items-center">
                      <Scissors className="mr-2 h-4 w-4 text-blue-500" />
                      Colored pencils for hemisphere coding
                    </li>
                    <li className="flex items-center">
                      <Scissors className="mr-2 h-4 w-4 text-blue-500" />
                      YouTube video access
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-yellow-700 mb-2">Video Resource</h4>
                <p className="text-sm text-yellow-600 mb-2">
                  Continents video: https://www.youtube.com/watch?v=ZPYVCyC5m2U (stop after continents section)
                </p>
                <p className="text-xs text-yellow-500">
                  Preview video and prepare to stop at appropriate point for age-appropriate content.
                </p>
              </div>

              <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-700 mb-2">Preparation Notes</h4>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• Prepare continent outlines for cutting activity</li>
                  <li>• Set up tally chart on board for water/land recording</li>
                  <li>• Have unlabeled world map ready for projection</li>
                  <li>• Prepare hemisphere color-coding key</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="procedure">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Step-by-Step Procedure</CardTitle>
                <CardDescription>
                  Detailed instructions for conducting the continents discovery activity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-green-700 mb-2">Step 1: Globe Exploration (15 minutes)</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Pass inflatable globe around the class</li>
                      <li>• Each student places fingers randomly on globe and identifies what they land on:</li>
                      <li className="ml-4">- Water only</li>
                      <li className="ml-4">- Land only</li>
                      <li className="ml-4">- Water-land combination</li>
                      <li>• Record results on class tally chart</li>
                      <li>• Discover Earth's water-to-land ratio through hands-on experience</li>
                      <li>• Discuss patterns observed in the tally results</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-blue-700 mb-2">Step 2: Landmass Investigation (20 minutes)</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Teacher directs attention to large landmasses on globe</li>
                      <li>• Students brainstorm: "What are these large landmasses called?"</li>
                      <li>• Watch video: https://www.youtube.com/watch?v=ZPYVCyC5m2U</li>
                      <li>• Stop after continents section</li>
                      <li>• Establish definition of "continent" as large landmass</li>
                      <li>• Count and name the seven continents together</li>
                      <li>• Discuss what makes a continent different from an island</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-purple-700 mb-2">
                      Step 3: Continent Identification (15 minutes)
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Using unlabeled map, students attempt to write continent names</li>
                      <li>• Discuss location descriptions:</li>
                      <li className="ml-4">- North and South America: Western hemisphere, connected</li>
                      <li className="ml-4">- Asia, Africa, Europe: Eastern hemisphere, connected</li>
                      <li className="ml-4">- Australia: Island continent, Southern hemisphere</li>
                      <li className="ml-4">- Antarctica: Frozen continent, Southern hemisphere</li>
                      <li>• Introduce memory device: "Always Ask About Eating Nice New Salad"</li>
                      <li>• Practice reciting continents using mnemonic</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-orange-700 mb-2">Step 4: Hands-on Mapping (10 minutes)</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Students cut out continent outlines from provided templates</li>
                      <li>• Paste continents correctly on world map template</li>
                      <li>• Label all seven continents clearly</li>
                      <li>• Color-code continents by hemisphere:</li>
                      <li className="ml-4">- Western Hemisphere: Blue</li>
                      <li className="ml-4">- Eastern Hemisphere: Green</li>
                      <li className="ml-4">- Southern Hemisphere: Red</li>
                      <li>• Create a legend explaining the color coding</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Memory Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h3 className="font-semibold text-purple-700 mb-3">Mnemonic Device for Continents</h3>
                  <p className="text-lg font-medium text-purple-600 mb-2">"Always Ask About Eating Nice New Salad"</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <ul className="space-y-1">
                        <li>
                          <strong>A</strong>lways = <strong>A</strong>frica
                        </li>
                        <li>
                          <strong>A</strong>sk = <strong>A</strong>ntarctica
                        </li>
                        <li>
                          <strong>A</strong>bout = <strong>A</strong>sia
                        </li>
                        <li>
                          <strong>E</strong>ating = <strong>E</strong>urope
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-1">
                        <li>
                          <strong>N</strong>ice = <strong>N</strong>orth America
                        </li>
                        <li>
                          <strong>N</strong>ew = Au<strong>n</strong>stralia (sounds like "New")
                        </li>
                        <li>
                          <strong>S</strong>alad = <strong>S</strong>outh America
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="differentiation">
          <Card>
            <CardHeader>
              <CardTitle>Differentiation Strategies</CardTitle>
              <CardDescription>Adaptations for diverse learning needs and abilities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-700 mb-3 flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    Kinesthetic Learners
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Hands-on globe exploration with finger placement</li>
                    <li>• Physical cutting and pasting of continent shapes</li>
                    <li>• Movement around classroom during activities</li>
                    <li>• Tactile exploration of different map textures</li>
                    <li>• Acting out continent locations with body positions</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-700 mb-3 flex items-center">
                    <Target className="mr-2 h-4 w-4" />
                    Visual Learners
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Color-coded hemisphere mapping</li>
                    <li>• Visual continent puzzle pieces</li>
                    <li>• Chart and graph creation for tally results</li>
                    <li>• Video reinforcement of concepts</li>
                    <li>• Visual memory aids and mnemonics</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h3 className="font-semibold text-purple-700 mb-3 flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Advanced Students
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Research specific countries within each continent</li>
                    <li>• Calculate actual land percentages for each continent</li>
                    <li>• Investigate continental drift theory</li>
                    <li>• Create detailed continent fact sheets</li>
                    <li>• Design their own memory devices</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h3 className="font-semibold text-yellow-700 mb-2">Support for Struggling Learners</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Provide pre-cut continent shapes</li>
                  <li>• Use partially labeled maps as templates</li>
                  <li>• Pair with stronger geography students</li>
                  <li>• Provide continent name cards for reference</li>
                  <li>• Allow extra time for cutting and pasting activities</li>
                  <li>• Use larger, simplified continent outlines</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assessment">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Assessment Strategies</CardTitle>
                <CardDescription>Methods for evaluating student understanding and progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-green-700">Formative Assessment</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                        <span>Evaluate map accuracy and proper labeling</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                        <span>Observe participation in globe exploration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                        <span>Monitor understanding of continental relationships</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                        <span>Check hemisphere color-coding accuracy</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 text-blue-700">Assessment Criteria</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Target className="mr-2 h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Correct identification of all seven continents</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="mr-2 h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Accurate placement on world map</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="mr-2 h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Understanding of hemisphere groupings</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="mr-2 h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Use of memory strategies effectively</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Assessment Checklist</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-700">Student Can:</h4>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Name all seven continents</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Locate continents on a map</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Identify hemisphere groupings</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Use the mnemonic device</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Explain continental connections</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700">Observable Behaviors:</h4>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Actively participates in globe exploration</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Accurately cuts and places continent shapes</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Collaborates effectively with peers</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Asks thoughtful questions</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Demonstrates spatial understanding</span>
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
        <h3 className="text-lg font-semibold mb-4 text-green-700">Extension Activities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2">Alternative Activity: 3D Earth Model</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Students create papier-mâché or clay Earth models</li>
              <li>Paint continents and oceans with accurate colors</li>
              <li>Use push pins to mark Caribbean location</li>
              <li>Label all major continental features</li>
              <li>Present models to younger classes</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Cross-Curricular Connections:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <strong>Mathematics:</strong> Calculate continent size ratios
              </li>
              <li>
                <strong>Science:</strong> Explore continental drift theory
              </li>
              <li>
                <strong>Art:</strong> Create artistic continent representations
              </li>
              <li>
                <strong>Language Arts:</strong> Write continent travel brochures
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
