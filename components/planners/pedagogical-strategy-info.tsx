"use client"

import { useState } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { InfoIcon } from "lucide-react"

const STRATEGY_INFO = {
  "inquiry-based-learning": {
    title: "Inquiry-Based Learning",
    description: "Students learn through investigation and discovery, asking questions and finding answers.",
    benefits: [
      "Develops critical thinking skills",
      "Encourages student autonomy",
      "Promotes deeper understanding of concepts",
      "Builds research skills",
    ],
    implementation:
      "Start with an engaging question or problem, guide students through investigation, and facilitate discussion of findings.",
  },
  "project-based-learning": {
    title: "Project-Based Learning",
    description: "Students learn by working on a complex project over an extended period of time.",
    benefits: [
      "Develops collaboration skills",
      "Connects learning to real-world applications",
      "Builds time management skills",
      "Encourages creativity",
    ],
    implementation:
      "Define a driving question, establish a timeline, provide resources, and guide students through project development and presentation.",
  },
  "direct-instruction": {
    title: "Direct Instruction",
    description: "Teacher-led approach where information is presented in a structured, sequential manner.",
    benefits: [
      "Efficient for teaching specific skills",
      "Provides clear guidance",
      "Ensures all students receive the same information",
      "Effective for introducing new concepts",
    ],
    implementation:
      "Present information clearly, model skills, provide guided practice, and offer independent practice with feedback.",
  },
  "cooperative-learning": {
    title: "Cooperative Learning",
    description: "Students work together in small groups to maximize their own and each other's learning.",
    benefits: [
      "Develops social skills",
      "Encourages peer teaching",
      "Improves communication skills",
      "Builds teamwork",
    ],
    implementation:
      "Form diverse groups, assign roles, establish clear objectives, and monitor group progress while providing guidance.",
  },
  "differentiated-instruction": {
    title: "Differentiated Instruction",
    description: "Tailoring instruction to meet individual student needs, abilities, and interests.",
    benefits: [
      "Addresses diverse learning needs",
      "Increases student engagement",
      "Improves learning outcomes",
      "Supports struggling and advanced learners",
    ],
    implementation:
      "Assess student readiness, provide multiple paths to learning, vary content complexity, and offer choice in demonstrating knowledge.",
  },
  "flipped-classroom": {
    title: "Flipped Classroom",
    description:
      "Students learn content at home through videos or readings, then practice and apply concepts in class.",
    benefits: [
      "Maximizes class time for application",
      "Allows students to learn at their own pace",
      "Increases teacher-student interaction",
      "Promotes active learning",
    ],
    implementation:
      "Create or curate content for home learning, design in-class activities that apply concepts, and provide support during application.",
  },
  gamification: {
    title: "Gamification",
    description: "Applying game elements and principles to learning activities to increase engagement.",
    benefits: [
      "Increases motivation and engagement",
      "Makes learning fun",
      "Provides immediate feedback",
      "Encourages healthy competition",
    ],
    implementation:
      "Incorporate points, badges, leaderboards, challenges, and rewards into learning activities while maintaining focus on learning objectives.",
  },
  "problem-based-learning": {
    title: "Problem-Based Learning",
    description: "Students learn by solving complex, real-world problems.",
    benefits: [
      "Develops problem-solving skills",
      "Encourages critical thinking",
      "Connects learning to real-world contexts",
      "Builds research skills",
    ],
    implementation:
      "Present a complex problem, guide students in defining what they need to know, support research, and facilitate solution development.",
  },
  "socratic-method": {
    title: "Socratic Method",
    description: "Teaching through questioning to stimulate critical thinking and illuminate ideas.",
    benefits: [
      "Develops critical thinking skills",
      "Encourages deep analysis",
      "Promotes active participation",
      "Builds logical reasoning",
    ],
    implementation:
      "Prepare thought-provoking questions, facilitate discussion, ask follow-up questions, and guide students to discover insights.",
  },
  "experiential-learning": {
    title: "Experiential Learning",
    description: "Learning through direct experience and reflection on that experience.",
    benefits: [
      "Creates memorable learning experiences",
      "Connects theory to practice",
      "Develops practical skills",
      "Encourages reflection",
    ],
    implementation:
      "Design hands-on activities, guide students through the experience, facilitate reflection, and connect to theoretical concepts.",
  },
  "culturally-responsive-teaching": {
    title: "Culturally Responsive Teaching",
    description: "Teaching that recognizes and incorporates students' cultural backgrounds and experiences.",
    benefits: [
      "Increases student engagement",
      "Builds cultural awareness",
      "Creates inclusive learning environment",
      "Connects learning to students' lives",
    ],
    implementation:
      "Learn about students' cultures, incorporate diverse perspectives, use culturally relevant examples, and validate students' experiences.",
  },
  "universal-design-for-learning": {
    title: "Universal Design for Learning",
    description: "Designing learning experiences to be accessible and effective for all students.",
    benefits: [
      "Addresses diverse learning needs",
      "Reduces barriers to learning",
      "Provides multiple paths to success",
      "Supports all learners",
    ],
    implementation:
      "Provide multiple means of engagement, representation, and action/expression to accommodate all learners.",
  },
}

export function PedagogicalStrategyInfo({ strategyId }) {
  const [open, setOpen] = useState(false)
  const strategy = STRATEGY_INFO[strategyId] || {
    title: "Strategy Information",
    description: "Information about this strategy is not available.",
    benefits: [],
    implementation: "",
  }

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button onClick={() => setOpen(true)} className="ml-2">
              <InfoIcon className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Click for more information about this strategy</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>{strategy.title}</DialogTitle>
            <DialogDescription>{strategy.description}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <h4 className="font-medium mb-2">Benefits</h4>
              <ul className="list-disc pl-5 space-y-1">
                {strategy.benefits.map((benefit, index) => (
                  <li key={index} className="text-sm">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Implementation</h4>
              <p className="text-sm">{strategy.implementation}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
