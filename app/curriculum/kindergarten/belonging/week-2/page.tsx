import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Breadcrumb } from "@/components/breadcrumb"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  ChevronLeft,
  Download,
  Calendar,
  Users,
  BookOpen,
  Lightbulb,
  Clock,
  Star,
  CheckCircle2,
  Home,
} from "lucide-react"

export default function BelongingUnitWeek2() {
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
            <Badge className="bg-orange-500 hover:bg-orange-600">Week 2</Badge>
            <h1 className="text-3xl font-bold">My Family</h1>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg mb-6 border border-orange-200">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-2 rounded-full">
                <Home className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Weekly Focus</h2>
                <p className="text-gray-700">
                  Children learn about different types of families, family members, roles within families, and family
                  traditions and celebrations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 relative h-[200px] rounded-lg overflow-hidden">
          <Image
            src="/kindergarten-family-drawings.png"
            alt="Children's family drawings"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="border-l-4 border-l-orange-500">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-orange-500" />
              <CardTitle>Learning Objectives</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {[
                "Identify family members and their relationships",
                "Recognize that families come in different sizes and structures",
                "Describe family roles and responsibilities",
                "Share family traditions and celebrations",
                "Practice counting family members",
                "Develop vocabulary related to families",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardHeader>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-orange-500" />
              <CardTitle>Key Vocabulary</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {[
                "Family",
                "Parents/Guardians",
                "Siblings",
                "Grandparents",
                "Relatives",
                "Home",
                "Tradition",
                "Celebration",
              ].map((word, i) => (
                <Badge key={i} variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                  {word}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-orange-500" />
              <CardTitle>Materials Needed</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {[
                "Chart paper and markers",
                "Family photos (requested from home)",
                "Art supplies (crayons, paper, scissors, glue)",
                "Books about families",
                "Dramatic play props (dolls, play kitchen, etc.)",
                "Materials for family trees",
                "Puppet families",
                "Blocks and figurines",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" className="mt-4 w-full border-orange-200 text-orange-700 hover:bg-orange-50">
              <Download className="mr-2 h-4 w-4" /> Download Materials List
            </Button>
          </CardContent>
        </Card>
      </div>

      <Alert className="bg-blue-50 border-blue-200 mb-8">
        <Lightbulb className="h-5 w-5 text-blue-500" />
        <AlertTitle className="text-blue-700">Teacher Tip</AlertTitle>
        <AlertDescription className="text-blue-600">
          Before beginning this week, send a note home asking families to share a family photo and a brief description
          of a family tradition. Create a display area in your classroom where these can be showcased throughout the
          week.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="monday" className="mb-8">
        <TabsList className="grid grid-cols-5 mb-4">
          <TabsTrigger value="monday" className="data-[state=active]:bg-orange-100 data-[state=active]:text-orange-700">
            Monday
          </TabsTrigger>
          <TabsTrigger
            value="tuesday"
            className="data-[state=active]:bg-orange-100 data-[state=active]:text-orange-700"
          >
            Tuesday
          </TabsTrigger>
          <TabsTrigger
            value="wednesday"
            className="data-[state=active]:bg-orange-100 data-[state=active]:text-orange-700"
          >
            Wednesday
          </TabsTrigger>
          <TabsTrigger
            value="thursday"
            className="data-[state=active]:bg-orange-100 data-[state=active]:text-orange-700"
          >
            Thursday
          </TabsTrigger>
          <TabsTrigger value="friday" className="data-[state=active]:bg-orange-100 data-[state=active]:text-orange-700">
            Friday
          </TabsTrigger>
        </TabsList>

        <TabsContent value="monday">
          <Card>
            <CardHeader className="bg-gradient-to-r from-orange-50 to-transparent border-b border-orange-100">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-orange-500" />
                <CardTitle>Monday: Who Is In My Family?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex gap-4 items-start p-4 rounded-lg bg-orange-50 border border-orange-100">
                  <div className="bg-orange-100 text-orange-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-800">Morning Circle</h3>
                    <p className="mt-1">
                      Introduce the theme "My Family." Read "The Family Book" by Todd Parr or a similar book about
                      different types of families.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-orange-50 border border-orange-100">
                  <div className="bg-orange-100 text-orange-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-800">Literacy Activity</h3>
                    <p className="mt-1">
                      Children share their family photos and describe who is in their family. Create a language
                      experience chart with children's descriptions.
                    </p>
                    <div className="mt-2 p-3 bg-white rounded border border-orange-200">
                      <p className="text-sm font-medium text-orange-700">Differentiation:</p>
                      <p className="text-sm">
                        For emerging writers, scribe their words. For advanced students, encourage them to write simple
                        words or sentences about their family.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-orange-50 border border-orange-100">
                  <div className="bg-orange-100 text-orange-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-800">Math Activity</h3>
                    <p className="mt-1">
                      Count family members. Create a graph showing how many people are in each child's family. Compare
                      and discuss.
                    </p>
                    <Button variant="link" className="p-0 h-auto mt-2 text-orange-600">
                      <Download className="mr-1 h-4 w-4" /> Download Graph Template
                    </Button>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-orange-50 border border-orange-100">
                  <div className="bg-orange-100 text-orange-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-800">Art Activity</h3>
                    <p className="mt-1">
                      Family portraits: Children draw pictures of their families and dictate or write sentences about
                      them.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-orange-50 border border-orange-100">
                  <div className="bg-orange-100 text-orange-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-800">Closing Circle</h3>
                    <p className="mt-1">
                      Share family portraits and discuss how families can be different but all families love and care
                      for each other.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tuesday">
          <Card>
            <CardHeader className="bg-gradient-to-r from-orange-50 to-transparent border-b border-orange-100">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-orange-500" />
                <CardTitle>Tuesday: Family Roles and Responsibilities</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex gap-4 items-start p-4 rounded-lg bg-orange-50 border border-orange-100">
                  <div className="bg-orange-100 text-orange-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-800">Morning Circle</h3>
                    <p className="mt-1">
                      Discuss different roles and responsibilities in families. Read "Families" by Shelley Rotner and
                      Sheila M. Kelly or a similar book.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-orange-50 border border-orange-100">
                  <div className="bg-orange-100 text-orange-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-800">Literacy Activity</h3>
                    <p className="mt-1">
                      Create a class book titled "In My Family, I Help By..." where each child contributes a page about
                      their responsibilities at home.
                    </p>
                    <Button variant="link" className="p-0 h-auto mt-2 text-orange-600">
                      <Download className="mr-1 h-4 w-4" /> Download Book Template
                    </Button>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-orange-50 border border-orange-100">
                  <div className="bg-orange-100 text-orange-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-800">Dramatic Play</h3>
                    <p className="mt-1">
                      Set up a home center where children can role-play different family members and their
                      responsibilities (cooking, cleaning, caring for babies, etc.).
                    </p>
                    <div className="mt-2 p-3 bg-white rounded border border-orange-200">
                      <p className="text-sm font-medium text-orange-700">Setup Tip:</p>
                      <p className="text-sm">
                        Include diverse props representing different family structures and cultural backgrounds. Label
                        areas with both words and pictures.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-orange-50 border border-orange-100">
                  <div className="bg-orange-100 text-orange-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-800">Social Studies Activity</h3>
                    <p className="mt-1">
                      Create a "Jobs We Do at Home" chart where children identify and illustrate tasks they do to help
                      their families.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-orange-50 border border-orange-100">
                  <div className="bg-orange-100 text-orange-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-800">Closing Circle</h3>
                    <p className="mt-1">
                      Discuss how everyone in a family has important roles and responsibilities, and how helping each
                      other makes families stronger.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="wednesday">
          <Card>
            <CardHeader className="bg-gradient-to-r from-orange-50 to-transparent border-b border-orange-100">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-orange-500" />
                <CardTitle>Wednesday: Family Traditions</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex gap-4 items-start p-4 rounded-lg bg-orange-50 border border-orange-100">
                  <div className="bg-orange-100 text-orange-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-800">Morning Circle</h3>
                    <p className="mt-1">
                      Discuss family traditions and special activities. Read "Froggy's Day with Dad" by Jonathan London
                      or a similar book about family activities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-orange-50 border border-orange-100">
                  <div className="bg-orange-100 text-orange-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-800">Literacy Activity</h3>
                    <p className="mt-1">
                      Children share a special family tradition or activity and create a drawing or writing about it.
                      Compile into a class book.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-orange-50 border border-orange-100">
                  <div className="bg-orange-100 text-orange-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-800">Cooking Activity</h3>
                    <p className="mt-1">
                      Make a simple recipe that represents a family tradition shared by one of the children (if
                      appropriate) or a common family food like cookies.
                    </p>
                    <div className="mt-2 p-3 bg-white rounded border border-orange-200">
                      <p className="text-sm font-medium text-orange-700">Safety Note:</p>
                      <p className="text-sm">
                        Check for food allergies before planning this activity. Consider a no-bake recipe that children
                        can help prepare safely.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-orange-50 border border-orange-100">
                  <div className="bg-orange-100 text-orange-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-800">Music and Movement</h3>
                    <p className="mt-1">
                      Learn songs or dances that represent different family traditions or cultural celebrations.
                    </p>
                    <Button variant="link" className="p-0 h-auto mt-2 text-orange-600">
                      <Download className="mr-1 h-4 w-4" /> Download Song Lyrics
                    </Button>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-orange-50 border border-orange-100">
                  <div className="bg-orange-100 text-orange-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-800">Closing Circle</h3>
                    <p className="mt-1">
                      Share and celebrate the diversity of family traditions in the class. Discuss how traditions help
                      families feel connected.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="thursday">
          <Card>
            <CardHeader className="bg-gradient-to-r from-orange-50 to-transparent border-b border-orange-100">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-orange-500" />
                <CardTitle>Thursday: Family Stories</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex gap-4 items-start p-4 rounded-lg bg-orange-50 border border-orange-100">
                  <div className="bg-orange-100 text-orange-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-800">Morning Circle</h3>
                    <p className="mt-1">
                      Discuss how families share stories and memories. Read "Tell Me a Story, Mama" by Angela Johnson or
                      a similar book about family stories.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-orange-50 border border-orange-100">
                  <div className="bg-orange-100 text-orange-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-800">Literacy Activity</h3>
                    <p className="mt-1">
                      Children share a family story that was sent from home (parents were asked to share a simple family
                      story with their child). Create a story map for one or two shared stories.
                    </p>
                    <Button variant="link" className="p-0 h-auto mt-2 text-orange-600">
                      <Download className="mr-1 h-4 w-4" /> Download Story Map Template
                    </Button>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-orange-50 border border-orange-100">
                  <div className="bg-orange-100 text-orange-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-800">Art Activity</h3>
                    <p className="mt-1">
                      Children create a "memory box" using small boxes and art materials to represent a special family
                      memory or story.
                    </p>
                    <div className="mt-2 p-3 bg-white rounded border border-orange-200">
                      <p className="text-sm font-medium text-orange-700">Materials Needed:</p>
                      <p className="text-sm">
                        Small boxes (like jewelry boxes), construction paper, markers, stickers, photos, glue, scissors,
                        and other decorative items.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-orange-50 border border-orange-100">
                  <div className="bg-orange-100 text-orange-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-800">Dramatic Play</h3>
                    <p className="mt-1">
                      Set up a storytelling corner where children can use puppets or props to retell family stories.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-orange-50 border border-orange-100">
                  <div className="bg-orange-100 text-orange-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-800">Closing Circle</h3>
                    <p className="mt-1">
                      Discuss how stories help us remember important events and connect with our families. Share memory
                      boxes.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="friday">
          <Card>
            <CardHeader className="bg-gradient-to-r from-orange-50 to-transparent border-b border-orange-100">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-orange-500" />
                <CardTitle>Friday: Families Help Each Other</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex gap-4 items-start p-4 rounded-lg bg-orange-50 border border-orange-100">
                  <div className="bg-orange-100 text-orange-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-800">Morning Circle</h3>
                    <p className="mt-1">
                      Discuss how family members help and care for each other. Read "The Kissing Hand" by Audrey Penn or
                      a similar book about family support.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-orange-50 border border-orange-100">
                  <div className="bg-orange-100 text-orange-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-800">Literacy Activity</h3>
                    <p className="mt-1">
                      Create a class book titled "Families Help Each Other By..." where each child contributes a page
                      about how their family members help each other.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-orange-50 border border-orange-100">
                  <div className="bg-orange-100 text-orange-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-800">Collaborative Activity</h3>
                    <p className="mt-1">
                      Children work in small groups to build "family homes" using blocks, and then create scenarios of
                      family members helping each other.
                    </p>
                    <div className="mt-2 p-3 bg-white rounded border border-orange-200">
                      <p className="text-sm font-medium text-orange-700">Extension Idea:</p>
                      <p className="text-sm">
                        Take photos of children's block constructions and have them dictate stories about the families
                        who live there. Create a classroom display.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-orange-50 border border-orange-100">
                  <div className="bg-orange-100 text-orange-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-800">Art Activity</h3>
                    <p className="mt-1">
                      Create "helping hands" artwork: Children trace their hands and decorate them, then write or
                      dictate ways they help their families.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-orange-50 border border-orange-100">
                  <div className="bg-orange-100 text-orange-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-orange-800">Closing Circle</h3>
                    <p className="mt-1">
                      Review the week's learning about families. Discuss how families may be different, but all families
                      help and care for each other.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="border-l-4 border-l-orange-500">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-orange-500" />
              <CardTitle>Assessment Strategies</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {[
                "Observation of children's participation in family-themed activities",
                "Collection of work samples (family portraits, stories, 'helping hands' art)",
                "Documentation of children's descriptions of their families",
                "Photos of children engaged in dramatic play representing family roles",
                "Anecdotal notes on children's understanding of family concepts",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <Button variant="outline" size="sm" className="border-orange-200 text-orange-700 hover:bg-orange-50">
                <Download className="mr-2 h-4 w-4" /> Assessment Checklist
              </Button>
              <Button variant="outline" size="sm" className="border-orange-200 text-orange-700 hover:bg-orange-50">
                <Download className="mr-2 h-4 w-4" /> Observation Form
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Home className="h-5 w-5 text-orange-500" />
              <CardTitle>Home Connection</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Send home a family activity sheet that encourages parents/caregivers to:</p>
            <ul className="space-y-2">
              {[
                "Share family photos and stories with their child",
                "Involve their child in a family tradition or routine",
                "Create a simple family tree together",
                "Discuss family roles and responsibilities",
                "Talk about ways family members help and care for each other",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600">
              <Download className="mr-2 h-4 w-4" /> Download Family Activity Sheet
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/curriculum/kindergarten/belonging/week-1">
            <ChevronLeft className="mr-2 h-4 w-4" /> Previous Week: All About Me
          </Link>
        </Button>
        <Button asChild className="bg-orange-500 hover:bg-orange-600">
          <Link href="/curriculum/kindergarten/belonging/week-3">
            Next Week: My School <ChevronLeft className="ml-2 h-4 w-4 rotate-180" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
