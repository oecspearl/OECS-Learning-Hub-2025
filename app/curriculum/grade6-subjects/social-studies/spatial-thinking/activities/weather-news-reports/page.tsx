"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/breadcrumb"
import { Clock, Users, Target, BookOpen, CheckCircle, Star, Globe, Tv, FileText } from "lucide-react"

export default function WeatherNewsReportsPage() {
  const breadcrumbItems = [
    { label: "Curriculum", href: "/curriculum" },
    { label: "Grade 6", href: "/curriculum/grade6-subjects" },
    { label: "Social Studies", href: "/curriculum/grade6-subjects/social-studies" },
    { label: "Spatial Thinking", href: "/curriculum/grade6-subjects/social-studies/spatial-thinking" },
    { label: "Activities", href: "/curriculum/grade6-subjects/social-studies/spatial-thinking/activities" },
    {
      label: "Weather News Reports",
      href: "/curriculum/grade6-subjects/social-studies/spatial-thinking/activities/weather-news-reports",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Weather News Report Analysis and Creation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Students analyze real weather news reports and create their own broadcasts about extreme weather events and
            their impacts on communities
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Globe className="w-4 h-4" />
              Spatial Thinking
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              Collaborative Learning
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Tv className="w-4 h-4" />
              Media Literacy
            </Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-600" />
                Learning Objectives
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm">Analyze weather news reports for accuracy and bias</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm">Understand the impact of extreme weather on communities</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm">Create informative and engaging weather broadcasts</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm">Develop media literacy and critical thinking skills</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm">Practice public speaking and presentation skills</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-600" />
                Activity Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Duration:</span>
                <span>3-4 class periods (45 minutes each)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Group Size:</span>
                <span>3-4 students per team</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Difficulty:</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="w-4 h-4 text-gray-300" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Subject Integration:</span>
                <span>Language Arts, Science, Technology</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-green-600" />
              Materials Needed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Technology & Media:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Computers/tablets with internet access</li>
                  <li>• Video recording equipment (cameras/phones)</li>
                  <li>• Weather news clips and reports</li>
                  <li>• Weather data and maps</li>
                  <li>• Presentation software</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Physical Materials:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• News report analysis worksheets</li>
                  <li>• Script templates</li>
                  <li>• Props for weather broadcasts</li>
                  <li>• Weather maps and charts</li>
                  <li>• Evaluation rubrics</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Activity Procedure</CardTitle>
            <CardDescription>Step-by-step guide for implementing the weather news report activity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-3 text-blue-600">Phase 1: News Report Analysis (Day 1)</h4>
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Introduction and Setup (15 minutes)</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Discuss the role of weather reporting in society</li>
                    <li>• Introduce concepts of media literacy and bias</li>
                    <li>• Form analysis teams of 3-4 students</li>
                    <li>• Distribute analysis worksheets and guidelines</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">News Report Viewing and Analysis (25 minutes)</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Watch 3-4 different weather news reports about extreme events</li>
                    <li>• Include Caribbean hurricane reports and international examples</li>
                    <li>• Students analyze accuracy, language, visuals, and impact coverage</li>
                    <li>• Compare how different outlets report the same event</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Discussion and Reflection (5 minutes)</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Share initial observations about reporting differences</li>
                    <li>• Discuss what makes a good weather report</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3 text-green-600">Phase 2: Research and Planning (Day 2)</h4>
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Event Selection and Research (20 minutes)</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Teams choose an extreme weather event to report on</li>
                    <li>• Options: Caribbean hurricanes, droughts, floods, heat waves</li>
                    <li>• Research the event's causes, impacts, and community responses</li>
                    <li>• Gather accurate weather data and statistics</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Script Development (20 minutes)</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Create news report scripts using provided templates</li>
                    <li>• Include weather data, community impacts, and safety information</li>
                    <li>• Plan visual aids and props needed</li>
                    <li>• Assign roles: anchor, meteorologist, field reporter, etc.</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Rehearsal and Feedback (5 minutes)</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Practice script reading and timing</li>
                    <li>• Get peer feedback on clarity and accuracy</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3 text-purple-600">
                Phase 3: Production and Presentation (Days 3-4)
              </h4>
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Video Production (Day 3 - 35 minutes)</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Set up recording stations with weather maps and props</li>
                    <li>• Record news broadcasts with multiple takes if needed</li>
                    <li>• Include graphics, maps, and visual aids</li>
                    <li>• Ensure all team members have speaking roles</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Broadcast Viewing and Evaluation (Day 4 - 30 minutes)</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Watch all team broadcasts as a class</li>
                    <li>• Use evaluation rubrics to assess accuracy and presentation</li>
                    <li>• Provide constructive feedback on content and delivery</li>
                    <li>• Discuss what made each report effective</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Reflection and Extension (Day 4 - 15 minutes)</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Reflect on the news creation process</li>
                    <li>• Discuss media responsibility and accuracy</li>
                    <li>• Plan follow-up activities or real weather monitoring</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-orange-600" />
                Assessment Criteria
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Content Accuracy (25%)</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Correct weather data and terminology</li>
                  <li>• Accurate impact information</li>
                  <li>• Appropriate safety recommendations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Presentation Quality (25%)</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Clear speaking and professional delivery</li>
                  <li>• Effective use of visuals and props</li>
                  <li>• Engaging and informative format</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Analysis Skills (25%)</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Thoughtful analysis of existing reports</li>
                  <li>• Understanding of media bias and accuracy</li>
                  <li>• Critical evaluation of sources</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Collaboration (25%)</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Effective teamwork and role distribution</li>
                  <li>• Constructive peer feedback</li>
                  <li>• Shared responsibility for final product</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-600" />
                Extension Activities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Advanced Challenges</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Create a week-long weather forecast series</li>
                  <li>• Interview community members about weather impacts</li>
                  <li>• Compare international weather reporting styles</li>
                  <li>• Develop emergency preparedness segments</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Cross-Curricular Connections</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Science: Weather patterns and climate change</li>
                  <li>• Language Arts: Script writing and public speaking</li>
                  <li>• Technology: Video production and editing</li>
                  <li>• Mathematics: Weather data analysis and graphing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Community Connections</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Visit local weather station or TV studio</li>
                  <li>• Interview meteorologists or emergency managers</li>
                  <li>• Share reports with school community</li>
                  <li>• Create weather safety campaigns</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Caribbean Context and Cultural Connections</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Regional Weather Phenomena</h4>
              <p className="text-sm mb-2">Focus on weather events particularly relevant to Caribbean communities:</p>
              <ul className="space-y-1 text-sm">
                <li>• Hurricane season preparation and response</li>
                <li>• Drought impacts on agriculture and water supply</li>
                <li>• Flooding in coastal and urban areas</li>
                <li>• Heat waves and their health impacts</li>
                <li>• Seasonal weather patterns and tourism</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Traditional Knowledge Integration</h4>
              <ul className="space-y-1 text-sm">
                <li>• Include traditional weather prediction methods</li>
                <li>• Discuss indigenous adaptation strategies</li>
                <li>• Compare modern and traditional weather wisdom</li>
                <li>• Highlight community resilience practices</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
