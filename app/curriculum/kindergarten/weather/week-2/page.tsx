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

export default function WeatherUnitWeek2() {
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
          <h1 className="text-3xl font-bold mb-4 text-blue-700">Week 2: Types of Weather</h1>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h2 className="text-xl font-semibold mb-2 text-blue-700">Weekly Focus</h2>
            <p>
              Children explore different types of weather (sunny, rainy, cloudy, windy, and snowy) through hands-on
              activities, experiments, and focused observation.
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
                  <span>Identify and describe different types of weather</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <span>Explore the characteristics of each weather type</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <span>Conduct simple weather experiments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <span>Create art based on different weather types</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2">
          <Image
            src="/kindergarten-rainy-day.png"
            alt="Kindergarten students exploring rain weather"
            width={800}
            height={500}
            className="rounded-lg shadow-md object-cover h-[300px]"
          />
        </div>
        <div>
          <WeeklyOverview
            theme="Types of Weather"
            focusAreas={["Sunny weather", "Rainy weather", "Cloudy weather", "Windy weather", "Snowy weather"]}
            vocabulary={[
              "sunshine",
              "precipitation",
              "raindrops",
              "clouds",
              "wind",
              "snow",
              "storm",
              "thunder",
              "lightning",
              "temperature",
            ]}
            color="blue"
          />
        </div>
      </div>

      <TeacherTip
        title="Weather Experiments"
        tip="For each type of weather this week, include a simple experiment or demonstration. For example, use a hair dryer on low setting (at a safe distance) to demonstrate wind's effect on lightweight objects. Create raindrops on wax paper to show water tension. Use cotton balls for cloud formations. These hands-on experiences help make abstract weather concepts more concrete."
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
              theme="Sunny Days"
              morningActivity="Morning Circle: Discuss characteristics of sunny weather"
              literacyFocus="Read 'The Sun Is My Favorite Star' by Frank Asch"
              mathFocus="Chart and count sunny days this month using weather journal data"
              afternoonActivity="Sun prints art project (using construction paper and small objects)"
              materials={[
                "The Sun Is My Favorite Star book",
                "Construction paper",
                "Small objects for sun prints",
                "Yellow and orange art supplies",
                "Weather journals",
              ]}
              assessmentNotes="Observe students' understanding of sunny weather characteristics and their ability to describe how sunshine affects objects and people."
              color="blue"
            />
          </TabsContent>

          <TabsContent value="tuesday">
            <DailyPlan
              day="Tuesday"
              theme="Rainy Days"
              morningActivity="Morning Circle: Explore characteristics of rainy weather"
              literacyFocus="Read 'Rain' by Robert Kalan"
              mathFocus="Measure water in rain gauges (using clear containers and simulated rain)"
              afternoonActivity="Create raindrop art using eyedroppers and blue watercolors"
              materials={[
                "Rain book",
                "Clear containers for rain gauges",
                "Watering can for simulated rain",
                "Eyedroppers",
                "Blue watercolor paints",
                "Watercolor paper",
              ]}
              assessmentNotes="Note students' understanding of rain, its characteristics, and their ability to discuss the water cycle at a basic level."
              color="blue"
            />
          </TabsContent>

          <TabsContent value="wednesday">
            <DailyPlan
              day="Wednesday"
              theme="Cloudy Days"
              morningActivity="Morning Circle: Discuss cloud formations and types"
              literacyFocus="Read 'It Looked Like Spilt Milk' by Charles G. Shaw"
              mathFocus="Sort and classify different cloud pictures by type"
              afternoonActivity="Create cotton ball cloud art and cloud shapes"
              materials={[
                "It Looked Like Spilt Milk book",
                "Cloud pictures",
                "Cotton balls",
                "Blue paper",
                "Glue",
                "Cloud classification cards (simple versions)",
              ]}
              assessmentNotes="Observe students' ability to identify different cloud types and understand that clouds are made of water droplets."
              color="blue"
            />
          </TabsContent>

          <TabsContent value="thursday">
            <DailyPlan
              day="Thursday"
              theme="Windy Days"
              morningActivity="Morning Circle: Explore how wind moves things"
              literacyFocus="Read 'I Face the Wind' by Vicki Cobb"
              mathFocus="Predict and test which objects will move in wind (light vs. heavy)"
              afternoonActivity="Create and test simple pinwheels and wind socks"
              materials={[
                "I Face the Wind book",
                "Objects of different weights",
                "Fan for creating wind",
                "Pinwheel materials",
                "Wind sock materials",
              ]}
              assessmentNotes="Note students' understanding of wind as moving air and their ability to predict how wind affects objects of different weights."
              color="blue"
            />
          </TabsContent>

          <TabsContent value="friday">
            <DailyPlan
              day="Friday"
              theme="Snowy Days"
              morningActivity="Morning Circle: Explore characteristics of snow and ice"
              literacyFocus="Read 'The Snowy Day' by Ezra Jack Keats"
              mathFocus="Compare and measure ice and water (solid vs. liquid)"
              afternoonActivity="Create paper snowflakes and fake snow sensory experience"
              materials={[
                "The Snowy Day book",
                "Ice cubes",
                "Measuring tools",
                "Paper for snowflakes",
                "Scissors",
                "Fake snow (baking soda and conditioner)",
                "Sensory bins",
              ]}
              assessmentNotes="Evaluate students' understanding of snow as frozen water and their ability to describe properties of snow/ice versus water."
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
            title="Rainbow in a Jar"
            description="Students observe how light from the sun can create rainbows using water and mirrors."
            duration="30 minutes"
            materials={["Clear glass jar", "Water", "Small mirror", "White paper", "Flashlight (if no direct sun)"]}
            learningAreas={["Science", "Light Properties", "Weather Phenomena"]}
            color="blue"
          />

          <ActivityCard
            title="Make It Rain"
            description="A demonstration that shows how clouds become heavy with water and produce rain."
            duration="20 minutes"
            materials={["Clear jar", "Water", "Shaving cream", "Blue food coloring", "Dropper"]}
            learningAreas={["Science", "Water Cycle", "Observation Skills"]}
            color="blue"
          />

          <ActivityCard
            title="Wind Power Race"
            description="Students create and race paper boats or lightweight objects using their breath as wind power."
            duration="35 minutes"
            materials={["Construction paper", "Straws", "Tape", "Small lightweight objects", "Race track setup"]}
            learningAreas={["Science", "Engineering", "Cause and Effect"]}
            color="blue"
          />

          <ActivityCard
            title="Weather Sound Station"
            description="Students create instruments that mimic different weather sounds (rain sticks, thunder drums, wind whistles)."
            duration="45 minutes"
            materials={["Paper tubes", "Rice/beans", "Empty containers", "Rubber bands", "Craft supplies"]}
            learningAreas={["Science", "Music", "Sensory Skills"]}
            color="blue"
          />
        </div>
      </div>

      <TeacherTip
        title="Weather Dramatic Play"
        tip="Set up a weather forecasting station in your dramatic play area. Include props such as maps, pointers, microphones, weather symbols, and dress-up clothes. Encourage students to take turns being the weather reporter, while others can be camera operators, directors, or audience members. This activity reinforces weather vocabulary and builds confidence in public speaking."
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
                <li>"The Sun Is My Favorite Star" by Frank Asch</li>
                <li>"Rain" by Robert Kalan</li>
                <li>"It Looked Like Spilt Milk" by Charles G. Shaw</li>
                <li>"I Face the Wind" by Vicki Cobb</li>
                <li>"The Snowy Day" by Ezra Jack Keats</li>
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
                <li>Weather type sorting cards</li>
                <li>Weather experiment instruction sheets</li>
                <li>Simple cloud identification guide</li>
                <li>Weather sounds matching game</li>
                <li>Weather craft templates</li>
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
                Send home a weather scavenger hunt for families to complete together. Include items to find or observe
                for each type of weather, such as puddles after rain, shadows on sunny days, or moving tree branches on
                windy days.
              </p>
              <Button variant="outline" className="w-full border-blue-500 text-blue-700 hover:bg-blue-50">
                <Download className="mr-2 h-4 w-4" /> Family Activity
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/curriculum/kindergarten/weather/week-1">Previous Week: Weather All Around Us</Link>
        </Button>
        <Button asChild>
          <Link href="/curriculum/kindergarten/weather/week-3">Next Week: Weather and Seasons</Link>
        </Button>
      </div>
    </div>
  )
}
