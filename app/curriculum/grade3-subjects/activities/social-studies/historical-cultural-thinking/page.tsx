"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Search, BookOpen, Clock, Users, Globe, Music } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Image from "next/image"

const activities = [
  {
    id: "our-ancestors",
    title: "Our Ancestors",
    description: "Identify the earliest inhabitants of our island and explore evidence of early settlements.",
    icon: <Clock className="h-6 w-6 text-amber-500" />,
    image: "/caribbean-indigenous-gathering.png",
    color: "bg-amber-50 hover:bg-amber-100",
    borderColor: "border-amber-200",
    difficulty: "Easy",
    duration: "2-3 lessons",
    tags: ["indigenous", "settlement", "artifacts"],
    outcomes: [
      "Identify the earliest inhabitants of our island",
      "Explore evidence of early settlements",
      "Discuss the Indigenous cultures of our island",
    ],
  },
  {
    id: "origin-of-island-people",
    title: "Origin of Our Island People",
    description: "Learn about the origins of the inhabitants of our island and locate their origins through map work.",
    icon: <Globe className="h-6 w-6 text-blue-500" />,
    image: "/caribbean-migration-map.png",
    color: "bg-blue-50 hover:bg-blue-100",
    borderColor: "border-blue-200",
    difficulty: "Medium",
    duration: "3-4 lessons",
    tags: ["migration", "geography", "diversity"],
    outcomes: [
      "List the origins of the inhabitants of our island",
      "Locate the origins of our peoples through map work",
      "Discuss the positive and negative impact of migration on our region",
    ],
  },
  {
    id: "culture-and-heritage",
    title: "Culture and Heritage",
    description: "Explore key features of our island's culture and heritage that shape our identity.",
    icon: <Users className="h-6 w-6 text-green-500" />,
    image: "/caribbean-cultural-festival.png",
    color: "bg-green-50 hover:bg-green-100",
    borderColor: "border-green-200",
    difficulty: "Easy",
    duration: "2-3 lessons",
    tags: ["culture", "heritage", "identity", "festivals"],
    outcomes: [
      "Discuss key features and aspects of our island's culture and heritage",
      "Present information on special cultural events and activities",
      "Develop interest in practicing aspects of our culture",
    ],
  },
  {
    id: "local-island-dialects",
    title: "Local Island Dialects",
    description: "Learn about the origins of our local island dialect(s) and their importance in shaping our culture.",
    icon: <BookOpen className="h-6 w-6 text-purple-500" />,
    image: "/placeholder.svg?height=200&width=300&query=caribbean+storytelling+children",
    color: "bg-purple-50 hover:bg-purple-100",
    borderColor: "border-purple-200",
    difficulty: "Medium",
    duration: "2-3 lessons",
    tags: ["language", "dialect", "communication"],
    outcomes: [
      "State the origins of our local island dialect(s)",
      "Communicate confidently using the local island dialect(s)",
      "Appreciate the importance of the local island dialect in shaping our culture",
    ],
  },
  {
    id: "cultural-contributions",
    title: "Cultural Contributions",
    description:
      "Explore the cultural contributions of various people to our food, religion, dress, arts, language, and economy.",
    icon: <Users className="h-6 w-6 text-red-500" />,
    image: "/placeholder.svg?height=200&width=300&query=caribbean+cultural+diversity",
    color: "bg-red-50 hover:bg-red-100",
    borderColor: "border-red-200",
    difficulty: "Medium",
    duration: "3-4 lessons",
    tags: ["diversity", "contributions", "heritage"],
    outcomes: [
      "Describe the cultural contributions of various people",
      "Present evidence of the origins of ethnic contributions",
      "Appreciate the contributions made by various peoples to our culture",
    ],
  },
  {
    id: "music-changes",
    title: "Music Changes Over Time",
    description: "Identify ways our island's traditional cultural music and dance have evolved over time.",
    icon: <Music className="h-6 w-6 text-indigo-500" />,
    image: "/placeholder.svg?height=200&width=300&query=caribbean+music+evolution",
    color: "bg-indigo-50 hover:bg-indigo-100",
    borderColor: "border-indigo-200",
    difficulty: "Easy",
    duration: "2-3 lessons",
    tags: ["music", "dance", "evolution", "culture"],
    outcomes: [
      "Identify ways our island traditional cultural music and dance have evolved",
      "Explore how traditional cultural music and dance have changed",
      "Appreciate the contribution of specific individuals to shaping our cultural development",
    ],
  },
]

export default function HistoricalCulturalThinkingPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTag, setSelectedTag] = useState("")

  const filteredActivities = activities.filter((activity) => {
    const matchesSearch =
      activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTag = selectedTag === "" || activity.tags.includes(selectedTag)
    return matchesSearch && matchesTag
  })

  const allTags = Array.from(new Set(activities.flatMap((activity) => activity.tags)))

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <Link href="/curriculum/grade3-subjects/activities/social-studies">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Social Studies Activities
        </Button>
      </Link>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-red-600 text-transparent bg-clip-text">
          Historical and Cultural Thinking Activities
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore activities that help students understand the different ethnicities and cultures that make up Caribbean
          society, their history, and their contributions to our collective identity.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search activities..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge
            variant={selectedTag === "" ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setSelectedTag("")}
          >
            All
          </Badge>
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {filteredActivities.map((activity) => (
          <motion.div key={activity.id} variants={item}>
            <Card
              className={`h-full transition-all duration-300 hover:shadow-lg ${activity.color} border-2 ${activity.borderColor} overflow-hidden`}
            >
              <div className="relative h-48 w-full">
                <Image src={activity.image || "/placeholder.svg"} alt={activity.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{activity.title}</CardTitle>
                  {activity.icon}
                </div>
                <CardDescription className="text-gray-700">{activity.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2">Learning Outcomes:</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                    {activity.outcomes.map((outcome, index) => (
                      <li key={index}>{outcome}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {activity.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-gray-600">{activity.duration}</div>
                <Badge
                  variant={
                    activity.difficulty === "Easy"
                      ? "default"
                      : activity.difficulty === "Medium"
                        ? "secondary"
                        : "destructive"
                  }
                >
                  {activity.difficulty}
                </Badge>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {filteredActivities.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-600">No activities found</h3>
          <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
        </div>
      )}

      <div className="mt-12 p-6 bg-amber-50 rounded-lg border border-amber-200">
        <h2 className="text-2xl font-bold mb-4">Teacher Resources</h2>
        <p className="mb-4">Enhance your historical and cultural thinking lessons with these helpful resources:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="justify-start"
            onClick={() => window.open("https://virtualcarib.com/artefacts?page=1", "_blank")}
          >
            Virtual Caribbean Artifacts
          </Button>
          <Button
            variant="outline"
            className="justify-start"
            onClick={() =>
              window.open(
                "https://www.khanacademy.org/humanities/whp-origins/era-5-the-first-global-age/52-old-world-webs-betaa/v/pre-colonial-caribbean",
                "_blank",
              )
            }
          >
            Pre-Colonial Caribbean (Khan Academy)
          </Button>
          <Button
            variant="outline"
            className="justify-start"
            onClick={() => window.open("https://www.youtube.com/watch?v=U0mpJ3rv64U", "_blank")}
          >
            Caribbean Culture & Heritage Video
          </Button>
          <Button
            variant="outline"
            className="justify-start"
            onClick={() => window.open("https://www.youtube.com/watch?v=5HfaaUTC1rM", "_blank")}
          >
            Caribbean Cultural Traditions
          </Button>
        </div>
      </div>
    </div>
  )
}
