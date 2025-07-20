import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, PenTool, Clock, Users, Download, CheckCircle2 } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import Image from "next/image"
import { StandardsBadge } from "@/components/standards-badge"

export default function PersuasiveWritingCampaignPage() {
  return (
    <div className="container mx-auto py-8">
      
      <Link href="/curriculum/grade4-subjects/activities/language-arts">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Grade 4 Language Arts Activities
        </Button>
      </Link>

      <div className="mb-8">
        <div className="bg-gradient-to-r from-emerald-100 to-teal-100 p-6 rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="relative w-full md:w-1/3 h-64">
              <Image
                src="/persuasive-writing-campaign.png"
                alt="Students working on persuasive writing campaign materials"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="md:w-2/3">
              <h1 className="text-3xl font-bold mb-4 text-emerald-800">Persuasive Writing Campaign</h1>
              <p className="text-lg text-gray-700 mb-4">
                Empower students to identify issues in their school or community and create persuasive writing pieces
                that advocate for meaningful change. This project-based activity develops essential persuasive writing
                skills while fostering civic engagement and critical thinking.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="bg-white px-3 py-1 rounded-full text-sm font-medium text-emerald-700 border border-emerald-200 shadow-sm">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>3-4 Sessions</span>
                  </div>
                </div>
                <div className="bg-white px-3 py-1 rounded-full text-sm font-medium text-emerald-700 border border-emerald-200 shadow-sm">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>Small groups (3-4)</span>
                  </div>
                </div>
                <div className="bg-white px-3 py-1 rounded-full text-sm font-medium text-emerald-700 border border-emerald-200 shadow-sm">
                  <div className="flex items-center">
                    <PenTool className="h-4 w-4 mr-1" />
                    <span>Writing & Representing</span>
                  </div>
                </div>
              </div>
              <StandardsBadge 
                code="LA.4.WR.3"
                description="Persuasive writing standards for Grade 4 Language Arts"
                subject="Language Arts"
                grade="4"
                strand="Writing"
              />
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="overview" className="mb-8">
        <TabsList className="grid w-full grid-cols-5 mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="implementation">Implementation</TabsTrigger>
          <TabsTrigger value="assessment">Assessment</TabsTrigger>
          <TabsTrigger value="differentiation">Differentiation</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        {/* OVERVIEW TAB */}
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Activity Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    The Persuasive Writing Campaign is a project-based activity that engages Grade 4 students in the
                    authentic application of persuasive writing skills to address real issues in their school or
                    community. Working in small collaborative teams, students identify problems that matter to them,
                    research these issues, and create compelling persuasive pieces to advocate for positive change.
                  </p>
                  <p className="mb-4">
                    This activity develops critical persuasive writing techniques while fostering civic engagement,
                    research skills, and collaborative problem-solving. By connecting writing to real-world purposes and
                    audiences, students experience the power of language as a tool for positive social action.
                  </p>
                  <p>
                    Throughout the campaign process, students will analyze persuasive techniques in model texts, conduct
                    research to gather supporting evidence, craft persuasive arguments using various rhetorical
                    strategies, and present their work to authentic audiences who can potentially implement their
                    suggested changes.
                  </p>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Learning Objectives</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Develop effective persuasive writing techniques</p>
                        <p className="text-sm text-gray-500">
                          Students will learn to use persuasive devices including rhetorical questions, emotive
                          language, facts and statistics, and calls to action.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Organize arguments with supporting evidence</p>
                        <p className="text-sm text-gray-500">
                          Students will structure persuasive texts with clear positions, logical organization, and
                          appropriate evidence to support their claims.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Address audience and purpose in writing</p>
                        <p className="text-sm text-gray-500">
                          Students will tailor their persuasive writing to specific audiences, considering the readers'
                          perspectives, needs, and potential objections.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Connect writing to authentic issues and contexts</p>
                        <p className="text-sm text-gray-500">
                          Students will apply persuasive writing skills to real problems in their school or community,
                          recognizing how writing can be a tool for social change.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Collaborate effectively in writing teams</p>
                        <p className="text-sm text-gray-500">
                          Students will practice collaborative writing processes including brainstorming, drafting, peer
                          review, and revision.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Materials Needed</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Examples of persuasive texts (letters, posters, advertisements)</li>
                    <li>Graphic organizers for planning persuasive writing</li>
                    <li>Research materials (books, internet access if available)</li>
                    <li>Writing supplies (paper, pencils, colored markers)</li>
                    <li>Poster board or digital tools for final presentations</li>
                    <li>Persuasive language word banks</li>
                    <li>Peer review checklists</li>
                    <li>Campaign planning templates</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Curriculum Connections</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h3 className="font-semibold text-emerald-700">Language Arts</h3>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Persuasive writing techniques</li>
                      <li>Research and information literacy</li>
                      <li>Critical reading of persuasive texts</li>
                      <li>Oral presentation skills</li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-semibold text-purple-700">Social Studies</h3>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Civic participation</li>
                      <li>Community issues and governance</li>
                      <li>Citizenship responsibilities</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-700">Digital Literacy</h3>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Information evaluation</li>
                      <li>Digital communication</li>
                      <li>Media creation (optional)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Why This Matters</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3">
                    In the Caribbean context, teaching students to use persuasive writing for community advocacy helps
                    them develop agency and voice in addressing local issues that affect them.
                  </p>
                  <p>
                    This activity builds foundational skills for active citizenship while developing critical persuasive
                    writing techniques that will serve students throughout their academic and civic lives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* IMPLEMENTATION TAB */}
        <TabsContent value="implementation">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Implementation Overview</CardTitle>
              <CardDescription>
                This activity unfolds over 3-4 sessions (approximately 45-60 minutes each), with additional time for
                independent research and writing between sessions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-emerald-700 mb-3">
                    Session 1: Introduction and Issue Identification
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4 border border-gray-100">
                    <p className="mb-2 font-medium">Objectives:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Introduce persuasive writing techniques through model texts</li>
                      <li>Form collaborative groups and identify community/school issues</li>
                      <li>Begin planning research approach</li>
                    </ul>
                  </div>
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>
                      <p className="font-medium">Activate Prior Knowledge (10 minutes)</p>
                      <p className="text-sm text-gray-700">
                        Begin with a class discussion about times when students have tried to convince someone of
                        something. What techniques did they use? Were they successful? Why or why not?
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Analyze Model Texts (15 minutes)</p>
                      <p className="text-sm text-gray-700">
                        Share 2-3 age-appropriate examples of persuasive texts addressing community issues. As a class,
                        identify persuasive techniques used (e.g., emotional appeals, statistics, expert opinions,
                        rhetorical questions). Create an anchor chart of persuasive devices.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Form Groups and Identify Issues (20 minutes)</p>
                      <p className="text-sm text-gray-700">
                        Arrange students in groups of 3-4. Have each group brainstorm problems or issues in their school
                        or community they care about. Groups should narrow down to one issue they want to address.
                        Examples might include:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-xs ml-4 mt-1">
                        <li>Playground improvements needed</li>
                        <li>Adding a school recycling program</li>
                        <li>Creating a community garden</li>
                        <li>Addressing road safety near school</li>
                        <li>Starting a school breakfast program</li>
                        <li>Creating more accessible spaces</li>
                      </ul>
                    </li>
                    <li>
                      <p className="font-medium">Research Planning (10 minutes)</p>
                      <p className="text-sm text-gray-700">
                        Groups create a research plan using a graphic organizer. What information do they need? Who
                        might they interview? What resources could help them?
                      </p>
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-emerald-700 mb-3">Session 2: Research and Planning</h3>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4 border border-gray-100">
                    <p className="mb-2 font-medium">Objectives:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Gather and organize information about the chosen issue</li>
                      <li>Identify target audience for persuasive writing</li>
                      <li>Plan persuasive arguments using graphic organizers</li>
                    </ul>
                  </div>
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>
                      <p className="font-medium">Research Gathering (20 minutes)</p>
                      <p className="text-sm text-gray-700">
                        Students use available resources to gather information about their issue. This may include
                        internet research (if available), library books, school surveys, or interviews with community
                        members (prepared as homework before this session).
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Audience Analysis (10 minutes)</p>
                      <p className="text-sm text-gray-700">
                        Groups identify their target audience (e.g., principal, school board, local council, parents'
                        association) and analyze what would persuade this audience. What does the audience care about?
                        What objections might they have?
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Persuasive Planning (20 minutes)</p>
                      <p className="text-sm text-gray-700">
                        Using a persuasive writing graphic organizer, groups plan their arguments:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-xs ml-4 mt-1">
                        <li>Clear statement of position/request</li>
                        <li>3 main arguments with supporting evidence</li>
                        <li>Addressing potential counter-arguments</li>
                        <li>Specific call to action</li>
                      </ul>
                    </li>
                    <li>
                      <p className="font-medium">Mini-Lesson: Persuasive Language (10 minutes)</p>
                      <p className="text-sm text-gray-700">
                        Teach a mini-lesson on persuasive language techniques (emotive words, powerful verbs, rhetorical
                        questions). Create a word bank for students to reference.
                      </p>
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-emerald-700 mb-3">Session 3: Drafting and Revision</h3>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4 border border-gray-100">
                    <p className="mb-2 font-medium">Objectives:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Draft persuasive texts using appropriate format for target audience</li>
                      <li>Revise writing based on peer and teacher feedback</li>
                      <li>Strengthen persuasive devices and supporting evidence</li>
                    </ul>
                  </div>
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>
                      <p className="font-medium">Format Selection (10 minutes)</p>
                      <p className="text-sm text-gray-700">
                        Groups select an appropriate format for their persuasive piece based on their audience and
                        purpose:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-xs ml-4 mt-1">
                        <li>Formal letter to officials</li>
                        <li>Persuasive poster or flyer</li>
                        <li>Petition with supporting statements</li>
                        <li>Script for oral presentation</li>
                        <li>Editorial for school newsletter</li>
                      </ul>
                    </li>
                    <li>
                      <p className="font-medium">Collaborative Drafting (20 minutes)</p>
                      <p className="text-sm text-gray-700">
                        Groups draft their persuasive pieces, with each member contributing to different sections.
                        Encourage students to use the persuasive techniques identified in the model texts and word bank.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Peer Review (15 minutes)</p>
                      <p className="text-sm text-gray-700">
                        Using a revision checklist focused on persuasive elements, groups exchange drafts with another
                        group for feedback. Reviewers identify strengths and suggest improvements for persuasiveness.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Revision (15 minutes)</p>
                      <p className="text-sm text-gray-700">
                        Groups revise their drafts based on peer feedback and teacher guidance. Focus on strengthening
                        persuasive techniques and ensuring evidence supports claims effectively.
                      </p>
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-emerald-700 mb-3">Session 4: Finalization and Presentation</h3>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4 border border-gray-100">
                    <p className="mb-2 font-medium">Objectives:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Create polished final versions of persuasive pieces</li>
                      <li>Present persuasive campaigns to the class</li>
                      <li>Develop action plan for sharing with target audiences</li>
                    </ul>
                  </div>
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>
                      <p className="font-medium">Final Editing (15 minutes)</p>
                      <p className="text-sm text-gray-700">
                        Groups edit their persuasive pieces for grammar, spelling, and formatting. They prepare final
                        versions appropriate to their selected format.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Group Presentations (25 minutes)</p>
                      <p className="text-sm text-gray-700">
                        Each group presents their persuasive campaign to the class. Presentations should include:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-xs ml-4 mt-1">
                        <li>Clear explanation of the issue</li>
                        <li>Overview of their main arguments</li>
                        <li>Sharing of their persuasive piece</li>
                        <li>Description of intended audience and delivery plan</li>
                      </ul>
                    </li>
                    <li>
                      <p className="font-medium">Action Planning (10 minutes)</p>
                      <p className="text-sm text-gray-700">
                        Groups create a simple action plan for delivering their persuasive pieces to the intended
                        audiences (with teacher support and appropriate permissions).
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Reflection (10 minutes)</p>
                      <p className="text-sm text-gray-700">
                        Students complete individual reflection forms about what they learned about persuasive writing,
                        what techniques they used most effectively, and how they might improve their persuasive writing
                        in the future.
                      </p>
                    </li>
                  </ol>
                </div>

                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                  <h3 className="font-bold text-emerald-800 mb-2">Follow-Up and Extension</h3>
                  <p className="text-sm mb-3">
                    With appropriate permissions and support, help students deliver their persuasive pieces to the
                    intended audiences. Arrange for students to:
                  </p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Present to school administration during a scheduled meeting</li>
                    <li>Submit letters to local newspapers or community newsletters</li>
                    <li>Create a display of their persuasive campaigns for school events</li>
                    <li>Follow up on responses and track any changes that occur as a result</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Implementation Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-3">
                  <li>
                    <p className="font-medium">Pre-vet Issue Selection</p>
                    <p className="text-sm text-gray-600">
                      Guide students toward issues that are realistic and appropriate. Ensure that issues selected have
                      potential for actual change and are within the scope of what children can understand and
                      influence.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Authentic Audience Connection</p>
                    <p className="text-sm text-gray-600">
                      When possible, arrange for the target audiences to provide feedback or responses to students'
                      persuasive pieces. This creates authentic purpose and shows students their writing matters.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Example Collection</p>
                    <p className="text-sm text-gray-600">
                      Collect real-world examples of persuasive writing related to local issues from newspapers,
                      community notices, or school communications to use as models.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Varied Research Support</p>
                    <p className="text-sm text-gray-600">
                      Provide multiple pathways for research based on available resources. This might include prepared
                      information packets, guest speakers, or structured interview guides for community members.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Common Challenges and Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-amber-700">Challenge: Students choose issues too large to address</p>
                    <p className="text-sm text-gray-600 mt-1">
                      <span className="font-medium">Solution:</span> Help students narrow their focus to specific,
                      actionable aspects of larger problems. For example, instead of "stopping pollution," focus on
                      "adding recycling bins to our school cafeteria."
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-amber-700">Challenge: Difficulty finding supporting evidence</p>
                    <p className="text-sm text-gray-600 mt-1">
                      <span className="font-medium">Solution:</span> Create a class resource bank with fact sheets,
                      websites, and contact information for local experts. Teach students simple survey techniques to
                      gather their own data.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-amber-700">Challenge: Group collaboration issues</p>
                    <p className="text-sm text-gray-600 mt-1">
                      <span className="font-medium">Solution:</span> Assign specific roles within each group (Research
                      Manager, Writing Coordinator, Presentation Director, etc.) and provide structured collaboration
                      protocols.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-amber-700">Challenge: Resistance from potential audiences</p>
                    <p className="text-sm text-gray-600 mt-1">
                      <span className="font-medium">Solution:</span> Teach students to anticipate objections and address
                      them respectfully in their persuasive pieces. Coach students on realistic expectations and the
                      value of starting conversations even if immediate change doesn't occur.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* ASSESSMENT TAB */}
        <TabsContent value="assessment">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Formative Assessment</CardTitle>
                <CardDescription>
                  Ongoing assessment strategies to monitor student progress throughout the activity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-3">
                  <li>
                    <p className="font-medium">Persuasive Technique Identification</p>
                    <p className="text-sm text-gray-600">
                      During model text analysis, assess students' ability to identify persuasive techniques and
                      understand their purpose.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Research Collection Checks</p>
                    <p className="text-sm text-gray-600">
                      Review students' research notes to ensure they're gathering relevant evidence that supports their
                      position. Provide guidance on sources and note-taking as needed.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Persuasive Planning Conferences</p>
                    <p className="text-sm text-gray-600">
                      Meet briefly with each group to review their persuasive planning organizers. Check for logical
                      organization, strong evidence, and appropriate audience consideration.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Peer Review Observations</p>
                    <p className="text-sm text-gray-600">
                      During peer review sessions, observe groups' ability to provide constructive feedback on
                      persuasive elements, noting areas where the class may need additional instruction.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Writing Conferences</p>
                    <p className="text-sm text-gray-600">
                      Conduct brief writing conferences with groups during drafting and revision stages to provide
                      targeted feedback and support.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Summative Assessment</CardTitle>
                <CardDescription>End-of-activity assessments to evaluate student learning outcomes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-emerald-700">Final Persuasive Pieces</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Assess completed persuasive pieces using a rubric that evaluates:
                    </p>
                    <ul className="list-disc pl-5 text-sm mt-1">
                      <li>Clear statement of position/request</li>
                      <li>Logical organization of arguments</li>
                      <li>Quality and relevance of supporting evidence</li>
                      <li>Use of persuasive techniques and language</li>
                      <li>Consideration of audience</li>
                      <li>Specific and actionable call to action</li>
                      <li>Mechanics and presentation quality</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-emerald-700">Group Presentations</h3>
                    <p className="text-sm text-gray-600 mt-1">Evaluate group presentations for:</p>
                    <ul className="list-disc pl-5 text-sm mt-1">
                      <li>Clear explanation of the issue and its importance</li>
                      <li>Effective presentation of key arguments</li>
                      <li>Quality of visual or supporting materials</li>
                      <li>Group collaboration and preparation</li>
                      <li>Ability to answer questions about their campaign</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-emerald-700">Individual Reflection</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Assess individual learning through written reflections that address:
                    </p>
                    <ul className="list-disc pl-5 text-sm mt-1">
                      <li>Understanding of persuasive writing techniques</li>
                      <li>Contribution to the group project</li>
                      <li>Challenges faced and strategies used to overcome them</li>
                      <li>How they would improve their persuasive writing in the future</li>
                      <li>What they learned about advocacy and community issues</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 flex justify-center">
                  <Button variant="outline" className="flex items-center">
                    <Download className="mr-2 h-4 w-4" />
                    Download Assessment Rubric
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Standards Alignment</CardTitle>
              <CardDescription>
                This activity addresses the following Grade 4 Language Arts curriculum standards
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center">
                    <div className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded border border-emerald-200">
                      LA.4.WR.3
                    </div>
                    <h3 className="ml-2 font-medium">Persuasive Writing</h3>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Write opinion pieces on topics or texts, supporting a point of view with reasons and information.
                  </p>
                  <ul className="list-disc pl-5 text-xs text-gray-500 mt-1">
                    <li>Introduce a topic clearly, state an opinion, and create an organizational structure</li>
                    <li>Provide reasons that are supported by facts and details</li>
                    <li>Link opinion and reasons using words and phrases</li>
                    <li>Provide a concluding statement or section related to the opinion presented</li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center">
                    <div className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded border border-emerald-200">
                      LA.4.WR.5
                    </div>
                    <h3 className="ml-2 font-medium">Writing Process</h3>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Develop and strengthen writing through planning, revising, and editing with guidance and support
                    from peers and adults.
                  </p>
                </div>

                <div>
                  <div className="flex items-center">
                    <div className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded border border-emerald-200">
                      LA.4.LS.2
                    </div>
                    <h3 className="ml-2 font-medium">Speaking for Different Purposes</h3>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Report on a topic or text, tell a story, or recount an experience in an organized manner, using
                    facts and relevant details to support main ideas or themes; speak clearly at an understandable pace.
                  </p>
                </div>

                <div>
                  <div className="flex items-center">
                    <div className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded border border-emerald-200">
                      LA.4.RV.6
                    </div>
                    <h3 className="ml-2 font-medium">Critical Reading</h3>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Compare and contrast a firsthand and secondhand account of the same event or topic; describe the
                    differences in focus and the information provided.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* DIFFERENTIATION TAB */}
        <TabsContent value="differentiation">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Differentiation Strategies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  <div>
                    <h3 className="font-medium text-emerald-700">For Struggling Writers</h3>
                    <ul className="list-disc pl-5 text-sm space-y-2 mt-1">
                      <li>
                        <span className="font-medium">Sentence Starters:</span> Provide persuasive sentence frames and
                        starters (e.g., "One important reason why... is...", "This proves that...", "Many people
                        believe..., however...")
                      </li>
                      <li>
                        <span className="font-medium">Graphic Organizers:</span> Use more detailed graphic organizers
                        that break the writing process into smaller steps
                      </li>
                      <li>
                        <span className="font-medium">Dictation Options:</span> Allow students to dictate ideas to a
                        partner or teacher before writing them down
                      </li>
                      <li>
                        <span className="font-medium">Focus on Strengths:</span> Assign roles that align with students'
                        strengths (e.g., research, illustration, oral presentation)
                      </li>
                      <li>
                        <span className="font-medium">Word Banks:</span> Provide expanded word banks of persuasive
                        language and transition words
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-emerald-700">For Advanced Writers</h3>
                    <ul className="list-disc pl-5 text-sm space-y-2 mt-1">
                      <li>
                        <span className="font-medium">Expanded Research:</span> Encourage deeper research using multiple
                        sources and more complex evidence
                      </li>
                      <li>
                        <span className="font-medium">Counter-Arguments:</span> Focus on developing and addressing
                        multiple counter-arguments in their persuasive pieces
                      </li>
                      <li>
                        <span className="font-medium">Multiple Formats:</span> Challenge students to create their
                        persuasive campaign in multiple formats (e.g., letter, poster, and speech) for different
                        audiences
                      </li>
                      <li>
                        <span className="font-medium">Advanced Techniques:</span> Introduce more sophisticated
                        persuasive techniques such as ethical appeals and logical fallacies
                      </li>
                      <li>
                        <span className="font-medium">Mentoring:</span> Position these students as peer mentors who can
                        help other groups with specific aspects of their campaigns
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-emerald-700">For English Language Learners</h3>
                    <ul className="list-disc pl-5 text-sm space-y-2 mt-1">
                      <li>
                        <span className="font-medium">Visual Supports:</span> Use visual examples of persuasive
                        techniques and provide visual planning tools
                      </li>
                      <li>
                        <span className="font-medium">First Language Support:</span> Allow initial planning in first
                        language before translating to English
                      </li>
                      <li>
                        <span className="font-medium">Partner Support:</span> Pair with more proficient English speakers
                        who can provide language modeling
                      </li>
                      <li>
                        <span className="font-medium">Simplified Models:</span> Provide additional simplified examples
                        of persuasive writing
                      </li>
                      <li>
                        <span className="font-medium">Pre-teach Vocabulary:</span> Explicitly teach key persuasive and
                        topic-specific vocabulary before the activity begins
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Accommodations for Special Needs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">For Students with Learning Disabilities:</p>
                      <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
                        <li>Break the project into smaller, more manageable tasks with separate deadlines</li>
                        <li>Provide checklists for each stage of the project</li>
                        <li>Allow for alternative response formats (e.g., oral presentations, audio recordings)</li>
                        <li>Provide extra time for writing and revision</li>
                        <li>Use color-coding to organize different parts of the persuasive piece</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium">For Students with Attention Difficulties:</p>
                      <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
                        <li>Create a visual timeline of project steps and deadlines</li>
                        <li>Schedule regular check-ins during independent work time</li>
                        <li>Provide a quiet workspace option for group meetings</li>
                        <li>Break work sessions into shorter time blocks with movement breaks</li>
                        <li>Use timers to help students stay on task during specific activities</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Group Formation Strategies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-3">Consider these approaches for forming effective collaborative groups:</p>
                  <ul className="list-disc pl-5 text-sm space-y-2">
                    <li>
                      <span className="font-medium">Interest-Based Groups:</span> Allow students to form groups based on
                      shared interest in particular issues, increasing motivation and engagement
                    </li>
                    <li>
                      <span className="font-medium">Mixed-Ability Groups:</span> Deliberately create groups with varied
                      skill levels, ensuring each group has members with different strengths
                    </li>
                    <li>
                      <span className="font-medium">Role-Based Formation:</span> Assign specific roles (Researcher,
                      Writer, Designer, Presenter) based on students' strengths and learning needs
                    </li>
                    <li>
                      <span className="font-medium">Teacher-Selected Groups:</span> Form groups strategically to ensure
                      productive working relationships and appropriate support for all students
                    </li>
                    <li>
                      <span className="font-medium">Flexible Grouping:</span> Allow for some flexibility in group
                      composition if initial arrangements aren't working effectively
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Extensions and Variations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-lg mb-2 text-emerald-700">Project Extensions</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <p className="font-medium">Multimedia Campaigns</p>
                      <p className="text-sm text-gray-600">
                        Expand persuasive writing into multimedia campaigns that include posters, videos, speeches, and
                        digital presentations.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Community Action</p>
                      <p className="text-sm text-gray-600">
                        Take action beyond writing by organizing events, fundraisers, or community service projects
                        related to the identified issues.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Follow-Up Investigation</p>
                      <p className="text-sm text-gray-600">
                        After submitting persuasive pieces, have students track responses and results, documenting the
                        impact of their writing.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Cross-Grade Mentoring</p>
                      <p className="text-sm text-gray-600">
                        Have students teach persuasive writing techniques to younger students and help them create
                        simple persuasive pieces.
                      </p>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-2 text-emerald-700">Activity Variations</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <p className="font-medium">Persuasive Debate Format</p>
                      <p className="text-sm text-gray-600">
                        Structure the activity as a formal debate where teams develop persuasive arguments for opposing
                        positions on community issues.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">"Shark Tank" Style Presentations</p>
                      <p className="text-sm text-gray-600">
                        Have students pitch their ideas to a panel of "investors" (teachers, administrators, or
                        community members) who provide feedback and potentially support implementation.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Caribbean Issues Focus</p>
                      <p className="text-sm text-gray-600">
                        Center the activity specifically on issues affecting Caribbean communities such as environmental
                        conservation, cultural preservation, or tourism impacts.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Historical Persuasive Writing</p>
                      <p className="text-sm text-gray-600">
                        Connect to social studies by having students research historical Caribbean issues and write
                        persuasive pieces from historical perspectives.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-50 p-4 rounded-lg mt-6 border border-emerald-200">
                <h3 className="font-medium text-emerald-800 mb-2">Cross-Curricular Integration</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="font-medium text-sm">Social Studies</p>
                    <ul className="list-disc pl-5 text-xs space-y-1 mt-1">
                      <li>Connect to civics units on community governance</li>
                      <li>Research historical examples of successful advocacy</li>
                      <li>Explore how different cultures resolve community issues</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Science</p>
                    <ul className="list-disc pl-5 text-xs space-y-1 mt-1">
                      <li>Focus on environmental issues and scientific evidence</li>
                      <li>Research data to support environmental advocacy</li>
                      <li>Create persuasive pieces about conservation</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Arts</p>
                    <ul className="list-disc pl-5 text-xs space-y-1 mt-1">
                      <li>Design persuasive visuals and illustrations</li>
                      <li>Create persuasive jingles or songs</li>
                      <li>Study persuasive techniques in advertisements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* RESOURCES TAB */}
        <TabsContent value="resources">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Teacher Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-emerald-700 mb-2">Printable Templates and Organizers</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li className="flex items-start">
                        <Download className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Persuasive Writing Planning Organizer</p>
                          <p className="text-xs text-gray-500">
                            Graphic organizer for planning persuasive arguments with evidence
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Download className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Persuasive Writing Checklist</p>
                          <p className="text-xs text-gray-500">
                            Self-assessment checklist for students to review their persuasive pieces
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Download className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Peer Review Form</p>
                          <p className="text-xs text-gray-500">
                            Structured form for students to provide feedback on persuasive writing
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Download className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Research Collection Sheet</p>
                          <p className="text-xs text-gray-500">
                            Template for gathering and organizing research evidence
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Download className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Assessment Rubric</p>
                          <p className="text-xs text-gray-500">
                            Detailed rubric for evaluating persuasive writing campaigns
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-emerald-700 mb-2">Sample Texts and Examples</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li className="flex items-start">
                        <Download className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Model Persuasive Letters</p>
                          <p className="text-xs text-gray-500">
                            Age-appropriate examples of persuasive letters on community issues
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Download className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Persuasive Poster Examples</p>
                          <p className="text-xs text-gray-500">
                            Visual examples of persuasive posters with key elements labeled
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Download className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Simplified News Editorials</p>
                          <p className="text-xs text-gray-500">
                            Adapted news editorials appropriate for Grade 4 reading level
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-emerald-700 mb-2">Digital Resources</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li className="flex items-start">
                        <Download className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Persuasive Writing Digital Slide Deck</p>
                          <p className="text-xs text-gray-500">
                            Presentation slides explaining persuasive techniques and examples
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Download className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Virtual Persuasive Word Wall</p>
                          <p className="text-xs text-gray-500">
                            Digital word bank of persuasive language and transition words
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Book Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <p className="font-medium">"Click, Clack, Moo: Cows That Type"</p>
                      <p className="text-xs text-gray-500">by Doreen Cronin</p>
                      <p className="text-sm text-gray-600 mt-1">
                        A fun story about farm animals who use persuasive letters to negotiate better conditions
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">"I Wanna Iguana"</p>
                      <p className="text-xs text-gray-500">by Karen Kaufman Orloff</p>
                      <p className="text-sm text-gray-600 mt-1">
                        A humorous exchange of letters between a boy and his mother as he tries to persuade her to let
                        him have an iguana
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">"Hey, Little Ant"</p>
                      <p className="text-xs text-gray-500">by Phillip and Hannah Hoose</p>
                      <p className="text-sm text-gray-600 mt-1">
                        A dialogue between a boy and an ant, presenting arguments from both perspectives
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">"The Day the Crayons Quit"</p>
                      <p className="text-xs text-gray-500">by Drew Daywalt</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Persuasive letters from crayons to their owner, arguing against their current treatment
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Online Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>
                      <p className="font-medium">Read Write Think</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Free lesson plans, interactive tools, and resources for teaching persuasive writing
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">PBS Learning Media</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Videos and interactive activities about persuasive writing for elementary students
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Newsela</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Current events articles at multiple reading levels, including opinion pieces
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Time for Kids</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Age-appropriate news articles including editorials that can serve as persuasive models
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Local Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-3">
                    Consider inviting these local resources to support your persuasive writing campaign:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Local newspaper editors to discuss persuasive writing</li>
                    <li>Community leaders to explain how change happens</li>
                    <li>School board members or administrators as audience for campaigns</li>
                    <li>Local advocacy organizations for age-appropriate issues</li>
                    <li>Parents with relevant professional experience</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-100">
            <h2 className="text-xl font-bold text-emerald-800 mb-4">Teacher Reflection Corner</h2>
            <div className="space-y-4">
              <p>
                After implementing this activity, consider these reflection questions to refine your approach for future
                lessons:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Which persuasive techniques seemed most accessible to students? Which were challenging?</li>
                <li>How engaged were students with their chosen issues? What topics generated the most enthusiasm?</li>
                <li>Were groups able to collaborate effectively? What structures helped or hindered collaboration?</li>
                <li>How might you better support students in gathering meaningful evidence for their arguments?</li>
                <li>What unexpected learning moments occurred during the activity?</li>
                <li>How did audiences respond to students' persuasive pieces? What feedback was most valuable?</li>
                <li>What connections did students make between persuasive writing and real-world advocacy?</li>
              </ul>
              <p className="italic text-emerald-700">
                "Documenting your observations and student outcomes will help you build on this activity in future years
                and share effective practices with colleagues."
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
