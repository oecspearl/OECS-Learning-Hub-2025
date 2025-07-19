import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Breadcrumb } from "@/components/breadcrumb"
import { ChevronLeft, Heart, Calendar, Download, Lightbulb, BookOpen, Pencil, Music, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

export default function BelongingUnitWeek1() {
  return (
    <div className="container mx-auto px-4 py-8">
            <div className="flex items-center gap-2 mb-4">
        <Link href="/curriculum/kindergarten/belonging">
          <Button variant="outline" className="mb-2">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Belonging Unit
          </Button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <Badge className="bg-pink-100 text-pink-800 hover:bg-pink-100 px-3 py-1 text-sm">Week 1</Badge>
            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 px-3 py-1 text-sm">
              Belonging Unit
            </Badge>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-pink-700 flex items-center gap-3">
            <Heart className="h-8 w-8" /> Week 1: All About Me
          </h1>
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg mb-6 border border-pink-100 shadow-sm">
            <h2 className="text-xl font-semibold mb-2 text-pink-700">Weekly Focus</h2>
            <p className="text-lg">
              Children explore their own identities, including their names, physical characteristics, likes and
              dislikes, and what makes them special and unique.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            <Button
              variant="outline"
              className="border-pink-300 text-pink-700 hover:bg-pink-50 flex items-center gap-2"
            >
              <Calendar className="h-4 w-4" /> Week Plan PDF
            </Button>
            <Button
              variant="outline"
              className="border-pink-300 text-pink-700 hover:bg-pink-50 flex items-center gap-2"
            >
              <Download className="h-4 w-4" /> All Materials
            </Button>
          </div>
        </div>
        <div className="md:w-1/3">
          <Card className="border-pink-200 shadow-md overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-pink-400 to-purple-400 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/kindergarten-self-portraits.png"
                  alt="Children creating self portraits"
                  width={400}
                  height={200}
                  className="object-cover"
                />
              </div>
            </div>
            <CardHeader className="bg-white">
              <CardTitle className="text-pink-700">Week at a Glance</CardTitle>
              <CardDescription>Daily themes for Week 1</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-pink-800">
                  <Badge className="bg-pink-100 text-pink-800">Monday</Badge>
                  <span>My Name is Special</span>
                </li>
                <li className="flex items-center gap-2 text-pink-800">
                  <Badge className="bg-pink-100 text-pink-800">Tuesday</Badge>
                  <span>What I Look Like</span>
                </li>
                <li className="flex items-center gap-2 text-pink-800">
                  <Badge className="bg-pink-100 text-pink-800">Wednesday</Badge>
                  <span>Things I Like</span>
                </li>
                <li className="flex items-center gap-2 text-pink-800">
                  <Badge className="bg-pink-100 text-pink-800">Thursday</Badge>
                  <span>Things I Can Do</span>
                </li>
                <li className="flex items-center gap-2 text-pink-800">
                  <Badge className="bg-pink-100 text-pink-800">Friday</Badge>
                  <span>I Am Special</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <Alert className="bg-yellow-50 border-yellow-200 mb-8">
        <Lightbulb className="h-4 w-4 text-yellow-600" />
        <AlertTitle className="text-yellow-800">Teacher Tip</AlertTitle>
        <AlertDescription className="text-yellow-700">
          Before beginning this week, gather photos of each child (if possible) and create a display area for "All About
          Me" projects. Consider sending a note home asking families to share something special about their child's name
          or identity.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="border-pink-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="bg-pink-50">
            <CardTitle className="text-pink-700 flex items-center gap-2">
              <BookOpen className="h-5 w-5" /> Learning Objectives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Recognize and write their own name</li>
              <li>Identify and describe physical characteristics</li>
              <li>Express likes and dislikes</li>
              <li>Understand that everyone is unique and special</li>
              <li>Practice counting and number recognition 1-5</li>
              <li>Develop vocabulary related to self-identity</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-pink-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="bg-pink-50">
            <CardTitle className="text-pink-700 flex items-center gap-2">
              <Pencil className="h-5 w-5" /> Key Vocabulary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="bg-white p-2 rounded border border-pink-100">
                <span className="font-medium text-pink-700">Name</span>
              </div>
              <div className="bg-white p-2 rounded border border-pink-100">
                <span className="font-medium text-pink-700">Special</span>
              </div>
              <div className="bg-white p-2 rounded border border-pink-100">
                <span className="font-medium text-pink-700">Unique</span>
              </div>
              <div className="bg-white p-2 rounded border border-pink-100">
                <span className="font-medium text-pink-700">Like/Dislike</span>
              </div>
              <div className="bg-white p-2 rounded border border-pink-100">
                <span className="font-medium text-pink-700">Characteristics</span>
              </div>
              <div className="bg-white p-2 rounded border border-pink-100">
                <span className="font-medium text-pink-700">Identity</span>
              </div>
              <div className="bg-white p-2 rounded border border-pink-100">
                <span className="font-medium text-pink-700">Self</span>
              </div>
              <div className="bg-white p-2 rounded border border-pink-100">
                <span className="font-medium text-pink-700">Similar/Different</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-pink-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="bg-pink-50">
            <CardTitle className="text-pink-700 flex items-center gap-2">
              <Music className="h-5 w-5" /> Materials Needed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Chart paper and markers</li>
              <li>Mirrors</li>
              <li>Art supplies (crayons, paper, scissors, glue)</li>
              <li>Name cards for each child</li>
              <li>Camera for documentation</li>
              <li>Books about self-identity</li>
              <li>Measuring tape/scale</li>
              <li>Paper plates, yarn, buttons (for face crafts)</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="monday" className="mb-8">
        <TabsList className="grid grid-cols-5 mb-4">
          <TabsTrigger value="monday" className="data-[state=active]:bg-pink-100 data-[state=active]:text-pink-800">
            Monday
          </TabsTrigger>
          <TabsTrigger value="tuesday" className="data-[state=active]:bg-pink-100 data-[state=active]:text-pink-800">
            Tuesday
          </TabsTrigger>
          <TabsTrigger value="wednesday" className="data-[state=active]:bg-pink-100 data-[state=active]:text-pink-800">
            Wednesday
          </TabsTrigger>
          <TabsTrigger value="thursday" className="data-[state=active]:bg-pink-100 data-[state=active]:text-pink-800">
            Thursday
          </TabsTrigger>
          <TabsTrigger value="friday" className="data-[state=active]:bg-pink-100 data-[state=active]:text-pink-800">
            Friday
          </TabsTrigger>
        </TabsList>

        <TabsContent value="monday">
          <Card className="border-pink-200 shadow-md">
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-4 rounded-t-lg">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Monday: My Name is Special</h3>
                <Badge className="bg-white text-pink-700">Day 1</Badge>
              </div>
            </div>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-pink-50 p-4 rounded-lg border border-pink-100">
                  <h4 className="font-semibold text-pink-800 mb-2 flex items-center gap-2">
                    <Users className="h-4 w-4" /> Focus Question
                  </h4>
                  <p className="text-pink-700 text-lg italic">What makes my name special?</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                    <BookOpen className="h-4 w-4" /> Suggested Books
                  </h4>
                  <ul className="text-blue-700 space-y-1">
                    <li>"Chrysanthemum" by Kevin Henkes</li>
                    <li>"The Name Jar" by Yangsook Choi</li>
                    <li>"My Name Is Yoon" by Helen Recorvits</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-pink-100 text-pink-800 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <h4 className="font-semibold text-pink-800">Morning Circle</h4>
                  </div>
                  <div className="pl-10">
                    <p>
                      Introduce the theme "All About Me." Discuss how everyone has a special name. Read the book
                      "Chrysanthemum" by Kevin Henkes or a similar book about names.
                    </p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-300 p-3 mt-2">
                      <p className="text-sm text-yellow-800">
                        <strong>Teacher Tip:</strong> As you read, pause to ask children how Chrysanthemum feels at
                        different points in the story. Connect to how children feel about their own names.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-pink-100 text-pink-800 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <h4 className="font-semibold text-pink-800">Literacy Activity</h4>
                  </div>
                  <div className="pl-10">
                    <p>
                      Name recognition and writing practice. Children identify their name cards and practice writing
                      their names using various materials (markers, crayons, finger paint, etc.).
                    </p>
                    <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-2">
                      <div className="bg-gray-50 p-2 rounded text-sm text-gray-700 border border-gray-200">
                        <strong>Material:</strong> Name cards
                      </div>
                      <div className="bg-gray-50 p-2 rounded text-sm text-gray-700 border border-gray-200">
                        <strong>Material:</strong> Markers/crayons
                      </div>
                      <div className="bg-gray-50 p-2 rounded text-sm text-gray-700 border border-gray-200">
                        <strong>Material:</strong> Finger paint
                      </div>
                      <div className="bg-gray-50 p-2 rounded text-sm text-gray-700 border border-gray-200">
                        <strong>Material:</strong> Writing paper
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-pink-100 text-pink-800 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <h4 className="font-semibold text-pink-800">Math Activity</h4>
                  </div>
                  <div className="pl-10">
                    <p>
                      Count the letters in each child's name. Create a graph showing how many letters are in each
                      child's name. Identify which names have the most/least letters.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-300 p-3 mt-2">
                      <p className="text-sm text-blue-800">
                        <strong>Extension:</strong> For advanced students, calculate the average number of letters in
                        the class names, or sort names by first letter and create a bar graph.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-pink-100 text-pink-800 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <h4 className="font-semibold text-pink-800">Art Activity</h4>
                  </div>
                  <div className="pl-10">
                    <p>
                      Name art: Children decorate their names using various art materials. They can use fingerprints,
                      stickers, or drawings that represent things they like.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Image
                        src="/placeholder.svg?height=100&width=150&query=kindergarten name art example"
                        alt="Name art example"
                        width={150}
                        height={100}
                        className="rounded-md border border-gray-200"
                      />
                      <Image
                        src="/placeholder.svg?height=100&width=150&query=kindergarten decorated name"
                        alt="Decorated name example"
                        width={150}
                        height={100}
                        className="rounded-md border border-gray-200"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-pink-100 text-pink-800 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      5
                    </div>
                    <h4 className="font-semibold text-pink-800">Closing Circle</h4>
                  </div>
                  <div className="pl-10">
                    <p>
                      Share name art and discuss what makes each name special. Sing a name song that incorporates each
                      child's name.
                    </p>
                    <div className="bg-purple-50 border-l-4 border-purple-300 p-3 mt-2">
                      <p className="text-sm text-purple-800">
                        <strong>Reflection Questions:</strong>
                      </p>
                      <ul className="text-sm text-purple-800 list-disc pl-5 mt-1">
                        <li>What did you learn about your name today?</li>
                        <li>How does your name make you special?</li>
                        <li>What did you notice about other children's names?</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tuesday">
          <Card className="border-pink-200 shadow-md">
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-4 rounded-t-lg">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Tuesday: What I Look Like</h3>
                <Badge className="bg-white text-pink-700">Day 2</Badge>
              </div>
            </div>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-pink-50 p-4 rounded-lg border border-pink-100">
                  <h4 className="font-semibold text-pink-800 mb-2 flex items-center gap-2">
                    <Users className="h-4 w-4" /> Focus Question
                  </h4>
                  <p className="text-pink-700 text-lg italic">What makes me unique on the outside?</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                    <BookOpen className="h-4 w-4" /> Suggested Books
                  </h4>
                  <ul className="text-blue-700 space-y-1">
                    <li>"The Colors of Us" by Karen Katz</li>
                    <li>"All the Colors We Are" by Katie Kissinger</li>
                    <li>"I'm Like You, You're Like Me" by Cindy Gainer</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-pink-100 text-pink-800 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <h4 className="font-semibold text-pink-800">Morning Circle</h4>
                  </div>
                  <div className="pl-10">
                    <p>
                      Discuss physical characteristics (hair color, eye color, height, etc.). Read "The Colors of Us" by
                      Karen Katz or a similar book about physical characteristics.
                    </p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-300 p-3 mt-2">
                      <p className="text-sm text-yellow-800">
                        <strong>Teacher Tip:</strong> Use inclusive language that celebrates diversity. Emphasize that
                        our differences make us special and that everyone is beautiful in their own way.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-pink-100 text-pink-800 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <h4 className="font-semibold text-pink-800">Science Activity</h4>
                  </div>
                  <div className="pl-10">
                    <p>
                      Using mirrors, children observe and describe their physical features. Measure and record each
                      child's height and discuss how everyone grows.
                    </p>
                    <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-2">
                      <div className="bg-gray-50 p-2 rounded text-sm text-gray-700 border border-gray-200">
                        <strong>Material:</strong> Hand mirrors
                      </div>
                      <div className="bg-gray-50 p-2 rounded text-sm text-gray-700 border border-gray-200">
                        <strong>Material:</strong> Measuring tape
                      </div>
                      <div className="bg-gray-50 p-2 rounded text-sm text-gray-700 border border-gray-200">
                        <strong>Material:</strong> Chart paper
                      </div>
                      <div className="bg-gray-50 p-2 rounded text-sm text-gray-700 border border-gray-200">
                        <strong>Material:</strong> Growth chart
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-pink-100 text-pink-800 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <h4 className="font-semibold text-pink-800">Math Activity</h4>
                  </div>
                  <div className="pl-10">
                    <p>
                      Create a class graph of eye colors or hair colors. Count how many children have each color and
                      compare which has the most/least.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Image
                        src="/placeholder.svg?height=100&width=150&query=kindergarten eye color graph"
                        alt="Eye color graph example"
                        width={150}
                        height={100}
                        className="rounded-md border border-gray-200"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-pink-100 text-pink-800 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <h4 className="font-semibold text-pink-800">Art Activity</h4>
                  </div>
                  <div className="pl-10">
                    <p>
                      Self-portrait: Children create self-portraits using paper plates, yarn, buttons, and other
                      materials. Encourage them to include details that make them unique.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-300 p-3 mt-2">
                      <p className="text-sm text-blue-800">
                        <strong>Extension:</strong> Provide a variety of skin-colored materials (paint, paper, crayons)
                        in diverse shades so children can accurately represent themselves.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-pink-100 text-pink-800 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      5
                    </div>
                    <h4 className="font-semibold text-pink-800">Closing Circle</h4>
                  </div>
                  <div className="pl-10">
                    <p>
                      Share self-portraits and discuss how everyone looks different and that's what makes us special.
                    </p>
                    <div className="bg-purple-50 border-l-4 border-purple-300 p-3 mt-2">
                      <p className="text-sm text-purple-800">
                        <strong>Reflection Questions:</strong>
                      </p>
                      <ul className="text-sm text-purple-800 list-disc pl-5 mt-1">
                        <li>What did you notice about yourself in the mirror?</li>
                        <li>How are you similar to or different from your friends?</li>
                        <li>What is your favorite thing about how you look?</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="wednesday">
          <Card className="border-pink-200 shadow-md">
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-4 rounded-t-lg">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Wednesday: Things I Like</h3>
                <Badge className="bg-white text-pink-700">Day 3</Badge>
              </div>
            </div>
            <CardContent>
              <p className="italic text-gray-600 my-4">
                Content for Wednesday's activities would appear here, following the same enhanced format as Monday and
                Tuesday.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="thursday">
          <Card className="border-pink-200 shadow-md">
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-4 rounded-t-lg">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Thursday: Things I Can Do</h3>
                <Badge className="bg-white text-pink-700">Day 4</Badge>
              </div>
            </div>
            <CardContent>
              <p className="italic text-gray-600 my-4">
                Content for Thursday's activities would appear here, following the same enhanced format as previous
                days.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="friday">
          <Card className="border-pink-200 shadow-md">
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-4 rounded-t-lg">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Friday: I Am Special</h3>
                <Badge className="bg-white text-pink-700">Day 5</Badge>
              </div>
            </div>
            <CardContent>
              <p className="italic text-gray-600 my-4">
                Content for Friday's activities would appear here, following the same enhanced format as previous days.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="border-pink-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="bg-pink-50">
            <CardTitle className="text-pink-700">Assessment Strategies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 mt-2">
              <div className="flex items-start gap-2">
                <div className="bg-pink-100 text-pink-800 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="font-medium text-pink-800">Observation</p>
                  <p className="text-gray-700">
                    Observe children's participation in activities and document their engagement level.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-pink-100 text-pink-800 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="font-medium text-pink-800">Work Samples</p>
                  <p className="text-gray-700">
                    Collect name writing samples, self-portraits, and "I can" booklets for portfolios.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-pink-100 text-pink-800 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="font-medium text-pink-800">Documentation</p>
                  <p className="text-gray-700">
                    Record children's responses during discussions about self-identity concepts.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-pink-100 text-pink-800 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <p className="font-medium text-pink-800">Photography</p>
                  <p className="text-gray-700">
                    Take photos of children engaged in activities to document their learning process.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-pink-100 text-pink-800 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  5
                </div>
                <div>
                  <p className="font-medium text-pink-800">Anecdotal Notes</p>
                  <p className="text-gray-700">
                    Keep notes on children's understanding of self-identity concepts and vocabulary use.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Button variant="outline" className="border-pink-300 text-pink-700 hover:bg-pink-50 w-full">
                <Download className="mr-2 h-4 w-4" /> Assessment Checklist PDF
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-pink-200 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="bg-pink-50">
            <CardTitle className="text-pink-700">Home Connection</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-white p-4 rounded-lg border border-pink-100 mb-4">
              <h4 className="font-semibold text-pink-800 mb-2">Family Activity Ideas</h4>
              <p className="text-gray-700 mb-3">
                Send home a family activity sheet that encourages parents/caregivers to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Share the story of their child's name</li>
                <li>Look at family photos together and discuss physical characteristics</li>
                <li>Create a list or drawing of family members' likes and dislikes</li>
                <li>Celebrate their child's special qualities and abilities</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
              <h4 className="font-semibold text-yellow-800 mb-2">Communication Tips</h4>
              <ul className="list-disc pl-5 space-y-1 text-yellow-700">
                <li>Send home a brief summary of each day's activities</li>
                <li>Include vocabulary words families can reinforce at home</li>
                <li>Suggest simple extension activities that require minimal materials</li>
                <li>Invite families to share photos or stories about their child</li>
              </ul>
            </div>
            <div className="mt-4">
              <Button variant="outline" className="border-pink-300 text-pink-700 hover:bg-pink-50 w-full">
                <Download className="mr-2 h-4 w-4" /> Family Letter Template
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" asChild className="border-purple-300 text-purple-700 hover:bg-purple-50">
          <Link href="/curriculum/kindergarten/belonging">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Unit Overview
          </Link>
        </Button>
        <Button asChild className="bg-orange-600 hover:bg-orange-700">
          <Link href="/curriculum/kindergarten/belonging/week-2" className="flex items-center">
            Next Week: My Family <Users className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
