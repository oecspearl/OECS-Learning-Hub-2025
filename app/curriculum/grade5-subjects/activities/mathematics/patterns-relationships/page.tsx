import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, TrendingUp, Music, Search, Cog, Palette } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Grade5MathematicsPatternsActivitiesPage() {
  const activities = [
    {
      id: "dance",
      title: "Transformation Dance Studio",
      icon: Music,
      difficulty: "Medium",
      time: "45 mins",
      color: "from-purple-500 to-pink-500",
      description:
        "Students learn dance moves representing transformations, choreograph dances showing transformation patterns, and perform while calling out transformation names.",
      materials: "Dance mats, music, transformation cards, mirrors",
      procedure: [
        "Introduce the concept of transformations and their types: translation, rotation, and reflection.",
        "Teach students dance moves that represent each transformation:",
        "- Slide Step: Translation movements",
        "- Spin Move: Rotation movements",
        "- Mirror Move: Reflection movements",
        "Divide students into groups and have them choreograph dances showing transformation patterns.",
        "Use mirrors to check the accuracy of reflection movements.",
        "Students perform their dances while calling out the transformation names.",
        "The audience identifies the transformation patterns in the performances.",
      ],
    },
    {
      id: "detective",
      title: "Polygon Detective Investigation",
      icon: Search,
      difficulty: "Hard",
      time: "55 mins",
      color: "from-blue-500 to-indigo-500",
      description:
        "Students investigate 'mystery polygons' using geometric clues, identifying patterns in sides, angles, and symmetry properties.",
      materials: "Shape templates, measuring tools, mystery clues, detective notebooks",
      procedure: [
        "Divide students into teams and assign each team a 'mystery polygon' to investigate.",
        "Provide teams with shape templates, measuring tools, and a set of geometric clues.",
        "Students analyze the mystery polygon by identifying patterns in:",
        "- Number of sides and angles",
        "- Symmetry properties",
        "- Regular vs. irregular characteristics",
        "Have teams create geometric family trees showing the relationships between different polygons.",
        "Students write detective reports explaining their polygon discoveries and present their cases to a 'polygon court' with evidence.",
      ],
    },
    {
      id: "function",
      title: "Function Machine Factory",
      icon: Cog,
      difficulty: "Medium",
      time: "40 mins",
      color: "from-green-500 to-teal-500",
      description:
        "Students design and operate function machines, exploring input-output relationships and algebraic thinking.",
      materials: "Function machine templates, input-output cards, calculators",
      procedure: [
        "Introduce the concept of function machines and input-output relationships.",
        "Have students design their own function machines with specific rules (e.g., 'multiply by 3, then add 2').",
        "Provide input-output cards with numbers for students to process through their function machines.",
        "Students analyze the input-output relationships and identify the function rules.",
        "Have students operate their function machines and explain the algebraic thinking involved.",
      ],
    },
    {
      id: "quilt",
      title: "Pattern Block Quilt Design",
      icon: Palette,
      difficulty: "Medium",
      time: "50 mins",
      color: "from-orange-500 to-red-500",
      description: "Students create quilt designs using pattern blocks, exploring geometric patterns and symmetry.",
      materials: "Pattern blocks, quilt templates, art supplies",
      procedure: [
        "Provide students with pattern blocks and quilt templates.",
        "Have students create quilt designs using the pattern blocks, focusing on geometric patterns and symmetry.",
        "Students analyze the patterns in their quilt designs and describe the geometric relationships.",
        "Have students create a display of their quilt designs with explanations of the patterns and symmetry.",
      ],
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "Hard":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="container mx-auto py-8">
      <Breadcrumb
        items={[
          { label: "Curriculum", href: "/curriculum" },
          { label: "Grade 5 Subjects", href: "/curriculum/grade5-subjects" },
          { label: "Mathematics", href: "/curriculum/grade5-subjects/mathematics" },
          { label: "Activities", href: "/curriculum/grade5-subjects/activities/mathematics" },
          {
            label: "Patterns & Relationships",
            href: "/curriculum/grade5-subjects/activities/mathematics/patterns-relationships",
          },
        ]}
      />

      <Link href="/curriculum/grade5-subjects/mathematics/patterns-relationships">
        <Button variant="outline" className="mb-6 hover:bg-gray-50 transition-colors">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Patterns & Relationships
        </Button>
      </Link>

      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl mb-8">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 opacity-90"></div>
        <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-white">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
              <TrendingUp className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-center">Patterns & Relationships Activities</h1>
          <p className="text-xl text-white/90 text-center max-w-3xl mx-auto leading-relaxed">
            Interactive activities designed to explore numerical and geometric patterns, relationships, and algebraic
            thinking through creative exploration.
          </p>
        </div>
      </div>

      {/* Activities Accordion */}
      <Card className="border-2 border-amber-200">
        <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50">
          <CardTitle className="text-2xl text-amber-700 flex items-center space-x-2">
            <TrendingUp className="h-6 w-6" />
            <span>Pattern Exploration Activities</span>
          </CardTitle>
          <CardDescription className="text-lg text-gray-600">
            Discover mathematical relationships through {activities.length} creative and engaging activities
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <Accordion type="single" collapsible className="space-y-4">
            {activities.map((activity) => {
              const IconComponent = activity.icon
              return (
                <AccordionItem
                  key={activity.id}
                  value={activity.id}
                  className="border-2 border-gray-200 rounded-lg px-4 hover:border-amber-300 transition-colors"
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center space-x-4 w-full">
                      <div className={`p-3 bg-gradient-to-r ${activity.color} rounded-lg text-white shadow-lg`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-lg font-semibold text-gray-800">{activity.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Badge className={getDifficultyColor(activity.difficulty)}>{activity.difficulty}</Badge>
                        <Badge variant="outline" className="bg-orange-50 text-orange-700">
                          {activity.time}
                        </Badge>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6">
                    <div className="space-y-6">
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">🎯 Learning Objective</h4>
                        <p className="text-gray-700">{activity.description}</p>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-800 mb-2 flex items-center">🧰 Materials Needed</h4>
                        <p className="text-gray-700">{activity.materials}</p>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                          📋 Step-by-Step Procedure
                        </h4>
                        <ol className="space-y-2 text-gray-700">
                          {activity.procedure.map((step, index) => (
                            <li key={index} className="flex">
                              {step.startsWith("-") ? (
                                <div className="flex">
                                  <span className="mr-3 text-green-600">•</span>
                                  <span>{step.substring(1).trim()}</span>
                                </div>
                              ) : (
                                <div className="flex">
                                  <span className="mr-3 font-semibold text-green-600 min-w-[24px]">
                                    {step.match(/^\d+\./) ? "" : `${index + 1}.`}
                                  </span>
                                  <span>{step}</span>
                                </div>
                              )}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </CardContent>
      </Card>

      {/* Extensions Section */}
      <div className="mt-8 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200">
        <h2 className="text-xl font-bold text-center mb-4 text-orange-700">🚀 Extension Ideas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-start space-x-2">
            <span className="text-orange-600">•</span>
            <span>Create digital pattern galleries using technology tools</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-orange-600">•</span>
            <span>Research patterns in nature and architecture</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-orange-600">•</span>
            <span>Design patterns for school murals or decorations</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-orange-600">•</span>
            <span>Connect patterns to music and rhythm activities</span>
          </div>
        </div>
      </div>
    </div>
  )
}
