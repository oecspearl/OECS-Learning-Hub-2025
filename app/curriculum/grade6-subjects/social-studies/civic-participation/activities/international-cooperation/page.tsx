import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Users, Globe, ChevronLeft, Clock, Target, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/breadcrumb"
import { Badge } from "@/components/ui/badge"

export default function InternationalCooperationActivitiesPage() {
  return (
    <div>
      <div className="container mx-auto py-8">
                <Link href="/curriculum/grade6-subjects/social-studies/civic-participation/activities">
          <Button variant="outline" className="mb-6">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Civic Participation Activities
          </Button>
        </Link>

        <div className="w-full min-w-full max-w-[100vw] mb-8">
          <div className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 p-8 rounded-xl shadow-lg">
            <h1 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600">
              International Cooperation Activities
            </h1>
            <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-4">
              Experience how countries collaborate to solve global challenges through case studies, simulations, and
              regional cooperation projects.
            </p>
            <div className="flex justify-center">
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-gray-600">Diplomacy & Global Problem-Solving</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-green-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-green-700">
                <FileText className="h-6 w-6" />
                Activity 13: Case Study Analysis of Global Cooperation
              </CardTitle>
              <CardDescription>
                <Badge variant="outline" className="mr-2">
                  <Clock className="h-3 w-3 mr-1" />
                  75 minutes
                </Badge>
                Analyze real examples of international cooperation successes and challenges
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Target className="h-4 w-4 text-green-600" />
                    Learning Objectives
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-6">
                    <li>• Analyze how international cooperation addresses global challenges</li>
                    <li>• Identify factors that help or hinder cooperative efforts</li>
                    <li>• Understand benefits and obstacles of working together</li>
                    <li>• Apply lessons learned to future cooperation scenarios</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Case Studies</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-green-50 p-2 rounded">WHO COVID-19 Response</div>
                    <div className="bg-emerald-50 p-2 rounded">FAO World Hunger Efforts</div>
                    <div className="bg-teal-50 p-2 rounded">UNICEF Education Initiatives</div>
                    <div className="bg-cyan-50 p-2 rounded">IOM Migration Support</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Analysis Framework</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-green-50 p-2 rounded border-l-2 border-green-300">
                      <span className="font-medium">Context:</span> What was the global problem or challenge?
                    </div>
                    <div className="bg-emerald-50 p-2 rounded border-l-2 border-emerald-300">
                      <span className="font-medium">Response:</span> How did international organizations respond?
                    </div>
                    <div className="bg-teal-50 p-2 rounded border-l-2 border-teal-300">
                      <span className="font-medium">Cooperation:</span> What forms of cooperation were used?
                    </div>
                    <div className="bg-cyan-50 p-2 rounded border-l-2 border-cyan-300">
                      <span className="font-medium">Outcomes:</span> What were the results (positive and negative)?
                    </div>
                    <div className="bg-blue-50 p-2 rounded border-l-2 border-blue-300">
                      <span className="font-medium">Lessons:</span> What can be learned for future cooperation?
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Activity Structure</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-green-50 p-2 rounded border-l-2 border-green-300">
                      <span className="font-medium">Case Study Distribution (10 min):</span> Groups receive different
                      cooperation examples
                    </div>
                    <div className="bg-emerald-50 p-2 rounded border-l-2 border-emerald-300">
                      <span className="font-medium">Analysis Process (45 min):</span> Complete analysis worksheet using
                      framework
                    </div>
                    <div className="bg-teal-50 p-2 rounded border-l-2 border-teal-300">
                      <span className="font-medium">Findings Presentation (15 min):</span> Groups present key findings
                      to class
                    </div>
                    <div className="bg-cyan-50 p-2 rounded border-l-2 border-cyan-300">
                      <span className="font-medium">Synthesis Discussion (5 min):</span> Identify common themes and
                      success factors
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Assessment Focus
                  </h4>
                  <p className="text-sm text-gray-700">
                    Analysis depth, evidence use, presentation clarity, understanding of cooperation complexities
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-emerald-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-emerald-700">
                <Users className="h-6 w-6" />
                Activity 14: Model United Nations Simulation
              </CardTitle>
              <CardDescription>
                <Badge variant="outline" className="mr-2">
                  <Clock className="h-3 w-3 mr-1" />
                  120 minutes (extended session)
                </Badge>
                Experience diplomatic negotiation and international consensus-building
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Target className="h-4 w-4 text-emerald-600" />
                    Learning Objectives
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-6">
                    <li>• Experience challenges of international consensus-building</li>
                    <li>• Understand different national perspectives and interests</li>
                    <li>• Practice diplomatic negotiation and compromise</li>
                    <li>• Appreciate complexity of global problem-solving</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Simulation Structure</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-emerald-50 p-2 rounded border-l-2 border-emerald-300">
                      <span className="font-medium">Delegation Assignment (15 min):</span> Assign countries with
                      background information
                    </div>
                    <div className="bg-teal-50 p-2 rounded border-l-2 border-teal-300">
                      <span className="font-medium">Issue Introduction (15 min):</span> Present global issue requiring
                      cooperation
                    </div>
                    <div className="bg-cyan-50 p-2 rounded border-l-2 border-cyan-300">
                      <span className="font-medium">Preparation Time (30 min):</span> Research positions and identify
                      allies
                    </div>
                    <div className="bg-blue-50 p-2 rounded border-l-2 border-blue-300">
                      <span className="font-medium">Formal Debate (45 min):</span> Opening statements, discussion,
                      resolution writing
                    </div>
                    <div className="bg-indigo-50 p-2 rounded border-l-2 border-indigo-300">
                      <span className="font-medium">Debrief & Reflection (15 min):</span> Discuss challenges and
                      learning
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Global Issues for Simulation</h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-6">
                    <li>• Climate change action and emissions reduction</li>
                    <li>• Refugee crisis response and burden-sharing</li>
                    <li>• Global health emergency preparedness</li>
                    <li>• Ocean pollution and marine conservation</li>
                    <li>• Food security and sustainable agriculture</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Simulation Roles</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-emerald-50 p-2 rounded">Secretary-General (Facilitator)</div>
                    <div className="bg-teal-50 p-2 rounded">Country Delegates</div>
                    <div className="bg-cyan-50 p-2 rounded">Observers (Note-takers)</div>
                    <div className="bg-blue-50 p-2 rounded">Media Representatives</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Materials Needed</h4>
                  <p className="text-sm text-gray-700">
                    Country placards, resolution templates, formal debate procedures, gavels
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Reflection Questions</h4>
                  <ul className="text-sm text-gray-700 space-y-1 ml-6">
                    <li>• What challenges did you face reaching consensus?</li>
                    <li>• How important was compromise in the negotiation?</li>
                    <li>• What strategies helped build coalitions?</li>
                    <li>• How does this relate to real international relations?</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Assessment Focus
                  </h4>
                  <p className="text-sm text-gray-700">
                    Understanding of assigned country's position, participation in debate, cooperation during
                    negotiation, reflection on international cooperation challenges
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-teal-500 lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-teal-700">
                <Globe className="h-6 w-6" />
                Activity 15: Eastern Caribbean Cooperation Project
              </CardTitle>
              <CardDescription>
                <Badge variant="outline" className="mr-2">
                  <Clock className="h-3 w-3 mr-1" />
                  100 minutes (multiple sessions)
                </Badge>
                Explore regional cooperation among Eastern Caribbean countries
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Target className="h-4 w-4 text-teal-600" />
                      Learning Objectives
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1 ml-6">
                      <li>• Research regional cooperation examples in Eastern Caribbean</li>
                      <li>• Understand benefits of regional collaboration</li>
                      <li>• Present cooperation examples using various formats</li>
                      <li>• Appreciate how cooperation strengthens the entire region</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Session Structure</h4>
                    <div className="space-y-2 text-sm">
                      <div className="bg-teal-50 p-2 rounded border-l-2 border-teal-300">
                        <span className="font-medium">Session 1 (30 min):</span> Country and topic assignment
                      </div>
                      <div className="bg-cyan-50 p-2 rounded border-l-2 border-cyan-300">
                        <span className="font-medium">Session 2 (45 min):</span> Research and development
                      </div>
                      <div className="bg-blue-50 p-2 rounded border-l-2 border-blue-300">
                        <span className="font-medium">Session 3 (25 min):</span> Creation and presentation
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Eastern Caribbean Countries</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="bg-teal-50 p-2 rounded">Grenada</div>
                      <div className="bg-cyan-50 p-2 rounded">St. Lucia</div>
                      <div className="bg-blue-50 p-2 rounded">St. Vincent</div>
                      <div className="bg-sky-50 p-2 rounded">Barbados</div>
                      <div className="bg-indigo-50 p-2 rounded">Dominica</div>
                      <div className="bg-purple-50 p-2 rounded">Antigua & Barbuda</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Presentation Formats</h4>
                    <ul className="text-sm text-gray-700 space-y-1 ml-6">
                      <li>• Educational posters with visuals</li>
                      <li>• Digital slide presentations</li>
                      <li>• Short skits or role-plays</li>
                      <li>• Video documentaries</li>
                      <li>• Interactive displays</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Cooperation Focus Areas</h4>
                    <div className="space-y-2 text-sm">
                      <div className="bg-teal-50 p-3 rounded border-l-2 border-teal-300">
                        <span className="font-medium">Disaster Preparedness & Response:</span> Hurricane preparation,
                        emergency coordination
                      </div>
                      <div className="bg-cyan-50 p-3 rounded border-l-2 border-cyan-300">
                        <span className="font-medium">Regional Education Initiatives:</span> Student exchanges, shared
                        curricula
                      </div>
                      <div className="bg-blue-50 p-3 rounded border-l-2 border-blue-300">
                        <span className="font-medium">Sports & Cultural Exchange:</span> Regional competitions,
                        festivals
                      </div>
                      <div className="bg-sky-50 p-3 rounded border-l-2 border-sky-300">
                        <span className="font-medium">Trade & Economic Cooperation:</span> OECS, CARICOM partnerships
                      </div>
                      <div className="bg-indigo-50 p-3 rounded border-l-2 border-indigo-300">
                        <span className="font-medium">Tourism Promotion:</span> Joint marketing, cruise ship
                        coordination
                      </div>
                      <div className="bg-purple-50 p-3 rounded border-l-2 border-purple-300">
                        <span className="font-medium">Environmental Protection:</span> Marine conservation, climate
                        action
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Research Focus</h4>
                    <ul className="text-sm text-gray-700 space-y-1 ml-6">
                      <li>• Specific cooperation examples and programs</li>
                      <li>• Benefits achieved through collaboration</li>
                      <li>• Cooperation mechanisms and structures</li>
                      <li>• Success stories and positive outcomes</li>
                      <li>• Future cooperation opportunities</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Materials Needed</h4>
                    <p className="text-sm text-gray-700">
                      Research materials, presentation supplies, project materials for chosen format
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Assessment Focus
                    </h4>
                    <p className="text-sm text-gray-700">
                      Research accuracy, understanding of regional cooperation, presentation quality, appreciation for
                      collaborative benefits
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-green-50 p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
            International Cooperation Learning Outcomes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Case Analysis Skills</h3>
              <p className="text-sm text-gray-600">
                Students analyze real examples of international cooperation and identify success factors
              </p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold mb-2">Diplomatic Skills</h3>
              <p className="text-sm text-gray-600">
                Students experience negotiation, compromise, and consensus-building through simulations
              </p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="font-semibold mb-2">Regional Understanding</h3>
              <p className="text-sm text-gray-600">
                Students appreciate the benefits of Eastern Caribbean regional cooperation and collaboration
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
