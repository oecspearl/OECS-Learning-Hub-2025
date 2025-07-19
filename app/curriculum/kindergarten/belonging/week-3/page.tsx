import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Breadcrumb } from "@/components/breadcrumb"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ChevronLeft, Download, Calendar, Users, BookOpen, Lightbulb, Star, CheckCircle2, School } from "lucide-react"

export default function BelongingUnitWeek3() {
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
            <Badge className="bg-green-500 hover:bg-green-600">Week 3</Badge>
            <h1 className="text-3xl font-bold">My School</h1>
          </div>
          <div className="bg-green-50 p-6 rounded-lg mb-6 border border-green-200">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-2 rounded-full">
                <School className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Weekly Focus</h2>
                <p className="text-gray-700">
                  Children explore their school environment, the people who work there, classroom rules and routines,
                  and how to be a good friend and classmate.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 relative h-[200px] rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?key=6lsbc"
            alt="Kindergarten classroom"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-green-500" />
              <CardTitle>Learning Objectives</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {[
                "Identify important places and people in the school",
                "Understand and follow classroom rules and routines",
                "Develop friendship skills and conflict resolution strategies",
                "Recognize the roles of different school staff members",
                "Practice cooperation and sharing in group activities",
                "Develop vocabulary related to school and friendship",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-green-500" />
              <CardTitle>Key Vocabulary</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {[
                "School",
                "Classroom",
                "Teacher",
                "Principal",
                "Rules",
                "Routine",
                "Friend",
                "Share",
                "Cooperate",
                "Respect",
              ].map((word, i) => (
                <Badge key={i} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  {word}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-green-500" />
              <CardTitle>Materials Needed</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {[
                "Books about school and friendship",
                "Chart paper and markers",
                "Art supplies (crayons, paper, scissors, glue)",
                "School map or blueprint",
                "Photos of school staff",
                "Puppets for role-playing",
                "Materials for classroom scavenger hunt",
                "Friendship bracelet materials",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" className="mt-4 w-full border-green-200 text-green-700 hover:bg-green-50">
              <Download className="mr-2 h-4 w-4" /> Download Materials List
            </Button>
          </CardContent>
        </Card>
      </div>

      <Alert className="bg-blue-50 border-blue-200 mb-8">
        <Lightbulb className="h-5 w-5 text-blue-500" />
        <AlertTitle className="text-blue-700">Teacher Tip</AlertTitle>
        <AlertDescription className="text-blue-600">
          Before the school tour on Monday, contact key staff members to let them know you'll be visiting. Ask if they
          can briefly explain their role to the children. Take photos during the tour to create a school staff display
          in your classroom.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="monday" className="mb-8">
        <TabsList className="grid grid-cols-5 mb-4">
          <TabsTrigger value="monday" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-700">
            Monday
          </TabsTrigger>
          <TabsTrigger value="tuesday" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-700">
            Tuesday
          </TabsTrigger>
          <TabsTrigger
            value="wednesday"
            className="data-[state=active]:bg-green-100 data-[state=active]:text-green-700"
          >
            Wednesday
          </TabsTrigger>
          <TabsTrigger value="thursday" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-700">
            Thursday
          </TabsTrigger>
          <TabsTrigger value="friday" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-700">
            Friday
          </TabsTrigger>
        </TabsList>

        <TabsContent value="monday">
          <Card>
            <CardHeader className="bg-gradient-to-r from-green-50 to-transparent border-b border-green-100">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-green-500" />
                <CardTitle>Monday: Our School Community</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex gap-4 items-start p-4 rounded-lg bg-green-50 border border-green-100">
                  <div className="bg-green-100 text-green-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">Morning Circle</h3>
                    <p className="mt-1">
                      Introduce the theme "My School." Read "The Kissing Hand" by Audrey Penn or "Miss Bindergarten Gets
                      Ready for Kindergarten" by Joseph Slate. Discuss what makes school a special place.
                    </p>
                    <div className="mt-2 p-3 bg-white rounded border border-green-200">
                      <p className="text-sm font-medium text-green-700">Book Options:</p>
                      <ul className="text-sm list-disc pl-5 space-y-1">
                        <li>"The Kissing Hand" by Audrey Penn</li>
                        <li>"Miss Bindergarten Gets Ready for Kindergarten" by Joseph Slate</li>
                        <li>"First Day Jitters" by Julie Danneberg</li>
                        <li>"The Pigeon HAS to Go to School!" by Mo Willems</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-green-50 border border-green-100">
                  <div className="bg-green-100 text-green-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">Literacy Activity</h3>
                    <p className="mt-1">
                      Create a language experience chart about "What We Like About Our School." Children contribute
                      ideas and the teacher writes them down.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-green-50 border border-green-100">
                  <div className="bg-green-100 text-green-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">School Tour</h3>
                    <p className="mt-1">
                      Take a walking tour of the school, visiting important places (office, library, cafeteria, gym,
                      playground). Create a simple map afterward.
                    </p>
                    <Button variant="link" className="p-0 h-auto mt-2 text-green-600">
                      <Download className="mr-1 h-4 w-4" /> Download School Tour Checklist
                    </Button>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-green-50 border border-green-100">
                  <div className="bg-green-100 text-green-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">Art Activity</h3>
                    <p className="mt-1">
                      Children draw pictures of their favorite place in the school and dictate or write why they like
                      it.
                    </p>
                    <div className="mt-2 p-3 bg-white rounded border border-green-200">
                      <p className="text-sm font-medium text-green-700">Extension Idea:</p>
                      <p className="text-sm">
                        Create a classroom book titled "Our Favorite Places at School" with children's drawings and
                        dictations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-green-50 border border-green-100">
                  <div className="bg-green-100 text-green-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">Closing Circle</h3>
                    <p className="mt-1">
                      Share artwork and discuss what children learned about their school. Create a list of questions
                      about the school to investigate during the week.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tuesday">
          <Card>
            <CardHeader className="bg-gradient-to-r from-green-50 to-transparent border-b border-green-100">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-green-500" />
                <CardTitle>Tuesday: People Who Help Us at School</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex gap-4 items-start p-4 rounded-lg bg-green-50 border border-green-100">
                  <div className="bg-green-100 text-green-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">Morning Circle</h3>
                    <p className="mt-1">
                      Discuss the different people who work at school. Read "Career Day" by Anne Rockwell or a similar
                      book about school staff.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-green-50 border border-green-100">
                  <div className="bg-green-100 text-green-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">Literacy Activity</h3>
                    <p className="mt-1">
                      Create a class book titled "People Who Help Us at School" where each child contributes a page
                      about a different school staff member.
                    </p>
                    <Button variant="link" className="p-0 h-auto mt-2 text-green-600">
                      <Download className="mr-1 h-4 w-4" /> Download Book Template
                    </Button>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-green-50 border border-green-100">
                  <div className="bg-green-100 text-green-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">Special Visitor</h3>
                    <p className="mt-1">
                      Invite a school staff member (principal, librarian, custodian, etc.) to visit the class and talk
                      about their job. Children prepare questions in advance.
                    </p>
                    <div className="mt-2 p-3 bg-white rounded border border-green-200">
                      <p className="text-sm font-medium text-green-700">Preparation:</p>
                      <p className="text-sm">
                        Before the visit, help children brainstorm 3-5 questions to ask the visitor. Write these on
                        chart paper so children can refer to them.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-green-50 border border-green-100">
                  <div className="bg-green-100 text-green-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">Dramatic Play</h3>
                    <p className="mt-1">
                      Set up a "School Office" dramatic play area where children can role-play different school jobs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-green-50 border border-green-100">
                  <div className="bg-green-100 text-green-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">Closing Circle</h3>
                    <p className="mt-1">
                      Discuss what children learned about school helpers. Create thank-you notes for school staff
                      members.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="wednesday">
          <Card>
            <CardHeader className="bg-gradient-to-r from-green-50 to-transparent border-b border-green-100">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-green-500" />
                <CardTitle>Wednesday: Classroom Rules and Routines</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex gap-4 items-start p-4 rounded-lg bg-green-50 border border-green-100">
                  <div className="bg-green-100 text-green-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">Morning Circle</h3>
                    <p className="mt-1">
                      Discuss the importance of rules and routines. Read "David Goes to School" by David Shannon or a
                      similar book about classroom behavior.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-green-50 border border-green-100">
                  <div className="bg-green-100 text-green-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">Collaborative Activity</h3>
                    <p className="mt-1">
                      Create a classroom rules chart with children's input. Focus on positive statements (what to do
                      rather than what not to do). Children illustrate the rules.
                    </p>
                    <div className="mt-2 p-3 bg-white rounded border border-green-200">
                      <p className="text-sm font-medium text-green-700">Positive Rule Examples:</p>
                      <ul className="text-sm list-disc pl-5 space-y-1">
                        <li>Use walking feet inside</li>
                        <li>Use kind words</li>
                        <li>Keep hands to yourself</li>
                        <li>Listen when others are speaking</li>
                        <li>Take care of our classroom</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-green-50 border border-green-100">
                  <div className="bg-green-100 text-green-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">Music and Movement</h3>
                    <p className="mt-1">
                      Learn songs that help with classroom transitions and routines (clean-up song, line-up song, etc.).
                    </p>
                    <Button variant="link" className="p-0 h-auto mt-2 text-green-600">
                      <Download className="mr-1 h-4 w-4" /> Download Song Lyrics
                    </Button>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-green-50 border border-green-100">
                  <div className="bg-green-100 text-green-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">Dramatic Play</h3>
                    <p className="mt-1">
                      Use puppets to role-play scenarios involving classroom rules and routines. Children practice
                      problem-solving when rules aren't followed.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-green-50 border border-green-100">
                  <div className="bg-green-100 text-green-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">Closing Circle</h3>
                    <p className="mt-1">
                      Review the classroom rules chart. Discuss how rules help everyone learn and stay safe. Introduce
                      the concept of classroom jobs.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="thursday">
          <Card>
            <CardHeader className="bg-gradient-to-r from-green-50 to-transparent border-b border-green-100">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-green-500" />
                <CardTitle>Thursday: Making Friends at School</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex gap-4 items-start p-4 rounded-lg bg-green-50 border border-green-100">
                  <div className="bg-green-100 text-green-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">Morning Circle</h3>
                    <p className="mt-1">
                      Discuss friendship and what makes a good friend. Read "The Recess Queen" by Alexis O'Neill or
                      "Strictly No Elephants" by Lisa Mantchev.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-green-50 border border-green-100">
                  <div className="bg-green-100 text-green-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">Literacy Activity</h3>
                    <p className="mt-1">
                      Create a "Friendship Recipe" chart, listing ingredients for being a good friend (kindness,
                      sharing, listening, etc.). Children dictate ideas.
                    </p>
                    <div className="mt-2 p-3 bg-white rounded border border-green-200">
                      <p className="text-sm font-medium text-green-700">Visual Support:</p>
                      <p className="text-sm">
                        Draw a large mixing bowl on chart paper. Write each "ingredient" on a paper cutout (e.g., heart
                        for kindness, ear for listening) and add them to the bowl as children suggest them.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-green-50 border border-green-100">
                  <div className="bg-green-100 text-green-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">Art Activity</h3>
                    <p className="mt-1">
                      Make friendship bracelets or cards to exchange with classmates. Discuss how giving gifts can show
                      friendship.
                    </p>
                    <Button variant="link" className="p-0 h-auto mt-2 text-green-600">
                      <Download className="mr-1 h-4 w-4" /> Download Bracelet Instructions
                    </Button>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-green-50 border border-green-100">
                  <div className="bg-green-100 text-green-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">Cooperative Games</h3>
                    <p className="mt-1">
                      Play games that require cooperation and teamwork, such as parachute games, partner activities, or
                      group challenges.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-green-50 border border-green-100">
                  <div className="bg-green-100 text-green-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">Closing Circle</h3>
                    <p className="mt-1">
                      Discuss strategies for making new friends and resolving conflicts. Role-play scenarios like asking
                      to join a game or sharing toys.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="friday">
          <Card>
            <CardHeader className="bg-gradient-to-r from-green-50 to-transparent border-b border-green-100">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-green-500" />
                <CardTitle>Friday: Review and Celebrate</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex gap-4 items-start p-4 rounded-lg bg-green-50 border border-green-100">
                  <div className="bg-green-100 text-green-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">Morning Circle</h3>
                    <p className="mt-1">
                      Review the week's activities and what children have learned about their school, classroom rules,
                      and making friends.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-green-50 border border-green-100">
                  <div className="bg-green-100 text-green-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">Show and Tell</h3>
                    <p className="mt-1">
                      Have children share their friendship bracelets or cards they made during the week. Discuss how
                      these gifts show friendship.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-green-50 border border-green-100">
                  <div className="bg-green-100 text-green-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">Classroom Jobs</h3>
                    <p className="mt-1">
                      Assign classroom jobs based on the rules children helped create. Discuss how these jobs help the
                      classroom run smoothly.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-green-50 border border-green-100">
                  <div className="bg-green-100 text-green-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">Celebration</h3>
                    <p className="mt-1">
                      Celebrate the end of the week with a special treat or activity that reinforces the week's theme.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 rounded-lg bg-green-50 border border-green-100">
                  <div className="bg-green-100 text-green-700 p-2 rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">Closing Circle</h3>
                    <p className="mt-1">
                      Reflect on the week's activities. Discuss how children can continue to apply what they've learned
                      about school and friendship in their daily lives.
                    </p>
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
