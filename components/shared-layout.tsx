import type { ReactNode } from "react"

interface SharedLayoutProps {
  children: ReactNode
  containerClass?: string
}

export function SharedLayout({ children, containerClass = "container py-6" }: SharedLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className={`flex-1 ${containerClass}`}>{children}</main>
    </div>
  )
}
