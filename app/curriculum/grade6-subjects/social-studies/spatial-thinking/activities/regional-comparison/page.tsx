import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Clock, Users, Target, CheckCircle, BarChart3, Globe, MapPin } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export default function RegionalComparisonPage() {
  return (
    <div className="container mx-auto py-8">
            <Link href="/curriculum/grade6-subjects/social-studies/spatial-thinking/activities">
        <Button variant="outline" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Spatial Thinking Activities
        </Button>
      </Link>

      <div className="mb-8">
        <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-orange-700 flex items-center">
            <BarChart3 className="mr-2 h-7 w-7 text-orange-600" />
            Regional Comparison and Analysis
          </h1>
          <p className="text-gray-700 mb-4">
            Students compare and classify countries by climatic zones, analyzing similarities and differences in climate
            patterns, human adaptations, and economic activities across different regions.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="flex items-center">
              <Clock className="mr-1 h-3 w-3" />
              50 minutes
            </Badge>
            <Badge variant="secondary" className="flex items-center">
              <Users className="mr-1 h-3 w-3" />
              Individual & Pairs
            </Badge>
            <Badge variant="secondary" className="flex items-center">
              <Target className="mr-1 h-3 w-3" />
              Comparative Analysis
            </Badge>
          </div>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="materials">Materials</TabsTrigger>
          <TabsTrigger value="procedure">Procedure</TabsTrigger>
          <TabsTrigger value="differentiation">Differentiation</TabsTrigger>
          <TabsTrigger value="assessment">Assessment</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="mr-2 h-5 w-5 text-orange-600" />
                  Learning Objectives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Classify countries by their dominant climatic zones</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Compare climate characteristics across regions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Analyze human adaptations to different climates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Create comparative charts and graphs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                    <span>Identify patterns in climate-economy relationships</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="mr-2 h-5 w-5 text-red-600" />
                  Comparison Categories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-700 mb-2">Climate Data</h4>
                    <p className="text-sm text-orange-600">Temperature ranges, precipitation, seasonal patterns</p>
                  </div>
                  <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-700 mb-2">Human Adaptations</h4>
                    <p className="text-sm text-red-600">Housing, clothing, lifestyle, cultural practices</p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h4 className="font-semibold text-yellow-700 mb-2">Economic Activities</h4>
                    <p className="text-sm text-yellow-600">Agriculture, industry, tourism, natural resources</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-700 mb-2">Challenges</h4>
                    <p className="text-sm text-green-600">Environmental issues, natural disasters, limitations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="materials">
          <Card>
            <CardHeader>
              <CardTitle>Required Materials</CardTitle>
              <CardDescription>Resources needed for regional comparison and analysis activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-orange-700">Data & Maps</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <BarChart3 className="mr-2 h-4 w-4 text-orange-500" />
                      World climate zone map
                    </li>
                    <li className="flex items-center">
                      <BarChart3 className="mr-2 h-4 w-4 text-orange-500" />
                      Country climate data sheets
                    </li>
                    <li className="flex items-center">
                      <BarChart3 className="mr-2 h-4 w-4 text-orange-500" />
                      Comparison chart templates
                    </li>
                    <li className="flex items-center">
                      <BarChart3 className="mr-2 h-4 w-4 text-orange-500" />
                      Calculators for data analysis
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-red-700">Analysis Tools</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-red-500" />
                      Colored pencils for coding
                    </li>
                    <li className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-red-500" />
                      Graph paper for charts
                    </li>
                    <li className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-red-500" />
                      Rulers for precise measurements
                    </li>
                    <li className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-red-500" />
                      Sticky notes for categorizing
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-700 mb-2">Sample Countries for Comparison</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-blue-600 mb-1">Tropical Zone:</p>
                    <ul className="text-blue-600 space-y-1">
                      <li>• Brazil (Amazon region)</li>
                      <li>• Democratic Republic of Congo</li>
                      <li>• Indonesia</li>
                      <li>• Caribbean islands</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-blue-600 mb-1">Temperate Zone:</p>
                    <ul className="text-blue-600 space-y-1">
                      <li>• United Kingdom</li>
                      <li>• Japan</li>
                      <li>• Eastern United States</li>
                      <li>• Parts of Argentina</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-blue-600 mb-1">Arid Zone:</p>
                    <ul className="text-blue-600 space-y-1">
                      <li>• Egypt (Sahara Desert)</li>
                      <li>• Australia (Outback)</li>
                      <li>• Saudi Arabia</li>
                      <li>• Southwestern United States</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="procedure">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Step-by-Step Procedure</CardTitle>
                <CardDescription>Detailed instructions for regional comparison and analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-orange-700 mb-2">Step 1: Country Classification (15 minutes)</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Provide students with list of 12-15 countries from different climatic zones</li>
                      <li>• Students use world climate map to classify each country by dominant climate zone</li>
                      <li>• Create color-coded classification system:</li>
                      <li className="ml-4">- Red: Tropical zones</li>
                      <li className="ml-4">- Orange: Arid/Desert zones</li>
                      <li className="ml-4">- Green: Temperate zones</li>
                      <li className="ml-4">- Blue: Polar zones</li>
                      <li>• Students mark countries on their maps using appropriate colors</li>
                      <li>• Verify classifications through class discussion</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold text-red-700 mb-2">
                      Step 2: Data Collection and Analysis (20 minutes)
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Students work in pairs to collect climate data for assigned countries</li>
                      <li>• Use provided data sheets to record:</li>
                      <li className="ml-4">- Average annual temperature</li>
                      <li className="ml-4">- Temperature range (highest/lowest)</li>
                      <li className="ml-4">- Annual precipitation amounts</li>
                      <li className="ml-4">- Number of distinct seasons</li>
                      <li>• Calculate averages for each climatic zone</li>
                      <li>• Identify patterns and extremes within zones</li>
                      <li>• Note any countries that don't fit typical patterns</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h3 className="font-semibold text-yellow-700 mb-2">
                      Step 3: Comparative Chart Creation (10 minutes)
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Students create comparison charts showing:</li>
                      <li className="ml-4">- Climate zone vs. average temperature</li>
                      <li className="ml-4">- Climate zone vs. precipitation levels</li>
                      <li className="ml-4">- Human adaptations by climate zone</li>
                      <li className="ml-4">- Economic activities by climate zone</li>
                      <li>• Use bar graphs, pie charts, or tables as appropriate</li>
                      <li>• Include Caribbean countries in comparisons</li>
                      <li>• Add visual elements to enhance understanding</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-green-700 mb-2">
                      Step 4: Pattern Analysis and Conclusions (5 minutes)
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Students analyze their charts to identify patterns:</li>
                      <li className="ml-4">- Which climate zones have most/least variation?</li>
                      <li className="ml-4">- How do human activities relate to climate?</li>
                      <li className="ml-4">- What challenges are common to each zone?</li>
                      <li className="ml-4">- How does Caribbean climate compare to others?</li>
                      <li>• Write 3-4 conclusion statements based on data</li>
                      <li>• Prepare to share one interesting discovery with class</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="differentiation">
          <Card>
            <CardHeader>
              <CardTitle>Differentiation Strategies</CardTitle>
              <CardDescription>Adaptations for diverse analytical and mathematical skill levels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <h3 className="font-semibold text-orange-700 mb-3 flex items-center">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Data-Oriented Learners
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Provide additional statistical analysis tasks</li>
                    <li>• Calculate standard deviations and ranges</li>
                    <li>• Create more complex comparative graphs</li>
                    <li>• Research historical climate data trends</li>
                    <li>• Use spreadsheet software for calculations</li>
                  </ul>
                </div>

                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <h3 className="font-semibold text-red-700 mb-3 flex items-center">
                    <Globe className="mr-2 h-4 w-4" />
                    Visual Learners
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Use color-coding extensively for organization</li>
                    <li>• Create pictorial charts and infographics</li>
                    <li>• Add maps and visual representations</li>
                    <li>• Use symbols and icons for data categories</li>
                    <li>• Encourage creative chart designs</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-700 mb-3 flex items-center">
                    <Target className="mr-2 h-4 w-4" />
                    Struggling Learners
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Provide pre-filled data templates</li>
                    <li>• Focus on 2-3 countries per climate zone</li>
                    <li>• Use simplified comparison categories</li>
                    <li>• Offer step-by-step calculation guides</li>
                    <li>• Allow partner support for data analysis</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h3 className="font-semibold text-yellow-700 mb-2">Mathematical Support</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Provide calculators for all students</li>
                  <li>• Review averaging and basic statistics concepts</li>
                  <li>• Offer graph paper and rulers for precise charts</li>
                  <li>• Create templates for different chart types</li>
                  <li>• Allow flexibility in presentation format</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assessment">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Assessment Strategies</CardTitle>
                <CardDescription>
                  Methods for evaluating analytical thinking and data interpretation skills
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-orange-700">Data Analysis Skills</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                        <span>Accurate country classification by climate zone</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                        <span>Correct data collection and recording</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                        <span>Appropriate chart creation and labeling</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                        <span>Mathematical calculations and averages</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 text-red-700">Critical Thinking</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Target className="mr-2 h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Identification of patterns and trends</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="mr-2 h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Quality of comparative analysis</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="mr-2 h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Logical conclusions based on data</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="mr-2 h-4 w-4 text-blue-500 mt-0.5" />
                        <span>Understanding of climate-human relationships</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Assessment Checklist</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-orange-700">Technical Skills:</h4>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Correctly classifies countries by climate zone</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Accurately records climate data</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Creates clear, labeled charts</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Performs calculations correctly</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Uses appropriate colors and symbols</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-red-700">Analytical Skills:</h4>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Identifies meaningful patterns in data</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Makes logical comparisons between regions</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Draws evidence-based conclusions</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Connects climate to human activities</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Relates findings to Caribbean context</span>
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8 p-6 bg-orange-50 rounded-lg border border-orange-200">
        <h3 className="text-lg font-semibold mb-4 text-orange-700">Extension Activities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2">Advanced Analysis:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Research climate change impacts on different zones</li>
              <li>Analyze economic development patterns by climate</li>
              <li>Create predictive models for climate adaptation</li>
              <li>Compare historical vs. current climate data</li>
              <li>Investigate micro-climates within larger zones</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Cross-Curricular Connections:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <strong>Mathematics:</strong> Statistics, graphing, and data analysis
              </li>
              <li>
                <strong>Science:</strong> Climate systems and environmental science
              </li>
              <li>
                <strong>Economics:</strong> Resource distribution and trade patterns
              </li>
              <li>
                <strong>Technology:</strong> Spreadsheet and graphing software
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
