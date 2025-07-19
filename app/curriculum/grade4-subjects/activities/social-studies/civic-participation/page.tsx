"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Search, Phone, Plane, Building, Vote, Crown, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Image from "next/image"

const activities = [
  {
    id: "communication-technology",
    title: "Communication Technology",
    description: "Explore how communication technology has evolved over time and its impact on society.",
    icon: <Phone className="h-6 w-6 text-blue-500" />,
    image: "/placeholder.svg?height=200&width=300&query=evolution+of+communication+technology",
    color: "bg-blue-50 hover:bg-blue-100",
    borderColor: "border-blue-200",
    difficulty: "Easy",
    duration: "2-3 lessons",
    tags: ["technology", "communication", "history"],
    outcomes: [
      "Identify ways in which communication technology has evolved over time",
      "Create a timeline of changes in communications technology",
      "Appreciate that improvements in technology have significantly impacted how people communicate",
    ],
  },
  {
    id: "transportation-evolution",
    title: "Transportation Evolution",
    description: "Compare current forms of transportation to those used in the past and their impact on society.",
    icon: <Plane className="h-6 w-6 text-green-500" />,
    image: "/placeholder.svg?height=200&width=300&query=evolution+of+transportation",
    color: "bg-green-50 hover:bg-green-100",
    borderColor: "border-green-200",
    difficulty: "Medium",
    duration: "2-3 lessons",
    tags: ["transportation", "history", "technology"],
    outcomes: [
      "Compare current forms of transportation to those used in the past",
      "Investigate challenges in local transportation and predict future solutions",
      "Appreciate that efficient transportation has implications for our economy, environment, and health",
    ],
  },
  {
    id: "political-evolution",
    title: "Political Evolution",
    description: "Learn about the major events in the political evolution of your country or territory.",
    icon: <Building className="h-6 w-6 text-purple-500" />,
    image: "/placeholder.svg?height=200&width=300&query=caribbean+political+history",
    color: "bg-purple-50 hover:bg-purple-100",
    borderColor: "border-purple-200",
    difficulty: "Medium",
    duration: "3-4 lessons",
    tags: ["politics", "history", "government"],
    outcomes: [
      "List some of the major events in the political evolution of your country-territory",
      "Show the sequence of political milestones on a timeline from colony to independence/semi-independence",
      "Appreciate the importance of patriotism and the role of national leaders in achieving political change",
    ],
  },
  {
    id: "government-system",
    title: "Government System",
    description: "Understand the type of government system in your country and its responsibilities.",
    icon: <Crown className="h-6 w-6 text-amber-500" />,
    image: "/placeholder.svg?height=200&width=300&query=caribbean+government+building",
    color: "bg-amber-50 hover:bg-amber-100",
    borderColor: "border-amber-200",
    difficulty: "Medium",
    duration: "2-3 lessons",
    tags: ["government", "politics", "civics"],
    outcomes: [
      "Describe the type of government system in your country",
      "Investigate and outline the various purposes and responsibilities of your government",
      "Appreciate that the government system and structure is influenced by the history of colonization",
    ],
  },
  {
    id: "democracy",
    title: "Democracy in Action",
    description: "Learn what democracy is and how we can actively participate in our democratic system.",
    icon: <Vote className="h-6 w-6 text-red-500" />,
    image: "/placeholder.svg?height=200&width=300&query=voting+in+caribbean+elections",
    color: "bg-red-50 hover:bg-red-100",
    borderColor: "border-red-200",
    difficulty: "Medium",
    duration: "2-3 lessons",
    tags: ["democracy", "voting", "citizenship"],
    outcomes: [
      "Explain what democracy is and share some examples",
      "Demonstrate ways in which we can actively participate in our democracy",
      "Appreciate the value of democracy for protecting our individual rights and freedom",
    ],
  },
  {
    id: "constituencies",
    title: "Political Constituencies",
    description:
      "Identify political constituencies in your country and understand their importance for local representation.",
    icon: <Building className="h-6 w-6 text-teal-500" />,
    image: "/placeholder.svg?height=200&width=300&query=caribbean+constituency+map",
    color: "bg-teal-50 hover:bg-teal-100",
    borderColor: "border-teal-200",
    difficulty: "Easy",
    duration: "2-3 lessons",
    tags: ["politics", "geography", "representation"],
    outcomes: [
      "Identify that there are political constituencies in our country",
      "Locate the boundaries of the political constituency to which you belong",
      "Appreciate the importance of these constituencies for ensuring local representation",
    ],
  },
  {
    id: "national-heroes",
    title: "National Heroes",
    description: "Learn about key figures who have made significant contributions to your national development.",
    icon: <Users className="h-6 w-6 text-cyan-500" />,
    image: "/placeholder.svg?height=200&width=300&query=caribbean+national+heroes",
    color: "bg-cyan-50 hover:bg-cyan-100",
    borderColor: "border-cyan-200",
    difficulty: "Easy",
    duration: "2-3 lessons",
    tags: ["heroes", "history", "culture"],
    outcomes: [
      "Identify key figures who have made significant contributions to our national development",
      "Develop criteria to justify determining who is a national hero/heroine",
      "Appreciate the contribution of key figures to our national development",
    ],
  },
]

export default function CivicParticipationPage() {
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
      <Link href="/curriculum/grade4-subjects/activities/social-studies">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Social Studies Activities
        </Button>
      </Link>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
          Civic Participation Activities
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore activities that help students understand communication technology, transportation, political
          evolution, government systems, and democracy.
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

      <div className="mt-12 p-6 bg-purple-50 rounded-lg border border-purple-200">
        <h2 className="text-2xl font-bold mb-4">Teacher Resources</h2>
        <p className="mb-4">Enhance your civic participation lessons with these helpful resources:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="justify-start"
            onClick={() => window.open("https://www.youtube.com/watch?v=d0ySC2tzlZI", "_blank")}
          >
            Evolution of Transportation
          </Button>
          <Button
            variant="outline"
            className="justify-start"
            onClick={() =>
              window.open(
                "https://www.tvokids.com/school-age/tvok-news-big-picture/videos/tvok-news-what-democracy",
                "_blank",
              )
            }
          >
            What is Democracy?
          </Button>
          <Button
            variant="outline"
            className="justify-start"
            onClick={() => window.open("https://www.youtube.com/watch?v=pzr5x2cLljg", "_blank")}
          >
            Effective Group Work in the Classroom
          </Button>
          <Button
            variant="outline"
            className="justify-start"
            onClick={() => window.open("https://www.youtube.com/watch?v=rWq8nhocU5M", "_blank")}
          >
            Using Google Earth in the Classroom
          </Button>
        </div>
      </div>
    </div>
  )
}
