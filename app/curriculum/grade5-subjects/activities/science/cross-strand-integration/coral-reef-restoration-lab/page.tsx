"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"
import { Clock, Users, Target, CheckCircle, Fish, Lightbulb, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CoralReefRestorationLabPage() {
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
            label: "Coral Reef Restoration Lab",
            href: "/curriculum/grade5-subjects/activities/science/cross-strand-integration/coral-reef-restoration-lab",
          },
        ]}
      />

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Fish className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Coral Reef Restoration Laboratory</h1>
            <p className="text-gray-600">
              Investigate coral bleaching and design restoration solutions for Caribbean reefs
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <Badge className="bg-green-100 text-green-800">Matter & Energy in Ecosystems</Badge>
          <Badge className="bg-purple-100 text-purple-800">Structure & Properties of Matter</Badge>
          <Badge className="bg-orange-100 text-orange-800">Engineering Design</Badge>
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
                  src="/coral-reef-restoration.png"
                  alt="Students studying coral reef models and restoration techniques"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-700 mb-4">
                Students become marine conservation scientists, investigating the complex relationships within coral
                reef ecosystems and designing innovative solutions to combat coral bleaching. This project combines
                marine biology, chemistry, and engineering to address one of the Caribbean's most pressing environmental
                challenges.
              </p>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span>4-5 weeks</span>
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
                  <span>Understand coral-algae symbiotic relationships and their role in reef ecosystems</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>
                    Investigate chemical properties affecting coral health including pH, temperature, and nutrients
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Design artificial reef structures using engineering principles</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Analyze energy flow and nutrient cycling in reef ecosystems</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Communicate conservation strategies to marine biology experts</span>
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
                  <h4 className="font-semibold text-gray-900">Week 1: Coral Biology and Ecosystem Study</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Research coral anatomy and zooxanthellae symbiosis</li>
                    <li>• Study Caribbean reef species and their roles</li>
                    <li>• Investigate coral bleaching causes and effects</li>
                    <li>• Create detailed ecosystem food webs</li>
                    <li>• Interview marine biologists (virtual or in-person)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Week 2: Water Chemistry Laboratory</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Test pH levels and their effects on coral models</li>
                    <li>• Investigate temperature stress on coral health</li>
                    <li>• Measure nutrient levels and pollution impacts</li>
                    <li>• Create controlled experiments with different water conditions</li>
                    <li>• Document chemical effects in laboratory notebooks</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Week 3: Artificial Reef Design</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Research existing artificial reef technologies</li>
                    <li>• Design reef structures that promote coral growth</li>
                    <li>• Build scale models using sustainable materials</li>
                    <li>• Test structural stability and water flow</li>
                    <li>• Optimize designs based on testing results</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Week 4: Ecosystem Modeling</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Create energy flow diagrams for healthy vs. bleached reefs</li>
                    <li>• Model nutrient cycling in reef ecosystems</li>
                    <li>• Simulate restoration scenarios and outcomes</li>
                    <li>• Analyze cost-benefit of different restoration approaches</li>
                    <li>• Develop comprehensive restoration action plan</li>
                  </ul>
                </div>

                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Week 5: Expert Presentation and Peer Review</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Prepare scientific reports with data and recommendations</li>
                    <li>• Create visual presentations for marine biologists</li>
                    <li>• Present findings to expert panel</li>
                    <li>• Receive feedback and refine proposals</li>
                    <li>• Share results with local conservation organizations</li>
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
                  <h4 className="font-semibold text-gray-900 mb-2">Scientific Report (35%)</h4>
                  <p className="text-sm text-gray-600">
                    Comprehensive research report including literature review, experimental data, and restoration
                    recommendations
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Prototype Design (25%)</h4>
                  <p className="text-sm text-gray-600">
                    Artificial reef design with engineering specifications and testing results
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Ecosystem Model (20%)</h4>
                  <p className="text-sm text-gray-600">
                    Accurate representation of energy flow and nutrient cycling in reef systems
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Expert Presentation (20%)</h4>
                  <p className="text-sm text-gray-600">
                    Clear communication of findings and recommendations to marine biology experts
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
                  <h4 className="font-semibold text-gray-900 mb-2">Laboratory Equipment</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• pH testing kits and strips</li>
                    <li>• Digital thermometers</li>
                    <li>• Microscopes and slides</li>
                    <li>• Measuring cylinders and beakers</li>
                    <li>• Nutrient testing kits</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Modeling Materials</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Modeling clay and plasticine</li>
                    <li>• Aquarium gravel and sand</li>
                    <li>• Clear containers for reef models</li>
                    <li>• Artificial coral pieces</li>
                    <li>• Food coloring for water testing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Research Resources</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Access to marine biology databases</li>
                    <li>• Caribbean reef field guides</li>
                    <li>• Scientific journals on coral bleaching</li>
                    <li>• Laboratory notebooks</li>
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
                  <span className="text-sm">Partner with local marine conservation groups for field trips</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <span className="text-sm">Create public awareness campaign about coral conservation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <span className="text-sm">Design underwater monitoring systems for reef health</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <span className="text-sm">Connect with university marine science programs</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Caribbean Context</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Focus on Caribbean coral species and threats</li>
                <li>• Study local reef conservation efforts</li>
                <li>• Investigate tourism impacts on reefs</li>
                <li>• Connect with regional marine parks</li>
                <li>• Address climate change effects on Caribbean waters</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" asChild>
                <Link href="/planner/create?activity=coral-reef-restoration-lab&subject=science&grade=5">
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
          <Link href="/curriculum/grade5-subjects/activities/science/cross-strand-integration/hurricane-preparedness-system">
            ← Previous: Hurricane Preparedness
          </Link>
        </Button>
        <Button asChild>
          <Link href="/curriculum/grade5-subjects/activities/science/cross-strand-integration/space-agriculture-mission">
            Next Project: Space Agriculture →
          </Link>
        </Button>
      </div>
    </div>
  )
}
