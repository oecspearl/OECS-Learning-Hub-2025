"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

interface LessonPlanEditorProps {
  content: string
  onChange: (content: string) => void
}

export function LessonPlanEditor({ content, onChange }: LessonPlanEditorProps) {
  const [activeTab, setActiveTab] = useState<string>("edit")
  const [editableContent, setEditableContent] = useState<string>(content)

  useEffect(() => {
    setEditableContent(content)
  }, [content])

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value
    setEditableContent(newContent)
    onChange(newContent)
  }

  const formatLessonPlan = (content: string) => {
    if (!content) return <p className="text-muted-foreground">No content to preview.</p>

    // Simple markdown-like formatting
    return (
      <div className="prose prose-sm max-w-none">
        {content.split("\n").map((line, index) => {
          if (line.startsWith("# ")) {
            return (
              <h1 key={index} className="text-2xl font-bold mt-6 mb-4">
                {line.substring(2)}
              </h1>
            )
          } else if (line.startsWith("## ")) {
            return (
              <h2 key={index} className="text-xl font-bold mt-5 mb-3">
                {line.substring(3)}
              </h2>
            )
          } else if (line.startsWith("### ")) {
            return (
              <h3 key={index} className="text-lg font-bold mt-4 mb-2">
                {line.substring(4)}
              </h3>
            )
          } else if (line.startsWith("- ")) {
            return (
              <li key={index} className="ml-6">
                {line.substring(2)}
              </li>
            )
          } else if (line.trim() === "") {
            return <br key={index} />
          } else if (line.startsWith("**") && line.endsWith("**")) {
            return (
              <p key={index} className="font-bold">
                {line.substring(2, line.length - 2)}
              </p>
            )
          } else {
            return <p key={index}>{line}</p>
          }
        })}
      </div>
    )
  }

  return (
    <div className="border rounded-md">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="flex items-center justify-between px-4 py-2 border-b">
          <TabsList>
            <TabsTrigger value="edit">Edit</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
          <div className="text-xs text-muted-foreground">
            Supports Markdown: # Heading, ## Subheading, - List item, **Bold**
          </div>
        </div>
        <TabsContent value="edit" className="p-0 m-0">
          <Textarea
            value={editableContent}
            onChange={handleContentChange}
            className="min-h-[400px] max-h-[600px] border-0 rounded-none focus-visible:ring-0 resize-none"
            placeholder="Enter your lesson plan content here..."
          />
        </TabsContent>
        <TabsContent value="preview" className="p-4 m-0 min-h-[400px] max-h-[600px] overflow-y-auto">
          {formatLessonPlan(editableContent)}
        </TabsContent>
      </Tabs>
    </div>
  )
}
