"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Loader2, BookOpen, FileText, Users, Layers } from "lucide-react"

interface SearchDialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function SearchDialog({ open: externalOpen, onOpenChange }: SearchDialogProps = {}) {
  const [internalOpen, setInternalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const router = useRouter()

  // Use either external or internal state based on what's provided
  const isOpen = externalOpen !== undefined ? externalOpen : internalOpen
  const setOpen = (value: boolean) => {
    if (onOpenChange) {
      onOpenChange(value)
    } else {
      setInternalOpen(value)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return

    setIsSearching(true)

    // Navigate to search results page
    router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)

    // Close dialog and reset state
    setOpen(false)
    setIsSearching(false)
  }

  // If using the standalone version (no props provided)
  if (externalOpen === undefined && onOpenChange === undefined) {
    return (
      <>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setOpen(true)}
          className="text-white hover:bg-green-700"
          aria-label="Search"
        >
          <Search className="h-5 w-5" />
        </Button>

        <Dialog open={isOpen} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Search OECS Learning Hub</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="flex items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Search for resources, lessons, topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1"
                  autoFocus
                />
                <Button type="submit" disabled={isSearching || !searchQuery.trim()}>
                  {isSearching ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Search className="h-4 w-4" />
                  )}
                </Button>
              </div>
              
              <div className="text-xs text-muted-foreground space-y-3">
                <p className="font-medium">Search across:</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-3 w-3 text-green-600" />
                    <span>Lesson Plans</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-3 w-3 text-blue-600" />
                    <span>Quizzes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-3 w-3 text-purple-600" />
                    <span>Multigrade Plans</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers className="h-3 w-3 text-orange-600" />
                    <span>Cross-Curricular</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-3 w-3 text-indigo-600" />
                    <span>Curriculum</span>
                  </div>
                </div>
                
                <div className="pt-2 border-t">
                  <p className="mb-2">Try searching for:</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-muted rounded text-xs">mathematics</span>
                    <span className="px-2 py-1 bg-muted rounded text-xs">grade 1</span>
                    <span className="px-2 py-1 bg-muted rounded text-xs">storytelling</span>
                    <span className="px-2 py-1 bg-muted rounded text-xs">place value</span>
                    <span className="px-2 py-1 bg-muted rounded text-xs">curriculum outcomes</span>
                    <span className="px-2 py-1 bg-muted rounded text-xs">learning strategies</span>
                  </div>
                </div>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </>
    )
  }

  // If using the controlled version (with props)
  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Search Curriculum</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSearch} className="space-y-4 mt-4">
          <div className="flex items-center space-x-2">
            <Input
              placeholder="Search for curriculum, activities, lesson plans..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
              autoFocus
            />
            <Button type="submit" size="sm" disabled={isSearching || !searchQuery.trim()}>
              {isSearching ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </>
              )}
            </Button>
          </div>
          <div className="text-xs text-muted-foreground">
            <p>Search across lesson plans, quizzes, multigrade plans, and cross-curricular activities.</p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
