import { LearningStrategies } from "@/components/curriculum/learning-strategies"
import { AssessmentStrategies } from "@/components/curriculum/assessment-strategies"
import { db } from "@/lib/db"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default async function OutcomePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const scoId = parseInt(id) || 0

  try {
    // Fetch the SCO details using the new database structure
    const sco = await db.specificCurriculumOutcomes.findFirst({ id: scoId.toString() })

    if (!sco) {
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

    // Get the related ELO and strand information
    const elo = await db.essentialLearningOutcomes.findFirst({ id: sco.elo_id })
    const strand = elo ? await db.strands.findFirst({ id: elo.strand_id }) : null

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
            {strand?.name || 'Unknown Strand'} &gt; {elo?.code || 'Unknown ELO'}
          </div>
          <h1 className="text-3xl font-bold tracking-tight">
            {sco.code}: {sco.description}
          </h1>
          <p className="text-muted-foreground">{elo?.description || 'No description available'}</p>
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
  } catch (error) {
    console.error("Error fetching SCO:", error)
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
          <h1 className="text-2xl font-bold">Error Loading Outcome</h1>
          <p className="mt-2 text-muted-foreground">There was an error loading the curriculum outcome.</p>
        </div>
      </div>
    )
  }
}
