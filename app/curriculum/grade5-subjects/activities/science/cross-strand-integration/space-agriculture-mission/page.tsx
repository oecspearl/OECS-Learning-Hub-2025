"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"
import { Clock, Users, Target, CheckCircle, Rocket, Lightbulb, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SpaceAgricultureMissionPage() {
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
            label: "Space Agriculture Mission",
            href: "/curriculum/grade5-subjects/activities/science/cross-strand-integration/space-agriculture-mission",
          },
        ]}
      />

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Rocket className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Caribbean Space Agriculture Mission</h1>
            <p className="text-gray-600">Design sustainable food systems for space missions using Caribbean crops</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <Badge className="bg-purple-100 text-purple-800">Space Systems</Badge>
          <Badge className="bg-green-100 text-green-800">Matter & Energy in Ecosystems</Badge>
          <Badge className="bg-orange-100 text-orange-800">Engineering Design</Badge>
          <Badge variant="secondary">Advanced Level</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Mission Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/space-agriculture-mission.png"
                  alt="Students designing space agriculture systems with Caribbean crops"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-700 mb-4">
                Students become space agriculture engineers, designing sustainable food production systems for
                long-duration space missions using traditional Caribbean crops. This project integrates space science,
                plant biology, and engineering to solve real challenges faced by space agencies while celebrating
                Caribbean agricultural heritage.
              </p>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span>3-4 weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-500" />
                  <span>4-5 students</span>
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
              <CardTitle>Mission Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Understand plant growth requirements and photosynthesis in controlled environments</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Analyze solar energy patterns and efficiency for space applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Design closed-loop agricultural systems with minimal waste</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Study space environment challenges including microgravity and radiation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Present mission proposals to space agency representatives</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Week-by-Week Mission Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Week 1: Space Agriculture Research</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Research current space agriculture projects (ISS, Mars missions)</li>
                    <li>• Study Caribbean crops suitable for space cultivation</li>
                    <li>• Investigate space environment challenges for plant growth</li>
                    <li>• Analyze nutritional requirements for space travelers</li>
                    <li>• Interview space agriculture researchers (virtual)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Week 2: Plant Growth Experiments</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Test Caribbean crop seeds under different light conditions</li>
                    <li>• Compare LED vs. natural sunlight for plant growth</li>
                    <li>• Measure photosynthesis rates and oxygen production</li>
                    <li>• Monitor water and nutrient uptake</li>
                    <li>• Document growth data in mission logs</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Week 3: Solar-Powered Growing Systems</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Design hydroponic systems powered by solar panels</li>
                    <li>• Build automated watering and lighting systems</li>
                    <li>• Create closed-loop nutrient recycling systems</li>
                    <li>• Test energy efficiency and crop yields</li>
                    <li>• Optimize systems based on performance data</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Week 4: Mission Proposal and Presentation</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Compile growth data and system performance results</li>
                    <li>• Create comprehensive mission proposals</li>
                    <li>• Design mission timelines and resource requirements</li>
                    <li>• Prepare presentations for space agency panel</li>
                    <li>• Present findings and receive expert feedback</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Assessment Mission Control</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Mission Proposal (35%)</h4>
                  <p className="text-sm text-gray-600">
                    Comprehensive proposal including system design, crop selection, and mission timeline
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">System Design and Testing (30%)</h4>
                  <p className="text-sm text-gray-600">
                    Functional growing system with solar power and data on crop performance
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Growth Data Analysis (20%)</h4>
                  <p className="text-sm text-gray-600">
                    Scientific analysis of plant growth under different conditions with graphs and conclusions
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Space Agency Presentation (15%)</h4>
                  <p className="text-sm text-gray-600">Clear communication of mission proposal to expert panel</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Mission Equipment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Caribbean Crop Seeds</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Black beans and pigeon peas</li>
                    <li>• Hot peppers and sweet peppers</li>
                    <li>• Herbs (basil, cilantro, thyme)</li>
                    <li>• Leafy greens (callaloo, lettuce)</li>
                    <li>• Cherry tomatoes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Growing Systems</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• LED grow lights (full spectrum)</li>
                    <li>• Small solar panels</li>
                    <li>• Hydroponic containers and tubes</li>
                    <li>• Water pumps and timers</li>
                    <li>• pH and nutrient testing kits</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Measurement Tools</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Digital scales for harvest weights</li>
                    <li>• Rulers and measuring tapes</li>
                    <li>• Light meters</li>
                    <li>• Thermometers</li>
                    <li>• Mission log notebooks</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mission Extensions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <span className="text-sm">Connect with NASA or ESA space agriculture programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <span className="text-sm">Design complete life support systems for space stations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <span className="text-sm">Create space nutrition meal plans using grown crops</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <span className="text-sm">Partner with university aerospace programs</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Caribbean Heritage</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Celebrate traditional Caribbean crops in space</li>
                <li>• Research indigenous agricultural practices</li>
                <li>• Study nutritional benefits of Caribbean foods</li>
                <li>• Connect with local farmers and agricultural experts</li>
                <li>• Explore cultural significance of selected crops</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mission Control</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" asChild>
                <Link href="/planner/create?activity=space-agriculture-mission&subject=science&grade=5">
                  Create Mission Plan
                </Link>
              </Button>
              <Button variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download Growing Protocols
              </Button>
              <Button variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download Mission Rubric
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/curriculum/grade5-subjects/activities/science/cross-strand-integration/coral-reef-restoration-lab">
            ← Previous: Coral Reef Restoration
          </Link>
        </Button>
        <Button asChild>
          <Link href="/curriculum/grade5-subjects/activities/science/cross-strand-integration/renewable-energy-island">
            Next Project: Renewable Energy Island →
          </Link>
        </Button>
      </div>
    </div>
  )
}
