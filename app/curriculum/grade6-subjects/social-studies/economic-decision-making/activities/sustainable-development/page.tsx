import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Globe, Heart, Map, Users } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function SustainableDevelopmentPage() {
  return (
    <div className="container mx-auto py-8">
            <Link href="/curriculum/grade6-subjects/social-studies/economic-decision-making">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Economic Decision Making
        </Button>
      </Link>

      <div className="mb-8">
        <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-orange-700 flex items-center">
            <Globe className="mr-2 h-7 w-7 text-orange-600" />
            Sustainable Community Development
          </h1>
          <p className="text-gray-700">
            Students explore international cooperation, cultural exchange, and peace-building efforts for sustainable
            development.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-t-4 border-blue-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-700 flex items-center">
              <Users className="mr-2 h-5 w-5" />
              World Cultures Day International Fair
            </CardTitle>
            <CardDescription>Activity 11: Celebrating global diversity and connections</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Students organize a multicultural fair to explore and appreciate global diversity and cultural
              connections.
            </p>
            <Button asChild className="w-full">
              <Link href="/curriculum/grade6-subjects/social-studies/economic-decision-making/sustainable-development/cultures-fair">
                View Activity
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-green-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-green-50">
            <CardTitle className="text-green-700 flex items-center">
              <Map className="mr-2 h-5 w-5" />
              Digital Global Map Exploration
            </CardTitle>
            <CardDescription>Activity 12: Virtual exploration of world geography and cultures</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Students use Google Earth to explore countries and research cultural contributions to global peace.
            </p>
            <Button asChild className="w-full">
              <Link href="/curriculum/grade6-subjects/social-studies/economic-decision-making/sustainable-development/map-exploration">
                View Activity
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-purple-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-purple-50">
            <CardTitle className="text-purple-700 flex items-center">
              <Heart className="mr-2 h-5 w-5" />
              Peace Efforts Research and Fair
            </CardTitle>
            <CardDescription>Activity 13: Exploring global peace initiatives and leaders</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Students research and present peace efforts from around the world, inspiring future peace-building
              actions.
            </p>
            <Button asChild className="w-full">
              <Link href="/curriculum/grade6-subjects/social-studies/economic-decision-making/sustainable-development/peace-research-fair">
                View Activity
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
