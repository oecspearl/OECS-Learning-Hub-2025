import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PenTool, FileText, Video, Presentation, Users, Clock, Target } from "lucide-react"
import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"

export default function WritingRepresentingActivitiesPage() {
  const activities = [
    {
      id: "caribbean-magazine",
      title: "Caribbean Youth Magazine Creation",
      description:
        "Students collaborate to create a professional digital magazine featuring Caribbean youth perspectives on current issues, culture, and achievements.",
      duration: "4-6 weeks",
      difficulty: "Advanced",
      participants: "Groups of 6-8",
      icon: FileText,
      objectives: [
        "Practice multiple writing genres and formats",
        "Develop collaborative writing and editing skills",
        "Learn magazine layout and design principles",
        "Research and write about Caribbean topics",
        "Build digital publishing competencies",
      ],
      materials: [
        "Digital publishing software (Canva, Adobe, Google Sites)",
        "Research databases and resources",
        "Interview recording equipment",
        "Photography equipment or smartphones",
        "Style guides and editing checklists",
      ],
      procedures: [
        "Form editorial teams with assigned roles (editor, writers, designers)",
        "Brainstorm magazine themes and target audience",
        "Research and pitch article ideas for approval",
        "Conduct interviews and gather primary source material",
        "Write articles in various genres (news, features, opinion, reviews)",
        "Edit and revise content through peer review process",
        "Design layout and add visual elements",
        "Publish and distribute magazine to school community",
      ],
      assessment: [
        "Writing quality across different genres",
        "Research depth and source credibility",
        "Collaboration and role fulfillment",
        "Design and layout effectiveness",
        "Final publication quality and impact",
      ],
      extensions: [
        "Submit to regional youth publications",
        "Create ongoing quarterly magazine",
        "Develop multimedia versions with video content",
        "Partner with local media organizations",
      ],
    },
    {
      id: "persuasive-campaign",
      title: "Community Change Persuasive Campaign",
      description:
        "Students identify local issues and create comprehensive persuasive campaigns using multiple formats to advocate for positive change.",
      duration: "3-4 weeks",
      difficulty: "Intermediate to Advanced",
      participants: "Groups of 4-5",
      icon: Presentation,
      objectives: [
        "Master persuasive writing techniques and structures",
        "Research community issues and solutions",
        "Create multimedia persuasive materials",
        "Practice audience analysis and targeting",
        "Develop civic engagement and advocacy skills",
      ],
      materials: [
        "Community issue research resources",
        "Persuasive writing guides and examples",
        "Design software for creating materials",
        "Presentation tools and equipment",
        "Contact information for community leaders",
      ],
      procedures: [
        "Identify and research local community issues",
        "Analyze target audiences and stakeholders",
        "Develop persuasive arguments with supporting evidence",
        "Create campaign materials (letters, flyers, social media posts)",
        "Design presentation for community leaders",
        "Practice and refine persuasive delivery",
        "Present campaigns to authentic audiences",
        "Reflect on campaign effectiveness and feedback",
      ],
      assessment: [
        "Persuasive argument strength and evidence use",
        "Audience awareness and targeting",
        "Writing quality across different formats",
        "Presentation delivery and engagement",
        "Research quality and source evaluation",
      ],
      extensions: [
        "Implement campaigns in real community settings",
        "Partner with local advocacy organizations",
        "Create ongoing community engagement projects",
        "Develop policy proposal documents",
      ],
    },
    {
      id: "digital-storytelling",
      title: "Caribbean Heritage Digital Storytelling",
      description:
        "Students create multimedia digital stories that preserve and share Caribbean cultural heritage through personal and family narratives.",
      duration: "3-4 weeks",
      difficulty: "Intermediate",
      participants: "Individual or pairs",
      icon: Video,
      objectives: [
        "Develop narrative writing and storytelling skills",
        "Learn digital storytelling techniques and tools",
        "Preserve and share cultural heritage",
        "Practice multimedia composition and editing",
        "Build connections between personal and cultural identity",
      ],
      materials: [
        "Digital storytelling software (iMovie, Adobe Premiere)",
        "Recording equipment for audio narration",
        "Photo scanning apps or equipment",
        "Music and sound effect libraries",
        "Storyboard templates and planning guides",
      ],
      procedures: [
        "Collect family stories and cultural heritage information",
        "Interview family members and community elders",
        "Write narrative scripts with strong story structure",
        "Gather visual materials (photos, artifacts, locations)",
        "Record narration with appropriate pacing and expression",
        "Edit digital story with images, music, and effects",
        "Share stories with class and community audiences",
        "Create digital archive of cultural stories",
      ],
      assessment: [
        "Narrative structure and storytelling quality",
        "Cultural authenticity and respect",
        "Technical production skills",
        "Script writing and narration delivery",
        "Visual composition and editing choices",
      ],
      extensions: [
        "Create community digital story collection",
        "Partner with local historical societies",
        "Develop intergenerational storytelling events",
        "Submit to digital storytelling festivals",
      ],
    },
    {
      id: "research-report-publishing",
      title: "Caribbean Research Report Publishing",
      description:
        "Students conduct in-depth research on Caribbean topics and publish professional reports using academic writing conventions.",
      duration: "4-5 weeks",
      difficulty: "Advanced",
      participants: "Individual or pairs",
      icon: FileText,
      objectives: [
        "Master research and academic writing processes",
        "Learn proper citation and source evaluation",
        "Develop expertise on Caribbean topics",
        "Practice formal report structure and conventions",
        "Build information literacy and critical thinking skills",
      ],
      materials: [
        "Research databases and academic sources",
        "Citation guides and style manuals",
        "Report templates and formatting guides",
        "Publishing platforms (Google Sites, Flipgrid)",
        "Peer review and editing checklists",
      ],
      procedures: [
        "Choose research topics related to Caribbean studies",
        "Develop research questions and thesis statements",
        "Conduct systematic research using multiple sources",
        "Take detailed notes and organize information",
        "Write report drafts following academic conventions",
        "Cite sources properly and create bibliographies",
        "Revise and edit through multiple drafts",
        "Publish final reports in professional format",
      ],
      assessment: [
        "Research depth and source quality",
        "Thesis development and argument structure",
        "Academic writing conventions and style",
        "Citation accuracy and bibliography completeness",
        "Final publication quality and presentation",
      ],
      extensions: [
        "Submit to student research conferences",
        "Create research presentation for community",
        "Develop policy recommendations based on research",
        "Collaborate with university researchers",
      ],
    },
    {
      id: "creative-writing-workshop",
      title: "Caribbean Voices Creative Writing Workshop",
      description:
        "Students explore various creative writing genres while developing their unique voices and celebrating Caribbean literary traditions.",
      duration: "4-6 weeks",
      difficulty: "Intermediate",
      participants: "Individual with group sharing",
      icon: PenTool,
      objectives: [
        "Explore multiple creative writing genres",
        "Develop personal writing voice and style",
        "Study Caribbean literary traditions and techniques",
        "Practice writing workshop and peer feedback processes",
        "Build confidence in creative expression",
      ],
      materials: [
        "Caribbean literature examples and models",
        "Writing prompts and inspiration materials",
        "Workshop feedback forms and protocols",
        "Publishing materials for final anthology",
        "Recording equipment for poetry performances",
      ],
      procedures: [
        "Study Caribbean literary traditions and contemporary voices",
        "Practice various creative writing forms (poetry, fiction, memoir)",
        "Participate in regular writing workshop sessions",
        "Give and receive constructive peer feedback",
        "Revise and polish selected pieces for publication",
        "Perform selected works at poetry readings",
        "Compile class anthology of creative works",
        "Celebrate writing achievements with community event",
      ],
      assessment: [
        "Creative writing quality and originality",
        "Growth in writing voice and technique",
        "Workshop participation and feedback quality",
        "Revision and editing effectiveness",
        "Performance and presentation skills",
      ],
      extensions: [
        "Submit to youth literary magazines",
        "Participate in regional writing competitions",
        "Mentor younger student writers",
        "Organize community writing events",
      ],
    },
    {
      id: "multimedia-presentation",
      title: "Caribbean Innovation Multimedia Presentation Lab",
      description:
        "Students research Caribbean innovations and create professional multimedia presentations showcasing regional achievements and potential.",
      duration: "3-4 weeks",
      difficulty: "Intermediate to Advanced",
      participants: "Groups of 3-4",
      icon: Presentation,
      objectives: [
        "Research and present Caribbean innovations and achievements",
        "Master multimedia presentation design and delivery",
        "Practice informational writing and speaking integration",
        "Develop visual design and communication skills",
        "Build pride in Caribbean contributions to global knowledge",
      ],
      materials: [
        "Presentation software (PowerPoint, Prezi, Canva)",
        "Research databases and innovation resources",
        "Video and audio recording equipment",
        "Design elements and visual resources",
        "Presentation evaluation rubrics",
      ],
      procedures: [
        "Research Caribbean innovations in various fields",
        "Organize information using presentation planning tools",
        "Write clear, engaging presentation scripts",
        "Design visually appealing slides with multimedia elements",
        "Practice presentation delivery with timing and transitions",
        "Incorporate interactive elements and audience engagement",
        "Present to authentic audiences (community, other classes)",
        "Reflect on presentation effectiveness and audience feedback",
      ],
      assessment: [
        "Research accuracy and depth",
        "Presentation organization and flow",
        "Visual design and multimedia integration",
        "Speaking delivery and audience engagement",
        "Collaboration and preparation quality",
      ],
      extensions: [
        "Present at regional innovation showcases",
        "Create video versions for broader distribution",
        "Develop innovation proposal presentations",
        "Partner with Caribbean innovation organizations",
      ],
    },
  ]

  const writingProcess = [
    {
      stage: "Prewriting & Planning",
      activities: [
        "Brainstorming and idea generation",
        "Audience and purpose analysis",
        "Research and information gathering",
        "Graphic organizers and planning tools",
        "Genre study and mentor text analysis",
      ],
    },
    {
      stage: "Drafting",
      activities: [
        "First draft composition",
        "Focus on ideas and content flow",
        "Experiment with voice and style",
        "Use planning tools as guides",
        "Write without heavy editing",
      ],
    },
    {
      stage: "Revising",
      activities: [
        "Content and organization improvement",
        "Peer feedback and collaboration",
        "Voice and style refinement",
        "Evidence and support strengthening",
        "Structure and flow enhancement",
      ],
    },
    {
      stage: "Editing & Publishing",
      activities: [
        "Grammar and mechanics correction",
        "Spelling and punctuation review",
        "Format and presentation polishing",
        "Final proofreading and checking",
        "Publishing and sharing with audiences",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Curriculum", href: "/curriculum" },
            { label: "Grade 6 Subjects", href: "/curriculum/grade6-subjects" },
            { label: "Language Arts", href: "/curriculum/grade6-subjects/language-arts" },
            { label: "Activities", href: "/curriculum/grade6-subjects/activities/language-arts" },
            {
              label: "Writing & Representing",
              href: "/curriculum/grade6-subjects/activities/language-arts/writing-representing",
            },
          ]}
        />

        {/* Header */}
        <div className="text-center my-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
              <PenTool className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Writing & Representing Activities</h1>
              <p className="text-xl text-gray-600">Grade 6 Composition & Communication Excellence</p>
            </div>
          </div>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Comprehensive writing activities that develop skilled communicators through authentic purposes, diverse
            audiences, and meaningful Caribbean contexts across multiple genres and formats.
          </p>
        </div>

        {/* Writing Process Overview */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>The Writing Process in Grade 6</CardTitle>
            <CardDescription>Strategic stages students will practice across all writing activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {writingProcess.map((stage, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-gray-900 mb-3">{stage.stage}</h3>
                  <ul className="space-y-2">
                    {stage.activities.map((activity, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Activities Grid */}
        <div className="space-y-8">
          {activities.map((activity) => {
            const IconComponent = activity.icon
            return (
              <Card key={activity.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{activity.title}</CardTitle>
                        <CardDescription className="text-base mt-2">{activity.description}</CardDescription>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 text-right">
                      <Badge variant="outline" className="text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {activity.duration}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        <Target className="w-3 h-3 mr-1" />
                        {activity.difficulty}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        <Users className="w-3 h-3 mr-1" />
                        {activity.participants}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Objectives */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Learning Objectives</h4>
                      <ul className="space-y-1">
                        {activity.objectives.map((objective, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            {objective}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Materials */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Materials Needed</h4>
                      <ul className="space-y-1">
                        {activity.materials.map((material, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            {material}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Procedures */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Activity Procedures</h4>
                    <ol className="space-y-2">
                      {activity.procedures.map((step, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start gap-3">
                          <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full min-w-[24px] text-center">
                            {index + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Assessment */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Assessment Criteria</h4>
                      <ul className="space-y-1">
                        {activity.assessment.map((criteria, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            {criteria}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Extensions */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Extension Activities</h4>
                      <ul className="space-y-1">
                        {activity.extensions.map((extension, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                            {extension}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <Button asChild>
                      <Link
                        href={`/curriculum/grade6-subjects/activities/language-arts/writing-representing/${activity.id}`}
                      >
                        View Detailed Lesson Plan
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Teaching Tips */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Teaching Tips for Writing & Representing Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Building Confident Writers</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Emphasize process over product initially</li>
                  <li>• Provide authentic audiences and purposes</li>
                  <li>• Model writing processes and thinking aloud</li>
                  <li>• Celebrate growth and effort consistently</li>
                  <li>• Offer choice in topics and formats</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Supporting Diverse Writers</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Honor home languages and cultural perspectives</li>
                  <li>• Provide graphic organizers and planning tools</li>
                  <li>• Use peer collaboration and support</li>
                  <li>• Offer multiple response and sharing formats</li>
                  <li>• Scaffold complex writing tasks systematically</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
