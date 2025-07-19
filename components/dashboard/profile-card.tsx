"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AvatarUpload } from "@/components/ui/avatar-upload"
import { useUser } from "@/lib/hooks/use-user"
import { Loader2 } from "lucide-react"
import { useState, useEffect } from "react"

export function ProfileCard() {
  const { user, loading, error } = useUser()
  const [avatarUrl, setAvatarUrl] = useState<string | null>((user as any)?.avatar_url ?? null)

  useEffect(() => {
    setAvatarUrl((user as any)?.avatar_url ?? null)
  }, [user])

  if (loading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center p-6">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </CardContent>
      </Card>
    )
  }

  if (error || !user) {
    return (
      <Card>
        <CardContent className="p-6">
          <p className="text-sm text-muted-foreground">
            {error || "Failed to load profile information"}
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>Your account information</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center space-y-4">
          <AvatarUpload
            currentAvatarUrl={avatarUrl}
            userName={user.name}
            onAvatarUpdate={setAvatarUrl}
            size="lg"
          />
          <div className="text-center">
            <h3 className="font-medium text-lg">{user.name}</h3>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Role</span>
            <span className="text-sm font-medium capitalize">{user.role}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Member Since</span>
            <span className="text-sm font-medium">
              {new Date(user.created_at).toLocaleDateString()}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
