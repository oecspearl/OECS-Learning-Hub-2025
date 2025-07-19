import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumb } from "@/components/breadcrumb"

export default function ScienceActivitiesPage() {
  return (
    <div className="container mx-auto py-6">
            <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Grade 1 Science Activities</h1>
        <Button asChild variant="outline">
          <Link href="/curriculum/grade1-subjects/science">Back to Science Curriculum</Link>
        </Button>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardContent className="pt-6">
            <p className="mb-4">
              These activities are designed to support the Grade 1 Science curriculum. They provide hands-on,
              inquiry-based experiences that help students explore the natural world, develop scientific thinking
              skills, and build conceptual understanding.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Plant Detectives</CardTitle>
              <CardDescription>Life Science Activity</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Students observe and investigate the parts of plants and their functions. They dissect flowers, examine
                seeds, and document their observations through drawings and simple writing.
              </p>
              <div className="text-sm text-muted-foreground">
                <div className="font-medium">Materials:</div>
                <ul className="list-disc pl-5 mt-1 mb-2">
                  <li>Various plants and flowers</li>
                  <li>Hand lenses</li>
                  <li>Tweezers</li>
                  <li>Paper plates</li>
                  <li>Observation journals</li>
                </ul>
                <div className="font-medium">Duration: 45-60 minutes</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/resources/activities/plant-detectives">View Activity</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Material Sorters</CardTitle>
              <CardDescription>Physical Science Activity</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Students explore the properties of different materials by sorting objects based on observable
                characteristics such as texture, flexibility, transparency, and whether they sink or float.
              </p>
              <div className="text-sm text-muted-foreground">
                <div className="font-medium">Materials:</div>
                <ul className="list-disc pl-5 mt-1 mb-2">
                  <li>Collection of various materials and objects</li>
                  <li>Sorting hoops or containers</li>
                  <li>Property cards</li>
                  <li>Water tubs for sink/float testing</li>
                  <li>Recording sheets</li>
                </ul>
                <div className="font-medium">Duration: 40-50 minutes</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/resources/activities/material-sorters">View Activity</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Weather Watchers</CardTitle>
              <CardDescription>Earth and Space Science Activity</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Students observe, record, and track daily weather conditions over time. They use simple tools to measure
                temperature and precipitation, and create weather symbols to represent their observations.
              </p>
              <div className="text-sm text-muted-foreground">
                <div className="font-medium">Materials:</div>
                <ul className="list-disc pl-5 mt-1 mb-2">
                  <li>Weather chart</li>
                  <li>Weather symbols</li>
                  <li>Thermometer</li>
                  <li>Rain gauge</li>
                  <li>Weather journals</li>
                </ul>
                <div className="font-medium">Duration: Ongoing (15 minutes daily)</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/resources/activities/weather-watchers">View Activity</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Shadow Investigators</CardTitle>
              <CardDescription>Physical Science Activity</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Students explore how shadows are formed and how they change throughout the day. They trace shadows,
                predict shadow shapes, and investigate how to change the size and shape of shadows.
              </p>
              <div className="text-sm text-muted-foreground">
                <div className="font-medium">Materials:</div>
                <ul className="list-disc pl-5 mt-1 mb-2">
                  <li>Flashlights</li>
                  <li>Various objects</li>
                  <li>White paper</li>
                  <li>Chalk (for outdoor shadows)</li>
                  <li>Shadow puppet templates</li>
                </ul>
                <div className="font-medium">Duration: 45-60 minutes</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/resources/activities/shadow-investigators">View Activity</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Animal Adaptations</CardTitle>
              <CardDescription>Life Science Activity</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Students learn about how animals are adapted to their environments. They explore animal coverings,
                movement, and habitats through hands-on activities and role-play.
              </p>
              <div className="text-sm text-muted-foreground">
                <div className="font-medium">Materials:</div>
                <ul className="list-disc pl-5 mt-1 mb-2">
                  <li>Animal pictures and cards</li>
                  <li>Samples of animal coverings (feathers, fur, etc.)</li>
                  <li>Habitat posters or dioramas</li>
                  <li>Movement cards</li>
                  <li>Animal masks (optional)</li>
                </ul>
                <div className="font-medium">Duration: 50-60 minutes</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/resources/activities/animal-adaptations">View Activity</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Push and Pull Playground</CardTitle>
              <CardDescription>Physical Science Activity</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Students explore forces by investigating how objects move when pushed or pulled. They experiment with
                different strengths and directions of forces, and observe how objects move on different surfaces.
              </p>
              <div className="text-sm text-muted-foreground">
                <div className="font-medium">Materials:</div>
                <ul className="list-disc pl-5 mt-1 mb-2">
                  <li>Toy cars</li>
                  <li>Balls of different sizes</li>
                  <li>Ramps</li>
                  <li>Surface materials (carpet, wood, sandpaper)</li>
                  <li>Spring scales (optional)</li>
                  <li>Recording sheets</li>
                </ul>
                <div className="font-medium">Duration: 45-60 minutes</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/resources/activities/push-pull-playground">View Activity</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
