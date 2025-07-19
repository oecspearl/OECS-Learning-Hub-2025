import { executeQuery } from "@/lib/db"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, BookOpen, FileText } from "lucide-react"
import Link from "next/link"

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function PDFContentPage({ params }: PageProps) {
  const { id } = await params

  // Fetch the PDF document
  const documents = await executeQuery(`SELECT * FROM "PDFDocument" WHERE id = $1 LIMIT 1`, [id])

  if (!documents || documents.length === 0) {
    return (
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Document Not Found</h1>
          <p className="text-muted-foreground">The requested PDF document could not be found.</p>
        </div>
        <Link href="/dashboard/admin/curriculum">
          <Button variant="outline" className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back to Curriculum
          </Button>
        </Link>
      </div>
    )
  }

  const document = documents[0]
  const metadata = document.metadata
    ? typeof document.metadata === "string"
      ? JSON.parse(document.metadata)
      : document.metadata
    : {}

  // Fetch subjects created from this PDF
  const subjects = await executeQuery(`SELECT * FROM "Subject" WHERE name = $1 AND "gradeLevel" = $2`, [
    metadata.subject || metadata.processed?.subject || "",
    metadata.grade || metadata.processed?.grade || 0,
  ])

  // Fetch units and lessons if a subject was found
  let units = []
  let lessons = []

  if (subjects && subjects.length > 0) {
    const subject = subjects[0]

    // Fetch units
    units = await executeQuery(`SELECT * FROM "Unit" WHERE "subjectId" = $1 ORDER BY "order"`, [subject.id])

    // Fetch lessons
    if (units && units.length > 0) {
      const unitIds = units.map((unit) => unit.id)
      lessons = await executeQuery(`SELECT * FROM "Lesson" WHERE "unitId" = ANY($1) ORDER BY "unitId", "createdAt"`, [
        unitIds,
      ])
    }
  }

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">{document.title}</h1>
          <div className="flex gap-2">
            <Link href="/dashboard/admin/curriculum">
              <Button variant="outline" className="flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            </Link>
            <Link href={document.url} target="_blank">
              <Button className="flex items-center gap-1">
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge
            variant={
              document.status === "processed" ? "default" : document.status === "processing" ? "outline" : "destructive"
            }
          >
            {document.status.charAt(0).toUpperCase() + document.status.slice(1)}
          </Badge>
          <p className="text-muted-foreground">
            Uploaded on {formatDate(document.uploadedAt)}
            {document.processedAt && ` • Processed on ${formatDate(document.processedAt)}`}
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Document Information</CardTitle>
            <CardDescription>Details about the PDF document</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium">Filename</p>
                <p className="text-sm text-muted-foreground">{document.filename}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Size</p>
                <p className="text-sm text-muted-foreground">{(document.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
              <div>
                <p className="text-sm font-medium">Grade Level</p>
                <p className="text-sm text-muted-foreground">
                  Grade {metadata.grade || metadata.processed?.grade || "N/A"}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Subject</p>
                <p className="text-sm text-muted-foreground">
                  {metadata.subject || metadata.processed?.subject || "N/A"}
                </p>
              </div>
            </div>

            {metadata.processed && (
              <div>
                <p className="text-sm font-medium">Processing Summary</p>
                <div className="mt-2 space-y-1">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Units:</span> {metadata.processed.units || 0}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Lessons:</span> {metadata.processed.lessons || 0}
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Extracted Content</CardTitle>
            <CardDescription>Content extracted from the PDF</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {subjects && subjects.length > 0 ? (
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium">Subject</p>
                  <p className="text-sm text-muted-foreground">
                    {subjects[0].name} (Grade {subjects[0].gradeLevel})
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium">Units ({units.length})</p>
                  <ul className="mt-2 space-y-2">
                    {units.map((unit) => (
                      <li key={unit.id} className="text-sm">
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-muted-foreground" />
                          <span>{unit.name}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-medium">Lessons ({lessons.length})</p>
                  <ul className="mt-2 space-y-2">
                    {lessons.slice(0, 5).map((lesson) => (
                      <li key={lesson.id} className="text-sm">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span>{lesson.title}</span>
                        </div>
                      </li>
                    ))}
                    {lessons.length > 5 && (
                      <li className="text-sm text-muted-foreground">+{lessons.length - 5} more lessons</li>
                    )}
                  </ul>
                </div>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                {document.status === "processed"
                  ? "No content was extracted from this document."
                  : "This document has not been processed yet."}
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      {units.length > 0 && lessons.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Curriculum Structure</CardTitle>
            <CardDescription>The complete curriculum structure extracted from this document</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {units.map((unit) => {
                const unitLessons = lessons.filter((lesson) => lesson.unitId === unit.id)
                return (
                  <div key={unit.id} className="space-y-4">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      <h3 className="text-lg font-semibold">{unit.name}</h3>
                    </div>

                    <div className="pl-6 space-y-3">
                      {unitLessons.map((lesson) => {
                        const lessonContent = lesson.content
                          ? typeof lesson.content === "string"
                            ? JSON.parse(lesson.content)
                            : lesson.content
                          : {}

                        return (
                          <div key={lesson.id} className="space-y-2">
                            <div className="flex items-center gap-2">
                              <FileText className="h-4 w-4" />
                              <h4 className="font-medium">{lesson.title}</h4>
                            </div>

                            {lesson.objectives && lesson.objectives.length > 0 && (
                              <div className="pl-6">
                                <p className="text-sm font-medium">Objectives:</p>
                                <ul className="list-disc pl-5 text-sm text-muted-foreground">
                                  {lesson.objectives.map((objective, index) => (
                                    <li key={index}>{objective}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {lessonContent.introduction && (
                              <div className="pl-6">
                                <p className="text-sm font-medium">Introduction:</p>
                                <p className="text-sm text-muted-foreground">{lessonContent.introduction}</p>
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
