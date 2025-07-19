"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"
import { ChevronLeft } from "lucide-react"

export default function ShapeFunctionActivity() {
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
              Shape and Function
            </h1>
            <p className="text-lg text-gray-700 text-center">
              Develop a model to illustrate how the shape of an object helps it function as needed to solve a given
              problem.
            </p>
          </div>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p>
              In this activity, students will develop a simple sketch, drawing, or physical model to illustrate how the
              shape of an object helps it function as needed to solve a given problem.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Learning Objectives</h2>
            <ul className="list-disc list-inside">
              <li>Students will be able to explain the relationship between shape and function.</li>
              <li>Students will be able to identify how the shape of an object helps it solve a problem.</li>
              <li>Students will be able to develop a model to illustrate the shape and function of an object.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Materials</h2>
            <ul className="list-disc list-inside">
              <li>Various objects with different shapes (e.g., spoon, fork, knife, hammer)</li>
              <li>Drawing paper</li>
              <li>Markers or pencils</li>
              <li>Modeling clay or playdough</li>
              <li>Chart paper or whiteboard</li>
              <li>Markers</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Preparation</h2>
            <ul className="list-disc list-inside">
              <li>Gather a variety of objects with different shapes and functions.</li>
              <li>Prepare drawing paper and markers for students to sketch their models.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Activity Steps</h2>
            <ol className="list-decimal list-inside">
              <li>
                <strong>Introduction (10 minutes):</strong> Discuss the relationship between shape and function and
                provide examples.
              </li>
              <li>
                <strong>Object Exploration (20 minutes):</strong> Students explore the different objects, identifying
                their shapes and functions.
              </li>
              <li>
                <strong>Model Development (30 minutes):</strong> Students develop a sketch, drawing, or physical model
                to illustrate how the shape of an object helps it function.
              </li>
              <li>
                <strong>Presentation (10 minutes):</strong> Groups present their models and explain the relationship
                between shape and function.
              </li>
            </ol>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Differentiation</h2>
            <ul className="list-disc list-inside">
              <li>
                <strong>Support:</strong> Provide pre-selected objects and simplified instructions for model
                development.
              </li>
              <li>
                <strong>Challenge:</strong> Encourage students to design their own objects with specific shapes and
                functions.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Assessment</h2>
            <ul className="list-disc list-inside">
              <li>Observe students' participation in the object exploration and model-building activities.</li>
              <li>Review students' models and explanations of the relationship between shape and function.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Extension Activities</h2>
            <ul className="list-disc list-inside">
              <li>Research and present on the design of specific objects and their evolution over time.</li>
              <li>Create a display showcasing the relationship between shape and function in different objects.</li>
            </ul>
          </section>
        </div>

        <div className="md:col-span-1">
          <div className="sticky top-4">
            <div className="relative w-full h-48 overflow-hidden rounded-xl mb-4">
              <Image
                src="/placeholder.svg?height=300&width=400&query=shape+and+function+of+objects"
                alt="Shape and function of objects"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-purple-50 p-4 rounded-xl mb-4">
              <h3 className="font-semibold text-lg mb-2">Curriculum Connections</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Science Skills: Observation, Modeling, Design</li>
                <li>Strand: Engineering Design</li>
                <li>Outcome: Develop a model to illustrate how shape helps function</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-xl mb-4">
              <h3 className="font-semibold text-lg mb-2">Teacher Tips</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Provide a variety of objects with different shapes and functions.</li>
                <li>Encourage creativity in model building and allow for different interpretations.</li>
                <li>Facilitate discussions on the importance of design in solving problems.</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Scientific Vocabulary</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Shape</li>
                <li>Function</li>
                <li>Design</li>
                <li>Model</li>
                <li>Problem</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
