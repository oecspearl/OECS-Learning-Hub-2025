"use client"

import { LessonsGrid } from "./data-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

export default function LessonPlanning() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Lesson Planning</h1>
          <Link href="/dashboard/teacher/lessons/new">
            <Button className="flex items-center gap-1">
              <Plus className="h-4 w-4" />
              New Lesson
            </Button>
          </Link>
        </div>
        <p className="text-muted-foreground">Create, manage, and schedule your lessons.</p>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Lessons</TabsTrigger>
          <TabsTrigger value="all">All Lessons</TabsTrigger>
          <TabsTrigger value="drafts">Drafts</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="space-y-4">
          <LessonsGrid />
        </TabsContent>
        <TabsContent value="all" className="space-y-4">
          <LessonsGrid />
        </TabsContent>
        <TabsContent value="drafts" className="space-y-4">
          <LessonsGrid />
        </TabsContent>
      </Tabs>
    </div>
  )
}
