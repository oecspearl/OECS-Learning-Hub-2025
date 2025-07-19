"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"
import { Clock, Users, Target, CheckCircle, Cloud, Lightbulb, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ClimateMonitoringNetworkPage() {
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
            label: "Climate Monitoring Network",
            href: "/curriculum/grade5-subjects/activities/science/cross-strand-integration/climate-monitoring-network",
          },
        ]}
      />

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Cloud className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Caribbean Climate Monitoring Network</h1>
            <p className="text-gray-600">
              Build weather monitoring stations and analyze climate patterns using space and Earth data
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <Badge className="bg-blue-100 text-blue-800">Earth Systems</Badge>
          <Badge className="bg-purple-100 text-purple-800">Space Systems</Badge>
          <Badge className="bg-orange-100 text-orange-800">Engineering Design</Badge>
          <Badge variant="secondary">Expert Level</Badge>
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
                  src="/climate-monitoring-network.png"
                  alt="Students building weather monitoring stations and analyzing climate data"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-700 mb-4">
                Students become climate scientists, building automated weather monitoring stations and analyzing
                long-term climate patterns using both ground-based observations and satellite data. This expert-level
                project integrates meteorology, space science, and data analysis to understand Caribbean climate change.
              </p>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span>5-6 weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-500" />
                  <span>2-4 students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-gray-500" />
                  <span>Expert</span>
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
                  <span>Understand climate vs. weather patterns and long-term atmospheric changes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Analyze satellite data and ground observations for climate research</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Design automated monitoring systems with data logging capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Study long-term climate trends and their impacts on Caribbean regions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Present climate findings to meteorologists and climate scientists</span>
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
                  <h4 className="font-semibold text-gray-900">Week 1-2: Climate Science Foundation</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Study Caribbean climate patterns and seasonal variations</li>
                    <li>• Research climate change impacts on island nations</li>
                    <li>• Learn to interpret satellite imagery and weather maps</li>
                    <li>• Analyze historical climate data and trends</li>
                    <li>• Interview local meteorologists and climate researchers</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Week 3: Monitoring Station Construction</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Build automated weather monitoring stations</li>
                    <li>• Install sensors for temperature, humidity, pressure, rainfall</li>
                    <li>• Set up data logging systems and wireless transmission</li>
                    <li>• Create weatherproof housing for equipment</li>
                    <li>• Test and calibrate all monitoring equipment</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Week 4: Data Collection and Analysis</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Collect continuous weather data from monitoring stations</li>
                    <li>• Compare ground observations with satellite data</li>
                    <li>• Create graphs and charts showing weather patterns</li>
                    <li>• Analyze data quality and identify measurement errors</li>
                    <li>• Study correlations between different weather variables</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Week 5: Climate Trend Analysis</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Compare current data with historical climate records</li>
                    <li>• Identify long-term trends and anomalies</li>
                    <li>• Study extreme weather events and their frequency</li>
                    <li>• Analyze seasonal patterns and climate cycles</li>
                    <li>• Create climate trend reports with projections</li>
                  </ul>
                </div>

                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Week 6: Expert Presentation</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Prepare comprehensive climate assessment reports</li>
                    <li>• Create visual presentations with data visualizations</li>
                    <li>• Present findings to meteorologists and climate scientists</li>
                    <li>• Discuss implications for Caribbean communities</li>
                    <li>• Share data with national weather services</li>
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
                  <h4 className="font-semibold text-gray-900 mb-2">Data Collection System (30%)</h4>
                  <p className="text-sm text-gray-600">
                    Functional weather monitoring station with accurate data logging capabilities
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Trend Analysis (30%)</h4>
                  <p className="text-sm text-gray-600">
                    Statistical analysis of climate trends with supporting graphs and interpretations
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Scientific Report (25%)</h4>
                  <p className="text-sm text-gray-600">
                    Comprehensive climate assessment with methodology, results, and conclusions
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Expert Presentation (15%)</h4>
                  <p className="text-sm text-gray-600">
                    Clear communication of climate findings to professional meteorologists
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Required Equipment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Weather Sensors</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Digital temperature/humidity sensors</li>
                    <li>• Barometric pressure sensors</li>
                    <li>• Rain gauge with tipping bucket</li>
                    <li>• Wind speed and direction sensors</li>
                    <li>• UV and light intensity meters</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Data Systems</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Microcontrollers or data loggers</li>
                    <li>• SD cards for data storage</li>
                    <li>• Wireless transmission modules</li>
                    <li>• Solar panels and batteries</li>
                    <li>• Weatherproof enclosures</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Analysis Tools</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Computers with spreadsheet software</li>
                    <li>• Access to satellite imagery websites</li>
                    <li>• Graphing and statistical software</li>
                    <li>• Historical weather databases</li>
                    <li>• Scientific calculators</li>
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
                  <span className="text-sm">Connect with national weather services for data sharing</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <span className="text-sm">Create climate change awareness materials for communities</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <span className="text-sm">Design early warning systems for extreme weather</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <span className="text-sm">Partner with university climate research programs</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Caribbean Climate Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Study hurricane season patterns and intensity changes</li>
                <li>• Monitor sea level rise impacts on coastal areas</li>
                <li>• Track temperature changes affecting coral reefs</li>
                <li>• Analyze rainfall patterns and drought cycles</li>
                <li>• Investigate trade wind pattern changes</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" asChild>
                <Link href="/planner/create?activity=climate-monitoring-network&subject=science&grade=5">
                  Create Lesson Plan
                </Link>
              </Button>
              <Button variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download Setup Guide
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
          <Link href="/curriculum/grade5-subjects/activities/science/cross-strand-integration/renewable-energy-island">
            ← Previous: Renewable Energy Island
          </Link>
        </Button>
        <Button asChild>
          <Link href="/curriculum/grade5-subjects/activities/science/cross-strand-integration/biodegradable-plastics-lab">
            Next Project: Biodegradable Plastics →
          </Link>
        </Button>
      </div>
    </div>
  )
}
