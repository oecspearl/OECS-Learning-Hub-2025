"use client"

import type React from "react"

import { useState } from "react"
import { deleteUserAccount } from "@/app/actions/security"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertTriangle, Trash2 } from "lucide-react"

interface DeleteAccountDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  userId: string
  onAccountDeleted: () => void
}

export function DeleteAccountDialog({ open, onOpenChange, userId, onAccountDeleted }: DeleteAccountDialogProps) {
  const [password, setPassword] = useState("")
  const [confirmText, setConfirmText] = useState("")
  const [confirmDeletion, setConfirmDeletion] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)

    try {
      const result = await deleteUserAccount(userId, password, confirmText)

      if (result.success) {
        setMessage({ type: "success", text: result.message || "Account deleted successfully" })
        setTimeout(() => {
          onAccountDeleted()
        }, 2000)
      } else {
        setMessage({ type: "error", text: result.error || "Failed to delete account" })
      }
    } catch (error) {
      setMessage({ type: "error", text: "An unexpected error occurred" })
    } finally {
      setIsLoading(false)
    }
  }

  const isFormValid = password && confirmText === "DELETE" && confirmDeletion

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-destructive">
            <Trash2 className="h-5 w-5" />
            Delete Account
          </DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account and remove all your data from our
            servers.
          </DialogDescription>
        </DialogHeader>

        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>Warning:</strong> Deleting your account will permanently remove:
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>All your lesson plans and quizzes</li>
              <li>Your profile information</li>
              <li>All associated data and settings</li>
            </ul>
          </AlertDescription>
        </Alert>

        <form onSubmit={handleSubmit} className="space-y-4">
          {message && (
            <Alert variant={message.type === "error" ? "destructive" : "default"}>
              <AlertDescription>{message.text}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmText">
              Type <strong>DELETE</strong> to confirm
            </Label>
            <Input
              id="confirmText"
              placeholder="Type DELETE here"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="confirmDeletion"
              checked={confirmDeletion}
              onCheckedChange={(checked) => setConfirmDeletion(checked as boolean)}
              disabled={isLoading}
            />
            <Label htmlFor="confirmDeletion" className="text-sm">
              I understand that this action cannot be undone
            </Label>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={isLoading}>
              Cancel
            </Button>
            <Button type="submit" variant="destructive" disabled={!isFormValid || isLoading}>
              {isLoading ? "Deleting..." : "Delete Account"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
