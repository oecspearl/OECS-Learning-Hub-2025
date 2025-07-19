import { StrandOverview } from "@/components/curriculum/strand-overview"

export default function CurriculumPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Grade 1 Language Arts Curriculum</h1>
      <p className="mb-6 text-gray-600">
        Browse the curriculum by strand and essential learning outcome. Each section contains specific curriculum
        outcomes, assessment strategies, and learning strategies.
      </p>

      <div className="bg-white rounded-lg shadow p-6">
        <StrandOverview />
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Database Connection</h2>
        <p>
          This curriculum management system requires a database connection to function properly. If you're seeing sample
          data, please ensure your DATABASE_URL environment variable is set correctly.
        </p>
        <div className="mt-4">
          <h3 className="font-medium">To initialize the database:</h3>
          <ol className="list-decimal pl-5 mt-2">
            <li>Set up your Supabase PostgreSQL database</li>
            <li>Add the SUPABASE_URL and SUPABASE_ANON_KEY to your environment variables</li>
            <li>Run the database initialization script</li>
            <li>Run the curriculum seeding script</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
