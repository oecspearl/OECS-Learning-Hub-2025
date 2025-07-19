"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, BookOpen, Target, CheckCircle, Star } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function NationalAnthemReflectionPage() {
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
          { label: "National Anthem Reflection", href: "#" },
        ]}
      />

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <BookOpen className="h-8 w-8 text-blue-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">National Anthem Reflection and Identity Exploration</h1>
            <p className="text-lg text-gray-600">Activity 1: National Identity Strand</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            50 minutes
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            Whole Class
          </Badge>
          <Badge variant="outline">National Identity</Badge>
          <Badge variant="outline">Reflection</Badge>
          <Badge variant="outline">Discussion</Badge>
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
                  <span>Students will reflect on their feelings and experiences when singing the national anthem</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Students will understand the concept of national identity and its components</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Students will connect personal pride to broader national identity concepts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Students will identify various elements that contribute to national identity</span>
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
                  <li>• National anthem recording</li>
                  <li>• Chart paper</li>
                  <li>• Markers</li>
                </ul>
                <ul className="space-y-2">
                  <li>• National symbols display</li>
                  <li>• Audio system</li>
                  <li>• Writing materials</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Detailed Procedure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-3 text-blue-600">Opening Ritual (10 minutes)</h4>
                <ul className="space-y-2 ml-4">
                  <li>• Class stands and sings first stanza of national anthem</li>
                  <li>• Maintain respectful posture and attention</li>
                  <li>• Observe student engagement and familiarity</li>
                  <li>• Note students who know the words vs. those who don't</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3 text-blue-600">Immediate Reflection (15 minutes)</h4>
                <p className="mb-3">Guided discussion questions:</p>
                <ul className="space-y-2 ml-4">
                  <li>• How do you feel when singing the anthem?</li>
                  <li>• Why do you think we have a national anthem?</li>
                  <li>• Why do people stand at attention when singing?</li>
                  <li>• What emotions did you notice in yourself and others?</li>
                </ul>
                <p className="mt-3 text-sm text-gray-600">
                  Record key concepts on board: national pride, identity, respect, unity
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3 text-blue-600">Concept Building (15 minutes)</h4>
                <ul className="space-y-2 ml-4">
                  <li>• Introduce term "national identity"</li>
                  <li>• Think-pair-share: "What other things make up our national identity?"</li>
                  <li>• Create class brainstorm list</li>
                  <li>
                    • Categorize responses under headings: symbols, culture, language, history, geography, religion,
                    political systems
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3 text-blue-600">Connection Making (10 minutes)</h4>
                <ul className="space-y-2 ml-4">
                  <li>• Students write personal reflection: "What makes me proud to be from [country name]?"</li>
                  <li>• Share one example with class</li>
                  <li>• Connect personal pride to national identity concept</li>
                  <li>• Emphasize that national identity is both personal and shared</li>
                </ul>
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
                  <h4 className="font-semibold mb-2">Formative Assessment:</h4>
                  <ul className="space-y-1 ml-4">
                    <li>• Observe participation in anthem singing</li>
                    <li>• Quality of discussion contributions</li>
                    <li>• Depth of personal reflection</li>
                    <li>• Understanding demonstrated through categorization activity</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Assessment Criteria:</h4>
                  <ul className="space-y-1 ml-4">
                    <li>• Respectful participation in anthem singing</li>
                    <li>• Thoughtful responses to reflection questions</li>
                    <li>• Ability to identify components of national identity</li>
                    <li>• Personal connection to national pride concepts</li>
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
                  <p className="text-sm text-gray-600">Use symbols and images during discussion</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">ELL Students:</h4>
                  <p className="text-sm text-gray-600">Provide vocabulary support with visual cues</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Kinesthetic Learners:</h4>
                  <p className="text-sm text-gray-600">Use movement during anthem singing</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Advanced Learners:</h4>
                  <p className="text-sm text-gray-600">Research historical context of national anthem</p>
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
                <li>• Research the history and meaning of national anthem lyrics</li>
                <li>• Compare national anthems from different Caribbean countries</li>
                <li>• Create artwork inspired by national identity themes</li>
                <li>• Interview family members about their national pride</li>
                <li>• Write additional verses for the national anthem</li>
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
                  <strong>Music:</strong> Analyze musical elements of national anthem
                </li>
                <li>
                  <strong>Language Arts:</strong> Poetry analysis and creative writing
                </li>
                <li>
                  <strong>History:</strong> Historical context of national symbols
                </li>
                <li>
                  <strong>Art:</strong> Visual representation of national identity
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resources & Technology</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• National anthem audio/video recordings</li>
                <li>• Government websites with national symbols</li>
                <li>• Cultural heritage resources</li>
                <li>• Interactive whiteboard for categorization</li>
                <li>• Digital reflection journals</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
