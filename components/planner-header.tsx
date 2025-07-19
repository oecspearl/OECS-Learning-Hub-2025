import Link from "next/link"
import { Button } from "@/components/ui/button"

export function PlannerHeader() {
  return (
    <div className="w-full flex h-10 items-center border-b bg-background px-4">
      <div className="flex items-center gap-2 ml-auto">
        <Link href="/dashboard">
          <Button variant="ghost" size="sm">
            Back to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  )
}
