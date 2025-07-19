import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronLeft, FlaskConical, Clock, Users, Target, AlertTriangle, CheckCircle } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function StructurePropertiesMatterActivitiesPage() {
  return (
    <div className="container mx-auto py-8">
            <Link href="/curriculum/grade5-subjects/activities/science">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Grade 5 Science Activities
        </Button>
      </Link>

      <div className="mb-8">
        <div className="bg-gradient-to-r from-emerald-100 to-green-100 p-6 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-emerald-700 flex items-center">
            <FlaskConical className="mr-2 h-7 w-7 text-emerald-600" />
            Structure and Properties of Matter Activities
          </h1>
          <p className="text-gray-700 text-lg">
            Hands-on investigations exploring particle theory, conservation of mass, and material properties through
            inquiry-based learning experiences.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="secondary">Particle Theory</Badge>
            <Badge variant="secondary">Conservation of Mass</Badge>
            <Badge variant="secondary">Material Properties</Badge>
            <Badge variant="secondary">Scientific Investigation</Badge>
          </div>
        </div>
      </div>

      <Tabs defaultValue="activity1" className="mb-8">
        <TabsList className="grid w-full grid-cols-3 bg-emerald-100">
          <TabsTrigger value="activity1" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white">
            Activity 1.1
          </TabsTrigger>
          <TabsTrigger value="activity2" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white">
            Activity 1.2
          </TabsTrigger>
          <TabsTrigger value="activity3" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white">
            Activity 1.3
          </TabsTrigger>
        </TabsList>

        <TabsContent value="activity1" className="mt-6">
          <Card className="border-t-4 border-emerald-500">
            <CardHeader className="bg-emerald-50">
              <CardTitle className="text-emerald-700 flex items-center">
                <FlaskConical className="mr-2 h-5 w-5" />
                Activity 1.1: Mystery Powder Investigation
              </CardTitle>
              <CardDescription>
                Students use scientific investigation skills to identify unknown white powders based on their unique
                properties
              </CardDescription>
              <div className="flex gap-4 mt-2">
                <Badge variant="outline" className="flex items-center">
                  <Clock className="mr-1 h-3 w-3" />
                  2-3 class periods
                </Badge>
                <Badge variant="outline" className="flex items-center">
                  <Users className="mr-1 h-3 w-3" />
                  Groups of 3-4
                </Badge>
                <Badge variant="outline" className="flex items-center">
                  <Target className="mr-1 h-3 w-3" />
                  Material Properties
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="overview">
                  <AccordionTrigger>Activity Overview & Learning Objectives</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Learning Objectives:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Identify materials based on their unique physical and chemical properties</li>
                          <li>Use systematic observation and testing procedures</li>
                          <li>Record and analyze data to draw evidence-based conclusions</li>
                          <li>Understand that different materials have characteristic properties</li>
                          <li>Practice scientific communication through forensic reporting</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Caribbean Connections:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Connect to local food processing (sugar, salt, cassava starch)</li>
                          <li>Discuss traditional uses of natural materials</li>
                          <li>Explore forensic science applications in local contexts</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="materials">
                  <AccordionTrigger>Materials & Setup</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Required Materials (per group):</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>4 unlabeled containers (A, B, C, D)</li>
                          <li>Salt (table salt)</li>
                          <li>Sugar (granulated)</li>
                          <li>Baking soda</li>
                          <li>Cornstarch</li>
                          <li>Iodine solution (diluted)</li>
                          <li>White vinegar</li>
                          <li>Water in dropper bottles</li>
                          <li>Magnifying glasses</li>
                          <li>Plastic spoons</li>
                          <li>Investigation data sheets</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Safety Equipment:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Safety goggles</li>
                          <li>Aprons or lab coats</li>
                          <li>Disposable gloves</li>
                          <li>Paper towels</li>
                          <li>Waste containers</li>
                        </ul>
                        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
                          <div className="flex items-center">
                            <AlertTriangle className="h-4 w-4 text-red-600 mr-2" />
                            <span className="font-semibold text-red-700">Safety Note:</span>
                          </div>
                          <p className="text-sm text-red-600 mt-1">
                            Iodine can stain. Use diluted solution and ensure proper ventilation.
                          </p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="procedure">
                  <AccordionTrigger>Detailed Procedure</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-emerald-100 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            1
                          </span>
                          Setup Phase (15 minutes)
                        </h4>
                        <ul className="list-disc pl-8 space-y-1 text-sm">
                          <li>Provide each group with 4 unlabeled containers containing different white powders</li>
                          <li>Ensure students cannot see the original labels</li>
                          <li>Distribute investigation materials and safety equipment</li>
                          <li>Review safety procedures for handling chemicals</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-emerald-100 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            2
                          </span>
                          Observation Phase (20 minutes)
                        </h4>
                        <ul className="list-disc pl-8 space-y-1 text-sm">
                          <li>Students examine each powder with magnifying glasses</li>
                          <li>Record physical properties: texture, grain size, color variations</li>
                          <li>Create detailed drawings of what they observe</li>
                          <li>Note any distinctive characteristics (shininess, clumping, etc.)</li>
                          <li>Complete initial observations section of data sheet</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-emerald-100 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            3
                          </span>
                          Testing Phase (30 minutes)
                        </h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-medium">Water Test:</h5>
                            <ul className="list-disc pl-5 space-y-1 text-xs">
                              <li>Add 2-3 drops of water to small sample of each powder</li>
                              <li>Observe and record reactions (dissolving, clumping, no change)</li>
                              <li>Note speed of reaction and final appearance</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium">Vinegar Test:</h5>
                            <ul className="list-disc pl-5 space-y-1 text-xs">
                              <li>Add 2-3 drops of vinegar to fresh samples</li>
                              <li>Watch for bubbling, fizzing, or other reactions</li>
                              <li>Record intensity and duration of reactions</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium">Iodine Test:</h5>
                            <ul className="list-disc pl-5 space-y-1 text-xs">
                              <li>Add 1-2 drops of iodine solution to fresh samples</li>
                              <li>Observe color changes (especially blue-black coloration)</li>
                              <li>Record immediate and delayed color changes</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-emerald-100 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            4
                          </span>
                          Data Analysis & Identification (25 minutes)
                        </h4>
                        <ul className="list-disc pl-8 space-y-1 text-sm">
                          <li>Complete investigation charts comparing all observations</li>
                          <li>Use data to identify each mystery powder</li>
                          <li>Discuss findings with group members</li>
                          <li>Prepare evidence-based conclusions</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="assessment">
                  <AccordionTrigger>Assessment & Extensions</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Assessment Criteria:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium mb-1">Scientific Process (40%):</h5>
                            <ul className="list-disc pl-5 space-y-1 text-xs">
                              <li>Systematic observation procedures</li>
                              <li>Accurate data recording</li>
                              <li>Proper use of testing materials</li>
                              <li>Safety protocol adherence</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium mb-1">Analysis & Communication (60%):</h5>
                            <ul className="list-disc pl-5 space-y-1 text-xs">
                              <li>Correct identification of powders</li>
                              <li>Evidence-based reasoning</li>
                              <li>Clear forensic report writing</li>
                              <li>Scientific vocabulary use</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Extension Activities:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Test additional household powders (flour, powdered milk, etc.)</li>
                          <li>Create a class database of powder properties</li>
                          <li>Research real forensic science applications</li>
                          <li>Design new tests for powder identification</li>
                          <li>Connect to local food processing industries</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Differentiation Strategies:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>
                            <strong>Support:</strong> Provide pre-made data tables, partner stronger readers with
                            emerging readers
                          </li>
                          <li>
                            <strong>Challenge:</strong> Add quantitative measurements, research chemical explanations
                            for reactions
                          </li>
                          <li>
                            <strong>ELL Support:</strong> Visual vocabulary cards, bilingual investigation sheets
                          </li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity2" className="mt-6">
          <Card className="border-t-4 border-emerald-500">
            <CardHeader className="bg-emerald-50">
              <CardTitle className="text-emerald-700 flex items-center">
                <FlaskConical className="mr-2 h-5 w-5" />
                Activity 1.2: Conservation of Mass Chocolate Melt
              </CardTitle>
              <CardDescription>
                Students investigate conservation of mass through chocolate melting and solidification experiments
              </CardDescription>
              <div className="flex gap-4 mt-2">
                <Badge variant="outline" className="flex items-center">
                  <Clock className="mr-1 h-3 w-3" />
                  1-2 class periods
                </Badge>
                <Badge variant="outline" className="flex items-center">
                  <Users className="mr-1 h-3 w-3" />
                  Groups of 2-3
                </Badge>
                <Badge variant="outline" className="flex items-center">
                  <Target className="mr-1 h-3 w-3" />
                  Conservation of Mass
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="overview">
                  <AccordionTrigger>Activity Overview & Learning Objectives</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Learning Objectives:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Demonstrate that mass is conserved during physical changes</li>
                          <li>Measure and record mass accurately using electronic scales</li>
                          <li>Create and interpret graphs showing mass data over time</li>
                          <li>Distinguish between physical and chemical changes</li>
                          <li>Identify sources of experimental error</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Real-World Connections:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Caribbean chocolate and cocoa processing</li>
                          <li>Cooking and food preparation</li>
                          <li>Manufacturing processes</li>
                          <li>Quality control in food industries</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="materials">
                  <AccordionTrigger>Materials & Setup</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Required Materials (per group):</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Chocolate bars (identical size, about 50g each)</li>
                          <li>Electronic scales (0.1g precision)</li>
                          <li>Hot plates or warming trays</li>
                          <li>Heat-resistant beakers (250mL)</li>
                          <li>Thermometers</li>
                          <li>Stirring rods</li>
                          <li>Timer or stopwatch</li>
                          <li>Data recording sheets</li>
                          <li>Graph paper or graphing software</li>
                          <li>Access to freezer or refrigerator</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Safety Equipment:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Heat-resistant gloves</li>
                          <li>Safety goggles</li>
                          <li>Aprons</li>
                          <li>Tongs for handling hot containers</li>
                        </ul>
                        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
                          <div className="flex items-center">
                            <AlertTriangle className="h-4 w-4 text-red-600 mr-2" />
                            <span className="font-semibold text-red-700">Safety Note:</span>
                          </div>
                          <p className="text-sm text-red-600 mt-1">
                            Hot plates and melted chocolate can cause burns. Supervise closely.
                          </p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="procedure">
                  <AccordionTrigger>Detailed Procedure</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-emerald-100 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            1
                          </span>
                          Initial Measurement (10 minutes)
                        </h4>
                        <ul className="list-disc pl-8 space-y-1 text-sm">
                          <li>Weigh chocolate bars and record initial mass</li>
                          <li>Weigh empty beakers and record masses</li>
                          <li>Calculate total system mass (chocolate + container)</li>
                          <li>Record room temperature</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-emerald-100 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            2
                          </span>
                          Hypothesis Formation (5 minutes)
                        </h4>
                        <ul className="list-disc pl-8 space-y-1 text-sm">
                          <li>Students predict what will happen to mass when chocolate melts</li>
                          <li>Record predictions with reasoning</li>
                          <li>Discuss different student hypotheses</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-emerald-100 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            3
                          </span>
                          Melting Process (20-30 minutes)
                        </h4>
                        <ul className="list-disc pl-8 space-y-1 text-sm">
                          <li>Place chocolate in beakers on hot plates (low heat setting)</li>
                          <li>Monitor temperature throughout melting process</li>
                          <li>Record temperature every 2 minutes</li>
                          <li>Weigh chocolate and container every 5 minutes during melting</li>
                          <li>Stir gently to ensure even melting</li>
                          <li>Record observations about physical changes</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-emerald-100 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            4
                          </span>
                          Cooling Phase (30-45 minutes or next class)
                        </h4>
                        <ul className="list-disc pl-8 space-y-1 text-sm">
                          <li>Allow chocolate to cool at room temperature for 15 minutes</li>
                          <li>Place in refrigerator or freezer to accelerate solidification</li>
                          <li>Weigh again once completely solid</li>
                          <li>Record final temperature and mass</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-emerald-100 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            5
                          </span>
                          Data Analysis (20 minutes)
                        </h4>
                        <ul className="list-disc pl-8 space-y-1 text-sm">
                          <li>Create bar graphs showing mass at each stage</li>
                          <li>Calculate any differences and discuss sources of error</li>
                          <li>Compare results with initial hypotheses</li>
                          <li>Analyze temperature vs. time data</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="assessment">
                  <AccordionTrigger>Assessment & Extensions</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Assessment Rubric:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <h5 className="font-medium mb-1">Data Collection (30%):</h5>
                            <ul className="list-disc pl-5 space-y-1 text-xs">
                              <li>Accurate mass measurements</li>
                              <li>Systematic data recording</li>
                              <li>Proper use of equipment</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium mb-1">Analysis (40%):</h5>
                            <ul className="list-disc pl-5 space-y-1 text-xs">
                              <li>Correct graph construction</li>
                              <li>Error source identification</li>
                              <li>Conclusion validity</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium mb-1">Understanding (30%):</h5>
                            <ul className="list-disc pl-5 space-y-1 text-xs">
                              <li>Conservation concept grasp</li>
                              <li>Physical vs. chemical change</li>
                              <li>Real-world applications</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Extension Activities:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Test with ice cubes melting and refreezing for comparison</li>
                          <li>Investigate different types of chocolate (dark, milk, white)</li>
                          <li>Research chocolate manufacturing processes</li>
                          <li>Connect to Caribbean cocoa farming and processing</li>
                          <li>Design experiments with other phase changes (butter, wax)</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Cross-Curricular Connections:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>
                            <strong>Mathematics:</strong> Graphing, percentage calculations, measurement precision
                          </li>
                          <li>
                            <strong>Social Studies:</strong> Caribbean chocolate industry, fair trade
                          </li>
                          <li>
                            <strong>Language Arts:</strong> Scientific report writing, vocabulary development
                          </li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity3" className="mt-6">
          <Card className="border-t-4 border-emerald-500">
            <CardHeader className="bg-emerald-50">
              <CardTitle className="text-emerald-700 flex items-center">
                <FlaskConical className="mr-2 h-5 w-5" />
                Activity 1.3: Design Your Own Separation Method
              </CardTitle>
              <CardDescription>
                Students design and test methods to separate mixtures using physical properties of materials
              </CardDescription>
              <div className="flex gap-4 mt-2">
                <Badge variant="outline" className="flex items-center">
                  <Clock className="mr-1 h-3 w-3" />2 class periods
                </Badge>
                <Badge variant="outline" className="flex items-center">
                  <Users className="mr-1 h-3 w-3" />
                  Groups of 3-4
                </Badge>
                <Badge variant="outline" className="flex items-center">
                  <Target className="mr-1 h-3 w-3" />
                  Separation Methods
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="overview">
                  <AccordionTrigger>Activity Overview & Learning Objectives</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Learning Objectives:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Design systematic procedures for separating mixed materials</li>
                          <li>Apply knowledge of material properties to solve problems</li>
                          <li>Test and refine separation methods based on results</li>
                          <li>Calculate separation efficiency and analyze effectiveness</li>
                          <li>Communicate scientific procedures and results clearly</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Engineering Design Process:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Identify the problem and constraints</li>
                          <li>Plan and design solution strategies</li>
                          <li>Test and evaluate effectiveness</li>
                          <li>Modify and improve methods</li>
                          <li>Communicate results and recommendations</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="materials">
                  <AccordionTrigger>Materials & Setup</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Mixture Components:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Sand (fine and coarse)</li>
                          <li>Iron filings</li>
                          <li>Salt (table salt)</li>
                          <li>Small stones or gravel</li>
                          <li>Rice or small beans</li>
                          <li>Sawdust or wood chips</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Separation Tools:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Strong magnets</li>
                          <li>Sieves of different mesh sizes</li>
                          <li>Filter paper and funnels</li>
                          <li>Beakers and containers</li>
                          <li>Tweezers</li>
                          <li>Spoons and scoops</li>
                          <li>Water for dissolving</li>
                          <li>Electronic scales</li>
                          <li>Measuring cylinders</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="procedure">
                  <AccordionTrigger>Detailed Procedure</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-emerald-100 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            1
                          </span>
                          Challenge Presentation (10 minutes)
                        </h4>
                        <ul className="list-disc pl-8 space-y-1 text-sm">
                          <li>Students receive a mixture of 4-5 different materials</li>
                          <li>Weigh and record total mixture mass</li>
                          <li>Examine mixture components without separating</li>
                          <li>Identify each component and its properties</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-emerald-100 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            2
                          </span>
                          Planning Phase (20 minutes)
                        </h4>
                        <ul className="list-disc pl-8 space-y-1 text-sm">
                          <li>Identify each component in the mixture</li>
                          <li>List unique properties of each material</li>
                          <li>Design a step-by-step separation plan</li>
                          <li>Predict which separation methods will work best</li>
                          <li>Consider order of separation steps</li>
                          <li>Estimate expected recovery amounts</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-emerald-100 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            3
                          </span>
                          Implementation (40 minutes)
                        </h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-medium">Separation Methods to Test:</h5>
                            <ul className="list-disc pl-5 space-y-1 text-xs">
                              <li>
                                <strong>Magnetic separation:</strong> Remove iron filings with magnets
                              </li>
                              <li>
                                <strong>Sieving:</strong> Separate by particle size using different mesh sizes
                              </li>
                              <li>
                                <strong>Dissolution:</strong> Dissolve salt in water, then filter and evaporate
                              </li>
                              <li>
                                <strong>Density separation:</strong> Use water to float lighter materials
                              </li>
                              <li>
                                <strong>Manual sorting:</strong> Hand-pick larger, distinct items
                              </li>
                            </ul>
                          </div>
                          <ul className="list-disc pl-8 space-y-1 text-sm">
                            <li>Test their separation method step by step</li>
                            <li>Modify approach based on results</li>
                            <li>Document each step with photos/drawings</li>
                            <li>Weigh each separated component</li>
                            <li>Record observations and challenges</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-emerald-100 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            4
                          </span>
                          Evaluation (15 minutes)
                        </h4>
                        <ul className="list-disc pl-8 space-y-1 text-sm">
                          <li>Measure how much of each component was recovered</li>
                          <li>Calculate separation efficiency (recovered mass ÷ original mass × 100%)</li>
                          <li>Identify sources of material loss</li>
                          <li>Evaluate effectiveness of each separation method</li>
                          <li>Suggest improvements for better results</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-emerald-100 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            5
                          </span>
                          Presentation (20 minutes)
                        </h4>
                        <ul className="list-disc pl-8 space-y-1 text-sm">
                          <li>Groups present their methods to class</li>
                          <li>Explain successes and challenges encountered</li>
                          <li>Share efficiency calculations and improvements</li>
                          <li>Compare different approaches used by groups</li>
                          <li>Discuss real-world applications of separation methods</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="assessment">
                  <AccordionTrigger>Assessment & Extensions</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Assessment Criteria:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium mb-1">Design Process (40%):</h5>
                            <ul className="list-disc pl-5 space-y-1 text-xs">
                              <li>Systematic planning approach</li>
                              <li>Property-based method selection</li>
                              <li>Logical sequence of steps</li>
                              <li>Modification based on results</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium mb-1">Implementation & Analysis (60%):</h5>
                            <ul className="list-disc pl-5 space-y-1 text-xs">
                              <li>Successful separation execution</li>
                              <li>Accurate efficiency calculations</li>
                              <li>Clear documentation and communication</li>
                              <li>Thoughtful improvement suggestions</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Real-World Applications:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Recycling and waste management</li>
                          <li>Mining and mineral processing</li>
                          <li>Water treatment and purification</li>
                          <li>Food processing and agriculture</li>
                          <li>Environmental cleanup projects</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Extension Challenges:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Design separation methods for oil spill cleanup</li>
                          <li>Separate different types of plastic for recycling</li>
                          <li>Create methods for purifying local water sources</li>
                          <li>Design systems for separating compost materials</li>
                          <li>Research industrial separation technologies</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Caribbean Connections:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Salt production from seawater evaporation</li>
                          <li>Sugar processing and purification</li>
                          <li>Coffee bean sorting and processing</li>
                          <li>Beach sand composition analysis</li>
                          <li>Traditional methods for separating rice and chaff</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
            Implementation Support
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-emerald-700">Safety Protocols</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Always wear safety goggles when handling chemicals</li>
                <li>Use heat-resistant gloves with hot materials</li>
                <li>Ensure proper ventilation when using iodine</li>
                <li>Have first aid kit readily available</li>
                <li>Review emergency procedures before activities</li>
                <li>Supervise all heating and chemical activities</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-emerald-700">Material Preparation</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Pre-measure powder samples in labeled containers</li>
                <li>Prepare diluted iodine solution (1:10 ratio)</li>
                <li>Test all electronic scales for accuracy</li>
                <li>Prepare mixed material samples in advance</li>
                <li>Organize separation tools by station</li>
                <li>Have backup materials ready</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-emerald-700">Assessment Tools</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Investigation data sheets and rubrics</li>
                <li>Digital cameras for documentation</li>
                <li>Peer evaluation forms</li>
                <li>Self-reflection questionnaires</li>
                <li>Portfolio organization guidelines</li>
                <li>Presentation evaluation criteria</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
