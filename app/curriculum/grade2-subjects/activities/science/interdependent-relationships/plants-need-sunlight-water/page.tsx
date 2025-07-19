"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"
import { ChevronLeft } from "lucide-react"

export default function PlantsNeedSunlightWaterActivity() {
  return (
    <div className="container mx-auto py-8">
            <Link href="/curriculum/grade2-subjects/activities/science/interdependent-relationships">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Interdependent Relationships
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-xl shadow-md mb-8">
            <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600">
              Plants Need Sunlight and Water
            </h1>
            <p className="text-lg text-gray-700 text-center">
              Plan and conduct an investigation to determine if plants need sunlight and water to grow.
            </p>
          </div>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p>
              In this activity, students will plan and conduct an investigation to determine if plants need sunlight and
              water to grow, focusing on testing one variable at a time.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Learning Objectives</h2>
            <ul className="list-disc list-inside">
              <li>Students will be able to identify the basic needs of plants: sunlight and water.</li>
              <li>Students will be able to design and conduct a controlled experiment.</li>
              <li>Students will be able to observe and record plant growth under different conditions.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Materials</h2>
            <ul className="list-disc list-inside">
              <li>Bean seeds</li>
              <li>Small pots</li>
              <li>Potting soil</li>
              <li>Water</li>
              <li>Sunlight source (e.g., windowsill, grow light)</li>
              <li>Rulers</li>
              <li>Observation journals</li>
              <li>Chart paper or whiteboard</li>
              <li>Markers</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Preparation</h2>
            <ul className="list-disc list-inside">
              <li>Gather materials and set up stations for planting and observing.</li>
              <li>Prepare observation journals with prompts for recording plant growth.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Activity Steps</h2>
            <ol className="list-decimal list-inside">
              <li>
                <strong>Introduction (10 minutes):</strong> Discuss the basic needs of plants and the importance of
                sunlight and water.
              </li>
              <li>
                <strong>Planting (20 minutes):</strong> Students plant bean seeds in pots with potting soil.
              </li>
              <li>
                <strong>Experiment (30 minutes):</strong> Students place the pots in different conditions (e.g.,
                sunlight vs. darkness, watered vs. not watered) and observe plant growth over several days.
              </li>
              <li>
                <strong>Observation (10 minutes):</strong> Students record their observations in their journals,
                measuring plant height and noting any changes.
              </li>
              <li>
                <strong>Discussion (10 minutes):</strong> Groups share their findings and discuss the effects of
                sunlight and water on plant growth.
              </li>
            </ol>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Differentiation</h2>
            <ul className="list-disc list-inside">
              <li>
                <strong>Support:</strong> Provide pre-planted pots and simplified observation journals.
              </li>
              <li>
                <strong>Challenge:</strong> Encourage students to investigate the effects of different types of water or
                soil on plant growth.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Assessment</h2>
            <ul className="list-disc list-inside">
              <li>Observe students' participation in the planting and observation activities.</li>
              <li>Review students' observation journals and group findings for accuracy and completeness.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Extension Activities</h2>
            <ul className="list-disc list-inside">
              <li>Research and present on the different types of plants and their specific needs.</li>
              <li>Create a display showcasing the importance of sunlight and water for plant growth.</li>
            </ul>
          </section>
        </div>

        <div className="md:col-span-1">
          <div className="sticky top-4">
            <div className="relative w-full h-48 overflow-hidden rounded-xl mb-4">
              <Image
                src="/placeholder.svg?height=300&width=400&query=plants+needing+sunlight+and+water"
                alt="Plants needing sunlight and water"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-amber-50 p-4 rounded-xl mb-4">
              <h3 className="font-semibold text-lg mb-2">Curriculum Connections</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Science Skills: Observation, Investigation, Data Collection</li>
                <li>Strand: Interdependent Relationships in Ecosystems</li>
                <li>Outcome: Plan and conduct an investigation on plant needs</li>
              </ul>
            </div>

            <div className="bg-amber-50 p-4 rounded-xl mb-4">
              <h3 className="font-semibold text-lg mb-2">Teacher Tips</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Ensure students understand the importance of controlled experiments.</li>
                <li>Provide clear guidelines for measuring and recording plant growth.</li>
                <li>Facilitate discussions on the relationship between plant needs and their environment.</li>
              </ul>
            </div>

            <div className="bg-amber-50 p-4 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Scientific Vocabulary</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Sunlight</li>
                <li>Water</li>
                <li>Growth</li>
                <li>Experiment</li>
                <li>Observation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
