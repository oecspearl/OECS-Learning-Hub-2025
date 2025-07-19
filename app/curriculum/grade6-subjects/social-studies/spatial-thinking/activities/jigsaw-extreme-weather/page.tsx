"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/breadcrumb"
import { Clock, Target, BookOpen, CheckCircle, Star, Puzzle, Search, Brain } from "lucide-react"

export default function JigsawExtremeConditionsPage() {
  const breadcrumbItems = [
    { label: "Curriculum", href: "/curriculum" },
    { label: "Grade 6", href: "/curriculum/grade6-subjects" },
    { label: "Social Studies", href: "/curriculum/grade6-subjects/social-studies" },
    { label: "Spatial Thinking", href: "/curriculum/grade6-subjects/social-studies/spatial-thinking" },
    { label: "Activities", href: "/curriculum/grade6-subjects/social-studies/spatial-thinking/activities" },
    {
      label: "Jigsaw Extreme Conditions",
      href: "/curriculum/grade6-subjects/social-studies/spatial-thinking/activities/jigsaw-extreme-conditions",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Jigsaw Research on Managing Extreme Conditions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Students become experts on different aspects of managing extreme weather conditions and teach their findings
            to classmates through collaborative jigsaw methodology
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Puzzle className="w-4 h-4" />
              Jigsaw Method
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Search className="w-4 h-4" />
              Research Skills
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Brain className="w-4 h-4" />
              Expert Learning
            </Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-600" />
                Learning Objectives
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm">Research and analyze different strategies for managing extreme weather</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm">Develop expertise in specific aspects of disaster management</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm">Practice teaching and explaining complex concepts to peers</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm">Understand interconnections between different management strategies</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm">Evaluate effectiveness of various approaches to extreme weather</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-600" />
                Activity Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Duration:</span>
                <span>4-5 class periods (45 minutes each)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Group Size:</span>
                <span>
                  Expert groups: 4-5 students
                  <br />
                  Jigsaw groups: 4-5 students
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Difficulty:</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="w-4 h-4 text-gray-300" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Subject Integration:</span>
                <span>Science, Technology, Language Arts</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Puzzle className="w-5 h-5 text-green-600" />
              Expert Group Topics
            </CardTitle>
            <CardDescription>Five specialized research areas for expert groups</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Group 1: Early Warning Systems</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Weather monitoring technology</li>
                  <li>• Communication networks</li>
                  <li>• Alert systems and protocols</li>
                  <li>• Caribbean hurricane tracking</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Group 2: Infrastructure Protection</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Building codes and standards</li>
                  <li>• Flood barriers and drainage</li>
                  <li>• Power grid resilience</li>
                  <li>• Transportation safety measures</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Group 3: Emergency Response</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Evacuation procedures</li>
                  <li>• Emergency services coordination</li>
                  <li>• Shelter management</li>
                  <li>• Search and rescue operations</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Group 4: Community Preparedness</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Public education campaigns</li>
                  <li>• Emergency supply planning</li>
                  <li>• Community drills and training</li>
                  <li>• Vulnerable population support</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Group 5: Recovery and Adaptation</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Post-disaster reconstruction</li>
                  <li>• Economic recovery strategies</li>
                  <li>• Climate adaptation planning</li>
                  <li>• Building back better principles</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-green-600" />
              Materials Needed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Research Resources:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Computers/tablets with internet access</li>
                  <li>• Research databases and websites</li>
                  <li>• Case study materials</li>
                  <li>• Government emergency management resources</li>
                  <li>• Scientific articles and reports</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Activity Materials:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Expert group research guides</li>
                  <li>• Jigsaw teaching templates</li>
                  <li>• Presentation materials (poster paper, markers)</li>
                  <li>• Evaluation rubrics and peer assessment forms</li>
                  <li>• Final synthesis worksheets</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Activity Procedure</CardTitle>
            <CardDescription>Detailed implementation of the jigsaw research methodology</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-3 text-blue-600">
                Phase 1: Introduction and Group Formation (Day 1)
              </h4>
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Activity Introduction (15 minutes)</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Explain the jigsaw method and its benefits</li>
                    <li>• Introduce the five expert topics</li>
                    <li>• Discuss the importance of comprehensive disaster management</li>
                    <li>• Set expectations for research quality and teaching</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Group Formation and Topic Assignment (15 minutes)</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Form expert groups of 4-5 students each</li>
                    <li>• Assign or allow groups to choose their specialty topic</li>
                    <li>• Distribute research guides and resource lists</li>
                    <li>• Plan jigsaw group compositions for later phases</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Initial Research Planning (15 minutes)</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Review research questions and objectives</li>
                    <li>• Divide research tasks among group members</li>
                    <li>• Identify key resources and case studies to investigate</li>
                    <li>• Set timeline for research completion</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3 text-green-600">Phase 2: Expert Group Research (Days 2-3)</h4>
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Deep Research Phase (Day 2 - 40 minutes)</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Conduct thorough research on assigned topic</li>
                    <li>• Focus on Caribbean examples and case studies</li>
                    <li>• Gather data, statistics, and real-world examples</li>
                    <li>• Document sources and verify information accuracy</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Synthesis and Teaching Preparation (Day 3 - 35 minutes)</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Synthesize research findings into key points</li>
                    <li>• Create teaching materials and visual aids</li>
                    <li>• Practice explaining concepts clearly and simply</li>
                    <li>• Prepare examples and analogies for peer teaching</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Expert Group Rehearsal (Day 3 - 10 minutes)</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Practice teaching within expert group</li>
                    <li>• Provide feedback on clarity and completeness</li>
                    <li>• Refine presentation based on peer input</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3 text-purple-600">Phase 3: Jigsaw Teaching (Day 4)</h4>
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Jigsaw Group Formation (5 minutes)</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Form new groups with one expert from each topic area</li>
                    <li>• Ensure each jigsaw group has all five expertise areas</li>
                    <li>• Distribute learning templates for note-taking</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Expert Teaching Rounds (35 minutes)</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Each expert teaches their topic (7 minutes each)</li>
                    <li>• Group members take notes and ask questions</li>
                    <li>• Encourage interactive discussion and examples</li>
                    <li>• Rotate through all five topic areas</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Integration Discussion (5 minutes)</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Discuss connections between different management aspects</li>
                    <li>• Identify overlaps and interdependencies</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3 text-orange-600">Phase 4: Synthesis and Application (Day 5)</h4>
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Comprehensive Management Plan (25 minutes)</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Jigsaw groups create integrated disaster management plans</li>
                    <li>• Combine all five expertise areas into cohesive strategy</li>
                    <li>• Focus on a specific Caribbean scenario (hurricane, drought, etc.)</li>
                    <li>• Address timeline from preparation through recovery</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Plan Presentations (15 minutes)</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Groups present their integrated management plans</li>
                    <li>• Highlight how different expertise areas work together</li>
                    <li>• Receive feedback from other groups and teacher</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Reflection and Evaluation (5 minutes)</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Reflect on the jigsaw learning process</li>
                    <li>• Evaluate effectiveness of different management strategies</li>
                    <li>• Complete peer and self-assessments</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-orange-600" />
                Assessment Criteria
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Research Quality (25%)</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Depth and accuracy of research</li>
                  <li>• Use of credible sources</li>
                  <li>• Relevant examples and case studies</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Teaching Effectiveness (25%)</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Clear explanation of concepts</li>
                  <li>• Engaging presentation style</li>
                  <li>• Effective use of examples and visuals</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Learning and Participation (25%)</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Active listening and note-taking</li>
                  <li>• Thoughtful questions and contributions</li>
                  <li>• Understanding of all topic areas</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Integration and Synthesis (25%)</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Comprehensive management plan</li>
                  <li>• Understanding of interconnections</li>
                  <li>• Creative and practical solutions</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-600" />
                Extension Activities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Advanced Research</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Compare management strategies across different countries</li>
                  <li>• Analyze cost-effectiveness of various approaches</li>
                  <li>• Research emerging technologies in disaster management</li>
                  <li>• Study climate change impacts on extreme weather</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Community Connections</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Interview local emergency management officials</li>
                  <li>• Visit emergency operations centers</li>
                  <li>• Participate in community preparedness events</li>
                  <li>• Create public awareness materials</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Action Projects</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Develop school emergency preparedness plan</li>
                  <li>• Create family emergency kits</li>
                  <li>• Organize community preparedness workshop</li>
                  <li>• Design early warning system for school</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Caribbean Context and Regional Focus</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Regional Case Studies</h4>
              <p className="text-sm mb-2">Emphasize Caribbean-specific examples and challenges:</p>
              <ul className="space-y-1 text-sm">
                <li>• Hurricane preparedness in small island states</li>
                <li>• Drought management in water-scarce regions</li>
                <li>• Coastal flooding and sea-level rise adaptation</li>
                <li>• Regional cooperation through CDEMA and CARICOM</li>
                <li>• Tourism industry resilience and recovery</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Traditional and Modern Integration</h4>
              <ul className="space-y-1 text-sm">
                <li>• Combine traditional knowledge with modern technology</li>
                <li>• Study indigenous adaptation strategies</li>
                <li>• Examine community-based disaster risk reduction</li>
                <li>• Highlight successful regional cooperation examples</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
