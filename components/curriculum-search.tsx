"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Search, 
  BookOpen, 
  Ear, 
  Pencil, 
  Calculator, 
  Globe, 
  TestTube, 
  Users,
  ArrowRight,
  Filter,
  X,
  Loader2
} from "lucide-react"
import Link from "next/link"

interface CurriculumSearchResult {
  id: string
  title: string
  content: string
  url: string
  grade: string
  subject: string
  strand?: string
  type: "strand" | "outcome" | "strategy" | "content"
  matchedText: string
  relevance: number
}

export function CurriculumSearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [results, setResults] = useState<CurriculumSearchResult[]>([])
  const [activeTab, setActiveTab] = useState("all")

  const performSearch = async (query: string) => {
    if (!query.trim()) {
      setResults([])
      return
    }

    setIsSearching(true)
    
    try {
      const response = await fetch(`/api/curriculum/search?q=${encodeURIComponent(query)}`)
      const data = await response.json()
      
      if (response.ok) {
        setResults(data.results || [])
      } else {
        console.error("Search failed:", data.error)
        setResults([])
      }
    } catch (error) {
      console.error("Search error:", error)
      setResults([])
    } finally {
      setIsSearching(false)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    performSearch(searchQuery)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    performSearch(query)
  }

  const getIcon = (subject: string) => {
    switch (subject.toLowerCase()) {
      case "language arts":
        return <BookOpen className="h-4 w-4" />
      case "mathematics":
        return <Calculator className="h-4 w-4" />
      case "science":
        return <TestTube className="h-4 w-4" />
      case "social studies":
        return <Globe className="h-4 w-4" />
      default:
        return <BookOpen className="h-4 w-4" />
    }
  }

  const getFilteredResults = () => {
    if (activeTab === "all") return results
    
    return results.filter(result => {
      switch (activeTab) {
        case "language-arts":
          return result.subject.toLowerCase().includes("language")
        case "mathematics":
          return result.subject.toLowerCase().includes("mathematics")
        case "science":
          return result.subject.toLowerCase().includes("science")
        case "social-studies":
          return result.subject.toLowerCase().includes("social")
        default:
          return true
      }
    })
  }

  const getTabCount = (tab: string) => {
    if (tab === "all") return results.length
    
    return results.filter(result => {
      switch (tab) {
        case "language-arts":
          return result.subject.toLowerCase().includes("language")
        case "mathematics":
          return result.subject.toLowerCase().includes("mathematics")
        case "science":
          return result.subject.toLowerCase().includes("science")
        case "social-studies":
          return result.subject.toLowerCase().includes("social")
        default:
          return true
      }
    }).length
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Search Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Search Curriculum Content</h2>
        
        {/* Search Form */}
        <form onSubmit={handleSearch} className="flex gap-2 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search curriculum content (e.g., 'listening', 'verbs', 'numbers')..."
              value={searchQuery}
              onChange={handleInputChange}
              className="pl-10"
            />
          </div>
          <Button type="submit" disabled={isSearching}>
            {isSearching ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Searching...
              </>
            ) : (
              "Search"
            )}
          </Button>
        </form>

        {/* Search Summary */}
        {results.length > 0 && (
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>Found {results.length} results for "{searchQuery}"</span>
          </div>
        )}
      </div>

      {/* Search Results */}
      {results.length > 0 && (
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">
              All ({getTabCount("all")})
            </TabsTrigger>
            <TabsTrigger value="language-arts">
              Language Arts ({getTabCount("language-arts")})
            </TabsTrigger>
            <TabsTrigger value="mathematics">
              Mathematics ({getTabCount("mathematics")})
            </TabsTrigger>
            <TabsTrigger value="science">
              Science ({getTabCount("science")})
            </TabsTrigger>
            <TabsTrigger value="social-studies">
              Social Studies ({getTabCount("social-studies")})
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-6">
            <div className="grid gap-4">
              {getFilteredResults().map((result) => (
                <Card key={result.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="mt-1 text-green-600">
                          {getIcon(result.subject)}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2">
                            <Link 
                              href={result.url}
                              className="hover:text-green-600 transition-colors"
                            >
                              {result.title}
                            </Link>
                          </CardTitle>
                          <div className="flex flex-wrap gap-2 mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {result.grade}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {result.subject}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {result.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <Link href={result.url}>
                        <Button variant="ghost" size="sm">
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <p className="text-sm text-gray-600">
                        {result.content.length > 200 
                          ? result.content.substring(0, 200) + "..."
                          : result.content
                        }
                      </p>
                      <div className="text-xs text-gray-500">
                        <span className="font-medium">Matched:</span> "{result.matchedText}"
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      )}

      {/* No Results */}
      {searchQuery && results.length === 0 && !isSearching && (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center py-8">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No curriculum content found</h3>
              <p className="text-gray-600">
                Try searching for different terms or browse the curriculum sections directly.
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
} 