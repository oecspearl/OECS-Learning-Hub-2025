import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { db } from "@/lib/db"
import { eq } from "drizzle-orm"
import { users } from "@/lib/schema"
import { ProfileCard } from "@/components/dashboard/profile-card"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { DashboardTabs } from "@/components/dashboard/dashboard-tabs"
import { QuickActions } from "@/components/dashboard/quick-actions"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard | OECS Learning Hub",
  description: "View your teaching resources and analytics",
}

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  if (!session) redirect("/login")
  if (session.user.role === "ADMIN") redirect("/dashboard/admin")

  // For now, return empty arrays since we haven't implemented lesson plans yet
  const lessonPlans: any[] = []
  const plansBySubject: Record<string, any[]> = {}

  return (
    <div className="container mx-auto p-6 space-y-6">
      <ProfileCard />
      <StatsCards />
      <DashboardTabs lessonPlans={lessonPlans} plansBySubject={plansBySubject} />
      <QuickActions />
    </div>
  )
}
