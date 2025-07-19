import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumb } from "@/components/breadcrumb"

export default function MathematicsActivitiesPage() {
  return (
    <div className="container mx-auto py-6">
            <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Grade 1 Mathematics Activities</h1>
        <Button asChild variant="outline">
          <Link href="/curriculum/grade1-subjects/mathematics">Back to Mathematics Curriculum</Link>
        </Button>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardContent className="pt-6">
            <p className="mb-4">
              These activities are designed to support the Grade 1 Mathematics curriculum. They provide hands-on,
              engaging experiences that help students develop number sense, spatial awareness, measurement skills, and
              problem-solving abilities.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Number Detectives</CardTitle>
              <CardDescription>Number Sense Activity</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Students become "number detectives" as they search for numbers in the classroom and school environment.
                They record the numbers they find and discuss where numbers are used in everyday life.
              </p>
              <div className="text-sm text-muted-foreground">
                <div className="font-medium">Materials:</div>
                <ul className="list-disc pl-5 mt-1 mb-2">
                  <li>Clipboards</li>
                  <li>Recording sheets</li>
                  <li>Pencils</li>
                  <li>Magnifying glasses (optional)</li>
                </ul>
                <div className="font-medium">Duration: 30-40 minutes</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/resources/activities/number-detectives">View Activity</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Shape Hunt</CardTitle>
              <CardDescription>Geometry Activity</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Students explore the classroom and school to find examples of different 2D shapes. They create a collage
                of shapes using pictures or drawings of the shapes they discovered.
              </p>
              <div className="text-sm text-muted-foreground">
                <div className="font-medium">Materials:</div>
                <ul className="list-disc pl-5 mt-1 mb-2">
                  <li>Shape cards</li>
                  <li>Clipboards</li>
                  <li>Paper</li>
                  <li>Scissors and glue</li>
                  <li>Cameras (optional)</li>
                </ul>
                <div className="font-medium">Duration: 45 minutes</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/resources/activities/shape-hunt">View Activity</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Measurement Olympics</CardTitle>
              <CardDescription>Measurement Activity</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Students participate in a series of measurement challenges, using non-standard units to measure
                distance, capacity, and time. They record their results and compare measurements.
              </p>
              <div className="text-sm text-muted-foreground">
                <div className="font-medium">Materials:</div>
                <ul className="list-disc pl-5 mt-1 mb-2">
                  <li>Unifix cubes</li>
                  <li>Paper clips</li>
                  <li>String</li>
                  <li>Cups</li>
                  <li>Sand timer</li>
                  <li>Recording sheets</li>
                </ul>
                <div className="font-medium">Duration: 60 minutes</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/resources/activities/measurement-olympics">View Activity</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Our Favorite Things Graph</CardTitle>
              <CardDescription>Data and Probability Activity</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Students collect and organize data about their favorite things (colors, fruits, animals, etc.). They
                create a simple graph to represent the data and answer questions about their findings.
              </p>
              <div className="text-sm text-muted-foreground">
                <div className="font-medium">Materials:</div>
                <ul className="list-disc pl-5 mt-1 mb-2">
                  <li>Chart paper</li>
                  <li>Sticky notes</li>
                  <li>Markers</li>
                  <li>Picture cards</li>
                </ul>
                <div className="font-medium">Duration: 40-50 minutes</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/resources/activities/favorite-things-graph">View Activity</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Ten Frame Fun</CardTitle>
              <CardDescription>Number Sense Activity</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Students use ten frames to explore number relationships, particularly combinations that make 10. They
                play games and complete activities that develop their understanding of numbers to 20.
              </p>
              <div className="text-sm text-muted-foreground">
                <div className="font-medium">Materials:</div>
                <ul className="list-disc pl-5 mt-1 mb-2">
                  <li>Ten frames</li>
                  <li>Counters</li>
                  <li>Number cards</li>
                  <li>Recording sheets</li>
                </ul>
                <div className="font-medium">Duration: 30-40 minutes</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/resources/activities/ten-frame-fun">View Activity</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Pattern Block Puzzles</CardTitle>
              <CardDescription>Geometry Activity</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Students use pattern blocks to create and extend patterns, fill in outlines, and solve spatial puzzles.
                This activity develops spatial reasoning and geometric thinking.
              </p>
              <div className="text-sm text-muted-foreground">
                <div className="font-medium">Materials:</div>
                <ul className="list-disc pl-5 mt-1 mb-2">
                  <li>Pattern blocks</li>
                  <li>Pattern cards</li>
                  <li>Outline puzzles</li>
                  <li>Paper for tracing</li>
                </ul>
                <div className="font-medium">Duration: 30-40 minutes</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/resources/activities/pattern-block-puzzles">View Activity</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
