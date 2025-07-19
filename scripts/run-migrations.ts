import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import * as path from 'path';

// Initialize the database
const sqlite = new Database(path.join(__dirname, '../data/sqlite.db'));
const db = drizzle(sqlite);

// Run migrations
console.log('Running migrations...');
migrate(db, { migrationsFolder: path.join(__dirname, '../drizzle') });
console.log('Migrations completed successfully!');

// Close the database connection
sqlite.close(); 