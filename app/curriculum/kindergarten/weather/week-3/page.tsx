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

export default function WeatherUnitWeek3() {
  return (
    <div className="container mx-auto px-4 py-8">
            <div className="flex items-center gap-2 mb-4">
        <Link href="/curriculum/kindergarten/weather">
          <Button variant="outline" className="mb-2">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Weather Unit
          </Button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4 text-green-700">Week 3: Weather and Seasons</h1>
          <div className="bg-green-50 p-4 rounded-lg mb-6">
            <h2 className="text-xl font-semibold mb-2 text-green-700">Weekly Focus</h2>
            <p>
              Children explore how weather changes throughout the year, learn about the four seasons, and discover the
              relationship between seasons and weather patterns.
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
                  <span>Identify the four seasons and their characteristics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Connect weather patterns to different seasons</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Observe how plants and animals respond to seasonal changes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Create seasonal art and explore seasonal activities</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2">
          <Image
            src="/kindergarten-seasons.png"
            alt="Kindergarten students learning about the four seasons"
            width={800}
            height={500}
            className="rounded-lg shadow-md object-cover h-[300px]"
          />
        </div>
        <div>
          <WeeklyOverview
            theme="Weather and Seasons"
            focusAreas={[
              "Four seasons",
              "Seasonal weather patterns",
              "Seasonal changes",
              "Plant and animal adaptations",
            ]}
            vocabulary={[
              "seasons",
              "spring",
              "summer",
              "fall",
              "autumn",
              "winter",
              "cycle",
              "change",
              "pattern",
              "adapt",
            ]}
            color="green"
          />
        </div>
      </div>

      <TeacherTip
        title="Seasonal Documentation"
        tip="Create a classroom 'Season Tree' display that can be updated throughout the year. Use a large tree outline with branches, and change the decorations to match each season (blossoms in spring, green leaves in summer, colorful leaves in fall, bare with snowflakes in winter). Take photos of the same outdoor location during different seasons to help children visualize seasonal changes."
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
              theme="Introducing the Seasons"
              morningActivity="Morning Circle: Introduce the concept of seasons and the seasonal cycle"
              literacyFocus="Read 'The Seasons of Arnold's Apple Tree' by Gail Gibbons"
              mathFocus="Create a seasons chart with four equal sections"
              afternoonActivity="Begin creating a class seasons book with one page for each season"
              materials={[
                "The Seasons of Arnold's Apple Tree book",
                "Chart paper divided into four sections",
                "Season pictures",
                "Book-making materials",
                "Art supplies",
              ]}
              assessmentNotes="Observe students' prior knowledge about seasons and their ability to identify basic seasonal characteristics."
              color="green"
            />
          </TabsContent>

          <TabsContent value="tuesday">
            <DailyPlan
              day="Tuesday"
              theme="Spring Weather"
              morningActivity="Morning Circle: Focus on spring weather patterns and changes"
              literacyFocus="Read 'And Then It's Spring' by Julie Fogliano"
              mathFocus="Graph spring weather patterns using picture symbols"
              afternoonActivity="Plant seeds to observe growth (connecting to spring rain and sunshine)"
              materials={[
                "And Then It's Spring book",
                "Graphing materials",
                "Weather picture symbols",
                "Seeds",
                "Soil",
                "Small cups",
                "Spray bottles",
              ]}
              assessmentNotes="Note students' understanding of spring weather characteristics and their ability to connect weather to plant growth."
              color="green"
            />
          </TabsContent>

          <TabsContent value="wednesday">
            <DailyPlan
              day="Wednesday"
              theme="Summer Weather"
              morningActivity="Morning Circle: Explore summer weather patterns and activities"
              literacyFocus="Read 'Summer Days and Nights' by Wong Herbert Yee"
              mathFocus="Compare temperature in sunny vs. shady areas (using simple thermometers or feeling with hands)"
              afternoonActivity="Create summer sun art and discuss sun safety"
              materials={[
                "Summer Days and Nights book",
                "Simple thermometers",
                "Chart for recording temperatures",
                "Yellow and orange art supplies",
                "Sun safety items (hats, sunglasses, sunscreen containers)",
              ]}
              assessmentNotes="Observe students' understanding of summer weather characteristics and sun safety concepts."
              color="green"
            />
          </TabsContent>

          <TabsContent value="thursday">
            <DailyPlan
              day="Thursday"
              theme="Fall Weather"
              morningActivity="Morning Circle: Discuss fall weather patterns and changes in nature"
              literacyFocus="Read 'Fall Is Not Easy' by Marty Kelley"
              mathFocus="Sort and count fall items (leaves, acorns, pinecones) by attributes"
              afternoonActivity="Leaf rubbings and fall color mixing art"
              materials={[
                "Fall Is Not Easy book",
                "Fall items for sorting",
                "Leaves for rubbings",
                "Paper",
                "Crayons",
                "Red, yellow, and orange paint",
              ]}
              assessmentNotes="Note students' understanding of fall weather patterns and seasonal changes in plants."
              color="green"
            />
          </TabsContent>

          <TabsContent value="friday">
            <DailyPlan
              day="Friday"
              theme="Winter Weather"
              morningActivity="Morning Circle: Explore winter weather patterns and adaptations"
              literacyFocus="Read 'Winter Is the Warmest Season' by Lauren Stringer"
              mathFocus="Compare and contrast winter clothing with summer clothing using a Venn diagram"
              afternoonActivity="Create paper snowflakes and complete the class seasons book"
              materials={[
                "Winter Is the Warmest Season book",
                "Venn diagram template",
                "Winter and summer clothing pictures",
                "Paper for snowflakes",
                "Scissors",
                "Class seasons book materials",
              ]}
              assessmentNotes="Evaluate students' understanding of winter weather and how people adapt to seasonal changes."
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
            title="Four Seasons Tree"
            description="Students create a tree that shows all four seasons in different sections, using various materials to represent seasonal changes."
            duration="45 minutes"
            materials={[
              "Brown construction paper (for tree trunk)",
              "Green, red, yellow tissue paper",
              "Cotton balls",
              "Flower stickers",
              "Glue",
              "Scissors",
            ]}
            learningAreas={["Science", "Art", "Seasonal Changes"]}
            color="green"
          />

          <ActivityCard
            title="Season Sort"
            description="Students sort pictures of activities, clothing, and weather into the appropriate seasons."
            duration="30 minutes"
            materials={["Season sorting mats", "Picture cards", "Season labels", "Pocket chart"]}
            learningAreas={["Science", "Critical Thinking", "Vocabulary"]}
            color="green"
          />

          <ActivityCard
            title="Weather Dress-Up Relay"
            description="Teams race to dress a team member appropriately for a specific season's weather."
            duration="25 minutes"
            materials={[
              "Seasonal clothing items",
              "Season cards",
              "Timer",
              "Dress-up station for each team",
              "Open space",
            ]}
            learningAreas={["Physical Education", "Life Skills", "Teamwork"]}
            color="green"
          />

          <ActivityCard
            title="Seasonal Sensory Bins"
            description="Students explore sensory bins with materials representing each season (spring flowers, summer sand, fall leaves, winter 'snow')."
            duration="Ongoing center"
            materials={["Sensory bins", "Seasonal materials", "Scoops", "Magnifying glasses", "Seasonal small toys"]}
            learningAreas={["Sensory Development", "Science", "Vocabulary"]}
            color="green"
          />
        </div>
      </div>

      <TeacherTip
        title="Seasonal Transitions"
        tip="Help students understand that seasons don't change overnight by discussing transition periods. Use a color-changing activity where colors gradually blend (like yellow slowly adding orange to become fall) to demonstrate how seasons gradually change. Discuss how some days in spring might feel like winter, or some fall days might feel like summer."
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
                <li>"The Seasons of Arnold's Apple Tree" by Gail Gibbons</li>
                <li>"And Then It's Spring" by Julie Fogliano</li>
                <li>"Summer Days and Nights" by Wong Herbert Yee</li>
                <li>"Fall Is Not Easy" by Marty Kelley</li>
                <li>"Winter Is the Warmest Season" by Lauren Stringer</li>
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
                <li>Four seasons sorting cards</li>
                <li>Seasonal weather chart templates</li>
                <li>Seasonal clothing matching game</li>
                <li>Seasons wheel template</li>
                <li>Seasonal observation journal pages</li>
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
                Send home a seasonal scavenger hunt that families can use throughout the year. Include items to find
                during each season, encouraging outdoor exploration and observation of seasonal changes.
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
          <Link href="/curriculum/kindergarten/weather/week-2">Previous Week: Types of Weather</Link>
        </Button>
        <Button asChild>
          <Link href="/curriculum/kindergarten/weather/week-4">Next Week: Weather and Our Lives</Link>
        </Button>
      </div>
    </div>
  )
}
