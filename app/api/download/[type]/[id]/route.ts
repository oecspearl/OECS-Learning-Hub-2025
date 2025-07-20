import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ type: string; id: string }> }
) {
  try {
    const { type, id } = await params
    const { searchParams } = new URL(request.url)
    const format = searchParams.get("format") || "pdf"

    // Fetch the resource data
    let resourceData: any = null
    
    switch (type) {
      case "quizzes":
        resourceData = await db.quizzes.findFirst({ id })
        break
      case "lesson-plans":
        resourceData = await db.lessonPlans.findFirst({ id })
        break
      case "multigrade":
        // multigradePlans expects a number id
        resourceData = await db.multigradePlans.findFirst({ id: parseInt(id) })
        break
      case "cross-curricular":
        resourceData = await db.crossCurricularPlans.findFirst({ id })
        break
      default:
        return NextResponse.json({ error: "Invalid resource type" }, { status: 400 })
    }

    if (!resourceData) {
      return NextResponse.json({ error: "Resource not found" }, { status: 404 })
    }

    // Generate the appropriate file format
    let content: string
    let contentType: string
    let filename: string

    switch (format) {
      case "pdf":
        content = generatePDFContent(resourceData, type)
        contentType = "application/pdf"
        filename = `${type}-${id}.pdf`
        break
      
      case "docx":
        content = generateWordContent(resourceData, type)
        contentType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        filename = `${type}-${id}.docx`
        break
      
      case "json":
        content = generateJSONContent(resourceData, type)
        contentType = "application/json"
        filename = `${type}-${id}.json`
        break
      
      default:
        return NextResponse.json({ error: "Unsupported format" }, { status: 400 })
    }

    // Create response with appropriate headers
    const response = new NextResponse(content, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    })

    return response
  } catch (error) {
    console.error("Download error:", error)
    return NextResponse.json({ error: "Failed to generate download" }, { status: 500 })
  }
}

function generatePDFContent(data: any, type: string): string {
  // For now, return a simple text-based PDF structure
  // In production, you'd use a proper PDF library like jsPDF or puppeteer
  const content = `
%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
>>
endobj

4 0 obj
<<
/Length 200
>>
stream
BT
/F1 12 Tf
72 720 Td
(${data.title || 'Untitled'}) Tj
0 -20 Td
(${data.subject || ''} - ${data.grade || ''}) Tj
0 -20 Td
(${data.content || ''}) Tj
ET
endstream
endobj

xref
0 5
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000204 00000 n 
trailer
<<
/Size 5
/Root 1 0 R
>>
startxref
300
%%EOF
  `
  return content
}

function generateWordContent(data: any, type: string): string {
  // Generate a simple Word document structure
  // In production, you'd use a library like docx or mammoth
  const content = `
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:body>
    <w:p>
      <w:r>
        <w:t>${data.title || 'Untitled'}</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:r>
        <w:t>${data.subject || ''} - ${data.grade || ''}</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:r>
        <w:t>${data.content || ''}</w:t>
      </w:r>
    </w:p>
  </w:body>
</w:document>
  `
  return content
}

function generateJSONContent(data: any, type: string): string {
  // Generate a structured JSON file that can be imported back
  const exportData = {
    type: type,
    id: data.id,
    title: data.title,
    subject: data.subject,
    grade: data.grade,
    topic: data.topic,
    content: data.content,
    metadata: {
      created_at: data.created_at,
      updated_at: data.updated_at,
      user_id: data.user_id,
      question_count: data.question_count,
      difficulty: data.difficulty,
      time_limit: data.time_limit,
      tags: data.tags,
      instructions: data.instructions
    },
    export_info: {
      exported_at: new Date().toISOString(),
      version: "1.0",
      format: "json"
    }
  }
  
  return JSON.stringify(exportData, null, 2)
} 