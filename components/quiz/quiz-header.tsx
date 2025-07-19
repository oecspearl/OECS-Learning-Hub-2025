import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, HelpCircle, Edit3, MoreHorizontal, Shuffle, FileText } from "lucide-react"

export function QuizHeader() {
  const questionTypes = [
    {
      icon: CheckCircle,
      title: "Multiple Choice",
      description: "Traditional A, B, C, D format questions",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
    },
    {
      icon: HelpCircle,
      title: "True/False",
      description: "Simple binary choice questions",
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
    },
    {
      icon: Edit3,
      title: "Short Answer",
      description: "Open-ended response questions",
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
    },
    {
      icon: MoreHorizontal,
      title: "Fill in the Blank",
      description: "Complete the sentence format",
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-600",
    },
    {
      icon: Shuffle,
      title: "Matching",
      description: "Connect related items together",
      color: "bg-pink-50 border-pink-200",
      iconColor: "text-pink-600",
    },
    {
      icon: FileText,
      title: "Essay",
      description: "Extended written responses",
      color: "bg-indigo-50 border-indigo-200",
      iconColor: "text-indigo-600",
    },
  ]

  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-b">
      <div className="max-w-[1400px] mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI-Powered Quiz Generator</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create comprehensive quizzes with multiple question types, tailored to your curriculum and student needs.
          </p>
          <Badge variant="secondary" className="mt-4">
            Powered by AI ✨
          </Badge>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {questionTypes.map((type) => {
            const IconComponent = type.icon
            return (
              <Card key={type.title} className={`${type.color} border-2 hover:shadow-md transition-shadow`}>
                <CardContent className="p-4 text-center">
                  <IconComponent className={`w-8 h-8 mx-auto mb-2 ${type.iconColor}`} />
                  <h3 className="font-semibold text-sm mb-1">{type.title}</h3>
                  <p className="text-xs text-gray-600 leading-tight">{type.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
