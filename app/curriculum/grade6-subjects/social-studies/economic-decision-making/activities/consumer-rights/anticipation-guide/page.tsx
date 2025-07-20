"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, BookOpen, Target, CheckCircle } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { StandardsBadge } from "@/components/standards-badge"

export default function AnticipationGuidePage() {
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
      label: "Anticipation Guide",
      href: "/curriculum/grade6-subjects/social-studies/economic-decision-making/activities/consumer-rights/anticipation-guide",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">"Do You Know Your Consumer Rights?" Anticipation Guide</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interactive activity using colored response cards to assess and correct student understanding of consumer
            rights and responsibilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="flex items-center p-4">
              <Clock className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Duration</p>
                <p className="text-lg font-semibold">50 minutes</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-4">
              <Users className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Group Size</p>
                <p className="text-lg font-semibold">Whole Class</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-4">
              <BookOpen className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Subject</p>
                <p className="text-lg font-semibold">Consumer Rights</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-4">
              <Target className="h-8 w-8 text-red-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Activity Type</p>
                <p className="text-lg font-semibold">Assessment</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <StandardsBadge
          code="6.EDM.1"
          description="Consumer rights and responsibilities standards for Grade 6 Social Studies"
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
                <span>Assess prior knowledge about consumer rights and responsibilities</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Identify and correct common misconceptions about consumer protection</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Engage in respectful discussion about consumer experiences</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Connect personal experiences to formal consumer rights concepts</span>
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
                  <li>• Colored paper cards (4 colors per student)</li>
                  <li>• Anticipation guide statements</li>
                  <li>• Scenario cards</li>
                  <li>• Markers for writing responses</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Color System:</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    • <span className="bg-green-200 px-2 py-1 rounded">Green = Strongly Agree</span>
                  </li>
                  <li>
                    • <span className="bg-yellow-200 px-2 py-1 rounded">Yellow = Agree</span>
                  </li>
                  <li>
                    • <span className="bg-orange-200 px-2 py-1 rounded">Orange = Disagree</span>
                  </li>
                  <li>
                    • <span className="bg-red-200 px-2 py-1 rounded">Red = Strongly Disagree</span>
                  </li>
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
                Card System Setup (10 minutes)
              </h3>
              <ul className="space-y-2 ml-4">
                <li>• Distribute 4 colored paper pieces to each student</li>
                <li>• Explain color coding system clearly</li>
                <li>• Have students write responses clearly on each card</li>
                <li>• Practice holding up cards for visibility</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Badge variant="outline" className="mr-2">
                  Step 2
                </Badge>
                Anticipation Guide Activity (30 minutes)
              </h3>
              <ul className="space-y-2 ml-4">
                <li>• Read statements about consumer rights aloud</li>
                <li>• Students hold up appropriate colored response card</li>
                <li>• Turn to partner to discuss reasoning (1-2 minutes)</li>
                <li>• Call on volunteers to explain their thinking</li>
                <li>• Record common responses and misconceptions</li>
              </ul>

              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold mb-2">Sample Statements:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• "You can return any item if you change your mind"</li>
                  <li>• "Customers must always bring receipts to return items"</li>
                  <li>• "You have the right to know what ingredients are in food products"</li>
                  <li>• "Stores must replace faulty goods or refund your money"</li>
                  <li>• "Customers have the right to complain about bad service"</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Badge variant="outline" className="mr-2">
                  Step 3
                </Badge>
                Misconception Correction (10 minutes)
              </h3>
              <ul className="space-y-2 ml-4">
                <li>• Address common misconceptions revealed through activity</li>
                <li>• Provide correct information about consumer rights</li>
                <li>• Connect to real-world examples from students' experiences</li>
                <li>• Preview upcoming detailed learning about consumer protection</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Differentiation Strategies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">ELL Students</h4>
                <ul className="text-sm space-y-1">
                  <li>• Provide simplified language versions</li>
                  <li>• Use visual cues and examples</li>
                  <li>• Allow extra processing time</li>
                </ul>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Writing Difficulties</h4>
                <ul className="text-sm space-y-1">
                  <li>• Allow verbal responses</li>
                  <li>• Provide pre-written cards</li>
                  <li>• Use partner support</li>
                </ul>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Concrete Learners</h4>
                <ul className="text-sm space-y-1">
                  <li>• Use visual cues and examples</li>
                  <li>• Provide real-world scenarios</li>
                  <li>• Connect to personal experiences</li>
                </ul>
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
                <h4 className="font-semibold mb-2">Formative Assessment:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Monitor understanding through card responses</li>
                  <li>• Evaluate reasoning quality in partner discussions</li>
                  <li>• Note misconceptions for future instruction planning</li>
                  <li>• Observe student engagement and participation</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Success Indicators:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Students can articulate reasoning for their responses</li>
                  <li>• Active participation in partner discussions</li>
                  <li>• Willingness to share thinking with class</li>
                  <li>• Recognition of misconceptions when corrected</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Extension Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• Create additional anticipation statements based on local consumer issues</li>
              <li>• Research actual consumer protection laws in your country</li>
              <li>• Interview family members about their consumer experiences</li>
              <li>• Design a consumer rights awareness poster</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
