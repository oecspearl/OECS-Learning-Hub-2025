"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, Timer, Users, Target, Video, Laptop, Camera } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function DigitalStorytellingStudioPage() {
  return (
    <div className="container mx-auto py-8">
            <Link href="/curriculum/grade5-subjects/activities/language-arts">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Language Arts Activities
        </Button>
      </Link>

      <div className="w-full min-w-full max-w-[100vw] mb-8">
        <div className="bg-gradient-to-r from-violet-100 to-pink-100 p-6 rounded-xl shadow-md">
          <h1 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-pink-600">
            Digital Storytelling Studio
          </h1>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Create engaging multimedia stories using digital tools, integrating text, images, audio, and video to
            enhance narrative expression and develop 21st-century communication skills.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Video className="h-5 w-5 text-violet-600" />
              Activity Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The Digital Storytelling Studio empowers Grade 5 learners to create sophisticated multimedia narratives
              that combine traditional storytelling elements with modern digital tools. Students develop technical
              skills while strengthening their understanding of narrative structure, character development, and audience
              engagement.
            </p>

            <div className="bg-violet-50 p-4 rounded-lg">
              <h3 className="font-semibold text-violet-800 mb-2">Writing & Representing Focus (ELOs 5-7)</h3>
              <ul className="text-violet-700 space-y-1 text-sm">
                <li>• Use various paper-based and digital resources for brainstorming</li>
                <li>• Create and use digital graphic organizers for idea organization</li>
                <li>• Integrate visual elements to enhance clarity and appeal</li>
                <li>• Publish written work for varying audiences using various tools</li>
                <li>• Engage in collaborative projects using various formats</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Timer className="h-5 w-5 text-green-600" />
              Project Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <Timer className="h-4 w-4 text-gray-500" />
              <span className="text-sm">
                <strong>Duration:</strong> 3-4 weeks
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-gray-500" />
              <span className="text-sm">
                <strong>Group Size:</strong> Individual or pairs
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-gray-500" />
              <span className="text-sm">
                <strong>Focus:</strong> Digital literacy
              </span>
            </div>

            <div className="pt-4">
              <h4 className="font-semibold mb-2">Skills Developed</h4>
              <div className="flex flex-wrap gap-1">
                <Badge>Digital Creation</Badge>
                <Badge>Multimedia Integration</Badge>
                <Badge>Story Structure</Badge>
                <Badge>Technical Skills</Badge>
                <Badge>Audience Awareness</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Laptop className="h-5 w-5 text-blue-600" />
              Digital Tools & Platforms
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="border-l-4 border-violet-500 pl-4">
                <h4 className="font-semibold text-violet-700">Story Creation Tools</h4>
                <p className="text-sm text-gray-600">Story Creator, Storyboard templates, Mind mapping software</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-blue-700">Publishing Platforms</h4>
                <p className="text-sm text-gray-600">Story Jumper, Bloom Library, Google Slides, PowerPoint</p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-green-700">Media Creation</h4>
                <p className="text-sm text-gray-600">Canva for design, voice recording tools, image editing software</p>
              </div>

              <div className="border-l-4 border-pink-500 pl-4">
                <h4 className="font-semibold text-pink-700">Collaboration Tools</h4>
                <p className="text-sm text-gray-600">Google Classroom, shared drives, peer review platforms</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="h-5 w-5 text-green-600" />
              Story Types & Genres
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 flex-shrink-0"></span>
                Personal narratives with multimedia elements
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 flex-shrink-0"></span>
                Fictional adventures with interactive components
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 flex-shrink-0"></span>
                Informational stories about Caribbean culture
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 flex-shrink-0"></span>
                Persuasive narratives addressing community issues
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 flex-shrink-0"></span>
                Collaborative stories with multiple perspectives
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 flex-shrink-0"></span>
                Adaptations of traditional folktales and legends
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Production Process</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-violet-700">Phase 1: Pre-Production</h3>
              <ol className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="bg-violet-100 text-violet-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    1
                  </span>
                  <span>Brainstorm story ideas using digital mind mapping tools</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-violet-100 text-violet-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    2
                  </span>
                  <span>Create digital storyboards to plan narrative structure</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-violet-100 text-violet-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    3
                  </span>
                  <span>Research multimedia elements (images, sounds, music)</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-violet-100 text-violet-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    4
                  </span>
                  <span>Plan technical requirements and tool selection</span>
                </li>
              </ol>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-700">Phase 2: Production & Post-Production</h3>
              <ol className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    1
                  </span>
                  <span>Create text content following the complete writing process</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    2
                  </span>
                  <span>Integrate visual elements, audio recordings, and interactive features</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    3
                  </span>
                  <span>Review and revise content for clarity and technical functionality</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    4
                  </span>
                  <span>Prepare for publication and audience sharing</span>
                </li>
              </ol>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Technical Skills Development</h4>
            <p className="text-green-700 text-sm">
              Students learn to use text expansion tools, timeline software, and various digital platforms while
              maintaining focus on narrative quality and audience engagement. Emphasize that technology enhances
              storytelling rather than replacing fundamental writing skills.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Assessment & Portfolio Integration</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-violet-50 p-4 rounded-lg">
              <h4 className="font-semibold text-violet-800 mb-2">Writing Process Assessment</h4>
              <ul className="text-violet-700 text-sm space-y-1">
                <li>• Brainstorming and idea development</li>
                <li>• Organization and story structure</li>
                <li>• Revision and editing quality</li>
                <li>• Use of descriptive language and dialogue</li>
                <li>• Grammar and convention mastery</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Digital Skills Assessment</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Appropriate tool selection and use</li>
                <li>• Integration of multimedia elements</li>
                <li>• Technical problem-solving abilities</li>
                <li>• Digital citizenship and ethics</li>
                <li>• Collaboration in digital environments</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Portfolio Development</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Document the complete creation process</li>
                <li>• Include multiple drafts and revisions</li>
                <li>• Reflect on technical and creative choices</li>
                <li>• Compare digital and traditional storytelling</li>
                <li>• Set goals for future digital projects</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Showcase & Sharing Opportunities</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-purple-700 mb-3">Digital Publishing Options</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Create digital library collections for school website</li>
                <li>• Share stories with partner classrooms globally</li>
                <li>• Publish on appropriate educational platforms</li>
                <li>• Create QR codes for easy story access</li>
                <li>• Develop interactive story exhibitions</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-blue-700 mb-3">Community Connections</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Present stories to families and community members</li>
                <li>• Collaborate with local libraries for showcases</li>
                <li>• Share with younger students as reading mentors</li>
                <li>• Create stories for community organizations</li>
                <li>• Participate in digital storytelling festivals</li>
              </ul>
            </div>
          </div>

          <div className="bg-pink-50 p-4 rounded-lg">
            <h4 className="font-semibold text-pink-800 mb-2">Celebration Ideas</h4>
            <p className="text-pink-700 text-sm mb-2">
              Host a "Digital Storytelling Film Festival" complete with red carpet, author/director interviews, and
              audience Q&A sessions. Students can create movie posters for their stories and present their work using
              various multimedia formats.
            </p>
            <div className="text-pink-600 text-xs">
              <strong>Extension:</strong> Create behind-the-scenes documentaries showing the creation process and
              technical skills learned.
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
