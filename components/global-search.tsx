"use client"

import { useEffect, useState } from "react"
import { SearchDialog } from "./search-dialog"

export function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Open search dialog with Ctrl+K or Cmd+K
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault()
        setIsOpen(true)
      }
      
      // Close search dialog with Escape
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <SearchDialog 
      open={isOpen} 
      onOpenChange={setIsOpen}
    />
  )
} 