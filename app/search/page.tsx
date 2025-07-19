"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Search, 
  BookOpen, 
  FileText, 
  Users, 
  Layers,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Filter,
  X
} from "lucide-react"
import Link from "next/link"

interface SearchResult {
  id: string
  title: string
  type: string
  category: string
  url: string
  subject?: string
  grade?: string
  topic?: string
  created_at: string
  content?: string
  description?: string
}

interface SearchResponse {
  success: boolean
  query: string
  results: {
    all: SearchResult[]
    lessonPlans: SearchResult[]
    quizzes: SearchResult[]
    multigradePlans: SearchResult[]
    crossCurricularPlans: SearchResult[]
    curriculum: SearchResult[]
  }
  total: number
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams?.get("q") || ""
  
  const [searchResults, setSearchResults] = useState<SearchResponse | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("all")
  const [searchInput, setSearchInput] = useState(query)

  useEffect(() => {
    if (query) {
      performSearch(query)
    }
  }, [query])

  const performSearch = async (searchQuery: string) => {
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`)
      const data = await response.json()
      
      if (data.success) {
        setSearchResults(data)
      } else {
        setError(data.error || "Search failed")
      }
    } catch (err) {
      setError("Failed to perform search")
    } finally {
      setIsLoading(false)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchInput.trim()) {
      const url = new URL(window.location.href)
      url.searchParams.set("q", searchInput.trim())
      window.history.pushState({}, "", url.toString())
      performSearch(searchInput.trim())
    }
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "lesson-plan":
        return <BookOpen className="h-4 w-4" />
      case "quiz":
        return <FileText className="h-4 w-4" />
      case "multigrade-plan":
        return <Users className="h-4 w-4" />
      case "cross-curricular-plan":
        return <Layers className="h-4 w-4" />
      case "strand":
      case "elo":
      case "sco":
      case "learning-strategy":
      case "resource":
      case "teacher-content":
        return <BookOpen className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    })
  }

  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + "..."
  }

  const getTabCount = (type: string) => {
    if (!searchResults) return 0
    switch (type) {
      case "lesson-plans":
        return searchResults.results.lessonPlans.length
      case "quizzes":
        return searchResults.results.quizzes.length
      case "multigrade-plans":
        return searchResults.results.multigradePlans.length
      case "cross-curricular-plans":
        return searchResults.results.crossCurricularPlans.length
      case "curriculum":
        return searchResults.results.curriculum.length
      default:
        return searchResults.total
    }
  }

  const getResultsForTab = (tab: string) => {
    if (!searchResults) return []
    switch (tab) {
      case "lesson-plans":
        return searchResults.results.lessonPlans
      case "quizzes":
        return searchResults.results.quizzes
      case "multigrade-plans":
        return searchResults.results.multigradePlans
      case "cross-curricular-plans":
        return searchResults.results.crossCurricularPlans
      case "curriculum":
        return searchResults.results.curriculum
      default:
        return searchResults.results.all
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Search Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Search Results</h1>
        
        {/* Search Form */}
        <form onSubmit={handleSearch} className="flex gap-2 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search for resources, lessons, topics..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Searching..." : "Search"}
          </Button>
        </form>

        {/* Search Summary */}
        {searchResults && (
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>Found {searchResults.total} results for "{searchResults.query}"</span>
            {isLoading && <span className="animate-pulse">Searching...</span>}
          </div>
        )}
      </div>

      {/* Error State */}
      {error && (
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 text-red-600">
              <X className="h-4 w-4" />
              <span>{error}</span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
        </div>
      )}

      {/* Search Results */}
      {searchResults && !isLoading && (
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="all">
              All ({getTabCount("all")})
            </TabsTrigger>
            <TabsTrigger value="lesson-plans">
              Lesson Plans ({getTabCount("lesson-plans")})
            </TabsTrigger>
            <TabsTrigger value="quizzes">
              Quizzes ({getTabCount("quizzes")})
            </TabsTrigger>
            <TabsTrigger value="multigrade-plans">
              Multigrade ({getTabCount("multigrade-plans")})
            </TabsTrigger>
            <TabsTrigger value="cross-curricular-plans">
              Cross-Curricular ({getTabCount("cross-curricular-plans")})
            </TabsTrigger>
            <TabsTrigger value="curriculum">
              Curriculum ({getTabCount("curriculum")})
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-6">
            {getResultsForTab(activeTab).length === 0 ? (
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center py-8">
                    <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No results found</h3>
                    <p className="text-gray-600">
                      Try adjusting your search terms or browse different categories.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4">
                {getResultsForTab(activeTab).map((result) => (
                  <Card key={`${result.type}-${result.id}`} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3 flex-1">
                          <div className="mt-1 text-green-600">
                            {getIcon(result.type)}
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
                                {result.category}
                              </Badge>
                              {result.subject && (
                                <Badge variant="outline" className="text-xs">
                                  {result.subject}
                                </Badge>
                              )}
                              {result.grade && (
                                <Badge variant="outline" className="text-xs">
                                  {result.grade}
                                </Badge>
                              )}
                              {result.topic && (
                                <Badge variant="outline" className="text-xs">
                                  {result.topic}
                                </Badge>
                              )}
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
                        {result.description && (
                          <p className="text-sm text-gray-600">
                            {truncateText(result.description)}
                          </p>
                        )}
                        {result.content && !result.description && (
                          <p className="text-sm text-gray-600">
                            {truncateText(result.content)}
                          </p>
                        )}
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{formatDate(result.created_at)}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      )}

      {/* No Search Query */}
      {!query && !isLoading && (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center py-12">
              <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Start Searching</h3>
              <p className="text-gray-600 mb-6">
                Enter a search term to find lesson plans, quizzes, and other educational resources.
              </p>
              <div className="text-sm text-gray-500">
                <p className="mb-2">Try searching for:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="outline">mathematics</Badge>
                  <Badge variant="outline">grade 1</Badge>
                  <Badge variant="outline">storytelling</Badge>
                  <Badge variant="outline">place value</Badge>
                  <Badge variant="outline">lesson plans</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
