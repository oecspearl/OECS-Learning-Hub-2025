import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ShoppingCart, DollarSign, Calculator, Users } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function ConsumerRightsPage() {
  return (
    <div className="container mx-auto py-8">
            <Link href="/curriculum/grade6-subjects/social-studies/economic-decision-making">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Economic Decision Making
        </Button>
      </Link>

      <div className="mb-8">
        <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-green-700 flex items-center">
            <ShoppingCart className="mr-2 h-7 w-7 text-green-600" />
            Consumer Rights & Responsibilities
          </h1>
          <p className="text-gray-700">
            Students explore consumer protection, financial literacy, and responsible decision-making in the
            marketplace.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-t-4 border-blue-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-700 flex items-center">
              <Users className="mr-2 h-5 w-5" />
              Consumer Experience Storytelling
            </CardTitle>
            <CardDescription>Activity 1: Sharing consumer experiences and building awareness</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Students share personal and family experiences with products and services to build understanding of
              consumer issues.
            </p>
            <Button asChild className="w-full">
              <Link href="/curriculum/grade6-subjects/social-studies/economic-decision-making/consumer-rights/storytelling-circle">
                View Activity
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-green-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-green-50">
            <CardTitle className="text-green-700 flex items-center">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Consumer Rights Awareness
            </CardTitle>
            <CardDescription>Activity 2: Learning about consumer rights and responsibilities</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Interactive exploration of consumer rights using anticipation guides and scenario analysis.
            </p>
            <Button asChild className="w-full">
              <Link href="/curriculum/grade6-subjects/social-studies/economic-decision-making/consumer-rights/rights-awareness">
                View Activity
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-purple-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-purple-50">
            <CardTitle className="text-purple-700 flex items-center">
              <Calculator className="mr-2 h-5 w-5" />
              Budgeting & Financial Literacy
            </CardTitle>
            <CardDescription>Activities 5-7: Developing financial planning skills</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Students learn budgeting through receipt analysis, family budget creation, and real-world portfolio
              projects.
            </p>
            <Button asChild className="w-full">
              <Link href="/curriculum/grade6-subjects/social-studies/economic-decision-making/consumer-rights/budgeting-literacy">
                View Activities
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-orange-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-orange-50">
            <CardTitle className="text-orange-700 flex items-center">
              <DollarSign className="mr-2 h-5 w-5" />
              Digital Consumer Campaign
            </CardTitle>
            <CardDescription>Activity 4: Creating awareness campaigns</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Students create digital campaigns to educate peers about consumer rights and protection.
            </p>
            <Button asChild className="w-full">
              <Link href="/curriculum/grade6-subjects/social-studies/economic-decision-making/consumer-rights/digital-campaign">
                View Activity
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
