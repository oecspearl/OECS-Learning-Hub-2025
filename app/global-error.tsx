"use client"

import { Button } from "@/components/ui/button"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center p-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight">Something went wrong!</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We've encountered a critical error and are working to fix it.
            </p>
            {error.digest && <p className="mt-2 text-sm text-muted-foreground">Error Digest: {error.digest}</p>}
            <div className="mt-6">
              <Button onClick={() => reset()}>Try again</Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
