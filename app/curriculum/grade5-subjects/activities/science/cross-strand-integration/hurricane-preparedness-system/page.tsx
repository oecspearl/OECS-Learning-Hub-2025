"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"
import { Clock, Users, Target, CheckCircle, AlertTriangle, Lightbulb, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HurricanePreparednessSystemPage() {
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
            label: "Hurricane Preparedness System",
            href: "/curriculum/grade5-subjects/activities/science/cross-strand-integration/hurricane-preparedness-system",
          },
        ]}
      />

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-orange-100 rounded-lg">
            <AlertTriangle className="h-6 w-6 text-orange-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Hurricane Preparedness Engineering Challenge</h1>
            <p className="text-gray-600">
              Design hurricane-resistant structures while studying weather patterns and materials
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <Badge className="bg-blue-100 text-blue-800">Earth Systems</Badge>
          <Badge className="bg-green-100 text-green-800">Engineering Design</Badge>
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
                  src="/hurricane-engineering-challenge.png"
                  alt="Students building hurricane-resistant structures"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-700 mb-4">
                Students become disaster preparedness engineers, designing and building hurricane-resistant structures
                while investigating the science behind these powerful storms. This project integrates meteorology,
                materials science, and engineering design to address real Caribbean challenges.
              </p>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span>3-4 weeks</span>
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
                  <span>
                    Analyze hurricane formation and Earth system interactions including atmospheric pressure,
                    temperature, and ocean currents
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Test material properties for wind and water resistance using scientific methods</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Design and iterate structural solutions using engineering design process</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Understand energy transfer in weather systems and structural engineering</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Communicate engineering solutions to community stakeholders</span>
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
                  <h4 className="font-semibold text-gray-900">Week 1: Hurricane Science Investigation</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Research Caribbean hurricane patterns and historical impacts</li>
                    <li>• Study atmospheric conditions that create hurricanes</li>
                    <li>• Analyze satellite imagery and weather data</li>
                    <li>• Create hurricane formation diagrams</li>
                    <li>• Interview local emergency management officials (virtual or in-person)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Week 2: Materials Testing Laboratory</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Test various building materials for strength and flexibility</li>
                    <li>• Investigate water resistance properties</li>
                    <li>• Measure wind resistance using fans and force meters</li>
                    <li>• Document material properties in engineering notebooks</li>
                    <li>• Select optimal materials for hurricane conditions</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Week 3: Design and Build Phase</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Apply engineering design process to create hurricane-resistant structures</li>
                    <li>• Build scale models of houses, schools, or community centers</li>
                    <li>• Incorporate features like storm shutters, reinforced roofs, elevated foundations</li>
                    <li>• Test prototypes and iterate designs based on results</li>
                    <li>• Document design decisions and improvements</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Week 4: Testing and Community Presentation</h4>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Simulate hurricane conditions using fans, water, and debris</li>
                    <li>• Measure structural performance under extreme conditions</li>
                    <li>• Analyze energy transfer and structural failure points</li>
                    <li>• Prepare presentations for community panel</li>
                    <li>• Present solutions and recommendations to local officials</li>
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
                  <h4 className="font-semibold text-gray-900 mb-2">Design Portfolio (40%)</h4>
                  <p className="text-sm text-gray-600">
                    Engineering notebooks documenting research, material testing, design iterations, and reflections
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Prototype Testing (30%)</h4>
                  <p className="text-sm text-gray-600">
                    Quantitative results from hurricane simulation tests and analysis of structural performance
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Community Presentation (20%)</h4>
                  <p className="text-sm text-gray-600">
                    Clear communication of solutions to community panel including emergency managers
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Collaboration and Process (10%)</h4>
                  <p className="text-sm text-gray-600">
                    Teamwork, problem-solving approach, and use of engineering design process
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
                  <h4 className="font-semibold text-gray-900 mb-2">Building Materials</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Cardboard sheets and boxes</li>
                    <li>• Wooden craft sticks</li>
                    <li>• Plastic straws and connectors</li>
                    <li>• Duct tape and masking tape</li>
                    <li>• String and rubber bands</li>
                    <li>• Aluminum foil</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Testing Equipment</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Large fan for wind simulation</li>
                    <li>• Spray bottles for rain simulation</li>
                    <li>• Small weights for debris testing</li>
                    <li>• Measuring tools (rulers, scales)</li>
                    <li>• Stopwatch</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Research Tools</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Access to weather websites</li>
                    <li>• Hurricane tracking maps</li>
                    <li>• Engineering notebooks</li>
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
                  <span className="text-sm">Partner with local emergency management to present findings</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <span className="text-sm">Create community preparedness guide based on research</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <span className="text-sm">Design early warning systems for schools</span>
                </li>
                <li className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <span className="text-sm">Connect with meteorologists for expert interviews</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Safety Considerations</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Supervise all cutting and building activities</li>
                <li>• Ensure proper ventilation when using fans</li>
                <li>• Use safety goggles during testing phases</li>
                <li>• Keep electrical equipment away from water</li>
                <li>• Establish clear workspace boundaries</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" asChild>
                <Link href="/planner/create?activity=hurricane-preparedness-system&subject=science&grade=5">
                  Create Lesson Plan
                </Link>
              </Button>
              <Button variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download Materials List
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
          <Link href="/curriculum/grade5-subjects/activities/science/cross-strand-integration">
            ← Back to Cross-Strand Integration
          </Link>
        </Button>
        <Button asChild>
          <Link href="/curriculum/grade5-subjects/activities/science/cross-strand-integration/coral-reef-restoration-lab">
            Next Project: Coral Reef Restoration →
          </Link>
        </Button>
      </div>
    </div>
  )
}
