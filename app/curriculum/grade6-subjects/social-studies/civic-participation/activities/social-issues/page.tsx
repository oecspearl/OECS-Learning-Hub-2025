import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Camera, Gavel, ChevronLeft, Clock, Target, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"
import { Badge } from "@/components/ui/badge"

export default function SocialIssuesActivitiesPage() {
  return (
    <div>
      <div className="container mx-auto py-8">
                <Link href="/curriculum/grade6-subjects/social-studies/civic-participation/activities">
          <Button variant="outline" className="mb-6">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Civic Participation Activities
          </Button>
        </Link>

        <div className="w-full min-w-full max-w-[100vw] mb-8">
          <div className="bg-gradient-to-r from-amber-100 via-yellow-100 to-orange-100 p-8 rounded-xl shadow-lg">
            <h1 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600">
              Social Issues Activities
            </h1>
            <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-4">
              Analyze current social challenges affecting the Eastern Caribbean and develop informed perspectives
              through media literacy and critical thinking.
            </p>
            <div className="flex justify-center">
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-gray-600">Critical Analysis & Media Literacy</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-amber-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-amber-700">
                <AlertTriangle className="h-6 w-6" />
                Activity 10: Social Issues Media Gallery Walk
              </CardTitle>
              <CardDescription>
                <Badge variant="outline" className="mr-2">
                  <Clock className="h-3 w-3 mr-1" />
                  60 minutes
                </Badge>
                Explore social issues through various media sources and discussions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Target className="h-4 w-4 text-amber-600" />
                    Learning Objectives
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-6">
                    <li>• Identify social issues from various media sources</li>
                    <li>• Connect global issues to local Eastern Caribbean context</li>
                    <li>• Develop media literacy and observation skills</li>
                    <li>• Prioritize issues based on local impact and urgency</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Materials Needed</h4>
                  <p className="text-sm text-gray-700">
                    Various media sources (pictures, newspaper clippings, video clips), gallery walk observation sheets
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Activity Structure</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-amber-50 p-2 rounded border-l-2 border-amber-300">
                      <span className="font-medium">Gallery Setup (10 min):</span> Create stations with different social
                      issue media
                    </div>
                    <div className="bg-yellow-50 p-2 rounded border-l-2 border-yellow-300">
                      <span className="font-medium">Small Group Rotations (35 min):</span> Groups rotate through
                      stations observing and discussing
                    </div>
                    <div className="bg-orange-50 p-2 rounded border-l-2 border-orange-300">
                      <span className="font-medium">Synthesis Discussion (15 min):</span> Share observations and create
                      class priority list
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Social Issues Explored</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-amber-50 p-2 rounded">Climate Change</div>
                    <div className="bg-yellow-50 p-2 rounded">Poverty</div>
                    <div className="bg-orange-50 p-2 rounded">Migration</div>
                    <div className="bg-red-50 p-2 rounded">Inequality</div>
                    <div className="bg-pink-50 p-2 rounded">Health Issues</div>
                    <div className="bg-rose-50 p-2 rounded">Education Access</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Observation Questions</h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-6">
                    <li>• What social issue is depicted in this media?</li>
                    <li>• How does this issue affect people's daily lives?</li>
                    <li>• Do you see this issue in our community? How?</li>
                    <li>• What emotions does this media evoke?</li>
                    <li>• What questions do you have about this issue?</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Assessment Focus
                  </h4>
                  <p className="text-sm text-gray-700">
                    Observation quality, discussion participation, understanding of social issue complexity
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-yellow-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-yellow-700">
                <Camera className="h-6 w-6" />
                Activity 11: News Report Simulation Project
              </CardTitle>
              <CardDescription>
                <Badge variant="outline" className="mr-2">
                  <Clock className="h-3 w-3 mr-1" />
                  100 minutes (multiple sessions)
                </Badge>
                Create professional news reports about current social issues
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Target className="h-4 w-4 text-yellow-600" />
                    Learning Objectives
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-6">
                    <li>• Research current social issues affecting Eastern Caribbean</li>
                    <li>• Present information in professional news format</li>
                    <li>• Include multiple perspectives on complex issues</li>
                    <li>• Develop media production and presentation skills</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Session Structure</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-yellow-50 p-2 rounded border-l-2 border-yellow-300">
                      <span className="font-medium">Session 1 (40 min):</span> Issue selection, research, and planning
                    </div>
                    <div className="bg-amber-50 p-2 rounded border-l-2 border-amber-300">
                      <span className="font-medium">Session 2 (35 min):</span> Script writing and rehearsal
                    </div>
                    <div className="bg-orange-50 p-2 rounded border-l-2 border-orange-300">
                      <span className="font-medium">Session 3 (25 min):</span> Recording/performance and feedback
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">News Report Format</h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-6">
                    <li>• Anchor introduction and main story</li>
                    <li>• Field reporter on-location segments</li>
                    <li>• Expert interviews and quotes</li>
                    <li>• Multiple perspectives presented</li>
                    <li>• Professional conclusion and sign-off</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">News Report Requirements</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-yellow-50 p-2 rounded">3-5 minute duration</div>
                    <div className="bg-amber-50 p-2 rounded">Professional format</div>
                    <div className="bg-orange-50 p-2 rounded">Accurate information</div>
                    <div className="bg-red-50 p-2 rounded">Multiple perspectives</div>
                    <div className="bg-pink-50 p-2 rounded">Clear speaking</div>
                    <div className="bg-rose-50 p-2 rounded">Good organization</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Materials Needed</h4>
                  <p className="text-sm text-gray-700">
                    Video equipment, news report templates, research materials, costumes/props
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Assessment Focus
                  </h4>
                  <p className="text-sm text-gray-700">
                    Research accuracy, script quality, presentation skills, understanding of issue complexity
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-orange-500 lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-orange-700">
                <Gavel className="h-6 w-6" />
                Activity 12: Social Issues Debate Tournament
              </CardTitle>
              <CardDescription>
                <Badge variant="outline" className="mr-2">
                  <Clock className="h-3 w-3 mr-1" />
                  90 minutes (extended session)
                </Badge>
                Engage in structured debates about complex social issues
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Target className="h-4 w-4 text-orange-600" />
                      Learning Objectives
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1 ml-6">
                      <li>• Develop argumentation and critical thinking skills</li>
                      <li>• Research and present evidence-based arguments</li>
                      <li>• Listen respectfully to opposing viewpoints</li>
                      <li>• Understand complexity of social issues</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Tournament Structure</h4>
                    <div className="space-y-2 text-sm">
                      <div className="bg-orange-50 p-2 rounded border-l-2 border-orange-300">
                        <span className="font-medium">Setup (15 min):</span> Divide into teams and assign topics
                      </div>
                      <div className="bg-amber-50 p-2 rounded border-l-2 border-amber-300">
                        <span className="font-medium">Preparation (30 min):</span> Research and prepare arguments
                      </div>
                      <div className="bg-yellow-50 p-2 rounded border-l-2 border-yellow-300">
                        <span className="font-medium">Debate Rounds (40 min):</span> Multiple rounds with different
                        matchups
                      </div>
                      <div className="bg-red-50 p-2 rounded border-l-2 border-red-300">
                        <span className="font-medium">Reflection (5 min):</span> Discuss learning and perspectives
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Debate Format</h4>
                    <ul className="text-sm text-gray-700 space-y-1 ml-6">
                      <li>• Opening statements (2 minutes each team)</li>
                      <li>• Rebuttals (2 minutes each team)</li>
                      <li>• Closing arguments (1 minute each team)</li>
                      <li>• Audience judges using provided rubrics</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Materials Needed</h4>
                    <p className="text-sm text-gray-700">
                      Debate topic cards, research materials, timer, judging rubrics
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Debate Topics</h4>
                    <div className="space-y-2 text-sm">
                      <div className="bg-orange-50 p-3 rounded border-l-2 border-orange-300">
                        <span className="font-medium">
                          "Climate change is the most urgent social issue facing the Caribbean"
                        </span>
                      </div>
                      <div className="bg-amber-50 p-3 rounded border-l-2 border-amber-300">
                        <span className="font-medium">
                          "Economic inequality requires government intervention vs. market solutions"
                        </span>
                      </div>
                      <div className="bg-yellow-50 p-3 rounded border-l-2 border-yellow-300">
                        <span className="font-medium">"Migration benefits both sending and receiving countries"</span>
                      </div>
                      <div className="bg-red-50 p-3 rounded border-l-2 border-red-300">
                        <span className="font-medium">"Technology increases or decreases social isolation"</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Judging Criteria</h4>
                    <ul className="text-sm text-gray-700 space-y-1 ml-6">
                      <li>• Quality and clarity of arguments</li>
                      <li>• Use of evidence and examples</li>
                      <li>• Effectiveness of rebuttals</li>
                      <li>• Respectful engagement with opposing views</li>
                      <li>• Organization and presentation skills</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Assessment Focus
                    </h4>
                    <p className="text-sm text-gray-700">
                      Use debate rubric evaluating argument quality, evidence use, rebuttal effectiveness, and
                      respectful engagement with opposing views
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Reflection Questions</h4>
                    <ul className="text-sm text-gray-700 space-y-1 ml-6">
                      <li>• What did you learn about different perspectives?</li>
                      <li>• What common themes emerged across social issues?</li>
                      <li>• How important is considering multiple viewpoints?</li>
                      <li>• What makes some arguments more convincing than others?</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-amber-50 p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Social Issues Learning Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <AlertTriangle className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="font-semibold mb-2">Issue Identification</h3>
              <p className="text-sm text-gray-600">
                Students identify and analyze social issues affecting their community and region
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Camera className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="font-semibold mb-2">Media Literacy</h3>
              <p className="text-sm text-gray-600">
                Students develop skills to analyze and create media content about social issues
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Gavel className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Critical Thinking</h3>
              <p className="text-sm text-gray-600">
                Students analyze multiple perspectives and develop informed opinions on complex issues
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/curriculum/grade6-subjects/social-studies/civic-participation/activities">
            <Button variant="outline" size="lg" className="px-8 py-3">
              <ChevronLeft className="mr-2 h-5 w-5" />
              Back to Civic Participation Activities
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
