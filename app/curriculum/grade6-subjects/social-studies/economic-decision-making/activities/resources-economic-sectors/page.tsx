import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, TreePine, Factory, TrendingUp, Recycle } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function ResourcesEconomicSectorsPage() {
  return (
    <div className="container mx-auto py-8">
            <Link href="/curriculum/grade6-subjects/social-studies/economic-decision-making">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Economic Decision Making
        </Button>
      </Link>

      <div className="mb-8">
        <div className="bg-gradient-to-r from-teal-100 to-cyan-100 p-6 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-teal-700 flex items-center">
            <TreePine className="mr-2 h-7 w-7 text-teal-600" />
            Resources & Economic Sectors
          </h1>
          <p className="text-gray-700">
            Students examine global resource distribution, economic sectors, and Caribbean contributions to the world
            economy.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-t-4 border-blue-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-700 flex items-center">
              <TreePine className="mr-2 h-5 w-5" />
              Resource Classification
            </CardTitle>
            <CardDescription>Activity 14: Understanding global resource distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Students classify and map world resources, comparing global and Caribbean examples.
            </p>
            <Button asChild className="w-full">
              <Link href="/curriculum/grade6-subjects/social-studies/economic-decision-making/resources-economic-sectors/resource-classification">
                View Activity
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-green-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-green-50">
            <CardTitle className="text-green-700 flex items-center">
              <Recycle className="mr-2 h-5 w-5" />
              Conservation Initiative
            </CardTitle>
            <CardDescription>Activity 15: Promoting resource conservation</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Students create campaigns to promote conservation of forests, water, soil, and energy resources.
            </p>
            <Button asChild className="w-full">
              <Link href="/curriculum/grade6-subjects/social-studies/economic-decision-making/resources-economic-sectors/conservation-initiative">
                View Activity
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-purple-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-purple-50">
            <CardTitle className="text-purple-700 flex items-center">
              <Factory className="mr-2 h-5 w-5" />
              Industry Comparison
            </CardTitle>
            <CardDescription>Activity 16: Global vs. local industry analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Students compare major global industries with Caribbean equivalents across economic sectors.
            </p>
            <Button asChild className="w-full">
              <Link href="/curriculum/grade6-subjects/social-studies/economic-decision-making/resources-economic-sectors/industry-comparison">
                View Activity
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-orange-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-orange-50">
            <CardTitle className="text-orange-700 flex items-center">
              <TrendingUp className="mr-2 h-5 w-5" />
              Caribbean Economic Showcase
            </CardTitle>
            <CardDescription>Activities 17-18: Celebrating regional contributions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Students explore trade interdependence and showcase Caribbean contributions to the global economy.
            </p>
            <Button asChild className="w-full">
              <Link href="/curriculum/grade6-subjects/social-studies/economic-decision-making/resources-economic-sectors/caribbean-showcase">
                View Activities
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
