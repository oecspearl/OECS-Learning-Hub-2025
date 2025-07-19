import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Ear, Pencil, ChevronLeft, ChevronRight } from "lucide-react"
import { AlphabetAnimation } from "@/components/alphabet-animation"

export default function Grade1LanguageArtsPage() {
  return (
    <div className="container mx-auto py-8">
      <Link href="/curriculum/grade1-subjects">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Grade 1 Subjects
        </Button>
      </Link>

      <div className="w-full min-w-full max-w-[100vw] mb-8">
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl shadow-md">
          <h1 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Grade 1 Language Arts Curriculum
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
            <CardDescription>Foundational for all learning and communication</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="mb-4">
              The strategies and skills of listening and speaking allow learners to contribute meaningfully to social
              environments. As learners receive, reflect on, and communicate ideas, they develop increasing proficiency
              in cognitive organization, critical thinking, and problem-solving.
            </p>
          </CardContent>
          <div className="p-4 pt-0 mt-auto">
            <Link href="/curriculum/grade1-subjects/language-arts/listening-speaking">
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
              Reading and viewing provide opportunities to interact with a wide range of written and visual text for a
              variety of purposes. Readers learn to integrate strategies and skills as they develop thoughtful and
              critical understanding of text.
            </p>
          </CardContent>
          <div className="p-4 pt-0 mt-auto">
            <Link href="/curriculum/grade1-subjects/language-arts/reading-viewing">
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
              Writing and Representing strategies and skills provide opportunities for learners to communicate with
              their peers and other meaningful audiences using paper and digital formats. The process includes planning,
              organizing, revising, refining, and sharing feedback.
            </p>
          </CardContent>
          <div className="p-4 pt-0 mt-auto">
            <Link href="/curriculum/grade1-subjects/language-arts/writing-representing">
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
          This curriculum is designed to develop students' language skills through an integrated approach. The three
          strands—Listening and Speaking, Reading and Viewing, and Writing and Representing—are interconnected and
          support each other in the development of literacy.
        </p>
        <p className="text-gray-700">
          Each strand includes Essential Learning Outcomes (ELOs), Specific Curriculum Outcomes (SCOs), assessment
          strategies, and learning strategies to guide instruction and learning.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-center text-purple-700">Fun with Letters!</h2>
        <AlphabetAnimation />
      </div>

      <div className="mt-8 flex justify-center">
        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Link href="/curriculum/grade1-subjects/activities/language-arts" className="flex items-center">
            <span className="mr-2">View Language Arts Activities</span>
            <ChevronRight className="h-5 w-5" />
          </Link>
        </Button>
      </div>

      <div className="mt-12 flex justify-center">
        <div className="flex space-x-2">
          {["purple", "blue", "pink", "indigo", "purple"].map((color, index) => (
            <div
              key={index}
              className={`h-2 w-16 rounded-full bg-${color}-400`}
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
