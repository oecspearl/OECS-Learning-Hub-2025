"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"
import { ChevronLeft } from "lucide-react"

export default function FastSlowEventsActivity() {
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
              Fast and Slow Earth Events
            </h1>
            <p className="text-lg text-gray-700 text-center">
              Investigate evidence that Earth events can occur quickly or slowly.
            </p>
          </div>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p>
              In this activity, students will use information from several sources to provide evidence that Earth events
              can occur quickly or slowly, such as volcanic explosions, earthquakes, and erosion of rocks.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Learning Objectives</h2>
            <ul className="list-disc list-inside">
              <li>Students will be able to define fast and slow Earth events.</li>
              <li>
                Students will be able to provide examples of fast Earth events (e.g., volcanic eruptions, earthquakes).
              </li>
              <li>Students will be able to provide examples of slow Earth events (e.g., erosion, weathering).</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Materials</h2>
            <ul className="list-disc list-inside">
              <li>Pictures or videos of fast Earth events (e.g., volcanic eruptions, earthquakes)</li>
              <li>Pictures or videos of slow Earth events (e.g., erosion, weathering)</li>
              <li>Chart paper or whiteboard</li>
              <li>Markers</li>
              <li>Observation sheets</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Preparation</h2>
            <ul className="list-disc list-inside">
              <li>Gather pictures or videos of fast and slow Earth events.</li>
              <li>Prepare observation sheets with prompts for recording observations.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Activity Steps</h2>
            <ol className="list-decimal list-inside">
              <li>
                <strong>Introduction (10 minutes):</strong> Discuss the concept of Earth events and their different
                timescales.
              </li>
              <li>
                <strong>Observation (30 minutes):</strong> Students observe the pictures or videos of fast and slow
                Earth events, recording their observations on the sheets.
              </li>
              <li>
                <strong>Classification (20 minutes):</strong> Students classify the events as fast or slow and discuss
                the evidence supporting their classifications.
              </li>
              <li>
                <strong>Discussion (10 minutes):</strong> Groups share their findings and discuss the impact of Earth
                events on the environment.
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
                <strong>Challenge:</strong> Encourage students to research specific examples of Earth events and their
                impact on the environment.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Assessment</h2>
            <ul className="list-disc list-inside">
              <li>Observe students' participation in the observation and classification activities.</li>
              <li>Review students' observation sheets and group findings for accuracy and completeness.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Extension Activities</h2>
            <ul className="list-disc list-inside">
              <li>Research and present on the causes and effects of specific Earth events.</li>
              <li>Create a timeline showcasing the occurrence of different Earth events throughout history.</li>
            </ul>
          </section>
        </div>

        <div className="md:col-span-1">
          <div className="sticky top-4">
            <div className="relative w-full h-48 overflow-hidden rounded-xl mb-4">
              <Image
                src="/placeholder.svg?height=300&width=400&query=fast+and+slow+earth+events"
                alt="Fast and slow earth events"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-blue-50 p-4 rounded-xl mb-4">
              <h3 className="font-semibold text-lg mb-2">Curriculum Connections</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Science Skills: Observation, Classification, Analysis</li>
                <li>Strand: Earth Systems: Processes That Shape The Earth</li>
                <li>Outcome: Use information to provide evidence of Earth event timescales</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl mb-4">
              <h3 className="font-semibold text-lg mb-2">Teacher Tips</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Provide clear examples of fast and slow Earth events.</li>
                <li>Encourage students to make detailed observations and record their findings.</li>
                <li>Facilitate discussions on the impact of Earth events on the environment and human society.</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Scientific Vocabulary</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Volcano</li>
                <li>Earthquake</li>
                <li>Erosion</li>
                <li>Weathering</li>
                <li>Timescale</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
