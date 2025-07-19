"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"
import { Clock, Users, Target, CheckCircle, Zap, Lightbulb, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function RenewableEnergyIslandPage() {
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
            label: "Renewable Energy Island",
            href: "/curriculum/grade5-subjects/activities/science/cross-strand-integration/renewable-energy-island",
          },
        ]}
      />

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-yellow-100 rounded-lg">
            <Zap className="h-6 w-6 text-yellow-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Sustainable Island Energy Grid</h1>
            <p className="text-gray-600">
              Design renewable energy systems for Caribbean islands using multiple sources
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <Badge className="bg-blue-100 text-blue-800">Earth Systems</Badge>
          <Badge className="bg-orange-100 text-orange-800">Engineering Design</Badge>
          <Badge className="bg-purple-100 text-purple-800">Structure & Properties of Matter</Badge>
          <Badge variant="secondary">Advanced Level</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/renewable-energy-island.png"
                  alt="Students designing renewable energy systems for Caribbean islands"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-700 mb-4">
                Students become energy engineers, designing comprehensive renewable energy systems for Caribbean
                islands. This project integrates meteorology, materials science, and electrical engineering to address
                energy independence and sustainability challenges faced by island nations.
              </p>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span>4-5 weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-500" />
                  <span>3-4 students</span>
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
                  <span>Analyze renewable energy sources available in Caribbean climate and geography</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Understand energy storage and distribution systems for island grids</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Design integrated energy systems combining multiple renewable sources</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Study material properties for energy generation and storage applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Present energy solutions to local utility officials and policymakers</span>
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
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Week 1: Energy Assessment and Research</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Research Caribbean energy challenges and current infrastructure</li>
                    <li>• Study renewable energy resources (solar, wind, wave, geothermal)</li>
                    <li>• Analyze weather patterns and energy potential</li>
                    <li>• Investigate energy storage technologies</li>
                    <li>• Interview local utility company representatives</li>
                  </ul>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Week 2: Energy Source Testing</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Test efficiency of small solar panels under different conditions</li>
                    <li>• Build and test wind turbines with various blade designs</li>
                    <li>• Measure energy output throughout different times of day</li>
                    <li>• Compare energy storage in different battery types</li>
                    <li>• Document performance data in engineering logs</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Week 3: Integrated System Design</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Design hybrid energy systems combining multiple sources</li>
                    <li>• Build scale model of island energy grid</li>
                    <li>• Create energy distribution networks</li>
                    <li>• Test system reliability and backup capabilities</li>
                    <li>• Optimize energy flow and storage management</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Week 4: Economic and Environmental Analysis</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Calculate cost-benefit analysis of renewable vs. fossil fuels</li>
                    <li>• Analyze environmental impact and carbon footprint reduction</li>
                    <li>• Study material lifecycle and recycling considerations</li>
                    <li>• Create implementation timeline for real island</li>
                    <li>• Develop maintenance and upgrade strategies</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Week 5: Policy Presentation</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Prepare comprehensive energy transition proposals</li>
                    <li>• Create visual presentations with data and projections</li>
                    <li>• Present to local energy officials and policymakers</li>
                    <li>• Receive feedback and refine recommendations</li>
                    <li>• Share findings with community stakeholders</li>
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
                  <h4 className="font-semibold text-gray-900 mb-2">System Design (30%)</h4>
                  <p className="text-sm text-gray-600">
                    Comprehensive energy system design with technical specifications and integration plan
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Efficiency Testing (25%)</h4>
                  <p className="text-sm text-gray-600">
                    Data collection and analysis from renewable energy source testing
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cost-Benefit Analysis (25%)</h4>
                  <p className="text-sm text-gray-600">
                    Economic and environmental impact analysis with supporting calculations
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Policy Presentation (20%)</h4>
                  <p className="text-sm text-gray-600">
                    Clear communication of energy solutions to officials and stakeholders
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Required Materials</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Energy Generation</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Small solar panels (various sizes)</li>
                    <li>• Wind turbine kits or materials</li>
                    <li>• DC motors for generators</li>
                    <li>• LED lights for testing</li>
                    <li>• Rechargeable batteries</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Measurement Tools</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Digital multimeters</li>
                    <li>• Voltmeters and ammeters</li>
                    <li>• Light meters</li>
                    <li>• Anemometers (wind speed)</li>
                    <li>• Data logging equipment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Construction Materials</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Building materials for island model</li>
                    <li>• Electrical wire and connectors</li>
                    <li>• Switches and circuit components</li>
                    <li>• Mounting hardware</li>
                    <li>• Weather data and island maps</li>
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
                  <span className="text-sm">Partner with local utility companies for real-world insights</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <span className="text-sm">Create energy conservation campaigns for schools</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <span className="text-sm">Design smart grid technologies and monitoring systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <span className="text-sm">Connect with renewable energy companies</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Caribbean Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Address hurricane resilience in energy systems</li>
                <li>• Study trade wind patterns for wind energy</li>
                <li>• Investigate geothermal potential in volcanic islands</li>
                <li>• Consider tourism energy demands</li>
                <li>• Explore wave energy from ocean currents</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" asChild>
                <Link href="/planner/create?activity=renewable-energy-island&subject=science&grade=5">
                  Create Lesson Plan
                </Link>
              </Button>
              <Button variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download Testing Protocols
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
          <Link href="/curriculum/grade5-subjects/activities/science/cross-strand-integration/space-agriculture-mission">
            ← Previous: Space Agriculture Mission
          </Link>
        </Button>
        <Button asChild>
          <Link href="/curriculum/grade5-subjects/activities/science/cross-strand-integration/climate-monitoring-network">
            Next Project: Climate Monitoring →
          </Link>
        </Button>
      </div>
    </div>
  )
}
