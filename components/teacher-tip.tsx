import type { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb } from "lucide-react"

interface TeacherTipProps {
  title?: string
  tip: string | ReactNode
  color?: "pink" | "orange" | "purple" | "green" | "blue"
}

export function TeacherTip({ title = "Teacher Tip", tip, color = "blue" }: TeacherTipProps) {
  const colorMap = {
    pink: {
      bg: "bg-pink-50",
      border: "border-pink-200",
      text: "text-pink-700",
      icon: "text-pink-500",
    },
    orange: {
      bg: "bg-orange-50",
      border: "border-orange-200",
      text: "text-orange-700",
      icon: "text-orange-500",
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      text: "text-purple-700",
      icon: "text-purple-500",
    },
    green: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-700",
      icon: "text-green-500",
    },
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-700",
      icon: "text-blue-500",
    },
  }

  // Ensure color is valid, default to blue if not
  const validColor = color && colorMap[color] ? color : "blue"
  const colors = colorMap[validColor]

  return (
    <Card className={`${colors.border} shadow-sm`}>
      <CardHeader className={`${colors.bg} border-b ${colors.border.replace("200", "100")}`}>
        <CardTitle className={`flex items-center ${colors.text}`}>
          <Lightbulb className={`mr-2 h-5 w-5 ${colors.icon}`} /> {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="text-gray-700">{tip}</div>
      </CardContent>
    </Card>
  )
}
