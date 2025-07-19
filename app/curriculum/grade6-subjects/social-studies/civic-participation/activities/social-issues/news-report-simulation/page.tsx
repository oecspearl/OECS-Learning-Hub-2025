import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Globe, Video, MessageCircle, Award } from "lucide-react"
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
    label: "Global Partnership Project",
    href: "/curriculum/grade6-subjects/social-studies/civic-participation/activities/international-cooperation/global-partnership-project",
  },
]

export default function GlobalPartnershipProjectPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6">
        <div className="flex items-center gap-2 mb-6">
          <Globe className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold">Global Partnership Project</h1>
            <p className="text-lg text-muted-foreground">
              Connecting with students worldwide to solve shared challenges
            </p>
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
                Students collaborate with peers from other countries through digital platforms to address global
                challenges, share cultural perspectives, and develop joint solutions to common problems affecting youth
                worldwide.
              </p>

              <div className="space-y-2">
                <Badge variant="secondary">Global Collaboration</Badge>
                <Badge variant="secondary">Digital Citizenship</Badge>
                <Badge variant="secondary">Cultural Exchange</Badge>
                <Badge variant="secondary">Problem Solving</Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Duration:</strong> 6-8 weeks
                </div>
                <div>
                  <strong>Group Size:</strong> 4-6 students per team
                </div>
                <div>
                  <strong>Subjects:</strong> Social Studies, ICT, Language Arts
                </div>
                <div>
                  <strong>Assessment:</strong> Collaboration, final presentation
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Partner Countries & Schools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-blue-500" />
                  <span>Jamaica - Kingston Primary</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-green-500" />
                  <span>Trinidad - Port of Spain School</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-red-500" />
                  <span>Barbados - Bridgetown Academy</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-purple-500" />
                  <span>Guyana - Georgetown Institute</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-orange-500" />
                  <span>Belize - Belize City School</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-teal-500" />
                  <span>St. Lucia - Castries College</span>
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
                Phase 1: Connection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">Getting to Know Each Other:</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Virtual introduction videos</li>
                  <li>• Cultural exchange presentations</li>
                  <li>• "Day in the life" photo stories</li>
                  <li>• Traditional food sharing</li>
                  <li>• Music and dance exchanges</li>
                  <li>• Language learning sessions</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Phase 2: Collaboration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">Joint Problem Solving:</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Identify shared challenges</li>
                  <li>• Research different perspectives</li>
                  <li>• Brainstorm creative solutions</li>
                  <li>• Share resources and ideas</li>
                  <li>• Develop action plans</li>
                  <li>• Create joint presentations</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Phase 3: Impact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">Making a Difference:</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Implement small-scale projects</li>
                  <li>• Document progress and results</li>
                  <li>• Share success stories</li>
                  <li>• Plan future collaborations</li>
                  <li>• Present to global audience</li>
                  <li>• Celebrate achievements</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Global Challenge Topics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Environmental Issues:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Plastic pollution in oceans</li>
                    <li>• Climate change adaptation</li>
                    <li>• Renewable energy solutions</li>
                    <li>• Biodiversity conservation</li>
                    <li>• Sustainable tourism</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Social Challenges:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Educational access and quality</li>
                    <li>• Youth unemployment</li>
                    <li>• Digital divide and technology access</li>
                    <li>• Healthcare accessibility</li>
                    <li>• Cultural preservation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="h-5 w-5" />
                Digital Collaboration Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <h4 className="font-semibold mb-2">Communication Platforms:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Video conferencing (Zoom, Meet)</li>
                    <li>• Messaging apps (WhatsApp, Teams)</li>
                    <li>• Email exchanges</li>
                    <li>• Discussion forums</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Collaboration Tools:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Shared documents (Google Docs)</li>
                    <li>• Presentation software (Canva)</li>
                    <li>• Project management (Trello)</li>
                    <li>• File sharing (Drive, Dropbox)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Creative Platforms:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Video creation (Flipgrid)</li>
                    <li>• Digital storytelling (StoryMap)</li>
                    <li>• Virtual whiteboards (Padlet)</li>
                    <li>• Social media (Instagram, TikTok)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Sample Project: Ocean Plastic Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Collaborative Activities:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Beach cleanup data sharing</li>
                    <li>• Plastic waste audit comparisons</li>
                    <li>• Local solution brainstorming</li>
                    <li>• Joint awareness campaign design</li>
                    <li>• Recycling innovation showcase</li>
                    <li>• Policy recommendation development</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Final Deliverables:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Multi-country documentary</li>
                    <li>• Shared social media campaign</li>
                    <li>• Joint research report</li>
                    <li>• Community action toolkit</li>
                    <li>• Global presentation event</li>
                    <li>• Future partnership plan</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Assessment Framework</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Collaboration Skills (40%)</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Active participation in discussions</li>
                    <li>• Respectful cross-cultural communication</li>
                    <li>• Contribution to joint activities</li>
                    <li>• Support for international partners</li>
                    <li>• Conflict resolution abilities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Project Quality (60%)</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Research depth and accuracy</li>
                    <li>• Creative solution development</li>
                    <li>• Implementation effectiveness</li>
                    <li>• Presentation professionalism</li>
                    <li>• Global perspective demonstration</li>
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
