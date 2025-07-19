"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

const STRATEGIES = [
  {
    id: "inquiry",
    title: "Inquiry-Based Learning",
    description:
      "Students investigate questions, scenarios, or problems, developing their knowledge through exploration.",
    examples: [
      "Pose open-ended questions that encourage investigation",
      "Guide students to develop their own questions about a topic",
      "Provide resources for students to discover answers independently",
      "Facilitate discussions where students share findings and insights",
    ],
  },
  {
    id: "differentiated",
    title: "Differentiated Instruction",
    description: "Tailoring instruction to meet individual needs by adjusting content, process, or product.",
    examples: [
      "Provide texts at various reading levels",
      "Offer choice in how students demonstrate learning",
      "Use flexible grouping based on readiness, interest, or learning profile",
      "Adjust pacing for different learners",
    ],
  },
  {
    id: "cooperative",
    title: "Cooperative Learning",
    description: "Students work together in small groups to maximize their own and each other's learning.",
    examples: [
      "Think-pair-share activities",
      "Jigsaw method where each student becomes an expert on one aspect",
      "Group investigations with assigned roles",
      "Peer teaching opportunities",
    ],
  },
  {
    id: "project",
    title: "Project-Based Learning",
    description:
      "Students gain knowledge and skills by working on a complex question or problem over an extended period.",
    examples: [
      "Design challenges that solve real-world problems",
      "Research projects with authentic audiences",
      "Community service initiatives",
      "Multimedia presentations on curriculum topics",
    ],
  },
  {
    id: "culturally",
    title: "Culturally Responsive Teaching",
    description:
      "Teaching that recognizes the importance of including students' cultural references in all aspects of learning.",
    examples: [
      "Incorporate diverse perspectives and materials",
      "Connect learning to students' cultural backgrounds",
      "Use examples relevant to students' lives and communities",
      "Acknowledge and respect different communication styles",
    ],
  },
]

export function PedagogicalStrategyInfo() {
  const [expanded, setExpanded] = useState(false)

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Pedagogical Strategies</CardTitle>
            <CardDescription>Effective teaching approaches to consider for your lesson plan</CardDescription>
          </div>
          <Button variant="ghost" size="sm" onClick={() => setExpanded(!expanded)} className="h-8 w-8 p-0">
            {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </div>
      </CardHeader>

      {expanded && (
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {STRATEGIES.map((strategy) => (
              <AccordionItem key={strategy.id} value={strategy.id}>
                <AccordionTrigger>{strategy.title}</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p>{strategy.description}</p>
                    <div>
                      <h4 className="font-medium mb-1">Examples:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {strategy.examples.map((example, index) => (
                          <li key={index}>{example}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      )}
    </Card>
  )
}
