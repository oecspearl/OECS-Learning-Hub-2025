import { LearningStrategies } from "@/components/curriculum/learning-strategies"
import { AssessmentStrategies } from "@/components/curriculum/assessment-strategies"
import { executeQuery } from "@/lib/db"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default async function OutcomePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const scoId = Number.parseInt(id)

  // Fetch the SCO details
  const scoQuery = `
    SELECT 
      sco.id,
      sco.code,
      sco.description,
      elo.id as elo_id,
      elo.code as elo_code,
      elo.description as elo_description,
      s.name as strand_name
    FROM specific_curriculum_outcomes sco
    JOIN essential_learning_outcomes elo ON sco.elo_id = elo.id
    JOIN strands s ON elo.strand_id = s.id
    WHERE sco.id = $1
  `

  const scoResults = await executeQuery(scoQuery, [scoId]) as any[]

  if (!scoResults || scoResults.length === 0) {
    return (
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <Link href="/dashboard/admin/curriculum">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Curriculum
            </Button>
          </Link>
        </div>
        <div className="p-8 text-center">
          <h1 className="text-2xl font-bold">Outcome Not Found</h1>
          <p className="mt-2 text-muted-foreground">The specified curriculum outcome could not be found.</p>
        </div>
      </div>
    )
  }

  const sco = scoResults[0]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Link href="/dashboard/admin/curriculum">
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Curriculum
          </Button>
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-sm text-muted-foreground">
          {sco.strand_name} &gt; {sco.elo_code}
        </div>
        <h1 className="text-3xl font-bold tracking-tight">
          {sco.code}: {sco.description}
        </h1>
        <p className="text-muted-foreground">{sco.elo_description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Learning Strategies</h2>
          <LearningStrategies scoId={scoId} />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Assessment Strategies</h2>
          <AssessmentStrategies eloId={sco.elo_id} />
        </div>
      </div>
    </div>
  )
}
