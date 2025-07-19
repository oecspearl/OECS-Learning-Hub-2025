"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Share2, Calendar, Download, BookOpen, PlusCircle } from "lucide-react"
import { ShareDialog } from "./share-dialog"
import { ScheduleDialog } from "./schedule-dialog"
import { TeacherTimetable } from "./teacher-timetable"
import { useParams } from "next/navigation"
import Link from "next/link"

export function QuickActions() {
  const params = useParams()
  const resourceId = params?.id as string || "new"
  const resourceTitle = params?.title as string || "New Resource"

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Button asChild variant="outline" className="h-auto py-4 flex flex-col items-center gap-2 hover:bg-green-50">
              <Link href="/planner">
                <PlusCircle className="h-5 w-5 text-green-600" />
                <span>Create Lesson Plan</span>
              </Link>
            </Button>
            <ShareDialog
              resourceType="lesson-plan"
              resourceId={resourceId}
              resourceTitle={resourceTitle}
            />
            <ScheduleDialog />
            <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2 hover:bg-green-50">
              <Download className="h-5 w-5 text-green-600" />
              <span>Download</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2 hover:bg-green-50">
              <BookOpen className="h-5 w-5 text-green-600" />
              <span>Preview</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      <TeacherTimetable />
    </div>
  )
}
