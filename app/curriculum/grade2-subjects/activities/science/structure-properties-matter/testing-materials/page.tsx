"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"
import { ChevronLeft } from "lucide-react"

export default function TestingMaterialsActivity() {
  return (
    <div className="container mx-auto py-8">
            <Link href="/curriculum/grade2-subjects/activities/science/structure-properties-matter">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Structure and Properties of Matter
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-gradient-to-r from-green-100 to-lime-100 p-6 rounded-xl shadow-md mb-8">
            <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-lime-600">
              Testing Materials for Intended Use
            </h1>
            <p className="text-lg text-gray-700 text-center">
              Analyze data to determine which materials are best suited for an intended purpose.
            </p>
          </div>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p>
              In this activity, students will analyze data obtained from testing different materials to determine which
              materials have the properties that are best suited for an intended purpose, such as strength, flexibility,
              hardness, texture, and absorbency.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Learning Objectives</h2>
            <ul className="list-disc list-inside">
              <li>Students will be able to explain why certain materials are more suitable for specific purposes.</li>
              <li>Students will be able to demonstrate the importance of testing different materials.</li>
              <li>Students will be able to compare the properties of different materials to determine suitability.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Materials</h2>
            <ul className="list-disc list-inside">
              <li>Variety of materials (e.g., wood, metal, plastic, fabric, paper)</li>
              <li>Testing equipment (e.g., weights, rulers, water)</li>
              <li>Data collection sheets</li>
              <li>Chart paper or whiteboard</li>
              <li>Markers</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Preparation</h2>
            <ul className="list-disc list-inside">
              <li>Gather a variety of materials with different properties.</li>
              <li>Prepare testing equipment and data collection sheets.</li>
              <li>Set up stations with different materials for students to test.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Activity Steps</h2>
            <ol className="list-decimal list-inside">
              <li>
                <strong>Introduction (10 minutes):</strong> Discuss the importance of testing materials for their
                intended use.
              </li>
              <li>
                <strong>Testing (30 minutes):</strong> Students test the materials at each station, collecting data on
                their properties.
              </li>
              <li>
                <strong>Analysis (15 minutes):</strong> Students analyze the data to determine which materials are best
                suited for specific purposes.
              </li>
              <li>
                <strong>Discussion (5 minutes):</strong> Groups share their findings and discuss the properties of
                different materials.
              </li>
            </ol>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Differentiation</h2>
            <ul className="list-disc list-inside">
              <li>
                <strong>Support:</strong> Provide simplified data collection sheets with fewer properties to test.
              </li>
              <li>
                <strong>Challenge:</strong> Encourage students to design their own tests to evaluate the materials.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Assessment</h2>
            <ul className="list-disc list-inside">
              <li>Observe students' participation in the testing and analysis activities.</li>
              <li>Review students' data collection sheets and group findings for accuracy and completeness.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Extension Activities</h2>
            <ul className="list-disc list-inside">
              <li>Research and present on the properties of materials used in specific industries.</li>
              <li>Design and build a device that utilizes the properties of different materials.</li>
            </ul>
          </section>
        </div>

        <div className="md:col-span-1">
          <div className="sticky top-4">
            <div className="relative w-full h-48 overflow-hidden rounded-xl mb-4">
              <Image
                src="/placeholder-h06mm.png"
                alt="Testing materials for strength and flexibility"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-green-50 p-4 rounded-xl mb-4">
              <h3 className="font-semibold text-lg mb-2">Curriculum Connections</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Science Skills: Observation, Data Analysis, Investigation</li>
                <li>Strand: Structure and Properties of Matter</li>
                <li>Outcome: Analyze data to determine suitable materials</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-xl mb-4">
              <h3 className="font-semibold text-lg mb-2">Teacher Tips</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Provide clear instructions for each testing procedure.</li>
                <li>Ensure students understand the importance of accurate data collection.</li>
                <li>Facilitate discussions on the relationship between material properties and intended use.</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Scientific Vocabulary</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Strength</li>
                <li>Flexibility</li>
                <li>Hardness</li>
                <li>Texture</li>
                <li>Absorbency</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
