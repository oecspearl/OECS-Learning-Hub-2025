import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Breadcrumb } from "@/components/breadcrumb"

export default function Grade1Science() {
  return (
    <div className="container mx-auto py-6">
            <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Grade 1 Science Curriculum</h1>
        <Button asChild variant="outline">
          <Link href="/curriculum/grade1-subjects">Back to Grade 1 Curriculum</Link>
        </Button>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardContent className="pt-6">
            <p className="mb-4">
              The Grade 1 Science curriculum nurtures students' natural curiosity about the world around them. Through
              hands-on investigations and guided inquiry, students develop scientific thinking skills as they explore
              living things, materials, energy, and Earth systems.
            </p>
          </CardContent>
        </Card>

        <Tabs defaultValue="strands">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="strands">Curriculum Strands</TabsTrigger>
            <TabsTrigger value="approach">Teaching Approach</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="strands" className="space-y-4 pt-4">
            <h2 className="text-2xl font-semibold mb-4">Science Strands</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Life Science</h3>
                  <p className="mb-4">
                    Students explore the characteristics, needs, and life cycles of living things. They learn about
                    plants, animals, and humans, developing an understanding of how living things depend on their
                    environment.
                  </p>
                  <Button asChild>
                    <Link href="/curriculum/grade1-subjects/science/life-science">View Strand</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Physical Science</h3>
                  <p className="mb-4">
                    Students investigate the properties of materials, light, sound, and motion. They explore how objects
                    can be described, sorted, and changed, and develop an understanding of forces and energy.
                  </p>
                  <Button asChild>
                    <Link href="/curriculum/grade1-subjects/science/physical-science">View Strand</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Earth and Space Science</h3>
                  <p className="mb-4">
                    Students learn about Earth's materials, weather patterns, and seasonal changes. They explore the day
                    and night sky, developing an awareness of the Sun, Moon, and stars.
                  </p>
                  <Button asChild>
                    <Link href="/curriculum/grade1-subjects/science/earth-space-science">View Strand</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Scientific Inquiry</h3>
                  <p className="mb-4">
                    Students develop the skills and processes of scientific investigation. They learn to ask questions,
                    make predictions, conduct simple experiments, make observations, and communicate their findings.
                  </p>
                  <Button asChild>
                    <Link href="/curriculum/grade1-subjects/science/scientific-inquiry">View Strand</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="approach" className="space-y-4 pt-4">
            <h2 className="text-2xl font-semibold mb-4">Teaching Approach</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4">
                  The Grade 1 Science curriculum employs an inquiry-based approach that encourages active learning
                  through:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Hands-on investigations that allow students to explore scientific phenomena</li>
                  <li>Guided inquiry that develops scientific thinking and reasoning</li>
                  <li>Observation and documentation of the natural world</li>
                  <li>Integration with other subjects, particularly mathematics and language arts</li>
                  <li>Connections to students' everyday experiences and the local environment</li>
                </ul>
                <p>
                  Assessment focuses on students' understanding of scientific concepts, development of inquiry skills,
                  and ability to communicate their ideas and findings.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="space-y-4 pt-4">
            <h2 className="text-2xl font-semibold mb-4">Teacher Resources</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4">
                  The following resources support the implementation of the Grade 1 Science curriculum:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Science kits with materials for hands-on investigations</li>
                  <li>Picture books and non-fiction texts about scientific topics</li>
                  <li>Field guides appropriate for young learners</li>
                  <li>Digital resources including videos, simulations, and interactive activities</li>
                  <li>Local environmental resources and natural areas for field studies</li>
                  <li>Simple scientific tools such as magnifiers, balance scales, and measuring cups</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <div className="mt-8 flex justify-center">
        <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
          <Link href="/curriculum/grade1-subjects/activities/science">View Science Activities</Link>
        </Button>
      </div>
    </div>
  )
}
