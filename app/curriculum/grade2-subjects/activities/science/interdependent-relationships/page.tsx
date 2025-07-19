"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FlaskRoundIcon as Flask, Globe, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"

export default function InterdependentRelationshipsPage() {
  return (
    <div className="container mx-auto py-8">
            <Link href="/curriculum/grade2-subjects/science">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Grade 2 Science
        </Button>
      </Link>

      <div className="w-full min-w-full max-w-[100vw] mb-8">
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-xl shadow-md">
          <h1 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600">
            Interdependent Relationships in Ecosystems Activities
          </h1>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Explore the connections in nature with these engaging activities focused on ecosystems, relationships, and
            habitats.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-amber-500 hover:-translate-y-1">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-amber-700">
              <Flask className="h-5 w-5" />
              Plants Need Sunlight and Water
            </CardTitle>
            <CardDescription>Investigate if plants need sunlight and water to grow.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              In this activity, students will plan and conduct an investigation to determine if plants need sunlight and
              water to grow, focusing on testing one variable at a time.
            </p>
            <Link href="/curriculum/grade2-subjects/activities/science/interdependent-relationships/plants-need-sunlight-water">
              <Button className="w-full bg-amber-600 hover:bg-amber-700">Explore Plant Needs</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-amber-500 hover:-translate-y-1">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-amber-700">
              <Globe className="h-5 w-5" />
              Animal Seed Dispersal and Pollination
            </CardTitle>
            <CardDescription>Develop a model that mimics animal functions in ecosystems.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Students will develop a simple model that mimics the function of an animal in dispersing seeds or
              pollinating plants, and make observations of plants and animals to compare the diversity of life in
              different habitats.
            </p>
            <Link href="/curriculum/grade2-subjects/activities/science/interdependent-relationships/animal-seed-pollination">
              <Button className="w-full bg-amber-600 hover:bg-amber-700">Explore Animal Roles</Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl shadow-md border border-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Interdependent Relationships Overview</h2>
        <p className="mb-4 text-gray-700">
          This section of the Grade 2 Science curriculum focuses on interdependent relationships in ecosystems. It
          encourages students to explore the natural world through inquiry-based learning, investigating life cycles,
          materials, forces, and environmental changes while developing scientific thinking skills.
        </p>
        <p className="text-gray-700">
          Teachers are encouraged to integrate learning across subject areas where appropriate, creating meaningful
          connections for students. Assessment is ongoing and designed to support student growth and development.
        </p>
      </div>
    </div>
  )
}
