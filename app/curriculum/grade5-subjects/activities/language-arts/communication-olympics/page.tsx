"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, Timer, Users, Target, Award, Headphones, MessageSquare } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function CommunicationOlympicsPage() {
  return (
    <div className="container mx-auto py-8">
            <Link href="/curriculum/grade5-subjects/activities/language-arts">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Language Arts Activities
        </Button>
      </Link>

      <div className="w-full min-w-full max-w-[100vw] mb-8">
        <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-xl shadow-md">
          <h1 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Communication Olympics
          </h1>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Master the art of effective communication through competitive debate, discussion, and persuasive speaking
            challenges that develop critical thinking and advanced oral communication skills.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-purple-600" />
              Activity Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The Communication Olympics engages Grade 5 learners in a series of competitive communication challenges
              that develop advanced listening and speaking skills. Students participate in structured debates, impromptu
              speaking challenges, and collaborative discussions while learning to provide evidence to support their
              thinking and respond respectfully to others' ideas.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Essential Learning Outcomes (ELOs)</h3>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• ELO 1: Explore oral language for pleasure, personal growth, and relationships</li>
                <li>• Clarify opinions by providing evidence to support thinking</li>
                <li>• Use intonation, tone, and expression appropriately</li>
                <li>• Participate as active listeners in group activities</li>
                <li>• Follow agreed-upon rules for discussions</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Timer className="h-5 w-5 text-green-600" />
              Activity Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <Timer className="h-4 w-4 text-gray-500" />
              <span className="text-sm">
                <strong>Duration:</strong> 2-3 class periods
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-gray-500" />
              <span className="text-sm">
                <strong>Group Size:</strong> Whole class, small groups
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-gray-500" />
              <span className="text-sm">
                <strong>Difficulty:</strong> Advanced
              </span>
            </div>

            <div className="pt-4">
              <h4 className="font-semibold mb-2">Skills Developed</h4>
              <div className="flex flex-wrap gap-1">
                <Badge>Debate Skills</Badge>
                <Badge>Critical Thinking</Badge>
                <Badge>Active Listening</Badge>
                <Badge>Evidence Support</Badge>
                <Badge>Respectful Discussion</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Headphones className="h-5 w-5 text-blue-600" />
              Olympic Events
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-purple-700">Event 1: Debate Championship</h4>
                <p className="text-sm text-gray-600">
                  Structured debates on relevant topics using evidence and logical reasoning
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-blue-700">Event 2: Impromptu Speaking</h4>
                <p className="text-sm text-gray-600">30-second preparation for 1-minute speeches on various topics</p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-green-700">Event 3: Active Listening Challenge</h4>
                <p className="text-sm text-gray-600">Demonstrating comprehension and response skills</p>
              </div>

              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="font-semibold text-amber-700">Event 4: Collaborative Discussion</h4>
                <p className="text-sm text-gray-600">
                  Roundtable discussions with respectful turn-taking and evidence sharing
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-green-600" />
              Materials Needed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                Communication Olympics video: https://www.youtube.com/watch?v=BW82k7lwI_U
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                Debate topic cards relevant to Grade 5 interests
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                Timer for impromptu speaking rounds
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                Assessment checklists for speaking and listening
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                Recording devices for reflection (optional)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                Olympic-themed certificates or awards
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Step-by-Step Instructions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-purple-700">Phase 1: Introduction & Training</h3>
              <ol className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    1
                  </span>
                  <span>
                    Begin by viewing the Communication Olympics video together, pausing to discuss each section
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    2
                  </span>
                  <span>
                    Discuss the qualities of effective listeners and speakers using the question: "What does it mean to
                    be a good listener?"
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    3
                  </span>
                  <span>Practice basic debate rules and respectful discussion guidelines</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-purple-100 text-purple-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    4
                  </span>
                  <span>Introduce evidence-based reasoning and opinion support techniques</span>
                </li>
              </ol>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-700">Phase 2: Olympic Competition</h3>
              <ol className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    1
                  </span>
                  <span>Conduct structured debates with teams presenting opposing viewpoints</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    2
                  </span>
                  <span>Run impromptu speaking challenges with random topic selections</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    3
                  </span>
                  <span>Test active listening skills through comprehension and response activities</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    4
                  </span>
                  <span>Facilitate collaborative roundtable discussions on engaging topics</span>
                </li>
              </ol>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Assessment Focus</h4>
            <p className="text-green-700 text-sm">
              Use observation checklists to assess clarity of speech, evidence support, respectful listening,
              appropriate volume and pace, eye contact, and ability to stay on topic. Focus on both content accuracy and
              communication effectiveness.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Differentiation Strategies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">For Advanced Learners</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Moderate debates and provide feedback to peers</li>
                <li>• Research complex topics for evidence gathering</li>
                <li>• Create persuasive presentations with multimedia</li>
                <li>• Analyze communication strategies used by others</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">For On-Level Learners</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Participate in structured debates with support</li>
                <li>• Use provided evidence sources for arguments</li>
                <li>• Practice with familiar topics and interests</li>
                <li>• Work in collaborative teams for discussions</li>
              </ul>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">For Struggling Learners</h4>
              <ul className="text-amber-700 text-sm space-y-1">
                <li>• Start with one-on-one or small group practice</li>
                <li>• Provide sentence starters and speaking frames</li>
                <li>• Use visual supports and graphic organizers</li>
                <li>• Allow extra preparation time for responses</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Extension Activities & Cross-Curricular Connections</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">Extension Activities</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Create video recordings of debates for self-reflection</li>
                <li>• Interview family members about effective communication</li>
                <li>• Research famous speeches and analyze techniques used</li>
                <li>• Organize a communication Olympics for younger grades</li>
                <li>• Develop class rules for respectful discussion</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-blue-700 mb-2">Cross-Curricular Connections</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>
                  • <strong>Social Studies:</strong> Debate historical events and decisions
                </li>
                <li>
                  • <strong>Science:</strong> Discuss environmental issues and solutions
                </li>
                <li>
                  • <strong>Health:</strong> Explore healthy lifestyle choices
                </li>
                <li>
                  • <strong>Mathematics:</strong> Argue for different problem-solving strategies
                </li>
                <li>
                  • <strong>Arts:</strong> Discuss artistic interpretations and preferences
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
