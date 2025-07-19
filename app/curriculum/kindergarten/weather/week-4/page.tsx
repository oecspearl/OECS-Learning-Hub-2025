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

export default function WeatherUnitWeek4() {
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
          <h1 className="text-3xl font-bold mb-4 text-amber-700">Week 4: Weather and Our Lives</h1>
          <div className="bg-amber-50 p-4 rounded-lg mb-6">
            <h2 className="text-xl font-semibold mb-2 text-amber-700">Weekly Focus</h2>
            <p>
              Children explore how weather affects our daily lives, including what we wear, activities we do, how we
              feel, and how we stay safe in different weather conditions.
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
                  <span>Connect weather conditions to appropriate clothing choices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                  <span>Identify activities for different weather conditions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                  <span>Understand basic weather safety</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                  <span>Explore how weather affects feelings and emotions</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2">
          <Image
            src="/kindergarten-weather-clothing.png"
            alt="Kindergarten students learning about weather-appropriate clothing"
            width={800}
            height={500}
            className="rounded-lg shadow-md object-cover h-[300px]"
          />
        </div>
        <div>
          <WeeklyOverview
            theme="Weather and Our Lives"
            focusAreas={[
              "Weather-appropriate clothing",
              "Weather-based activities",
              "Weather safety",
              "Weather and emotions",
            ]}
            vocabulary={[
              "appropriate",
              "protect",
              "safety",
              "indoor",
              "outdoor",
              "shelter",
              "prepare",
              "comfortable",
              "mood",
              "choice",
            ]}
            color="orange"
          />
        </div>
      </div>

      <TeacherTip
        title="Weather Feelings Connection"
        tip="Help children understand the connection between weather and emotions by creating a 'Weather and Feelings' chart. Discuss how sunny days might make us feel happy and energetic, while rainy days might make us feel calm or sleepy. Emphasize that all feelings are valid, and different people might feel differently about the same weather."
        color="orange"
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
              theme="Dressing for the Weather"
              morningActivity="Morning Circle: Discuss how weather affects what we wear"
              literacyFocus="Read 'Froggy Gets Dressed' by Jonathan London"
              mathFocus="Sort clothing items by weather type"
              afternoonActivity="Weather dress-up station and clothing categorization"
              materials={[
                "Froggy Gets Dressed book",
                "Various clothing items",
                "Weather symbol cards",
                "Sorting mats",
                "Paper dolls with weather-appropriate clothing",
              ]}
              assessmentNotes="Observe students' understanding of appropriate clothing choices for different weather conditions."
              color="amber"
            />
          </TabsContent>

          <TabsContent value="tuesday">
            <DailyPlan
              day="Tuesday"
              theme="Weather and Activities"
              morningActivity="Morning Circle: Explore activities for different weather conditions"
              literacyFocus="Read 'Come On, Rain!' by Karen Hesse"
              mathFocus="Create a class graph of favorite rainy day vs. sunny day activities"
              afternoonActivity="Create an 'Activities Wheel' with indoor and outdoor options for different weather"
              materials={[
                "Come On, Rain! book",
                "Graphing materials",
                "Activity picture cards",
                "Paper plates for wheels",
                "Brads/fasteners",
                "Art supplies",
              ]}
              assessmentNotes="Note students' ability to match appropriate activities to weather conditions and their reasoning."
              color="amber"
            />
          </TabsContent>

          <TabsContent value="wednesday">
            <DailyPlan
              day="Wednesday"
              theme="Weather Safety"
              morningActivity="Morning Circle: Discuss weather safety and preparedness"
              literacyFocus="Read 'Thunder Cake' by Patricia Polacco"
              mathFocus="Count items needed for a weather safety kit"
              afternoonActivity="Practice weather safety procedures through dramatic play"
              materials={[
                "Thunder Cake book",
                "Weather safety items",
                "Counting mats",
                "Safety procedure cards",
                "Props for dramatic play",
              ]}
              assessmentNotes="Observe students' understanding of basic weather safety concepts and procedures."
              color="amber"
            />
          </TabsContent>

          <TabsContent value="thursday">
            <DailyPlan
              day="Thursday"
              theme="Weather and Feelings"
              morningActivity="Morning Circle: Explore how weather affects our moods and feelings"
              literacyFocus="Read 'Cloudy With a Chance of Meatballs' by Judi Barrett"
              mathFocus="Create a feelings graph related to different weather types"
              afternoonActivity="Weather and feelings art project"
              materials={[
                "Cloudy With a Chance of Meatballs book",
                "Feelings chart",
                "Weather pictures",
                "Graphing materials",
                "Art supplies",
              ]}
              assessmentNotes="Note students' ability to express and recognize emotions related to different weather conditions."
              color="amber"
            />
          </TabsContent>

          <TabsContent value="friday">
            <DailyPlan
              day="Friday"
              theme="Weather Around the World"
              morningActivity="Morning Circle: Explore how weather differs around the world"
              literacyFocus="Read 'On the Same Day in March' by Marilyn Singer"
              mathFocus="Compare temperatures in different places using simple charts"
              afternoonActivity="Create a collaborative world weather mural"
              materials={[
                "On the Same Day in March book",
                "World map or globe",
                "Temperature comparison cards",
                "Large paper for mural",
                "Art supplies",
              ]}
              assessmentNotes="Evaluate students' understanding that weather can be different in different places at the same time."
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
            title="Weather Dress-Up Relay"
            description="Teams race to select and put on appropriate clothing for a specific weather condition."
            duration="30 minutes"
            materials={[
              "Weather cards",
              "Various clothing items",
              "Bins or baskets",
              "Timer",
              "Open space for movement",
            ]}
            learningAreas={["Physical Education", "Decision Making", "Weather Knowledge"]}
            color="orange"
          />

          <ActivityCard
            title="Weather Safety Scenarios"
            description="Students discuss and act out appropriate responses to different weather safety scenarios."
            duration="25 minutes"
            materials={["Scenario cards", "Props", "Safety item pictures", "Discussion prompts"]}
            learningAreas={["Social-Emotional", "Safety Skills", "Problem Solving"]}
            color="orange"
          />

          <ActivityCard
            title="Weather Mood Paintings"
            description="Students create artwork that expresses how different types of weather make them feel."
            duration="40 minutes"
            materials={["Watercolor paints", "Paper", "Brushes", "Weather and mood picture prompts"]}
            learningAreas={["Art", "Emotional Awareness", "Self-Expression"]}
            color="orange"
          />

          <ActivityCard
            title="Weather Clothing Sort"
            description="Students sort clothing items into categories based on appropriate weather conditions."
            duration="20 minutes"
            materials={["Clothing picture cards", "Weather symbol cards", "Sorting mats", "Pocket chart"]}
            learningAreas={["Critical Thinking", "Classification", "Life Skills"]}
            color="orange"
          />
        </div>
      </div>

      <TeacherTip
        title="Weather Dramatic Play"
        tip="Set up a weather-themed dramatic play area with clothing for different weather conditions, props like umbrellas and sunglasses, and weather symbols. Include a 'weather report' station where children can practice being meteorologists and recommending appropriate clothing and activities. This encourages vocabulary development, role-playing, and practical application of weather knowledge."
        color="orange"
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
                <li>"Froggy Gets Dressed" by Jonathan London</li>
                <li>"Come On, Rain!" by Karen Hesse</li>
                <li>"Thunder Cake" by Patricia Polacco</li>
                <li>"Cloudy With a Chance of Meatballs" by Judi Barrett</li>
                <li>"On the Same Day in March" by Marilyn Singer</li>
              </ul>
              <Button variant="outline" className="mt-4 w-full border-amber-500 text-amber-700 hover:bg-amber-50">
                <Download className="mr-2 h-4 w-4" /> Book List PDF
              </Button>
            </CardContent>
          </Card>

          <Card className="border-amber-200">
            <CardHeader className="bg-amber-50 border-b border-amber-100">
              <CardTitle className="text-amber-700">Printables</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-2">
                <li>Weather clothing matching cards</li>
                <li>Weather safety scenario cards</li>
                <li>Weather and feelings chart</li>
                <li>Weather activities sorting game</li>
                <li>Paper dolls with weather clothing</li>
              </ul>
              <Button variant="outline" className="mt-4 w-full border-amber-500 text-amber-700 hover:bg-amber-50">
                <Printer className="mr-2 h-4 w-4" /> Print Materials
              </Button>
            </CardContent>
          </Card>

          <Card className="border-amber-200">
            <CardHeader className="bg-amber-50 border-b border-amber-100">
              <CardTitle className="text-amber-700">Home Connection</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="mb-4">
                Send home a "Weather Preparedness" checklist for families to review together. Include items to have on
                hand for different weather conditions and simple safety procedures to practice at home.
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
          <Link href="/curriculum/kindergarten/weather/week-3">Previous Week: Weather and Seasons</Link>
        </Button>
        <Button asChild>
          <Link href="/curriculum/kindergarten/weather/week-5">Next Week: Weather Watchers</Link>
        </Button>
      </div>
    </div>
  )
}
