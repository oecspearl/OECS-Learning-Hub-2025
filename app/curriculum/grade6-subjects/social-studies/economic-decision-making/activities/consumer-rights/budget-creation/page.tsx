"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, BookOpen, Target, CheckCircle, Calculator, DollarSign } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { StandardsBadge } from "@/components/standards-badge"

export default function BudgetCreationPage() {
  const breadcrumbItems = [
    { label: "Curriculum", href: "/curriculum" },
    { label: "Grade 6", href: "/curriculum/grade6-subjects" },
    { label: "Social Studies", href: "/curriculum/grade6-subjects/social-studies" },
    { label: "Economic Decision Making", href: "/curriculum/grade6-subjects/social-studies/economic-decision-making" },
    { label: "Activities", href: "/curriculum/grade6-subjects/social-studies/economic-decision-making/activities" },
    {
      label: "Consumer Rights",
      href: "/curriculum/grade6-subjects/social-studies/economic-decision-making/activities/consumer-rights",
    },
    {
      label: "Budget Creation",
      href: "/curriculum/grade6-subjects/social-studies/economic-decision-making/activities/consumer-rights/budget-creation",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Family Budget Creation Project</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Collaborative project where students create realistic family budgets using case study scenarios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="flex items-center p-4">
              <Clock className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Duration</p>
                <p className="text-lg font-semibold">75 minutes</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-4">
              <Users className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Group Size</p>
                <p className="text-lg font-semibold">Small Groups</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-4">
              <BookOpen className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Subject</p>
                <p className="text-lg font-semibold">Budgeting</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-4">
              <Target className="h-8 w-8 text-red-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Activity Type</p>
                <p className="text-lg font-semibold">Collaborative Project</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <StandardsBadge
          subject="Social Studies"
          grade="6"
          strand="Economic Decision Making"
          standards={[
            "Apply budgeting principles to real-world scenarios",
            "Distinguish between needs and wants in financial planning",
            "Analyze trade-offs in budget allocation decisions",
          ]}
        />

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="mr-2" />
              Learning Objectives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Apply budgeting concepts to realistic family scenarios</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Make informed decisions about needs versus wants</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Practice collaborative problem-solving and decision-making</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Understand the importance of staying within budget limits</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Materials Needed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Essential Materials:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Budget templates and worksheets</li>
                  <li>• Calculators for each group</li>
                  <li>• Family scenario materials</li>
                  <li>• Expense category cards</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Optional Materials:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Budgeting video: "Budgeting for Kids!"</li>
                  <li>• Chart paper for presentations</li>
                  <li>• Colored markers for categorization</li>
                  <li>• Digital budget templates</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Activity Procedure</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Badge variant="outline" className="mr-2">
                  Step 1
                </Badge>
                Budget Review (15 minutes)
              </h3>
              <ul className="space-y-2 ml-4">
                <li>• Review budgeting concepts from previous grades</li>
                <li>• Define key terms: income, expenses, needs, wants, savings</li>
                <li>• Watch budgeting video: "Budgeting for Kids!"</li>
                <li>• Discuss budget purposes and benefits</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Badge variant="outline" className="mr-2">
                  Step 2
                </Badge>
                Case Study Introduction (20 minutes)
              </h3>
              <ul className="space-y-2 ml-4">
                <li>• Present family scenario with given income and expenses</li>
                <li>• Family of four planning vacation with $2,000 budget</li>
                <li>• Include various expense categories and options</li>
                <li>• Explain constraints and requirements</li>
              </ul>

              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold mb-2">Sample Family Scenario:</h4>
                <p className="text-sm mb-2">
                  The Johnson family (2 adults, 2 children) is planning a week-long vacation with a budget of $2,000.
                  They need to allocate funds across different categories while ensuring they don't overspend.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-medium">Required Expenses:</h5>
                    <ul className="space-y-1">
                      <li>• Transportation to destination</li>
                      <li>• Accommodation for 6 nights</li>
                      <li>• Meals for family of 4</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium">Optional Expenses:</h5>
                    <ul className="space-y-1">
                      <li>• Entertainment and activities</li>
                      <li>• Souvenirs and shopping</li>
                      <li>• Emergency fund</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Badge variant="outline" className="mr-2">
                  Step 3
                </Badge>
                Collaborative Budget Creation (30 minutes)
              </h3>
              <ul className="space-y-2 ml-4">
                <li>• Students work in groups to create family budget</li>
                <li>• Allocate funds across different categories</li>
                <li>• Make decisions about needs vs. wants</li>
                <li>• Calculate remaining funds or identify overspending</li>
                <li>• Adjust allocations to stay within budget</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Badge variant="outline" className="mr-2">
                  Step 4
                </Badge>
                Budget Presentation and Analysis (10 minutes)
              </h3>
              <ul className="space-y-2 ml-4">
                <li>• Groups present their budget decisions to class</li>
                <li>• Compare different approaches to spending</li>
                <li>• Discuss trade-offs and decision-making processes</li>
                <li>• Identify strategies for staying within budget</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Budget Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-red-50 rounded-lg">
                <div className="flex items-center mb-3">
                  <DollarSign className="h-5 w-5 text-red-600 mr-2" />
                  <h4 className="font-semibold text-red-800">Essential Expenses</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>
                    • <strong>Transportation:</strong> Gas, flights, car rental
                  </li>
                  <li>
                    • <strong>Accommodation:</strong> Hotel, vacation rental
                  </li>
                  <li>
                    • <strong>Food:</strong> Restaurants, groceries, snacks
                  </li>
                  <li>
                    • <strong>Emergency Fund:</strong> Unexpected expenses
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex items-center mb-3">
                  <Calculator className="h-5 w-5 text-green-600 mr-2" />
                  <h4 className="font-semibold text-green-800">Optional Expenses</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>
                    • <strong>Entertainment:</strong> Activities, attractions, shows
                  </li>
                  <li>
                    • <strong>Souvenirs:</strong> Shopping and gifts
                  </li>
                  <li>
                    • <strong>Upgrades:</strong> Better accommodation, premium activities
                  </li>
                  <li>
                    • <strong>Convenience:</strong> Extra services, time-savers
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Assessment Criteria</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Budget Accuracy (30%):</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Mathematical calculations are correct</li>
                  <li>• Total expenses do not exceed budget limit</li>
                  <li>• All required categories are addressed</li>
                  <li>• Realistic cost estimates for each category</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Decision-Making Process (30%):</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Clear reasoning for allocation decisions</li>
                  <li>• Appropriate distinction between needs and wants</li>
                  <li>• Consideration of trade-offs and alternatives</li>
                  <li>• Evidence of thoughtful prioritization</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Collaboration (25%):</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Equal participation from all group members</li>
                  <li>• Respectful discussion and compromise</li>
                  <li>• Effective problem-solving as a team</li>
                  <li>• Shared responsibility for final decisions</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Presentation Quality (15%):</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Clear explanation of budget choices</li>
                  <li>• Organized presentation of information</li>
                  <li>• Ability to answer questions about decisions</li>
                  <li>• Professional presentation of budget document</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Extension Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• Create budgets for different family sizes and income levels</li>
              <li>• Research actual costs for vacation destinations</li>
              <li>• Compare budget vs. actual expenses for real family trips</li>
              <li>• Design a personal savings plan for a desired purchase</li>
              <li>• Explore digital budgeting tools and apps</li>
              <li>• Interview family members about their budgeting strategies</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Real-World Connections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-semibold mb-2">Connect to Student Lives:</h4>
              <ul className="space-y-2 text-sm">
                <li>• Discuss how families make budget decisions at home</li>
                <li>• Explore how students can contribute to family budgeting</li>
                <li>• Connect to personal allowance or spending money management</li>
                <li>• Discuss the importance of financial planning for future goals</li>
                <li>• Explore cultural differences in family financial decision-making</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
