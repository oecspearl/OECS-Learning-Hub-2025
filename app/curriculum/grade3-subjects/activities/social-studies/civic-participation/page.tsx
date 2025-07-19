"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Search, Flag, Music, Award, Leaf } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Image from "next/image"

const activities = [
  {
    id: "national-symbols",
    title: "National Symbols",
    description: "Learn about the people who contributed to the creation of our national symbols.",
    icon: <Flag className="h-6 w-6 text-red-500" />,
    image: "/placeholder.svg?height=200&width=300&query=caribbean+national+flag+and+coat+of+arms",
    color: "bg-red-50 hover:bg-red-100",
    borderColor: "border-red-200",
    difficulty: "Easy",
    duration: "2-3 lessons",
    tags: ["symbols", "identity", "heritage"],
    outcomes: [
      "Identify the people who contributed to the creation of some of our national symbols",
      "Illustrate and describe the meaning of the colors/symbols of some of our national symbols and emblems",
      "Appreciate that our national symbols help us define who we are as a people",
    ],
  },
  {
    id: "national-anthem-pledge",
    title: "National Anthem and Pledge",
    description: "Understand why we play, sing, and recite our national anthem, motto, and pledge.",
    icon: <Music className="h-6 w-6 text-blue-500" />,
    image: "/placeholder.svg?height=200&width=300&query=children+singing+national+anthem",
    color: "bg-blue-50 hover:bg-blue-100",
    borderColor: "border-blue-200",
    difficulty: "Easy",
    duration: "2-3 lessons",
    tags: ["anthem", "pledge", "patriotism"],
    outcomes: [
      "Explain why we play, sing, recite our national anthem, motto and pledge",
      "Sing and recite our national anthem, motto and pledge",
      "Demonstrate appropriate behavior when singing/playing or reciting the National Pledge, Motto or Anthem",
    ],
  },
  {
    id: "national-bird-tree",
    title: "National Bird and Tree",
    description:
      "Recognize that our national bird and tree help us identify important features of our natural environment.",
    icon: <Leaf className="h-6 w-6 text-green-500" />,
    image: "/placeholder.svg?height=200&width=300&query=caribbean+national+bird+and+tree",
    color: "bg-green-50 hover:bg-green-100",
    borderColor: "border-green-200",
    difficulty: "Easy",
    duration: "2-3 lessons",
    tags: ["environment", "conservation", "symbols"],
    outcomes: [
      "Recognize that our national bird and tree help us identify important features of our natural environment",
      "Demonstrate the ways that we show respect for our national bird and flower",
      "Appreciate that our national bird and flower are a precious part of our environment that need to be protected",
    ],
  },
  {
    id: "national-heroes",
    title: "National Heroes",
    description: "Learn about the national heroes of our country and their contributions.",
    icon: <Award className="h-6 w-6 text-amber-500" />,
    image: "/placeholder.svg?height=200&width=300&query=caribbean+national+heroes",
    color: "bg-amber-50 hover:bg-amber-100",
    borderColor: "border-amber-200",
    difficulty: "Medium",
    duration: "3-4 lessons",
    tags: ["heroes", "history", "contributions"],
    outcomes: [
      "Name the national heroes of our country",
      "Create profiles about these national heroes",
      "Show respect for the contribution made by national heroes who help to improve the lives of our people",
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
      <Link href="/curriculum/grade3-subjects/activities/social-studies">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Social Studies Activities
        </Button>
      </Link>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-amber-600 text-transparent bg-clip-text">
          Civic Participation Activities
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore activities that help students appreciate that we shape and are influenced by national pride through
          national symbols, anthems, emblems, and heroes.
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
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
                      ? "success"
                      : activity.difficulty === "Medium"
                        ? "warning"
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

      <div className="mt-12 p-6 bg-red-50 rounded-lg border border-red-200">
        <h2 className="text-2xl font-bold mb-4">Teacher Resources</h2>
        <p className="mb-4">Enhance your civic participation lessons with these helpful resources:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            onClick={() => window.open("https://wordart.com/create", "_blank")}
          >
            Word Art Creator Tool
          </Button>
          <Button
            variant="outline"
            className="justify-start"
            onClick={() => window.open("https://onetreeplanted.org/pages/school", "_blank")}
          >
            One Tree Planted School Resources
          </Button>
          <Button
            variant="outline"
            className="justify-start"
            onClick={() => window.open("https://abstvradio.com/nellie-robinson", "_blank")}
          >
            Caribbean National Heroes Resources
          </Button>
        </div>
      </div>
    </div>
  )
}
