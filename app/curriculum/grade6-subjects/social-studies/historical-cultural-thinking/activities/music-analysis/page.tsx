import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Clock, Users, Music, CheckCircle, AlertCircle, Lightbulb, Headphones } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function MusicAnalysisPage() {
  return (
    <div className="container mx-auto py-8">
            <Link href="/curriculum/grade6-subjects/social-studies/historical-cultural-thinking/activities">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Activities
        </Button>
      </Link>

      <div className="mb-8">
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-purple-700 flex items-center">
            <Music className="mr-2 h-7 w-7 text-purple-600" />
            Unity Music Analysis - Caribbean Arts & Sports
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary" className="flex items-center">
              <Clock className="mr-1 h-3 w-3" />
              60 minutes
            </Badge>
            <Badge variant="secondary" className="flex items-center">
              <Users className="mr-1 h-3 w-3" />
              Individual & Pairs
            </Badge>
            <Badge variant="outline">Music Analysis & Cultural Studies</Badge>
          </div>
          <p className="text-gray-700">
            Students analyze Caribbean music that promotes unity and cultural pride, examining lyrics, themes, and
            cultural significance while connecting to regional identity and social cohesion.
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
                <CardTitle className="flex items-center text-purple-700">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Learning Objectives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Analyze Caribbean music for themes of unity and cultural pride
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Identify musical elements that reflect Caribbean identity
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Connect music to historical and social contexts
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Develop critical listening and analysis skills
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Appreciate music as a tool for social unity and cultural expression
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-purple-700">
                  <Lightbulb className="mr-2 h-5 w-5" />
                  Featured Music Genres
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-purple-600">Calypso & Soca</h4>
                    <p className="text-sm text-gray-600">Social commentary, carnival spirit, unity themes</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Reggae</h4>
                    <p className="text-sm text-gray-600">Peace, love, unity messages, Rastafarian influence</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Dancehall</h4>
                    <p className="text-sm text-gray-600">Youth culture, social issues, community pride</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Chutney & Parang</h4>
                    <p className="text-sm text-gray-600">Cultural fusion, celebration, traditional values</p>
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
                <CardTitle className="text-purple-700">Step-by-Step Procedure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold text-purple-700 mb-2">
                      1. Introduction to Music Analysis (10 minutes)
                    </h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Discuss the role of music in Caribbean culture and society</li>
                      <li>• Introduce concept of music as social commentary and unity builder</li>
                      <li>• Explain analysis framework: lyrics, rhythm, cultural context</li>
                      <li>• Distribute analysis worksheets and listening guides</li>
                      <li>• Set expectations for respectful listening and discussion</li>
                      <li>• Preview the selected songs and their historical contexts</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-blue-700 mb-2">2. First Listening Session (15 minutes)</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Play 3-4 selected Caribbean unity songs</li>
                      <li>• Students listen for overall themes and emotions</li>
                      <li>• Focus on first impressions and general messages</li>
                      <li>• Note musical elements: tempo, instruments, vocal style</li>
                      <li>• Record initial thoughts on analysis worksheets</li>
                      <li>• Discuss immediate reactions and observations</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-green-700 mb-2">3. Detailed Analysis Phase (20 minutes)</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Students work in pairs to analyze one assigned song</li>
                      <li>• Examine lyrics line by line for unity themes</li>
                      <li>• Identify specific references to Caribbean culture and identity</li>
                      <li>• Analyze musical elements that support the message</li>
                      <li>• Research historical context and artist background</li>
                      <li>• Complete detailed analysis using provided framework</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-orange-700 mb-2">4. Sharing and Discussion (15 minutes)</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Pairs present their song analysis to the class</li>
                      <li>• Highlight key unity themes and cultural elements</li>
                      <li>• Play excerpts to support their analysis points</li>
                      <li>• Class discusses connections between different songs</li>
                      <li>• Explore how music builds community and cultural pride</li>
                      <li>• Reflect on music's role in Caribbean social movements</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-purple-700">
                  <Headphones className="mr-2 h-5 w-5" />
                  Analysis Framework
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-purple-600">Lyrical Analysis</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Identify unity and togetherness themes</li>
                      <li>• Look for cultural pride expressions</li>
                      <li>• Note references to Caribbean places and traditions</li>
                      <li>• Analyze social commentary and messages</li>
                      <li>• Examine language use (dialect, standard English)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-purple-600">Musical Elements</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Rhythm patterns and their cultural significance</li>
                      <li>• Traditional instruments vs. modern elements</li>
                      <li>• Vocal style and delivery</li>
                      <li>• Call and response patterns</li>
                      <li>• Overall mood and energy</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-purple-600">Cultural Context</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Historical period and social conditions</li>
                      <li>• Artist's background and motivations</li>
                      <li>• Connection to Caribbean movements or events</li>
                      <li>• Influence on community and society</li>
                      <li>• Legacy and continued relevance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-purple-600">Unity Themes</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Messages of togetherness and solidarity</li>
                      <li>• Celebration of diversity within unity</li>
                      <li>• Calls for peace and understanding</li>
                      <li>• Pride in Caribbean identity and heritage</li>
                      <li>• Vision for collective progress and success</li>
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
                <CardTitle className="text-purple-700">Required Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Audio system with good quality speakers
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Selected Caribbean unity songs (playlist)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Printed lyrics for each song
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Music analysis worksheets
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Artist biography information sheets
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Historical context reference materials
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Notebooks for individual reflections
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-purple-700">Featured Songs Selection</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-700 mb-2">"One Love" - Bob Marley</h4>
                    <p className="text-sm">
                      Classic reggae anthem promoting unity, peace, and love across all people. Examines Rastafarian
                      philosophy and its influence on Caribbean consciousness.
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-700 mb-2">"Together We Stand" - Various Soca Artists</h4>
                    <p className="text-sm">
                      Contemporary soca collaboration celebrating Caribbean unity and strength through diversity.
                      Features multiple artists from different islands.
                    </p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-700 mb-2">"Caribbean Unity" - David Rudder</h4>
                    <p className="text-sm">
                      Calypso masterpiece calling for regional integration and cultural pride. Addresses political and
                      social unity across Caribbean nations.
                    </p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h4 className="font-semibold text-yellow-700 mb-2">"We Are One" - Caribbean Artists Collective</h4>
                    <p className="text-sm">
                      Multi-genre collaboration featuring calypso, reggae, and chutney elements. Celebrates cultural
                      fusion and shared Caribbean identity.
                    </p>
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
                <CardTitle className="text-purple-700">Assessment Rubric</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-purple-50">
                        <th className="border border-gray-300 p-2 text-left">Criteria</th>
                        <th className="border border-gray-300 p-2 text-center">Excellent (4)</th>
                        <th className="border border-gray-300 p-2 text-center">Good (3)</th>
                        <th className="border border-gray-300 p-2 text-center">Satisfactory (2)</th>
                        <th className="border border-gray-300 p-2 text-center">Needs Improvement (1)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Lyrical Analysis</td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Identifies and explains multiple unity themes with specific examples
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Identifies several unity themes with good examples
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Identifies basic unity themes with some examples
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Limited identification of themes with few examples
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Cultural Understanding</td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Demonstrates deep understanding of Caribbean cultural context
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Shows good understanding of cultural significance
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Shows basic understanding of cultural elements
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Limited understanding of cultural context
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Musical Analysis</td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Analyzes musical elements and their connection to themes effectively
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Good analysis of musical elements and themes
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">Basic analysis of musical elements</td>
                        <td className="border border-gray-300 p-2 text-sm">Limited analysis of musical components</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-medium">Presentation</td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Clear, engaging presentation with excellent use of examples
                        </td>
                        <td className="border border-gray-300 p-2 text-sm">Good presentation with relevant examples</td>
                        <td className="border border-gray-300 p-2 text-sm">Adequate presentation with some examples</td>
                        <td className="border border-gray-300 p-2 text-sm">
                          Unclear presentation with limited examples
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-purple-700">
                  <AlertCircle className="mr-2 h-5 w-5" />
                  Extension Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-purple-600">Individual Extensions</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <strong>Artist Biography:</strong> Research a Caribbean artist who promotes unity through music
                      </li>
                      <li>
                        <strong>Song Comparison:</strong> Compare unity themes across different Caribbean music genres
                      </li>
                      <li>
                        <strong>Personal Playlist:</strong> Create a playlist of Caribbean unity songs with explanations
                      </li>
                      <li>
                        <strong>Music Timeline:</strong> Create timeline showing evolution of unity themes in Caribbean
                        music
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-purple-600">Class Extensions</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <strong>Unity Concert:</strong> Organize school performance featuring Caribbean unity songs
                      </li>
                      <li>
                        <strong>Music Video Analysis:</strong> Examine visual elements in Caribbean music videos
                      </li>
                      <li>
                        <strong>Community Interview:</strong> Interview local musicians about music's role in unity
                      </li>
                      <li>
                        <strong>Cross-Cultural Study:</strong> Compare Caribbean unity music with other world music
                      </li>
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
