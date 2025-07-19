"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Calendar, MessageSquare } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

interface StudentProgress {
  id: string
  studentName: string
  grade: string
  subject: string
  progress: number
  lastUpdated: string
}

interface ParentDashboardTabsProps {
  studentProgress: StudentProgress[]
  progressBySubject: Record<string, StudentProgress[]>
}

export function ParentDashboardTabs({ studentProgress, progressBySubject }: ParentDashboardTabsProps) {
  const formatSubject = (subject: string) => {
    return subject
      .replace(/_/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Student Progress</CardTitle>
        <CardDescription>Track your children's academic progress and activities</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="progress" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="progress" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Progress Overview
            </TabsTrigger>
            <TabsTrigger value="activities" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Recent Activities
            </TabsTrigger>
          </TabsList>

          <TabsContent value="progress" className="space-y-4">
            <Tabs>
              <TabsList className="mb-4">
                {Object.keys(progressBySubject).map((subject) => (
                  <TabsTrigger key={subject} value={subject}>
                    {formatSubject(subject)}
                  </TabsTrigger>
                ))}
              </TabsList>
              {Object.entries(progressBySubject).map(([subject, progress]) => (
                <TabsContent key={subject} value={subject}>
                  <ScrollArea className="h-[400px] pr-4">
                    <div className="space-y-4">
                      {progress.map((item) => (
                        <div key={item.id} className="p-4 rounded-lg border">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-medium">{item.studentName}</h3>
                              <p className="text-sm text-muted-foreground">Grade {item.grade}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">{item.progress}%</p>
                              <p className="text-xs text-muted-foreground">Last updated: {item.lastUpdated}</p>
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className="bg-primary h-2.5 rounded-full"
                              style={{ width: `${item.progress}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </TabsContent>
              ))}
            </Tabs>
          </TabsContent>

          <TabsContent value="activities" className="space-y-4">
            <div className="space-y-3">
              {studentProgress.slice(0, 5).map((progress) => (
                <div key={progress.id} className="flex items-center space-x-3 p-3 rounded-lg border">
                  <MessageSquare className="h-5 w-5 text-blue-500" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{progress.studentName}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatSubject(progress.subject)} • Grade {progress.grade} • {progress.progress}% Complete
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
} 