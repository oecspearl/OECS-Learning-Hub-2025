"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Search, Users, Globe, Clock, Scroll } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Image from "next/image"

const activities = [
  {
    id: "indigenous-settlements",
    title: "Indigenous Settlements",
    description:
      "Explore where the Indigenous peoples of the Caribbean settled and learn about their way of life before European contact.",
    icon: <Globe className="h-6 w-6 text-blue-500" />,
    image: "/caribbean-indigenous-gathering.png",
    color: "bg-blue-50 hover:bg-blue-100",
    borderColor: "border-blue-200",
    difficulty: "Medium",
    duration: "2-3 lessons",
    tags: ["indigenous", "settlements", "culture", "history"],
    outcomes: [
      "Describe the basic economic and social life of the Indigenous people before European contact",
      "Chart the location where Indigenous people were living before European contact",
      "Appreciate that the Indigenous people had flourishing societies before European arrival",
    ],
  },
  {
    id: "european-colonization",
    title: "European Colonization",
    description: "Understand the impact of European arrival on the Indigenous peoples and on the Europeans themselves.",
    icon: <Scroll className="h-6 w-6 text-amber-500" />,
    image: "/caribbean-arrival.png",
    color: "bg-amber-50 hover:bg-amber-100",
    borderColor: "border-amber-200",
    difficulty: "Medium",
    duration: "3-4 lessons",
    tags: ["colonization", "europeans", "history", "impact"],
    outcomes: [
      "Identify the European groups that came to the Caribbean in the 15th-16th centuries and why they came",
      "Categorize the impact of European colonization on Indigenous people and Europeans",
      "Develop awareness that colonization had lasting negative consequences for Indigenous people",
    ],
  },
  {
    id: "indigenous-resistance",
    title: "Indigenous Resistance",
    description: "Learn how Indigenous peoples resisted European colonization and why this resistance was important.",
    icon: <Users className="h-6 w-6 text-red-500" />,
    image: "/caribbean-resistance.png",
    color: "bg-red-50 hover:bg-red-100",
    borderColor: "border-red-200",
    difficulty: "Medium",
    duration: "2-3 lessons",
    tags: ["resistance", "indigenous", "colonization", "history"],
    outcomes: [
      "Identify ways in which Indigenous people resisted European colonization",
      "Explain the reasons why Indigenous peoples resisted colonization",
      "Appreciate that Indigenous people actively resisted colonization",
    ],
  },
  {
    id: "indigenous-today",
    title: "Indigenous Culture Today",
    description:
      "Discover aspects of Indigenous lifestyle still being practiced in the Caribbean today and where Indigenous communities can be found.",
    icon: <Clock className="h-6 w-6 text-green-500" />,
    image: "/modern-indigenous-caribbean.png",
    color: "bg-green-50 hover:bg-green-100",
    borderColor: "border-green-200",
    difficulty: "Easy",
    duration: "2-3 lessons",
    tags: ["culture", "indigenous", "modern", "traditions"],
    outcomes: [
      "Describe aspects of Indigenous people's lifestyle practiced in the Caribbean today",
      "Locate where the Indigenous people of the Lesser Antilles are living today",
      "Appreciate that the Indigenous people continue to have unique and vibrant lifestyles",
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
      <Link href="/curriculum/grade4-subjects/activities/social-studies">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Social Studies Activities
        </Button>
      </Link>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Historical and Cultural Thinking Activities
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore activities that help students understand the Indigenous peoples of the Caribbean, European
          colonization, and the evolution of Indigenous culture in modern times.
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

      <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
        <h2 className="text-2xl font-bold mb-4">Teacher Resources</h2>
        <p className="mb-4">Enhance your historical and cultural thinking lessons with these helpful resources:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="justify-start"
            onClick={() => window.open("https://www.youtube.com/watch?v=lxnDJybshOc", "_blank")}
          >
            The Caribs - Caribbean History
          </Button>
          <Button
            variant="outline"
            className="justify-start"
            onClick={() => window.open("https://www.youtube.com/watch?v=MA-7mzq17D4", "_blank")}
          >
            Indigenous Caribbean People
          </Button>
          <Button
            variant="outline"
            className="justify-start"
            onClick={() => window.open("https://www.youtube.com/watch?v=crDTk83kbQQ", "_blank")}
          >
            Christopher Columbus and the Taino People
          </Button>
          <Button
            variant="outline"
            className="justify-start"
            onClick={() => window.open("https://www.youtube.com/watch?v=3Gs of Exploration", "_blank")}
          >
            3Gs of Exploration
          </Button>
        </div>
      </div>
    </div>
  )
}
