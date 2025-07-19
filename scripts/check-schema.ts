import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as path from 'path';

// Initialize the database
const sqlite = new Database(path.join(__dirname, '../data/sqlite.db'));
const db = drizzle(sqlite);

// Check if the table exists
const tableExists = sqlite.prepare(`
  SELECT name FROM sqlite_master 
  WHERE type='table' AND name='cross_curricular_plans'
`).get();

console.log('Table exists:', !!tableExists);

// Get table schema
const schema = sqlite.prepare(`
  SELECT sql FROM sqlite_master 
  WHERE type='table' AND name='cross_curricular_plans'
`).get();

console.log('Table schema:', schema);

// Close the database connection
sqlite.close(); 