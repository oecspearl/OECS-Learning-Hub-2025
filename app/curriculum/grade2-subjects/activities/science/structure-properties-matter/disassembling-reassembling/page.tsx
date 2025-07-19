"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"
import { ChevronLeft } from "lucide-react"

export default function DisassemblingReassemblingActivity() {
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
              Disassembling and Reassembling Objects
            </h1>
            <p className="text-lg text-gray-700 text-center">
              Construct an account of how an object made of a small set of pieces can be disassembled and made into a
              new object.
            </p>
          </div>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p>
              In this activity, students will make observations to construct an evidence-based account of how an object
              made of a small set of pieces can be disassembled and made into a new object.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Learning Objectives</h2>
            <ul className="list-disc list-inside">
              <li>Students will be able to define assemble, disassemble, and reassemble.</li>
              <li>Students will be able to demonstrate that large objects are made of smaller parts.</li>
              <li>
                Students will be able to explain how new objects can be formed from the pieces of a disassembled object.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Materials</h2>
            <ul className="list-disc list-inside">
              <li>Building blocks or LEGOs</li>
              <li>Small toys with removable parts</li>
              <li>Chart paper or whiteboard</li>
              <li>Markers</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Preparation</h2>
            <ul className="list-disc list-inside">
              <li>Gather building blocks or LEGOs and small toys with removable parts.</li>
              <li>Prepare a demonstration area for disassembling and reassembling objects.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Activity Steps</h2>
            <ol className="list-decimal list-inside">
              <li>
                <strong>Introduction (10 minutes):</strong> Discuss the concepts of assembling, disassembling, and
                reassembling objects.
              </li>
              <li>
                <strong>Disassembly (20 minutes):</strong> Students disassemble the objects into their component parts,
                observing the different pieces.
              </li>
              <li>
                <strong>Reassembly (20 minutes):</strong> Students reassemble the original objects or create new objects
                from the pieces.
              </li>
              <li>
                <strong>Discussion (10 minutes):</strong> Groups share their creations and discuss the process of
                disassembling and reassembling.
              </li>
            </ol>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Differentiation</h2>
            <ul className="list-disc list-inside">
              <li>
                <strong>Support:</strong> Provide simplified objects with fewer parts for disassembly.
              </li>
              <li>
                <strong>Challenge:</strong> Encourage students to create more complex objects from the disassembled
                pieces.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Assessment</h2>
            <ul className="list-disc list-inside">
              <li>Observe students' participation in the disassembly and reassembly activities.</li>
              <li>Review students' creations and explanations of the process.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Extension Activities</h2>
            <ul className="list-disc list-inside">
              <li>Research and present on the assembly and disassembly of complex machines.</li>
              <li>Create a stop-motion animation showing the process of disassembling and reassembling an object.</li>
            </ul>
          </section>
        </div>

        <div className="md:col-span-1">
          <div className="sticky top-4">
            <div className="relative w-full h-48 overflow-hidden rounded-xl mb-4">
              <Image
                src="/disassembled-reassembled-objects.png"
                alt="Disassembling and reassembling objects"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-green-50 p-4 rounded-xl mb-4">
              <h3 className="font-semibold text-lg mb-2">Curriculum Connections</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Science Skills: Observation, Analysis, Problem-Solving</li>
                <li>Strand: Structure and Properties of Matter</li>
                <li>Outcome: Construct an account of how objects can be disassembled and reassembled</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-xl mb-4">
              <h3 className="font-semibold text-lg mb-2">Teacher Tips</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Provide clear instructions for disassembling and reassembling the objects.</li>
                <li>Encourage students to work collaboratively and share ideas.</li>
                <li>Facilitate discussions on the relationship between the parts and the whole.</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Scientific Vocabulary</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Assemble</li>
                <li>Disassemble</li>
                <li>Reassemble</li>
                <li>Component</li>
                <li>Structure</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
