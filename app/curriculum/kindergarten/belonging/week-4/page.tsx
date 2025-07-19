import { Breadcrumb } from "@/components/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, Calendar, Lightbulb, Download, CheckCircle2, Printer } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TeacherTip } from "@/components/teacher-tip"
import { ActivityCard } from "@/components/activity-card"
import { WeeklyOverview } from "@/components/weekly-overview"
import { DailyPlan } from "@/components/daily-plan"
import { ChevronLeft } from "lucide-react" // Import ChevronLeft

export default function BelongingUnitWeek4() {
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
          <h1 className="text-3xl font-bold mb-4 text-green-700">Week 4: My Community</h1>
          <div className="bg-green-50 p-4 rounded-lg mb-6">
            <h2 className="text-xl font-semibold mb-2 text-green-700">Weekly Focus</h2>
            <p>
              Children learn about their local community, community helpers, places in the community, and how people in
              a community work together.
            </p>
          </div>
        </div>
        <div className="md:w-1/3">
          <Card className="border-green-200 shadow-md">
            <CardHeader className="bg-green-50 border-b border-green-100">
              <CardTitle className="flex items-center text-green-700">
                <Clock className="mr-2 h-5 w-5" /> Week at a Glance
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Focus on community spaces and people</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Identify important places in the community</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Recognize community helpers and their roles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Understand how community members help each other</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2">
          <Image
            src="/kindergarten-community-helpers.png"
            alt="Kindergarten students learning about community helpers"
            width={800}
            height={500}
            className="rounded-lg shadow-md object-cover h-[300px]"
          />
        </div>
        <div>
          <WeeklyOverview
            theme="My Community"
            focusAreas={["Community environment", "Community helpers", "Places in the community", "Working together"]}
            vocabulary={[
              "community",
              "neighborhood",
              "helper",
              "service",
              "map",
              "location",
              "job",
              "cooperation",
              "citizen",
              "volunteer",
            ]}
            color="green"
          />
        </div>
      </div>

      <TeacherTip
        title="Community Connections"
        tip="Invite community helpers to visit your classroom or arrange virtual visits. Prepare students with questions beforehand and have them create thank you cards afterward."
        color="green"
      />

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-700 flex items-center">
          <Calendar className="mr-2 h-6 w-6" /> Daily Plans
        </h2>
        <Tabs defaultValue="monday" className="w-full">
          <TabsList className="grid grid-cols-5 mb-4">
            <TabsTrigger value="monday">Monday</TabsTrigger>
            <TabsTrigger value="tuesday">Tuesday</TabsTrigger>
            <TabsTrigger value="wednesday">Wednesday</TabsTrigger>
            <TabsTrigger value="thursday">Thursday</TabsTrigger>
            <TabsTrigger value="friday">Friday</TabsTrigger>
          </TabsList>

          <TabsContent value="monday">
            <DailyPlan
              day="Monday"
              theme="What Is a Community?"
              morningActivity="Morning Circle: Introduce the concept of community"
              literacyFocus="Read 'The Little House' by Virginia Lee Burton"
              mathFocus="Counting objects in our classroom community"
              afternoonActivity="Begin creating a classroom community mural"
              materials={[
                "The Little House book",
                "Large paper for mural",
                "Art supplies",
                "Photos of community places",
              ]}
              assessmentNotes="Observe students' prior knowledge about communities and their engagement with the concept."
              color="green"
            />
          </TabsContent>

          <TabsContent value="tuesday">
            <DailyPlan
              day="Tuesday"
              theme="Community Places"
              morningActivity="Morning Circle: Focus on important places in the community"
              literacyFocus="Read 'Mapping Penny's World' by Loreen Leedy"
              mathFocus="Introduce a simple map of the community"
              afternoonActivity="Create a class book about community places"
              materials={[
                "Mapping Penny's World book",
                "Simple community map",
                "Book-making materials",
                "Drawing supplies",
              ]}
              assessmentNotes="Note students' understanding of community places and spatial relationships."
              color="green"
            />
          </TabsContent>

          <TabsContent value="wednesday">
            <DailyPlan
              day="Wednesday"
              theme="Community Helpers"
              morningActivity="Morning Circle: Focus on community helpers"
              literacyFocus="Read 'Whose Hands Are These?' by Miranda Paul"
              mathFocus="Graph our favorite community helpers"
              afternoonActivity="Special visitor: Community helper"
              materials={[
                "Whose Hands Are These? book",
                "Chart paper for graph",
                "Community helper props",
                "Thank you card materials",
              ]}
              assessmentNotes="Observe students' questions and engagement with community helper concepts."
              color="green"
            />
          </TabsContent>

          <TabsContent value="thursday">
            <DailyPlan
              day="Thursday"
              theme="Working Together in a Community"
              morningActivity="Morning Circle: Discuss how people in a community work together"
              literacyFocus="Read 'Maybe Something Beautiful' by F. Isabel Campoy"
              mathFocus="Patterns in community buildings and structures"
              afternoonActivity="Complete the community mural as a collaborative project"
              materials={[
                "Maybe Something Beautiful book",
                "Community mural materials",
                "Pattern blocks",
                "Cooperative game materials",
              ]}
              assessmentNotes="Note students' ability to work cooperatively and understand community collaboration."
              color="green"
            />
          </TabsContent>

          <TabsContent value="friday">
            <DailyPlan
              day="Friday"
              theme="Being a Good Community Member"
              morningActivity="Morning Circle: What makes a good community member?"
              literacyFocus="Read 'The Curious Garden' by Peter Brown"
              mathFocus="Count and sort ways to help in the community"
              afternoonActivity="Simple classroom or school service project"
              materials={[
                "The Curious Garden book",
                "Service project materials",
                "Badge-making supplies",
                "Community helper certificates",
              ]}
              assessmentNotes="Evaluate students' understanding of citizenship and community responsibility."
              color="green"
            />
          </TabsContent>
        </Tabs>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-700 flex items-center">
          <Lightbulb className="mr-2 h-6 w-6" /> Featured Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ActivityCard
            title="Community Scavenger Hunt"
            description="Students work in small groups to find important places and people in the community using a picture checklist."
            duration="45 minutes"
            materials={["Picture checklists", "Clipboards", "Pencils", "Community map"]}
            learningAreas={["Social Studies", "Language Arts"]}
            color="green"
          />

          <ActivityCard
            title="Community Helper Dress-Up"
            description="Students explore different community helper roles through dramatic play with costumes and props."
            duration="30 minutes"
            materials={["Community helper costumes", "Role-specific props", "Job description cards"]}
            learningAreas={["Social-Emotional", "Drama"]}
            color="green"
          />

          <ActivityCard
            title="Build a Community"
            description="Using blocks and recycled materials, students create a model community with various buildings and services."
            duration="40 minutes"
            materials={["Blocks", "Recycled materials", "Small figures", "Toy vehicles"]}
            learningAreas={["Engineering", "Social Studies"]}
            color="green"
          />

          <ActivityCard
            title="Thank You Cards for Helpers"
            description="Students create thank you cards for community helpers who provide important services."
            duration="35 minutes"
            materials={["Construction paper", "Markers", "Stickers", "Photos of helpers"]}
            learningAreas={["Art", "Social-Emotional"]}
            color="green"
          />
        </div>
      </div>

      <TeacherTip
        title="Virtual Community Tour"
        tip="If you can't take students on a community walk, create a virtual tour using photos of local community places and helpers. Display these on a digital slideshow or create a classroom display."
        color="green"
      />

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-700 flex items-center">
          <BookOpen className="mr-2 h-6 w-6" /> Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-green-200">
            <CardHeader className="bg-green-50 border-b border-green-100">
              <CardTitle className="text-green-700">Books</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-2">
                <li>"The Little House" by Virginia Lee Burton</li>
                <li>"Mapping Penny's World" by Loreen Leedy</li>
                <li>"Whose Hands Are These?" by Miranda Paul</li>
                <li>"Maybe Something Beautiful" by F. Isabel Campoy</li>
                <li>"The Curious Garden" by Peter Brown</li>
              </ul>
              <Button variant="outline" className="mt-4 w-full border-green-500 text-green-700 hover:bg-green-50">
                <Download className="mr-2 h-4 w-4" /> Book List PDF
              </Button>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardHeader className="bg-green-50 border-b border-green-100">
              <CardTitle className="text-green-700">Printables</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-2">
                <li>Community scavenger hunt checklist</li>
                <li>Community helper matching cards</li>
                <li>Simple community map template</li>
                <li>Community helper interview sheets</li>
                <li>Thank you card templates</li>
              </ul>
              <Button variant="outline" className="mt-4 w-full border-green-500 text-green-700 hover:bg-green-50">
                <Printer className="mr-2 h-4 w-4" /> Print Materials
              </Button>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardHeader className="bg-green-50 border-b border-green-100">
              <CardTitle className="text-green-700">Home Connection</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="mb-4">
                Send home a family activity sheet that encourages parents/caregivers to take a walk or drive around the
                community and point out important places and helpers.
              </p>
              <Button variant="outline" className="w-full border-green-500 text-green-700 hover:bg-green-50">
                <Download className="mr-2 h-4 w-4" /> Family Activity
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/curriculum/kindergarten/belonging/week-3">Previous Week: My School</Link>
        </Button>
        <Button asChild>
          <Link href="/curriculum/kindergarten/belonging/week-5">Next Week: Belonging Together</Link>
        </Button>
      </div>
    </div>
  )
}
