"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Target, CheckCircle, Star, Palette } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function CreativeExpressionPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Curriculum", href: "/curriculum" },
          { label: "Grade 6", href: "/curriculum/grade6-subjects" },
          { label: "Social Studies", href: "/curriculum/grade6-subjects/social-studies" },
          { label: "Civic Participation", href: "/curriculum/grade6-subjects/social-studies/civic-participation" },
          { label: "Activities", href: "/curriculum/grade6-subjects/social-studies/civic-participation/activities" },
          {
            label: "National Identity",
            href: "/curriculum/grade6-subjects/social-studies/civic-participation/activities/national-identity",
          },
          { label: "Creative Expression", href: "#" },
        ]}
      />

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-pink-100 p-3 rounded-full">
            <Palette className="h-8 w-8 text-pink-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">National Pride Creative Expression Project</h1>
            <p className="text-lg text-gray-600">Activity 5: National Identity Strand</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            100 minutes (multiple sessions)
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            Individual Work
          </Badge>
          <Badge variant="outline">Creative Arts</Badge>
          <Badge variant="outline">Self-Expression</Badge>
          <Badge variant="outline">Presentation</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Learning Objectives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Students will express personal connections to national identity through creative mediums</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Students will develop artistic and creative communication skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Students will demonstrate understanding of national pride concepts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Students will appreciate diverse forms of creative expression</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Materials Needed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li>• Various art supplies (paints, markers, colored pencils)</li>
                  <li>• Writing materials and journals</li>
                  <li>• Recording equipment for audio/video</li>
                  <li>• Musical instruments (if available)</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Performance space for presentations</li>
                  <li>• Gallery display materials</li>
                  <li>• Cameras for documentation</li>
                  <li>• Feedback forms and rubrics</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Creative Expression Options</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Written Expression</h4>
                    <ul className="text-sm text-blue-600 mt-2 space-y-1">
                      <li>• Short paragraph about national pride event</li>
                      <li>• Poetry about national identity</li>
                      <li>• Personal narrative essay</li>
                      <li>• Song lyrics composition</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800">Visual Arts</h4>
                    <ul className="text-sm text-green-600 mt-2 space-y-1">
                      <li>• Painting or drawing project</li>
                      <li>• Collage creation</li>
                      <li>• Photography series</li>
                      <li>• Digital art design</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800">Performance Arts</h4>
                    <ul className="text-sm text-purple-600 mt-2 space-y-1">
                      <li>• Song composition and performance</li>
                      <li>• Dance/movement piece</li>
                      <li>• Dramatic monologue</li>
                      <li>• Spoken word poetry</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-800">Digital Media</h4>
                    <ul className="text-sm text-orange-600 mt-2 space-y-1">
                      <li>• Video creation and editing</li>
                      <li>• Digital storytelling</li>
                      <li>• Podcast recording</li>
                      <li>• Interactive presentation</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-red-800">Mixed Media</h4>
                    <ul className="text-sm text-red-600 mt-2 space-y-1">
                      <li>• Combination of art forms</li>
                      <li>• Multimedia presentation</li>
                      <li>• Interactive display</li>
                      <li>• Performance with visual elements</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-800">Musical Expression</h4>
                    <ul className="text-sm text-yellow-600 mt-2 space-y-1">
                      <li>• Jingle or poem about national pride</li>
                      <li>• Instrumental composition</li>
                      <li>• Rap or hip-hop creation</li>
                      <li>• Traditional music adaptation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Session Structure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-3 text-blue-600">
                  Session 1: Planning and Inspiration (25 minutes)
                </h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold">Inspiration Discussion (10 minutes):</h5>
                    <ul className="space-y-1 ml-4 text-sm">
                      <li>• Think-pair-share: "What makes you proud to be a citizen of your country?"</li>
                      <li>• Share responses and create class pride list</li>
                      <li>• Discuss various expressions of national pride</li>
                      <li>• View examples of creative expressions from other students/artists</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold">Project Planning (15 minutes):</h5>
                    <ul className="space-y-1 ml-4 text-sm">
                      <li>• Students choose creative expression format</li>
                      <li>• Complete planning worksheet with project outline</li>
                      <li>• Identify materials and resources needed</li>
                      <li>• Set personal goals and success criteria</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3 text-blue-600">Session 2: Creation Phase (50 minutes)</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold">Individual Work Time (45 minutes):</h5>
                    <ul className="space-y-1 ml-4 text-sm">
                      <li>• Students work on chosen creative projects</li>
                      <li>• Teacher circulates providing guidance and support</li>
                      <li>• Encourage authentic expression and personal connection</li>
                      <li>• Allow flexibility in timeline and approach</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold">Peer Feedback (5 minutes):</h5>
                    <ul className="space-y-1 ml-4 text-sm">
                      <li>• Partner sharing for initial feedback</li>
                      <li>• Suggestions for improvement or enhancement</li>
                      <li>• Positive reinforcement and encouragement</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3 text-blue-600">
                  Session 3: Presentation and Gallery Walk (25 minutes)
                </h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold">Presentation Preparation (10 minutes):</h5>
                    <ul className="space-y-1 ml-4 text-sm">
                      <li>• Students prepare to share their work</li>
                      <li>• Set up gallery space for visual arts</li>
                      <li>• Organize performance area for songs/dances</li>
                      <li>• Test any technology needed</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold">Sharing and Celebration (15 minutes):</h5>
                    <ul className="space-y-1 ml-4 text-sm">
                      <li>• Gallery walk for visual works</li>
                      <li>• Performance time for songs, poems, dances</li>
                      <li>• Audience provides positive feedback using appreciation protocols</li>
                      <li>• Celebrate diversity of expression and creativity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Creative Expression Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Content Requirements:</h4>
                  <ul className="space-y-1 ml-4">
                    <li>• Must reflect genuine personal connection to national identity</li>
                    <li>• Should demonstrate understanding of national pride concepts</li>
                    <li>• Include specific examples or experiences</li>
                    <li>• Maintain respectful and appropriate content</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Creative Standards:</h4>
                  <ul className="space-y-1 ml-4">
                    <li>• Encourage originality and personal voice</li>
                    <li>• Focus on authentic expression over technical perfection</li>
                    <li>• Allow for risk-taking and experimentation</li>
                    <li>• Support diverse cultural expressions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Presentation Expectations:</h4>
                  <ul className="space-y-1 ml-4">
                    <li>• Clear communication of artistic intent</li>
                    <li>• Respectful audience engagement</li>
                    <li>• Constructive feedback giving and receiving</li>
                    <li>• Celebration of diverse perspectives</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Assessment Strategies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Creative Process Assessment:</h4>
                  <ul className="space-y-1 ml-4">
                    <li>• Planning and goal-setting quality</li>
                    <li>• Effort and engagement during creation</li>
                    <li>• Use of feedback for improvement</li>
                    <li>• Problem-solving and adaptability</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Content Understanding Assessment:</h4>
                  <ul className="space-y-1 ml-4">
                    <li>• Personal connection to national identity themes</li>
                    <li>• Understanding of national pride concepts</li>
                    <li>• Authentic expression of personal experiences</li>
                    <li>• Cultural sensitivity and respect</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Presentation Assessment:</h4>
                  <ul className="space-y-1 ml-4">
                    <li>• Creativity and originality in expression</li>
                    <li>• Quality of communication and presentation</li>
                    <li>• Audience engagement and interaction</li>
                    <li>• Reflection on learning and growth</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Differentiation Strategies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm">Visual Learners:</h4>
                  <p className="text-sm text-gray-600">Encourage art, photography, and visual design projects</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Auditory Learners:</h4>
                  <p className="text-sm text-gray-600">Support musical, spoken word, and audio recording projects</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Kinesthetic Learners:</h4>
                  <p className="text-sm text-gray-600">Promote dance, movement, and hands-on creation activities</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Introverted Students:</h4>
                  <p className="text-sm text-gray-600">Offer written expression and individual presentation options</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">ELL Students:</h4>
                  <p className="text-sm text-gray-600">Allow native language elements, visual storytelling emphasis</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Extension Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Create a class anthology of national pride expressions</li>
                <li>• Organize a school-wide cultural celebration</li>
                <li>• Share projects with community members</li>
                <li>• Create digital portfolio of student work</li>
                <li>• Collaborate with local artists or cultural organizations</li>
                <li>• Develop ongoing creative expression journal</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technology Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Digital art creation using tablets or computers</li>
                <li>• Video recording and editing software</li>
                <li>• Audio recording and podcast creation</li>
                <li>• Online gallery creation and sharing</li>
                <li>• Social media campaigns (with supervision)</li>
                <li>• Virtual reality or augmented reality projects</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cross-Curricular Connections</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>
                  <strong>Language Arts:</strong> Creative writing, poetry, storytelling
                </li>
                <li>
                  <strong>Art:</strong> Visual design, color theory, composition
                </li>
                <li>
                  <strong>Music:</strong> Composition, rhythm, cultural music traditions
                </li>
                <li>
                  <strong>Drama:</strong> Performance skills, character development
                </li>
                <li>
                  <strong>Technology:</strong> Digital creation tools, multimedia production
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cultural Sensitivity</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Respect for diverse cultural backgrounds</li>
                <li>• Inclusive representation of national identity</li>
                <li>• Sensitivity to different family experiences</li>
                <li>• Celebration of multicultural perspectives</li>
                <li>• Avoidance of stereotypes or generalizations</li>
                <li>• Support for all students' authentic voices</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
