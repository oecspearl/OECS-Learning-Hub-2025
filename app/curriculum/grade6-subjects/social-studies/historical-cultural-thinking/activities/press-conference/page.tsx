import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Clock, Users, Mic, CheckCircle, AlertCircle, Lightbulb, UserCheck } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function PressConferencePage() {
  return (
    <div className="container mx-auto py-8">
            <Link href="/curriculum/grade6-subjects/social-studies/historical-cultural-thinking/activities">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Activities
        </Button>
      </Link>

      <div className="mb-8">
        <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-orange-700 flex items-center">
            <Mic className="mr-2 h-7 w-7 text-orange-600" />
            Interactive Press Conference - East Indian Indentureship
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary" className="flex items-center">
              <Clock className="mr-1 h-3 w-3" />
              45 minutes
            </Badge>
            <Badge variant="secondary" className="flex items-center">
              <Users className="mr-1 h-3 w-3" />
              Whole Class
            </Badge>
            <Badge variant="outline">Role-Play Interview</Badge>
          </div>
          <p className="text-gray-700">
            Teacher role-plays as an elderly Indian indentured servant while students conduct a press conference,
            learning about the indentureship experience through authentic dialogue.
          </p>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="procedure">Procedure</TabsTrigger>
          <TabsTrigger value="materials">Materials & Setup</TabsTrigger>
          <TabsTrigger value="assessment">Assessment</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-orange-700">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Learning Objectives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Understand the experiences of East Indian indentured servants
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Develop questioning and interviewing skills
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Practice active listening and empathy
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Learn about cultural adaptation and preservation
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Explore historical perspectives through role-play
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-orange-700">
                  <Lightbulb className="mr-2 h-5 w-5" />
                  Key Historical Context
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-orange-600">Indentureship Period</h4>
                    <p className="text-sm text-gray-600">1838-1917: Contract labor system after slavery ended</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600">Journey Experience</h4>
                    <p className="text-sm text-gray-600">Long sea voyage from India to Caribbean colonies</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600">Working Conditions</h4>
                    <p className="text-sm text-gray-600">Plantation labor, housing, and daily life challenges</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600">Cultural Preservation</h4>
                    <p className="text-sm text-gray-600">Maintaining traditions, language, and religious practices</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="procedure">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-orange-700">Step-by-Step Procedure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-orange-700 mb-2">1. Character Introduction (10 minutes)</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Teacher enters in character as elderly East Indian person</li>
                      <li>• Introduce character: "My name is Kamala/Ravi, I am 85 years old"</li>
                      <li>• Brief background: "I came to Trinidad as a young person from India"</li>
                      <li>• Set the scene: "I'm here to share my story with you young reporters"</li>
                      <li>• Establish respectful interview atmosphere</li>
                      <li>• Explain that students will ask questions to learn about the experience</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-blue-700 mb-2">2. Press Conference Setup (5 minutes)</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Students become "reporters" investigating historical experiences</li>
                      <li>• Arrange seating in press conference style</li>
                      <li>• Provide notebooks for taking notes during interview</li>
                      <li>• Establish hand-raising protocol for questions</li>
                      <li>• Remind students to ask respectful, thoughtful questions</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-green-700 mb-2">3. Interactive Interview (25 minutes)</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Students ask questions about the indentureship experience</li>
                      <li>• Teacher responds in character with historically accurate information</li>
                      <li>• Cover key topics through student-led questioning:</li>
                      <li className="ml-4">- Reasons for leaving India</li>
                      <li className="ml-4">- Journey to the Caribbean</li>
                      <li className="ml-4">- Working and living conditions</li>
                      <li className="ml-4">- Cultural practices and preservation</li>
                      <li className="ml-4">- Relationships with other communities</li>
                      <li className="ml-4">- Challenges and adaptations</li>
                      <li>• Encourage follow-up questions for deeper understanding</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-purple-700 mb-2">4. Reflection and Discussion (5 minutes)</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Teacher steps out of character</li>
                      <li>• Students share what they learned from the interview</li>
                      <li>• Discuss how this experience helps understand history</li>
                      <li>• Connect to broader themes of migration and cultural adaptation</li>
                      <li>• Reflect on the importance of preserving historical stories</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-orange-700">
                  <UserCheck className="mr-2 h-5 w-5" />
                  Character Development Guide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <h4 className="font-semibold mb-2 text-orange-700">Character Background</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Age: 85 years old (arrived as young adult in 1940s-1950s)</li>
                      <li>• Origin: Village in India (specify region like Tamil Nadu, Bihar, or Uttar Pradesh)</li>
                      <li>• Family: Left family behind, may have started new family in Caribbean</li>
                      <li>• Work: Plantation laborer, later possibly small business owner</li>
                      <li>• Cultural practices: Maintained religious traditions, language, food customs</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold mb-2 text-blue-700">Key Experiences to Share</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Decision to leave India (economic hardship, family circumstances)</li>
                      <li>• Journey by ship (conditions, duration, fellow travelers)</li>
                      <li>• Arrival and first impressions of Caribbean</li>
                      <li>• Work experiences and daily life on plantation</li>
                      <li>• Cultural adaptations and preservation efforts</li>
                      <li>• Community building and relationships with other groups</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="materials">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-orange-700">Required Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Simple costume props (shawl, traditional clothing items)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Notebooks and pens for student reporters
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Chair for character interview setup
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Historical reference materials for teacher preparation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Question prompt cards (optional backup)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Audio recording device (optional for documentation)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-orange-700">Sample Interview Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-orange-600">Journey and Arrival</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Why did you decide to leave India?</li>
                      <li>• What was the journey like on the ship?</li>
                      <li>• How did you feel when you first arrived?</li>
                      <li>• What surprised you most about the Caribbean?</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-orange-600">Daily Life and Work</h4>
                    <ul className="text-sm space-y-1">
                      <li>• What kind of work did you do?</li>
                      <li>• Where did you live when you first arrived?</li>
                      <li>• What was a typical day like for you?</li>
                      <li>• What were the biggest challenges you faced?</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-orange-600">Culture and Community</h4>
                    <ul className="text-sm space-y-1">
                      <li>• How did you keep your Indian traditions alive?</li>
                      <li>• Did you learn new customs from other people?</li>
                      <li>• What foods did you miss from India?</li>
                      <li>• How did you celebrate festivals and holidays?</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="assessment">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-orange-700">Assessment Strategies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-orange-600">Formative Assessment</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <strong>Question Quality:</strong> Observe the depth and thoughtfulness of student questions
                      </li>
                      <li>
                        <strong>Active Listening:</strong> Note how students build on previous answers with follow-up
                        questions
                      </li>
                      <li>
                        <strong>Note-Taking:</strong> Monitor student engagement through their written observations
                      </li>
                      <li>
                        <strong>Respectful Interaction:</strong> Assess appropriate interview behavior and empathy
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-orange-600">Learning Indicators</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <strong>Historical Understanding:</strong> Questions show grasp of indentureship context
                      </li>
                      <li>
                        <strong>Cultural Awareness:</strong> Interest in cultural practices and preservation
                      </li>
                      <li>
                        <strong>Empathy Development:</strong> Sensitive questioning about difficult experiences
                      </li>
                      <li>
                        <strong>Critical Thinking:</strong> Connections between past and present experiences
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-orange-700">Post-Activity Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <h4 className="font-semibold mb-2 text-orange-700">Reflection Questions</h4>
                    <ul className="text-sm space-y-1">
                      <li>• What was the most surprising thing you learned about indentureship?</li>
                      <li>• How did this interview help you understand the East Indian experience?</li>
                      <li>• What questions would you still like to ask?</li>
                      <li>• How do you think this experience connects to modern immigration?</li>
                      <li>• What did you learn about preserving culture in a new place?</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold mb-2 text-blue-700">Extension Activities</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Write a newspaper article based on the interview</li>
                      <li>• Create a timeline of the character's life journey</li>
                      <li>• Research and present on East Indian cultural contributions to Caribbean</li>
                      <li>• Interview family members about their own migration stories</li>
                      <li>• Compare indentureship experiences across different Caribbean islands</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-orange-700">
                  <AlertCircle className="mr-2 h-5 w-5" />
                  Teaching Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Character Portrayal</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Research thoroughly to ensure historical accuracy</li>
                      <li>• Speak with appropriate accent if comfortable</li>
                      <li>• Show emotion when discussing difficult experiences</li>
                      <li>• Include positive aspects alongside challenges</li>
                      <li>• Stay in character throughout the interview</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Facilitating Questions</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Encourage shy students to participate</li>
                      <li>• Guide students toward important topics if needed</li>
                      <li>• Model good follow-up questions</li>
                      <li>• Ensure respectful tone throughout</li>
                      <li>• Allow natural conversation flow</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
