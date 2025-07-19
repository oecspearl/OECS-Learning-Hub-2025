import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Target, MessageSquare } from "lucide-react"

interface WeeklyOverviewProps {
  theme: string
  focusAreas?: string[] | string
  vocabulary?: string[]
  color?: "pink" | "orange" | "purple" | "green" | "blue" | "cyan" | "amber"
}

export function WeeklyOverview({ theme, focusAreas, vocabulary, color = "blue" }: WeeklyOverviewProps) {
  const colorMap = {
    pink: {
      border: "border-pink-200",
      bg: "bg-pink-50",
      text: "text-pink-700",
      icon: "text-pink-500",
    },
    orange: {
      border: "border-orange-200",
      bg: "bg-orange-50",
      text: "text-orange-700",
      icon: "text-orange-500",
    },
    purple: {
      border: "border-purple-200",
      bg: "bg-purple-50",
      text: "text-purple-700",
      icon: "text-purple-500",
    },
    green: {
      border: "border-green-200",
      bg: "bg-green-50",
      text: "text-green-700",
      icon: "text-green-500",
    },
    blue: {
      border: "border-blue-200",
      bg: "bg-blue-50",
      text: "text-blue-700",
      icon: "text-blue-500",
    },
    cyan: {
      border: "border-cyan-200",
      bg: "bg-cyan-50",
      text: "text-cyan-700",
      icon: "text-cyan-500",
    },
    amber: {
      border: "border-amber-200",
      bg: "bg-amber-50",
      text: "text-amber-700",
      icon: "text-amber-500",
    },
  }

  // Default to blue if the color is not in the map
  const colors = colorMap[color] || colorMap.blue

  // Handle the case where focusAreas is a string instead of an array
  const focusAreasArray = Array.isArray(focusAreas) ? focusAreas : focusAreas ? [focusAreas] : []

  return (
    <Card className={`${colors.border} h-full shadow-sm`}>
      <CardHeader className={`${colors.bg} border-b ${colors.border.replace("200", "100")}`}>
        <CardTitle className={colors.text}>Weekly Overview</CardTitle>
      </CardHeader>
      <CardContent className="pt-4 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center">
            <BookOpen className={`mr-2 h-5 w-5 ${colors.icon}`} />
            <h3 className="font-semibold">Theme</h3>
          </div>
          <p className="pl-7">{theme}</p>
        </div>

        {focusAreasArray && focusAreasArray.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center">
              <Target className={`mr-2 h-5 w-5 ${colors.icon}`} />
              <h3 className="font-semibold">Focus Areas</h3>
            </div>
            <ul className="pl-7 list-disc space-y-1 ml-5">
              {focusAreasArray.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          </div>
        )}

        {vocabulary && vocabulary.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center">
              <MessageSquare className={`mr-2 h-5 w-5 ${colors.icon}`} />
              <h3 className="font-semibold">Key Vocabulary</h3>
            </div>
            <div className="pl-7 flex flex-wrap gap-1">
              {vocabulary.map((word, index) => (
                <span key={index} className="text-sm px-2 py-1 rounded-md bg-gray-100">
                  {word}
                </span>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
