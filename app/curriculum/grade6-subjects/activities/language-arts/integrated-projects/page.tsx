import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Globe, Lightbulb, Heart, Leaf, BookOpen, Clock, Target, Star } from "lucide-react"
import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"

export default function IntegratedProjectsPage() {
  const projects = [
    {
      id: "climate-action-campaign",
      title: "Caribbean Climate Action Campaign",
      description:
        "Students research climate change impacts on the Caribbean, interview experts, write policy proposals, and create multimedia campaigns for climate action.",
      duration: "6-8 weeks",
      difficulty: "Advanced",
      participants: "Groups of 6-8",
      icon: Leaf,
      strands: ["All Language Arts Strands"],
      subjects: ["Science", "Social Studies", "Mathematics"],
      objectives: [
        "Research and analyze climate change impacts on Caribbean region",
        "Conduct interviews with climate scientists and community leaders",
        "Write persuasive policy proposals and action plans",
        "Create multimedia campaign materials for different audiences",
        "Present findings and recommendations to authentic audiences",
        "Develop collaborative research and communication skills",
      ],
      materials: [
        "Climate science databases and research resources",
        "Interview recording equipment and scheduling tools",
        "Policy writing templates and government resources",
        "Multimedia creation software and design tools",
        "Presentation equipment and community contact lists",
      ],
      procedures: [
        "Research climate change science and Caribbean-specific impacts",
        "Interview climate scientists, government officials, and community leaders",
        "Analyze data and identify key issues and potential solutions",
        "Write policy proposals with evidence-based recommendations",
        "Create campaign materials targeting different stakeholder groups",
        "Develop presentations for government officials and community groups",
        "Present campaigns to authentic audiences and gather feedback",
        "Reflect on project impact and plan follow-up actions",
      ],
      assessment: [
        "Research quality and scientific accuracy",
        "Interview skills and information gathering",
        "Policy writing clarity and persuasiveness",
        "Campaign material effectiveness and design",
        "Presentation delivery and audience engagement",
        "Collaboration and project management skills",
      ],
      realWorld: [
        "Present to local government climate committees",
        "Partner with environmental organizations",
        "Submit proposals to regional climate initiatives",
        "Create ongoing school sustainability programs",
      ],
    },
    {
      id: "heritage-festival",
      title: "Caribbean Heritage Festival Project",
      description:
        "Students organize a comprehensive heritage festival celebrating Caribbean culture through research, storytelling, performance, and community engagement.",
      duration: "8-10 weeks",
      difficulty: "Advanced",
      participants: "Whole class with specialized teams",
      icon: Heart,
      strands: ["All Language Arts Strands"],
      subjects: ["Social Studies", "Arts", "Music"],
      objectives: [
        "Research diverse Caribbean cultural traditions and histories",
        "Collect and preserve community stories and oral histories",
        "Write festival programs, promotional materials, and cultural guides",
        "Organize and host community cultural celebration event",
        "Develop cultural appreciation and community connections",
        "Practice event planning and organizational skills",
      ],
      materials: [
        "Cultural research databases and community resources",
        "Recording equipment for oral history collection",
        "Festival planning templates and organizational tools",
        "Promotional material creation software and printing resources",
        "Performance space and community event coordination",
      ],
      procedures: [
        "Research Caribbean cultural traditions from different islands and communities",
        "Interview community elders and cultural practitioners",
        "Collect family stories, recipes, music, and cultural artifacts",
        "Write cultural information guides and festival programs",
        "Plan festival logistics including performances, food, and activities",
        "Create promotional materials and community outreach campaigns",
        "Host heritage festival with community participation",
        "Document festival and create lasting cultural resource collection",
      ],
      assessment: [
        "Cultural research depth and accuracy",
        "Oral history collection and preservation quality",
        "Festival planning and organizational skills",
        "Written materials clarity and cultural sensitivity",
        "Event execution and community engagement",
        "Reflection on cultural learning and community impact",
      ],
      realWorld: [
        "Partner with cultural organizations and museums",
        "Create permanent cultural resource collection",
        "Establish annual heritage celebration tradition",
        "Develop cultural exchange programs with other schools",
      ],
    },
    {
      id: "community-problem-solvers",
      title: "Community Problem Solvers Initiative",
      description:
        "Students identify local community challenges, research solutions, interview stakeholders, and develop comprehensive action plans with community presentations.",
      duration: "6-8 weeks",
      difficulty: "Advanced",
      participants: "Groups of 4-6",
      icon: Lightbulb,
      strands: ["All Language Arts Strands"],
      subjects: ["Social Studies", "Mathematics", "Science"],
      objectives: [
        "Identify and analyze local community challenges",
        "Conduct stakeholder interviews and community research",
        "Write problem analysis reports and solution proposals",
        "Create persuasive presentations for community leaders",
        "Develop civic engagement and advocacy skills",
        "Practice collaborative problem-solving and communication",
      ],
      materials: [
        "Community issue research databases and local resources",
        "Interview scheduling and recording equipment",
        "Data analysis tools and graphic organizers",
        "Presentation software and community contact information",
        "Solution planning templates and project management tools",
      ],
      procedures: [
        "Survey community to identify pressing local issues",
        "Research chosen problems using multiple sources and perspectives",
        "Interview community members, leaders, and subject matter experts",
        "Analyze data and identify root causes and potential solutions",
        "Write comprehensive problem analysis and solution reports",
        "Develop persuasive presentations with actionable recommendations",
        "Present to community leaders, government officials, or organizations",
        "Plan follow-up actions and community engagement strategies",
      ],
      assessment: [
        "Problem identification and analysis quality",
        "Research thoroughness and source evaluation",
        "Interview skills and stakeholder engagement",
        "Solution feasibility and innovation",
        "Presentation effectiveness and persuasiveness",
        "Community impact and follow-through planning",
      ],
      realWorld: [
        "Present to town councils or community boards",
        "Partner with local non-profit organizations",
        "Implement pilot solutions in school or community",
        "Create ongoing community service projects",
      ],
    },
    {
      id: "historical-documentary",
      title: "Caribbean History Documentary Project",
      description:
        "Students create professional documentaries exploring untold stories of Caribbean history through research, interviews, and multimedia production.",
      duration: "8-10 weeks",
      difficulty: "Advanced",
      participants: "Groups of 5-7",
      icon: BookOpen,
      strands: ["All Language Arts Strands"],
      subjects: ["Social Studies", "Technology", "Arts"],
      objectives: [
        "Research lesser-known Caribbean historical events and figures",
        "Conduct interviews with historians and community knowledge holders",
        "Write documentary scripts with compelling narrative structure",
        "Learn video production and editing techniques",
        "Create educational resources to accompany documentaries",
        "Develop historical thinking and media production skills",
      ],
      materials: [
        "Historical research databases and archival resources",
        "Video recording and editing equipment/software",
        "Interview scheduling tools and community contacts",
        "Script writing templates and storyboard materials",
        "Distribution platforms and educational resource creation tools",
      ],
      procedures: [
        "Research Caribbean historical topics and identify compelling stories",
        "Interview historians, community elders, and subject matter experts",
        "Gather historical images, documents, and multimedia resources",
        "Write documentary scripts with strong narrative and educational value",
        "Film interviews, narration, and supporting visual content",
        "Edit documentaries with professional techniques and standards",
        "Create educational guides and discussion materials",
        "Screen documentaries for community and educational audiences",
      ],
      assessment: [
        "Historical research accuracy and depth",
        "Interview quality and expert engagement",
        "Script writing and narrative structure",
        "Video production and editing skills",
        "Educational value and community impact",
        "Collaboration and project management effectiveness",
      ],
      realWorld: [
        "Submit to student film festivals",
        "Partner with historical societies and museums",
        "Create educational resources for other schools",
        "Develop ongoing historical preservation projects",
      ],
    },
    {
      id: "science-communication",
      title: "Caribbean Science Communication Challenge",
      description:
        "Students research Caribbean scientific innovations, interview scientists, and create accessible science communication materials for diverse audiences.",
      duration: "5-6 weeks",
      difficulty: "Intermediate to Advanced",
      participants: "Groups of 4-5",
      icon: Globe,
      strands: ["All Language Arts Strands"],
      subjects: ["Science", "Technology", "Mathematics"],
      objectives: [
        "Research Caribbean contributions to science and innovation",
        "Interview Caribbean scientists and researchers",
        "Write science articles for different audience levels",
        "Create multimedia science communication materials",
        "Practice translating complex information for general audiences",
        "Develop appreciation for Caribbean scientific achievements",
      ],
      materials: [
        "Scientific research databases and Caribbean science resources",
        "Interview recording equipment and scientist contact information",
        "Science writing guides and audience analysis tools",
        "Multimedia creation software and design resources",
        "Science communication examples and evaluation rubrics",
      ],
      procedures: [
        "Research Caribbean scientists and their contributions to various fields",
        "Interview working scientists about their research and career paths",
        "Write science articles adapted for different audiences (children, adults, experts)",
        "Create infographics, videos, or podcasts explaining scientific concepts",
        "Test materials with target audiences for clarity and engagement",
        "Revise communication materials based on feedback",
        "Present science communication projects to school and community",
        "Reflect on the importance of science communication and accessibility",
      ],
      assessment: [
        "Scientific research accuracy and comprehension",
        "Interview skills and scientist engagement",
        "Writing adaptation for different audiences",
        "Multimedia communication effectiveness",
        "Audience testing and revision quality",
        "Understanding of science communication principles",
      ],
      realWorld: [
        "Partner with Caribbean universities and research institutions",
        "Submit to science communication competitions",
        "Create ongoing science communication blog or channel",
        "Develop STEM mentorship programs",
      ],
    },
    {
      id: "cultural-exchange",
      title: "Global Caribbean Cultural Exchange Program",
      description:
        "Students connect with peers from other Caribbean islands and countries to share cultures, collaborate on projects, and build international understanding.",
      duration: "10-12 weeks",
      difficulty: "Advanced",
      participants: "Whole class with international partners",
      icon: Users,
      strands: ["All Language Arts Strands"],
      subjects: ["Social Studies", "Geography", "Technology"],
      objectives: [
        "Connect with students from other Caribbean islands and diaspora communities",
        "Research and share cultural traditions, histories, and contemporary life",
        "Collaborate on joint projects exploring shared and unique experiences",
        "Develop cross-cultural communication and collaboration skills",
        "Create lasting international friendships and understanding",
        "Practice digital citizenship and global communication",
      ],
      materials: [
        "Video conferencing technology and collaboration platforms",
        "Cultural research resources and sharing templates",
        "Project collaboration tools and shared workspaces",
        "Cultural artifact sharing and documentation materials",
        "International communication scheduling and coordination tools",
      ],
      procedures: [
        "Connect with partner schools in other Caribbean countries",
        "Research and prepare cultural presentations about local communities",
        "Participate in regular video conferences with international partners",
        "Collaborate on joint research projects about shared Caribbean experiences",
        "Exchange cultural artifacts, stories, and traditions",
        "Work together on solutions to common regional challenges",
        "Create joint presentations or products showcasing collaboration",
        "Plan potential future exchanges or ongoing partnerships",
      ],
      assessment: [
        "Cultural research and presentation quality",
        "Cross-cultural communication skills",
        "Collaboration effectiveness with international partners",
        "Joint project quality and innovation",
        "Cultural sensitivity and global awareness",
        "Digital citizenship and online collaboration skills",
      ],
      realWorld: [
        "Establish ongoing sister school relationships",
        "Plan actual student exchange visits",
        "Create regional student collaboration networks",
        "Develop international service learning projects",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Curriculum", href: "/curriculum" },
            { label: "Grade 6 Subjects", href: "/curriculum/grade6-subjects" },
            { label: "Language Arts", href: "/curriculum/grade6-subjects/language-arts" },
            { label: "Activities", href: "/curriculum/grade6-subjects/activities/language-arts" },
            {
              label: "Integrated Projects",
              href: "/curriculum/grade6-subjects/activities/language-arts/integrated-projects",
            },
          ]}
        />

        {/* Header */}
        <div className="text-center my-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Integrated Strand Projects</h1>
              <p className="text-xl text-gray-600">Grade 6 Cross-Curricular Language Arts Excellence</p>
            </div>
          </div>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Comprehensive projects that braid all language arts strands while integrating with other subjects to create
            authentic, meaningful learning experiences with real-world impact and community connections.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project) => {
            const IconComponent = project.icon
            return (
              <Card key={project.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{project.title}</CardTitle>
                        <CardDescription className="text-base mt-2">{project.description}</CardDescription>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 text-right">
                      <Badge variant="outline" className="text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {project.duration}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        <Target className="w-3 h-3 mr-1" />
                        {project.difficulty}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        <Users className="w-3 h-3 mr-1" />
                        {project.participants}
                      </Badge>
                    </div>
                  </div>

                  {/* Strand and Subject Integration */}
                  <div className="mt-4 space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Language Arts Strands</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.strands.map((strand, index) => (
                          <Badge key={index} variant="secondary" className="text-xs bg-blue-100 text-blue-800">
                            {strand}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Subject Integration</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.subjects.map((subject, index) => (
                          <Badge key={index} variant="secondary" className="text-xs bg-green-100 text-green-800">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Objectives */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Project Objectives</h4>
                      <ul className="space-y-1">
                        {project.objectives.map((objective, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                            {objective}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Materials */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Materials & Resources</h4>
                      <ul className="space-y-1">
                        {project.materials.map((material, index) => (
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
                    <h4 className="font-semibold text-gray-900 mb-3">Project Procedures</h4>
                    <ol className="space-y-2">
                      {project.procedures.map((step, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start gap-3">
                          <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full min-w-[24px] text-center">
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
                        {project.assessment.map((criteria, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            {criteria}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Real-World Connections */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Real-World Connections</h4>
                      <ul className="space-y-1">
                        {project.realWorld.map((connection, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                            <Star className="w-3 h-3 text-yellow-500 mt-1 flex-shrink-0" />
                            {connection}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <Button asChild>
                      <Link
                        href={`/curriculum/grade6-subjects/activities/language-arts/integrated-projects/${project.id}`}
                      >
                        View Detailed Project Plan
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Implementation Guide */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Implementing Integrated Projects Successfully</CardTitle>
            <CardDescription>Key strategies for managing complex, multi-strand projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Project Planning</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Establish clear timelines and milestones</li>
                  <li>• Assign specific roles and responsibilities</li>
                  <li>• Create project management systems</li>
                  <li>• Plan for authentic audience connections</li>
                  <li>• Build in regular reflection and adjustment</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Assessment Strategies</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Use formative assessment throughout</li>
                  <li>• Include self and peer evaluation</li>
                  <li>• Document learning through portfolios</li>
                  <li>• Assess both process and product</li>
                  <li>• Involve community in evaluation</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Community Connections</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Identify authentic community partners</li>
                  <li>• Prepare students for professional interactions</li>
                  <li>• Create meaningful presentation opportunities</li>
                  <li>• Follow up on project impact</li>
                  <li>• Build lasting relationships for future projects</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
