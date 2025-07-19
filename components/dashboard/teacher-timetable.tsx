"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScheduleDialog } from "./schedule-dialog"
import { Calendar, Clock, MapPin, Plus } from "lucide-react"
import { getSchedulesByUserId, createSchedule, deleteSchedule, Schedule } from "@/app/actions/schedules"

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
const TIME_RANGES = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
]

export function TeacherTimetable() {
  const { data: session } = useSession()
  const [schedules, setSchedules] = useState<Schedule[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadSchedules = async () => {
      if (session?.user?.id) {
        try {
          const userSchedules = await getSchedulesByUserId(session.user.id)
          setSchedules(userSchedules)
        } catch (error) {
          console.error("Error loading schedules:", error)
        } finally {
          setLoading(false)
        }
      }
    }

    loadSchedules()
  }, [session?.user?.id])

  const handleAddSchedule = async (slot: Omit<Schedule, "id" | "user_id" | "created_at" | "updated_at">) => {
    if (!session?.user?.id) return

    try {
      const newSchedule = await createSchedule({
        user_id: session.user.id,
        day: slot.day,
        time: slot.time,
        subject: slot.subject,
        grade: slot.grade,
        room: slot.room,
      })

      if (newSchedule) {
        setSchedules((prev) => [...prev, newSchedule])
      }
    } catch (error) {
      console.error("Error adding schedule:", error)
    }
  }

  const handleDeleteSchedule = async (id: string) => {
    try {
      const success = await deleteSchedule(id)
      if (success) {
        setSchedules((prev) => prev.filter(schedule => schedule.id !== id))
      }
    } catch (error) {
      console.error("Error deleting schedule:", error)
    }
  }

  const getScheduleForTimeSlot = (day: string, time: string) => {
    return schedules.find((schedule) => schedule.day === day && schedule.time === time)
  }

  if (loading) {
    return (
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold">Weekly Schedule</CardTitle>
          <Button disabled>
            <Plus className="mr-2 h-4 w-4" />
            Add Schedule
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="text-muted-foreground">Loading schedule...</div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Weekly Schedule</CardTitle>
        <Button onClick={() => setIsDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Schedule
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2 text-left">Time</th>
                {DAYS.map((day) => (
                  <th key={day} className="border p-2 text-left">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TIME_RANGES.map((time) => (
                <tr key={time}>
                  <td className="border p-2 font-medium">{time}</td>
                  {DAYS.map((day) => {
                    const schedule = getScheduleForTimeSlot(day, time)
                    return (
                      <td key={`${day}-${time}`} className="border p-2">
                        {schedule ? (
                          <div className="space-y-1">
                            <div className="flex items-center justify-between">
                              <div className="font-medium">{schedule.subject}</div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleDeleteSchedule(schedule.id)}
                                className="h-6 w-6 p-0 text-red-500 hover:text-red-700"
                              >
                                ×
                              </Button>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {schedule.time}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {schedule.room}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {schedule.grade}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="text-muted-foreground">-</div>
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>

      <ScheduleDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onAddSchedule={handleAddSchedule}
      />
    </Card>
  )
} 