import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  TrendingUp,
  Users,
  Clock,
  ChevronLeft,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  BarChart3,
  Palette,
  Cog,
  LineChart,
} from "lucide-react"
import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"

export default function Grade6PatternsRelationshipsActivitiesPage() {
  const activities = [
    {
      id: "growing-pattern-investigation",
      title: "Growing Pattern Investigation",
      outcome: "P1.1 - Recognizing, Describing and Extending Patterns",
      duration: "60-75 minutes",
      difficulty: "Intermediate",
      groupSize: "Pairs or Small Groups",
      icon: BarChart3,
      description:
        "Students investigate growing patterns using concrete materials and develop algebraic thinking through pattern analysis.",
      materials: [
        "Pattern blocks or colored tiles",
        "Graph paper",
        "Colored pencils",
        "T-charts for recording",
        "Calculators",
        "Coordinate grid paper",
      ],
      instructions: [
        {
          step: 1,
          title: "Pattern Creation",
          description:
            "Create a growing pattern using blocks (e.g., 3, 6, 9, 12... or L-shapes that grow). Build the first 4-5 terms physically.",
        },
        {
          step: 2,
          title: "Data Recording",
          description:
            "Record pattern in a table showing term number and value. Look for relationships between term position and value.",
        },
        {
          step: 3,
          title: "Graphical Representation",
          description: "Graph the pattern on coordinate plane with term number on x-axis and pattern value on y-axis.",
        },
        {
          step: 4,
          title: "Algebraic Expression",
          description:
            "Write the pattern rule algebraically (e.g., 3n for the pattern 3, 6, 9, 12...). Test the rule with known values.",
        },
        {
          step: 5,
          title: "Prediction and Verification",
          description:
            "Predict the 20th term using the algebraic rule and verify by extending the pattern or using the formula.",
        },
      ],
      assessment: {
        formative: [
          "Observe pattern building and extension accuracy",
          "Check table completion and relationship identification",
          "Monitor algebraic expression development",
        ],
        summative: [
          "Accuracy of pattern rule and predictions",
          "Quality of graphical representations",
          "Mathematical communication in explanations",
        ],
      },
      extensions: [
        "Investigate non-linear growing patterns (quadratic)",
        "Create patterns for area and perimeter relationships",
        "Design patterns that decrease or have negative terms",
        "Connect patterns to real-world growth scenarios",
      ],
      realWorldConnections: [
        "Population growth and demographic studies",
        "Business revenue and expense patterns",
        "Scientific data collection and analysis",
        "Architecture and structural design patterns",
      ],
    },
    {
      id: "coordinate-art-gallery",
      title: "Coordinate Art Gallery",
      outcome: "P2.1 - Variables and Relationships",
      duration: "75-90 minutes",
      difficulty: "Intermediate",
      groupSize: "Individual work, Gallery sharing",
      icon: Palette,
      description:
        "Students create and interpret coordinate art while developing understanding of coordinate systems and algebraic relationships.",
      materials: [
        "Graph paper (large grid)",
        "Colored pencils or markers",
        "Coordinate pair lists",
        "Rulers and straightedges",
        "Digital graphing tools (optional)",
        "Gallery display materials",
      ],
      instructions: [
        {
          step: 1,
          title: "Mystery Picture Introduction",
          description:
            "Provide coordinate pairs that form a picture when plotted. Start with simple shapes to build confidence.",
        },
        {
          step: 2,
          title: "Coordinate Plotting",
          description:
            "Students plot points accurately and connect in order to reveal the hidden picture (school mascot, seasonal theme, etc.).",
        },
        {
          step: 3,
          title: "Pattern Analysis",
          description:
            "Analyze the coordinate relationships. Look for patterns in x and y values, symmetry, and transformations.",
        },
        {
          step: 4,
          title: "Original Art Creation",
          description:
            "Create their own coordinate picture for classmates. Plan design, determine coordinates, and write clear directions.",
        },
        {
          step: 5,
          title: "Gallery Exhibition",
          description:
            "Display artwork with coordinate instructions. Students visit gallery and recreate each other's coordinate art.",
        },
      ],
      assessment: {
        formative: [
          "Check coordinate plotting accuracy",
          "Observe understanding of coordinate system",
          "Monitor pattern recognition in coordinates",
        ],
        summative: [
          "Accuracy of original coordinate art instructions",
          "Quality and creativity of artistic designs",
          "Ability to follow and give coordinate directions",
        ],
      },
      extensions: [
        "Use graphing software like Desmos for digital creation",
        "Explore coordinate transformations (reflection, rotation)",
        "Create 3D coordinate art using xyz coordinates",
        "Design coordinate art animations showing movement",
      ],
      realWorldConnections: [
        "Computer graphics and game design",
        "Navigation and GPS mapping systems",
        "Engineering and architectural blueprints",
        "Art and digital design applications",
      ],
    },
    {
      id: "function-machine-experiments",
      title: "Function Machine Experiments",
      outcome: "P2.2 - Variables and Relationships",
      duration: "50-65 minutes",
      difficulty: "Advanced",
      groupSize: "Small Groups",
      icon: Cog,
      description:
        "Students explore functional relationships through hands-on function machine activities and algebraic expression building.",
      materials: [
        "Function machine templates or boxes",
        "Input/output cards",
        "Recording sheets",
        "Operation cards (+, -, ×, ÷)",
        "Number cards",
        "Algebraic expression builders",
      ],
      instructions: [
        {
          step: 1,
          title: "Function Machine Introduction",
          description:
            "Introduce the concept of function machines that take inputs and produce outputs according to a rule.",
        },
        {
          step: 2,
          title: "Rule Discovery",
          description:
            "Give students input-output pairs and challenge them to discover the hidden function rule through testing.",
        },
        {
          step: 3,
          title: "Expression Building",
          description: "Write the discovered rule as an algebraic expression using variables (e.g., n + 5, 2n - 1).",
        },
        {
          step: 4,
          title: "Prediction Testing",
          description:
            "Use the algebraic expression to predict outputs for new inputs, then verify with the function machine.",
        },
        {
          step: 5,
          title: "Machine Design",
          description:
            "Design their own function machines with unique rules for other groups to solve and express algebraically.",
        },
      ],
      assessment: {
        formative: [
          "Observe rule discovery strategies and logical thinking",
          "Check algebraic expression accuracy",
          "Monitor understanding of input-output relationships",
        ],
        summative: [
          "Accuracy of function rule identification",
          "Quality of algebraic expression writing",
          "Creativity and accuracy of student-designed function machines",
        ],
      },
      extensions: [
        "Create multi-step function machines",
        "Explore inverse functions and reverse operations",
        "Connect to computer programming concepts",
        "Design function machines for geometry relationships",
      ],
      realWorldConnections: [
        "Computer programming and coding",
        "Manufacturing and production processes",
        "Economic models and business functions",
        "Scientific formulas and relationships",
      ],
    },
    {
      id: "table-graph-connections",
      title: "Table and Graph Connections",
      outcome: "P1.2 - Pattern Representation Translation",
      duration: "60-75 minutes",
      difficulty: "Intermediate",
      groupSize: "Pairs",
      icon: LineChart,
      description:
        "Students explore connections between tables, graphs, and algebraic expressions through area and perimeter investigations.",
      materials: [
        "Grid paper",
        "Geometric shapes and manipulatives",
        "Graphing paper",
        "Measuring tools",
        "Table templates",
        "Calculators",
      ],
      instructions: [
        {
          step: 1,
          title: "Perimeter Investigation Setup",
          description:
            "Create rectangles with width 2 and varying lengths (1, 2, 3, 4, 5). Calculate perimeter for each rectangle.",
        },
        {
          step: 2,
          title: "Data Table Creation",
          description:
            "Record length and perimeter data in table format. Look for patterns in how perimeter changes as length increases.",
        },
        {
          step: 3,
          title: "Graphical Analysis",
          description:
            "Graph the relationship with length on x-axis and perimeter on y-axis. Analyze the shape and slope of the line.",
        },
        {
          step: 4,
          title: "Pattern Rule Development",
          description: "Develop algebraic expression for the pattern (P = 2l + 4). Test rule with table values.",
        },
        {
          step: 5,
          title: "Multiple Representation Comparison",
          description:
            "Compare the same relationship shown in table, graph, and equation. Discuss advantages of each representation.",
        },
      ],
      assessment: {
        formative: [
          "Check measurement accuracy and calculations",
          "Observe pattern recognition in tables and graphs",
          "Monitor algebraic thinking development",
        ],
        summative: [
          "Accuracy of all three representations (table, graph, equation)",
          "Quality of pattern analysis and connections",
          "Understanding demonstration across multiple formats",
        ],
      },
      extensions: [
        "Investigate area patterns for different shapes",
        "Explore volume patterns for 3D objects",
        "Create patterns involving multiple variables",
        "Connect to real architectural measurement problems",
      ],
      realWorldConnections: [
        "Construction and building planning",
        "Engineering design and optimization",
        "Scientific data analysis and modeling",
        "Economic cost and revenue analysis",
      ],
    },
  ]

  const learningOutcomes = [
    "Identify and describe patterns in tables of values and graphs involving perimeter, area and volume calculations",
    "Translate patterns from one representation to another (concrete, pictorial, symbolic)",
    "Describe pattern rules using symbols and one or more operations",
    "Write and solve problems with expressions and equations using unknowns",
    "Determine equality and inequality of quantities using mathematical expressions",
    "Use coordinate systems to represent and analyze mathematical relationships",
  ]

  const patternTypes = [
    {
      type: "Linear Growing Patterns",
      description: "Patterns that increase by a constant amount",
      examples: ["3, 6, 9, 12... (add 3)", "5, 10, 15, 20... (add 5)"],
      algebraicForm: "an + b",
    },
    {
      type: "Geometric Growing Patterns",
      description: "Patterns involving area and perimeter relationships",
      examples: ["Square perimeters: 4, 8, 12, 16...", "Rectangle areas: 2, 4, 6, 8..."],
      algebraicForm: "Based on geometric formulas",
    },
    {
      type: "Position-Value Patterns",
      description: "Patterns where position determines value",
      examples: ["Term 1=2, Term 2=4, Term 3=6...", "Position × 2"],
      algebraicForm: "f(n) = expression with n",
    },
    {
      type: "Coordinate Patterns",
      description: "Patterns visible on coordinate graphs",
      examples: ["Points forming lines", "Geometric shape patterns"],
      algebraicForm: "y = mx + b relationships",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Curriculum", href: "/curriculum" },
            { label: "Grade 6 Subjects", href: "/curriculum/grade6-subjects" },
            { label: "Mathematics Activities", href: "/curriculum/grade6-subjects/activities/mathematics" },
            {
              label: "Patterns & Relationships",
              href: "/curriculum/grade6-subjects/activities/mathematics/patterns-relationships",
            },
          ]}
        />

        <Link href="/curriculum/grade6-subjects/activities/mathematics">
          <Button variant="outline" className="mb-6">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Mathematics Activities
          </Button>
        </Link>

        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Patterns & Relationships Activities</h1>
              <p className="text-xl text-gray-600">Grade 6 Mathematics</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Explore algebraic thinking through pattern recognition, coordinate graphing, and functional relationships.
            These activities bridge concrete experiences with abstract mathematical concepts.
          </p>
        </div>

        {/* Learning Outcomes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-purple-600" />
              Learning Outcomes
            </CardTitle>
            <CardDescription>By the end of these activities, students will be able to:</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {learningOutcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{outcome}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Pattern Types Reference */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              Types of Mathematical Patterns
            </CardTitle>
            <CardDescription>Different pattern types students will explore and analyze</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {patternTypes.map((pattern, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{pattern.type}</h4>
                  <p className="text-sm text-gray-600 mb-3">{pattern.description}</p>
                  <div className="space-y-2">
                    <div>
                      <span className="text-xs font-medium text-gray-500">Examples:</span>
                      <ul className="text-xs text-gray-600 mt-1">
                        {pattern.examples.map((example, exIndex) => (
                          <li key={exIndex}>• {example}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-gray-500">Algebraic Form:</span>
                      <p className="text-xs text-blue-600 font-mono">{pattern.algebraicForm}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Activities */}
        <div className="space-y-8 mb-12">
          {activities.map((activity) => {
            const IconComponent = activity.icon
            return (
              <Card key={activity.id} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">{activity.title}</CardTitle>
                        <div className="flex items-center gap-4 mt-2">
                          <Badge variant="outline">{activity.outcome}</Badge>
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Clock className="w-4 h-4" />
                            {activity.duration}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Users className="w-4 h-4" />
                            {activity.groupSize}
                          </div>
                          <Badge
                            variant={
                              activity.difficulty === "Advanced"
                                ? "destructive"
                                : activity.difficulty === "Intermediate"
                                  ? "secondary"
                                  : "default"
                            }
                          >
                            {activity.difficulty}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base mt-4">{activity.description}</CardDescription>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      {/* Materials */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Cog className="w-4 h-4" />
                          Materials Needed
                        </h4>
                        <ul className="space-y-1">
                          {activity.materials.map((material, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                              {material}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Assessment */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Assessment Strategies
                        </h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="text-sm font-medium text-gray-700 mb-1">Formative Assessment:</h5>
                            <ul className="space-y-1">
                              {activity.assessment.formative.map((item, index) => (
                                <li key={index} className="text-sm text-gray-600">
                                  • {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium text-gray-700 mb-1">Summative Assessment:</h5>
                            <ul className="space-y-1">
                              {activity.assessment.summative.map((item, index) => (
                                <li key={index} className="text-sm text-gray-600">
                                  • {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      {/* Instructions */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <AlertCircle className="w-4 h-4" />
                          Step-by-Step Instructions
                        </h4>
                        <div className="space-y-3">
                          {activity.instructions.map((instruction, index) => (
                            <div key={index} className="border-l-4 border-purple-200 pl-4">
                              <h5 className="font-medium text-gray-900 text-sm">
                                Step {instruction.step}: {instruction.title}
                              </h5>
                              <p className="text-sm text-gray-600 mt-1">{instruction.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Real-World Connections */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Lightbulb className="w-4 h-4" />
                          Real-World Connections
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {activity.realWorldConnections.map((connection, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {connection}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Extensions */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Extension Activities</h4>
                        <ul className="space-y-1">
                          {activity.extensions.map((extension, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              {extension}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Algebraic Thinking Development */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-green-600" />
              Developing Algebraic Thinking
            </CardTitle>
            <CardDescription>Key concepts and progressions for building algebraic understanding</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 text-green-700">Concrete Level</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Build patterns with physical materials</li>
                  <li>• Count and measure concrete objects</li>
                  <li>• Use manipulatives to show relationships</li>
                  <li>• Connect to real-world situations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 text-blue-700">Representational Level</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Create tables and graphs</li>
                  <li>• Draw pictures and diagrams</li>
                  <li>• Use coordinate systems</li>
                  <li>• Make visual connections between formats</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 text-purple-700">Abstract Level</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Write algebraic expressions</li>
                  <li>• Use variables and operations</li>
                  <li>• Solve equations with unknowns</li>
                  <li>• Generalize mathematical relationships</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button asChild variant="outline">
            <Link href="/curriculum/grade6-subjects/activities/mathematics/operations">
              Previous: Operations Activities
            </Link>
          </Button>
          <Button asChild>
            <Link href="/curriculum/grade6-subjects/activities/mathematics/geometrical-thinking">
              Next: Geometrical Thinking Activities
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
