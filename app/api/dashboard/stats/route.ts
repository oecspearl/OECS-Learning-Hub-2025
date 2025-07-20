import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

export async function GET(request: NextRequest) {
  try {
    // Get user role from query params
    const { searchParams } = new URL(request.url)
    const userRole = searchParams.get('role')
    const userId = searchParams.get('userId')

    if (!userRole) {
      return NextResponse.json({ error: 'User role is required' }, { status: 400 })
    }

    let stats = {}

    if (userRole === 'admin') {
      // Admin dashboard stats - system-wide statistics
      const [
        { count: totalUsers },
        { count: totalLessonPlans },
        { count: totalQuizzes },
        { count: totalMultigradePlans },
        { count: totalCrossCurricularPlans }
      ] = await Promise.all([
        supabase.from('users').select('*', { count: 'exact', head: true }),
        supabase.from('lesson_plans').select('*', { count: 'exact', head: true }),
        supabase.from('quizzes').select('*', { count: 'exact', head: true }),
        supabase.from('multigrade_plans').select('*', { count: 'exact', head: true }),
        supabase.from('cross_curricular_plans').select('*', { count: 'exact', head: true })
      ])

      stats = {
        totalUsers: totalUsers || 0,
        totalLessonPlans: totalLessonPlans || 0,
        totalQuizzes: totalQuizzes || 0,
        totalMultigradePlans: totalMultigradePlans || 0,
        totalCrossCurricularPlans: totalCrossCurricularPlans || 0,
        totalClasses: 0, // Add when classes table exists
        totalStudents: 0 // Add when students table exists
      }
    } else if (userRole === 'teacher') {
      // Teacher dashboard stats - user-specific statistics
      const [
        { count: lessonPlans },
        { count: quizzes },
        { count: multigradePlans },
        { count: crossCurricularPlans }
      ] = await Promise.all([
        supabase.from('lesson_plans').select('*', { count: 'exact', head: true }).eq('user_id', userId),
        supabase.from('quizzes').select('*', { count: 'exact', head: true }).eq('user_id', userId),
        supabase.from('multigrade_plans').select('*', { count: 'exact', head: true }).eq('user_id', userId),
        supabase.from('cross_curricular_plans').select('*', { count: 'exact', head: true }).eq('user_id', userId)
      ])

      stats = {
        lessonPlans: lessonPlans || 0,
        quizzes: quizzes || 0,
        multigradePlans: multigradePlans || 0,
        crossCurricularPlans: crossCurricularPlans || 0,
        totalStudents: 0, // Add when student-teacher relationship exists
        totalClasses: 0 // Add when classes table exists
      }
    } else if (userRole === 'parent') {
      // Parent dashboard stats - child-specific statistics
      // This would need to be implemented based on your parent-child relationship structure
      stats = {
        totalChildren: 0,
        activeSubjects: 0,
        recentActivities: 0,
        upcomingEvents: 0
      }
    }

    return NextResponse.json({ stats })
  } catch (error) {
    console.error('Error fetching dashboard stats:', error)
    return NextResponse.json({ error: 'Failed to fetch dashboard statistics' }, { status: 500 })
  }
} 