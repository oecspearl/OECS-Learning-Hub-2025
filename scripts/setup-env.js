const fs = require('fs')
const path = require('path')

const envContent = `# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://howglhskpjzixwfuqbql.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhvd2dsaHNrcGp6aXh3ZnVxYnFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNzM0ODUsImV4cCI6MjA1ODc0OTQ4NX0.GYlIznzJGrqSbdg_ZiFaaCM6WRmE_N_2FGNq67-9Onk

# NextAuth Configuration
NEXTAUTH_SECRET=your-nextauth-secret-key-here
NEXTAUTH_URL=http://localhost:3001

# OpenAI Configuration (optional)
OPENAI_API_KEY=your-openai-api-key-here
OPENAI_MODEL=gpt-4
`

const envPath = path.join(__dirname, '..', '.env.local')

try {
  // Check if .env.local already exists
  if (fs.existsSync(envPath)) {
    console.log('⚠️  .env.local already exists. Please add the following variables manually:')
    console.log('\nNEXT_PUBLIC_SUPABASE_URL=https://howglhskpjzixwfuqbql.supabase.co')
    console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhvd2dsaHNrcGp6aXh3ZnVxYnFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNzM0ODUsImV4cCI6MjA1ODc0OTQ4NX0.GYlIznzJGrqSbdg_ZiFaaCM6WRmE_N_2FGNq67-9Onk')
  } else {
    // Create .env.local file
    fs.writeFileSync(envPath, envContent)
    console.log('✅ Created .env.local file with Supabase configuration')
    console.log('📝 Please update the file with your actual API keys')
  }
  
  console.log('\n🔧 Next steps:')
  console.log('1. Restart your development server: npm run dev')
  console.log('2. Test the connection: npm run test-supabase')
  console.log('3. Initialize the database: npm run init-supabase')
  
} catch (error) {
  console.error('❌ Error creating .env.local file:', error.message)
  console.log('\n📝 Please create a .env.local file manually with the following content:')
  console.log('\nNEXT_PUBLIC_SUPABASE_URL=https://howglhskpjzixwfuqbql.supabase.co')
  console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhvd2dsaHNrcGp6aXh3ZnVxYnFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNzM0ODUsImV4cCI6MjA1ODc0OTQ4NX0.GYlIznzJGrqSbdg_ZiFaaCM6WRmE_N_2FGNq67-9Onk')
} 