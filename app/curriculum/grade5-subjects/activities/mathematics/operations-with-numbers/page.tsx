import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Calculator, ChefHat, Store, MapPin, Code, Target } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Grade5MathematicsOperationsActivitiesPage() {
  const activities = [
    {
      id: "cooking",
      title: "Fraction Cooking Competition",
      icon: ChefHat,
      difficulty: "Hard",
      time: "60 mins",
      color: "from-orange-500 to-red-500",
      description:
        "Teams compete in a cooking show format, modifying recipes by adding/subtracting fractions and explaining their reasoning.",
      materials: "Recipe cards, measuring cups, fraction manipulatives, mixing bowls, ingredients",
      procedure: [
        "Divide the class into teams and assign each team a recipe to modify.",
        "Provide each team with measuring cups, fraction manipulatives, and the necessary ingredients.",
        "Teams must modify the recipe quantities by adding or subtracting fractions to adjust the serving size.",
        "Students use visual models to show their fraction operations and explain their reasoning.",
        "Teams present their modified recipes and explain their mathematical processes.",
        "A panel of judges evaluates the presentations based on mathematical accuracy and creativity.",
        "If cooking facilities are available, teams can prepare their recipes and have the judges taste-test their creations.",
      ],
    },
    {
      id: "store",
      title: "Decimal Store Cash Register",
      icon: Store,
      difficulty: "Medium",
      time: "50 mins",
      color: "from-green-500 to-emerald-500",
      description:
        "Students operate stores with decimal-priced items, practicing decimal addition and subtraction while calculating totals and making change.",
      materials: "Play money, cash registers, price tags, receipt books, calculators",
      procedure: [
        "Set up a classroom store with various items priced in decimals.",
        "Students take turns as cashiers and customers.",
        "Customers purchase items from the store, and cashiers use decimal addition to calculate the total cost.",
        "Cashiers practice decimal subtraction when making change for customers.",
        "Encourage students to use estimation to check the reasonableness of their answers.",
        "Have students handle customer complaints about incorrect change and resolve the issues using mathematical reasoning.",
        "At the end of the day, cashiers reconcile their cash registers and provide a summary of their transactions.",
      ],
    },
    {
      id: "adventure",
      title: "Number Line Adventures",
      icon: MapPin,
      difficulty: "Medium",
      time: "45 mins",
      color: "from-blue-500 to-cyan-500",
      description:
        "Students go on 'adventures' along giant number lines, physically demonstrating addition and subtraction with fractions and decimals.",
      materials: "Large floor number lines, fraction/decimal cards, adventure story cards",
      procedure: [
        "Create large floor number lines using tape or chalk, marking intervals with fractions and decimals.",
        "Prepare fraction/decimal cards with addition and subtraction problems.",
        "Write adventure story cards with scenarios that require students to move along the number line.",
        "Students draw operation cards and adventure story cards, then physically demonstrate the addition and subtraction on the number line.",
        "Have students record their journey with mathematical expressions and create a narrative incorporating their mathematical journey.",
        "Students share their stories with the class, emphasizing the mathematical concepts involved.",
      ],
    },
    {
      id: "codebreaker",
      title: "Operation Code Breaker",
      icon: Code,
      difficulty: "Medium",
      time: "40 mins",
      color: "from-purple-500 to-indigo-500",
      description: "Students solve equations to decode secret messages, combining math skills with code-breaking fun.",
      materials: "Coded messages, equation solving sheets, pencils",
      procedure: [
        "Create coded messages where each letter is represented by a numerical value.",
        "Provide students with equations that they must solve to decode the letters.",
        "Students solve the equations and use the solutions to decipher the secret messages.",
        "The first student or team to decode the message wins.",
      ],
    },
    {
      id: "bingo",
      title: "Math Bingo",
      icon: Target,
      difficulty: "Easy",
      time: "30 mins",
      color: "from-pink-500 to-rose-500",
      description:
        "Students play bingo using addition, subtraction, multiplication, and division problems, reinforcing their operation skills in a fun and engaging way.",
      materials: "Bingo cards, markers, calling cards with operation problems",
      procedure: [
        "Create bingo cards with numbers as answers to operation problems.",
        "Prepare calling cards with addition, subtraction, multiplication, and division problems.",
        "Call out the operation problems, and students mark the corresponding answers on their bingo cards.",
        "The first student to get bingo wins.",
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
            label: "Operations with Numbers",
            href: "/curriculum/grade5-subjects/activities/mathematics/operations-with-numbers",
          },
        ]}
      />

      <Link href="/curriculum/grade5-subjects/mathematics/operations-with-numbers">
        <Button variant="outline" className="mb-6 hover:bg-gray-50 transition-colors">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Operations with Numbers
        </Button>
      </Link>

      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl mb-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 opacity-90"></div>
        <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-white">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
              <Calculator className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-center">Operations with Numbers Activities</h1>
          <p className="text-xl text-white/90 text-center max-w-3xl mx-auto leading-relaxed">
            Hands-on activities designed to build fluency in addition, subtraction, multiplication, and division with
            whole numbers and decimals.
          </p>
        </div>
      </div>

      {/* Activities Accordion */}
      <Card className="border-2 border-blue-200">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardTitle className="text-2xl text-blue-700 flex items-center space-x-2">
            <Calculator className="h-6 w-6" />
            <span>Mathematical Operations Activities</span>
          </CardTitle>
          <CardDescription className="text-lg text-gray-600">
            Master operations through {activities.length} engaging and interactive activities
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
                  className="border-2 border-gray-200 rounded-lg px-4 hover:border-blue-300 transition-colors"
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
                        <Badge variant="outline" className="bg-blue-50 text-blue-700">
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
                              <span className="mr-3 font-semibold text-green-600 min-w-[24px]">{index + 1}.</span>
                              <span>{step}</span>
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

      {/* Assessment Ideas */}
      <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200">
        <h2 className="text-xl font-bold text-center mb-4 text-indigo-700">📊 Assessment Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-start space-x-2">
            <span className="text-indigo-600">•</span>
            <span>Observe student problem-solving strategies during activities</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-indigo-600">•</span>
            <span>Check accuracy of calculations and reasoning explanations</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-indigo-600">•</span>
            <span>Evaluate student presentations and mathematical communication</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-indigo-600">•</span>
            <span>Document student progress through photo evidence and work samples</span>
          </div>
        </div>
      </div>
    </div>
  )
}
