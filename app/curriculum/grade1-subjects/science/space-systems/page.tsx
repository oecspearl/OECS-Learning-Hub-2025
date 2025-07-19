import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, Sun, Moon } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SpaceSystemsPage() {
  return (
    <div className="container mx-auto py-8">
      <Link href="/curriculum/grade1-subjects/science">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Grade 1 Science
        </Button>
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Space Systems: Patterns and Cycles</h1>
        <p className="text-gray-600 mb-4">
          This strand focuses on observable patterns in the sky, including the movement of the sun, moon, and stars.
          Students will learn how these patterns relate to day and night cycles and seasonal changes in daylight.
        </p>
      </div>

      <Tabs defaultValue="elo1" className="mb-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="elo1">Patterns in the Sky (ELO-1)</TabsTrigger>
          <TabsTrigger value="elo2">Daylight Patterns (ELO-2)</TabsTrigger>
        </TabsList>

        <TabsContent value="elo1">
          <Card>
            <CardHeader className="bg-blue-50">
              <CardTitle className="flex items-center gap-2">
                <Sun className="h-5 w-5 text-blue-600" />
                Use observations of the sun, moon, and stars to describe patterns that can be predicted
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Specific Curriculum Outcomes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-md">
                      <h4 className="font-medium text-blue-700 mb-2">Knowledge</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          Define terms: day, night, pattern, path, full moon, crescent moon, half moon, constellation,
                          astronomer
                        </li>
                        <li>Demonstrate understanding that the clock measures day and night patterns</li>
                        <li>Identify objects found in the day sky and night sky</li>
                        <li>Compare the position of the sun at different times of the day</li>
                        <li>Describe the different shapes of the moon at different times within a month</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-md">
                      <h4 className="font-medium text-green-700 mb-2">Skills</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Observe the day and night sky</li>
                        <li>Interpret pictures</li>
                        <li>Build communication skills by contributing to classroom discussions</li>
                        <li>Actively engage in discussion of teacher-led demonstrations</li>
                        <li>Draw the patterns of the moon over a period of time</li>
                        <li>Actively retrieve ideas from educational videos</li>
                        <li>Infer the time of day using the position of the sun</li>
                        <li>Collaborate with peers in projects</li>
                        <li>Keep track of position and shape of celestial bodies in a simple journal</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-md">
                      <h4 className="font-medium text-purple-700 mb-2">Attitudes/Values</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Appreciate how day and night influence activities and clothing</li>
                        <li>Display interest and curiosity in studying objects in the sky</li>
                        <li>Maintain safety when observing the sun and being exposed to sunlight</li>
                        <li>Work collaboratively in groups</li>
                        <li>Display sensitivity and offer assistance to peers with challenges</li>
                        <li>Participate willingly in classroom discussions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Inclusive Assessment Strategies</h3>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <span className="font-medium">Time of Day Recognition:</span> Show students pictures and ask
                        them to determine what time of day it is based on visual clues.
                      </li>
                      <li>
                        <span className="font-medium">Day/Night Activity Classification:</span> Present images of
                        activities and have students categorize them as typically day or night activities.
                      </li>
                      <li>
                        <span className="font-medium">Sky Object Drawing:</span> Have students create drawings of
                        objects they see in the day sky and night sky.
                      </li>
                      <li>
                        <span className="font-medium">Model Creation:</span> Ask students to create models of the sky
                        using available materials (cotton, styrofoam, construction paper) and share with peers.
                      </li>
                      <li>
                        <span className="font-medium">Earth-Sun Orientation Questions:</span> Assess understanding with
                        questions about when it's daytime in relation to the Earth's rotation.
                      </li>
                      <li>
                        <span className="font-medium">Moon Journal:</span> Have students keep a simple journal tracking
                        the shape of the moon over time, labeling phases (full, crescent, half moon).
                      </li>
                      <li>
                        <span className="font-medium">Constellation Connect-the-Dots:</span> Provide numbered dot
                        activities for students to create constellations while practicing counting and sequencing.
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Inclusive Learning Strategies</h3>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <span className="font-medium">Clock Pattern Discussion:</span> Explore how the clock helps us
                        track day and night patterns, discussing what happens at different hours.
                      </li>
                      <li>
                        <span className="font-medium">Earth Rotation Video:</span> Show students how day and night are
                        caused by Earth's rotation as the sun shines on it.
                      </li>
                      <li>
                        <span className="font-medium">Sun Position Tracking:</span> Have students observe and draw the
                        sun's position in relation to the school at different times of day.
                      </li>
                      <li>
                        <span className="font-medium">Sky Object Identification:</span> Discuss and draw objects visible
                        in the day sky versus night sky.
                      </li>
                      <li>
                        <span className="font-medium">Moon Phases Exploration:</span> Examine the different shapes of
                        the moon and teach terms like full, crescent, and half moon.
                      </li>
                      <li>
                        <span className="font-medium">Constellation Introduction:</span> Show students how stars form
                        patterns called constellations, using examples like the Big Dipper.
                      </li>
                      <li>
                        <span className="font-medium">Astronomer Role Discussion:</span> Explore what astronomers do
                        through books, videos, or guest speakers.
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Teacher Resources</h3>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Materials Needed:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Visual aids: Models of Earth and sun, clock faces, pictures of day/night activities</li>
                      <li>Tracking materials: Moon phase journal templates, shadow tracking worksheets</li>
                      <li>Interactive resources: Constellation connect-the-dots activities, day/night sorting games</li>
                      <li>Videos: Earth rotation demonstrations, solar system animations</li>
                      <li>Art supplies: Paper, cotton, styrofoam, construction paper, crayons for model creation</li>
                      <li>Illumination tools: Flashlights or torches for demonstrating light direction</li>
                    </ul>

                    <h4 className="font-medium mt-4 mb-2">Recommended Books:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>"The Moon Book" by Gail Gibbons</li>
                      <li>"What Makes Day and Night" by Franklyn M. Branley</li>
                      <li>"The Sun is My Favorite Star" by Frank Asch</li>
                      <li>"Find the Constellations" by H.A. Rey (simplified version for young readers)</li>
                    </ul>

                    <h4 className="font-medium mt-4 mb-2">Digital Resources:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>NASA Space Place website (section for kids)</li>
                      <li>PBS Learning Media: Day and Night interactive</li>
                      <li>Wonderwall interactive games for day/night sky identification</li>
                      <li>Simple moon phase tracker apps (teacher demonstration)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="elo2">
          <Card>
            <CardHeader className="bg-blue-50">
              <CardTitle className="flex items-center gap-2">
                <Moon className="h-5 w-5 text-blue-600" />
                Make observations at different times of the year to relate the amount of daylight to the time of year
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="bg-yellow-50 p-4 rounded-md mb-4">
                  <p className="text-sm italic">
                    Note: This ELO is covered briefly as an extension activity to make students aware that outside the
                    Caribbean region, seasonal temperature variations are larger due to the tilt of the earth.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Specific Curriculum Outcomes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-md">
                      <h4 className="font-medium text-blue-700 mb-2">Knowledge</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Recognize that daylight hours change throughout the year</li>
                        <li>Identify that some places have more dramatic changes in daylight hours than others</li>
                        <li>Understand that the Earth's tilt affects how much sunlight different places receive</li>
                        <li>
                          Recognize that the Caribbean has less variation in daylight hours than places far north or
                          south
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-md">
                      <h4 className="font-medium text-green-700 mb-2">Skills</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Compare daylight hours in different seasons</li>
                        <li>Interpret simple charts showing daylight hours</li>
                        <li>Discuss how daylight affects daily activities</li>
                        <li>Make simple observations about when the sun rises and sets</li>
                        <li>Communicate findings about daylight patterns</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-md">
                      <h4 className="font-medium text-purple-700 mb-2">Attitudes/Values</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Show curiosity about how daylight varies around the world</li>
                        <li>Appreciate how daylight affects people's lives differently in different places</li>
                        <li>Develop awareness of global differences in climate and daylight</li>
                        <li>Respect different cultural adaptations to daylight patterns</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Inclusive Assessment Strategies</h3>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <span className="font-medium">Daylight Chart Reading:</span> Show students simple charts of
                        daylight hours in different seasons and ask them to identify which season has more daylight.
                      </li>
                      <li>
                        <span className="font-medium">Global Comparison Discussion:</span> Show pictures of places with
                        extreme daylight differences (like Arctic regions) and have students discuss differences from
                        their own experience.
                      </li>
                      <li>
                        <span className="font-medium">Seasonal Activity Matching:</span> Have students match activities
                        to seasons based on available daylight.
                      </li>
                      <li>
                        <span className="font-medium">Simple Sunrise/Sunset Log:</span> For a week, have students note
                        (with help from parents) when they wake up and if it's light or dark, and when they go to bed
                        and if it's light or dark.
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Inclusive Learning Strategies</h3>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <span className="font-medium">Globe and Flashlight Demonstration:</span> Use a globe and
                        flashlight to show how the Earth's tilt affects sunlight distribution.
                      </li>
                      <li>
                        <span className="font-medium">Picture Book Exploration:</span> Read stories about places with
                        midnight sun or long winter nights.
                      </li>
                      <li>
                        <span className="font-medium">Daylight Comparison Chart:</span> Show a simple chart comparing
                        daylight hours in the Caribbean versus places far north or south.
                      </li>
                      <li>
                        <span className="font-medium">Video Clips:</span> Show short clips of how people adapt to
                        extreme daylight variations in places like Alaska or Norway.
                      </li>
                      <li>
                        <span className="font-medium">Cultural Discussion:</span> Talk about how different cultures
                        celebrate the changing seasons and daylight patterns.
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Teacher Resources</h3>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Materials Needed:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Globe and flashlight for Earth tilt demonstrations</li>
                      <li>Simple charts showing daylight hours in different seasons and locations</li>
                      <li>Pictures of activities in different daylight conditions</li>
                      <li>World map showing the equator and poles</li>
                    </ul>

                    <h4 className="font-medium mt-4 mb-2">Recommended Books:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>"Sunshine Makes the Seasons" by Franklyn M. Branley</li>
                      <li>"The Reasons for Seasons" by Gail Gibbons (simplified for Grade 1)</li>
                      <li>"A Year Around the Great Oak" by Gerda Muller</li>
                    </ul>

                    <h4 className="font-medium mt-4 mb-2">Digital Resources:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Simple daylight calculator websites (teacher demonstration only)</li>
                      <li>NASA videos about seasons (simplified for young learners)</li>
                      <li>Time-lapse videos of day length changes throughout the year</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Subject Integration</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Mathematics</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Naming days of the week in order</li>
              <li>Using numbers to interpret charts</li>
              <li>Using time vocabulary appropriately</li>
              <li>Connect-the-dots activities for constellations</li>
              <li>Measuring shadows at different times of day</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Language Arts</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Using strategies when listening to information</li>
              <li>Identifying order of events in day/night cycles</li>
              <li>Describing sky objects with relevant details</li>
              <li>Using newly acquired vocabulary like "constellation"</li>
              <li>Writing simple journal entries about observations</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Social Studies</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Sharing ideas in group activities</li>
              <li>Participating in group activities willingly</li>
              <li>Understanding cultural uses of sky observations</li>
              <li>Learning how different cultures interpret sky patterns</li>
              <li>Discussing how day/night affects community activities</li>
            </ul>
          </div>
        </div>

        <h3 className="font-semibold mt-6 mb-2">Local Culture Connections</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>River activities on sunny days (weekend/holiday gatherings)</li>
          <li>Washing clothes by the river and drying on stones/lines in sunlight</li>
          <li>Drying fish and meats for preservation using sunlight</li>
          <li>Drying cashew nuts and other foods on sunny days</li>
          <li>Telling folk tales at night with family gatherings</li>
          <li>Using moon phases for planting according to traditional almanacs</li>
          <li>Traditional practices like selecting dates for haircuts or piercings based on moon phases</li>
          <li>Local knowledge from fisherfolk and farmers about using the sun to tell time</li>
        </ul>
      </div>
    </div>
  )
}
