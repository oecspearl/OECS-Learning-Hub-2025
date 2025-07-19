import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

type StandardsBadgeProps = {
  code?: string
  description?: string
  subject?: string
  grade?: string
  strand?: string
}

export function StandardsBadge({ code, description, subject, grade, strand }: StandardsBadgeProps) {
  // Generate a code if not provided
  const displayCode =
    code ||
    `${subject ? subject.substring(0, 3).toUpperCase() : "SUB"}.${grade || "X"}.${strand ? strand.substring(0, 3).toUpperCase() : "STR"}`

  // Generate a description if not provided
  const displayDescription =
    description || `${subject || "Subject"} standards for Grade ${grade || "X"} ${strand || "strand"} strand`

  // Format subject and strand for display
  const formattedSubject = subject ? subject.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()) : "Subject"

  const formattedStrand = strand ? strand.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()) : "Strand"

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 cursor-help">
            {displayCode}
          </Badge>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <div className="space-y-2">
            <p className="font-medium">{displayDescription}</p>
            <div className="text-xs text-muted-foreground">
              <p>{formattedSubject}</p>
              <p>{grade === "K" ? "Kindergarten" : `Grade ${grade || "X"}`}</p>
              <p>{formattedStrand}</p>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
