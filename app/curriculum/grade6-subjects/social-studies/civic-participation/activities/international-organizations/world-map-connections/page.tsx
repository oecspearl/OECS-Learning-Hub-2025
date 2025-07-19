"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Target, CheckCircle, Star, Globe } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function WorldMapConnectionsPage() {
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
            label: "International Organizations",
            href: "/curriculum/grade6-subjects/social-studies/civic-participation/activities/international-organizations",
          },
          { label: "World Map Connections", href: "#" },
        ]}
      />

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <Globe className="h-8 w-8 text-blue-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">World Map International Connections</h1>
            <p className="text-lg text-gray-600">Activity 6: International Organizations Strand</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            45 minutes
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            Small Groups
          </Badge>
          <Badge variant="outline">Geography</Badge>
          <Badge variant="outline">Mapping</Badge>
          <Badge variant="outline">Global Connections</Badge>
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
                  <span>Students will distinguish between regional and international relationships</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Students will identify international organizations their country belongs to</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Students will visualize global connections through mapping</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Students will develop a working definition of international organizations</span>
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
                  <li>• Large world map (wall-mounted or floor)</li>
                  <li>• Colored markers and pens</li>
                  <li>• Connection string or yarn</li>
                  <li>• International organization logos</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Push pins or map markers</li>
                  <li>• Research materials</li>
                  <li>• Sticky notes</li>
                  <li>• Definition worksheets</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key International Organizations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Global Organizations</h4>
                    <ul className="text-sm text-blue-600 mt-2 space-y-1">
                      <li>• United Nations (UN)</li>
                      <li>• World Health Organization (WHO)</li>
                      <li>• UNICEF</li>
                      <li>• World Bank</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800">Regional Organizations</h4>
                    <ul className="text-sm text-green-600 mt-2 space-y-1">
                      <li>• Caribbean Community (CARICOM)</li>
                      <li>• Organization of Eastern Caribbean States (OECS)</li>
                      <li>• Caribbean Development Bank (CDB)</li>
                      <li>• Caribbean Tourism Organization (CTO)</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800">Specialized Agencies</h4>
                    <ul className="text-sm text-purple-600 mt-2 space-y-1">
                      <li>• International Labour Organization (ILO)</li>
                      <li>• Food and Agriculture Organization (FAO)</li>
                      <li>• International Monetary Fund (IMF)</li>
                      <li>• World Trade Organization (WTO)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-800">Headquarters Locations</h4>
                    <ul className="text-sm text-orange-600 mt-2 space-y-1">
                      <li>• New York (UN)</li>
                      <li>• Geneva (WHO)</li>
                      <li>• Georgetown (CARICOM)</li>
                      <li>• Castries (OECS)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Detailed Procedure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-3 text-blue-600">Map Exploration (15 minutes)</h4>
                <ul className="space-y-2 ml-4">
                  <li>• Students use classroom world map to identify regional vs. international countries</li>
                  <li>• Mark their own country with special symbol or flag</li>
                  <li>• Identify neighboring countries and distant nations</li>
                  <li>• Discuss concept of "international" relationships</li>
                  <li>• Explore different continents and major countries</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3 text-blue-600">Connection Visualization (20 minutes)</h4>
                <ul className="space-y-2 ml-4">
                  <li>• Students research which international organizations their country belongs to</li>
                  <li>• Use colored string to connect their country to organization headquarters</li>
                  <li>• Create visual web showing international connections</li>
                  <li>• Add organization logos around map border</li>
                  <li>• Use different colors for different types of organizations</li>
                </ul>

                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <h5 className="font-semibold text-blue-800 mb-2">Connection Categories:</h5>
                  <ul className="space-y-1 text-sm text-blue-700">
                    <li>
                      • <span className="font-semibold">Red string:</span> Political/governance organizations
                    </li>
                    <li>
                      • <span className="font-semibold">Blue string:</span> Economic organizations
                    </li>
                    <li>
                      • <span className="font-semibold">Green string:</span> Environmental/health organizations
                    </li>
                    <li>
                      • <span className="font-semibold">Yellow string:</span> Cultural/educational organizations
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3 text-blue-600">Definition Development (10 minutes)</h4>
                <ul className="space-y-2 ml-4">
                  <li>• Based on observations, students develop definition of "international organization"</li>
                  <li>• Compare student definitions with official definition</li>
                  <li>• Identify key characteristics: multiple countries, shared goals, cooperation</li>
                  <li>• Discuss benefits and challenges of international cooperation</li>
                </ul>

                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                  <h5 className="font-semibold text-green-800 mb-2">Key Characteristics to Identify:</h5>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• Membership from multiple countries</li>
                    <li>• Shared goals and objectives</li>
                    <li>• Formal structure and governance</li>
                    <li>• Regular meetings and cooperation</li>
                    <li>• Specific areas of focus or expertise</li>
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
                  <h4 className="font-semibold mb-2">Observation Assessment:</h4>
                  <ul className="space-y-1 ml-4">
                    <li>• Understanding of international vs. regional concepts</li>
                    <li>• Accuracy in identifying connections</li>
                    <li>• Quality of definition development</li>
                    <li>• Participation in group discussions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Product Assessment:</h4>
                  <ul className="space-y-1 ml-4">
                    <li>• Accuracy of map connections created</li>
                    <li>• Organization of visual display</li>
                    <li>• Quality of written definitions</li>
                    <li>• Understanding demonstrated through explanations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Exit Ticket Questions:</h4>
                  <ul className="space-y-1 ml-4">
                    <li>• What is an international organization?</li>
                    <li>• Name two organizations your country belongs to</li>
                    <li>• Why do countries join international organizations?</li>
                    <li>• What did you learn that surprised you?</li>
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
                  <p className="text-sm text-gray-600">Emphasize map work, color coding, and visual connections</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Kinesthetic Learners:</h4>
                  <p className="text-sm text-gray-600">Hands-on string work, movement around large map</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Advanced Learners:</h4>
                  <p className="text-sm text-gray-600">Research historical development of organizations</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Struggling Learners:</h4>
                  <p className="text-sm text-gray-600">Provide pre-made organization cards, simplified research</p>
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
                <li>• Research the history of specific organizations</li>
                <li>• Create digital interactive map using Google Earth</li>
                <li>• Interview community members about international work</li>
                <li>• Compare membership in different organizations</li>
                <li>• Design a new international organization</li>
                <li>• Track current international news and events</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technology Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Google Earth for virtual exploration</li>
                <li>• Interactive online maps</li>
                <li>• Organization websites for research</li>
                <li>• Digital presentation tools</li>
                <li>• QR codes linking to organization information</li>
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
                  <strong>Geography:</strong> Map skills, spatial relationships, global awareness
                </li>
                <li>
                  <strong>Mathematics:</strong> Distance calculations, data analysis
                </li>
                <li>
                  <strong>Language Arts:</strong> Research skills, definition writing
                </li>
                <li>
                  <strong>Art:</strong> Visual design, color theory in mapping
                </li>
                <li>
                  <strong>Technology:</strong> Digital mapping tools, online research
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Real-World Connections</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Current international events and cooperation</li>
                <li>• Local impact of international organizations</li>
                <li>• Career opportunities in international relations</li>
                <li>• Global citizenship responsibilities</li>
                <li>• Cultural exchange and understanding</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
