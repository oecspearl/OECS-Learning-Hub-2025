import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumb } from "@/components/breadcrumb"
import { Clock, Calendar } from "lucide-react"

export default function CelebrationsUnit() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Curriculum", href: "/curriculum" },
          { label: "Kindergarten", href: "/curriculum/kindergarten" },
          { label: "Celebrations", href: "/curriculum/kindergarten/celebrations" },
        ]}
      />

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4 text-cyan-700">Celebrations Unit</h1>
          <p className="text-xl mb-4">4 Weeks | January - February</p>
          <div className="bg-cyan-50 p-4 rounded-lg mb-6 border border-cyan-100">
            <h2 className="text-xl font-semibold mb-2 text-cyan-700">Essential Question</h2>
            <p className="text-lg italic">What do I like about celebrations with my family?</p>
          </div>

          <div className="relative w-full h-64 rounded-lg overflow-hidden mb-6">
            <Image
              src="/kindergarten-celebrations.png"
              alt="Children celebrating together"
              fill
              className="object-cover"
            />
          </div>

          <p className="mb-4">
            This unit helps children explore different types of celebrations, including family celebrations, cultural
            celebrations, and community celebrations. They learn about traditions, customs, and the importance of
            celebrations in bringing people together.
          </p>
          <p className="mb-6">
            Through stories, music, art, and dramatic play, children develop an appreciation for diversity while
            building language, social, and cognitive skills.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
              <Link href="/curriculum/kindergarten/celebrations/week-1">Week 1</Link>
            </Button>
            <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
              <Link href="/curriculum/kindergarten/celebrations/week-2">Week 2</Link>
            </Button>
            <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
              <Link href="/curriculum/kindergarten/celebrations/week-3">Week 3</Link>
            </Button>
            <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
              <Link href="/curriculum/kindergarten/celebrations/week-4">Week 4</Link>
            </Button>
            <Button asChild variant="outline" className="text-cyan-600 border-cyan-600 hover:bg-cyan-50">
              <Link href="/curriculum/kindergarten/celebrations/resources">Resources</Link>
            </Button>
          </div>
        </div>
        <div className="md:w-1/3">
          <Card className="border-cyan-100 shadow-md">
            <CardHeader className="bg-cyan-50 border-b border-cyan-100">
              <CardTitle className="flex items-center text-cyan-700">
                <Clock className="mr-2 h-5 w-5" /> Unit Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <strong className="text-cyan-600">Week 1:</strong> What are some festivals or celebrations celebrated
                  with my family?
                </li>
                <li>
                  <strong className="text-cyan-600">Week 2:</strong> Does every family celebrate the same festivals in
                  the same way?
                </li>
                <li>
                  <strong className="text-cyan-600">Week 3:</strong> What are the special foods, decorations, events we
                  experience in my family for these celebrations?
                </li>
                <li>
                  <strong className="text-cyan-600">Week 4:</strong> What do I like about celebrations with my family?
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card className="border-cyan-100 shadow-md">
          <CardHeader className="bg-cyan-50 border-b border-cyan-100">
            <CardTitle className="text-cyan-700">Learning Outcomes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1">
              <li>Identify and describe different types of celebrations</li>
              <li>Understand the concept of traditions and customs</li>
              <li>Recognize similarities and differences in celebrations</li>
              <li>Develop vocabulary related to celebrations</li>
              <li>Practice sequencing events in celebrations</li>
              <li>Explore music, dance, and art in celebrations</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-cyan-100 shadow-md">
          <CardHeader className="bg-cyan-50 border-b border-cyan-100">
            <CardTitle className="text-cyan-700">Key Vocabulary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Celebration</li>
                  <li>Tradition</li>
                  <li>Custom</li>
                  <li>Festival</li>
                  <li>Holiday</li>
                  <li>Culture</li>
                </ul>
              </div>
              <div>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Ceremony</li>
                  <li>Decoration</li>
                  <li>Feast</li>
                  <li>Gift</li>
                  <li>Music</li>
                  <li>Dance</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-cyan-100 shadow-md">
          <CardHeader className="bg-cyan-50 border-b border-cyan-100">
            <CardTitle className="text-cyan-700">Assessment</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">Assessment is ongoing throughout the unit and includes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Observation of participation in celebration activities</li>
              <li>Conversations about family and cultural traditions</li>
              <li>Artwork and crafts related to celebrations</li>
              <li>Role-play and dramatic presentations</li>
              <li>Ability to sequence events in celebrations</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-700 flex items-center">
          <Calendar className="mr-2 h-6 w-6" /> Weekly Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-cyan-100 shadow-md hover:shadow-lg transition-shadow">
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src="/kindergarten-family-celebration.png"
                alt="Family celebration"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="bg-cyan-50 border-b border-cyan-100">
              <CardTitle className="text-cyan-700">Week 1: Family Celebrations</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Children explore celebrations that happen within families, such as birthdays, anniversaries, and family
                reunions, and share their own family celebration traditions.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-cyan-600 hover:bg-cyan-700">
                <Link href="/curriculum/kindergarten/celebrations/week-1">View Week 1</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-cyan-100 shadow-md hover:shadow-lg transition-shadow">
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src="/kindergarten-cultural-celebration.png"
                alt="Cultural celebration"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="bg-cyan-50 border-b border-cyan-100">
              <CardTitle className="text-cyan-700">Week 2: Cultural Celebrations</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Children learn about cultural celebrations from around the world, including holidays, festivals, and
                traditions that reflect different cultural backgrounds.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-cyan-600 hover:bg-cyan-700">
                <Link href="/curriculum/kindergarten/celebrations/week-2">View Week 2</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-cyan-100 shadow-md hover:shadow-lg transition-shadow">
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src="/kindergarten-community-celebration.png"
                alt="Community celebration"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="bg-cyan-50 border-b border-cyan-100">
              <CardTitle className="text-cyan-700">Week 3: Special Foods & Decorations</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Children explore the special foods, decorations, and events that are part of different celebrations and
                how these elements make celebrations meaningful.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-cyan-600 hover:bg-cyan-700">
                <Link href="/curriculum/kindergarten/celebrations/week-3">View Week 3</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-cyan-100 shadow-md hover:shadow-lg transition-shadow">
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src="/kindergarten-celebration-together.png"
                alt="Classroom celebration"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="bg-cyan-50 border-b border-cyan-100">
              <CardTitle className="text-cyan-700">Week 4: Celebrating Together</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Children reflect on what they enjoy most about celebrations with their families and plan a classroom
                celebration that incorporates elements from their family traditions.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-cyan-600 hover:bg-cyan-700">
                <Link href="/curriculum/kindergarten/celebrations/week-4">View Week 4</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/curriculum/kindergarten">Back to Kindergarten</Link>
        </Button>
        <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
          <Link href="/curriculum/kindergarten/celebrations/week-1">Start with Week 1</Link>
        </Button>
      </div>
    </div>
  )
}
