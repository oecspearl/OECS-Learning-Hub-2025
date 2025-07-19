"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"
import { ChevronLeft } from "lucide-react"

export default function DefiningProblemActivity() {
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
              Defining a Simple Problem
            </h1>
            <p className="text-lg text-gray-700 text-center">
              Ask questions and gather information to define a problem that can be solved through engineering.
            </p>
          </div>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p>
              In this activity, students will ask questions, make observations, and gather information about a situation
              people want to change to define a simple problem that can be solved through the development of a new or
              improved object or tool.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Learning Objectives</h2>
            <ul className="list-disc list-inside">
              <li>Students will be able to define problem, solution, and engineering.</li>
              <li>Students will be able to identify a problem in their home, school, or community.</li>
              <li>Students will be able to ask questions and gather information about the problem.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Materials</h2>
            <ul className="list-disc list-inside">
              <li>Chart paper or whiteboard</li>
              <li>Markers</li>
              <li>Observation journals</li>
              <li>Interview questions</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Preparation</h2>
            <ul className="list-disc list-inside">
              <li>Prepare a list of interview questions to guide students' information gathering.</li>
              <li>Identify potential problems in the school or community for students to investigate.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Activity Steps</h2>
            <ol className="list-decimal list-inside">
              <li>
                <strong>Introduction (10 minutes):</strong> Discuss the concepts of problem, solution, and engineering.
              </li>
              <li>
                <strong>Problem Identification (20 minutes):</strong> Students identify a problem in their home, school,
                or community.
              </li>
              <li>
                <strong>Information Gathering (30 minutes):</strong> Students ask questions and gather information about
                the problem through observations and interviews.
              </li>
              <li>
                <strong>Problem Definition (10 minutes):</strong> Groups define the problem in a clear and concise
                statement.
              </li>
            </ol>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Differentiation</h2>
            <ul className="list-disc list-inside">
              <li>
                <strong>Support:</strong> Provide pre-selected problems and simplified interview questions.
              </li>
              <li>
                <strong>Challenge:</strong> Encourage students to investigate more complex problems and develop detailed
                interview protocols.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Assessment</h2>
            <ul className="list-disc list-inside">
              <li>
                Observe students' participation in the problem identification and information-gathering activities.
              </li>
              <li>Review students' problem statements for clarity and completeness.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Extension Activities</h2>
            <ul className="list-disc list-inside">
              <li>Research and present on existing solutions to similar problems.</li>
              <li>Develop a plan for designing a new or improved object or tool to solve the problem.</li>
            </ul>
          </section>
        </div>

        <div className="md:col-span-1">
          <div className="sticky top-4">
            <div className="relative w-full h-48 overflow-hidden rounded-xl mb-4">
              <Image
                src="/placeholder.svg?height=300&width=400&query=identifying+a+problem+to+solve"
                alt="Identifying a problem to solve"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-purple-50 p-4 rounded-xl mb-4">
              <h3 className="font-semibold text-lg mb-2">Curriculum Connections</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Science Skills: Observation, Questioning, Information Gathering</li>
                <li>Strand: Engineering Design</li>
                <li>Outcome: Define a simple problem that can be solved through engineering</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-xl mb-4">
              <h3 className="font-semibold text-lg mb-2">Teacher Tips</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Encourage students to think creatively and identify problems that are meaningful to them.</li>
                <li>Provide guidance on how to ask effective interview questions.</li>
                <li>Facilitate discussions on the importance of clearly defining the problem.</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Scientific Vocabulary</h3>
              <ul className="list-disc list-inside text-sm">
                <li>Problem</li>
                <li>Solution</li>
                <li>Engineering</li>
                <li>Observation</li>
                <li>Information</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
