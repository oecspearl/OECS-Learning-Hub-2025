import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    const resourceType = searchParams.get('type') // lesson-plans, quizzes, multigrade, cross-curricular
    const subject = searchParams.get('subject') // optional filter by subject

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 })
    }

    let resources = []

    switch (resourceType) {
      case 'lesson-plans':
        let query = supabase
          .from('lesson_plans')
          .select('*')
          .eq('user_id', userId)
          .order('created_at', { ascending: false })

        if (subject && subject !== 'All') {
          query = query.eq('subject', subject)
        }

        const { data: lessonPlans, error: lessonError } = await query
        if (lessonError) throw lessonError

        resources = lessonPlans?.map(plan => ({
          id: plan.id,
          title: plan.title,
          subject: plan.subject,
          grade: plan.grade_level,
          createdAt: plan.created_at,
          status: plan.status || 'active'
        })) || []
        break

      case 'quizzes':
        const { data: quizzes, error: quizError } = await supabase
          .from('quizzes')
          .select('*')
          .eq('user_id', userId)
          .order('created_at', { ascending: false })

        if (quizError) throw quizError

        resources = quizzes?.map(quiz => ({
          id: quiz.id,
          title: quiz.title,
          subject: quiz.subject,
          grade: quiz.grade,
          createdAt: quiz.created_at,
          status: quiz.status || 'active'
        })) || []
        break

      case 'multigrade':
        const { data: multigradePlans, error: multigradeError } = await supabase
          .from('multigrade_plans')
          .select('*')
          .eq('user_id', userId)
          .order('created_at', { ascending: false })

        if (multigradeError) throw multigradeError

        resources = multigradePlans?.map(plan => ({
          id: plan.id,
          title: plan.title,
          subject: plan.subject,
          grade: plan.grade_range,
          createdAt: plan.created_at,
          status: plan.status || 'active'
        })) || []
        break

      case 'cross-curricular':
        const { data: crossCurricularPlans, error: crossCurricularError } = await supabase
          .from('cross_curricular_plans')
          .select('*')
          .eq('user_id', userId)
          .order('created_at', { ascending: false })

        if (crossCurricularError) throw crossCurricularError

        resources = crossCurricularPlans?.map(plan => ({
          id: plan.id,
          title: plan.title,
          subject: plan.subjects,
          grade: plan.grade_range,
          createdAt: plan.created_at,
          status: plan.status || 'active'
        })) || []
        break

      default:
        return NextResponse.json({ error: 'Invalid resource type' }, { status: 400 })
    }

    return NextResponse.json({ resources })
  } catch (error) {
    console.error('Error fetching resources:', error)
    return NextResponse.json({ error: 'Failed to fetch resources' }, { status: 500 })
  }
} 