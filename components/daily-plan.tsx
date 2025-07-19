import { Card, CardContent } from "@/components/ui/card"
import { Sunrise, BookOpen, Calculator, Sunset, ClipboardList } from "lucide-react"

interface DailyPlanProps {
  day: string
  theme: string
  morningActivity: string
  literacyFocus: string
  mathFocus: string
  afternoonActivity: string
  materials: string[]
  assessmentNotes: string
  color?: "pink" | "orange" | "purple" | "green" | "blue" | "cyan"
}

export function DailyPlan({
  day,
  theme,
  morningActivity,
  literacyFocus,
  mathFocus,
  afternoonActivity,
  materials,
  assessmentNotes,
  color = "blue",
}: DailyPlanProps) {
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
  }

  // Default to blue if the color is not in the map
  const colors = colorMap[color] || colorMap.blue

  return (
    <Card className={`${colors.border} shadow-sm`}>
      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className={`text-xl font-bold ${colors.text} mb-1`}>
            {day}: {theme}
          </h3>
          <p className="text-gray-500 text-sm">Daily schedule and activities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Sunrise className={`h-5 w-5 mt-1 ${colors.icon}`} />
              <div>
                <h4 className="font-semibold">Morning Activity</h4>
                <p className="text-gray-700">{morningActivity}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <BookOpen className={`h-5 w-5 mt-1 ${colors.icon}`} />
              <div>
                <h4 className="font-semibold">Literacy Focus</h4>
                <p className="text-gray-700">{literacyFocus}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Calculator className={`h-5 w-5 mt-1 ${colors.icon}`} />
              <div>
                <h4 className="font-semibold">Math Focus</h4>
                <p className="text-gray-700">{mathFocus}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Sunset className={`h-5 w-5 mt-1 ${colors.icon}`} />
              <div>
                <h4 className="font-semibold">Afternoon Activity</h4>
                <p className="text-gray-700">{afternoonActivity}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <ClipboardList className={`h-5 w-5 mt-1 ${colors.icon}`} />
              <div>
                <h4 className="font-semibold">Materials Needed</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {materials.map((material, index) => (
                    <li key={index}>{material}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={`p-3 rounded-md ${colors.bg} mt-4`}>
              <h4 className={`font-semibold ${colors.text}`}>Assessment Notes</h4>
              <p className="text-gray-700 mt-1">{assessmentNotes}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
