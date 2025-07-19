import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Leaf, Globe, Target, Award } from "lucide-react"
import Link from "next/link"

const breadcrumbItems = [
  { label: "Curriculum", href: "/curriculum" },
  { label: "Grade 6", href: "/curriculum/grade6-subjects" },
  { label: "Social Studies", href: "/curriculum/grade6-subjects/social-studies" },
  { label: "Civic Participation", href: "/curriculum/grade6-subjects/social-studies/civic-participation" },
  { label: "Activities", href: "/curriculum/grade6-subjects/social-studies/civic-participation/activities" },
  {
    label: "International Cooperation",
    href: "/curriculum/grade6-subjects/social-studies/civic-participation/activities/international-cooperation",
  },
  {
    label: "Sustainability Summit",
    href: "/curriculum/grade6-subjects/social-studies/civic-participation/activities/international-cooperation/sustainability-summit",
  },
]

export default function SustainabilitySummitPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6">
        <div className="flex items-center gap-2 mb-6">
          <Leaf className="h-8 w-8 text-green-600" />
          <div>
            <h1 className="text-3xl font-bold">Sustainability Summit</h1>
            <p className="text-lg text-muted-foreground">Student-led conference on sustainable development goals</p>
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
                Students organize and participate in a school-wide sustainability summit, researching UN Sustainable
                Development Goals, presenting solutions, and creating action plans for their school and community.
              </p>

              <div className="space-y-2">
                <Badge variant="secondary">Sustainability</Badge>
                <Badge variant="secondary">Leadership</Badge>
                <Badge variant="secondary">Global Goals</Badge>
                <Badge variant="secondary">Action Planning</Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Duration:</strong> 4 weeks prep + summit day
                </div>
                <div>
                  <strong>Group Size:</strong> 5-6 students per SDG team
                </div>
                <div>
                  <strong>Subjects:</strong> Social Studies, Science, Math
                </div>
                <div>
                  <strong>Assessment:</strong> Presentation, action plan
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Featured Sustainable Development Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-red-500" />
                  <span>SDG 1: No Poverty</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-orange-500" />
                  <span>SDG 4: Quality Education</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-blue-500" />
                  <span>SDG 6: Clean Water and Sanitation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-green-500" />
                  <span>SDG 13: Climate Action</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-purple-500" />
                  <span>SDG 14: Life Below Water</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-teal-500" />
                  <span>SDG 15: Life on Land</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Week 1: Research
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">SDG Investigation:</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• UN SDG overview study</li>
                  <li>• Global progress analysis</li>
                  <li>• Caribbean context research</li>
                  <li>• Local challenge identification</li>
                  <li>• Success story collection</li>
                  <li>• Expert interview preparation</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Week 2: Solutions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">Innovation Development:</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Creative solution brainstorming</li>
                  <li>• Technology integration ideas</li>
                  <li>• Community partnership plans</li>
                  <li>• Resource requirement analysis</li>
                  <li>• Implementation timeline</li>
                  <li>• Impact measurement methods</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Week 3: Preparation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">Summit Planning:</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Presentation development</li>
                  <li>• Interactive booth design</li>
                  <li>• Material preparation</li>
                  <li>• Role assignment</li>
                  <li>• Technology setup</li>
                  <li>• Invitation distribution</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Week 4: Summit
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">Event Execution:</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Opening ceremony</li>
                  <li>• Team presentations</li>
                  <li>• Interactive workshops</li>
                  <li>• Panel discussions</li>
                  <li>• Action plan development</li>
                  <li>• Commitment ceremony</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Summit Day Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <h4 className="font-semibold mb-2">Morning Session (9:00-12:00)</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• 9:00-9:30: Welcome & Opening</li>
                    <li>• 9:30-10:00: Keynote presentation</li>
                    <li>• 10:00-10:15: Break</li>
                    <li>• 10:15-11:45: SDG Team presentations</li>
                    <li>• 11:45-12:00: Q&A session</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Afternoon Session (1:00-4:00)</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• 1:00-2:30: Interactive workshops</li>
                    <li>• 2:30-2:45: Break</li>
                    <li>• 2:45-3:30: Action planning session</li>
                    <li>• 3:30-4:00: Commitment ceremony</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Exhibition (All Day)</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• SDG information booths</li>
                    <li>• Student project displays</li>
                    <li>• Interactive demonstrations</li>
                    <li>• Virtual reality experiences</li>
                    <li>• Community organization stands</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Sample Workshop: SDG 13 - Climate Action</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Interactive Activities:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Carbon footprint calculator</li>
                    <li>• Climate change impact game</li>
                    <li>• Renewable energy models</li>
                    <li>• Sea level rise demonstration</li>
                    <li>• Sustainable lifestyle pledges</li>
                    <li>• Community action brainstorming</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Key Learning Outcomes:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Understanding climate science</li>
                    <li>• Recognizing local impacts</li>
                    <li>• Identifying solution opportunities</li>
                    <li>• Developing action commitments</li>
                    <li>• Building collaboration skills</li>
                    <li>• Inspiring hope and agency</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Action Plan Development</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">School-Level Actions:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Waste reduction initiatives</li>
                    <li>• Energy conservation programs</li>
                    <li>• School garden development</li>
                    <li>• Water saving measures</li>
                    <li>• Sustainable transportation</li>
                    <li>• Green building improvements</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Community Engagement:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Awareness campaigns</li>
                    <li>• Beach cleanup organization</li>
                    <li>• Local business partnerships</li>
                    <li>• Government advocacy</li>
                    <li>• Family education programs</li>
                    <li>• Youth leadership development</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Assessment and Follow-up</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Summit Performance (70%)</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Research quality and depth</li>
                    <li>• Presentation effectiveness</li>
                    <li>• Workshop facilitation skills</li>
                    <li>• Collaboration and teamwork</li>
                    <li>• Innovation and creativity</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Action Plan (30%)</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Feasibility and specificity</li>
                    <li>• Timeline and milestones</li>
                    <li>• Resource identification</li>
                    <li>• Impact measurement plan</li>
                    <li>• Personal commitment level</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 flex gap-4">
          <Button asChild>
            <Link href="/curriculum/grade6-subjects/social-studies/civic-participation/activities/international-cooperation">
              Back to International Cooperation
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
