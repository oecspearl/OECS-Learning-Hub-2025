"use client"

interface QuizFormatterProps {
  content: string
  className?: string
}

export function QuizFormatter({ content, className = "" }: QuizFormatterProps) {
  const formatQuizContent = (text: string) => {
    // Split content into sections
    const sections = text.split(/^---$/gm)

    return sections.map((section, index) => {
      const formattedSection = section
        // Headers
        .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mb-6 text-primary border-b pb-2">$1</h1>')
        .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-semibold mb-4 mt-8 text-secondary-foreground">$1</h2>')
        .replace(/^### (.+)$/gm, '<h3 class="text-xl font-medium mb-3 mt-6">$1</h3>')

        // Bold metadata
        .replace(
          /^\*\*(.+?):\*\* (.+)$/gm,
          '<div class="mb-2"><span class="font-semibold text-primary">$1:</span> <span class="text-muted-foreground">$2</span></div>',
        )

        // Questions with numbers
        .replace(
          /^(\d+)\.\s(.+)$/gm,
          '<div class="mb-4 p-4 bg-muted/30 rounded-lg border-l-4 border-primary"><div class="flex items-start gap-3"><span class="font-bold text-lg text-primary min-w-[2rem]">$1.</span><div class="flex-1 font-medium">$2</div></div></div>',
        )

        // Multiple choice options
        .replace(
          /^ {3}([A-D])\)\s(.+)$/gm,
          '<div class="ml-8 mb-2 flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-sm flex items-center justify-center font-medium">$1</span><span>$2</span></div>',
        )

        // Answer key items
        .replace(
          /^(\d+)\.\s([A-D])\s*-?\s*(.*)$/gm,
          '<div class="mb-2 flex items-start gap-3"><span class="font-medium text-primary min-w-[2rem]">$1.</span><span class="font-semibold text-green-600">$2</span><span class="text-muted-foreground ml-2">$3</span></div>',
        )

        // True/False answers
        .replace(
          /^(\d+)\.\s(True|False)\s*-?\s*(.*)$/gm,
          '<div class="mb-2 flex items-start gap-3"><span class="font-medium text-primary min-w-[2rem]">$1.</span><span class="font-semibold text-green-600">$2</span><span class="text-muted-foreground ml-2">$3</span></div>',
        )

        // Other indented content
        .replace(/^ {3}(.+)$/gm, '<div class="ml-6 mb-1 text-muted-foreground">$1</div>')

        // Line breaks
        .replace(/\n\n/g, "<br><br>")
        .replace(/\n/g, "<br>")

      return (
        <div key={index} className="quiz-section">
          <div dangerouslySetInnerHTML={{ __html: formattedSection }} />
          {index < sections.length - 1 && <hr className="my-6 border-border" />}
        </div>
      )
    })
  }

  return (
    <div className={`quiz-formatter ${className}`}>
      <style jsx>{`
        .quiz-formatter {
          line-height: 1.6;
        }
        .quiz-formatter h1 {
          color: hsl(var(--primary));
        }
        .quiz-formatter h2 {
          color: hsl(var(--secondary-foreground));
        }
      `}</style>
      {formatQuizContent(content)}
    </div>
  )
}
