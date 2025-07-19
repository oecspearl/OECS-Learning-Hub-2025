import type React from "react"
export default function TeacherDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <main>{children}</main>
    </div>
  )
}
