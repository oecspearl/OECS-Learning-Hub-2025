"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Users, BookOpen, GraduationCap, BarChart3, Settings, Database } from "lucide-react"

interface DatabaseTable {
  table_name: string
  table_schema: string
  columns: Array<{
    column_name: string
    data_type: string
  }>
}

interface SystemStats {
  totalUsers: number
  totalLessons: number
  totalAssessments: number
  totalClasses: number
  totalStudents: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<SystemStats>({
    totalUsers: 0,
    totalLessons: 0,
    totalAssessments: 0,
    totalClasses: 0,
    totalStudents: 0,
  })

  const [tables] = useState<DatabaseTable[]>([
    {
      table_name: "users",
      table_schema: "public",
      columns: [
        { column_name: "id", data_type: "integer" },
        { column_name: "name", data_type: "varchar" },
        { column_name: "email", data_type: "varchar" },
        { column_name: "role", data_type: "varchar" },
        { column_name: "created_at", data_type: "timestamp" },
      ],
    },
    {
      table_name: "lesson_plans",
      table_schema: "public",
      columns: [
        { column_name: "id", data_type: "integer" },
        { column_name: "title", data_type: "varchar" },
        { column_name: "subject", data_type: "varchar" },
        { column_name: "grade_level", data_type: "varchar" },
        { column_name: "content", data_type: "text" },
        { column_name: "user_id", data_type: "integer" },
      ],
    },
    {
      table_name: "Assessment",
      table_schema: "public",
      columns: [
        { column_name: "id", data_type: "text" },
        { column_name: "title", data_type: "text" },
        { column_name: "type", data_type: "text" },
        { column_name: "totalPoints", data_type: "integer" },
        { column_name: "createdById", data_type: "text" },
        { column_name: "classId", data_type: "text" },
      ],
    },
    {
      table_name: "Class",
      table_schema: "public",
      columns: [
        { column_name: "id", data_type: "text" },
        { column_name: "name", data_type: "text" },
        { column_name: "gradeLevel", data_type: "integer" },
        { column_name: "teacherId", data_type: "text" },
        { column_name: "schoolYear", data_type: "text" },
      ],
    },
    {
      table_name: "Student",
      table_schema: "public",
      columns: [
        { column_name: "id", data_type: "text" },
        { column_name: "firstName", data_type: "text" },
        { column_name: "lastName", data_type: "text" },
        { column_name: "gradeLevel", data_type: "integer" },
        { column_name: "classId", data_type: "text" },
      ],
    },
  ])

  useEffect(() => {
    // Simulate loading stats
    setStats({
      totalUsers: 6,
      totalLessons: 45,
      totalAssessments: 23,
      totalClasses: 12,
      totalStudents: 156,
    })
  }, [])

  const getTableIcon = (tableName: string) => {
    switch (tableName.toLowerCase()) {
      case "users":
        return <Users className="h-4 w-4" />
      case "lesson_plans":
      case "lesson":
        return <BookOpen className="h-4 w-4" />
      case "assessment":
        return <BarChart3 className="h-4 w-4" />
      case "class":
        return <GraduationCap className="h-4 w-4" />
      case "student":
        return <Users className="h-4 w-4" />
      default:
        return <Database className="h-4 w-4" />
    }
  }

  const getDataTypeColor = (dataType: string) => {
    if (dataType.includes("text") || dataType.includes("varchar")) return "bg-blue-100 text-blue-800"
    if (dataType.includes("integer") || dataType.includes("double")) return "bg-green-100 text-green-800"
    if (dataType.includes("timestamp") || dataType.includes("date")) return "bg-purple-100 text-purple-800"
    if (dataType.includes("jsonb") || dataType.includes("json")) return "bg-orange-100 text-orange-800"
    return "bg-gray-100 text-gray-800"
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">OECS Hub Admin Dashboard</h1>
          <p className="text-muted-foreground">System overview and database management</p>
        </div>
        <Badge variant="outline" className="text-sm">
          Administrator Access
        </Badge>
      </div>

      {/* System Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalUsers}</div>
            <p className="text-xs text-muted-foreground">Active system users</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lesson Plans</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalLessons}</div>
            <p className="text-xs text-muted-foreground">Created by teachers</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Assessments</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalAssessments}</div>
            <p className="text-xs text-muted-foreground">Quizzes and tests</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Classes</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalClasses}</div>
            <p className="text-xs text-muted-foreground">Active classes</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalStudents}</div>
            <p className="text-xs text-muted-foreground">Enrolled students</p>
          </CardContent>
        </Card>
      </div>

      {/* Database Schema Overview */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Database Overview</TabsTrigger>
          <TabsTrigger value="tables">Table Details</TabsTrigger>
          <TabsTrigger value="relationships">Relationships</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Database Tables</CardTitle>
              <CardDescription>Overview of all database tables in the OECS Hub system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tables.map((table) => (
                  <Card key={table.table_name} className="border-l-4 border-l-blue-500">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-2">
                        {getTableIcon(table.table_name)}
                        <CardTitle className="text-lg">{table.table_name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Columns:</span>
                          <Badge variant="secondary">{table.columns.length}</Badge>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Key columns:{" "}
                          {table.columns
                            .slice(0, 3)
                            .map((col) => col.column_name)
                            .join(", ")}
                          {table.columns.length > 3 && "..."}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tables" className="space-y-4">
          {tables.map((table) => (
            <Card key={table.table_name}>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  {getTableIcon(table.table_name)}
                  <CardTitle>{table.table_name}</CardTitle>
                </div>
                <CardDescription>Table schema with {table.columns.length} columns</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Column Name</TableHead>
                      <TableHead>Data Type</TableHead>
                      <TableHead>Properties</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {table.columns.map((column) => (
                      <TableRow key={column.column_name}>
                        <TableCell className="font-medium">{column.column_name}</TableCell>
                        <TableCell>
                          <Badge variant="secondary" className={getDataTypeColor(column.data_type)}>
                            {column.data_type}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {column.column_name === "id" && <Badge variant="outline">Primary Key</Badge>}
                          {column.column_name.endsWith("_id") && column.column_name !== "id" && (
                            <Badge variant="outline">Foreign Key</Badge>
                          )}
                          {column.column_name.includes("created") ||
                            (column.column_name.includes("updated") && <Badge variant="outline">Timestamp</Badge>)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="relationships" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Table Relationships</CardTitle>
              <CardDescription>Foreign key relationships between tables</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">User Relationships</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• users.id → lesson_plans.user_id (One-to-Many)</li>
                    <li>• users.id → Assessment.createdById (One-to-Many)</li>
                    <li>• users.id → Class.teacherId (One-to-Many)</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Class Relationships</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Class.id → Student.classId (One-to-Many)</li>
                    <li>• Class.id → Assessment.classId (One-to-Many)</li>
                    <li>• Class.id → Lesson.classId (One-to-Many)</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Assessment Relationships</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Assessment.id → AssessmentResult.assessmentId (One-to-Many)</li>
                    <li>• Student.id → AssessmentResult.studentId (One-to-Many)</li>
                    <li>• Lesson.id → Assessment.lessonId (One-to-Many)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common administrative tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex flex-col space-y-2">
              <Users className="h-6 w-6" />
              <span>Manage Users</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col space-y-2">
              <Database className="h-6 w-6" />
              <span>Database Backup</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col space-y-2">
              <BarChart3 className="h-6 w-6" />
              <span>System Reports</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col space-y-2">
              <Settings className="h-6 w-6" />
              <span>System Settings</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
