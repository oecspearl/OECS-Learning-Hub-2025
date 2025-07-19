"use client"

import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"

const SPECIAL_NEEDS_OPTIONS = [
  { id: "adhd", label: "ADHD" },
  { id: "autism", label: "Autism Spectrum Disorder" },
  { id: "dyslexia", label: "Dyslexia" },
  { id: "hearing", label: "Hearing Impairment" },
  { id: "visual", label: "Visual Impairment" },
  { id: "physical", label: "Physical Disabilities" },
  { id: "intellectual", label: "Intellectual Disabilities" },
  { id: "emotional", label: "Emotional/Behavioral Disorders" },
  { id: "gifted", label: "Gifted and Talented" },
  { id: "esl", label: "English as Second Language" },
  { id: "speech", label: "Speech or Language Impairment" },
  { id: "processing", label: "Processing Disorders" },
]

export function SpecialNeedsModal({
  open,
  onOpenChange,
  selectedNeeds = [],
  onNeedsChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  selectedNeeds: string[]
  onNeedsChange: (needs: string[]) => void
}) {
  const [localSelectedNeeds, setLocalSelectedNeeds] = useState<string[]>(selectedNeeds)

  useEffect(() => {
    setLocalSelectedNeeds(selectedNeeds)
  }, [selectedNeeds])

  const handleToggleNeed = (need: string) => {
    setLocalSelectedNeeds((prev) => (prev.includes(need) ? prev.filter((n) => n !== need) : [...prev, need]))
  }

  const handleSave = () => {
    // Check if onNeedsChange is a function before calling it
    if (typeof onNeedsChange === "function") {
      onNeedsChange(localSelectedNeeds)
    } else {
      console.error("onNeedsChange is not a function")
    }
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Special Needs Accommodations</DialogTitle>
          <DialogDescription>
            Select the special needs that should be accommodated in this lesson plan.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-4">
            {SPECIAL_NEEDS_OPTIONS.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <Checkbox
                  id={option.id}
                  checked={localSelectedNeeds.includes(option.label)}
                  onCheckedChange={() => handleToggleNeed(option.label)}
                />
                <Label htmlFor={option.id} className="cursor-pointer">
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        </ScrollArea>

        <DialogFooter className="flex justify-between sm:justify-between">
          <Button variant="outline" onClick={() => setLocalSelectedNeeds([])} type="button">
            Clear All
          </Button>
          <Button onClick={handleSave} type="button">
            Apply
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
