import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Package } from "lucide-react"

interface ActivityCardProps {
  title: string
  description: string
  duration: string
  materials: string[]
  learningAreas: string[]
  color?: "pink" | "orange" | "purple" | "green" | "blue" | "cyan" | "amber"
}

export function ActivityCard({
  title,
  description,
  duration,
  materials,
  learningAreas,
  color = "blue",
}: ActivityCardProps) {
  const colorMap = {
    pink: {
      border: "border-pink-200",
      bg: "bg-pink-50",
      text: "text-pink-700",
      badge: "bg-pink-100 text-pink-700 hover:bg-pink-100",
    },
    orange: {
      border: "border-orange-200",
      bg: "bg-orange-50",
      text: "text-orange-700",
      badge: "bg-orange-100 text-orange-700 hover:bg-orange-100",
    },
    purple: {
      border: "border-purple-200",
      bg: "bg-purple-50",
      text: "text-purple-700",
      badge: "bg-purple-100 text-purple-700 hover:bg-purple-100",
    },
    green: {
      border: "border-green-200",
      bg: "bg-green-50",
      text: "text-green-700",
      badge: "bg-green-100 text-green-700 hover:bg-green-100",
    },
    blue: {
      border: "border-blue-200",
      bg: "bg-blue-50",
      text: "text-blue-700",
      badge: "bg-blue-100 text-blue-700 hover:bg-blue-100",
    },
    cyan: {
      border: "border-cyan-200",
      bg: "bg-cyan-50",
      text: "text-cyan-700",
      badge: "bg-cyan-100 text-cyan-700 hover:bg-cyan-100",
    },
    amber: {
      border: "border-amber-200",
      bg: "bg-amber-50",
      text: "text-amber-700",
      badge: "bg-amber-100 text-amber-700 hover:bg-amber-100",
    },
  }

  // Default to blue if the color is not in the colorMap
  const colors = colorMap[color] || colorMap.blue

  return (
    <Card className={`${colors.border} shadow-sm`}>
      <CardHeader className={`${colors.bg} border-b ${colors.border.replace("200", "100")}`}>
        <CardTitle className={colors.text}>{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4 space-y-4">
        <p>{description}</p>

        <div className="flex items-start gap-2">
          <Clock className="h-5 w-5 text-gray-500 mt-0.5" />
          <div>
            <p className="font-medium">Duration</p>
            <p className="text-sm text-gray-600">{duration}</p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <Package className="h-5 w-5 text-gray-500 mt-0.5" />
          <div>
            <p className="font-medium">Materials</p>
            <ul className="text-sm text-gray-600 list-disc pl-5 mt-1">
              {materials.map((material, index) => (
                <li key={index}>{material}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <p className="font-medium mb-2">Learning Areas</p>
          <div className="flex flex-wrap gap-2">
            {learningAreas.map((area, index) => (
              <Badge key={index} className={colors.badge}>
                {area}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
