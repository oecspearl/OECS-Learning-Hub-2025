interface ExportOptions {
  title: string
  subtitle?: string
  content: {
    heading?: string
    text?: string
    table?: {
      headers: string[]
      rows: string[][]
    }
    list?: string[]
  }[]
}

export function exportToPDF({ title, subtitle, content }: ExportOptions) {
  // Create a printable HTML document
  const printWindow = window.open("", "_blank")

  if (!printWindow) {
    alert("Please allow pop-ups to export documents")
    return null
  }

  // Add styles and content to the new window
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>${title}</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 40px;
          line-height: 1.5;
        }
        h1 {
          font-size: 24px;
          margin-bottom: 10px;
          color: #333;
        }
        h2 {
          font-size: 18px;
          margin-bottom: 8px;
          color: #555;
        }
        h3 {
          font-size: 16px;
          margin-bottom: 6px;
          color: #666;
        }
        p {
          margin-bottom: 16px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }
        th {
          background-color: #f2f2f2;
          font-weight: bold;
        }
        ul {
          margin-bottom: 16px;
        }
        .export-controls {
          position: fixed;
          top: 10px;
          right: 10px;
          background: #f0f0f0;
          padding: 10px;
          border-radius: 4px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
        .export-controls button {
          padding: 8px 12px;
          margin: 0 5px;
          cursor: pointer;
          background: #4a86e8;
          color: white;
          border: none;
          border-radius: 4px;
        }
        @media print {
          .export-controls {
            display: none;
          }
        }
      </style>
    </head>
    <body>
      <div class="export-controls">
        <button onclick="window.print()">Print</button>
        <button onclick="window.close()">Close</button>
      </div>
      <h1>${title}</h1>
      ${subtitle ? `<h2>${subtitle}</h2>` : ""}
  `)

  // Add content
  content.forEach((item) => {
    if (item.heading) {
      printWindow.document.write(`<h3>${item.heading}</h3>`)
    }

    if (item.text) {
      printWindow.document.write(`<p>${item.text}</p>`)
    }

    if (item.table) {
      printWindow.document.write("<table>")

      // Add headers
      printWindow.document.write("<tr>")
      item.table.headers.forEach((header) => {
        printWindow.document.write(`<th>${header}</th>`)
      })
      printWindow.document.write("</tr>")

      // Add rows
      printWindow.document.write("<tr>")
      item.table.rows.forEach((row) => {
        row.forEach((cell) => {
          printWindow.document.write(`<td>${cell}</td>`)
        })
        printWindow.document.write("</tr>")
      })

      printWindow.document.write("</table>")
    }

    if (item.list) {
      printWindow.document.write("<ul>")
      item.list.forEach((listItem) => {
        printWindow.document.write(`<li>${listItem}</li>`)
      })
      printWindow.document.write("</ul>")
    }
  })

  printWindow.document.write(`
    </body>
    </html>
  `)

  printWindow.document.close()

  // Return a simple object to maintain API compatibility
  return {
    save: (filename: string) => {
      console.log(`Document "${filename}" ready for printing or saving`)
      // The actual saving happens when the user clicks the print button
      // and chooses to save as PDF in the print dialog
    },
  }
}
