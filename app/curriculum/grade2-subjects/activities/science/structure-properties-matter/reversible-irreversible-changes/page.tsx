"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"
import { ChevronLeft } from "lucide-react"

export default function ReversibleIrreversibleChangesActivity() {
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
              Reversible and Irreversible Changes
            </h1>
            <p className="text-lg text-gray-700 text-center">
              Construct an argument with evidence that some changes caused by heating or cooling can be reversed and
              some cannot.
            </p>
          </div>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p>
              In this activity, students will construct an argument with evidence that some changes caused by heating or
              cooling can be reversed and some cannot, using examples such as water, butter, cooking an egg, and heating
              paper.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Learning Objectives</h2>
            <ul className="list-disc list-inside">
              <li>Students will be able to define reversible and irreversible changes.</li>
              <li>Students will be able to explain the effect of heating and cooling on substances.</li>
              <li>Students will be able to classify changes as reversible or irreversible.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Materials</h2>
            <ul className="list-disc list-inside">
              <li>Ice cubes</li>
              <li>Butter</li>
              <li>Eggs</li>
              <li>Paper</li>
              <li>Heat source (e.g., hot plate, microwave)</li>
              <li>Cooling source (e.g., freezer)</li>
              <li>Observation sheets</li>
              <li>Chart paper or whiteboard</li>
              <li>Markers</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Preparation</h2>
            <ul className="list-disc list-inside">
              <li>Gather materials and set up stations for heating and cooling.</li>
              <li>Prepare observation sheets with prompts for recording changes.</li>
              <li>Ensure safety precautions are in place for using heat sources.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Activity Steps</h2>
            <ol className="list-decimal list-inside">
              <li>
                <strong>Introduction (10 minutes):</strong> Discuss the concepts of reversible and irreversible changes.
              </li>
              <li>
                <strong>Heating (30 minutes):</strong> Students heat different substances (e.g., butter, egg, paper) and
                observe the changes.
              </li>
              <li>
                <strong>Cooling (30 minutes):</strong> Students cool different substances (e.g., water) and observe the
                changes.
              </li>
              <li>
                <strong>Classification (10 minutes):</strong> Groups classify the changes as reversible or irreversible
                and discuss their findings.
              </li>
            </ol>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Differentiation</h2>
            <ul className="list-disc list-inside">
              <li>
                <strong>Support:</strong> Provide simplified observation sheets with fewer prompts.
              </li>
              <li>
                <strong>Challenge:</strong> Encourage students to research additional examples of reversible and
                irreversible changes.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Assessment</h2>
            <ul className="list-disc list-inside">
              <li>Observe students' participation in the heating and cooling activities.</li>
              <li>Review students' observation sheets and group classifications for accuracy and completeness.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Extension Activities</h2>
            <ul className="list-disc list-inside">
              <li>Research and present on the chemical reactions involved in reversible and irreversible changes.</li>
              <li>Create a display showcasing examples of reversible and irreversible changes in everyday life.</li>
            </ul>
          </section>
        </div>

        <div className="md:col-span-1">
          <div className="sticky top-4">
            <div className="relative w-full h-48 overflow-hidden rounded-xl mb-4">
              <Image
                src="/placeholder.svg?height=300&width=400&query=reversible+and+irreversible+changes"
                alt="Reversible and irreversible changes"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-green-50 p-4 rounded-xl mb-4">
              <h3 className="font-semibold text-lg mb-2">Curriculum Connections</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Science Skills: Observation, Classification, Argumentation</li>
                <li>Strand: Structure and Properties of Matter</li>
                <li>Outcome: Construct an argument about reversible and irreversible changes</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-xl mb-4">
              <h3 className="font-semibold text-lg mb-2">Teacher Tips</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Provide clear instructions for heating and cooling the substances safely.</li>
                <li>Encourage students to make detailed observations of the changes.</li>
                <li>Facilitate discussions on the differences between reversible and irreversible changes.</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Scientific Vocabulary</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Reversible</li>
                <li>Irreversible</li>
                <li>Heating</li>
                <li>Cooling</li>
                <li>Melting</li>
                <li>Freezing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
