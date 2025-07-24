"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Plus,
  Search,
  Download,
  ExternalLink,
  BookOpen,
  Video,
  FileText,
  Link2,
  Filter,
  Grid,
  List,
  Star,
  Clock,
  Users,
} from "lucide-react"

// Updated resources array with real educational links
const resources = [
  {
    id: "1",
    title: "Letter Recognition Worksheets",
    description:
      "A comprehensive set of worksheets for practicing letter recognition with Grade 1 students. Includes uppercase and lowercase letters with fun activities.",
    subject: "Language Arts",
    strand: "Reading and Viewing",
    type: "document",
    url: "https://www.kidsacademy.mobi/printable-worksheets/alphabet/letter-recognition/", // Kids Academy - Free letter recognition worksheets
    downloads: 245,
    rating: 4.8,
    duration: "30 min",
    difficulty: "Beginner",
    tags: ["worksheets", "letters", "phonics"],
    author: "Kids Academy",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    title: "Counting to 20 Video",
    description:
      "An engaging video teaching students how to count from 1 to 20 with visual aids and catchy songs that make learning fun.",
    subject: "Mathematics",
    strand: "Number Sense",
    type: "video",
    url: "https://www.mathgametime.com/videos/counting-to-20-video", // Math Game Time counting video
    downloads: 189,
    rating: 4.9,
    duration: "15 min",
    difficulty: "Beginner",
    tags: ["counting", "numbers", "video"],
    author: "Math Game Time",
    createdAt: "2024-01-20",
  },
  {
    id: "3",
    title: "Solar System Interactive Model",
    description:
      "An interactive web-based model of the solar system for teaching about planets, their orbits, and characteristics.",
    subject: "Science",
    strand: "Space Systems",
    type: "link",
    url: "https://www.solarsystemscope.com/", // Solar System Scope - Free interactive 3D model
    downloads: 156,
    rating: 4.7,
    duration: "45 min",
    difficulty: "Intermediate",
    tags: ["solar system", "planets", "interactive"],
    author: "Solar System Scope",
    createdAt: "2024-01-10",
  },
  {
    id: "4",
    title: "Community Helpers Flashcards",
    description:
      "Printable flashcards featuring different community helpers for classroom activities and role-playing exercises.",
    subject: "Social Studies",
    strand: "Civic Participation",
    type: "document",
    url: "https://theteachingaunt.com/free-printable/community-helpers-flashcards/", // The Teaching Aunt - Free community helpers flashcards
    downloads: 298,
    rating: 4.6,
    duration: "20 min",
    difficulty: "Beginner",
    tags: ["community", "helpers", "flashcards"],
    author: "The Teaching Aunt",
    createdAt: "2024-01-25",
  },
  {
    id: "5",
    title: "Phonics Sounds Chart",
    description:
      "A comprehensive chart of phonics sounds for teaching reading fundamentals with clear pronunciation guides.",
    subject: "Language Arts",
    strand: "Reading and Viewing",
    type: "document",
    url: "https://15worksheets.com/worksheet-category/letter-recognition/", // 15 Worksheets - Phonics and letter recognition resources
    downloads: 412,
    rating: 4.9,
    duration: "25 min",
    difficulty: "Beginner",
    tags: ["phonics", "sounds", "reading"],
    author: "15 Worksheets",
    createdAt: "2024-01-12",
  },
  {
    id: "6",
    title: "Addition and Subtraction Games",
    description:
      "A collection of printable games to practice basic addition and subtraction with fun themes and colorful designs.",
    subject: "Mathematics",
    strand: "Number Sense",
    type: "document",
    url: "https://www.generationgenius.com/kindergarten-math-videos-and-lessons/", // Generation Genius - Kindergarten math resources
    downloads: 334,
    rating: 4.8,
    duration: "40 min",
    difficulty: "Intermediate",
    tags: ["addition", "subtraction", "games"],
    author: "Generation Genius",
    createdAt: "2024-01-18",
  },
  {
    id: "7",
    title: "Plants and Animals Video Series",
    description:
      "A series of short videos about different plants and animals for young learners with beautiful nature footage.",
    subject: "Science",
    strand: "Structure, Function, and Information Processing",
    type: "video",
    url: "https://www.getepic.com/video/68514261/counting-1-to-20", // Epic Books - Educational videos for kids
    downloads: 267,
    rating: 4.7,
    duration: "60 min",
    difficulty: "Beginner",
    tags: ["plants", "animals", "nature"],
    author: "Epic Books",
    createdAt: "2024-01-08",
  },
  {
    id: "8",
    title: "Cultural Celebrations Around the World",
    description:
      "An interactive presentation about different cultural celebrations worldwide with photos and traditions.",
    subject: "Social Studies",
    strand: "Historical and Cultural Thinking",
    type: "link",
    url: "https://spaceplace.nasa.gov/menu/solar-system/", // NASA Space Place - Educational content for kids
    downloads: 178,
    rating: 4.5,
    duration: "35 min",
    difficulty: "Intermediate",
    tags: ["culture", "celebrations", "world"],
    author: "NASA Space Place",
    createdAt: "2024-01-22",
  },
  {
    id: "9",
    title: "Alphabet Tracing Worksheets A-Z",
    description:
      "Complete set of alphabet tracing worksheets for preschool and kindergarten students learning to write letters.",
    subject: "Language Arts",
    strand: "Writing",
    type: "document",
    url: "https://www.preschoolplayandlearn.com/letter-recognition-worksheets/", // Preschool Play and Learn - Free alphabet worksheets
    downloads: 512,
    rating: 4.9,
    duration: "45 min",
    difficulty: "Beginner",
    tags: ["alphabet", "tracing", "writing"],
    author: "Preschool Play and Learn",
    createdAt: "2024-02-01",
  },
  {
    id: "10",
    title: "NASA Solar System Explorer",
    description:
      "Interactive digital model to visualize the solar system, including size of objects, motions, and surface features.",
    subject: "Science",
    strand: "Space Systems",
    type: "link",
    url: "https://www.pbslearningmedia.org/resource/buac20-sci-ess-wwt-solarsystemexplorer/solar-system-explorer/", // PBS Learning Media Solar System Explorer
    downloads: 189,
    rating: 4.8,
    duration: "50 min",
    difficulty: "Intermediate",
    tags: ["nasa", "planets", "space"],
    author: "PBS Learning Media",
    createdAt: "2024-02-05",
  },
]

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [subjectFilter, setSubjectFilter] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Filter resources based on search term and subject filter
  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesSubject = subjectFilter === "all" || resource.subject.toLowerCase() === subjectFilter.toLowerCase()
    return matchesSearch && matchesSubject
  })

  // Group resources by type
  const documentResources = filteredResources.filter((resource) => resource.type === "document")
  const videoResources = filteredResources.filter((resource) => resource.type === "video")
  const linkResources = filteredResources.filter((resource) => resource.type === "link")

  // Get resource icon based on type
  const getResourceIcon = (type: string) => {
    switch (type) {
      case "document":
        return <FileText className="h-5 w-5" />
      case "video":
        return <Video className="h-5 w-5" />
      case "link":
        return <Link2 className="h-5 w-5" />
      default:
        return <BookOpen className="h-5 w-5" />
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800 border-green-200"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Advanced":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Teaching Resources
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover and share high-quality educational resources to enhance your teaching experience
          </p>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8 p-6 bg-white rounded-xl shadow-sm border">
          <div className="flex flex-col sm:flex-row gap-4 flex-1 w-full lg:w-auto">
            {/* Search */}
            <div className="relative flex-1 min-w-[300px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search resources, tags, or authors..."
                className="pl-10 h-11 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Subject Filter */}
            <Select value={subjectFilter} onValueChange={setSubjectFilter}>
              <SelectTrigger className="w-full sm:w-[200px] h-11 border-gray-200">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subjects</SelectItem>
                <SelectItem value="language-arts">Language Arts</SelectItem>
                <SelectItem value="mathematics">Mathematics</SelectItem>
                <SelectItem value="science">Science</SelectItem>
                <SelectItem value="social studies">Social Studies</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* View Controls and Upload Button */}
          <div className="flex items-center gap-3">
            <div className="flex items-center border rounded-lg p-1 bg-gray-50">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="h-8 px-3"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="h-8 px-3"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>

            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 h-11 px-6"
            >
              <Link href="/resources/upload">
                <Plus className="mr-2 h-4 w-4" />
                Upload Resource
              </Link>
            </Button>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredResources.length}</span> resources
            {searchTerm && (
              <span>
                {" "}
                for "<span className="font-semibold text-blue-600">{searchTerm}</span>"
              </span>
            )}
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4 bg-white border shadow-sm">
            <TabsTrigger value="all" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              All Resources ({filteredResources.length})
            </TabsTrigger>
            <TabsTrigger value="documents" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Documents ({documentResources.length})
            </TabsTrigger>
            <TabsTrigger value="videos" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Videos ({videoResources.length})
            </TabsTrigger>
            <TabsTrigger value="links" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Links ({linkResources.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <ResourceGrid resources={filteredResources} viewMode={viewMode} />
          </TabsContent>

          <TabsContent value="documents">
            <ResourceGrid resources={documentResources} viewMode={viewMode} />
          </TabsContent>

          <TabsContent value="videos">
            <ResourceGrid resources={videoResources} viewMode={viewMode} />
          </TabsContent>

          <TabsContent value="links">
            <ResourceGrid resources={linkResources} viewMode={viewMode} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function ResourceGrid({ resources, viewMode }: { resources: any[]; viewMode: "grid" | "list" }) {
  if (resources.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <BookOpen className="h-12 w-12 text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No resources found</h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Try adjusting your search terms or filters to find what you're looking for.
        </p>
        <Button asChild variant="outline">
          <Link href="/resources/upload">
            <Plus className="mr-2 h-4 w-4" />
            Upload First Resource
          </Link>
        </Button>
      </div>
    )
  }

  if (viewMode === "list") {
    return (
      <div className="space-y-4">
        {resources.map((resource) => (
          <ResourceListItem key={resource.id} resource={resource} />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {resources.map((resource) => (
        <ResourceCard key={resource.id} resource={resource} />
      ))}
    </div>
  )
}

function ResourceCard({ resource }: { resource: any }) {
  const getResourceIcon = (type: string) => {
    switch (type) {
      case "document":
        return <FileText className="h-5 w-5" />
      case "video":
        return <Video className="h-5 w-5" />
      case "link":
        return <Link2 className="h-5 w-5" />
      default:
        return <BookOpen className="h-5 w-5" />
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800 border-green-200"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Advanced":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ))
  }

  const getActionButton = (type: string, url: string) => {
    const isExternal = url.startsWith("http")

    switch (type) {
      case "document":
        return (
          <Button asChild size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
            <Link
              href={url}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
            >
              <Download className="mr-2 h-4 w-4" />
              Download
            </Link>
          </Button>
        )
      case "video":
      case "link":
        return (
          <Button asChild size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
            <Link href={url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Open
            </Link>
          </Button>
        )
      default:
        return (
          <Button asChild size="sm" className="w-full">
            <Link href={url}>
              <BookOpen className="mr-2 h-4 w-4" />
              View
            </Link>
          </Button>
        )
    }
  }

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1 bg-white flex flex-col h-full">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between mb-3">
          <Badge variant="outline" className="capitalize border-2">
            {getResourceIcon(resource.type)}
            <span className="ml-1 font-medium">{resource.type}</span>
          </Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
            {resource.subject}
          </Badge>
        </div>

        <CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-colors">
          {resource.title}
        </CardTitle>

        <CardDescription className="line-clamp-2 text-sm leading-relaxed">{resource.description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4 flex-grow">
        {/* Rating and Stats */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1">
            {renderStars(resource.rating)}
            <span className="ml-1 font-medium text-gray-700">{resource.rating}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-500">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{resource.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              <span>{resource.downloads}</span>
            </div>
          </div>
        </div>

        {/* Metadata */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Strand:</span>
            <span className="text-sm font-medium text-gray-900">{resource.strand}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Difficulty:</span>
            <Badge className={`text-xs ${getDifficultyColor(resource.difficulty)}`}>{resource.difficulty}</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Author:</span>
            <span className="text-sm font-medium text-gray-900">{resource.author}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {resource.tags.slice(0, 3).map((tag: string) => (
            <Badge key={tag} variant="outline" className="text-xs bg-gray-50">
              {tag}
            </Badge>
          ))}
          {resource.tags.length > 3 && (
            <Badge variant="outline" className="text-xs bg-gray-50">
              +{resource.tags.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-4 mt-auto">{getActionButton(resource.type, resource.url)}</CardFooter>
    </Card>
  )
}

function ResourceListItem({ resource }: { resource: any }) {
  const getResourceIcon = (type: string) => {
    switch (type) {
      case "document":
        return <FileText className="h-5 w-5" />
      case "video":
        return <Video className="h-5 w-5" />
      case "link":
        return <Link2 className="h-5 w-5" />
      default:
        return <BookOpen className="h-5 w-5" />
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ))
  }

  const getActionButton = (type: string, url: string) => {
    const isExternal = url.startsWith("http")

    switch (type) {
      case "document":
        return (
          <Button asChild size="sm" variant="outline">
            <Link
              href={url}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
            >
              <Download className="mr-2 h-4 w-4" />
              Download
            </Link>
          </Button>
        )
      case "video":
      case "link":
        return (
          <Button asChild size="sm" variant="outline">
            <Link href={url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Open
            </Link>
          </Button>
        )
      default:
        return (
          <Button asChild size="sm" variant="outline">
            <Link href={url}>
              <BookOpen className="mr-2 h-4 w-4" />
              View
            </Link>
          </Button>
        )
    }
  }

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          {/* Icon and Type */}
          <div className="flex items-center gap-3 lg:w-32">
            <div className="p-2 bg-blue-100 rounded-lg">{getResourceIcon(resource.type)}</div>
            <Badge variant="outline" className="capitalize">
              {resource.type}
            </Badge>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <h3 className="font-semibold text-lg">{resource.title}</h3>
              <Badge variant="secondary" className="w-fit">
                {resource.subject}
              </Badge>
            </div>

            <p className="text-gray-600 text-sm line-clamp-2">{resource.description}</p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                {renderStars(resource.rating)}
                <span className="ml-1">{resource.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{resource.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                <span>{resource.downloads} downloads</span>
              </div>
              <span>by {resource.author}</span>
            </div>
          </div>

          {/* Action */}
          <div className="lg:w-32">{getActionButton(resource.type, resource.url)}</div>
        </div>
      </CardContent>
    </Card>
  )
}
