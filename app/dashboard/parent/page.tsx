"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { ProfileCard } from "@/components/dashboard/profile-card"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { ParentDashboardTabs } from "@/components/dashboard/parent-dashboard-tabs"
import { QuickActions } from "@/components/dashboard/quick-actions"

export default function ParentDashboardPage() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (!session || session.user.role.toLowerCase() !== "parent") {
    redirect("/login")
  }

  // For now, return empty arrays since we haven't implemented student data yet
  const studentProgress: any[] = []
  const progressBySubject: Record<string, any[]> = {}

  return (
    <div className="container mx-auto p-6 space-y-6">
      <ProfileCard />
      <StatsCards 
        lessonPlansCount={0}
        quizzesCount={0}
        multigradePlansCount={0}
        crossCurricularPlansCount={0}
        totalResources={0}
      />
      <ParentDashboardTabs studentProgress={studentProgress} progressBySubject={progressBySubject} />
      <QuickActions />
    </div>
  )
}
