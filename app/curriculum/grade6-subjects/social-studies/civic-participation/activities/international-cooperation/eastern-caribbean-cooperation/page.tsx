import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Thermometer, Waves, Wind, TreePine } from "lucide-react"
import Link from "next/link"
import HeaderName from "@/components/HeaderName" // Declare the HeaderName component

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
    label: "Climate Action Network",
    href: "/curriculum/grade6-subjects/social-studies/civic-participation/activities/international-cooperation/climate-action-network",
  },
]

export default function ClimateActionNetworkPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6">
        <div className="flex items-center gap-2 mb-6">
          <Thermometer className="h-8 w-8 text-red-600" />
          <div>
            <h1 className="text-3xl font-bold">Climate Action Network</h1>
            <p className="text-lg text-muted-foreground">
              Building a youth-led network for climate action and advocacy
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
                Students establish a youth climate action network, connecting with peers regionally and globally to
                share climate data, advocate for environmental policies, and implement collaborative climate solutions.
              </p>

              <div className="space-y-2">
                <Badge variant="secondary">Climate Science</Badge>
                <Badge variant="secondary">Environmental Advocacy</Badge>
                <Badge variant="secondary">Youth Leadership</Badge>
                <Badge variant="secondary">Global Networking</Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Duration:</strong> Full academic year
                </div>
                <div>
                  <strong>Group Size:</strong> 6-8 core members
                </div>
                <div>
                  <strong>Subjects:</strong> Social Studies, Science, Math
                </div>
                <div>
                  <strong>Assessment:</strong> Portfolio, advocacy campaign
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Climate Focus Areas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Waves className="h-4 w-4 text-blue-500" />
                  <span>Sea Level Rise & Coastal Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wind className="h-4 w-4 text-gray-500" />
                  <span>Hurricane Intensity & Preparedness</span>
                </div>
                <div className="flex items-center gap-2">
                  <TreePine className="h-4 w-4 text-green-500" />
                  <span>Coral Reef Conservation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Thermometer className="h-4 w-4 text-red-500" />
                  <span>Temperature & Heat Island Effects</span>
                </div>
                <div className="flex items-center gap-2">
                  <Waves className="h-4 w-4 text-cyan-500" />
                  <span>Rainfall Patterns & Water Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <TreePine className="h-4 w-4 text-orange-500" />
                  <span>Biodiversity & Ecosystem Health</span>
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
                Network Building
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">Connection Development:</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Local youth group partnerships</li>
                  <li>• Regional school collaborations</li>
                  <li>• International student exchanges</li>
                  <li>• Environmental organization links</li>
                  <li>• Government agency contacts</li>
                  <li>• Scientific institution partnerships</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Thermometer className="h-5 w-5" />
                Data Collection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">Monitoring Activities:</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Local temperature monitoring</li>
                  <li>• Rainfall measurement tracking</li>
                  <li>• Coastal erosion documentation</li>
                  <li>• Air quality assessments</li>
                  <li>• Biodiversity surveys</li>
                  <li>• Community impact interviews</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wind className="h-5 w-5" />
                Advocacy Campaigns
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">Action Initiatives:</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Social media awareness campaigns</li>
                  <li>• Community education programs</li>
                  <li>• Policy proposal development</li>
                  <li>• Youth climate summits</li>
                  <li>• Petition and letter campaigns</li>
                  <li>• Media interview opportunities</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <HeaderName>
                <CardTitle className="flex items-center gap-2">
                  <TreePine className="h-5 w-5" />
                  Solution Projects
                </CardTitle>
              </HeaderName>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">Implementation Focus:</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• School sustainability projects</li>
                  <li>• Community resilience building</li>
                  <li>• Renewable energy initiatives</li>
                  <li>• Waste reduction programs</li>
                  <li>• Ecosystem restoration activities</li>
                  <li>• Climate adaptation planning</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Network Structure and Roles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <h4 className="font-semibold mb-2">Core Team Roles:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Network Coordinator</li>
                    <li>• Data Management Specialist</li>
                    <li>• Communications Director</li>
                    <li>• Advocacy Campaign Leader</li>
                    <li>• Partnership Development Manager</li>
                    <li>• Project Implementation Coordinator</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Regional Connections:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Caribbean Climate Network</li>
                    <li>• Small Island Developing States youth</li>
                    <li>• Latin American environmental groups</li>
                    <li>• North American climate activists</li>
                    <li>• Global youth climate movements</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Professional Partners:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Caribbean Meteorological Organisation</li>
                    <li>• University research departments</li>
                    <li>• Environmental NGOs</li>
                    <li>• Government climate offices</li>
                    <li>• International organizations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Annual Network Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Quarterly Activities:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Q1: Network establishment and data collection launch</li>
                    <li>• Q2: Regional climate data sharing summit</li>
                    <li>• Q3: Advocacy campaign development and launch</li>
                    <li>• Q4: Solution project implementation and evaluation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Ongoing Monthly Actions:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Virtual network meetings and updates</li>
                    <li>• Data collection and analysis</li>
                    <li>• Social media content creation</li>
                    <li>• Community engagement activities</li>
                    <li>• Partnership development efforts</li>
                    <li>• Progress reporting and documentation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Sample Campaign: Caribbean Coral Conservation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Research and Data:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Coral reef health monitoring</li>
                    <li>• Temperature and pH measurements</li>
                    <li>• Bleaching event documentation</li>
                    <li>• Local impact assessments</li>
                    <li>• Traditional knowledge gathering</li>
                    <li>• Economic impact analysis</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Action and Advocacy:</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• "Save Our Reefs" social media campaign</li>
                    <li>• Government policy recommendations</li>
                    <li>• Tourist education programs</li>
                    <li>• Community restoration projects</li>
                    <li>• International collaboration initiatives</li>
                    <li>• Funding proposal development</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Assessment and Impact Measurement</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Individual Assessment (60%)</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Network participation and leadership</li>
                    <li>• Data collection quality and consistency</li>
                    <li>• Advocacy campaign contributions</li>
                    <li>• Communication and collaboration skills</li>
                    <li>• Scientific understanding demonstration</li>
                    <li>• Personal reflection and growth</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Network Impact (40%)</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Partnership development success</li>
                    <li>• Campaign reach and engagement</li>
                    <li>• Policy influence and changes</li>
                    <li>• Community awareness increase</li>
                    <li>• Solution project implementation</li>
                    <li>• Sustainable network establishment</li>
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
