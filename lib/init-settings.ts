import { db } from "@/lib/db"
import { settings } from "@/lib/schema"
import { InferSelectModel } from "drizzle-orm"
import { eq } from "drizzle-orm"
import type { SQL } from "drizzle-orm"
import { findSettingByKey } from "@/lib/db"

const defaultSettings = [
  // General Settings
  {
    key: "schoolName",
    value: "OECS Learning Hub",
    type: "string",
    category: "general",
    description: "Name of the school or institution"
  },
  {
    key: "academicYear",
    value: "2023-2024",
    type: "string",
    category: "general",
    description: "Current academic year"
  },
  {
    key: "timezone",
    value: "UTC-4",
    type: "string",
    category: "general",
    description: "System timezone"
  },

  // Appearance Settings
  {
    key: "primaryColor",
    value: "#0ea5e9",
    type: "string",
    category: "appearance",
    description: "Primary color for the UI"
  },
  {
    key: "secondaryColor",
    value: "#6366f1",
    type: "string",
    category: "appearance",
    description: "Secondary color for the UI"
  },

  // Notification Settings
  {
    key: "emailNotifications",
    value: "true",
    type: "boolean",
    category: "notifications",
    description: "Enable email notifications"
  },
  {
    key: "systemUpdates",
    value: "true",
    type: "boolean",
    category: "notifications",
    description: "Notify about system updates"
  },
  {
    key: "userActivity",
    value: "true",
    type: "boolean",
    category: "notifications",
    description: "Notify about user activities"
  },

  // Security Settings
  {
    key: "twoFactorAuth",
    value: "false",
    type: "boolean",
    category: "security",
    description: "Require two-factor authentication"
  },
  {
    key: "passwordPolicy",
    value: "medium",
    type: "string",
    category: "security",
    description: "Password policy level"
  },
  {
    key: "sessionTimeout",
    value: "30",
    type: "number",
    category: "security",
    description: "Session timeout in minutes"
  },

  // Backup Settings
  {
    key: "automaticBackups",
    value: "true",
    type: "boolean",
    category: "backup",
    description: "Enable automatic backups"
  },
  {
    key: "backupTime",
    value: "02:00",
    type: "string",
    category: "backup",
    description: "Daily backup time"
  },
  {
    key: "backupRetention",
    value: "30",
    type: "number",
    category: "backup",
    description: "Backup retention period in days"
  }
]

export async function initializeSettings() {
  try {
    console.log("Initializing settings...")
    
    for (const setting of defaultSettings) {
      const existingSetting = await findSettingByKey(setting.key)

      if (!existingSetting) {
        await db.insert(settings).values(setting)
        console.log(`Created setting: ${setting.key}`)
      }
    }

    console.log("Settings initialization completed")
  } catch (error) {
    console.error("Error initializing settings:", error)
    throw error
  }
} 