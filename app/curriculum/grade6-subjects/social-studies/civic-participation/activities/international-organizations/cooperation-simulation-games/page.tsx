import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Lightbulb, Target, Heart, CheckCircle } from "lucide-react"
import Link from "next/link"

const breadcrumbItems = [
  { label: "Curriculum", href: "/curriculum" },
  { label: "Grade 6", href: "/curriculum/grade6-subjects" },
  { label: "Social Studies", href: "/curriculum/grade6-subjects/social-studies" },
  { label: "Civic Participation", href: "/curriculum/grade6-subjects/social-studies/civic-participation" },
  { label: "Activities", href: "/curriculum/grade6-subjects/social-studies/civic-participation/activities" },
  {
    label: "Social Issues",
    href: "/curriculum/grade6-subjects/social-studies/civic-participation/activities/social-issues",
  },
  {
    label: "Community Problem Solving",
    href: "/curriculum/grade6-subjects/social-studies/civic-participation/activities/social-issues/community-problem-solving",
  },
]

export default function CommunityProblemSolvingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6">
        <div className="flex items-center gap-2 mb-6">
          <Lightbulb className="h-8 w-8 text-yellow-600" />
          <div>
            <h1 className="text-3xl font-bold">Community Problem Solving</h1>
            <p className="text-lg text-muted-foreground">Identifying and addressing real community challenges</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Activity Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Students identify a real problem in their community, research its causes and effects, and develop
                practical solutions that they can implement or propose to local authorities.
              </p>

              <div className="space-y-2">
                <Badge variant="secondary">Problem Solving</Badge>
                <Badge variant="secondary">Community Engagement</Badge>
                <Badge variant="secondary">Research Skills</Badge>
                <Badge variant="secondary">Civic Action</Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Duration:</strong> 4-6 weeks
                </div>
                <div>
                  <strong>Group Size:</strong> 3-4 students
                </div>
                <div>
                  <strong>Subjects:</strong> Social Studies, Language Arts
                </div>
                <div>
                  <strong>Assessment:</strong> Project portfolio, presentation
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community Issues to Explore</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-red-500" />
                  <span>Homelessness and poverty</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-green-500" />
                  <span>Environmental pollution</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-500" />
                  <span>Youth engagement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  <span>Public transportation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-orange-500" />
                  <span>Digital divide</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-pink-500" />
                  <span>Elderly care and support</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Phase 1: Identify
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">Problem Identification:</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Community observation walks</li>
                  <li>• Interview community members</li>
                  <li>• Research local news and reports</li>
                  <li>• Survey peers and families</li>
                  <li>• Consult local organizations</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Phase 2: Research
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">Investigation Areas:</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Root causes analysis</li>
                  <li>• Affected populations</li>
                  <li>• Current efforts and programs</li>
                  <li>• Success stories elsewhere</li>
                  <li>• Available resources</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Phase 3: Solution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">Solution Development:</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Brainstorm multiple options</li>
                  <li>• Evaluate feasibility</li>
                  <li>• Consider budget and resources</li>
                  <li>• Design implementation plan</li>
                  <li>• Identify key stakeholders</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Phase 4: Action
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">Implementation Options:</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Pilot project execution</li>
                  <li>• Presentation to authorities</li>
                  <li>• Community awareness campaign</li>
                  <li>• Fundraising initiative</li>
                  <li>• Volunteer organization</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Project Portfolio Components</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Required Documentation:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Problem statement and justification</li>
                    <li>• Research findings and data</li>
                    <li>• Interview transcripts and surveys</li>
                    <li>• Solution proposal with timeline</li>
                    <li>• Budget and resource analysis</li>
                    <li>• Implementation evidence (photos, videos)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Presentation Elements:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• 15-minute group presentation</li>
                    <li>• Visual aids and multimedia</li>
                    <li>• Community member testimonials</li>
                    <li>• Before/after comparisons</li>
                    <li>• Reflection on learning and impact</li>
                    <li>• Q&A session with audience</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Assessment Rubric</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <h4 className="font-semibold mb-2">Research Quality (35%)</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Depth of problem analysis</li>
                    <li>• Use of multiple sources</li>
                    <li>• Data collection methods</li>
                    <li>• Evidence-based conclusions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Solution Development (35%)</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Creativity and innovation</li>
                    <li>• Feasibility assessment</li>
                    <li>• Implementation planning</li>
                    <li>• Stakeholder consideration</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Community Engagement (30%)</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Real community interaction</li>
                    <li>• Impact demonstration</li>
                    <li>• Civic responsibility</li>
                    <li>• Presentation effectiveness</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 flex gap-4">
          <Button asChild>
            <Link href="/curriculum/grade6-subjects/social-studies/civic-participation/activities/social-issues">
              Back to Social Issues
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/planner/create">Create Lesson Plan</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
