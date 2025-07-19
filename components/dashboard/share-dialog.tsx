"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Share2, MessageCircle } from "lucide-react"
import { shareResource } from "@/app/actions/share"
import { useToast } from "@/components/ui/use-toast"

interface ShareDialogProps {
  resourceType: "lesson-plan" | "resource" | "curriculum"
  resourceId: string
  resourceTitle: string
}

export function ShareDialog({ resourceType, resourceId, resourceTitle }: ShareDialogProps) {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleShare = async () => {
    setIsLoading(true)
    try {
      const result = await shareResource({
        email,
        resourceType,
        resourceId,
        resourceTitle,
      })

      if (result.success) {
        toast({
          title: "Success",
          description: result.message,
        })
        setEmail("")
      } else {
        toast({
          title: "Error",
          description: result.error,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to share resource",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleShareWhatsApp = () => {
    const shareText = `Check out this ${resourceType.replace("-", " ")}: ${resourceTitle}`
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2 hover:bg-green-50">
          <Share2 className="h-5 w-5 text-green-600" />
          <span>Share</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Share Resource</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Share via Email</Label>
            <div className="flex gap-2">
              <Input
                id="email"
                type="email"
                placeholder="Enter recipient's email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button onClick={handleShare} disabled={isLoading}>
                {isLoading ? "Sharing..." : "Share"}
              </Button>
            </div>
          </div>
          <div className="grid gap-2">
            <Label>Share via WhatsApp</Label>
            <Button variant="outline" onClick={handleShareWhatsApp}>
              <MessageCircle className="h-4 w-4 mr-2" />
              Share on WhatsApp
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 