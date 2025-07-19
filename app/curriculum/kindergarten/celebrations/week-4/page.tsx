import { Breadcrumb } from "@/components/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, Calendar, Lightbulb, Download, CheckCircle2, ChevronLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TeacherTip } from "@/components/teacher-tip"
import { ActivityCard } from "@/components/activity-card"
import { WeeklyOverview } from "@/components/weekly-overview"
import { DailyPlan } from "@/components/daily-plan"

export default function CelebrationsUnitWeek4() {
  return (
    <div className="container mx-auto px-4 py-8">
            <div className="flex items-center gap-2 mb-4">
        <Link href="/curriculum/kindergarten/celebrations">
          <Button variant="outline" className="mb-2">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Celebrations Unit
          </Button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4 text-amber-700">Week 4: What I Like About Celebrations</h1>
          <div className="bg-amber-50 p-4 rounded-lg mb-6">
            <h2 className="text-xl font-semibold mb-2 text-amber-700">Weekly Focus</h2>
            <p>
              Children reflect on their favorite aspects of celebrations and festivals, share personal experiences, and
              develop appreciation for the diversity of celebration customs across different families and cultures.
            </p>
          </div>
        </div>
        <div className="md:w-1/3">
          <Card className="border-amber-200 shadow-md">
            <CardHeader className="bg-amber-50 border-b border-amber-100">
              <CardTitle className="flex items-center text-amber-700">
                <Clock className="mr-2 h-5 w-5" /> Week at a Glance
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                  <span>Reflect on favorite celebration experiences</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                  <span>Share personal celebration stories</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                  <span>Explore carnival traditions and celebrations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                  <span>Create celebration-themed art and crafts</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2">
          <Image
            src="/kindergarten-celebration-together.png"
            alt="Kindergarten students celebrating together"
            width={800}
            height={500}
            className="rounded-lg shadow-md object-cover h-[300px]"
          />
        </div>
        <div>
          <WeeklyOverview
            theme="What I Like About Celebrations"
            focusAreas={[
              "Personal preferences",
              "Sharing experiences",
              "Cultural appreciation",
              "Celebration traditions",
            ]}
            vocabulary={[
              "favorite",
              "enjoy",
              "special",
              "tradition",
              "carnival",
              "parade",
              "costume",
              "music",
              "dance",
              "together",
            ]}
            color="amber"
          />
        </div>
      </div>

      <TeacherTip
        title="Encouraging Respectful Sharing"
        tip="When children share what they like about celebrations, emphasize that everyone's preferences are valid and important. This is a great opportunity to reinforce that families celebrate differently, and there's no 'right way' to celebrate. Encourage children to use descriptive language when explaining why they enjoy certain aspects of celebrations."
        color="amber"
      />

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-amber-700 flex items-center">
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
              theme="My Favorite Celebrations"
              morningActivity="Morning Circle: Think-Pair-Share about what children like about celebrations with their families"
              literacyFocus="Create postcards with drawings and simple sentences about favorite celebration aspects"
              mathFocus="Collect and graph data about classmates' favorite parts of celebrations"
              afternoonActivity="Create a class chart showing what everyone likes best about celebrations"
              materials={[
                "Postcard templates",
                "Art supplies",
                "Chart paper",
                "Graphing materials",
                "Thinking caps (optional)",
              ]}
              assessmentNotes="Observe children's ability to express preferences and reasons for enjoying specific celebration aspects."
              color="amber"
            />
          </TabsContent>

          <TabsContent value="tuesday">
            <DailyPlan
              day="Tuesday"
              theme="Carnival Celebrations"
              morningActivity="Morning Circle: Watch videos of carnival parades and discuss what they observe"
              literacyFocus="Read 'Ninny at Carnival' and discuss the preparations, decorations, and costumes"
              mathFocus="Count and categorize different types of carnival costumes seen in videos"
              afternoonActivity="Dance to carnival music and practice following movement patterns"
              materials={[
                "Carnival videos",
                "'Ninny at Carnival' book",
                "Carnival music recordings",
                "Movement space",
                "Costume pictures for sorting",
              ]}
              assessmentNotes="Note children's understanding of carnival as a celebration and their ability to describe costumes and music."
              color="amber"
            />
          </TabsContent>

          <TabsContent value="wednesday">
            <DailyPlan
              day="Wednesday"
              theme="Carnival Showcase"
              morningActivity="Morning Circle: Explore a carnival booth with costumes, instruments, and decorations"
              literacyFocus="Solve 'Who am I?' riddles about carnival characters and costumes"
              mathFocus="Create a pictograph showing favorite aspects of carnival celebrations"
              afternoonActivity="Role play different carnival characters in pairs using props and materials"
              materials={[
                "Carnival booth materials",
                "Costume pieces",
                "Pictograph templates",
                "Smiley face cut-outs",
                "Riddle cards",
              ]}
              assessmentNotes="Observe children's engagement with carnival traditions and their ability to identify different aspects of the celebration."
              color="amber"
            />
          </TabsContent>

          <TabsContent value="thursday">
            <DailyPlan
              day="Thursday"
              theme="Carnival Costumes"
              morningActivity="Morning Circle: Read 'To Carnival!' and discuss the story elements"
              literacyFocus="Watch videos of different carnival characters and discuss their features"
              mathFocus="Sort and classify different types of carnival costumes by color, pattern, and style"
              afternoonActivity="Create simple carnival costume elements using provided materials"
              materials={[
                "'To Carnival!' book",
                "Carnival character videos",
                "Craft materials for costumes",
                "Colored paper",
                "Mask templates",
              ]}
              assessmentNotes="Note children's creativity in costume design and their understanding of carnival character types."
              color="amber"
            />
          </TabsContent>

          <TabsContent value="friday">
            <DailyPlan
              day="Friday"
              theme="Celebration Finale"
              morningActivity="Morning Circle: Review the KWL chart about celebrations and complete the 'Learned' section"
              literacyFocus="Create a class language experience story about our favorite celebrations"
              mathFocus="Review and interpret our class data about favorite celebration aspects"
              afternoonActivity="Kiddies Carnival Frolic - parade in costumes with music in the schoolyard"
              materials={[
                "KWL chart",
                "Carnival costumes",
                "Music equipment",
                "Celebration foods (optional)",
                "Camera for documentation",
              ]}
              assessmentNotes="Evaluate children's overall understanding of celebrations and their ability to express what they enjoy about them."
              color="amber"
            />
          </TabsContent>
        </Tabs>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-amber-700 flex items-center">
          <Lightbulb className="mr-2 h-6 w-6" /> Featured Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ActivityCard
            title="Celebration Postcard"
            description="Children create postcards with drawings and simple sentences about what they like best about celebrations with their families."
            duration="30 minutes"
            materials={["Postcard templates", "Crayons/markers", "Stickers", "Glue", "Magazine cutouts"]}
            learningAreas={["Literacy", "Art", "Social Studies"]}
            color="amber"
          />

          <ActivityCard
            title="Carnival Charades"
            description="Children take turns acting out different aspects of celebrations using gestures and movements while others guess what celebration they're depicting."
            duration="25 minutes"
            materials={["Picture cards of celebrations", "Open space", "Timer", "Celebration props (optional)"]}
            learningAreas={["Drama", "Physical Movement", "Social Studies"]}
            color="amber"
          />

          <ActivityCard
            title="Celebration Scrapbook"
            description="In small groups, children create scrapbooks about various celebrations explored during the unit using drawings, cutouts, and simple writing."
            duration="45 minutes"
            materials={[
              "Construction paper",
              "Glue",
              "Scissors",
              "Markers",
              "Magazine cutouts",
              "Photos from class activities",
            ]}
            learningAreas={["Literacy", "Art", "Social Studies", "Collaboration"]}
            color="amber"
          />

          <ActivityCard
            title="Carnival Mask Making"
            description="Children design and create their own carnival masks using templates and various decorative materials."
            duration="40 minutes"
            materials={["Mask templates", "Craft sticks", "Sequins", "Feathers", "Glitter", "Colored paper"]}
            learningAreas={["Art", "Fine Motor Skills", "Cultural Studies"]}
            color="amber"
          />
        </div>
      </div>

      <TeacherTip
        title="Connecting Home and School"
        tip="Send home a family reflection sheet asking parents to discuss with their child what the family enjoys most about their celebrations. This creates a meaningful connection between home and school learning, and helps children see that their family traditions are valued in the classroom."
        color="amber"
      />

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-amber-700 flex items-center">
          <BookOpen className="mr-2 h-6 w-6" /> Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-amber-200">
            <CardHeader className="bg-amber-50 border-b border-amber-100">
              <CardTitle className="text-amber-700">Books</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-2">
                <li>"Ninny at Carnival" by Grace Hallworth</li>
                <li>"To Carnival!: A Celebration in St Lucia" by Baptiste Paul</li>
                <li>"Jump Up! A Story of Carnival" by Ken Wilson-Max</li>
                <li>"Caribbean Carnival" by Jillian Powell</li>
                <li>"Let's Celebrate" by Kate DePalma</li>
              </ul>
              <Button variant="outline" className="mt-4 w-full border-amber-500 text-amber-700 hover:bg-amber-50">
                <Download className="mr-2 h-4 w-4" /> Book List PDF
              </Button>
            </CardContent>
          </Card>

          <Card className="border-amber-200">
            <CardHeader className="bg-amber-50 border-b border-amber-100">
              <CardTitle className="text-amber-700">Videos</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-2">
                <li>Caribbean Carnival Parades</li>
                <li>Jab Jab and Short Knee Traditions</li>
                <li>Steel Pan Performances</li>
                <li>Children's Carnival Celebrations</li>
                <li>Carnival Costume Making</li>
              </ul>
              <Button variant="outline" className="mt-4 w-full border-amber-500 text-amber-700 hover:bg-amber-50">
                <Download className="mr-2 h-4 w-4" /> Video Links
              </Button>
            </CardContent>
          </Card>

          <Card className="border-amber-200">
            <CardHeader className="bg-amber-50 border-b border-amber-100">
              <CardTitle className="text-amber-700">Home Connection</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="mb-4">
                Send home a family reflection sheet asking families to share what they enjoy most about their
                celebrations and traditions.
              </p>
              <Button variant="outline" className="w-full border-amber-500 text-amber-700 hover:bg-amber-50">
                <Download className="mr-2 h-4 w-4" /> Family Activity
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/curriculum/kindergarten/celebrations/week-3">Previous Week: Special Foods and Decorations</Link>
        </Button>
        <Button asChild>
          <Link href="/curriculum/kindergarten/celebrations/resources">Celebrations Unit Resources</Link>
        </Button>
      </div>
    </div>
  )
}
