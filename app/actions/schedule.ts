"use server"

import { sql, ensureSchedulesTableExists } from "@/lib/db-safe"
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
    // Ensure schedules table exists
    await ensureSchedulesTableExists()

    // Validate input data
    const validatedData = scheduleSchema.parse(data)

    // Check for schedule conflicts
    const conflicts = (await sql`
      SELECT id FROM schedules 
      WHERE user_id = ${validatedData.userId}
      AND day_of_week = ${validatedData.dayOfWeek}
      AND (
        (start_time <= ${validatedData.startTime} AND end_time > ${validatedData.startTime})
        OR (start_time < ${validatedData.endTime} AND end_time >= ${validatedData.endTime})
        OR (start_time >= ${validatedData.startTime} AND end_time <= ${validatedData.endTime})
      )
    `) as { id: number }[]

    if (conflicts.length > 0) {
      return {
        success: false,
        error: "This time slot conflicts with an existing schedule",
      }
    }

    // Insert schedule into database
    const result = (await sql`
      INSERT INTO schedules (
        user_id,
        class_name,
        subject,
        day_of_week,
        start_time,
        end_time,
        room_number,
        notes,
        created_at,
        updated_at
      )
      VALUES (
        ${validatedData.userId},
        ${validatedData.className},
        ${validatedData.subject},
        ${validatedData.dayOfWeek},
        ${validatedData.startTime},
        ${validatedData.endTime},
        ${validatedData.roomNumber || null},
        ${validatedData.notes || null},
        NOW(),
        NOW()
      )
      RETURNING id, class_name, subject, day_of_week, start_time, end_time, room_number, notes
    `) as ScheduleResult[]

    if (result.length === 0) {
      return {
        success: false,
        error: "Failed to create schedule",
      }
    }

    return {
      success: true,
      message: "Class scheduled successfully",
      schedule: result[0],
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
    // Ensure schedules table exists
    await ensureSchedulesTableExists()

    const schedules = (await sql`
      SELECT 
        id,
        class_name,
        subject,
        day_of_week,
        start_time,
        end_time,
        room_number,
        notes,
        created_at
      FROM schedules
      WHERE user_id = ${userId}
      ORDER BY day_of_week ASC, start_time ASC
    `) as Schedule[]

    return {
      success: true,
      schedules: schedules,
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
    // Ensure schedules table exists
    await ensureSchedulesTableExists()

    const result = (await sql`
      DELETE FROM schedules
      WHERE id = ${scheduleId} AND user_id = ${userId}
      RETURNING id
    `) as { id: number }[]

    if (result.length === 0) {
      return {
        success: false,
        error: "Schedule not found or unauthorized",
      }
    }

    return {
      success: true,
      message: "Schedule deleted successfully",
    }
  } catch (error) {
    console.error("Delete schedule error:", error)
    return {
      success: false,
      error: "Failed to delete schedule",
    }
  }
} 