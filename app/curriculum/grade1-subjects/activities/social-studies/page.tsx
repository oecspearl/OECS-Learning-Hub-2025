"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { PDFExportButton } from "@/components/pdf-export-button"
import { Clock, Users, BookOpen } from "lucide-react"

// Mock activities data
const activities = [
  {
    id: "1",
    title: "My Family Tree",
    strand: "Historical and Cultural Thinking",
    description: "Students create a family tree to explore their family history and cultural heritage.",
    duration: 45,
    groupSize: "Individual",
    materials: ["Paper", "Colored pencils", "Family photos (optional)", "Template handout"],
    instructions: [
      "Introduce the concept of a family tree",
      "Show examples of different family trees",
      "Distribute the template handout",
      "Have students fill in their family members' names",
      "Allow time for students to decorate their family trees",
      "Have students share their family trees with the class",
    ],
  },
  {
    id: "2",
    title: "Community Helper Role Play",
    strand: "Civic Participation",
    description: "Students role-play different community helpers to understand their roles and responsibilities.",
    duration: 30,
    groupSize: "Small groups",
    materials: ["Community helper props (hats, tools, etc.)", "Role cards", "Scenario cards"],
    instructions: [
      "Discuss different community helpers and their roles",
      "Divide students into small groups",
      "Assign each group a community helper to role-play",
      "Distribute props and scenario cards",
      "Allow time for groups to practice their role-plays",
      "Have each group perform for the class",
      "Discuss the importance of each community helper",
    ],
  },
  {
    id: "3",
    title: "Neighborhood Map",
    strand: "Spatial Thinking",
    description: "Students create a map of their neighborhood or school, identifying key locations and landmarks.",
    duration: 60,
    groupSize: "Pairs",
    materials: ["Large paper", "Markers", "Rulers", "Stickers for landmarks"],
    instructions: [
      "Introduce the concept of maps and their purpose",
      "Show examples of simple maps",
      "Discuss important features of the neighborhood or school",
      "Have students work in pairs to create their maps",
      "Encourage students to include a title, compass rose, and legend",
      "Allow time for students to share their maps with the class",
    ],
  },
  {
    id: "4",
    title: "Needs vs. Wants Sorting Game",
    strand: "Economic Decision Making",
    description: "Students sort pictures of various items into 'needs' and 'wants' categories.",
    duration: 25,
    groupSize: "Small groups",
    materials: [
      "Picture cards of various items",
      "Two sorting containers labeled 'Needs' and 'Wants'",
      "Sorting worksheet",
    ],
    instructions: [
      "Discuss the difference between needs and wants",
      "Provide examples of each category",
      "Divide students into small groups",
      "Distribute picture cards and sorting containers",
      "Have students sort the cards into the appropriate containers",
      "Discuss any items that were difficult to categorize",
      "Complete the sorting worksheet as a class",
    ],
  },
  {
    id: "5",
    title: "Cultural Celebration Show and Tell",
    strand: "Historical and Cultural Thinking",
    description: "Students share an item or tradition from their cultural background with the class.",
    duration: 45,
    groupSize: "Individual",
    materials: ["Cultural items brought from home", "World map or globe", "Cultural celebration worksheet"],
    instructions: [
      "Send a note home asking parents to help students select a cultural item to share",
      "Create a schedule for student presentations",
      "Have each student share their item and explain its significance",
      "Use the world map to identify where each cultural tradition originates",
      "Complete the cultural celebration worksheet",
      "Create a classroom display of cultural traditions",
    ],
  },
  {
    id: "6",
    title: "Cardinal Directions Treasure Hunt",
    strand: "Spatial Thinking",
    description: "Students use cardinal directions to find hidden treasures around the classroom or school yard.",
    duration: 40,
    groupSize: "Pairs",
    materials: ["Compass", "Direction cards", "Small treasures or prizes", "Simple maps with directions"],
    instructions: [
      "Teach students about the four cardinal directions",
      "Practice identifying North, South, East, and West in the classroom",
      "Divide students into pairs",
      "Distribute simple maps with directions",
      "Have students follow the directions to find hidden treasures",
      "Discuss the importance of directions for finding locations",
    ],
  },
]

export default function SocialStudiesActivitiesPage() {
  // Group activities by strand
  const activitiesByStrand = activities.reduce(
    (acc, activity) => {
      const strand = activity.strand
      if (!acc[strand]) {
        acc[strand] = []
      }
      acc[strand].push(activity)
      return acc
    },
    {} as Record<string, typeof activities>,
  )

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Grade 1 Social Studies Activities</h1>
        <Button asChild variant="outline">
          <Link href="/curriculum/grade1-subjects/social-studies">Back to Social Studies</Link>
        </Button>
      </div>

      <p className="text-lg mb-6">
        Explore these engaging activities designed to help Grade 1 students develop their understanding of social
        studies concepts through hands-on learning experiences.
      </p>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Activities</TabsTrigger>
          {Object.keys(activitiesByStrand).map((strand) => (
            <TabsTrigger key={strand} value={strand}>
              {strand}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </TabsContent>

        {Object.entries(activitiesByStrand).map(([strand, strandActivities]) => (
          <TabsContent key={strand} value={strand}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {strandActivities.map((activity) => (
                <ActivityCard key={activity.id} activity={activity} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

function ActivityCard({ activity }: { activity: any }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>{activity.title}</CardTitle>
          <Badge>{activity.strand}</Badge>
        </div>
        <CardDescription>{activity.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center text-sm">
          <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
          <span>{activity.duration} minutes</span>
        </div>
        <div className="flex items-center text-sm">
          <Users className="mr-2 h-4 w-4 text-muted-foreground" />
          <span>{activity.groupSize}</span>
        </div>

        <div className="mt-4">
          <h4 className="font-medium mb-2">Materials:</h4>
          <ul className="list-disc pl-5 text-sm">
            {activity.materials.map((material: string, index: number) => (
              <li key={index}>{material}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">
          <BookOpen className="mr-2 h-4 w-4" />
          View Details
        </Button>
        <PDFExportButton
          title={activity.title}
          subtitle="Grade 1 Social Studies Activity"
          content={[
            {
              text: activity.description,
            },
            {
              heading: "Activity Details",
              text: `Duration: ${activity.duration} minutes\nGroup Size: ${activity.groupSize}`,
            },
            {
              heading: "Materials",
              list: activity.materials,
            },
            {
              heading: "Instructions",
              list: activity.instructions,
            },
          ]}
          filename={`activity-${activity.id}.pdf`}
        />
      </CardFooter>
    </Card>
  )
}
