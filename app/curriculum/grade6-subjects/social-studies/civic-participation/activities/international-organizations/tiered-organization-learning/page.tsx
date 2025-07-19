import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { BookOpen, Globe, Search, Presentation, FileText } from "lucide-react"
import Link from "next/link"

const breadcrumbItems = [
  { label: "Curriculum", href: "/curriculum" },
  { label: "Grade 6", href: "/curriculum/grade6-subjects" },
  { label: "Social Studies", href: "/curriculum/grade6-subjects/social-studies" },
  { label: "Civic Participation", href: "/curriculum/grade6-subjects/social-studies/civic-participation" },
  { label: "Activities", href: "/curriculum/grade6-subjects/social-studies/civic-participation/activities" },
  {
    label: "International Organizations",
    href: "/curriculum/grade6-subjects/social-studies/civic-participation/activities/international-organizations",
  },
  {
    label: "Organization Research Project",
    href: "/curriculum/grade6-subjects/social-studies/civic-participation/activities/international-organizations/organization-research-project",
  },
]

export default function OrganizationResearchProjectPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6">
        <div className="flex items-center gap-2 mb-6">
          <Search className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold">Organization Research Project</h1>
            <p className="text-lg text-muted-foreground">
              Deep dive into international organizations and their global impact
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Activity Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Students conduct in-depth research on a specific international organization, examining its history,
                purpose, structure, and impact on global issues.
              </p>

              <div className="space-y-2">
                <Badge variant="secondary">Research Skills</Badge>
                <Badge variant="secondary">Critical Analysis</Badge>
                <Badge variant="secondary">Global Awareness</Badge>
                <Badge variant="secondary">Presentation Skills</Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Duration:</strong> 3-4 weeks
                </div>
                <div>
                  <strong>Group Size:</strong> 2-3 students
                </div>
                <div>
                  <strong>Subjects:</strong> Social Studies, ICT
                </div>
                <div>
                  <strong>Assessment:</strong> Research portfolio, presentation
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Research Organizations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-blue-500" />
                  <span>United Nations (UN)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-green-500" />
                  <span>World Health Organization (WHO)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-orange-500" />
                  <span>UNICEF</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-red-500" />
                  <span>International Red Cross</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-purple-500" />
                  <span>UNESCO</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-teal-500" />
                  <span>World Bank</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Research Phase
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">Key Research Areas:</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Organization history and founding</li>
                  <li>• Mission and objectives</li>
                  <li>• Organizational structure</li>
                  <li>• Member countries/regions</li>
                  <li>• Current projects and initiatives</li>
                  <li>• Challenges and controversies</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Portfolio Components
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">Required Elements:</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Executive summary</li>
                  <li>• Historical timeline</li>
                  <li>• Organizational chart</li>
                  <li>• Impact case studies</li>
                  <li>• Personal reflection</li>
                  <li>• Bibliography</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Presentation className="h-5 w-5" />
                Final Presentation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">Presentation Format:</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• 10-minute presentation</li>
                  <li>• Visual aids (slides, posters)</li>
                  <li>• Q&A session</li>
                  <li>• Peer evaluation forms</li>
                  <li>• Teacher assessment rubric</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Assessment Criteria</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Research Quality (40%)</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Depth and accuracy of information</li>
                    <li>• Use of credible sources</li>
                    <li>• Critical analysis and evaluation</li>
                    <li>• Organization of information</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Presentation Skills (30%)</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Clear communication</li>
                    <li>• Effective use of visuals</li>
                    <li>• Engagement with audience</li>
                    <li>• Time management</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Portfolio (20%)</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Completeness of components</li>
                    <li>• Quality of written work</li>
                    <li>• Visual presentation</li>
                    <li>• Reflection depth</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Collaboration (10%)</h4>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Equal participation</li>
                    <li>• Effective teamwork</li>
                    <li>• Peer support</li>
                    <li>• Conflict resolution</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 flex gap-4">
          <Button asChild>
            <Link href="/curriculum/grade6-subjects/social-studies/civic-participation/activities/international-organizations">
              Back to International Organizations
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/planner/create">Create Lesson Plan</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
