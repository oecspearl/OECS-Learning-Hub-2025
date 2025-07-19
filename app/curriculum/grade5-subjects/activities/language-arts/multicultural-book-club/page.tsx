"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, Timer, Users, Target, BookOpen, Globe, MessageCircle } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function MulticulturalBookClubPage() {
  return (
    <div className="container mx-auto py-8">
            <Link href="/curriculum/grade5-subjects/activities/language-arts">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Language Arts Activities
        </Button>
      </Link>

      <div className="w-full min-w-full max-w-[100vw] mb-8">
        <div className="bg-gradient-to-r from-teal-100 to-indigo-100 p-6 rounded-xl shadow-md">
          <h1 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-indigo-600">
            Multicultural Book Club
          </h1>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Explore diverse cultures through literature while developing critical reading skills, cultural awareness,
            and appreciation for different perspectives through Caribbean and global texts.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-teal-600" />
              Activity Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The Multicultural Book Club engages Grade 5 learners in reading and discussing literature from Caribbean
              and global cultures. Students develop critical thinking skills while exploring themes, settings, and
              characters that reflect diverse cultural experiences and perspectives.
            </p>

            <div className="bg-teal-50 p-4 rounded-lg">
              <h3 className="font-semibold text-teal-800 mb-2">Reading & Viewing Focus (ELO 2)</h3>
              <ul className="text-teal-700 space-y-1 text-sm">
                <li>• Read widely and experience literature from Caribbean and other cultures</li>
                <li>• Use background knowledge to better comprehend topics and themes</li>
                <li>• Share connections between experiences and book themes/settings</li>
                <li>• Develop critical questioning strategies for various perspectives</li>
                <li>• Apply higher-order thinking skills for critical evaluation</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Timer className="h-5 w-5 text-green-600" />
              Activity Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <Timer className="h-4 w-4 text-gray-500" />
              <span className="text-sm">
                <strong>Duration:</strong> 4-6 weeks
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-gray-500" />
              <span className="text-sm">
                <strong>Group Size:</strong> 4-6 students per group
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-gray-500" />
              <span className="text-sm">
                <strong>Focus:</strong> Cultural literacy
              </span>
            </div>

            <div className="pt-4">
              <h4 className="font-semibold mb-2">Skills Developed</h4>
              <div className="flex flex-wrap gap-1">
                <Badge>Cultural Analysis</Badge>
                <Badge>Critical Reading</Badge>
                <Badge>Comparison Skills</Badge>
                <Badge>Discussion Leadership</Badge>
                <Badge>Global Awareness</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-blue-600" />
              Cultural Literature Selection
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="border-l-4 border-teal-500 pl-4">
                <h4 className="font-semibold text-teal-700">Caribbean Literature</h4>
                <p className="text-sm text-gray-600">
                  Stories, poems, and folktales from various Caribbean islands and authors
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-blue-700">Global Perspectives</h4>
                <p className="text-sm text-gray-600">
                  Literature from Americas (Maya, Aztec, Inca civilizations) and other cultures
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-purple-700">Contemporary Voices</h4>
                <p className="text-sm text-gray-600">
                  Modern authors addressing current cultural themes and experiences
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-green-700">Traditional Tales</h4>
                <p className="text-sm text-gray-600">Folktales, myths, and legends from diverse cultural traditions</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-green-600" />
              Discussion Framework
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                Cultural context and historical background
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                Character analysis and cultural representation
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                Themes and universal human experiences
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                Comparison between cultures and perspectives
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                Stereotypes vs. authentic representation
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                Personal connections and reflections
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Implementation Guide</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-teal-700">Phase 1: Book Selection & Preparation</h3>
              <ol className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="bg-teal-100 text-teal-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    1
                  </span>
                  <span>Assign learners to small groups based on interests and reading levels</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-teal-100 text-teal-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    2
                  </span>
                  <span>Present book options highlighting different cultural backgrounds</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-teal-100 text-teal-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    3
                  </span>
                  <span>Introduce cultural context and historical background for each selection</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-teal-100 text-teal-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    4
                  </span>
                  <span>Establish reading schedules and discussion meeting times</span>
                </li>
              </ol>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-700">Phase 2: Reading & Discussion Cycles</h3>
              <ol className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    1
                  </span>
                  <span>Conduct weekly book club meetings with structured discussions</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    2
                  </span>
                  <span>Rotate discussion leadership roles among group members</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    3
                  </span>
                  <span>Compare and contrast themes across different cultural texts</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    4
                  </span>
                  <span>Create visual comparisons and cultural analysis charts</span>
                </li>
              </ol>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-800 mb-2">Critical Thinking Focus</h4>
            <p className="text-purple-700 text-sm">
              Encourage learners to think critically about cultural representation. Guide discussions about authentic
              vs. stereotypical portrayals, and help students understand how literature can both bridge and sometimes
              misrepresent cultural experiences.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Discussion Activities & Strategies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-teal-50 p-4 rounded-lg">
              <h4 className="font-semibold text-teal-800 mb-2">Text-to-Self Connections</h4>
              <ul className="text-teal-700 text-sm space-y-1">
                <li>• Personal cultural experiences and traditions</li>
                <li>• Family stories and heritage connections</li>
                <li>• Community celebrations and practices</li>
                <li>• Language use in home and community</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Text-to-Text Connections</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Compare similar themes across cultures</li>
                <li>• Analyze different cultural responses to universal experiences</li>
                <li>• Identify common human values and differences</li>
                <li>• Examine narrative structures and storytelling styles</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Text-to-World Connections</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Current events and cultural issues</li>
                <li>• Historical context and its impact today</li>
                <li>• Global perspectives on shared challenges</li>
                <li>• Cultural preservation and change</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Assessment & Showcase Options</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-purple-700 mb-3">Assessment Strategies</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Reading response journals with cultural analysis</li>
                <li>• Group discussion participation rubrics</li>
                <li>• Character analysis comparing cultural contexts</li>
                <li>• Cultural comparison charts and presentations</li>
                <li>• Book recommendation presentations to other classes</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-blue-700 mb-3">Showcase Activities</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Multicultural literature fair with book displays</li>
                <li>• Cross-cultural theme presentations</li>
                <li>• Author study projects featuring diverse writers</li>
                <li>• Creative adaptations (skits, artwork, music)</li>
                <li>• Community sharing events with families</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 p-4 rounded-lg">
            <h4 className="font-semibold text-amber-800 mb-2">Cross-Curricular Integration</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-amber-700 text-sm mb-2">
                  <strong>Social Studies:</strong>
                </p>
                <ul className="text-amber-600 text-xs space-y-1">
                  <li>• Research historical contexts of literature settings</li>
                  <li>• Study migration patterns and cultural exchanges</li>
                  <li>• Explore impact of colonization on Caribbean cultures</li>
                </ul>
              </div>
              <div>
                <p className="text-amber-700 text-sm mb-2">
                  <strong>Arts Integration:</strong>
                </p>
                <ul className="text-amber-600 text-xs space-y-1">
                  <li>• Create visual representations of cultural themes</li>
                  <li>• Compose music inspired by literary themes</li>
                  <li>• Design book covers reflecting cultural elements</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
