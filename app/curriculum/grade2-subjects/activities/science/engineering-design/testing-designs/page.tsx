"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"
import { ChevronLeft } from "lucide-react"

export default function TestingDesignsActivity() {
  return (
    <div className="container mx-auto py-8">
            <Link href="/curriculum/grade2-subjects/activities/science/engineering-design">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Engineering Design
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-gradient-to-r from-purple-100 to-violet-100 p-6 rounded-xl shadow-md mb-8">
            <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-600">
              Testing Object Designs
            </h1>
            <p className="text-lg text-gray-700 text-center">
              Analyze data from tests of at least two objects designed to solve the same problem to compare the
              strengths and weaknesses of how each performs.
            </p>
          </div>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p>
              In this activity, students will analyze data from tests of at least two objects designed to solve the same
              problem to compare the strengths and weaknesses of how each performs.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Learning Objectives</h2>
            <ul className="list-disc list-inside">
              <li>Students will be able to design a test to evaluate the performance of an object.</li>
              <li>Students will be able to collect and analyze data from tests.</li>
              <li>Students will be able to compare the strengths and weaknesses of different designs.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Materials</h2>
            <ul className="list-disc list-inside">
              <li>Two or more objects designed to solve the same problem (e.g., different types of paper airplanes)</li>
              <li>Testing equipment (e.g., rulers, weights, timers)</li>
              <li>Data collection sheets</li>
              <li>Chart paper or whiteboard</li>
              <li>Markers</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Preparation</h2>
            <ul className="list-disc list-inside">
              <li>Gather two or more objects designed to solve the same problem.</li>
              <li>Prepare testing equipment and data collection sheets.</li>
              <li>Set up stations for testing the performance of the objects.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Activity Steps</h2>
            <ol className="list-decimal list-inside">
              <li>
                <strong>Introduction (10 minutes):</strong> Discuss the importance of testing and evaluating designs.
              </li>
              <li>
                <strong>Test Design (20 minutes):</strong> Students design a test to evaluate the performance of the
                objects.
              </li>
              <li>
                <strong>Testing (30 minutes):</strong> Students conduct the test, collecting data on the performance of
                each object.
              </li>
              <li>
                <strong>Analysis (10 minutes):</strong> Groups analyze the data to compare the strengths and weaknesses
                of different designs.
              </li>
              <li>
                <strong>Discussion (10 minutes):</strong> Groups share their findings and discuss the factors that
                contribute to the performance of the objects.
              </li>
            </ol>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Differentiation</h2>
            <ul className="list-disc list-inside">
              <li>
                <strong>Support:</strong> Provide pre-designed tests and simplified data collection sheets.
              </li>
              <li>
                <strong>Challenge:</strong> Encourage students to design more complex tests and analyze the data using
                graphs or charts.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Assessment</h2>
            <ul className="list-disc list-inside">
              <li>Observe students' participation in the test design and data collection activities.</li>
              <li>Review students' data analysis and group findings for accuracy and completeness.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Extension Activities</h2>
            <ul className="list-disc list-inside">
              <li>Research and present on the testing and evaluation of different engineering designs.</li>
              <li>Redesign one of the objects to improve its performance based on the test data.</li>
            </ul>
          </section>
        </div>

        <div className="md:col-span-1">
          <div className="sticky top-4">
            <div className="relative w-full h-48 overflow-hidden rounded-xl mb-4">
              <Image
                src="/placeholder.svg?height=300&width=400&query=testing+object+designs"
                alt="Testing object designs"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-purple-50 p-4 rounded-xl mb-4">
              <h3 className="font-semibold text-lg mb-2">Curriculum Connections</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Science Skills: Experimentation, Data Analysis, Comparison</li>
                <li>Strand: Engineering Design</li>
                <li>Outcome: Analyze data from tests to compare design performance</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-xl mb-4">
              <h3 className="font-semibold text-lg mb-2">Teacher Tips</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Provide clear guidelines for designing and conducting tests.</li>
                <li>Encourage students to collect accurate and reliable data.</li>
                <li>Facilitate discussions on the importance of data analysis in engineering design.</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Scientific Vocabulary</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Design</li>
                <li>Test</li>
                <li>Data</li>
                <li>Analysis</li>
                <li>Performance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
