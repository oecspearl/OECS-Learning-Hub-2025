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

export default function WeatherUnitWeek1() {
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
          <h1 className="text-3xl font-bold mb-4 text-cyan-700">Week 1: Weather All Around Us</h1>
          <div className="bg-cyan-50 p-4 rounded-lg mb-6">
            <h2 className="text-xl font-semibold mb-2 text-cyan-700">Weekly Focus</h2>
            <p>
              Children develop awareness of weather in their daily lives, learn basic weather vocabulary, and begin
              making daily weather observations using their senses.
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
                  <span>Identify weather as a part of everyday life</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-cyan-500 mr-2 mt-0.5" />
                  <span>Learn basic weather vocabulary</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-cyan-500 mr-2 mt-0.5" />
                  <span>Use senses to observe and describe weather</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-cyan-500 mr-2 mt-0.5" />
                  <span>Create and use simple weather charts</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2">
          <Image
            src="/placeholder-kb1ik.png"
            alt="Kindergarten students observing weather"
            width={800}
            height={500}
            className="rounded-lg shadow-md object-cover h-[300px]"
          />
        </div>
        <div>
          <WeeklyOverview
            theme="Weather All Around Us"
            focusAreas={["Weather awareness", "Weather vocabulary", "Observation skills", "Weather reporting"]}
            vocabulary={[
              "weather",
              "sunny",
              "cloudy",
              "rainy",
              "windy",
              "snowy",
              "observe",
              "forecast",
              "temperature",
              "meteorologist",
            ]}
            color="blue"
          />
        </div>
      </div>

      <TeacherTip
        title="Setting Up Your Weather Station"
        tip="Create a dedicated weather observation area in your classroom with a window view. Include a daily weather chart, weather symbols, a simple thermometer, and a class weather journal. Designate a special helper each day to be the class 'meteorologist' who helps record the day's weather."
        color="blue"
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
              theme="What Is Weather?"
              morningActivity="Morning Circle: Introduce the concept of weather and why it's important"
              literacyFocus="Read 'Weather Words and What They Mean' by Gail Gibbons"
              mathFocus="Count and sort picture cards of different weather types"
              afternoonActivity="Create a class 'What Is Weather?' chart with drawings and dictated statements"
              materials={[
                "Weather Words book",
                "Picture cards of weather types",
                "Chart paper",
                "Art supplies",
                "Weather photographs",
              ]}
              assessmentNotes="Observe students' prior knowledge about weather and their ability to identify different types of weather in pictures."
              color="cyan"
            />
          </TabsContent>

          <TabsContent value="tuesday">
            <DailyPlan
              day="Tuesday"
              theme="Weather Watchers"
              morningActivity="Morning Circle: Discuss how we observe weather with our senses"
              literacyFocus="Read 'Little Cloud' by Eric Carle"
              mathFocus="Graph today's weather and compare with yesterday"
              afternoonActivity="Weather walk around the school to observe and record today's weather"
              materials={[
                "Little Cloud book",
                "Weather observation sheets",
                "Clipboards",
                "Pencils",
                "Simple graphing materials",
              ]}
              assessmentNotes="Note students' observational skills and their use of vocabulary to describe what they see, hear, and feel outside."
              color="cyan"
            />
          </TabsContent>

          <TabsContent value="wednesday">
            <DailyPlan
              day="Wednesday"
              theme="Weather Reporters"
              morningActivity="Morning Circle: Introduce the job of a meteorologist"
              literacyFocus="Read 'The Storm Book' by Charlotte Zolotow"
              mathFocus="Create and use simple tally marks for weather observations"
              afternoonActivity="Practice being weather reporters and recording today's weather"
              materials={[
                "The Storm Book",
                "Weather reporter badges",
                "Weather chart",
                "Microphone prop",
                "Camera (for taking photos of reporters)",
              ]}
              assessmentNotes="Observe students' ability to use weather vocabulary accurately and their comfort with reporting observations."
              color="cyan"
            />
          </TabsContent>

          <TabsContent value="thursday">
            <DailyPlan
              day="Thursday"
              theme="Weather in Our Lives"
              morningActivity="Morning Circle: Discuss how weather affects our daily activities"
              literacyFocus="Read 'Maisy's Wonderful Weather Book' by Lucy Cousins"
              mathFocus="Sort activities by weather type (indoor/outdoor activities for different weather)"
              afternoonActivity="Create a 'What We Do in Different Weather' class book"
              materials={[
                "Maisy's Wonderful Weather Book",
                "Sorting cards with activities",
                "Book-making materials",
                "Drawing supplies",
                "Weather symbols",
              ]}
              assessmentNotes="Note students' understanding of how weather affects daily activities and choices."
              color="cyan"
            />
          </TabsContent>

          <TabsContent value="friday">
            <DailyPlan
              day="Friday"
              theme="Our Weather Week"
              morningActivity="Morning Circle: Review the week's weather observations"
              literacyFocus="Read 'When the Wind Blew' by Pat Hutchins"
              mathFocus="Create a weather graph for the whole week and discuss patterns"
              afternoonActivity="Make individual weather journals for recording observations next week"
              materials={[
                "When the Wind Blew book",
                "Week's weather charts",
                "Weather journal materials",
                "Weather stickers",
                "Graphing materials",
              ]}
              assessmentNotes="Evaluate students' understanding of basic weather concepts and their ability to recall the week's weather patterns."
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
            title="Weather Sensory Bottles"
            description="Students create sensory bottles that represent different types of weather (blue with glitter for sunny, blue with cotton for cloudy, blue with sequins for rainy, etc.)."
            duration="40 minutes"
            materials={["Clear plastic bottles", "Water", "Food coloring", "Glitter", "Cotton balls", "Sequins"]}
            learningAreas={["Science", "Fine Motor", "Art"]}
            color="cyan"
          />

          <ActivityCard
            title="Weather Sounds Match"
            description="Students listen to recordings of different weather sounds (rain, thunder, wind) and match them to the correct weather pictures."
            duration="25 minutes"
            materials={["Weather sound recordings", "Weather picture cards", "Listening center", "Headphones"]}
            learningAreas={["Science", "Listening Skills", "Vocabulary"]}
            color="cyan"
          />

          <ActivityCard
            title="Cloud Watching"
            description="Students observe clouds (either outside or through pictures) and use descriptive language to talk about what they see."
            duration="30 minutes"
            materials={["Blue paper", "Cotton balls", "Glue", "Cloud pictures", "Observation sheets"]}
            learningAreas={["Science", "Language Arts", "Observation Skills"]}
            color="cyan"
          />

          <ActivityCard
            title="Weather Dress-Up Station"
            description="Students explore clothing appropriate for different weather conditions through a dramatic play weather station."
            duration="Ongoing center"
            materials={["Weather symbols", "Various clothing items", "Accessories for different weather", "Mirror"]}
            learningAreas={["Dramatic Play", "Life Skills", "Decision Making"]}
            color="cyan"
          />
        </div>
      </div>

      <TeacherTip
        title="Outdoor Weather Learning"
        tip="Weather is an ideal topic to take learning outdoors. Plan for short, focused outdoor observation periods throughout the week. Bring clipboards and simple recording sheets so students can document what they see, feel, and hear. Consider having a designated 'weather spot' on your playground that students visit each day to observe changes."
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
                <li>"Weather Words and What They Mean" by Gail Gibbons</li>
                <li>"Little Cloud" by Eric Carle</li>
                <li>"The Storm Book" by Charlotte Zolotow</li>
                <li>"Maisy's Wonderful Weather Book" by Lucy Cousins</li>
                <li>"When the Wind Blew" by Pat Hutchins</li>
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
                <li>Daily weather observation chart</li>
                <li>Weather picture cards</li>
                <li>Weather vocabulary cards</li>
                <li>Weather graphing templates</li>
                <li>Weather journal pages</li>
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
                Send home a family activity sheet that encourages parents/caregivers to talk about the weather each day
                with their child and help them notice how it affects their activities.
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
          <Link href="/curriculum/kindergarten/weather">Back to Weather Unit</Link>
        </Button>
        <Button asChild>
          <Link href="/curriculum/kindergarten/weather/week-2">Next Week: Types of Weather</Link>
        </Button>
      </div>
    </div>
  )
}
