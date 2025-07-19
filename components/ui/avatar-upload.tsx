"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Camera, Loader2, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface AvatarUploadProps {
  currentAvatarUrl?: string | null
  userName: string
  onAvatarUpdate?: (avatarUrl: string) => void
  size?: "sm" | "md" | "lg"
}

export function AvatarUpload({ 
  currentAvatarUrl, 
  userName, 
  onAvatarUpdate,
  size = "md" 
}: AvatarUploadProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { toast } = useToast()

  const sizeClasses = {
    sm: "h-16 w-16",
    md: "h-20 w-20",
    lg: "h-24 w-24"
  }

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Validate file type
    if (!file.type.startsWith("image/")) {
      toast({
        title: "Invalid file type",
        description: "Please select an image file",
        variant: "destructive"
      })
      return
    }

    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please select an image smaller than 5MB",
        variant: "destructive"
      })
      return
    }

    // Create preview
    const reader = new FileReader()
    reader.onload = (e) => {
      setPreviewUrl(e.target?.result as string)
    }
    reader.readAsDataURL(file)
  }

  const handleUpload = async () => {
    const file = fileInputRef.current?.files?.[0]
    if (!file) return

    setIsUploading(true)

    try {
      const formData = new FormData()
      formData.append("avatar", file)

      const response = await fetch("/api/upload-avatar", {
        method: "POST",
        body: formData
      })

      const result = await response.json()

      if (response.ok && result.success) {
        toast({
          title: "Avatar updated successfully",
          description: "Your profile picture has been updated"
        })
        
        onAvatarUpdate?.(result.avatarUrl)
        setPreviewUrl(null)
        
        // Reset file input
        if (fileInputRef.current) {
          fileInputRef.current.value = ""
        }
      } else {
        throw new Error(result.error || "Upload failed")
      }
    } catch (error) {
      console.error("Upload error:", error)
      toast({
        title: "Upload failed",
        description: error instanceof Error ? error.message : "Failed to upload avatar",
        variant: "destructive"
      })
    } finally {
      setIsUploading(false)
    }
  }

  const handleRemoveAvatar = async () => {
    try {
      const response = await fetch("/api/upload-avatar", {
        method: "DELETE"
      })

      if (response.ok) {
        toast({
          title: "Avatar removed",
          description: "Your profile picture has been removed"
        })
        onAvatarUpdate?.("")
        setPreviewUrl(null)
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to remove avatar",
        variant: "destructive"
      })
    }
  }

  const displayUrl = previewUrl || currentAvatarUrl

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        <Avatar className={sizeClasses[size]}>
          <AvatarImage src={displayUrl || undefined} alt={userName} />
          <AvatarFallback className="text-lg">
            {userName.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        
        {isUploading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full">
            <Loader2 className="h-6 w-6 animate-spin text-white" />
          </div>
        )}
      </div>

      <div className="flex flex-col space-y-2">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
        
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
          >
            <Camera className="h-4 w-4 mr-2" />
            Choose Image
          </Button>
          
          {previewUrl && (
            <Button
              size="sm"
              onClick={handleUpload}
              disabled={isUploading}
            >
              {isUploading ? (
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
              ) : null}
              Upload
            </Button>
          )}
          
          {currentAvatarUrl && !previewUrl && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleRemoveAvatar}
              disabled={isUploading}
            >
              <X className="h-4 w-4 mr-2" />
              Remove
            </Button>
          )}
        </div>
        
        {previewUrl && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setPreviewUrl(null)
              if (fileInputRef.current) {
                fileInputRef.current.value = ""
              }
            }}
            disabled={isUploading}
          >
            Cancel
          </Button>
        )}
      </div>
    </div>
  )
} 