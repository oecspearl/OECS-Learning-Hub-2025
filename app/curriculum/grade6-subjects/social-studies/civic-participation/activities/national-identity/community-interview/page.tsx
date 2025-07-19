"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Target, CheckCircle, Star, MessageCircle } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function CommunityInterviewPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Curriculum", href: "/curriculum" },
          { label: "Grade 6", href: "/curriculum/grade6-subjects" },
          { label: "Social Studies", href: "/curriculum/grade6-subjects/social-studies" },
          { label: "Civic Participation", href: "/curriculum/grade6-subjects/social-studies/civic-participation" },
          { label: "Activities", href: "/curriculum/grade6-subjects/social-studies/civic-participation/activities" },
          {
            label: "National Identity",
            href: "/curriculum/grade6-subjects/social-studies/civic-participation/activities/national-identity",
          },
          { label: "Community Interview", href: "#" },
        ]}
      />

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-orange-100 p-3 rounded-full">
            <MessageCircle className="h-8 w-8 text-orange-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Community Resource Person Interview</h1>
            <p className="text-lg text-gray-600">Activity 4: National Identity Strand</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            60 minutes
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            Whole Class
          </Badge>
          <Badge variant="outline">Interview Skills</Badge>
          <Badge variant="outline">Community Engagement</Badge>
          <Badge variant="outline">Active Listening</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Learning Objectives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Students will develop effective interview skills and techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Students will learn about community contributions and civic engagement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Students will understand different ways to show national pride</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Students will practice respectful communication with community members</span>
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
                <ul className="space-y-2">
                  <li>• Interview preparation sheets</li>
                  <li>• Recording equipment (optional)</li>
                  <li>• Thank you cards</li>
                  <li>• Note-taking materials</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Guest seating arrangement</li>
                  <li>• Water for guest</li>
                  <li>• Camera for photos (with permission)</li>
                  <li>• Reflection journals</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ideal Community Resource Persons</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Government Officials:</h4>
                  <ul className="space-y-1 ml-4 text-sm">
                    <li>• Local council members</li>
                    <li>• Government ministry representatives</li>
                    <li>• Public service workers</li>
                    <li>• Community development officers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Community Leaders:</h4>
                  <ul className="space-y-1 ml-4 text-sm">
                    <li>• Non-profit organization leaders</li>
                    <li>• Religious leaders</li>
                    <li>• Business owners</li>
                    <li>• Cultural organization heads</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Service Providers:</h4>
                  <ul className="space-y-1 ml-4 text-sm">
                    <li>• Healthcare workers</li>
                    <li>• Educators</li>
                    <li>• Emergency responders</li>
                    <li>• Environmental advocates</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Cultural Contributors:</h4>
                  <ul className="space-y-1 ml-4 text-sm">
                    <li>• Artists and musicians</li>
                    <li>• Athletes</li>
                    <li>• Writers and historians</li>
                    <li>• Traditional craft makers</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Detailed Procedure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-3 text-blue-600">Guest Introduction (5 minutes)</h4>
                <ul className="space-y-2 ml-4">
                  <li>• Welcome prominent community member warmly</li>
                  <li>• Explain purpose of visit and learning objectives</li>
                  <li>• Review interview protocol and respect guidelines</li>
                  <li>• Allow guest to share brief background</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3 text-blue-600">Structured Interview (35 minutes)</h4>
                <p className="mb-3">Community member shares their experiences and insights:</p>
                <ul className="space-y-2 ml-4">
                  <li>
                    • <strong>Contributions:</strong> How they have contributed to the country
                  </li>
                  <li>
                    • <strong>National Pride:</strong> What it means to be a proud citizen
                  </li>
                  <li>
                    • <strong>Civic Engagement:</strong> Ways citizens can show national pride
                  </li>
                  <li>
                    • <strong>Youth Advice:</strong> Guidance for young people about national service
                  </li>
                </ul>

                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <h5 className="font-semibold text-blue-800 mb-2">Prepared Questions:</h5>
                  <ul className="space-y-1 text-sm text-blue-700">
                    <li>• How have you contributed to our country?</li>
                    <li>• What makes you most proud to be a citizen?</li>
                    <li>• What advice would you give young people about national service?</li>
                    <li>• How can students our age show national pride?</li>
                    <li>• What challenges have you faced in your community work?</li>
                    <li>• What changes have you seen in our country over time?</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3 text-blue-600">Student Question Period (15 minutes)</h4>
                <ul className="space-y-2 ml-4">
                  <li>• Students ask spontaneous questions</li>
                  <li>• Encourage thoughtful, respectful inquiries</li>
                  <li>• Allow for follow-up questions and clarification</li>
                  <li>• Teacher facilitates to ensure all students participate</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3 text-blue-600">Appreciation and Reflection (5 minutes)</h4>
                <ul className="space-y-2 ml-4">
                  <li>• Students express gratitude to guest</li>
                  <li>• Present thank you card created by class</li>
                  <li>• Brief reflection on key learning points</li>
                  <li>• Photo opportunity (with permission)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pre-Interview Preparation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Research Phase:</h4>
                  <ul className="space-y-1 ml-4">
                    <li>• Research guest's background and contributions</li>
                    <li>• Learn about their organization or field of work</li>
                    <li>• Understand their role in the community</li>
                    <li>• Identify specific achievements or projects</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Skill Development:</h4>
                  <ul className="space-y-1 ml-4">
                    <li>• Practice interview etiquette and active listening</li>
                    <li>• Prepare thoughtful questions in advance</li>
                    <li>• Learn appropriate body language and eye contact</li>
                    <li>• Practice note-taking while listening</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Environment Preparation:</h4>
                  <ul className="space-y-1 ml-4">
                    <li>• Create welcoming classroom environment</li>
                    <li>• Arrange seating for optimal interaction</li>
                    <li>• Prepare thank you cards and gifts</li>
                    <li>• Test any recording equipment</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Assessment Strategies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">During Interview Assessment:</h4>
                  <ul className="space-y-1 ml-4">
                    <li>• Quality and thoughtfulness of questions asked</li>
                    <li>• Active listening skills demonstrated</li>
                    <li>• Respectful interaction with guest</li>
                    <li>• Appropriate body language and engagement</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Post-Interview Assessment:</h4>
                  <ul className="space-y-1 ml-4">
                    <li>• Depth of reflection in written responses</li>
                    <li>• Understanding of civic engagement concepts</li>
                    <li>• Ability to connect guest's experiences to national identity</li>
                    <li>• Quality of thank you notes and appreciation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Differentiation Strategies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm">Shy Students:</h4>
                  <p className="text-sm text-gray-600">Prepare questions in advance, allow written submissions</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Advanced Learners:</h4>
                  <p className="text-sm text-gray-600">Research complex policy issues, prepare follow-up questions</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">ELL Students:</h4>
                  <p className="text-sm text-gray-600">
                    Provide vocabulary support, allow native language clarification
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Kinesthetic Learners:</h4>
                  <p className="text-sm text-gray-600">Allow movement, hands-on demonstration opportunities</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Post-Interview Extensions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Students write reflection essays about the interview</li>
                <li>• Create class newsletter featuring guest's contributions</li>
                <li>• Plan follow-up community service project inspired by guest</li>
                <li>• Research other community leaders in similar fields</li>
                <li>• Create video summary of key interview insights</li>
                <li>• Write letters to local newspaper about community heroes</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Interview Skills Development</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>
                  <strong>Preparation:</strong> Research, question development, logistics
                </li>
                <li>
                  <strong>Active Listening:</strong> Eye contact, note-taking, follow-up questions
                </li>
                <li>
                  <strong>Respect:</strong> Appropriate language, time management, gratitude
                </li>
                <li>
                  <strong>Communication:</strong> Clear speech, thoughtful responses
                </li>
                <li>
                  <strong>Reflection:</strong> Processing information, making connections
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Strengthens school-community relationships</li>
                <li>• Provides role models for students</li>
                <li>• Increases awareness of civic engagement opportunities</li>
                <li>• Builds appreciation for community service</li>
                <li>• Inspires future community involvement</li>
                <li>• Creates lasting connections between generations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Follow-Up Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Thank you letter writing campaign</li>
                <li>• Community service project planning</li>
                <li>• Guest speaker series development</li>
                <li>• Community hero research project</li>
                <li>• Civic engagement action plan creation</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
