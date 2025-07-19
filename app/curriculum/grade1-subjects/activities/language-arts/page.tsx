import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumb } from "@/components/breadcrumb"

export default function LanguageArtsActivitiesPage() {
  return (
    <div className="container mx-auto py-6">
            <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Grade 1 Language Arts Activities</h1>
        <Button asChild variant="outline">
          <Link href="/curriculum/grade1-subjects/language-arts">Back to Language Arts Curriculum</Link>
        </Button>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardContent className="pt-6">
            <p className="mb-4">
              These activities are designed to support the Grade 1 Language Arts curriculum. They provide engaging
              experiences that help students develop listening, speaking, reading, writing, viewing, and representing
              skills through meaningful contexts.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Story Sequence Cards</CardTitle>
              <CardDescription>Reading Comprehension Activity</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Students listen to or read a story, then arrange picture cards in the correct sequence. They retell the
                story using the cards as prompts, focusing on beginning, middle, and end.
              </p>
              <div className="text-sm text-muted-foreground">
                <div className="font-medium">Materials:</div>
                <ul className="list-disc pl-5 mt-1 mb-2">
                  <li>Picture books</li>
                  <li>Story sequence cards</li>
                  <li>Sentence strips</li>
                  <li>Pocket chart</li>
                </ul>
                <div className="font-medium">Duration: 30-40 minutes</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/resources/activities/story-sequence-cards">View Activity</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Sound Detectives</CardTitle>
              <CardDescription>Phonological Awareness Activity</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Students engage in activities to identify, isolate, and manipulate sounds in words. They play games
                focusing on initial sounds, rhyming words, and sound blending and segmentation.
              </p>
              <div className="text-sm text-muted-foreground">
                <div className="font-medium">Materials:</div>
                <ul className="list-disc pl-5 mt-1 mb-2">
                  <li>Picture cards</li>
                  <li>Sound boxes</li>
                  <li>Counters</li>
                  <li>Letter tiles</li>
                  <li>Rhyming pairs</li>
                </ul>
                <div className="font-medium">Duration: 20-30 minutes</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/resources/activities/sound-detectives">View Activity</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Interactive Writing</CardTitle>
              <CardDescription>Writing Activity</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Students collaborate with the teacher to compose a text. They take turns contributing to the writing,
                focusing on letter formation, spacing, punctuation, and spelling patterns.
              </p>
              <div className="text-sm text-muted-foreground">
                <div className="font-medium">Materials:</div>
                <ul className="list-disc pl-5 mt-1 mb-2">
                  <li>Chart paper</li>
                  <li>Markers</li>
                  <li>Pointer</li>
                  <li>Whiteboards</li>
                  <li>Word wall</li>
                </ul>
                <div className="font-medium">Duration: 30-40 minutes</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/resources/activities/interactive-writing">View Activity</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Puppet Show Storytelling</CardTitle>
              <CardDescription>Speaking and Listening Activity</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Students use puppets to retell familiar stories or create their own. This activity develops oral
                language skills, creativity, and narrative understanding.
              </p>
              <div className="text-sm text-muted-foreground">
                <div className="font-medium">Materials:</div>
                <ul className="list-disc pl-5 mt-1 mb-2">
                  <li>Stick puppets</li>
                  <li>Sock puppets</li>
                  <li>Puppet theater</li>
                  <li>Story props</li>
                  <li>Story planning sheets</li>
                </ul>
                <div className="font-medium">Duration: 45-60 minutes</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/resources/activities/puppet-show-storytelling">View Activity</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Word Detectives</CardTitle>
              <CardDescription>Word Study Activity</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Students explore high-frequency words and word patterns through games and activities. They practice
                reading, writing, and using these words in meaningful contexts.
              </p>
              <div className="text-sm text-muted-foreground">
                <div className="font-medium">Materials:</div>
                <ul className="list-disc pl-5 mt-1 mb-2">
                  <li>Word cards</li>
                  <li>Magnetic letters</li>
                  <li>Word games</li>
                  <li>Rainbow writing materials</li>
                  <li>Word hunt sheets</li>
                </ul>
                <div className="font-medium">Duration: 30-40 minutes</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/resources/activities/word-detectives">View Activity</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Reading Response Centers</CardTitle>
              <CardDescription>Comprehension Activity</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Students respond to texts through various activities at different centers. Options include drawing
                characters, creating story maps, writing simple reviews, and dramatizing scenes.
              </p>
              <div className="text-sm text-muted-foreground">
                <div className="font-medium">Materials:</div>
                <ul className="list-disc pl-5 mt-1 mb-2">
                  <li>Picture books</li>
                  <li>Response templates</li>
                  <li>Art supplies</li>
                  <li>Story map organizers</li>
                  <li>Character puppets</li>
                </ul>
                <div className="font-medium">Duration: 45-60 minutes</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/resources/activities/reading-response-centers">View Activity</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
