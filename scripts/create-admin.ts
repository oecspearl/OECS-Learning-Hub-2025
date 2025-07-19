import { ensureAdminUserExists } from '../lib/db-safe'

async function main() {
  try {
    await ensureAdminUserExists()
    console.log('Admin user setup completed')
    process.exit(0)
  } catch (error) {
    console.error('Failed to create admin user:', error)
    process.exit(1)
  }
}

main() 