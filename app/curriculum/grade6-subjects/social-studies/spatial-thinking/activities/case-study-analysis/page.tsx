"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/breadcrumb"
import { Clock, Target, BookOpen, CheckCircle, Star, FileSearch, Brain, Lightbulb } from "lucide-react"

export default function CaseStudyAnalysisPage() {
  const breadcrumbItems = [
    { label: "Curriculum", href: "/curriculum" },
    { label: "Grade 6", href: "/curriculum/grade6-subjects" },
    { label: "Social Studies", href: "/curriculum/grade6-subjects/social-studies" },
    { label: "Spatial Thinking", href: "/curriculum/grade6-subjects/social-studies/spatial-thinking" },
    { label: "Activities", href: "/curriculum/grade6-subjects/social-studies/spatial-thinking/activities" },
    {
      label: "Case Study Analysis",
      href: "/curriculum/grade6-subjects/social-studies/spatial-thinking/activities/case-study-analysis",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Case Study Analysis and Problem-Solving</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Students analyze real-world extreme weather events and develop comprehensive solutions using critical
            thinking and problem-solving methodologies
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="flex items-center gap-1">
              <FileSearch className="w-4 h-4" />
              Case Study Method
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Brain className="w-4 h-4" />
              Critical Thinking
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Lightbulb className="w-4 h-4" />
              Problem Solving
            </Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-600" />
                Learning Objectives
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm">Analyze complex real-world extreme weather scenarios</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm">Identify multiple factors contributing to weather-related problems</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm">Develop creative and practical solutions to complex challenges</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm">Evaluate the effectiveness and feasibility of proposed solutions</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-sm">Apply systems thinking to understand interconnected impacts</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-600" />
                Activity Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Duration:</span>
                <span>4-5 class periods (45 minutes each)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Group Size:</span>
                <span>4-5 students per case study team</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Difficulty:</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Subject Integration:</span>
                <span>Science, Mathematics, Economics, Technology</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileSearch className="w-5 h-5 text-green-600" />
              Case Study Options
            </CardTitle>
            <CardDescription>Real-world scenarios for in-depth analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Case 1: Hurricane Maria in Dominica (2017)</h4>
                  <p className="text-sm mb-2">Category 5 hurricane devastation and recovery challenges</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Complete infrastructure destruction</li>
                    <li>• Economic collapse and recovery</li>
                    <li>• Climate resilience rebuilding</li>
                    <li>• International aid coordination</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">Case 2: Caribbean Drought Crisis (2014-2016)</h4>
                  <p className="text-sm mb-2">Multi-year drought affecting multiple islands</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Water scarcity and rationing</li>
                    <li>• Agricultural losses</li>
                    <li>• Tourism industry impacts</li>
                    <li>• Regional cooperation responses</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Case 3: Flooding in Trinidad and Tobago (2018)</h4>
                  <p className="text-sm mb-2">Urban flooding and infrastructure challenges</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Drainage system failures</li>
                    <li>• Urban planning issues</li>
                    <li>• Emergency response coordination</li>
                    <li>• Community resilience building</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Case 4: Heat Wave in Jamaica (2019)</h4>
                  <p className="text-sm mb-2">Extreme temperatures and health impacts</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Public health emergencies</li>
                    <li>• Energy grid strain</li>
                    <li>• Agricultural stress</li>
                    <li>• Vulnerable population protection</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Case 5: Sargassum Seaweed Crisis (2018-2020)</h4>
                  <p className="text-sm mb-2">Massive seaweed influx affecting multiple sectors</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Tourism industry disruption</li>
                    <li>• Coastal ecosystem impacts</li>
                    <li>• Cleanup and disposal challenges</li>
                    <li>• Economic adaptation strategies</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Case 6: Volcanic Ash from La Soufrière (2021)</h4>
                  <p className="text-sm mb-2">Volcanic eruption impacts across the region</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Air quality and health concerns</li>
                    <li>• Aviation disruptions</li>
                    <li>• Agricultural contamination</li>
                    <li>• Regional coordination responses</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-green-600" />
              Materials Needed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Research Materials:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Detailed case study packets</li>
                  <li>• News articles and media reports</li>
                  <li>• Government and NGO reports</li>
                  <li>• Scientific data and weather records</li>
                  <li>• Economic impact assessments</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Analysis Tools:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Problem analysis frameworks</li>
                  <li>• Solution development templates</li>
                  <li>• Evaluation criteria matrices</li>
                  <li>• Presentation materials</li>
                  <li>• Computers/tablets for research</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Activity Procedure</CardTitle>
            <CardDescription>Systematic approach to case study analysis and problem-solving</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-3 text-blue-600">
                Phase 1: Case Study Introduction and Team Formation (Day 1)
              </h4>
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Method Introduction (15 minutes)</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Explain case study methodology and its importance</li>
                    <li>• Introduce problem-solving frameworks</li>
                    <li>• Discuss systems thinking and interconnected impacts</li>
                    <li>• Set expectations for analysis depth and creativity</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Case Assignment and Initial Reading (25 minutes)</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Form teams of 4-5 students</li>
                    <li>• Assign or allow teams to choose case studies</li>
                    <li>• Distribute comprehensive case study packets</li>
                    <li>• Begin initial reading and note-taking</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Analysis Framework Introduction (5 minutes)</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Introduce the 5-step analysis process</li>
                    <li>• Distribute analysis templates and guides</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3 text-green-600">
                Phase 2: Deep Analysis and Problem Identification (Day 2)
              </h4>
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Step 1: Situation Analysis (15 minutes)</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Identify key facts and timeline of events</li>
                    <li>• Map stakeholders and affected populations</li>
                    <li>• Analyze geographic and climatic factors</li>
                    <li>• Document immediate and long-term impacts</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Step 2: Problem Identification (15 minutes)</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Identify primary and secondary problems</li>
                    <li>• Analyze root causes and contributing factors</li>
                    <li>• Examine interconnections between problems</li>
                    <li>• Prioritize problems by severity and urgency</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Step 3: Stakeholder Impact Analysis (15 minutes)</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Analyze impacts on different groups and sectors</li>
                    <li>• Consider economic, social, and environmental effects</li>
                    <li>• Identify vulnerable populations and special needs</li>
                    <li>• Examine regional and international implications</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3 text-purple-600">Phase 3: Solution Development (Day 3)</h4>
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Step 4: Solution Brainstorming (20 minutes)</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Generate multiple solution options for each problem</li>
                    <li>• Consider short-term emergency and long-term solutions</li>
                    <li>• Include prevention, mitigation, and adaptation strategies</li>
                    <li>• Think creatively about innovative approaches</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Solution Evaluation and Selection (20 minutes)</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Evaluate solutions using criteria matrix</li>
                    <li>• Consider feasibility, cost, effectiveness, and sustainability</li>
                    <li>• Analyze potential unintended consequences</li>
                    <li>• Select best combination of solutions</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Implementation Planning (5 minutes)</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Develop timeline and resource requirements</li>
                    <li>• Identify key stakeholders and their roles</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3 text-orange-600">
                Phase 4: Presentation Preparation and Delivery (Days 4-5)
              </h4>
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Presentation Development (Day 4 - 35 minutes)</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Create comprehensive presentation of analysis and solutions</li>
                    <li>• Include visual aids, maps, charts, and graphics</li>
                    <li>• Prepare to defend solution choices with evidence</li>
                    <li>• Practice presentation timing and delivery</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Case Study Presentations (Day 5 - 35 minutes)</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Each team presents their case analysis (6-7 minutes)</li>
                    <li>• Include Q&A session for peer questions</li>
                    <li>• Compare solutions across different case studies</li>
                    <li>• Identify common themes and best practices</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Synthesis and Reflection (Day 5 - 10 minutes)</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• Discuss lessons learned across all cases</li>
                    <li>• Identify transferable solutions and strategies</li>
                    <li>• Reflect on the case study analysis process</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-orange-600" />
                Assessment Criteria
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Analysis Quality (30%)</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Thorough understanding of case facts</li>
                  <li>• Accurate identification of problems and causes</li>
                  <li>• Comprehensive stakeholder impact analysis</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Solution Development (30%)</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Creative and practical solution options</li>
                  <li>• Logical evaluation and selection process</li>
                  <li>• Feasible implementation planning</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Critical Thinking (20%)</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Systems thinking and interconnection analysis</li>
                  <li>• Evidence-based reasoning</li>
                  <li>• Consideration of multiple perspectives</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Presentation and Communication (20%)</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Clear and organized presentation</li>
                  <li>• Effective use of visual aids</li>
                  <li>• Professional delivery and teamwork</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-600" />
                Extension Activities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Advanced Analysis</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Compare solutions across multiple similar cases</li>
                  <li>• Conduct cost-benefit analysis of proposed solutions</li>
                  <li>• Research implementation outcomes of real solutions</li>
                  <li>• Analyze policy implications and recommendations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Simulation and Modeling</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Create disaster response simulations</li>
                  <li>• Model economic impacts of different scenarios</li>
                  <li>• Design early warning system prototypes</li>
                  <li>• Develop community resilience assessments</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Real-World Application</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Present findings to local emergency managers</li>
                  <li>• Develop community preparedness materials</li>
                  <li>• Create policy briefs for government officials</li>
                  <li>• Design public awareness campaigns</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Problem-Solving Framework</CardTitle>
            <CardDescription>Systematic approach for analyzing complex scenarios</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-5 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                  1
                </div>
                <h4 className="font-semibold text-blue-800 mb-2">Situation Analysis</h4>
                <p className="text-xs">Gather facts, identify stakeholders, map impacts</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                  2
                </div>
                <h4 className="font-semibold text-green-800 mb-2">Problem Identification</h4>
                <p className="text-xs">Define core problems, analyze causes, prioritize issues</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                  3
                </div>
                <h4 className="font-semibold text-purple-800 mb-2">Impact Assessment</h4>
                <p className="text-xs">Evaluate effects on different groups and sectors</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                  4
                </div>
                <h4 className="font-semibold text-orange-800 mb-2">Solution Development</h4>
                <p className="text-xs">Generate options, evaluate alternatives, select best approaches</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                  5
                </div>
                <h4 className="font-semibold text-red-800 mb-2">Implementation Planning</h4>
                <p className="text-xs">Design action plans, allocate resources, monitor progress</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Caribbean Context and Regional Relevance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Regional Challenges and Opportunities</h4>
              <p className="text-sm mb-2">Emphasize Caribbean-specific factors in case analysis:</p>
              <ul className="space-y-1 text-sm">
                <li>• Small island developing state vulnerabilities</li>
                <li>• Limited resources and infrastructure constraints</li>
                <li>• Regional cooperation mechanisms and benefits</li>
                <li>• Tourism-dependent economies and resilience needs</li>
                <li>• Climate change adaptation imperatives</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Success Stories and Best Practices</h4>
              <ul className="space-y-1 text-sm">
                <li>• Highlight successful regional responses and innovations</li>
                <li>• Examine traditional knowledge integration with modern solutions</li>
                <li>• Study community-based adaptation strategies</li>
                <li>• Analyze effective international cooperation examples</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Future-Oriented Thinking</h4>
              <ul className="space-y-1 text-sm">
                <li>• Consider climate change projections and adaptation needs</li>
                <li>• Explore emerging technologies and their applications</li>
                <li>• Examine sustainable development goals alignment</li>
                <li>• Discuss youth leadership in climate resilience</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
