import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ShoppingCart, Plane, Globe, TreePine } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

const breadcrumbItems = [
  { label: "Curriculum", href: "/curriculum" },
  { label: "Grade 6", href: "/curriculum/grade6-subjects" },
  { label: "Social Studies", href: "/curriculum/grade6-subjects/social-studies" },
  { label: "Economic Decision Making", href: "/curriculum/grade6-subjects/social-studies/economic-decision-making" },
  { label: "Activities", href: "#" },
]

export default function EconomicDecisionMakingActivitiesPage() {
  return (
    <div className="container mx-auto py-8">
      <Breadcrumb items={breadcrumbItems} />

      <Link href="/curriculum/grade6-subjects/social-studies/economic-decision-making">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Economic Decision Making
        </Button>
      </Link>

      <div className="mb-8">
        <div className="bg-gradient-to-r from-emerald-100 to-teal-100 p-6 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-emerald-700">Economic Decision Making Activities</h1>
          <p className="text-gray-700">
            Explore hands-on activities that help students understand consumer rights, tourism impacts, sustainable
            development, and economic sectors.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-t-4 border-blue-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-700 flex items-center">
              <ShoppingCart className="mr-2 h-6 w-6" />
              Consumer Rights & Responsibilities
            </CardTitle>
            <CardDescription>Activities 1-7: Understanding consumer protection and financial literacy</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Students explore consumer experiences, rights awareness, budgeting skills, and financial literacy through
              storytelling, scenarios, and real-world projects.
            </p>
            <div className="space-y-2 text-xs text-gray-600 mb-4">
              <div>• Consumer Experience Storytelling Circle</div>
              <div>• Consumer Rights Anticipation Guide</div>
              <div>• Scenario Analysis & Digital Campaigns</div>
              <div>• Receipt Investigation & Budget Creation</div>
            </div>
            <Button asChild className="w-full">
              <Link href="/curriculum/grade6-subjects/social-studies/economic-decision-making/activities/consumer-rights">
                View Activities
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-purple-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-purple-50">
            <CardTitle className="text-purple-700 flex items-center">
              <Plane className="mr-2 h-6 w-6" />
              Tourism
            </CardTitle>
            <CardDescription>Activities 8-10: Examining tourism's economic and social impacts</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Students investigate tourism through field experiences, role-play theater, and structured debates to
              understand its complex effects on Caribbean communities.
            </p>
            <div className="space-y-2 text-xs text-gray-600 mb-4">
              <div>• Tourism Industry Field Experience</div>
              <div>• Tourism Impact Role-Play Theater</div>
              <div>• Tourism Debate Championship</div>
            </div>
            <Button asChild className="w-full">
              <Link href="/curriculum/grade6-subjects/social-studies/economic-decision-making/activities/tourism">
                View Activities
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-green-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-green-50">
            <CardTitle className="text-green-700 flex items-center">
              <Globe className="mr-2 h-6 w-6" />
              Sustainable Community Development
            </CardTitle>
            <CardDescription>Activities 11-13: Exploring global cooperation and cultural exchange</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Students engage in cultural fairs, digital exploration, and peace research to understand international
              cooperation and sustainable development.
            </p>
            <div className="space-y-2 text-xs text-gray-600 mb-4">
              <div>• World Cultures Day International Fair</div>
              <div>• Digital Global Map Exploration Project</div>
              <div>• Peace Efforts Research and Fair</div>
            </div>
            <Button asChild className="w-full">
              <Link href="/curriculum/grade6-subjects/social-studies/economic-decision-making/activities/sustainable-development">
                View Activities
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-orange-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-orange-50">
            <CardTitle className="text-orange-700 flex items-center">
              <TreePine className="mr-2 h-6 w-6" />
              Resources & Economic Sectors
            </CardTitle>
            <CardDescription>Activities 14-18: Understanding global resources and economic systems</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Students analyze resource distribution, conservation efforts, economic sectors, and Caribbean
              contributions to the global economy.
            </p>
            <div className="space-y-2 text-xs text-gray-600 mb-4">
              <div>• Resource Classification and Analysis</div>
              <div>• Resource Conservation Initiative Campaign</div>
              <div>• Global vs. Local Industry Comparison</div>
              <div>• Trade Interdependence & Caribbean Showcase</div>
            </div>
            <Button asChild className="w-full">
              <Link href="/curriculum/grade6-subjects/social-studies/economic-decision-making/activities/resources-economic-sectors">
                View Activities
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
