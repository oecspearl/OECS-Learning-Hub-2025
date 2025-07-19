"use server"

import { db } from "@/lib/db"
import { schedules } from "@/lib/schema"
import { eq, and } from "drizzle-orm"
import { revalidatePath } from "next/cache"

export interface Schedule {
  id: string
  user_id: string
  day: string
  time: string
  subject: string
  grade: string
  room: string
  created_at: string
  updated_at: string
}

export async function getSchedulesByUserId(userId: string): Promise<Schedule[]> {
  try {
    const result = await db.schedules.findMany({ user_id: userId })
    return result || []
  } catch (error) {
    console.error("Error fetching schedules for user:", error)
    return []
  }
}

export async function createSchedule(scheduleData: Omit<Schedule, "id" | "created_at" | "updated_at">): Promise<Schedule | null> {
  try {
    const id = `schedule_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    
    const result = await db.schedules.create({
      id,
      user_id: scheduleData.user_id,
      day: scheduleData.day,
      time: scheduleData.time,
      subject: scheduleData.subject,
      grade: scheduleData.grade,
      room: scheduleData.room,
    })
    
    revalidatePath("/dashboard/teacher")
    return result
  } catch (error) {
    console.error("Error creating schedule:", error)
    return null
  }
}

export async function updateSchedule(id: string, scheduleData: Partial<Omit<Schedule, "id" | "created_at" | "updated_at">>): Promise<Schedule | null> {
  try {
    const result = await db.schedules.update(id, {
      ...scheduleData,
      updated_at: new Date().toISOString(),
    })
    
    revalidatePath("/dashboard/teacher")
    return result
  } catch (error) {
    console.error("Error updating schedule:", error)
    return null
  }
}

export async function deleteSchedule(id: string): Promise<boolean> {
  try {
    await db.schedules.delete(id)
    revalidatePath("/dashboard/teacher")
    return true
  } catch (error) {
    console.error("Error deleting schedule:", error)
    return false
  }
}

export async function getScheduleById(id: string): Promise<Schedule | null> {
  try {
    const result = await db.schedules.findFirst({ id })
    return result || null
  } catch (error) {
    console.error("Error fetching schedule:", error)
    return null
  }
} 