"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface AssessmentStrategy {
  id: number
  type: string
  description: string
  examples: string | null
}

export function AssessmentStrategies({ eloId }: { eloId: number }) {
  const [strategies, setStrategies] = useState<AssessmentStrategy[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchAssessmentStrategies() {
      try {
        const response = await fetch(`/api/curriculum/assessment?eloId=${eloId}`)
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`)
        }

        const data = await response.json()
        setStrategies(data.strategies || [])
      } catch (error) {
        console.error("Error fetching assessment strategies:", error)
        setError("Failed to load assessment strategies")
      } finally {
        setLoading(false)
      }
    }

    fetchAssessmentStrategies()
  }, [eloId])

  if (loading) {
    return <div className="flex justify-center p-4">Loading assessment strategies...</div>
  }

  if (error) {
    return <div className="text-red-500 p-4">{error}</div>
  }

  if (strategies.length === 0) {
    return <div className="p-4">No assessment strategies found for this outcome.</div>
  }

  // Group strategies by type
  const groupedStrategies: Record<string, AssessmentStrategy[]> = {}
  strategies.forEach((strategy) => {
    if (!groupedStrategies[strategy.type]) {
      groupedStrategies[strategy.type] = []
    }
    groupedStrategies[strategy.type].push(strategy)
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Assessment Strategies</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={Object.keys(groupedStrategies)[0]} className="w-full">
          <TabsList
            className="grid"
            style={{ gridTemplateColumns: `repeat(${Object.keys(groupedStrategies).length}, 1fr)` }}
          >
            {Object.keys(groupedStrategies).map((type) => (
              <TabsTrigger key={type} value={type}>
                {type}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(groupedStrategies).map(([type, typeStrategies]) => (
            <TabsContent key={type} value={type}>
              <div className="space-y-6">
                {typeStrategies.map((strategy) => (
                  <div key={strategy.id} className="space-y-3">
                    <div className="prose max-w-none">
                      <div dangerouslySetInnerHTML={{ __html: strategy.description }} />
                    </div>

                    {strategy.examples && (
                      <div className="bg-muted p-4 rounded-md">
                        <h4 className="font-medium mb-2">Examples</h4>
                        <div className="text-sm" dangerouslySetInnerHTML={{ __html: strategy.examples }} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}
