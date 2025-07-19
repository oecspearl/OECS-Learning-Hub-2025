import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PenTool, ChevronLeft, ChevronRight, Eye, Headphones } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function Grade3LanguageArtsPage() {
  return (
    <div className="container mx-auto py-8">
      
      <Link href="/curriculum/grade3-subjects">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Grade 3 Subjects
        </Button>
      </Link>

      <div className="w-full min-w-full max-w-[100vw] mb-8">
        <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-xl shadow-md">
          <h1 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Grade 3 Language Arts Curriculum
          </h1>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Language Arts provides students with essential skills for understanding, communicating, and expressing
            themselves. The Grade 3 curriculum builds upon foundational concepts and introduces new language skills
            through engaging, hands-on learning experiences across listening, speaking, reading, viewing, writing, and
            representing.
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
            <CardDescription>Developing oral language skills for communication</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="mb-4">
              In Grade 3, students develop their listening and speaking skills to communicate effectively in various
              contexts. They learn to listen attentively, respond critically, and express ideas with clarity and
              confidence. Students engage with various genres of music, oral poetry, and stories while developing an
              appreciation for both Standard English and Home Languages.
            </p>
          </CardContent>
          <div className="p-4 pt-0 mt-auto">
            <Link href="/curriculum/grade3-subjects/language-arts/listening-speaking">
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
            <CardDescription>Developing comprehension and critical thinking</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="mb-4">
              Students build on their reading skills by engaging with a variety of texts at the early to transitional
              levels. They develop comprehension strategies, vocabulary, and critical thinking skills while exploring
              different genres. Students learn to recognize how an author's choice of vocabulary, language, and style
              influence the meaning of text.
            </p>
          </CardContent>
          <div className="p-4 pt-0 mt-auto">
            <Link href="/curriculum/grade3-subjects/language-arts/reading-viewing">
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
            <CardDescription>Developing written expression and communication</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="mb-4">
              Grade 3 students develop their writing skills through the writing process: planning, drafting, revising,
              editing, and publishing. They learn to write for various purposes and audiences, using different genres
              and text forms. Students also develop their understanding of writing conventions, including spelling,
              punctuation, and presentation.
            </p>
          </CardContent>
          <div className="p-4 pt-0 mt-auto">
            <Link href="/curriculum/grade3-subjects/language-arts/writing-representing">
              <Button className="w-full bg-green-600 hover:bg-green-700">View Strand</Button>
            </Link>
          </div>
        </Card>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl shadow-md border border-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Grade 3 Language Arts Overview</h2>
        <p className="mb-4 text-gray-700">
          The Grade 3 language arts curriculum is designed to build upon the foundation established in earlier grades.
          It encourages students to develop deeper understanding, critical thinking skills, and greater independence in
          their language development. The curriculum is organized around key strands, each with specific learning
          outcomes and expectations.
        </p>
        <p className="text-gray-700">
          Teachers are encouraged to integrate learning across strands where appropriate, creating meaningful
          connections for students. Assessment is ongoing and designed to support student growth and development in
          language arts skills. The curriculum recognizes and celebrates the culture and context of the OECS,
          incorporating local images, stories, songs, and poetry throughout.
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Link href="/curriculum/grade3-subjects/activities/language-arts" className="flex items-center">
            <span className="mr-2">View Language Arts Activities</span>
            <ChevronRight className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
