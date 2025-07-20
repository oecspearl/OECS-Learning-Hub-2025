require('dotenv').config({ path: '.env.local' })
const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

async function viewAuthLogs() {
  try {
    console.log('🔍 Fetching authentication logs...')
    
    // Get recent logs
    const { data: logs, error } = await supabase
      .from('auth_debug_logs')
      .select('*')
      .order('timestamp', { ascending: false })
      .limit(20)
    
    if (error) {
      console.error('❌ Error fetching logs:', error)
      return
    }
    
    if (!logs || logs.length === 0) {
      console.log('📝 No auth logs found yet. Try logging in to generate some logs!')
      return
    }
    
    console.log(`\n📊 Found ${logs.length} recent auth logs:\n`)
    
    logs.forEach((log, index) => {
      const timestamp = new Date(log.timestamp).toLocaleString()
      const status = log.success ? '✅' : '❌'
      console.log(`${index + 1}. ${status} ${log.event_type}`)
      console.log(`   Email: ${log.email || 'N/A'}`)
      console.log(`   Provider: ${log.provider || 'N/A'}`)
      console.log(`   Success: ${log.success}`)
      if (log.error_message) {
        console.log(`   Error: ${log.error_message}`)
      }
      console.log(`   Time: ${timestamp}`)
      console.log('')
    })
    
    // Get summary
    const { data: summary, error: summaryError } = await supabase
      .from('auth_logs_summary')
      .select('*')
    
    if (!summaryError && summary && summary.length > 0) {
      console.log('📈 Auth Logs Summary:')
      summary.forEach(item => {
        const icon = item.success ? '✅' : '❌'
        console.log(`${icon} ${item.event_type} (${item.provider || 'N/A'}): ${item.count} attempts`)
      })
    }
    
  } catch (error) {
    console.error('❌ Error:', error)
  }
}

viewAuthLogs() 