import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Breadcrumb } from "@/components/breadcrumb"
import { FallbackImage } from "@/components/fallback-image"
import { ChevronLeft, ChevronRight, Clock, Users, BookOpen, BarChart2, CheckSquare } from "lucide-react"

export default function FamilyTreeExplorerPage() {
  return (
    <div className="container mx-auto py-8">
      
      <div className="mb-8">
        <div className="bg-gradient-to-r from-teal-100 to-green-100 p-6 rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2 text-teal-700">Family Tree Explorer</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-800">
                  <BookOpen className="mr-1 h-4 w-4" />
                  Historical and Cultural Thinking
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  <Clock className="mr-1 h-4 w-4" />
                  45 minutes
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
                  src="/family-tree-explorer.png"
                  alt="Family Tree Explorer"
                  fallbackSrc="/family-tree-activity.png"
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
              <h2 className="text-2xl font-semibold mb-4 text-teal-700">Overview</h2>
              <p className="mb-4">
                In this activity, students will create a family tree to understand family relationships and explore
                their cultural heritage. This activity connects to the Historical and Cultural Thinking strand of the
                curriculum, helping students appreciate how their past and present shape their identity.
              </p>
              <p>
                Students will interview family members, gather information about their relatives, and create a visual
                representation of their family tree. This activity promotes research skills, cultural awareness, and an
                understanding of family relationships.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-teal-700">Learning Objectives</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Describe relationships to other family members</li>
                <li>Represent family relations using a family tree</li>
                <li>Know that family relationships can be represented on a family tree</li>
                <li>
                  Appreciate that our family tree is made up of a diverse range of people who share a common heritage
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-teal-700">Materials</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Large drawing paper or construction paper</li>
                <li>Colored markers, crayons, or pencils</li>
                <li>Scissors and glue</li>
                <li>Family photographs (optional)</li>
                <li>Sample family tree templates</li>
                <li>Interview question sheet</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-teal-700">Preparation</h2>
              <ol className="space-y-2 list-decimal pl-5">
                <li>Prepare sample family tree templates for students to reference</li>
                <li>Create a simple interview question sheet for students to take home</li>
                <li>Send a note to parents/guardians explaining the activity and requesting their assistance</li>
                <li>Gather examples of family trees from different cultures to show diversity</li>
                <li>Prepare your own family tree as an example to share with students</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-teal-700">Steps</h2>
              <ol className="space-y-4 list-decimal pl-5">
                <li>
                  <strong>Introduction (10 minutes):</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Begin by playing the "Baby Shark" song, which mentions different family members</li>
                    <li>Discuss the different family relationships mentioned in the song</li>
                    <li>Show examples of family trees and explain how they represent family relationships</li>
                  </ul>
                </li>
                <li>
                  <strong>Interview Preparation (5 minutes):</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Distribute the interview question sheets</li>
                    <li>Review the questions with students and explain how to conduct a respectful interview</li>
                    <li>Assign students to interview family members at home about their family relationships</li>
                  </ul>
                </li>
                <li>
                  <strong>Family Tree Creation (25 minutes):</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>
                      Using the information gathered from interviews, guide students in creating their family trees
                    </li>
                    <li>Demonstrate how to organize family members by generation (grandparents, parents, siblings)</li>
                    <li>Encourage students to add names, relationships, and drawings or photos if available</li>
                    <li>
                      Help students understand that their family tree should reflect either their maternal or paternal
                      side
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Sharing and Reflection (5 minutes):</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Have students share their family trees with a partner or small group</li>
                    <li>Guide students to discuss similarities and differences in their family structures</li>
                    <li>Lead a class discussion about what students learned about their families</li>
                  </ul>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-teal-700">Differentiation</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-teal-600">For Students Who Need Additional Support:</h3>
                  <ul className="list-disc pl-5">
                    <li>Provide a pre-drawn family tree template with spaces to fill in names</li>
                    <li>Offer one-on-one assistance during the creation process</li>
                    <li>Allow students to create a smaller family tree focusing only on immediate family</li>
                    <li>Provide picture supports for family relationship terms</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-teal-600">
                    For Students Who Need Additional Challenge:
                  </h3>
                  <ul className="list-disc pl-5">
                    <li>Encourage students to extend their family tree to include more generations</li>
                    <li>Ask students to add information about where family members were born or lived</li>
                    <li>
                      Have students research and include cultural traditions associated with their family heritage
                    </li>
                    <li>Challenge students to create a digital family tree using appropriate technology</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-teal-700">Assessment</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-teal-600">Observation:</h3>
                  <ul className="list-disc pl-5">
                    <li>Monitor students' understanding of family relationships during discussions</li>
                    <li>Observe students' ability to organize family members in a logical structure</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-teal-600">Conversation:</h3>
                  <ul className="list-disc pl-5">
                    <li>Ask students to explain their family relationships using their family tree</li>
                    <li>Have students reflect on what they learned about their family through this activity</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-teal-600">Product:</h3>
                  <ul className="list-disc pl-5">
                    <li>Evaluate the completed family tree for accuracy in representing relationships</li>
                    <li>Check that students have correctly labeled family members and their relationships</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-teal-700">Extensions</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Create a class book of family trees to celebrate the diversity of family structures</li>
                <li>Have students write stories about a special family member from their family tree</li>
                <li>Explore family traditions and celebrations connected to students' cultural heritage</li>
                <li>Create a "Family Bracelet" with letter beads representing different family members</li>
                <li>Develop a "Family Train" where each car represents a different family member</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-teal-700">Curriculum Connections</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2 flex items-center text-teal-600">
                    <Users className="mr-2 h-5 w-5" />
                    Historical and Cultural Thinking
                  </h3>
                  <p className="text-sm text-gray-600">
                    This activity directly supports the "Our Families" section of the Historical and Cultural Thinking
                    strand, helping students understand family relationships and appreciate their cultural heritage.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 flex items-center text-teal-600">
                    <CheckSquare className="mr-2 h-5 w-5" />
                    Specific Curriculum Outcomes
                  </h3>
                  <ul className="text-sm text-gray-600 list-disc pl-5">
                    <li>Know that family relationships can be represented on a family tree</li>
                    <li>Represent relationships of families on a simple family tree</li>
                    <li>
                      Appreciate that our family tree is made up of a diverse range of people who share a common
                      heritage
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-teal-700">Cross-Curricular Integration</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  <strong>Language Arts:</strong> Writing about family members, interviewing skills
                </li>
                <li>
                  <strong>Art:</strong> Creating visual representations, design skills
                </li>
                <li>
                  <strong>Mathematics:</strong> Organizing information in a hierarchical structure
                </li>
                <li>
                  <strong>Technology:</strong> Using digital tools to create family trees (extension)
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-teal-700">Teacher Tips</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Be sensitive to diverse family structures and use inclusive language</li>
                <li>Provide alternative options for students who may be adopted or in foster care</li>
                <li>Have extra materials available for students who may not have access to family photos</li>
                <li>Consider creating a digital template for students who prefer using technology</li>
                <li>Prepare for emotional responses as students discuss their families</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-teal-700">Additional Resources</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Sample family tree templates</li>
                <li>Children's books about families and family trees</li>
                <li>Videos explaining family relationships</li>
                <li>Digital family tree creation tools</li>
                <li>Cultural heritage exploration resources</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex justify-between">
        <Link href="/curriculum/grade2-subjects/activities/social-studies">
          <Button variant="outline" className="flex items-center">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Activities
          </Button>
        </Link>
        <Link href="/curriculum/grade2-subjects/activities/social-studies/community-map-makers">
          <Button variant="outline" className="flex items-center">
            Next Activity
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
