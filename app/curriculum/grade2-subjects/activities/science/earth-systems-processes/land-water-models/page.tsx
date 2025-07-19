"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"
import { ChevronLeft } from "lucide-react"

export default function LandWaterModelsActivity() {
  return (
    <div className="container mx-auto py-8">
            <Link href="/curriculum/grade2-subjects/activities/science/earth-systems-processes">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Earth Systems Processes
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-gradient-to-r from-blue-100 to-teal-100 p-6 rounded-xl shadow-md mb-8">
            <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
              Land and Water Models
            </h1>
            <p className="text-lg text-gray-700 text-center">
              Develop a model to represent the shapes and kinds of land and bodies of water in an area.
            </p>
          </div>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p>
              In this activity, students will develop a model to represent the shapes and kinds of land and bodies of
              water in an area, focusing on understanding the different features and their characteristics.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Learning Objectives</h2>
            <ul className="list-disc list-inside">
              <li>Students will be able to identify different landforms and bodies of water.</li>
              <li>Students will be able to describe the characteristics of different landforms and bodies of water.</li>
              <li>Students will be able to construct a model representing the shapes and kinds of land and water.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Materials</h2>
            <ul className="list-disc list-inside">
              <li>Modeling clay or playdough</li>
              <li>Sand</li>
              <li>Water</li>
              <li>Small containers</li>
              <li>Chart paper or whiteboard</li>
              <li>Markers</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Preparation</h2>
            <ul className="list-disc list-inside">
              <li>Gather materials and set up stations for building models.</li>
              <li>Prepare examples of different landforms and bodies of water for students to observe.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Activity Steps</h2>
            <ol className="list-decimal list-inside">
              <li>
                <strong>Introduction (10 minutes):</strong> Discuss the different types of landforms and bodies of water
                and their characteristics.
              </li>
              <li>
                <strong>Model Building (40 minutes):</strong> Students use modeling clay, sand, and water to construct
                models representing the shapes and kinds of land and water in an area.
              </li>
              <li>
                <strong>Presentation (10 minutes):</strong> Groups present their models and describe the different
                features they have included.
              </li>
              <li>
                <strong>Discussion (10 minutes):</strong> Discuss the importance of understanding landforms and bodies
                of water in the environment.
              </li>
            </ol>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Differentiation</h2>
            <ul className="list-disc list-inside">
              <li>
                <strong>Support:</strong> Provide pre-made models and simplified instructions for building.
              </li>
              <li>
                <strong>Challenge:</strong> Encourage students to research specific landforms and bodies of water and
                create more detailed models.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Assessment</h2>
            <ul className="list-disc list-inside">
              <li>Observe students' participation in the model-building activities.</li>
              <li>Review students' models and explanations of the different features.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Extension Activities</h2>
            <ul className="list-disc list-inside">
              <li>Research and present on the formation of different landforms and bodies of water.</li>
              <li>Create a map showcasing the different landforms and bodies of water in a specific region.</li>
            </ul>
          </section>
        </div>

        <div className="md:col-span-1">
          <div className="sticky top-4">
            <div className="relative w-full h-48 overflow-hidden rounded-xl mb-4">
              <Image
                src="/placeholder.svg?height=300&width=400&query=land+and+water+models"
                alt="Land and water models"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-blue-50 p-4 rounded-xl mb-4">
              <h3 className="font-semibold text-lg mb-2">Curriculum Connections</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Science Skills: Observation, Modeling, Representation</li>
                <li>Strand: Earth Systems: Processes That Shape The Earth</li>
                <li>Outcome: Develop a model of land and water shapes</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl mb-4">
              <h3 className="font-semibold text-lg mb-2">Teacher Tips</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Provide a variety of materials for students to use in their models.</li>
                <li>Encourage creativity and allow for different interpretations.</li>
                <li>Facilitate discussions on the importance of understanding the Earth's surface.</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Scientific Vocabulary</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Landform</li>
                <li>Ocean</li>
                <li>River</li>
                <li>Lake</li>
                <li>Model</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
