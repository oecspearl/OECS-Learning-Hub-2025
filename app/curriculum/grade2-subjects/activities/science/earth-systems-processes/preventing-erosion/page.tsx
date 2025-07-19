"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"
import { ChevronLeft } from "lucide-react"

export default function PreventingErosionActivity() {
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
              Preventing Wind and Water Erosion
            </h1>
            <p className="text-lg text-gray-700 text-center">
              Compare multiple solutions designed to slow or prevent wind or water from changing the shape of the land.
            </p>
          </div>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p>
              In this activity, students will compare multiple solutions designed to slow or prevent wind or water from
              changing the shape of the land, such as different designs of dikes, windbreaks, and vegetation.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Learning Objectives</h2>
            <ul className="list-disc list-inside">
              <li>Students will be able to explain the processes of wind and water erosion.</li>
              <li>Students will be able to identify different solutions for preventing wind and water erosion.</li>
              <li>Students will be able to compare the effectiveness of different solutions.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Materials</h2>
            <ul className="list-disc list-inside">
              <li>Pictures or videos of wind and water erosion</li>
              <li>Materials for building models (e.g., sand, soil, rocks, plants, cardboard)</li>
              <li>Water source (e.g., watering can, hose)</li>
              <li>Fan</li>
              <li>Chart paper or whiteboard</li>
              <li>Markers</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Preparation</h2>
            <ul className="list-disc list-inside">
              <li>Gather pictures or videos of wind and water erosion.</li>
              <li>Prepare materials for building models.</li>
              <li>Set up stations for testing the effectiveness of different solutions.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Activity Steps</h2>
            <ol className="list-decimal list-inside">
              <li>
                <strong>Introduction (10 minutes):</strong> Discuss the processes of wind and water erosion and their
                impact on the environment.
              </li>
              <li>
                <strong>Observation (20 minutes):</strong> Students observe the pictures or videos of wind and water
                erosion, identifying the causes and effects.
              </li>
              <li>
                <strong>Model Building (30 minutes):</strong> Students build models of different solutions for
                preventing wind and water erosion, such as dikes, windbreaks, and vegetation.
              </li>
              <li>
                <strong>Testing (10 minutes):</strong> Students test the effectiveness of their models using water and a
                fan.
              </li>
              <li>
                <strong>Discussion (10 minutes):</strong> Groups share their findings and discuss the strengths and
                weaknesses of different solutions.
              </li>
            </ol>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Differentiation</h2>
            <ul className="list-disc list-inside">
              <li>
                <strong>Support:</strong> Provide pre-built models and simplified testing procedures.
              </li>
              <li>
                <strong>Challenge:</strong> Encourage students to research and design their own innovative solutions for
                preventing wind and water erosion.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Assessment</h2>
            <ul className="list-disc list-inside">
              <li>Observe students' participation in the model-building and testing activities.</li>
              <li>Review students' models and explanations of the effectiveness of different solutions.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Extension Activities</h2>
            <ul className="list-disc list-inside">
              <li>Research and present on the impact of erosion on specific ecosystems or communities.</li>
              <li>Design and implement a community project to prevent wind or water erosion.</li>
            </ul>
          </section>
        </div>

        <div className="md:col-span-1">
          <div className="sticky top-4">
            <div className="relative w-full h-48 overflow-hidden rounded-xl mb-4">
              <Image
                src="/placeholder.svg?height=300&width=400&query=preventing+wind+and+water+erosion"
                alt="Preventing wind and water erosion"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-blue-50 p-4 rounded-xl mb-4">
              <h3 className="font-semibold text-lg mb-2">Curriculum Connections</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Science Skills: Observation, Modeling, Comparison</li>
                <li>Strand: Earth Systems: Processes That Shape The Earth</li>
                <li>Outcome: Compare solutions to prevent wind and water erosion</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl mb-4">
              <h3 className="font-semibold text-lg mb-2">Teacher Tips</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Provide clear examples of different solutions for preventing erosion.</li>
                <li>Encourage students to test their models in a controlled environment.</li>
                <li>Facilitate discussions on the importance of protecting the environment.</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Scientific Vocabulary</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Erosion</li>
                <li>Weathering</li>
                <li>Windbreak</li>
                <li>Vegetation</li>
                <li>Dike</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
