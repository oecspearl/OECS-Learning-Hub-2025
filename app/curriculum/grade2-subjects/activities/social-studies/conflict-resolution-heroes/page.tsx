import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Breadcrumb } from "@/components/breadcrumb"
import { FallbackImage } from "@/components/fallback-image"
import { ChevronLeft, ChevronRight, Clock, Users, BookOpen, BarChart2, CheckSquare } from "lucide-react"

export default function ConflictResolutionHeroesPage() {
  return (
    <div className="container mx-auto py-8">
      
      <div className="mb-8">
        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2 text-blue-700">Conflict Resolution Heroes</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  <BookOpen className="mr-1 h-4 w-4" />
                  Civic Participation
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  <Clock className="mr-1 h-4 w-4" />
                  40 minutes
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
                  src="/conflict-resolution-heroes.png"
                  alt="Conflict Resolution Heroes"
                  fallbackSrc="/children-resolving-conflict.png"
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
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">Overview</h2>
              <p className="mb-4">
                In this activity, students will learn and practice strategies for resolving conflicts through role-play
                and discussion. This activity connects to the Civic Participation strand of the curriculum, helping
                students understand how rights and responsibilities are important for building strong communities.
              </p>
              <p>
                Students will identify examples of conflicts, learn peaceful resolution strategies, and practice
                applying these strategies through role-play scenarios. This activity promotes social skills, empathy,
                and an understanding of how to maintain positive relationships in the community.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">Learning Objectives</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Identify examples of conflict in communities and neighborhoods</li>
                <li>Role play ways to resolve differences and arguments</li>
                <li>Appreciate the role of police and other community helpers in dealing with conflict</li>
                <li>Recognize when to seek help from adults to resolve conflicts</li>
                <li>Develop skills for peaceful conflict resolution</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">Materials</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Conflict scenario cards</li>
                <li>Chart paper and markers</li>
                <li>Puppets or simple props for role-play (optional)</li>
                <li>Conflict resolution steps poster</li>
                <li>Pictures depicting various conflicts</li>
                <li>Superhero capes or badges (optional)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">Preparation</h2>
              <ol className="space-y-2 list-decimal pl-5">
                <li>Create a set of age-appropriate conflict scenario cards</li>
                <li>Prepare a simple poster showing conflict resolution steps</li>
                <li>Gather pictures depicting various conflicts for discussion</li>
                <li>Set up a role-play area in the classroom</li>
                <li>Create "Conflict Resolution Hero" badges (optional)</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">Steps</h2>
              <ol className="space-y-4 list-decimal pl-5">
                <li>
                  <strong>Introduction (5 minutes):</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Read a simple scenario about two friends having a disagreement</li>
                    <li>Ask students to identify what is happening in the scenario</li>
                    <li>Introduce the concept of conflict and explain that conflicts are normal</li>
                  </ul>
                </li>
                <li>
                  <strong>Identifying Conflicts (10 minutes):</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Show pictures depicting various conflicts and non-conflicts</li>
                    <li>Have students identify which situations show conflicts</li>
                    <li>Create a list of examples of conflicts that occur in the classroom, home, and community</li>
                  </ul>
                </li>
                <li>
                  <strong>Conflict Resolution Strategies (10 minutes):</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Introduce simple conflict resolution steps: Stop, Think, Talk, Solve</li>
                    <li>Explain each step with examples</li>
                    <li>Discuss when it's appropriate to seek help from adults</li>
                    <li>Show a short video about conflict resolution</li>
                  </ul>
                </li>
                <li>
                  <strong>Role-Play Activities (15 minutes):</strong>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Divide students into small groups</li>
                    <li>Give each group a conflict scenario card</li>
                    <li>Have groups role-play the conflict and demonstrate a positive resolution</li>
                    <li>After each role-play, discuss the strategies used and their effectiveness</li>
                  </ul>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">Differentiation</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-blue-600">For Students Who Need Additional Support:</h3>
                  <ul className="list-disc pl-5">
                    <li>Provide simpler conflict scenarios</li>
                    <li>Allow students to observe role-plays before participating</li>
                    <li>Offer visual supports for conflict resolution steps</li>
                    <li>Pair students with supportive peers for role-play activities</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-blue-600">
                    For Students Who Need Additional Challenge:
                  </h3>
                  <ul className="list-disc pl-5">
                    <li>Present more complex conflict scenarios</li>
                    <li>Ask students to create their own conflict scenarios</li>
                    <li>Have students develop a conflict resolution guide for younger students</li>
                    <li>Encourage students to explore multiple solutions to the same conflict</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">Assessment</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-blue-600">Observation:</h3>
                  <ul className="list-disc pl-5">
                    <li>Monitor students' ability to identify conflicts during picture activities</li>
                    <li>Observe students' use of conflict resolution strategies during role-plays</li>
                    <li>Note students' understanding of when to seek adult help</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-blue-600">Conversation:</h3>
                  <ul className="list-disc pl-5">
                    <li>Ask students to explain the conflict resolution steps</li>
                    <li>Have students reflect on how they've resolved conflicts in their own lives</li>
                    <li>Discuss the role of community helpers in resolving larger conflicts</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-blue-600">Product:</h3>
                  <ul className="list-disc pl-5">
                    <li>Evaluate students' role-play performances for appropriate resolution strategies</li>
                    <li>Review journal entries about conflict resolution</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">Extensions</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Create a class book of conflict resolution stories</li>
                <li>Establish a "Peace Corner" in the classroom for resolving conflicts</li>
                <li>
                  Invite community helpers (police officer, counselor) to discuss their role in conflict resolution
                </li>
                <li>Develop a class pledge for peaceful conflict resolution</li>
                <li>Create conflict resolution superhero characters with special conflict-solving powers</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-700">Curriculum Connections</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2 flex items-center text-blue-600">
                    <Users className="mr-2 h-5 w-5" />
                    Civic Participation
                  </h3>
                  <p className="text-sm text-gray-600">
                    This activity directly supports the "Resolving Conflict in our Communities" section of the Civic
                    Participation strand, helping students understand how to maintain positive relationships and resolve
                    differences peacefully.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 flex items-center text-blue-600">
                    <CheckSquare className="mr-2 h-5 w-5" />
                    Specific Curriculum Outcomes
                  </h3>
                  <ul className="text-sm text-gray-600 list-disc pl-5">
                    <li>Identify examples of conflict in our communities and neighborhoods</li>
                    <li>Role play ways to resolve differences and arguments</li>
                    <li>Appreciate the role of police and other community helpers in dealing with conflict</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-700">Cross-Curricular Integration</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  <strong>Language Arts:</strong> Storytelling, dialogue, listening skills
                </li>
                <li>
                  <strong>Drama:</strong> Role-play, character development
                </li>
                <li>
                  <strong>Health:</strong> Social-emotional learning, relationship skills
                </li>
                <li>
                  <strong>Art:</strong> Creating conflict resolution posters or comics
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-700">Teacher Tips</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Model conflict resolution strategies in real classroom situations</li>
                <li>Use puppets for students who may be shy about role-playing</li>
                <li>Be sensitive to students who may have experienced serious conflicts at home</li>
                <li>Reinforce conflict resolution skills throughout the school year</li>
                <li>Create visual reminders of conflict resolution steps to display in the classroom</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-700">Additional Resources</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Children's books about conflict resolution</li>
                <li>Conflict resolution posters and visual aids</li>
                <li>Videos demonstrating peaceful conflict resolution</li>
                <li>Puppet sets for role-playing</li>
                <li>Conflict resolution games and activities</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex justify-between">
        <Link href="/curriculum/grade2-subjects/activities/social-studies/community-map-makers">
          <Button variant="outline" className="flex items-center">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous Activity
          </Button>
        </Link>
        <Link href="/curriculum/grade2-subjects/activities/social-studies/goods-and-services-sort">
          <Button variant="outline" className="flex items-center">
            Next Activity
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
