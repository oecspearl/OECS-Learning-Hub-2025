"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, FlaskRoundIcon as Flask, Globe, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"

export default function StructurePropertiesMatterPage() {
  return (
    <div className="container mx-auto py-8">
            <Link href="/curriculum/grade2-subjects/science">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Grade 2 Science
        </Button>
      </Link>

      <div className="w-full min-w-full max-w-[100vw] mb-8">
        <div className="bg-gradient-to-r from-green-100 to-lime-100 p-6 rounded-xl shadow-md">
          <h1 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-lime-600">
            Structure and Properties of Matter Activities
          </h1>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Explore the building blocks of our world with these engaging activities focused on matter, properties, and
            states.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-green-500 hover:-translate-y-1">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-green-700">
              <Flask className="h-5 w-5" />
              Classifying Materials by Properties
            </CardTitle>
            <CardDescription>Investigate and classify materials based on observable properties.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              In this activity, students will plan and conduct an investigation to describe and classify different kinds
              of materials by their observable properties, such as color, texture, hardness, and flexibility.
            </p>
            <Link href="/curriculum/grade2-subjects/activities/science/structure-properties-matter/classifying-materials">
              <Button className="w-full bg-green-600 hover:bg-green-700">Explore Classifying Materials</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-green-500 hover:-translate-y-1">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-green-700">
              <Globe className="h-5 w-5" />
              Testing Materials for Intended Use
            </CardTitle>
            <CardDescription>Analyze data to determine which materials are best suited for a purpose.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Students will analyze data obtained from testing different materials to determine which materials have the
              properties that are best suited for an intended purpose, such as strength, flexibility, hardness, texture,
              and absorbency.
            </p>
            <Link href="/curriculum/grade2-subjects/activities/science/structure-properties-matter/testing-materials">
              <Button className="w-full bg-green-600 hover:bg-green-700">Explore Testing Materials</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-green-500 hover:-translate-y-1">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-green-700">
              <BookOpen className="h-5 w-5" />
              Disassembling and Reassembling Objects
            </CardTitle>
            <CardDescription>Construct an account of how objects can be disassembled and reassembled.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Students will make observations to construct an evidence-based account of how an object made of a small
              set of pieces can be disassembled and made into a new object.
            </p>
            <Link href="/curriculum/grade2-subjects/activities/science/structure-properties-matter/disassembling-reassembling">
              <Button className="w-full bg-green-600 hover:bg-green-700">Explore Disassembling and Reassembling</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-green-500 hover:-translate-y-1">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-green-700">
              <BookOpen className="h-5 w-5" />
              Reversible and Irreversible Changes
            </CardTitle>
            <CardDescription>
              Construct an argument about reversible and irreversible changes caused by heating or cooling.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Students will construct an argument with evidence that some changes caused by heating or cooling can be
              reversed and some cannot, using examples such as water, butter, cooking an egg, and heating paper.
            </p>
            <Link href="/curriculum/grade2-subjects/activities/science/structure-properties-matter/reversible-irreversible-changes">
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Explore Reversible and Irreversible Changes
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl shadow-md border border-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Structure and Properties of Matter Overview</h2>
        <p className="mb-4 text-gray-700">
          This section of the Grade 2 Science curriculum focuses on the structure and properties of matter. It
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
