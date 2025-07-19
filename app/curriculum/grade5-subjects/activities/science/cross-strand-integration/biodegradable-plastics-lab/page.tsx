"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"
import { Clock, Users, Target, CheckCircle, Leaf, Lightbulb, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BiodegradablePlasticsLabPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Curriculum", href: "/curriculum" },
          { label: "Grade 5", href: "/curriculum/grade5-subjects" },
          { label: "Science Activities", href: "/curriculum/grade5-subjects/activities/science" },
          {
            label: "Cross-Strand Integration",
            href: "/curriculum/grade5-subjects/activities/science/cross-strand-integration",
          },
          {
            label: "Biodegradable Plastics Lab",
            href: "/curriculum/grade5-subjects/activities/science/cross-strand-integration/biodegradable-plastics-lab",
          },
        ]}
      />

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-green-100 rounded-lg">
            <Leaf className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Caribbean Biodegradable Plastics Laboratory</h1>
            <p className="text-gray-600">
              Create biodegradable plastics from local materials and test environmental impact
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <Badge className="bg-purple-100 text-purple-800">Structure & Properties of Matter</Badge>
          <Badge className="bg-green-100 text-green-800">Matter & Energy in Ecosystems</Badge>
          <Badge className="bg-orange-100 text-orange-800">Engineering Design</Badge>
          <Badge variant="secondary">Advanced Level</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Laboratory Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/biodegradable-plastics-lab.png"
                  alt="Students creating biodegradable plastics from Caribbean plant materials"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-700 mb-4">
                Students become materials scientists, creating biodegradable plastic alternatives from Caribbean plant
                materials and testing their environmental impact. This project integrates polymer chemistry, ecology,
                and sustainable engineering to address plastic pollution in marine environments.
              </p>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span>3-4 weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-500" />
                  <span>2-3 students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-gray-500" />
                  <span>Advanced</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Learning Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Understand polymer chemistry and biodegradation processes in natural environments</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Investigate environmental impact of plastics on Caribbean marine ecosystems</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Design sustainable material alternatives using local plant resources</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Test material properties including strength, flexibility, and decomposition rates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Present sustainable solutions to environmental organizations</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Week-by-Week Implementation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Week 1: Plastic Pollution Research</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Research plastic pollution in Caribbean waters and beaches</li>
                    <li>• Study microplastics and their impact on marine life</li>
                    <li>• Investigate current recycling and waste management systems</li>
                    <li>• Learn about polymer chemistry and plastic types</li>
                    <li>• Interview environmental scientists and marine biologists</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Week 2: Natural Polymer Extraction</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Extract natural polymers from Caribbean plants (banana peels, coconut fiber)</li>
                    <li>• Test starch from cassava, plantain, and sweet potato</li>
                    <li>• Experiment with natural binders like agar and gelatin</li>
                    <li>• Document extraction processes and polymer yields</li>
                    <li>• Analyze chemical properties of extracted materials</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Week 3: Biodegradable Plastic Creation</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Create biodegradable plastic formulations using extracted polymers</li>
                    <li>• Test different ratios and combinations of materials</li>
                    <li>• Add natural additives for strength and flexibility</li>
                    <li>• Mold plastics into useful shapes (bags, containers, utensils)</li>
                    <li>• Document recipes and manufacturing processes</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Week 4: Testing and Environmental Impact</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Test material strength, flexibility, and water resistance</li>
                    <li>• Monitor decomposition in different environments (soil, water, compost)</li>
                    <li>• Compare biodegradation rates with conventional plastics</li>
                    <li>• Analyze environmental impact and lifecycle assessment</li>
                    <li>• Present findings to environmental organizations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Assessment Strategies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Material Testing Results (35%)</h4>
                  <p className="text-sm text-gray-600">
                    Quantitative data on material properties, strength tests, and decomposition rates
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Environmental Impact Analysis (30%)</h4>
                  <p className="text-sm text-gray-600">
                    Comprehensive assessment of environmental benefits and lifecycle analysis
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Prototype Development (20%)</h4>
                  <p className="text-sm text-gray-600">
                    Functional biodegradable plastic products with documented manufacturing process
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Solution Presentation (15%)</h4>
                  <p className="text-sm text-gray-600">
                    Clear communication of sustainable solutions to environmental experts
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Laboratory Materials</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Natural Polymers</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Banana peels and plantain skins</li>
                    <li>• Coconut fiber and husks</li>
                    <li>• Cassava, sweet potato starch</li>
                    <li>• Agar powder from seaweed</li>
                    <li>• Gelatin and natural gums</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Laboratory Equipment</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• pH testing kits and indicators</li>
                    <li>• Hot plates and heating equipment</li>
                    <li>• Measuring cylinders and beakers</li>
                    <li>• Molds for plastic shaping</li>
                    <li>• Strength testing apparatus</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Testing Materials</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Compost bins for decomposition testing</li>
                    <li>• Soil samples from different environments</li>
                    <li>• Water containers for aquatic testing</li>
                    <li>• Weights for strength testing</li>
                    <li>• Cameras for documentation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Extension Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <span className="text-sm">Partner with environmental organizations for beach cleanups</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <span className="text-sm">Create business plan for sustainable materials company</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <span className="text-sm">Design waste reduction campaigns for schools</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <span className="text-sm">Connect with materials science university programs</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Safety Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Supervise all heating and chemical processes</li>
                <li>• Use proper ventilation when heating materials</li>
                <li>• Wear safety goggles and gloves during experiments</li>
                <li>• Handle hot materials with appropriate tools</li>
                <li>• Properly dispose of all experimental materials</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" asChild>
                <Link href="/planner/create?activity=biodegradable-plastics-lab&subject=science&grade=5">
                  Create Lesson Plan
                </Link>
              </Button>
              <Button variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download Lab Protocols
              </Button>
              <Button variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download Assessment Rubric
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/curriculum/grade5-subjects/activities/science/cross-strand-integration/climate-monitoring-network">
            ← Previous: Climate Monitoring Network
          </Link>
        </Button>
        <Button asChild>
          <Link href="/curriculum/grade5-subjects/activities/science/cross-strand-integration">
            Back to Cross-Strand Integration →
          </Link>
        </Button>
      </div>
    </div>
  )
}
