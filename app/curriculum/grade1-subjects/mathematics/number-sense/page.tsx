"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import {
  ChevronLeft,
  Hash,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  PenTool,
  Brain,
  Share2,
  Printer,
  Download,
  Play,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import {
  StrandIcon,
  ResourceItem,
  TeachingTip,
  ResourceSearch,
  LearningOutcomeCard,
  InteractiveExample,
} from "@/components/math-strand-page"

export default function NumberSensePage() {
  const [resourceFilter, setResourceFilter] = useState("")

  const resources = [
    {
      title: "Number Sense Activities Bundle",
      description: "25 printable activities for teaching number sense concepts",
      type: "pdf",
      url: "#",
    },
    {
      title: "Ten-Frame Templates",
      description: "Printable ten-frames for classroom use",
      type: "doc",
      url: "#",
    },
    {
      title: "Number Talks Introduction",
      description: "Video guide to facilitating number talks in your classroom",
      type: "video",
      url: "#",
    },
    {
      title: "Number Sense Assessment Kit",
      description: "Comprehensive assessment tools with rubrics",
      type: "assessment",
      url: "#",
    },
  ]

  const filteredResources = resources.filter(
    (resource) =>
      resource.title.toLowerCase().includes(resourceFilter.toLowerCase()) ||
      resource.description.toLowerCase().includes(resourceFilter.toLowerCase()),
  )

  const handleSearch = (query: string) => {
    setResourceFilter(query)
  }

  const learningOutcomes = [
    {
      id: "item-1",
      title: "Using Whole Numbers - Counting and Grouping Strategies",
      outcomes: [
        "Count with meaning to 20 by building quantities and matching quantity with numeral",
        "Orally sequence numbers to 100 by 1s, 2s, 5s and 10s",
        "Count backwards from 20 by 1s, 2s, 5s and 10s",
        "Count backwards from 100 by 5s and 10s",
        "Identify error/s in a counting sequence up to 20",
        "Use number lines and number charts to support counting and skip counting",
        "Count by 2s and 5s to find a total in multiplicative contexts (repetitive addition)",
      ],
      success: [
        "Count objects accurately and match quantities to numerals",
        "Skip count forward and backward with fluency",
        "Identify and correct errors in counting sequences",
        "Use counting strategies to solve simple problems",
      ],
      example: {
        title: "Counting Collections",
        description:
          "Students work in pairs with collections of 10-20 objects. They count the objects, record the total, and represent the quantity in multiple ways (e.g., tally marks, ten-frames, numerals).",
      },
    },
    {
      id: "item-2",
      title: "Whole Number – Representing and Partitioning Quantities",
      outcomes: [
        "Represent a given number up to 20 using a variety of concrete models, including ten-frames",
        "Model a given number up to 20 using a variety of pictorial representation",
        "Find examples of a given number in the environment",
        "Place given numerals on a number line with benchmarks 0, 5, 10, 15 and 20",
        "Partition any given quantity up to 20 into two parts and identify the number of objects in each part",
        "Subitize for quantities 1-10",
      ],
      success: [
        "Represent numbers using concrete and pictorial models",
        "Place numbers accurately on a number line",
        "Decompose numbers into parts in multiple ways",
        "Quickly recognize quantities without counting",
      ],
      example: {
        title: "Part-Part-Whole Mats",
        description:
          "Students use part-part-whole mats and counters to explore different ways to decompose numbers up to 20. They record their findings using drawings and number sentences.",
      },
    },
    {
      id: "item-3",
      title: "Whole Number – Comparing and Ordering Quantities",
      outcomes: [
        "Build sets and set models to show how numbers compare",
        "Explain which set has more and which set has fewer",
        "Build a set that has fewer or more than a given set up to 20",
        "Use ordinal language (first, second, third......)",
        "Discuss the importance of the number 10",
        "Explain that teens numbers are represented as 10 and more",
      ],
      success: [
        "Compare quantities using appropriate language",
        "Create sets based on comparison criteria",
        "Use ordinal numbers correctly",
        "Understand teen numbers as 10 plus some more",
      ],
      example: {
        title: "More, Less, or Equal",
        description:
          "Students work with a partner using two sets of number cards. Each player turns over a card and compares the numbers using the terms 'greater than,' 'less than,' or 'equal to.'",
      },
    },
  ]

  return (
    <div className="container mx-auto py-8">
      <div className="mb-6 flex items-center justify-between">
        <Link href="/curriculum/grade1-subjects/mathematics">
          <Button variant="outline">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Mathematics Curriculum
          </Button>
        </Link>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" title="Print Page">
            <Printer className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" title="Share Page">
            <Share2 className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <motion.div
        className="relative mb-10 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 p-8 text-white shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10"></div>
        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/10"></div>
        <div className="relative z-10 flex items-center gap-6">
          <StrandIcon icon={<Hash className="h-8 w-8 text-blue-600" />} color="text-blue-600" />
          <div>
            <h1 className="mb-2 text-4xl font-bold">Number Sense</h1>
            <p className="max-w-3xl text-white/90">
              Building a strong foundation in understanding numbers, their relationships, and operations.
            </p>
          </div>
        </div>
      </motion.div>

      <Tabs defaultValue="overview" className="mb-10">
        <TabsList className="mb-6 grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="outcomes">Learning Outcomes</TabsTrigger>
          <TabsTrigger value="strategies">Teaching Strategies</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <motion.div
                className="mb-6 rounded-lg bg-blue-50 p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="mb-4 text-2xl font-bold text-blue-700">What is Number Sense?</h2>
                <p className="mb-4 text-gray-700">
                  Number sense refers to a student's fluidity and flexibility with numbers and their understanding of
                  how numbers relate to each other. In Grade 1, students develop foundational number sense skills
                  including:
                </p>
                <ul className="mb-4 space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 mt-0.5 h-5 w-5 text-blue-500" />
                    <span>Counting and understanding quantity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 mt-0.5 h-5 w-5 text-blue-500" />
                    <span>Representing and comparing numbers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 mt-0.5 h-5 w-5 text-blue-500" />
                    <span>Understanding place value</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="mr-2 mt-0.5 h-5 w-5 text-blue-500" />
                    <span>Developing number relationships</span>
                  </li>
                </ul>
                <p className="text-gray-700">
                  A strong foundation in number sense is essential for success in all areas of mathematics and provides
                  the building blocks for more advanced mathematical concepts.
                </p>
              </motion.div>

              <motion.div
                className="mb-6 rounded-lg bg-white p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="mb-4 text-2xl font-bold text-gray-800">Key Concepts</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="rounded-lg border border-blue-100 transition-all duration-200"
                  >
                    <CardHeader className="bg-blue-50 pb-2">
                      <CardTitle className="text-blue-700">Counting & Cardinality</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Understanding that the last number counted represents the total quantity in a set.
                      </p>
                    </CardContent>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="rounded-lg border border-blue-100 transition-all duration-200"
                  >
                    <CardHeader className="bg-blue-50 pb-2">
                      <CardTitle className="text-blue-700">Number Recognition</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Identifying numerals and connecting them to the quantities they represent.
                      </p>
                    </CardContent>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="rounded-lg border border-blue-100 transition-all duration-200"
                  >
                    <CardHeader className="bg-blue-50 pb-2">
                      <CardTitle className="text-blue-700">Place Value</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Understanding that the position of a digit determines its value in a number.
                      </p>
                    </CardContent>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="rounded-lg border border-blue-100 transition-all duration-200"
                  >
                    <CardHeader className="bg-blue-50 pb-2">
                      <CardTitle className="text-blue-700">Comparing Numbers</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Determining which number is greater, less than, or equal to another number.
                      </p>
                    </CardContent>
                  </motion.div>
                </div>
              </motion.div>

              <TeachingTip
                title="Classroom Pointer"
                description="When introducing number concepts, start with concrete representations before moving to pictorial and then abstract representations. This CPA approach supports deeper understanding."
                category="Instructional Practice"
              />
            </div>

            <div>
              <motion.div
                className="mb-6 rounded-lg bg-white p-6 shadow-sm"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="mb-4 text-xl font-bold text-gray-800">Why It Matters</h3>
                <div className="mb-4 rounded-lg bg-blue-50 p-4">
                  <p className="italic text-blue-700">
                    "Number sense is the foundation upon which all higher-level mathematics is built."
                  </p>
                </div>
                <p className="mb-4 text-gray-600">Students with strong number sense can:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-0.5 h-4 w-4 text-blue-500" />
                    <span>Solve problems more efficiently</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-0.5 h-4 w-4 text-blue-500" />
                    <span>Recognize errors in their work</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-0.5 h-4 w-4 text-blue-500" />
                    <span>Make reasonable estimates</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 mt-0.5 h-4 w-4 text-blue-500" />
                    <span>Apply math to real-world situations</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="mb-6 overflow-hidden rounded-lg bg-white p-6 shadow-sm"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="mb-4 text-xl font-bold text-gray-800">Quick Access Tools</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="flex w-full justify-start" asChild>
                    <Link href="#" className="text-left">
                      <Download className="mr-2 h-4 w-4" />
                      <span>Number Line</span>
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex w-full justify-start" asChild>
                    <Link href="#" className="text-left">
                      <Download className="mr-2 h-4 w-4" />
                      <span>Ten Frames</span>
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex w-full justify-start" asChild>
                    <Link href="#" className="text-left">
                      <Download className="mr-2 h-4 w-4" />
                      <span>Counters</span>
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex w-full justify-start" asChild>
                    <Link href="#" className="text-left">
                      <Play className="mr-2 h-4 w-4" />
                      <span>Video Guide</span>
                    </Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                className="rounded-lg bg-white p-6 shadow-sm"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h3 className="mb-4 text-xl font-bold text-gray-800">Visual Learning</h3>
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder-ip3jd.png"
                    alt="Number sense visual models"
                    width={300}
                    height={200}
                    className="w-full rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <p className="text-sm text-gray-600">
                  Visual models like ten-frames, number lines, and base-ten blocks help students develop concrete
                  understanding of number concepts.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-800">Interactive Examples</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <InteractiveExample
                title="Ten Frame Builder"
                description="An interactive ten frame tool that lets students build and visualize numbers up to 20."
                imageUrl="/placeholder-wxkp3.png"
                demoUrl="#"
              />
              <InteractiveExample
                title="Number Line Explorer"
                description="Dynamic number line that helps students understand counting, comparison, and number relationships."
                imageUrl="/placeholder-m5w1r.png"
                demoUrl="#"
              />
              <InteractiveExample
                title="Part-Part-Whole Model"
                description="Interactive tool for exploring number composition and decomposition in various ways."
                imageUrl="/placeholder-nnht8.png"
                demoUrl="#"
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="outcomes">
          <div className="mb-6 rounded-lg bg-blue-50 p-6">
            <h2 className="mb-4 text-2xl font-bold text-blue-700">Essential Learning Outcomes</h2>
            <p className="mb-4 text-gray-700">
              By the end of Grade 1, students will develop the following number sense skills and understandings:
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {learningOutcomes.map((outcome) => (
              <LearningOutcomeCard
                key={outcome.id}
                id={outcome.id}
                title={outcome.title}
                outcomes={outcome.outcomes}
                success={outcome.success}
                example={outcome.example}
              />
            ))}
          </Accordion>

          <div className="mt-8">
            <TeachingTip
              title="Assessment Opportunity"
              description="Use 'number talks' as a formative assessment tool to gauge students' understanding of number relationships and strategies."
              category="Assessment"
            />
          </div>
        </TabsContent>

        <TabsContent value="strategies">
          <div className="mb-6 rounded-lg bg-blue-50 p-6">
            <h2 className="mb-4 text-2xl font-bold text-blue-700">Teaching Strategies</h2>
            <p className="text-gray-700">
              Effective teaching of number sense involves a variety of instructional approaches that engage students in
              meaningful mathematical experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-lg border border-blue-100 transition-all duration-200"
            >
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 pb-3">
                <CardTitle className="flex items-center gap-2 text-blue-700">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-200">
                    <BookOpen className="h-4 w-4 text-blue-700" />
                  </div>
                  Concrete Experiences
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                    <span>Use manipulatives like counters, cubes, and ten-frames</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                    <span>Create counting collections with everyday objects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                    <span>Use number lines and hundred charts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                    <span>Incorporate movement and physical activities</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="px-0">
                  <Link href="#">View example activities</Link>
                </Button>
              </CardFooter>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-lg border border-green-100 transition-all duration-200"
            >
              <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 pb-3">
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-200">
                    <PenTool className="h-4 w-4 text-green-700" />
                  </div>
                  Games & Activities
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-green-500"></span>
                    <span>Number card games for comparing quantities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-green-500"></span>
                    <span>Dice games for counting and adding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-green-500"></span>
                    <span>Board games with number paths</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-green-500"></span>
                    <span>Counting songs and rhymes</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="px-0">
                  <Link href="#">View game instructions</Link>
                </Button>
              </CardFooter>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-lg border border-purple-100 transition-all duration-200"
            >
              <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100 pb-3">
                <CardTitle className="flex items-center gap-2 text-purple-700">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-200">
                    <Brain className="h-4 w-4 text-purple-700" />
                  </div>
                  Mathematical Discourse
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                    <span>Ask open-ended questions about numbers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                    <span>Have students explain their thinking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                    <span>Use think-alouds to model number sense</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                    <span>Encourage multiple solution strategies</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="px-0">
                  <Link href="#">Download question prompts</Link>
                </Button>
              </CardFooter>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-lg border border-amber-100 transition-all duration-200"
            >
              <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100 pb-3">
                <CardTitle className="flex items-center gap-2 text-amber-700">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-200">
                    <BookOpen className="h-4 w-4 text-amber-700" />
                  </div>
                  Literature Connections
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                    <span>Use counting books to reinforce number sequence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                    <span>Read stories that incorporate number concepts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                    <span>Create math-themed class books</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                    <span>Use rhymes and poems with number patterns</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="px-0">
                  <Link href="#">See book recommendations</Link>
                </Button>
              </CardFooter>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="rounded-lg border border-red-100 transition-all duration-200">
              <CardHeader className="bg-gradient-to-r from-red-50 to-red-100 pb-3">
                <CardTitle className="flex items-center gap-2 text-red-700">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-200">
                    <PenTool className="h-4 w-4 text-red-700" />
                  </div>
                  Assessment Strategies
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-red-500"></span>
                    <span>Observe students during hands-on activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-red-500"></span>
                    <span>Use one-on-one interviews to assess understanding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-red-500"></span>
                    <span>Analyze student work samples and journals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-red-500"></span>
                    <span>Use performance tasks with rubrics</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="px-0">
                  <Link href="#">Download assessment tools</Link>
                </Button>
              </CardFooter>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-lg border border-indigo-100 transition-all duration-200"
            >
              <CardHeader className="bg-gradient-to-r from-indigo-50 to-indigo-100 pb-3">
                <CardTitle className="flex items-center gap-2 text-indigo-700">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-200">
                    <Brain className="h-4 w-4 text-indigo-700" />
                  </div>
                  Differentiation
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                    <span>Provide scaffolded support for struggling learners</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                    <span>Extend activities for advanced students</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                    <span>Use flexible grouping strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                    <span>Provide multiple entry points to activities</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="px-0">
                  <Link href="#">View differentiation guides</Link>
                </Button>
              </CardFooter>
            </motion.div>
          </div>

          <div className="mt-8">
            <TeachingTip
              title="Support English Language Learners"
              description="Use visual aids, manipulatives, and sentence frames to help ELLs participate in mathematical discussions and demonstrate their understanding."
              category="Differentiation"
            />
          </div>

          <div className="mt-8 rounded-lg bg-blue-50 p-6">
            <h3 className="mb-4 text-xl font-bold text-blue-700">Video Demonstration</h3>
            <div className="aspect-video rounded-lg bg-black">
              <div className="flex h-full items-center justify-center">
                <Button size="lg" className="flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  <span>Watch Teaching Demonstration</span>
                </Button>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              This video demonstrates effective teaching strategies for developing number sense in Grade 1, including
              using ten-frames, number talks, and games.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="resources">
          <div className="mb-6 rounded-lg bg-blue-50 p-6">
            <h2 className="mb-4 text-2xl font-bold text-blue-700">Teaching Resources</h2>
            <p className="text-gray-700">
              Access a variety of resources to support teaching and learning of number sense concepts.
            </p>
          </div>

          <ResourceSearch onSearch={handleSearch} />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-bold text-gray-800">Printable Materials</h3>
              <div className="space-y-4">
                {filteredResources.map((resource, index) => (
                  <ResourceItem
                    key={index}
                    title={resource.title}
                    description={resource.description}
                    type={resource.type as any}
                    url={resource.url}
                  />
                ))}
              </div>

              <h3 className="mb-4 mt-8 text-xl font-bold text-gray-800">Recommended Books</h3>
              <div className="mb-6 space-y-4">
                <Card className="transition-all duration-200 hover:shadow-md">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="relative h-24 w-20 overflow-hidden rounded bg-gray-100">
                        <Image src="/placeholder-2qkf4.png" alt="Book cover" fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Ten Black Dots</h4>
                        <p className="text-sm text-gray-500">by Donald Crews</p>
                        <p className="mt-1 text-sm text-gray-600">
                          A counting book that shows how dots can be used to represent different objects.
                        </p>
                        <Button variant="link" className="mt-1 h-auto p-0 text-blue-600" asChild>
                          <Link href="#">View lesson plan</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-200 hover:shadow-md">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="relative h-24 w-20 overflow-hidden rounded bg-gray-100">
                        <Image src="/placeholder-oti02.png" alt="Book cover" fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">How Many Snails?</h4>
                        <p className="text-sm text-gray-500">by Paul Giganti Jr.</p>
                        <p className="mt-1 text-sm text-gray-600">
                          A counting book that encourages children to count objects with specific attributes.
                        </p>
                        <Button variant="link" className="mt-1 h-auto p-0 text-blue-600" asChild>
                          <Link href="#">View lesson plan</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-gray-800">Interactive Teaching Tools</h3>
              <div className="space-y-4">
                <Card className="transition-all duration-200 hover:shadow-md">
                  <CardContent className="p-4">
                    <h4 className="mb-1 font-medium text-gray-800">Virtual Ten-Frame Tool</h4>
                    <p className="mb-2 text-sm text-gray-600">
                      An interactive digital ten-frame tool that allows you to demonstrate number concepts to your
                      class.
                    </p>
                    <div className="mb-3 aspect-video rounded-md bg-gray-100">
                      <div className="flex h-full items-center justify-center">
                        <Button>Try the Tool</Button>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Share2 className="mr-1 h-4 w-4" /> Share
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="mr-1 h-4 w-4" /> Save Offline
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-200 hover:shadow-md">
                  <CardContent className="p-4">
                    <h4 className="mb-1 font-medium text-gray-800">Number Sense Game Pack</h4>
                    <p className="mb-2 text-sm text-gray-600">
                      A collection of 10 printable games that reinforce number sense concepts in fun and engaging ways.
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="aspect-square rounded bg-blue-100"></div>
                      <div className="aspect-square rounded bg-green-100"></div>
                      <div className="aspect-square rounded bg-purple-100"></div>
                    </div>
                    <Button className="mt-3 w-full">Download Game Pack</Button>
                  </CardContent>
                </Card>
              </div>

              <h3 className="mb-4 mt-8 text-xl font-bold text-gray-800">Assessment Tools</h3>
              <div className="space-y-4">
                <Card className="transition-all duration-200 hover:shadow-md">
                  <CardContent className="p-4">
                    <h4 className="font-medium text-gray-800">Number Sense Assessment Kit</h4>
                    <p className="text-sm text-gray-500">Comprehensive assessment package</p>
                    <p className="mt-1 text-sm text-gray-600">
                      Includes diagnostic assessments, progress monitoring tools, and summative assessments for all key
                      number sense concepts.
                    </p>
                    <div className="mt-2 flex gap-2">
                      <Button variant="outline" size="sm">
                        Preview
                      </Button>
                      <Button size="sm">Download Kit</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-200 hover:shadow-md">
                  <CardContent className="p-4">
                    <h4 className="font-medium text-gray-800">Number Sense Interview Guide</h4>
                    <p className="text-sm text-gray-500">One-on-one assessment protocol</p>
                    <p className="mt-1 text-sm text-gray-600">
                      A structured interview protocol to assess individual students' number sense development and
                      identify next steps for instruction.
                    </p>
                    <div className="mt-2 flex gap-2">
                      <Button variant="outline" size="sm">
                        Preview
                      </Button>
                      <Button size="sm">Download Guide</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <TeachingTip
              title="Resource Tip"
              description="Create a math resource corner in your classroom where students can access number lines, ten-frames, counters, and other tools independently during work time."
              category="Classroom Management"
            />
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8 flex flex-col items-center">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">Ready to Apply These Concepts?</h2>
        <div className="flex gap-4">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/curriculum/grade1-subjects/activities/mathematics">Browse Activities</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/planner/create">Create Lesson Plan</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
