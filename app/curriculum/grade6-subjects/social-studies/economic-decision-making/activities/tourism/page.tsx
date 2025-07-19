import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Plane, Camera, Users, MapPin } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function TourismPage() {
  return (
    <div className="container mx-auto py-8">
            <Link href="/curriculum/grade6-subjects/social-studies/economic-decision-making">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Economic Decision Making
        </Button>
      </Link>

      <div className="mb-8">
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-purple-700 flex items-center">
            <Plane className="mr-2 h-7 w-7 text-purple-600" />
            Tourism
          </h1>
          <p className="text-gray-700">
            Students examine tourism's impact on Caribbean economies, exploring both benefits and challenges of the
            tourism industry.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-t-4 border-blue-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-700 flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              Tourism Industry Field Experience
            </CardTitle>
            <CardDescription>Activity 8: Real-world tourism industry exploration</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Students visit tourism offices and facilities to learn about the industry firsthand from professionals.
            </p>
            <Button asChild className="w-full">
              <Link href="/curriculum/grade6-subjects/social-studies/economic-decision-making/tourism/field-experience">
                View Activity
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-green-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-green-50">
            <CardTitle className="text-green-700 flex items-center">
              <Users className="mr-2 h-5 w-5" />
              Tourism Impact Role-Play Theater
            </CardTitle>
            <CardDescription>Activity 9: Exploring multiple perspectives on tourism</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Students role-play different stakeholders to understand tourism's varied impacts on communities.
            </p>
            <Button asChild className="w-full">
              <Link href="/curriculum/grade6-subjects/social-studies/economic-decision-making/tourism/role-play-theater">
                View Activity
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-purple-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-purple-50">
            <CardTitle className="text-purple-700 flex items-center">
              <Camera className="mr-2 h-5 w-5" />
              Tourism Debate Championship
            </CardTitle>
            <CardDescription>Activity 10: Debating tourism's complex impacts</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Students engage in structured debates about tourism benefits, challenges, and sustainable development.
            </p>
            <Button asChild className="w-full">
              <Link href="/curriculum/grade6-subjects/social-studies/economic-decision-making/tourism/debate-championship">
                View Activity
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
