import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, Clock, Users, BookOpen, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/breadcrumb"

export default function StorytellingCirclePage() {
  return (
    <div className="container mx-auto py-8">
            <Link href="/curriculum/grade2-subjects/activities/language-arts">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Language Arts Activities
        </Button>
      </Link>

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl shadow-md mb-8">
        <h1 className="text-3xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Storytelling Circle
        </h1>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          An engaging activity to develop speaking skills, active listening, and narrative structure understanding.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge variant="outline" className="flex items-center gap-1 text-sm">
                  <Clock className="h-3.5 w-3.5" /> 30 minutes
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1 text-sm">
                  <Users className="h-3.5 w-3.5" /> Whole class or small groups
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1 text-sm">
                  <BookOpen className="h-3.5 w-3.5" /> Listening & Speaking
                </Badge>
              </div>

              <h2 className="text-2xl font-bold mb-4 text-purple-700">Overview</h2>
              <p className="mb-6">
                The Storytelling Circle is an interactive activity where students take turns sharing stories from their
                own experiences or retelling stories they've heard. This activity creates a supportive environment for
                students to practice their speaking skills while developing active listening habits and understanding
                narrative structure.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-purple-700">Learning Objectives</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Develop confidence in speaking to a group</li>
                <li>Practice active listening skills</li>
                <li>Understand and apply basic narrative structure (beginning, middle, end)</li>
                <li>Expand vocabulary through exposure to peers' language</li>
                <li>Respect turn-taking and appropriate audience behavior</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-purple-700">Materials Needed</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>A comfortable seating area arranged in a circle</li>
                <li>Optional: A special "storyteller's chair" or cushion</li>
                <li>Optional: Story starter cards or picture prompts</li>
                <li>Optional: A soft object to pass around (like a stuffed animal or "talking stick")</li>
                <li>Timer (for keeping stories to an appropriate length)</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-purple-700">Preparation</h2>
              <ol className="list-decimal pl-6 mb-6 space-y-2">
                <li>Arrange seating in a circle where everyone can see each other</li>
                <li>Prepare story starter cards if using them</li>
                <li>Review the rules for respectful listening with students</li>
                <li>Consider modeling a short story to demonstrate expectations</li>
              </ol>

              <h2 className="text-2xl font-bold mb-4 text-purple-700">Activity Steps</h2>
              <ol className="list-decimal pl-6 mb-6 space-y-3">
                <li>
                  <strong>Introduction (5 minutes):</strong>
                  <ul className="list-disc pl-6 mt-1">
                    <li>Gather students in a circle and explain the activity</li>
                    <li>
                      Review the rules: one person speaks at a time, listeners show respect, stories should have a
                      beginning, middle, and end
                    </li>
                    <li>Demonstrate active listening behaviors (eye contact, nodding, etc.)</li>
                  </ul>
                </li>
                <li>
                  <strong>Storytelling (20 minutes):</strong>
                  <ul className="list-disc pl-6 mt-1">
                    <li>Begin with a volunteer or select a student to start</li>
                    <li>The storyteller shares a personal experience or retells a familiar story</li>
                    <li>Encourage students to use expressive voices and gestures</li>
                    <li>Keep stories to 2-3 minutes each</li>
                    <li>Pass the talking object to the next student</li>
                  </ul>
                </li>
                <li>
                  <strong>Reflection (5 minutes):</strong>
                  <ul className="list-disc pl-6 mt-1">
                    <li>Ask students what they enjoyed about the stories they heard</li>
                    <li>Discuss what makes a story interesting or easy to follow</li>
                    <li>Highlight positive examples of storytelling techniques observed</li>
                  </ul>
                </li>
              </ol>

              <h2 className="text-2xl font-bold mb-4 text-purple-700">Differentiation</h2>
              <div className="mb-6">
                <p className="font-semibold mb-2">For students who need additional support:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Provide story frames or sentence starters</li>
                  <li>Allow them to tell their story to a partner before sharing with the group</li>
                  <li>Use picture prompts to help structure their story</li>
                </ul>

                <p className="font-semibold mb-2">For students who need additional challenge:</p>
                <ul className="list-disc pl-6">
                  <li>Encourage the use of dialogue and descriptive language</li>
                  <li>Ask them to incorporate a specific literary element (e.g., problem/solution)</li>
                  <li>Have them create a story based on a specific theme or incorporating certain words</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mb-4 text-purple-700">Assessment</h2>
              <p className="mb-4">Observe and note students' abilities to:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Speak clearly and audibly to the group</li>
                <li>Structure a story with a beginning, middle, and end</li>
                <li>Listen attentively while others are speaking</li>
                <li>Recall details from peers' stories</li>
                <li>Follow the established rules for the activity</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-purple-700">Extensions</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Create a class book of illustrated stories from the storytelling circle</li>
                <li>Record stories (audio or video) to create a digital storytelling library</li>
                <li>Have students work in pairs to act out each other's stories</li>
                <li>Connect to writing by having students write down their oral stories</li>
                <li>Invite family members for a special storytelling circle event</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="relative h-48 w-full mb-4">
                  <Image
                    src="/storytelling-circle.png"
                    alt="Students in a storytelling circle"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-purple-700">Curriculum Connections</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Oral Language Development: Speaking clearly and expressively</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Listening Comprehension: Attending to and understanding spoken language</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Narrative Structure: Understanding story elements and sequence</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Social Skills: Turn-taking and respectful communication</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-purple-700">Teacher Tips</h3>
                <ul className="space-y-4">
                  <li className="pb-3 border-b border-gray-100">
                    <p className="italic text-gray-600 mb-1">
                      "I use a special storyteller's hat that students wear when it's their turn. It helps them get into
                      character and signals to others who has the floor."
                    </p>
                    <p className="text-sm text-right">- Ms. Johnson, Grade 2 Teacher</p>
                  </li>
                  <li className="pb-3 border-b border-gray-100">
                    <p className="italic text-gray-600 mb-1">
                      "For my shy students, I let them practice with a partner first or use picture cards to help
                      structure their story."
                    </p>
                    <p className="text-sm text-right">- Mr. Garcia, Grade 2 Teacher</p>
                  </li>
                  <li>
                    <p className="italic text-gray-600 mb-1">
                      "We record one storytelling circle session each month to create a digital portfolio showing
                      students' progress in speaking skills throughout the year."
                    </p>
                    <p className="text-sm text-right">- Mrs. Patel, Grade 2 Teacher</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <Link href="/curriculum/grade2-subjects/activities/language-arts">
          <Button variant="outline">
            <ChevronLeft className="mr-2 h-4 w-4" /> All Activities
          </Button>
        </Link>
        <Link href="/curriculum/grade2-subjects/activities/language-arts/follow-the-leader">
          <Button>
            Next Activity <ChevronLeft className="ml-2 h-4 w-4 rotate-180" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
