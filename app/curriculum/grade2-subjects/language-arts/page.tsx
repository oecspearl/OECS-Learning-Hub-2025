import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Ear, Pencil, ChevronLeft, ChevronRight } from 'lucide-react'
import { Breadcrumb } from "@/components/breadcrumb"

export default function Grade2LanguageArtsPage() {
  return (
    <div className="container mx-auto py-8">
            <Link href="/curriculum/grade2-subjects">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Grade 2 Subjects
        </Button>
      </Link>

      <div className="w-full min-w-full max-w-[100vw] mb-8">
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl shadow-md">
          <h1 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Grade 2 Language Arts Curriculum
          </h1>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Language is the foundation of communication and the primary instrument of thought. The study of Language
            Arts provides access to multiple and inter-related oral, aural, written, and visual ways of representing,
            exploring, problem solving, communicating and sharing meaning.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="flex flex-col hover:shadow-xl transition-all duration-300 border-t-4 border-purple-500 hover:-translate-y-1">
          <CardHeader className="pb-3 bg-purple-50 rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-purple-700">
              <Ear className="h-5 w-5" />
              Listening and Speaking
            </CardTitle>
            <CardDescription>Essential for all learning and communication</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="mb-4">
              In Grade 2, students develop more sophisticated listening and speaking skills. They learn to contribute
              meaningfully to social environments, express opinions, ask critical questions, and develop increasing
              proficiency in cognitive organization and critical thinking.
            </p>
          </CardContent>
          <div className="p-4 pt-0 mt-auto">
            <Link href="/curriculum/grade2-subjects/language-arts/listening-speaking">
              <Button className="w-full bg-purple-600 hover:bg-purple-700">View Strand</Button>
            </Link>
          </div>
        </Card>

        <Card className="flex flex-col hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500 hover:-translate-y-1">
          <CardHeader className="pb-3 bg-blue-50 rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <BookOpen className="h-5 w-5" />
              Reading and Viewing
            </CardTitle>
            <CardDescription>Meaning-making and problem solving activities</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="mb-4">
              Grade 2 students interact with a wider range of written and visual texts for various purposes. They
              develop more advanced comprehension strategies, learn to integrate multiple sources of information, and
              develop thoughtful and critical understanding of texts.
            </p>
          </CardContent>
          <div className="p-4 pt-0 mt-auto">
            <Link href="/curriculum/grade2-subjects/language-arts/reading-viewing">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">View Strand</Button>
            </Link>
          </div>
        </Card>

        <Card className="flex flex-col hover:shadow-xl transition-all duration-300 border-t-4 border-pink-500 hover:-translate-y-1">
          <CardHeader className="pb-3 bg-pink-50 rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-pink-700">
              <Pencil className="h-5 w-5" />
              Writing and Representing
            </CardTitle>
            <CardDescription>Communication through various formats</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="mb-4">
              In Grade 2, students develop more sophisticated writing and representing skills. They learn to plan,
              organize, revise, and refine their writing with greater independence. Students explore different genres
              and formats while developing their unique voice and style.
            </p>
          </CardContent>
          <div className="p-4 pt-0 mt-auto">
            <Link href="/curriculum/grade2-subjects/language-arts/writing-representing">
              <Button className="w-full bg-pink-600 hover:bg-pink-700">View Strand</Button>
            </Link>
          </div>
        </Card>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl shadow-md border border-indigo-100">
        <h2 className="text-2xl font-bold mb-4 text-indigo-700 flex items-center">
          <BookOpen className="mr-2 h-6 w-6" /> About the Curriculum
        </h2>
        <p className="mb-4 text-gray-700">
          The Grade 2 Language Arts curriculum builds upon the foundation established in Grade 1. It is designed to
          develop students' language skills through an integrated approach. The three strands—Listening and Speaking,
          Reading and Viewing, and Writing and Representing—are interconnected and support each other in the development
          of literacy.
        </p>
        <p className="text-gray-700">
          Each strand includes Essential Learning Outcomes (ELOs), Specific Curriculum Outcomes (SCOs), assessment
          strategies, and learning strategies to guide instruction and learning. The curriculum emphasizes the
          development of critical thinking, problem-solving, and communication skills.
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Link href="/curriculum/grade2-subjects/activities/language-arts" className="flex items-center">
            <span className="mr-2">View Language Arts Activities</span>
            <ChevronRight className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
