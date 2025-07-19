import { Breadcrumb } from "@/components/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, Calendar, Lightbulb, Download, CheckCircle2, Printer, ChevronLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TeacherTip } from "@/components/teacher-tip"
import { ActivityCard } from "@/components/activity-card"
import { WeeklyOverview } from "@/components/weekly-overview"
import { DailyPlan } from "@/components/daily-plan"

export default function CelebrationsUnitWeek1() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Curriculum", href: "/curriculum" },
          { label: "Kindergarten", href: "/curriculum/kindergarten" },
          { label: "Celebrations", href: "/curriculum/kindergarten/celebrations" },
          { label: "Week 1", href: "/curriculum/kindergarten/celebrations/week-1" },
        ]}
      />
      <div className="flex items-center gap-2 mb-4">
        <Link href="/curriculum/kindergarten/celebrations">
          <Button variant="outline" className="mb-2">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Celebrations Unit
          </Button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4 text-cyan-700">Week 1: Family Celebrations</h1>
          <div className="bg-cyan-50 p-4 rounded-lg mb-6">
            <h2 className="text-xl font-semibold mb-2 text-cyan-700">Weekly Focus</h2>
            <p>
              Children explore celebrations that happen within families, such as birthdays, anniversaries, and family
              reunions, and share their own family celebration traditions.
            </p>
          </div>
        </div>
        <div className="md:w-1/3">
          <Card className="border-cyan-200 shadow-md">
            <CardHeader className="bg-cyan-50 border-b border-cyan-100">
              <CardTitle className="flex items-center text-cyan-700">
                <Clock className="mr-2 h-5 w-5" /> Week at a Glance
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-cyan-500 mr-2 mt-0.5" />
                  <span>Identify different types of family celebrations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-cyan-500 mr-2 mt-0.5" />
                  <span>Share personal experiences of family celebrations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-cyan-500 mr-2 mt-0.5" />
                  <span>Recognize common elements of celebrations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-cyan-500 mr-2 mt-0.5" />
                  <span>Understand that celebrations mark special occasions</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2">
          <Image
            src="/kindergarten-family-celebration.png"
            alt="Kindergarten students celebrating"
            width={800}
            height={500}
            className="rounded-lg shadow-md object-cover h-[300px]"
          />
        </div>
        <div>
          <WeeklyOverview
            theme="Family Celebrations"
            focusAreas={[
              "Different family celebrations",
              "Personal celebration experiences",
              "Elements of celebrations",
              "Celebration vocabulary",
            ]}
            vocabulary={[
              "celebration",
              "birthday",
              "anniversary",
              "reunion",
              "tradition",
              "special",
              "decorations",
              "gifts",
            ]}
            color="cyan"
          />
        </div>
      </div>

      <TeacherTip
        title="Creating an Inclusive Environment"
        tip="Be sensitive to children who may have different family structures or limited experience with celebrations. Focus on the diversity of celebrations rather than assuming all children celebrate in the same way. Send a note home before beginning the unit asking families to share photos or stories of family celebrations if they feel comfortable doing so."
        color="cyan"
      />

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-cyan-700 flex items-center">
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
              theme="What Are Celebrations?"
              morningActivity="Morning Circle: Introduce the theme 'Celebrations.' Read 'Let's Celebrate!' by Caroline Jayne Church or a similar book about celebrations. Discuss what celebrations are and why we have them."
              literacyFocus="Create a 'Celebrations' word wall with pictures and words related to different celebrations. Practice using these words in sentences."
              mathFocus="Count and sort picture cards of different types of celebrations."
              afternoonActivity="Children draw pictures of a family celebration they have experienced. Dictate or write sentences about their drawings."
              materials={[
                "Let's Celebrate! book",
                "Chart paper",
                "Markers",
                "Drawing supplies",
                "Picture cards of celebrations",
              ]}
              assessmentNotes="Observe students' prior knowledge about celebrations and their ability to identify different types of celebrations."
              color="cyan"
            />
          </TabsContent>

          <TabsContent value="tuesday">
            <DailyPlan
              day="Tuesday"
              theme="Birthday Celebrations"
              morningActivity="Morning Circle: Focus on birthday celebrations. Read 'Happy Birthday to You!' by Dr. Seuss or a similar book. Discuss birthday traditions and how they are celebrated in different families."
              literacyFocus="Practice writing birthday cards and using celebration vocabulary."
              mathFocus="Create a birthday graph showing children's birth months. Count how many children have birthdays in each month and discuss patterns."
              afternoonActivity="Design birthday cards using various art materials. Practice writing 'Happy Birthday' and discuss the purpose of cards in celebrations."
              materials={[
                "Happy Birthday to You! book",
                "Birthday graph template",
                "Card-making materials",
                "Markers and crayons",
                "Calendar",
              ]}
              assessmentNotes="Note students' understanding of birthday traditions and their ability to identify similarities and differences in how birthdays are celebrated."
              color="cyan"
            />
          </TabsContent>

          <TabsContent value="wednesday">
            <DailyPlan
              day="Wednesday"
              theme="Family Gatherings and Reunions"
              morningActivity="Morning Circle: Focus on family gatherings and reunions. Read 'The Relatives Came' by Cynthia Rylant or a similar book. Discuss special gatherings when extended family comes together."
              literacyFocus="Children share stories about a time when their family gathered together (using photos from home if available). Create a language experience chart with their stories."
              mathFocus="Count family members in photos or drawings. Compare numbers using terms like 'more than' and 'less than'."
              afternoonActivity="Create a class mural titled 'Our Family Gatherings' where each child contributes a drawing of their family gathered together."
              materials={[
                "The Relatives Came book",
                "Family photos (from home)",
                "Large paper for mural",
                "Art supplies",
                "Chart paper",
              ]}
              assessmentNotes="Observe students' ability to describe family gatherings and their understanding of why families come together for celebrations."
              color="cyan"
            />
          </TabsContent>

          <TabsContent value="thursday">
            <DailyPlan
              day="Thursday"
              theme="Special Family Traditions"
              morningActivity="Morning Circle: Focus on special family traditions. Read 'The Keeping Quilt' by Patricia Polacco or a similar book about family traditions. Discuss special traditions that are unique to each family."
              literacyFocus="Create a class book titled 'Our Special Family Traditions' where each child contributes a page about a unique tradition in their family."
              mathFocus="Sort and classify different types of family traditions (food traditions, music traditions, etc.)."
              afternoonActivity="Children role-play different family traditions (special meals, game nights, storytelling, etc.) in small groups."
              materials={[
                "The Keeping Quilt book",
                "Book-making materials",
                "Drawing supplies",
                "Props for role-play",
                "Sorting cards",
              ]}
              assessmentNotes="Note students' understanding of traditions and their ability to identify and describe traditions in their own families."
              color="cyan"
            />
          </TabsContent>

          <TabsContent value="friday">
            <DailyPlan
              day="Friday"
              theme="Classroom Family Celebration"
              morningActivity="Morning Circle: Review the week's learning about family celebrations. Read 'Hooray! A Piñata!' by Elisa Kleven or a similar book about celebration preparations."
              literacyFocus="Write celebration invitations or thank-you notes using celebration vocabulary."
              mathFocus="Count and prepare materials needed for the classroom celebration (plates, cups, decorations, etc.)."
              afternoonActivity="Hold a classroom 'family' celebration. Children help make decorations, prepare simple snacks, and decide on activities for the celebration."
              materials={[
                "Hooray! A Piñata! book",
                "Celebration decorations",
                "Simple snack ingredients",
                "Music",
                "Art supplies",
              ]}
              assessmentNotes="Observe how students apply what they've learned about family celebrations to planning their own classroom celebration."
              color="cyan"
            />
          </TabsContent>
        </Tabs>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-cyan-700 flex items-center">
          <Lightbulb className="mr-2 h-6 w-6" /> Featured Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ActivityCard
            title="Birthday Celebration Graph"
            description="Create a visual representation of children's birthdays by month to practice counting, comparing, and discussing patterns."
            duration="30 minutes"
            materials={["Chart paper", "Markers", "Birthday stickers or icons", "Children's birth date information"]}
            learningAreas={["Math", "Social-Emotional", "Language"]}
            color="cyan"
          />

          <ActivityCard
            title="Family Traditions Book"
            description="Each child creates a page about their family's special traditions to compile into a class book celebrating diversity."
            duration="45 minutes"
            materials={["Construction paper", "Drawing supplies", "Photos from home (optional)", "Binding materials"]}
            learningAreas={["Literacy", "Social Studies", "Art", "Social-Emotional"]}
            color="cyan"
          />

          <ActivityCard
            title="Celebration Dramatic Play Center"
            description="Set up a dramatic play area with props for different family celebrations where children can role-play scenarios."
            duration="Ongoing center"
            materials={[
              "Party hats",
              "Pretend cake",
              "Decorations",
              "Dress-up clothes",
              "Pretend gifts",
              "Celebration cards",
            ]}
            learningAreas={["Social-Emotional", "Language", "Dramatic Play", "Social Studies"]}
            color="cyan"
          />

          <ActivityCard
            title="Celebration Scrapbook"
            description="Children create simple scrapbooks depicting a religious or national celebration that their family participates in."
            duration="40 minutes"
            materials={["Construction paper", "Magazines for cutting", "Glue", "Scissors", "Markers", "Stapler"]}
            learningAreas={["Fine Motor", "Art", "Social Studies", "Language"]}
            color="cyan"
          />
        </div>
      </div>

      <TeacherTip
        title="Family Engagement"
        tip="Create a celebration display area where children can bring in items related to their family celebrations (with parent permission) to share with the class. This helps children see the diversity of celebrations and feel proud of their family traditions."
        color="cyan"
      />

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-cyan-700 flex items-center">
          <BookOpen className="mr-2 h-6 w-6" /> Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-cyan-200">
            <CardHeader className="bg-cyan-50 border-b border-cyan-100">
              <CardTitle className="text-cyan-700">Books</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-2">
                <li>"Let's Celebrate!" by Caroline Jayne Church</li>
                <li>"Happy Birthday to You!" by Dr. Seuss</li>
                <li>"The Relatives Came" by Cynthia Rylant</li>
                <li>"The Keeping Quilt" by Patricia Polacco</li>
                <li>"Hooray! A Piñata!" by Elisa Kleven</li>
              </ul>
              <Button variant="outline" className="mt-4 w-full border-cyan-500 text-cyan-700 hover:bg-cyan-50">
                <Download className="mr-2 h-4 w-4" /> Book List PDF
              </Button>
            </CardContent>
          </Card>

          <Card className="border-cyan-200">
            <CardHeader className="bg-cyan-50 border-b border-cyan-100">
              <CardTitle className="text-cyan-700">Printables</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-2">
                <li>Birthday graph template</li>
                <li>Family celebration coloring pages</li>
                <li>Celebration vocabulary cards</li>
                <li>Family traditions recording sheet</li>
                <li>Thank-you note templates</li>
              </ul>
              <Button variant="outline" className="mt-4 w-full border-cyan-500 text-cyan-700 hover:bg-cyan-50">
                <Printer className="mr-2 h-4 w-4" /> Print Materials
              </Button>
            </CardContent>
          </Card>

          <Card className="border-cyan-200">
            <CardHeader className="bg-cyan-50 border-b border-cyan-100">
              <CardTitle className="text-cyan-700">Home Connection</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="mb-4">
                Send home a family activity sheet that encourages parents/caregivers to talk with their child about a
                special family celebration and help them draw or write about it.
              </p>
              <Button variant="outline" className="w-full border-cyan-500 text-cyan-700 hover:bg-cyan-50">
                <Download className="mr-2 h-4 w-4" /> Family Activity
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/curriculum/kindergarten/celebrations">Back to Celebrations Unit</Link>
        </Button>
        <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
          <Link href="/curriculum/kindergarten/celebrations/week-2">Next Week: Cultural Celebrations</Link>
        </Button>
      </div>
    </div>
  )
}
