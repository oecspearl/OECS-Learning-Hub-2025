import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Clock, Users, Target, CheckCircle, Music, Waves } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function OceansMusicalMemoryActivityPage() {
  return (
    <div className="container mx-auto py-8">
            <Link href="/curriculum/grade6-subjects/social-studies/spatial-thinking/activities">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Spatial Thinking Activities
        </Button>
      </Link>

      <div className="mb-8">
        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-blue-700 flex items-center">
            <Waves className="mr-2 h-7 w-7 text-blue-600" />
            Oceans Learning with Musical Memory
          </h1>
          <p className="text-gray-700 mb-4">
            Students learn about the five oceans through songs, memory techniques, and interactive activities while
            locating the Caribbean region in relation to major water bodies.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="flex items-center">
              <Clock className="mr-1 h-3 w-3" />
              45 minutes
            </Badge>
            <Badge variant="secondary" className="flex items-center">
              <Users className="mr-1 h-3 w-3" />
              Whole Class
            </Badge>
            <Badge variant="secondary" className="flex items-center">
              <Target className="mr-1 h-3 w-3" />
              Musical Learning
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
                  <Target className="mr-2 h-5 w-5 text-blue-600" />
                  Learning Objectives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Identify and name all five oceans</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Understand ocean locations and relative sizes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Use musical memory techniques for retention</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Locate the Caribbean region on world maps</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Describe Caribbean's location relative to continents and oceans</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Waves className="mr-2 h-5 w-5 text-cyan-600" />
                  Key Concepts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-700 mb-2">Five Oceans (smallest to largest)</h4>
                    <p className="text-sm text-blue-600">Arctic, Southern, Indian, Atlantic, Pacific</p>
                  </div>
                  <div className="p-3 bg-cyan-50 rounded-lg border border-cyan-200">
                    <h4 className="font-semibold text-cyan-700 mb-2">Memory Device</h4>
                    <p className="text-sm text-cyan-600">
                      "Aunt Sally Is A Princess" (Arctic, Southern, Indian, Atlantic, Pacific)
                    </p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-700 mb-2">Caribbean Location</h4>
                    <p className="text-sm text-green-600">
                      Island group between North and South America, surrounded by Atlantic Ocean and Caribbean Sea
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
              <CardDescription>Everything needed for the oceans musical memory activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-blue-700">Audio & Visual</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Music className="mr-2 h-4 w-4 text-blue-500" />
                      Audio system or speakers
                    </li>
                    <li className="flex items-center">
                      <Music className="mr-2 h-4 w-4 text-blue-500" />
                      Video continuation from continent activity
                    </li>
                    <li className="flex items-center">
                      <Music className="mr-2 h-4 w-4 text-blue-500" />
                      World map for projection
                    </li>
                    <li className="flex items-center">
                      <Music className="mr-2 h-4 w-4 text-blue-500" />
                      Ocean identification worksheets
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-cyan-700">Activity Materials</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Waves className="mr-2 h-4 w-4 text-cyan-500" />
                      Blue materials for props (scarves, ribbons)
                    </li>
                    <li className="flex items-center">
                      <Waves className="mr-2 h-4 w-4 text-cyan-500" />
                      Hand motion instruction cards
                    </li>
                    <li className="flex items-center">
                      <Waves className="mr-2 h-4 w-4 text-cyan-500" />
                      Individual world maps for students
                    </li>
                    <li className="flex items-center">
                      <Waves className="mr-2 h-4 w-4 text-cyan-500" />
                      Colored pencils (blue shades)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-700 mb-2">Song Lyrics: "Continents and Oceans"</h4>
                <div className="text-sm text-blue-600 space-y-2">
                  <p>
                    <strong>Verse 1:</strong>
                    <br />
                    There are seven continents, continents, continents
                    <br />
                    There are seven continents on the earth
                    <br />
                    North and South American, Africa, Asia
                    <br />
                    Europe and Antarctica, Don't forget Australia!
                  </p>

                  <p>
                    <strong>Verse 2:</strong>
                    <br />
                    There are also five oceans, five oceans, five oceans
                    <br />
                    There are also five oceans on the earth
                    <br />
                    Indian, Atlantic, Arctic, Pacific
                    <br />
                    Then there is the Southern Ocean. That makes five!
                  </p>
                </div>
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
                  Detailed instructions for conducting the oceans musical memory activity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-blue-700 mb-2">Step 1: Ocean Introduction (15 minutes)</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Continue video from continent activity (ocean section)</li>
                      <li>• Students establish definition of "ocean" as large body of salt water</li>
                      <li>• Identify the five oceans on world map:</li>
                      <li className="ml-4">- Pacific Ocean (largest)</li>
                      <li className="ml-4">- Atlantic Ocean</li>
                      <li className="ml-4">- Indian Ocean</li>
                      <li className="ml-4">- Southern Ocean</li>
                      <li className="ml-4">- Arctic Ocean (smallest)</li>
                      <li>• Discuss ocean locations and relative sizes</li>
                      <li>• Point out which oceans border different continents</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-cyan-500 pl-4">
                    <h3 className="font-semibold text-cyan-700 mb-2">Step 2: Memory Strategy (10 minutes)</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Teach mnemonic for oceans (smallest to largest):</li>
                      <li>
                        • <strong>"Aunt Sally Is A Princess"</strong>
                      </li>
                      <li className="ml-4">
                        - <strong>A</strong>unt = <strong>A</strong>rctic
                      </li>
                      <li className="ml-4">
                        - <strong>S</strong>ally = <strong>S</strong>outhern
                      </li>
                      <li className="ml-4">
                        - <strong>I</strong>s = <strong>I</strong>ndian
                      </li>
                      <li className="ml-4">
                        - <strong>A</strong> = <strong>A</strong>tlantic
                      </li>
                      <li className="ml-4">
                        - <strong>P</strong>rincess = <strong>P</strong>acific
                      </li>
                      <li>• Students create hand motions for each ocean:</li>
                      <li className="ml-4">- Arctic: Shivering motion</li>
                      <li className="ml-4">- Southern: Penguin waddle</li>
                      <li className="ml-4">- Indian: Gentle wave</li>
                      <li className="ml-4">- Atlantic: Swimming motion</li>
                      <li className="ml-4">- Pacific: Large spreading arms</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-green-700 mb-2">Step 3: Song Learning (15 minutes)</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Learn "Continents and Oceans" song (tune: London Bridge)</li>
                      <li>• Practice verse 1 (continents) first as review</li>
                      <li>• Introduce verse 2 (oceans) with actions</li>
                      <li>• Combine both verses for complete song</li>
                      <li>• Students perform in small groups with actions</li>
                      <li>• Encourage creative interpretations of movements</li>
                      <li>• Use blue props (scarves, ribbons) to represent water</li>
                      <li>• Record groups performing for later review</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-orange-700 mb-2">Step 4: Caribbean Location (5 minutes)</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Students locate Caribbean on world map</li>
                      <li>• Circle the Caribbean island group</li>
                      <li>• Describe Caribbean's location relative to:</li>
                      <li className="ml-4">- Neighboring continents (North and South America)</li>
                      <li className="ml-4">- Surrounding oceans (Atlantic Ocean)</li>
                      <li className="ml-4">- Caribbean Sea (part of Atlantic)</li>
                      <li>• Discuss why the Caribbean is strategically located</li>
                      <li>• Note the Caribbean's position between major landmasses</li>
                    </ul>
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
              <CardDescription>Adaptations for diverse learning needs and musical abilities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-700 mb-3 flex items-center">
                    <Music className="mr-2 h-4 w-4" />
                    Musical Learners
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Encourage rhythm creation with ocean names</li>
                    <li>• Allow students to compose additional verses</li>
                    <li>• Use different musical styles (rap, folk, etc.)</li>
                    <li>• Incorporate simple instruments if available</li>
                    <li>• Create ocean sound effects</li>
                  </ul>
                </div>

                <div className="p-4 bg-cyan-50 rounded-lg border border-cyan-200">
                  <h3 className="font-semibold text-cyan-700 mb-3 flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    Kinesthetic Learners
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Emphasize hand motions and body movements</li>
                    <li>• Use props like blue scarves for ocean waves</li>
                    <li>• Allow movement around classroom during song</li>
                    <li>• Create ocean-themed dance sequences</li>
                    <li>• Use physical gestures to show ocean sizes</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-700 mb-3 flex items-center">
                    <Target className="mr-2 h-4 w-4" />
                    Advanced Students
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Research ocean depths and unique features</li>
                    <li>• Create additional memory devices</li>
                    <li>• Lead small group performances</li>
                    <li>• Investigate ocean currents and their effects</li>
                    <li>• Compare ocean temperatures and climates</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h3 className="font-semibold text-yellow-700 mb-2">Support for Struggling Learners</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Provide ocean name cards for reference</li>
                  <li>• Use simplified hand motions</li>
                  <li>• Allow humming instead of singing if preferred</li>
                  <li>• Pair with musically confident students</li>
                  <li>• Focus on 3 main oceans initially (Pacific, Atlantic, Indian)</li>
                  <li>• Use visual cues and pictures alongside music</li>
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
                <CardDescription>
                  Methods for evaluating student learning through musical and spatial activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-blue-700">Formative Assessment</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                        <span>Monitor singing participation and enthusiasm</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                        <span>Observe map identification accuracy</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                        <span>Evaluate Caribbean location description quality</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                        <span>Check use of memory strategies</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 text-cyan-700">Assessment Criteria</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Target className="mr-2 h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Correct identification of all five oceans</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="mr-2 h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Understanding of ocean size relationships</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="mr-2 h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Effective use of mnemonic devices</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="mr-2 h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Accurate Caribbean location description</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Assessment Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-700 mb-2">Ocean Identification Game</h4>
                    <p className="text-sm text-blue-600">
                      Point to oceans on map while students name them using the mnemonic device. Check for accuracy and
                      speed of recall.
                    </p>
                  </div>

                  <div className="p-3 bg-cyan-50 rounded-lg border border-cyan-200">
                    <h4 className="font-semibold text-cyan-700 mb-2">Caribbean Location Challenge</h4>
                    <p className="text-sm text-cyan-600">
                      Students describe Caribbean location using at least three geographical references (continents,
                      oceans, relative position).
                    </p>
                  </div>

                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-700 mb-2">Musical Memory Check</h4>
                    <p className="text-sm text-green-600">
                      Students perform song independently or in pairs to demonstrate retention of both lyrics and
                      geographical concepts.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="text-lg font-semibold mb-4 text-blue-700">Extension Activities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2">Musical Extensions:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Create additional verses about ocean features</li>
              <li>Compose rap versions of geographical facts</li>
              <li>Record class performances for school assemblies</li>
              <li>Teach songs to younger classes</li>
              <li>Research traditional sea shanties and ocean songs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Cross-Curricular Connections:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <strong>Science:</strong> Ocean ecosystems and marine life
              </li>
              <li>
                <strong>Mathematics:</strong> Ocean depth measurements and comparisons
              </li>
              <li>
                <strong>Music:</strong> Rhythm, melody, and performance skills
              </li>
              <li>
                <strong>Language Arts:</strong> Descriptive writing about ocean exploration
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
