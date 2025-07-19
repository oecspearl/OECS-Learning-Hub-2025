"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"
import { ChevronLeft } from "lucide-react"

export default function AnimalSeedPollinationActivity() {
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
              Animal Seed Dispersal and Pollination
            </h1>
            <p className="text-lg text-gray-700 text-center">
              Develop a model that mimics the function of an animal in dispersing seeds or pollinating plants.
            </p>
          </div>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p>
              In this activity, students will develop a simple model that mimics the function of an animal in dispersing
              seeds or pollinating plants, and make observations of plants and animals to compare the diversity of life
              in different habitats.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Learning Objectives</h2>
            <ul className="list-disc list-inside">
              <li>Students will be able to explain the processes of seed dispersal and pollination.</li>
              <li>Students will be able to identify the roles of animals in seed dispersal and pollination.</li>
              <li>Students will be able to compare the diversity of life in different habitats.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Materials</h2>
            <ul className="list-disc list-inside">
              <li>Various seeds and fruits</li>
              <li>Pictures of animals and plants in different habitats</li>
              <li>Craft materials (e.g., paper, glue, cotton balls, pipe cleaners)</li>
              <li>Observation journals</li>
              <li>Chart paper or whiteboard</li>
              <li>Markers</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Preparation</h2>
            <ul className="list-disc list-inside">
              <li>Gather materials and set up stations for observing seeds and fruits.</li>
              <li>Prepare pictures of animals and plants in different habitats.</li>
              <li>Gather craft materials for building models.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Activity Steps</h2>
            <ol className="list-decimal list-inside">
              <li>
                <strong>Introduction (10 minutes):</strong> Discuss the processes of seed dispersal and pollination and
                the roles of animals.
              </li>
              <li>
                <strong>Observation (20 minutes):</strong> Students observe seeds and fruits, identifying features that
                aid in dispersal.
              </li>
              <li>
                <strong>Model Building (30 minutes):</strong> Students build models that mimic the function of an animal
                in dispersing seeds or pollinating plants.
              </li>
              <li>
                <strong>Habitat Comparison (10 minutes):</strong> Students compare the diversity of life in different
                habitats based on the pictures provided.
              </li>
              <li>
                <strong>Discussion (10 minutes):</strong> Groups share their models and discuss the importance of
                animals in ecosystems.
              </li>
            </ol>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Differentiation</h2>
            <ul className="list-disc list-inside">
              <li>
                <strong>Support:</strong> Provide simplified instructions for building models and pre-selected images of
                habitats.
              </li>
              <li>
                <strong>Challenge:</strong> Encourage students to research specific examples of animal-plant
                interactions and create more detailed models.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Assessment</h2>
            <ul className="list-disc list-inside">
              <li>Observe students' participation in the observation and model-building activities.</li>
              <li>Review students' models and explanations of the processes.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Extension Activities</h2>
            <ul className="list-disc list-inside">
              <li>Research and present on the adaptations of specific animals and plants in different ecosystems.</li>
              <li>Create a diorama showcasing the interactions between animals and plants in a particular habitat.</li>
            </ul>
          </section>
        </div>

        <div className="md:col-span-1">
          <div className="sticky top-4">
            <div className="relative w-full h-48 overflow-hidden rounded-xl mb-4">
              <Image
                src="/placeholder.svg?height=300&width=400&query=animal+seed+dispersal+and+pollination"
                alt="Animal seed dispersal and pollination"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-amber-50 p-4 rounded-xl mb-4">
              <h3 className="font-semibold text-lg mb-2">Curriculum Connections</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Science Skills: Observation, Modeling, Comparison</li>
                <li>Strand: Interdependent Relationships in Ecosystems</li>
                <li>Outcome: Develop a model of animal functions in ecosystems</li>
              </ul>
            </div>

            <div className="bg-amber-50 p-4 rounded-xl mb-4">
              <h3 className="font-semibold text-lg mb-2">Teacher Tips</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Provide a variety of seeds and fruits for students to observe.</li>
                <li>Encourage creativity in model building and allow for different interpretations.</li>
                <li>Facilitate discussions on the importance of biodiversity and conservation.</li>
              </ul>
            </div>

            <div className="bg-amber-50 p-4 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Scientific Vocabulary</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Dispersal</li>
                <li>Pollination</li>
                <li>Habitat</li>
                <li>Ecosystem</li>
                <li>Diversity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
