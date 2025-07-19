import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Breadcrumb } from "@/components/breadcrumb"
import { FallbackImage } from "@/components/fallback-image"
import { ChevronLeft, ChevronRight, Clock, DollarSign, BookOpen, BarChart2, CheckSquare } from "lucide-react"

export default function GoodsAndServicesSortPage() {
  return (
    <div className="container mx-auto py-8">
      
      <div className="mb-8">
        <div className="bg-gradient-to-r from-amber-100 to-yellow-100 p-6 rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2 text-amber-700">Goods and Services Sort</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
                  <BookOpen className="mr-1 h-4 w-4" />
                  Economic Decision Making
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  <Clock className="mr-1 h-4 w-4" />
                  30 minutes
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
                  <BarChart2 className="mr-1 h-4 w-4" />
                  Easy
                </span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-lg overflow-hidden">
                <FallbackImage
                  src="/goods-and-services-sort.png"
                  alt="Goods and Services Sort"
                  fallbackSrc="/placeholder.svg?height=160&width=160&query=goods+and+services+activity"
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
              <h2 className="text-2xl font-semibold mb-4 text-amber-700">Overview</h2>
              <p className="mb-4">
                In this activity, students will identify and classify goods and services in their community through a
                sorting game. This activity connects to the Economic Decision Making strand of the curriculum, helping
                students understand how communities provide goods and services to meet needs and wants.
              </p>
              <p>
                Students will learn to differentiate between goods (physical items) and services (actions done for
                others), and understand how both are important in their community. This activity promotes economic
                literacy, critical thinking, and an appreciation for the various ways community members contribute to
                meeting needs and wants.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-amber-700">Learning Objectives</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Identify goods and services available in the community</li>
                <li>Classify workers who provide goods and services</li>
                <li>Distinguish between goods (physical items) and services (actions done for others)</li>
                <li>Appreciate that goods and services provide both needs and wants</li>
                <li>Recognize the interdependence of people in providing goods and services</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-amber-700">Materials</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Picture cards of various goods and services</li>
                <li>Two sorting containers labeled "Goods" and "Services"</li>
                <li>Chart paper and markers</li>
                <li>Goods and services matching worksheet</li>
                <li>Pictures of community workers</li>
                <li>Simple goods and services definition cards</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-amber-700">Preparation</h2>
              <ol className="space-y-2 list-decimal pl-5">
                <li>Create or gather picture cards showing various goods and services</li>
                <li>Prepare two containers labeled "Goods" and "Services"</li>
                <li>Create a simple chart defining goods and services</li>
                <li>Prepare a matching worksheet for assessment</li>
                <li>Gather pictures of community workers who provide goods and services</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-amber-700">Steps</h2>
              <ol className="space-y-4 list-decimal pl-5">
                <li>
                  <strong>Introduction (5 minutes):</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Show students a physical item (e.g., a book) and perform a service (e.g., reading to them)</li>
                    <li>Ask students to identify the difference between the two</li>
                    <li>
                      Introduce the concepts of goods (things we can touch) and services (things people do for us)
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Presentation and Discussion (10 minutes):</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Show slides or pictures of different goods and services in the community</li>
                    <li>
                      For each example, ask students if it's something they can touch (good) or something done for them
                      (service)
                    </li>
                    <li>Create a class list of goods and services on chart paper</li>
                  </ul>
                </li>
                <li>
                  <strong>Sorting Activity (10 minutes):</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Divide students into small groups</li>
                    <li>Give each group a set of picture cards and two sorting containers</li>
                    <li>Have students sort the cards into "Goods" and "Services" categories</li>
                    <li>Circulate to provide guidance and ask questions</li>
                  </ul>
                </li>
                <li>
                  <strong>Assessment and Reflection (5 minutes):</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Have groups share their sorting results with the class</li>
                    <li>Discuss any cards that were challenging to categorize</li>
                    <li>Complete a simple matching worksheet to assess understanding</li>
                    <li>Reflect on how goods and services help meet community needs and wants</li>
                  </ul>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-amber-700">Differentiation</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-amber-600">For Students Who Need Additional Support:</h3>
                  <ul className="list-disc pl-5">
                    <li>Provide fewer, more distinct examples of goods and services</li>
                    <li>Use color-coding to help distinguish between goods and services cards</li>
                    <li>Allow students to work with a partner</li>
                    <li>Provide visual cues on the sorting containers</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-amber-600">
                    For Students Who Need Additional Challenge:
                  </h3>
                  <ul className="list-disc pl-5">
                    <li>Include examples that could be both goods and services in different contexts</li>
                    <li>Ask students to categorize goods and services as needs or wants</li>
                    <li>Have students identify the workers who provide specific goods and services</li>
                    <li>Challenge students to create their own goods and services cards</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-amber-700">Assessment</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-amber-600">Observation:</h3>
                  <ul className="list-disc pl-5">
                    <li>
                      Monitor students' ability to differentiate between goods and services during the sorting activity
                    </li>
                    <li>Observe students' participation in discussions and group work</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-amber-600">Conversation:</h3>
                  <ul className="list-disc pl-5">
                    <li>Ask students to explain why they categorized items as goods or services</li>
                    <li>Have students identify goods and services they use in their daily lives</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-amber-600">Product:</h3>
                  <ul className="list-disc pl-5">
                    <li>Evaluate the accuracy of students' sorting activities</li>
                    <li>Review completed matching worksheets</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-amber-700">Extensions</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Create a class book of goods and services in the community</li>
                <li>Set up a classroom store where students can practice providing goods and services</li>
                <li>Take a community walk to identify businesses that provide goods and services</li>
                <li>Create a goods and services map of the community</li>
                <li>Invite community workers to discuss the goods or services they provide</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-amber-700">Curriculum Connections</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2 flex items-center text-amber-600">
                    <DollarSign className="mr-2 h-5 w-5" />
                    Economic Decision Making
                  </h3>
                  <p className="text-sm text-gray-600">
                    This activity directly supports the "Goods and Services" section of the Economic Decision Making
                    strand, helping students understand how communities provide goods and services to meet needs and
                    wants.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 flex items-center text-amber-600">
                    <CheckSquare className="mr-2 h-5 w-5" />
                    Specific Curriculum Outcomes
                  </h3>
                  <ul className="text-sm text-gray-600 list-disc pl-5">
                    <li>Identify goods and services available in my community</li>
                    <li>Classify workers who provide goods and services</li>
                    <li>Appreciate that goods and services provide both needs and wants</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-amber-700">Cross-Curricular Integration</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  <strong>Mathematics:</strong> Sorting, classifying, counting
                </li>
                <li>
                  <strong>Language Arts:</strong> Vocabulary development, descriptive language
                </li>
                <li>
                  <strong>Art:</strong> Creating visual representations of goods and services
                </li>
                <li>
                  <strong>Drama:</strong> Role-playing community workers
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-amber-700">Teacher Tips</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Use real objects when possible to demonstrate goods</li>
                <li>Incorporate examples relevant to your specific community</li>
                <li>Consider creating a word wall with goods and services vocabulary</li>
                <li>Take photos of local businesses to use as examples</li>
                <li>Connect to students' personal experiences with goods and services</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-amber-700">Additional Resources</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Children's books about goods and services</li>
                <li>Videos explaining economic concepts for young learners</li>
                <li>Printable goods and services sorting cards</li>
                <li>Community worker picture cards</li>
                <li>Interactive online games about goods and services</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex justify-between">
        <Link href="/curriculum/grade2-subjects/activities/social-studies/conflict-resolution-heroes">
          <Button variant="outline" className="flex items-center">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous Activity
          </Button>
        </Link>
        <Link href="/curriculum/grade2-subjects/activities/social-studies/cultural-celebration-day">
          <Button variant="outline" className="flex items-center">
            Next Activity
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
