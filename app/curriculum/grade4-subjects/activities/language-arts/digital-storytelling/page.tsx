import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Clock, Users, Target, CheckSquare, Lightbulb } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { FallbackImage } from "@/components/fallback-image"

export default function DigitalStorytellingPage() {
  return (
    <div className="container mx-auto py-8">
            <Link href="/curriculum/grade4-subjects/activities/language-arts">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Language Arts Activities
        </Button>
      </Link>

      <div className="mb-8">
        <div className="bg-gradient-to-r from-green-100 to-teal-100 p-6 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-green-700">Digital Storytelling</h1>
          <p className="text-gray-700">
            Students create multimedia stories combining text, images, audio, and simple animations to develop narrative
            writing skills while building digital literacy.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Activity Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                In this activity, students will create digital stories that combine written narratives with visual and
                audio elements. They will learn to plan, draft, and revise their stories, then use digital tools to
                bring their narratives to life with images, recorded narration, music, and simple animations. This
                project integrates writing, speaking, visual literacy, and technology skills in a creative context.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-green-600" />
                  <span>
                    <strong>Duration:</strong> 3-4 sessions (45-60 minutes each)
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-green-600" />
                  <span>
                    <strong>Group Size:</strong> Individual or pairs
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <Target className="h-5 w-5 mr-2 text-green-600" />
                  <strong>Learning Objectives:</strong>
                </div>
                <ul className="list-disc pl-8 space-y-1">
                  <li>Develop narrative writing skills with clear beginning, middle, and end</li>
                  <li>Integrate technology with writing to create multimedia presentations</li>
                  <li>Practice clear oral narration with appropriate expression</li>
                  <li>Select and create visual elements that enhance storytelling</li>
                  <li>Apply the writing process (planning, drafting, revising, editing, publishing)</li>
                  <li>Develop digital literacy skills through multimedia creation</li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <CheckSquare className="h-5 w-5 mr-2 text-green-600" />
                  <strong>Curriculum Connections:</strong>
                </div>
                <ul className="list-disc pl-8 space-y-1">
                  <li>
                    <strong>Writing & Representing:</strong> Write narratives with well-developed characters, setting,
                    and plot
                  </li>
                  <li>
                    <strong>Writing & Representing:</strong> Use technology to produce and publish writing
                  </li>
                  <li>
                    <strong>Listening & Speaking:</strong> Speak clearly with appropriate pacing and expression
                  </li>
                  <li>
                    <strong>Reading & Viewing:</strong> Analyze how visual elements contribute to meaning in texts
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <Lightbulb className="h-5 w-5 mr-2 text-green-600" />
                  <strong>Materials Needed:</strong>
                </div>
                <ul className="list-disc pl-8 space-y-1">
                  <li>Digital devices (tablets, computers) with internet access</li>
                  <li>Digital storytelling software or apps (e.g., Book Creator, StoryJumper, Adobe Spark)</li>
                  <li>Storyboard templates</li>
                  <li>Writing materials for planning and drafting</li>
                  <li>Microphones or recording devices</li>
                  <li>Access to royalty-free images, music, and sound effects</li>
                  <li>Sample digital stories appropriate for Grade 4 students</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="mb-6">
            <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
              <FallbackImage
                src="/placeholder.svg?height=200&width=300&query=children digital storytelling"
                alt="Students creating digital stories"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="pt-4">
              <p className="text-sm text-gray-600 italic">
                Students use digital tools to combine text, images, and audio to create engaging multimedia stories.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Teacher Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <strong className="text-green-700">Choose Appropriate Tools:</strong> Select digital storytelling
                  platforms that match your students' technology skills and available devices.
                </li>
                <li>
                  <strong className="text-green-700">Focus on Story First:</strong> Emphasize that a good story is the
                  foundation; technology enhances but doesn't replace quality writing.
                </li>
                <li>
                  <strong className="text-green-700">Create a Library:</strong> Build a collection of appropriate
                  images, music, and sound effects that students can access.
                </li>
                <li>
                  <strong className="text-green-700">Tech Buddies:</strong> Pair tech-savvy students with those who need
                  more support.
                </li>
                <li>
                  <strong className="text-green-700">Share Widely:</strong> Create opportunities for students to share
                  their digital stories with other classes, parents, or the community.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Implementation Steps</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-green-700">Session 1: Introduction and Planning</h3>
              <ol className="list-decimal pl-8 space-y-2">
                <li>
                  <strong>Introduction to Digital Storytelling (15 minutes):</strong> Show examples of digital stories
                  and discuss the elements that make them effective (narrative structure, visuals, audio).
                </li>
                <li>
                  <strong>Story Planning (20 minutes):</strong> Students brainstorm story ideas and select one to
                  develop. Provide planning templates for characters, setting, and plot.
                </li>
                <li>
                  <strong>Storyboarding (20 minutes):</strong> Students create storyboards that outline their narrative
                  and sketch the visuals they plan to include for each part of their story.
                </li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-green-700">Session 2: Writing and Visual Selection</h3>
              <ol className="list-decimal pl-8 space-y-2">
                <li>
                  <strong>Narrative Writing (25 minutes):</strong> Students write the first draft of their stories,
                  focusing on clear beginning, middle, and end, character development, and descriptive language.
                </li>
                <li>
                  <strong>Peer Review (15 minutes):</strong> Students share their drafts with partners for feedback on
                  story structure, clarity, and engagement.
                </li>
                <li>
                  <strong>Visual Planning (15 minutes):</strong> Introduce the digital tool students will use and guide
                  them in selecting or creating images that match their story scenes.
                </li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-green-700">Session 3: Digital Creation</h3>
              <ol className="list-decimal pl-8 space-y-2">
                <li>
                  <strong>Revising and Editing (15 minutes):</strong> Students revise their narratives based on
                  feedback, then edit for spelling, grammar, and punctuation.
                </li>
                <li>
                  <strong>Digital Assembly (25 minutes):</strong> Students begin creating their digital stories,
                  combining text and images in the selected platform.
                </li>
                <li>
                  <strong>Audio Recording Practice (15 minutes):</strong> Students practice reading their narratives
                  aloud with expression, then begin recording narration for their stories.
                </li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-green-700">Session 4: Finalization and Sharing</h3>
              <ol className="list-decimal pl-8 space-y-2">
                <li>
                  <strong>Complete Digital Stories (25 minutes):</strong> Students finish adding all elements to their
                  digital stories, including narration, music, and any animations or transitions.
                </li>
                <li>
                  <strong>Digital Story Showcase (20 minutes):</strong> Students share their completed digital stories
                  with the class.
                </li>
                <li>
                  <strong>Reflection (15 minutes):</strong> Students complete reflection forms about their digital
                  storytelling experience, discussing what they learned and how they might improve future projects.
                </li>
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Assessment Opportunities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-green-700">Formative Assessment</h3>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Review of story plans and storyboards</li>
                  <li>Feedback on narrative drafts</li>
                  <li>Observation of digital tool use</li>
                  <li>Check-ins during the creation process</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-green-700">Summative Assessment</h3>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>
                    Completed digital stories (assessed for narrative structure, language use, visual elements, and
                    technical execution)
                  </li>
                  <li>Written reflections on the process and learning</li>
                  <li>Oral presentation of stories to the class</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-green-700">Assessment Criteria</h3>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Narrative structure (clear beginning, middle, end)</li>
                  <li>Character and setting development</li>
                  <li>Language use (descriptive, engaging, grade-appropriate)</li>
                  <li>Visual elements (enhance story, appropriate selection)</li>
                  <li>Audio quality (clear narration, appropriate expression)</li>
                  <li>Technical execution (effective use of digital tools)</li>
                  <li>Creativity and originality</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Differentiation Strategies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-green-700">For Students Needing Additional Support</h3>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Provide story starters or partially completed narratives</li>
                  <li>Offer more structured planning templates</li>
                  <li>Create a bank of pre-selected images to choose from</li>
                  <li>Allow for shorter stories with fewer scenes</li>
                  <li>Provide one-on-one tech support or pair with a tech-savvy partner</li>
                  <li>Allow for dictation of stories rather than writing</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-green-700">For Students Needing Extension</h3>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Encourage more complex narrative structures (e.g., flashbacks, multiple perspectives)</li>
                  <li>Create original artwork or take photographs for visuals</li>
                  <li>Add more advanced digital effects or animations</li>
                  <li>Incorporate multiple characters with dialogue</li>
                  <li>Create a series of connected digital stories</li>
                  <li>Experiment with different narrative genres</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-green-700">Cultural Relevance</h3>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Encourage stories based on local folklore and cultural traditions</li>
                  <li>Include images that reflect the diversity of the Caribbean</li>
                  <li>Allow for narration that incorporates Home Language expressions where appropriate</li>
                  <li>Share digital stories from diverse cultural perspectives as examples</li>
                  <li>Connect stories to community experiences and local settings</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Extensions and Variations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-green-700 mb-2">Cross-Curricular Connections</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Social Studies:</strong> Create digital stories about historical events, cultural traditions,
                  or community figures
                </li>
                <li>
                  <strong>Science:</strong> Develop digital stories explaining scientific processes or phenomena
                </li>
                <li>
                  <strong>Mathematics:</strong> Create stories that incorporate mathematical concepts or problem-solving
                </li>
                <li>
                  <strong>Visual Arts:</strong> Focus on creating original artwork for digital stories
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-green-700 mb-2">Activity Variations</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Collaborative Stories:</strong> Small groups create digital stories together, with each member
                  contributing different elements
                </li>
                <li>
                  <strong>Adaptation:</strong> Students adapt traditional folktales into digital stories with modern
                  settings
                </li>
                <li>
                  <strong>Interactive Stories:</strong> Create digital stories with simple interactive elements or
                  choices for the reader
                </li>
                <li>
                  <strong>Bilingual Stories:</strong> Develop digital stories that incorporate both Standard English and
                  Home Language
                </li>
                <li>
                  <strong>Digital Poetry:</strong> Create multimedia presentations of original poems
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
