import { Breadcrumb } from "@/components/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Clock,
  Calendar,
  Lightbulb,
  Download,
  CheckCircle2,
  Printer,
  ChevronLeft,
  CloudSun,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TeacherTip } from "@/components/teacher-tip"
import { ActivityCard } from "@/components/activity-card"
import { WeeklyOverview } from "@/components/weekly-overview"
import { DailyPlan } from "@/components/daily-plan"

export default function WeatherUnitWeek5() {
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
          <h1 className="text-3xl font-bold mb-4 text-purple-700">Week 5: Weather Watchers</h1>
          <div className="bg-purple-50 p-4 rounded-lg mb-6">
            <h2 className="text-xl font-semibold mb-2 text-purple-700">Weekly Focus</h2>
            <p>
              Children learn to observe, measure, and predict weather using simple tools and patterns, culminating in
              becoming weather reporters who can share forecasts with others.
            </p>
          </div>
        </div>
        <div className="md:w-1/3">
          <Card className="border-purple-200 shadow-md">
            <CardHeader className="bg-purple-50 border-b border-purple-100">
              <CardTitle className="flex items-center text-purple-700">
                <Clock className="mr-2 h-5 w-5" /> Week at a Glance
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                  <span>Use simple weather tools to gather data</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                  <span>Identify patterns in weather observations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                  <span>Make simple weather predictions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                  <span>Communicate weather information to others</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2">
          <Image
            src="/kindergarten-weather-tools.png"
            alt="Kindergarten students using simple weather tools"
            width={800}
            height={500}
            className="rounded-lg shadow-md object-cover h-[300px]"
          />
        </div>
        <div>
          <WeeklyOverview
            theme="Weather Watchers"
            focusAreas={["Weather tools", "Data collection", "Weather patterns", "Weather forecasting"]}
            vocabulary={[
              "predict",
              "forecast",
              "measure",
              "record",
              "observe",
              "thermometer",
              "wind vane",
              "rain gauge",
              "meteorologist",
              "pattern",
            ]}
            color="purple"
          />
        </div>
      </div>

      <TeacherTip
        title="Creating Weather Tools"
        tip="Make simple weather tools with your students to enhance engagement. Create wind socks using tissue paper and paper cups, rain gauges using clear plastic bottles with measurement marks, and wind vanes using straws, paper, and pushpins. When children help create the tools, they develop a deeper understanding of how they work and what they measure."
        color="purple"
      />

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-700 flex items-center">
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
              theme="Weather Tools"
              morningActivity="Morning Circle: Introduce weather tools and their purposes"
              literacyFocus="Read 'Freddy the Frogcaster' by Janice Dean"
              mathFocus="Match weather tools to what they measure"
              afternoonActivity="Create simple weather tools (wind sock, rain gauge)"
              materials={[
                "Freddy the Frogcaster book",
                "Pictures of weather tools",
                "Materials for wind sock (tissue paper, cups, string)",
                "Materials for rain gauge (plastic bottles, rulers)",
                "Weather tool cards",
              ]}
              assessmentNotes="Observe students' understanding of different weather tools and their purposes."
              color="purple"
            />
          </TabsContent>

          <TabsContent value="tuesday">
            <DailyPlan
              day="Tuesday"
              theme="Collecting Weather Data"
              morningActivity="Morning Circle: Practice using weather tools to collect data"
              literacyFocus="Read 'Oh Say Can You Say What's the Weather Today?' by Tish Rabe"
              mathFocus="Create simple weather data charts and graphs"
              afternoonActivity="Weather observation stations around the school grounds"
              materials={[
                "Oh Say Can You Say What's the Weather Today? book",
                "Student-made weather tools",
                "Clipboards",
                "Weather observation sheets",
                "Chart paper",
              ]}
              assessmentNotes="Note students' ability to use tools appropriately and record simple weather data."
              color="purple"
            />
          </TabsContent>

          <TabsContent value="wednesday">
            <DailyPlan
              day="Wednesday"
              theme="Weather Patterns"
              morningActivity="Morning Circle: Look for patterns in collected weather data"
              literacyFocus="Read 'The Meteorologist in Me' by Brittney Shipp"
              mathFocus="Create a weather pattern chart using the week's observations"
              afternoonActivity="Weather pattern movement activity and games"
              materials={[
                "The Meteorologist in Me book",
                "Weather data from previous days",
                "Pattern cards",
                "Chart paper",
                "Weather symbols",
                "Open space for movement",
              ]}
              assessmentNotes="Observe students' ability to identify simple patterns in weather data and make connections."
              color="purple"
            />
          </TabsContent>

          <TabsContent value="thursday">
            <DailyPlan
              day="Thursday"
              theme="Weather Predictions"
              morningActivity="Morning Circle: Learn how to make simple weather predictions"
              literacyFocus="Read 'Will It Rain or Snow?' by Melissa Stewart"
              mathFocus="Use data to predict tomorrow's weather and create a probability graph"
              afternoonActivity="Create a class weather prediction chart for the next day"
              materials={[
                "Will It Rain or Snow? book",
                "Weather data charts",
                "Prediction cards",
                "Weather symbols",
                "Chart paper",
              ]}
              assessmentNotes="Note students' reasoning skills when making weather predictions based on patterns and current conditions."
              color="purple"
            />
          </TabsContent>

          <TabsContent value="friday">
            <DailyPlan
              day="Friday"
              theme="Weather Reporters"
              morningActivity="Morning Circle: Review the entire Weather unit"
              literacyFocus="Read 'National Geographic Kids: Weather' by Kristin Baird Rattini"
              mathFocus="Evaluate prediction accuracy from previous day"
              afternoonActivity="Weather reporter presentations and weather unit celebration"
              materials={[
                "National Geographic Kids: Weather book",
                "Microphones (real or pretend)",
                "Weather maps",
                "Reporter props",
                "Video camera (optional)",
                "Weather-themed snacks",
              ]}
              assessmentNotes="Evaluate students' overall understanding of weather concepts and their ability to communicate weather information."
              color="purple"
            />
          </TabsContent>
        </Tabs>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-700 flex items-center">
          <Lightbulb className="mr-2 h-6 w-6" /> Featured Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ActivityCard
            title="Make a Rain Gauge"
            description="Students create simple rain gauges using plastic bottles and rulers to measure rainfall."
            duration="35 minutes"
            materials={[
              "Clear plastic bottles",
              "Rulers",
              "Permanent markers",
              "Scissors",
              "Stones for bottle bottom",
              "Water for testing",
            ]}
            learningAreas={["Science", "Measurement", "Engineering"]}
            color="purple"
          />

          <ActivityCard
            title="Weather Prediction Game"
            description="Students use clue cards to predict weather conditions in a fun, interactive game format."
            duration="25 minutes"
            materials={["Weather clue cards", "Weather condition cards", "Game board", "Weather symbols"]}
            learningAreas={["Critical Thinking", "Prediction Skills", "Weather Knowledge"]}
            color="purple"
          />

          <ActivityCard
            title="Weather Reporter Studio"
            description="Students take turns being weather reporters, using maps and props to deliver weather forecasts."
            duration="40 minutes"
            materials={[
              "Weather maps",
              "Microphone prop",
              "Pointer",
              "Weather symbol cards",
              "Video camera (optional)",
            ]}
            learningAreas={["Speaking Skills", "Confidence Building", "Weather Vocabulary"]}
            color="purple"
          />

          <ActivityCard
            title="Cloud Watchers"
            description="Students observe clouds, record their observations, and use cloud charts to predict possible weather changes."
            duration="30 minutes"
            materials={[
              "Cloud observation sheets",
              "Simple cloud identification charts",
              "Clipboards",
              "Blue paper",
              "Cotton balls",
              "Glue",
            ]}
            learningAreas={["Observation Skills", "Classification", "Weather Prediction"]}
            color="purple"
          />
        </div>
      </div>

      <TeacherTip
        title="Technology Integration"
        tip="If available, use a simple weather app on a classroom tablet or computer to compare students' predictions with professional forecasts. This helps children understand that meteorologists use more sophisticated tools but follow the same basic process of observation and pattern recognition that they've been practicing."
        color="purple"
      />

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-700 flex items-center">
          <BookOpen className="mr-2 h-6 w-6" /> Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-purple-200">
            <CardHeader className="bg-purple-50 border-b border-purple-100">
              <CardTitle className="text-purple-700">Books</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-2">
                <li>"Freddy the Frogcaster" by Janice Dean</li>
                <li>"Oh Say Can You Say What's the Weather Today?" by Tish Rabe</li>
                <li>"The Meteorologist in Me" by Brittney Shipp</li>
                <li>"Will It Rain or Snow?" by Melissa Stewart</li>
                <li>"National Geographic Kids: Weather" by Kristin Baird Rattini</li>
              </ul>
              <Button variant="outline" className="mt-4 w-full border-purple-500 text-purple-700 hover:bg-purple-50">
                <Download className="mr-2 h-4 w-4" /> Book List PDF
              </Button>
            </CardContent>
          </Card>

          <Card className="border-purple-200">
            <CardHeader className="bg-purple-50 border-b border-purple-100">
              <CardTitle className="text-purple-700">Printables</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-2">
                <li>Weather tool instruction cards</li>
                <li>Weather observation recording sheets</li>
                <li>Simple weather maps</li>
                <li>Weather prediction templates</li>
                <li>Weather reporter scripts</li>
              </ul>
              <Button variant="outline" className="mt-4 w-full border-purple-500 text-purple-700 hover:bg-purple-50">
                <Printer className="mr-2 h-4 w-4" /> Print Materials
              </Button>
            </CardContent>
          </Card>

          <Card className="border-purple-200">
            <CardHeader className="bg-purple-50 border-b border-purple-100">
              <CardTitle className="text-purple-700">Home Connection</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="mb-4">
                Send home instructions for creating a simple family weather journal. Encourage families to record the
                weather each day for a week and discuss any patterns they notice.
              </p>
              <Button variant="outline" className="w-full border-purple-500 text-purple-700 hover:bg-purple-50">
                <Download className="mr-2 h-4 w-4" /> Family Activity
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-700 flex items-center">
          <CloudSun className="mr-2 h-6 w-6" /> Unit Reflection
        </h2>
        <Card className="border-purple-200">
          <CardHeader className="bg-purple-50 border-b border-purple-100">
            <CardTitle className="text-purple-700">Weather Unit Wrap-Up</CardTitle>
            <CardDescription>Reflecting on our journey through weather exploration</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="mb-4">
              As we complete the Weather unit, help students make connections between all five weeks of learning. Create
              a visual journey showing how we've expanded our understanding from:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center">
                <Badge className="mr-2 bg-cyan-100 text-cyan-700 hover:bg-cyan-100">Week 1</Badge>
                <span>Weather All Around Us (basic awareness and vocabulary)</span>
              </li>
              <li className="flex items-center">
                <Badge className="mr-2 bg-blue-100 text-blue-700 hover:bg-blue-100">Week 2</Badge>
                <span>Types of Weather (exploring different weather conditions)</span>
              </li>
              <li className="flex items-center">
                <Badge className="mr-2 bg-green-100 text-green-700 hover:bg-green-100">Week 3</Badge>
                <span>Weather and Seasons (seasonal weather patterns)</span>
              </li>
              <li className="flex items-center">
                <Badge className="mr-2 bg-amber-100 text-amber-700 hover:bg-amber-100">Week 4</Badge>
                <span>Weather and Our Lives (how weather affects us)</span>
              </li>
              <li className="flex items-center">
                <Badge className="mr-2 bg-purple-100 text-purple-700 hover:bg-purple-100">Week 5</Badge>
                <span>Weather Watchers (observing and predicting weather)</span>
              </li>
            </ul>
            <p>
              Consider creating a class book or display that showcases student work from each week, demonstrating how
              their understanding of weather has grown from basic awareness to active observation and prediction.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/curriculum/kindergarten/weather/week-4">Previous Week: Weather and Our Lives</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/curriculum/kindergarten/weather/resources">Unit Resources</Link>
        </Button>
      </div>
    </div>
  )
}
