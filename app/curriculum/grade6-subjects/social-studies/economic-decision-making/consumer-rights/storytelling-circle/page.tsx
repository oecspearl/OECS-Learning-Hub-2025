import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, MessageCircle, Target } from "lucide-react"
import Link from "next/link"

const breadcrumbItems = [
  { label: "Curriculum", href: "/curriculum" },
  { label: "Grade 6", href: "/curriculum/grade6-subjects" },
  { label: "Social Studies", href: "/curriculum/grade6-subjects/social-studies" },
  { label: "Economic Decision Making", href: "/curriculum/grade6-subjects/social-studies/economic-decision-making" },
  {
    label: "Consumer Rights",
    href: "/curriculum/grade6-subjects/social-studies/economic-decision-making/consumer-rights",
  },
  { label: "Consumer Experience Storytelling Circle", href: "#" },
]

export default function StorytellingCirclePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6">
        <div className="flex items-center gap-2 mb-6">
          <MessageCircle className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold">Consumer Experience Storytelling Circle</h1>
            <p className="text-lg text-muted-foreground">
              Activity 1: Building consumer awareness through shared experiences
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
                Students share personal and family experiences with products and services in a supportive circle format,
                building awareness of consumer issues and introducing key vocabulary.
              </p>

              <div className="space-y-2">
                <Badge variant="secondary">Consumer Awareness</Badge>
                <Badge variant="secondary">Storytelling</Badge>
                <Badge variant="secondary">Vocabulary Building</Badge>
                <Badge variant="secondary">Community Building</Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Duration:</strong> 45 minutes
                </div>
                <div>
                  <strong>Group Size:</strong> Whole class circle
                </div>
                <div>
                  <strong>Materials:</strong> Chart paper, markers, story prompts
                </div>
                <div>
                  <strong>Assessment:</strong> Participation observation
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Story Prompt Examples</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm font-medium">
                    "Tell about a time when something you bought didn't work properly"
                  </p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-sm font-medium">"Describe when a service didn't meet your expectations"</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="text-sm font-medium">"Share about returning or exchanging an item"</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="text-sm font-medium">"Discuss a positive customer service experience"</p>
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
                Story Sharing Setup
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">Circle Guidelines (10 minutes):</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Arrange students in comfortable circle</li>
                  <li>• Explain confidentiality and respect rules</li>
                  <li>• Provide story prompt cards for inspiration</li>
                  <li>• Emphasize listening and support</li>
                  <li>• Allow students to pass if uncomfortable</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Experience Sharing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">Guided Discussion (25 minutes):</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• What happened with the defective product?</li>
                  <li>• How did it impact your household?</li>
                  <li>• What did you/your family do to resolve it?</li>
                  <li>• What was the outcome?</li>
                  <li>• How did you feel during the experience?</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Concept Introduction
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">Vocabulary Building (10 minutes):</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Record key issues on chart paper</li>
                  <li>• Introduce: consumer, rights, responsibilities</li>
                  <li>• Define: redress, warranty, guarantee</li>
                  <li>• Connect experiences to consumer protection</li>
                  <li>• Preview upcoming learning activities</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Assessment and Differentiation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Assessment Focus:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Student engagement in circle discussion</li>
                    <li>• Quality of shared experiences</li>
                    <li>• Understanding of consumer issues</li>
                    <li>• Respectful listening and support</li>
                    <li>• Vocabulary comprehension</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Differentiation Strategies:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Provide story prompt cards for shy students</li>
                    <li>• Allow drawing instead of verbal sharing</li>
                    <li>• Pair ELL students with supportive peers</li>
                    <li>• Offer alternative participation methods</li>
                    <li>• Use visual vocabulary supports</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 flex gap-4">
          <Button asChild>
            <Link href="/curriculum/grade6-subjects/social-studies/economic-decision-making/consumer-rights">
              Back to Consumer Rights
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
