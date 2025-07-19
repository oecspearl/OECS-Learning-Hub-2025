"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, Timer, Users, Target, Music, Mic, Globe } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function CaribbeanCultureShowcasePage() {
  return (
    <div className="container mx-auto py-8">
            <Link href="/curriculum/grade5-subjects/activities/language-arts">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Language Arts Activities
        </Button>
      </Link>

      <div className="w-full min-w-full max-w-[100vw] mb-8">
        <div className="bg-gradient-to-r from-emerald-100 to-blue-100 p-6 rounded-xl shadow-md">
          <h1 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-blue-600">
            Caribbean Culture Showcase
          </h1>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Celebrate and explore Caribbean culture through oral presentations, dialect appreciation, and performances
            that honor local traditions while developing sophisticated speaking skills.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-emerald-600" />
              Activity Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The Caribbean Culture Showcase engages Grade 5 learners in celebrating their rich cultural heritage
              through oral presentations, dialect exploration, and artistic performances. Students explore the beauty of
              Caribbean languages, traditions, and artistic expressions while developing advanced speaking and listening
              skills in both Home Languages and Standard English.
            </p>

            <div className="bg-emerald-50 p-4 rounded-lg">
              <h3 className="font-semibold text-emerald-800 mb-2">Cultural Learning Outcomes</h3>
              <ul className="text-emerald-700 space-y-1 text-sm">
                <li>• Distinguish between Standard English and Caribbean varieties</li>
                <li>• Use complex sentences with cultural vocabulary</li>
                <li>• Interpret meanings of words in cultural contexts</li>
                <li>• Appreciate the relationship between language and culture</li>
                <li>• Use figurative and metaphorical meanings appropriately</li>
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
                <strong>Duration:</strong> 3-4 class periods
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-gray-500" />
              <span className="text-sm">
                <strong>Group Size:</strong> Individual & small groups
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-gray-500" />
              <span className="text-sm">
                <strong>Focus:</strong> Cultural appreciation
              </span>
            </div>

            <div className="pt-4">
              <h4 className="font-semibold mb-2">Skills Developed</h4>
              <div className="flex flex-wrap gap-1">
                <Badge>Cultural Appreciation</Badge>
                <Badge>Dialect Recognition</Badge>
                <Badge>Public Speaking</Badge>
                <Badge>Research Skills</Badge>
                <Badge>Performance</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Music className="h-5 w-5 text-blue-600" />
              Showcase Components
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="border-l-4 border-emerald-500 pl-4">
                <h4 className="font-semibold text-emerald-700">Cultural Artifacts Gallery</h4>
                <p className="text-sm text-gray-600">
                  Present traditional objects, instruments, and artifacts with cultural significance
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-blue-700">Dialect Appreciation Corner</h4>
                <p className="text-sm text-gray-600">
                  Explore stories, poems, and songs in local dialects and Standard English
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-purple-700">Musical Heritage Performance</h4>
                <p className="text-sm text-gray-600">
                  Perform and analyze Caribbean musical genres and their cultural messages
                </p>
              </div>

              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="font-semibold text-amber-700">Storytelling Circle</h4>
                <p className="text-sm text-gray-600">Share folktales and traditional stories from Caribbean cultures</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mic className="h-5 w-5 text-green-600" />
              Resources & Materials
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                Traditional Caribbean artifacts (clothing, instruments, tools)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                "Song of the Banana Man" video: https://www.youtube.com/watch?v=FXjdjCyYG80
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                Caribbean music from various genres (calypso, reggae, soca)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                Collections of Caribbean folktales and stories
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                Recording devices for dialect comparisons
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                Chart paper for dialect/Standard English comparisons
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Step-by-Step Implementation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-emerald-700">Phase 1: Cultural Exploration</h3>
              <ol className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="bg-emerald-100 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    1
                  </span>
                  <span>Begin with a "Show, Tell, Discuss" session where learners bring cultural artifacts</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-emerald-100 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    2
                  </span>
                  <span>
                    Listen to "Song of the Banana Man" and analyze dialect words and Standard English versions
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-emerald-100 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    3
                  </span>
                  <span>Create dialect/Standard English comparison charts collaboratively</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-emerald-100 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    4
                  </span>
                  <span>Research cultural significance and historical context of artifacts and traditions</span>
                </li>
              </ol>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-700">Phase 2: Showcase Preparation</h3>
              <ol className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    1
                  </span>
                  <span>Organize learners into showcase stations (artifacts, music, stories, dialect)</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    2
                  </span>
                  <span>Practice presentations incorporating both Home Languages and Standard English</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    3
                  </span>
                  <span>Prepare musical performances with cultural context explanations</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    4
                  </span>
                  <span>Rehearse storytelling with appropriate expression and cultural sensitivity</span>
                </li>
              </ol>
            </div>
          </div>

          <div className="bg-amber-50 p-4 rounded-lg">
            <h4 className="font-semibold text-amber-800 mb-2">Special Focus: Creole Day Integration</h4>
            <p className="text-amber-700 text-sm">
              Schedule this showcase to coincide with cultural celebrations like Creole Day. Create opportunities for
              learners to perform and dramatize dialect in various art forms, fostering appreciation of language
              diversity and cultural heritage.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Assessment & Reflection</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Assessment Criteria</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Cultural knowledge and research accuracy</li>
                <li>• Appropriate use of dialect and Standard English</li>
                <li>• Clear pronunciation and expression</li>
                <li>• Respectful presentation of cultural elements</li>
                <li>• Audience engagement and interaction</li>
                <li>• Understanding of cultural significance</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Reflection Activities</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Create a class booklet of "Local Artifacts Then and Now"</li>
                <li>• Record videos comparing dialect and Standard English</li>
                <li>• Write personal reflections on cultural identity</li>
                <li>• Interview family members about cultural traditions</li>
                <li>• Research other Caribbean islands' cultural expressions</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Cross-Curricular Extensions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Social Studies</h4>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>• Research Caribbean history and migration patterns</li>
                <li>• Study the influence of different cultures on Caribbean society</li>
                <li>• Explore traditional occupations and their tools</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Arts</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Create traditional crafts and artwork</li>
                <li>• Learn traditional dances and their meanings</li>
                <li>• Design cultural exhibition displays</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Science</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Study traditional medicine and plants</li>
                <li>• Explore traditional cooking methods and food preservation</li>
                <li>• Investigate materials used in traditional crafts</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
