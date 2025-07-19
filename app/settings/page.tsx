"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function SettingsPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to profile page since settings are now part of the profile
    router.replace("/profile")
  }, [router])

  return null
}
