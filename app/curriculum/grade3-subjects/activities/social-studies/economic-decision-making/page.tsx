"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Search, DollarSign, Globe, Users, Music } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Image from "next/image"

const activities = [
  {
    id: "economic-activities",
    title: "Economic Activities",
    description: "Identify the major economic activities on our island and their link to natural resources.",
    icon: <DollarSign className="h-6 w-6 text-green-500" />,
    image: "/placeholder.svg?height=200&width=300&query=caribbean+market+and+agriculture",
    color: "bg-green-50 hover:bg-green-100",
    borderColor: "border-green-200",
    difficulty: "Medium",
    duration: "3-4 lessons",
    tags: ["economy", "resources", "agriculture", "tourism"],
    outcomes: [
      "Identify the major economic activities on our island and their link to natural resources",
      "Assess the direct and in-direct impact of these economic activities on your family well being",
      "Appreciate that major economic activities of agriculture and tourism are linked to the natural resources of our island",
    ],
  },
  {
    id: "culture-and-economy",
    title: "Culture and Economy",
    description:
      "Explore the relationship between the environment and our culture, and how people can earn a living through culture.",
    icon: <Music className="h-6 w-6 text-purple-500" />,
    image: "/placeholder.svg?height=200&width=300&query=caribbean+cultural+festival+and+crafts",
    color: "bg-purple-50 hover:bg-purple-100",
    borderColor: "border-purple-200",
    difficulty: "Easy",
    duration: "2-3 lessons",
    tags: ["culture", "economy", "identity"],
    outcomes: [
      "Explain the relationship between the environment and our culture",
      "Explore the ways in which our people can earn a living through culture",
      "Appreciate how culture shapes our identity and economy",
    ],
  },
  {
    id: "population",
    title: "Population",
    description: "Understand the term population and its significance in the context of our region.",
    icon: <Users className="h-6 w-6 text-blue-500" />,
    image: "/placeholder.svg?height=200&width=300&query=diverse+caribbean+population",
    color: "bg-blue-50 hover:bg-blue-100",
    borderColor: "border-blue-200",
    difficulty: "Medium",
    duration: "2-3 lessons",
    tags: ["population", "resources", "community"],
    outcomes: [
      "Define the term population and understand its significance in the context of our region",
      "Explain how changes in population can affect our region's resources and services",
      "Evaluate the potential consequences of a growing or declining population on our region's economy, infrastructure, and community",
    ],
  },
  {
    id: "impact-of-migration",
    title: "Impact of Migration",
    description: "Learn about immigration and emigration and their effects on the region.",
    icon: <Globe className="h-6 w-6 text-amber-500" />,
    image: "/placeholder.svg?height=200&width=300&query=caribbean+migration+and+diversity",
    color: "bg-amber-50 hover:bg-amber-100",
    borderColor: "border-amber-200",
    difficulty: "Medium",
    duration: "3-4 lessons",
    tags: ["migration", "diversity", "economy"],
    outcomes: [
      "Distinguish between immigration and emigration",
      "Analyze the effects of migration on the region (Positive and Negative)",
      "Recognize the importance of respecting and accepting individuals from diverse backgrounds, understanding their contributions to the community",
    ],
  },
]

export default function EconomicDecisionMakingPage() {
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
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text">
          Economic Decision Making Activities
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore activities that help students understand how our natural and human resources shape our island identity
          and influence economic decisions.
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

      <div className="mt-12 p-6 bg-green-50 rounded-lg border border-green-200">
        <h2 className="text-2xl font-bold mb-4">Teacher Resources</h2>
        <p className="mb-4">Enhance your economic decision making lessons with these helpful resources:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="justify-start"
            onClick={() =>
              window.open(
                "https://www.teacherspayteachers.com/Product/Primary-Economics-Wants-Needs-Goods-Services-Producers-Consumers-More-580996",
                "_blank",
              )
            }
          >
            Primary Economics Resources
          </Button>
          <Button
            variant="outline"
            className="justify-start"
            onClick={() => window.open("https://jamboard.google.com/", "_blank")}
          >
            Google Jamboard for Economics Activities
          </Button>
          <Button
            variant="outline"
            className="justify-start"
            onClick={() => window.open("https://www.youtube.com/watch?v=K_dhoKrxTJE", "_blank")}
          >
            Natural Hazards Economic Impact
          </Button>
          <Button
            variant="outline"
            className="justify-start"
            onClick={() => window.open("https://wordwall.net/resource/62667424", "_blank")}
          >
            Interactive Economics Games
          </Button>
        </div>
      </div>
    </div>
  )
}
