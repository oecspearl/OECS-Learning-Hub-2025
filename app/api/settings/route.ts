import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { db } from "@/lib/db"

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    if (!session || session.user.role !== "ADMIN") {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const allSettings = await db.settings.findMany()
    
    // Transform settings into a more usable format
    const formattedSettings = allSettings.reduce((acc: Record<string, string | number | boolean | null>, setting: any) => {
      let value: string | number | boolean | null = setting.value
      
      // Parse value based on type
      switch (setting.type) {
        case "number":
          value = Number(value)
          break
        case "boolean":
          value = String(value) === "true"
          break
        case "json":
          try {
            value = JSON.parse(value || "null")
          } catch {
            value = null
          }
          break
      }
      
      acc[setting.key] = value as string | number | boolean | null
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
        const setting = await db.settings.findFirst({ key })

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
          db.settings.upsert({
            key,
            value: stringValue,
            type: setting.type,
            category: setting.category || 'general',
            updated_at: new Date().toISOString()
          })
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