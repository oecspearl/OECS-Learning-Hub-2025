"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Breadcrumb } from "@/components/breadcrumb"
import { ArrowLeft, DollarSign, Target, BookOpen, Lightbulb, Play, Building, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function EconomicDecisionMakingActivitiesPage() {
  const activityCategories = [
    {
      id: "trade-business",
      title: "Caribbean Business and Trade Networks",
      icon: Building,
      activities: [
        {
          title: "Caribbean Business and Trade Networks Investigation",
          duration: "200 minutes",
          learningOutcomes: [
            "Identify the major Caribbean companies that trade and offer services to and with your country and describe what they do",
            "Investigate the level of foreign, regional, and national ownership of various goods and services imported and exported from your country",
            "Appreciate the importance of locally owned companies in the social and economic well-being of the region",
          ],
          materials: [
            "KWL charts for economic concepts",
            "Digital devices for business research",
            "Large Caribbean maps for company plotting",
            "Bristol board and art supplies for presentations",
            "Trade show setup materials",
            "Role-play scenarios and props",
          ],
          procedure: [
            "Phase 1: Economic Foundation Building (25 minutes)",
            "Phase 2: Caribbean Business Research and Mapping (40 minutes)",
            "Phase 3: Trade Show Simulation (35 minutes)",
            "Phase 4: Ownership Structure Investigation (30 minutes)",
            "Phase 5: Local Business Appreciation Project (35 minutes)",
            "Phase 6: Assessment and Evaluation (35 minutes)",
          ],
          assessment: [
            "Demonstrates comprehensive understanding of Caribbean business networks and operations",
            "Shows sophisticated understanding of ownership structures and their implications",
            "Clearly understands how businesses affect regional economy",
            "Displays excellent teamwork with positive contributions to group success",
          ],
          keyFeatures: [
            "KWL chart activation for economic concepts",
            "Interactive mapping of major Caribbean companies",
            "Trade show simulation with entrepreneurship focus",
            "Ownership structure analysis of everyday products",
            "Local business success story development",
          ],
          phases: [
            {
              title: "Economic Foundation Building",
              duration: "25 minutes",
              description: "Students assess and build foundational economic knowledge using KWL charts",
              activities: [
                "Economic concepts exploration (work, barter, trade, occupation, industry)",
                "Interactive discussion on economic relationships",
                "Personal experience connections to economic concepts",
              ],
            },
            {
              title: "Caribbean Business Research and Mapping",
              duration: "40 minutes",
              description: "Students research and map significant regional businesses",
              activities: [
                "Investigation of major Caribbean companies by industry",
                "Interactive map creation showing company locations",
                "Analysis of business patterns and regional impact",
              ],
            },
            {
              title: "Trade Show Simulation",
              duration: "35 minutes",
              description: "Students create and present fictional Caribbean businesses",
              activities: [
                "Business concept development addressing regional needs",
                "Booth design and marketing materials creation",
                "Networking rounds and partnership formation",
              ],
            },
            {
              title: "Ownership Structure Investigation",
              duration: "30 minutes",
              description: "Students analyze ownership patterns of everyday products",
              activities: [
                "Product brainstorming and ownership research",
                "Classification as foreign, regional, or national ownership",
                "Pattern analysis and implications discussion",
              ],
            },
            {
              title: "Local Business Appreciation Project",
              duration: "35 minutes",
              description: "Students create stories highlighting local business impacts",
              activities: [
                "Research of local business success stories",
                "Collaborative storytelling about community benefits",
                "Creative expression through various media formats",
              ],
            },
          ],
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Curriculum", href: "/curriculum" },
            { label: "Grade 5 Subjects", href: "/curriculum/grade5-subjects" },
            { label: "Social Studies Activities", href: "/curriculum/grade5-subjects/activities/social-studies" },
            {
              label: "Economic Decision Making",
              href: "/curriculum/grade5-subjects/activities/social-studies/economic-decision-making",
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

          <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-lg p-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <DollarSign className="h-12 w-12" />
              <div>
                <h1 className="text-4xl font-bold">Economic Decision Making Activities</h1>
                <p className="text-xl text-green-100">
                  Investigate trade relationships, business networks, migration patterns, and economic cooperation
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white">
                <BookOpen className="mr-1 h-4 w-4" />
                Comprehensive Business Focus
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                <Target className="mr-1 h-4 w-4" />
                Economic Understanding
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                <Lightbulb className="mr-1 h-4 w-4" />
                Entrepreneurship Skills
              </Badge>
            </div>
          </div>
        </div>

        <Tabs defaultValue="trade-business" className="space-y-6">
          <TabsList className="grid w-full grid-cols-1">
            <TabsTrigger value="trade-business">Caribbean Business & Trade Networks</TabsTrigger>
          </TabsList>

          {activityCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <category.icon className="h-8 w-8 text-green-600" />
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
                              <Play className="h-5 w-5 text-green-600" />
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
                              <h4 className="font-semibold text-lg mb-3 text-green-700">Learning Outcomes</h4>
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
                              <h4 className="font-semibold text-lg mb-3 text-green-700">Materials Needed</h4>
                              <ul className="space-y-2">
                                {activity.materials.map((material, materialIndex) => (
                                  <li key={materialIndex} className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                                    <span className="text-sm">{material}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Procedure */}
                            <div>
                              <h4 className="font-semibold text-lg mb-3 text-green-700">Procedure Overview</h4>
                              <ol className="space-y-2">
                                {activity.procedure.map((step, stepIndex) => (
                                  <li key={stepIndex} className="flex items-start gap-3">
                                    <span className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                                      {stepIndex + 1}
                                    </span>
                                    <span className="text-sm">{step}</span>
                                  </li>
                                ))}
                              </ol>
                            </div>

                            {/* Detailed Phases */}
                            {activity.phases && (
                              <div>
                                <h4 className="font-semibold text-lg mb-3 text-green-700">Detailed Activity Phases</h4>
                                <div className="space-y-4">
                                  {activity.phases.map((phase, phaseIndex) => (
                                    <div key={phaseIndex} className="border rounded-lg p-4 bg-green-50">
                                      <div className="flex items-center gap-2 mb-2">
                                        <TrendingUp className="w-5 h-5 text-green-600" />
                                        <h5 className="font-semibold text-green-800">{phase.title}</h5>
                                        <Badge variant="outline" className="text-xs">
                                          {phase.duration}
                                        </Badge>
                                      </div>
                                      <p className="text-sm text-gray-700 mb-3">{phase.description}</p>
                                      <ul className="space-y-1">
                                        {phase.activities.map((phaseActivity, activityIndex) => (
                                          <li key={activityIndex} className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                                            <span className="text-xs text-gray-600">{phaseActivity}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Key Features */}
                            {activity.keyFeatures && (
                              <div>
                                <h4 className="font-semibold text-lg mb-3 text-green-700">Key Features</h4>
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
                              <h4 className="font-semibold text-lg mb-3 text-green-700">Assessment Criteria</h4>
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
                    <span className="text-sm">
                      Mathematics: Business statistics, profit/loss calculations, market analysis
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">
                      Language Arts: Business writing, persuasive presentations, research reports
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">
                      Science: Innovation and technology in business, sustainable business practices
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">
                      Art: Logo design, marketing materials, business presentation visuals
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Key Skills Developed</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">Economic reasoning and business understanding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">Entrepreneurship and innovation thinking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">Research and data analysis skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">Collaboration and presentation abilities</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Real-World Applications */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">Real-World Applications</CardTitle>
            <CardDescription>Extensions and community engagement opportunities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-3">Community Engagement</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">Interview local business owners about operations and challenges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">Visit Caribbean companies to observe business operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">Research family businesses and their regional connections</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Entrepreneurship Development</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">Develop actual business plans for school enterprises</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">Participate in youth entrepreneurship competitions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">Create student-run businesses serving school community</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Economic Analysis</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">Track Caribbean stock market performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">Analyze trade statistics between Caribbean countries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">Study economic development policies</span>
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
