"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { 
  Search, 
  HelpCircle, 
  BookOpen, 
  Users, 
  FileText, 
  ClipboardCheck,
  Settings,
  Lightbulb,
  AlertCircle,
  CheckCircle,
  Clock,
  Star
} from "lucide-react"
import Link from "next/link"

interface FAQCategory {
  id: string
  title: string
  icon: any
  description: string
  questions: FAQItem[]
}

interface FAQItem {
  question: string
  answer: string
  tags: string[]
}

const faqCategories: FAQCategory[] = [
  {
    id: "general",
    title: "General Questions",
    icon: HelpCircle,
    description: "Basic questions about the platform",
    questions: [
      {
        question: "What is the OECS Learning Hub?",
        answer: "The OECS Learning Hub is a comprehensive educational platform designed to support teachers, parents, and administrators in the Eastern Caribbean. It provides curriculum resources, lesson planning tools, assessment capabilities, and progress tracking for students from kindergarten through grade 6.",
        tags: ["platform", "overview"]
      },
      {
        question: "How do I create an account?",
        answer: "To create an account, click the 'Register' button in the top navigation. Fill in your personal information, select your role (Teacher, Parent, or Admin), verify your email address, and complete your profile setup. You'll need a valid email address and should choose a strong password.",
        tags: ["account", "registration"]
      },
      {
        question: "What are the different user roles?",
        answer: "There are three main user roles: Teachers can create lesson plans, quizzes, and manage classes; Parents can monitor their children's progress and activities; Admins can manage users, curriculum, and system settings. Each role has specific permissions and access to different features.",
        tags: ["roles", "permissions"]
      },
      {
        question: "Is the platform free to use?",
        answer: "The OECS Learning Hub is provided as a free educational resource for schools and educators in the Eastern Caribbean. There are no subscription fees or hidden costs associated with using the platform.",
        tags: ["pricing", "cost"]
      }
    ]
  },
  {
    id: "curriculum",
    title: "Curriculum & Content",
    icon: BookOpen,
    description: "Questions about curriculum resources",
    questions: [
      {
        question: "What curriculum standards are covered?",
        answer: "The platform covers curriculum standards for kindergarten through grade 6, including Language Arts, Mathematics, Science, and Social Studies. All content is aligned with Eastern Caribbean educational standards and best practices.",
        tags: ["standards", "grades"]
      },
      {
        question: "How do I find curriculum content for my grade level?",
        answer: "Navigate to the 'Curriculum' section in the main menu, select your grade level (K-6), choose a subject area, and browse through the learning strands and outcomes. You can also use the search function to find specific content.",
        tags: ["browsing", "search"]
      },
      {
        question: "Can I download curriculum materials?",
        answer: "Yes, most curriculum materials can be downloaded for offline use. Look for the download icon next to resources. Some materials may be available in PDF format for easy printing and sharing.",
        tags: ["download", "offline"]
      },
      {
        question: "How often is curriculum content updated?",
        answer: "Curriculum content is regularly reviewed and updated to ensure alignment with current educational standards. Major updates typically occur annually, with minor updates throughout the year as needed.",
        tags: ["updates", "maintenance"]
      }
    ]
  },
  {
    id: "lesson-planning",
    title: "Lesson Planning",
    icon: FileText,
    description: "Questions about creating and managing lesson plans",
    questions: [
      {
        question: "How do I create a lesson plan?",
        answer: "Navigate to 'Lesson Plans' in your dashboard, click 'Create New Lesson Plan', fill in the basic information (title, subject, grade), add learning objectives, include detailed activities and procedures, add assessment strategies and materials needed, then save and publish your lesson plan.",
        tags: ["creation", "planning"]
      },
      {
        question: "Can I share lesson plans with other teachers?",
        answer: "Yes, you can share lesson plans with colleagues. Set sharing permissions for your lesson plans, invite colleagues to view or edit, receive feedback and suggestions, and collaborate on lesson improvements.",
        tags: ["sharing", "collaboration"]
      },
      {
        question: "Are there lesson plan templates available?",
        answer: "Yes, there are pre-designed templates available for efficient planning. Choose from available templates, customize template sections as needed, add your specific content and activities, and save as a new lesson plan.",
        tags: ["templates", "efficiency"]
      },
      {
        question: "How do I organize my lesson plans?",
        answer: "Lesson plans can be organized by subject, grade level, date, or custom tags. Use the filtering and sorting options in your lesson plan dashboard to find specific plans quickly. You can also create folders or categories for better organization.",
        tags: ["organization", "management"]
      }
    ]
  },
  {
    id: "assessment",
    title: "Assessment & Quizzes",
    icon: ClipboardCheck,
    description: "Questions about creating assessments and tracking progress",
    questions: [
      {
        question: "How do I create a quiz?",
        answer: "Access the Quiz section from your dashboard, click 'Create New Quiz', add quiz title and description, select question types (multiple choice, short answer, etc.), add questions and answer options, set time limits and scoring rules, then preview and publish your quiz.",
        tags: ["creation", "quizzes"]
      },
      {
        question: "What types of questions can I create?",
        answer: "You can create multiple choice questions, short answer questions, true/false questions, matching questions, and essay questions. Each question type has specific formatting options and scoring capabilities.",
        tags: ["question-types", "formatting"]
      },
      {
        question: "How do I track student progress?",
        answer: "View individual student progress reports, track performance across subjects, identify areas for improvement, and generate progress reports for parents. Regular assessment updates help maintain accurate progress tracking.",
        tags: ["tracking", "progress"]
      },
      {
        question: "Can students take quizzes online?",
        answer: "Yes, students can take quizzes online through the platform. Teachers can assign quizzes to specific students or classes, set time limits, and view results immediately upon completion.",
        tags: ["online", "students"]
      }
    ]
  },
  {
    id: "multigrade",
    title: "Multigrade Teaching",
    icon: Users,
    description: "Questions about teaching multiple grade levels",
    questions: [
      {
        question: "How do I plan for multiple grade levels?",
        answer: "Access the Multigrade section, select the grade levels you're teaching, choose subjects to integrate, design activities for different ability levels, create differentiated instruction strategies, and plan for independent and group work.",
        tags: ["planning", "differentiation"]
      },
      {
        question: "What differentiation strategies are available?",
        answer: "Use tiered activities and assignments, provide multiple ways to demonstrate learning, use flexible grouping and seating arrangements, create learning centers for independent work, and provide choice in activities and assessments.",
        tags: ["strategies", "differentiation"]
      },
      {
        question: "How do I manage a multigrade classroom?",
        answer: "Establish clear routines and procedures, create visual schedules and expectations, set up learning stations and centers, implement peer support systems, use color coding for different grade levels, and build a supportive classroom community.",
        tags: ["management", "classroom"]
      },
      {
        question: "Can I create integrated lessons for multiple grades?",
        answer: "Yes, you can create integrated lessons that address learning objectives for multiple grade levels simultaneously. Use common themes, flexible grouping strategies, and differentiated activities to meet the needs of all students.",
        tags: ["integration", "lessons"]
      }
    ]
  },
  {
    id: "technical",
    title: "Technical Support",
    icon: Settings,
    description: "Technical questions and troubleshooting",
    questions: [
      {
        question: "What browsers are supported?",
        answer: "The platform works best with modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version of your preferred browser for the best experience.",
        tags: ["browsers", "compatibility"]
      },
      {
        question: "How do I reset my password?",
        answer: "Click on 'Forgot Password' on the login page, enter your email address, and follow the instructions sent to your email. You'll receive a secure link to reset your password.",
        tags: ["password", "security"]
      },
      {
        question: "What should I do if I can't log in?",
        answer: "First, check that you're using the correct email and password. If you're still having trouble, try clearing your browser cache, use a different browser, or contact support for assistance.",
        tags: ["login", "troubleshooting"]
      },
      {
        question: "How do I update my profile information?",
        answer: "Go to your profile page, click 'Edit Profile', make your changes, and save. You can update your name, email, profile picture, and other personal information at any time.",
        tags: ["profile", "settings"]
      }
    ]
  }
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("general")

  const filteredCategories = faqCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.questions.some(q =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  )

  const allQuestions = faqCategories.flatMap(category => 
    category.questions.map(q => ({ ...q, category: category.title }))
  )

  const filteredQuestions = allQuestions.filter(q =>
    q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    q.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    q.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about the OECS Learning Hub. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search questions, topics, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg"
            />
          </div>
        </div>

        {searchQuery ? (
          // Search Results View
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Search Results</h2>
              <p className="text-gray-600">
                Found {filteredQuestions.length} results for "{searchQuery}"
              </p>
            </div>

            <div className="space-y-4">
              {filteredQuestions.map((question, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{question.question}</CardTitle>
                      <Badge variant="secondary">{question.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{question.answer}</p>
                    <div className="flex flex-wrap gap-2">
                      {question.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {filteredQuestions.length === 0 && (
                <Card>
                  <CardContent className="p-8 text-center">
                    <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No results found</h3>
                    <p className="text-gray-600 mb-4">
                      Try adjusting your search terms or browse the categories below.
                    </p>
                    <Button onClick={() => setSearchQuery("")}>
                      Clear Search
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        ) : (
          // Category View
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Category Navigation */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <nav className="space-y-2">
                    {faqCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`w-full text-left p-3 rounded-lg transition-colors ${
                          activeCategory === category.id
                            ? "bg-blue-50 text-blue-700 border border-blue-200"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <category.icon className="h-5 w-5" />
                          <div>
                            <div className="font-medium">{category.title}</div>
                            <div className="text-sm text-gray-500">{category.description}</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Content */}
            <div className="lg:col-span-2">
              {faqCategories
                .filter(category => category.id === activeCategory)
                .map((category) => (
                  <Card key={category.id}>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <category.icon className="h-8 w-8 text-blue-500" />
                        <div>
                          <CardTitle className="text-2xl">{category.title}</CardTitle>
                          <CardDescription className="text-lg">{category.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        {category.questions.map((item, index) => (
                          <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left">
                              <div className="flex items-center space-x-3">
                                <HelpCircle className="h-5 w-5 text-blue-500" />
                                <span className="font-semibold">{item.question}</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-4 pt-4">
                                <p className="text-gray-700">{item.answer}</p>
                                <div className="flex flex-wrap gap-2">
                                  {item.tags.map((tag, tagIndex) => (
                                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        )}

        {/* Contact Support */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Still Have Questions?</h3>
              <p className="text-gray-600 mb-4">
                Can't find the answer you're looking for? Our support team is here to help.
              </p>
              <div className="flex justify-center space-x-4">
                <Button asChild>
                  <Link href="/help/contact">
                    Contact Support
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/help">
                    Back to Help Center
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 