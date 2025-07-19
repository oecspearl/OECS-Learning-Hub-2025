import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import * as path from 'path';
import * as fs from 'fs';

// Ensure the database directory exists
const dbDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

// Initialize the database
const dbPath = path.join(dbDir, 'sqlite.db');
console.log('Initializing database at:', dbPath);

// Create the database file if it doesn't exist
if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, '');
}

const sqlite = new Database(dbPath);
const db = drizzle(sqlite);

// Run migrations
console.log('Running migrations...');
try {
  // Drop all existing tables to avoid conflicts
  const tables = sqlite.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%';").all() as { name: string }[];
  for (const table of tables) {
    sqlite.prepare(`DROP TABLE IF EXISTS ${table.name};`).run();
  }
  migrate(db, { migrationsFolder: path.join(process.cwd(), 'drizzle') });
  console.log('Migrations completed successfully!');
} catch (error) {
  console.error('Error running migrations:', error);
  process.exit(1);
}

// Close the database connection
sqlite.close(); 