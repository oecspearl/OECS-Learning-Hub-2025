"use client"

import { useAuth } from "@/contexts/AuthContext"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, BookOpen } from "lucide-react"

export function TeacherTimetable() {
  const { user } = useAuth()

  // Mock timetable data
  const timetableData = [
    {
      day: "Monday",
      periods: [
        { time: "8:00 - 9:00", subject: "Mathematics", grade: "Grade 5", room: "Room 101" },
        { time: "9:00 - 10:00", subject: "Science", grade: "Grade 4", room: "Room 102" },
        { time: "10:00 - 11:00", subject: "Break", grade: "", room: "" },
        { time: "11:00 - 12:00", subject: "Language Arts", grade: "Grade 6", room: "Room 103" },
      ]
    },
    {
      day: "Tuesday",
      periods: [
        { time: "8:00 - 9:00", subject: "Social Studies", grade: "Grade 5", room: "Room 101" },
        { time: "9:00 - 10:00", subject: "Mathematics", grade: "Grade 4", room: "Room 102" },
        { time: "10:00 - 11:00", subject: "Break", grade: "", room: "" },
        { time: "11:00 - 12:00", subject: "Science", grade: "Grade 6", room: "Room 103" },
      ]
    },
    {
      day: "Wednesday",
      periods: [
        { time: "8:00 - 9:00", subject: "Language Arts", grade: "Grade 5", room: "Room 101" },
        { time: "9:00 - 10:00", subject: "Social Studies", grade: "Grade 4", room: "Room 102" },
        { time: "10:00 - 11:00", subject: "Break", grade: "", room: "" },
        { time: "11:00 - 12:00", subject: "Mathematics", grade: "Grade 6", room: "Room 103" },
      ]
    },
    {
      day: "Thursday",
      periods: [
        { time: "8:00 - 9:00", subject: "Science", grade: "Grade 5", room: "Room 101" },
        { time: "9:00 - 10:00", subject: "Language Arts", grade: "Grade 4", room: "Room 102" },
        { time: "10:00 - 11:00", subject: "Break", grade: "", room: "" },
        { time: "11:00 - 12:00", subject: "Social Studies", grade: "Grade 6", room: "Room 103" },
      ]
    },
    {
      day: "Friday",
      periods: [
        { time: "8:00 - 9:00", subject: "Mathematics", grade: "Grade 5", room: "Room 101" },
        { time: "9:00 - 10:00", subject: "Science", grade: "Grade 4", room: "Room 102" },
        { time: "10:00 - 11:00", subject: "Break", grade: "", room: "" },
        { time: "11:00 - 12:00", subject: "Language Arts", grade: "Grade 6", room: "Room 103" },
      ]
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Weekly Timetable</h2>
          <p className="text-gray-600">Your teaching schedule for the week</p>
        </div>
        <Button variant="outline">
          <Calendar className="mr-2 h-4 w-4" />
          View Full Schedule
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {timetableData.map((day, dayIndex) => (
          <Card key={dayIndex} className="h-fit">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{day.day}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {day.periods.map((period, periodIndex) => (
                <div key={periodIndex} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3 text-gray-500" />
                      <span className="font-medium">{period.time}</span>
                    </div>
                  </div>
                  {period.subject !== "Break" ? (
                    <div className="p-2 bg-blue-50 rounded text-sm">
                      <div className="font-medium">{period.subject}</div>
                      <div className="flex items-center space-x-1 text-gray-600">
                        <Users className="h-3 w-3" />
                        <span>{period.grade}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-600">
                        <BookOpen className="h-3 w-3" />
                        <span>{period.room}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="p-2 bg-gray-50 rounded text-sm text-gray-500 text-center">
                      Break
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 