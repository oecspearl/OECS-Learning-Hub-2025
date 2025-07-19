"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Bookmark, BookmarkCheck, Printer, Search } from "lucide-react"
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface StrandIconProps {
  icon: React.ReactNode
  color: string
}

export const StrandIcon = ({ icon, color }: StrandIconProps) => {
  return (
    <div className={`flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md ${color}`}>{icon}</div>
  )
}

interface ResourceItemProps {
  title: string
  description: string
  type: "pdf" | "doc" | "video" | "activity" | "assessment" | "link"
  url?: string
}

export const ResourceItem = ({ title, description, type, url = "#" }: ResourceItemProps) => {
  const [saved, setSaved] = useState(false)

  const iconMap = {
    pdf: <Download className="h-5 w-5" />,
    doc: <Download className="h-5 w-5" />,
    video: <Download className="h-5 w-5" />,
    activity: <Download className="h-5 w-5" />,
    assessment: <Download className="h-5 w-5" />,
    link: <Download className="h-5 w-5" />,
  }

  const typeColors = {
    pdf: "bg-red-100 text-red-800",
    doc: "bg-blue-100 text-blue-800",
    video: "bg-purple-100 text-purple-800",
    activity: "bg-green-100 text-green-800",
    assessment: "bg-amber-100 text-amber-800",
    link: "bg-gray-100 text-gray-800",
  }

  return (
    <Card className="transition-all duration-200 hover:shadow-md">
      <CardContent className="flex items-center gap-4 p-4">
        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${typeColors[type]}`}>
          {iconMap[type]}
        </div>
        <div className="flex-grow">
          <h4 className="font-medium text-gray-800">{title}</h4>
          <p className="text-sm text-gray-600">{description}</p>
          <div className="mt-1 flex items-center">
            <Badge variant="outline" className={cn("mr-2", typeColors[type])}>
              {type.toUpperCase()}
            </Badge>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSaved(!saved)}
            title={saved ? "Remove from saved" : "Save for later"}
          >
            {saved ? <BookmarkCheck className="h-5 w-5 text-green-600" /> : <Bookmark className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" title="Print">
            <Printer className="h-5 w-5" />
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href={url}>Access</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

interface TeachingTipProps {
  title: string
  description: string
  category: string
}

export const TeachingTip = ({ title, description, category }: TeachingTipProps) => {
  return (
    <motion.div
      className="rounded-lg border border-yellow-200 bg-yellow-50 p-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-yellow-200">
          <span className="text-lg font-bold text-yellow-600">💡</span>
        </div>
        <div>
          <div className="mb-1 flex items-center">
            <h4 className="font-semibold text-yellow-800">{title}</h4>
            <Badge variant="outline" className="ml-2 bg-yellow-100 text-yellow-800">
              {category}
            </Badge>
          </div>
          <p className="text-sm text-yellow-700">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

interface ResourceSearchProps {
  onSearch: (query: string) => void
}

export const ResourceSearch = ({ onSearch }: ResourceSearchProps) => {
  return (
    <div className="mb-4 flex gap-2">
      <div className="relative flex-grow">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        <Input
          type="text"
          placeholder="Search resources..."
          className="pl-9"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <Button variant="outline">Filters</Button>
    </div>
  )
}

interface LearningOutcomeCardProps {
  id: string
  title: string
  outcomes: string[]
  success: string[]
  example: {
    title: string
    description: string
  }
}

export const LearningOutcomeCard = ({ id, title, outcomes, success, example }: LearningOutcomeCardProps) => {
  return (
    <AccordionItem value={id} className="mb-4 rounded-lg border border-blue-100 px-2">
      <AccordionTrigger className="hover:bg-blue-50 hover:no-underline">
        <div className="flex items-center">
          <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            {id.split("-")[1]}
          </div>
          <span className="text-lg font-semibold">{title}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4 pb-6 pt-2">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-lg font-semibold text-blue-700">Specific Curriculum Outcomes</h3>
            <ul className="space-y-2 text-gray-700">
              {outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-lg font-semibold text-blue-700">Success Criteria</h3>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <p className="mb-2 font-medium text-gray-800">Students can:</p>
                <ul className="space-y-2 text-gray-700">
                  {success.map((criterion, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-2 mt-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-green-100 text-green-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-3 w-3"
                        >
                          <path
                            fillRule="evenodd"
                            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span>{criterion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-blue-700">Example Activity</h3>
              <div className="rounded-lg bg-blue-50 p-4">
                <h4 className="mb-2 font-medium text-blue-700">{example.title}</h4>
                <p className="mb-2 text-sm text-gray-700">{example.description}</p>
                <div className="mt-2 text-sm text-blue-600">
                  <Button asChild variant="link" className="h-auto p-0">
                    <Link href="#">View full activity plan</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}

interface InteractiveExampleProps {
  title: string
  description: string
  imageUrl: string
  demoUrl: string
}

export const InteractiveExample = ({ title, description, imageUrl, demoUrl }: InteractiveExampleProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
      <CardContent className="p-4">
        <p className="mb-4 text-sm text-gray-600">{description}</p>
        <Button asChild>
          <Link href={demoUrl}>Try Interactive Demo</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
