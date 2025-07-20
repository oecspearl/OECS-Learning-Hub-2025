"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { 
  Search, 
  BookOpen, 
  Users, 
  FileText, 
  ClipboardCheck, 
  Calendar,
  Settings,
  HelpCircle,
  Lightbulb,
  Target,
  Globe,
  Database,
  Upload,
  Download,
  Eye,
  Edit,
  Plus,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Info
} from "lucide-react"
import Link from "next/link"

interface HelpSection {
  id: string
  title: string
  icon: any
  description: string
  features: HelpFeature[]
}

interface HelpFeature {
  title: string
  description: string
  steps?: string[]
  tips?: string[]
  related?: string[]
}

const helpSections: HelpSection[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: HelpCircle,
    description: "Learn the basics of using the OECS Learning Hub",
    features: [
      {
        title: "Account Registration",
        description: "Create your account and set up your profile",
        steps: [
          "Click 'Register' in the top navigation",
          "Fill in your personal information",
          "Select your role (Teacher, Parent, or Admin)",
          "Verify your email address",
          "Complete your profile setup"
        ],
        tips: [
          "Use a strong password for security",
          "Keep your email address updated",
          "Upload a profile picture for better recognition"
        ]
      },
      {
        title: "Role-Based Access",
        description: "Understand the different user roles and permissions",
        steps: [
          "Teachers: Create lesson plans, quizzes, and manage classes",
          "Parents: Monitor children's progress and activities",
          "Admins: Manage users, curriculum, and system settings"
        ],
        tips: [
          "Your role determines available features",
          "Contact admin to change your role if needed",
          "Some features may require admin approval"
        ]
      },
      {
        title: "Dashboard Navigation",
        description: "Navigate through your personalized dashboard",
        steps: [
          "Access your dashboard after login",
          "View role-specific statistics and quick actions",
          "Use the sidebar for main navigation",
          "Check notifications and updates regularly"
        ],
        tips: [
          "Bookmark frequently used pages",
          "Use the search function to find content quickly",
          "Customize your dashboard layout if available"
        ]
      }
    ]
  },
  {
    id: "curriculum",
    title: "Curriculum Management",
    icon: BookOpen,
    description: "Access and manage curriculum content across all grades",
    features: [
      {
        title: "Browse Curriculum",
        description: "Explore curriculum content by grade and subject",
        steps: [
          "Navigate to 'Curriculum' in the main menu",
          "Select your grade level (K-6)",
          "Choose a subject area",
          "Browse through learning strands and outcomes",
          "Access detailed lesson content and activities"
        ],
        tips: [
          "Use filters to narrow down content",
          "Save favorite lessons for quick access",
          "Download curriculum documents for offline use"
        ],
        related: ["Lesson Planning", "Assessment Strategies"]
      },
      {
        title: "Curriculum Standards",
        description: "View and understand curriculum standards and outcomes",
        steps: [
          "Access the Standards section",
          "Browse by grade level and subject",
          "Review learning outcomes and indicators",
          "Download standards documents"
        ],
        tips: [
          "Standards are organized by grade level",
          "Each standard includes specific learning indicators",
          "Use standards to align your lesson plans"
        ]
      },
      {
        title: "Cross-Curricular Integration",
        description: "Create integrated learning experiences across subjects",
        steps: [
          "Access the Cross-Curricular section",
          "Select multiple subjects to integrate",
          "Design activities that connect different subjects",
          "Save and share your integrated plans"
        ],
        tips: [
          "Start with subjects that naturally connect",
          "Use real-world scenarios for integration",
          "Involve students in planning integrated activities"
        ]
      }
    ]
  },
  {
    id: "lesson-planning",
    title: "Lesson Planning",
    icon: FileText,
    description: "Create, manage, and share lesson plans",
    features: [
      {
        title: "Create Lesson Plans",
        description: "Design comprehensive lesson plans with objectives and activities",
        steps: [
          "Navigate to 'Lesson Plans' in your dashboard",
          "Click 'Create New Lesson Plan'",
          "Fill in basic information (title, subject, grade)",
          "Add learning objectives and outcomes",
          "Include detailed activities and procedures",
          "Add assessment strategies and materials needed",
          "Save and publish your lesson plan"
        ],
        tips: [
          "Use clear, measurable learning objectives",
          "Include differentiation strategies for diverse learners",
          "Add time estimates for each activity",
          "Include safety considerations where relevant"
        ],
        related: ["Assessment", "Resources"]
      },
      {
        title: "Lesson Plan Templates",
        description: "Use pre-designed templates for efficient planning",
        steps: [
          "Choose from available templates",
          "Customize template sections as needed",
          "Add your specific content and activities",
          "Save as a new lesson plan"
        ],
        tips: [
          "Templates save time and ensure consistency",
          "Modify templates to fit your teaching style",
          "Create your own templates for future use"
        ]
      },
      {
        title: "Share and Collaborate",
        description: "Share lesson plans with colleagues and collaborate",
        steps: [
          "Set sharing permissions for your lesson plans",
          "Invite colleagues to view or edit",
          "Receive feedback and suggestions",
          "Collaborate on lesson improvements"
        ],
        tips: [
          "Use clear titles and descriptions for sharing",
          "Include helpful tags for easy discovery",
          "Provide context when sharing with others"
        ]
      }
    ]
  },
  {
    id: "assessment",
    title: "Assessment & Quizzes",
    icon: ClipboardCheck,
    description: "Create assessments and track student progress",
    features: [
      {
        title: "Create Quizzes",
        description: "Design interactive quizzes and assessments",
        steps: [
          "Access the Quiz section from your dashboard",
          "Click 'Create New Quiz'",
          "Add quiz title and description",
          "Select question types (multiple choice, short answer, etc.)",
          "Add questions and answer options",
          "Set time limits and scoring rules",
          "Preview and publish your quiz"
        ],
        tips: [
          "Use a mix of question types for better assessment",
          "Include clear instructions for each question",
          "Set appropriate time limits for student age",
          "Review questions for clarity and accuracy"
        ],
        related: ["Progress Tracking", "Analytics"]
      },
      {
        title: "Assessment Strategies",
        description: "Implement various assessment strategies",
        steps: [
          "Browse assessment strategies by subject",
          "Select appropriate strategies for your lesson",
          "Adapt strategies to your specific needs",
          "Document assessment results"
        ],
        tips: [
          "Use formative and summative assessments",
          "Include self-assessment and peer assessment",
          "Provide timely feedback to students",
          "Track progress over time"
        ]
      },
      {
        title: "Progress Tracking",
        description: "Monitor student progress and performance",
        steps: [
          "View individual student progress reports",
          "Track performance across subjects",
          "Identify areas for improvement",
          "Generate progress reports for parents"
        ],
        tips: [
          "Update progress regularly",
          "Use consistent assessment criteria",
          "Communicate progress with students and parents",
          "Celebrate achievements and growth"
        ]
      }
    ]
  },
  {
    id: "multigrade",
    title: "Multigrade Teaching",
    icon: Users,
    description: "Manage multiple grade levels in one classroom",
    features: [
      {
        title: "Multigrade Planning",
        description: "Create lesson plans for multiple grade levels",
        steps: [
          "Access the Multigrade section",
          "Select the grade levels you're teaching",
          "Choose subjects to integrate",
          "Design activities for different ability levels",
          "Create differentiated instruction strategies",
          "Plan for independent and group work"
        ],
        tips: [
          "Start with common themes across grades",
          "Use flexible grouping strategies",
          "Provide clear expectations for each grade level",
          "Include peer tutoring opportunities"
        ],
        related: ["Lesson Planning", "Differentiation"]
      },
      {
        title: "Differentiation Strategies",
        description: "Implement strategies for diverse learners",
        steps: [
          "Identify learning needs of each grade level",
          "Design tiered activities and assignments",
          "Provide multiple ways to demonstrate learning",
          "Use flexible grouping and seating arrangements"
        ],
        tips: [
          "Use learning centers for independent work",
          "Provide choice in activities and assessments",
          "Use technology to support different learning styles",
          "Regularly assess and adjust strategies"
        ]
      },
      {
        title: "Classroom Management",
        description: "Manage a multigrade classroom effectively",
        steps: [
          "Establish clear routines and procedures",
          "Create visual schedules and expectations",
          "Set up learning stations and centers",
          "Implement peer support systems"
        ],
        tips: [
          "Use color coding for different grade levels",
          "Create quiet spaces for focused work",
          "Establish clear signals for transitions",
          "Build a supportive classroom community"
        ]
      }
    ]
  },
  {
    id: "tools",
    title: "Teaching Tools",
    icon: Lightbulb,
    description: "Access innovative teaching tools and resources",
    features: [
      {
        title: "AI Lesson Planner",
        description: "Use AI to help create lesson plans",
        steps: [
          "Navigate to the AI Planner tool",
          "Enter your lesson topic and objectives",
          "Specify grade level and subject",
          "Review AI-generated suggestions",
          "Customize and refine the plan",
          "Save your final lesson plan"
        ],
        tips: [
          "Provide specific, clear prompts for better results",
          "Review and edit AI suggestions before using",
          "Combine AI suggestions with your expertise",
          "Use AI as a starting point, not a final product"
        ],
        related: ["Lesson Planning", "AI Assistant"]
      },
      {
        title: "Rubric Generator",
        description: "Create assessment rubrics quickly",
        steps: [
          "Access the Rubric Generator tool",
          "Select assessment type and subject",
          "Choose rubric criteria and levels",
          "Customize descriptions for each level",
          "Preview and download your rubric"
        ],
        tips: [
          "Use clear, specific criteria",
          "Include examples for each level",
          "Share rubrics with students in advance",
          "Use rubrics consistently across assessments"
        ]
      },
      {
        title: "Resource Library",
        description: "Access and organize teaching resources",
        steps: [
          "Browse the resource library by category",
          "Search for specific resources",
          "Download and save useful materials",
          "Upload and share your own resources"
        ],
        tips: [
          "Organize resources with clear labels",
          "Share high-quality resources with colleagues",
          "Keep resources updated and relevant",
          "Respect copyright and usage rights"
        ]
      }
    ]
  },
  {
    id: "parent-features",
    title: "Parent Features",
    icon: Users,
    description: "Monitor children's progress and stay involved",
    features: [
      {
        title: "Progress Monitoring",
        description: "Track your child's academic progress",
        steps: [
          "Access your parent dashboard",
          "View progress reports by subject",
          "Check recent activities and achievements",
          "Review upcoming assignments and events"
        ],
        tips: [
          "Check progress reports regularly",
          "Celebrate achievements and improvements",
          "Communicate with teachers about concerns",
          "Support learning at home"
        ]
      },
      {
        title: "Communication",
        description: "Stay connected with teachers and school",
        steps: [
          "Access communication tools",
          "Send messages to teachers",
          "Receive updates and announcements",
          "Schedule parent-teacher conferences"
        ],
        tips: [
          "Keep communication professional and respectful",
          "Ask specific questions about your child's progress",
          "Share relevant information about your child",
          "Respond promptly to teacher communications"
        ]
      },
      {
        title: "Home Support",
        description: "Support learning at home",
        steps: [
          "Access homework and assignment information",
          "Find resources for home learning",
          "Understand curriculum expectations",
          "Support study habits and routines"
        ],
        tips: [
          "Create a consistent homework routine",
          "Provide a quiet study space",
          "Encourage reading and learning activities",
          "Stay positive about learning challenges"
        ]
      }
    ]
  },
  {
    id: "admin-features",
    title: "Administration",
    icon: Settings,
    description: "Manage users, curriculum, and system settings",
    features: [
      {
        title: "User Management",
        description: "Manage user accounts and permissions",
        steps: [
          "Access the admin dashboard",
          "View all user accounts",
          "Create new user accounts",
          "Modify user roles and permissions",
          "Monitor user activity and usage"
        ],
        tips: [
          "Regularly review user accounts",
          "Update permissions as needed",
          "Provide training for new users",
          "Maintain security best practices"
        ]
      },
      {
        title: "Curriculum Management",
        description: "Upload and manage curriculum content",
        steps: [
          "Access curriculum management tools",
          "Upload curriculum documents",
          "Organize content by grade and subject",
          "Update curriculum as needed",
          "Monitor curriculum usage and feedback"
        ],
        tips: [
          "Keep curriculum content current",
          "Organize content logically",
          "Provide clear navigation and search",
          "Gather feedback from teachers"
        ]
      },
      {
        title: "System Settings",
        description: "Configure system-wide settings",
        steps: [
          "Access system settings",
          "Configure security settings",
          "Set up backup and recovery",
          "Monitor system performance",
          "Manage integrations and APIs"
        ],
        tips: [
          "Regularly backup system data",
          "Monitor system performance",
          "Keep security settings updated",
          "Document system configurations"
        ]
      }
    ]
  },
  {
    id: "search",
    title: "Search & Discovery",
    icon: Search,
    description: "Find content and resources quickly",
    features: [
      {
        title: "Global Search",
        description: "Search across all content and resources",
        steps: [
          "Use the search bar in the top navigation",
          "Enter keywords or phrases",
          "Filter results by type, grade, or subject",
          "Click on relevant results to view content"
        ],
        tips: [
          "Use specific keywords for better results",
          "Try different search terms if needed",
          "Use filters to narrow down results",
          "Save useful search results for later"
        ]
      },
      {
        title: "Advanced Filters",
        description: "Use advanced filters to find specific content",
        steps: [
          "Access the advanced search options",
          "Select filters by grade, subject, or type",
          "Choose date ranges or other criteria",
          "Apply multiple filters for precise results"
        ],
        tips: [
          "Start with broad filters and narrow down",
          "Use filters to discover new content",
          "Save common filter combinations",
          "Share filtered results with colleagues"
        ]
      },
      {
        title: "Bookmarks and Favorites",
        description: "Save and organize your favorite content",
        steps: [
          "Bookmark useful content while browsing",
          "Organize bookmarks into folders",
          "Access your bookmarks from any page",
          "Share bookmarks with colleagues"
        ],
        tips: [
          "Use descriptive names for bookmarks",
          "Organize bookmarks by topic or grade",
          "Regularly review and update bookmarks",
          "Share high-quality resources with others"
        ]
      }
    ]
  }
]

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("getting-started")

  const filteredSections = helpSections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.features.some(feature =>
      feature.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feature.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  )

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim() === "") {
      setActiveTab("getting-started")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Help Center
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive guide to all features of the OECS Learning Hub. Find answers, tutorials, and tips to make the most of your educational experience.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search help topics, features, or questions..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <HelpCircle className="h-8 w-8 text-blue-500" />
                <div>
                  <h3 className="font-semibold">Getting Started</h3>
                  <p className="text-sm text-gray-600">New user guide</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <BookOpen className="h-8 w-8 text-green-500" />
                <div>
                  <h3 className="font-semibold">Curriculum</h3>
                  <p className="text-sm text-gray-600">Browse and manage</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <FileText className="h-8 w-8 text-purple-500" />
                <div>
                  <h3 className="font-semibold">Lesson Planning</h3>
                  <p className="text-sm text-gray-600">Create and share</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <ClipboardCheck className="h-8 w-8 text-orange-500" />
                <div>
                  <h3 className="font-semibold">Assessment</h3>
                  <p className="text-sm text-gray-600">Quizzes and tracking</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Help Topics</CardTitle>
              </CardHeader>
              <CardContent>
                <nav className="space-y-2">
                  {helpSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveTab(section.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        activeTab === section.id
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <section.icon className="h-5 w-5" />
                        <div>
                          <div className="font-medium">{section.title}</div>
                          <div className="text-sm text-gray-500">{section.description}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {filteredSections.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No results found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search terms or browse the help topics below.
                  </p>
                  <Button onClick={() => setSearchQuery("")}>
                    Clear Search
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                {filteredSections.map((section) => (
                  <Card key={section.id} className="shadow-sm">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <section.icon className="h-8 w-8 text-blue-500" />
                        <div>
                          <CardTitle className="text-2xl">{section.title}</CardTitle>
                          <CardDescription className="text-lg">{section.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        {section.features.map((feature, index) => (
                          <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left">
                              <div className="flex items-center space-x-3">
                                <CheckCircle className="h-5 w-5 text-green-500" />
                                <span className="font-semibold">{feature.title}</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-4 pt-4">
                                <p className="text-gray-700">{feature.description}</p>
                                
                                {feature.steps && (
                                  <div>
                                    <h4 className="font-semibold mb-2 flex items-center">
                                      <ArrowRight className="h-4 w-4 mr-2" />
                                      Steps:
                                    </h4>
                                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                      {feature.steps.map((step, stepIndex) => (
                                        <li key={stepIndex}>{step}</li>
                                      ))}
                                    </ol>
                                  </div>
                                )}

                                {feature.tips && (
                                  <div>
                                    <h4 className="font-semibold mb-2 flex items-center">
                                      <Lightbulb className="h-4 w-4 mr-2" />
                                      Tips:
                                    </h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                      {feature.tips.map((tip, tipIndex) => (
                                        <li key={tipIndex}>{tip}</li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {feature.related && (
                                  <div>
                                    <h4 className="font-semibold mb-2 flex items-center">
                                      <Info className="h-4 w-4 mr-2" />
                                      Related Topics:
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                      {feature.related.map((related, relatedIndex) => (
                                        <Badge key={relatedIndex} variant="secondary">
                                          {related}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Contact Support */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Still Need Help?</h3>
              <p className="text-gray-600 mb-4">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex justify-center space-x-4">
                <Button asChild>
                  <Link href="/contact">
                    Contact Support
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/feedback">
                    Send Feedback
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