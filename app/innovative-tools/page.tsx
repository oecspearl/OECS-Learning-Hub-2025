import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Sparkles } from "lucide-react"

export default function InnovativeToolsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Innovative Teaching Tools</h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Enhance your teaching with our suite of AI-powered tools designed for OECS educators
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 - Lesson Planning */}
            <Card className="border-0 shadow-xl rounded-xl overflow-hidden transition-all duration-200 hover:translate-y-[-10px] hover:shadow-2xl">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
                  <BookOpen className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">Lesson Planning</h3>
                <p className="text-sm text-muted-foreground min-h-[5rem] mb-6">
                  Create engaging, standards-aligned lesson plans tailored to your students' needs with AI assistance.
                </p>
                <div className="mt-auto">
                  <Link href="/planner" className="w-full">
                    <Button className="w-full bg-[#a8d1d4] hover:bg-[#8ec1c5] text-gray-800 font-medium">
                      <Sparkles className="mr-2 h-4 w-4" />
                      Create
                    </Button>
                  </Link>
                  <div className="mt-5 flex items-center text-xs text-muted-foreground">
                    <div className="bg-green-100 rounded-full p-1 mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-500"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span>Includes special needs accommodations</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feature 2 - Multigrade Planning */}
            <Card className="border-0 shadow-xl rounded-xl overflow-hidden transition-all duration-200 hover:translate-y-[-10px] hover:shadow-2xl">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-600">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Multigrade Planning</h3>
                <p className="text-sm text-muted-foreground min-h-[5rem] mb-6">
                  Easily design inclusive, OECS-aligned lesson plans for multigrade classrooms using effective teaching
                  strategies.
                </p>
                <div className="mt-auto">
                  <Link href="/multigrade" className="w-full">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <Sparkles className="mr-2 h-4 w-4" />
                      Create
                    </Button>
                  </Link>
                  <div className="mt-5 flex items-center text-xs text-muted-foreground">
                    <div className="bg-green-100 rounded-full p-1 mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-500"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span>Designed for diverse levels and learning needs</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feature 3 - Cross-Curricular Planning */}
            <Card className="border-0 shadow-xl rounded-xl overflow-hidden transition-all duration-200 hover:translate-y-[-10px] hover:shadow-2xl">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10"
                  >
                    <path d="M3 3v18h18"></path>
                    <path d="m19 9-5 5-4-4-3 3"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Cross-Curricular Planning</h3>
                <p className="text-sm text-muted-foreground min-h-[5rem] mb-6">
                  Create authentic, integrated lessons that connect multiple subjects through real-world problems and projects.
                </p>
                <div className="mt-auto">
                  <Link href="/cross-curricular/new" className="w-full">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <Sparkles className="mr-2 h-4 w-4" />
                      Create
                    </Button>
                  </Link>
                  <div className="mt-5 flex items-center text-xs text-muted-foreground">
                    <div className="bg-blue-100 rounded-full p-1 mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-500"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span>Authentic integration across subject areas</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feature 4 - Lesson Review */}
            <Card className="border-0 shadow-xl rounded-xl overflow-hidden transition-all duration-200 hover:translate-y-[-10px] hover:shadow-2xl">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Lesson Review</h3>
                <p className="text-sm text-muted-foreground min-h-[5rem] mb-6">
                  Get expert feedback and actionable suggestions to improve your existing lesson plans.
                </p>
                <div className="mt-auto">
                  <Link href="/review" className="w-full">
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" y1="3" x2="12" y2="15"></line>
                      </svg>
                      Review Plan
                    </Button>
                  </Link>
                  <div className="mt-5 flex items-center text-xs text-muted-foreground">
                    <div className="bg-indigo-100 rounded-full p-1 mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-indigo-500"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                    <span>Personalized feedback and suggestions</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feature 4 - Quiz Generation */}
            <Card className="border-0 shadow-xl rounded-xl overflow-hidden transition-all duration-200 hover:translate-y-[-10px] hover:shadow-2xl">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-amber-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10"
                  >
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Quiz Generation</h3>
                <p className="text-sm text-muted-foreground min-h-[5rem] mb-6">
                  Create customized quizzes with various question types and cognitive levels to effectively assess
                  student understanding.
                </p>
                <div className="mt-auto">
                  <Link href="/quiz" className="w-full">
                    <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                      </svg>
                      Create Quiz
                    </Button>
                  </Link>
                  <div className="mt-5 flex items-center text-xs text-muted-foreground">
                    <div className="bg-amber-100 rounded-full p-1 mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-amber-500"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                    </div>
                    <span>Download in multiple formats</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feature 5 - GradeAI */}
            <Card className="border-0 shadow-xl rounded-xl overflow-hidden transition-all duration-200 hover:translate-y-[-10px] hover:shadow-2xl">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-purple-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10"
                  >
                    <path d="M9 11V6a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z"></path>
                    <path d="M11 11h2"></path>
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <line x1="3" x2="21" y1="15" y2="15"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">GradeAI</h3>
                <p className="text-sm text-muted-foreground min-h-[5rem] mb-6">
                  Provide personalized feedback on students' work with AI assistance to save time and improve assessment
                  quality.
                </p>
                <div className="mt-auto">
                  <a
                    href="https://grader.oecslearning.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Open GradeAI
                    </Button>
                  </a>
                  <div className="mt-5 flex items-center text-xs text-muted-foreground">
                    <div className="bg-purple-100 rounded-full p-1 mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-purple-500"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <span>Detailed feedback in seconds</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feature 6 - Pearl Data Assistant */}
            <Card className="border-0 shadow-xl rounded-xl overflow-hidden transition-all duration-200 hover:translate-y-[-10px] hover:shadow-2xl">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10"
                  >
                    <path d="M3 3v18h18"></path>
                    <path d="m19 9-5 5-4-4-3 3"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Pearl Data Assistant</h3>
                <p className="text-sm text-muted-foreground min-h-[5rem] mb-6">
                  Analyze assessment data to identify learning gaps and get AI-powered recommendations for targeted
                  interventions.
                </p>
                <div className="mt-auto">
                  <a href="http://data.oecslearning.org/" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Open Data Assistant
                    </Button>
                  </a>
                  <div className="mt-5 flex items-center text-xs text-muted-foreground">
                    <div className="bg-blue-100 rounded-full p-1 mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-500"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <span>Visualize student performance trends</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feature 7 - Pearl Rubric Generator */}
            <Card className="border-0 shadow-xl rounded-xl overflow-hidden transition-all duration-200 hover:translate-y-[-10px] hover:shadow-2xl">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-pink-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                    <line x1="3" x2="21" y1="9" y2="9"></line>
                    <line x1="3" x2="21" y1="15" y2="15"></line>
                    <line x1="9" x2="9" y1="3" y2="21"></line>
                    <line x1="15" x2="15" y1="3" y2="21"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Pearl Rubric Generator</h3>
                <p className="text-sm text-muted-foreground min-h-[5rem] mb-6">
                  Create detailed, standards-aligned rubrics for any assignment to ensure clear expectations and
                  consistent grading.
                </p>
                <div className="mt-auto">
                  <a
                    href="/rubric-generator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Open Rubric Generator
                    </Button>
                  </a>
                  <div className="mt-5 flex items-center text-xs text-muted-foreground">
                    <div className="bg-pink-100 rounded-full p-1 mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-pink-500"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <span>Customizable criteria and levels</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feature 8 - Pearl Interactive Quiz Maker */}
            <Card className="border-0 shadow-xl rounded-xl overflow-hidden transition-all duration-200 hover:translate-y-[-10px] hover:shadow-2xl">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-teal-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path d="M8.5 12.5 11 15l4-4.5"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Pearl Interactive Quiz Maker</h3>
                <p className="text-sm text-muted-foreground min-h-[5rem] mb-6">
                  Create and share live quizzes that students can take online with real-time analytics to track
                  performance and engagement.
                </p>
                <div className="mt-auto">
                  <a href="https://iquiz.oecslearning.org" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Open Interactive Quiz
                    </Button>
                  </a>
                  <div className="mt-5 flex items-center text-xs text-muted-foreground">
                    <div className="bg-teal-100 rounded-full p-1 mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-teal-500"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <span>Real-time student performance analytics</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feature 9 - Content Maker */}
            <Card className="border-0 shadow-xl rounded-xl overflow-hidden transition-all duration-200 hover:translate-y-[-10px] hover:shadow-2xl">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path d="M9 14l2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Content Maker</h3>
                <p className="text-sm text-muted-foreground mb-4">Powered by H5P</p>
                <p className="text-sm text-muted-foreground min-h-[5rem] mb-6">
                  Create engaging educational content for the OECS with interactive multimedia elements and rich learning experiences.
                </p>
                <div className="mt-auto">
                  <a
                    href="http://creator.oecslearning.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Open Content Maker
                    </Button>
                  </a>
                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <div className="bg-red-100 rounded-full p-1 mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-red-500"
                        >
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                      </div>
                      <span>Interactive multimedia content</span>
                    </div>
                    <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
                      Coming Soon
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Connect and Learn Section */}
      <section className="py-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Connect and Learn</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Expand your knowledge and collaborate with peers through our digital platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 - OECS MakerStudio */}
            <Card className="border-0 shadow-xl rounded-xl overflow-hidden transition-all duration-200 hover:translate-y-[-10px] hover:shadow-2xl">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">OECS MakerStudio</h3>
                <p className="text-sm text-muted-foreground mb-4">Empower Your Teaching Journey</p>
                <p className="text-sm text-muted-foreground min-h-[4rem] mb-6">
                  Join OECS MakerStudio: Where Educators Collaborate, Share, and Innovate
                </p>
                <div className="mt-auto">
                  <a
                    href="https://makerstudio.oecslearning.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Visit MakerStudio
                    </Button>
                  </a>
                  <div className="mt-5 flex items-center text-xs text-muted-foreground">
                    <div className="bg-orange-100 rounded-full p-1 mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-orange-500"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <span>Collaborate and innovate with peers</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 2 - OECS PEARL Digital Skills Explorer */}
            <Card className="border-0 shadow-xl rounded-xl overflow-hidden transition-all duration-200 hover:translate-y-[-10px] hover:shadow-2xl">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">OECS PEARL Digital Skills Explorer</h3>
                <p className="text-sm text-muted-foreground min-h-[4rem] mb-6">
                  Learn, Practice, and Stay Safe Online! Learn through engaging scenarios and real-world challenges.
                </p>
                <div className="mt-auto">
                  <a
                    href="https://dl.oecslearning.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Explore Digital Skills
                    </Button>
                  </a>
                  <div className="mt-5 flex items-center text-xs text-muted-foreground">
                    <div className="bg-emerald-100 rounded-full p-1 mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-emerald-500"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <span>Engaging scenarios and real-world challenges</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary/5 rounded-xl my-12 p-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Teaching?</h2>
          <p className="text-lg mb-8">
            Join teachers across the OECS who are using our innovative tools to enhance their teaching and improve
            student learning outcomes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/planner">
                <Sparkles className="mr-2 h-4 w-4" />
                Try AI Planner
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
