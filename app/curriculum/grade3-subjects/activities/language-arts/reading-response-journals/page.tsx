import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, BookOpen, Pencil, ThumbsUp, BarChart4, HelpCircle } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import Image from "next/image"

export default function ReadingResponseJournalsPage() {
  return (
    <div className="container mx-auto py-8">
            <Link href="/curriculum/grade3-subjects/activities/language-arts">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Language Arts Activities
        </Button>
      </Link>

      <div className="w-full min-w-full max-w-[100vw] mb-8">
        <div className="bg-gradient-to-r from-blue-100 to-teal-100 p-6 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
            Reading Response Journals
          </h1>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            A powerful tool for developing reading comprehension, critical thinking, and meaningful connections to
            texts.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                Activity Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Reading Response Journals are personalized notebooks where students record their thoughts, questions,
                and reactions to texts they read. This activity encourages students to engage more deeply with reading
                materials by making connections, analyzing story elements, and reflecting on their reading experiences.
                Journals provide a safe space for students to develop and express their opinions about literature.
              </p>

              <div className="relative w-full h-64 mb-6 rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=600&query=child+writing+in+journal+with+books+nearby+classroom+setting+illustration"
                  alt="Reading Response Journal Activity"
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold mb-2">Learning Outcomes</h3>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Develop deeper comprehension of texts through written reflection</li>
                <li>Build critical thinking skills by analyzing character motives, plot developments, and themes</li>
                <li>Make meaningful connections between texts and personal experiences</li>
                <li>Express opinions about reading materials with supporting evidence</li>
                <li>Develop writing skills through regular, purposeful writing</li>
                <li>Create a record of reading growth and preferences over time</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">Curriculum Connections</h3>
              <div className="mb-4">
                <p className="mb-2">
                  <strong>ELO 2:</strong> Learners will demonstrate a variety of ways to use background knowledge and
                  interests to select and engage critically with a range of culturally diverse paper-based, visual, and
                  digital texts for pleasure and personal growth.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>SCO 2.3: Apply comprehension strategies during reading</li>
                  <li>SCO 2.4: Demonstrate understanding of texts through responses</li>
                  <li>SCO 2.5: Respond critically to texts by asking questions</li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="mb-2">
                  <strong>ELO 3:</strong> Learners will interact meaningfully with a variety of genres using background
                  knowledge, comprehension strategies, vocabulary, and graphophonic cues.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>SCO 3.2: Apply comprehension strategies to demonstrate understanding</li>
                  <li>SCO 3.3: Demonstrate understanding through varied responses</li>
                  <li>SCO 3.4: Respond critically to texts</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Pencil className="h-5 w-5 text-blue-600" />
                Implementation Steps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <span className="flex items-center justify-center bg-blue-600 text-white rounded-full w-6 h-6 mr-2 text-sm">
                      1
                    </span>
                    Setting Up Journals
                  </h3>
                  <ul className="list-disc pl-8 space-y-1">
                    <li>Provide each student with a notebook or have them create a digital journal</li>
                    <li>Allow students to personalize journal covers to build ownership</li>
                    <li>Create a table of contents page for organization</li>
                    <li>Include a reference section with response prompts and strategies</li>
                    <li>Review the purpose of reading journals and set expectations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <span className="flex items-center justify-center bg-blue-600 text-white rounded-full w-6 h-6 mr-2 text-sm">
                      2
                    </span>
                    Modeling Effective Responses (15-20 minutes)
                  </h3>
                  <ul className="list-disc pl-8 space-y-1">
                    <li>Read a short text excerpt to the class</li>
                    <li>Think aloud while writing a model response, demonstrating strategies</li>
                    <li>Show multiple types of responses: questions, predictions, connections, opinions</li>
                    <li>Display anchor charts of sample responses and prompts</li>
                    <li>Emphasize that responses should go beyond simple summaries</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <span className="flex items-center justify-center bg-blue-600 text-white rounded-full w-6 h-6 mr-2 text-sm">
                      3
                    </span>
                    Guided Practice (20-30 minutes)
                  </h3>
                  <ul className="list-disc pl-8 space-y-1">
                    <li>Read another short text or continue with the same text</li>
                    <li>Use think-pair-share to discuss possible responses</li>
                    <li>Guide students in writing responses using prompts</li>
                    <li>Circulate to provide feedback and support</li>
                    <li>Share exemplary student responses as models</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <span className="flex items-center justify-center bg-blue-600 text-white rounded-full w-6 h-6 mr-2 text-sm">
                      4
                    </span>
                    Independent Application (Ongoing)
                  </h3>
                  <ul className="list-disc pl-8 space-y-1">
                    <li>Schedule regular journal writing time after independent reading</li>
                    <li>Provide a variety of prompts that rotate throughout the week</li>
                    <li>Set expectations for response length and depth</li>
                    <li>Allow choice in response format when appropriate</li>
                    <li>Ensure students date entries and reference the text</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <span className="flex items-center justify-center bg-blue-600 text-white rounded-full w-6 h-6 mr-2 text-sm">
                      5
                    </span>
                    Feedback and Sharing (10-15 minutes)
                  </h3>
                  <ul className="list-disc pl-8 space-y-1">
                    <li>Implement a regular schedule for teacher feedback</li>
                    <li>Create opportunities for peer response sharing</li>
                    <li>Use small group discussions based on similar books or responses</li>
                    <li>Allow students to highlight favorite entries periodically</li>
                    <li>Use journals as a basis for reading conferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <span className="flex items-center justify-center bg-blue-600 text-white rounded-full w-6 h-6 mr-2 text-sm">
                      6
                    </span>
                    Reflection and Growth (Monthly)
                  </h3>
                  <ul className="list-disc pl-8 space-y-1">
                    <li>Guide students to review past entries and note growth</li>
                    <li>Set goals for future journal entries</li>
                    <li>Create a reading profile based on journal content</li>
                    <li>Celebrate achievements and improvements</li>
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
                <ThumbsUp className="h-5 w-5 text-blue-600" />
                Teacher Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">Materials Needed</h3>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Notebooks or digital journal platforms</li>
                <li>Supplies for personalizing journals (if physical)</li>
                <li>Reading response prompts reference sheet</li>
                <li>Anchor charts of sample responses</li>
                <li>Selection of texts for modeling and practice</li>
                <li>Sticky notes for marking passages to respond to</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">Sample Response Prompts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="bg-blue-50 p-3 rounded-md border border-blue-200">
                  <h4 className="font-medium text-blue-700 mb-1">Making Connections</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>This reminds me of...</li>
                    <li>I can relate to... because...</li>
                    <li>This is similar to... because...</li>
                  </ul>
                </div>

                <div className="bg-teal-50 p-3 rounded-md border border-teal-200">
                  <h4 className="font-medium text-teal-700 mb-1">Asking Questions</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>I wonder why...</li>
                    <li>What if...</li>
                    <li>How did... happen?</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-3 rounded-md border border-green-200">
                  <h4 className="font-medium text-green-700 mb-1">Making Predictions</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>I think... will happen next because...</li>
                    <li>The character might...</li>
                    <li>The problem will be solved by...</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-3 rounded-md border border-purple-200">
                  <h4 className="font-medium text-purple-700 mb-1">Forming Opinions</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>I agree/disagree with... because...</li>
                    <li>I think the author wants us to...</li>
                    <li>The most important part was...</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
                <h3 className="text-lg font-semibold mb-2 text-blue-700">Assessment Ideas</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Create a rubric focusing on depth of thinking rather than quantity</li>
                  <li>Use sticky notes for focused feedback on specific entries</li>
                  <li>Track growth in comprehension strategies over time</li>
                  <li>Collect journals periodically for more thorough assessment</li>
                  <li>Use journal entries as conversation starters for reading conferences</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart4 className="h-5 w-5 text-blue-600" />
                Differentiation Strategies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-md font-semibold mb-1 text-blue-700">For Students Who Excel</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Introduce more complex response prompts focusing on themes and author's craft</li>
                    <li>Encourage multi-text comparisons and analysis</li>
                    <li>Allow for creative response formats (poems, letters to characters)</li>
                    <li>Introduce literary criticism concepts at an appropriate level</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-md font-semibold mb-1 text-blue-700">For Students Who Need Support</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Provide sentence starters and structured response frames</li>
                    <li>Allow drawing responses with simple captions</li>
                    <li>Use graphic organizers to scaffold responses</li>
                    <li>Consider audio recording options for responses</li>
                    <li>Focus initially on personal connections before more complex analysis</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-md font-semibold mb-1 text-blue-700">Language Considerations</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Allow responses in Home Language with gradual transition to Standard English</li>
                    <li>Provide bilingual prompt cards as needed</li>
                    <li>Pre-teach vocabulary for response writing</li>
                    <li>Accept varied forms of expression that demonstrate understanding</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-blue-600" />
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-md font-semibold mb-1 text-blue-700">
                    How often should students write in their journals?
                  </h3>
                  <p className="text-sm">
                    Aim for at least 2-3 entries per week. Quality is more important than quantity, so allow enough time
                    for thoughtful responses rather than daily brief entries.
                  </p>
                </div>

                <div>
                  <h3 className="text-md font-semibold mb-1 text-blue-700">
                    How do I prevent students from just summarizing?
                  </h3>
                  <p className="text-sm">
                    Model and explicitly teach the difference between summary and response. Use prompts that require
                    analysis and opinion. When students summarize, ask follow-up questions to deepen thinking.
                  </p>
                </div>

                <div>
                  <h3 className="text-md font-semibold mb-1 text-blue-700">
                    Should I correct grammar and spelling in journals?
                  </h3>
                  <p className="text-sm">
                    Focus primarily on content and thinking. Address major patterns of error, but avoid extensive
                    corrections that might discourage writing fluency. Consider separate mini-lessons for common issues.
                  </p>
                </div>

                <div>
                  <h3 className="text-md font-semibold mb-1 text-blue-700">
                    How can I manage reading all the journals regularly?
                  </h3>
                  <p className="text-sm">
                    Develop a rotation schedule to read a few journals each day. Use focused reading for specific
                    elements rather than comprehensive checks of every entry. Have students flag entries they especially
                    want feedback on.
                  </p>
                </div>

                <div>
                  <h3 className="text-md font-semibold mb-1 text-blue-700">
                    How can I keep the activity engaging all year?
                  </h3>
                  <p className="text-sm">
                    Vary the response prompts and formats regularly. Incorporate occasional creative or multimedia
                    responses. Connect journal writing to special projects and class discussions to maintain relevance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-xl shadow-md border border-blue-200 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Cross-Curricular Connections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-blue-700">Science</h3>
            <p className="text-sm">
              Have students respond to science texts using observation skills. They can make connections between
              scientific concepts and real-world applications, or respond to "what if" scenarios related to scientific
              discoveries.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-blue-700">Social Studies</h3>
            <p className="text-sm">
              Students can respond to historical narratives from multiple perspectives, make connections between
              historical events and current issues, or reflect on how geography influences culture and community.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-blue-700">Arts</h3>
            <p className="text-sm">
              Incorporate visual responses to texts through illustrations, diagrams, or symbols. Students can connect
              visual art, music, or performance to themes and emotions in their reading.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Link href="/curriculum/grade3-subjects/activities/language-arts/storytelling-circle">
          <Button variant="outline" className="mr-4">
            <ChevronLeft className="mr-2 h-4 w-4" /> Previous Activity
          </Button>
        </Link>
        <Link href="/curriculum/grade3-subjects/activities/language-arts/authors-workshop">
          <Button className="bg-blue-600 hover:bg-blue-700">Next Activity: Authors' Workshop</Button>
        </Link>
      </div>
    </div>
  )
}
