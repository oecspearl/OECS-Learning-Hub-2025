"use client"

import { useState } from "react"
import { Check, X } from "lucide-react"

const SUBJECTS = [
  { id: "math", name: "Mathematics" },
  { id: "language-arts", name: "Language Arts" },
  { id: "science", name: "Science" },
  { id: "social", name: "Social Studies" },
  { id: "art", name: "Art" },
  { id: "music", name: "Music" },
  { id: "pe", name: "Physical Ed." },
]

type ConnectionLevel = 0 | 1 | 2 | 3
type ConnectionMatrix = Record<string, Record<string, ConnectionLevel>>

export function SubjectMatrix() {
  const [connections, setConnections] = useState<ConnectionMatrix>(() => {
    const initialConnections: ConnectionMatrix = {}

    // Initialize with empty connections
    SUBJECTS.forEach((subject) => {
      initialConnections[subject.id] = {}
      SUBJECTS.forEach((otherSubject) => {
        if (subject.id !== otherSubject.id) {
          initialConnections[subject.id][otherSubject.id] = 0
        }
      })
    })

    return initialConnections
  })

  const handleConnectionChange = (subject1: string, subject2: string) => {
    setConnections((prev) => {
      const currentLevel = prev[subject1][subject2] || 0
      const newLevel: ConnectionLevel = ((currentLevel + 1) % 4) as ConnectionLevel

      return {
        ...prev,
        [subject1]: {
          ...prev[subject1],
          [subject2]: newLevel,
        },
        [subject2]: {
          ...prev[subject2],
          [subject1]: newLevel,
        },
      }
    })
  }

  const getConnectionColor = (level: ConnectionLevel) => {
    switch (level) {
      case 0:
        return "bg-gray-100 hover:bg-gray-200"
      case 1:
        return "bg-yellow-100 hover:bg-yellow-200"
      case 2:
        return "bg-green-100 hover:bg-green-200"
      case 3:
        return "bg-blue-100 hover:bg-blue-200"
      default:
        return "bg-gray-100 hover:bg-gray-200"
    }
  }

  const getConnectionIcon = (level: ConnectionLevel) => {
    switch (level) {
      case 0:
        return <X className="h-3 w-3 text-gray-400" />
      case 1:
        return <Check className="h-3 w-3 text-yellow-600" />
      case 2:
        return <Check className="h-3 w-3 text-green-600" />
      case 3:
        return <Check className="h-3 w-3 text-blue-600" />
      default:
        return null
    }
  }

  const getConnectionLabel = (level: ConnectionLevel) => {
    switch (level) {
      case 0:
        return "No connection"
      case 1:
        return "Weak connection"
      case 2:
        return "Moderate connection"
      case 3:
        return "Strong connection"
      default:
        return "No connection"
    }
  }

  return (
    <div className="border rounded-md p-4 bg-white">
      <div className="text-xs text-muted-foreground mb-2">
        Click on intersections to set connection strength between subjects
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-2 border bg-muted/50"></th>
              {SUBJECTS.map((subject) => (
                <th key={subject.id} className="p-2 border bg-muted/50 text-xs font-medium">
                  {subject.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SUBJECTS.map((subject) => (
              <tr key={subject.id}>
                <th className="p-2 border bg-muted/50 text-xs font-medium text-left">{subject.name}</th>
                {SUBJECTS.map((otherSubject) => {
                  if (subject.id === otherSubject.id) {
                    return <td key={otherSubject.id} className="p-2 border bg-gray-200"></td>
                  }

                  const connectionLevel = connections[subject.id][otherSubject.id]

                  return (
                    <td
                      key={otherSubject.id}
                      className={`p-2 border text-center cursor-pointer transition-colors ${getConnectionColor(connectionLevel)}`}
                      onClick={() => handleConnectionChange(subject.id, otherSubject.id)}
                      title={getConnectionLabel(connectionLevel)}
                    >
                      {getConnectionIcon(connectionLevel)}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between mt-4 text-xs">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-gray-100 border"></div>
          <span>None</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-yellow-100 border"></div>
          <span>Weak</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-green-100 border"></div>
          <span>Moderate</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-blue-100 border"></div>
          <span>Strong</span>
        </div>
      </div>

      <input type="hidden" name="subject_connections" value={JSON.stringify(connections)} />
    </div>
  )
}
