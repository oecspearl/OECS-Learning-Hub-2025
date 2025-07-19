import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ChevronLeft,
  MessageCircle,
  AlertTriangle,
  FileText,
  DollarSign,
  Receipt,
  CreditCard,
  Users,
} from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

const breadcrumbItems = [
  { label: "Curriculum", href: "/curriculum" },
  { label: "Grade 6", href: "/curriculum/grade6-subjects" },
  { label: "Social Studies", href: "/curriculum/grade6-subjects/social-studies" },
  { label: "Economic Decision Making", href: "/curriculum/grade6-subjects/social-studies/economic-decision-making" },
  { label: "Activities", href: "/curriculum/grade6-subjects/social-studies/economic-decision-making/activities" },
  { label: "Consumer Rights & Responsibilities", href: "#" },
]

export default function ConsumerRightsActivitiesPage() {
  return (
    <div className="container mx-auto py-8">
      <Breadcrumb items={breadcrumbItems} />

      <Link href="/curriculum/grade6-subjects/social-studies/economic-decision-making/activities">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Activities
        </Button>
      </Link>

      <div className="mb-8">
        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-blue-700">Consumer Rights & Responsibilities Activities</h1>
          <p className="text-gray-700">
            Help students develop consumer awareness, understand their rights and responsibilities, and build financial
            literacy skills.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-t-4 border-blue-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-700 flex items-center">
              <MessageCircle className="mr-2 h-5 w-5" />
              Consumer Experience Storytelling Circle
            </CardTitle>
            <CardDescription>Activity 1: Building awareness through shared experiences</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Students share personal and family experiences with products and services in a supportive circle format.
            </p>
            <div className="text-xs text-gray-600 mb-4">Duration: 45 minutes | Format: Circle discussion</div>
            <Button asChild className="w-full">
              <Link href="/curriculum/grade6-subjects/social-studies/economic-decision-making/activities/consumer-rights/storytelling-circle">
                View Activity
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-green-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-green-50">
            <CardTitle className="text-green-700 flex items-center">
              <AlertTriangle className="mr-2 h-5 w-5" />
              Consumer Rights Anticipation Guide
            </CardTitle>
            <CardDescription>Activity 2: Testing knowledge and correcting misconceptions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Students use colored cards to respond to statements about consumer rights, revealing misconceptions.
            </p>
            <div className="text-xs text-gray-600 mb-4">Duration: 50 minutes | Format: Interactive card activity</div>
            <Button asChild className="w-full">
              <Link href="/curriculum/grade6-subjects/social-studies/economic-decision-making/activities/consumer-rights/anticipation-guide">
                View Activity
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-purple-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-purple-50">
            <CardTitle className="text-purple-700 flex items-center">
              <FileText className="mr-2 h-5 w-5" />
              Consumer Rights Scenario Analysis
            </CardTitle>
            <CardDescription>Activity 3: Analyzing real-world consumer problems</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Students analyze consumer scenarios to identify rights, responsibilities, and appropriate actions.
            </p>
            <div className="text-xs text-gray-600 mb-4">Duration: 60 minutes | Format: Small group analysis</div>
            <Button asChild className="w-full">
              <Link href="/curriculum/grade6-subjects/social-studies/economic-decision-making/activities/consumer-rights/scenario-analysis">
                View Activity
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-orange-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-orange-50">
            <CardTitle className="text-orange-700 flex items-center">
              <Users className="mr-2 h-5 w-5" />
              Digital Consumer Rights Campaign
            </CardTitle>
            <CardDescription>Activity 4: Creating educational campaigns</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Students create digital campaigns to educate peers about consumer rights and protection.
            </p>
            <div className="text-xs text-gray-600 mb-4">Duration: 90 minutes | Format: Digital creation project</div>
            <Button asChild className="w-full">
              <Link href="/curriculum/grade6-subjects/social-studies/economic-decision-making/activities/consumer-rights/digital-campaign">
                View Activity
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-red-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-red-50">
            <CardTitle className="text-red-700 flex items-center">
              <Receipt className="mr-2 h-5 w-5" />
              Receipt and Utility Bill Investigation
            </CardTitle>
            <CardDescription>Activity 5: Understanding financial documents</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Students examine receipts and utility bills to understand financial information and record-keeping.
            </p>
            <div className="text-xs text-gray-600 mb-4">Duration: 55 minutes | Format: Document investigation</div>
            <Button asChild className="w-full">
              <Link href="/curriculum/grade6-subjects/social-studies/economic-decision-making/activities/consumer-rights/receipt-investigation">
                View Activity
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-teal-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-teal-50">
            <CardTitle className="text-teal-700 flex items-center">
              <DollarSign className="mr-2 h-5 w-5" />
              Family Budget Creation Project
            </CardTitle>
            <CardDescription>Activity 6: Collaborative budgeting skills</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Students work in groups to create family budgets for vacation planning, learning about financial
              decisions.
            </p>
            <div className="text-xs text-gray-600 mb-4">Duration: 75 minutes | Format: Collaborative project</div>
            <Button asChild className="w-full">
              <Link href="/curriculum/grade6-subjects/social-studies/economic-decision-making/activities/consumer-rights/budget-creation">
                View Activity
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-pink-500 shadow-md hover:shadow-lg transition-all duration-300">
          <CardHeader className="bg-pink-50">
            <CardTitle className="text-pink-700 flex items-center">
              <CreditCard className="mr-2 h-5 w-5" />
              "Money Sense" Family Portfolio Project
            </CardTitle>
            <CardDescription>Activity 7: Real-world financial tracking</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Students track family outing expenses over multiple weeks, creating comprehensive financial portfolios.
            </p>
            <div className="text-xs text-gray-600 mb-4">Duration: Multiple weeks | Format: Ongoing portfolio</div>
            <Button asChild className="w-full">
              <Link href="/curriculum/grade6-subjects/social-studies/economic-decision-making/activities/consumer-rights/money-sense-portfolio">
                View Activity
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
