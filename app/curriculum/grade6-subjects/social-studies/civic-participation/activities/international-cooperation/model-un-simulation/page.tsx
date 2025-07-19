import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Globe, Camera, Music, Palette } from "lucide-react"
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
    label: "Cultural Ambassador Program",
    href: "/curriculum/grade6-subjects/social-studies/civic-participation/activities/international-cooperation/cultural-ambassador-program",
  },
]

export default function CulturalAmbassadorProgramPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6">
        <div className="flex items-center gap-2 mb-6">
          <Globe className="h-8 w-8 text-purple-600" />
          <div>
            <h1 className="text-3xl font-bold">Cultural Ambassador Program</h1>
            <p className="text-lg text-muted-foreground">Celebrating and sharing Caribbean culture with the world</p>
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
                Students become cultural ambassadors for their Caribbean heritage, creating multimedia presentations and
                cultural exchange programs to share their traditions, values, and perspectives with international
                audiences.
              </p>

              <div className="space-y-2">
                <Badge variant="secondary">Cultural Pride</Badge>
                <Badge variant="secondary">Digital Storytelling</Badge>
                <Badge variant="secondary">Global Awareness</Badge>
                <Badge variant="secondary">Cross-Cultural Communication</Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Duration:</strong> 6-8 weeks
                </div>
                <div>
                  <strong>Group Size:</strong> 3-4 students per embassy
                </div>
                <div>
                  <strong>Subjects:</strong> Social Studies, Arts, ICT
                </div>
                <div>
                  <strong>Assessment:</strong> Portfolio, presentation, reflection
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cultural Embassy Themes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Music className="h-4 w-4 text-red-500" />
                  <span>Music and Dance Traditions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Palette className="h-4 w-4 text-blue-500" />
                  <span>Visual Arts and Crafts</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-green-500" />
                  <span>Folklore and Storytelling</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-orange-500" />
                  <span>Family and Community Values</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-purple-500" />
                  <span>Food and Culinary Heritage</span>
                </div>
                <div className="flex items-center gap-2">
                  <Camera className="h-4 w-4 text-teal-500" />
                  <span>Festivals and Celebrations</span>
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
                Phase 1: Research
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">Cultural Investigation:</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Family history interviews</li>
                  <li>• Community elder consultations</li>
                  <li>• Historical research</li>
                  <li>• Artifact collection</li>
                  <li>• Tradition documentation</li>
                  <li>• Contemporary relevance study</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="h-5 w-5" />
                Phase 2: Creation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">Multimedia Development:</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Digital storytelling videos</li>
                  <li>• Photo documentation</li>
                  <li>• Audio recordings</li>
                  <li>• Interactive presentations</li>
                  <li>• Cultural artifact displays</li>
                  <li>• Performance preparations</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Phase 3: Exchange
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">Cultural Sharing:</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• International school partnerships</li>
                  <li>• Virtual cultural tours</li>
                  <li>• Online exhibition creation</li>
                  <li>• Social media campaigns</li>
                  <li>• Community presentations</li>
                  <li>• Cultural festival participation</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Ambassador Portfolio Components</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Digital Portfolio Elements:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Personal cultural identity map</li>
                    <li>• Family heritage timeline</li>
                    <li>• Traditional recipe collection</li>
                    <li>• Music and dance recordings</li>
                    <li>• Craft-making tutorials</li>
                    <li>• Community celebration documentation</li>
                    <li>• Reflection essays</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Interactive Presentations:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Virtual museum exhibits</li>
                    <li>• 360-degree cultural tours</li>
                    <li>• Interactive story maps</li>
                    <li>• Live demonstration videos</li>
                    <li>• Cultural quiz games</li>
                    <li>• Recipe and craft workshops</li>
                    <li>• Q&A session preparation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Sample Embassy: Caribbean Culinary Heritage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Research Activities:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Traditional recipe collection from elders</li>
                    <li>• Ingredient origin and trade route mapping</li>
                    <li>• Cultural fusion and adaptation stories</li>
                    <li>• Seasonal and ceremonial food traditions</li>
                    <li>• Modern Caribbean chef interviews</li>
                    <li>• Health and nutrition aspects</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Sharing Activities:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Virtual cooking demonstrations</li>
                    <li>• Interactive spice garden tours</li>
                    <li>• Recipe exchange with global partners</li>
                    <li>• Cultural food festival organization</li>
                    <li>• Cookbook creation and sharing</li>
                    <li>• Social media food photography</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>International Exchange Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <h4 className="font-semibold mb-2">Partner Schools:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Schools in Canada and UK</li>
                    <li>• Caribbean diaspora communities</li>
                    <li>• International schools worldwide</li>
                    <li>• Cultural exchange programs</li>
                    <li>• Sister city partnerships</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Digital Platforms:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Video conferencing sessions</li>
                    <li>• Collaborative online projects</li>
                    <li>• Social media exchanges</li>
                    <li>• Virtual reality experiences</li>
                    <li>• Online exhibition spaces</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Community Events:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Cultural center presentations</li>
                    <li>• Tourism board collaborations</li>
                    <li>• Embassy cultural events</li>
                    <li>• International festival participation</li>
                    <li>• Local media interviews</li>
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
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <h4 className="font-semibold mb-2">Cultural Knowledge (35%)</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Depth of cultural understanding</li>
                    <li>• Historical accuracy</li>
                    <li>• Contemporary relevance</li>
                    <li>• Personal connection demonstration</li>
                    <li>• Research quality</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Communication Skills (35%)</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Presentation effectiveness</li>
                    <li>• Digital storytelling quality</li>
                    <li>• Cross-cultural sensitivity</li>
                    <li>• Audience engagement</li>
                    <li>• Multimedia integration</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Cultural Pride & Reflection (30%)</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Personal growth evidence</li>
                    <li>• Cultural appreciation development</li>
                    <li>• Global perspective broadening</li>
                    <li>• Future ambassador commitment</li>
                    <li>• Community impact potential</li>
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
