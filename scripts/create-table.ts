import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as path from 'path';

// Initialize the database
const sqlite = new Database(path.join(__dirname, '../data/sqlite.db'));

// Create the table
const createTableSQL = `
CREATE TABLE IF NOT EXISTS cross_curricular_plans (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  theme TEXT NOT NULL,
  grade_range TEXT NOT NULL,
  subjects TEXT NOT NULL,
  duration TEXT NOT NULL,
  sessions TEXT NOT NULL DEFAULT '1',
  content TEXT NOT NULL,
  learning_styles TEXT,
  multiple_intelligences TEXT,
  special_needs INTEGER DEFAULT 0,
  special_needs_details TEXT,
  ell_support INTEGER DEFAULT 0,
  gifted_extension INTEGER DEFAULT 0,
  pedagogical_strategy TEXT,
  assessment_strategy TEXT,
  technology_integration INTEGER DEFAULT 0,
  additional_instructions TEXT,
  user_id TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
`;

try {
  sqlite.exec(createTableSQL);
  console.log('Table created successfully');
} catch (error) {
  console.error('Error creating table:', error);
}

// Close the database connection
sqlite.close(); 