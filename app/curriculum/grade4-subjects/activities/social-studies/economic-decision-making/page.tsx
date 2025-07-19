"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Search, Home, Building, DollarSign, Droplet, Sun, Leaf } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Image from "next/image"

const activities = [
  {
    id: "settlement-patterns",
    title: "Settlement Patterns",
    description: "Explore how access to resources has shaped settlement locations over time in your country.",
    icon: <Home className="h-6 w-6 text-blue-500" />,
    image: "/placeholder.svg?height=200&width=300&query=caribbean+settlement+patterns",
    color: "bg-blue-50 hover:bg-blue-100",
    borderColor: "border-blue-200",
    difficulty: "Medium",
    duration: "2-3 lessons",
    tags: ["settlements", "resources", "geography"],
    outcomes: [
      "Identify how access to resources has shaped settlement locations over time",
      "Compare past and present settlements using charts and maps",
      "Appreciate that our resources impact where we settle",
    ],
  },
  {
    id: "economic-activities",
    title: "Economic Activities",
    description: "Learn about the major economic activities in your country and their importance to the economy.",
    icon: <DollarSign className="h-6 w-6 text-green-500" />,
    image: "/placeholder.svg?height=200&width=300&query=caribbean+economic+activities",
    color: "bg-green-50 hover:bg-green-100",
    borderColor: "border-green-200",
    difficulty: "Medium",
    duration: "3-4 lessons",
    tags: ["economy", "jobs", "industries"],
    outcomes: [
      "Explain the major economic activities in your country and their importance",
      "Chart the types of jobs associated with various industries and predict future needs",
      "Appreciate that economic well-being depends on sustainable use of resources",
    ],
  },
  {
    id: "land-use",
    title: "Land Use Patterns",
    description:
      "Identify major uses of land and their locations, such as residential, industrial, agricultural, and tourism.",
    icon: <Building className="h-6 w-6 text-purple-500" />,
    image: "/placeholder.svg?height=200&width=300&query=caribbean+land+use+patterns",
    color: "bg-purple-50 hover:bg-purple-100",
    borderColor: "border-purple-200",
    difficulty: "Medium",
    duration: "2-3 lessons",
    tags: ["land", "geography", "planning"],
    outcomes: [
      "Identify major uses of land and their location",
      "Map the location and distribution of various land uses in your country",
      "Appreciate that geographic factors influence how land is used",
    ],
  },
  {
    id: "blue-economy",
    title: "Blue Economy",
    description:
      "Understand the diverse roles the ocean plays in supporting your country and the factors that threaten its health.",
    icon: <Droplet className="h-6 w-6 text-cyan-500" />,
    image: "/placeholder.svg?height=200&width=300&query=caribbean+blue+economy+ocean",
    color: "bg-cyan-50 hover:bg-cyan-100",
    borderColor: "border-cyan-200",
    difficulty: "Medium",
    duration: "2-3 lessons",
    tags: ["ocean", "economy", "environment"],
    outcomes: [
      "Identify the diverse roles the ocean plays in supporting our country",
      "Explore jobs and sectors in the blue economy",
      "Appreciate how our economic activities impact the ocean",
    ],
  },
  {
    id: "environmental-issues",
    title: "Environmental Issues",
    description: "Explore how environmental issues like climate change and pollution impact our economy.",
    icon: <Leaf className="h-6 w-6 text-red-500" />,
    image: "/placeholder.svg?height=200&width=300&query=caribbean+environmental+issues",
    color: "bg-red-50 hover:bg-red-100",
    borderColor: "border-red-200",
    difficulty: "Medium",
    duration: "2-3 lessons",
    tags: ["environment", "climate", "economy"],
    outcomes: [
      "Explore how environmental issues have a negative impact on our economy",
      "Categorize the impacts of environmental issues on our economy",
      "Appreciate the ways our country is protecting the coastal and marine environment",
    ],
  },
  {
    id: "energy-needs",
    title: "Energy Resources",
    description: "Learn about the ways your country meets its energy needs and explore renewable energy sources.",
    icon: <Sun className="h-6 w-6 text-amber-500" />,
    image: "/placeholder.svg?height=200&width=300&query=caribbean+renewable+energy",
    color: "bg-amber-50 hover:bg-amber-100",
    borderColor: "border-amber-200",
    difficulty: "Medium",
    duration: "2-3 lessons",
    tags: ["energy", "resources", "sustainability"],
    outcomes: [
      "Describe the ways our country meets its energy needs for electricity and transportation",
      "Assess the impact of our current energy sources on our local and global economy and environment",
      "Appreciate the value of renewable sources of energy for our economy",
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
      <Link href="/curriculum/grade4-subjects/activities/social-studies">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Social Studies Activities
        </Button>
      </Link>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-green-600 text-transparent bg-clip-text">
          Economic Decision Making Activities
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore activities that help students understand natural resources, economic activities, land use,
          environmental issues, and energy needs that shape our way of life.
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
        <p className="mb-4">Enhance your economic decision making lessons with these helpful resources:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="justify-start"
            onClick={() => window.open("https://www.youtube.com/watch?v=i8uRAglvHuU", "_blank")}
          >
            Sources of Fresh Water
          </Button>
          <Button
            variant="outline"
            className="justify-start"
            onClick={() => window.open("https://www.youtube.com/watch?v=4vUV9mw3ltA", "_blank")}
          >
            Effects of Climate Change
          </Button>
          <Button
            variant="outline"
            className="justify-start"
            onClick={() => window.open("https://www.youtube.com/watch?v=EgdjHzN9ch8", "_blank")}
          >
            Blue Economy 101
          </Button>
          <Button
            variant="outline"
            className="justify-start"
            onClick={() => window.open("https://www.youtube.com/watch?v=iA23Sm-HI4I", "_blank")}
          >
            Climate and Climate Zones
          </Button>
        </div>
      </div>
    </div>
  )
}
