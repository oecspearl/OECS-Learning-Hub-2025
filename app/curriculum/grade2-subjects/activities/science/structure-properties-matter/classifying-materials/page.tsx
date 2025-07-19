"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"
import { ChevronLeft } from "lucide-react"

export default function ClassifyingMaterialsActivity() {
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
              Classifying Materials by Properties
            </h1>
            <p className="text-lg text-gray-700 text-center">
              Investigate and classify materials based on observable properties.
            </p>
          </div>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p>
              In this activity, students will plan and conduct an investigation to describe and classify different kinds
              of materials by their observable properties, such as color, texture, hardness, and flexibility.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Learning Objectives</h2>
            <ul className="list-disc list-inside">
              <li>Students will be able to define matter, characteristics, and properties.</li>
              <li>
                Students will be able to identify and describe the three states of matter: solid, liquid, and gas.
              </li>
              <li>Students will be able to classify materials based on their observable properties.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Materials</h2>
            <ul className="list-disc list-inside">
              <li>Variety of materials (e.g., wood, metal, plastic, fabric, paper)</li>
              <li>Magnifying glasses</li>
              <li>Observation cards</li>
              <li>Chart paper or whiteboard</li>
              <li>Markers</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Preparation</h2>
            <ul className="list-disc list-inside">
              <li>Gather a variety of materials with different properties.</li>
              <li>
                Prepare observation cards with prompts for describing properties (e.g., color, texture, hardness).
              </li>
              <li>Set up stations with different materials for students to explore.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Activity Steps</h2>
            <ol className="list-decimal list-inside">
              <li>
                <strong>Introduction (10 minutes):</strong> Discuss the concept of matter and its different states.
              </li>
              <li>
                <strong>Exploration (20 minutes):</strong> Students explore the materials at each station, using
                magnifying glasses and observation cards to describe their properties.
              </li>
              <li>
                <strong>Classification (20 minutes):</strong> Students work in groups to classify the materials based on
                their observable properties.
              </li>
              <li>
                <strong>Discussion (10 minutes):</strong> Groups share their classifications and discuss the properties
                of different materials.
              </li>
            </ol>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Differentiation</h2>
            <ul className="list-disc list-inside">
              <li>
                <strong>Support:</strong> Provide simplified observation cards with fewer prompts.
              </li>
              <li>
                <strong>Challenge:</strong> Encourage students to research additional properties of the materials and
                classify them accordingly.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Assessment</h2>
            <ul className="list-disc list-inside">
              <li>Observe students' participation in the exploration and classification activities.</li>
              <li>Review students' observation cards and group classifications for accuracy and completeness.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Extension Activities</h2>
            <ul className="list-disc list-inside">
              <li>Research and present on the uses of different materials based on their properties.</li>
              <li>Create a display showcasing the different states of matter and their properties.</li>
            </ul>
          </section>
        </div>

        <div className="md:col-span-1">
          <div className="sticky top-4">
            <div className="relative w-full h-48 overflow-hidden rounded-xl mb-4">
              <Image
                src="/different-material-properties.png"
                alt="Materials with different properties"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-green-50 p-4 rounded-xl mb-4">
              <h3 className="font-semibold text-lg mb-2">Curriculum Connections</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Science Skills: Observation, Classification, Investigation</li>
                <li>Strand: Structure and Properties of Matter</li>
                <li>Outcome: Describe and classify different kinds of materials</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-xl mb-4">
              <h3 className="font-semibold text-lg mb-2">Teacher Tips</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Encourage students to use all their senses (except taste) to observe the materials.</li>
                <li>Provide clear guidelines for handling materials safely.</li>
                <li>Facilitate group discussions to promote collaboration and knowledge sharing.</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Scientific Vocabulary</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Matter</li>
                <li>Property</li>
                <li>Texture</li>
                <li>Hardness</li>
                <li>Flexibility</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
