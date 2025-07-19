"use client"

import { useSession } from "next-auth/react"
import { useState, useEffect } from "react"
import { getUserById } from "@/app/actions/auth"
import type { User } from "next-auth"

export function useUser() {
  const { data: session } = useSession()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadUser() {
      if (!session?.user?.id) {
        setLoading(false)
        return
      }

      try {
        const result = await getUserById(session.user.id)
        if (result.success && result.user) {
          setUser(result.user as User)
        } else {
          setError(result.error || "Failed to load user data")
        }
      } catch (err) {
        setError("An error occurred while loading user data")
        console.error("Error loading user:", err)
      } finally {
        setLoading(false)
      }
    }

    loadUser()
  }, [session?.user?.id])

  return {
    user,
    loading,
    error,
  }
} 