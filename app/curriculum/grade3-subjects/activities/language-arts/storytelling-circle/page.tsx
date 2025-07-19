import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Headphones, Book, ListChecks, User, Users } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import Image from "next/image"

export default function StorytellingCirclePage() {
  return (
    <div className="container mx-auto py-8">
            <Link href="/curriculum/grade3-subjects/activities/language-arts">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Language Arts Activities
        </Button>
      </Link>

      <div className="w-full min-w-full max-w-[100vw] mb-8">
        <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            Storytelling Circle
          </h1>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            An engaging activity that develops listening, speaking, and cultural appreciation skills through
            collaborative storytelling.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-5 w-5 text-purple-600" />
                Activity Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                The Storytelling Circle is a structured activity where students take turns sharing and listening to
                stories. This practice builds oral language skills, active listening abilities, and cultural
                appreciation while fostering confidence in public speaking. Students develop their narrative skills
                through personal anecdotes, cultural tales, or creative prompts.
              </p>

              <div className="relative w-full h-64 mb-6 rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=600&query=diverse+children+sitting+in+circle+sharing+stories+classroom+illustration"
                  alt="Storytelling Circle Activity"
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold mb-2">Learning Outcomes</h3>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Develop speaking skills through clear, sequenced storytelling</li>
                <li>Enhance listening comprehension by actively engaging with peers' stories</li>
                <li>Build confidence in public speaking in a supportive environment</li>
                <li>Foster appreciation for diverse cultural stories and perspectives</li>
                <li>Strengthen vocabulary development through exposure to varied narratives</li>
                <li>Practice critical thinking by analyzing story elements</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">Curriculum Connections</h3>
              <div className="mb-4">
                <p className="mb-2">
                  <strong>ELO 1:</strong> Learners will explore, use, and critically apply oral language for pleasure,
                  personal growth, to foster relationships and to develop an appreciation and celebration of culture and
                  oral languages.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    SCO 1.1: Engage with and share various genres of music, oral poetry, artwork, and oral stories that
                    have been chosen for pleasure.
                  </li>
                  <li>SCO 1.3: Respond to oral/aural language through improvisational drama and/or artwork.</li>
                  <li>
                    SCO 1.22: Participate in the sharing of culturally relevant songs, raps, drama, and poetry with
                    fluency, rhythm, and pace.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ListChecks className="h-5 w-5 text-purple-600" />
                Implementation Steps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <span className="flex items-center justify-center bg-purple-600 text-white rounded-full w-6 h-6 mr-2 text-sm">
                      1
                    </span>
                    Preparation
                  </h3>
                  <ul className="list-disc pl-8 space-y-1">
                    <li>Arrange classroom seating in a circle to create an inclusive atmosphere</li>
                    <li>Prepare story prompts, visual cues, or cultural artifacts to inspire storytelling</li>
                    <li>Create a "talking piece" (special object) that indicates who has the floor to speak</li>
                    <li>Establish clear guidelines for respectful listening and speaking</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <span className="flex items-center justify-center bg-purple-600 text-white rounded-full w-6 h-6 mr-2 text-sm">
                      2
                    </span>
                    Introduction (10 minutes)
                  </h3>
                  <ul className="list-disc pl-8 space-y-1">
                    <li>Begin with a teacher model story to demonstrate effective storytelling techniques</li>
                    <li>
                      Review the elements of a good story: beginning, middle, end, characters, setting, problem,
                      solution
                    </li>
                    <li>Explain the rules: one speaker at a time, active listening, appropriate responses</li>
                    <li>
                      Introduce the day's theme or prompt (e.g., "A time I helped someone," "A celebration in my
                      family")
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <span className="flex items-center justify-center bg-purple-600 text-white rounded-full w-6 h-6 mr-2 text-sm">
                      3
                    </span>
                    Think Time (5 minutes)
                  </h3>
                  <ul className="list-disc pl-8 space-y-1">
                    <li>Provide students with quiet thinking time to plan their stories</li>
                    <li>Offer simple graphic organizers for those who need support organizing their thoughts</li>
                    <li>Encourage students to use Home Language expressions where appropriate</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <span className="flex items-center justify-center bg-purple-600 text-white rounded-full w-6 h-6 mr-2 text-sm">
                      4
                    </span>
                    Storytelling Circle (25-30 minutes)
                  </h3>
                  <ul className="list-disc pl-8 space-y-1">
                    <li>Pass the talking piece around the circle, giving each student 2-3 minutes to share</li>
                    <li>
                      Remind listeners to use active listening skills (eye contact, nodding, appropriate reactions)
                    </li>
                    <li>After each story, allow 1-2 students to respond with a comment or question</li>
                    <li>Acknowledge and celebrate cultural elements in stories</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <span className="flex items-center justify-center bg-purple-600 text-white rounded-full w-6 h-6 mr-2 text-sm">
                      5
                    </span>
                    Reflection (5-10 minutes)
                  </h3>
                  <ul className="list-disc pl-8 space-y-1">
                    <li>Lead a brief discussion about common themes across stories</li>
                    <li>Ask students to identify effective storytelling techniques they observed</li>
                    <li>Have students complete a simple self-reflection on their speaking and listening</li>
                    <li>Set goals for the next storytelling circle</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <span className="flex items-center justify-center bg-purple-600 text-white rounded-full w-6 h-6 mr-2 text-sm">
                      6
                    </span>
                    Extension Activities
                  </h3>
                  <ul className="list-disc pl-8 space-y-1">
                    <li>Students illustrate a favorite story from the circle</li>
                    <li>Create a class book of stories with each student contributing their tale</li>
                    <li>Perform selected stories as mini-plays or with puppets</li>
                    <li>Record stories (with permission) to create a digital storytelling library</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-purple-600" />
                Teacher Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">Materials Needed</h3>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>A special "talking piece" (e.g., decorated stick, soft toy, special stone)</li>
                <li>Story prompt cards or visual cues</li>
                <li>Simple graphic organizers for planning stories</li>
                <li>Timer for keeping stories concise</li>
                <li>Cultural artifacts or images to inspire storytelling</li>
                <li>Self-reflection sheets for students</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">Sample Story Prompts</h3>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Tell about a time when you were brave</li>
                <li>Share a special celebration or tradition in your family</li>
                <li>Describe an adventure you had with a friend or family member</li>
                <li>Tell about a time you learned something important</li>
                <li>Share a story your grandparents or elders told you</li>
                <li>Describe a place that is special to you</li>
              </ul>

              <div className="bg-purple-50 p-4 rounded-md border border-purple-200">
                <h3 className="text-lg font-semibold mb-2 text-purple-700">Assessment Ideas</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Observational notes on students' speaking skills (clarity, sequence, expression)</li>
                  <li>Checklist for active listening behaviors</li>
                  <li>Self-assessment rubric for students to reflect on their storytelling</li>
                  <li>Peer feedback forms with guided prompts</li>
                  <li>Audio recordings (with permission) to track progress over time</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-600" />
                Differentiation Strategies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-md font-semibold mb-1 text-purple-700">For Students Who Excel</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Challenge with more complex story structures or themes</li>
                    <li>Encourage incorporation of literary devices (similes, metaphors)</li>
                    <li>Assign leadership roles in facilitating the circle</li>
                    <li>Invite to create original story prompts for the class</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-md font-semibold mb-1 text-purple-700">For Students Who Need Support</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Provide sentence starters or story frames</li>
                    <li>Allow drawing first, then telling the story from the drawing</li>
                    <li>Offer partner storytelling options</li>
                    <li>Use visual cues and picture sequences to support organization</li>
                    <li>Pre-teach vocabulary related to the theme</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-md font-semibold mb-1 text-purple-700">Language Considerations</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Encourage use of Home Language expressions where appropriate</li>
                    <li>Celebrate bilingual storytelling abilities</li>
                    <li>Provide key vocabulary in multiple languages as needed</li>
                    <li>Respect cultural storytelling traditions and formats</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Headphones className="h-5 w-5 text-purple-600" />
                Digital Enhancement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Audio Recording:</strong> Use simple recording devices to capture stories for reflection and
                  assessment
                </li>
                <li>
                  <strong>Digital Storytelling:</strong> Create simple digital stories with images and narration using
                  apps like Book Creator
                </li>
                <li>
                  <strong>Virtual Circle:</strong> Connect with another class via video call for a joint storytelling
                  session
                </li>
                <li>
                  <strong>Story Maps:</strong> Use digital graphic organizers to plan stories
                </li>
                <li>
                  <strong>Presentation Tools:</strong> Allow students to enhance their stories with simple slide
                  presentations
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-purple-50 p-6 rounded-xl shadow-md border border-purple-200 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">Cultural Connections</h2>
        <p className="mb-4">
          The Storytelling Circle has deep roots in many cultural traditions around the world. In many Indigenous
          communities, circle gatherings are sacred spaces for sharing wisdom and preserving cultural heritage. In
          Caribbean cultures, storytelling (sometimes called "Di Kwik") is a treasured tradition for passing down
          folklore, history, and moral lessons.
        </p>
        <p>
          When implementing this activity, acknowledge these cultural connections and invite students to share
          storytelling traditions from their own cultural backgrounds. Consider inviting community members or elders to
          participate in special storytelling sessions to enrich the experience with authentic cultural perspectives.
        </p>
      </div>

      <div className="flex justify-center">
        <Link href="/curriculum/grade3-subjects/activities/language-arts">
          <Button variant="outline" className="mr-4">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Activities
          </Button>
        </Link>
        <Link href="/curriculum/grade3-subjects/activities/language-arts/reading-response-journals">
          <Button className="bg-purple-600 hover:bg-purple-700">Next Activity: Reading Response Journals</Button>
        </Link>
      </div>
    </div>
  )
}
