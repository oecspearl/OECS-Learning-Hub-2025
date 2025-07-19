import type React from "react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex min-h-screen pt-6">
        <div className="w-full">
          <main className="w-full px-4 md:px-6 lg:px-8 py-6">{children}</main>
        </div>
      </div>
    </div>
  )
}
