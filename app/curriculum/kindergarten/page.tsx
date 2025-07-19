'use client';

import React from 'react';
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"
import {
  Users,
  Cloud,
  PartyPopper,
  Leaf,
  Gamepad2,
  CalendarDays,
  BookOpen,
  Clock,
  ListChecks,
  ChevronLeft,
} from "lucide-react"

export default function KindergartenCurriculumPage() {
  return (
    <div className="container mx-auto py-8">
      
      <Link href="/curriculum">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Curriculum
        </Button>
      </Link>

      <div className="w-full min-w-full max-w-[100vw] mb-8">
        <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-xl shadow-md">
          <h1 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-yellow-600">
            Kindergarten Curriculum
          </h1>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            The Kindergarten curriculum is structured as a comprehensive, thematic approach to early childhood
            education, focusing on developing the whole child through engaging, play-based learning experiences.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500 hover:-translate-y-1">
          <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
            <Image src="/belonging.png" alt="Belonging Unit" fill className="object-cover" />
          </div>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <Users className="h-5 w-5" />
              Belonging Unit
            </CardTitle>
            <CardDescription>September-October (5 weeks)</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              <span className="font-semibold">Essential Question:</span> "Is it important to belong?"
            </p>
            <p className="mb-4">
              Children explore identity, family, school, and community connections through engaging activities that help
              them understand their place in the world.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">All About Me</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">My Family</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">My School</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">My Community</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
              <Link href="/curriculum/kindergarten/belonging">Explore Belonging Unit</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-cyan-500 hover:-translate-y-1">
          <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
            <Image src="/weather.png" alt="Weather Unit" fill className="object-cover" />
          </div>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-cyan-700">
              <Cloud className="h-5 w-5" />
              Weather Unit
            </CardTitle>
            <CardDescription>November-December (5 weeks)</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              <span className="font-semibold">Essential Question:</span> "Is the weather important?"
            </p>
            <p className="mb-4">
              Children investigate weather patterns, seasons, and how weather affects daily life through observation,
              experimentation, and creative expression.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-cyan-100 text-cyan-800 text-xs font-medium px-2.5 py-0.5 rounded">Weather Types</span>
              <span className="bg-cyan-100 text-cyan-800 text-xs font-medium px-2.5 py-0.5 rounded">Seasons</span>
              <span className="bg-cyan-100 text-cyan-800 text-xs font-medium px-2.5 py-0.5 rounded">Weather & Me</span>
              <span className="bg-cyan-100 text-cyan-800 text-xs font-medium px-2.5 py-0.5 rounded">Weather Tools</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full bg-cyan-600 hover:bg-cyan-700">
              <Link href="/curriculum/kindergarten/weather">Explore Weather Unit</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-purple-500 hover:-translate-y-1">
          <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
            <Image src="/celebrations-unit.png" alt="Celebrations Unit" fill className="object-cover" />
          </div>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-purple-700">
              <PartyPopper className="h-5 w-5" />
              Celebrations Unit
            </CardTitle>
            <CardDescription>January-February (4 weeks)</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              <span className="font-semibold">Essential Question:</span> "What do I like about celebrations with my
              family?"
            </p>
            <p className="mb-4">
              Children explore family celebrations, cultural traditions, and community events, developing an
              appreciation for diversity and shared experiences.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Family Traditions
              </span>
              <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Cultural Celebrations
              </span>
              <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Community Events
              </span>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
              <Link href="/curriculum/kindergarten/celebrations">Explore Celebrations Unit</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-green-500 hover:-translate-y-1">
          <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
            <Image
              src="/plants_animals.png"
              alt="Plants and Animals Unit"
              fill
              className="object-cover"
            />
          </div>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-green-700">
              <Leaf className="h-5 w-5" />
              Plants and Animals Unit
            </CardTitle>
            <CardDescription>March-April (5 weeks)</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              <span className="font-semibold">Essential Question:</span> "How do plants and animals make a difference to
              me and my world?"
            </p>
            <p className="mb-4">
              Children discover the characteristics, needs, and habitats of plants and animals through hands-on
              exploration, observation, and care activities.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Plant Life</span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Animal Habitats
              </span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Living Things
              </span>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Our Environment
              </span>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full bg-green-600 hover:bg-green-700">
              <Link href="/curriculum/kindergarten/plants-and-animals">Explore Plants & Animals Unit</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-amber-500 hover:-translate-y-1">
          <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
            <Image
              src="/games.png"
              alt="Games Unit"
              fill
              className="object-cover"
            />
          </div>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-amber-700">
              <Gamepad2 className="h-5 w-5" />
              Games Unit
            </CardTitle>
            <CardDescription>May-June (5 weeks)</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Children engage with games that promote physical, social, and cognitive development, learning cooperation,
              problem-solving, and motor skills.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Movement Games
              </span>
              <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Thinking Games
              </span>
              <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Cooperative Games
              </span>
              <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Traditional Games
              </span>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
              <Link href="/curriculum/kindergarten/games">Explore Games Unit</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-center">Curriculum Organization</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CalendarDays className="mr-2 h-5 w-5 text-orange-600" />
              Weekly Organization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Each unit is broken down into weekly themes that build upon each other:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <span className="font-medium">Week 1:</span> Introduction to the unit's core concepts
              </li>
              <li>
                <span className="font-medium">Weeks 2-4:</span> Exploration of specific aspects of the theme
              </li>
              <li>
                <span className="font-medium">Final Week:</span> Integration and synthesis of learning
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2 h-5 w-5 text-teal-600" />
              Daily Structure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Each day follows a consistent structure to provide routine and comprehensive learning:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <span className="font-medium">Morning Circle:</span> Introduction to the day's focus
              </li>
              <li>
                <span className="font-medium">Literacy Activity:</span> Language and literacy development
              </li>
              <li>
                <span className="font-medium">Math Activity:</span> Numeracy and mathematical thinking
              </li>
              <li>
                <span className="font-medium">Content Activity:</span> Science, art, or social studies
              </li>
              <li>
                <span className="font-medium">Closing Circle:</span> Reflection and consolidation
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center">
              <ListChecks className="mr-2 h-5 w-5 text-indigo-600" />
              Learning Components
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Each unit integrates multiple learning domains to support holistic development:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <span className="font-medium">Learning Objectives:</span> Specific, measurable outcomes
              </li>
              <li>
                <span className="font-medium">Key Vocabulary:</span> Essential terms children should learn
              </li>
              <li>
                <span className="font-medium">Assessment Strategies:</span> Methods to evaluate understanding
              </li>
              <li>
                <span className="font-medium">Materials and Resources:</span> Teaching tools and supports
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center">
        <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
          <Link href="/curriculum/kindergarten/resources">
            <BookOpen className="mr-2 h-5 w-5" />
            Access Kindergarten Resources
          </Link>
        </Button>
      </div>
    </div>
  )
}
