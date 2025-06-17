import Database from "better-sqlite3";
import { join } from "path";

const dbPath = join(process.cwd(), "favorites.db");
// Returnerer Current Working Directory = den mappe, hvor Node.js blev startet.
const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS favorites (
    id INTEGER PRIMARY KEY,
    title TEXT,
    overview TEXT,
    poster_path TEXT,
    vote_average REAL,
    release_date TEXT
  )
`);

export default db;
