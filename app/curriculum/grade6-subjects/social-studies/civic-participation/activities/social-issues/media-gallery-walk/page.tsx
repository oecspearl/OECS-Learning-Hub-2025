import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Scale, Shield, Heart, Star } from "lucide-react"
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
    label: "Rights and Responsibilities Fair",
    href: "/curriculum/grade6-subjects/social-studies/civic-participation/activities/social-issues/rights-and-responsibilities-fair",
  },
]

export default function RightsResponsibilitiesFairPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6">
        <div className="flex items-center gap-2 mb-6">
          <Scale className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold">Rights and Responsibilities Fair</h1>
            <p className="text-lg text-muted-foreground">Interactive exploration of human rights and civic duties</p>
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
                Students create interactive booths for a school-wide fair that educates visitors about different human
                rights and corresponding responsibilities, featuring hands-on activities, scenarios, and real-world
                examples.
              </p>

              <div className="space-y-2">
                <Badge variant="secondary">Human Rights</Badge>
                <Badge variant="secondary">Civic Education</Badge>
                <Badge variant="secondary">Interactive Learning</Badge>
                <Badge variant="secondary">Community Engagement</Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Duration:</strong> 3 weeks prep + fair day
                </div>
                <div>
                  <strong>Group Size:</strong> 4-5 students per booth
                </div>
                <div>
                  <strong>Subjects:</strong> Social Studies, Arts, ICT
                </div>
                <div>
                  <strong>Assessment:</strong> Booth quality, presentation
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Rights and Responsibilities Themes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-blue-500" />
                  <span>Right to Education - Duty to Learn</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-red-500" />
                  <span>Right to Healthcare - Healthy Choices</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-green-500" />
                  <span>Freedom of Speech - Respectful Communication</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>Right to Safety - Community Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="h-4 w-4 text-purple-500" />
                  <span>Equal Treatment - Anti-discrimination</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-teal-500" />
                  <span>Environmental Rights - Conservation Duty</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Booth Planning
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">Design Elements:</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Eye-catching display board</li>
                  <li>• Interactive activities or games</li>
                  <li>• Real-world examples and stories</li>
                  <li>• Take-away information cards</li>
                  <li>• Photo/video demonstrations</li>
                  <li>• Visitor engagement activities</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Interactive Activities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">Engagement Ideas:</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Role-playing scenarios</li>
                  <li>• Quiz games with prizes</li>
                  <li>• "What would you do?" dilemmas</li>
                  <li>• Rights and responsibilities matching</li>
                  <li>• Pledge-making activities</li>
                  <li>• Art creation stations</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Real-World Connections
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">Examples to Include:</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Local community examples</li>
                  <li>• Historical civil rights movements</li>
                  <li>• Current global issues</li>
                  <li>• Youth activism stories</li>
                  <li>• Caribbean context examples</li>
                  <li>• School and family situations</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Fair Day Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <h4 className="font-semibold mb-2">Setup Phase (30 minutes)</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Booth arrangement and decoration</li>
                    <li>• Material organization</li>
                    <li>• Technology setup and testing</li>
                    <li>• Team role assignments</li>
                    <li>• Final rehearsals</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Fair Sessions (2 hours)</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Session 1: Younger students visit</li>
                    <li>• Session 2: Peer class rotations</li>
                    <li>• Session 3: Family and community</li>
                    <li>• Continuous booth operations</li>
                    <li>• Visitor feedback collection</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Reflection Session (30 minutes)</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Booth cleanup and pack-up</li>
                    <li>• Team debrief discussions</li>
                    <li>• Visitor feedback review</li>
                    <li>• Learning reflections</li>
                    <li>• Success celebrations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Sample Booth: Right to Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Interactive Activities:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• "School Around the World" photo gallery</li>
                    <li>• Literacy rate comparison charts</li>
                    <li>• "What if you couldn't go to school?" scenarios</li>
                    <li>• Education pledge-signing station</li>
                    <li>• Guest speaker video testimonials</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Learning Responsibilities:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Attend school regularly</li>
                    <li>• Participate actively in learning</li>
                    <li>• Respect teachers and classmates</li>
                    <li>• Help others learn and succeed</li>
                    <li>• Use education to improve community</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Assessment Criteria</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Booth Quality (50%)</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Visual appeal and organization</li>
                    <li>• Accuracy of content information</li>
                    <li>• Interactive element effectiveness</li>
                    <li>• Real-world connection quality</li>
                    <li>• Take-away material usefulness</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Presentation Skills (50%)</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Knowledge demonstration</li>
                    <li>• Visitor engagement ability</li>
                    <li>• Clear communication</li>
                    <li>• Team collaboration</li>
                    <li>• Professional demeanor</li>
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
