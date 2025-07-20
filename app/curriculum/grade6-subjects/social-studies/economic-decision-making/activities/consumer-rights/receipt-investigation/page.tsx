"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, BookOpen, Target, CheckCircle, Search, Calculator } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { StandardsBadge } from "@/components/standards-badge"

export default function ReceiptInvestigationPage() {
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
      label: "Receipt Investigation",
      href: "/curriculum/grade6-subjects/social-studies/economic-decision-making/activities/consumer-rights/receipt-investigation",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Receipt and Utility Bill Investigation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hands-on exploration of financial documents to understand budgeting, taxes, and record-keeping
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="flex items-center p-4">
              <Clock className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Duration</p>
                <p className="text-lg font-semibold">55 minutes</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-4">
              <Users className="h-8 w-8 text-green-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Group Size</p>
                <p className="text-lg font-semibold">Pairs</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-4">
              <BookOpen className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Subject</p>
                <p className="text-lg font-semibold">Financial Literacy</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-center p-4">
              <Target className="h-8 w-8 text-red-600 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Activity Type</p>
                <p className="text-lg font-semibold">Investigation</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <StandardsBadge
          code="6.EDM.3"
          description="Financial document analysis standards for Grade 6 Social Studies"
          subject="Social Studies"
          grade="6"
          strand="Economic Decision Making"
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
                <span>Identify and interpret information on receipts and utility bills</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Understand how taxes and fees are calculated and displayed</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Recognize the importance of keeping financial records</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Connect document analysis to budget planning and tracking</span>
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
                  <li>• Sample receipts and utility bills from home</li>
                  <li>• Magnifying glasses for detailed examination</li>
                  <li>• Investigation worksheets</li>
                  <li>• Calculators for verification</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Optional Materials:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Document cameras for sharing findings</li>
                  <li>• Highlighters for marking key information</li>
                  <li>• Chart paper for class compilation</li>
                  <li>• Digital copies of sample documents</li>
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
                Document Introduction (10 minutes)
              </h3>
              <ul className="space-y-2 ml-4">
                <li>• Students bring receipts and utility bills from home (with permission)</li>
                <li>• Explain purpose: understanding financial information</li>
                <li>• Distribute magnifying glasses for detailed examination</li>
                <li>• Review privacy and respect guidelines for family documents</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Badge variant="outline" className="mr-2">
                  Step 2
                </Badge>
                Discovery Learning Process (30 minutes)
              </h3>
              <ul className="space-y-2 ml-4">
                <li>• Students work in pairs to explore documents systematically</li>
                <li>• Use investigation worksheets to guide exploration</li>
                <li>• Calculate and verify mathematical information</li>
                <li>• Compare different types of documents and formats</li>
              </ul>

              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold mb-2">Investigation Focus Areas:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-medium mb-1">Receipt Analysis:</h5>
                    <ul className="space-y-1">
                      <li>• What information appears on receipts?</li>
                      <li>• How are taxes calculated and displayed?</li>
                      <li>• What payment methods are shown?</li>
                      <li>• What return/warranty information is provided?</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-1">Utility Bill Analysis:</h5>
                    <ul className="space-y-1">
                      <li>• What details are on utility bills?</li>
                      <li>• How are charges calculated?</li>
                      <li>• What payment options are available?</li>
                      <li>• How is usage tracked over time?</li>
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
                Findings Compilation (10 minutes)
              </h3>
              <ul className="space-y-2 ml-4">
                <li>• Pairs share discoveries with class</li>
                <li>• Create comprehensive list of document information</li>
                <li>• Discuss importance of keeping financial records</li>
                <li>• Compare findings across different document types</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Badge variant="outline" className="mr-2">
                  Step 4
                </Badge>
                Budget Connection (5 minutes)
              </h3>
              <ul className="space-y-2 ml-4">
                <li>• Connect document information to budget planning</li>
                <li>• Explain how receipts and bills help track expenses</li>
                <li>• Preview upcoming budget creation activities</li>
                <li>• Discuss digital vs. paper record-keeping options</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Investigation Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex items-center mb-3">
                  <Search className="h-5 w-5 text-green-600 mr-2" />
                  <h4 className="font-semibold text-green-800">Receipt Investigation</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• What is the total amount spent? How is it calculated?</li>
                  <li>• What taxes or fees are included?</li>
                  <li>• What is the date and location of purchase?</li>
                  <li>• What payment method was used?</li>
                  <li>• What return or warranty information is provided?</li>
                  <li>• Are there any discount codes or savings shown?</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center mb-3">
                  <Calculator className="h-5 w-5 text-blue-600 mr-2" />
                  <h4 className="font-semibold text-blue-800">Utility Bill Investigation</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• What services are being charged for?</li>
                  <li>• How is usage measured and calculated?</li>
                  <li>• What is the billing period covered?</li>
                  <li>• Are there different rate structures?</li>
                  <li>• What payment options and due dates are listed?</li>
                  <li>• How does current usage compare to previous periods?</li>
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
                <h4 className="font-semibold mb-2">Investigation Thoroughness (40%):</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Systematic examination of all document components</li>
                  <li>• Accurate identification of key information</li>
                  <li>• Attention to detail in calculations and verification</li>
                  <li>• Comparison across different document types</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Discovery Sharing (30%):</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Clear communication of findings</li>
                  <li>• Contribution to class knowledge compilation</li>
                  <li>• Thoughtful questions and observations</li>
                  <li>• Active listening to others' discoveries</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Understanding of Purpose (30%):</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Recognition of financial document importance</li>
                  <li>• Connection to budget planning and tracking</li>
                  <li>• Understanding of consumer protection aspects</li>
                  <li>• Appreciation for record-keeping practices</li>
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
              <li>• Create a family expense tracking system using receipts</li>
              <li>• Compare utility bills across different seasons</li>
              <li>• Research digital receipt and bill management apps</li>
              <li>• Interview family members about their record-keeping methods</li>
              <li>• Design a personal filing system for important documents</li>
              <li>• Calculate annual expenses based on monthly utility bills</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Safety and Privacy Considerations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <ul className="space-y-2 text-sm">
                <li>• Ensure families are comfortable sharing financial documents</li>
                <li>• Provide sample documents for students who cannot bring materials</li>
                <li>• Respect privacy by not sharing specific amounts or personal information</li>
                <li>• Focus on document structure rather than family financial details</li>
                <li>• Return all family documents at end of activity</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
