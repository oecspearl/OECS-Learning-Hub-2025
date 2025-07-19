"use client"

import { useState } from "react"
import { UseFormReturn } from "react-hook-form"
import { LessonPlanFormValues } from "@/app/planner/page" // Import the type from planner-form
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Settings } from "lucide-react"

const SPECIAL_NEEDS_OPTIONS = [
  { id: "adhd", label: "ADHD" },
  { id: "autism", label: "Autism Spectrum Disorder" },
  { id: "dyslexia", label: "Dyslexia" },
  { id: "hearing", label: "Hearing Impairment" },
  { id: "visual", label: "Visual Impairment" },
  { id: "physical", label: "Physical Disability" },
  { id: "intellectual", label: "Intellectual Disability" },
  { id: "emotional", label: "Emotional/Behavioral Disorder" },
  { id: "gifted", label: "Gifted and Talented" },
  { id: "esl", label: "English as Second Language" },
]

// Define the props interface with the proper form type
interface SpecialNeedsModalControllerProps {
  form: UseFormReturn<LessonPlanFormValues>
}

export function SpecialNeedsModalController({ form }: SpecialNeedsModalControllerProps) {
  const [open, setOpen] = useState(false)
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([])
  const [customNeed, setCustomNeed] = useState("")

  // Initialize selected needs from form when dialog opens
  const initializeFromForm = () => {
    // Use form.getValues() instead of directly accessing form fields
    const currentNeeds = form.getValues("specialNeedsDetails") || ""
    const needsArray = currentNeeds
      .split(",")
      .map((need) => need.trim())
      .filter((need) => need)

    const standardNeeds = needsArray.filter((need) =>
      SPECIAL_NEEDS_OPTIONS.some((option) => option.label.toLowerCase() === need.toLowerCase()),
    )

    const customNeeds = needsArray.filter(
      (need) => !SPECIAL_NEEDS_OPTIONS.some((option) => option.label.toLowerCase() === need.toLowerCase()),
    )

    setSelectedNeeds(
      SPECIAL_NEEDS_OPTIONS.filter((option) =>
        standardNeeds.some((need) => need.toLowerCase() === option.label.toLowerCase()),
      ).map((option) => option.id),
    )

    setCustomNeed(customNeeds.join(", "))
  }

  const handleSave = () => {
    const selectedLabels = SPECIAL_NEEDS_OPTIONS.filter((option) => selectedNeeds.includes(option.id)).map(
      (option) => option.label,
    )

    const allNeeds = [...selectedLabels]

    if (customNeed) {
      allNeeds.push(
        ...customNeed
          .split(",")
          .map((need) => need.trim())
          .filter((need) => need),
      )
    }

    // Update the form using setValue instead of directly modifying fields
    form.setValue("specialNeeds", allNeeds.length > 0, { shouldValidate: true })
    form.setValue("specialNeedsDetails", allNeeds.join(", "), { shouldValidate: true })

    setOpen(false)
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(newOpen) => {
        setOpen(newOpen)
        if (newOpen) {
          initializeFromForm()
        }
      }}
    >
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-1">
          <Settings className="h-4 w-4" />
          <span className="hidden sm:inline">Special Needs</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Special Educational Needs</DialogTitle>
          <DialogDescription>
            Select the special educational needs that require accommodations in this lesson plan.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-3">
            {SPECIAL_NEEDS_OPTIONS.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <Checkbox
                  id={option.id}
                  checked={selectedNeeds.includes(option.id)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedNeeds([...selectedNeeds, option.id])
                    } else {
                      setSelectedNeeds(selectedNeeds.filter((id) => id !== option.id))
                    }
                  }}
                />
                <Label htmlFor={option.id} className="text-sm">
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <Label htmlFor="custom-needs">Custom Needs (comma separated)</Label>
            <Textarea
              id="custom-needs"
              placeholder="e.g., Speech Impairment, Processing Disorder"
              value={customNeed}
              onChange={(e) => setCustomNeed(e.target.value)}
              className="resize-none min-h-[80px]"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}