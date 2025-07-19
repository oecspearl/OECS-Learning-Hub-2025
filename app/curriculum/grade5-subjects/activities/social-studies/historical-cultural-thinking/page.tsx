"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Breadcrumb } from "@/components/breadcrumb"
import { ArrowLeft, Clock, Target, BookOpen, Lightbulb, Play, Search, Map, Globe } from "lucide-react"
import Link from "next/link"

export default function HistoricalCulturalThinkingActivitiesPage() {
  const activityCategories = [
    {
      id: "communication-media",
      title: "Communication Technology and Media Literacy",
      icon: Globe,
      activities: [
        {
          title: "Mix-Freeze-Pair Communication Technology Review",
          duration: "20 minutes",
          learningOutcomes: [
            "Explain advantages and disadvantages of different forms of communication technology",
            "Determine appropriate communication technology for different situations over time",
          ],
          materials: [
            "Music player or timer",
            "List of communication technologies for reference",
            "Worksheet for recording responses",
          ],
          procedure: [
            "Setup (5 minutes): Clear classroom space, explain rules",
            "Round 1 (3 minutes): Students mix, freeze, pair, and share two communication technologies they use daily",
            "Round 2 (3 minutes): Share how these technologies are used differently now vs. 20 years ago",
            "Round 3 (3 minutes): Discuss which technology they couldn't live without and why",
            "Debrief (10 minutes): Class discussion on patterns observed",
          ],
          assessment: [
            "Can identify at least 2 different communication technologies",
            "Explains specific uses for each technology",
            "Demonstrates understanding of technological evolution",
            "Participates actively in discussions",
          ],
          extensions: [
            "Create a class chart of all technologies mentioned",
            "Research when each technology was invented",
            "Interview older family members about past communication methods",
          ],
        },
        {
          title: "Plus-Minus-Interesting (PMI) Communication Analysis",
          duration: "45 minutes",
          learningOutcomes: [
            "Explain advantages and disadvantages of different forms of communication technology",
            "Recognize the need for proper etiquette when using social media",
          ],
          materials: [
            "PMI graphic organizers (physical or digital)",
            "Images/examples of communication technologies",
            "Chart paper and markers",
            "Digital devices (if available)",
          ],
          procedure: [
            "Introduction (10 minutes): Explain PMI framework, model with one example",
            "Group Work (25 minutes): Divide into groups, analyze 2-3 communication technologies",
            "Analysis Process: Identify pluses (advantages), minuses (disadvantages), interesting aspects",
            "Presentation (15 minutes): Groups present findings using visual aids",
            "Synthesis (10 minutes): Class creates master chart showing common themes",
          ],
          assessment: [
            "Identifies at least 2 items in each PMI category",
            "Provides specific, relevant examples",
            "Demonstrates understanding of technology's societal impact",
            "Contributes meaningfully to group work",
          ],
        },
        {
          title: "Interactive Digital Storytelling Presentations",
          duration: "3 class periods (135 minutes total)",
          learningOutcomes: [
            "Explain advantages and disadvantages of communication technology",
            "Determine appropriate communication technology for different situations",
            "Recognize the need for proper etiquette when using social media",
          ],
          materials: [
            "Computers/tablets with internet access",
            "Google Slides, Padlet, or Book Creator accounts",
            "Digital cameras or smartphones",
            "Microphones (if available)",
            "Presentation rubric",
          ],
          procedure: [
            "Phase 1: Planning (45 minutes) - Technology selection, research guidelines, storyboard creation",
            "Phase 2: Creation (90 minutes) - Content development, technical assembly",
            "Phase 3: Presentation and Evaluation (45 minutes) - Presentations, peer evaluation",
          ],
        },
      ],
    },
    {
      id: "media-analysis",
      title: "Media Analysis and Critical Thinking",
      icon: Search,
      activities: [
        {
          title: "Media Scavenger Hunt and Definition Building",
          duration: "65 minutes",
          learningOutcomes: [
            "Discuss the role of the media in our society and outline how it evolved",
            "Demonstrate skills in determining facts and opinions when using various mediums of communication",
          ],
          materials: [
            "Collection bags/folders for each team",
            "Various media examples (newspapers, magazines, flyers, screenshots)",
            "Digital devices for accessing online media",
            "Large poster paper and markers",
            "Media definition worksheet",
            "Concept mapping templates",
          ],
          procedure: [
            "Phase 1: Scavenger Hunt (30 minutes) - Teams collect examples from 5 media categories",
            "Phase 2: Analysis and Definition Building (25 minutes) - Classification and definition construction",
            "Phase 3: Concept Mapping (20 minutes) - Visual representation of media relationships",
          ],
        },
        {
          title: "Fact vs. Opinion Detective Work",
          duration: "90 minutes",
          learningOutcomes: [
            "Demonstrate skills in determining facts and opinions when using various mediums of communication",
            "Appreciate the need to critically analyse information in the media",
          ],
          materials: [
            "Fact/Opinion statement cards",
            'Beach ball with "FACT" and "OPINION" written in multiple places',
            "Caribbean-themed media articles",
            '"Danger of A One-Sided Story" article',
            "Bingo cards with fact/opinion statements",
            "Analysis worksheets",
          ],
          procedure: [
            "Activity 1: Interactive Fact & Opinion Ball Toss (15 minutes)",
            "Activity 2: Caribbean Context Statement Analysis (20 minutes)",
            'Activity 3: "Danger of A One-Sided Story" Analysis (30 minutes)',
            "Activity 4: Y2K Case Study Analysis (25 minutes)",
          ],
        },
      ],
    },
    {
      id: "colonization-impact",
      title: "Colonization and Historical Impact",
      icon: Map,
      activities: [
        {
          title: "European Settlement Mapping Investigation",
          duration: "130 minutes",
          learningOutcomes: [
            "Identify the settlement patterns of Europeans in the Lesser and Greater Antilles from the 1400s-1800s",
            "Examine how the Caribbean was negatively and positively affected by European colonisation",
          ],
          materials: [
            "Large Caribbean maps (physical and digital)",
            "Colored pencils/markers (4 different colors)",
            "Timeline templates",
            "Research materials on European colonization",
            'Video: "Europeans in the Caribbean"',
            "Digital tools: Mentimeter, Flipgrid for assessments",
          ],
          procedure: [
            "Phase 1: Pre-Assessment and Engagement (15 minutes)",
            "Phase 2: Video Analysis and Timeline Creation (30 minutes)",
            "Phase 3: Settlement Pattern Analysis (25 minutes)",
            "Phase 4: Settlement Evidence Gallery Walk (30 minutes)",
            "Phase 5: Portfolio Creation and Presentation (45 minutes)",
          ],
        },
        {
          title: "Triangular Trade Route Investigation",
          duration: "130 minutes",
          learningOutcomes: [
            "Explain why colonial powers brought enslaved Africans to the Caribbean in the 1600s-1800s",
            "Map the route of the triangular slave trade",
            "Develop awareness of how the introduction of Africans as slaves has impacted Caribbean history",
          ],
          materials: [
            "World maps and globes (physical and digital)",
            'Video excerpts from "Roots" or triangular trade documentaries',
            "Padlet or Mentimeter access for brainstorming",
            "Floor-size world map materials",
            "African cultural artifacts and displays",
          ],
          procedure: [
            "Phase 1: Emotional and Historical Context Building (30 minutes)",
            "Phase 2: Understanding the Economic System (25 minutes)",
            "Phase 3: Mapping the Trade Routes (35 minutes)",
            "Phase 4: Cultural Impact and African Heritage Exploration (40 minutes)",
          ],
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Curriculum", href: "/curriculum" },
            { label: "Grade 5 Subjects", href: "/curriculum/grade5-subjects" },
            { label: "Social Studies Activities", href: "/curriculum/grade5-subjects/activities/social-studies" },
            {
              label: "Historical and Cultural Thinking",
              href: "/curriculum/grade5-subjects/activities/social-studies/historical-cultural-thinking",
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

          <div className="bg-gradient-to-r from-amber-600 to-orange-700 rounded-lg p-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <Clock className="h-12 w-12" />
              <div>
                <h1 className="text-4xl font-bold">Historical and Cultural Thinking Activities</h1>
                <p className="text-xl text-amber-100">
                  Explore communication technology, media literacy, colonization impacts, and African heritage
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white">
                <BookOpen className="mr-1 h-4 w-4" />
                10 Detailed Activities
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                <Target className="mr-1 h-4 w-4" />
                Multiple Learning Outcomes
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white">
                <Lightbulb className="mr-1 h-4 w-4" />
                Interactive & Engaging
              </Badge>
            </div>
          </div>
        </div>

        <Tabs defaultValue="communication-media" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="communication-media">Communication & Media</TabsTrigger>
            <TabsTrigger value="media-analysis">Media Analysis</TabsTrigger>
            <TabsTrigger value="colonization-impact">Colonization Impact</TabsTrigger>
          </TabsList>

          {activityCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <category.icon className="h-8 w-8 text-amber-600" />
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
                              <Play className="h-5 w-5 text-amber-600" />
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
                              <h4 className="font-semibold text-lg mb-3 text-amber-700">Learning Outcomes</h4>
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
                              <h4 className="font-semibold text-lg mb-3 text-amber-700">Materials Needed</h4>
                              <ul className="space-y-2">
                                {activity.materials.map((material, materialIndex) => (
                                  <li key={materialIndex} className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                                    <span className="text-sm">{material}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Procedure */}
                            <div>
                              <h4 className="font-semibold text-lg mb-3 text-amber-700">Procedure</h4>
                              <ol className="space-y-2">
                                {activity.procedure.map((step, stepIndex) => (
                                  <li key={stepIndex} className="flex items-start gap-3">
                                    <span className="bg-amber-100 text-amber-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                                      {stepIndex + 1}
                                    </span>
                                    <span className="text-sm">{step}</span>
                                  </li>
                                ))}
                              </ol>
                            </div>

                            {/* Assessment */}
                            {activity.assessment && (
                              <div>
                                <h4 className="font-semibold text-lg mb-3 text-amber-700">Assessment Criteria</h4>
                                <ul className="space-y-2">
                                  {activity.assessment.map((criterion, criterionIndex) => (
                                    <li key={criterionIndex} className="flex items-start gap-2">
                                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                                      <span className="text-sm">{criterion}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Extensions */}
                            {activity.extensions && (
                              <div>
                                <h4 className="font-semibold text-lg mb-3 text-amber-700">Extensions</h4>
                                <ul className="space-y-2">
                                  {activity.extensions.map((extension, extensionIndex) => (
                                    <li key={extensionIndex} className="flex items-start gap-2">
                                      <Lightbulb className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                      <span className="text-sm">{extension}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
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
                    <span className="text-sm">Language Arts: Creative writing, research skills, oral presentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">Art: Visual design, 3D modeling, cultural representation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">
                      Technology: Digital research, presentation software, multimedia creation
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">
                      Mathematics: Timeline calculations, data analysis, statistical interpretation
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Differentiation Strategies</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">
                      Advanced Learners: Research primary source documents, analyze complex data
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">
                      English Language Learners: Visual supports, peer translation assistance
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">
                      Kinesthetic Learners: Role-play, hands-on mapping, movement activities
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">Visual Learners: Charts, graphs, timelines, graphic organizers</span>
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
