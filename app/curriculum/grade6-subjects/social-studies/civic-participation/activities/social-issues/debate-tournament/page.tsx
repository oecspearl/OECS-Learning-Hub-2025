import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Heart, Shield, MessageSquare, Handshake } from "lucide-react"
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
    label: "Peace Building Simulation",
    href: "/curriculum/grade6-subjects/social-studies/civic-participation/activities/international-cooperation/peace-building-simulation",
  },
]

export default function PeaceBuildingSimulationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6">
        <div className="flex items-center gap-2 mb-6">
          <Heart className="h-8 w-8 text-green-600" />
          <div>
            <h1 className="text-3xl font-bold">Peace Building Simulation</h1>
            <p className="text-lg text-muted-foreground">Learning conflict resolution and peace-making processes</p>
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
                Students participate in a simulated peace-building process, taking on roles of different stakeholders in
                a fictional conflict and working through negotiation, mediation, and reconciliation processes to reach
                peaceful solutions.
              </p>

              <div className="space-y-2">
                <Badge variant="secondary">Conflict Resolution</Badge>
                <Badge variant="secondary">Negotiation Skills</Badge>
                <Badge variant="secondary">Empathy Building</Badge>
                <Badge variant="secondary">Peace Education</Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Duration:</strong> 3-4 class periods
                </div>
                <div>
                  <strong>Group Size:</strong> 6-8 students per simulation
                </div>
                <div>
                  <strong>Subjects:</strong> Social Studies, Language Arts
                </div>
                <div>
                  <strong>Assessment:</strong> Role performance, reflection
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Simulation Roles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-500" />
                  <span>Community Leaders</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-500" />
                  <span>Government Representatives</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-red-500" />
                  <span>Civil Society Organizations</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-purple-500" />
                  <span>Media Representatives</span>
                </div>
                <div className="flex items-center gap-2">
                  <Handshake className="h-4 w-4 text-orange-500" />
                  <span>International Mediators</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-teal-500" />
                  <span>Affected Citizens</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Phase 1: Conflict Setup
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">Scenario Development:</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Background briefing materials</li>
                  <li>• Role assignment and preparation</li>
                  <li>• Initial position statements</li>
                  <li>• Stakeholder concerns identification</li>
                  <li>• Historical context research</li>
                  <li>• Opening tensions simulation</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Phase 2: Negotiation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">Peace Process:</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Facilitated dialogue sessions</li>
                  <li>• Interest-based negotiation</li>
                  <li>• Compromise identification</li>
                  <li>• Trust-building activities</li>
                  <li>• Solution brainstorming</li>
                  <li>• Agreement drafting</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Handshake className="h-5 w-5" />
                Phase 3: Peace Building
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">Implementation:</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Peace agreement signing</li>
                  <li>• Reconciliation ceremonies</li>
                  <li>• Community healing activities</li>
                  <li>• Monitoring mechanisms</li>
                  <li>• Future prevention planning</li>
                  <li>• Success celebration</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Sample Scenario: Island Resource Conflict</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Conflict Background:</h4>
                  <p className="text-sm mb-2">
                    Two communities on a Caribbean island are in dispute over access to a freshwater spring that both
                    depend on for drinking water and agriculture.
                  </p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Mountain village: Traditional users</li>
                    <li>• Coastal village: Growing population</li>
                    <li>• Environmental concerns about overuse</li>
                    <li>• Economic impact on both communities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Peace Building Goals:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Develop fair water-sharing agreement</li>
                    <li>• Create sustainable usage plan</li>
                    <li>• Build inter-community cooperation</li>
                    <li>• Establish conflict prevention measures</li>
                    <li>• Design joint management system</li>
                    <li>• Plan community celebration event</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Peace Building Strategies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <h4 className="font-semibold mb-2">Communication Techniques:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Active listening skills</li>
                    <li>• "I" statements usage</li>
                    <li>• Emotion recognition</li>
                    <li>• Perspective taking</li>
                    <li>• Non-verbal awareness</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Negotiation Methods:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Win-win thinking</li>
                    <li>• Interest vs. position focus</li>
                    <li>• Creative problem solving</li>
                    <li>• Compromise strategies</li>
                    <li>• BATNA development</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Reconciliation Activities:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Storytelling circles</li>
                    <li>• Shared meal planning</li>
                    <li>• Joint project development</li>
                    <li>• Forgiveness ceremonies</li>
                    <li>• Future visioning</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Assessment and Reflection</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Performance Assessment (60%)</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Role authenticity and preparation</li>
                    <li>• Constructive participation</li>
                    <li>• Communication effectiveness</li>
                    <li>• Problem-solving contribution</li>
                    <li>• Respect for others' perspectives</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Reflection Essay (40%)</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Learning about conflict resolution</li>
                    <li>• Personal growth and insights</li>
                    <li>• Application to real-world situations</li>
                    <li>• Empathy development</li>
                    <li>• Peace-building commitment</li>
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
