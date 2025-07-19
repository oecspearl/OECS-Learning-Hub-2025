"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface PedagogicalStrategyModalProps {
  isOpen: boolean
  onClose: () => void
  strategyId?: string
}

const strategies = {
  "inquiry-based-learning": {
    title: "Inquiry-Based Learning",
    description: "A student-centered approach where learning is driven by questions, problems, or scenarios.",
    examples: [
      "Science experiments where students develop their own hypotheses",
      "Historical investigations where students analyze primary sources",
      "Mathematical explorations where students discover patterns and relationships",
    ],
  },
  "project-based-learning": {
    title: "Project-Based Learning",
    description: "Students learn by actively engaging in real-world and personally meaningful projects.",
    examples: [
      "Creating a community garden to learn about ecosystems and sustainability",
      "Designing and building a model bridge to learn about physics and engineering",
      "Producing a documentary about local history",
    ],
  },
  "direct-instruction": {
    title: "Direct Instruction",
    description: "Teacher-led, explicit teaching of concepts, skills, or knowledge.",
    examples: [
      "Step-by-step demonstration of a mathematical procedure",
      "Explicit teaching of phonics and reading strategies",
      "Modeling the scientific method before independent practice",
    ],
  },
  "cooperative-learning": {
    title: "Cooperative Learning",
    description: "Students work together in small groups to maximize their own and each other's learning.",
    examples: [
      "Jigsaw activities where each student becomes an expert on one aspect of a topic",
      "Think-pair-share discussions",
      "Group problem-solving challenges with defined roles",
    ],
  },
  "differentiated-instruction": {
    title: "Differentiated Instruction",
    description: "Tailoring instruction to meet individual needs while maintaining common goals.",
    examples: [
      "Tiered assignments with varying levels of complexity",
      "Learning centers with activities targeting different learning styles",
      "Flexible grouping based on readiness, interest, or learning profile",
    ],
  },
  "flipped-classroom": {
    title: "Flipped Classroom",
    description: "Students learn content at home through videos or readings, then practice and apply in class.",
    examples: [
      "Watching instructional videos at home, then solving problems in class",
      "Reading content before class, then engaging in discussions or debates",
      "Learning basic concepts independently, then conducting experiments in class",
    ],
  },
  gamification: {
    title: "Gamification",
    description: "Using game elements and design principles to enhance learning and engagement.",
    examples: [
      "Point systems and leaderboards for completing learning activities",
      "Educational games that teach specific skills or concepts",
      "Creating challenges and quests that build knowledge progressively",
    ],
  },
  "problem-based-learning": {
    title: "Problem-Based Learning",
    description:
      "Learning that occurs through the process of working toward the understanding or resolution of a problem.",
    examples: [
      "Designing solutions for environmental issues in the local community",
      "Developing a business plan to address a market need",
      "Creating strategies to improve school systems or policies",
    ],
  },
  "socratic-method": {
    title: "Socratic Method",
    description: "Using questions to stimulate critical thinking and illuminate ideas.",
    examples: [
      "Philosophical discussions where the teacher guides through questioning",
      "Literary analysis through guided inquiry",
      "Ethical debates where students must justify their positions",
    ],
  },
  "experiential-learning": {
    title: "Experiential Learning",
    description: "Learning through reflection on doing, with an emphasis on the process rather than the outcome.",
    examples: [
      "Field trips with structured reflection activities",
      "Simulations of real-world scenarios",
      "Service learning projects in the community",
    ],
  },
  "culturally-responsive-teaching": {
    title: "Culturally Responsive Teaching",
    description:
      "Teaching that recognizes the importance of including students' cultural references in all aspects of learning.",
    examples: [
      "Incorporating diverse literature that reflects students' backgrounds",
      "Using examples and case studies from various cultural contexts",
      "Connecting curriculum to students' lived experiences and communities",
    ],
  },
  "universal-design-for-learning": {
    title: "Universal Design for Learning",
    description: "Creating flexible learning environments that accommodate individual learning differences.",
    examples: [
      "Providing multiple means of representation (text, audio, video)",
      "Offering various ways for students to demonstrate knowledge",
      "Creating flexible assessments that allow for different response formats",
    ],
  },
}

export function PedagogicalStrategyModal({ isOpen, onClose, strategyId }: PedagogicalStrategyModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Pedagogical Strategies</DialogTitle>
          <DialogDescription>
            Different teaching approaches to guide your lesson plan structure and activities.
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[60vh] overflow-y-auto pr-2">
          <Accordion type="single" collapsible defaultValue={strategyId}>
            {Object.entries(strategies).map(([id, strategy]) => (
              <AccordionItem key={id} value={id}>
                <AccordionTrigger className="text-left">{strategy.title}</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p>{strategy.description}</p>
                    <div>
                      <h4 className="font-medium text-sm mt-2">Examples:</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1">
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
        </div>
        <DialogClose asChild>
          <Button type="button" variant="secondary" className="mt-2">
            Close
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}
