import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Breadcrumb } from "@/components/breadcrumb"
import { FallbackImage } from "@/components/fallback-image"
import { ChevronLeft, ChevronRight, Clock, Map, BookOpen, BarChart2, CheckSquare } from "lucide-react"

export default function CommunityMapMakersPage() {
  return (
    <div className="container mx-auto py-8">
      
      <div className="mb-8">
        <div className="bg-gradient-to-r from-green-100 to-teal-100 p-6 rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2 text-green-700">Community Map Makers</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  <BookOpen className="mr-1 h-4 w-4" />
                  Spatial Thinking
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  <Clock className="mr-1 h-4 w-4" />
                  60 minutes
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
                  <BarChart2 className="mr-1 h-4 w-4" />
                  Moderate
                </span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-lg overflow-hidden">
                <FallbackImage
                  src="/community-map-makers.png"
                  alt="Community Map Makers"
                  fallbackSrc="/children-map-making.png"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2">
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-green-700">Overview</h2>
              <p className="mb-4">
                In this activity, students will create maps of their community, identifying key natural and built
                features and using cardinal directions. This activity connects to the Spatial Thinking strand of the
                curriculum, helping students understand that their islands are made up of many diverse regions and
                communities.
              </p>
              <p>
                Students will learn about map features, practice using cardinal directions, and develop spatial
                awareness as they create visual representations of their community. This activity promotes geographic
                skills, observation, and an appreciation for the unique features of their community.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-green-700">Learning Objectives</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Identify the basic features of a map including title, key, compass rose, and border</li>
                <li>Draw a map of the community which includes basic features</li>
                <li>Describe the important natural and built features of the community</li>
                <li>Use cardinal directions to describe locations</li>
                <li>Appreciate that a map can be used to show important landmarks in the community</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-green-700">Materials</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Large drawing paper or construction paper</li>
                <li>Colored markers, crayons, or pencils</li>
                <li>Rulers</li>
                <li>Sample maps of the local community</li>
                <li>Compass (real or app-based)</li>
                <li>Pictures of local landmarks and features</li>
                <li>Map symbol templates</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-green-700">Preparation</h2>
              <ol className="space-y-2 list-decimal pl-5">
                <li>Gather sample maps of the local community</li>
                <li>Prepare a simple map key with common symbols for students to reference</li>
                <li>Plan a walking route around the school or immediate community</li>
                <li>Create a simple worksheet for students to record observations during the walk</li>
                <li>Prepare your own sample map to demonstrate the required elements</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-green-700">Steps</h2>
              <ol className="space-y-4 list-decimal pl-5">
                <li>
                  <strong>Introduction to Maps (10 minutes):</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Show students examples of maps and discuss their purpose</li>
                    <li>Identify the key features of a map: title, key/legend, compass rose, and border</li>
                    <li>Introduce cardinal directions (north, south, east, west) and their importance</li>
                  </ul>
                </li>
                <li>
                  <strong>Community Walk (15 minutes):</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Take students on a walk around the school or immediate community</li>
                    <li>
                      Have students observe and record natural features (trees, hills, rivers) and built features
                      (buildings, roads, bridges)
                    </li>
                    <li>Practice using cardinal directions to describe the location of features</li>
                  </ul>
                </li>
                <li>
                  <strong>Map Creation (25 minutes):</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Guide students in creating their own maps of the community based on their observations</li>
                    <li>Demonstrate how to include all required map elements</li>
                    <li>Help students create a key/legend for the symbols they use</li>
                    <li>Ensure students include a compass rose showing cardinal directions</li>
                  </ul>
                </li>
                <li>
                  <strong>Sharing and Reflection (10 minutes):</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Have students share their maps with a partner or small group</li>
                    <li>Ask students to use cardinal directions to describe the location of features on their maps</li>
                    <li>Lead a class discussion about what students learned about their community</li>
                  </ul>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-green-700">Differentiation</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-green-600">For Students Who Need Additional Support:</h3>
                  <ul className="list-disc pl-5">
                    <li>Provide a pre-drawn map outline with some features already labeled</li>
                    <li>Offer a simplified map key with fewer symbols</li>
                    <li>Allow students to work with a partner</li>
                    <li>Provide visual supports for cardinal directions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-green-600">
                    For Students Who Need Additional Challenge:
                  </h3>
                  <ul className="list-disc pl-5">
                    <li>Encourage students to add more detailed features to their maps</li>
                    <li>Ask students to include intermediate directions (northeast, southwest, etc.)</li>
                    <li>Have students create a 3D model of their community</li>
                    <li>Challenge students to create a digital map using appropriate technology</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-green-700">Assessment</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-green-600">Observation:</h3>
                  <ul className="list-disc pl-5">
                    <li>Monitor students' understanding of cardinal directions during the community walk</li>
                    <li>Observe students' ability to identify natural and built features</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-green-600">Conversation:</h3>
                  <ul className="list-disc pl-5">
                    <li>Ask students to explain their maps using cardinal directions</li>
                    <li>Have students describe why maps are important tools</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-green-600">Product:</h3>
                  <ul className="list-disc pl-5">
                    <li>Evaluate the completed maps for inclusion of all required elements</li>
                    <li>Check that students have correctly represented natural and built features</li>
                    <li>Assess the accuracy of the compass rose and cardinal directions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-green-700">Extensions</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Organize a treasure hunt using student-created maps and cardinal directions</li>
                <li>Create a large collaborative map of the wider community</li>
                <li>Compare historical maps of the community with current maps to observe changes over time</li>
                <li>Use digital mapping tools to create interactive maps</li>
                <li>Create a map-based board game featuring local landmarks</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-green-700">Curriculum Connections</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2 flex items-center text-green-600">
                    <Map className="mr-2 h-5 w-5" />
                    Spatial Thinking
                  </h3>
                  <p className="text-sm text-gray-600">
                    This activity directly supports the "Maps and Community" section of the Spatial Thinking strand,
                    helping students understand how to represent their community spatially and use cardinal directions.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 flex items-center text-green-600">
                    <CheckSquare className="mr-2 h-5 w-5" />
                    Specific Curriculum Outcomes
                  </h3>
                  <ul className="text-sm text-gray-600 list-disc pl-5">
                    <li>Identify the basic features of a map including title, key, compass rose, border</li>
                    <li>Draw a map of your community which includes basic features</li>
                    <li>Appreciate that a map can be used to show our important landmarks in the community</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-green-700">Cross-Curricular Integration</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  <strong>Mathematics:</strong> Measurement, scale, spatial reasoning
                </li>
                <li>
                  <strong>Art:</strong> Visual representation, design, color theory
                </li>
                <li>
                  <strong>Language Arts:</strong> Descriptive writing about community features
                </li>
                <li>
                  <strong>Science:</strong> Natural features and environmental awareness
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-green-700">Teacher Tips</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Practice using cardinal directions in the classroom before the community walk</li>
                <li>Consider safety precautions for the community walk</li>
                <li>Take photos during the walk to help students remember features</li>
                <li>Have a compass app available on a device for reference</li>
                <li>Create a word wall with mapping terminology</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-green-700">Additional Resources</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Sample maps of the local community</li>
                <li>Children's books about maps and mapping</li>
                <li>Videos explaining cardinal directions and map features</li>
                <li>Digital mapping tools appropriate for Grade 2 students</li>
                <li>Interactive compass activities</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex justify-between">
        <Link href="/curriculum/grade2-subjects/activities/social-studies/family-tree-explorer">
          <Button variant="outline" className="flex items-center">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous Activity
          </Button>
        </Link>
        <Link href="/curriculum/grade2-subjects/activities/social-studies/conflict-resolution-heroes">
          <Button variant="outline" className="flex items-center">
            Next Activity
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
