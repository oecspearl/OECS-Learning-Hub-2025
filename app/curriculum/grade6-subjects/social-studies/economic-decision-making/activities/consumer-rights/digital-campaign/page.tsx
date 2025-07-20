"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, BookOpen, Target, CheckCircle, Smartphone, Video, ImageIcon } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { StandardsBadge } from "@/components/standards-badge"

export default function DigitalCampaignPage() {
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
      label: "Digital Campaign",
      href: "/curriculum/grade6-subjects/social-studies/economic-decision-making/activities/consumer-rights/digital-campaign",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Digital Consumer Rights Campaign Creation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Students create digital campaigns to educate peers and community about consumer rights and protection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="flex items-center p-4">
              <Clock className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Duration</p>
                <p className="text-lg font-semibold">90 minutes</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-4">
              <Users className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Group Size</p>
                <p className="text-lg font-semibold">Individual/Pairs</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-4">
              <BookOpen className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Subject</p>
                <p className="text-lg font-semibold">Digital Literacy</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-4">
              <Target className="h-8 w-8 text-red-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Activity Type</p>
                <p className="text-lg font-semibold">Creative Project</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <StandardsBadge
          code="6.EDM.4"
          description="Digital consumer education standards for Grade 6 Social Studies"
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
                <span>Research and synthesize information about consumer rights</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Create engaging digital content for educational purposes</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Develop understanding of target audience needs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Practice community outreach and civic engagement</span>
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
                <h4 className="font-semibold mb-2">Technology:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Computers/tablets with internet access</li>
                  <li>• Design software/apps (Canva, Adobe Creative Suite)</li>
                  <li>• Video recording equipment</li>
                  <li>• Flipgrid or similar video platform</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Traditional Materials:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Art supplies for non-digital options</li>
                  <li>• Poster board and markers</li>
                  <li>• Research materials and references</li>
                  <li>• Printing capabilities for distribution</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Campaign Format Options</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center mb-2">
                  <ImageIcon className="h-5 w-5 text-blue-600 mr-2" />
                  <h4 className="font-semibold text-blue-800">Visual Campaigns</h4>
                </div>
                <ul className="text-sm space-y-1">
                  <li>• "Did You Know?" information cards</li>
                  <li>• Educational brochures</li>
                  <li>• Infographic series</li>
                  <li>• Social media posts</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex items-center mb-2">
                  <Video className="h-5 w-5 text-green-600 mr-2" />
                  <h4 className="font-semibold text-green-800">Video Content</h4>
                </div>
                <ul className="text-sm space-y-1">
                  <li>• Short video PSAs</li>
                  <li>• Flipgrid educational series</li>
                  <li>• Consumer rights tutorials</li>
                  <li>• Animated explanations</li>
                </ul>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center mb-2">
                  <Smartphone className="h-5 w-5 text-purple-600 mr-2" />
                  <h4 className="font-semibold text-purple-800">Interactive Media</h4>
                </div>
                <ul className="text-sm space-y-1">
                  <li>• Digital quizzes</li>
                  <li>• Interactive scenarios</li>
                  <li>• QR code campaigns</li>
                  <li>• Mobile-friendly content</li>
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
                Campaign Planning (20 minutes)
              </h3>
              <ul className="space-y-2 ml-4">
                <li>• Students choose campaign format from available options</li>
                <li>• Identify target audience (peers, families, community)</li>
                <li>• Select specific consumer rights topics to focus on</li>
                <li>• Plan content structure and key messages</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Badge variant="outline" className="mr-2">
                  Step 2
                </Badge>
                Content Development (50 minutes)
              </h3>
              <ul className="space-y-2 ml-4">
                <li>• Research and create educational content about consumer rights</li>
                <li>• Focus on rights most relevant to young people</li>
                <li>• Ensure accuracy, clarity, and visual appeal</li>
                <li>• Include practical examples and actionable advice</li>
              </ul>

              <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-semibold mb-2">Priority Topics for Young People:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Online purchases and app downloads</li>
                  <li>• Return and exchange policies</li>
                  <li>• Product safety information</li>
                  <li>• Complaint procedures</li>
                  <li>• Scam prevention</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Badge variant="outline" className="mr-2">
                  Step 3
                </Badge>
                Production Phase (15 minutes)
              </h3>
              <ul className="space-y-2 ml-4">
                <li>• Finalize campaigns using chosen format</li>
                <li>• Ensure accuracy, clarity, and visual appeal</li>
                <li>• Prepare for distribution or sharing</li>
                <li>• Test functionality for digital campaigns</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Badge variant="outline" className="mr-2">
                  Step 4
                </Badge>
                Community Outreach (5 minutes)
              </h3>
              <ul className="space-y-2 ml-4">
                <li>• Plan distribution strategy for campaigns</li>
                <li>• Organize field trip to distribute materials in community</li>
                <li>• Prepare elevator pitch to explain campaign purpose</li>
                <li>• Schedule presentations to other classes</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Campaign Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Content Standards:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Accurate information about consumer rights</li>
                  <li>• Age-appropriate language and examples</li>
                  <li>• Clear call to action for consumers</li>
                  <li>• Contact information for consumer protection resources</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Design Standards:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Visually appealing and professional design</li>
                  <li>• Clear organization and easy navigation</li>
                  <li>• Appropriate use of colors, fonts, and images</li>
                  <li>• Accessible to diverse audiences</li>
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
                <h4 className="font-semibold mb-2">Information Accuracy (25%):</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Correct consumer rights information</li>
                  <li>• Appropriate examples and scenarios</li>
                  <li>• Credible sources and references</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Campaign Effectiveness (25%):</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Clear and compelling messaging</li>
                  <li>• Appropriate for target audience</li>
                  <li>• Actionable advice and resources</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Creativity and Design (25%):</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Original and engaging presentation</li>
                  <li>• Effective use of chosen medium</li>
                  <li>• Professional appearance and organization</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Understanding of Audience (25%):</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Content appropriate for target demographic</li>
                  <li>• Consideration of audience needs and interests</li>
                  <li>• Effective communication strategies</li>
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
              <li>• Present campaigns to local consumer protection agencies</li>
              <li>• Create multilingual versions for diverse communities</li>
              <li>• Develop follow-up surveys to measure campaign effectiveness</li>
              <li>• Collaborate with other schools to share campaigns</li>
              <li>• Create a class website featuring all campaigns</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
