const { createClient } = require('@supabase/supabase-js')
const bcrypt = require('bcrypt')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function initializeDatabase() {
  try {
    console.log('Initializing Supabase database...')

    // Create default admin user
    const hashedPassword = await bcrypt.hash('admin123', 10)
    
    const { data: adminUser, error: adminError } = await supabase
      .from('users')
      .upsert({
        name: 'Admin User',
        email: 'admin@example.com',
        password_hash: hashedPassword,
        role: 'admin'
      }, { onConflict: 'email' })
      .select()
      .single()

    if (adminError) {
      console.error('Error creating admin user:', adminError)
    } else {
      console.log('Admin user created/updated successfully')
    }

    // Create default settings
    const defaultSettings = [
      {
        key: 'app_name',
        value: 'OECS Learning Hub',
        type: 'string',
        category: 'general',
        description: 'Application name'
      },
      {
        key: 'app_version',
        value: '1.0.0',
        type: 'string',
        category: 'general',
        description: 'Application version'
      },
      {
        key: 'maintenance_mode',
        value: 'false',
        type: 'boolean',
        category: 'general',
        description: 'Maintenance mode flag'
      },
      {
        key: 'default_theme',
        value: 'light',
        type: 'string',
        category: 'appearance',
        description: 'Default theme'
      },
      {
        key: 'email_notifications',
        value: 'true',
        type: 'boolean',
        category: 'notifications',
        description: 'Email notifications enabled'
      }
    ]

    for (const setting of defaultSettings) {
      const { error: settingError } = await supabase
        .from('settings')
        .upsert(setting, { onConflict: 'key' })

      if (settingError) {
        console.error(`Error creating setting ${setting.key}:`, settingError)
      } else {
        console.log(`Setting ${setting.key} created/updated successfully`)
      }
    }

    // Create sample strands for Language Arts
    const languageArtsStrands = [
      {
        name: 'Listening and Speaking',
        description: 'Development of oral communication skills',
        sort_order: 1,
        subject: 'Language Arts',
        grade: 'Grade 1'
      },
      {
        name: 'Reading and Viewing',
        description: 'Development of reading comprehension and visual literacy',
        sort_order: 2,
        subject: 'Language Arts',
        grade: 'Grade 1'
      },
      {
        name: 'Writing and Representing',
        description: 'Development of writing and representation skills',
        sort_order: 3,
        subject: 'Language Arts',
        grade: 'Grade 1'
      }
    ]

    for (const strand of languageArtsStrands) {
      const { data: strandData, error: strandError } = await supabase
        .from('strands')
        .upsert(strand, { onConflict: 'name,subject,grade' })
        .select()
        .single()

      if (strandError) {
        console.error(`Error creating strand ${strand.name}:`, strandError)
      } else {
        console.log(`Strand ${strand.name} created/updated successfully`)
      }
    }

    console.log('Database initialization completed successfully!')
  } catch (error) {
    console.error('Error initializing database:', error)
    process.exit(1)
  }
}

// Run the initialization
initializeDatabase() 