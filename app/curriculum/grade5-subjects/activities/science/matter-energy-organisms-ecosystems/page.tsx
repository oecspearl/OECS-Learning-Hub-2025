import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronLeft, Leaf, Clock, Users, Target, AlertTriangle, CheckCircle } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function MatterEnergyOrganismsEcosystemsActivitiesPage() {
  return (
    <div className="container mx-auto py-8">
            <Link href="/curriculum/grade5-subjects/activities/science">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Grade 5 Science Activities
        </Button>
      </Link>

      <div className="mb-8">
        <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-orange-700 flex items-center">
            <Leaf className="mr-2 h-7 w-7 text-orange-600" />
            Matter and Energy in Organisms and Ecosystems Activities
          </h1>
          <p className="text-gray-700 text-lg">
            Explore energy flow, photosynthesis, and ecosystem interactions through hands-on investigations and
            long-term observation projects.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="secondary">Energy Flow</Badge>
            <Badge variant="secondary">Photosynthesis</Badge>
            <Badge variant="secondary">Food Webs</Badge>
            <Badge variant="secondary">Ecosystem Health</Badge>
          </div>
        </div>
      </div>

      <Tabs defaultValue="activity1" className="mb-8">
        <TabsList className="grid w-full grid-cols-3 bg-orange-100">
          <TabsTrigger value="activity1" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
            Activity 2.1
          </TabsTrigger>
          <TabsTrigger value="activity2" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
            Activity 2.2
          </TabsTrigger>
          <TabsTrigger value="activity3" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
            Activity 2.3
          </TabsTrigger>
        </TabsList>

        <TabsContent value="activity1" className="mt-6">
          <Card className="border-t-4 border-orange-500">
            <CardHeader className="bg-orange-50">
              <CardTitle className="text-orange-700 flex items-center">
                <Leaf className="mr-2 h-5 w-5" />
                Activity 2.1: Build a School Ecosystem Terrarium
              </CardTitle>
              <CardDescription>
                Students create and monitor a closed ecosystem to observe energy flow and matter cycling over time
              </CardDescription>
              <div className="flex gap-4 mt-2">
                <Badge variant="outline" className="flex items-center">
                  <Clock className="mr-1 h-3 w-3" />
                  4-6 weeks ongoing
                </Badge>
                <Badge variant="outline" className="flex items-center">
                  <Users className="mr-1 h-3 w-3" />
                  Groups of 3-4
                </Badge>
                <Badge variant="outline" className="flex items-center">
                  <Target className="mr-1 h-3 w-3" />
                  Ecosystem Dynamics
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
                          <li>Observe energy flow from producers to consumers to decomposers</li>
                          <li>Track matter cycling through ecosystem components</li>
                          <li>Monitor ecosystem health indicators over time</li>
                          <li>Understand interdependence of ecosystem components</li>
                          <li>Document changes using scientific observation methods</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Caribbean Ecosystem Connections:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Model tropical rainforest floor ecosystems</li>
                          <li>Include native Caribbean plants when possible</li>
                          <li>Connect to local soil types and decomposer organisms</li>
                          <li>Discuss how climate affects ecosystem function</li>
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
                        <h4 className="font-semibold mb-2">Container & Structure:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Large clear containers (2-5 gallon aquariums or plastic containers)</li>
                          <li>Clear plastic wrap or glass lids</li>
                          <li>Drainage layer materials (gravel, pebbles)</li>
                          <li>Activated charcoal (optional, for filtration)</li>
                          <li>Quality potting soil</li>
                          <li>Sand for layering</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Living Components:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Small plants (ferns, mosses, small tropical plants)</li>
                          <li>Earthworms (2-3 small worms per terrarium)</li>
                          <li>Springtails or other small decomposers</li>
                          <li>Seeds for additional plant growth</li>
                          <li>Small pieces of decaying organic matter (leaves, bark)</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Monitoring Equipment:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Thermometers (digital or analog)</li>
                        <li>Spray bottles for misting</li>
                        <li>Rulers for measuring plant growth</li>
                        <li>Magnifying glasses for detailed observation</li>
                        <li>Digital cameras for documentation</li>
                        <li>Observation journals and data sheets</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="procedure">
                  <AccordionTrigger>Detailed Procedure</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-orange-100 text-orange-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            1
                          </span>
                          Design Phase (Week 1, Day 1-2)
                        </h4>
                        <ul className="list-disc pl-8 space-y-1 text-sm">
                          <li>Research local ecosystem components</li>
                          <li>Plan terrarium layers and inhabitants</li>
                          <li>Predict energy and matter cycles</li>
                          <li>Create ecosystem design diagrams</li>
                          <li>Establish observation schedule and data collection methods</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-orange-100 text-orange-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            2
                          </span>
                          Construction (Week 1, Day 3-5)
                        </h4>
                        <ul className="list-disc pl-8 space-y-1 text-sm">
                          <li>Layer drainage materials in bottom of container</li>
                          <li>Add activated charcoal layer (if using)</li>
                          <li>Add soil layers strategically</li>
                          <li>Plant vegetation according to design plan</li>
                          <li>Introduce decomposers carefully</li>
                          <li>Create observation windows and access points</li>
                          <li>Add initial moisture and seal system</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-orange-100 text-orange-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            3
                          </span>
                          Daily Monitoring (Weeks 2-6)
                        </h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-medium">Daily Observations (5 minutes):</h5>
                            <ul className="list-disc pl-5 space-y-1 text-xs">
                              <li>Record temperature and humidity levels</li>
                              <li>Document plant growth and health</li>
                              <li>Track animal behavior and location</li>
                              <li>Note decomposition processes</li>
                              <li>Observe water cycle evidence (condensation, etc.)</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium">Weekly Detailed Analysis (20 minutes):</h5>
                            <ul className="list-disc pl-5 space-y-1 text-xs">
                              <li>Measure plant height changes</li>
                              <li>Document matter recycling evidence</li>
                              <li>Photograph changes over time</li>
                              <li>Test soil conditions if possible</li>
                              <li>Assess overall ecosystem health</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-orange-100 text-orange-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            4
                          </span>
                          Data Collection & Analysis (Ongoing)
                        </h4>
                        <ul className="list-disc pl-8 space-y-1 text-sm">
                          <li>Create growth charts and ecosystem health indicators</li>
                          <li>Photo documentation of changes over time</li>
                          <li>Track energy flow evidence through observations</li>
                          <li>Document matter cycling examples</li>
                          <li>Compare predictions with actual observations</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-orange-100 text-orange-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            5
                          </span>
                          Final Assessment (Week 6)
                        </h4>
                        <ul className="list-disc pl-8 space-y-1 text-sm">
                          <li>Create comprehensive ecosystem health reports</li>
                          <li>Analyze energy flow and matter cycling evidence</li>
                          <li>Compare different terrarium outcomes</li>
                          <li>Propose improvements for future ecosystems</li>
                          <li>Connect observations to larger ecosystem principles</li>
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
                        <h4 className="font-semibold mb-2">Assessment Portfolio Components:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium mb-1">Daily Documentation (40%):</h5>
                            <ul className="list-disc pl-5 space-y-1 text-xs">
                              <li>Consistent observation records</li>
                              <li>Accurate data collection</li>
                              <li>Quality photographs and sketches</li>
                              <li>Detailed written descriptions</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium mb-1">Analysis & Understanding (60%):</h5>
                            <ul className="list-disc pl-5 space-y-1 text-xs">
                              <li>Energy flow identification</li>
                              <li>Matter cycling examples</li>
                              <li>Ecosystem health evaluation</li>
                              <li>Scientific reasoning and conclusions</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Extension Activities:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Create different ecosystem types (desert, aquatic, forest)</li>
                          <li>Test variables affecting ecosystem health</li>
                          <li>Connect to school garden or outdoor classroom</li>
                          <li>Research local conservation efforts</li>
                          <li>Design solutions for ecosystem restoration</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Troubleshooting Guide:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>
                            <strong>Mold growth:</strong> Reduce moisture, improve ventilation
                          </li>
                          <li>
                            <strong>Plant death:</strong> Check light, water, and soil conditions
                          </li>
                          <li>
                            <strong>Animal death:</strong> Assess food sources and habitat conditions
                          </li>
                          <li>
                            <strong>Condensation issues:</strong> Adjust moisture levels and temperature
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
          <Card className="border-t-4 border-orange-500">
            <CardHeader className="bg-orange-50">
              <CardTitle className="text-orange-700 flex items-center">
                <Leaf className="mr-2 h-5 w-5" />
                Activity 2.2: Photosynthesis Olympic Games
              </CardTitle>
              <CardDescription>
                Students investigate factors affecting photosynthesis through competitive station-based experiments
              </CardDescription>
              <div className="flex gap-4 mt-2">
                <Badge variant="outline" className="flex items-center">
                  <Clock className="mr-1 h-3 w-3" />3 class periods
                </Badge>
                <Badge variant="outline" className="flex items-center">
                  <Users className="mr-1 h-3 w-3" />
                  Teams of 4-5
                </Badge>
                <Badge variant="outline" className="flex items-center">
                  <Target className="mr-1 h-3 w-3" />
                  Photosynthesis Factors
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
                          <li>Investigate how light, water, and CO₂ affect photosynthesis rates</li>
                          <li>Measure and compare plant responses to different conditions</li>
                          <li>Understand photosynthesis as energy conversion process</li>
                          <li>Use evidence to support conclusions about optimal growing conditions</li>
                          <li>Connect photosynthesis to energy flow in ecosystems</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Olympic Competition Format:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Teams rotate through 4 investigation stations</li>
                          <li>Each station tests different photosynthesis factors</li>
                          <li>Points awarded for plant performance and data quality</li>
                          <li>Final "medal ceremony" celebrates winning conditions</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="materials">
                  <AccordionTrigger>Materials & Station Setup</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Station 1 - Light Competition:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Identical small plants (bean seedlings work well)</li>
                          <li>Different light sources (LED, fluorescent, incandescent)</li>
                          <li>Colored filters (red, blue, green, clear)</li>
                          <li>Light meters or smartphone apps</li>
                          <li>Rulers for measuring growth</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Station 2 - CO₂ Challenge:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Aquatic plants (Elodea or similar)</li>
                          <li>Clear containers or test tubes</li>
                          <li>Straws for adding CO₂</li>
                          <li>Timers or stopwatches</li>
                          <li>Bright light source</li>
                          <li>Magnifying glasses for bubble counting</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Station 3 - Water Marathon:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Identical plants in separate containers</li>
                          <li>Measuring cups for water amounts</li>
                          <li>Soil moisture meters (optional)</li>
                          <li>Spray bottles for misting</li>
                          <li>Labels for different water treatments</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Station 4 - Starch Detection Rally:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Leaves from sunny and shaded areas</li>
                          <li>Iodine solution (diluted)</li>
                          <li>Droppers</li>
                          <li>White paper or plates</li>
                          <li>Magnifying glasses</li>
                          <li>Safety equipment (goggles, gloves)</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="procedure">
                  <AccordionTrigger>Station Procedures & Olympic Scoring</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-orange-100 text-orange-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            1
                          </span>
                          Station 1: Light Competition (30 minutes)
                        </h4>
                        <div className="space-y-2">
                          <h5 className="font-medium">Setup & Procedure:</h5>
                          <ul className="list-disc pl-8 space-y-1 text-sm">
                            <li>Place identical plants under different light conditions</li>
                            <li>Test different colored lights using filters</li>
                            <li>Measure light intensity at each station</li>
                            <li>Monitor growth rates over 2 weeks (or use pre-grown examples)</li>
                            <li>Record daily measurements and observations</li>
                          </ul>
                          <h5 className="font-medium">Olympic Scoring:</h5>
                          <ul className="list-disc pl-8 space-y-1 text-sm">
                            <li>Gold: Best growth rate and healthiest appearance</li>
                            <li>Silver: Second-best performance</li>
                            <li>Bronze: Third-best performance</li>
                            <li>Bonus points for accurate predictions and explanations</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-orange-100 text-orange-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            2
                          </span>
                          Station 2: CO₂ Challenge (20 minutes)
                        </h4>
                        <div className="space-y-2">
                          <h5 className="font-medium">Setup & Procedure:</h5>
                          <ul className="list-disc pl-8 space-y-1 text-sm">
                            <li>Place aquatic plants in clear containers under bright light</li>
                            <li>Blow into water through straws to add CO₂</li>
                            <li>Count oxygen bubbles produced in 5-minute intervals</li>
                            <li>Compare bubble production with and without added CO₂</li>
                            <li>Test different amounts of CO₂ addition</li>
                          </ul>
                          <h5 className="font-medium">Olympic Scoring:</h5>
                          <ul className="list-disc pl-8 space-y-1 text-sm">
                            <li>Gold: Highest bubble production rate</li>
                            <li>Silver: Consistent bubble production</li>
                            <li>Bronze: Measurable increase with CO₂ addition</li>
                            <li>Bonus points for accurate bubble counting and data recording</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-orange-100 text-orange-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            3
                          </span>
                          Station 3: Water Marathon (25 minutes)
                        </h4>
                        <div className="space-y-2">
                          <h5 className="font-medium">Setup & Procedure:</h5>
                          <ul className="list-disc pl-8 space-y-1 text-sm">
                            <li>Test plants with different water amounts (drought, normal, flood)</li>
                            <li>Monitor soil moisture and plant health</li>
                            <li>Document wilting and recovery times</li>
                            <li>Observe leaf color and texture changes</li>
                            <li>Test recovery after water stress</li>
                          </ul>
                          <h5 className="font-medium">Olympic Scoring:</h5>
                          <ul className="list-disc pl-8 space-y-1 text-sm">
                            <li>Gold: Optimal water level with best plant health</li>
                            <li>Silver: Good recovery from water stress</li>
                            <li>Bronze: Survival under challenging conditions</li>
                            <li>Bonus points for accurate moisture monitoring</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-orange-100 text-orange-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            4
                          </span>
                          Station 4: Starch Detection Rally (15 minutes)
                        </h4>
                        <div className="space-y-2">
                          <h5 className="font-medium">Setup & Procedure:</h5>
                          <ul className="list-disc pl-8 space-y-1 text-sm">
                            <li>Test leaves for starch using iodine solution</li>
                            <li>Compare leaves from sunny vs. shaded areas</li>
                            <li>Test at different times of day</li>
                            <li>Observe color changes (blue-black indicates starch)</li>
                            <li>Document starch distribution patterns</li>
                          </ul>
                          <h5 className="font-medium">Olympic Scoring:</h5>
                          <ul className="list-disc pl-8 space-y-1 text-sm">
                            <li>Gold: Strongest starch detection in sunny leaves</li>
                            <li>Silver: Clear difference between sun and shade</li>
                            <li>Bronze: Successful starch detection</li>
                            <li>Bonus points for time-of-day comparisons</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-orange-100 text-orange-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            5
                          </span>
                          Olympic Medal Ceremony (15 minutes)
                        </h4>
                        <ul className="list-disc pl-8 space-y-1 text-sm">
                          <li>Award points for plant performance in each "event"</li>
                          <li>Create podium presentations for winning conditions</li>
                          <li>Teams explain why certain conditions performed better</li>
                          <li>Connect results to photosynthesis equation and energy flow</li>
                          <li>Discuss real-world applications for plant growth</li>
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
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <h5 className="font-medium mb-1">Data Collection (30%):</h5>
                            <ul className="list-disc pl-5 space-y-1 text-xs">
                              <li>Accurate measurements</li>
                              <li>Systematic observations</li>
                              <li>Complete data tables</li>
                              <li>Proper equipment use</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium mb-1">Analysis (40%):</h5>
                            <ul className="list-disc pl-5 space-y-1 text-xs">
                              <li>Pattern identification</li>
                              <li>Evidence-based conclusions</li>
                              <li>Factor relationship understanding</li>
                              <li>Photosynthesis concept application</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium mb-1">Communication (30%):</h5>
                            <ul className="list-disc pl-5 space-y-1 text-xs">
                              <li>Clear explanations</li>
                              <li>Scientific vocabulary use</li>
                              <li>Team collaboration</li>
                              <li>Presentation quality</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Extension Activities:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Design optimal greenhouse conditions for Caribbean crops</li>
                          <li>Investigate photosynthesis in different plant types</li>
                          <li>Test effects of pollution on photosynthesis</li>
                          <li>Create school garden with optimal growing conditions</li>
                          <li>Research how climate change affects plant growth</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Caribbean Agriculture Connections:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Apply findings to local crop production (bananas, sugar cane)</li>
                          <li>Discuss shade-grown vs. sun-grown coffee</li>
                          <li>Investigate drought-resistant crops for dry seasons</li>
                          <li>Connect to traditional farming practices</li>
                          <li>Explore greenhouse agriculture in tropical climates</li>
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
          <Card className="border-t-4 border-orange-500">
            <CardHeader className="bg-orange-50">
              <CardTitle className="text-orange-700 flex items-center">
                <Leaf className="mr-2 h-5 w-5" />
                Activity 2.3: Community Food Web Investigation
              </CardTitle>
              <CardDescription>
                Students investigate local ecosystems to map food webs and understand energy flow in their community
              </CardDescription>
              <div className="flex gap-4 mt-2">
                <Badge variant="outline" className="flex items-center">
                  <Clock className="mr-1 h-3 w-3" />
                  2-3 class periods + field work
                </Badge>
                <Badge variant="outline" className="flex items-center">
                  <Users className="mr-1 h-3 w-3" />
                  Groups of 4-5
                </Badge>
                <Badge variant="outline" className="flex items-center">
                  <Target className="mr-1 h-3 w-3" />
                  Food Web Dynamics
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
                          <li>Identify organisms and their roles in local ecosystems</li>
                          <li>Map feeding relationships and energy flow pathways</li>
                          <li>Understand the complexity of food webs vs. simple food chains</li>
                          <li>Analyze human impacts on local food webs</li>
                          <li>Propose conservation strategies for ecosystem health</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Caribbean Ecosystem Focus:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Investigate school grounds, local parks, or coastal areas</li>
                          <li>Include marine and terrestrial connections where possible</li>
                          <li>Document endemic and introduced species</li>
                          <li>Connect to traditional ecological knowledge</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="materials">
                  <AccordionTrigger>Materials & Preparation</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Field Research Equipment:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Digital cameras or smartphones</li>
                          <li>Field notebooks and clipboards</li>
                          <li>Magnifying glasses</li>
                          <li>Measuring tapes</li>
                          <li>Collection containers (for temporary observation)</li>
                          <li>Field identification guides</li>
                          <li>Binoculars (for bird watching)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Laboratory Materials:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Large poster paper or bulletin boards</li>
                          <li>Colored yarn or string</li>
                          <li>Index cards for organism profiles</li>
                          <li>Markers and colored pencils</li>
                          <li>Research materials (books, internet access)</li>
                          <li>Laminating materials (optional)</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                      <div className="flex items-center">
                        <AlertTriangle className="h-4 w-4 text-yellow-600 mr-2" />
                        <span className="font-semibold text-yellow-700">Field Work Safety:</span>
                      </div>
                      <p className="text-sm text-yellow-600 mt-1">
                        Establish clear boundaries, buddy system, and emergency procedures for outdoor investigations.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="procedure">
                  <AccordionTrigger>Detailed Investigation Procedure</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-orange-100 text-orange-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            1
                          </span>
                          Field Research Phase (60-90 minutes)
                        </h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-medium">Site Investigation:</h5>
                            <ul className="list-disc pl-8 space-y-1 text-sm">
                              <li>Visit school grounds, local park, or designated natural area</li>
                              <li>Photograph/sketch all organisms found</li>
                              <li>Note feeding relationships observed (birds eating insects, etc.)</li>
                              <li>Document habitat characteristics and environmental conditions</li>
                              <li>Record GPS coordinates or map locations of observations</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium">Data Collection Guidelines:</h5>
                            <ul className="list-disc pl-8 space-y-1 text-sm">
                              <li>Focus on observable organisms (plants, insects, birds, mammals)</li>
                              <li>Note signs of organisms even if not directly observed (tracks, droppings, nests)</li>
                              <li>Record time of day and weather conditions</li>
                              <li>Estimate population sizes where possible</li>
                              <li>Document human impacts observed in the area</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-orange-100 text-orange-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            2
                          </span>
                          Laboratory Analysis (45 minutes)
                        </h4>
                        <ul className="list-disc pl-8 space-y-1 text-sm">
                          <li>Research each organism's diet and ecological role</li>
                          <li>Create organism profile cards with key information</li>
                          <li>Identify producers, primary consumers, secondary consumers, decomposers</li>
                          <li>Determine trophic levels for each organism</li>
                          <li>Research any organisms not directly observed but likely present</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-orange-100 text-orange-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            3
                          </span>
                          Food Web Construction (60 minutes)
                        </h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-medium">Physical Web Building:</h5>
                            <ul className="list-disc pl-8 space-y-1 text-sm">
                              <li>Use yarn to physically connect organism cards</li>
                              <li>Create large wall display showing relationships</li>
                              <li>Add arrows showing energy flow direction</li>
                              <li>Use different colored yarn for different types of relationships</li>
                              <li>Include decomposers and their connections to all levels</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium">Web Analysis:</h5>
                            <ul className="list-disc pl-8 space-y-1 text-sm">
                              <li>Identify keystone species and their importance</li>
                              <li>Count connections for each organism</li>
                              <li>Trace energy pathways from producers to top predators</li>
                              <li>Identify potential weak links in the web</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-orange-100 text-orange-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            4
                          </span>
                          Disruption Simulation (30 minutes)
                        </h4>
                        <ul className="list-disc pl-8 space-y-1 text-sm">
                          <li>Remove key species and trace effects through the web</li>
                          <li>Add invasive species scenarios and predict impacts</li>
                          <li>Discuss human impact possibilities (pollution, development)</li>
                          <li>Simulate climate change effects on the ecosystem</li>
                          <li>Analyze which organisms are most vulnerable</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-orange-100 text-orange-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            5
                          </span>
                          Conservation Action Planning (45 minutes)
                        </h4>
                        <ul className="list-disc pl-8 space-y-1 text-sm">
                          <li>Propose conservation strategies for ecosystem health</li>
                          <li>Design habitat improvement projects</li>
                          <li>Create action plans for protecting keystone species</li>
                          <li>Develop community education materials</li>
                          <li>Present findings to school or community groups</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="assessment">
                  <AccordionTrigger>Assessment & Community Connections</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Assessment Portfolio:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium mb-1">Field Research (40%):</h5>
                            <ul className="list-disc pl-5 space-y-1 text-xs">
                              <li>Thorough organism documentation</li>
                              <li>Quality photographs and observations</li>
                              <li>Accurate habitat descriptions</li>
                              <li>Evidence of feeding relationships</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium mb-1">Food Web Analysis (60%):</h5>
                            <ul className="list-disc pl-5 space-y-1 text-xs">
                              <li>Accurate food web construction</li>
                              <li>Correct energy flow representation</li>
                              <li>Thoughtful disruption analysis</li>
                              <li>Practical conservation proposals</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Community Engagement Extensions:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Present findings to local environmental groups</li>
                          <li>Create field guides for school nature trails</li>
                          <li>Partner with local conservation organizations</li>
                          <li>Develop citizen science monitoring programs</li>
                          <li>Design interpretive signs for community spaces</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Technology Integration:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Use iNaturalist app for species identification</li>
                          <li>Create digital food web presentations</li>
                          <li>Develop QR code nature trails</li>
                          <li>Build online databases of local species</li>
                          <li>Use GIS mapping for habitat analysis</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Caribbean Ecosystem Highlights:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Document endemic species and their unique roles</li>
                          <li>Investigate marine-terrestrial connections</li>
                          <li>Include traditional ecological knowledge</li>
                          <li>Connect to local conservation success stories</li>
                          <li>Address climate change impacts on island ecosystems</li>
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
            Implementation Support & Safety
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-orange-700">Living Organism Care</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Establish care schedules for terrarium maintenance</li>
                <li>Provide backup plans for plant and animal care</li>
                <li>Create protocols for organism health monitoring</li>
                <li>Ensure ethical treatment of all living specimens</li>
                <li>Plan for end-of-project organism placement</li>
                <li>Have veterinary or expert contacts available</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-orange-700">Field Work Safety</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Conduct site safety assessments before visits</li>
                <li>Establish clear boundaries and buddy systems</li>
                <li>Prepare first aid kits and emergency contacts</li>
                <li>Brief students on local hazards (plants, animals)</li>
                <li>Have permission forms and medical information</li>
                <li>Plan alternative indoor activities for bad weather</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-orange-700">Long-term Project Management</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Create rotation schedules for observation duties</li>
                <li>Develop data collection templates and rubrics</li>
                <li>Plan for holiday and weekend care arrangements</li>
                <li>Establish troubleshooting protocols</li>
                <li>Create backup documentation systems</li>
                <li>Prepare celebration events for project completion</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
