"use client"

import { useAuth } from "@/contexts/AuthContext"
import { useState, useEffect } from "react"

export function useUser() {
  const { user, loading } = useAuth()
  const [userData, setUserData] = useState<any>(null)

  useEffect(() => {
    if (user) {
      setUserData({
        id: user.id,
        email: user.email,
        name: user.user_metadata?.name,
        role: user.user_metadata?.role,
        avatar_url: user.user_metadata?.avatar_url,
        created_at: user.created_at,
        updated_at: user.updated_at
      })
    } else {
      setUserData(null)
    }
  }, [user])

  return {
    user: userData,
    loading,
    isAuthenticated: !!user
  }
} 