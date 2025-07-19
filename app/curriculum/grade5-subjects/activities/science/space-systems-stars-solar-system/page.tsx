import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronLeft, Star, Clock, Users, Target, AlertTriangle, CheckCircle } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function SpaceSystemsActivitiesPage() {
  return (
    <div className="container mx-auto py-8">
            <Link href="/curriculum/grade5-subjects/activities/science">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Grade 5 Science Activities
        </Button>
      </Link>

      <div className="mb-8">
        <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-purple-700 flex items-center">
            <Star className="mr-2 h-7 w-7 text-purple-600" />
            Space Systems: Stars and Solar System Activities
          </h1>
          <p className="text-gray-700 text-lg">
            Explore astronomy through hands-on observations, shadow investigations, and gravity experiments that connect
            Earth to the cosmos.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="secondary">Solar Observations</Badge>
            <Badge variant="secondary">Star Brightness</Badge>
            <Badge variant="secondary">Gravity Effects</Badge>
            <Badge variant="secondary">Astronomical Patterns</Badge>
          </div>
        </div>
      </div>

      <Tabs defaultValue="activity1" className="mb-8">
        <TabsList className="grid w-full grid-cols-3 bg-purple-100">
          <TabsTrigger value="activity1" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
            Activity 4.1
          </TabsTrigger>
          <TabsTrigger value="activity2" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
            Activity 4.2
          </TabsTrigger>
          <TabsTrigger value="activity3" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
            Activity 4.3
          </TabsTrigger>
        </TabsList>

        <TabsContent value="activity1" className="mt-6">
          <Card className="border-t-4 border-purple-500">
            <CardHeader className="bg-purple-50">
              <CardTitle className="text-purple-700 flex items-center">
                <Star className="mr-2 h-5 w-5" />
                Activity 4.1: Shadow Clock Construction Project
              </CardTitle>
              <CardDescription>
                Students build and calibrate sundials to understand Earth's rotation and seasonal changes
              </CardDescription>
              <div className="flex gap-4 mt-2">
                <Badge variant="outline" className="flex items-center">
                  <Clock className="mr-1 h-3 w-3" />
                  3-4 class periods + monitoring
                </Badge>
                <Badge variant="outline" className="flex items-center">
                  <Users className="mr-1 h-3 w-3" />
                  Groups of 3-4
                </Badge>
                <Badge variant="outline" className="flex items-center">
                  <Target className="mr-1 h-3 w-3" />
                  Earth's Rotation
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
                          <li>Understand how Earth's rotation creates day/night cycles</li>
                          <li>Observe and measure shadow changes throughout the day</li>
                          <li>Recognize seasonal variations in sun position</li>
                          <li>Connect ancient timekeeping methods to modern understanding</li>
                          <li>Apply mathematical concepts to astronomical observations</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Caribbean Astronomy Context:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Tropical latitude effects on shadow patterns</li>
                          <li>Traditional navigation methods used by indigenous peoples</li>
                          <li>Hurricane season and solar observations</li>
                          <li>Agricultural timing based on sun positions</li>
                          <li>Tourism and optimal sun exposure times</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="materials">
                  <AccordionTrigger>Materials & Site Preparation</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Construction Materials:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Wooden stakes or metal rods (30-50 cm tall)</li>
                          <li>Measuring tapes (metric)</li>
                          <li>Chalk or permanent markers</li>
                          <li>Protractors for angle measurements</li>
                          <li>Compasses for direction finding</li>
                          <li>Watches or smartphones for time reference</li>
                          <li>Weather-resistant labels</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Documentation Tools:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Data recording sheets</li>
                          <li>Digital cameras</li>
                          <li>Graph paper for plotting</li>
                          <li>Clipboards for outdoor work</li>
                          <li>Pencils (pens may fade in sun)</li>
                          <li>Plastic bags for weather protection</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Site Requirements:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Location with full sun exposure all day</li>
                        <li>Flat, stable ground surface</li>
                        <li>Area that won't be disturbed for several weeks</li>
                        <li>Safe access for regular observations</li>
                        <li>Permission for permanent or semi-permanent installation</li>
                      </ul>
                    </div>
                    <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                      <div className="flex items-center">
                        <AlertTriangle className="h-4 w-4 text-yellow-600 mr-2" />
                        <span className="font-semibold text-yellow-700">Sun Safety:</span>
                      </div>
                      <p className="text-sm text-yellow-600 mt-1">
                        Never look directly at the sun. Use shadows only for observations. Provide sun protection for
                        outdoor work.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="procedure">
                  <AccordionTrigger>Construction & Calibration Procedure</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            1
                          </span>
                          Site Selection & Setup (30 minutes)
                        </h4>
                        <ul className="list-disc pl-8 space-y-1 text-sm">
                          <li>Choose location with full sun exposure all day</li>
                          <li>Mark permanent measurement point</li>
                          <li>Use compass to set up cardinal direction markers</li>
                          <li>Install gnomon (shadow-casting stake) vertically</li>
                          <li>Ensure stake is plumb and secure</li>
                          <li>Create measurement grid around stake</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            2
                          </span>
                          Data Collection Phase (Full day, repeated weekly)
                        </h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-medium">Hourly Measurements:</h5>
                            <ul className="list-disc pl-8 space-y-1 text-sm">
                              <li>Measure shadow length and direction every hour</li>
                              <li>Record exact time of each measurement</li>
                              <li>Note weather conditions and cloud cover</li>
                              <li>Mark shadow tip position with chalk</li>
                              <li>Measure angle of shadow from north</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium">Daily Observations:</h5>
                            <ul className="list-disc pl-8 space-y-1 text-sm">
                              <li>Record sunrise and sunset times</li>
                              <li>Note shortest shadow time (solar noon)</li>
                              <li>Document any unusual weather effects</li>
                              <li>Photograph shadow patterns</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            3
                          </span>
                          Clock Calibration (45 minutes)
                        </h4>
                        <ul className="list-disc pl-8 space-y-1 text-sm">
                          <li>Mark shadow positions for each hour</li>
                          <li>Create permanent hour markers using weather-resistant materials</li>
                          <li>Test accuracy against standard clocks</li>
                          <li>Adjust markers based on multiple day observations</li>
                          <li>Account for daylight saving time if applicable</li>
                          <li>Create user instructions for reading the sundial</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            4
                          </span>
                          Seasonal Tracking (Ongoing over school year)
                        </h4>
                        <ul className="list-disc pl-8 space-y-1 text-sm">
                          <li>Monitor shadow changes throughout school year</li>
                          <li>Document seasonal variations in shadow patterns</li>
                          <li>Predict shadow positions for future dates</li>
                          <li>Compare observations with astronomical data</li>
                          <li>Note differences between seasons</li>
                          <li>Connect changes to Earth's orbital position</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            5
                          </span>
                          Cultural Connections (30 minutes)
                        </h4>
                        <ul className="list-disc pl-8 space-y-1 text-sm">
                          <li>Research ancient timekeeping methods</li>
                          <li>Compare designs with historical sundials</li>
                          <li>Investigate indigenous Caribbean astronomical knowledge</li>
                          <li>Create artistic sundial designs</li>
                          <li>Connect to navigation and agriculture</li>
                          <li>Discuss modern applications of solar positioning</li>
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
                        <h4 className="font-semibold mb-2">Assessment Portfolio:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <h5 className="font-medium mb-1">Data Collection (40%):</h5>
                            <ul className="list-disc pl-5 space-y-1 text-xs">
                              <li>Systematic measurement recording</li>
                              <li>Accurate time and position data</li>
                              <li>Consistent observation schedule</li>
                              <li>Quality documentation</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium mb-1">Analysis (35%):</h5>
                            <ul className="list-disc pl-5 space-y-1 text-xs">
                              <li>Pattern recognition in data</li>
                              <li>Seasonal change understanding</li>
                              <li>Mathematical calculations</li>
                              <li>Prediction accuracy</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium mb-1">Application (25%):</h5>
                            <ul className="list-disc pl-5 space-y-1 text-xs">
                              <li>Sundial construction quality</li>
                              <li>Calibration accuracy</li>
                              <li>Cultural connections</li>
                              <li>Creative design elements</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Extension Activities:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Create portable sundials for different latitudes</li>
                          <li>Design digital sundial apps</li>
                          <li>Build analemmatic sundials (human sundials)</li>
                          <li>Research sundials in different cultures</li>
                          <li>Create artistic installations combining art and astronomy</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Mathematical Connections:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Calculate angles and trigonometric relationships</li>
                          <li>Graph shadow length vs. time data</li>
                          <li>Determine latitude from shadow measurements</li>
                          <li>Predict shadow positions using mathematical models</li>
                          <li>Analyze seasonal variation patterns</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Technology Integration:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Use GPS to determine exact location coordinates</li>
                          <li>Compare observations with online solar calculators</li>
                          <li>Create time-lapse videos of shadow movement</li>
                          <li>Use astronomy apps to verify sun position data</li>
                          <li>Build digital data logging systems</li>
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
          <Card className="border-t-4 border-purple-500">
            <CardHeader className="bg-purple-50">
              <CardTitle className="text-purple-700 flex items-center">
                <Star className="mr-2 h-5 w-5" />
                Activity 4.2: Star Brightness Laboratory
              </CardTitle>
              <CardDescription>
                Students investigate the relationship between distance and apparent brightness using controlled light
                sources
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
                  Star Properties
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
                          <li>Understand the inverse square law of light intensity</li>
                          <li>Distinguish between luminosity and apparent brightness</li>
                          <li>Apply mathematical relationships to astronomical observations</li>
                          <li>Create and interpret graphs of distance vs. brightness data</li>
                          <li>Connect laboratory findings to real star observations</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Caribbean Night Sky Context:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Excellent stargazing conditions in many Caribbean locations</li>
                          <li>Traditional navigation using bright stars</li>
                          <li>Light pollution effects in urban vs. rural areas</li>
                          <li>Seasonal star visibility changes</li>
                          <li>Southern hemisphere stars visible from Caribbean</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="materials">
                  <AccordionTrigger>Materials & Laboratory Setup</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Light Sources:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Identical flashlights (LED preferred for consistency)</li>
                          <li>Different powered flashlights for luminosity comparison</li>
                          <li>Small LED lights or laser pointers</li>
                          <li>Colored filters (optional for advanced investigations)</li>
                          <li>Extension cords if using plug-in lights</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Measurement Tools:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Measuring tapes (metric, up to 20 meters)</li>
                          <li>Light meters or smartphone light meter apps</li>
                          <li>Rulers for precise positioning</li>
                          <li>Calculators for mathematical analysis</li>
                          <li>Graph paper or graphing software</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Room Setup Requirements:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Large, darkened room or outdoor area at night</li>
                        <li>Space for distances up to 20 meters</li>
                        <li>Stable surfaces for light placement</li>
                        <li>Minimal ambient light interference</li>
                        <li>Safe pathways for movement in darkness</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="procedure">
                  <AccordionTrigger>Laboratory Investigation Procedure</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            1
                          </span>
                          Distance vs. Brightness Setup (20 minutes)
                        </h4>
                        <ul className="list-disc pl-8 space-y-1 text-sm">
                          <li>Use identical flashlights as "stars"</li>
                          <li>Set up at different distances (1m, 2m, 5m, 10m, 20m)</li>
                          <li>Darken room for accurate observations</li>
                          <li>Establish fixed observation point</li>
                          <li>Ensure all lights are at same height</li>
                          <li>Test equipment before beginning measurements</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            2
                          </span>
                          Brightness Measurements (30 minutes)
                        </h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-medium">Quantitative Measurements:</h5>
                            <ul className="list-disc pl-8 space-y-1 text-sm">
                              <li>Use light meters to quantify brightness at each distance</li>
                              <li>Take multiple readings and calculate averages</li>
                              <li>Record observations from fixed observer position</li>
                              <li>Note any environmental factors affecting readings</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium">Qualitative Observations:</h5>
                            <ul className="list-disc pl-8 space-y-1 text-sm">
                              <li>Rank lights by apparent brightness</li>
                              <li>Note which lights are barely visible</li>
                              <li>Observe how brightness changes with distance</li>
                              <li>Record student predictions before measurements</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            3
                          </span>
                          Luminosity vs. Apparent Brightness (25 minutes)
                        </h4>
                        <ul className="list-disc pl-8 space-y-1 text-sm">
                          <li>Compare identical flashlights (same luminosity) at different distances</li>
                          <li>Test different powered flashlights at same distance</li>
                          <li>Graph relationships between variables</li>
                          <li>Identify which factor (distance or luminosity) has greater effect</li>
                          <li>Predict brightness for untested distances</li>
                          <li>Test predictions with additional measurements</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            4
                          </span>
                          Mathematical Analysis (20 minutes)
                        </h4>
                        <ul className="list-disc pl-8 space-y-1 text-sm">
                          <li>Calculate brightness ratios for different distances</li>
                          <li>Test inverse square law relationship (brightness ∝ 1/distance²)</li>
                          <li>Create graphs showing distance vs. brightness</li>
                          <li>Identify mathematical patterns in data</li>
                          <li>Compare experimental results with theoretical predictions</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            5
                          </span>
                          Star Catalog Creation (25 minutes)
                        </h4>
                        <ul className="list-disc pl-8 space-y-1 text-sm">
                          <li>Apply findings to real star data</li>
                          <li>Create classroom star catalog with distances and apparent brightness</li>
                          <li>Predict how stars would look from different distances</li>
                          <li>Research actual star luminosities and distances</li>
                          <li>Compare laboratory results with astronomical data</li>
                          <li>Discuss why some dim stars are actually very luminous</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="assessment">
                  <AccordionTrigger>Assessment & Real Star Connections</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Laboratory Report Assessment:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium mb-1">Data & Analysis (60%):</h5>
                            <ul className="list-disc pl-5 space-y-1 text-xs">
                              <li>Accurate brightness measurements</li>
                              <li>Systematic data collection</li>
                              <li>Correct mathematical calculations</li>
                              <li>Clear graph construction and interpretation</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium mb-1">Understanding & Application (40%):</h5>
                            <ul className="list-disc pl-5 space-y-1 text-xs">
                              <li>Inverse square law comprehension</li>
                              <li>Luminosity vs. brightness distinction</li>
                              <li>Real star data application</li>
                              <li>Scientific reasoning quality</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Extension Activities:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Organize stargazing sessions to observe real star brightness</li>
                          <li>Research and map constellation brightness patterns</li>
                          <li>Investigate how atmospheric conditions affect star visibility</li>
                          <li>Create star brightness scales like the magnitude system</li>
                          <li>Study variable stars and brightness changes over time</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Caribbean Stargazing Opportunities:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Identify best stargazing locations with minimal light pollution</li>
                          <li>Plan observations during optimal weather conditions</li>
                          <li>Connect with local astronomy clubs or observatories</li>
                          <li>Use traditional Caribbean navigation stars</li>
                          <li>Document seasonal changes in star visibility</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Technology Integration:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Use astronomy apps to identify real stars and their properties</li>
                          <li>Access online star catalogs and databases</li>
                          <li>Create digital presentations of findings</li>
                          <li>Use spreadsheet software for data analysis</li>
                          <li>Connect with virtual observatory resources</li>
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
          <Card className="border-t-4 border-purple-500">
            <CardHeader className="bg-purple-50">
              <CardTitle className="text-purple-700 flex items-center">
                <Star className="mr-2 h-5 w-5" />
                Activity 4.3: Gravity Demonstration Olympics
              </CardTitle>
              <CardDescription>
                Students investigate gravity effects through competitive experiments and space-related challenges
              </CardDescription>
              <div className="flex gap-4 mt-2">
                <Badge variant="outline" className="flex items-center">
                  <Clock className="mr-1 h-3 w-3" />
                  2-3 class periods
                </Badge>
                <Badge variant="outline" className="flex items-center">
                  <Users className="mr-1 h-3 w-3" />
                  Teams of 4-5
                </Badge>
                <Badge variant="outline" className="flex items-center">
                  <Target className="mr-1 h-3 w-3" />
                  Gravity & Motion
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
                          <li>Understand gravity as a universal force affecting all objects</li>
                          <li>Investigate factors affecting falling motion (mass, air resistance)</li>
                          <li>Compare gravity effects on Earth vs. other celestial bodies</li>
                          <li>Design experiments to test gravity-related hypotheses</li>
                          <li>Connect gravity to orbital motion and space exploration</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Olympic Competition Format:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Teams compete in 4 gravity-related challenges</li>
                          <li>Points awarded for experimental design and results</li>
                          <li>Emphasis on scientific reasoning and prediction accuracy</li>
                          <li>Final presentations connect findings to space science</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="materials">
                  <AccordionTrigger>Materials & Olympic Stations</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Station 1 - Drop Test Competition:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Various objects of different masses (balls, coins, feathers, paper)</li>
                          <li>Stopwatches or smartphone timer apps</li>
                          <li>Measuring tape for drop height</li>
                          <li>Safety mats for landing area</li>
                          <li>Video recording capability for slow-motion analysis</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Station 2 - Air Resistance Investigation:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Parachute materials (plastic bags, fabric, string)</li>
                          <li>Small weights for parachute loads</li>
                          <li>Scissors and tape for construction</li>
                          <li>Raw eggs for protection challenge</li>
                          <li>Measuring tools for parachute dimensions</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Station 3 - Surface Area Challenge:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Identical sheets of paper</li>
                          <li>Small umbrellas or lightweight objects</li>
                          <li>Timers for measuring fall duration</li>
                          <li>Different shaped objects with same mass</li>
                          <li>Rulers for measuring dimensions</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Station 4 - Gravity Simulation:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Ramps of different angles</li>
                          <li>Balls or marbles for rolling</li>
                          <li>Protractors for angle measurement</li>
                          <li>Timers for measuring roll duration</li>
                          <li>Measuring tape for distance</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="procedure">
                  <AccordionTrigger>Olympic Competition Procedure</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            1
                          </span>
                          Station 1: Drop Test Competition (25 minutes)
                        </h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-medium">Experimental Procedure:</h5>
                            <ul className="list-disc pl-8 space-y-1 text-sm">
                              <li>Drop different objects from same height simultaneously</li>
                              <li>Time falls and observe landing order</li>
                              <li>Test combinations: feather vs. coin, paper vs. crumpled paper</li>
                              <li>Record predictions before each test</li>
                              <li>Use video recording for detailed analysis</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium">Olympic Scoring:</h5>
                            <ul className="list-disc pl-8 space-y-1 text-sm">
                              <li>Gold: Most accurate predictions and explanations</li>
                              <li>Silver: Clear understanding of air resistance effects</li>
                              <li>Bronze: Systematic testing approach</li>
                              <li>Bonus points for creative test combinations</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            2
                          </span>
                          Station 2: Air Resistance Investigation (30 minutes)
                        </h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-medium">Parachute Design Challenge:</h5>
                            <ul className="list-disc pl-8 space-y-1 text-sm">
                              <li>Create parachutes of different sizes</li>
                              <li>Test fall times with various surface areas</li>
                              <li>Design optimal parachute for egg protection</li>
                              <li>Measure and record parachute dimensions</li>
                              <li>Test from multiple heights</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium">Olympic Scoring:</h5>
                            <ul className="list-disc pl-8 space-y-1 text-sm">
                              <li>Gold: Successful egg protection with smallest parachute</li>
                              <li>Silver: Clear relationship between size and fall time</li>
                              <li>Bronze: Systematic design testing</li>
                              <li>Bonus points for innovative parachute designs</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            3
                          </span>
                          Station 3: Surface Area Challenge (20 minutes)
                        </h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-medium">Shape and Fall Investigation:</h5>
                            <ul className="list-disc pl-8 space-y-1 text-sm">
                              <li>Drop identical objects with different orientations</li>
                              <li>Test flat vs. crumpled paper, open vs. closed umbrellas</li>
                              <li>Measure and graph fall time results</li>
                              <li>Investigate how shape affects air resistance</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium">Olympic Scoring:</h5>
                            <ul className="list-disc pl-8 space-y-1 text-sm">
                              <li>Gold: Accurate predictions of shape effects</li>
                              <li>Silver: Clear data collection and analysis</li>
                              <li>Bronze: Understanding of surface area impact</li>
                              <li>Bonus points for mathematical relationships</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            4
                          </span>
                          Station 4: Gravity Simulation (25 minutes)
                        </h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-medium">Ramp Investigation:</h5>
                            <ul className="list-disc pl-8 space-y-1 text-sm">
                              <li>Use ramps to simulate reduced gravity</li>
                              <li>Roll balls down ramps of different angles</li>
                              <li>Compare to free fall times</li>
                              <li>Measure acceleration on different ramp angles</li>
                              <li>Connect to gravity on different planets</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium">Olympic Scoring:</h5>
                            <ul className="list-disc pl-8 space-y-1 text-sm">
                              <li>Gold: Accurate gravity simulation and calculations</li>
                              <li>Silver: Clear understanding of angle effects</li>
                              <li>Bronze: Systematic measurement approach</li>
                              <li>Bonus points for planetary gravity connections</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <span className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
                            5
                          </span>
                          Space Applications Discussion (20 minutes)
                        </h4>
                        <ul className="list-disc pl-8 space-y-1 text-sm">
                          <li>Research how astronauts experience gravity</li>
                          <li>Design experiments for space station</li>
                          <li>Create moon gravity simulation activities</li>
                          <li>Discuss orbital motion and weightlessness</li>
                          <li>Connect findings to space exploration challenges</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="assessment">
                  <AccordionTrigger>Assessment & Space Connections</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Olympic Performance Assessment:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <h5 className="font-medium mb-1">Experimental Design (40%):</h5>
                            <ul className="list-disc pl-5 space-y-1 text-xs">
                              <li>Hypothesis formation</li>
                              <li>Systematic testing procedures</li>
                              <li>Variable identification and control</li>
                              <li>Creative problem-solving approaches</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium mb-1">Data & Analysis (35%):</h5>
                            <ul className="list-disc pl-5 space-y-1 text-xs">
                              <li>Accurate measurements</li>
                              <li>Clear data recording</li>
                              <li>Pattern recognition</li>
                              <li>Mathematical relationships</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium mb-1">Understanding (25%):</h5>
                            <ul className="list-disc pl-5 space-y-1 text-xs">
                              <li>Gravity concept comprehension</li>
                              <li>Air resistance understanding</li>
                              <li>Space application connections</li>
                              <li>Scientific reasoning quality</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Extension Activities:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Design experiments for different planetary gravities</li>
                          <li>Research and model orbital mechanics</li>
                          <li>Create weightlessness simulation activities</li>
                          <li>Investigate how gravity affects plant growth</li>
                          <li>Design space mission equipment considering gravity effects</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Real-World Applications:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Parachute design for emergency situations</li>
                          <li>Understanding terminal velocity in skydiving</li>
                          <li>Spacecraft reentry and heat shield design</li>
                          <li>Satellite orbital mechanics</li>
                          <li>Sports applications (projectile motion)</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Caribbean Space Science Connections:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Research Caribbean contributions to space science</li>
                          <li>Investigate satellite tracking stations in the region</li>
                          <li>Study hurricane tracking from space</li>
                          <li>Explore potential for Caribbean space tourism</li>
                          <li>Connect to navigation and GPS technology</li>
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
              <h3 className="font-semibold mb-3 text-purple-700">Outdoor Safety Protocols</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Never look directly at the sun during any observations</li>
                <li>Provide sun protection (hats, sunscreen) for extended outdoor work</li>
                <li>Ensure safe pathways for nighttime stargazing activities</li>
                <li>Have first aid supplies available for outdoor investigations</li>
                <li>Check weather conditions before outdoor activities</li>
                <li>Establish clear boundaries and supervision for all outdoor work</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-purple-700">Equipment Management</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Test all electronic equipment before activities</li>
                <li>Have backup batteries and equipment available</li>
                <li>Create equipment checkout and return procedures</li>
                <li>Protect sensitive instruments from weather</li>
                <li>Establish safe storage for long-term projects</li>
                <li>Train students in proper equipment handling</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-purple-700">Data Collection Support</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Create standardized data collection templates</li>
                <li>Provide backup data recording methods</li>
                <li>Establish data sharing and collaboration protocols</li>
                <li>Use technology tools for accurate measurements</li>
                <li>Create visual aids for complex concepts</li>
                <li>Develop peer review processes for data quality</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
