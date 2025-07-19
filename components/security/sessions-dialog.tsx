"use client"

import { useState, useEffect } from "react"
import { getActiveSessions, revokeSession } from "@/app/actions/security"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Monitor, Smartphone, Tablet, MapPin, Clock, LogOut } from "lucide-react"

interface Session {
  id: string
  device: string
  location: string
  lastActive: string
  current: boolean
}

interface SessionsDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  userId: string
}

export function SessionsDialog({ open, onOpenChange, userId }: SessionsDialogProps) {
  const [sessions, setSessions] = useState<Session[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  useEffect(() => {
    if (open) {
      loadSessions()
    }
  }, [open, userId])

  const loadSessions = async () => {
    setIsLoading(true)
    setMessage(null)

    try {
      const result = await getActiveSessions(userId)

      if (result.success) {
        setSessions(result.sessions || [])
      } else {
        setMessage({ type: "error", text: result.error || "Failed to load sessions" })
      }
    } catch (error) {
      setMessage({ type: "error", text: "An unexpected error occurred" })
    } finally {
      setIsLoading(false)
    }
  }

  const handleRevokeSession = async (sessionId: string) => {
    try {
      const result = await revokeSession(userId, sessionId)

      if (result.success) {
        setSessions((prev) => prev.filter((session) => session.id !== sessionId))
        setMessage({ type: "success", text: result.message || "Session revoked successfully" })
      } else {
        setMessage({ type: "error", text: result.error || "Failed to revoke session" })
      }
    } catch (error) {
      setMessage({ type: "error", text: "An unexpected error occurred" })
    }
  }

  const getDeviceIcon = (device: string) => {
    if (device.toLowerCase().includes("iphone") || device.toLowerCase().includes("android")) {
      return <Smartphone className="h-5 w-5" />
    }
    if (device.toLowerCase().includes("ipad") || device.toLowerCase().includes("tablet")) {
      return <Tablet className="h-5 w-5" />
    }
    return <Monitor className="h-5 w-5" />
  }

  const formatLastActive = (lastActive: string) => {
    const date = new Date(lastActive)
    const now = new Date()
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))

    if (diffInMinutes < 1) return "Just now"
    if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)} hours ago`
    return date.toLocaleDateString()
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Monitor className="h-5 w-5" />
            Active Sessions
          </DialogTitle>
          <DialogDescription>
            Manage your active login sessions. You can revoke access from devices you don't recognize.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {message && (
            <Alert variant={message.type === "error" ? "destructive" : "default"}>
              <AlertDescription>{message.text}</AlertDescription>
            </Alert>
          )}

          {isLoading ? (
            <div className="space-y-3">
              {[1, 2].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-16 bg-muted rounded-lg"></div>
                </div>
              ))}
            </div>
          ) : sessions.length === 0 ? (
            <div className="text-center py-8">
              <Monitor className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">No active sessions found</p>
            </div>
          ) : (
            <div className="space-y-3">
              {sessions.map((session, index) => (
                <div key={session.id}>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      {getDeviceIcon(session.device)}
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">{session.device}</h4>
                          {session.current && <Badge variant="secondary">Current</Badge>}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {session.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {formatLastActive(session.lastActive)}
                          </div>
                        </div>
                      </div>
                    </div>
                    {!session.current && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleRevokeSession(session.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <LogOut className="h-4 w-4 mr-1" />
                        Revoke
                      </Button>
                    )}
                  </div>
                  {index < sessions.length - 1 && <Separator />}
                </div>
              ))}
            </div>
          )}

          <div className="pt-4">
            <Button variant="outline" onClick={() => onOpenChange(false)} className="w-full">
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
