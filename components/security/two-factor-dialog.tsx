"use client"

import { useState } from "react"
import { enable2FA, disable2FA } from "@/app/actions/security"
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
import { Shield, Smartphone, Key } from "lucide-react"

interface TwoFactorDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  userId: string
  isEnabled: boolean
  onStatusChange: (enabled: boolean) => void
}

export function TwoFactorDialog({ open, onOpenChange, userId, isEnabled, onStatusChange }: TwoFactorDialogProps) {
  const [step, setStep] = useState<"setup" | "verify" | "disable">(isEnabled ? "disable" : "setup")
  const [verificationCode, setVerificationCode] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const [qrCodeSecret, setQrCodeSecret] = useState("")

  const handleEnable2FA = async () => {
    if (step === "setup") {
      // Generate QR code and move to verification step
      setStep("verify")
      setQrCodeSecret("JBSWY3DPEHPK3PXP") // Mock secret for demo
      return
    }

    if (step === "verify") {
      setIsLoading(true)
      setMessage(null)

      try {
        const result = await enable2FA(userId, verificationCode)

        if (result.success) {
          setMessage({ type: "success", text: result.message || "2FA enabled successfully" })
          onStatusChange(true)
          setTimeout(() => {
            onOpenChange(false)
            setMessage(null)
            setStep("setup")
            setVerificationCode("")
          }, 2000)
        } else {
          setMessage({ type: "error", text: result.error || "Failed to enable 2FA" })
        }
      } catch (error) {
        setMessage({ type: "error", text: "An unexpected error occurred" })
      } finally {
        setIsLoading(false)
      }
    }
  }

  const handleDisable2FA = async () => {
    setIsLoading(true)
    setMessage(null)

    try {
      const result = await disable2FA(userId, password)

      if (result.success) {
        setMessage({ type: "success", text: result.message || "2FA disabled successfully" })
        onStatusChange(false)
        setTimeout(() => {
          onOpenChange(false)
          setMessage(null)
          setStep("setup")
          setPassword("")
        }, 2000)
      } else {
        setMessage({ type: "error", text: result.error || "Failed to disable 2FA" })
      }
    } catch (error) {
      setMessage({ type: "error", text: "An unexpected error occurred" })
    } finally {
      setIsLoading(false)
    }
  }

  const renderSetupStep = () => (
    <>
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Enable Two-Factor Authentication
        </DialogTitle>
        <DialogDescription>
          Two-factor authentication adds an extra layer of security to your account by requiring a verification code
          from your phone in addition to your password.
        </DialogDescription>
      </DialogHeader>

      <div className="space-y-4">
        <div className="flex items-center gap-3 p-4 border rounded-lg">
          <Smartphone className="h-8 w-8 text-blue-500" />
          <div>
            <h4 className="font-medium">Step 1: Install an Authenticator App</h4>
            <p className="text-sm text-muted-foreground">
              Download Google Authenticator, Authy, or another TOTP app on your phone.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 border rounded-lg">
          <Key className="h-8 w-8 text-green-500" />
          <div>
            <h4 className="font-medium">Step 2: Scan QR Code</h4>
            <p className="text-sm text-muted-foreground">
              Use your authenticator app to scan the QR code we'll show you next.
            </p>
          </div>
        </div>
      </div>

      <DialogFooter>
        <Button variant="outline" onClick={() => onOpenChange(false)}>
          Cancel
        </Button>
        <Button onClick={handleEnable2FA}>Continue</Button>
      </DialogFooter>
    </>
  )

  const renderVerifyStep = () => (
    <>
      <DialogHeader>
        <DialogTitle>Scan QR Code</DialogTitle>
        <DialogDescription>
          Scan this QR code with your authenticator app, then enter the 6-digit code to verify.
        </DialogDescription>
      </DialogHeader>

      <div className="space-y-4">
        {message && (
          <Alert variant={message.type === "error" ? "destructive" : "default"}>
            <AlertDescription>{message.text}</AlertDescription>
          </Alert>
        )}

        <div className="flex justify-center p-4 border rounded-lg bg-muted">
          <div className="w-48 h-48 bg-white border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-xs font-mono bg-gray-100 p-2 rounded mb-2">{qrCodeSecret}</div>
              <p className="text-xs text-muted-foreground">QR Code would appear here</p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="verificationCode">Verification Code</Label>
          <Input
            id="verificationCode"
            placeholder="Enter 6-digit code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            maxLength={6}
            disabled={isLoading}
          />
        </div>
      </div>

      <DialogFooter>
        <Button variant="outline" onClick={() => setStep("setup")} disabled={isLoading}>
          Back
        </Button>
        <Button onClick={handleEnable2FA} disabled={isLoading || verificationCode.length !== 6}>
          {isLoading ? "Verifying..." : "Verify & Enable"}
        </Button>
      </DialogFooter>
    </>
  )

  const renderDisableStep = () => (
    <>
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Disable Two-Factor Authentication
        </DialogTitle>
        <DialogDescription>
          Enter your password to disable two-factor authentication. This will make your account less secure.
        </DialogDescription>
      </DialogHeader>

      <div className="space-y-4">
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
            disabled={isLoading}
          />
        </div>
      </div>

      <DialogFooter>
        <Button variant="outline" onClick={() => onOpenChange(false)} disabled={isLoading}>
          Cancel
        </Button>
        <Button variant="destructive" onClick={handleDisable2FA} disabled={isLoading || !password}>
          {isLoading ? "Disabling..." : "Disable 2FA"}
        </Button>
      </DialogFooter>
    </>
  )

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        {step === "setup" && renderSetupStep()}
        {step === "verify" && renderVerifyStep()}
        {step === "disable" && renderDisableStep()}
      </DialogContent>
    </Dialog>
  )
}
