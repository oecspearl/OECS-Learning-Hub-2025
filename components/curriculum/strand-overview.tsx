"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

interface Strand {
  strand_id: number
  strand_name: string
  strand_description: string
  elos: ELO[]
}

interface ELO {
  elo_id: number
  elo_code: string
  elo_description: string
  grade_expectations: string
}

export function StrandOverview() {
  const [strands, setStrands] = useState<Strand[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [usingMockData, setUsingMockData] = useState(false)

  useEffect(() => {
    async function fetchCurriculum() {
      try {
        const response = await fetch("/api/curriculum")

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`)
        }

        const data = await response.json()

        // Check if we're using mock data (this is a heuristic)
        if (data.curriculum && data.curriculum.length <= 3) {
          setUsingMockData(true)
        }

        // Transform the flat data into a nested structure
        const transformedData: Strand[] = []
        const strandMap = new Map<number, Strand>()

        data.curriculum.forEach((item: any) => {
          if (!strandMap.has(item.strand_id)) {
            strandMap.set(item.strand_id, {
              strand_id: item.strand_id,
              strand_name: item.strand_name,
              strand_description: item.strand_description,
              elos: [],
            })
            transformedData.push(strandMap.get(item.strand_id)!)
          }

          if (item.elo_id) {
            strandMap.get(item.strand_id)!.elos.push({
              elo_id: item.elo_id,
              elo_code: item.elo_code,
              elo_description: item.elo_description,
              grade_expectations: item.grade_expectations,
            })
          }
        })

        setStrands(transformedData)
      } catch (error) {
        console.error("Error fetching curriculum:", error)
        setError("Failed to load curriculum data. Using sample data instead.")
        setUsingMockData(true)
      } finally {
        setLoading(false)
      }
    }

    fetchCurriculum()
  }, [])

  if (loading) {
    return <div className="flex justify-center p-8">Loading curriculum data...</div>
  }

  return (
    <div className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {usingMockData && !error && (
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Notice</AlertTitle>
          <AlertDescription>
            Using sample curriculum data. Connect to a database to see the full curriculum.
          </AlertDescription>
        </Alert>
      )}

      {strands.length > 0 ? (
        <Tabs defaultValue={strands[0]?.strand_name.toLowerCase().replace(/\s+/g, "-")} className="w-full">
          <TabsList className="grid" style={{ gridTemplateColumns: `repeat(${strands.length}, 1fr)` }}>
            {strands.map((strand) => (
              <TabsTrigger key={strand.strand_id} value={strand.strand_name.toLowerCase().replace(/\s+/g, "-")}>
                {strand.strand_name}
              </TabsTrigger>
            ))}
          </TabsList>

          {strands.map((strand) => (
            <TabsContent key={strand.strand_id} value={strand.strand_name.toLowerCase().replace(/\s+/g, "-")}>
              <Card>
                <CardHeader>
                  <CardTitle>{strand.strand_name}</CardTitle>
                  <CardDescription>{strand.strand_description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {strand.elos.map((elo) => (
                      <AccordionItem key={elo.elo_id} value={elo.elo_code}>
                        <AccordionTrigger>
                          {elo.elo_code}: {elo.elo_description}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-medium">Grade 1 Expectations</h4>
                              <div className="mt-2 text-sm">{elo.grade_expectations}</div>
                            </div>
                            <div>
                              <h4 className="font-medium">Specific Curriculum Outcomes</h4>
                              <div className="mt-2">
                                <OutcomesList eloId={elo.elo_id} />
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      ) : (
        <div className="text-center p-8">
          <p>No curriculum data available. Please check your database connection.</p>
        </div>
      )}
    </div>
  )
}

function OutcomesList({ eloId }: { eloId: number }) {
  const [outcomes, setOutcomes] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchOutcomes() {
      try {
        const response = await fetch(`/api/curriculum/outcomes?eloId=${eloId}`)

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`)
        }

        const data = await response.json()
        setOutcomes(data.outcomes || [])
      } catch (error) {
        console.error("Error fetching outcomes:", error)
        setError("Failed to load outcomes")
      } finally {
        setLoading(false)
      }
    }

    fetchOutcomes()
  }, [eloId])

  if (loading) {
    return <div>Loading outcomes...</div>
  }

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  return (
    <ul className="space-y-2 list-disc pl-5">
      {outcomes.map((outcome) => (
        <li key={outcome.id}>
          <span className="font-medium">{outcome.code}</span>: {outcome.description}
        </li>
      ))}
    </ul>
  )
}
