"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function InterdependentRelationshipsActivitiesPage() {
  return (
    <div className="container mx-auto py-8">
      <Link href="/curriculum/grade3-subjects/activities/science">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Grade 3 Science Activities
        </Button>
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Interdependent Relationships Activities</h1>
        <p className="text-gray-600">
          Explore activities that help students understand how organisms depend on each other and their environment.
        </p>
      </div>

      <Tabs defaultValue="groups" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
          <TabsTrigger value="groups">Animal Groups</TabsTrigger>
          <TabsTrigger value="habitats">Habitats</TabsTrigger>
          <TabsTrigger value="environment">Environmental Changes</TabsTrigger>
        </TabsList>

        <TabsContent value="groups" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Animal Groups and Survival</CardTitle>
              <CardDescription>
                Activities to help students understand how animals form groups to help members survive.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Activity 1: Why Animals Form Groups</h3>
                  <p className="mb-4">Students will learn about the benefits of animals living in groups.</p>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Materials Needed:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Why Animals Form Groups worksheet</li>
                      <li>Pictures of animals in groups (meerkats, elephants, fish, etc.)</li>
                      <li>Pencils</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Procedure:</h4>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>Discuss with students why some animals live in groups</li>
                      <li>Show pictures of different animal groups and discuss their behaviors</li>
                      <li>Have students complete the worksheet</li>
                      <li>Discuss how living in groups helps animals survive</li>
                    </ol>
                  </div>

                  <div className="flex justify-center my-4">
                    <div className="relative h-64 w-full max-w-md">
                      <Image
                        src="/placeholder.svg?height=250&width=400&query=animals+in+groups+meerkats"
                        alt="Animals in Groups"
                        fill
                        className="object-contain rounded-md"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <a
                      href="http://www.varsitytutors.com/3rd_grade_science-help/life-science/why-animals-form-groups"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Download Worksheet →
                    </a>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Activity 2: Animal Group Role Play</h3>
                  <p className="mb-4">
                    Students will role-play different animal groups to understand how they work together.
                  </p>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Materials Needed:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Open space for movement</li>
                      <li>Role cards describing different animal group behaviors</li>
                      <li>Simple props (optional)</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Procedure:</h4>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>Divide students into groups of 4-6</li>
                      <li>Assign each group an animal (e.g., meerkats, wolves, elephants, bees)</li>
                      <li>Provide role cards describing different roles within the animal group</li>
                      <li>Have students act out how their animal group works together to survive</li>
                      <li>After each performance, discuss how the group behaviors help the animals survive</li>
                    </ol>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="habitats" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Habitats and Survival</CardTitle>
              <CardDescription>
                Activities to help students understand how habitats affect the survival of organisms.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Activity 1: Habitat Match-Up</h3>
                  <p className="mb-4">
                    Students will match animals to their appropriate habitats and explain why they can survive there.
                  </p>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Materials Needed:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Pictures of different habitats (desert, forest, ocean, polar region)</li>
                      <li>Pictures of animals from each habitat</li>
                      <li>Glue or tape</li>
                      <li>Large paper or poster board</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Procedure:</h4>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>Divide students into small groups</li>
                      <li>Provide each group with habitat pictures and animal pictures</li>
                      <li>Have students match animals to their appropriate habitats</li>
                      <li>Students should explain why each animal can survive in that habitat</li>
                      <li>Create a class poster showing the different habitats and their inhabitants</li>
                    </ol>
                  </div>

                  <div className="flex justify-center my-4">
                    <div className="relative h-64 w-full max-w-md">
                      <Image
                        src="/placeholder.svg?height=250&width=400&query=different+animal+habitats"
                        alt="Animal Habitats"
                        fill
                        className="object-contain rounded-md"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Activity 2: Helping Froggy Find Its Habitat</h3>
                  <p className="mb-4">
                    Students will analyze different habitats to determine which one best meets a frog's needs.
                  </p>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Materials Needed:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Pictures of different habitats (desert, coral reef, grassland, rainforest)</li>
                      <li>Worksheet with questions about each habitat</li>
                      <li>Pencils</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Procedure:</h4>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>Introduce "Froggy" the frog and explain its basic needs</li>
                      <li>Show pictures of different habitats</li>
                      <li>Have students analyze each habitat to determine if it meets Froggy's needs</li>
                      <li>Students complete the worksheet, identifying which habitat is best for Froggy</li>
                      <li>Discuss why some habitats are better than others for certain animals</li>
                    </ol>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="environment" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Environmental Changes</CardTitle>
              <CardDescription>
                Activities to help students understand how environmental changes affect organisms.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Activity 1: Environmental Change Simulation</h3>
                  <p className="mb-4">Students will simulate how environmental changes affect animal populations.</p>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Materials Needed:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Different colored beads or small objects (representing food)</li>
                      <li>Cups or containers (representing animal stomachs)</li>
                      <li>Tweezers or spoons (representing animal mouths)</li>
                      <li>Timer</li>
                      <li>Recording sheet</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Procedure:</h4>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>Divide students into groups representing different animal species</li>
                      <li>Scatter beads (food) on a designated area</li>
                      <li>Give each group a specific tool to collect food (tweezers, spoons, etc.)</li>
                      <li>Allow students to collect food for a set time</li>
                      <li>
                        Introduce an environmental change (remove certain colors of beads, restrict certain tools)
                      </li>
                      <li>Continue the activity and observe how the change affects each group</li>
                      <li>Discuss how environmental changes can make it harder for some animals to survive</li>
                    </ol>
                  </div>

                  <div className="flex justify-center my-4">
                    <div className="relative h-64 w-full max-w-md">
                      <Image
                        src="/placeholder.svg?height=250&width=400&query=environmental+change+simulation+classroom+activity"
                        alt="Environmental Change Simulation"
                        fill
                        className="object-contain rounded-md"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Activity 2: Create a Conservation Poster</h3>
                  <p className="mb-4">Students will create posters to raise awareness about protecting habitats.</p>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Materials Needed:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Large paper or poster board</li>
                      <li>Markers, colored pencils, crayons</li>
                      <li>Pictures of endangered animals and their habitats (optional)</li>
                      <li>Scissors and glue</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Procedure:</h4>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>Discuss with students how human activities can harm animal habitats</li>
                      <li>Brainstorm ways people can help protect habitats</li>
                      <li>Have students create posters that show the importance of habitat conservation</li>
                      <li>Encourage students to include specific actions people can take</li>
                      <li>Display posters in the school to raise awareness</li>
                    </ol>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
