"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Edit2, Check, X, Plus, Trash2, ArrowUp, ArrowDown, Settings } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

// Define interfaces for the rubric structure
interface RubricLevel {
  level: string
  points: number
  description: string
}

interface RubricCriterion {
  name: string
  description: string
  levels: RubricLevel[]
}

interface Rubric {
  title: string
  levelLabels: string[]
  criteria: RubricCriterion[]
}

interface RubricPreviewProps {
  rubric: Rubric
}

export default function RubricPreview({ rubric }: RubricPreviewProps) {
  const [editingTitle, setEditingTitle] = useState(false)
  const [title, setTitle] = useState(rubric.title || "Untitled Rubric")
  const [editingCriteria, setEditingCriteria] = useState<number | null>(null)
  const [criteria, setCriteria] = useState(rubric.criteria || [])
  const [levelLabels, setLevelLabels] = useState(
    rubric.levelLabels || ["Excellent", "Proficient", "Developing", "Beginning"],
  )
  const [showEditTip, setShowEditTip] = useState(true)

  const handleTitleSave = () => {
    setEditingTitle(false)
  }

  const handleCriteriaEdit = (index: number) => {
    setEditingCriteria(index)
  }

  const handleCriteriaSave = () => {
    setEditingCriteria(null)
  }

  const updateCriteriaDescription = (index: number, description: string) => {
    const updatedCriteria = [...criteria]
    updatedCriteria[index].description = description
    setCriteria(updatedCriteria)
  }

  const updateCriteriaName = (index: number, name: string) => {
    const updatedCriteria = [...criteria]
    updatedCriteria[index].name = name
    setCriteria(updatedCriteria)
  }

  const updateLevelDescription = (criteriaIndex: number, levelIndex: number, description: string) => {
    const updatedCriteria = [...criteria]
    updatedCriteria[criteriaIndex].levels[levelIndex].description = description
    setCriteria(updatedCriteria)
  }

  const updateLevelPoints = (criteriaIndex: number, levelIndex: number, points: string) => {
    const updatedCriteria = [...criteria]
    updatedCriteria[criteriaIndex].levels[levelIndex].points = Number.parseInt(points) || 0
    setCriteria(updatedCriteria)
  }

  const addNewCriterion = () => {
    const newCriterion: RubricCriterion = {
      name: "New Criterion",
      description: "Description of what this criterion evaluates",
      levels: levelLabels.map((label, index) => ({
        level: label,
        points: (levelLabels.length - index) * 5,
        description: `Description for ${label} level`,
      })),
    }
    setCriteria([...criteria, newCriterion])
  }

  const removeCriterion = (index: number) => {
    const updatedCriteria = [...criteria]
    updatedCriteria.splice(index, 1)
    setCriteria(updatedCriteria)
  }

  const moveCriterionUp = (index: number) => {
    if (index === 0) return
    const updatedCriteria = [...criteria]
    const temp = updatedCriteria[index]
    updatedCriteria[index] = updatedCriteria[index - 1]
    updatedCriteria[index - 1] = temp
    setCriteria(updatedCriteria)
  }

  const moveCriterionDown = (index: number) => {
    if (index === criteria.length - 1) return
    const updatedCriteria = [...criteria]
    const temp = updatedCriteria[index]
    updatedCriteria[index] = updatedCriteria[index + 1]
    updatedCriteria[index + 1] = temp
    setCriteria(updatedCriteria)
  }

  const updateLevelLabel = (index: number, newLabel: string) => {
    const updatedLabels = [...levelLabels]
    updatedLabels[index] = newLabel
    setLevelLabels(updatedLabels)

    // Update all criteria to use the new label
    const updatedCriteria = criteria.map((criterion) => {
      const updatedLevels = [...criterion.levels]
      updatedLevels[index].level = newLabel
      return {
        ...criterion,
        levels: updatedLevels,
      }
    })
    setCriteria(updatedCriteria)
  }

  return (
    <div className="space-y-4">
      {showEditTip && (
        <div className="bg-[#22c55e]/10 p-4 rounded-xl mb-6 relative">
          <Button
            size="sm"
            variant="ghost"
            className="absolute top-2 right-2 rounded-full h-6 w-6 p-0"
            onClick={() => setShowEditTip(false)}
          >
            <X className="h-4 w-4" />
          </Button>
          <h3 className="text-[#22c55e] font-medium mb-2">Editing Tips</h3>
          <p className="text-sm">You can fully customize this rubric:</p>
          <ul className="text-sm mt-2 space-y-1 list-disc pl-5">
            <li>Click on the title or any text to edit</li>
            <li>Use the + button to add new criteria</li>
            <li>Use the menu (⋮) next to each criterion for more options</li>
            <li>Click the settings icon to edit performance level labels</li>
          </ul>
        </div>
      )}

      <div className="flex items-center justify-between">
        {editingTitle ? (
          <div className="flex items-center gap-2 w-full">
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="font-bold text-xl rounded-lg"
              autoFocus
            />
            <Button size="icon" variant="ghost" className="rounded-full" onClick={handleTitleSave}>
              <Check className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost" className="rounded-full" onClick={() => setEditingTitle(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-xl text-[#22c55e]">{title}</h2>
            <Button size="icon" variant="ghost" className="rounded-full" onClick={() => setEditingTitle(true)}>
              <Edit2 className="h-4 w-4" />
            </Button>
          </div>
        )}

        <div className="flex items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="rounded-full">
                <Settings className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Edit Levels</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Performance Levels</DialogTitle>
                <DialogDescription>Customize the labels for each performance level.</DialogDescription>
              </DialogHeader>

              <div className="grid gap-4 py-4">
                {levelLabels.map((label, index) => (
                  <div key={index} className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor={`level-${index}`} className="text-right">
                      Level {index + 1}:
                    </Label>
                    <Input
                      id={`level-${index}`}
                      value={label}
                      onChange={(e) => updateLevelLabel(index, e.target.value)}
                      className="col-span-3"
                    />
                  </div>
                ))}
              </div>

              <DialogFooter>
                <Button type="submit" className="bg-[#22c55e] hover:bg-[#1c9d4b] rounded-full">
                  Save Changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Button onClick={addNewCriterion} className="rounded-full bg-[#22c55e] hover:bg-[#1c9d4b]" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Criterion
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="w-[250px] font-semibold">Criteria</TableHead>
              {levelLabels.map((label, i) => (
                <TableHead key={i} className="font-semibold">
                  {label}
                </TableHead>
              ))}
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {criteria.map((criterion, criteriaIndex) => (
              <TableRow key={criteriaIndex} className="hover:bg-gray-50">
                <TableCell className="align-top">
                  {editingCriteria === criteriaIndex ? (
                    <div className="space-y-2">
                      <Label htmlFor={`criterion-name-${criteriaIndex}`} className="text-xs text-gray-500">
                        Criterion Name
                      </Label>
                      <Input
                        id={`criterion-name-${criteriaIndex}`}
                        value={criterion.name}
                        onChange={(e) => updateCriteriaName(criteriaIndex, e.target.value)}
                        className="mb-2 rounded-lg"
                      />

                      <Label htmlFor={`criterion-desc-${criteriaIndex}`} className="text-xs text-gray-500">
                        Description
                      </Label>
                      <Textarea
                        id={`criterion-desc-${criteriaIndex}`}
                        value={criterion.description}
                        onChange={(e) => updateCriteriaDescription(criteriaIndex, e.target.value)}
                        className="min-h-[100px] rounded-lg"
                      />
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={handleCriteriaSave}
                          className="rounded-full bg-[#22c55e] hover:bg-[#1c9d4b]"
                        >
                          <Check className="h-3 w-3 mr-1" />
                          Save
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setEditingCriteria(null)}
                          className="rounded-full"
                        >
                          <X className="h-3 w-3 mr-1" />
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start justify-between group">
                      <div>
                        <div className="font-medium text-[#22c55e]">{criterion.name}</div>
                        <div className="text-sm text-muted-foreground">{criterion.description}</div>
                      </div>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
                        onClick={() => handleCriteriaEdit(criteriaIndex)}
                      >
                        <Edit2 className="h-3 w-3" />
                      </Button>
                    </div>
                  )}
                </TableCell>

                {criterion.levels.map((level, levelIndex) => (
                  <TableCell key={levelIndex} className="align-top">
                    {editingCriteria === criteriaIndex ? (
                      <div className="space-y-2">
                        <Label htmlFor={`points-${criteriaIndex}-${levelIndex}`} className="text-xs text-gray-500">
                          Points
                        </Label>
                        <Input
                          id={`points-${criteriaIndex}-${levelIndex}`}
                          type="number"
                          value={level.points}
                          onChange={(e) => updateLevelPoints(criteriaIndex, levelIndex, e.target.value)}
                          className="mb-2 rounded-lg"
                        />

                        <Label htmlFor={`desc-${criteriaIndex}-${levelIndex}`} className="text-xs text-gray-500">
                          Description
                        </Label>
                        <Textarea
                          id={`desc-${criteriaIndex}-${levelIndex}`}
                          value={level.description}
                          onChange={(e) => updateLevelDescription(criteriaIndex, levelIndex, e.target.value)}
                          className="min-h-[100px] rounded-lg"
                        />
                      </div>
                    ) : (
                      <div>
                        <div className="font-medium">{level.points} pts</div>
                        <div className="text-sm">{level.description}</div>
                      </div>
                    )}
                  </TableCell>
                ))}

                <TableCell className="w-[50px] align-top">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="12" cy="5" r="1" />
                          <circle cx="12" cy="19" r="1" />
                        </svg>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleCriteriaEdit(criteriaIndex)}>
                        <Edit2 className="mr-2 h-4 w-4" />
                        <span>Edit</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => moveCriterionUp(criteriaIndex)}>
                        <ArrowUp className="mr-2 h-4 w-4" />
                        <span>Move Up</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => moveCriterionDown(criteriaIndex)}>
                        <ArrowDown className="mr-2 h-4 w-4" />
                        <span>Move Down</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => removeCriterion(criteriaIndex)}
                        className="text-red-600 focus:text-red-600"
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        <span>Delete</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
