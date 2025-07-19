import { Breadcrumb } from "@/components/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, Calendar, Lightbulb, Download, CheckCircle2, Printer, Globe, ChevronLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TeacherTip } from "@/components/teacher-tip"
import { ActivityCard } from "@/components/activity-card"
import { WeeklyOverview } from "@/components/weekly-overview"
import { DailyPlan } from "@/components/daily-plan"

export default function BelongingUnitWeek5() {
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
          <h1 className="text-3xl font-bold mb-4 text-blue-700">Week 5: Belonging Together</h1>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h2 className="text-xl font-semibold mb-2 text-blue-700">Weekly Focus</h2>
            <p>
              Children explore how people belong to multiple groups, how we can help others belong, and celebrate the
              diversity and unity of their classroom community.
            </p>
          </div>
        </div>
        <div className="md:w-1/3">
          <Card className="border-blue-200 shadow-md">
            <CardHeader className="bg-blue-50 border-b border-blue-100">
              <CardTitle className="flex items-center text-blue-700">
                <Clock className="mr-2 h-5 w-5" /> Week at a Glance
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <span>Understand that people belong to multiple groups</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <span>Recognize and appreciate similarities and differences</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <span>Develop strategies for including others</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <span>Celebrate diversity within the classroom community</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2">
          <Image
            src="/kindergarten-friendship.png"
            alt="Kindergarten students celebrating diversity and friendship"
            width={800}
            height={500}
            className="rounded-lg shadow-md object-cover h-[300px]"
          />
        </div>
        <div>
          <WeeklyOverview
            theme="Belonging Together"
            focusAreas={[
              "Multiple group membership",
              "Similarities and differences",
              "Inclusion strategies",
              "Celebrating diversity",
            ]}
            vocabulary={[
              "belong",
              "include",
              "diversity",
              "unity",
              "acceptance",
              "kindness",
              "friendship",
              "community",
              "celebrate",
              "together",
            ]}
            color="blue"
          />
        </div>
      </div>

      <TeacherTip
        title="Celebrating Diversity"
        tip="Create a classroom display titled 'We All Belong' where each child contributes something that represents their uniqueness. This could be a self-portrait, a family photo, or an artifact that represents their cultural background or interests."
        color="blue"
      />

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-700 flex items-center">
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
              theme="We Belong to Many Groups"
              morningActivity="Morning Circle: Introduce the concept that people belong to many different groups"
              literacyFocus="Read 'All Are Welcome' by Alexandra Penfold"
              mathFocus="Sort and classify groups we belong to"
              afternoonActivity="Create 'Groups I Belong To' web diagrams"
              materials={[
                "All Are Welcome book",
                "Chart paper",
                "Markers",
                "Web diagram templates",
                "Magazine pictures",
              ]}
              assessmentNotes="Observe students' understanding of belonging to multiple groups and their ability to identify groups they belong to."
              color="blue"
            />
          </TabsContent>

          <TabsContent value="tuesday">
            <DailyPlan
              day="Tuesday"
              theme="Same and Different"
              morningActivity="Morning Circle: Discuss similarities and differences among people"
              literacyFocus="Read 'We're All Wonders' by R.J. Palacio"
              mathFocus="Create Venn diagrams comparing similarities and differences"
              afternoonActivity="Self-portrait art project celebrating diversity"
              materials={[
                "We're All Wonders book",
                "Venn diagram templates",
                "Multicultural art supplies",
                "Mirror",
                "Self-portrait templates",
              ]}
              assessmentNotes="Note students' ability to identify similarities and differences and their comfort level discussing diversity."
              color="blue"
            />
          </TabsContent>

          <TabsContent value="wednesday">
            <DailyPlan
              day="Wednesday"
              theme="Helping Others Belong"
              morningActivity="Morning Circle: Discuss how we can help others feel like they belong"
              literacyFocus="Read 'Strictly No Elephants' by Lisa Mantchev"
              mathFocus="Graph ways we can help others belong"
              afternoonActivity="Role-play inclusion scenarios"
              materials={[
                "Strictly No Elephants book",
                "Chart paper for graph",
                "Scenario cards",
                "Puppets",
                "Friendship bracelet materials",
              ]}
              assessmentNotes="Observe students' strategies for including others and their empathy for those who feel excluded."
              color="blue"
            />
          </TabsContent>

          <TabsContent value="thursday">
            <DailyPlan
              day="Thursday"
              theme="Our Classroom Community"
              morningActivity="Morning Circle: Reflect on how the class has become a community"
              literacyFocus="Read 'You Belong Here' by M.H. Clark"
              mathFocus="Create a class puzzle where each piece represents a student"
              afternoonActivity="Collaborative art project - 'Our Classroom Family'"
              materials={[
                "You Belong Here book",
                "Puzzle pieces (one per child)",
                "Art supplies",
                "Large paper for collaborative art",
                "Music for celebration",
              ]}
              assessmentNotes="Note students' sense of belonging in the classroom community and their contributions to group activities."
              color="blue"
            />
          </TabsContent>

          <TabsContent value="friday">
            <DailyPlan
              day="Friday"
              theme="Celebrating Belonging Together"
              morningActivity="Morning Circle: Review the entire Belonging Unit"
              literacyFocus="Create a class book about belonging"
              mathFocus="Count and graph favorite activities from the unit"
              afternoonActivity="'Belonging Together' celebration"
              materials={[
                "Photos from throughout the unit",
                "Book-making materials",
                "Graphing supplies",
                "Celebration decorations",
                "Healthy snacks",
              ]}
              assessmentNotes="Evaluate students' understanding of belonging concepts and their growth throughout the unit."
              color="blue"
            />
          </TabsContent>
        </Tabs>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-700 flex items-center">
          <Lightbulb className="mr-2 h-6 w-6" /> Featured Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ActivityCard
            title="Friendship Recipe"
            description="Students create a 'recipe' for friendship, listing ingredients (qualities) that make a good friend."
            duration="30 minutes"
            materials={["Recipe templates", "Markers", "Ingredient cards", "Chef hats (optional)"]}
            learningAreas={["Social-Emotional", "Language Arts"]}
            color="blue"
          />

          <ActivityCard
            title="Belonging Puzzle"
            description="Each student decorates a puzzle piece that represents them. When assembled, the pieces form a complete picture showing how everyone belongs together."
            duration="45 minutes"
            materials={["Large puzzle template", "Individual puzzle pieces", "Art supplies", "Glue"]}
            learningAreas={["Art", "Social-Emotional"]}
            color="blue"
          />

          <ActivityCard
            title="Same and Different Game"
            description="Students play a movement game where they form groups based on similarities and differences."
            duration="20 minutes"
            materials={["Open space", "Attribute cards", "Music"]}
            learningAreas={["Physical Education", "Social Studies"]}
            color="blue"
          />

          <ActivityCard
            title="Kindness Catchers"
            description="Students create paper fortune tellers (cootie catchers) with kind actions that help others feel they belong."
            duration="35 minutes"
            materials={["Paper", "Scissors", "Markers", "Kindness action cards", "Folding instructions"]}
            learningAreas={["Fine Motor", "Social-Emotional"]}
            color="blue"
          />
        </div>
      </div>

      <TeacherTip
        title="Unit Reflection"
        tip="Create a 'Belonging Journey' display showing how students have progressed from understanding themselves (Week 1) to understanding their place in the broader community (Week 5). Include photos, artwork, and quotes from students throughout the unit."
        color="blue"
      />

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-700 flex items-center">
          <BookOpen className="mr-2 h-6 w-6" /> Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-blue-200">
            <CardHeader className="bg-blue-50 border-b border-blue-100">
              <CardTitle className="text-blue-700">Books</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-2">
                <li>"All Are Welcome" by Alexandra Penfold</li>
                <li>"We're All Wonders" by R.J. Palacio</li>
                <li>"Strictly No Elephants" by Lisa Mantchev</li>
                <li>"You Belong Here" by M.H. Clark</li>
                <li>"The Big Umbrella" by Amy June Bates</li>
              </ul>
              <Button variant="outline" className="mt-4 w-full border-blue-500 text-blue-700 hover:bg-blue-50">
                <Download className="mr-2 h-4 w-4" /> Book List PDF
              </Button>
            </CardContent>
          </Card>

          <Card className="border-blue-200">
            <CardHeader className="bg-blue-50 border-b border-blue-100">
              <CardTitle className="text-blue-700">Printables</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-2">
                <li>"Groups I Belong To" web template</li>
                <li>Venn diagram templates</li>
                <li>Puzzle piece templates</li>
                <li>Friendship recipe cards</li>
                <li>Belonging unit assessment checklist</li>
              </ul>
              <Button variant="outline" className="mt-4 w-full border-blue-500 text-blue-700 hover:bg-blue-50">
                <Printer className="mr-2 h-4 w-4" /> Print Materials
              </Button>
            </CardContent>
          </Card>

          <Card className="border-blue-200">
            <CardHeader className="bg-blue-50 border-b border-blue-100">
              <CardTitle className="text-blue-700">Home Connection</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="mb-4">
                Send home a family activity sheet that encourages parents/caregivers to discuss the different groups
                their family belongs to and share family traditions that create a sense of belonging.
              </p>
              <Button variant="outline" className="w-full border-blue-500 text-blue-700 hover:bg-blue-50">
                <Download className="mr-2 h-4 w-4" /> Family Activity
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-700 flex items-center">
          <Globe className="mr-2 h-6 w-6" /> Unit Reflection
        </h2>
        <Card className="border-blue-200">
          <CardHeader className="bg-blue-50 border-b border-blue-100">
            <CardTitle className="text-blue-700">Belonging Unit Wrap-Up</CardTitle>
            <CardDescription>Reflecting on our journey from self to community</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="mb-4">
              As we complete the Belonging unit, help students make connections between all five weeks of learning.
              Create a visual journey showing how we've expanded our understanding from:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center">
                <Badge className="mr-2 bg-pink-100 text-pink-700 hover:bg-pink-100">Week 1</Badge>
                <span>All About Me (self-awareness)</span>
              </li>
              <li className="flex items-center">
                <Badge className="mr-2 bg-orange-100 text-orange-700 hover:bg-orange-100">Week 2</Badge>
                <span>My Family (family connections)</span>
              </li>
              <li className="flex items-center">
                <Badge className="mr-2 bg-purple-100 text-purple-700 hover:bg-purple-100">Week 3</Badge>
                <span>My Friends (peer relationships)</span>
              </li>
              <li className="flex items-center">
                <Badge className="mr-2 bg-green-100 text-green-700 hover:bg-green-100">Week 4</Badge>
                <span>My Community (community awareness)</span>
              </li>
              <li className="flex items-center">
                <Badge className="mr-2 bg-blue-100 text-blue-700 hover:bg-blue-100">Week 5</Badge>
                <span>Belonging Together (unity in diversity)</span>
              </li>
            </ul>
            <p>
              Consider creating a class book or display that showcases student work from each week, demonstrating how
              their understanding of belonging has grown and expanded.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/curriculum/kindergarten/belonging/week-4">Previous Week: My Community</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/curriculum/kindergarten/belonging/resources">Unit Resources</Link>
        </Button>
      </div>
    </div>
  )
}
