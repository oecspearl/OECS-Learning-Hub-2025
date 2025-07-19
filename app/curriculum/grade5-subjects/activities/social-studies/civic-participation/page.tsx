"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Breadcrumb } from "@/components/breadcrumb"
import { ArrowLeft, Users, Target, BookOpen, Lightbulb, Play, Vote } from "lucide-react"
import Link from "next/link"

export default function CivicParticipationActivitiesPage() {
  const activityCategories = [
    {
      id: "government-systems",
      title: "Government Systems and Democratic Participation",
      icon: Vote,
      activities: [
        {
          title: "Caribbean Government Systems Investigation",
          duration: "165 minutes",
          learningOutcomes: [
            "Identify the various other types of government systems in the region",
            "Compare the structures of the main types of government systems in the region",
            "Appreciate that democratic systems of government can have varying structures",
          ],
          materials: [
            "Images of Caribbean leaders and flags",
            'Video access: "Government Systems in the Caribbean"',
            "Government comparison worksheets",
            "Caribbean maps for political coloring",
            "Digital presentation tools",
            "Debate preparation materials",
          ],
          procedure: [
            'Phase 1: "Which Country Do I Lead?" Engagement Game (20 minutes)',
            "Phase 2: Government Definition and Importance Review (15 minutes)",
            "Phase 3: Video Analysis and Government System Identification (35 minutes)",
            "Phase 4: Map Work and Visual Analysis (20 minutes)",
            "Phase 5: Comparative Government Structure Research (40 minutes)",
            "Phase 6: Mind Games and Interactive Learning (25 minutes)",
            "Phase 7: Democracy Focus and Guest Speaker Session (45 minutes)",
            "Phase 8: Government Systems Debate (30 minutes)",
          ],
          assessment: [
            "Accurately explains all four government systems with detailed examples",
            "Shows sophisticated comparison highlighting key differences and similarities",
            "Demonstrates deep appreciation for democratic principles and participation",
            "Participates in debate with strong argumentation and respectful listening",
          ],
          keyFeatures: [
            "Interactive leader recognition game",
            "Video analysis with structured note-taking",
            "Hands-on map coloring and pattern analysis",
            "Guest speaker from local government",
            "Structured debate on democracy",
          ],
        },
      ],
    },
    {
      id: "regional-integration",
      title: "Regional Integration and Caribbean Unity",
              icon: Users,
      activities: [
        {
          title: "Regional Integration and Caribbean Unity",
          duration: "195 minutes",
          learningOutcomes: [
            "State the reasons for regional integration with other Caribbean countries",
            "Research different areas of integration in the Caribbean",
            "Appreciate that there are both advantages and limitations of regional integration and interaction",
          ],
          materials: [
            "Caribbean flags for distribution",
            "OECS song audio/video",
            "Maps and atlases for coordinate activities",
            "Digital tools: Nearpod, Kahoot, Quizizz",
            "Exhibition materials: posters, artifacts, pictures",
            "Research devices and presentation tools",
          ],
          procedure: [
            'Phase 1: "Locating Our Islands" Interactive Game (20 minutes)',
            "Phase 2: Musical Integration and Cultural Connection (25 minutes)",
            'Phase 3: "I Know What Integration Is" Multi-Station Exhibition (45 minutes)',
            "Phase 4: Bilateral Relationship Research Project (40 minutes)",
            "Phase 5: Caribbean Integration Mapping (20 minutes)",
            "Phase 6: Integration Role-Play Scenarios (35 minutes)",
            "Phase 7: Regional Integration Debate (30 minutes)",
          ],
          assessment: [
            "Demonstrates comprehensive understanding of integration forms and examples",
            "Shows sophisticated evaluation of advantages and limitations",
            "Accurately maps complex regional relationships",
            "Participates in role-play with realistic perspectives",
            "Engages in debate with strong argumentation and evidence",
          ],
          keyFeatures: [
            "Coordinate-based island location game",
            "OECS song analysis and flag activities",
            "Multi-station exhibition with economic, social, and political displays",
            "Bilateral relationship research projects",
            "Role-play scenarios exploring integration benefits and challenges",
          ],
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Curriculum", href: "/curriculum" },
            { label: "Grade 5 Subjects", href: "/curriculum/grade5-subjects" },
            { label: "Social Studies Activities", href: "/curriculum/grade5-subjects/activities/social-studies" },
            {
              label: "Civic Participation",
              href: "/curriculum/grade5-subjects/activities/social-studies/civic-participation",
            },
          ]}
        />

        <div className="mb-8">
          <Link href="/curriculum/grade5-subjects/activities/social-studies">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Social Studies Activities
            </Button>
          </Link>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <Users className="h-12 w-12" />
              <div>
                <h1 className="text-4xl font-bold">Civic Participation Activities</h1>
                <p className="text-xl text-blue-100">
                  Explore government systems, regional integration, and democratic participation through research and
                  role-play
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white">
                <BookOpen className="mr-1 h-4 w-4" />2 Comprehensive Activities
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                <Target className="mr-1 h-4 w-4" />
                Democratic Understanding
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                <Lightbulb className="mr-1 h-4 w-4" />
                Interactive Learning
              </Badge>
            </div>
          </div>
        </div>

        <Tabs defaultValue="government-systems" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="government-systems">Government Systems</TabsTrigger>
            <TabsTrigger value="regional-integration">Regional Integration</TabsTrigger>
          </TabsList>

          {activityCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <category.icon className="h-8 w-8 text-blue-600" />
                    <div>
                      <CardTitle className="text-2xl">{category.title}</CardTitle>
                      <CardDescription>
                        Detailed activities with learning outcomes, materials, and procedures
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.activities.map((activity, index) => (
                      <AccordionItem key={index} value={`activity-${index}`} className="border rounded-lg">
                        <AccordionTrigger className="px-6 py-4 hover:no-underline">
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-4">
                              <Play className="h-5 w-5 text-blue-600" />
                              <div className="text-left">
                                <h3 className="font-semibold text-lg">{activity.title}</h3>
                                <p className="text-sm text-gray-600">Duration: {activity.duration}</p>
                              </div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-6">
                          <div className="grid gap-6">
                            {/* Learning Outcomes */}
                            <div>
                              <h4 className="font-semibold text-lg mb-3 text-blue-700">Learning Outcomes</h4>
                              <ul className="space-y-2">
                                {activity.learningOutcomes.map((outcome, outcomeIndex) => (
                                  <li key={outcomeIndex} className="flex items-start gap-2">
                                    <Target className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm">{outcome}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Materials */}
                            <div>
                              <h4 className="font-semibold text-lg mb-3 text-blue-700">Materials Needed</h4>
                              <ul className="space-y-2">
                                {activity.materials.map((material, materialIndex) => (
                                  <li key={materialIndex} className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                                    <span className="text-sm">{material}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Procedure */}
                            <div>
                              <h4 className="font-semibold text-lg mb-3 text-blue-700">Procedure</h4>
                              <ol className="space-y-2">
                                {activity.procedure.map((step, stepIndex) => (
                                  <li key={stepIndex} className="flex items-start gap-3">
                                    <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                                      {stepIndex + 1}
                                    </span>
                                    <span className="text-sm">{step}</span>
                                  </li>
                                ))}
                              </ol>
                            </div>

                            {/* Key Features */}
                            {activity.keyFeatures && (
                              <div>
                                <h4 className="font-semibold text-lg mb-3 text-blue-700">Key Features</h4>
                                <ul className="space-y-2">
                                  {activity.keyFeatures.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start gap-2">
                                      <Lightbulb className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                                      <span className="text-sm">{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Assessment */}
                            <div>
                              <h4 className="font-semibold text-lg mb-3 text-blue-700">Assessment Criteria</h4>
                              <ul className="space-y-2">
                                {activity.assessment.map((criterion, criterionIndex) => (
                                  <li key={criterionIndex} className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                                    <span className="text-sm">{criterion}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Additional Resources */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">Additional Resources</CardTitle>
            <CardDescription>Supplementary materials and cross-curricular connections</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-3">Cross-Curricular Connections</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">History: Colonial period government systems, independence movements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">
                      Language Arts: Persuasive writing, debate skills, research methodology
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">
                      Mathematics: Election statistics, population representation, government budgets
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">
                      Art: Design campaign materials, create government system infographics
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Key Skills Developed</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">Democratic understanding and civic responsibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">Comparative analysis and critical thinking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">Research and presentation skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">Debate and argumentation abilities</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
