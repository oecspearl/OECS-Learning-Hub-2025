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

export function exportRubric(rubric: Rubric, format: string) {
  switch (format) {
    case "print":
      exportToPrint(rubric)
      break
    case "csv":
      exportToCSV(rubric)
      break
    case "html":
      exportToHTML(rubric)
      break
    default:
      console.error("Unsupported export format:", format)
  }
}

function exportToPrint(rubric: Rubric) {
  const printWindow = window.open("", "_blank")
  if (!printWindow) return

  const html = generatePrintHTML(rubric)
  printWindow.document.write(html)
  printWindow.document.close()
  printWindow.focus()
  printWindow.print()
}

function exportToCSV(rubric: Rubric) {
  let csv = `"${rubric.title}"\n\n`

  // Header row
  csv += '"Criteria","Description"'
  rubric.levelLabels.forEach((label) => {
    csv += `,"${label} (Points)","${label} Description"`
  })
  csv += "\n"

  // Data rows
  rubric.criteria.forEach((criterion) => {
    csv += `"${criterion.name}","${criterion.description}"`
    criterion.levels.forEach((level) => {
      csv += `,"${level.points}","${level.description}"`
    })
    csv += "\n"
  })

  downloadFile(csv, `${rubric.title}.csv`, "text/csv")
}

function exportToHTML(rubric: Rubric) {
  const html = generatePrintHTML(rubric)
  downloadFile(html, `${rubric.title}.html`, "text/html")
}

function generatePrintHTML(rubric: Rubric): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <title>${rubric.title}</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    h1 { color: #22c55e; border-bottom: 2px solid #22c55e; padding-bottom: 10px; }
    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
    th, td { border: 1px solid #ddd; padding: 12px; text-align: left; vertical-align: top; }
    th { background-color: #f8f9fa; font-weight: bold; }
    .criterion-name { font-weight: bold; color: #22c55e; }
    .points { font-weight: bold; }
    @media print {
      body { margin: 0; }
      table { page-break-inside: avoid; }
    }
  </style>
</head>
<body>
  <h1>${rubric.title}</h1>
  <table>
    <thead>
      <tr>
        <th style="width: 250px;">Criteria</th>
        ${rubric.levelLabels.map((label) => `<th>${label}</th>`).join("")}
      </tr>
    </thead>
    <tbody>
      ${rubric.criteria
        .map(
          (criterion) => `
        <tr>
          <td>
            <div class="criterion-name">${criterion.name}</div>
            <div style="font-size: 0.9em; color: #666;">${criterion.description}</div>
          </td>
          ${criterion.levels
            .map(
              (level) => `
            <td>
              <div class="points">${level.points} pts</div>
              <div style="font-size: 0.9em;">${level.description}</div>
            </td>
          `,
            )
            .join("")}
        </tr>
      `,
        )
        .join("")}
    </tbody>
  </table>
</body>
</html>
  `
}

function downloadFile(content: string, filename: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
