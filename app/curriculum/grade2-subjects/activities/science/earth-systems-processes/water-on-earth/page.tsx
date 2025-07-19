"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"
import { ChevronLeft } from "lucide-react"

export default function WaterOnEarthActivity() {
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
              Water on Earth
            </h1>
            <p className="text-lg text-gray-700 text-center">
              Obtain information to identify where water is found on Earth and that it can be solid or liquid.
            </p>
          </div>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p>
              In this activity, students will obtain information to identify where water is found on Earth and that it
              can be solid or liquid, exploring the different forms and locations of water on our planet.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Learning Objectives</h2>
            <ul className="list-disc list-inside">
              <li>Students will be able to identify different bodies of water on Earth.</li>
              <li>Students will be able to describe the characteristics of water in its solid and liquid forms.</li>
              <li>Students will be able to explain the importance of water for life on Earth.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Materials</h2>
            <ul className="list-disc list-inside">
              <li>Pictures or videos of different bodies of water (e.g., oceans, lakes, rivers, glaciers)</li>
              <li>Ice cubes</li>
              <li>Water samples</li>
              <li>Chart paper or whiteboard</li>
              <li>Markers</li>
              <li>Observation sheets</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Preparation</h2>
            <ul className="list-disc list-inside">
              <li>Gather pictures or videos of different bodies of water.</li>
              <li>Prepare ice cubes and water samples for observation.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Activity Steps</h2>
            <ol className="list-decimal list-inside">
              <li>
                <strong>Introduction (10 minutes):</strong> Discuss the importance of water for life on Earth and the
                different forms it can take.
              </li>
              <li>
                <strong>Observation (30 minutes):</strong> Students observe the pictures or videos of different bodies
                of water, identifying their characteristics and locations.
              </li>
              <li>
                <strong>Exploration (20 minutes):</strong> Students observe ice cubes and water samples, describing
                their properties and comparing their characteristics.
              </li>
              <li>
                <strong>Discussion (10 minutes):</strong> Groups share their findings and discuss the distribution of
                water on Earth and its importance for different ecosystems.
              </li>
            </ol>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Differentiation</h2>
            <ul className="list-disc list-inside">
              <li>
                <strong>Support:</strong> Provide simplified observation sheets with fewer prompts and pre-selected
                images.
              </li>
              <li>
                <strong>Challenge:</strong> Encourage students to research specific examples of water-related issues and
                conservation efforts.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Assessment</h2>
            <ul className="list-disc list-inside">
              <li>Observe students' participation in the observation and exploration activities.</li>
              <li>Review students' observation sheets and group findings for accuracy and completeness.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Extension Activities</h2>
            <ul className="list-disc list-inside">
              <li>
                Research and present on the water cycle and its importance for distributing water around the Earth.
              </li>
              <li>Create a display showcasing the different ways people use water in their daily lives.</li>
            </ul>
          </section>
        </div>

        <div className="md:col-span-1">
          <div className="sticky top-4">
            <div className="relative w-full h-48 overflow-hidden rounded-xl mb-4">
              <Image
                src="/placeholder.svg?height=300&width=400&query=water+on+earth+in+different+forms"
                alt="Water on Earth in different forms"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-blue-50 p-4 rounded-xl mb-4">
              <h3 className="font-semibold text-lg mb-2">Curriculum Connections</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Science Skills: Observation, Exploration, Analysis</li>
                <li>Strand: Earth Systems: Processes That Shape The Earth</li>
                <li>Outcome: Obtain information to identify where water is found</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl mb-4">
              <h3 className="font-semibold text-lg mb-2">Teacher Tips</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Provide a variety of visual aids to illustrate the different forms of water.</li>
                <li>Encourage students to make connections between water and their daily lives.</li>
                <li>Facilitate discussions on the importance of water conservation.</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Scientific Vocabulary</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Ocean</li>
                <li>Lake</li>
                <li>River</li>
                <li>Glacier</li>
                <li>Solid</li>
                <li>Liquid</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
