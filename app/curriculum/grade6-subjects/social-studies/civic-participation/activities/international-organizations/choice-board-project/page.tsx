import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Globe, Gavel, MessageSquare, Award } from "lucide-react"
import Link from "next/link"

const breadcrumbItems = [
  { label: "Curriculum", href: "/curriculum" },
  { label: "Grade 6", href: "/curriculum/grade6-subjects" },
  { label: "Social Studies", href: "/curriculum/grade6-subjects/social-studies" },
  { label: "Civic Participation", href: "/curriculum/grade6-subjects/social-studies/civic-participation" },
  { label: "Activities", href: "/curriculum/grade6-subjects/social-studies/civic-participation/activities" },
  {
    label: "International Organizations",
    href: "/curriculum/grade6-subjects/social-studies/civic-participation/activities/international-organizations",
  },
  {
    label: "Model UN Simulation",
    href: "/curriculum/grade6-subjects/social-studies/civic-participation/activities/international-organizations/model-un-simulation",
  },
]

export default function ModelUNSimulationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6">
        <div className="flex items-center gap-2 mb-6">
          <Gavel className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold">Model UN Simulation</h1>
            <p className="text-lg text-muted-foreground">Experience international diplomacy through role-playing</p>
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
                Students participate in a simulated United Nations General Assembly session, representing different
                countries and debating global issues while following diplomatic protocols and procedures.
              </p>

              <div className="space-y-2">
                <Badge variant="secondary">Diplomacy</Badge>
                <Badge variant="secondary">Public Speaking</Badge>
                <Badge variant="secondary">Critical Thinking</Badge>
                <Badge variant="secondary">Global Issues</Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Duration:</strong> 2-3 class periods
                </div>
                <div>
                  <strong>Group Size:</strong> Individual delegates
                </div>
                <div>
                  <strong>Subjects:</strong> Social Studies, Language Arts
                </div>
                <div>
                  <strong>Assessment:</strong> Participation, speeches, position papers
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Country Assignments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-blue-500" />
                  <span>United States</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-red-500" />
                  <span>China</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-green-500" />
                  <span>Brazil</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-orange-500" />
                  <span>India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-purple-500" />
                  <span>Nigeria</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-teal-500" />
                  <span>Japan</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-pink-500" />
                  <span>Germany</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-yellow-600" />
                  <span>Australia</span>
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
                Preparation Phase
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">Country Research:</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Political system and government</li>
                  <li>• Economic status and trade</li>
                  <li>• Cultural and social issues</li>
                  <li>• International relationships</li>
                  <li>• Current global challenges</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Debate Topics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">Global Issues:</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Climate change action</li>
                  <li>• Poverty reduction</li>
                  <li>• Education access</li>
                  <li>• Refugee crisis</li>
                  <li>• Healthcare equality</li>
                  <li>• Technology and privacy</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gavel className="h-5 w-5" />
                UN Procedures
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">Protocol Elements:</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Opening statements</li>
                  <li>• Formal debate rules</li>
                  <li>• Amendment proposals</li>
                  <li>• Voting procedures</li>
                  <li>• Resolution drafting</li>
                  <li>• Diplomatic language</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Simulation Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <h4 className="font-semibold mb-2">Day 1: Opening Session</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Roll call of nations</li>
                    <li>• Opening statements (2 min each)</li>
                    <li>• Topic introduction</li>
                    <li>• Caucus sessions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Day 2: Formal Debate</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Speakers' list</li>
                    <li>• Points and motions</li>
                    <li>• Amendment discussions</li>
                    <li>• Negotiation time</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Day 3: Resolution & Voting</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Final amendments</li>
                    <li>• Closing statements</li>
                    <li>• Resolution voting</li>
                    <li>• Awards ceremony</li>
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
                <Award className="h-5 w-5" />
                Assessment and Awards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Assessment Criteria:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Country representation accuracy</li>
                    <li>• Diplomatic language use</li>
                    <li>• Participation in debates</li>
                    <li>• Position paper quality</li>
                    <li>• Collaboration and negotiation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Awards Categories:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Best Delegate</li>
                    <li>• Outstanding Diplomacy</li>
                    <li>• Most Improved Delegate</li>
                    <li>• Best Position Paper</li>
                    <li>• Honorable Mention</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 flex gap-4">
          <Button asChild>
            <Link href="/curriculum/grade6-subjects/social-studies/civic-participation/activities/international-organizations">
              Back to International Organizations
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
