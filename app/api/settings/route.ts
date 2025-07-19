import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"
import { settings } from "@/lib/schema"
import { eq } from "drizzle-orm"

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    if (!session || session.user.role !== "ADMIN") {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const allSettings = await db.query.settings.findMany()
    
    // Transform settings into a more usable format
    const formattedSettings = allSettings.reduce((acc, setting) => {
      let value: string | number | boolean | null = setting.value
      
      // Parse value based on type
      switch (setting.type) {
        case "number":
          value = Number(value)
          break
        case "boolean":
          value = value === "true"
          break
        case "json":
          try {
            value = JSON.parse(value || "null")
          } catch {
            value = null
          }
          break
      }
      
      acc[setting.key] = value
      return acc
    }, {} as Record<string, string | number | boolean | null>)

    return NextResponse.json(formattedSettings)
  } catch (error) {
    console.error("[SETTINGS_GET]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}

export async function PATCH(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || session.user.role !== "ADMIN") {
      return new NextResponse(
        JSON.stringify({ error: "Unauthorized" }), 
        { status: 401, headers: { "Content-Type": "application/json" } }
      )
    }

    const body = await req.json()
    console.log("Received settings update request:", body)

    if (!body || !body.updates) {
      return new NextResponse(
        JSON.stringify({ error: "Invalid request body" }), 
        { status: 400, headers: { "Content-Type": "application/json" } }
      )
    }

    const updates = body.updates as Record<string, any>
    const updatePromises = []
    const errors: string[] = []

    // Update each setting
    for (const [key, value] of Object.entries(updates)) {
      try {
        const setting = await db.query.settings.findFirst({
          where: eq(settings.key, key)
        })

        if (!setting) {
          console.warn(`Setting not found: ${key}`)
          continue
        }

        // Convert value to string based on type
        let stringValue: string
        if (setting.type === "json") {
          stringValue = JSON.stringify(value)
        } else if (setting.type === "boolean") {
          stringValue = String(Boolean(value))
        } else if (setting.type === "number") {
          stringValue = String(Number(value))
        } else {
          stringValue = String(value)
        }

        console.log(`Updating setting ${key}:`, { type: setting.type, value: stringValue })

        updatePromises.push(
          db.update(settings)
            .set({
              value: stringValue,
              updatedAt: new Date().toISOString()
            })
            .where(eq(settings.key, key))
        )
      } catch (error) {
        console.error(`Error updating setting ${key}:`, error)
        errors.push(`Failed to update ${key}`)
      }
    }

    // Wait for all updates to complete
    await Promise.all(updatePromises)

    if (errors.length > 0) {
      return new NextResponse(
        JSON.stringify({ 
          error: "Some settings failed to update",
          details: errors 
        }), 
        { status: 500, headers: { "Content-Type": "application/json" } }
      )
    }

    return new NextResponse(
      JSON.stringify({ 
        message: "Settings updated successfully",
        updatedCount: updatePromises.length
      }), 
      { status: 200, headers: { "Content-Type": "application/json" } }
    )
  } catch (error) {
    console.error("[SETTINGS_PATCH]", error)
    return new NextResponse(
      JSON.stringify({ 
        error: "Failed to update settings",
        details: error instanceof Error ? error.message : "Unknown error"
      }), 
      { status: 500, headers: { "Content-Type": "application/json" } }
    )
  }
} 