import Database from 'better-sqlite3'
import crypto from "crypto"

// Create SQLite database connection
const db = new Database('dev.db')

// Create a safer SQL client with error handling
let sql: any

try {
  // Create the SQL client
  sql = (query: any, ...params: any[]) => {
    try {
      // Handle tagged template literals
      if (Array.isArray(query) && (query as unknown as TemplateStringsArray).raw !== undefined) {
        // Merge the template literal and params into a single SQL string and params array
        let sqlString = query[0]
        for (let i = 1; i < query.length; i++) {
          sqlString += `?${query[i]}`
        }
        const flatParams = params.flat()
        const stmt = db.prepare(sqlString)
        if (sqlString.trim().toLowerCase().startsWith('select')) {
          return stmt.all(...flatParams)
        } else {
          return stmt.run(...flatParams)
        }
      } else {
        // Plain string query
        const stmt = db.prepare(query)
        if (query.trim().toLowerCase().startsWith('select')) {
          return stmt.all(...params)
        } else {
          return stmt.run(...params)
        }
      }
    } catch (error) {
      console.error("Database query error:", error)
      return []
    }
  }
} catch (error) {
  console.error("Failed to initialize database connection:", error)
  sql = () => []
}

// Export the SQL client
export { sql }

// Helper function to safely execute SQL queries
export async function safeQuery(query: string, params: any[] = []) {
  try {
    return sql(query, params)
  } catch (error) {
    console.error("Database query error:", error)
    return []
  }
}

// Helper function to check if tables exist
export async function ensureTablesExist() {
  try {
    // Check if the lesson_plans table exists
    const tableExists = sql(`
      SELECT name FROM sqlite_master 
      WHERE type='table' AND name='lesson_plans'
    `)

    // If the table doesn't exist, create it
    if (tableExists.length === 0) {
      sql(`
        CREATE TABLE lesson_plans (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT NOT NULL,
          subject TEXT NOT NULL,
          grade_level TEXT,
          topic TEXT,
          content TEXT NOT NULL,
          pedagogical_strategy TEXT,
          special_needs BOOLEAN DEFAULT FALSE,
          special_needs_details TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `)
      console.log("Created lesson_plans table")
    }

    return true
  } catch (error) {
    console.error("Error ensuring tables exist:", error)
    return false
  }
}

// Helper function to ensure schedules table exists
export async function ensureSchedulesTableExists() {
  try {
    // Check if the schedules table exists
    const tableExists = sql(`
      SELECT name FROM sqlite_master 
      WHERE type='table' AND name='schedules'
    `)

    // If the table doesn't exist, create it
    if (tableExists.length === 0) {
      sql(`
        CREATE TABLE schedules (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          user_id TEXT NOT NULL,
          class_name TEXT NOT NULL,
          subject TEXT NOT NULL,
          day_of_week INTEGER NOT NULL,
          start_time TIME NOT NULL,
          end_time TIME NOT NULL,
          room_number TEXT,
          notes TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `)
      console.log("Created schedules table")
    }

    return true
  } catch (error) {
    console.error("Error ensuring schedules table exists:", error)
    return false
  }
}

// Helper function to ensure users table exists
export async function ensureUsersTableExists() {
  try {
    // Check if the users table exists
    const tableExists = sql(`
      SELECT name FROM sqlite_master 
      WHERE type='table' AND name='users'
    `)

    // If the table doesn't exist, create it
    if (tableExists.length === 0) {
      sql(`
        CREATE TABLE users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          email TEXT UNIQUE NOT NULL,
          password_hash TEXT NOT NULL,
          role TEXT NOT NULL,
          image TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `)
      console.log("Created users table")
    }

    return true
  } catch (error) {
    console.error("Error ensuring users table exists:", error)
    return false
  }
}

// Helper function to create admin user if not exists
export async function ensureAdminUserExists() {
  try {
    await ensureUsersTableExists()
    
    const adminEmail = 'royston.emmanuel@oecs.int'
    const existingAdmin = sql(`
      SELECT id FROM users WHERE email = ?
    `, [adminEmail])

    if (existingAdmin.length === 0) {
      const hashedPassword = crypto.createHash('sha256').update('admin123').digest('hex')
      sql(`
        INSERT INTO users (name, email, password_hash, role)
        VALUES (?, ?, ?, ?)
      `, ['Royston Emmanuel', adminEmail, hashedPassword, 'admin'])
      console.log('Admin user created successfully')
    }
  } catch (error) {
    console.error('Error ensuring admin user exists:', error)
  }
}