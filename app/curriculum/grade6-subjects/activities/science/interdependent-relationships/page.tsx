"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumb } from "@/components/breadcrumb"
import { Clock, Users, Target, TreePine, Fish } from "lucide-react"

export default function InterdependentRelationshipsActivitiesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Curriculum", href: "/curriculum" },
          { label: "Grade 6 Subjects", href: "/curriculum/grade6-subjects" },
          { label: "Science Activities", href: "/curriculum/grade6-subjects/activities/science" },
          {
            label: "Interdependent Relationships",
            href: "/curriculum/grade6-subjects/activities/science/interdependent-relationships",
          },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Interdependent Relationships in Ecosystems Activities</h1>
        <p className="text-xl text-gray-600 mb-6">
          Investigate complex ecosystem interactions through field studies and controlled experiments focusing on
          Caribbean biodiversity and conservation.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Activity 1: Coral Reef Ecosystem Investigation */}
        <Card className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-cyan-50 to-blue-50">
            <CardTitle className="text-2xl text-gray-900">
              Activity 1: Caribbean Coral Reef Ecosystem Analysis
            </CardTitle>
            <CardDescription className="text-gray-600">
              Investigate symbiotic relationships and biodiversity patterns in coral reef ecosystems
            </CardDescription>
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4" />
                <span>120 minutes</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4" />
                <span>Teams of 4</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Target className="h-4 w-4" />
                <span>Ecosystem interactions & biodiversity assessment</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Learning Objectives</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Analyze symbiotic relationships in coral reef systems</li>
                  <li>• Investigate biodiversity patterns and species interactions</li>
                  <li>• Evaluate human impacts on reef ecosystem health</li>
                  <li>• Design conservation strategies for reef protection</li>
                  <li>• Connect reef health to Caribbean economic systems</li>
                </ul>

                <h4 className="font-semibold text-gray-900 mb-3 mt-6">Field Study Equipment</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Underwater viewing boxes or snorkel gear</li>
                  <li>• Waterproof identification guides</li>
                  <li>• Quadrat frames for sampling</li>
                  <li>• pH testing kits and thermometers</li>
                  <li>• Underwater cameras or drawing materials</li>
                  <li>• Data collection sheets in waterproof cases</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Investigation Process</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center text-xs font-semibold text-cyan-600">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Ecosystem Mapping (40 minutes)</p>
                      <p className="text-sm text-gray-600">Map reef zones and identify key species relationships</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center text-xs font-semibold text-cyan-600">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Biodiversity Assessment (50 minutes)</p>
                      <p className="text-sm text-gray-600">
                        Conduct systematic species counts and behavior observations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center text-xs font-semibold text-cyan-600">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Health Assessment (30 minutes)</p>
                      <p className="text-sm text-gray-600">Evaluate coral bleaching and ecosystem stress indicators</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400">
                  <div className="flex items-start gap-2">
                    <Fish className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-800">Key Relationships</h4>
                      <ul className="text-blue-700 text-sm mt-1">
                        <li>• Coral-zooxanthellae symbiosis</li>
                        <li>• Cleaner fish-client relationships</li>
                        <li>• Predator-prey dynamics</li>
                        <li>• Territorial and feeding behaviors</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-3">Reef Zone Analysis</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h5 className="font-medium text-blue-800">Fore Reef Zone</h5>
                  <ul className="text-sm text-blue-700 mt-2 space-y-1">
                    <li>• High wave energy environment</li>
                    <li>• Dominant hard coral species</li>
                    <li>• Large predatory fish populations</li>
                    <li>• Maximum biodiversity area</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h5 className="font-medium text-green-800">Reef Crest</h5>
                  <ul className="text-sm text-green-700 mt-2 space-y-1">
                    <li>• Shallow, high-energy zone</li>
                    <li>• Specialized coral adaptations</li>
                    <li>• Algae-grazing fish communities</li>
                    <li>• Wave-resistant species</li>
                  </ul>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h5 className="font-medium text-yellow-800">Back Reef Lagoon</h5>
                  <ul className="text-sm text-yellow-700 mt-2 space-y-1">
                    <li>• Protected, low-energy environment</li>
                    <li>• Seagrass and soft coral habitats</li>
                    <li>• Juvenile fish nursery areas</li>
                    <li>• High sediment tolerance species</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-3">Conservation Challenge Analysis</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-red-50 rounded-lg">
                  <h5 className="font-medium text-red-800">Threat Assessment</h5>
                  <ul className="text-sm text-red-700 mt-2 space-y-1">
                    <li>• Climate change and ocean acidification</li>
                    <li>• Coastal development and sedimentation</li>
                    <li>• Overfishing and destructive practices</li>
                    <li>• Pollution and nutrient runoff</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h5 className="font-medium text-green-800">Conservation Strategies</h5>
                  <ul className="text-sm text-green-700 mt-2 space-y-1">
                    <li>• Marine protected area establishment</li>
                    <li>• Sustainable tourism practices</li>
                    <li>• Coral restoration and transplantation</li>
                    <li>• Community-based management programs</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Activity 2: Rainforest Canopy Ecosystem */}
        <Card className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
            <CardTitle className="text-2xl text-gray-900">
              Activity 2: Caribbean Rainforest Vertical Ecosystem Investigation
            </CardTitle>
            <CardDescription className="text-gray-600">
              Explore biodiversity and ecological niches across rainforest canopy layers
            </CardDescription>
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4" />
                <span>100 minutes</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4" />
                <span>Teams of 3</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Target className="h-4 w-4" />
                <span>Vertical stratification & niche analysis</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Learning Objectives</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Investigate vertical stratification in tropical rainforests</li>
                  <li>• Analyze ecological niches and resource partitioning</li>
                  <li>• Study pollination and seed dispersal networks</li>
                  <li>• Evaluate endemic species and conservation priorities</li>
                  <li>• Connect forest health to watershed protection</li>
                </ul>

                <h4 className="font-semibold text-gray-900 mb-3 mt-6">Canopy Study Tools</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Binoculars for canopy observations</li>
                  <li>• Measuring tapes and clinometers</li>
                  <li>• Light meters and humidity sensors</li>
                  <li>• Sound recording equipment</li>
                  <li>• Plant and animal identification guides</li>
                  <li>• Sampling nets and collection containers</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Stratification Study</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-xs font-semibold text-green-600">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Layer Characterization (35 minutes)</p>
                      <p className="text-sm text-gray-600">Map forest layers and measure environmental gradients</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-xs font-semibold text-green-600">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Species Distribution Analysis (45 minutes)</p>
                      <p className="text-sm text-gray-600">Document species preferences and adaptations by layer</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-xs font-semibold text-green-600">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Interaction Network Mapping (20 minutes)</p>
                      <p className="text-sm text-gray-600">Identify key ecological relationships and dependencies</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-emerald-50 border-l-4 border-emerald-400">
                  <div className="flex items-start gap-2">
                    <TreePine className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-emerald-800">Forest Layers</h4>
                      <ul className="text-emerald-700 text-sm mt-1">
                        <li>• Emergent layer (40+ meters)</li>
                        <li>• Canopy layer (20-40 meters)</li>
                        <li>• Understory (5-20 meters)</li>
                        <li>• Forest floor (0-5 meters)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-3">Caribbean Endemic Species Focus</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h5 className="font-medium text-blue-800">Birds</h5>
                  <ul className="text-sm text-blue-700 mt-2 space-y-1">
                    <li>• Caribbean parrots (Amazona species)</li>
                    <li>• Hummingbird diversity and pollination</li>
                    <li>• Frugivorous species and seed dispersal</li>
                    <li>• Migratory vs. resident populations</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h5 className="font-medium text-green-800">Plants</h5>
                  <ul className="text-sm text-green-700 mt-2 space-y-1">
                    <li>• Epiphytic orchids and bromeliads</li>
                    <li>• Strangler figs and climbing adaptations</li>
                    <li>• Medicinal plant traditional uses</li>
                    <li>• Rare and endangered species</li>
                  </ul>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h5 className="font-medium text-yellow-800">Invertebrates</h5>
                  <ul className="text-sm text-yellow-700 mt-2 space-y-1">
                    <li>• Butterfly diversity and host plants</li>
                    <li>• Ant-plant mutualistic relationships</li>
                    <li>• Decomposer communities</li>
                    <li>• Pollinator network analysis</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-3">Assessment Components (100 points total)</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-cyan-50 rounded-lg">
                  <h5 className="font-medium text-cyan-800">Field Data Portfolio (40 pts)</h5>
                  <ul className="text-sm text-cyan-700 mt-2 space-y-1">
                    <li>• Species identification accuracy (15 pts)</li>
                    <li>• Environmental measurements (15 pts)</li>
                    <li>• Observation quality (10 pts)</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h5 className="font-medium text-green-800">Ecosystem Analysis (35 pts)</h5>
                  <ul className="text-sm text-green-700 mt-2 space-y-1">
                    <li>• Relationship mapping (20 pts)</li>
                    <li>• Niche analysis (10 pts)</li>
                    <li>• Conservation assessment (5 pts)</li>
                  </ul>
                </div>
                <div className="p-4 bg-emerald-50 rounded-lg">
                  <h5 className="font-medium text-emerald-800">Conservation Plan (25 pts)</h5>
                  <ul className="text-sm text-emerald-700 mt-2 space-y-1">
                    <li>• Threat identification (10 pts)</li>
                    <li>• Strategy development (10 pts)</li>
                    <li>• Implementation feasibility (5 pts)</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
