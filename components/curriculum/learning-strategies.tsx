"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface LearningStrategy {
  id: number
  title: string
  description: string
  resources: string | null
  integrations: string | null
}

interface SCO {
  id: number
  code: string
  description: string
  learning_strategies: LearningStrategy[]
}

export function LearningStrategies({ scoId }: { scoId: number }) {
  const [sco, setSco] = useState<SCO | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchStrategies() {
      try {
        const response = await fetch(`/api/curriculum/strategies?scoId=${scoId}`)
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`)
        }

        const data = await response.json()
        setSco(data.sco)
      } catch (error) {
        console.error("Error fetching strategies:", error)
        setError("Failed to load learning strategies")
      } finally {
        setLoading(false)
      }
    }

    fetchStrategies()
  }, [scoId])

  if (loading) {
    return <div className="flex justify-center p-4">Loading learning strategies...</div>
  }

  if (error) {
    return <div className="text-red-500 p-4">{error}</div>
  }

  if (!sco || !sco.learning_strategies || sco.learning_strategies.length === 0) {
    return <div className="p-4">No learning strategies found for this outcome.</div>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Learning Strategies for {sco.code}</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={`strategy-${sco.learning_strategies[0].id}`} className="w-full">
          <TabsList
            className="grid"
            style={{ gridTemplateColumns: `repeat(${Math.min(sco.learning_strategies.length, 4)}, 1fr)` }}
          >
            {sco.learning_strategies.map((strategy) => (
              <TabsTrigger key={strategy.id} value={`strategy-${strategy.id}`}>
                {strategy.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {sco.learning_strategies.map((strategy) => (
            <TabsContent key={strategy.id} value={`strategy-${strategy.id}`}>
              <div className="space-y-4">
                <div className="prose max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: strategy.description }} />
                </div>

                {strategy.resources && (
                  <div>
                    <h4 className="font-medium mb-2">Resources</h4>
                    <div className="text-sm" dangerouslySetInnerHTML={{ __html: strategy.resources }} />
                  </div>
                )}

                {strategy.integrations && (
                  <div>
                    <h4 className="font-medium mb-2">Subject Integrations</h4>
                    <div className="text-sm" dangerouslySetInnerHTML={{ __html: strategy.integrations }} />
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}
