"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, BookOpen, Target, CheckCircle, AlertTriangle } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { StandardsBadge } from "@/components/standards-badge"

export default function ScenarioAnalysisPage() {
  const breadcrumbItems = [
    { label: "Curriculum", href: "/curriculum" },
    { label: "Grade 6", href: "/curriculum/grade6-subjects" },
    { label: "Social Studies", href: "/curriculum/grade6-subjects/social-studies" },
    { label: "Economic Decision Making", href: "/curriculum/grade6-subjects/social-studies/economic-decision-making" },
    { label: "Activities", href: "/curriculum/grade6-subjects/social-studies/economic-decision-making/activities" },
    {
      label: "Consumer Rights",
      href: "/curriculum/grade6-subjects/social-studies/economic-decision-making/activities/consumer-rights",
    },
    {
      label: "Scenario Analysis",
      href: "/curriculum/grade6-subjects/social-studies/economic-decision-making/activities/consumer-rights/scenario-analysis",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Consumer Rights Scenario Analysis</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Small group analysis of real-world consumer scenarios to identify rights, responsibilities, and solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="flex items-center p-4">
              <Clock className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Duration</p>
                <p className="text-lg font-semibold">60 minutes</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-4">
              <Users className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Group Size</p>
                <p className="text-lg font-semibold">Small Groups</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-4">
              <BookOpen className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Subject</p>
                <p className="text-lg font-semibold">Problem Solving</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-4">
              <Target className="h-8 w-8 text-red-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Activity Type</p>
                <p className="text-lg font-semibold">Case Study</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <StandardsBadge
          code="6.EDM.2"
          description="Consumer scenario analysis standards for Grade 6 Social Studies"
          subject="Social Studies"
          grade="6"
          strand="Economic Decision Making"
        />

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="mr-2" />
              Learning Objectives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Identify consumer rights and responsibilities in real-world scenarios</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Develop problem-solving strategies for consumer issues</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Practice collaborative analysis and presentation skills</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Connect consumer protection concepts to personal experiences</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Materials Needed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Essential Materials:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Scenario cards (different for each group)</li>
                  <li>• Analysis worksheets</li>
                  <li>• Case study materials</li>
                  <li>• Presentation supplies (poster paper, markers)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Optional Materials:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Role-play props and costumes</li>
                  <li>• Digital presentation tools</li>
                  <li>• Consumer rights reference materials</li>
                  <li>• Timer for presentations</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Activity Procedure</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Badge variant="outline" className="mr-2">
                  Step 1
                </Badge>
                Scenario Distribution (10 minutes)
              </h3>
              <ul className="space-y-2 ml-4">
                <li>• Form small groups of 3-4 students</li>
                <li>• Each group receives different consumer scenario card</li>
                <li>• Scenarios highlight specific consumer rights or responsibilities</li>
                <li>• Groups read and discuss initial understanding</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Badge variant="outline" className="mr-2">
                  Step 2
                </Badge>
                Case Study Analysis (35 minutes)
              </h3>
              <ul className="space-y-2 ml-4">
                <li>• Groups analyze scenarios using structured worksheet</li>
                <li>• Complete comprehensive analysis covering all aspects</li>
                <li>• Research additional information if needed</li>
                <li>• Prepare presentation of findings</li>
              </ul>

              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold mb-2">Analysis Framework:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• What is the consumer problem?</li>
                  <li>• Which consumer rights are involved?</li>
                  <li>• What should the consumer do?</li>
                  <li>• What are the consumer's responsibilities?</li>
                  <li>• How could this situation be prevented?</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Badge variant="outline" className="mr-2">
                  Step 3
                </Badge>
                Solution Presentation (15 minutes)
              </h3>
              <ul className="space-y-2 ml-4">
                <li>• Groups present their scenario analysis to class</li>
                <li>• Explain identified rights and recommended actions</li>
                <li>• Class discusses alternative solutions and prevention strategies</li>
                <li>• Teacher facilitates connections between scenarios</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sample Scenarios</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Scenario 1: Sativa's Pencil Case</h4>
                <p className="text-sm">
                  Student purchases pencil case that breaks after one week of normal use. Store initially refuses return
                  without receipt.
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Scenario 2: App Purchase Problem</h4>
                <p className="text-sm">
                  Downloaded app doesn't work properly on device. Student wants refund but app store has complex return
                  policy.
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Scenario 3: Restaurant Food Poisoning</h4>
                <p className="text-sm">
                  Family gets sick after restaurant meal. Restaurant denies responsibility and refuses compensation.
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Scenario 4: Clothing Quality Issue</h4>
                <p className="text-sm">
                  New shirt falls apart after one wash. Store claims it's customer's fault for improper care.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Extended Activity: Role-Play Implementation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Role-Play Enhancement:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Groups act out their scenarios with problem and resolution</li>
                    <li>• Include both problem situation and resolution process</li>
                    <li>• Demonstrate proper consumer complaint procedures</li>
                    <li>• Practice assertive but respectful communication</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Assessment Criteria</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Analysis Quality (40%):</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Accuracy in identifying consumer rights and responsibilities</li>
                  <li>• Depth of problem analysis</li>
                  <li>• Feasibility and appropriateness of proposed solutions</li>
                  <li>• Understanding of prevention strategies</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Collaboration (30%):</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Equal participation in group work</li>
                  <li>• Respectful discussion and decision-making</li>
                  <li>• Effective division of responsibilities</li>
                  <li>• Support for all group members</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Presentation (30%):</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Clear communication of analysis findings</li>
                  <li>• Organized and logical presentation structure</li>
                  <li>• Engagement with audience questions</li>
                  <li>• Use of appropriate examples and evidence</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
