export function exportRubric(rubric: any, format: string) {
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

function exportToPrint(rubric: any) {
  const printWindow = window.open("", "_blank")
  if (!printWindow) return

  const html = `
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
        @media print { body { margin: 0; } }
      </style>
    </head>
    <body>
      <h1>${rubric.title}</h1>
      <table>
        <thead>
          <tr>
            <th style="width: 200px;">Criteria</th>
            ${rubric.levelLabels.map((label: string) => `<th>${label}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${rubric.criteria
            .map(
              (criterion: any) => `
            <tr>
              <td>
                <div class="criterion-name">${criterion.name}</div>
                <div style="font-size: 0.9em; color: #666;">${criterion.description}</div>
              </td>
              ${criterion.levels
                .map(
                  (level: any) => `
                <td>
                  <div class="points">${level.points} pts</div>
                  <div>${level.description}</div>
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

  printWindow.document.write(html)
  printWindow.document.close()
  printWindow.focus()
  setTimeout(() => {
    printWindow.print()
  }, 250)
}

function exportToCSV(rubric: any) {
  const headers = ["Criteria", "Description", ...rubric.levelLabels]
  const rows = [headers]

  rubric.criteria.forEach((criterion: any) => {
    const row = [
      criterion.name,
      criterion.description,
      ...criterion.levels.map((level: any) => `${level.points} pts - ${level.description}`),
    ]
    rows.push(row)
  })

  const csvContent = rows.map((row) => row.map((cell) => `"${cell.replace(/"/g, '""')}"`).join(",")).join("\n")

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
  const link = document.createElement("a")
  const url = URL.createObjectURL(blob)
  link.setAttribute("href", url)
  link.setAttribute("download", `${rubric.title.replace(/[^a-z0-9]/gi, "_")}.csv`)
  link.style.visibility = "hidden"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

function exportToHTML(rubric: any) {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${rubric.title}</title>
      <style>
        body { font-family: Arial, sans-serif; max-width: 1200px; margin: 0 auto; padding: 20px; }
        h1 { color: #22c55e; border-bottom: 3px solid #22c55e; padding-bottom: 15px; }
        table { width: 100%; border-collapse: collapse; margin-top: 30px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
        th, td { border: 1px solid #e5e7eb; padding: 15px; text-align: left; vertical-align: top; }
        th { background-color: #f9fafb; font-weight: bold; color: #374151; }
        .criterion-name { font-weight: bold; color: #22c55e; margin-bottom: 8px; }
        .criterion-desc { color: #6b7280; font-size: 0.9em; }
        .points { font-weight: bold; color: #059669; margin-bottom: 8px; }
        .level-desc { line-height: 1.5; }
        tr:nth-child(even) { background-color: #f9fafb; }
        tr:hover { background-color: #f3f4f6; }
      </style>
    </head>
    <body>
      <h1>${rubric.title}</h1>
      <table>
        <thead>
          <tr>
            <th style="width: 250px;">Assessment Criteria</th>
            ${rubric.levelLabels.map((label: string) => `<th>${label}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${rubric.criteria
            .map(
              (criterion: any) => `
            <tr>
              <td>
                <div class="criterion-name">${criterion.name}</div>
                <div class="criterion-desc">${criterion.description}</div>
              </td>
              ${criterion.levels
                .map(
                  (level: any) => `
                <td>
                  <div class="points">${level.points} points</div>
                  <div class="level-desc">${level.description}</div>
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
      <footer style="margin-top: 40px; text-align: center; color: #6b7280; font-size: 0.9em;">
        Generated by AI Rubric Generator
      </footer>
    </body>
    </html>
  `

  const blob = new Blob([html], { type: "text/html;charset=utf-8;" })
  const link = document.createElement("a")
  const url = URL.createObjectURL(blob)
  link.setAttribute("href", url)
  link.setAttribute("download", `${rubric.title.replace(/[^a-z0-9]/gi, "_")}.html`)
  link.style.visibility = "hidden"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
