"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { SpecialNeedsModal } from "@/components/special-needs-modal"
import type { UseFormReturn } from "react-hook-form"

interface SpecialNeedsModalControllerProps {
  selectedNeeds?: string[]
  onNeedsChange?: (needs: string[]) => void
  form?: UseFormReturn<any>
}

export function SpecialNeedsModalController({
  selectedNeeds = [],
  onNeedsChange,
  form,
}: SpecialNeedsModalControllerProps) {
  const [open, setOpen] = useState(false)
  const [localSelectedNeeds, setLocalSelectedNeeds] = useState<string[]>(selectedNeeds)

  const handleNeedsChange = (needs: string[]) => {
    setLocalSelectedNeeds(needs)

    // If onNeedsChange is provided, call it
    if (typeof onNeedsChange === "function") {
      onNeedsChange(needs)
    }

    // If form is provided, update form values
    if (form) {
      form.setValue("specialNeedsDetails", needs.join(", "))
      form.setValue("specialNeeds", needs.length > 0)
    }
  }

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)} className="flex items-center gap-2">
        <span>Special Needs</span>
        {localSelectedNeeds.length > 0 && (
          <span className="bg-primary text-primary-foreground rounded-full h-5 w-5 flex items-center justify-center text-xs">
            {localSelectedNeeds.length}
          </span>
        )}
      </Button>

      <SpecialNeedsModal
        open={open}
        onOpenChange={setOpen}
        selectedNeeds={localSelectedNeeds}
        onNeedsChange={handleNeedsChange}
      />
    </>
  )
}
