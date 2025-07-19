"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PenTool, ChevronLeft, ChevronRight, Eye, Headphones } from 'lucide-react'
import { Breadcrumb } from "@/components/breadcrumb"

export default function Grade6LanguageArtsPage() {
  return (
    <div className="container mx-auto py-8">
      
      <Link href="/curriculum/grade6-subjects">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Grade 6 Subjects
        </Button>
      </Link>

      <div className="w-full min-w-full max-w-[100vw] mb-8">
        <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-xl shadow-md">
          <h1 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Grade 6 Language Arts Curriculum
          </h1>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            The Grade 6 Language Arts curriculum builds upon the foundation laid in earlier grades, preparing students
            for advanced literacy practices and critical analysis. Students engage in complex discussions, explore diverse
            texts, and refine their writing skills while celebrating Caribbean culture and developing global perspectives
            through authentic learning experiences.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="flex flex-col hover:shadow-xl transition-all duration-300 border-t-4 border-purple-500 hover:-translate-y-1">
          <CardHeader className="pb-3 bg-purple-50 rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-purple-700">
              <Headphones className="h-5 w-5" />
              Listening & Speaking
            </CardTitle>
            <CardDescription>Advanced oral communication and critical discourse</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="mb-4">
              Grade 6 students refine their listening and speaking skills to engage in critical discourse and express
              themselves effectively in diverse contexts. They learn to analyze persuasive techniques, adapt their
              language to different situations, and appreciate the nuances of both Standard English and Caribbean
              dialects.
            </p>
          </CardContent>
          <div className="p-4 pt-0 mt-auto">
            <Link href="/curriculum/grade6-subjects/language-arts/listening-speaking">
              <Button className="w-full bg-purple-600 hover:bg-purple-700">View Strand</Button>
            </Link>
          </div>
        </Card>

        <Card className="flex flex-col hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500 hover:-translate-y-1">
          <CardHeader className="pb-3 bg-blue-50 rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <Eye className="h-5 w-5" />
              Reading & Viewing
            </CardTitle>
            <CardDescription>Critical analysis and advanced comprehension</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="mb-4">
              Students develop advanced reading strategies and critical thinking skills through engagement with diverse,
              culturally relevant texts. They analyze author's craft, explore complex themes, and make sophisticated
              connections across texts and cultures. Students master comprehension strategies, vocabulary development,
              and digital literacy while celebrating Caribbean literature and global perspectives.
            </p>
          </CardContent>
          <div className="p-4 pt-0 mt-auto">
            <Link href="/curriculum/grade6-subjects/language-arts/reading-viewing">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">View Strand</Button>
            </Link>
          </div>
        </Card>

        <Card className="flex flex-col hover:shadow-xl transition-all duration-300 border-t-4 border-green-500 hover:-translate-y-1">
          <CardHeader className="pb-3 bg-green-50 rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-green-700">
              <PenTool className="h-5 w-5" />
              Writing & Representing
            </CardTitle>
            <CardDescription>Sophisticated composition and digital publishing</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="mb-4">
              Grade 6 students master the complete writing process through sophisticated composition across multiple
              genres. They develop advanced revision and editing skills, explore complex sentence structures, and create
              polished publications for authentic audiences. Students integrate technology, visual elements, and
              multimedia to enhance their written communication while maintaining cultural authenticity.
            </p>
          </CardContent>
          <div className="p-4 pt-0 mt-auto">
            <Link href="/curriculum/grade6-subjects/language-arts/writing-representing">
              <Button className="w-full bg-green-600 hover:bg-green-700">View Strand</Button>
            </Link>
          </div>
        </Card>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl shadow-md border border-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Grade 6 Language Arts Overview</h2>
        <p className="mb-4 text-gray-700">
          The Grade 6 Language Arts curriculum builds upon the foundation laid in earlier grades, preparing students
          for advanced literacy practices and critical analysis. The curriculum emphasizes critical thinking, cultural
          appreciation, and advanced communication skills. Students engage with authentic Caribbean contexts while
          developing global perspectives through diverse literature and media.
        </p>
        <p className="text-gray-700">
          The curriculum integrates listening, speaking, reading, viewing, writing, and representing through meaningful,
          cross-curricular connections. Assessment is formative and inclusive, supporting diverse learners through
          differentiated instruction. Students celebrate their cultural heritage while mastering both Home Languages and
          Standard English, preparing them for academic success and lifelong learning.
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Link href="/curriculum/grade6-subjects/activities/language-arts" className="flex items-center">
            <span className="mr-2">View Language Arts Activities</span>
            <ChevronRight className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  )
}