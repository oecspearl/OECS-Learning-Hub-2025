"use server"

import { z } from "zod"

const scheduleSchema = z.object({
  className: z.string().min(1, "Class name is required"),
  subject: z.string().min(1, "Subject is required"),
  dayOfWeek: z.number().min(0).max(6),
  startTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid start time"),
  endTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid end time"),
  roomNumber: z.string().optional(),
  notes: z.string().optional(),
  userId: z.string(),
})

type ScheduleResult = {
  id: number
  class_name: string
  subject: string
  day_of_week: number
  start_time: string
  end_time: string
  room_number: string | null
  notes: string | null
}

export async function scheduleClass(data: z.infer<typeof scheduleSchema>) {
  try {
    // Validate input data
    const validatedData = scheduleSchema.parse(data)

    console.log("Scheduling class:", validatedData)

    // Temporary mock response until schedule functionality is properly implemented with Supabase
    const mockSchedule: ScheduleResult = {
      id: Date.now(),
      class_name: validatedData.className,
      subject: validatedData.subject,
      day_of_week: validatedData.dayOfWeek,
      start_time: validatedData.startTime,
      end_time: validatedData.endTime,
      room_number: validatedData.roomNumber || null,
      notes: validatedData.notes || null,
    }

    return {
      success: true,
      message: "Class scheduled successfully (mock response)",
      schedule: mockSchedule,
    }
  } catch (error) {
    console.error("Schedule error:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.errors[0].message,
      }
    }

    return {
      success: false,
      error: "Failed to schedule class",
    }
  }
}

type Schedule = {
  id: number
  class_name: string
  subject: string
  day_of_week: number
  start_time: string
  end_time: string
  room_number: string | null
  notes: string | null
  created_at: Date
}

export async function getTeacherSchedule(userId: string) {
  try {
    console.log("Getting teacher schedule for user:", userId)

    // Temporary mock response
    const mockSchedules: Schedule[] = [
      {
        id: 1,
        class_name: "Mathematics",
        subject: "Math",
        day_of_week: 1,
        start_time: "08:00",
        end_time: "09:00",
        room_number: "101",
        notes: "Grade 5 Mathematics",
        created_at: new Date(),
      },
      {
        id: 2,
        class_name: "English Language Arts",
        subject: "Language Arts",
        day_of_week: 1,
        start_time: "09:15",
        end_time: "10:15",
        room_number: "102",
        notes: "Grade 5 ELA",
        created_at: new Date(),
      }
    ]

    return {
      success: true,
      schedules: mockSchedules,
    }
  } catch (error) {
    console.error("Get schedule error:", error)
    return {
      success: false,
      error: "Failed to retrieve teacher schedule",
    }
  }
}

export async function deleteSchedule(scheduleId: number, userId: string) {
  try {
    console.log("Deleting schedule:", scheduleId, "for user:", userId)

    // Temporary mock response
    return {
      success: true,
      message: "Schedule deleted successfully (mock response)",
    }
  } catch (error) {
    console.error("Delete schedule error:", error)
    return {
      success: false,
      error: "Failed to delete schedule",
    }
  }
} 